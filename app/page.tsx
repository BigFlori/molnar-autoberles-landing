import { Suspense } from "react";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ReviewsSection } from "@/components/sections/reviews";
import { ContactSection } from "@/components/sections/contact";
import { FAQSection } from "@/components/sections/faq";
import { RentalProcessSection } from "@/components/sections/rental-process";
import { KoszegSightsSection } from "@/components/sections/koszeg-sights";
import { CarProvider } from "@/provider/car-provider";
import { Metadata } from "next";
import { SchemaMarkup } from "@/components/schema/schema-markup";
import { generateMetadata, pageSeo } from "@/config/seo-config";
import dynamic from "next/dynamic";

export const metadata: Metadata = generateMetadata(pageSeo.home);

// Főoldal szerver komponens
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main>
        <HeroSection />
        <AboutSection />
        {/* Bérlési folyamat szekció */}
        <RentalProcessSection />
        {/* Wrap the car-related sections with CarProvider */}
        <CarProvider>
          <Suspense fallback={<CarsSectionSkeleton />}>
            <ClientCars />
          </Suspense>
          <Suspense fallback={<BookingSectionSkeleton />}>
            <ClientBooking />
          </Suspense>
        </CarProvider>
        {/* GYIK szekció */}
        <FAQSection />
        {/* Kőszeg és környéke szekció - lejjebb helyezve */}
        <KoszegSightsSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <SchemaMarkup />
    </div>
  );
}

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
const ClientCars = dynamic(() => import("@/components/sections/client-cars").then((mod) => mod.ClientCars));

const ClientBooking = dynamic(() => import("@/components/sections/client-booking").then((mod) => mod.ClientBooking));