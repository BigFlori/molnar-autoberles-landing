import { Suspense } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ReviewsSection } from "@/components/sections/reviews";
import { ContactSection } from "@/components/sections/contact";
import { CarProvider } from "@/provider/car-provider";
import { Metadata } from "next";

// További SEO beállítások
export const metadata: Metadata = {
  title: "Autóbérlés egyszerűen Kőszegen",
  description: "Kedvező áron bérelhet megbízható autókat Kőszegen és környékén. Napi, heti és hosszútávú bérlés rugalmas feltételekkel a Molnár Autóbérlésnél.",
  alternates: {
    canonical: "https://molnarautoberles.hu",
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
    "name": "Molnár Autóbérlés",
    "image": "https://molnarautoberles.hu/logo.jpg",
    "url": "https://molnarautoberles.hu",
    "telephone": "+36301234567",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Fő tér 1.",
      "addressLocality": "Kőszeg",
      "postalCode": "9730",
      "addressCountry": "HU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.389444,
      "longitude": 16.541667
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "13:00"
      }
    ],
    "priceRange": "$$"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}