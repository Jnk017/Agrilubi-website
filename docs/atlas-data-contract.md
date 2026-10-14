# Plan de données — atlas territorial du Sankuru

## Statut
L'interface éditoriale de la page `/territoire-enclavement` est disponible. La carte géographique interactive n'est pas encore intégrée.

## Données exigées avant affichage
- Limites administratives : GeoJSON avec origine, date, licence, système de coordonnées et contrôle de validité.
- Lubi et sites de projet : coordonnées exactes fournies ou officiellement validées par SALU.
- Bassins de production : géométries documentées, statut (existant / envisagé), filière, date de vérification.
- Infrastructures : sites existants distincts des centres envisagés ; ne pas représenter des intentions comme des réalisations.
- Axes logistiques : tracés sourcés, praticabilité à vérifier, absence de durée ou coût non établi.

## Recommandations d'interface
Prévoir une légende visible, la navigation clavier, des descriptions textuelles équivalentes, le contrôle de zoom, une vue mobile lisible et l'attribution des données. Charger Leaflet uniquement côté client avec import dynamique afin de limiter l'impact sur le rendu initial.

## Validation
La publication d'une couche nécessite une source, un responsable de validation, une date et un statut. Aucune géométrie fictive.
