import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: { default: "Agropole du Sankuru | SALU", template: "%s | Agropole du Sankuru" }, description: "Projet agricole territorial de la Société Agricole de Lubi, Sankuru, République démocratique du Congo." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="fr"><body>{children}</body></html>; }
