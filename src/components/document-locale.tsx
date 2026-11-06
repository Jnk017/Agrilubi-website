"use client";
import {useEffect} from "react";
import {usePathname} from "next/navigation";

/** Ensure HTML language stays synchronized during client-side navigation. */
export function DocumentLocale(){
 const pathname=usePathname();
 useEffect(()=>{
  const english=pathname==="/en"||pathname.startsWith("/en/");
  document.documentElement.lang=english?"en":"fr";
 },[pathname]);
 return null;
}
