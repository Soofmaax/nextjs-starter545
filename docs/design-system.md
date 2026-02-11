# Guide officiel design & CSS – Temple Boyer Legal

> **Règle importante**  
> Le CSS actuel est considéré comme **figé, propre et stable**.  
> **On ne modifie plus `globals.css` ni la palette de couleurs.**  
> Toute nouvelle page ou ajustement d’interface doit **réutiliser** les classes et motifs existants.

Ce document sert de référence pour :

- les développeurs (ajout de pages / composants),
- l’avocate et les stagiaires (contenu géré via Sanity),
- les futures interventions sur le site (sans casser le design).

---

## 1. Stack front & structure globale

- Framework : **Next.js 15**, App Router (`src/app`).
- CSS : **Tailwind CSS v4** via `@import "tailwindcss";` dans `src/app/globals.css`.
- Polices : **Geist Sans / Geist Mono** via `next/font`.

Le layout racine se trouve dans `src/app/layout.tsx` et définit :

- le **fond global** (clair),
- la **navigation** en haut (header),
- le **footer** en bas,
- l’intégration des polices et de `globals.css`.

Toutes les pages (home, cabinet, compétences, blog, etc.) sont rendues **entre** ce header et ce footer.

---

## 2. Fichier CSS central : `src/app/globals.css`

Ce fichier contient :

1. L’import Tailwind :
   ```css
   @import "tailwindcss";
   ```

2. Les variables de thème :
   ```css
   :root {
     --background: #ffffff;
     --foreground: #171717;
   }

   @theme inline {
     --color-background: var(--background);
     --color-foreground: var(--foreground);
     --font-sans: var(--font-geist-sans);
     --font-mono: var(--font-geist-mono);
   }
   ```

3. Le style global de base (`@layer base`) :
   - `html` : scroll lisse,
   - `body` : antialiasing,
   - `a` / `button` : styles de focus sobres (anneaux gris, pas de couleurs vives).

4. Les **composants utilitaires de layout** (`@layer components`) :

   ```css
   .app-shell {
     @apply flex min-h-screen flex-col bg-slate-50 text-slate-900;
   }

   .app-main {
     @apply mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-6 pb-20 pt-14;
   }

   .app-panel {
     @apply mx-auto w-full max-w-4xl px-4 py-10 text-slate-900 md:px-0;
   }

   .app-section-heading {
     @apply flex flex-col gap-2 md:flex-row md:items-end md:justify-between;
   }

   .app-section-label {
     @apply text-[11px] font-medium uppercase tracking-[0.22em] text-slate-500;
   }
   ```

> **À ne plus modifier** :
> - ne pas changer ces classes,
> - ne pas ajouter de nouvelles couleurs globales ici.

---

## 3. Layout global (navigation + footer)

### 3.1. Layout racine

Fichier : `src/app/layout.tsx`

Responsabilités :

- Appliquer les polices Geist.
- Récupérer les coordonnées (adresse, email) via `getSiteSettings()` (Sanity) avec fallback `DEFAULT_SITE_SETTINGS`.
- Rendre :
  - un `<header>` sticky avec nav,
  - un `<main>` qui accueille le contenu de chaque page,
  - un `<footer>` avec coordonnées + liens légaux.

**Header (menu principal)** :

- Logo TBL dans un carré blanc bordé (`border-slate-300 bg-white`).
- Icône balance (`Scale`) en gris (`text-slate-500`).
- Texte :
  - `Temple Boyer Legal` (caps, petit tracking),
  - `Cabinet d'avocat d'affaires international` (gris clair).
- Liens :
  - Accueil → `/`
  - Le Cabinet → `/cabinet`
  - Compétences → `/competences`
  - Honoraires → `/honoraires`
  - Publications / Actualités → `/blog`
  - Contact → `/contact`
  - Sélecteur de langue FR / EN (`/` et `/en`).

**Footer global** :

- Rappelle :
  - `Maître Sarah Temple-Boyer – Avocat d'affaires international`,
  - `Cabinet Temple Boyer Legal – [adresse dynamique]`,
  - Email cliquable.
