import type {FeatureCollection,MultiPolygon,Polygon,Position} from "geojson";
export type TerritoryGeometry=FeatureCollection<Polygon|MultiPolygon>&{
 source:string;license:string;verifiedAt:string;approvedForPublication:boolean;
};
export const sankuruBoundary:TerritoryGeometry|null=null;
const MAX_FEATURES=2000;
const MAX_POSITIONS=150000;
function validPosition(v:unknown):v is Position{
 return Array.isArray(v)&&v.length===2&&v.every(x=>typeof x==="number"&&Number.isFinite(x))
 &&Math.abs(v[0])<=180&&Math.abs(v[1])<=90;
}
function validRing(v:unknown):v is Position[]{
 if(!Array.isArray(v)||v.length<4||!v.every(validPosition))return false;
 if(v[0][0]!==v[v.length-1][0]||v[0][1]!==v[v.length-1][1])return false;
 // Reject degenerate zero-area rings; comprehensive topology remains a separate QA step.
 let area=0;
 for(let i=0;i<v.length-1;i++)area+=v[i][0]*v[i+1][1]-v[i+1][0]*v[i][1];
 return Math.abs(area)>1e-12;
}
function validPolygon(v:unknown):v is Position[][]{
 return Array.isArray(v)&&v.length>0&&v.every(validRing);
}
function validGeometry(v:unknown):v is Polygon|MultiPolygon{
 if(!v||typeof v!=="object")return false;
 const g=v as Record<string,unknown>;
 return g.type==="Polygon"?validPolygon(g.coordinates):
  g.type==="MultiPolygon"&&Array.isArray(g.coordinates)&&g.coordinates.length>0&&g.coordinates.every(validPolygon);
}
function countPositions(v:unknown):number{
 if(!Array.isArray(v))return 0;
 if(v.length===2&&typeof v[0]==="number"&&typeof v[1]==="number")return 1;
 return v.reduce<number>((sum,item)=>sum+countPositions(item),0);
}
function validDate(v:string):boolean{
 if(!/^\d{4}-\d{2}-\d{2}$/.test(v))return false;
 const date=new Date(v+"T00:00:00Z");
 return !Number.isNaN(date.getTime())&&date.toISOString().startsWith(v);
}
export function approvedBoundary(data:TerritoryGeometry|null):data is TerritoryGeometry{
 if(!data||!data.approvedForPublication||data.type!=="FeatureCollection")return false;
 if(typeof data.source!=="string"||!data.source.trim()||typeof data.license!=="string"||!data.license.trim()||!validDate(data.verifiedAt))return false;
 if(!Array.isArray(data.features)||data.features.length===0||data.features.length>MAX_FEATURES)return false;
 let points=0;
 for(const feature of data.features){
  if(feature?.type!=="Feature"||!validGeometry(feature.geometry))return false;
  points+=countPositions(feature.geometry.coordinates);
  if(points>MAX_POSITIONS)return false;
 }
 return true;
}
