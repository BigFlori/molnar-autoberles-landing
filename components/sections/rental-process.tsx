"use client"

import React from "react"
import { Calendar, CheckSquare, Clock, CreditCard, Car, RotateCcw } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import Link from "next/link"
import { ShimmerButton } from "@/components/ui/shimmer-button"

const rentalSteps = [
  {
    icon: Calendar,
    title: "Foglalás",
    description:
      "Válassza ki az Önnek megfelelő autót és bérlési időpontot online vagy telefonon. Foglalását azonnal visszaigazoljuk.",
  },
  {
    icon: CheckSquare,
    title: "Dokumentumok",
    description:
      "Készítse elő a szükséges dokumentumokat: személyi igazolvány, vezetői engedély, lakcímkártya. Ezekre a szerződéskötéshez lesz szükség.",
  },
  {
    icon: CreditCard,
    title: "Szerződés és fizetés",
    description:
      "Az átvétel előtt átnézzük és aláírjuk a bérleti szerződést. A bérleti díj és a kaució befizetése készpénzben vagy bankkártyával lehetséges.",
  },
  {
    icon: Car,
    title: "Átvétel",
    description:
      "Közösen átvizsgáljuk az autót, ellenőrizzük az állapotát, felszereltségét, majd átadjuk a kulcsokat és az összes szükséges dokumentumot.",
  },
  {
    icon: Clock,
    title: "Használat",
    description:
      "Használja az autót a megbeszélt feltételek szerint. Kérdés vagy probléma esetén ügyfélszolgálatunk 24 órában rendelkezésre áll.",
  },
  {
    icon: RotateCcw,
    title: "Visszaadás",
    description:
      "Az autót azonos üzemanyagszinttel és tiszta állapotban kérjük vissza. Közösen elvégezzük az állapotfelmérést, majd visszaadjuk a kauciót.",
  },
]

export function RentalProcessSection() {
  return (
    <section id="rental-process" className="py-24 bg-white">
      <div className="container px-4">
        {/* Header */}
        <BlurFade inView duration={0.5}>
          <div className="text-center mb-12">
            <span className="inline-block text-sky-700 text-sm font-semibold tracking-wider uppercase mb-3">
              Hogyan működik?
            </span>
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Bérlési folyamat
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
              Egyszerű, átlátható folyamat. Mindössze 6 lépésben juthat hozzá a kiszemelt autóhoz.
            </p>
          </div>
        </BlurFade>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {rentalSteps.map((step, index) => (
            <BlurFade key={index} inView delay={index * 0.07} duration={0.5}>
              <div className="relative bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow duration-200 group h-full overflow-hidden">
                {/* Decorative step number */}
                <span className="absolute top-3 right-4 font-poppins font-bold text-5xl text-slate-100 select-none leading-none">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="relative z-10 w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center mb-4 group-hover:bg-sky-100 transition-colors duration-200">
                  <step.icon className="h-4.5 w-4.5 h-[18px] w-[18px] text-sky-700" aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="relative z-10 font-poppins font-semibold text-slate-900 mb-1.5 text-sm">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 text-slate-500 text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* CTA */}
        <BlurFade inView delay={0.45} duration={0.5}>
          <div className="flex flex-col items-center mt-12">
            <p className="text-slate-500 mb-6 max-w-xl mx-auto text-sm leading-relaxed">
              A bérlés részletes feltételeiről, a fizetési módokról, a biztosításról és egyéb
              tudnivalókról a Bérlési feltételek oldalunkon tájékozódhat.
            </p>
            <Link href="/berlesi-feltetelek">
              <ShimmerButton
                background="rgba(3, 105, 161, 1)"
                shimmerColor="#7dd3fc"
                shimmerDuration="2.5s"
                borderRadius="12px"
                className="px-7 py-3 text-sm font-semibold"
              >
                Részletes bérlési feltételek
              </ShimmerButton>
            </Link>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
