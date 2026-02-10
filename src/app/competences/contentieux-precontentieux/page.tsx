import { getSiteSettings, DEFAULT_SITE_SETTINGS } from "../../../lib/sanity.client";

const SKILLS_CONTENTIEUX = [
  "Anticipation du risque en amont : identification des zones contractuelles à risque et rédaction de clauses pour éviter les contentieux",
  "Mise en place d'une stratégie préventive (conseil et contentieux) dès l'apparition d'un différend",
  "Accompagnement précontentieux : assistance jusqu'à la rédaction et la conclusion de protocoles transactionnels, y compris multipartites",
  "Assistance dans le cadre de modes alternatifs de résolution des litiges (médiation, conciliation, arbitrage)",
  "Assistance dans le cadre d'expertises amiables ou judiciaires (sinistres, vices de construction, responsabilité produits)",
  "Représentation devant les juridictions civiles et commerciales ou autorités spécialisées (CPH, Autorité de la concurrence)",
];

const OPERATIONS_CONTENTIEUX = [
  "Assistance d'un fabricant industriel souhaitant remplacer un fournisseur exclusif : mise en place d'une stratégie pour contenir le risque de rupture brutale des relations commerciales (art. L. 442-6, I, 5°) tout en sécurisant l'approvisionnement et la négociation avec un nouveau fournisseur",
  "Assistance d'un fournisseur dans le secteur alimentaire souhaitant se séparer de son distributeur : stratégie de rupture pour prévenir le risque contentieux lié au grief de rupture brutale des relations commerciales",
  "Négociation d'un accord transactionnel tripartite dans le cadre d'un différend inventeur / industrie / hôpital",
  "Assistance et représentation d'un fabricant industriel du secteur portuaire dans un contentieux de responsabilité produits, incluant le suivi des mesures d'instruction confiées à l'expert judiciaire",
  "Dans le secteur des médias, mise en place d'une stratégie judiciaire (quatre procédures simultanées devant les juridictions civiles et commerciales) aboutissant à une négociation globale",
  "Dans le secteur de la construction, suivi d'une expertise et assistance du maître d'ouvrage dans la négociation et la conclusion d'un protocole transactionnel multipartite (entrepreneurs, experts amiables, contrôleurs techniques, assureurs)",
  "Assistance et représentation devant l'Autorité de la concurrence d'un opérateur de manutention portuaire et d'un syndicat professionnel mis en cause pour entente sur les prix (cartel)",
  "Assistance et représentation de clients dans les secteurs agroalimentaire et industriel face à l'Administration (DGCCRF, DREAL)",
];

const PUBLICATIONS_CONTENTIEUX = [
  "De l'importance de la mise en demeure avant d'agir en justice",
  '« L’affaire Volkswagen » : rappel des poursuites encourues pour pratique trompeuse en France',
  "Portée de la compétence exclusive de la cour d'appel de Paris au sens du décret n°2009-1384 (Semaine Juridique Entreprise et Affaires, 17 janvier 2013, n°3)",
  "Rupture de relations commerciales établies : de l'intérêt réaffirmé de la clause attributive de juridiction dans un contrat international",
  "Rupture des relations dans un contexte international : peut-on, et si oui comment, échapper à l'indemnité de l'article L. 442-6, I, 5° du code de commerce ?",
];

export default async function ContentieuxPrecontentieuxPage() {
  const siteSettings = (await getSiteSettings()) ?? DEFAULT_SITE_SETTINGS;

  const contactEmail = siteSettings.contactEmail ?? DEFAULT_SITE_SETTINGS.contactEmail;
  const address = siteSettings.address ?? DEFAULT_SITE_SETTINGS.address;

  const postalAddress = address || DEFAULT_SITE_SETTINGS.address!;
  return (
    <div className="app-shell">
      <main className="app-main">
        {/* En-tête */}
        <header className="app-panel space-y-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
            Temple Boyer Legal – Compétences
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Avocat contentieux et précontentieux
          </h1>
          <p className="max-w-2xl text-sm text-slate-700">
            Cabinet d&apos;avocat contentieux, Temple Boyer Legal assiste et représente
            sa clientèle française et internationale à l&apos;occasion de litiges et de
            différends avec l&apos;ensemble de ses partenaires commerciaux (fournisseurs,
            distributeurs, clients).
          </p>
        </header>

        {/* Introduction */}
        <section className="app-panel space-y-4 text-sm leading-relaxed text-slate-700">
          <p>
            Fort d&apos;une connaissance approfondie et d&apos;une pratique régulière des
            règles applicables au contentieux national et international des
            affaires, le Cabinet Temple Boyer Legal assiste sa clientèle pour
            l&apos;introduction de toute action devant les tribunaux et défend également
            sa clientèle étrangère attraite devant les juridictions françaises,
            notamment dans le cadre de contentieux de rupture des relations
            commerciales établies.
          </p>
        </section>

        {/* Compétences contentieuses */}
        <section className="app-panel space-y-4">
          <h2 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
            Compétences en contentieux et précontentieux
          </h2>
          <ul className="space-y-2 text-xs text-slate-800">
            {SKILLS_CONTENTIEUX.map((item) => (
              <li
                key={item}
                className="flex gap-2 rounded-2xl border border-slate-200 bg-white/90 px-3 py-3"
              >
                <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-amber-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Exemples d'opérations */}
        <section className="app-panel space-y-4">
          <h2 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
            Exemples d&apos;opérations menées par le Cabinet
          </h2>
          <ul className="space-y-2 text-xs text-slate-800">
            {OPERATIONS_CONTENTIEUX.map((op) => (
              <li
                key={op}
                className="flex gap-2 rounded-2xl border border-slate-200 bg-white/90 px-3 py-3"
              >
                <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-amber-500" />
                <span>{op}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Publications liées */}
        <section className="app-panel space-y-4">
          <h2 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
            Publications liées
          </h2>
          <ul className="space-y-2 text-xs text-slate-800">
            {PUBLICATIONS_CONTENTIEUX.map((pub) => (
              <li
                key={pub}
                className="flex gap-2 rounded-2xl border border-slate-200 bg-white/90 px-3 py-3"
              >
                <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-amber-500" />
                <span>{pub} (voir la publication)</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Bas de page simplifié */}
        <section className="border-t border-slate-800/70 pt-6 text-[11px] text-slate-400">
          <p>
            Maître Sarah Temple-Boyer – Avocat d&apos;affaires international, Paris –
            Cabinet Temple Boyer Legal, {postalAddress} –
            {contactEmail}
          </p>
          <p className="mt-1">
            © 2015 – {new Date().getFullYear()} Sarah Temple-Boyer. Tous droits
            réservés.
          </p>
        </section>
      </main>
    </div>
  );
}
