import Link from "next/link";
import type {Metadata} from "next";
import {SectorIllustration} from "@/components/sector-illustration";
export const metadata:Metadata={
 title:"Gouvernance et partenariats",
 description:"Les principes de transparence, de responsabilité et de partenariat envisagés pour l'Agropole du Sankuru."
};
const principles=[
 ["01","Responsabilités définies","Clarifier les rôles des organes de décision, des équipes opérationnelles et des responsables de filières."],
 ["02","Décisions traçables","Documenter les validations, la passation des achats, les engagements contractuels et les conflits d'intérêts."],
 ["03","Suivi financier","Distinguer les budgets prévisionnels, les engagements approuvés et les dépenses justifiées."],
 ["04","Dialogue territorial","Organiser la consultation des producteurs, des communautés et des parties prenantes concernées."],
 ["05","Conformité et sauvegardes","Prendre en compte les enjeux fonciers, environnementaux, sociaux et les dispositifs de recours."],
 ["06","Communication responsable","Publier uniquement les noms, contributions et logos de partenaires confirmés et autorisés."]
] as const;
const partners=[
 ["Producteurs et coopératives","Étudier les conditions de collaboration, les dispositifs d'appui et les mécanismes de commercialisation."],
 ["Partenaires techniques","Examiner les compétences agronomiques, industrielles, logistiques et environnementales nécessaires."],
 ["Institutions et territoires","Échanger sur les conditions réglementaires, les infrastructures et les besoins des communautés."],
 ["Investisseurs et bailleurs","Préparer des échanges fondés sur des études, des justificatifs et une évaluation transparente des risques."]
] as const;
export default function Page(){return <main>
 <div className="institutional-hero">
  <div className="institutional-hero-copy">
   <p className="eyebrow">Responsabilité · Transparence · Coopération</p>
   <h1>La confiance se construit par une gouvernance lisible.</h1>
   <p className="institutional-lead">SALU souhaite faire de la transparence et de la responsabilité des principes structurants de son projet agricole territorial.</p>
   <p>Les modalités de gouvernance présentées sont des principes proposés. Les organes sociaux, dirigeants et textes statutaires définitifs seront publiés uniquement après vérification institutionnelle.</p>
   <div className="hero-actions"><a className="button" href="#principes">Découvrir les principes</a><Link className="institutional-text-link" href="/investir/dossier">Dossier partenaires →</Link></div>
  </div>
  <div className="institutional-hero-visual"><SectorIllustration slug="producteurs"/></div>
 </div>
 <p className="institutional-photo-disclaimer">Image illustrative ; les personnes représentées ne sont pas identifiées comme membres ou partenaires de SALU.</p>
 <section id="principes">
  <div className="section-heading"><p className="eyebrow">Cadre envisagé</p><h2>Six principes pour guider la mise en œuvre.</h2><p className="section-description">Les procédures concrètes seront précisées selon les décisions de SALU et les obligations applicables.</p></div>
  <div className="grid governance-grid">{principles.map(([number,title,description])=><article className="card governance-card" key={number}><span className="number">{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
 </section>
 <section className="band">
  <div className="section-heading"><p className="eyebrow">Écosystème de coopération</p><h2>Des partenaires complémentaires autour du territoire.</h2><p className="section-description">Ces catégories décrivent des acteurs susceptibles de coopérer avec SALU. Elles ne désignent pas des organisations déjà engagées.</p></div>
  <div className="grid governance-partners">{partners.map(([title,description])=><article className="agropole-step" key={title}><h3>{title}</h3><p>{description}</p></article>)}</div>
 </section>
 <section className="content-split">
  <div className="prose"><p className="eyebrow">Producteurs partenaires</p><h2>Des relations fondées sur des engagements compréhensibles.</h2><p>Les mécanismes envisagés avec les exploitations familiales et les organisations paysannes devront prévoir des conditions explicites, la traçabilité et le dialogue.</p><Link className="inline-link" href="/filieres/producteurs-partenaires">Découvrir le parcours proposé →</Link></div>
  <div className="institutional-illustration"><SectorIllustration slug="vivrieres"/></div>
 </section>
 <section className="institutional-cta"><div><p className="eyebrow">Relations institutionnelles</p><h2>Engager un partenariat responsable.</h2><p>Tout engagement fera l'objet d'une discussion et des vérifications nécessaires avant communication publique.</p></div><Link className="button" href="/contact">Contacter SALU</Link></section>
 <p className="quiet-note">Aucun partenaire signataire, membre des organes sociaux ou engagement financier n'est annoncé sans confirmation documentaire.</p>
 </main>}
