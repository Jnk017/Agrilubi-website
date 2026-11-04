import type {Metadata} from "next";
import Link from "next/link";
import {SectorIllustration} from "@/components/sector-illustration";
export const metadata:Metadata={title:"Filières agricoles"};
const filieres=[
 ["vivrieres","Cultures vivrières","Maïs, riz, manioc, soja"],
 ["maraicheres","Maraîchage et épices","Piment, légumes, pastèques, concombres, épices"],
 ["perennes","Cultures pérennes","Cacao, café, palmier à huile"],
 ["pisciculture","Pisciculture","Élevage piscicole et valorisation"],
 ["elevage","Élevage","Porcs, volailles et santé animale"],
 ["producteurs","Producteurs partenaires","Structuration, formation, collecte et marchés"]
] as const;
export default function Page(){return <main><div className="page-intro"><p className="eyebrow">Agropole du Sankuru</p><h1>Nos filières agricoles</h1><p>Découvrez les six pôles envisagés au sein de l'Agropole. Les photographies illustrent les activités agricoles, sans représenter nécessairement les sites ou réalisations de SALU.</p></div><section><div className="grid sector-grid">{filieres.map(([slug,title,desc])=><article className="sector-card" key={slug}><SectorIllustration slug={slug}/><div className="sector-card-body"><h2>{title}</h2><p>{desc}</p><Link href={"/filieres/"+slug}>Découvrir la filière →</Link></div></article>)}</div></section><p className="quiet-note">Les capacités, sites, autorisations et investissements seront confirmés après validation technique.</p></main>}
