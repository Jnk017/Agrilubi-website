import type {MetadataRoute} from "next";
import {publishedNews} from "@/data/news";
const routes=["","/agropole","/filieres","/filieres/vivrieres","/filieres/maraicheres","/filieres/perennes","/filieres/pisciculture","/filieres/elevage","/filieres/producteurs","/filieres/producteurs-partenaires","/territoire-enclavement","/territoire-enclavement/logistique","/infrastructures","/infrastructures/transformation","/impact-odd","/gouvernance-partenaires","/investir","/investir/dossier","/actualites","/medias","/documents","/contact","/en"];
export default function sitemap():MetadataRoute.Sitemap{
 const origin=process.env.NEXT_PUBLIC_SITE_URL;
 if(!origin)return [];
 let base:URL;
 try{base=new URL(origin);if(base.protocol!=="https:")return [];}catch{return [];}
 const published=publishedNews().map(item=>"/actualites/"+encodeURIComponent(item.slug));
 return [...routes,...published].map(path=>({url:new URL(path||"/",base).toString(),changeFrequency:"monthly" as const,priority:path===""?1:0.6}));
}
