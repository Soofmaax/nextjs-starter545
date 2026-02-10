# Temple Boyer Legal – Site Next.js (App Router)

Ce projet est une application [Next.js](https://nextjs.org) utilisant l’**App Router** (`src/app`) pour le site du cabinet Temple Boyer Legal.

## Démarrage

Lancer le serveur de développement :

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Puis ouvrir [http://localhost:3000](http://localhost:3000).

## Structure et i18n "light"

- **Racine App Router** : `src/app/`
  - `src/app/layout.tsx` : layout racine, HTML en `lang="fr"`, metadata SEO globales.
  - `src/app/page.tsx` : page d’accueil **FR** (`/`).
  - `src/app/en/page.tsx` : page d’accueil **EN** (`/en`).
  - `src/app/en/layout.tsx` : layout spécifique à la section EN, avec `<html lang="en">`.

Il n’y a **pas** de configuration `i18n` dans `next.config.ts` (modèle Pages Router). L’i18n est gérée de façon légère via :

- des routes distinctes `/` (FR) et `/en` (EN),
- des metadata `alternates.languages` pour relier home FR et EN,
- des attributs `lang` adaptés dans les layouts.

## SEO technique

Les principaux éléments SEO sont gérés via l’API `Metadata` de Next.js :

- `src/app/layout.tsx` :
  - `metadataBase` basé sur `NEXT_PUBLIC_SITE_URL` (fallback `http://localhost:3000`).
  - Title/description globaux.
  - Bloc `openGraph` (site web, locale `fr_FR`).
  - Bloc `twitter` minimal (`summary_large_image`).
- Pages avec metadata spécifiques :
  - Home FR : `src/app/page.tsx`.
  - Home EN : `src/app/en/page.tsx`.
  - Blog index : `src/app/blog/page.tsx`.
  - Articles dynamiques : `src/app/blog/[slug]/page.tsx` (via `generateMetadata`, exploite `post.seoTitle`).
  - Articles statiques clés :
    - `src/app/blog/inexecution-contractuelle-janvier-2025/page.tsx`
    - `src/app/blog/tiers-au-contrat-janvier-2026/page.tsx`

Fichiers SEO globaux :

- `src/app/robots.ts` : expose un sitemap XML, autorise l’indexation (`allow: "/"`).
- `src/app/sitemap.ts` : liste les principales routes FR/EN, le blog et les deux articles statiques.

## Contenu et liens

- Les contenus juridiques/marketing (textes de pages, articles) sont gérés dans les pages `src/app/...` et/ou via Sanity.
- Les liens de navigation de la home FR ne pointent plus vers des routes inexistantes :
  - le lien `/partenariats` a été retiré (route non encore implémentée),
  - le lien d’ancre `#plan-acces` a été retiré (section non présente).

## Notes techniques

- Le projet utilise [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) et les polices Geist.
- TypeScript est activé en mode strict (`tsconfig.json`).
- Le routage est entièrement basé sur l’App Router (`src/app`), pas de Pages Router.
