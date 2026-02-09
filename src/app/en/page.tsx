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

export default function HomeEn() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Top navigation */}
      <header className="sticky top-0 z-30 border-b border-white/5 bg-black/60 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-emerald-400 shadow-lg shadow-sky-500/40">
              <span className="text-xs font-semibold leading-tight text-slate-950">
                TBL
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
                Temple Boyer Legal
              </span>
              <span className="text-[11px] text-slate-300">
                Independent international business law boutique
              </span>
            </div>
          </div>

          <div className="hidden items-center gap-6 text-[11px] font-medium sm:flex">
            <div className="flex items-center gap-6 text-slate-300">
              <a href="/en" className="transition hover:text-white">
                Home
              </a>
              <a href="/en/cabinet" className="transition hover:text-white">
                The Firm
              </a>
              <a href="/en/competences" className="transition hover:text-white">
                Expertise
              </a>
              <a href="/en/honoraires" className="transition hover:text-white">
                Fees
              </a>
              <a href="/en/blog" className="transition hover:text-white">
                Insights
              </a>
              <a href="/en/contact" className="transition hover:text-white">
                Contact
              </a>
            </div>
            <div className="flex items-center text-[10px] font-normal text-slate-400">
              <a href="/" className="transition hover:text-white">
                FR
              </a>
              <span className="mx-1 text-slate-600">|</span>
              <span className="cursor-default text-slate-100">EN</span>
            </div>
          </div>
        </nav>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-24 pt-12">
        {/* Hero section */}
        <section
          id="cabinet"
          className="grid gap-12 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] md:items-center"
        >
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-[11px] text-sky-100 shadow-sm shadow-sky-500/30">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Business law - Advisory &amp; Disputes</span>
            </div>

            <div className="space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-300">
                Temple Boyer Legal - Paris
              </p>
              <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Independent international business law boutique dedicated to
                complex transactions and disputes
              </h1>
              <p className="max-w-xl text-sm text-slate-200">
                Temple Boyer Legal advises French and international groups,
                mid-cap companies, investors and executives on their strategic
                projects and day-to-day operations. The firm combines
                transactional and dispute resolution capabilities to secure
                your business and manage sensitive situations in France and
                abroad.
              </p>
            </div>

            <div className="mt-4 grid gap-3 text-[11px] sm:grid-cols-3">
              <div className="flex items-start gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <p className="leading-snug text-slate-100">
                  Cross-border contracts &amp; transactions
                </p>
              </div>
              <div className="flex items-start gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <p className="leading-snug text-slate-100">
                  Strategic disputes &amp; pre-litigation
                </p>
              </div>
              <div className="flex items-start gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-400" />
                <p className="leading-snug text-slate-100">
                  Long-term support for in-house teams
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-[11px]">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Paris Bar</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>Advisory &amp; disputes</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                <span>France &amp; international</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-xs">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2 text-[11px] font-semibold text-slate-950 shadow-lg shadow-sky-500/40 transition hover:bg-sky-400"
              >
                Contact the firm
              </a>
              <a
                href="#competences"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2 text-[11px] font-medium text-slate-100 transition hover:bg-white/10"
              >
                Discover our areas of practice
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex max-w-xs flex-col items-center gap-4 rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-950/80 p-6 text-center shadow-2xl shadow-sky-900/50">
            <div className="absolute inset-x-10 top-0 -z-10 h-40 rounded-full bg-sky-500/30 blur-3xl" />
            <div className="relative mt-2 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-sky-400/40 bg-slate-900/60">
              <span className="text-[11px] font-semibold text-slate-200">
                Photo
                <br />
                Sarah Temple-Boyer
              </span>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-semibold tracking-tight text-slate-50">
                Sarah Temple-Boyer
              </p>
              <p className="text-[11px] text-slate-300">
                International business lawyer - Paris
              </p>
            </div>
            <div className="mt-2 space-y-1 text-[11px] text-slate-300">
              <p>10, avenue de Wagram</p>
              <p>75008 Paris</p>
              <p>
                <a
                  href="mailto:contact@templeboyer-legal.com"
                  className="text-sky-300 underline-offset-4 hover:underline"
                >
                  contact@templeboyer-legal.com
                </a>
              </p>
            </div>
            <div className="mt-4 flex w-full flex-col gap-2 text-[11px]">
              <button className="rounded-full border border-sky-400/60 bg-sky-500/10 px-4 py-2 font-medium text-sky-100 transition hover:bg-sky-500/20">
                Schedule a meeting
              </button>
              <button className="rounded-full border border-white/15 bg-transparent px-4 py-2 font-medium text-slate-100 transition hover:bg-white/5">
                Save to contacts
              </button>
            </div>
          </div>
        </section>

        <section className="space-y-6" id="services">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
                What we do for you
              </h2>
              <p className="max-w-2xl text-xs text-slate-300">
                We support general counsel, executive teams and financial
                management in structuring projects, managing legal risks and
                resolving disputes that can materially impact the business, in
                France and internationally.
              </p>
            </div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
              Executives &amp; in-house legal teams
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-slate-950/80 p-4 text-xs text-slate-100">
              <h3 className="text-sm font-semibold text-slate-50">
                Securing your transactions
              </h3>
              <p className="leading-relaxed text-slate-300">
                Drafting and negotiating commercial contracts, assessing legal
                risks and structuring partnerships and strategic deals so that
                your transactions are clear, enforceable and aligned with your
                risk appetite.
              </p>
            </div>
            <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-slate-950/80 p-4 text-xs text-slate-100">
              <h3 className="text-sm font-semibold text-slate-50">
                Managing high-stakes disputes
              </h3>
              <p className="leading-relaxed text-slate-300">
                Designing dispute strategies, assisting with pre-litigation
                discussions and representing you before state courts and
                arbitral tribunals in complex domestic and cross-border
                disputes.
              </p>
            </div>
            <div className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-slate-950/80 p-4 text-xs text-slate-100">
              <h3 className="text-sm font-semibold text-slate-50">
                Standing by your side over time
              </h3>
              <p className="leading-relaxed text-slate-300">
                Acting as an external general counsel for management and
                in-house teams, following your matters over the long term and
                implementing pragmatic tools and reflexes tailored to your
                organisation.
              </p>
            </div>
          </div>
        </section>

        {/* Practice areas */}
        <section id="competences" className="space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
                Areas of practice
              </h2>
              <p className="max-w-2xl text-xs text-slate-300">
                The firm acts in advisory and dispute resolution matters across
                the full spectrum of business law issues, with a strong
                international dimension.
              </p>
            </div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
              Advisory &amp; Disputes
            </p>
          </div>

          <div className="grid gap-3 rounded-3xl border border-white/10 bg-slate-950/60 p-4 sm:grid-cols-2 md:grid-cols-3">
            {PRACTICE_AREAS.map((area) => (
              <div
                key={area}
                className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 px-3 py-3 text-xs text-slate-100"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/20 text-[10px] text-sky-200">
                  •
                </span>
                <span>{area}</span>
              </div>
            ))}
          </div>
        </section>

        {/* About / values */}
        <section className="grid gap-10 md:grid-cols-2" id="about">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
              Firm profile &amp; values
            </h2>
            <p className="text-xs leading-relaxed text-slate-200">
              At Temple Boyer Legal, an international business law boutique, we
              believe that a lawyer must combine the profession&apos;s traditional
              values - listening, empathy, availability, responsiveness and
              integrity - with qualities that are now essential: creativity,
              adaptability and pragmatism.
            </p>
            <p className="text-xs leading-relaxed text-slate-200">
              Convinced that the law should not be a factor of inertia but a
              genuine driver of growth, the firm positions itself as both a
              business partner and an external in-house counsel, serving
              operational teams and business priorities.
            </p>
            <p className="text-xs leading-relaxed text-slate-200">
              Combining a broad European legal culture with specialist
              expertise, we address your business law needs, including the most
              complex and international matters.
            </p>
          </div>

          <div className="space-y-4 rounded-3xl border border-sky-400/20 bg-gradient-to-b from-sky-500/10 via-slate-950 to-slate-950 px-5 py-6 text-xs text-slate-100">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-300">
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
        <section id="blog" className="space-y-4">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
                Insights &amp; updates
              </h2>
              <p className="text-xs text-slate-300">
                You will soon find a selection of commentary and analysis on
                developments in business law and practice.
              </p>
            </div>
            <button className="self-start rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-medium text-slate-100 transition hover:bg-white/10">
              Subscribe to RSS feed
            </button>
          </div>

          <div className="rounded-3xl border border-dashed border-white/20 bg-slate-950/60 px-5 py-8 text-center text-xs text-slate-400">
            No publication is available yet. The firm&apos;s insights and updates
            will be published shortly.
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="grid gap-8 rounded-3xl border border-white/10 bg-slate-950/80 p-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]"
        >
          <div className="space-y-4">
            <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
              Contact us
            </h2>
            <p className="text-xs text-slate-300">
              For any enquiry, meeting request or fee quote, you can contact us
              by email or through your usual contact within the firm.
            </p>

            <div className="space-y-2 text-xs text-slate-200">
              <p className="font-semibold">Temple Boyer Legal</p>
              <p>10, avenue de Wagram</p>
              <p>75008 Paris</p>
              <p>
                Email:
                <a
                  href="mailto:contact@templeboyer-legal.com"
                  className="ml-1 text-sky-300 underline-offset-4 hover:underline"
                >
                  contact@templeboyer-legal.com
                </a>
              </p>
            </div>
          </div>

          <form className="space-y-3 text-xs">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-[11px] text-slate-200">
                  Name / Company
                </label>
                <input
                  id="name"
                  name="name"
                  className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-50 outline-none ring-sky-500/40 placeholder:text-slate-500 focus:border-sky-400 focus:ring-2"
                  placeholder="Your name or company"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-[11px] text-slate-200">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-50 outline-none ring-sky-500/40 placeholder:text-slate-500 focus:border-sky-400 focus:ring-2"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label htmlFor="subject" className="text-[11px] text-slate-200">
                Subject of your enquiry
              </label>
              <input
                id="subject"
                name="subject"
                className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-50 outline-none ring-sky-500/40 placeholder:text-slate-500 focus:border-sky-400 focus:ring-2"
                placeholder="Advisory, dispute, contract..."
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-[11px] text-slate-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-50 outline-none ring-sky-500/40 placeholder:text-slate-500 focus:border-sky-400 focus:ring-2"
                placeholder="Briefly describe your matter"
              />
            </div>
            <p className="text-[10px] text-slate-400">
              This form is provided for illustration purposes only. No actual
              message is sent from this demo.
            </p>
            <button
              type="button"
              className="mt-1 inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2 text-[11px] font-semibold text-slate-950 shadow-lg shadow-sky-500/40 transition hover:bg-sky-400"
            >
              Send enquiry (demo)
            </button>
          </form>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/80 py-6 text-[11px] text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="font-medium text-slate-300">
              Sarah Temple-Boyer - International business lawyer
            </p>
            <p>Temple Boyer Legal - 10, avenue de Wagram - 75008 Paris</p>
            <p>
              Email:
              <a
                href="mailto:contact@templeboyer-legal.com"
                className="ml-1 text-sky-300 underline-offset-4 hover:underline"
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
              <a
                href="/mentions-legales"
                className="underline-offset-4 hover:underline"
              >
                Legal notice
              </a>
              <span>•</span>
              <a
                href="/confidentialite"
                className="underline-offset-4 hover:underline"
              >
                Privacy
              </a>
              <span>•</span>
              <button className="underline-offset-4 hover:underline">
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
