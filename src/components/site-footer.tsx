import Link from "next/link";
import {companyContact} from "@/data/company-contact";
export function SiteFooter(){return <footer className="site-footer">
 <div>
  <strong className="footer-brand">SALU · Agropole du Sankuru</strong>
  <p>Construire des chaînes de valeur agricoles ancrées dans le territoire.</p>
  <address style={{fontStyle:"normal"}}>
   <p>{companyContact.streetAddress}, {companyContact.locality}, {companyContact.city} – RDC</p>
   <p><a href={`mailto:${companyContact.email}`}>{companyContact.email}</a></p>
   <p>{companyContact.phones.map((phone,index)=><span key={phone.href}>{index>0?" · ":""}<a href={phone.href}>{phone.display}</a></span>)}</p>
  </address>
  <p className="footer-note">Projet en développement : les activités présentées n'impliquent pas qu'elles soient toutes opérationnelles.</p>
 </div>
 <nav className="footer-links" aria-label="Navigation de pied de page"><Link href="/filieres">Filières</Link><Link href="/territoire-enclavement">Territoire</Link><Link href="/investir">Partenariats</Link><Link href="/contact">Contact</Link><Link href="/credits-photographiques">Crédits photos</Link></nav>
 </footer>}
