import Link from "next/link";
import type {Metadata} from "next";
import {TerritoryAtlas} from "@/components/territory-atlas";
export const metadata:Metadata={title:"Territory and market access | SALU",description:"How agricultural collection, storage and transport shape development opportunities in Sankuru."};
const issues=[
 ["Scattered production","Collection networks must be designed around actual farm locations and harvest schedules."],
 ["Post-harvest quality","Drying, sorting and storage solutions need to reflect each crop's characteristics."],
 ["Market access","Road and river transport options require verified routes and operational assessments."],
 ["Value-chain coordination","Traceability, producer agreements and quality standards will be essential."]
] as const;
export default function Page(){return <main lang="en">
 <div className="page-intro"><p className="eyebrow">Lubi · Sankuru · DR Congo</p><h1>Connecting agricultural communities with markets.</h1><p>SALU's territorial approach considers production, collection, preservation and transport together. Specific sites and corridors will only be shown when supporting geographic data has been verified and cleared for publication.</p></div>
 <section><div className="section-heading"><p className="eyebrow">Territorial challenges</p><h2>Four areas requiring coordinated solutions.</h2></div><div className="grid territory-challenges">{issues.map(([title,description],index)=><article className="card" key={title}><span className="number">{String(index+1).padStart(2,"0")}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
 <section className="band"><p className="eyebrow">Geographic transparency</p><h2>Validated data only.</h2><p>An interactive atlas is being developed. No unverified coordinates, proposed facilities or transport routes will be presented as established facts.</p><Link className="inline-link" href="/territoire-enclavement">View the French territorial page and atlas →</Link></section>
 <section className="institutional-cta"><div><p className="eyebrow">Technical cooperation</p><h2>Territory-led project design.</h2><p>Planning must be informed by local evidence, producer participation and economic feasibility.</p></div><Link className="button" href="/en/contact">Contact SALU</Link></section>
 </main>}
