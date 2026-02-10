import Link from "next/link";
import { getSiteSettings, DEFAULT_SITE_SETTINGS } from "../../../lib/sanity.client";

export default async function BlogArticleTiersContrat() {
  const siteSettings = (await getSiteSettings()) ?? DEFAULT_SITE_SETTINGS;

  const contactEmail = siteSettings.contactEmail ?? DEFAULT_SITE_SETTINGS.contactEmail;
  const address = siteSettings.address ?? DEFAULT_SITE_SETTINGS.address;

  const addressParts = address.split(",").map((part) => part.trim());
  const isDefaultAddress = address === DEFAULT_SITE_SETTINGS.address;
  const addressLine1 = isDefaultAddress
    ? "10, avenue de Wagram"
    : addressParts[0] || "10, avenue de Wagram";
  const addressLine2 = addressParts[1] || "75008 Paris";
  const postalAddress = address || DEFAULT_SITE_SETTINGS.address!;
  return (
    <div className="app-shell">
      <main className="app-main">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
        {/* En-tête */}
        <header className="app-panel space-y-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
            Temple Boyer Legal – Actualités
          </p>
          <h1 className="text-balance text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
            Le tiers au contrat ne peut pas tout avoir : agir en responsabilité pour
            manquement contractuel sans subir les limites contractuelles prévues
          </h1>
          <p className="text-xs text-slate-600">Actualités – janvier 2026</p>
        </header>

        {/* Coordonnées / retour */}
        <section className="app-panel flex flex-col gap-4 text-xs text-slate-800 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1">
            <p className="font-semibold text-slate-900">Cabinet Temple Boyer Legal</p>
            <p>{addressLine1}</p>
            <p>{addressLine2}</p>
            <p>
              Email :
              <a
                href={`mailto:${contactEmail}`}
                className="ml-1 text-slate-900 underline-offset-4 hover:underline"
              >
                {contactEmail}
              </a>
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 pt-2 sm:items-end sm:pt-0">
            <Link
              href="/blog"
              className="rounded-full border border-slate-300 bg-transparent px-4 py-1.5 text-[11px] font-medium text-slate-900 transition-colors hover:bg-slate-100"
            >
              Retour aux actualités
            </Link>
          </div>
        </section>

        {/* Contenu de l'article */}
        <article className="app-panel space-y-6 text-sm leading-relaxed text-slate-800">
          <p>
            Par un arrêt du 17 décembre 2025 (n°24-20.154), la Cour de cassation
            poursuit un courant jurisprudentiel désormais bien établi concernant
            les droits du tiers à un contrat.
          </p>

          <p>
            Deux décisions majeures avaient déjà posé les bases :
          </p>

          <ul className="list-disc space-y-1 pl-6 text-slate-800">
            <li>
              <span className="font-semibold">Arrêt « Boot Shop » de 2006</span>[1]
              : un tiers peut engager la responsabilité d&apos;une partie à un contrat
              en invoquant un manquement contractuel, sur le terrain de la
              responsabilité délictuelle.
            </li>
            <li>
              <span className="font-semibold">Arrêt « Clamageran » de 2024</span>[2]
              : un tiers ne peut toutefois pas ignorer les clauses limitatives de
              responsabilité prévues dans le contrat.
            </li>
          </ul>

          <p>
            L&apos;arrêt commenté ici va encore plus loin : il consacre clairement que
            le tiers ne peut pas être mieux traité que les parties au contrat
            elles-mêmes.
          </p>

          <h2 className="mt-6 text-base font-semibold tracking-tight">
            Les faits expliqués simplement
          </h2>
          <p>
            Partie 1 : une société commerciale ayant confié à la Partie 2 la tenue
            de sa comptabilité, aux termes d&apos;une lettre de mission (le « Contrat
            »).
          </p>
          <p>
            Partie 2 : le cabinet comptable chargé de la tenue de la comptabilité
            aux termes du Contrat qu&apos;il a signé.
          </p>
          <p>
            Tiers : le dirigeant de la Partie 1, non signataire du Contrat.
          </p>

          <p>
            À la suite de redressements fiscaux concernant à la fois la Partie 1
            et le Tiers à titre personnel, ce dernier engage une action contre la
            Partie 2. Il estime avoir subi un préjudice personnel, résultant des
            manquements contractuels de la Partie 2.
          </p>

          <h2 className="mt-6 text-base font-semibold tracking-tight">
            Le point de blocage juridique
          </h2>
          <p>
            Pour faire échec à l&apos;action du Tiers, la Partie 2 invoque plusieurs
            clauses du Contrat :
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>une clause de forclusion,</li>
            <li>une clause de prescription,</li>
            <li>une clause imposant une tentative de conciliation préalable.</li>
          </ul>

          <p>
            La cour d&apos;appel d&apos;Aix-en-Provence écarte ces clauses, au motif que le
            Tiers, extérieur au Contrat, ne les avait pas personnellement
            acceptées.
          </p>

          <p>
            La Cour de cassation n&apos;est pas d&apos;accord : elle casse l&apos;arrêt et
            renvoie l&apos;affaire devant la cour d&apos;appel autrement composée.
          </p>

          <h2 className="mt-6 text-base font-semibold tracking-tight">
            Ce qu&apos;il faut retenir de l&apos;arrêt du 17 décembre 2025
          </h2>
          <p>
            La Cour rappelle un principe clair et équilibré :
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <span className="font-semibold">✔️ Un tiers peut agir en responsabilité délictuelle</span>{' '}
              sur le fondement d&apos;un manquement contractuel.
            </li>
            <li>
              <span className="font-semibold">❌ Mais il doit respecter les limites prévues par le contrat</span>,
              notamment les clauses limitatives, procédurales ou de délais.
            </li>
          </ul>

          <p>
            Autrement dit, le tiers peut se prévaloir du contrat, mais il ne peut
            pas en ignorer les contraintes.
          </p>

          <p>
            Admettre l&apos;inverse reviendrait à :
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>fragiliser l&apos;équilibre du contrat,</li>
            <li>porter atteinte à la sécurité juridique,</li>
            <li>permettre au juge de remettre en cause la volonté des parties.</li>
          </ul>

          <p className="mt-4 rounded-2xl bg-slate-100 p-4 text-sm text-slate-900">
            Cette évolution confirme que le tiers au contrat ne peut pas tout
            avoir : invoquer les avantages du contrat sans assumer les limites
            que les parties ont expressément prévues. La pratique contractuelle
            doit intégrer, en amont, cette articulation entre droits des
            parties et droits des tiers.
          </p>

          <h2 className="mt-6 text-base font-semibold tracking-tight">
            Enseignements pratiques pour les professionnels
          </h2>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              <span className="font-semibold">Soignez vos clauses limitatives, de procédure et de délais</span>
              : elles ne vous protègent pas seulement contre votre cocontractant,
              mais aussi contre certains tiers.
            </li>
            <li>
              <span className="font-semibold">Pensez aux tiers dès la négociation</span> : dirigeants,
              associés, sous-traitants ou clients finaux – même non parties au
              contrat – peuvent agir, mais les clauses du contrat leur seront
              opposables.
            </li>
            <li>
              <span className="font-semibold">Sécurisation renforcée des lettres de mission et contrats de services</span>
              : pour les prestataires de service, cet arrêt conforte l&apos;efficacité
              des contrats, à condition qu&apos;ils soient correctement rédigés et
              régulièrement signés.
            </li>
          </ul>

          <h2 className="mt-6 text-base font-semibold tracking-tight">
            Conclusion
          </h2>
          <p>
            La sécurité des relations d&apos;affaires repose plus que jamais sur une
            analyse rigoureuse des risques, qu&apos;ils soient contractuels ou
            délictuels, et sur une rédaction contractuelle précise, claire et
            adaptée.
          </p>

          <div className="mt-6 space-y-1 text-xs text-slate-600">
            <p>
              <span className="font-semibold">
                Sarah Temple-Boyer
              </span>{' '}
              – Avocat &amp; Médiateur certifié (France &amp; CEDR)
            </p>
            <p>
              <span className="font-semibold">Ikrame Rassale</span> – Stagiaire,
              élève-avocat
            </p>
          </div>

          <div className="mt-6 border-t border-slate-800/70 pt-4 text-[11px] text-slate-500">
            <div className="space-y-1 border-t border-slate-200 pt-4">
              <p>
                [1] Cass., ass. plén., 6 oct. 2006, n° 05-13.255 (arrêt « Boot Shop
                »)
              </p>
              <p>
                [2] Com. 3 juillet 2024, n° 21-14.947 (arrêt « Clamageran »)
              </p>
            </div>

            <p className="mt-4">Publié le 19/01/2026</p>
          </div>
        </article>

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
        </div>
      </main>
    </div>
  );
}
