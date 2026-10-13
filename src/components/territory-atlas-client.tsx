"use client";
import {useMemo,useState} from "react";
import TerritoryMap from "@/components/territory-map";
import type {VerifiedSite} from "@/data/territory";
import type {TerritoryGeometry} from "@/data/territory-geojson";
type Filter="tous"|"existant"|"projeté";
export function TerritoryAtlasClient({sites,boundary}:{sites:VerifiedSite[];boundary:TerritoryGeometry|null}){
 const [filter,setFilter]=useState<Filter>("tous");
 const visible=useMemo(()=>sites.filter(s=>filter==="tous"||s.status===filter),[sites,filter]);
 return <div>{sites.length>0&&<><fieldset className="atlas-filters"><legend>Afficher les sites selon leur statut</legend>{(["tous","existant","projeté"] as const).map(value=><label key={value}><input type="radio" name="territory-filter" value={value} checked={filter===value} onChange={()=>setFilter(value)}/><span>{value==="tous"?"Tous les sites":value==="existant"?"Existants":"Projetés"}</span></label>)}</fieldset><p role="status" aria-live="polite">{visible.length} site{visible.length>1?"s":""} affiché{visible.length>1?"s":""}</p><div className="atlas-legend" aria-label="Légende des statuts"><span><i className="atlas-dot atlas-dot-existing" aria-hidden="true"/>Existant</span><span><i className="atlas-dot atlas-dot-planned" aria-hidden="true"/>Projeté</span></div></>}
 {(visible.length>0||boundary)&&<TerritoryMap sites={visible} boundary={boundary}/>}
 {boundary&&<p className="quiet-note">Limite administrative — Source : {boundary.source} · Licence : {boundary.license} · Vérifiée le {boundary.verifiedAt}</p>}
 {visible.length>0?<div className="grid">{visible.map(s=><article key={s.id} className="card"><h3>{s.name}</h3><p>{s.layer} · {s.status}</p><p>Vérifié le {s.verifiedAt}</p><p className="quiet-note">Source : {s.source}</p></article>)}</div>:sites.length>0?<p className="card">Aucun site ne correspond à ce filtre.</p>:null}</div>;
}
