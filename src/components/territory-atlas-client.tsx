"use client";
import {useMemo,useState} from "react";
import TerritoryMap from "@/components/territory-map";
import type {VerifiedSite} from "@/data/territory";
type Filter="tous"|"existant"|"projeté";
export function TerritoryAtlasClient({sites}:{sites:VerifiedSite[]}){
 const [filter,setFilter]=useState<Filter>("tous");
 const visible=useMemo(()=>sites.filter(s=>filter==="tous"||s.status===filter),[sites,filter]);
 return <div><fieldset className="atlas-filters"><legend>Afficher les sites selon leur statut</legend>{(["tous","existant","projeté"] as const).map(value=><label key={value}><input type="radio" name="territory-filter" value={value} checked={filter===value} onChange={()=>setFilter(value)}/><span>{value==="tous"?"Tous les sites":value==="existant"?"Existants":"Projetés"}</span></label>)}</fieldset><p role="status" aria-live="polite">{visible.length} site{visible.length>1?"s":""} affiché{visible.length>1?"s":""}</p><div className="atlas-legend" aria-label="Légende des statuts"><span><i className="atlas-dot atlas-dot-existing" aria-hidden="true"/>Existant</span><span><i className="atlas-dot atlas-dot-planned" aria-hidden="true"/>Projeté</span></div>{visible.length?<><TerritoryMap sites={visible}/><div className="grid">{visible.map(s=><article key={s.id} className="card"><h3>{s.name}</h3><p>{s.layer} · {s.status}</p><p>Vérifié le {s.verifiedAt}</p><p className="quiet-note">Source : {s.source}</p></article>)}</div></>:<p className="card">Aucun site ne correspond à ce filtre.</p>}</div>;
}
