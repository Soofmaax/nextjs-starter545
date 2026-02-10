import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type RateLimitEntry = {
  count: number;
  windowStart: number;
};

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitMap = new Map<string, RateLimitEntry>();

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const formData = await request.formData();

  const nom = (formData.get("nom") ?? "").toString().trim();
  const email = (formData.get("email") ?? "").toString().trim();
  const telephone = (formData.get("telephone") ?? "").toString().trim();
  const objet = (formData.get("objet") ?? "").toString().trim();
  const message = (formData.get("message") ?? "").toString().trim();
  const website = (formData.get("website") ?? "").toString().trim();

  if (website) {
    const url = new URL("/contact?sent=1", request.url);
    return NextResponse.redirect(url);
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, windowStart: now });
  } else {
    if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
      const url = new URL("/contact?error=rate", request.url);
      return NextResponse.redirect(url);
    }

    entry.count += 1;
    rateLimitMap.set(ip, entry);
  }

  if (
    !nom ||
    nom.length > 200 ||
    !email ||
    !EMAIL_REGEX.test(email) ||
    message.length > 5000
  ) {
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
  } catch (error) {
    console.error("[contact] error sending email", error);
    const url = new URL("/contact?error=envoi", request.url);
    return NextResponse.redirect(url);
  }
}
