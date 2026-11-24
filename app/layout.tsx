import type {Metadata} from "next";import type {ReactNode} from "react";import "./globals.css";
const origin="https://bora-campo-landing.vercel.app";
const title="BoraCampo | Gestão de arenas esportivas em Manaus";
const description="Conheça o BoraCampo para proprietários de arenas: organize campos, horários e reservas em um só lugar. Experimente por 30 dias grátis no lançamento.";
const indexable=process.env.VERCEL_ENV!=="preview";
export const metadata:Metadata={metadataBase:new URL(origin),title:{default:title,template:"%s | BoraCampo"},description,applicationName:"BoraCampo",alternates:{canonical:"/"},robots:{index:indexable,follow:indexable,googleBot:{index:indexable,follow:indexable,"max-image-preview":"large"}},openGraph:{type:"website",locale:"pt_BR",url:origin,siteName:"BoraCampo",title,description,images:[{url:"/opengraph-image",width:1200,height:630,alt:"BoraCampo — "+"Gestão de arenas esportivas em Manaus."}]},twitter:{card:"summary_large_image",title,description,images:["/opengraph-image"]}};
export default function Layout({children}:{children:ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
