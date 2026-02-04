import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, phone, email, message, contact } = body;

    await resend.emails.send({
      from: "Contatti <onboarding@resend.dev>",
      to: ["mayzamrodrigues@gmail.com"],
      subject: "Nuovo messaggio di contatto",
      html: `
        <h2>Nuovo contatto</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email || "-"}</p>
        <p><strong>Telefono:</strong> ${phone || "-"}</p>
        <p><strong>Preferenza di contatto:</strong> ${contact}</p>

        <hr />

        <p><strong>Messaggio:</strong></p>
        <p>${message || "-"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Errore contatti:", error);
    return new NextResponse("Errore invio", { status: 500 });
  }
}
