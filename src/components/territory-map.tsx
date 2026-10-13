"use client";
import {useEffect,useRef,useState} from "react";
import type {VerifiedSite} from "@/data/territory";
import type {TerritoryGeometry} from "@/data/territory-geojson";
type Props={sites:VerifiedSite[];boundary?:TerritoryGeometry|null};
export default function TerritoryMap({sites,boundary}:Props){
 const element=useRef<HTMLDivElement>(null);
 const [error,setError]=useState(false);
 useEffect(()=>{
  const host=element.current;
  if(!host)return;
  let disposed=false;
  let map:import("leaflet").Map|undefined;
  setError(false);
  (async()=>{
   try{
    const L=await import("leaflet");
    if(disposed||!host.isConnected)return;
    map=L.map(host,{scrollWheelZoom:false,keyboard:true,attributionControl:true});
    const bounds=L.latLngBounds([]);
    if(boundary?.approvedForPublication&&boundary.features.length){
     const geometry={type:"FeatureCollection",features:boundary.features} as import("geojson").FeatureCollection;
     const layer=L.geoJSON(geometry,{style:{color:"#0B3D2E",weight:2,fillColor:"#C9A227",fillOpacity:.12}}).addTo(map);
     if(layer.getBounds().isValid())bounds.extend(layer.getBounds());
    }
    for(const site of sites){
     if(!Number.isFinite(site.latitude)||!Number.isFinite(site.longitude))continue;
     const point:[number,number]=[site.latitude,site.longitude];
     const marker=L.circleMarker(point,{radius:8,color:site.status==="existant"?"#0B3D2E":"#8B5E3C",fillOpacity:.85}).addTo(map);
     const label=document.createElement("span");
     label.textContent=site.name+" — "+site.status;
     marker.bindPopup(label);
     bounds.extend(point);
    }
    if(bounds.isValid())map.fitBounds(bounds.pad(.15),{maxZoom:10});
   }catch{map?.remove();map=undefined;if(!disposed)setError(true);}
  })();
  return()=>{disposed=true;map?.remove()};
 },[sites,boundary]);
 return <><div ref={element} className="territory-map" role="region" aria-label="Carte des limites et sites vérifiés" tabIndex={0} hidden={error}/>{error&&<p role="status">La carte n'est pas disponible. Les informations territoriales restent consultables sous forme de texte.</p>}</>;
}
