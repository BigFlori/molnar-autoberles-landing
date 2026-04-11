"use client";

import { Calendar, Users, Gauge, Settings, CheckCircle2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useCarSelection } from "@/provider/car-provider";
import { CarType } from "@/types/car";
import carsData from "@/data/cars.json";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export const cars: CarType[] = carsData as CarType[];

export function ClientCars() {
  const { selectedCar, setSelectedCar } = useCarSelection();

  return (
    <section id="cars" className="py-24 bg-slate-50">
      <div className="container px-4">
        {/* Header */}
        <BlurFade inView duration={0.5}>
          <div className="text-center mb-12">
            <span className="inline-block text-sky-700 text-sm font-semibold tracking-wider uppercase mb-3">
              Flottánk
            </span>
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Elérhető autóink
            </h2>
            <p className="text-slate-500 text-lg">
              Válassza ki az Önnek legjobban megfelelő autót
            </p>
          </div>
        </BlurFade>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cars.map((car, index) => (
            <BlurFade key={car.id} inView delay={index * 0.07} duration={0.5}>
              <div
                className={`overflow-hidden transition-all duration-200 h-full flex flex-col bg-white rounded-2xl border shadow-sm hover:shadow-md ${
                  selectedCar === car.name
                    ? "border-sky-600 ring-2 ring-sky-600/30 shadow-sky-100"
                    : "border-slate-200"
                }`}
              >
                {/* Car image */}
                <div className="relative w-full h-52 overflow-hidden">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-300 hover:scale-105"
                    priority={car.id <= 2}
                    quality={85}
                  />
                  {selectedCar === car.name && (
                    <div className="absolute top-3 right-3 bg-sky-700 text-white rounded-full px-2.5 py-1 text-xs font-semibold flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" />
                      Kiválasztva
                    </div>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-1">
                  {/* Name + price */}
                  <div className="flex justify-between items-start mb-4">
                    <p className="font-poppins text-base font-semibold text-slate-900 leading-tight">
                      {car.name}
                    </p>
                    <div className="text-right flex-shrink-0 ml-2">
                      <p className="font-bold text-sky-700 text-base leading-none">
                        {car.price} Ft
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">/nap</p>
                    </div>
                  </div>

                  {/* Specs */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {[
                      { icon: Calendar, label: car.year },
                      { icon: Users, label: car.seats },
                      { icon: Gauge, label: car.engine },
                      { icon: Settings, label: car.transmission },
                    ].map(({ icon: Icon, label }, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-slate-500 text-xs">
                        <Icon className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>

                  <Separator className="mb-4" />

                  {/* Features */}
                  <div className="mb-4">
                    <p className="font-semibold text-xs text-slate-700 mb-2 uppercase tracking-wide">
                      Felszereltség
                    </p>
                    <ul className="grid grid-cols-2 gap-1 text-xs text-slate-500">
                      {car.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-sky-600 rounded-full flex-shrink-0" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator className="mb-4" />

                  {/* Pricing */}
                  <div className="flex-1 mb-4">
                    <p className="font-semibold text-xs text-slate-700 mb-2 uppercase tracking-wide">
                      Díjszabás
                    </p>
                    <div className="space-y-1 text-xs text-slate-500">
                      <p>Napi díj: <span className="font-medium text-slate-700">{car.pricing.daily.price} Ft</span> ({car.pricing.daily.limit}-ig)</p>
                      <p>3 naptól: <span className="font-medium text-slate-700">{car.pricing.threeDays.price} Ft/nap</span> ({car.pricing.threeDays.limit}-ig)</p>
                      <p>7 naptól: <span className="font-medium text-slate-700">{car.pricing.sevenDays}</span></p>
                      <p className="pt-1 border-t border-slate-100 mt-1">Kaució belföld: <span className="font-medium text-slate-700">{car.pricing.domesticDeposit} Ft</span></p>
                      <p>Kaució külföld: <span className="font-medium text-slate-700">{car.pricing.abroadDeposit} Ft</span></p>
                    </div>
                  </div>

                  {/* CTA */}
                  <ShimmerButton
                    background="rgba(3, 105, 161, 1)"
                    shimmerColor="#7dd3fc"
                    shimmerDuration="2.5s"
                    borderRadius="12px"
                    className="w-full py-2.5 text-sm font-semibold justify-center"
                    onClick={() => {
                      setSelectedCar(car.name);
                      document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Kiválasztom
                  </ShimmerButton>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
