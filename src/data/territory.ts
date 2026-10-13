export type TerritoryLayer="production"|"collecte"|"logistique"|"implantation";
export type VerifiedSite={id:string;name:string;layer:TerritoryLayer;latitude:number;longitude:number;status:"existant"|"projeté";source:string;verifiedAt:string;approvedForPublication:boolean};
export const territorySites:VerifiedSite[]=[];
export function approvedSites(){return territorySites.filter(site=>site.approvedForPublication&&site.source.trim()!==""&&Number.isFinite(site.latitude)&&Number.isFinite(site.longitude));}
