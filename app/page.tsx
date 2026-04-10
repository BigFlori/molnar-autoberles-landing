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
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        {/* Wrap the car-related sections with CarProvider */}
        <CarProvider>
          <Suspense fallback={<CarsSectionSkeleton />}>
            <ClientCars />
          </Suspense>
          <Suspense fallback={<BookingSectionSkeleton />}>
            <ClientBooking />
          </Suspense>
        </CarProvider>
        <RentalProcessSection />
        <AboutSection />
        {/* Bérlési folyamat szekció */}
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
    <section className="py-24 bg-slate-50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <div className="h-4 w-24 bg-slate-200 rounded-full mx-auto mb-3 animate-pulse" />
          <div className="h-8 w-64 bg-slate-200 rounded-xl mx-auto mb-4 animate-pulse" />
          <div className="h-4 w-80 bg-slate-200 rounded-full mx-auto animate-pulse" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-96 bg-slate-200 rounded-2xl animate-pulse" />
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingSectionSkeleton() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="h-4 w-32 bg-slate-200 rounded-full mx-auto mb-3 animate-pulse" />
            <div className="h-8 w-48 bg-slate-200 rounded-xl mx-auto mb-4 animate-pulse" />
          </div>
          <div className="h-96 bg-slate-200 rounded-2xl animate-pulse" />
        </div>
      </div>
    </section>
  );
}

// Dinamikusan importált client komponensek
const ClientCars = dynamic(() => import("@/components/sections/client-cars").then((mod) => mod.ClientCars));

const ClientBooking = dynamic(() => import("@/components/sections/client-booking").then((mod) => mod.ClientBooking));