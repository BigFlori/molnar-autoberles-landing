"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { CarsSection } from "@/components/sections/cars";
import { ReviewsSection } from "@/components/sections/reviews";
import { BookingSection } from "@/components/sections/booking";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  const [selectedCar, setSelectedCar] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <CarsSection selectedCar={selectedCar} onSelectCar={setSelectedCar} />
        <BookingSection selectedCar={selectedCar} onSelectCar={setSelectedCar} />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}