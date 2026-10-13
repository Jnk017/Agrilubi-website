import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";
export const metadata: Metadata = { title: { default: "Agropole du Sankuru | SALU", template: "%s | Agropole du Sankuru" }, description: "Société Agricole de Lubi : projet territorial d'agriculture, de transformation et d'accès aux marchés dans le Sankuru, RDC." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="fr"><body><SiteHeader/>{children}<SiteFooter/></body></html>; }
