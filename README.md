# Temple Boyer Legal – Site web

Projet Next.js pour le site du cabinet d’avocat d’affaires **Temple Boyer Legal** (Paris, avenue de Wagram).

- Framework : Next.js 15 (App Router)
- UI : Tailwind CSS v4, polices Geist
- CMS : Sanity (Studio et contenus dynamiques pour le blog & paramètres du site)
- Hébergement : Vercel

Ce README sert de point d’entrée pour les développements. Les détails de design sont documentés dans `docs/design-system.md`.

---

## 1. Démarrage du projet

Installer les dépendances :

```bash
npm install
```

Lancer le serveur de développement :

```bash
npm run dev
```

Puis ouvrir [http://localhost:3000](http://localhost:3000).

Le layout global (nav + footer) se trouve dans `src/app/layout.tsx`. La page d’accueil française est dans `src/app/page.tsx`, la version anglaise dans `src/app/en/page.tsx`.

---

## 2. Commandes principales

- `npm run dev` : démarrage en développement (Next dev avec Turbopack)
- `npm run lint` : linting (ESLint + règles Next/TypeScript)
- `npm run build` : build de production (inclut le type-check et la collecte des données de pages)
- `npm start` : lancement du serveur en mode production après `npm run build`

---

## 3. Design & CSS

Le design est **figé et documenté** pour garantir la stabilité visuelle du site.

- Fichier principal : `src/app/globals.css`
- Layout global : `src/app/layout.tsx`
- Guide complet : `docs/design-system.md`

**Important :**

- Ne pas modifier directement `globals.css` sauf décision explicite.
- Pour toute nouvelle page ou section, réutiliser les classes et motifs décrits dans `docs/design-system.md` (`app-shell`, `app-main`, `app-panel`, boutons, formulaires, etc.).
- La palette est volontairement sobre (gris, blanc, anthracite). Aucune couleur vive ne doit être ajoutée.

---

## 4. Sanity (CMS)

Sanity est utilisé pour :

- Les paramètres du site (adresse, email, téléphone, titre).
- Les articles du blog dynamiques (schéma `post`).
- Les auteurs (`author`) et thèmes de publication (`category`).

Configuration :

- Fichier du Studio : `sanity.config.ts`
- Schémas : `sanity/` (posts, auteurs, catégories, settings).
- Client Sanity côté Next : `src/lib/sanity.client.ts`

Environnement (Vercel / local) :

- `NEXT_PUBLIC_SANITY_PROJECT_ID` : identifiant du projet Sanity.
- `NEXT_PUBLIC_SANITY_DATASET` : dataset (souvent `production`).
- `NEXT_PUBLIC_SANITY_API_VERSION` : optionnel (une date ISO, par défaut gérée dans le code).

**Règle de contenu :**

- Le contenu Sanity est purement **éditorial** (texte, titres, listes...).
- Le style (couleurs, tailles, polices) est imposé par les composants React côté Next.
- Ne pas injecter de HTML stylé ni de couleurs via Sanity.

---

## 5. Structure des pages

- `src/app/page.tsx` : page d’accueil FR.
- `src/app/en/page.tsx` : page d’accueil EN.
- `src/app/cabinet/page.tsx` : présentation du cabinet.
- `src/app/competences/...` : pages de compétences (générale + sous-pages spécialisées).
- `src/app/honoraires/page.tsx` : politique d’honoraires.
- `src/app/contact/page.tsx` : contact et formulaire (démo).
- `src/app/confidentialite/page.tsx` : politique de confidentialité.
- `src/app/mentions-legales/page.tsx` : mentions légales.
- `src/app/blog/page.tsx` : liste des articles (statiques + Sanity).
- `src/app/blog/[slug]/page.tsx` : article Sanity par slug.
- `src/app/blog/tiers-au-contrat-janvier-2026/page.tsx` : article statique (tiers au contrat).
- `src/app/blog/inexecution-contractuelle-janvier-2025/page.tsx` : article statique (inexécution contractuelle).
- `src/app/studio/[[...index]]/page.tsx` : Studio Sanity intégré.

Toute nouvelle page doit suivre la structure décrite dans `docs/design-system.md`.

---

## 6. Déploiement sur Vercel

Le projet est conçu pour être déployé sur Vercel :

- La CI vérifie :
  - `npm install`
  - `npm run lint`
  - `npm run build`
- Vercel refuse les versions vulnérables de Next.js (React2Shell). Le projet est configuré avec une version patchée de Next (`15.4.8`).

Pour déployer :

1. Pousser sur la branche utilisée par Vercel (ex. `master`).
2. Vercel lance automatiquement un nouveau build.
3. Les variables d’environnement Sanity doivent être configurées dans les Settings du projet Vercel.

---

## 7. Références externes

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Sanity.io](https://www.sanity.io)
- [Vercel](https://vercel.com)
