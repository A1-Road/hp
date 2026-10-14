import { getContentItem, getContentItems } from "@/lib/site-content";
import { Hero, Section, Steps, Ribbon, Portfolio, ContactCTA } from "@/components/vad-sections";
import { pageMetadata } from "@/lib/site-metadata";
export const generateMetadata = () => pageMetadata("/strategy");
export default async function StrategyPage() {
 const [hero,head,rows] = await Promise.all([getContentItem("strategy","hero"),getContentItem("strategy","stagesHeader"),getContentItems("strategy","stages")]);
 return <><Hero content={hero}/><Section label={head.eyebrow} title={head.title} copy={head.copy}><Steps rows={rows}/></Section><Ribbon/><Portfolio/><ContactCTA/></>;
}
