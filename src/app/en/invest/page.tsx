import Link from "next/link";
import type {Metadata} from "next";
import {SectorIllustration} from "@/components/sector-illustration";
export const metadata:Metadata={alternates:{canonical:"/en/invest",languages:{en:"/en/invest",fr:"/investir"}},title:"Investment and partnerships | SALU",description:"Explore potential technical and investment cooperation with SALU's agricultural development initiative in Sankuru."};
const areas=[
 ["Agricultural production","Agronomic assessment, farmer training, inputs and appropriate mechanisation."],
 ["Local processing","Feasibility of storage, drying, milling and packaging facilities."],
 ["Territorial logistics","Collection, warehousing, transport feasibility and market access."],
 ["Governance and impact","Project appraisal, financial transparency, social safeguards and measurable indicators."]
] as const;
export default function Page(){return <main lang="en">
 <div className="institutional-hero">
  <div className="institutional-hero-copy"><p className="eyebrow">Investors · Donors · Technical partners</p><h1>Building agricultural partnerships in Sankuru.</h1><p className="institutional-lead">SALU welcomes preliminary discussions about responsible agricultural production, value addition and market access.</p><p>These are potential cooperation areas, not funded projects or guaranteed financial returns.</p><div className="hero-actions"><Link className="button" href="/en/contact">Contact our team</Link><Link className="institutional-text-link" href="/en/value-chains">Explore value chains →</Link></div></div>
  <div className="institutional-hero-visual"><SectorIllustration slug="perennes"/></div>
 </div>
 <p className="institutional-photo-disclaimer">Illustrative photograph — not a record of SALU's operations.</p>
 <section><div className="section-heading"><p className="eyebrow">Potential areas</p><h2>Cooperation grounded in evidence.</h2></div><div className="grid investor-opportunities">{areas.map(([title,description])=><article className="card" key={title}><h3>{title}</h3><p>{description}</p></article>)}</div></section>
 <section className="band"><h2>Due diligence and transparency.</h2><p>Any investment discussion will require verified legal records, land status, technical studies, financial assumptions, governance arrangements and assessment of relevant risks. No commitment should be made on the basis of these pages alone.</p><Link className="inline-link" href="/investir/dossier">French-language preparation framework →</Link></section>
 </main>}
