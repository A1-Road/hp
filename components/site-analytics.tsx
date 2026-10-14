"use client";
import {useEffect} from "react";
import {usePathname} from "next/navigation";
declare global {interface Window {gtag?: (...args:unknown[])=>void;}}
export default function SiteAnalytics(){
 const path=usePathname();
 useEffect(()=>{
  function clicked(event:MouseEvent){const target=event.target instanceof Element?event.target.closest<HTMLElement>("[data-analytics]"):null;if(target)window.gtag?.("event","commercial_cta_click",{cta:target.dataset.analytics,page_path:window.location.pathname});}
  // HubSpot v4 exposes this event only after a successful submission.
  function submitted(event:Event){if((event as CustomEvent).detail?.formId!=="adc556cb-cfc8-4a4f-8350-fdadc91c052a")return;window.gtag?.("event","generate_lead",{form_id:"adc556cb-cfc8-4a4f-8350-fdadc91c052a",page_path:window.location.pathname});}
  document.addEventListener("click",clicked);window.addEventListener("hs-form-event:on-submission:success",submitted);
  return ()=>{document.removeEventListener("click",clicked);window.removeEventListener("hs-form-event:on-submission:success",submitted);};
 },[path]);
 return null;
}
