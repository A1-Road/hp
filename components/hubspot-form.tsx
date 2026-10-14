"use client";
import { useEffect } from "react";
type FormInstance={getFormId:()=>string;setExtraSubmissionMetadata:(metadata:Record<string,string>)=>void;};
declare global {interface Window {HubSpotFormsV4?:{getForms:()=>FormInstance[];getFormFromEvent:(event:Event)=>FormInstance;};}}
type HubspotFormProps={portalId:string;formId:string;region?:string;topic?:string};
export default function HubspotForm({portalId,formId,region="na2",topic="general"}:HubspotFormProps){
 const src=`https://js-${region}.hsforms.net/forms/embed/${portalId}.js`;
 useEffect(()=>{
  function annotate(form:FormInstance){if(form.getFormId()===formId)form.setExtraSubmissionMetadata({inquiry_type:topic,source:"a-oneroad.com"});}
  function ready(event:Event){const api=window.HubSpotFormsV4;if(api)annotate(api.getFormFromEvent(event));}
  // Register before embedding so the ready event cannot be missed.
  window.addEventListener("hs-form-event:on-ready",ready);
  window.HubSpotFormsV4?.getForms().forEach(annotate);
  if(!document.querySelector(`script[src="${src}"]`)){
   const script=document.createElement("script");script.src=src;script.defer=true;document.body.appendChild(script);
  }
  // Retain the shared embed script across route changes; remove our listener only.
  return ()=>window.removeEventListener("hs-form-event:on-ready",ready);
 },[src,formId,topic]);
 return <div className="hs-form-frame" data-region={region} data-form-id={formId} data-portal-id={portalId}/>;
}
