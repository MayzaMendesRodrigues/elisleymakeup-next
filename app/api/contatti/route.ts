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
    const message = sanitizeText(body?.message, 2000);
    const contact = sanitizeText(body?.contact, 40);

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!contact || !CONTACT_OPTIONS.has(contact)) {
      return new NextResponse("Invalid contact preference", { status: 400 });
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

    const resend = new Resend(apiKey);
    const toEmail = process.env.CONTACT_TO_EMAIL ?? "mayzamrodrigues@gmail.com";

    const result = await resend.emails.send({
      from: "Contatti <onboarding@resend.dev>",
      to: [toEmail],
      subject: "Nuovo messaggio di contatto",
      html: `
        <h2>Nuovo contatto</h2>
        <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${email ? escapeHtml(email) : "-"}</p>
        <p><strong>Telefono:</strong> ${phone ? escapeHtml(phone) : "-"}</p>
        <p><strong>Preferenza di contatto:</strong> ${escapeHtml(contact)}</p>

        <hr />

        <p><strong>Messaggio:</strong></p>
        <p>${message ? escapeHtml(message) : "-"}</p>
      `,
    });

    if (result.error) {
      console.error("Resend error (contatti):", result.error);
      return new NextResponse("Errore invio", { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Errore contatti:", error);
    return new NextResponse("Errore invio", { status: 500 });
  }
}
