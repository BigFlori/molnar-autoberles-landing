export function HeroSection() {
  return (
    <section id="hero" className="relative h-[600px] flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=1600&q=80"
          alt="Hero background"
          className="w-full h-full object-cover"
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
          <a
            href="#booking"
            className="inline-flex h-11 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Foglaljon most
          </a>
        </div>
      </div>
    </section>
  );
}