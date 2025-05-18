"use client";

import { site } from "@/config/site-config";

export function ClientContactMap() {
  return (
    <div className="w-full h-64 rounded-lg overflow-hidden border mt-8">
      <iframe
        src={site.maps.embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`${site.company.name} térképen`}
      ></iframe>
    </div>
  );
}