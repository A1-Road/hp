import { getContentItem } from "@/lib/site-content";
import { Hero, Portfolio, ContactCTA } from "@/components/vad-sections";
import { pageMetadata } from "@/lib/site-metadata";
export const generateMetadata = () => pageMetadata("/technologies");
export default async function TechnologiesPage() {return <><Hero content={await getContentItem("technologies","hero")}/><Portfolio/><ContactCTA/></>;}
