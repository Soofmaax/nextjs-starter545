"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Scale } from "lucide-react";
import { useState } from "react";

export function SiteHeader() {
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith("/en");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-2 sm:px-6 sm:py-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-300 bg-white shadow-sm">
              <span className="text-xs font-semibold leading-tight text-slate-900">
                TBL
              </span>
            </div>
            <Scale className="h-4 w-4 text-slate-500" aria-hidden="true" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-900">
              Temple Boyer Legal
            </span>
          </div>
        </div>

        {isEnglish ? (
          // Navigation minimale en anglais : uniquement FR / EN
          <div className="flex items-center gap-1 text-[10px] font-normal text-slate-500">
            <Link href="/" className="transition-colors hover:text-slate-950">
              FR
            </Link>
            <span className="mx-1 text-slate-400">|</span>
            <span className="cursor-default text-slate-900">EN</span>
          </div>
        ) : (
          // Navigation complète côté FR
          <>
            {/* Desktop navigation */}
            <div className="hidden items-center gap-4 text-[11px] font-medium sm:flex">
              <div className="flex items-center gap-4 text-slate-600">
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
                <Link
                  href="/en"
                  className="transition-colors hover:text-slate-950"
                >
                  EN
                </Link>
              </div>
            </div>

            {/* Mobile hamburger */}
            <div className="flex items-center gap-2 sm:hidden">
              <div className="flex items-center text-[10px] font-normal text-slate-500">
                <span className="cursor-default text-slate-900">FR</span>
                <span className="mx-1 text-slate-400">|</span>
                <Link
                  href="/en"
                  className="transition-colors hover:text-slate-950"
                >
                  EN
                </Link>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen((open) => !open)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-300 bg-white text-slate-700 shadow-sm transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-1"
                aria-label="Ouvrir le menu de navigation"
                aria-expanded={isOpen}
              >
                <span className="relative block h-3 w-4">
                  <span
                    className={`absolute left-0 h-0.5 w-full rounded bg-slate-800 transition-transform duration-150 ${
                      isOpen ? "top-1.5 rotate-45" : "top-0 rotate-0"
                    }`}
                  />
                  <span
                    className={`absolute left-0 h-0.5 w-full rounded bg-slate-800 transition-all duration-150 ${
                      isOpen ? "opacity-0" : "top-1.5 opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute left-0 h-0.5 w-full rounded bg-slate-800 transition-transform duration-150 ${
                      isOpen ? "top-1.5 -rotate-45" : "top-3 rotate-0"
                    }`}
                  />
                </span>
              </button>
            </div>
          </>
        )}
      </nav>

      {/* Mobile slide-down menu */}
      {!isEnglish && (
        <div
          className={`border-b border-slate-200/80 bg-white/95 px-4 pb-2 pt-1 shadow-sm transition-[max-height,opacity] duration-200 sm:hidden ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="flex flex-col gap-2 text-[13px] font-medium text-slate-700">
            <Link
              href="/"
              className="py-1 transition-colors hover:text-slate-950"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href="/cabinet"
              className="py-1 transition-colors hover:text-slate-950"
              onClick={() => setIsOpen(false)}
            >
              Le Cabinet
            </Link>
            <Link
              href="/competences"
              className="py-1 transition-colors hover:text-slate-950"
              onClick={() => setIsOpen(false)}
            >
              Compétences
            </Link>
            <Link
              href="/honoraires"
              className="py-1 transition-colors hover:text-slate-950"
              onClick={() => setIsOpen(false)}
            >
              Honoraires
            </Link>
            <Link
              href="/blog"
              className="py-1 transition-colors hover:text-slate-950"
              onClick={() => setIsOpen(false)}
            >
              Publications / Actualités
            </Link>
            <Link
              href="/contact"
              className="py-1 transition-colors hover:text-slate-950"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
