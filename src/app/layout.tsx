import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { Scale } from "lucide-react";
import { getSiteSettings, DEFAULT_SITE_SETTINGS } from "../lib/sanity.client";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Temple Boyer Legal",
  description:
    "Cabinet d'avocat d'affaires international – conseil et contentieux, Paris.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteSettings = (await getSiteSettings()) ?? DEFAULT_SITE_SETTINGS;

  const contactEmail = siteSettings.contactEmail ?? DEFAULT_SITE_SETTINGS.contactEmail;
  const address = siteSettings.address ?? DEFAULT_SITE_SETTINGS.address;

  const addressParts = address.split(",").map((part) => part.trim());
  const isDefaultAddress = address === DEFAULT_SITE_SETTINGS.address;
  const addressLine1 = isDefaultAddress
    ? "10, avenue de Wagram"
    : addressParts[0] || "10, avenue de Wagram";
  const addressLine2 = addressParts[1] || "75008 Paris";

  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900`}
      >
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/90 backdrop-blur-md">
            <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-300 bg-white shadow-sm">
                    <span className="text-xs font-semibold leading-tight text-slate-900">
                      TBL
                    </span>
                  </div>
                  <Scale className="h-4 w-4 text-slate-500" aria-hidden="true" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-900">
                    Temple Boyer Legal
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Cabinet d&apos;avocat d&apos;affaires international
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-[11px] font-medium">
                <div className="flex flex-wrap items-center gap-4 text-slate-600">
                  <Link href="/" className="transition-colors hover:text-slate-950">
                    Accueil
                  </Link>
                  <Link
                    href="/cabinet"
                    className="transition-colors hover:text-slate-950"
                  >
                    Le Cabinet
                  </Link>
                  <Link
                    href="/competences"
                    className="transition-colors hover:text-slate-950"
                  >
                    Compétences
                  </Link>
                  <Link
                    href="/honoraires"
                    className="transition-colors hover:text-slate-950"
                  >
                    Honoraires
                  </Link>
                  <Link
                    href="/blog"
                    className="transition-colors hover:text-slate-950"
                  >
                    Publications / Actualités
                  </Link>
                  <Link
                    href="/contact"
                    className="transition-colors hover:text-slate-950"
                  >
                    Contact
                  </Link>
                </div>
                <div className="flex items-center text-[10px] font-normal text-slate-500">
                  <span className="cursor-default text-slate-900">FR</span>
                  <span className="mx-1 text-slate-400">|</span>
                  <Link href="/en" className="transition-colors hover:text-slate-950">
                    EN
                  </Link>
                </div>
              </div>
            </nav>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-slate-200 bg-white/95 py-8 text-[11px] text-slate-500">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <p className="font-medium text-slate-900">
                  Maître Sarah Temple-Boyer – Avocat d&apos;affaires international
                </p>
                <p className="text-slate-600">
                  Cabinet Temple Boyer Legal – {addressLine1} – {addressLine2}
                </p>
                <p>
                  Email :
                  <a
                    href={`mailto:${contactEmail}`}
                    className="ml-1 text-slate-900 underline-offset-4 hover:underline"
                  >
                    {contactEmail}
                  </a>
                </p>
              </div>

              <div className="space-y-1 text-[10px] text-slate-500">
                <p>
                  © 2015 – {new Date().getFullYear()} Sarah Temple-Boyer. Tous droits réservés.
                </p>
                <p className="flex flex-wrap gap-2">
                  <Link
                    href="/mentions-legales"
                    className="text-slate-500 underline-offset-4 hover:text-slate-900 hover:underline"
                  >
                    Mentions légales
                  </Link>
                  <span className="text-slate-400">·</span>
                  <Link
                    href="/confidentialite"
                    className="text-slate-500 underline-offset-4 hover:text-slate-900 hover:underline"
                  >
                    Confidentialité
                  </Link>
                  <span className="text-slate-400">·</span>
                  <Link
                    href="/studio"
                    className="text-slate-500 underline-offset-4 hover:text-slate-900 hover:underline"
                  >
                    Accès administrateur
                  </Link>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
