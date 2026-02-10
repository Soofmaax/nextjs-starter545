import { NextResponse } from "next/server";
import { getPosts, type SanityPost } from "../../lib/sanity.client";
import { STATIC_ARTICLES } from "../../lib/static-articles";

export async function GET() {
  let sanityPosts: SanityPost[] = [];

  try {
    sanityPosts = await getPosts();
  } catch {
    sanityPosts = [];
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3000";

  const staticItems = STATIC_ARTICLES.map((article) => ({
    title: article.title,
    link: `${baseUrl}/blog/${article.slug}`,
    description: article.summary,
    pubDate: new Date(article.publishedAt),
  }));

  const sanityItems = sanityPosts.map((post) => ({
    title: post.title,
    link: `${baseUrl}/blog/${post.slug}`,
    description: post.excerpt ?? "",
    pubDate: new Date(post.publishedAt),
  }));

  const items = [...staticItems, ...sanityItems]
    .filter((item) => !Number.isNaN(item.pubDate.getTime()))
    .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  const rssItemsXml = items
    .map((item) => {
      const descriptionPart = item.description
        ? `\n      <description><![CDATA[${item.description}]]></description>`
        : "";

      return `    <item>\n      <title><![CDATA[${item.title}]]></title>\n      <link>${item.link}</link>\n      <guid>${item.link}</guid>\n      <pubDate>${item.pubDate.toUTCString()}</pubDate>${descriptionPart}\n    </item>`;
    })
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title>Temple Boyer Legal – Publications &amp; actualités</title>\n    <link>${baseUrl}/blog</link>\n    <description>Publications et actualités du cabinet Temple Boyer Legal</description>\n${rssItemsXml}\n  </channel>\n</rss>\n`;

  return new NextResponse(rss, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
