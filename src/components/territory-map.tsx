"use client";
import {useEffect,useRef,useState} from "react";
import type {VerifiedSite} from "@/data/territory";
export default function TerritoryMap({sites}:{sites:VerifiedSite[]}){
 const element=useRef<HTMLDivElement>(null);
 const [error,setError]=useState(false);
 useEffect(()=>{
  const host=element.current;
  if(!host||sites.length===0)return;
  let disposed=false;
  let map:import("leaflet").Map|undefined;
  setError(false);
  (async()=>{
   try{
    const L=await import("leaflet");
    if(disposed||!host.isConnected)return;
    map=L.map(host,{scrollWheelZoom:false,keyboard:true,attributionControl:true});
    const bounds=L.latLngBounds([]);
    for(const site of sites){
     if(!Number.isFinite(site.latitude)||!Number.isFinite(site.longitude))continue;
     const point:[number,number]=[site.latitude,site.longitude];
     const marker=L.circleMarker(point,{radius:8,color:site.status==="existant"?"#0B3D2E":"#8B5E3C",fillOpacity:.85}).addTo(map);
     const label=document.createElement("span");
     label.textContent=site.name+" — "+site.status;
     marker.bindPopup(label);
     bounds.extend(point);
    }
    if(bounds.isValid())map.fitBounds(bounds.pad(.35),{maxZoom:10});
   }catch{map?.remove();map=undefined;if(!disposed)setError(true);}
  })();
  return()=>{disposed=true;map?.remove()};
 },[sites]);
 return <><div ref={element} className="territory-map" role="region" aria-label="Carte des sites vérifiés" tabIndex={0} hidden={error}/>{error&&<p role="status">La carte n'est pas disponible. La liste textuelle des sites reste consultable ci-dessous.</p>}</>;
}
