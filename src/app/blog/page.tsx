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
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-24 pt-16">
        <header className="space-y-3 border-b border-white/10 pb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-300">
            Temple Boyer Legal
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Publications &amp; actualités
          </h1>
          <p className="max-w-2xl text-sm text-slate-200">
            Sélection d&apos;analyses, d&apos;articles et de décryptages de l&apos;actualité
            juridique en droit des affaires, rédigés par le Cabinet Temple Boyer
            Legal.
          </p>
        </header>

        <section className="space-y-4">
          {ARTICLES.map((article) => (
            <article
              key={article.slug}
              className="space-y-2 rounded-3xl border border-white/10 bg-slate-950/70 p-5 text-sm text-slate-100"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-300">
                {article.category}
              </p>
              <h2 className="text-base font-semibold leading-snug">
                {article.title}
              </h2>
              <p className="text-[11px] text-slate-400">Publié le {article.date}</p>
              <p className="text-xs text-slate-200">{article.summary}</p>
              <div className="pt-3">
                <a
                  href={`/blog/${article.slug}`}
                  className="inline-flex text-xs font-semibold text-sky-300 underline-offset-4 hover:underline"
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
