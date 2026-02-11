import type { MetadataRoute } from "next";

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const siteUrl = rawSiteUrl.replace(/\/+$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Home FR / EN
    { url: `${siteUrl}/` },
    { url: `${siteUrl}/en` },

    // Pages FR principales
    { url: `${siteUrl}/cabinet` },
    { url: `${siteUrl}/competences` },
    { url: `${siteUrl}/honoraires` },
    { url: `${siteUrl}/contact` },
    { url: `${siteUrl}/mentions-legales` },
    { url: `${siteUrl}/confidentialite` },

    // Blog index FR
    { url: `${siteUrl}/blog` },

    // Articles statiques FR
    { url: `${siteUrl}/blog/inexecution-contractuelle-janvier-2025` },
    { url: `${siteUrl}/blog/tiers-au-contrat-janvier-2026` },
  ];
}

// TODO LOT 2 :
// - Ajouter les routes dynamiques Sanity (posts, thèmes) en les hydratant via l'API.
// - Ajuster éventuellement les priorités / fréquences de crawl.
