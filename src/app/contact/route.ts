import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const formData = await request.formData();

  const nom = (formData.get("nom") ?? "").toString().trim();
  const email = (formData.get("email") ?? "").toString().trim();
  const telephone = (formData.get("telephone") ?? "").toString().trim();
  const objet = (formData.get("objet") ?? "").toString().trim();
  const message = (formData.get("message") ?? "").toString().trim();

  if (!nom || !email) {
    const url = new URL("/contact?error=validation", request.url);
    return NextResponse.redirect(url);
  }

  const host = process.env.EMAIL_HOST;
  const port = process.env.EMAIL_PORT ? Number(process.env.EMAIL_PORT) : 587;
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const from =
    process.env.EMAIL_FROM || (user ? `"Site Temple Boyer Legal" <${user}>` : email);
  const to = process.env.EMAIL_TO || process.env.NEXT_PUBLIC_CONTACT_EMAIL || email;

  if (!host || !user || !pass) {
    const url = new URL("/contact?error=configuration", request.url);
    return NextResponse.redirect(url);
  }

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const subject = objet
      ? `[Contact site] ${objet}`
      : "[Contact site] Nouveau message";

    const textBody = [
      `Nom : ${nom}`,
      `Email : ${email}`,
      `Téléphone : ${telephone || "-"}`,
      "",
      "Message :",
      message || "(aucun message saisi)",
    ].join("\n");

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject,
      text: textBody,
    });

    const url = new URL("/contact?sent=1", request.url);
    return NextResponse.redirect(url);
  } catch {
    const url = new URL("/contact?error=envoi", request.url);
    return NextResponse.redirect(url);
  }
}
