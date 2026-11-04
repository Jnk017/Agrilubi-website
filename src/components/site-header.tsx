"use client";

import {useEffect,useId,useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Menu,X} from "lucide-react";

const links=[
 ["/agropole","L’Agropole"],
 ["/filieres","Filières"],
 ["/territoire-enclavement","Territoire"],
 ["/infrastructures","Infrastructures"],
 ["/impact-odd","Impact"],
 ["/gouvernance-partenaires","Gouvernance"],
 ["/investir","Investir"],
 ["/actualites","Actualités"],
 ["/medias","Médias"],
 ["/documents","Documents"],
 ["/contact","Contact"]
] as const;

export function SiteHeader(){
 const [isOpen,setIsOpen]=useState(false);
 const pathname=usePathname();
 const menuId=useId();
 useEffect(()=>{setIsOpen(false)},[pathname]);
 useEffect(()=>{
  if(!isOpen)return;
  const close=(event:KeyboardEvent)=>{if(event.key==="Escape")setIsOpen(false)};
  window.addEventListener("keydown",close);
  return()=>window.removeEventListener("keydown",close);
 },[isOpen]);
 return <header className="site-header">
  <Link href="/" className="brand" aria-label="SALU, accueil" onClick={()=>setIsOpen(false)}>
   <span className="brand-symbol" aria-hidden="true">S</span>
   <span><strong>SALU</strong><small>AGROPOLE DU SANKURU</small></span>
  </Link>
  <div className="header-actions">
   <Link className="language-link" href="/en" lang="en" hrefLang="en" aria-label="English overview" onClick={()=>setIsOpen(false)}>EN</Link>
   <button type="button" className="mobile-menu-toggle" aria-label={isOpen?"Fermer le menu":"Ouvrir le menu"} aria-expanded={isOpen} aria-controls={menuId} onClick={()=>setIsOpen(o=>!o)}>
    {isOpen?<X size={24} aria-hidden="true"/>:<Menu size={24} aria-hidden="true"/>}
    <span className="mobile-menu-label">Menu</span>
   </button>
  </div>
  <nav id={menuId} className={`primary-nav${isOpen?" is-open":""}`} aria-label="Navigation principale">
   {links.map(([href,label])=><Link key={href} href={href} onClick={()=>setIsOpen(false)} aria-current={pathname===href||(href!=="/"&&pathname.startsWith(href+"/"))?"page":undefined}>{label}</Link>)}
  </nav>
 </header>;
}
