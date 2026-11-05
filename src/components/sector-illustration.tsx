"use client";
import {useState} from "react";
import {sectorIllustrations,sectorImageUrl} from "@/data/sector-illustrations";

export function SectorIllustration({slug,priority=false}:{slug:string;priority?:boolean}){
 const [unavailable,setUnavailable]=useState(false);
 const photo=sectorIllustrations[slug];
 if(!photo)return null;
 return <figure className="sector-photo">
  {unavailable
   ? <div className="sector-photo-fallback" role="img" aria-label={photo.alt}><span>Illustration momentanément indisponible</span></div>
   : <>
    {/* Photographie d'illustration extérieure ; crédit et licence à /credits-photographiques. */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={sectorImageUrl(photo)} alt={photo.alt} width={960} height={620} loading={priority?"eager":"lazy"} decoding="async" onError={()=>setUnavailable(true)}/>
   </>
  }
 </figure>;
}
