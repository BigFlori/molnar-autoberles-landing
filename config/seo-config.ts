import { Metadata } from "next";
import { site } from "./site-config";

type SeoParams = {
  title?: string;
  description?: string;
  keywords?: string[];
  path?: string;
};

// Root layout speciális metaadatok
export const layoutMetadata: Metadata = {
  metadataBase: new URL(site.url),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Alapértelmezett SEO adatok
const defaultSeo = {
  siteName: site.company.name,
  title: "Molnár Autóbérlés Kőszeg",
  description: "Autóbérlés Kőszegen és környékén kedvező árakon. Megbízható járművek, rugalmas bérlési feltételek, helyi szolgáltatás a belvárosban. Napi, heti és hosszútávú bérlés.",
  keywords: [
    "autóbérlés", 
    "autóbérlés kőszeg", 
    "kőszeg autóbérlés", 
    "bérlés", 
    "autókölcsönzés", 
    "olcsó autóbérlés", 
    "megbízható autó",
    "autóbérlés Vas megye",
    "hosszú távú autóbérlés"
  ],
};

// Különböző oldalak SEO konfigurációi
export const pageSeo = {
  home: {
    title: "Molnár Autóbérlés Kőszeg - Kedvező árak, megbízható autók",
    description: "Autóbérlés Kőszegen és környékén kedvező árakon. Megbízható járművek, rugalmas bérlési feltételek, helyi szolgáltatás a belvárosban. Napi, heti és hosszútávú bérlés.",
    path: "",
  },
  rentalTerms: {
    title: "Autóbérlési feltételek | Molnár Autóbérlés Kőszeg",
    description: "Ismerje meg az autóbérlés feltételeit Kőszegen. Világos, átlátható és egyszerű bérlési folyamat, kedvező kaució, rugalmas átvétel Vas megyében.",
    keywords: [
      "autóbérlés feltételek", 
      "bérlési dokumentumok", 
      "kaució", 
      "autóbérlés ára", 
      "Kőszeg autóbérlés", 
      "bérlési előírások",
      "autóbérlés biztosítás",
      "kilométer korlátozás"
    ],
    path: "/berlesi-feltetelek"
  }
};

// SEO metaadatok generálása bármely oldalhoz
export function generateMetadata({ 
  title, 
  description, 
  keywords, 
  path = "",
}: SeoParams): Metadata {
  const fullTitle = title 
    ? `${title}`
    : `${defaultSeo.title} | ${defaultSeo.siteName}`;
  
  const fullDescription = description || defaultSeo.description;
  const fullKeywords = [...(keywords || []), ...defaultSeo.keywords];
  const canonical = `${site.url}${path}`;
  
  return {
    metadataBase: new URL(site.url),
    title: fullTitle,
    description: fullDescription,
    keywords: fullKeywords,
    authors: [{ name: site.company.name }],
    creator: site.company.name,
    openGraph: {
      type: "website",
      locale: "hu_HU",
      url: canonical,
      title: fullTitle,
      description: fullDescription,
      siteName: site.company.name,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
    },
    alternates: {
      canonical: canonical,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}