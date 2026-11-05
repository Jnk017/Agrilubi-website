import Link from "next/link";
import type {Metadata} from "next";
import {sectorIllustrations} from "@/data/sector-illustrations";

export const metadata:Metadata={
 title:"Crédits photographiques",
 description:"Sources, auteurs et licences des images d'illustration publiées sur le site institutionnel SALU."
};
const names:Record<string,string>={
 vivrieres:"Cultures vivrières",maraicheres:"Maraîchage et épices",perennes:"Cultures pérennes",pisciculture:"Pisciculture",elevage:"Élevage",producteurs:"Producteurs partenaires"
};
export default function Page(){return <main>
 <div className="page-intro"><p className="eyebrow">Transparence éditoriale</p><h1>Crédits photographiques</h1><p>Les photographies illustrant nos filières sont des images documentaires publiées par des contributeurs de Wikimedia Commons. Elles ne représentent pas nécessairement les activités, installations ou producteurs de SALU ni le territoire du Sankuru.</p></div>
 <section><h2>Sources et conditions de réutilisation</h2><div className="photo-credit-list">{Object.values(sectorIllustrations).map(photo=><article className="photo-credit-entry" key={photo.slug}>
  <div><h3>{names[photo.slug]||photo.slug}</h3><p>{photo.alt}</p></div>
  <div><p><strong>Photographe / contributeur :</strong> {photo.author}</p><p><strong>Licence :</strong> <a href={photo.licenseUrl} target="_blank" rel="noopener noreferrer">{photo.license}</a></p><p><a href={photo.sourceUrl} target="_blank" rel="noopener noreferrer">Voir la photographie d'origine sur Wikimedia Commons ↗</a></p></div>
 </article>)}</div></section>
 <section className="band"><h2>Illustrations et photographies institutionnelles</h2><p>Les illustrations ne doivent pas être interprétées comme des preuves d'activité ou de localisation. Des photographies originales du projet seront intégrées lorsqu'elles seront vérifiées et autorisées pour publication.</p><Link className="inline-link" href="/medias">Visiter la rubrique Médias →</Link></section>
 </main>}
