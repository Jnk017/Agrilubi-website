import {describe,it,expect} from "vitest";
import {approvedBoundary,type TerritoryGeometry} from "./territory-geojson";
// Test coordinates only: not a real SALU site or administrative boundary.\nconst ring=[[20,-4],[21,-4],[21,-3],[20,-4]];
function boundary(overrides:Partial<TerritoryGeometry>={}):TerritoryGeometry{
 return {type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[ring]}}],source:"Test fixture only",license:"Test fixture",verifiedAt:"2026-10-01",approvedForPublication:true,...overrides} as TerritoryGeometry;
}
describe("approvedBoundary",()=>{
 it("refuses absent and unapproved boundaries",()=>{expect(approvedBoundary(null)).toBe(false);expect(approvedBoundary(boundary({approvedForPublication:false}))).toBe(false)});
 it("accepts a structurally valid approved polygon",()=>expect(approvedBoundary(boundary())).toBe(true));
 it("requires provenance and a real date",()=>{expect(approvedBoundary(boundary({source:""}))).toBe(false);expect(approvedBoundary(boundary({verifiedAt:"2026-02-30"}))).toBe(false)});
 it("rejects open rings",()=>expect(approvedBoundary(boundary({features:[{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[20,-4],[21,-4],[21,-3],[22,-3]]]}}]}))).toBe(false));
 it("rejects out-of-range coordinates",()=>expect(approvedBoundary(boundary({features:[{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[200,-4],[21,-4],[21,-3],[200,-4]]]}}]}))).toBe(false));
 it("rejects degenerate polygons",()=>expect(approvedBoundary(boundary({features:[{type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[20,-4],[21,-4],[22,-4],[20,-4]]]}}]}))).toBe(false));
 it("rejects empty feature collections",()=>expect(approvedBoundary(boundary({features:[]}))).toBe(false));
});
