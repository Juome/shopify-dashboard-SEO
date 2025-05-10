# Shopify-Dashboard-SEO

[![CI Status](https://github.com/Juome/shopify-dashboard-SEO/actions/workflows/ci.yml/badge.svg)](https://github.com/Juome/shopify-dashboard-SEO/actions)

Un dashboard SEO full-stack pour Shopify, modulaire multi-boutiques et piloté par ChatGPT.

---

## Table des matières

1. [Description](#description)  
2. [Installation](#installation)  
3. [Phases du projet](#phases-du-projet)  
4. [Détail des sous-phases](#détail-des-sous-phases)  
5. [Suivi de phase automatique](#suivi-de-phase-automatique)  
6. [Workflow Git](#workflow-git)  
7. [Contributing](#contributing)  
8. [License](#license)

---

## Description

Ce projet fournit une interface React (Next.js) sécurisée, responsive et multi-boutiques pour gérer le SEO, les positions Google, PageSpeed Insights, l’édition de produits Shopify, le tout piloté par un Co-pilote ChatGPT.

---

## Installation

```bash
git clone https://github.com/Juome/shopify-dashboard-SEO.git
cd shopify-dashboard-SEO
npm install
npm run dev
````

---

## Phases du projet

| Phase | Description                                      |
| :---: | ------------------------------------------------ |
|  1.1  | Scaffold & Auth (login, menu, thèmes dynamiques) |
|  1.2  | UI i18n FR, nettoyage i18next                    |
|  1.3  | Nouveaux indicateurs (SerpApi, PSI, GSC)         |
|  1.4  | Dashboard (table, graphiques, filtres)           |
|  1.5  | IA SEO (suggestions ChatGPT) + push Shopify      |
|  2.0  | Tests & CI/CD                                    |
|  3.0  | Déploiement & Monitoring                         |

---

## Détail des sous-phases

### **Phase 1.1 – Scaffold & Auth**

| Sous-phase | Tâches                                                                           | Réf.     | Statut |
| :--------: | -------------------------------------------------------------------------------- | -------- | :----: |
| **1.1.1** | Initialisation du projet (Next.js, TypeScript, App Router, Tailwind, Turbopack…) | [#12](…) | ✅ |
| **1.1.2** | Configuration des alias (`baseUrl: "./src"`, `@components/*`,…)                  | [#15](…) | ✅ |
| **1.1.3** | Setup tests (next/jest, jest.setup.ts, RTL, mocks, smoke test)                   | [#18](…) | ✅ |
| **1.1.4** | Auth Shopify (jeton permanent, Credentials Provider, routes API, .env)           | [#22](…) | ✅ |
| **1.1.5a**| Provider & login UI – Credentials Provider (`Providers`, SessionProvider, `/login`) | [#25](…) | ✅ |
| **1.1.5b**| Provider & login UI – OAuth Provider (Google/GitHub, boutons `signIn('google')`, etc.) | [#26](…) | ☑️ |
| **1.1.6** | Menu de navigation (`<Nav>`, liens selon session)                                | [#27](…) | ⬜️ |
| **1.1.7** | Thèmes dynamiques (next-themes, toggle, persistance)                             | [#30](…) | ⬜️ |


### Phase 1.2 – UI i18n FR, nettoyage i18next

| Sous-phase | Tâches                                            | Réf.     | Statut |
| :--------: | ------------------------------------------------- | -------- | :----: |
|  **1.2.1** | Installation `react-i18next`                      | [#31](…) |   ⬜️   |
|  **1.2.2** | Configuration du provider i18n                    | [#32](…) |   ⬜️   |
|  **1.2.3** | Traductions FR (`public/locales/fr/*.json`)       | [#33](…) |   ⬜️   |
|  **1.2.4** | Adaptation des composants avec `useTranslation()` | [#34](…) |   ⬜️   |
|  **1.2.5** | Nettoyage clés/config obsolètes                   | [#35](…) |   ⬜️   |

### Phase 1.3 – Nouveaux indicateurs (SerpApi, PSI, GSC)

| Sous-phase | Tâches                                              | Réf.     | Statut |
|:----------:|-----------------------------------------------------|----------|:------:|
| **1.3.1**  | Intégration SerpApi (récupération & affichage SERP) | [#36](…) | ⬜️      |
| **1.3.2**  | Intégration PageSpeed Insights (PSI)                | [#37](…) | ⬜️      |
| **1.3.3**  | Intégration Google Search Console (GSC)             | [#38](…) | ⬜️      |
| **1.3.4**  | UI / Charts pour chaque indicateur                  | [#39](…) | ⬜️      |

---

### Phase 1.4 – Dashboard (table, graphiques, filtres)

| Sous-phase | Tâches                                                        | Réf.     | Statut |
|:----------:|---------------------------------------------------------------|----------|:------:|
| **1.4.1**  | Composant `Table` – affichage des données                     | [#40](…) | ⬜️      |
| **1.4.2**  | Graphiques (Recharts ou Chart.js)                             | [#41](…) | ⬜️      |
| **1.4.3**  | Filtres globaux (date, source, etc.)                          | [#42](…) | ⬜️      |
| **1.4.4**  | Pagination & tri                                              | [#43](…) | ⬜️      |

---

### Phase 1.5 – IA SEO (suggestions ChatGPT) + push Shopify

| Sous-phase | Tâches                                                      | Réf.     | Statut |
|:----------:|-------------------------------------------------------------|----------|:------:|
| **1.5.1**  | Setup de l’API ChatGPT (clé, wrapper)                       | [#44](…) | ⬜️      |
| **1.5.2**  | Composant `SeoSuggestions` (input URL / keyword)            | [#45](…) | ⬜️      |
| **1.5.3**  | Affichage et édition des suggestions                        | [#46](…) | ⬜️      |
| **1.5.4**  | Push direct vers Shopify via Admin API                      | [#47](…) | ⬜️      |

---

### Phase 2.0 – Tests & CI/CD

| Sous-phase | Tâches                                              | Réf.     | Statut |
|:----------:|-----------------------------------------------------|----------|:------:|
| **2.0.1**  | Couverture unitaire & d’intégration                 | [#48](…) | ⬜️      |
| **2.0.2**  | GitHub Actions – lint, test, build                  | [#49](…) | ⬜️      |
| **2.0.3**  | Déploiement continu (preview + production)          | [#50](…) | ⬜️      |

---

### Phase 3.0 – Déploiement & Monitoring

| Sous-phase | Tâches                                              | Réf.     | Statut |
|:----------:|-----------------------------------------------------|----------|:------:|
| **3.0.1**  | Déploiement sur Vercel (ou infrastructure cible)    | [#51](…) | ⬜️      |
| **3.0.2**  | Configuration domaine & SSL                         | [#52](…) | ⬜️      |
| **3.0.3**  | Monitoring (Sentry, LogRocket…)                     | [#53](…) | ⬜️      |
| **3.0.4**  | Alerting (email / Slack)                            | [#54](…) | ⬜️      |


---

## Suivi de phase automatique

ChatGPT se base sur ce README pour :

1. Détecter la **Phase** actuelle.
2. Générer un plan en 🚀 **Étapes** & 💡 **Astuces**.
3. À la fin de chaque étape, rappeler :

   ```bash
   git add .
   git commit -m "feat(phase X.Y): <description>"
   git push origin main
   npm run lint
   npm test
   ```

---

## Workflow Git

Chaque étape se termine par :

```bash
git add .
git commit -m "feat(phase X.Y): <brève description>"
git push origin main
```

---

## Contributing

Voir [CONTRIBUTING.md](CONTRIBUTING.md) pour les guidelines sur branches, issues et PR.

---

## License

MIT © Juome