- Liens :
  - Mentions légales → `/mentions-legales`
  - Confidentialité → `/confidentialite`
- Années : `© 2015 – [année courante]`.

> **À savoir** : toute nouvelle page sous `src/app/.../page.tsx` est automatiquement prise en charge par ce layout. Il ne faut **pas recréer** de header ou de footer local.

---

## 4. Motifs de layout à réutiliser

### 4.1. Structure de base d’une page

Pour une nouvelle page (ex : `/partenariats`) :

```tsx
export default function PartenariatsPage() {
  return (
    <div className="app-shell">
      <main className="app-main">
        <section className="app-panel space-y-6">
          <header className="app-section-heading">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">
                Temple Boyer Legal
              </p>
              <h1 className="text-balance text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                Partenariats
              </h1>
            </div>
            <p className="app-section-label">Droit des affaires &amp; réseau international</p>
          </header>

          <div className="space-y-4 text-sm leading-relaxed text-slate-800">
            {/* Contenu rédactionnel ici */}
          </div>
        </section>
      </main>
    </div>
  );
}
```

**Règle** :

- Toujours utiliser :
  - `app-shell` au niveau racine de la page,
  - `app-main` pour le conteneur principal,
  - `app-panel` pour chaque grande section de contenu.

### 4.2. Blocs éditoriaux

Pour un corps de texte long (article, page cabinet, note juridique) :

```tsx
<article className="app-panel space-y-6 text-sm leading-relaxed text-slate-800">
  <p>Par un arrêt du 17 décembre 2025 (...)</p>

  <h2 className="mt-6 text-base font-semibold tracking-tight">
    Sous-titre de section
  </h2>

  <p>Contenu détaillé...</p>

  <ul className="list-disc space-y-1 pl-6 text-sm text-slate-800">
    <li>Premier point important...</li>
    <li>Deuxième point...</li>
  </ul>
</article>
```

### 4.3. Cartes sobres (encadrés)

Pour les encadrés (coordonnées, liste de formations, etc.) :

```tsx
<div className="space-y-3 rounded-2xl border border-slate-200 bg-white/90 p-4 text-xs text-slate-800">
  <p className="font-semibold text-slate-900">Coordonnées du Cabinet</p>
  <p>Cabinet Temple Boyer Legal</p>
  <p>10, avenue de Wagram</p>
  <p>75008 Paris</p>
</div>
```

> **À réutiliser** pour : coordonnées, encadrés pratiques, blocs “Activités”, etc.

### 4.4. Boutons

**Bouton principal (CTA)** :

```tsx
<a
  href="#contact"
  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-[11px] font-semibold text-slate-50 shadow-sm transition-colors hover:bg-slate-800"
>
  Contacter le Cabinet
</a>
```

**Bouton secondaire** :

```tsx
<button className="rounded-full border border-slate-300 bg-transparent px-4 py-2 text-[11px] font-medium text-slate-900 transition-colors hover:bg-slate-100">
  Action secondaire
</button>
```

**Formulaires** (inputs) :

```tsx
<input
  className="w-full rounded-xl border border-slate-300 bg-white/90 px-3 py-2 text-xs text-slate-900 outline-none ring-slate-400/20 placeholder:text-slate-400 focus:border-slate-900 focus:ring-2"
/>
```

À copier-coller pour tous les nouveaux champs.

---

## 5. Palette de couleurs

La palette est volontairement **sobres** et adaptée à un cabinet d’affaires premium rue Wagram.

- Fond global : `bg-slate-50`.
- Texte principal : `text-slate-900`.
- Texte secondaire : `text-slate-600`, `text-slate-700`, `text-slate-800`.
- Accents :
  - Boutons : `bg-slate-900` (hover `bg-slate-800`), `text-slate-50`.
  - Encadrés : `bg-white`, `bg-slate-50`, `bg-slate-100`.
  - Petits indicateurs (puces) : `bg-slate-400` ou `bg-slate-500`.
