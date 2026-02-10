import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

import { getSiteSettings, DEFAULT_SITE_SETTINGS, getPostBySlug, getRelatedPosts, type SanityPost } from "../../../lib/sanity.client";

export type BlogPostRouteParams = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: BlogPostRouteParams,
): Promise<Metadata> {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Publication introuvable",
      description: "Cette publication n'existe pas ou n'est plus disponible.",
    };
  }

  const title = post.seoTitle && post.seoTitle.trim().length > 0
    ? post.seoTitle
    : post.title;

  const description = post.excerpt
    ? post.excerpt
    : "Publication du cabinet Temple Boyer Legal.";

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `/blog/${slug}`,
    },
  };
}

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const siteSettings = (await getSiteSettings()) ?? DEFAULT_SITE_SETTINGS;

  const contactEmail = siteSettings.contactEmail;
  const address = siteSettings.address;

  const addressParts = address.split(",").map((part) => part.trim());
  const isDefaultAddress = address === DEFAULT_SITE_SETTINGS.address;
  const addressLine1 = isDefaultAddress
    ? "10, avenue de Wagram"
    : addressParts[0] || "10, avenue de Wagram";
  const addressLine2 = addressParts[1] || "75008 Paris";
  const postalAddress = address;

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts: SanityPost[] = await getRelatedPosts(slug);

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
            {post.categoryTitle ? (
              <p className="text-[11px] text-slate-600">
                Thème :
                {" "}
                {post.categorySlug && post.categoryTitle ? (
                  <Link
                    href={`/blog/theme/${post.categorySlug}`}
                    className="text-slate-900 underline-offset-4 hover:underline"
                  >
                    {post.categoryTitle}
                  </Link>
                ) : (
                  post.categoryTitle
                )}
              </p>
            ) : null}
            {post.authors && post.authors.length > 0 ? (
              <p className="text-[11px] text-slate-600">
                Auteurs :
                {" "}
                {post.authors
                  .filter((author) => author.name && author.name.trim().length > 0)
                  .map((author) =>
                    author.role ? `${author.name} (${author.role})` : author.name,
                  )
                  .join(", ")}
              </p>
            ) : null}
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
                  className="ml-1 text-amber-700 underline-offset-4 hover:underline"
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

          {relatedPosts.length > 0 ? (
            <section className="app-panel space-y-3 text-sm text-slate-800">
              <h2 className="text-sm font-semibold tracking-tight text-slate-950">
                Lire aussi
              </h2>
              <ul className="space-y-2 text-xs text-slate-700">
                {relatedPosts.map((related) => (
                  <li key={related._id} className="space-y-1 rounded-2xl border border-slate-200 bg-white/90 p-4">
                    <Link
                      href={`/blog/${related.slug}`}
                      className="text-xs font-semibold text-slate-900 underline-offset-4 hover:underline"
                    >
                      {related.title}
                    </Link>
                    <div className="flex flex-wrap gap-2 text-[11px] text-slate-500">
                      {related.categoryTitle && related.categorySlug ? (
                        <Link
                          href={`/blog/theme/${related.categorySlug}`}
                          className="hover:underline"
                        >
                          Thème : {related.categoryTitle}
                        </Link>
                      ) : related.categoryTitle ? (
                        <span>Thème : {related.categoryTitle}</span>
                      ) : null}
                      {related.authors && related.authors.length > 0 ? (
                        <span>
                          Auteurs :
                          {" "}
                          {related.authors
                            .filter((author) => author.name && author.name.trim().length > 0)
                            .map((author) =>
                              author.role
                                ? `${author.name} (${author.role})`
                                : author.name,
                            )
                            .join(", ")}
                        </span>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

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
