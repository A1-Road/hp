"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          portalId: string;
          formId: string;
          region?: string;
          target?: string;
        }) => void;
      };
    };
  }
}

type HubspotFormProps = {
  portalId: string;
  formId: string;
  region?: string;
  targetId?: string;
};

export default function HubspotForm({
  portalId,
  formId,
  region = "na1",
  targetId = "hubspot-form",
}: HubspotFormProps) {
  useEffect(() => {
    const mount = () => {
      const target = document.getElementById(targetId);
      if (!target || !window.hbspt) return;

      target.innerHTML = "";
      window.hbspt.forms.create({
        portalId,
        formId,
        region,
        target: `#${targetId}`,
      });
    };

    const existing = document.querySelector(`script[data-hubspot="${targetId}"]`) as
      | HTMLScriptElement
      | null;

    if (window.hbspt) {
      mount();
      return;
    }

    const script = existing ?? document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.async = true;
    script.dataset.hubspot = targetId;
    script.onload = mount;

    if (!existing) {
      document.body.appendChild(script);
    }

    return () => {
      const target = document.getElementById(targetId);
      if (target) {
        target.innerHTML = "";
      }
      if (!existing && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [formId, portalId, region, targetId]);

  return <div id={targetId} />;
}
