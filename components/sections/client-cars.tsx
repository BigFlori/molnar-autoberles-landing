"use client";

import { useCallback, } from "react";
import { Calendar, Users, Gauge, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCarSelection } from "@/provider/car-provider";
import { CarType } from "@/types/car";
import carsData from "@/data/cars.json";

// Exportáljuk az autókat, hogy a booking komponens is használhassa
export const cars: CarType[] = carsData as CarType[];

export function ClientCars() {
  // A lokális state helyett a megosztott context-et használjuk
  const { selectedCar, setSelectedCar } = useCarSelection();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 640px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 3 },
    },
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="cars" className="py-20">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Elérhető autóink</h2>
        <p className="text-center text-gray-600 mb-12">
          Használja a nyilakat vagy húzza oldalra a képernyőt további autóink megtekintéséhez
        </p>

        <div className="flex justify-end gap-2 mb-4">
          <Button
            size="icon"
            variant="secondary"
            className="bg-gray-900 hover:bg-gray-800 text-white h-10 w-10 rounded-full shadow-lg"
            onClick={scrollPrev}
            aria-label="Előző autó"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="bg-gray-900 hover:bg-gray-800 text-white h-10 w-10 rounded-full shadow-lg"
            onClick={scrollNext}
            aria-label="Következő autó"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="overflow-hidden select-none" ref={emblaRef}>
          <div className="flex gap-6">
            {cars.map((car) => (
              <div key={car.id} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] p-1">
                <Card
                  className={`overflow-hidden transition-all h-full flex flex-col max-h-[800px] ${
                    selectedCar === car.name ? "ring-2 ring-blue-500" : ""
                  }`}
                >
                  <div className="relative w-full h-60">
                    <Image
                      src={car.image}
                      alt={car.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center"
                      priority={car.id <= 2}
                      quality={85}
                    />
                  </div>
                  <CardContent className="p-4 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <p className="text-lg font-semibold text-gray-900">{car.name}</p>
                      <p className="text-lg font-bold text-blue-600">
                        {car.price} Ft<span className="text-sm font-normal">/nap</span>
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div className="flex items-center gap-1.5 text-gray-600 text-sm">
                        <Calendar className="h-4 w-4" aria-hidden="true" />
                        <span>{car.year}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-600 text-sm">
                        <Users className="h-4 w-4" aria-hidden="true" />
                        <span>{car.seats}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-600 text-sm">
                        <Gauge className="h-4 w-4" aria-hidden="true" />
                        <span>{car.engine}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-600 text-sm">
                        <Settings className="h-4 w-4" aria-hidden="true" />
                        <span>{car.transmission}</span>
                      </div>
                    </div>

                    <Separator className="my-3" />

                    <div className="space-y-2 mb-3">
                      {/* H4 helyett erős szöveget használunk */}
                      <p className="font-semibold text-sm">Felszereltség:</p>
                      <ul className="grid grid-cols-2 gap-1.5 text-xs text-gray-600">
                        {car.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-1.5">
                            <span className="w-1 h-1 bg-blue-600 rounded-full" aria-hidden="true" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Separator className="my-3" />

                    <div className="space-y-2 flex-1">
                      {/* H4 helyett erős szöveget használunk */}
                      <p className="font-semibold text-sm">Díjszabás:</p>
                      <div className="space-y-1 text-xs text-gray-600">
                        <p>
                          Napi díj: {car.pricing.daily.price} Ft ({car.pricing.daily.limit}-ig)
                        </p>
                        <p>
                          3 naptól: {car.pricing.threeDays.price} Ft/nap (napi {car.pricing.threeDays.limit}-ig)
                        </p>
                        <p>7 naptól: {car.pricing.sevenDays}</p>
                        <p>Belföldi használat esetén kaució: {car.pricing.domesticDeposit} Ft</p>
                        <p>Külföldi használat esetén kaució: {car.pricing.abroadDeposit} Ft</p>
                      </div>
                    </div>

                    <Button
                      className="w-full mt-4"
                      onClick={() => {
                        setSelectedCar(car.name);
                        document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Foglalás
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}