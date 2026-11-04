export type TerritoryLayer="production"|"collecte"|"logistique"|"implantation";
export type VerifiedSite={id:string;name:string;layer:TerritoryLayer;latitude:number;longitude:number;status:"existant"|"projeté";source:string;verifiedAt:string;approvedForPublication:boolean};
export const territorySites:VerifiedSite[]=[];
function validISODate(value:string){if(!/^\d{4}-\d{2}-\d{2}$/.test(value))return false;const date=new Date(value+"T00:00:00Z");return !Number.isNaN(date.getTime())&&date.toISOString().startsWith(value);}
export function approvedSites(){return territorySites.filter(s=>s.approvedForPublication&&s.id.trim()!==""&&s.name.trim()!==""&&s.source.trim()!==""&&validISODate(s.verifiedAt)&&Number.isFinite(s.latitude)&&Number.isFinite(s.longitude)&&Math.abs(s.latitude)<=90&&Math.abs(s.longitude)<=180);}
