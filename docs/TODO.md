# TODO - Temple Boyer Legal

Améliorations à apporter au projet, classées par priorité.

Dernière mise à jour : 2026-02-11

---

## 🟠 MAJEUR (à traiter prochainement)

### 1. Duplication massive de logique d'adresse et coordonnées

**Problème :**
- Bloc `getSiteSettings` + formatage adresse répété dans 10+ fichiers
- Bas de page "Maître Sarah Temple-Boyer – ..." copié-collé partout

**Impact :** Difficulté de maintenance, risque d'incohérences

**Solution recommandée :**
- Créer `src/lib/contact.ts` avec `getContactInfo()`
- Créer composants : `<ContactCard />`, `<FooterSignature />`
- Refactorer toutes les pages

**Fichiers concernés :** layout.tsx, page.tsx, cabinet, competences (+4 sous-pages), honoraires, contact, blog, mentions, confidentialite, articles statiques

**Estimation :** 3-4h

---

### 2. Pages légales sans metadata

**Problème :** `cabinet/page.tsx`, `confidentialite/page.tsx`, `mentions-legales/page.tsx` sans metadata

**Impact :** Perte SEO sur pages importantes

**Solution :** Ajouter `export const metadata` à chaque page

**Estimation :** 30min

---

### 3. Documentation décalée de la réalité

**Problèmes :**
- Politique de confidentialité mentionne Google Analytics (non implémenté)
- Design system interdisait amber (maintenant corrigé ✅)

**Solution :** Mettre à jour `confidentialite/page.tsx` OU implémenter Analytics + bandeau cookies

**Estimation :** 1-2h

---

## 🟡 MINEUR (amélioration continue)

### 4. Rate limiting non distribué
- `/api/contact` utilise Map in-memory
- Non partagé entre instances Vercel
- **Solution future :** Vercel KV ou Upstash Redis

### 5. Absence de CSP
- Headers sécurité partiels
- **Solution :** Ajouter Content-Security-Policy restrictive

### 6. Absence de tests
- Aucun test unitaire/e2e
- **Solution :** Ajouter Playwright pour smoke tests

### 7. UX/Accessibilité
- Boutons "RSS" devraient être des liens `<a href="/rss.xml">`
- Footer EN : bouton "Admin" sans route

### 8. Variables d'environnement non documentées
- **Solution :** Créer `.env.example`

### 9. Articles statiques vs Sanity
- 2 articles statiques disparaissent de l'index blog
- **Solution :** Migrer vers Sanity OU intégrer explicitement

### 10. Typage à affiner
- `getSiteSettings` retourne `| null` mais jamais null en pratique
- `searchParams` inutilisés dans certaines pages

---

## 📋 BACKLOG (long terme)

### Architecture i18n scalable
- Implémenter `app/[lang]/...` avec dictionnaires
- **Estimation :** 1-2 jours

### Protection /studio en production
- Auth Vercel ou désactivation complète
- **Estimation :** 1h

### Monitoring
- Vercel Analytics, alertes 500/404, Sentry
- **Estimation :** 2h

### Sitemap dynamique Sanity
- Ajouter les routes dynamiques Sanity (posts, thèmes) dans `src/app/sitemap.ts` en les hydratant via l'API.
- Ajuster les priorités / fréquences de crawl si nécessaire.
- **Estimation :** 1-2h

---

## ✅ COMPLÉTÉ

### 2026-02-11 - Corrections critiques initiales
- ✅ Architecture EN corrigée (layout imbriqué supprimé)
- ✅ Classes amber-* remplacées par slate-*
- ✅ Photo de profil déplacée dans public/
