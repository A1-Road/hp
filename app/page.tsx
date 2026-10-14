import Link from "next/link";
import { getContentItem } from "@/lib/site-content";
import { Hero, Section, Ribbon, Portfolio, Credentials, ContactCTA } from "@/components/vad-sections";
import { pageMetadata } from "@/lib/site-metadata";
export const generateMetadata = () => pageMetadata("/");
export default async function HomePage() {
  const [hero, why, vision, mission] = await Promise.all([getContentItem("top","hero"), getContentItem("top","why"), getContentItem("top","vision"), getContentItem("top","mission")]);
  return <><Hero content={hero} image/><Section label={why.eyebrow} title={why.title} copy={why.copy}/><Ribbon/><Portfolio/>
    <Section label={vision.eyebrow} title={vision.title} copy={vision.copy}><p className="vad-strategy-line">VAD → Technical Knowledge → Factory / Contract Development → Own Products</p><Link className="vad-text-link" href={vision.linkHref}>{vision.linkLabel} ↗</Link></Section>
    <Section label={mission.eyebrow} title={mission.title} copy={mission.copy}><Link className="vad-text-link" href={mission.linkHref}>{mission.linkLabel} ↗</Link></Section><Credentials/><ContactCTA/></>;
}
