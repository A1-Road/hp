import { getContentItem, getContentItems } from "@/lib/site-content";
import { Hero, Section, Cards, Ribbon, Portfolio, ContractProcess, Faq, Credentials, ContactCTA } from "@/components/vad-sections";
import { pageMetadata } from "@/lib/site-metadata";
export const generateMetadata = () => pageMetadata("/global-vendors");
export default async function GlobalVendorsPage() {
 const [hero, scope, rows, engagement, models, faq, questions] = await Promise.all([getContentItem("globalVendors","hero"),getContentItem("globalVendors","scopeHeader"),getContentItems("globalVendors","scope"),getContentItem("globalVendors","engagementHeader"),getContentItems("globalVendors","engagement"),getContentItem("globalVendors","faqHeader"),getContentItems("globalVendors","faq")]);
 return <><Hero content={hero}/><Section id="scope" label={scope.eyebrow} title={scope.title} copy={scope.copy}><Cards rows={rows} columns={2}/></Section><Ribbon/>
 <Section label={engagement.eyebrow} title={engagement.title} dark><Cards rows={models}/></Section><ContractProcess/><Portfolio/>
 <Section label={faq.eyebrow} title={faq.title}><Faq rows={questions}/></Section><Credentials/><ContactCTA/></>;
}
