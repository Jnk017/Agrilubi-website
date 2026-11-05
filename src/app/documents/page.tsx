import Link from "next/link";
import type {Metadata} from "next";
import {publishedDocuments} from "@/data/public-documents";

export const metadata:Metadata={title:"Bibliothèque documentaire",description:"Documents institutionnels approuvés et informations de publication de la Société Agricole de Lubi."};
export default function Page(){const docs=publishedDocuments();return <main>
 <div className="page-intro"><p className="eyebrow">SALU · Documentation institutionnelle</p><h1>Documents et ressources.</h1><p>Cette bibliothèque rassemble exclusivement les documents dont la publication a été autorisée. Elle ne contient pas les statuts confidentiels, les pièces personnelles ou les dossiers de travail internes.</p></div>
 {docs.length
 ? <section><div className="section-heading"><p className="eyebrow">Documents approuvés</p><h2>Une bibliothèque publique vérifiable.</h2></div><div className="grid editorial-library-grid">{docs.map(doc=><article className="card editorial-library-card" key={doc.id}><p className="eyebrow">{doc.category} · {doc.date}</p><h3>{doc.title}</h3><p>{doc.description}</p><a href={doc.path} target="_blank" rel="noopener noreferrer">Consulter le PDF ↗</a></article>)}</div></section>
 : <section className="editorial-empty"><p className="eyebrow">Documents en préparation</p><h2>La bibliothèque publique sera enrichie après validation.</h2><p>Aucun PDF n'est actuellement approuvé pour une diffusion publique sur le site. Les documents disponibles pour une étude de partenariat pourront être demandés par les canaux officiels, sous réserve des conditions applicables.</p><Link className="button" href="/contact">Faire une demande institutionnelle</Link></section>}
 <section className="band"><div className="section-heading"><p className="eyebrow">Partenaires et investisseurs</p><h2>Un cadre documentaire pour préparer les échanges.</h2><p className="section-description">La liste des éléments de due diligence à préparer est décrite séparément de la bibliothèque publique.</p></div><Link className="button" href="/investir/dossier">Voir le dossier de préparation</Link></section>
 </main>}
