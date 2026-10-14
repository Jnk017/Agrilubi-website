import {describe,it,expect,afterEach} from "vitest";
import {approvedSites,territorySites,type VerifiedSite} from "./territory";
const template:VerifiedSite={id:"fixture",name:"Emplacement de test",layer:"production",latitude:-4,longitude:21,status:"projeté",source:"Test only",verifiedAt:"2026-10-01",approvedForPublication:true};
describe("approvedSites",()=>{\n afterEach(()=>territorySites.splice(0,territorySites.length));
 it("does not publish unapproved entries",()=>{territorySites.splice(0,territorySites.length,{...template,approvedForPublication:false});expect(approvedSites()).toHaveLength(0)});
 it("rejects invalid dates and coordinates",()=>{territorySites.splice(0,territorySites.length,{...template,verifiedAt:"2026-02-30"},{...template,id:"other",latitude:99});expect(approvedSites()).toHaveLength(0)});
 it("allows a verified sample entry",()=>{territorySites.splice(0,territorySites.length,template);expect(approvedSites()).toHaveLength(1)});
});
