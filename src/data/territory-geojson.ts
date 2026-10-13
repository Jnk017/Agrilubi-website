// GeoJSON is deliberately not populated until SALU approves the geometry and its source.
export type TerritoryGeometry={
 type:"FeatureCollection";
 features:unknown[];
 source:string;
 license:string;
 verifiedAt:string;
 approvedForPublication:boolean;
};
export const sankuruBoundary:TerritoryGeometry|null=null;
export function approvedBoundary(data:TerritoryGeometry|null):data is TerritoryGeometry {
 if(!data||!data.approvedForPublication||data.type!=="FeatureCollection")return false;
 if(!data.source.trim()||!data.license.trim()||!/^\d{4}-\d{2}-\d{2}$/.test(data.verifiedAt))return false;
 if(!Array.isArray(data.features)||data.features.length===0)return false;
 return data.features.every(feature=>{
  if(!feature||typeof feature!=="object")return false;
  const f=feature as Record<string,unknown>;
  if(f.type!=="Feature"||!f.geometry||typeof f.geometry!=="object")return false;
  const g=f.geometry as Record<string,unknown>;
  return (g.type==="Polygon"||g.type==="MultiPolygon")&&Array.isArray(g.coordinates);
 });
}
