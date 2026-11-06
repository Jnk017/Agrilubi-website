import Link from "next/link";
import type {Metadata} from "next";
import {SectorIllustration} from "@/components/sector-illustration";
import {getDictionary} from "@/i18n/dictionaries";

export const metadata:Metadata={
 title:"Sankuru Agropole — English overview",
 description:"Société Agricole de Lubi (SALU): an agricultural development initiative in Sankuru, DR Congo, focused on value chains, farmer partnerships and market access.",
 alternates:{languages:{"en":"/en","fr":"/"}}
};
const areas=[
 ["Agricultural value chains","Food crops, horticulture, perennial crops, aquaculture and livestock, subject to appropriate studies.","/en/value-chains"],
 ["Territory and access","Collection, preservation and logistics adapted to local constraints, based on verified information.","/en/territory"],
 ["Investment and cooperation","Preliminary engagement with technical partners, investors and institutions; no guaranteed returns.","/en/invest"]
] as const;
export default function Page(){const copy=getDictionary("en");return <main lang="en">
 <div className="institutional-hero">
  <div className="institutional-hero-copy">
   <p className="eyebrow">Lubi · Sankuru · Democratic Republic of the Congo</p>
   <h1>{copy.title}</h1>
   <p className="institutional-lead">{copy.description}</p>
   <p>The Sankuru Agropole is an initiative led by Société Agricole de Lubi (SALU) to explore agricultural production, local processing, producer partnerships and links to markets.</p>
   <div className="hero-actions"><Link className="button" href="/en/value-chains">Explore value chains</Link><Link className="institutional-text-link" href="/en/invest">Cooperate with SALU →</Link></div>
  </div>
  <div className="institutional-hero-visual"><SectorIllustration slug="vivrieres"/></div>
 </div>
 <p className="institutional-photo-disclaimer">Photo used for illustration only; it does not document SALU's activities. <Link href="/credits-photographiques">Photographic credits</Link> (French).</p>
 <section>
  <div className="section-heading"><p className="eyebrow">Our approach</p><h2>Connecting farmers, value chains and markets.</h2><p className="section-description">The proposed activities are designed as complementary parts of a territorial agricultural development approach.</p></div>
  <div className="grid agropole-pillars">{areas.map(([title,description,href],index)=><article className="card" key={href}><span className="number">{String(index+1).padStart(2,"0")}</span><h3>{title}</h3><p>{description}</p><Link href={href}>Learn more →</Link></article>)}</div>
 </section>
 <section className="band"><p className="eyebrow">Project status</p><h2>Planning and verification come first.</h2><p>{copy.notice} Site locations, facilities, production capacity, investment amounts and partners will only be communicated as confirmed facts after validation.</p></section>
 <section className="institutional-cta"><div><p className="eyebrow">Institutional contact</p><h2>Start a conversation.</h2><p>Technical organisations, agricultural producers, prospective investors and institutions can contact SALU in Kinshasa.</p></div><Link className="button" href="/en/contact">Contact SALU</Link></section>
 </main>}
