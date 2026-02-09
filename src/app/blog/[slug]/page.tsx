import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";

import { getPostBySlug } from "../../../lib/sanity.client";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const publishedDate = post.publishedAt ? new Date(post.publishedAt) : null;
  const formattedDate =
    publishedDate && !Number.isNaN(publishedDate.getTime())
      ? new Intl.DateTimeFormat("fr-FR", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }).format(publishedDate)
      : null;

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
              {post.title}
            </h1>
            {formattedDate ? (
              <p className="text-xs text-slate-600">Publié le {formattedDate}</p>
            ) : null}
            {post.excerpt ? (
              <p className="text-xs text-slate-600">{post.excerpt}</p>
            ) : null}
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
            {post.body ? <PortableText value={post.body} /> : null}

            {post.authors && post.authors.length > 0 ? (
              <div className="mt-6 space-y-1 text-xs text-slate-600">
                {post.authors.map((author) => (
                  <p key={author._id}>
                    <span className="font-semibold">{author.name}</span>
                    {author.role ? ` – ${author.role}` : null}
                  </p>
                ))}
              </div>
            ) : null}

            {formattedDate ? (
              <p className="mt-4 text-[11px] text-slate-500">Publié le {formattedDate}</p>
            ) : null}
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
