const ARTICLES = [
  {
    slug: "tiers-au-contrat-janvier-2026",
    title:
      "Le tiers au contrat ne peut pas tout avoir : agir en responsabilité pour manquement contractuel sans subir les limites contractuelles prévues",
    date: "19 janvier 2026",
    category: "Actualités janvier 2026",
    summary:
      "Analyse de l'arrêt de la Cour de cassation du 17 décembre 2025 (n°24-20.154) sur les droits et limites du tiers à un contrat.",
  },
  {
    slug: "inexecution-contractuelle-janvier-2025",
    title:
      "Quels recours possibles en cas d'inexécution contractuelle ? Quelques précisions utiles sur l'exécution en nature et la réduction unilatérale du prix",
    date: "28 janvier 2025",
    category: "Actualités janvier 2025",
    summary:
      "Retour sur l'arrêt du 18 décembre 2024 relatif à la distribution d'eau à Mayotte : force majeure, impossibilité matérielle, exécution en nature et réduction unilatérale du prix.",
  },
];

export default function BlogIndexPage() {
  return (
    <div className="app-shell">
      <main className="app-main">
        <header className="app-panel space-y-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
            Temple Boyer Legal
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Publications &amp; actualités
          </h1>
          <p className="max-w-2xl text-sm text-slate-700">
            Le Cabinet Temple Boyer Legal publie régulièrement, environ une fois
            par mois depuis 2007, des articles d&apos;actualité et de fond dans ses
            différents domaines de compétence (droit de la distribution, droit de
            la concurrence, droit de la consommation, droit commercial, droit des
            contrats, droit international, etc.).
          </p>
          <p className="max-w-2xl text-xs text-slate-500">
            Les publications sont classées par thèmes afin de faciliter leur
            consultation. Bonne lecture.
          </p>
        </header>

        <section className="space-y-4">
          {ARTICLES.map((article) => (
            <article
              key={article.slug}
              className="space-y-2 rounded-2xl border border-slate-200 bg-white/90 p-5 text-sm text-slate-800"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-700">
                {article.category}
              </p>
              <h2 className="text-base font-semibold leading-snug text-slate-950">
                {article.title}
              </h2>
              <p className="text-[11px] text-slate-500">Publié le {article.date}</p>
              <p className="text-xs text-slate-700">{article.summary}</p>
              <div className="pt-3">
                <a
                  href={`/blog/${article.slug}`}
                  className="inline-flex text-xs font-semibold text-amber-700 underline-offset-4 hover:underline"
                >
                  Lire la publication
                </a>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
