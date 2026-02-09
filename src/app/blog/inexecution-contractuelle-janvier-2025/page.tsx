export default function BlogArticleInexecutionContractuelle() {
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
            Quels recours possibles en cas d&apos;inexécution contractuelle ? Quelques
            précisions utiles sur l&apos;exécution en nature et la réduction
            unilatérale du prix
          </h1>
          <p className="text-xs text-slate-600">Actualités – janvier 2025</p>
        </header>

        {/* Coordonnées / retour */}
        <section className="app-panel flex flex-col gap-4 text-xs text-slate-800 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1">
            <p className="font-semibold text-slate-900">Cabinet Temple Boyer Legal</p>
            <p>10, avenue de Wagram</p>
            <p>75008 Paris</p>
            <p>
              Email :
              <a
                href="mailto:contact@templeboyer-legal.com"
                className="ml-1 text-amber-700 underline-offset-4 hover:underline"
              >
                contact@templeboyer-legal.com
              </a>
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 pt-2 sm:items-end sm:pt-0">
            <a
              href="/blog"
              className="rounded-full border border-slate-300 bg-transparent px-4 py-1.5 text-[11px] font-medium text-slate-900 transition-colors hover:bg-slate-100"
            >
              Retour aux actualités
            </a>
          </div>
        </section>

        {/* Contenu de l'article */}
        <article className="app-panel space-y-6 text-sm leading-relaxed text-slate-800">
          <p>
            C&apos;est à l&apos;occasion de la sécheresse exceptionnelle à Mayotte et de
            son impact sur les contrats de distribution d&apos;eau potable que la Cour
            de cassation a rendu, le 18 décembre 2024, un arrêt très intéressant
            sur l&apos;interprétation à donner de certaines dispositions, de portée
            encore incertaine, du nouveau droit français des obligations.
          </p>

          <h2 className="mt-6 text-base font-semibold tracking-tight">
            Rappel des faits
          </h2>
          <p>
            Les requérants, ayant souscrit un contrat de distribution d&apos;eau avec
            la Société mahoraise des eaux (SMAE), ont subi des coupures d&apos;eau à
            partir de juin 2023 en raison d&apos;une sécheresse exceptionnelle ayant
            conduit le préfet de Mayotte à restreindre l&apos;accès à l&apos;eau via des
            arrêtés.
          </p>
          <p>
            Reprochant à la SMAE de ne pas assurer la continuité du service et la
            fourniture d&apos;eau propre, ils ont assigné la société pour obtenir
            notamment :
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              Le rétablissement de l&apos;approvisionnement continu au robinet ou, à
              défaut, la mise à disposition d&apos;eau en bouteilles ou fontaines
              (autrement dit, l&apos;exécution forcée en nature au sens de l&apos;article
              1221 du code civil) ;
            </li>
            <li>
              Une réduction de 90 % du prix de l&apos;abonnement jusqu&apos;au
              rétablissement du service (autrement dit, la réduction du prix au
              sens de l&apos;article 1223 du code civil).
            </li>
          </ul>

          <p>
            L&apos;arrêt du 18 décembre 2024 consacre trois points essentiels :
          </p>
          <ul className="list-decimal space-y-1 pl-6">
            <li>
              l&apos;inapplicabilité de l&apos;exécution en nature face à une impossibilité
              matérielle avérée (en l&apos;occurrence en raison d&apos;un cas de force
              majeure) ;
            </li>
            <li>
              le refus du juge de substituer une autre obligation non prévue au
              contrat ;
            </li>
            <li>
              la possibilité pour le créancier, en cas d&apos;exécution imparfaite,
              d&apos;obtenir une réduction de prix, même s&apos;il n&apos;a pas encore payé la
              totalité du prix.
            </li>
          </ul>

          <h2 className="mt-6 text-base font-semibold tracking-tight">
            1. Inexécution contractuelle et impossibilité matérielle : limites de
            l&apos;exécution en nature
          </h2>
          <p>
            Les requérants exigeaient le rétablissement de l&apos;accès à l&apos;eau
            potable, malgré des restrictions préfectorales imposées par la
            sécheresse exceptionnelle de 2023.
          </p>
          <p>
            La Cour de cassation confirme l&apos;analyse des juges du fond :
          </p>
          <p>
            L&apos;exécution forcée de l&apos;obligation de distribution d&apos;eau potable au
            robinet était matériellement impossible, du fait de la contrainte
            insurmontable imposée par l&apos;arrêté préfectoral.
          </p>
          <p>
            Ce faisant, en présence d&apos;un cas de force majeure au sens de
            l&apos;article 1218 du code civil, la SMAE est exonérée de toute
            responsabilité et déchargée de son obligation de fournir une
            prestation rendue manifestement impossible.
          </p>

          <h2 className="mt-6 text-base font-semibold tracking-tight">
            2. Le juge ne peut pas substituer une obligation non prévue au contrat
          </h2>
          <p>
            En alternative au rétablissement du service, les requérants
            demandaient que la SMAE livre de l&apos;eau en bouteilles ou via des
            fontaines pour satisfaire à ses obligations.
          </p>
          <p>
            La Cour de cassation rejette catégoriquement cette demande :
          </p>
          <p>
            L&apos;exécution forcée ne peut porter que sur l&apos;obligation contractuelle
            telle que stipulée. Si l&apos;obligation principale devient impossible à
            exécuter, aucune règle ne permet de la remplacer par une obligation
            différente sans stipulation expresse au contrat.
          </p>
          <p>
            Autrement dit, la Haute Juridiction refuse de s&apos;immiscer dans le
            « domaine réservé » des parties qu&apos;est le contrat, en réaffirmant le
            principe de l&apos;autonomie de la volonté et du consensualisme.
          </p>

          <h2 className="mt-6 text-base font-semibold tracking-tight">
            3. Réduction unilatérale du prix : portée de l&apos;article 1223 du code
            civil
          </h2>
          <p>
            Les requérants sollicitaient une réduction de 90 % du prix de
            l&apos;abonnement jusqu&apos;au rétablissement du service.
          </p>
          <p>
            La Cour de cassation consacre deux points majeurs :
          </p>
          <ul className="list-disc space-y-1 pl-6">
            <li>
              <span className="font-semibold">
                La recevabilité d&apos;une demande de réduction de prix, même sans
                paiement intégral préalable
              </span>
              : au nom du droit d&apos;accès au juge, une demande fondée sur l&apos;article
              1223 peut être introduite même si le créancier n&apos;a pas encore payé
              la totalité du prix. Cette interprétation s&apos;écarte d&apos;une lecture
              stricte de l&apos;alinéa 2 de l&apos;article 1223, qui laissait penser que
              seul le paiement intégral conditionnait la saisine du juge.
            </li>
            <li>
              <span className="font-semibold">
                Le caractère unilatéral de la réduction de prix, sous contrôle du
                juge
              </span>
              : le créancier peut notifier une réduction de prix de sa propre
              initiative, mais il prend le risque d&apos;être condamné pour refus
              injustifié de paiement si le juge estime ultérieurement cette
              réduction abusive.
            </li>
          </ul>

          <p>
            Même si la Cour facilite ici l&apos;accès à la réduction du prix, il
            restera délicat, en pratique, d&apos;obtenir une réduction substantielle
            dans un contexte où le débiteur est par ailleurs exonéré de
            responsabilité en raison d&apos;un cas de force majeure.
          </p>

          <h2 className="mt-6 text-base font-semibold tracking-tight">
            Recommandations pratiques
          </h2>
          <p>
            Cet arrêt, riche d&apos;enseignements, invite à renforcer la technique
            contractuelle en anticipant les risques et en aménageant, au sein du
            contrat, des clauses adaptées, notamment :
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <span className="font-semibold">La force majeure (article 1218)</span>
              : une clause de force majeure doit être personnalisée et adaptée au
              secteur concerné, en particulier lorsque la partie supporte la
              charge d&apos;exécution (fournisseur, prestataire).
            </li>
            <li>
              <span className="font-semibold">
                Des obligations de substitution ou alternatives
              </span>
              : côté client, il peut être pertinent de prévoir contractuellement
              des obligations de remplacement si l&apos;obligation principale devient
              impossible à exécuter.
            </li>
            <li>
              <span className="font-semibold">La réduction unilatérale du prix</span>
              : l&apos;article 1223 n&apos;étant pas d&apos;ordre public, il peut, selon la
              position contractuelle occupée, être exclu ou encadré par des
              stipulations précises.
            </li>
            <li>
              <span className="font-semibold">
                Le recours aux modes amiables de résolution des différends
              </span>
              : médiation, conciliation et négociation doivent être envisagées
              pour limiter les dérives contentieuses.
            </li>
          </ul>

          <p>
            Plus largement, la sécurité des relations d&apos;affaires repose sur une
            analyse rigoureuse des risques – contractuels comme délictuels – et
            sur une rédaction contractuelle précise, claire et adaptée aux
            spécificités de chaque secteur.
          </p>

          <div className="mt-6 space-y-1 text-xs text-slate-600">
            <p>
              <span className="font-semibold">Sarah Temple-Boyer</span> – Avocat &amp;
              Médiateur certifié (France &amp; CEDR)
            </p>
            <p>
              <span className="font-semibold">Aude Denis</span> – Stagiaire, élève
              avocat
            </p>
          </div>

          <p className="mt-4 text-[11px] text-slate-500">Publié le 28/01/2025</p>
        </article>

        {/* Bas de page simplifié */}
        <section className="border-t border-slate-800/70 pt-6 text-[11px] text-slate-400">
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
        </div>
      </main>
    </div>
  );
}
