import type { PageProps } from "next";
import Link from "next/link";
import { getPosts, type SanityPost } from "../../lib/sanity.client";
import { ArticleSelect } from "../../components/blog/ArticleSelect";
import { ArticleFilters } from "../../components/blog/ArticleFilters";

type ArticleCard = {
  slug: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  theme?: string;
  themeSlug?: string;
  authors?: { name: string; role?: string }[];
};

type ThemeOption = {
  title: string;
  slug: string;
};

const ARTICLES: ArticleCard[] = [
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

type BlogIndexPageProps = PageProps<
  Record<string, never>,
  { [key: string]: string | string[] | undefined }
>;

export default async function BlogIndexPage({ searchParams }: BlogIndexPageProps) {
  const query = searchParams ? await searchParams : {};
  const authorFilter = typeof query.author === "string" ? query.author : "";
  const themeFilter = typeof query.theme === "string" ? query.theme : "";

  let articles: ArticleCard[] = ARTICLES;
  let authorOptions: string[] = [];
  let themeOptions: string[] = [];
  let recentPosts: SanityPost[] = [];
  let exploreThemes: ThemeOption[] = [];

  try {
    const sanityPosts = await getPosts();

    if (sanityPosts && sanityPosts.length > 0) {
      recentPosts = sanityPosts.slice(0, 3);

      const filteredPosts = sanityPosts.filter((post) => {
        const matchesAuthor =
          !authorFilter ||
          (post.authors ?? []).some(
            (author) => author.name && author.name === authorFilter,
          );

        const matchesTheme =
          !themeFilter || post.categoryTitle === themeFilter;

        return matchesAuthor && matchesTheme;
      });

      articles = filteredPosts.map<ArticleCard>((post) => ({
        slug: post.slug,
        title: post.title,
        date: new Intl.DateTimeFormat("fr-FR", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }).format(new Date(post.publishedAt)),
        category: "Publications",
        summary: post.excerpt ?? "",
        theme: post.categoryTitle,
        themeSlug: post.categorySlug,
        authors: (post.authors ?? []).map((author) => ({
          name: author.name,
          role: author.role,
        })),
      }));

      const authorNames = new Set<string>();
      sanityPosts.forEach((post) => {
        (post.authors ?? []).forEach((author) => {
          if (author?.name && author.name.trim().length > 0) {
            authorNames.add(author.name);
          }
        });
      });
      authorOptions = Array.from(authorNames).sort((a, b) =>
        a.localeCompare(b, "fr"),
      );

      const themeNames = new Set<string>();
      const themeMap = new Map<string, string>();

      sanityPosts.forEach((post) => {
        const title = post.categoryTitle?.trim();
        const slug = post.categorySlug?.trim();

        if (title && title.length > 0) {
          themeNames.add(title);

          if (slug && slug.length > 0 && !themeMap.has(slug)) {
            themeMap.set(slug, title);
          }
        }
      });

      themeOptions = Array.from(themeNames).sort((a, b) =>
        a.localeCompare(b, "fr"),
      );

      exploreThemes = Array.from(themeMap.entries())
        .map(([slug, title]) => ({ slug, title }))
        .sort((a, b) => a.title.localeCompare(b.title, "fr"));
    }
  } catch {
    // Silent fallback to static ARTICLES
  }

  return (
    <div className="app-shell">
      <main className="app-main">
        <section className="space-y-4">
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
            {exploreThemes.length > 0 ? (
              <div className="pt-2 text-[11px] text-slate-600">
                <p className="font-semibold text-slate-700">Explorer par thème</p>
                <div className="mt-1 flex flex-wrap gap-2">
                  {exploreThemes.map((theme) => (
                    <Link
                      key={theme.slug}
                      href={`/blog/theme/${theme.slug}`}
                      className="inline-flex items-center rounded-full border border-slate-300 bg-white/90 px-3 py-1 text-[11px] text-slate-900 underline-offset-4 hover:bg-slate-100 hover:underline"
                    >
                      {theme.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
            {recentPosts.length > 0 ? (
              <div className="pt-2 text-xs text-slate-600">
                <p className="font-semibold text-slate-700">Articles récents</p>
                <ul className="mt-1 flex flex-wrap gap-2">
                  {recentPosts.map((post) => (
                    <li key={post._id} className="flex flex-col gap-0.5">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center rounded-full border border-slate-300 bg-white/90 px-3 py-1 text-[11px] text-slate-900 underline-offset-4 hover:bg-slate-100 hover:underline"
                      >
                        {post.title}
                      </Link>
                      {post.categoryTitle && post.categorySlug ? (
                        <Link
                          href={`/blog/theme/${post.categorySlug}`}
                          className="text-[10px] text-slate-500 underline-offset-4 hover:underline"
                        >
                          Thème : {post.categoryTitle}
                        </Link>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </header>

          <ArticleSelect
            articles={articles.map((article) => ({
              slug: article.slug,
              title: article.title,
            }))}
          />

          {authorOptions.length > 0 || themeOptions.length > 0 ? (
            <ArticleFilters
              authorOptions={authorOptions}
              themeOptions={themeOptions}
              currentAuthor={authorFilter}
              currentTheme={themeFilter}
            />
          ) : null}

          <div className="space-y-4">
            {articles.map((article) => (
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
                {article.theme && (
                  <p className="text-[11px] text-slate-500">
                    Thème :
                    {" "}
                    {article.themeSlug ? (
                      <Link
                        href={`/blog/theme/${article.themeSlug}`}
                        className="text-amber-700 underline-offset-4 hover:underline"
                      >
                        {article.theme}
                      </Link>
                    ) : (
                      article.theme
                    )}
                  </p>
                )}
@@
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
