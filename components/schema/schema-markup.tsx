import React from "react";
import cars from "@/data/cars.json";
import { site } from "@/config/site-config";

// Strukturált adat a keresőmotoroknak - kibővített verzió
export function SchemaMarkup() {
  const siteUrl = site.url;
  const phoneNumber = site.company.phone;
  const email = site.company.email;

  // Alap vállalkozási adatok
  const businessData = {
    "@context": "https://schema.org",
    "@type": "CarRental",
    "@id": `${siteUrl}/#organization`,
    name: site.company.name,
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
      streetAddress: site.company.streetAddress,
      addressLocality: site.company.city,
      postalCode: site.company.postalCode,
      addressCountry: {
        "@type": "Country",
        name: site.company.country
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
        reviewBody: "Megbízható autó meg fizethető áron. Mindenkinek merem ajánlani.",
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
        reviewBody: "Megbízható · Pontos · Korrekt! Nagyon elégedett voltam a szolgáltatással.",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "originalzsebe",
        },
        datePublished: "2025-06-11",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody: "Remek autót kaptam, gyors és zökkenőmentes volt az ügyintézés. Ajánlom mindenki figyelmébe aki autót szeretne bérelni.",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Máte Kolonics",
        },
        datePublished: "2025-07-11",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody: "Nagyon korrekt és igényes autót tudtunk itt bérelni ajánlom őket bárkinek!",
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Ákos Dávid",
        },
        datePublished: "2025-07-11",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody: "TOP! Gyors, precíz és korrekt. Autók megbízhatók 5*",
      },
    ],
    // Aggregált értékelés
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "6",
      bestRating: "5",
      worstRating: "1"
    },
    sameAs: [site.social.facebook],
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
  const carOffers = cars.map(car => ({
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
            "text": "A bérléshez az alábbi dokumentumok szükségesek: érvényes személyi igazolvány vagy útlevél, legalább 2 éve érvényes vezetői engedély, lakcímkártya, a bérlés díjának és a kauciónak megfelelő fedezet (készpénz vagy utalás)."
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
          "name": "Mi a teendő meghibásodás vagy baleset esetén?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Meghibásodás vagy baleset esetén kérjük, azonnal vegye fel velünk a kapcsolatot telefonon. 24 órás ügyfélszolgálatunk segít a probléma megoldásában. A bérleti szerződésben található biztosítási feltételek szerint járunk el."
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
        },
        {
          "@type": "Question",
          "name": "Kell-e teletankolni az autót leadáskor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Igen, az autókat tele tankkal adjuk át, és ugyanúgy tele tankkal kérjük vissza. Amennyiben az autó üzemanyagszintje a visszaadáskor alacsonyabb, mint átvételkor, a hiányzó üzemanyag aktuális piaci árát és egy kezelési költséget számítunk fel."
          }
        },
        {
          "@type": "Question",
          "name": "Van-e életkori korlátozás a bérléshez?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Igen, autóbérléshez minimum 21 éves kor és legalább 2 éves vezetői tapasztalat szükséges. Egyes prémium kategóriás autóknál a minimum életkor 25 év lehet."
          }
        },
        {
          "@type": "Question",
          "name": "Lehetséges-e hosszabbítani a bérlést?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Igen, a bérlés időtartama meghosszabbítható, amennyiben az autó nem foglalt a következő időszakra. Kérjük, a hosszabbítási szándékát legalább 24 órával a bérlés lejárta előtt jelezze telefonon vagy e-mailben."
          }
        },
        {
          "@type": "Question",
          "name": "Mi történik túlfutott kilométerek esetén?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A napi, valamint a 2 vagy több napos bérlési konstrukciónál meghatározott kilométer limit van érvényben. A limit felett extra kilométerdíjat számítunk fel, amelynek mértéke 50 Ft/km. Hosszabb időtartamú bérlés esetén egyedi kilométer-megállapodás is lehetséges."
          }
        },
        {
          "@type": "Question",
          "name": "Mennyibe kerül a kaució és hogyan kapom vissza?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A kaució összege típus függő, személyautók esetében jellemzően 20.000 Ft belföldre, 30.000 Ft külföldi használat esetén. Kisbusz esetén 50.000–100.000 Ft között alakul. A kauciót készpénzben vagy utalással lehet letétbe helyezni. A jármű sérülésmentes visszaszolgáltatása esetén a kaució teljes összegét azonnal visszakapja."
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