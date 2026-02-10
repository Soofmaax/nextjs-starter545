import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Temple Boyer Legal – Cabinet d'avocat d'affaires international à Paris",
  description:
    "Temple Boyer Legal accompagne les groupes français et internationaux, ETI, investisseurs et dirigeants dans la structuration, la négociation et le suivi de leurs opérations stratégiques, ainsi que dans la gestion de leurs différends à forts enjeux.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Temple Boyer Legal – Cabinet d'avocat d'affaires international à Paris",
    description:
      "Temple Boyer Legal accompagne les groupes français et internationaux, ETI, investisseurs et dirigeants dans la structuration, la négociation et le suivi de leurs opérations stratégiques, ainsi que dans la gestion de leurs différends à forts enjeux.",
    url: "/",
    siteName: "Temple Boyer Legal",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Temple Boyer Legal – Cabinet d'avocat d'affaires international à Paris",
    description:
      "Temple Boyer Legal accompagne les groupes français et internationaux, ETI, investisseurs et dirigeants dans la structuration, la négociation et le suivi de leurs opérations stratégiques, ainsi que dans la gestion de leurs différends à forts enjeux.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
