"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {companyContact} from "@/data/company-contact";

export function SiteFooter(){
 const pathname=usePathname();
 const english=pathname==="/en"||pathname.startsWith("/en/");
 const links=english?[
  ["/en/value-chains","Value chains"],["/en/territory","Territory"],["/en/invest","Partnerships"],["/en/contact","Contact"],["/credits-photographiques","Photo credits"]
 ]:[
  ["/filieres","Filières"],["/territoire-enclavement","Territoire"],["/investir","Partenariats"],["/contact","Contact"],["/credits-photographiques","Crédits photos"]
 ];
 return <footer className="site-footer">
  <div>
   <strong className="footer-brand">SALU · {english?"Sankuru Agropole":"Agropole du Sankuru"}</strong>
   <p>{english?"Building agricultural value chains rooted in the territory.":"Construire des chaînes de valeur agricoles ancrées dans le territoire."}</p>
   <address style={{fontStyle:"normal"}}>
    <p>{companyContact.streetAddress}, {companyContact.locality}, {companyContact.city} – DR Congo</p>
    <p><a href={`mailto:${companyContact.email}`}>{companyContact.email}</a></p>
    <p>{companyContact.phones.map((phone,index)=><span key={phone.href}>{index>0?" · ":""}<a href={phone.href}>{phone.display}</a></span>)}</p>
   </address>
   <p className="footer-note">{english?"Project in development: planned activities are not presented as already operational.":"Projet en développement : les activités présentées n'impliquent pas qu'elles soient toutes opérationnelles."}</p>
  </div>
  <nav className="footer-links" aria-label={english?"Footer navigation":"Navigation de pied de page"}>{links.map(([href,label])=><Link key={href} href={href}>{label}</Link>)}</nav>
 </footer>;
}
