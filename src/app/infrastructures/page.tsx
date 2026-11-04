import Link from "next/link";
import type {Metadata} from "next";
import {SectorIllustration} from "@/components/sector-illustration";

export const metadata:Metadata={
 title:"Infrastructures agro-industrielles",
 description:"Les infrastructures envisagées par SALU pour la collecte, le stockage, la transformation et l'accès aux marchés dans le Sankuru."
};

const needs=[
 ["01","Transformation agroalimentaire","Mouture du maïs, décorticage du riz, transformation du manioc et du soja, séchage et conditionnement du piment."],
 ["02","Centres de collecte","Réception, pesée, tri, contrôle qualité et consolidation des produits des exploitations partenaires."],
 ["03","Conservation et stockage","Magasins secs, séchage adapté et solutions frigorifiques à évaluer pour les denrées sensibles."],
 ["04","Mécanisation et maintenance","Équipements adaptés aux parcelles, disponibilité des pièces, entretien et formation technique."],
 ["05","Énergie, eau et environnement","Besoins hydriques et énergétiques, gestion des effluents et valorisation des coproduits."],
 ["06","Logistique et accès aux marchés","Articulation de la collecte, des entrepôts, du transport et de la distribution selon les itinéraires réellement praticables."]
] as const;

const phases=[
 ["Évaluer les besoins","Documenter les récoltes potentielles, les saisons et les volumes mobilisables."],
 ["Dimensionner","Comparer les solutions techniques en fonction des contraintes d'énergie, d'eau et d'entretien."],
 ["Sécuriser","Vérifier les autorisations, les impacts environnementaux, les coûts et les risques."],
 ["Exploiter et suivre","Prévoir la formation, la maintenance, la traçabilité et l'évaluation des résultats."]
] as const;

export default function Page(){return <main>
 <div className="institutional-hero">
  <div className="institutional-hero-copy">
   <p className="eyebrow">Chaînes de valeur · Infrastructures</p>
   <h1>Transformer la production en valeur locale.</h1>
   <p className="institutional-lead">Une réflexion sur les moyens de collecter, conserver, conditionner et transformer la production agricole au plus près des besoins du Sankuru.</p>
   <p>Les infrastructures décrites constituent des pistes de développement. Leur existence, leur localisation et leur capacité ne sont pas présumées.</p>
   <div className="hero-actions"><Link className="button" href="/infrastructures/transformation">Explorer la transformation</Link><Link className="institutional-text-link" href="/investir/dossier">Étudier les besoins d'investissement →</Link></div>
  </div>
  <div className="institutional-hero-visual"><SectorIllustration slug="vivrieres"/></div>
 </div>
 <p className="institutional-photo-disclaimer">Image agricole d'illustration : elle ne représente ni une usine ni une infrastructure SALU.</p>

 <section>
  <div className="section-heading"><p className="eyebrow">Équipements et services à étudier</p><h2>Six familles de besoins complémentaires.</h2><p className="section-description">La priorité de chaque équipement devra découler de la faisabilité, des débouchés et de la demande réelle des producteurs.</p></div>
  <div className="grid infrastructure-needs">{needs.map(([number,title,description])=><article className="card infrastructure-need" key={number}>
   <span className="number">{number}</span><h3>{title}</h3><p>{description}</p>
  </article>)}</div>
 </section>

 <section className="band">
  <div className="section-heading"><p className="eyebrow">De l'étude à l'exploitation</p><h2>Des investissements progressifs, fondés sur des preuves.</h2><p className="section-description">Les étapes ci-dessous forment un cadre de préparation, sans calendrier ni résultats opérationnels affirmés.</p></div>
  <div className="grid agropole-steps">{phases.map(([title,description],index)=><article className="agropole-step" key={title}><span className="agropole-step-number">{String(index+1).padStart(2,"0")}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
 </section>

 <section className="content-split">
  <div className="prose"><p className="eyebrow">Producteurs et chaînes de valeur</p><h2>Une infrastructure utile doit servir toute une filière.</h2><p>Les centres de collecte envisagés devront rapprocher les producteurs des opérations de pesée, de contrôle qualité, de conservation et de commercialisation, avec des conditions accessibles et transparentes.</p><p>Le modèle reste à ajuster avec les exploitations, les organisations paysannes et les partenaires concernés.</p><Link className="inline-link" href="/filieres/producteurs-partenaires">Découvrir le parcours des producteurs →</Link></div>
  <div className="institutional-illustration"><SectorIllustration slug="producteurs"/></div>
 </section>

 <section className="institutional-cta">
  <div><p className="eyebrow">Partenariats techniques et financement</p><h2>Étudier les infrastructures avec SALU.</h2><p>Les projets seront précisés à partir des études, des besoins des filières et des validations requises.</p></div>
  <Link className="button" href="/investir/dossier">Consulter le cadre documentaire</Link>
 </section>
 <p className="quiet-note">Aucun équipement mentionné sur cette page n'est présenté comme déjà installé ou opérationnel.</p>
 </main>}
