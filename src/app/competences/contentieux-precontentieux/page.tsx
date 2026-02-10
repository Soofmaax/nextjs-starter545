import { getSiteSettings, DEFAULT_SITE_SETTINGS } from "../../../lib/sanity.client";

const SKILLS_CONTENTIEUX = [
  "anticipation du risque en amont: notre expertise en droit des contrats doublée de notre expérience contentieuse nous permet d'identifier, très amont, les zones contractuelles \"à risque\" et de rédiger les clauses contractuelles de manière à éviter les contentieux",
  "mise en place d'une stratégie préventive (conseil et contentieux): sous réserve d'être informés en amont par la clientèle d'un différend existant ou à venir, nous mettons tout en oeuvre pour définir une stratégie préventive efficace de manière à éviter le contentieux ou à tout le moins \"bâtir un dossier\" en prévision d'une dérive contentieuse",
  "accompagnement précontentieux: assistance durant la phase de précontentieux jusqu'à la rédaction et conclusion de protocoles transactionnels, multipartites le cas échéant.",
  "Assistance dans le cadre du recours à des modes alternatifs de résolution des litiges (médiation, conciliation, arbitrage) permettant d'éviter le contentieux",
  "Assistance dans le cadre d'expertises amiables ou judiciaires (expertise sinistres, vices de construction, responsabilité produits)",
  "Représentation devant les juridictions civiles et commerciales ou les autorités spécialisées à l'occasion de contentieux spécifiques (CPH, Autorité de la concurrence): accompagnement de la clientèle de la rédaction d'actes de procédure jusqu'à la plaidoirie",
];

const OPERATIONS_CONTENTIEUX = [
  "Assistance d'un fabricant industriel désireux de remplacer un fournisseur auquel il était lié par une clause d'exclusivité par un autre fournisseur: mise en place d'une stratégie pour contenir le risque au regard de l'article L.442-6-I-5° (rupture brutale des relations commerciales) et éviter la rupture d'approvisionnement tout en négociant un contrat avec le nouveau fournisseur",
  "Assistance d'un fournisseur dans le secteur alimentaire désireux de se séparer de son distributeur; mise en place d'une stratégie autour de la rupture permettant de prévenir efficacement le risque contentieux lié au grief de \"rupture brutale des relations commerciales\" (article L.442-6 I-5)",
  "Négociation d'un accord transactionnel tripartite dans le cadre d'un différend inventeur / industrie /hôpital",
  "Assistance et représentation d'un fabricant industriel, dans le secteur portuaire, mis en cause dans un contentieux responsabilité produits et suivi des mesures d'instructions de l'expert judiciaire",
  "Dans le secteur des médias, mise en place d'une stratégie judiciaire (en 4 procédures simultanées devant les juridictions civiles et commerciales) permettant d'aboutir à une négociation globale",
  "dans le secteur de la construction, suivi d'une expertise et assistance du maître d'ouvrage dans la négociation et la conclusion d'un protocole transactionnel multipartite avec entrepreneurs, experts amiables, contrôleurs techniques et assureurs",
  "Assistance et représentation devant l'Autorité de la concurrence d'un opérateur de la manutention portuaire et d'un syndicat professionnel accusés d'avoir participé à une entente sur les prix (cartel)",
  "Assistance et représentation de clients dans le secteur agro-alimentaire et le secteur industriel face à l'Administration (DGCCRF et DREAL)",
];

const PUBLICATIONS_CONTENTIEUX = [
  "De l'importance de la mise en demeure avant d'agir en justice (voir la publication)",
  '« L’affaire Volkswagen » : Rappel des poursuites auxquels s’expose tout industriel pour pratique trompeuse en France (voir la publication)',
  "Portée de la compétence exclusive de la Cour d’appel de Paris au sens du décret n°2009-1384 (Semaine Juridique Entreprise et Affaires du 17 janvier 2013, n°3) (voir la publication)",
  "Rupture de relations commerciales établies : de l’intérêt réaffirmé de la clause attributive de juridiction dans un contrat international (voir la publication)",
  "Rupture des relations dans un contexte international: peut-on et si oui, comment échapper à l'indemnité de l'article L.442-6-I-5° du code de commerce? (voir la publication)",
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
            AVOCAT CONTENTIEUX ET PRECONTENTIEUX
          </h1>
        </header>

        {/* Introduction */}
        <section className="app-panel space-y-4 text-sm leading-relaxed text-slate-700">
          <p>
            Cabinet d&apos;avocat contentieux, Temple Boyer Legal assiste et représente sa
            clientèle (française et internationale) à l&apos;occasion de tous litiges et
            différends survenant avec tous ses partenaires commerciaux (fournisseurs,
            distributeurs, clients).
          </p>
          <p>
            Fort de sa connaissance approfondie et de sa pratique des règles applicables
            au contentieux national et international des affaires, le Cabinet Temple
            Boyer Legal peut assister sa clientèle dans l&apos;introduction de toute demande
            devant un tribunal et défendre sa clientèle étrangère attraite devant les
            tribunaux français dans tous les contentieux de rupture, et notamment ceux
            relatifs à la rupture des relations commerciales établies.
          </p>
        </section>

        {/* Compétences contentieuses */}
        <section className="app-panel space-y-4">
          <h2 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
            Compétences en contentieux et précontentieux
          </h2>
          <ul className="space-y-2 text-xs text-slate-800">
            {SKILLS_CONTENTIEUX.map((item) => (
             <<li
                key={item}
                className="flex gap-2 rounded-2xl border border-slate-200 bg-white/90 px-3 py-3"
              >
               <<span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-slate-500" />
               <<span>{it}</</span>
            </</li>
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
                <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-slate-500" />
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
                <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-slate-500" />
                <span>{pub}</span>
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
