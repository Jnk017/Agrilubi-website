import {sectorIllustrations,sectorImageUrl} from "@/data/sector-illustrations";
export function SectorIllustration({slug,priority=false}:{slug:string;priority?:boolean}){
 const photo=sectorIllustrations[slug];
 if(!photo)return null;
 return <figure className="sector-photo">
   {/* Browser loads Wikimedia's width-limited file endpoint directly. */}
   {/* eslint-disable-next-line @next/next/no-img-element */}
   <img src={sectorImageUrl(photo)} alt={photo.alt} width={960} height={620} loading={priority?"eager":"lazy"} decoding="async"/>
   <figcaption>
    <span className="sector-photo-note">Photographie d’illustration — ne représente pas une réalisation de SALU</span>
    <span>© <a href={photo.sourceUrl} target="_blank" rel="noopener noreferrer">{photo.author} / Wikimedia Commons</a> · <a href={photo.licenseUrl} target="_blank" rel="noopener noreferrer">{photo.license}</a></span>
   </figcaption>
  </figure>;
}
