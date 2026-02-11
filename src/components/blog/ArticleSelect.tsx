"use client";

import { useRouter } from "next/navigation";

type Article = {
  slug: string;
  title: string;
};

type ArticleSelectProps = {
  articles: Article[];
};

export function ArticleSelect({ articles }: ArticleSelectProps) {
  const router = useRouter();

  if (!articles || articles.length === 0) {
    return null;
  }

  return (
    <div className="mb-4 flex justify-end">
      <label className="sr-only" htmlFor="article-select">
        Sélectionner un article
      </label>
      <select
        id="article-select"
        aria-label="Sélectionner un article"
        defaultValue=""
        onChange={(event) => {
          const value = event.target.value;
          if (value) {
            router.push(`/blog/${value}`);
          }
        }}
        className="inline-flex max-w-full rounded-full border border-slate-300 bg-white/90 px-3 py-1.5 text-xs text-slate-900 shadow-sm focus:border-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-700/20"
      >
        <option value="">Sélectionner un article</option>
        {articles.map((article) => (
          <option key={article.slug} value={article.slug}>
            {article.title}
          </option>
        ))}
      </select>
    </div>
  );
}
