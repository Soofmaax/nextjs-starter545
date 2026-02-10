import Link from "next/link";
import { BookOpenText, Globe2, Mail, Scale } from "lucide-react";
import type { Metadata } from "next";

const PRACTICE_AREAS = [
  "Contracts",
  "Disputes",
  "Corporate / Commercial",
  "Competition",
  "Distribution",
  "Consumer law",
  "Industrial / intellectual property",
  "New technologies",
  "International law",
  "Construction / engineering",
  "Employment law",
  "Sector-specific expertise",
];

export const metadata: Metadata = {
  title:
    "Temple Boyer Legal – International business law boutique dedicated to complex transactions and disputes",
  description:
    "Temple Boyer Legal advises French and international groups, mid-cap companies, investors and executives on their strategic projects and day-to-day operations. The firm combines transactional and dispute resolution capabilities to secure your business and manage sensitive situations in France and abroad.",
  alternates: {
    canonical: "/en",
    languages: {
      "fr-FR": "/",
      en: "/en",
    },
  },
};

export default function HomeEn() {
  return (
    <div className="app-shell">
      {/* Top navigation */}
      <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-700/80 bg-slate-900/80 shadow-sm shadow-black/50">
                <span className="text-xs font-semibold leading-tight text-slate-100">
                  TBL
                </span>
              </div>
              <Scale className="h-4 w-4 text-amber-500" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-200">
                Temple Boyer Legal
              </span>
              <span className="text-[11px] text-slate-400">
                Independent international business law boutique
              </span>
            </div>
          </div>

          <div className="hidden items-center gap-6 text-[11px] font-medium sm:flex">
            <div className="flex items-center gap-6 text-slate-300">
              <Link href="/en" className="transition-colors hover:text-slate-50">
                Home
              </Link>
              <a
                href="/en/cabinet"
                className="transition-colors hover:text-slate-50"
              >
                The Firm
              </a>
              <a
                href="/en/competences"
                className="transition-colors hover:text-slate-50"
              >
                Expertise
              </a>
              <a
                href="/en/honoraires"
                className="transition-colors hover:text-slate-50"
              >
                Fees
              </a>
              <a
                href="/en/blog"
                className="transition-colors hover:text-slate-50"
              >
                Insights
              </a>
              <a
                href="/en/contact"
                className="transition-colors hover:text-slate-50"
              >
                Contact
              </a>
            </div>
            <div className="flex items-center text-[10px] font-normal text-slate-400">
              <Link href="/" className="transition-colors hover:text-slate-50">
                FR
              </Link>
              <span className="mx-1 text-slate-600">|</span>
              <span className="cursor-default text-slate-100">EN</span>
            </div>
          </div>
        </nav>
      </header>

      <main className="app-main">
        {/* Hero section */}
        <section
          id="cabinet"
          className="app-panel grid gap-12 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] md:items-center"
        >
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-50/80 px-3 py-1 text-[11px] text-amber-900">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-amber-500" />
              <span>Business law - Advisory &amp; Disputes</span>
            </div>

            <div className="space-y-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-slate-500">
                Temple Boyer Legal - Paris
              </p>
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
                Independent international business law boutique dedicated to
                complex transactions and disputes
              </h1>
              <p className="max-w-xl text-sm text-slate-700">
                Temple Boyer Legal advises French and international groups,
                mid-cap companies, investors and executives on their strategic
                projects and day-to-day operations. The firm combines
                transactional and dispute resolution capabilities to secure
                your business and manage sensitive situations in France and
                abroad.
              </p>
            </div>

            <div className="mt-4 grid gap-3 text-[11px] sm:grid-cols-3">
              <div className="flex items-start gap-2 rounded-2xl border border-slate-200 bg-white/80 px-3 py-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500" />
                <p className="leading-snug text-slate-800">
                  Cross-border contracts &amp; transactions
                </p>
              </div>
              <div className="flex items-start gap-2 rounded-2xl border border-slate-200 bg-white/80 px-3 py-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500" />
                <p className="leading-snug text-slate-800">
                  Strategic disputes &amp; pre-litigation
                </p>
              </div>
              <div className="flex items-start gap-2 rounded-2xl border border-slate-200 bg-white/80 px-3 py-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500" />
                <p className="leading-snug text-slate-800">
                  Long-term support for in-house teams
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-[11px]">
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-slate-700">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                <span>Paris Bar</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-slate-700">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                <span>Advisory &amp; disputes</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-slate-700">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                <span>France &amp; international</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-xs">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-amber-500 px-5 py-2 text-[11px] font-semibold text-slate-950 shadow-[0_18px_45px_rgba(180,83,9,0.45)] transition-colors hover:bg-amber-500/90"
              >
                Contact the firm
              </a>
              <a
                href="#competences"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-transparent px-5 py-2 text-[11px] font-medium text-slate-900 transition-colors hover:bg-slate-100"
              >
                Discover our areas of practice
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex max-w-xs flex-col items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50/90 p-6 text-center shadow-[0_18px_60px_rgba(15,23,42,0.18)]">
            <div className="relative mt-2 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-slate-300 bg-slate-100">
              <span className="text-[11px] font-semibold text-slate-600">
                Photo
                <br />
                Sarah Temple-Boyer
              </span>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-semibold tracking-tight text-slate-900">
                Sarah Temple-Boyer
              </p>
              <p className="text-[11px] text-slate-600">
                International business lawyer - Paris
              </p>
            </div>
            <div className="mt-2 space-y-1 text-[11px] text-slate-600">
              <p>10, avenue de Wagram</p>
              <p>75008 Paris</p>
              <p>
                <a
                  href="mailto:contact@templeboyer-legal.com"
                  className="text-amber-700 underline-offset-4 hover:underline"
                >
                  contact@templeboyer-legal.com
                </a>
              </p>
            </div>
            <div className="mt-4 flex w-full flex-col gap-2 text-[11px]">
              <button className="rounded-full border border-slate-900 bg-slate-900 px-4 py-2 font-medium text-slate-50 transition-colors hover:bg-slate-800">
                Schedule a meeting
              </button>
              <button className="rounded-full border border-slate-300 bg-transparent px-4 py-2 font-medium text-slate-900 transition-colors hover:bg-slate-100">
                Save to contacts
              </button>
            </div>
          </div>
        </section>

        <section className="app-panel space-y-8" id="services">
          <div className="app-section-heading">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
                What we do for you
              </h2>
              <p className="max-w-2xl text-xs text-slate-600">
                We support general counsel, executive teams and financial
                management in structuring projects, managing legal risks and
                resolving disputes that can materially impact the business, in
                France and internationally.
              </p>
            </div>
            <p className="app-section-label">
              Executives &amp; in-house legal teams
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/90 p-5 text-xs text-slate-800">
              <h3 className="text-sm font-semibold text-slate-900">
                Securing your transactions
              </h3>
              <p className="leading-relaxed text-slate-700">
                Drafting and negotiating commercial contracts, assessing legal
                risks and structuring partnerships and strategic deals so that
                your transactions are clear, enforceable and aligned with your
                risk appetite.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/90 p-5 text-xs text-slate-800">
              <h3 className="text-sm font-semibold text-slate-900">
                Managing high-stakes disputes
              </h3>
              <p className="leading-relaxed text-slate-700">
                Designing dispute strategies, assisting with pre-litigation
                discussions and representing you before state courts and
                arbitral tribunals in complex domestic and cross-border
                disputes.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/90 p-5 text-xs text-slate-800">
              <h3 className="text-sm font-semibold text-slate-900">
                Standing by your side over time
              </h3>
              <p className="leading-relaxed text-slate-700">
                Acting as an external general counsel for management and
                in-house teams, following your matters over the long term and
                implementing pragmatic tools and reflexes tailored to your
                organisation.
              </p>
            </div>
          </div>
        </section>

        {/* Practice areas */}
        <section id="competences" className="app-panel space-y-8">
          <div className="app-section-heading">
            <div>
              <h2 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
                Areas of practice
              </h2>
              <p className="max-w-2xl text-xs text-slate-600">
                The firm acts in advisory and dispute resolution matters across
                the full spectrum of business law issues, with a strong
                international dimension.
              </p>
            </div>
            <p className="app-section-label">
              Advisory &amp; Disputes
            </p>
          </div>

          <div className="grid gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4 sm:grid-cols-2 md:grid-cols-3">
            {PRACTICE_AREAS.map((area) => (
              <div
                key={area}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-3 text-xs text-slate-800"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/10 text-[10px] text-amber-700">
                  •
                </span>
                <span>{area}</span>
              </div>
            ))}
          </div>
        </section>

        {/* About / values */}
        <section className="app-panel grid gap-10 md:grid-cols-2" id="about">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
              Firm profile &amp; values
            </h2>
            <p className="text-xs leading-relaxed text-slate-700">
              At Temple Boyer Legal, an international business law boutique, we
              believe that a lawyer must combine the profession&apos;s traditional
              values - listening, empathy, availability, responsiveness and
              integrity - with qualities that are now essential: creativity,
              adaptability and pragmatism.
            </p>
            <p className="text-xs leading-relaxed text-slate-700">
              Convinced that the law should not be a factor of inertia but a
              genuine driver of growth, the firm positions itself as both a
              business partner and an external in-house counsel, serving
              operational teams and business priorities.
            </p>
            <p className="text-xs leading-relaxed text-slate-700">
              Combining a broad European legal culture with specialist
              expertise, we address your business law needs, including the most
              complex and international matters.
            </p>
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white/90 px-5 py-6 text-xs text-slate-800">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              A modern view of the profession
            </p>
            <p className="leading-relaxed">
              The firm acts in both advisory and contentious work, in France
              and abroad, relying on a carefully selected network of
              correspondents. Each matter is handled with a tailored approach
              and direct involvement from Sarah Temple-Boyer.
            </p>
            <p className="leading-relaxed">
              Our priority is to deliver robust yet practical legal solutions,
              aligned with your economic constraints and organisational
              reality.
            </p>
          </div>
        </section>

        {/* Blog / news */}
        <section id="blog" className="app-panel space-y-6">
          <div className="app-section-heading">
            <div>
              <h2 className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
                <BookOpenText className="h-4 w-4 text-amber-600" aria-hidden="true" />
                <span>Insights &amp; updates</span>
              </h2>
              <p className="text-xs text-slate-600">
                You will soon find a selection of commentary and analysis on
                developments in business law and practice.
              </p>
            </div>
            <button className="self-start rounded-full border border-slate-300 bg-transparent px-4 py-1.5 text-[11px] font-medium text-slate-900 transition-colors hover:bg-slate-100">
              Subscribe to RSS feed
            </button>
          </div>

          <div className="rounded-2xl border border-dashed border-slate-300 bg-white/80 px-5 py-8 text-center text-xs text-slate-500">
            No publication is available yet. The firm&apos;s insights and updates
            will be published shortly.
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="app-panel grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]"
        >
          <div className="space-y-4">
            <h2 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
              Contact us
            </h2>
            <p className="text-xs text-slate-600">
              For any enquiry, meeting request or fee quote, you can contact us
              by email or through your usual contact within the firm.
            </p>

            <div className="space-y-2 text-xs text-slate-700">
              <p className="font-semibold">Temple Boyer Legal</p>
              <p className="flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-slate-500" aria-hidden="true" />
                <span>10, avenue de Wagram</span>
              </p>
              <p>75008 Paris</p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-slate-500" aria-hidden="true" />
                <span>
                  Email:
                  <a
                    href="mailto:contact@templeboyer-legal.com"
                    className="ml-1 text-amber-700 underline-offset-4 hover:underline"
                  >
                    contact@templeboyer-legal.com
                  </a>
                </span>
              </p>
            </div>
          </div>

          <form className="space-y-3 text-xs">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-[11px] text-slate-700">
                  Name / Company
                </label>
                <input
                  id="name"
                  name="name"
                  className="w-full rounded-xl border border-slate-300 bg-white/90 px-3 py-2 text-xs text-slate-900 outline-none ring-amber-500/20 placeholder:text-slate-400 focus:border-amber-500 focus:ring-2"
                  placeholder="Your name or company"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-[11px] text-slate-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-xl border border-slate-300 bg-white/90 px-3 py-2 text-xs text-slate-900 outline-none ring-amber-500/20 placeholder:text-slate-400 focus:border-amber-500 focus:ring-2"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label htmlFor="subject" className="text-[11px] text-slate-700">
                Subject of your enquiry
              </label>
              <input
                id="subject"
                name="subject"
                className="w-full rounded-xl border border-slate-300 bg-white/90 px-3 py-2 text-xs text-slate-900 outline-none ring-amber-500/20 placeholder:text-slate-400 focus:border-amber-500 focus:ring-2"
                placeholder="Advisory, dispute, contract..."
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-[11px] text-slate-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-xl border border-slate-300 bg-white/90 px-3 py-2 text-xs text-slate-900 outline-none ring-amber-500/20 placeholder:text-slate-400 focus:border-amber-500 focus:ring-2"
                placeholder="Briefly describe your matter"
              />
            </div>
            <p className="text-[10px] text-slate-500">
              This form is provided for illustration purposes only. No actual
              message is sent from this demo.
            </p>
            <button
              type="button"
              className="mt-1 inline-flex items-center justify-center rounded-full bg-amber-500 px-5 py-2 text-[11px] font-semibold text-slate-950 shadow-[0_18px_45px_rgba(180,83,9,0.45)] transition-colors hover:bg-amber-500/90"
            >
              Send enquiry (demo)
            </button>
          </form>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950/95 py-8 text-[11px] text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="font-medium text-slate-200">
              Sarah Temple-Boyer - International business lawyer
            </p>
            <p className="text-slate-400">
              Temple Boyer Legal - 10, avenue de Wagram - 75008 Paris
            </p>
            <p>
              Email:
              <a
                href="mailto:contact@templeboyer-legal.com"
                className="ml-1 text-amber-600 underline-offset-4 hover:underline"
              >
                contact@templeboyer-legal.com
              </a>
            </p>
          </div>

          <div className="space-y-1 text-[10px] text-slate-500">
            <p>
              (c) 2015 - {new Date().getFullYear()} Sarah Temple-Boyer. All
              rights reserved.
            </p>
            <p className="flex flex-wrap gap-2">
              <Link
                href="/mentions-legales"
                className="text-slate-400 underline-offset-4 hover:text-slate-200 hover:underline"
              >
                Legal notice
              </Link>
              <span className="text-slate-600">•</span>
              <Link
                href="/confidentialite"
                className="text-slate-400 underline-offset-4 hover:text-slate-200 hover:underline"
              >
                Privacy
              </Link>
              <span className="text-slate-600">•</span>
              <button className="text-slate-400 underline-offset-4 hover:text-slate-200 hover:underline">
                Admin access
              </button>
            </p>
            <p className="text-[9px] text-slate-600">
              Design and integration: custom Next.js mock-up.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
