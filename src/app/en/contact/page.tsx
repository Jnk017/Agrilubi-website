import type {Metadata} from "next";
import {companyContact} from "@/data/company-contact";
export const metadata:Metadata={title:"Contact SALU | Sankuru Agropole",description:"Contact the Société Agricole de Lubi at 05 Avenue de la Science, Gombe, Kinshasa, DR Congo."};
export default function Page(){return <main lang="en">
 <div className="page-intro"><p className="eyebrow">Institutional relations</p><h1>Get in touch with SALU.</h1><p>For inquiries about agricultural value chains, technical cooperation or prospective partnerships, please contact Société Agricole de Lubi using the details below.</p></div>
 <section className="contact-layout">
  <div className="contact-primary"><p className="eyebrow">Official contact information</p><h2>Société Agricole de Lubi (SALU)</h2><address className="contact-details">
   <div className="contact-detail"><span className="contact-label">Office address</span><p>{companyContact.streetAddress}<br/>{companyContact.locality}<br/>{companyContact.city}, Democratic Republic of the Congo</p></div>
   <div className="contact-detail"><span className="contact-label">Email</span><a href={`mailto:${companyContact.email}`}>{companyContact.email}</a></div>
   <div className="contact-detail"><span className="contact-label">Phone</span><div className="contact-phone-list">{companyContact.phones.map(phone=><a key={phone.href} href={phone.href}>{phone.display}</a>)}</div></div>
  </address></div>
  <div className="contact-side"><p className="eyebrow">Location</p><h3>Kinshasa · Gombe</h3><p>The address shown here is SALU's institutional contact address, not a verified location of the proposed agricultural installations in Sankuru.</p><p>Please describe your organisation and the purpose of your inquiry when writing to us.</p></div>
 </section>
 </main>}
