import Link from "next/link";
import type {Metadata} from "next";
import {TerritoryAtlas} from "@/components/territory-atlas";
import {SectorIllustration} from "@/components/sector-illustration";

export const metadata:Metadata={
 title:"Territoire et désenclavement",
 description:"Comprendre les enjeux de collecte, conservation et transport des filières de l'Agropole du Sankuru, sans localisation non vérifiée."
};
const challenges=[
 ["01","Production dispersée","Organiser les bassins de production et les points de collecte suppose de comprendre la localisation réelle des exploitations et les saisons de récolte."],
 ["02","Qualité après récolte","Séchage, tri, conservation et conditionnement contribuent à limiter les risques de dégradation des produits."],
 ["03","Accès aux débouchés","Les alternatives routières et fluviales doivent être étudiées sur des itinéraires documentés, avec leurs contraintes d'exploitation."],
 ["04","Coordination des filières","La traçabilité, les accords avec les producteurs et l'homogénéité de la qualité sont nécessaires à une commercialisation organisée."]
] as const;
const stages=[
 ["À la parcelle","Connaître les besoins des producteurs, les cultures et les périodes de récolte."],
 ["À la collecte","Regrouper, peser, contrôler la qualité et orienter les produits."],
 ["Au stockage","Étudier les équipements adaptés aux denrées et au climat."],
 ["Vers le marché","Évaluer les itinéraires, les moyens de transport et les débouchés."]
] as const;

export default function Page(){return <main>
 <div className="institutional-hero">
  <div className="institutional-hero-copy">
   <p className="eyebrow">Lubi · Sankuru · RDC</p>
   <h1>Relier les territoires agricoles aux marchés.</h1>
   <p className="institutional-lead">L'enclavement impose de penser ensemble la production, la conservation et l'acheminement des récoltes.</p>
   <p>SALU souhaite structurer une approche territoriale adaptée aux réalités des producteurs et à la faisabilité des infrastructures.</p>
   <div className="hero-actions"><Link className="button" href="/territoire-enclavement/logistique">Du champ au marché</Link><a className="institutional-text-link" href="#atlas-territorial">Consulter l'atlas →</a></div>
  </div>
  <div className="institutional-hero-visual"><SectorIllustration slug="producteurs"/></div>
 </div>
 <p className="institutional-photo-disclaimer">Photographie agricole d'illustration. Elle ne documente ni un lieu précis du Sankuru ni des producteurs SALU.</p>

 <section>
  <div className="section-heading"><p className="eyebrow">Les défis structurants</p><h2>Quatre conditions pour créer une chaîne de valeur viable.</h2><p className="section-description">Chaque étape doit être évaluée à partir d'informations de terrain et de sources vérifiées.</p></div>
  <div className="grid territory-challenges">{challenges.map(([num,title,description])=><article className="card" key={num}><span className="number">{num}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
 </section>

 <div id="atlas-territorial" className="territory-atlas-anchor"><TerritoryAtlas/></div>

 <section>
  <div className="section-heading"><p className="eyebrow">Continuité logistique</p><h2>Du champ au marché, chaque maillon compte.</h2></div>
  <div className="grid agropole-steps">{stages.map(([title,description],index)=><article className="agropole-step" key={title}><span className="agropole-step-number">{String(index+1).padStart(2,"0")}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
  <div className="territory-more"><p>La faisabilité de la collecte, du stockage et du transport sera examinée sans inventer de distances, de délais ou de tracés.</p><Link className="button" href="/territoire-enclavement/logistique">Comprendre la chaîne logistique</Link></div>
 </section>

 <section className="institutional-cta">
  <div><p className="eyebrow">Une vision territoriale</p><h2>Concevoir les projets avec les acteurs locaux.</h2><p>La collaboration avec les producteurs, les partenaires techniques et les institutions est essentielle pour définir les priorités.</p></div>
  <Link className="button" href="/filieres/producteurs-partenaires">Le parcours producteurs</Link>
 </section>
 <p className="quiet-note">L'atlas ne présente aucune position non approuvée. Les cartes ne constituent pas des preuves foncières ni administratives.</p>
 </main>}
