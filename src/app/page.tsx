import Image from "next/image";

const PRACTICE_AREAS = [
  "Contrats",
  "Contentieux",
  "Commercial / Sociétés",
  "Concurrence",
  "Distribution",
  "Consommation",
  "Propriété industrielle / intellectuelle",
  "Nouvelles technologies",
  "Droit international",
  "Construction / Ingénierie",
  "Droit du travail",
  "Expertise sectorielle",
];

export default function Home() {
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
                Cabinet d&apos;avocat d&apos;affaires international
              </span>
            </div>
          </div>

          <div className="hidden items-center gap-6 text-[11px] font-medium text-slate-300 sm:flex">
            <a href="/" className="transition hover:text-white">
              Accueil
            </a>
            <a href="/cabinet" className="transition hover:text-white">
              Le Cabinet
            </a>
            <a href="/competences" className="transition hover:text-white">
              Compétences
            </a>
            <a href="/honoraires" className="transition hover:text-white">
              Honoraires
            </a>
            <a href="/blog" className="transition hover:text-white">
              Publications / Actualités
            </a>
            <a href="/partenariats" className="transition hover:text-white">
              Partenariats
            </a>
            <a href="/contact" className="transition hover:text-white">
              Contact
            </a>
            <a
              href="#plan-acces"
              className="transition hover:text-white"
            >
              Plan d&apos;accès
            </a>
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
              <span>Conseil &amp; contentieux en droit des affaires</span>
            </div>

            <div className="space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-300">
                Temple Boyer Legal - Paris
              </p>
              <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                Cabinet d&apos;avocat d&apos;affaires international
              </h1>
              <p className="max-w-xl text-sm text-slate-200">
                Un accompagnement sur-mesure pour vos projets et litiges, en
                France et à l&apos;international. Le Cabinet intervient aux côtés
                des entreprises, dirigeants et investisseurs pour sécuriser vos
                opérations et défendre vos intérêts.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-[11px]">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Barreau de Paris</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>Conseil &amp; contentieux</span>
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
                Contacter le Cabinet
              </a>
              <a
                href="#competences"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2 text-[11px] font-medium text-slate-100 transition hover:bg-white/10"
              >
                Découvrir les domaines de compétence
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
                Maître Sarah Temple-Boyer
              </p>
              <p className="text-[11px] text-slate-300">
                Avocat d&apos;affaires international - Paris
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
                Prendre rendez-vous
              </button>
              <button className="rounded-full border border-white/15 bg-transparent px-4 py-2 font-medium text-slate-100 transition hover:bg-white/5">
                Ajouter aux contacts
              </button>
            </div>
          </div>
        </section>

        {/* Practice areas */}
        <section id="competences" className="space-y-6">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
                Domaines de compétence
              </h2>
              <p className="max-w-2xl text-xs text-slate-300">
                Le Cabinet intervient en conseil et en contentieux sur
                l&apos;ensemble des problématiques de droit des affaires, avec une
                forte dimension internationale.
              </p>
            </div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
              Conseil &amp; Contentieux
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
              Présentation et valeurs du Cabinet
            </h2>
            <p className="text-xs leading-relaxed text-slate-200">
              Pour le cabinet d&apos;avocat d&apos;affaires international qu&apos;est Temple
              Boyer Legal, l&apos;avocat doit allier les valeurs traditionnelles du
              métier – sens de l&apos;écoute, empathie, disponibilité, réactivité et
              intégrité – à des qualités désormais indispensables : créativité,
              adaptabilité et pragmatisme.
            </p>
            <p className="text-xs leading-relaxed text-slate-200">
              Convaincu que le droit ne doit pas être un facteur d&apos;inertie mais
              un véritable levier de croissance, le Cabinet se positionne comme
              un « business partner » et un « juriste externalisé », au service
              des opérationnels et des enjeux du business.
            </p>
            <p className="text-xs leading-relaxed text-slate-200">
              Possédant à la fois une culture généraliste et européenne du droit
              et des compétences de spécialiste, nous répondons à vos besoins en
              droit des affaires, y compris les problématiques les plus
              complexes et tournées vers le commerce international.
            </p>
          </div>

          <div className="space-y-4 rounded-3xl border border-sky-400/20 bg-gradient-to-b from-sky-500/10 via-slate-950 to-slate-950 px-5 py-6 text-xs text-slate-100">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-300">
              Une vision moderne de la profession
            </p>
            <p className="leading-relaxed">
              Le Cabinet intervient aussi bien en conseil qu&apos;en contentieux,
              en France comme à l&apos;étranger, en s&apos;appuyant sur un réseau de
              correspondants sélectionnés avec soin. Chaque dossier est traité
              avec une approche personnalisée, en lien direct avec Maître Sarah
              Temple-Boyer.
            </p>
            <p className="leading-relaxed">
              Notre priorité : proposer des solutions juridiques robustes mais
              opérationnelles, adaptées à la réalité de vos contraintes
              économiques et organisationnelles.
            </p>
          </div>
        </section>

        {/* Blog / news */}
        <section id="blog" className="space-y-4">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
                Blog &amp; actualités
              </h2>
              <p className="text-xs text-slate-300">
                Retrouvez bientôt une sélection d&apos;analyses et de décryptages
                de l&apos;actualité juridique en droit des affaires.
              </p>
            </div>
            <button className="self-start rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-medium text-slate-100 transition hover:bg-white/10">
              S&apos;abonner au flux RSS
            </button>
          </div>

          <div className="rounded-3xl border border-dashed border-white/20 bg-slate-950/60 px-5 py-8 text-center text-xs text-slate-400">
            Aucune publication n&apos;est encore disponible. Les actualités du
            Cabinet seront prochainement mises en ligne.
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="grid gap-8 rounded-3xl border border-white/10 bg-slate-950/80 p-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]"
        >
          <div className="space-y-4">
            <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
              Nous contacter
            </h2>
            <p className="text-xs text-slate-300">
              Pour toute demande d&apos;information, prise de rendez-vous ou
              sollicitation de devis, vous pouvez nous contacter par e-mail ou
              via votre interlocuteur habituel.
            </p>

            <div className="space-y-2 text-xs text-slate-200">
              <p className="font-semibold">Cabinet Temple Boyer Legal</p>
              <p>10, avenue de Wagram</p>
              <p>75008 Paris</p>
              <p>
                Email :
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
                <label htmlFor="nom" className="text-[11px] text-slate-200">
                  Nom / Société
                </label>
                <input
                  id="nom"
                  name="nom"
                  className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-50 outline-none ring-sky-500/40 placeholder:text-slate-500 focus:border-sky-400 focus:ring-2"
                  placeholder="Votre nom ou dénomination sociale"
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
                  placeholder="vous@exemple.com"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label htmlFor="objet" className="text-[11px] text-slate-200">
                Objet de la demande
              </label>
              <input
                id="objet"
                name="objet"
                className="w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-50 outline-none ring-sky-500/40 placeholder:text-slate-500 focus:border-sky-400 focus:ring-2"
                placeholder="Conseil, contentieux, contrat..."
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
                placeholder="Décrivez brièvement votre demande"
              />
            </div>
            <p className="text-[10px] text-slate-400">
              Ce formulaire est proposé à titre indicatif. Aucun envoi effectif
              n&apos;est réalisé depuis cette maquette.
            </p>
            <button
              type="button"
              className="mt-1 inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2 text-[11px] font-semibold text-slate-950 shadow-lg shadow-sky-500/40 transition hover:bg-sky-400"
            >
              Envoyer la demande (démo)
            </button>
          </form>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/80 py-6 text-[11px] text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="font-medium text-slate-300">
              Maître Sarah Temple-Boyer – Avocat d&apos;affaires international
            </p>
            <p>Cabinet Temple Boyer Legal – 10, avenue de Wagram – 75008 Paris</p>
            <p>
              Email :
              <a
                href="mailto:contact@templeboyer-legal.com"
                className="ml-1 text-sky-300 underline-offset-4 hover:underline"
              >
                contact@templeboyer-legal.com
              </a>
            </p>
          </div>

          <div className="space-y-1 text-[10px] text-slate-500">
            <p>© 2015 – {new Date().getFullYear()} Sarah Temple-Boyer. Tous droits réservés.</p>
            <p className="flex flex-wrap gap-2">
              <button className="underline-offset-4 hover:underline">
                Mentions légales
              </button>
              <span>·</span>
              <button className="underline-offset-4 hover:underline">
                Confidentialité
              </button>
              <span>·</span>
              <button className="underline-offset-4 hover:underline">
                Accès administrateur
              </button>
            </p>
            <p className="text-[9px] text-slate-600">
              Design et intégration : maquette Next.js personnalisée.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
