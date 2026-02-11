# TODO - Temple Boyer Legal

Ce fichier documente les améliorations à apporter au projet, classées par priorité.

Dernière mise à jour : 2026-02-11

---

## 🟠 MAJEUR (à traiter prochainement)

### 1. Duplication massive de logique d'adresse et coordonnées
**Problème :**
- Bloc `getSiteSettings` + formatage adresse répété dans 10+ fichiers
- Bas de page "Maître Sarah Temple-Boyer – ..." copié-collé partout

**Impact :**
- Difficulté de maintenance
- Risque d'incohérences lors de changements de coordonnées

**Solution recommandée :**
- Créer `src/lib/contact.ts` avec `getContactInfo()`
- Créer composants réutilisables : `<ContactCard />`, `<FooterSignature />`
- Refactorer toutes les pages pour utiliser ces composants

**Fichiers concernés :**
- layout.tsx, page.tsx, cabinet, competences (+ sous-pages), honoraires, contact, blog, mentions, confidentialite, articles statiques

**Estimation :** 3-4h

---

### 2. Pages légales sans metadata
**Problème :**
- `cabinet/page.tsx`, `confidentialite/page.tsx`, `mentions-legales/page.tsx` n'exportent pas de metadata

**Impact :**
- Perte SEO sur pages importantes
- Mauvais référencement des pages légales

**Solution :**
Ajouter metadata à chaque page :
```ts
export const metadata: Metadata = {
  title: "Mentions légales | Temple Boyer Legal",
  description: "...",
};
```

**Fichiers concernés :**
- src/app/cabinet/page.tsx
- src/app/confidentialite/page.tsx
- src/app/mentions-legales/page.tsx

**Estimation :** 30min

---

### 3. Documentation décalée de la réalité du code
**Problèmes :**
- Politique de confidentialité mentionne Google Analytics (non implémenté)
- Design system interdisait amber (maintenant corrigé)

**Solution :**
- Mettre à jour `confidentialite/page.tsx` pour refléter l'absence de tracking
- OU implémenter Analytics + bandeau cookies si souhaité
- Vérifier cohérence entre docs/ et code

**Estimation :** 1-2h

---

## 🟡 MINEUR (amélioration continue)

### 4. Rate limiting en mémoire (non distribué)
**Problème :**
- `/api/contact/route.ts` utilise Map in-memory
- Sur Vercel, chaque instance serverless a sa propre mémoire

**Impact :**
- Rate limit non partagé entre instances
- Acceptable pour site vitrine avec trafic modéré

**Solution future :**
- Utiliser Vercel KV ou Upstash Redis pour rate limiting distribué

**Estimation :** 2h

---

### 5. Absence de CSP (Content Security Policy)
**Problème :**
- Headers de sécurité partiels dans `next.config.ts`
- Pas de CSP définie

**Impact :**
- Protection XSS/injection limitée

**Solution :**
Ajouter CSP restrictive :
```ts
{
  key: 'Content-Security-Policy',
  value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' cdn.sanity.io; ..."
}
```

**Estimation :** 1-2h + tests

---

### 6. Absence de tests automatisés
**Problème :**
- Aucun test (unitaire/intégration/e2e)
- Pas de mesure de couverture

**Impact :**
- Régressions non détectées
- Refactoring risqué

**Solution :**
- Ajouter Playwright ou Cypress pour smoke tests (home, contact, blog)
- Ajouter tests dans CI

**Estimation :** 4-6h (setup initial)

---

### 7. Amélioration UX/Accessibilité
**Problèmes :**
- Boutons "S'abonner au flux RSS" sans action → devraient être des liens `<a href="/rss.xml">`
- Footer EN : bouton "Admin access" sans route → remplacer par `<Link href="/studio">`

**Fichiers concernés :**
- src/app/page.tsx (FR)
- src/app/en/page.tsx (EN)

**Estimation :** 15min

---

### 8. Variables d'environnement non documentées
**Problème :**
- Pas de fichier `.env.example`
- README ne liste pas les vars nécessaires

**Solution :**
Créer `.env.example` :
```
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

# Email (contact form)
EMAIL_HOST=
EMAIL_PORT=587
EMAIL_USER=
EMAIL_PASS=
EMAIL_FROM=
EMAIL_TO=

# Site
NEXT_PUBLIC_SITE_URL=https://temple-boyer-legal.fr
NEXT_PUBLIC_ENABLE_STUDIO=0
```

**Estimation :** 20min

---

### 9. Articles statiques vs Sanity
**Problème :**
- 2 articles statiques disparaissent de l'index `/blog` quand Sanity a du contenu
- Stratégie de contenu floue

**Solution :**
- Décider : migrer vers Sanity OU les garder comme pages de référence
- Si gardés : les intégrer explicitement dans l'index blog

**Estimation :** 1-2h

---

### 10. Typage à affiner
**Problèmes mineurs :**
- `getSiteSettings` retourne `Promise<SiteSettings | null>` mais ne retourne jamais null en pratique
- Plusieurs pages ont `searchParams` typés mais non utilisés

**Solution :**
- Typer `getSiteSettings` en `Promise<SiteSettings>` et garantir le retour
- Supprimer params inutilisés

**Estimation :** 30min

---

## 📋 BACKLOG (long terme)

### Architecture i18n scalable
- Implémenter `app/[lang]/...` avec `generateStaticParams(["fr", "en"])`
- Dictionnaires de traduction centralisés
- Mutualiser layouts et composants

**Estimation :** 1-2 jours

---

### Protection /studio en production
- Ajouter authentification Vercel (IP allowlist ou mot de passe)
- Ou désactiver complètement en prod si admin uniquement en local

**Estimation :** 1h

---

### Monitoring et alertes
- Activer Vercel Analytics
- Configurer alertes pour erreurs 500/404
- Intégrer Sentry si besoin

**Estimation :** 2h

---

## ✅ COMPLÉTÉ

### 2026-02-11 - Corrections critiques initiales
- ✅ Architecture EN corrigée (layout imbriqué supprimé)
- ✅ Classes amber-* remplacées par slate-*
- ✅ Photo de profil déplacée dans public/
