```markdown
# Shopify-Dashboard-SEO

Un dashboard SEO full-stack pour Shopify, modulaire multi-boutiques et piloté par ChatGPT.

## Table des matières

1. [Description](#description)  
2. [Installation](#installation)  
3. [Phases du projet](#phases-du-projet)  
4. [Suivi de phase automatique](#suivi-de-phase-automatique)  
5. [Workflow Git](#workflow-git)  
6. [Contributing](#contributing)  
7. [License](#license)

## Description

Ce projet fournit une interface React (ou Vue) sécurisée, responsive et multi-boutiques pour gérer le SEO, les positions Google, PageSpeed Insights et l’édition de produits Shopify, le tout piloté par un Co-pilote ChatGPT.

## Installation

```bash
git clone https://github.com/Juome/shopify-dashboard-SEO.git
cd shopify-dashboard-SEO
# Conservez .env et package.json
rm -rf src public scripts   # ou supprimez manuellement les dossiers non désirés
npm install
npm run dev
```

## Phases du projet

| Phase | Description                                         |
|-------|-----------------------------------------------------|
| 1.1   | Scaffold & Auth (login, menu, thèmes dynamiques)    |
| 1.2   | UI i18n FR, nettoyage i18next                       |
| 1.3   | Nouveaux indicateurs (SerpApi, PSI, GSC)            |
| 1.4   | Dashboard (table, graphiques, filtres)              |
| 1.5   | IA SEO (suggestions ChatGPT) + push Shopify          |
| 2.0   | Tests & CI/CD                                       |
| 3.0   | Déploiement & Monitoring                            |

## Suivi de phase automatique

ChatGPT :  
> 1. Lit ce README.md pour détecter la **Phase** courante.  
> 2. Reprend les **Étapes** et **Sous-étapes** associées à cette phase.  
> 3. Avant chaque action, génère un plan en 🚀 **Étapes** et 💡 **Astuces**.  
> 4. À la fin de chaque étape, verifie que gitignore est bien remplie puis rappelle :
>    ```bash
>    git add .
>    git commit -m "feat: <description>"
>    git push origin <branche>
>    npm run lint
>    npm test
>    ```

## Workflow Git

Chaque étape se termine par :  
```bash
git add .
git commit -m "feat(phase X.Y): description"
git push origin main
```

## Contributing

Voir [CONTRIBUTING.md] pour les guidelines et le format des branches, issues et pull requests.
