import React from "react";
// Eltávolítjuk a client-side cars importot
// import { cars } from "@/components/sections/client-cars";

// Statikus példa adatok a bemutatható autókról a séma számára
const sampleCars = [
  {
    name: "Opel Astra H Kombi",
    year: "2010",
    engine: "1.7 Dízel, 110 LE",
    seats: "5 személyes",
    transmission: "Manuális",
    price: "7000"
  },
  {
    name: "Suzuki Swift GLX",
    year: "2007",
    engine: "1.3 benzin, 92 LE",
    seats: "5 személyes",
    transmission: "Manuális",
    price: "6000"
  },
  {
    name: "Ford Focus Kombi",
    year: "2007",
    engine: "1.6 diesel, 89 LE",
    seats: "5 személyes",
    transmission: "Manuális",
    price: "6000"
  }
];

// Strukturált adat a keresőmotoroknak - kibővített verzió
export function SchemaMarkup() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://molnarautoberles.hu";
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;
  const email = process.env.NEXT_PUBLIC_INFO_MAIL;

  // Alap vállalkozási adatok
  const businessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#organization`,
    name: process.env.NEXT_PUBLIC_COMPANY_NAME,
    image: `${siteUrl}/opengraph-image.png`,
    logo: `${siteUrl}/opengraph-image.png`,
    url: siteUrl,
    telephone: phoneNumber,
    email: email,
    description:
      "Autóbérlés Kőszegen és környékén. Megbízható, karbantartott autók kedvező áron, rugalmas feltételekkel.",
    slogan: "Egyszerű, megbízható, barátságos autóbérlés Kőszegen",
    priceRange: "$$",
    currenciesAccepted: "HUF",
    paymentAccepted: "Készpénz, Bankkártya, Átutalás",
    areaServed: {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        latitude: 47.38816005197496,
        longitude: 16.5403936950067
      },
      "geoRadius": "30000" // 30 km-es körzet
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: process.env.NEXT_PUBLIC_COMPANY_STREET_ADDRESS,
      addressLocality: process.env.NEXT_PUBLIC_COMPANY_CITY,
      postalCode: process.env.NEXT_PUBLIC_COMPANY_POSTAL_CODE,
      addressCountry: {
        "@type": "Country",
        name: process.env.NEXT_PUBLIC_COMPANY_COUNTRY
      }
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.38816005197496,
      longitude: 16.5403936950067,
    },
    // Bővített nyitvatartási adatok
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "08:00",
        closes: "22:00",
      },
    ],
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Krepsz Hanna",
        },
        datePublished: "2025-01-06",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Én nagyon meg voltam velük elégedve, nagyon kedvesek. Megbízható és megfizethető. Mindenkinek ajánlom.",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Atiska_446",
        },
        datePublished: "2025-01-12",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody: "Megbízható autó meg fizethető áron. Mindenkinek merem ajánlani 🤝",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Proksch Edina",
        },
        datePublished: "2024-12-28",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody: "Megbízható-pontos-korrekt‼️",
      },
    ],
    // Aggregált értékelés
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "3",
      bestRating: "5",
      worstRating: "1"
    },
    sameAs: [process.env.NEXT_PUBLIC_FACEBOOK_URL],
    // Szolgáltatások
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Autóbérlési szolgáltatások",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Rövid távú autóbérlés",
            description: "1-3 napos autóbérlés Kőszegen és környékén",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "7000-8000",
            priceCurrency: "HUF",
            unitText: "nap",
            description: "Napi bérlési díj, 300 km-ig az árban"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Középtávú autóbérlés",
            description: "3-7 napos autóbérlés kedvezményes áron",
          },
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "6000-7000",
            priceCurrency: "HUF",
            unitText: "nap",
            description: "Napi bérlési díj 3+ napra, napi 200 km-ig az árban"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hosszú távú autóbérlés",
            description: "7 napot meghaladó autóbérlés egyedi árakon",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Házhozszállítás",
            description: "Autó házhozszállítása Kőszeg 30 km-es körzetében",
          },
        }
      ]
    }
  };

  // Elérhető autók adatai - statikus példa adatokból
  const carOffers = sampleCars.map(car => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Car",
      name: car.name,
      vehicleModelDate: car.year,
      vehicleEngine: car.engine,
      vehicleTransmission: car.transmission === "Manuális" ? "ManualTransmission" : "AutomaticTransmission",
      seatingCapacity: car.seats.replace(/[^0-9]/g, '')
    },
    priceSpecification: {
      "@type": "PriceSpecification",
      price: car.price.replace(/\./g, ''),
      priceCurrency: "HUF",
      unitText: "nap"
    },
    url: `${siteUrl}#cars`,
    availability: "https://schema.org/InStock",
    availabilityStarts: new Date().toISOString().split('T')[0]
  }));
  
  // Bővített adatok többféle adattípussal
  const combinedData = [
    businessData,
    // FAQ adatok
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Milyen dokumentumok szükségesek az autóbérléshez?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A bérléshez az alábbi dokumentumok szükségesek: érvényes személyi igazolvány vagy útlevél, legalább 2 éve érvényes vezetői engedély, lakcímkártya, a bérlés díjának és a kauciónak megfelelő fedezet (készpénz vagy bankkártya)."
          }
        },
        {
          "@type": "Question",
          "name": "Mennyi a minimum bérlési idő?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A minimum bérlési idő 24 óra (1 nap). Rövidebb időtartamra is lehetséges bérlés, de ebben az esetben is a napi díj kerül felszámításra."
          }
        },
        {
          "@type": "Question",
          "name": "Lehet-e az autóval külföldre utazni?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Igen, autóinkat külföldön is használhatja, az EU területén. Kérjük, előre jelezze külföldi utazási szándékát a bérlés során. Külföldi használat esetén magasabb kauciót kérünk, és speciális biztosítás is szükséges lehet."
          }
        },
        {
          "@type": "Question",
          "name": "Hogyan történik az autó átvétele és visszaadása?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Az autók átvétele és visszaadása Kőszeg belvárosában, irodánkban történik, rugalmas időbeosztás szerint. Előzetes egyeztetés alapján az átvétel és visszaadás Kőszeg 30 km-es körzetében más helyszínen is lehetséges, ennek díja egyedi megállapodás szerint alakul."
          }
        }
      ]
    },
    // Autós ajánlatok
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": carOffers.map((offer, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": offer
      }))
    },
    // Weboldal adatok
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "url": siteUrl,
      "name": "Molnár Autóbérlés Kőszeg",
      "description": "Autóbérlés Kőszegen és környékén kedvező áron, rugalmas feltételekkel",
      "inLanguage": "hu-HU",
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${siteUrl}/?search={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    },
    // Kenyérmorzsa navigáció a kezdőlapra
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Főoldal",
          "item": siteUrl
        }
      ]
    }
  ];

  return (
    <>
      {combinedData.map((schemaData, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      ))}
    </>
  );
}