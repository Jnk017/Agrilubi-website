# Intégration de la limite du Sankuru — procédure

## Données obligatoires
- GeoJSON `FeatureCollection` composé de géométries `Polygon` ou `MultiPolygon`.
- Source exacte et URL d'origine, producteur, licence et date de vérification.
- Contrôle du référentiel de coordonnées (longitude / latitude WGS84) et des anneaux.
- Vérification que le périmètre désigne bien la province du Sankuru, et non une région homonyme ou un découpage historique.
- Contrôle de validité des géométries : fermeture des anneaux, coordonnées valides, intersections éventuelles.
- Approbation écrite par SALU avant passage de `approvedForPublication` à `true`.

## Implémentation
Le fichier `src/data/territory-geojson.ts` définit le contrat de publication et une première validation structurelle. Cette validation **ne remplace pas** un validateur GeoJSON géospatial complet. La variable `sankuruBoundary` demeure `null` en l'absence d'un jeu de données approuvé.

La carte de points existante n'infère ni limites territoriales ni coordonnées. L'affichage des polygones et les attributions devront être intégrés dans un lot distinct après vérification géographique, technique et juridique.

## Sécurité
Ne pas publier des positions sensibles, des données nominatives de producteurs ou des documents juridiques confidentiels dans le dépôt public.
