"use client";
import {useEffect,useId,useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Menu,X} from "lucide-react";

const frenchLinks=[
 ["/agropole","L’Agropole"],["/filieres","Filières"],["/territoire-enclavement","Territoire"],
 ["/infrastructures","Infrastructures"],["/impact-odd","Impact"],["/gouvernance-partenaires","Gouvernance"],
 ["/investir","Investir"],["/actualites","Actualités"],["/medias","Médias"],
 ["/documents","Documents"],["/contact","Contact"]
] as const;
const englishLinks=[
 ["/en","Overview"],["/en/value-chains","Value chains"],["/en/territory","Territory"],
 ["/en/invest","Partnerships"],["/en/contact","Contact"]
] as const;

export function SiteHeader(){
 const [isOpen,setIsOpen]=useState(false);
 const pathname=usePathname();
 const menuId=useId();
 const isEnglish=pathname==="/en"||pathname.startsWith("/en/");
 const links=isEnglish?englishLinks:frenchLinks;
 useEffect(()=>setIsOpen(false),[pathname]);
 useEffect(()=>{
  if(!isOpen)return;
  const close=(event:KeyboardEvent)=>{if(event.key==="Escape")setIsOpen(false)};
  window.addEventListener("keydown",close);
  return()=>window.removeEventListener("keydown",close);
 },[isOpen]);
 return <header className="site-header">
  <Link href={isEnglish?"/en":"/"} className="brand" aria-label={isEnglish?"SALU, English homepage":"SALU, accueil"} onClick={()=>setIsOpen(false)}>
   <span className="brand-symbol" aria-hidden="true">S</span>
   <span><strong>SALU</strong><small>{isEnglish?"SANKURU AGROPOLE":"AGROPOLE DU SANKURU"}</small></span>
  </Link>
  <div className="header-actions">
   <Link className="language-link" href={isEnglish?"/":"/en"} lang={isEnglish?"fr":"en"} hrefLang={isEnglish?"fr":"en"} aria-label={isEnglish?"Version française":"English overview"} onClick={()=>setIsOpen(false)}>{isEnglish?"FR":"EN"}</Link>
   <button type="button" className="mobile-menu-toggle" aria-label={isOpen?(isEnglish?"Close menu":"Fermer le menu"):(isEnglish?"Open menu":"Ouvrir le menu")} aria-expanded={isOpen} aria-controls={menuId} onClick={()=>setIsOpen(value=>!value)}>
    {isOpen?<X size={24} aria-hidden="true"/>:<Menu size={24} aria-hidden="true"/>}
    <span className="mobile-menu-label">{isEnglish?"Menu":"Menu"}</span>
   </button>
  </div>
  <nav id={menuId} className={`primary-nav${isOpen?" is-open":""}`} aria-label={isEnglish?"Main navigation":"Navigation principale"}>
   {links.map(([href,label])=><Link key={href} href={href} onClick={()=>setIsOpen(false)} aria-current={pathname===href||(href!=="/en"&&pathname.startsWith(href+"/"))?"page":undefined}>{label}</Link>)}
  </nav>
 </header>;
}
