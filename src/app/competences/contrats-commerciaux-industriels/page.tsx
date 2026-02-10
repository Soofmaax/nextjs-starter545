import { getSiteSettings, DEFAULT_SITE_SETTINGS } from "../../../lib/sanity.client";

const SKILLS_COMMERCIAUX = [
  "rédaction, revue et négociation (en français / anglais) de tous contrats commerciaux :",
  "en amont: accords de confidentialité, lettres d'intention, achat/fourniture, bail commercial,  prestations de service, conditions générales d'achat...",
  "en aval: conditions générales de vente, distribution (exclusive, sélective, franchise, agent commercial, commissionnaire...), logistique (transport, emballage), cession et/ou licence de marque/brevet...",
];

const SKILLS_INDUSTRIELS = [
  "rédaction, revue et négociation (en français / en anglais) de tous contrats industriels:",
  "en amont: contrats EPC (engineering, procurement and construction), achat / fourniture (équipement industriel, articles de conditionnement), manufacturing, R&D, transferts de technologie, contrats d'évaluation et de développement, partenariats (sous-traitance, co-traitance)...",
  "en aval: vente, distribution, logistique (transport, conditionnement)",
  '"contract management": suivi au plus près des opérationnels des contrats en cours d'exécution pour veiller au respect des milestones, anticiper les avenants nécessaires et les renouvellements...',
];

const OPERATIONS = [
  "Elaboration et négociation d'un contrat EPC pour un fabricant étranger de colles pour les besoins de l'extension de ses usines de production en France et à l'étranger",
  "Elaboration du contrat-cadre de distribution exclusive d'un fabricant américain de dispositifs médicaux pour une implémentation à l'échelle mondiale",
  "Elaboration et négociation d'un contrat-cadre de prestation de services pour la gestion et le traitement des déchets générés par un groupe industriel et l'ensemble de ses filiales européennes",
  "Revue et négociation d'un contrat d'approvisionnement en composants stratégiques pour un industriel français avec un fournisseur leader européen dans son secteur",
  "Assistance d'un client dans le textile de luxe dans la revue et la négociation contractuelle de l'acquisition d'un portefeuille de marques",
];

const PUBLICATIONS = [
  "La révision du prix pour imprévision: faut-il toujours l'appréhender dans le contrat et si oui, comment? (voir la publication)",
  "La sanction pour non-respect du plafonnement des délais de paiement est relevée à 2 millions d’euros (voir la publication)",
  "Le plafonnement légal des délais de paiement dans les contrats internationaux : l'exemple français (voir la publication)",
  "Parties à un contrat international: peut-on échapper à la compétence des juridictions françaises dans un litige lié à la rupture d'une relation commerciale infligée à une société française? (voir la publication)",
  'Invalidation du "Safe Harbor": que faire concernant les contrats en cours avec les entreprises US? (voir la publication)',
  "La période d’essai fait échec à l’indemnité de fin de contrat de l’agent commercial (voir la publication)",
  "Joint-venture : l’accord-cadre est un préalable indispensable (Impulser , septembre 2006)",
  "Joint-venture : PME-PMI, attention aux mariages sans précautions contractuelles (Le Moci, 19/10/06)",
  "Quelle réparation en cas de rupture fautive des pourparlers (Option Finance, 11/12/06)",
  "Sous-traitance industrielle : spécificités et points d’actualité (Cahiers juridiques – Journal du Vrac et Journal des Fluides/mai 07)",
  "Sous-traitance de marché : les obligations réciproques (le Moniteur – juin 2007 en deux volets)",
  "Partenariats industriels : savoir choisir le cadre juridique adapté (Cahiers juridiques du Journal du Vrac et du Journal des Fluides / mai-juin 2007)",
  "Rupture de relations commerciales établies : de l’intérêt réaffirmé de la clause attributive de juridiction dans un contrat international (voir la publication)",
];

export default async function ContratsCommerciauxIndustrielsPage() {
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
            SPECIALISTE DES CONTRATS COMMERCIAUX ET INDUSTRIELS (y compris de dimension internationale)
          </h1>
        </header>

        {/* Intro */}
        <section className="app-panel space-y-4 text-sm leading-relaxed text-slate-700">
          <p>
            Notre expertise approfondie, au contact d&apos;une clientèle très diversifiée, des schémas
            contractuels les plus divers nous confère une vision à la fois &quot;panoramique&quot; et
            spécifique des besoins contractuels de nos clients.
          </p>
          <p>
            Spécialiste des contrats commerciaux, notre Cabinet est en mesure d&apos;anticiper et de
            suggérer des schémas contractuels complémentaires et/ou alternatifs qui s&apos;avèrent
            nécessaires ou utiles pour protéger et/ou promouvoir l&apos;activité de nos clients.
          </p>
        </section>

        {/* Compétences */}
        <section className="app-panel grid gap-8 md:grid-cols-2">
          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white/90 p-5 text-xs text-slate-800">
            <h2 className="text-sm font-semibold text-slate-900">
              Contrats commerciaux
            </h2>
            <ul className="space-y-2">
              {SKILLS_COMMERCIAUX.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[5px] flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/10 text-[10px] text-amber-700">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white/90 p-5 text-xs text-slate-800">
            <h2 className="text-sm font-semibold text-slate-900">
              Contrats industriels &amp; contract management
            </h2>
            <ul className="space-y-2">
              {SKILLS_INDUSTRIELS.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[5px] flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/10 text-[10px] text-amber-700">
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Exemples d'opérations */}
        <section className="app-panel space-y-4">
          <h2 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
            Exemples d&apos;opérations
          </h2>
          <ul className="space-y-2 text-xs text-slate-800">
            {OPERATIONS.map((op) => (
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
            {PUBLICATIONS.map((pub) => (
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
