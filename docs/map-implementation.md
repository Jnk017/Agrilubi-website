# Atlas interactif : implémentation progressive

La carte utilise Leaflet côté client pour les points autorisés seulement. Aucun fond cartographique distant n'est chargé sans source et attribution validées. En l'absence de points publics, le composant affiche un message explicatif accessible à la place d'un canevas vide.

Les coordonnées GPS doivent être vérifiées auprès de SALU ; les champs `source`, `verifiedAt`, `status` et `approvedForPublication` conditionnent leur affichage.

Le prochain lot ajoutera les polygones GeoJSON de la province du Sankuru, accompagnés de leur licence et de leurs mentions d'attribution, après obtention d'un jeu de données fiable.

Avant publication : tester clavier, mobile et lisibilité de la liste textuelle parallèle ; auditer la licence du fond cartographique et les politiques de confidentialité.
