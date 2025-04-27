import { Suspense } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ReviewsSection } from "@/components/sections/reviews";
import { ContactSection } from "@/components/sections/contact";
import { CarProvider } from "@/provider/car-provider";
import { Metadata } from "next";

// Az oldal URL-je környezeti változóból, fallback értékkel
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://molnarautoberles.hu";

// További SEO beállítások
export const metadata: Metadata = {
  title: "Autóbérlés egyszerűen Kőszegen",
  description: "Kedvező áron bérelhet megbízható autókat Kőszegen és környékén. Napi, heti és hosszútávú bérlés rugalmas feltételekkel a Molnár Autóbérlésnél.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Molnár Autóbérlés Kőszeg",
      },
    ],
  },
};

// Főoldal szerver komponens
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        {/* Wrap the car-related sections with CarProvider */}
        <CarProvider>
          <Suspense fallback={<CarsSectionSkeleton />}>
            <ClientCars />
          </Suspense>
          <Suspense fallback={<BookingSectionSkeleton />}>
            <ClientBooking />
          </Suspense>
        </CarProvider>
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
      <SchemaMarkup />
    </div>
  );
}

// Client komponensek Suspense-el
import dynamic from "next/dynamic";

// Skeleton komponensek a lazy-loading-hoz
function CarsSectionSkeleton() {
  return (
    <section className="py-20">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Elérhető autóink</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-96 bg-gray-200 rounded-lg animate-pulse"></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingSectionSkeleton() {
  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto">
          <div className="h-96 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

// Dinamikusan importált client komponensek
const ClientCars = dynamic(
  () => import("@/components/sections/client-cars").then((mod) => mod.ClientCars),
);

const ClientBooking = dynamic(
  () => import("@/components/sections/client-booking").then((mod) => mod.ClientBooking),
);

// Strukturált adat a keresőmotoroknak
function SchemaMarkup() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": process.env.NEXT_PUBLIC_COMPANY_NAME,
    "image": `${siteUrl}/og-image.jpg`,
    "url": siteUrl,
    "telephone": process.env.NEXT_PUBLIC_PHONE_NUMBER,
    "email": process.env.NEXT_PUBLIC_INFO_MAIL,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": process.env.NEXT_PUBLIC_COMPANY_STREET_ADDRESS,
      "addressLocality": process.env.NEXT_PUBLIC_COMPANY_CITY,
      "postalCode": process.env.NEXT_PUBLIC_COMPANY_POSTAL_CODE,
      "addressCountry": process.env.NEXT_PUBLIC_COMPANY_COUNTRY
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.38816005197496,
      "longitude": 16.5403936950067
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"],
        "opens": "08:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "20:00"
      }
    ],
    "priceRange": "$$",
    "sameAs": [
      process.env.NEXT_PUBLIC_FACEBOOK_URL
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}