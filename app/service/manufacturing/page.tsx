import { getContentItem, getContentItems } from "@/lib/site-content";
import { Hero, Section, Steps, Portfolio, Faq, ContactCTA } from "@/components/vad-sections";
import { pageMetadata } from "@/lib/site-metadata";
export const generateMetadata = () => pageMetadata("/service/manufacturing");
export default async function ManufacturingPage() {
 const [hero, steps, rows, faq, questions] = await Promise.all([getContentItem("manufacturing","hero"),getContentItem("manufacturing","stepsHeader"),getContentItems("manufacturing","steps"),getContentItem("manufacturing","faqHeader"),getContentItems("manufacturing","faq")]);
 return <><Hero content={hero}/><Portfolio/><Section label={steps.eyebrow} title={steps.title}><Steps rows={rows}/></Section><Section label={faq.eyebrow} title={faq.title}><Faq rows={questions}/></Section><ContactCTA/></>;
}
