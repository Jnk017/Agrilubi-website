# Vérifications locales — site web institutionnel SALU

La branche de développement est `feat/institutional-foundation`. La PR #1 reste en brouillon. Aucune validation de production ne doit être déduite de l'existence des tests.

## Depuis une copie locale du dépôt

```bash
npm install
npm test
npm run typecheck
npm run build
npm run dev
```

Vérifier ensuite `/`, `/territoire-enclavement`, `/actualites`, `/documents`, `/en` et `/medias` sur écran large et étroit.

## Critères de vérification
- Les tests Vitest exécutent les assertions des données GeoJSON et du filtrage des sites.
- TypeScript et la compilation Next.js ne signalent pas d'erreurs.
- L'atlas affiche un état vide explicite tant que les registres publics n'ont pas de données approuvées.
- La liste textuelle reste utilisable si Leaflet ne se charge pas.
- Les liens clavier et le parcours FR/EN restent accessibles.
- Aucun document juridique confidentiel, aucune géométrie artificielle et aucune coordonnée de test ne figurent dans les données publiques.

Le dépôt n'a pas pu être cloné depuis l'environnement de travail actuel (résolution DNS de github.com indisponible). Les commandes précédentes n'ont pas été exécutées ici. Ne pas déclarer de résultat « vert » sans traces réelles.
