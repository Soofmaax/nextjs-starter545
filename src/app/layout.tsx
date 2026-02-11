import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { getSiteSettings, DEFAULT_SITE_SETTINGS } from "../lib/sanity.client";
import { SiteHeader } from "../components/layout/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Temple Boyer Legal",
    template: "%s | Temple Boyer Legal",
  },
  description:
    "Cabinet d'avocat d'affaires international – conseil et contentieux, Paris.",
  openGraph: {
    title: "Temple Boyer Legal",
    description:
      "Cabinet d'avocat d'affaires international – conseil et contentieux, Paris.",
    url: "/",
    siteName: "Temple Boyer Legal",
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "/",
    languages: {
      fr: "/",
      "fr-FR": "/",
      en: "/en",
      "en-US": "/en",
    },
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteSettings = (await getSiteSettings()) ?? DEFAULT_SITE_SETTINGS;

  const brandTitle = siteSettings.brandTitle ?? DEFAULT_SITE_SETTINGS.brandTitle;
  const brandSubtitle =
    siteSettings.brandSubtitle ?? DEFAULT_SITE_SETTINGS.brandSubtitle;
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
        <a
          href="#contenu-principal"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-4 focus:rounded focus:bg-slate-900 focus:px-3 focus:py-2 focus:text-[11px] focus:text-slate-50"
        >
          Aller au contenu principal
        </a>
        <div className="flex min-h-screen flex-col" id="contenu-principal">
          <SiteHeader brandTitle={brandTitle} brandSubtitle={brandSubtitle} />

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
