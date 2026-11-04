import type {Metadata} from "next";
import Link from "next/link";
import {companyContact} from "@/data/company-contact";
export const metadata:Metadata={title:"Contact — Société Agricole de Lubi"};
const sujets=[
["Investisseurs et bailleurs","Questions relatives aux études, opportunités de coopération et pièces de présentation."],
["Producteurs et coopératives","Informations sur le modèle envisagé d'intégration des exploitations agricoles."],
["Partenaires techniques","Échanges sur les compétences agricoles, agro-industrielles, environnementales et logistiques."],
["Médias et institutions","Demandes de documentation validée, d'entretiens et de communication institutionnelle."]
];
export default function Page(){
 return <main>
  <div className="page-intro"><p className="eyebrow">SALU · Relations institutionnelles</p><h1>Contactez la Société Agricole de Lubi</h1><p>Pour toute demande liée à l'Agropole du Sankuru, à une coopération ou à une opportunité de partenariat, contactez notre société aux coordonnées ci-dessous.</p></div>
  <section aria-labelledby="contact-coordinates"><h2 id="contact-coordinates">Nos coordonnées</h2>
   <address className="card" style={{fontStyle:"normal"}}>
    <h3>{companyContact.name}</h3>
    <p><strong>Adresse :</strong> {companyContact.streetAddress}, {companyContact.locality} – {companyContact.city}, RDC</p>
    <p><strong>E-mail :</strong> <a href={`mailto:${companyContact.email}`}>{companyContact.email}</a></p>
    <p><strong>Téléphones :</strong> {companyContact.phones.map((phone,index)=><span key={phone.href}>{index>0?" · ":""}<a href={phone.href}>{phone.display}</a></span>)}</p>
   </address>
  </section>
  <section><h2>Domaines de contact</h2><div className="grid">{sujets.map(([titre,description])=><article className="card" key={titre}><h3>{titre}</h3><p>{description}</p></article>)}</div></section>
  <section className="band"><h2>Préparer votre demande</h2><p>Précisez votre organisation, votre domaine d'intérêt et l'objet de votre demande. Évitez de transmettre des documents ou données sensibles par des canaux non sécurisés.</p></section>
  <p><Link href="/investir/dossier">Consulter le dossier partenaires →</Link></p>
 </main>;
}
