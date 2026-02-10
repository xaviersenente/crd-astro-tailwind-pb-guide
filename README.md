# Conservatoire Henri Dutilleux — Guide de développement

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Tutoriel complet pour créer un site web dynamique pour le **Conservatoire Henri Dutilleux de Belfort** avec **Astro**, **Tailwind CSS v4** et **PocketBase**. Ce guide accompagne le [dépôt du projet final](https://github.com/xaviersenente/crd-astro-tailwind-pb).

## Objectif

Ce site de documentation (35 chapitres) guide pas-à-pas la création d'un site vitrine performant et administrable, de l'installation à la mise en production. Il s'adresse aux étudiants de **MMI** et couvre l'ensemble du workflow front-end moderne : design system, composants réutilisables, données dynamiques et déploiement.

## Sommaire

### A — Cadrage et fondations

| Chapitre | Contenu |
| :--- | :--- |
| A1 — Objectif et pages | Définition des pages principales (Accueil, Agenda, Événements, Professeurs, Contact) et du public cible |
| A2 — Installation Astro / Tailwind | Création du projet Astro et ajout de Tailwind CSS |
| A3 — Environnement de développement | Extensions VS Code (Astro, Tailwind IntelliSense) et configuration Prettier |
| A4 — Structure des répertoires | Arborescence du projet : `public/`, `src/` (assets, components, layouts, pages, styles) |
| A5 — Fichiers sources | Maquette Figma, assets (images, icônes) et fichiers nécessaires au projet |

### B — Design system et layouts

| Chapitre | Contenu |
| :--- | :--- |
| B1 — Variables de thème | Design tokens Tailwind v4 via `@theme` : couleurs, typographie, espacements |
| B2 — Styles de base | Couches Tailwind (`@layer`), reset Preflight et typographie de base |
| B3 — Layout principal | Composant `Layout.astro` : imports CSS, polices, structure `<header>` / `<main>` / `<footer>` |

### C — Composants UI (primitives)

| Chapitre | Contenu |
| :--- | :--- |
| C1 — Footer | Grille CSS personnalisée, logo, navigation, réseaux sociaux, coordonnées (mobile-first) |
| C2 — Header | Navigation responsive, menu hamburger, auto-hide au scroll |
| C3 — Hero | Section hero avec props et slots nommés, adaptable par contexte de page |
| C4 — Picture & Duotone | Optimisation multi-format avec `<Image>` / `<Picture>` d'Astro, effet bichromie CSS |
| C5 — Patterns | Motifs SVG décoratifs avec animation de dessin progressif (Web Animations API) |
| C6 — Card | Carte événement avec CSS Grid, image de fond et effet duotone interactif au hover |
| C7 — Button | Composant réutilisable avec variantes (default, dark, outlined) et tailles |

### D — Page d'accueil

| Chapitre | Contenu |
| :--- | :--- |
| D1 — Hero | Assemblage du Hero d'accueil (Hero + Picture + Patterns) |
| D2 — Section Découverte | Image, texte d'accroche et statistiques clés en CSS Grid asymétrique |
| D3 — Section Agenda | Liste d'événements avec le composant Card et itération JavaScript |
| D4 — Section Inscriptions | CTA avec fond d'image immersif, overlay sombre et duotone avancé |

### E — PocketBase (backend)

| Chapitre | Contenu |
| :--- | :--- |
| E1 — Installation et config | Installation locale de PocketBase comme backend |
| E2 — Modèles de données | Collections `event` et `page` : champs texte, image, date, etc. |
| E3 — Règles d'accès | Configuration des 5 règles API (list, view, create, update, delete) |
| E4 — Collecte des données | SDK PocketBase JS dans Astro : `getCollection()`, `getNextEvents()`, filtrage et tri |
| E5 — Composant ImagePB | Affichage optimisé des images PocketBase avec construction d'URL et fallbacks |

### F — Pages dynamiques

| Chapitre | Contenu |
| :--- | :--- |
| F1 — Modification de Card | Adaptation de Card pour les données PocketBase (`<ImagePB>` remplace `<Picture>`) |
| F2 — Page Agenda | Page `/agenda/` avec Layout, Hero et Cards alimentés par PocketBase |
| F3 — Mise à jour de l'accueil | Remplacement des données statiques par `getNextEvents()` (3 prochains événements) |
| F4 — Template événement | Route dynamique `[slug].astro` avec `getStaticPaths()` (SSG) |
| F5 — Page 404 | Page d'erreur personnalisée dans l'identité visuelle du site |
| F6 — Pages standard | Route dynamique `[page].astro` pour les pages éditoriales (à propos, mentions, contact) |

### G — Production

| Chapitre | Contenu |
| :--- | :--- |
| G1 — Page d'accueil | Code complet de `index.astro` assemblant toutes les sections avec données dynamiques |
| G2 — SEO | Balises meta, Open Graph, canonical URL |
| G3 — Performance | Optimisation images (WebP, lazy loading, responsive), rendu et cache |
| G4 — Déploiement | Déploiement front (Vercel / Netlify) et backend PocketBase, variables d'environnement |
| G5 — Checklist finale | Vérifications responsive, accessibilité, touch targets, images, formulaires |

## Stack technique

| Outil | Rôle |
| :--- | :--- |
| [Astro](https://astro.build) | Framework web statique avec SSG |
| [Tailwind CSS v4](https://tailwindcss.com) | Framework CSS utility-first |
| [PocketBase](https://pocketbase.io) | Backend SQLite embarqué (API REST + admin UI) |
| [Starlight](https://starlight.astro.build) | Thème de documentation Astro (pour ce guide) |

## Structure du projet

```
src/content/docs/
├── index.mdx                  # Page d'accueil du guide
├── a-cadrage/                 # 5 chapitres — Cadrage et fondations
├── b-design-system/           # 3 chapitres — Design system et layouts
├── c-ui-primitives/           # 7 chapitres — Composants UI
├── d-homepage/                # 4 chapitres — Page d'accueil
├── e-pocketbase/              # 5 chapitres — Backend PocketBase
├── f-pages-dynamiques/        # 6 chapitres — Pages dynamiques
└── g-production/              # 5 chapitres — Mise en production
```

## Commandes

| Commande | Action |
| :--- | :--- |
| `npm install` | Installe les dépendances |
| `npm run dev` | Démarre le serveur local sur `localhost:4321` |
| `npm run build` | Génère le site de production dans `./dist/` |
| `npm run preview` | Prévisualise le build localement |

## Liens utiles

- [Dépôt du projet Conservatoire](https://github.com/xaviersenente/crd-astro-tailwind-pb) — Code source du site final
- [Documentation Astro](https://docs.astro.build)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Documentation PocketBase](https://pocketbase.io/docs)
- [Documentation Starlight](https://starlight.astro.build)