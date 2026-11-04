import Link from "next/link";
import type {Metadata} from "next";

export const metadata:Metadata={
 title:"Du champ au marché — Logistique agricole",
 description:"Une approche logistique envisagée par SALU : production, collecte, conservation et acheminement des récoltes dans le Sankuru."
};

const stages=[
 {number:"01",name:"Produire",detail:"Identifier les cultures, les saisons de récolte et les contraintes des exploitations agricoles.",question:"Quelles productions peuvent être mobilisées et à quelles périodes ?"},
 {number:"02",name:"Collecter",detail:"Étudier les points de regroupement, de pesée, de tri et de contrôle qualité à proximité des producteurs.",question:"Où la collecte serait-elle accessible et économiquement pertinente ?"},
 {number:"03",name:"Conserver",detail:"Évaluer les besoins de séchage, de stockage sec et de solutions frigorifiques selon la nature des denrées.",question:"Quels équipements permettent de préserver la qualité ?"},
 {number:"04",name:"Acheminer",detail:"Comparer les moyens de transport et les itinéraires possibles, en tenant compte de leur praticabilité.",question:"Quels corridors sont réellement disponibles et à quel coût ?"},
 {number:"05",name:"Commercialiser",detail:"Structurer la traçabilité, la négociation commerciale, le conditionnement et les relations avec les acheteurs.",question:"Quelles conditions permettent d'accéder durablement aux marchés ?"}
] as const;

export default function Page(){return <main>
 <nav className="breadcrumb" aria-label="Fil d'Ariane"><Link href="/territoire-enclavement">Territoire et désenclavement</Link><span aria-hidden="true"> / </span><span aria-current="page">Logistique</span></nav>
 <div className="page-intro"><p className="eyebrow">Territoire · Chaînes de valeur</p><h1>Du champ au marché.</h1><p>Le désenclavement agricole repose sur l'ensemble du parcours des récoltes, depuis la production jusqu'aux débouchés. Les solutions envisagées devront être validées par des études techniques et des observations de terrain.</p></div>
 <section>
  <div className="section-heading"><p className="eyebrow">Cinq étapes complémentaires</p><h2>Une chaîne logistique à construire avec méthode.</h2></div>
  <div className="logistics-path">{stages.map(stage=><article className="logistics-step" key={stage.number}>
   <div className="logistics-step-index" aria-hidden="true">{stage.number}</div>
   <div><h3>{stage.name}</h3><p>{stage.detail}</p><p className="logistics-question">{stage.question}</p></div>
  </article>)}</div>
 </section>
 <section className="band"><p className="eyebrow">Données à confirmer</p><h2>Les distances et les capacités seront documentées, pas supposées.</h2><p>Aucun trajet, délai, tarif de transport ou équipement n'est présenté ici comme opérationnel. Les infrastructures et les corridors éventuels devront être positionnés après vérification des sources et des autorisations.</p><Link className="button" href="/territoire-enclavement#atlas-territorial">Consulter l'atlas territorial</Link></section>
 <section className="institutional-cta"><div><p className="eyebrow">Approche collective</p><h2>Les producteurs sont au cœur du modèle.</h2><p>Le parcours proposé privilégie le dialogue avec les exploitations agricoles et les organisations paysannes.</p></div><Link className="button" href="/filieres/producteurs-partenaires">Producteurs partenaires</Link></section>
 </main>}
