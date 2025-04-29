import React from "react";

export function RentalTermsSchemaMarkup() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://molnarautoberles.hu";
  
  // Strukturált adatok a bérlési feltételek oldalhoz
  const schemaData = [
    // Weboldal adatok
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${siteUrl}/berlesi-feltetelek/#webpage`,
      "url": `${siteUrl}/berlesi-feltetelek`,
      "name": "Bérlési feltételek | Molnár Autóbérlés",
      "description": "Ismerje meg autóbérlési szolgáltatásunk részletes feltételeit. Világos, átlátható és egyszerű bérlési folyamat Kőszegen és környékén.",
      "isPartOf": {
        "@id": `${siteUrl}/#website`
      },
      "inLanguage": "hu-HU"
    },
    // Kenyérmorzsa navigáció a bérlési feltételek oldalra
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Főoldal",
          "item": siteUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Bérlési feltételek",
          "item": `${siteUrl}/berlesi-feltetelek`
        }
      ]
    },
    // Szervezet adatok
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      "name": process.env.NEXT_PUBLIC_COMPANY_NAME,
      "url": siteUrl
    },
    // Bérlési feltételek speciális adatai
    {
      "@context": "https://schema.org",
      "@type": "SpecialAnnouncement",
      "name": "Autóbérlési feltételek és tudnivalók",
      "text": "Autóbérlési szolgáltatásunk igénybevételéhez szükséges tudnivalók és részletes feltételek.",
      "category": "https://schema.org/BusinessUpdate",
      "datePosted": "2025-01-01",
      "expires": "2026-01-01",
      "governmentBenefitsInfo": {
        "@type": "GovernmentService",
        "name": "Autóbérlés feltételei",
        "serviceType": "Autóbérlés",
        "provider": {
          "@type": "Organization",
          "name": process.env.NEXT_PUBLIC_COMPANY_NAME
        }
      }
    },
    // HowTo strukturált adat a bérlési folyamatról
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Hogyan béreljen autót a Molnár Autóbérlésnél",
      "description": "Lépésről lépésre útmutató az autóbérlés egyszerű folyamatáról",
      "totalTime": "PT20M",
      "tool": [
        {
          "@type": "HowToTool",
          "name": "Személyi igazolvány"
        },
        {
          "@type": "HowToTool",
          "name": "Vezetői engedély"
        },
        {
          "@type": "HowToTool",
          "name": "Lakcímkártya"
        }
      ],
      "step": [
        {
          "@type": "HowToStep",
          "name": "Foglalás",
          "text": "Válassza ki az Önnek megfelelő autót és bérlési időpontot online vagy telefonon. Foglalását azonnal visszaigazoljuk.",
          "url": `${siteUrl}/#booking`,
          "image": `${siteUrl}/images/booking.jpg`
        },
        {
          "@type": "HowToStep",
          "name": "Dokumentumok előkészítése",
          "text": "Készítse elő a szükséges dokumentumokat: személyi igazolvány, vezetői engedély, lakcímkártya. Ezekre a szerződéskötéshez lesz szükség.",
          "url": `${siteUrl}/berlesi-feltetelek#dokumentumok`
        },
        {
          "@type": "HowToStep",
          "name": "Szerződés és fizetés",
          "text": "Az átvétel előtt átnézzük és aláírjuk a bérleti szerződést. A bérleti díj és a kaució befizetése készpénzben vagy bankkártyával lehetséges.",
          "url": `${siteUrl}/berlesi-feltetelek#fizetes`
        },
        {
          "@type": "HowToStep",
          "name": "Autó átvétele",
          "text": "Közösen átvizsgáljuk az autót, ellenőrizzük az állapotát, felszereltségét, majd átadjuk a kulcsokat és az összes szükséges dokumentumot.",
          "url": `${siteUrl}/berlesi-feltetelek#atvetel`
        },
        {
          "@type": "HowToStep",
          "name": "Használat",
          "text": "Használja az autót a megbeszélt feltételek szerint. Kérdés vagy probléma esetén ügyfélszolgálatunk 24 órában rendelkezésre áll.",
          "url": `${siteUrl}/berlesi-feltetelek#hasznalat`
        },
        {
          "@type": "HowToStep",
          "name": "Visszaadás",
          "text": "Az autót azonos üzemanyagszinttel és tiszta állapotban kérjük vissza. Közösen elvégezzük az állapotfelmérést, majd visszaadjuk a kauciót.",
          "url": `${siteUrl}/berlesi-feltetelek#visszaadas`
        }
      ]
    }
  ];

  return (
    <>
      {schemaData.map((data, index) => (
        <script 
          key={index} 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} 
        />
      ))}
    </>
  );
}