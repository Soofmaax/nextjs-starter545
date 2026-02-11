import type { Metadata } from "next";
import { getSiteSettings, DEFAULT_SITE_SETTINGS } from "../../../lib/sanity.client";

export const metadata: Metadata = {
  title: "Droit de la concurrence & concurrence déloyale",
  description:
    "Droit de la concurrence, concurrence déloyale et pratiques restrictives : audits, conformité, partenariats, contentieux devant les autorités de concurrence et juridictions nationales.",
};

const INTRO_POINTS = [
  "Le droit de la concurrence se décompose en trois volets distincts dans lesquels le Cabinet Temple Boyer Legal dispose de l'expertise requise pour vous conseiller et vous représenter devant les juridictions compétentes:",
  "Le droit de la \"libre\" concurrence : entendu comme le droit Antitrust, d'inspiration communautaire et qui réglemente toutes les pratiques portant atteinte au marché et à l'économie dans son ensemble. Il s'agit essentiellement des pratiques d'ententes (ex. cartels sur les prix), du contrôle des concentrations et des aides d'Etat.",
  "Le droit de la \"concurrence déloyale\" : il s'agit d'une spécificité du droit français qui appréhende toutes les pratiques commerciales déloyales entre opérateurs concurrents (tels que le dénigrement, le parasitisme...).",
  "Le droit des pratiques restrictives de concurrence: essentiellement appréhendé au travers de l'article L.442-6 du code de commerce français et qui donne lieu à une jurisprudence abondante.",
];

const COMPETENCES_CONCURRENCE = [
  "revue de tous accords commerciaux au regard des règles européennes sur les restrictions verticales (EU Regulation 330/2010) et horizontales ainsi qu'au regard des règles françaises du droit de la concurrence",
  "accompagnement stratégique de la clientèle dans la mise en place de partenariats au regard des contraintes du droit de la concurrence et de la concurrence déloyale",
  "analyse de la contrôlabilité des opérations dites \"de concentration\" (fusion, acquisition, joint-venture) au regard du droit français et communautaire de la concurrence",
  "accompagnement de la clientèle dans la mise en place de programmes de conformité et de bonnes pratiques au regard du droit de la concurrence (\"Do/Don't Do\" vademecum)",
  "assistance et représentation de la clientèle face à la DGCCRF et devant l'Autorité de la concurrence",
  "assistance de la clientèle dans la mise en en place de pratiques commerciales en ligne avec les règles relatives à la concurrence déloyale (dénigrement, parasitisme, publicité comparative...) et les pratiques restrictives de concurrence (rupture brutale des relations commerciales établies, déséquilibre significatif...)",
  "Représentation, en défense ou en demande, de la clientèle devant les juridictions nationales pour faits de concurrence déloyale ou pratiques restrictives de concurrence",
];

const OPERATIONS_CONCURRENCE = [
  "assistance et représentation devant les tribunaux d'un fabricant de dispositifs médicaux accusé par un concurrent de manoeuvres de dénigrement et un comportement parasitaire constitutifs de concurrence déloyale",
  "mise en conformité de la politique et des pratiques commerciales d’un grossiste dans la distribution agro-alimentaire.",
  "défense d’un acteur majeur de la manutention portuaire outre-mer et du syndicat professionnel dont il était membre dans le cadre d’une procédure devant l’Autorité de la concurrence suite à une notification de griefs pour entente illicite.",
  "revue des accords de coopération industrielle et de transfert de technologie d'un fabricant de pipe-lines au regard des règles de la concurrrence sur les accords de coopération horizontale.",
  "assistance d'un opérateur dans le secteur-agro alimentaire en prise à des enquêtes de la DGCCRF relatives à la sécurité des produits mis en vente",
];

const PUBLICATIONS_CONCURRENCE = [
  "Dawn Raid Guidelines, World Law Group Ltd., 2011 – Contribution pour la France",
  "De l’intérêt pour une entreprise d’adopter un programme de conformité (Parties I et II) – (voir la publication Partie I) (voir la publication Partie II)",
  "Imputabilité des pratiques anticoncurrentielles d’une filiale à la société –mère (voir la publication)",
  "Le recours contre les ordonnances d’autorisation de visites et de saisies sanctionné au vis de l’article 6§1 de la CEDH (voir la publication)",
  "Points clefs du communiqué de l’Autorité de la concurrence sur les sanctions pécuniaires en matière de pratiques anticoncurrentielles (voir la publication)",
  "Saisies informatiques : la cour de cassation valide indirectement les pratiques de l’Autorité de la concurrence (voir la publication)",
  "Que retenir des nouvelles règles européennes en matière de coopération horizontale (voir la publication)",
  "Entreprises en position forte sur un marché : gare à votre politique commerciale ! (voir la publication)",
  "Les préconisations du rapport \"FRS\" du 20 septembre 2010 sur l’appréciation de la sanction en matière de pratiques anticoncurrentielles (voir la publication)",
  "Des conséquences heureuses de la qualification d’aide d’Etat (voir la publication)",
  "Bilan de la première année d’exercice de l’Autorité de la concurrence : l’impact de la LME (Partie I) (voir la publication) et la pratique décisionnelle et les affaires marquantes de 2009 (Partie II) – (voir la publication)",
  "Le nouveau règlement des restrictions verticales est arrivé! (voir la publication)",
  "Fin de la saga ciments corses: Lafarge et Vicat échappent à l'abus de position dominante (voir la publication)",
  "Que retenir des nouvelles lignes directrices en matière de contrôle des concentrations (voir la publication)",
  "Merger Control Basics 2010 – World Law Group Ltd., 2010 – Contribution pour la France",
  "Pas d’abus de position dominante sans lien entre marché dominé et comportement prédateur (voir la publication)",
  "Echange d’informations et ententes illicites : la position des autorités de la concurrence (voir la publication)",
  "Le programme de clémence français : conditions et procédure (voir la publication)",
  "Réussir son programme de conformité : panorama des éléments-clefs à l’usage des entreprises (voir la publication)",
  "La nouvelle Autorité de concurrence à compter du 1er janvier 2009 (voir la publication)",
  "La concurrence comme « levier de la croissance » dans le projet de loi de modernisation de l’économie (voir la publication)",
];

export default async function DroitConcurrenceConcurrenceDeloyalePage() {
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
            DROIT DE LA CONCURRENCE &amp; CONCURRENCE DELOYALE
          </h1>
        </header>

        {/* Introduction */}
        <section className="app-panel space-y-3 text-sm leading-relaxed text-slate-700">
          {INTRO_POINTS.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        {/* Compétences */}
        <section className="app-panel space-y-4">
          <h2 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
            Compétences
          </h2>
          <ul className="space-y-2 text-xs text-slate-800">
            {COMPETENCES_CONCURRENCE.map((item) => (
              <li
                key={item}
                className="flex gap-2 rounded-2xl border border-slate-200 bg-white/90 px-3 py-3"
              >
                <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-slate-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Exemples d'opérations */}
        <section className="app-panel space-y-4">
          <h2 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
            Exemples d&apos;opérations
          </h2>
          <ul className="space-y-2 text-xs text-slate-800">
            {OPERATIONS_CONCURRENCE.map((op) => (
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
            {PUBLICATIONS_CONCURRENCE.map((pub) => (
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

        
      </main>
    </div>
  );
}
