import { getContentItem } from "@/lib/site-content";
import { Hero, Ribbon, Portfolio, ContactCTA } from "@/components/vad-sections";
import { pageMetadata } from "@/lib/site-metadata";
export const generateMetadata = () => pageMetadata("/service");
export default async function ServicePage(){return <><Hero content={await getContentItem("top","hero")}/><Ribbon/><Portfolio/><ContactCTA/></>;}
