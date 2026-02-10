export type StaticArticle = {
  slug: string;
  title: string;
  publishedAt: string;
  category: string;
  summary: string;
};

export const STATIC_ARTICLES: StaticArticle[] = [
  {
    slug: "tiers-au-contrat-janvier-2026",
    title:
      "Le tiers au contrat ne peut pas tout avoir : agir en responsabilité pour manquement contractuel sans subir les limites contractuelles prévues",
    publishedAt: "2026-01-19T00:00:00.000Z",
    category: "Actualités janvier 2026",
    summary:
      "Analyse de l'arrêt de la Cour de cassation du 17 décembre 2025 (n°24-20.154) sur les droits et limites du tiers à un contrat.",
  },
  {
    slug: "inexecution-contractuelle-janvier-2025",
    title:
      "Quels recours possibles en cas d'inexécution contractuelle ? Quelques précisions utiles sur l'exécution en nature et la réduction unilatérale du prix",
    publishedAt: "2025-01-28T00:00:00.000Z",
    category: "Actualités janvier 2025",
    summary:
      "Retour sur l'arrêt du 18 décembre 2024 relatif à la distribution d'eau à Mayotte : force majeure, impossibilité matérielle, exécution en nature et réduction unilatérale du prix.",
  },
];
