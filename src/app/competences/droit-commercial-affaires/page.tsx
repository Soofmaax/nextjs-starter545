import type { Metadata } from "next";
import { getSiteSettings, DEFAULT_SITE_SETTINGS } from "../../../lib/sanity.client";

export const metadata: Metadata = {
  title: "Droit commercial / droit des affaires",
  description:
    "Droit commercial et droit des affaires : contrats commerciaux, recouvrement de créances, due diligence, garanties d'actif et de passif, consultations en droit commercial.",
};

const COMPETENCES_COMMERCIAL = [
  "rédaction et négociation de tous contrats commerciaux nécessaires à la création et la conduite d'une activité commerciale (avant-contrats, achat, vente, cession/licence de marque, bail commercial etc...)",
  "action en recouvrement de créances et accompagnement de la clientèle créancière dans le contexte de l'ouverture d'une procédure collective du débiteur (déclaration de créance, interface avec les organes de la procédure, reprise des poursuites individuelles)",
  "participation à de nombreuses DDV (due diligence vendeurs) et rédaction de rapports d'audits identifiant les risques contentieux, contractuels, responsabilité et/ou réglementaires",
  "participation à rédaction de conventions de garantie d'actif et de passif (sur la base des rapports d'audits) et mise jeu de la garantie d'actif et de passif",
  "nombreuses consultations juridiques en droit commercial",
];

const OPERATIONS_COMMERCIAL = [
  "assistance de sociétés commerciales et industrielles dans la revue et la négociation de baux commerciaux, dans le cadre de leur conclusion ou renouvellement",
  "accompagnement d'un fournisseur étranger dans le secteur alimentaire dans le cadre d'un recouvrement de créance à l'encontre d'un débiteur français en liquidation judiciaire (introduction de l'action et reprise des poursuites, coordination des procédures en France et en Italie)",
  "nombreuses participations à des data-rooms requérant une expertise en droit commercial dans tous secteurs: alimentaire, santé, transport, industrie, services (loisirs et équipement à la personne)",
];

const PUBLICATIONS_COMMERCIAL = [
  "La sanction pour non-respect du plafonnement des délais de paiement est relevée à 2 millions d’euros (voir la publication)",
  "Le plafonnement légal des délais de paiement dans les contrats internationaux : l'exemple français (voir la publication)",
  "La période d’essai fait échec à l’indemnité de fin de contrat de l’agent commercial (voir la publication)",
  "Pratiques commerciales déloyales: l'annonceur, même de bonne foi, porte seul la responsabilité pour pratique commerciale trompeuse (voir la publication)",
  "Imputabilité des pratiques anticoncurrentielles d’une filiale à la société –mère (voir la publication)",
  "Délais de paiement maximum : derniers développements (voir la publication)",
  "De l’application automatique des pénalités de retard sans clause contractuelle (voir la publication)",
  "Précisions utiles sur les délais de paiement maximum en vigueur depuis le 1er janvier 2009 (voir la publication)",
  "Délais de paiement: la nouvelle législation en 3 questions, (Revue de la Confédération Générale du Patronat des Petites et Moyennes Entreprises – CGPME, juillet 2009)",
  "Bien respecter les nouveaux délais de paiement obligatoire (Usine Nouvelle, juin 2009)",
  "Pratiques commerciales : premier bilan (Les Echos, 5 décembre 2007)",
  "Actualités des conditions générales de vente depuis 2005 : quelles nouveautés pour les industriels ? (Cahiers juridiques – Journal des Fluides, novembre 2007)",
  "La réforme des soldes s’opère en douceur (Fashion Daily News, 08/09/06)",
  "Quelle réparation en cas de rupture fautive des pourparlers (Option Finance, 11/12/06",
  "Joint-venture : PME-PMI, attention aux mariages sans précautions contractuelles (Le Moci, 19/10/06)",
  "Joint-venture : l’accord-cadre est un préalable indispensable (Impulser , septembre 2006)",
];

export default async function DroitCommercialAffairesPage() {
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
            DROIT COMMERCIAL / DROIT DES AFFAIRES
          </h1>
          <p className="max-w-2xl text-sm text-slate-700">
            Temple Boyer Legal est un cabinet spécialisé en droit commercial et en droit des
            affaires, dans le conseil (contrats commerciaux) et le contentieux commercial.
          </p>
        </header>

        {/* Compétences */}
        <section className="app-panel space-y-4">
          <h2 className="text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
            Compétences
          </h2>
          <ul className="space-y-2 text-xs text-slate-800">
            {COMPETENCES_COMMERCIAL.map((item) => (
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
            {OPERATIONS_COMMERCIAL.map((op) => (
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
            {PUBLICATIONS_COMMERCIAL.map((pub) => (
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
            Maître Sarah Temple-Boyer – Avocat d&apos;affaires International Paris – Cabinet
            Temple Boyer Legal, {postalAddress} –
            {contactEmail}
          </p>
          <p className="mt-1">
            © 2015 – {new Date().getFullYear()} Sarah Temple-Boyer. Tous droits réservés.
          </p>
        </section>
      </main>
    </div>
  );
}
