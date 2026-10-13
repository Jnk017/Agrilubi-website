"use client";
import {useEffect,useRef} from "react";
import type {VerifiedSite} from "@/data/territory";
type Props={sites:VerifiedSite[]};
export default function TerritoryMap({sites}:Props){const node=useRef<HTMLDivElement>(null);
useEffect(()=>{if(!node.current||!sites.length)return;let map:import("leaflet").Map|undefined;let cancelled=false;(async()=>{const L=await import("leaflet");if(cancelled||!node.current)return;map=L.map(node.current,{scrollWheelZoom:false});const bounds=L.latLngBounds([]);sites.forEach(site=>{const location:[number,number]=[site.latitude,site.longitude];L.circleMarker(location,{radius:8,color:site.status==="existant"?"#0B3D2E":"#8B5E3C",fillOpacity:.8}).addTo(map!).bindPopup(site.name+" — "+site.status);bounds.extend(location)});map.fitBounds(bounds.pad(.35),{maxZoom:11});})();return()=>{cancelled=true;map?.remove()}},[sites]);return <div ref={node} className="territory-map" role="region" aria-label="Carte interactive des sites vérifiés" tabIndex={0}/>;}
