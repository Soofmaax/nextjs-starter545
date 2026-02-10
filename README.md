# Temple Boyer Legal – Site vitrine

Site vitrine d’un cabinet d’avocat, développé avec :

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript** (mode strict)
- **Tailwind CSS 4**
- **Sanity CMS** pour la gestion des contenus (articles, pages éditoriales)

Ce projet est issu d’un template `create-next-app`, puis adapté pour les besoins spécifiques du cabinet.

---

## Démarrage local

Installe les dépendances, puis lance le serveur de développement :

```bash
npm install
npm run dev
```

L’application est accessible sur : <http://localhost:3000>

Les pages principales sont :

- `/` : accueil FR
- `/cabinet` : présentation du cabinet
- `/competences` (+ sous-pages) : domaines d’intervention
- `/blog` : publications & actualités
- `/contact` : formulaire de contact (maquette, pas d’envoi réel)
- `/honoraires`, `/mentions-legales`, `/confidentialite`
- `/en` : page d’accueil en anglais
- `/studio` : interface Sanity Studio (si variables d’environnement configurées)

---

## Scripts disponibles

```bash
npm run dev        # Développement (Next dev, App Router, Turbopack)
npm run lint       # Lint avec ESLint (next/core-web-vitals + TypeScript)
npm run typecheck  # Vérification de types TypeScript (tsc --noEmit)
npm run build      # Build de production (inclut un typecheck interne)
npm run start      # Démarrage en mode production (après build)
```

---

## Accessibilité (a11y) – points clés

Le Lot 2 a introduit plusieurs améliorations a11y :

- **Structure sémantique** :
  - Utilisation cohérente de `<header>`, `<main>`, `<section>`, `<article>`, `<footer>` sur les pages clés.
  - Un seul `<h1>` par page, puis des `<h2>` / `<h3>` pour structurer le contenu.
- **Lien « Aller au contenu principal »** :
  - Un lien de type *skip link* est présent en tout début de `<body>`.
  - Il devient visible au focus clavier et pointe vers `#main-content` sur chaque page.
- **Focus visible** :
  - Anneaux de focus globaux (via `globals.css`) sur les liens et boutons.
  - Styles de focus explicites sur les champs de formulaire (inputs, textarea, select).
- **Formulaires** :
  - Labels correctement associés (`htmlFor`/`id`).
  - Champs email en `type="email"`.
  - Sur la page Contact, les champs marqués `*` sont déclarés `required`.
- **Icônes décoratives** :
  - Icônes lucide-react utilisées comme décorations sont marquées `aria-hidden="true"`.

Ces choix visent à rendre la navigation au clavier et l’usage des lecteurs d’écran plus confortables, tout en restant discrets visuellement.

---

## Sanity CMS & Studio

Le contenu éditorial (articles de blog, paramètres du site…) est géré via **Sanity** :

- Configuration principale : `sanity.config.ts`
- Schémas : `sanity/schemas/*.ts`
- Client : `src/lib/sanity.client.ts`

L’interface Studio est exposée sur `/studio` et utilise `next-sanity/studio`.

Pour l’activer, définis les variables d’environnement suivantes :

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=...
NEXT_PUBLIC_SANITY_DATASET=...
# Optionnel, sinon valeur par défaut
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
```

Si ces variables ne sont pas renseignées, la page `/studio` affiche une vue explicite « Studio Sanity non configuré ».

---

## Intégration continue (CI)

Un workflow GitHub Actions est fourni dans `.github/workflows/ci.yml`.

Pour chaque `push` / `pull_request` sur `main` ou `master`, la CI :

1. Installe Node 20 avec cache npm.
2. Installe les dépendances (`npm install`).
3. Lance le lint : `npm run lint`.
4. Lance un typecheck explicite : `npm run typecheck`.
5. Lance le build de production : `npm run build`.

L’objectif du Lot 2 était d’améliorer la fiabilité de la pipeline (lint + types + build) sans alourdir le projet.

---

## Notes sur le contenu

Les textes marketing et juridiques (présentation, mentions légales, politique de confidentialité, articles) sont considérés comme sensibles.

Les modifications du Lot 2 se concentrent sur :

- l’accessibilité (structure, labels, focus, lang),
- de petites micro-optimisations de rendu,
- la DX/CI (scripts et workflow),

sans modifier le fond juridique ou le ton marketing. Toute évolution de ces contenus doit rester sous contrôle éditorial humain.
