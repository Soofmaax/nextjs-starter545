import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

// TODO LOT 2 : normaliser le trailing slash de NEXT_PUBLIC_SITE_URL
// (ex. supprimer la barre de fin avant de concaténer /sitemap.xml).
