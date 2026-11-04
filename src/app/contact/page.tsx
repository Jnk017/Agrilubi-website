import Link from "next/link";
import type {Metadata} from "next";
import {companyContact} from "@/data/company-contact";
export const metadata:Metadata={
 title:"Contact — Société Agricole de Lubi",
 description:"Contactez SALU à Kinshasa : 05 Avenue de la Science, Gombe. contact@agrilubi.com. Téléphones +243 819 766 606 et +243 816 361 634."
};
const topics=[
 ["Investisseurs et bailleurs","Coopération, études de faisabilité et préparation des dossiers de partenariat."],
 ["Producteurs et coopératives","Modèle d'intégration envisagé, formations, collecte et débouchés agricoles."],
 ["Partenaires techniques","Compétences agricoles, agro-industrielles, environnementales et logistiques."],
 ["Médias et institutions","Demandes d'informations validées et relations institutionnelles."]
] as const;
export default function Page(){return <main>
 <div className="page-intro contact-page-intro">
  <p className="eyebrow">SALU · Relations institutionnelles</p>
  <h1>Construisons le dialogue.</h1>
  <p>Pour toute demande relative à l'Agropole du Sankuru, aux filières agricoles ou à une coopération potentielle, contactez directement la Société Agricole de Lubi.</p>
 </div>
 <section className="contact-layout" aria-labelledby="coordinates-heading">
  <div className="contact-primary">
   <p className="eyebrow">Nos coordonnées officielles</p>
   <h2 id="coordinates-heading">{companyContact.name}</h2>
   <address className="contact-details">
    <div className="contact-detail"><span className="contact-label">Adresse</span><p>{companyContact.streetAddress}<br/>{companyContact.locality}<br/>{companyContact.city}, {companyContact.country}</p></div>
    <div className="contact-detail"><span className="contact-label">Courriel</span><a href={`mailto:${companyContact.email}`}>{companyContact.email}</a></div>
    <div className="contact-detail"><span className="contact-label">Téléphone</span><div className="contact-phone-list">{companyContact.phones.map(phone=><a key={phone.href} href={phone.href}>{phone.display}</a>)}</div></div>
   </address>
   <div className="hero-actions"><a href={`mailto:${companyContact.email}`} className="button">Nous écrire</a><a href={companyContact.phones[0].href} className="contact-call-link">Nous appeler →</a></div>
  </div>
  <div className="contact-side">
   <p className="eyebrow">Localisation institutionnelle</p>
   <h3>Kinshasa · Gombe</h3>
   <p>05 Avenue de la Science, Commune de la Gombe, Kinshasa — RDC.</p>
   <p>Cette adresse correspond au bureau communiqué par SALU. La localisation exacte du projet agricole à Lubi n'est pas représentée ici.</p>
   <a href="https://www.google.com/maps/search/?api=1&query=05%20Avenue%20de%20la%20Science%20Gombe%20Kinshasa%20RDC" target="_blank" rel="noopener noreferrer">Rechercher l'adresse sur Google Maps →</a>
  </div>
 </section>
 <section>
  <div className="section-heading"><p className="eyebrow">À qui s'adresse cet espace ?</p><h2>Un point de contact pour chaque projet.</h2><p className="section-description">Précisez dans votre message l'objet de votre demande et le nom de votre organisation afin d'en faciliter le traitement.</p></div>
  <div className="grid contact-topics">{topics.map(([title,description])=><article className="card" key={title}><h3>{title}</h3><p>{description}</p></article>)}</div>
 </section>
 <section className="band"><p className="eyebrow">Confidentialité</p><h2>Des échanges professionnels et responsables.</h2><p>Évitez de transmettre des données personnelles sensibles ou des documents confidentiels sans avoir convenu d'un canal approprié. Aucun formulaire automatisé de collecte n'est activé sur cette page.</p><Link className="inline-link" href="/investir/dossier">Consulter le cadre documentaire des partenariats →</Link></section>
 </main>}
