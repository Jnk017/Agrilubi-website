import Link from "next/link";
import type {Metadata} from "next";
import {publishedNews} from "@/data/news";

export const metadata:Metadata={title:"Actualités officielles",description:"Communiqués et informations officielles validés par la Société Agricole de Lubi."};
export default function Page(){
 const items=publishedNews();
 return <main>
  <div className="page-intro"><p className="eyebrow">SALU · Communication institutionnelle</p><h1>Actualités et communiqués.</h1><p>Retrouvez les communications officielles de la Société Agricole de Lubi. Toute annonce fait l'objet d'une validation de sa source et de son contenu avant publication.</p></div>
  {items.length
   ? <section><div className="section-heading"><p className="eyebrow">Publications officielles</p><h2>Informations validées.</h2></div><div className="grid editorial-library-grid">{items.map(item=><article className="card editorial-library-card" key={item.slug}><p className="eyebrow">{item.date}</p><h3>{item.title}</h3><p>{item.summary}</p><Link href={"/actualites/"+item.slug}>Lire le communiqué →</Link></article>)}</div></section>
   : <section className="editorial-empty"><p className="eyebrow">Publications à venir</p><h2>Notre espace d'actualités est en préparation.</h2><p>Aucun communiqué n'a encore été approuvé pour diffusion publique. Les annonces seront mises en ligne après leur validation institutionnelle.</p><Link className="button" href="/contact">Contacter SALU</Link></section>}
  <section><div className="section-heading"><p className="eyebrow">Ressources associées</p><h2>Découvrir notre documentation.</h2></div><div className="grid editorial-library-grid">
   <article className="card editorial-library-card"><h3>Médias et photothèque</h3><p>Photographies publiées après vérification de leur origine et de leurs droits.</p><Link href="/medias">Consulter la photothèque →</Link></article>
   <article className="card editorial-library-card"><h3>Documents institutionnels</h3><p>Documents publics approuvés, présentés avec leur date et leur objet.</p><Link href="/documents">Accéder aux documents →</Link></article>
  </div></section>
 </main>;
}
