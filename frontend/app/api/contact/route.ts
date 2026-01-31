import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY is not defined");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Request Body:", body);
    const {
      name,
      phone,
      email,
      date,
      time,
      location,
      weddingPlanner,
      photographer,
      message,
      contact,
      privacy,
    } = body;

    // if (!privacy) {
    //   return new NextResponse("Privacy not accepted", { status: 400 });
    // }

    if (!process.env.RESEND_API_KEY) {
      return new NextResponse("Resend API key not configured", { status: 500 });
    }

    await resend.emails.send({
      from: "<bounced@resend.dev>",
      to: ["mayzamrodrigues@gmail.com"],
      subject: "Nuova richiesta di contatto",
      html: `
        <h2>Nuovo contatto</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Contatto preferito:</strong> ${phone}</p>
        <p><strong>Data dell'evento:</strong> ${date}</p>
        <p><strong>Preferência de Contato:</strong> ${contact}</p> <hr />
        <p><strong>Orario del matrimonio:</strong> ${time}</p>
        <p><strong>Luogo del matrimonio:</strong> ${location}</p>
        <p><strong>Wedding Planner:</strong> ${weddingPlanner}</p>
        <p><strong>Fotografo:</strong> ${photographer}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Privacy:</strong> ${privacy ? "Accettata" : "Non accettata"}</p>
        <p><strong>Messaggio:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro critico Api:", error);
    return new NextResponse("Errore invio email", { status: 500 });
  }
}
