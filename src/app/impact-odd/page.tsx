import Link from "next/link";
import type {Metadata} from "next";
import {SectorIllustration} from "@/components/sector-illustration";

export const metadata:Metadata={
 title:"Impact et Objectifs de développement durable",
 description:"Les ambitions sociales, économiques et environnementales de l'Agropole du Sankuru, avec des indicateurs à documenter."
};
const axes=[
 {num:"01",odd:"ODD 2",title:"Sécurité alimentaire",description:"Développer les chaînes de valeur du maïs, du riz, du manioc et du soja, ainsi que la conservation et l'accès aux débouchés.",indicators:["Production commercialisable par culture","Pertes post-récolte mesurées","Ménages producteurs accompagnés"]},
 {num:"02",odd:"ODD 8",title:"Emploi et économie locale",description:"Examiner les possibilités d'emplois agricoles, de formation technique et d'activités de transformation dans le respect du travail décent.",indicators:["Emplois directs vérifiés","Personnes formées","Entreprises locales impliquées"]},
 {num:"03",odd:"ODD 5",title:"Femmes et jeunes",description:"Prévoir l'inclusion dans les formations, les opportunités économiques et les organisations de producteurs.",indicators:["Participation des femmes et des jeunes","Accès aux dispositifs d'accompagnement","Mécanismes de réclamation"]},
 {num:"04",odd:"ODD 9",title:"Infrastructures et transformation",description:"Étudier les solutions de collecte, séchage, conservation, mécanisation et transformation selon les besoins des filières.",indicators:["Équipements réellement mis en service","Volumes collectés et transformés","Taux d'utilisation des équipements"]},
 {num:"05",odd:"ODD 12 et 13",title:"Climat et ressources",description:"Examiner les pratiques de gestion des sols, de l'eau, des résidus et des risques climatiques propres à chaque filière.",indicators:["Consommation d'eau et d'énergie","Pratiques de gestion des sols","Déchets et coproduits valorisés"]}
] as const;
export default function Page(){return <main>
 <div className="institutional-hero">
  <div className="institutional-hero-copy">
   <p className="eyebrow">Communautés · Agriculture · Durabilité</p>
   <h1>Mesurer les progrès, au-delà des intentions.</h1>
   <p className="institutional-lead">L'Agropole du Sankuru envisage une contribution à la sécurité alimentaire, aux opportunités économiques et à une agriculture plus responsable.</p>
   <p>Les Objectifs de développement durable ci-dessous constituent des axes d'alignement proposés, et non des impacts déjà mesurés ou certifiés.</p>
   <div className="hero-actions"><a className="button" href="#axes-impact">Découvrir les axes d'impact</a><Link className="institutional-text-link" href="/filieres/producteurs-partenaires">Producteurs partenaires →</Link></div>
  </div>
  <div className="institutional-hero-visual"><SectorIllustration slug="producteurs"/></div>
 </div>
 <p className="institutional-photo-disclaimer">Image d'illustration ; elle ne représente pas les bénéficiaires ni les activités effectives de SALU.</p>
 <section id="axes-impact" className="impact-section">
  <div className="section-heading"><p className="eyebrow">Cinq domaines de suivi</p><h2>Des ambitions reliées à des indicateurs concrets.</h2><p className="section-description">La mesure dépendra de données collectées, datées et validées. Aucun chiffre de résultat n'est affirmé sans justificatif.</p></div>
  <div className="grid impact-grid">{axes.map(axis=><article className="card impact-card" key={axis.num}>
   <div className="impact-card-top"><span className="number">{axis.num}</span><span className="impact-odd-label">{axis.odd}</span></div>
   <h3>{axis.title}</h3><p>{axis.description}</p>
   <h4>Indicateurs à documenter</h4>
   <ul>{axis.indicators.map(item=><li key={item}>{item}</li>)}</ul>
  </article>)}</div>
 </section>
 <section className="band">
  <div className="section-heading"><p className="eyebrow">Suivi et transparence</p><h2>Une méthode de reporting vérifiable.</h2></div>
  <div className="grid agropole-steps">{[
   ["Définir","Fixer le périmètre, les unités et la méthode de chaque indicateur."],
   ["Collecter","Conserver les justificatifs, les dates et l'origine des données."],
   ["Vérifier","Distinguer objectifs, projections et résultats constatés."],
   ["Rendre compte","Présenter les résultats avec leurs limites méthodologiques."]
  ].map(([name,desc],index)=><article className="agropole-step" key={name}><span className="agropole-step-number">{String(index+1).padStart(2,"0")}</span><h3>{name}</h3><p>{desc}</p></article>)}</div>
 </section>
 <section className="institutional-cta"><div><p className="eyebrow">Coopération</p><h2>Construire des résultats mesurables.</h2><p>Les partenaires agricoles et techniques peuvent participer à la structuration de mécanismes de suivi adaptés au territoire.</p></div><Link className="button" href="/contact">Contacter SALU</Link></section>
 <p className="quiet-note">Les références aux ODD ne constituent ni une certification des Nations unies ni une preuve d'impact réalisé.</p>
 </main>}
