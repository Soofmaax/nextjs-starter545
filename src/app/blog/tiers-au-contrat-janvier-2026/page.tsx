export default function BlogArticleTiersContrat() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <main className="mx-auto flex max-w-3xl flex-col gap-10 px-6 pb-24 pt-16">
        {/* En-tête */}
        <header className="space-y-3 border-b border-white/10 pb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-300">
            Temple Boyer Legal – Actualités
          </p>
          <h1 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
            Le tiers au contrat ne peut pas tout avoir : agir en responsabilité pour
            manquement contractuel sans subir les limites contractuelles prévues
          </h1>
          <p className="text-xs text-slate-300">Actualités – janvier 2026</p>
        </header>

        {/* Coordonnées / retour */}
        <section className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-4 text-xs text-slate-200 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1">
            <p className="font-semibold text-slate-100">Cabinet Temple Boyer Legal</p>
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
          <div className="flex flex-col items-start gap-2 pt-2 sm:items-end sm:pt-0">
            <a
              href="/blog"
              className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-medium text-slate-100 underline-offset-4 hover:bg-white/10 hover:underline"
            >
              Retour aux actualités
            </a>
          </div>
        </section>

        {/* Contenu de l'article */}
        <article className="space-y-6 text-sm leading-relaxed text-slate-100">
          <p>
            Par un arrêt du 17 décembre 2025 (n°24-20.154), la Cour de cassation
            poursuit un courant jurisprudentiel désormais bien établi concernant
            les droits du tiers à un contrat.
          </p>

          <p>
            Deux décisions majeures avaient déjà posé les bases :
          </p>

          <ul className="list-disc space-y-1 pl-6 text-slate-100">
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

          <p className="mt-4 rounded-2xl bg-sky-500/10 p-4 text-sm text-sky-100">
            <span className="font-semibold">À retenir en une phrase :</span>{' '}
            le contrat protège aussi contre les tiers : ceux-ci ne peuvent pas
            invoquer un manquement contractuel sans subir les mêmes limites que les
            parties signataires.
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

          <div className="mt-6 space-y-1 text-xs text-slate-300">
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

          <div className="mt-6 space-y-1 border-t border-white/10 pt-4 text-[11px] text-slate-400">
            <p>
              [1] Cass., ass. plén., 6 oct. 2006, n° 05-13.255 (arrêt « Boot Shop
              »)
            </p>
            <p>
              [2] Com. 3 juillet 2024, n° 21-14.947 (arrêt « Clamageran »)
            </p>
          </div>

          <p className="mt-4 text-[11px] text-slate-400">Publié le 19/01/2026</p>
        </article>

        {/* Bas de page simplifié */}
        <section className="border-t border-white/10 pt-6 text-[11px] text-slate-400">
          <p>
            Maître Sarah Temple-Boyer – Avocat d&apos;affaires international, Paris –
            Cabinet Temple Boyer Legal, 10 avenue de Wagram, 75008 Paris –
            contact@templeboyer-legal.com
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
