// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import starlightImageZoom from 'starlight-image-zoom';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Conservatoire",
      logo: {
        src: './src/assets/logo.svg',
      },
      locales: {
        root: {
          label: 'French',
          lang: 'fr-FR',
        },
      },
      plugins: [starlightImageZoom()],
      expressiveCode: {
        plugins: [pluginCollapsibleSections()],
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/xaviersenente/crd-astro-tailwind-pb",
        },
      ],
      sidebar: [
        {
          label: "Cadrage et fondations",
          collapsed: false,
          items: [
            { label: "Objectif et pages", slug: "a-cadrage/a1-objectif" },
            {
              label: "Installation Astro / Tailwind",
              slug: "a-cadrage/a2-installation",
            },
            {
              label: "Environnement de développement",
              slug: "a-cadrage/a3-environnement",
            },
            {
              label: "Structure des répertoires",
              slug: "a-cadrage/a4-structure",
            },
            {
              label: "Fichiers sources",
              slug: "a-cadrage/a5-sources",
            },
          ],
        },
        {
          label: "Design system et layouts",
          collapsed: false,
          items: [
            {
              label: "Variables de thème",
              slug: "b-design-system/b1-variables",
            },
            {
              label: "Styles de base",
              slug: "b-design-system/b2-styles-base",
            },
            {
              label: "Layout principal",
              slug: "b-design-system/b3-layout-principal",
            },
          ],
        },
        {
          label: "UI primitives",
          collapsed: false,
          items: [
            {
              label: "Grille & composant Footer",
              slug: "c-ui-primitives/c1-footer",
            },
            {
              label: "Composant Header",
              slug: "c-ui-primitives/c2-header",
            },
            {
              label: "Composant Hero",
              slug: "c-ui-primitives/c3-hero",
            },
            {
              label: "Composant Image & duotone",
              slug: "c-ui-primitives/c4-picture",
            },
            { label: "Composant Patterns", slug: "c-ui-primitives/c5-patterns" },
            {
              label: "Composant Card",
              slug: "c-ui-primitives/c6-card",
            },
            { label: "Composant Button", slug: "c-ui-primitives/c7-button" },
            
          ],
        },
        {
          label: "Page d'accueil",
          collapsed: false,
          items: [
            {
              label: "Hero",
              slug: "d-homepage/d1-hero-home",
            },
            {
              label: "Section Découverte",
              slug: "d-homepage/d2-section-decouverte",
            },
            {
              label: "Section Agenda",
              slug: "d-homepage/d3-section-agenda",
            },
            {
              label: "Section Inscriptions",
              slug: "d-homepage/d4-section-inscriptions",
            },
          ],
        },
        {
          label: "PocketBase",
          collapsed: false,
          items: [
            {
              label: "Installation et config",
              slug: "e-pocketbase/e1-installation",
            },
            {
              label: "Modèles de données",
              slug: "e-pocketbase/e2-modeles-donnees",
            },
            {
              label: "Règles d'accès",
              slug: "e-pocketbase/e3-regles-acces",
            },
            {
              label: "Collecte des données",
              slug: "e-pocketbase/e4-collecte-donnees",
            },
            { label: "Composant ImagePB", slug: "e-pocketbase/e5-imagepb" },
          ],
        },
        {
          label: "Pages dynamiques",
          collapsed: false,
          items: [
            {
              label: "Modification de Card",
              slug: "f-pages-dynamiques/f1-update-card",
            },
            {
              label: "Page agenda",
              slug: "f-pages-dynamiques/f2-page-agenda",
            },
            {
              label: "Modification de la page d'accueil",
              slug: "f-pages-dynamiques/f3-update-home",
            },
            {
              label: "Template évènement",
              slug: "f-pages-dynamiques/f4-template-evenement",
            },
            {
              label: "Page 404",
              slug: "f-pages-dynamiques/f5-page-404",
            },
            {
              label: "Pages standard",
              slug: "f-pages-dynamiques/f6-pages-standard",
            },
            {
              label: "Pagination agenda",
              slug: "f-pages-dynamiques/f7-pagination-agenda",
            },
          ],
        },
        {
          label: "SEO",
          collapsed: false,
          items: [
            {
              label: "URLs friendly",
              slug: "g-seo/g1-url-friendly",
            },
            { label: "SEO", slug: "g-seo/g2-seo" },
          ],
        },
      ],
    }),
  ],
});
