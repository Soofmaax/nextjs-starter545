import { getSiteSettings, DEFAULT_SITE_SETTINGS } from "../../lib/sanity.client";

const EXPERTISE_JURIDIQUE = [
  "Contrats commerciaux et industriels (y compris de dimension internationale)",
  "Précontentieux et contentieux commercial",
  "Droit commercial / droit des sociétés",
  "Droit de la concurrence",
  "Droit de la distribution",
  "Droit de la consommation",
  "Droit de la propriété industrielle et intellectuelle",
  "Droit des nouvelles technologies",
  "Droit européen et international des affaires",
  "Droit de la construction / ingénierie",
  "Droit du travail",
];

const SECTORIEL = [
  "Industrie (agroalimentaire, pharmaceutique, dispositifs médicaux, équipementiers industriels...)",
  "Retail (joaillerie, textile, produits de grande consommation...)",
  "Services (tourisme, télécommunications, conception digitale...)",
  "Entreprises opérant en B to B et B to C dans un contexte international",
];

export default async function CompetencesPage() {
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
    <div className="app-shell">
      <main id="main-content" className="app-main">
        <header className="app-panel space-y-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
            Temple Boyer Legal
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Avocat d&apos;affaires bilingue – Compétences et spécialités
          </h1>
          <p className="max-w-2xl text-sm text-slate-700">
            TEMPLE BOYER LEGAL – Cabinet d&apos;avocat d&apos;affaires international, conseil
            &amp; contentieux. Le Cabinet, bilingue en anglais, intervient dans tous
            les domaines du droit des affaires, avec une expertise particulière
            dans les matières listées ci-dessous.
          </p>
        </header>

        {/* Coordonnées */}
        <section className="app-panel grid gap-8 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:items-start">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
              Un cabinet d&apos;avocat d&apos;affaires bilingue à votre écoute
            </h2>
            <p className="text-xs leading-relaxed text-slate-700">
              Le Cabinet Temple Boyer Legal se tient à votre disposition pour vous
              assister dans tous vos projets et litiges, en conseil comme en
              contentieux. Sa pratique bilingue (français / anglais) lui permet
              d&apos;accompagner une clientèle évoluant dans des environnements B to B
              comme B to C, en France et à l&apos;international.
            </p>
            <p className="text-xs leading-relaxed text-slate-700">
              La rédaction, la revue et la négociation de contrats en anglais font
              pleinement partie du champ de compétence du Cabinet, de même que la
              prise en compte des spécificités du droit international dans les
              relations entre parties de nationalités différentes.
            </p>
          </div>

          <div className="space-y-3 rounded-2xl border border-slate-200 bg-white/90 p-4 text-xs text-slate-800">
            <p className="font-semibold text-slate-900">Coordonnées du Cabinet</p>
            <p>Cabinet Temple Boyer Legal</p>
            <p>{addressLine1}</p>
            <p>{addressLine2}</p>
            <p>
              Email :
              <a
                href={`mailto:${contactEmail}`}
                className="ml-1 text-amber-700 underline-offset-4 hover:underline"
              >
                {contactEmail}
              </a>
            </p>
          </div>
        </section>

        {/* Expertise juridique */}
        <section className="app-panel space-y-8">
          <div className="app-section-heading">
            <div>
              <h2 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
                Expertise juridique / Legal expertise
              </h2>
              <p className="max-w-2xl text-xs text-slate-600">
                Le Cabinet intervient dans tous les domaines du droit des affaires,
                avec une expertise renforcée dans les domaines suivants :
              </p>
            </div>
            <p className="app-section-label">
              Conseil &amp; Contentieux
            </p>
          </div>

          <div className="grid gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4 sm:grid-cols-2">
            {EXPERTISE_JURIDIQUE.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-3 text-xs text-slate-800"
              >
                <span className="mt-[3px] flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/10 text-[10px] text-amber-700">
                  •
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Expertise sectorielle */}
        <section className="app-panel space-y-8">
          <div className="app-section-heading">
            <div>
              <h2 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
                Expertise sectorielle / Area expertise
              </h2>
              <p className="max-w-2xl text-xs text-slate-600">
                Le Cabinet conseille des entreprises françaises et étrangères
                opérant dans de nombreux secteurs économiques :
              </p>
            </div>
          </div>

          <div className="grid gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4 sm:grid-cols-2">
            {SECTORIEL.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-3 text-xs text-slate-800"
              >
                <span className="mt-[3px] flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/10 text-[10px] text-amber-700">
                  •
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="max-w-3xl text-xs leading-relaxed text-slate-700">
            L&apos;expérience cumulée de conseil dans ces différents secteurs, à
            divers niveaux de la chaîne de production et de distribution, confère
            au Cabinet une vision panoramique et innovante des problématiques et
            techniques contractuelles. Cette compréhension globale permet de
            proposer des solutions juridiques adaptées aux enjeux opérationnels et
            stratégiques des entreprises.
          </p>
        </section>

        {/* Footer note */}
        <section className="border-t border-slate-800/70 pt-6 text-[11px] text-slate-400">
          <p>
            © 2015 – {new Date().getFullYear()} Sarah Temple-Boyer. Tous droits
            réservés.
          </p>
        </section>
      </main>
    </div>
  );
}
