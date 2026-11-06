# SALU — vérifications avant ouverture au référencement

## Contrôles réalisés dans GitHub

- Les pages suivantes ont été relues pour leurs liens internes littéraux : accueil, Agropole, Investir, Infrastructures, Territoire, Gouvernance, Contact, ainsi que les cinq pages `/en` (contrôle de code, non test de navigateur).
- Aucun lien littéral invalide n'a été relevé dans cet échantillon ; les URLs calculées (ex. `/filieres/${slug}`) n'ont pas été évaluées à l'exécution.
- Un contrôle reproductible est disponible : `npm run check:links`. Il examine les chemins littéraux `href` dans les composants TSX et les compare aux pages App Router. Les expressions dynamiques, URLs externes et comportements navigateur demandent un contrôle séparé.
- `robots.ts` continue à interdire l'indexation et `layout.tsx` conserve `robots.index=false`, tant que la publication éditoriale et technique n'a pas été approuvée.

## Vérifications encore nécessaires

1. Sur Hostinger, vérifier que le dernier commit de `main` passe `npm run build` et que le statut de déploiement est **Completed**.
2. Dans un environnement Node.js local ou CI, exécuter : `npm install`, `npm run check:links`, `npm run typecheck`, `npm test` puis `npm run build`. Ne pas considérer ces commandes comme réussies sans logs.
3. Sur téléphone et ordinateur, ouvrir toutes les pages principales, les cinq routes anglaises, les fiches des six filières et la page des crédits photographiques.
4. Vérifier les interactions du menu mobile (ouvrir, fermer, changement de page, retour FR/EN), les liens mailto/tel et les erreurs d'affichage ou de chargement des images externes.
5. Vérifier le contenu légal, les documents, les droits des images et les informations institutionnelles avec SALU.
6. Compléter l'internationalisation : les pages anglaises sont pour l'instant une sélection institutionnelle, non l'ensemble du site traduit ; la racine HTML doit aussi porter une langue correcte côté serveur pour les URL `/en`.
7. Approuver explicitement l'ouverture au référencement avant toute modification de la configuration `noindex` / `robots.txt`.

## Limites de ce contrôle

Les URLs publiques `https://agrilubi.com` ne sont pas accessibles depuis l'outil de consultation utilisé lors de ce contrôle. Aucun test de bout en bout ni résultat Hostinger actuel n'est attesté par cette note.
