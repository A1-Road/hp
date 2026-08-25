"use client";

import { useEffect } from "react";

type HubspotFormProps = {
  portalId: string;
  formId: string;
  region?: string;
};

export default function HubspotForm({ portalId, formId, region = "na2" }: HubspotFormProps) {
  const src = `https://js-${region}.hsforms.net/forms/embed/${portalId}.js`;

  useEffect(() => {
    // The embed has to load after hydration. A plain <script defer> in the markup
    // runs at DOMContentLoaded, which can beat React to the container - React then
    // finds an <iframe> the server never rendered, treats the tree as mismatched
    // and regenerates it, throwing the form away and leaving an empty box.
    if (document.querySelector(`script[src="${src}"]`)) return;

    const script = document.createElement("script");
    script.src = src;
    script.defer = true;
    document.body.appendChild(script);

    // Deliberately not removed on unmount: the embed keeps global state and warns
    // when included twice. It watches the DOM, so a remounted container still gets
    // picked up.
  }, [src]);

  return (
    <div
      className="hs-form-frame"
      data-region={region}
      data-form-id={formId}
      data-portal-id={portalId}
    />
  );
}
