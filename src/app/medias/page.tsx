import Link from "next/link";
import Image from "next/image";
import type {Metadata} from "next";
import {publishedMedia} from "@/data/public-media";
import {MediaPlaceholder} from "@/components/media-placeholder";
export const metadata:Metadata={title:"Médias et photothèque",description:"Photothèque institutionnelle SALU et informations sur la provenance et l'utilisation de ses illustrations."};
export default function Page(){
 const photos=publishedMedia();
 return <main>
  <div className="page-intro"><p className="eyebrow">Médias · Territoire · Filières</p><h1>Images et regards sur l'Agropole.</h1><p>Une photothèque institutionnelle dédiée aux documents visuels authentifiés du projet. Les photographies officielles seront diffusées uniquement avec des informations de contexte et des autorisations vérifiées.</p></div>
  {photos.length
   ? <section><div className="grid media-library-grid">{photos.map(photo=><figure className="media-library-item" key={photo.id}><Image src={photo.imagePath} alt={photo.alt} width={960} height={640} style={{width:"100%",height:"auto"}}/><figcaption><strong>{photo.title}</strong><p>Crédit : {photo.credit}</p></figcaption></figure>)}</div></section>
   : <section className="content-split"><div><p className="eyebrow">Photothèque officielle</p><h2>Des photographies documentées, pas des images attribuées à tort.</h2><p>Les images du territoire, des sites et des activités de SALU seront ajoutées une fois leur provenance, leur localisation et leurs droits de diffusion confirmés.</p><p>Les photographies d'illustration présentes sur les pages des filières proviennent de sources extérieures et ne documentent pas les opérations de SALU.</p><Link className="inline-link" href="/credits-photographiques">Consulter les sources et licences →</Link></div><MediaPlaceholder label="Photothèque officielle en préparation" description="Collection en constitution, sans photographies de sites encore validées pour publication."/></section>}
  <section className="band"><p className="eyebrow">Politique des images</p><h2>La provenance fait partie de l'information.</h2><p>Chaque photographie institutionnelle doit être publiée avec les droits de diffusion appropriés et une légende exacte. Les images de tiers, utilisées uniquement pour illustrer des filières, sont présentées séparément dans les crédits.</p><Link className="inline-link" href="/credits-photographiques">Crédits photographiques et licences →</Link></section>
 </main>;
}
