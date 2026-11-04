import Link from "next/link";
import type {Metadata} from "next";
import {SectorIllustration} from "@/components/sector-illustration";
import {MediaPlaceholder} from "@/components/media-placeholder";

export const metadata:Metadata={
 title:"L’Agropole — Vision et modèle agricole",
 description:"Découvrez la vision de SALU pour structurer les filières agricoles, associer les producteurs et développer la valeur ajoutée dans le Sankuru."
};
const pillars=[
 {index:"01",title:"Produire",description:"Cultures vivrières, maraîchage, cultures pérennes, pisciculture et élevage, selon des choix agroécologiques documentés.",href:"/filieres",label:"Explorer les filières"},
 {index:"02",title:"Transformer",description:"Étudier le stockage, le séchage, la conservation et les unités de transformation adaptées aux récoltes et aux débouchés.",href:"/infrastructures",label:"Voir les infrastructures envisagées"},
 {index:"03",title:"Relier",description:"Organiser les flux entre parcelles, points de collecte, transformation et marchés, dans un territoire marqué par l’enclavement.",href:"/territoire-enclavement/logistique",label:"Comprendre la logistique"}
];
const steps=[
 ["Observer","Documenter les sols, l’eau, les itinéraires, les marchés et les besoins locaux."],
 ["Concevoir","Dimensionner les projets, les partenariats et les investissements à partir d’études."],
 ["Déployer","Engager progressivement les activités autorisées, les équipements et la formation."],
 ["Mesurer","Suivre les résultats économiques, sociaux et environnementaux réellement observés."]
];
export default function Page(){
 return <main>
  <div className="institutional-hero">
   <div className="institutional-hero-copy">
    <p className="eyebrow">SALU · Société Agricole de Lubi</p>
    <h1>L’Agropole du Sankuru : une vision agricole intégrée.</h1>
    <p className="institutional-lead">Une ambition territoriale pour rapprocher production, transformation, producteurs partenaires et accès aux marchés.</p>
    <div className="hero-actions"><Link className="button" href="/filieres">Découvrir les filières</Link><Link className="institutional-text-link" href="/investir">Coopérer avec SALU →</Link></div>
   </div>
   <div className="institutional-hero-visual"><SectorIllustration slug="vivrieres"/></div>
  </div>
  <p className="institutional-photo-disclaimer">Photographies utilisées à titre d’illustration ; elles ne représentent pas les exploitations ou réalisations de SALU.</p>
  <section>
   <div className="section-heading"><p className="eyebrow">Notre approche</p><h2>Trois leviers qui se renforcent mutuellement</h2><p className="section-description">Le modèle proposé répond à la nécessité d’organiser l’ensemble de la chaîne de valeur agricole, et pas uniquement la production.</p></div>
   <div className="grid agropole-pillars">{pillars.map(item=><article className="card" key={item.index}><p className="number">{item.index}</p><h3>{item.title}</h3><p>{item.description}</p><Link href={item.href}>{item.label} →</Link></article>)}</div>
  </section>
  <section className="content-split">
   <div className="prose"><p className="eyebrow">Le choix du territoire</p><h2>Le Sankuru, au cœur de notre raison d’être.</h2><p>La dispersion des producteurs, les difficultés de conservation et les contraintes de transport imposent de concevoir les filières en fonction des réalités locales.</p><p>Les localisations précises des installations et les voies d’acheminement ne seront affichées que lorsque leurs sources et leurs conditions de mise en œuvre seront vérifiées.</p><Link className="inline-link" href="/territoire-enclavement">Explorer les enjeux du territoire →</Link></div>
   <MediaPlaceholder label="Un territoire à connecter" description="Photographies géolocalisées du Sankuru à intégrer après validation de leur provenance."/>
  </section>
  <section className="band">
   <div className="section-heading"><p className="eyebrow">Méthode</p><h2>Un déploiement progressif et documenté.</h2><p className="section-description">Ce parcours illustre une méthode envisagée : il ne constitue ni un calendrier définitif, ni la preuve d'étapes déjà achevées.</p></div>
   <div className="grid agropole-steps">{steps.map(([title,description],i)=><article className="agropole-step" key={title}><span className="agropole-step-number">{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
  </section>
  <section className="content-split">
   <div className="agropole-support-image"><SectorIllustration slug="producteurs"/></div>
   <div className="prose"><p className="eyebrow">Une approche partenariale</p><h2>Associer les producteurs à la création de valeur.</h2><p>Le projet prévoit d’examiner des formes de coopération avec les exploitations familiales et les organisations paysannes : conseil, formation, accès aux intrants, collecte et commercialisation selon des conditions transparentes.</p><Link className="button" href="/filieres/producteurs-partenaires">Découvrir le parcours proposé</Link></div>
  </section>
  <section className="institutional-cta"><div><p className="eyebrow">Partenariats et coopération</p><h2>Construire la suite ensemble.</h2><p>Les investisseurs, organisations agricoles et partenaires techniques peuvent examiner les opportunités envisagées et les documents à préparer.</p></div><Link className="button" href="/investir/dossier">Explorer le dossier de partenariat</Link></section>
  <p className="quiet-note">Les activités, capacités et installations décrites correspondent à des axes de développement envisagés. Leur réalisation dépendra des études, autorisations, financements et décisions applicables.</p>
 </main>;
}
