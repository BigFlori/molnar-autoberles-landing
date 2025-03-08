"use client";

export function ClientContactMap() {
  const mapEmbedUrl = process.env.NEXT_PUBLIC_MAP_EMBED_URL || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2712.1680385330166!2d16.539478!3d47.389444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDIzJzIyLjAiTiAxNsKwMzInMjIuMCJF!5e0!3m2!1shu!2shu!4v1646817555671!5m2!1shu!2shu";
  const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || "Molnár Autóbérlés";

  return (
    <div className="w-full h-64 rounded-lg overflow-hidden border mt-8">
      <iframe
        src={mapEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`${companyName} térképen`}
      ></iframe>
    </div>
  );
}