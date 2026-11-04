import Link from "next/link";
import type {Metadata} from "next";
import {SectorIllustration} from "@/components/sector-illustration";
import {companyContact} from "@/data/company-contact";
export const metadata:Metadata={
 title:"Investir et coopérer — SALU",
 description:"Découvrez les axes de coopération envisagés par SALU pour la production agricole, la transformation, la logistique et l'impact dans le Sankuru."
};
const opportunities=[
 ["01","Production et partenariats agricoles","Études agronomiques, intrants, formations, mécanisation adaptée et structuration des organisations paysannes."],
 ["02","Transformation et conservation","Dimensionnement éventuel d’unités de séchage, conditionnement, mouture et conservation, selon les filières retenues."],
 ["03","Logistique et accès aux marchés","Étude de la collecte, du stockage, des itinéraires de transport et des circuits commerciaux adaptés au territoire."],
 ["04","Pilotage et mesure d’impact","Gouvernance, faisabilité, gestion des risques, suivi des résultats environnementaux et sociaux."]
];
const steps=[
 ["Prise de contact","Présenter votre organisation, vos compétences et votre domaine d'intérêt."],
 ["Cadrage","Identifier le périmètre de coopération et les informations nécessaires à son examen."],
 ["Vérification","Étudier les pièces juridiques, techniques, financières et les conditions applicables."],
 ["Décision","Formaliser les engagements éventuels après validation par les parties concernées."]
];
export default function Page(){return <main>
 <div className="institutional-hero investor-hero">
  <div className="institutional-hero-copy">
   <p className="eyebrow">Bailleurs · Investisseurs · Partenaires techniques</p>
   <h1>Investir dans le potentiel agricole du Sankuru.</h1>
   <p className="institutional-lead">SALU présente des possibilités de coopération à examiner autour des filières agricoles, de la transformation locale et de l’accès aux marchés.</p>
   <div className="hero-actions"><Link className="button" href="/investir/dossier">Consulter le cadre documentaire</Link><a className="institutional-text-link" href={`mailto:${companyContact.email}`}>Écrire à SALU →</a></div>
  </div>
  <div className="institutional-hero-visual"><SectorIllustration slug="perennes"/></div>
 </div>
 <p className="institutional-photo-disclaimer">Photographie d’illustration, sans lien attesté avec les activités ou les installations de SALU.</p>
 <section>
  <div className="section-heading"><p className="eyebrow">Axes de coopération</p><h2>Des opportunités à étudier, filière par filière.</h2><p className="section-description">Les domaines présentés sont prospectifs. Ils ne constituent ni des offres de placement, ni des promesses de rendement ou de financement acquis.</p></div>
  <div className="grid investor-opportunities">{opportunities.map(([num,title,description])=><article className="card" key={num}><span className="number">{num}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
 </section>
 <section className="band">
  <div className="section-heading"><p className="eyebrow">Transparence</p><h2>Une décision fondée sur des éléments vérifiables.</h2><p className="section-description">Tout partenariat devra être précédé de vérifications adaptées à sa nature et à sa portée.</p></div>
  <div className="content-split investor-evidence">
   <div><h3>Documents de référence à préparer</h3><p>Identification juridique et gouvernance, situation foncière, études de faisabilité, besoins d’investissement, hypothèses de coûts et de revenus, risques et critères de suivi.</p><Link className="button" href="/investir/dossier">Examiner la liste documentaire</Link></div>
   <div className="investor-evidence-note"><strong>Le principe de transparence</strong><p>Les chiffres, contrats, capacités et réalisations seront communiqués avec leur statut et leurs justificatifs. Aucune garantie de rentabilité n’est formulée.</p></div>
  </div>
 </section>
 <section>
  <div className="section-heading"><p className="eyebrow">Dialogue avec les partenaires</p><h2>Comment engager un échange ?</h2></div>
  <div className="grid agropole-steps">{steps.map(([title,description],i)=><article className="agropole-step" key={title}><span className="agropole-step-number">{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
 </section>
 <section className="institutional-cta"><div><p className="eyebrow">Contact institutionnel</p><h2>Échanger avec la Société Agricole de Lubi.</h2><p>05 Avenue de la Science, Commune de la Gombe, Kinshasa — RDC.</p><p><a href={`mailto:${companyContact.email}`}>{companyContact.email}</a></p></div><Link className="button" href="/contact">Toutes nos coordonnées</Link></section>
 <p className="quiet-note">Cette présentation ne constitue pas un prospectus ni une offre au public de produits financiers. Les opérations envisagées restent soumises aux études, vérifications et autorisations nécessaires.</p>
 </main>}
