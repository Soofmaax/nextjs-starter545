import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostsByCategorySlug } from "../../../../lib/sanity.client";

type BlogThemePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogThemePage({ params }: BlogThemePageProps) {
  const { slug } = await params;

  const posts = await getPostsByCategorySlug(slug);

  if (!posts || posts.length === 0) {
    notFound();
  }

  const themeTitle = posts[0].categoryTitle || "";

  const articles = posts.map((post) => ({
    slug: post.slug,
    title: post.title,
    date: new Intl.DateTimeFormat("fr-FR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(new Date(post.publishedAt)),
    summary: post.excerpt ?? "",
    theme: post.categoryTitle,
    authors: (post.authors ?? []).map((author) => ({
      name: author.name,
      role: author.role,
    })),
  }));

  return (
    <div className="app-shell">
      <main id="main-content" className="app-main">
        <section className="space-y-4">
          <header className="app-panel space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
              Temple Boyer Legal
            </p>
            <h1 className="text-balance text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Thème : {themeTitle}
            </h1>
            <p className="max-w-2xl text-xs text-slate-600">
              Sélection d&apos;articles et d&apos;analyses publiés par le Cabinet Temple Boyer Legal autour de ce thème.
            </p>
          </header>

          <div className="space-y-4">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="space-y-2 rounded-2xl border border-slate-200 bg-white/90 p-5 text-sm text-slate-800"
              >
                <h2 className="text-base font-semibold leading-snug text-slate-950">
                  {article.title}
                </h2>
                <p className="text-[11px] text-slate-500">Publié le {article.date}</p>
                <p className="text-xs text-slate-700">{article.summary}</p>
                {article.theme && (
                  <p className="text-[11px] text-slate-500">Thème : {article.theme}</p>
                )}
                {article.authors && article.authors.length > 0 ? (
                  <p className="text-[11px] text-slate-500">
                    Auteurs :
                    {" "}
                    {article.authors
                      .filter((author) => author.name && author.name.trim().length > 0)
                      .map((author) =>
                        author.role ? `${author.name} (${author.role})` : author.name,
                      )
                      .join(", ")}
                  </p>
                ) : null}
                <div className="pt-3">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex text-xs font-semibold text-amber-700 underline-offset-4 hover:underline"
                  >
                    Lire la publication
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
