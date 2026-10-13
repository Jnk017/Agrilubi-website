import type {FeatureCollection,MultiPolygon,Polygon,Position} from "geojson";
export type TerritoryGeometry=FeatureCollection<Polygon|MultiPolygon>&{
 source:string;license:string;verifiedAt:string;approvedForPublication:boolean;
};
export const sankuruBoundary:TerritoryGeometry|null=null;
function validPosition(value:unknown):value is Position{return Array.isArray(value)&&value.length>=2&&typeof value[0]==="number"&&typeof value[1]==="number"&&Number.isFinite(value[0])&&Number.isFinite(value[1])&&Math.abs(value[0])<=180&&Math.abs(value[1])<=90;}
function validRing(value:unknown):boolean{return Array.isArray(value)&&value.length>=4&&value.every(validPosition)&&value[0][0]===value[value.length-1][0]&&value[0][1]===value[value.length-1][1];}
function validPolygon(value:unknown):boolean{return Array.isArray(value)&&value.length>0&&value.every(validRing);}
function validGeometry(value:unknown):boolean{if(!value||typeof value!=="object")return false;const g=value as Record<string,unknown>;return g.type==="Polygon"?validPolygon(g.coordinates):g.type==="MultiPolygon"&&Array.isArray(g.coordinates)&&g.coordinates.length>0&&g.coordinates.every(validPolygon);}
export function approvedBoundary(data:TerritoryGeometry|null):data is TerritoryGeometry{
 if(!data||!data.approvedForPublication||data.type!=="FeatureCollection")return false;
 if(!data.source.trim()||!data.license.trim()||!/^\d{4}-\d{2}-\d{2}$/.test(data.verifiedAt)||Number.isNaN(Date.parse(data.verifiedAt)))return false;
 return Array.isArray(data.features)&&data.features.length>0&&data.features.every(f=>f?.type==="Feature"&&validGeometry(f.geometry));
}
