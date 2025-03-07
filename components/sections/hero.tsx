import Image from "next/image";
import { ClientHeroCta } from "./client-hero-cta";

export function HeroSection() {
  return (
    <section id="hero" className="relative h-[600px] flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=1600&q=80"
          alt="Autóbérlés Kőszegen"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>
      <div className="container px-4 relative">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Autóbérlés egyszerűen Kőszegen
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Megbízható autók, rugalmas feltételek, professzionális szolgáltatás. 
            Fedezze fel Kőszeget és környékét a mi autóinkkal!
          </p>
          <ClientHeroCta />
        </div>
      </div>
    </section>
  );
}