import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "leaflet/dist/leaflet.css";
import "./globals.css";
export const metadata: Metadata = {
 title:{default:"Agropole du Sankuru | SALU",template:"%s | Agropole du Sankuru"},
 description:"Société Agricole de Lubi : initiative agricole territoriale dans le Sankuru, RDC, associant filières agricoles, transformation et producteurs partenaires.",
 robots:{index:false,follow:false},
 openGraph:{type:"website",locale:"fr_CD",title:"Agropole du Sankuru | SALU",description:"Un territoire à révéler. Des filières à bâtir."}
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="fr"><body><a className="skip-link" href="#main-content">Aller au contenu principal</a><SiteHeader/><div id="main-content">{children}</div><SiteFooter/></body></html>}
