"use client";
import {useEffect,useRef,useState} from "react";
import type {VerifiedSite} from "@/data/territory";
type Props={sites:VerifiedSite[]};
export default function TerritoryMap({sites}:Props){
 const element=useRef<HTMLDivElement>(null);
 const [error,setError]=useState(false);
 useEffect(()=>{
  if(!element.current||sites.length===0)return;
  let disposed=false;
  let map:import("leaflet").Map|undefined;
  (async()=>{
   try{
    const L=await import("leaflet");
    if(disposed||!element.current)return;
    map=L.map(element.current,{scrollWheelZoom:false,attributionControl:false,keyboard:true});
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
   }catch{if(!disposed)setError(true);}
  })();
  return()=>{disposed=true;map?.remove()};
 },[sites]);
 if(error)return <p role="status">La carte n'est pas disponible. La liste textuelle des sites reste consultable ci-dessous.</p>;
 return <div ref={element} className="territory-map" role="region" aria-label="Carte des sites vérifiés" tabIndex={0}/>;
}
