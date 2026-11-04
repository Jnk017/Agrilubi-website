# SEO, accessibilité et publication

- Le sitemap n'émet aucune URL sans `NEXT_PUBLIC_SITE_URL` HTTPS défini par l'exploitant. Ne jamais inventer de domaine de production.
- L'indexation reste interdite dans `robots.ts` jusqu'à validation finale.
- Les publications dynamiques doivent être ajoutées au sitemap seulement lorsqu'elles sont autorisées.
- La page anglaise /en est provisoire ; ses menus restent francophones. Ne pas annoncer de véritable SEO multilingue tant que l'architecture des locales n'est pas complète.
- Vérifier à terme les liens d'évitement, labels, contrastes WCAG AA, navigation clavier et comportement à 375, 768, 1440 pixels.
- Les données structurées `Organization` et `Place` exigent une identité légale, une adresse et des coordonnées vérifiées avant enrichissement.
