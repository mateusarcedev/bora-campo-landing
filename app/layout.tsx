import type { Metadata } from "next";import type { ReactNode } from "react";import "./globals.css";
export const metadata:Metadata={title:"BoraCampo — Gestão e reservas de arenas",description:"Arenas e reservas esportivas",robots:{index:false,follow:false}};
export default function Layout({children}:{children:ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}