- **Plus de `amber-*` / orange** : ces couleurs ont été supprimées car trop “cone de signalisation”.

> **Important** :
> - Ne pas introduire de nouvelles couleurs (pas de vert, rouge, bleu vif, etc.).
> - Toute variation doit rester dans l’échelle `slate-*` (gris) déjà utilisée.

---

## 6. Images & portrait

Le portrait de l’avocate est géré via `next/image` pour optimiser le chargement et garder une forme circulaire.

Exemple (home FR, similaire en EN) :

```tsx
import Image from "next/image";

<div className="relative mt-2 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border border-slate-300 bg-slate-100">
  <Image
    src="/sarah-temple-boyer.jpg"
    alt="Portrait de Maître Sarah Temple-Boyer"
    fill
    sizes="128px"
    className="object-cover"
  />
</div>
```

Règles :

- Garder ce pattern pour toute nouvelle photo de profil.
- Pour des images rectangulaires : utiliser `rounded-2xl`, `border-slate-200`, `bg-slate-100`, `object-cover`.

---

## 7. Sanity (CMS) et couleurs

Sanity est utilisé pour :

- Les **articles de blog dynamiques** (schéma `post`),
- Les **paramètres du site** (`siteSettings` : adresse, email, téléphone),
- Les **auteurs** et **thèmes** de publication.

**Très important** pour l’avocate et les stagiaires :

- Le contenu Sanity est **uniquement textuel et structurel** :
  - Titre, sous-titres,
  - Paragraphes,
  - Listes à puces / numérotées,
  - Éventuellement citations.
- Les couleurs, polices, tailles et styles sont **gérés par le front** (les composants Next) :
  - Il ne faut **pas** injecter de HTML avec du style inline depuis Sanity.
  - Les thèmes, encadrés, etc. se mettent en forme automatiquement via les gabarits React déjà codés.

Ainsi, quel que soit le contenu saisi dans Sanity :

- La même palette sobres (gris, blanc, anthracite) est utilisée.
- Les nouveaux articles gardent le même aspect que les articles statiques existants.

---

## 8. Règles pour les évolutions futures

1. **Ne plus modifier `globals.css`** :
   - pas de nouvelles classes,
   - pas de changements de couleurs,
   - pas d’ajout de nouvelles palettes.

2. **Ne pas changer la nav et le footer globaux** dans `layout.tsx` sauf si :
   - on ajoute/supprime un lien de menu avec accord explicite,
   - on modifie les coordonnées via `siteSettings` (Sanity) plutôt que via le layout.

3. **Pour toute nouvelle page ou section** :
   - réutiliser `app-shell`, `app-main`, `app-panel`, `app-section-heading`, `app-section-label`,
   - copier les motifs existants (boutons, encadrés, listes),
   - rester dans les classes Tailwind déjà utilisées (échelle `slate-*`).

4. **Pour Sanity** :
   - ne pas changer les types en ajoutant des champs de style (couleurs, HTML brut, etc.),
   - se limiter à des champs éditoriaux (textes, dates, slug, auteurs, thèmes).

5. **Si un ajustement de design est demandé** :
   - il doit se faire **en priorité** via :
     - ajustement du contenu (texte),
     - réutilisation de motifs existants (déplacement ou regroupement de sections),
     - choix d’autres classes Tailwind **déjà vues** dans le projet,
   - mais **sans** retoucher `globals.css` ni introduire de nouvelles couleurs.

---

## 9. Résumé

- Le design actuel est **fixé** : fond clair, typographie Geist, palette de gris et noir sobres.
- Le CSS global (`globals.css`) est stable et sert de base commune à toutes les pages.
- La navigation et le footer sont gérés une seule fois dans `layout.tsx`.
- Toute nouvelle page doit réutiliser les classes et patterns décrits ici.
- Sanity gère le **contenu** (texte), pas le style.

C’est ce guide qui fait foi pour les développements et ajustements futurs du site Temple Boyer Legal.