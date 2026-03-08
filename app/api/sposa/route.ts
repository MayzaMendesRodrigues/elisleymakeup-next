import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const CONTACT_OPTIONS = new Set(["WhatsApp", "Email", "Chiamata"]);

function sanitizeText(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isValidEmail(value: string) {
  return EMAIL_REGEX.test(value);
}

function isValidPhone(value: string) {
  const cleaned = value.replace(/\D/g, "");
  return cleaned.length >= 8 && cleaned.length <= 15;
}

function isFutureDate(value: string) {
  if (!value) return false;
  const selected = new Date(value);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Number.isFinite(selected.getTime()) && selected > today;
}

function isValidTime(value: string) {
  if (!value) return true;
  return /^([01]\d|2[0-3]):([0-5]\d)$/.test(value);
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return new NextResponse("Resend API key not configured", { status: 500 });
    }

    const body = await req.json();
    const name = sanitizeText(body?.name, 120);
    const phone = sanitizeText(body?.phone, 30);
    const email = sanitizeText(body?.email, 160);
    const date = sanitizeText(body?.date, 20);
    const time = sanitizeText(body?.time, 20);
    const location = sanitizeText(body?.location, 200);
    const weddingPlanner = sanitizeText(body?.weddingPlanner, 120);
    const photographer = sanitizeText(body?.photographer, 120);
    const message = sanitizeText(body?.message, 2500);
    const contact = sanitizeText(body?.contact, 40);
    const privacy = body?.privacy === true;

    if (!privacy) {
      return new NextResponse("Privacy not accepted", { status: 400 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!phone && !email) {
      return new NextResponse("Phone or email is required", { status: 400 });
    }

    if (email && !isValidEmail(email)) {
      return new NextResponse("Invalid email", { status: 400 });
    }

    if (phone && !isValidPhone(phone)) {
      return new NextResponse("Invalid phone", { status: 400 });
    }

    if (!date || !isFutureDate(date)) {
      return new NextResponse("Event date must be in the future", {
        status: 400,
      });
    }

    if (!contact || !CONTACT_OPTIONS.has(contact)) {
      return new NextResponse("Invalid contact preference", { status: 400 });
    }

    if (!isValidTime(time)) {
      return new NextResponse("Invalid event time", { status: 400 });
    }

    const resend = new Resend(apiKey);
    const toEmail = process.env.CONTACT_TO_EMAIL ?? "mayzamrodrigues@gmail.com";
    const result = await resend.emails.send({
      from: "Sposa <onboarding@resend.dev>",
      to: [toEmail],
      subject: "Nuova richiesta di contatto",
      html: `
        <h2>Nuovo contatto</h2>
        <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
        <p><strong>Contatto preferito:</strong> ${escapeHtml(contact)}</p>
        <p><strong>Telefono:</strong> ${phone ? escapeHtml(phone) : "Non fornito"}</p>
        <p><strong>Data dell'evento:</strong> ${escapeHtml(date)}</p>
        <p><strong>Orario del matrimonio:</strong> ${time ? escapeHtml(time) : "-"}</p>
        <p><strong>Luogo del matrimonio:</strong> ${location ? escapeHtml(location) : "-"}</p>
        <p><strong>Wedding Planner:</strong> ${weddingPlanner ? escapeHtml(weddingPlanner) : "-"}</p>
        <p><strong>Fotografo:</strong> ${photographer ? escapeHtml(photographer) : "-"}</p>
        <p><strong>Email:</strong> ${email ? escapeHtml(email) : "Non fornito"}</p>
        <p><strong>Privacy:</strong> ${privacy ? "Accettata" : "Non accettata"}</p>
        <p><strong>Messaggio:</strong></p>
        <p>${message ? escapeHtml(message) : "-"}</p>
      `,
    });

    if (result.error) {
      console.error("Resend error (sposa):", result.error);
      return new NextResponse("Errore invio email", { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro critico Api:", error);
    return new NextResponse("Errore invio email", { status: 500 });
  }
}
