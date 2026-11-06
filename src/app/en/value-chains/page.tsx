import Link from "next/link";
import type {Metadata} from "next";
import {SectorIllustration} from "@/components/sector-illustration";
export const metadata:Metadata={title:"Agricultural value chains | SALU",description:"Six proposed agricultural value chains in the Sankuru Agropole initiative."};
const sectors=[
 ["vivrieres","Food crops","Maize, rice, cassava and soybeans."],
 ["maraicheres","Horticulture and spices","Chilli peppers, vegetables, watermelons, cucumbers and spices."],
 ["perennes","Perennial crops","Cocoa, coffee and oil palm."],
 ["pisciculture","Aquaculture","Fish farming and related conservation requirements, subject to feasibility studies."],
 ["elevage","Livestock","Pig farming, poultry and animal health."],
 ["producteurs","Partner farmers","Potential cooperation with family farms, cooperatives and farmer organisations."]
] as const;
export default function Page(){return <main lang="en">
 <div className="page-intro"><p className="eyebrow">Sankuru Agropole · Agricultural value chains</p><h1>Six complementary areas of agricultural development.</h1><p>These value chains outline the proposed scope of SALU's initiative. They are not presented as already operational. Photos are illustrative and do not document SALU's sites or activities.</p></div>
 <section><div className="grid sector-grid">{sectors.map(([slug,title,description])=><article className="sector-card" key={slug}><SectorIllustration slug={slug}/><div className="sector-card-body"><h2>{title}</h2><p>{description}</p></div></article>)}</div></section>
 <section className="institutional-cta"><div><p className="eyebrow">Cooperation</p><h2>Developing sustainable value chains.</h2><p>Investment and technical priorities will be refined through feasibility studies and engagement with local stakeholders.</p></div><Link className="button" href="/en/invest">Explore partnerships</Link></section>
 <p className="quiet-note">Image sources and reuse licences are listed in the <Link href="/credits-photographiques">photographic credits</Link> (French).</p>
 </main>}
