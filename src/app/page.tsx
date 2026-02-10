import Link from "next/link";
import { BookOpenText, Globe2, Mail, Scale } from "lucide-react";
import { getSiteSettings, DEFAULT_SITE_SETTINGS } from "../lib/sanity.client";

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

export default async function Home() {
  const siteSettings = (await getSiteSettings()) ?? DEFAULT_SITE_SETTINGS;

  const contactEmail = siteSettings.contactEmail ?? DEFAULT_SITE_SETTINGS.contactEmail;
  const address = siteSettings.address ?? DEFAULT_SITE_SETTINGS.address;

  // On découpe l'adresse en 2 lignes pour l'affichage
  const addressParts = address.split(",").map((part) => part.trim());
  const isDefaultAddress = address === DEFAULT_SITE_SETTINGS.address;
  const addressLine1 = isDefaultAddress
    ? "10, avenue de Wagram"
    : addressParts[0] || "10, avenue de Wagram";
  const addressLine2 = addressParts[1] || "75008 Paris";

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
                Cabinet d&apos;avocat d&apos;affaires international
              </span>
            </div>
          </div>

          <div className="hidden items-center gap-6 text-[11px] font-medium sm:flex">
            <div className="flex items-center gap-6 text-slate-300">
              <Link href="/" className="transition-colors hover:text-slate-50">
                Accueil
              </Link>
              <Link href="/cabinet" className="transition-colors hover:text-slate-50">
                Le Cabinet
              </Link>
              <Link href="/competences" className="transition-colors hover:text-slate-50">
                Compétences
              </Link>
              <Link href="/honoraires" className="transition-colors hover:text-slate-50">
                Honoraires
              </Link>
              <Link href="/blog" className="transition-colors hover:text-slate-50">
                Publications / Actualités
              </Link>
              <a href="/partenariats" className="transition-colors hover:text-slate-50">
                Partenariats
              </a>
              <Link href="/contact" className="transition-colors hover:text-slate-50">
                Contact
              </Link>
              <a href="#plan-acces" className="transition-colors hover:text-slate-50">
                Plan d&apos;accès
              </a>
            </div>
            <div className="flex items-center text-[10px] font-normal text-slate-400">
              <span className="cursor-default text-slate-100">FR</span>
              <span className="mx-1 text-slate-600">|</span>
              <Link href="/en" className="transition-colors hover:text-slate-50">
                EN
              </Link>
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
              <span>Conseil &amp; contentieux en droit des affaires</span>
            </div>

            <div className="space-y-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-slate-500">
                Temple Boyer Legal – Paris
              </p>
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
                Cabinet d&apos;avocat d&apos;affaires international dédié aux opérations
                et litiges complexes
              </h1>
              <p className="max-w-xl text-sm text-slate-700">
                Temple Boyer Legal accompagne les groupes français et
                internationaux, ETI, investisseurs et dirigeants dans la
                structuration, la négociation et le suivi de leurs opérations
                stratégiques, ainsi que dans la gestion de leurs différends à
                forts enjeux.
              </p>
            </div>

            <div className="mt-4 grid gap-3 text-[11px] sm:grid-cols-3">
              <div className="flex items-start gap-2 rounded-2xl border border-slate-200 bg-white/80 px-3 py-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500" />
                <p className="leading-snug text-slate-800">
                  Contrats &amp; opérations internationales
                </p>
              </div>
              <div className="flex items-start gap-2 rounded-2xl border border-slate-200 bg-white/80 px-3 py-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500" />
                <p className="leading-snug text-slate-800">
                  Contentieux stratégiques &amp; précontentieux
                </p>
              </div>
              <div className="flex items-start gap-2 rounded-2xl border border-slate-200 bg-white/80 px-3 py-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500" />
                <p className="leading-snug text-slate-800">
                  Accompagnement des directions juridique &amp; générale
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-[11px]">
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-slate-700">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                <span>Barreau de Paris</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-slate-700">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                <span>Conseil &amp; contentieux</span>
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
                Contacter le Cabinet
              </a>
              <a
                href="#competences"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-transparent px-5 py-2 text-[11px] font-medium text-slate-900 transition-colors hover:bg-slate-100"
              >
                Découvrir les domaines de compétence
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
                Maître Sarah Temple-Boyer
              </p>
              <p className="text-[11px] text-slate-600">
                Avocat d&apos;affaires international - Paris
              </p>
            </div>
            <div className="mt-2 space-y-1 text-[11px] text-slate-600">
              <p>{addressLine1}</p>
              <p>{addressLine2}</p>
              <p>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-amber-700 underline-offset-4 hover:underline"
                >
                  {contactEmail}
                </a>
              </p>
            </div>
            <div className="mt-4 flex w-full flex-col gap-2 text-[11px]">
              <button className="rounded-full border border-slate-900 bg-slate-900 px-4 py-2 font-medium text-slate-50 transition-colors hover:bg-slate-800">
                Prendre rendez-vous
              </button>
              <button className="rounded-full border border-slate-300 bg-transparent px-4 py-2 font-medium text-slate-900 transition-colors hover:bg-slate-100">
                Ajouter aux contacts
              </button>
            </div>
          </div>
        </section>

        <section className="app-panel space-y-8" id="services">
          <div className="app-section-heading">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
                Ce que nous faisons pour vous
              </h2>
              <p className="max-w-2xl text-xs text-slate-600">
                Le Cabinet assiste les directions générale, juridique et
                financière dans la structuration de leurs projets, la gestion
                de leurs risques et la résolution de leurs différends, en
                France comme à l&apos;international.
              </p>
            </div>
            <p className="app-section-label">
              Dirigeants &amp; Directions juridiques
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/90 p-5 text-xs text-slate-800">
              <h3 className="text-sm font-semibold text-slate-900">
                Sécuriser vos opérations
              </h3>
              <p className="leading-relaxed text-slate-700">
                Rédaction et négociation de contrats, analyse des risques,
                structuration de partenariats et d&apos;opérations stratégiques,
                afin de sécuriser vos engagements et préserver vos intérêts.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/90 p-5 text-xs text-slate-800">
              <h3 className="text-sm font-semibold text-slate-900">
                Gérer vos litiges à forts enjeux
              </h3>
              <p className="leading-relaxed text-slate-700">
                Élaboration de stratégies contentieuses, assistance en
                précontentieux, représentation devant les juridictions
                étatiques et arbitrales pour les différends commerciaux
                complexes.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/90 p-5 text-xs text-slate-800">
              <h3 className="text-sm font-semibold text-slate-900">
                Vous accompagner dans la durée
              </h3>
              <p className="leading-relaxed text-slate-700">
                Accompagnement au long cours des équipes dirigeantes et
                juridiques, suivi récurrent de vos dossiers et mise en place
                d&apos;outils et réflexes juridiques adaptés à votre organisation.
              </p>
            </div>
          </div>
        </section>

        {/* Practice areas */}
        <section id="competences" className="app-panel space-y-8">
          <div className="app-section-heading">
            <div>
              <h2 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
                Domaines de compétence
              </h2>
              <p className="max-w-2xl text-xs text-slate-600">
                Le Cabinet intervient en conseil et en contentieux sur
                l&apos;ensemble des problématiques de droit des affaires, avec une
                forte dimension internationale.
              </p>
            </div>
            <p className="app-section-label">
              Conseil &amp; Contentieux
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
              Présentation et valeurs du Cabinet
            </h2>
            <p className="text-xs leading-relaxed text-slate-700">
              Pour le cabinet d&apos;avocat d&apos;affaires international qu&apos;est Temple
              Boyer Legal, l&apos;avocat doit allier les valeurs traditionnelles du
              métier – sens de l&apos;écoute, empathie, disponibilité, réactivité et
              intégrité – à des qualités désormais indispensables : créativité,
              adaptabilité et pragmatisme.
            </p>
            <p className="text-xs leading-relaxed text-slate-700">
              Convaincu que le droit ne doit pas être un facteur d&apos;inertie mais
              un véritable levier de croissance, le Cabinet se positionne comme
              un « business partner » et un « juriste externalisé », au service
              des opérationnels et des enjeux du business.
            </p>
            <p className="text-xs leading-relaxed text-slate-700">
              Possédant à la fois une culture généraliste et européenne du droit
              et des compétences de spécialiste, nous répondons à vos besoins en
              droit des affaires, y compris les problématiques les plus
              complexes et tournées vers le commerce international.
            </p>
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white/90 px-5 py-6 text-xs text-slate-800">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
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
        <section id="blog" className="app-panel space-y-6">
          <div className="app-section-heading">
            <div>
              <h2 className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
                <BookOpenText className="h-4 w-4 text-amber-600" aria-hidden="true" />
                <span>Blog &amp; actualités</span>
              </h2>
              <p className="text-xs text-slate-600">
                Retrouvez bientôt une sélection d&apos;analyses et de décryptages
                de l&apos;actualité juridique en droit des affaires.
              </p>
            </div>
            <button className="self-start rounded-full border border-slate-300 bg-transparent px-4 py-1.5 text-[11px] font-medium text-slate-900 transition-colors hover:bg-slate-100">
              S&apos;abonner au flux RSS
            </button>
          </div>

          <div className="rounded-2xl border border-dashed border-slate-300 bg-white/80 px-5 py-8 text-center text-xs text-slate-500">
            Aucune publication n&apos;est encore disponible. Les actualités du
            Cabinet seront prochainement mises en ligne.
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="app-panel grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]"
        >
          <div className="space-y-4">
            <h2 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
              Nous contacter
            </h2>
            <p className="text-xs text-slate-600">
              Pour toute demande d&apos;information, prise de rendez-vous ou
              sollicitation de devis, vous pouvez nous contacter par e-mail ou
              via votre interlocuteur habituel.
            </p>

            <div className="space-y-2 text-xs text-slate-700">
              <p className="font-semibold">Cabinet Temple Boyer Legal</p>
              <p className="flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-slate-500" aria-hidden="true" />
                <span>{addressLine1}</span>
              </p>
              <p>{addressLine2}</p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-slate-500" aria-hidden="true" />
                <span>
                  Email :
                  <a
                    href={`mailto:${contactEmail}`}
                    className="ml-1 text-amber-700 underline-offset-4 hover:underline"
                  >
                    {contactEmail}
                  </a>
                </span>
              </p>
            </div>
          </div>

          <form className="space-y-3 text-xs">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="nom" className="text-[11px] text-slate-700">
                  Nom / Société
                </label>
                <input
                  id="nom"
                  name="nom"
                  className="w-full rounded-xl border border-slate-300 bg-white/90 px-3 py-2 text-xs text-slate-900 outline-none ring-amber-500/20 placeholder:text-slate-400 focus:border-amber-500 focus:ring-2"
                  placeholder="Votre nom ou dénomination sociale"
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
                  placeholder="vous@exemple.com"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label htmlFor="objet" className="text-[11px] text-slate-700">
                Objet de la demande
              </label>
              <input
                id="objet"
                name="objet"
                className="w-full rounded-xl border border-slate-300 bg-white/90 px-3 py-2 text-xs text-slate-900 outline-none ring-amber-500/20 placeholder:text-slate-400 focus:border-amber-500 focus:ring-2"
                placeholder="Conseil, contentieux, contrat..."
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
                placeholder="Décrivez brièvement votre demande"
              />
            </div>
            <p className="text-[10px] text-slate-500">
              Ce formulaire est proposé à titre indicatif. Aucun envoi effectif
              n&apos;est réalisé depuis cette maquette.
            </p>
            <button
              type="button"
              className="mt-1 inline-flex items-center justify-center rounded-full bg-amber-500 px-5 py-2 text-[11px] font-semibold text-slate-950 shadow-[0_18px_45px_rgba(180,83,9,0.45)] transition-colors hover:bg-amber-500/90"
            >
              Envoyer la demande (démo)
            </button>
          </form>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950/95 py-8 text-[11px] text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="font-medium text-slate-200">
              Maître Sarah Temple-Boyer – Avocat d&apos;affaires international
            </p>
            <p className="text-slate-400">
              Cabinet Temple Boyer Legal – {addressLine1} – {addressLine2}
            </p>
            <p>
              Email :
              <a
                href={`mailto:${contactEmail}`}
                className="ml-1 text-amber-600 underline-offset-4 hover:underline"
              >
                {contactEmail}
              </a>
            </p>
          </div>

          <div className="space-y-1 text-[10px] text-slate-500">
            <p>© 2015 – {new Date().getFullYear()} Sarah Temple-Boyer. Tous droits réservés.</p>
            <p className="flex flex-wrap gap-2">
              <Link
                href="/mentions-legales"
                className="text-slate-400 underline-offset-4 hover:text-slate-200 hover:underline"
              >
                Mentions légales
              </Link>
              <span className="text-slate-600">·</span>
              <Link
                href="/confidentialite"
                className="text-slate-400 underline-offset-4 hover:text-slate-200 hover:underline"
              >
                Confidentialité
              </Link>
              <span className="text-slate-600">·</span>
              <button className="text-slate-400 underline-offset-4 hover:text-slate-200 hover:underline">
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
