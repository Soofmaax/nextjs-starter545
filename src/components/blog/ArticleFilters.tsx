"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { ChangeEvent } from "react";

type ArticleFiltersProps = {
  authorOptions: string[];
  themeOptions: string[];
  currentAuthor: string;
  currentTheme: string;
};

export function ArticleFilters({
  authorOptions,
  themeOptions,
  currentAuthor,
  currentTheme,
}: ArticleFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  if (authorOptions.length === 0 && themeOptions.length === 0) {
    return null;
  }

  const updateSearchParams = (key: "author" | "theme", value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    const queryString = params.toString();
    const target = queryString ? `${pathname}?${queryString}` : pathname;
    router.push(target);
  };

  const handleAuthorChange = (event: ChangeEvent<HTMLSelectElement>) => {
    updateSearchParams("author", event.target.value);
  };

  const handleThemeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    updateSearchParams("theme", event.target.value);
  };

  return (
    <div className="mb-4 flex flex-wrap items-center justify-end gap-3 text-xs">
      {authorOptions.length > 0 ? (
        <div>
          <label className="sr-only" htmlFor="author-filter">
            Filtrer par auteur
          </label>
          <select
            id="author-filter"
            aria-label="Filtrer par auteur"
            className="rounded-full border border-slate-300 bg-white/90 px-3 py-1.5 text-xs text-slate-900 shadow-sm focus:border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-700/20"
            value={currentAuthor}
            onChange={handleAuthorChange}
          >
            <option value="">Tous les auteurs</option>
            {authorOptions.map((author) => (
              <option key={author} value={author}>
                {author}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      {themeOptions.length > 0 ? (
        <div>
          <label className="sr-only" htmlFor="theme-filter">
            Filtrer par thème
          </label>
          <select
            id="theme-filter"
            aria-label="Filtrer par thème"
            className="rounded-full border border-slate-300 bg-white/90 px-3 py-1.5 text-xs text-slate-900 shadow-sm focus:border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-700/20"
            value={currentTheme}
            onChange={handleThemeChange}
          >
            <option value="">Tous les thèmes</option>
            {themeOptions.map((theme) => (
              <option key={theme} value={theme}>
                {theme}
              </option>
            ))}
          </select>
        </div>
      ) : null}
    </div>
  );
}
