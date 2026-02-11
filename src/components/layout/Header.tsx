"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Scale } from "lucide-react";

export function SiteHeader() {
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith("/en");

  return (
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

        {isEnglish ? (
          // Navigation minimale en anglais : uniquement FR / EN
          <div className="flex items-center text-[10px] font-normal text-slate-500">
            <Link href="/" className="transition-colors hover:text-slate-950">
              FR
            </Link>
            <span className="mx-1 text-slate-400">|</span>
            <span className="cursor-default text-slate-900">EN</span>
          </div>
        ) : (
          // Navigation complète côté FR
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
        )}
      </nav>
    </header>
  );
}
