"use client"

import React from "react"
import { Compass, Mountain, Wine, Trees, Castle, Building } from "lucide-react"
import { MagicCard } from "@/components/ui/magic-card"
import { BlurFade } from "@/components/ui/blur-fade"
import { ClientKoszegButton } from "./client-koszeg-button"

const sightCategories = [
  {
    icon: Castle,
    title: "Történelmi látványosságok",
    sights: [
      {
        name: "Jurisics-vár",
        description: "Kőszeg legismertebb műemléke, a 13. században épült vár, amely a török ostromok során vált híressé. Ma múzeumként működik.",
        distanceTime: "5 perc séta a belvárosból",
      },
      {
        name: "Hősök tornya",
        description: "A vár mellett található 19. századi torony, amely kilátóként szolgál. Tetejéről gyönyörű panoráma nyílik a városra.",
        distanceTime: "5 perc séta a belvárosból",
      },
      {
        name: "Szent Jakab-templom",
        description: "A 13. században épült templom Kőszeg egyik legrégebbi épülete, gyönyörű gótikus stíluselemekkel.",
        distanceTime: "2 perc séta a Fő térről",
      },
    ],
  },
  {
    icon: Building,
    title: "Városi látnivalók",
    sights: [
      {
        name: "Fő tér",
        description: "A belváros szíve, gyönyörű polgárházakkal, a Szent Imre-templommal és a Városházával.",
        distanceTime: "Központi helyszín",
      },
      {
        name: "Sgrafittós ház",
        description: "Különleges homlokzatú történelmi épület a Jurisics téren, egyedi sgrafitto technikával készült díszítésekkel.",
        distanceTime: "1 perc séta a Fő tértől",
      },
      {
        name: "Tábornokház",
        description: "A belváros egyik legszebb barokk épülete, ma kulturális rendezvényeknek és kiállításoknak ad otthont.",
        distanceTime: "3 perc séta a Fő tértől",
      },
    ],
  },
  {
    icon: Mountain,
    title: "Természeti látnivalók",
    sights: [
      {
        name: "Írottkő kilátó",
        description: "A Dunántúl legmagasabb pontján (882 m) található kilátó, ahonnan három ország tájaiban gyönyörködhetünk.",
        distanceTime: "20 perc autóval, majd 45 perces túra",
      },
      {
        name: "Hétforrás",
        description: "Kedvelt kirándulóhely a város határában, hét forrással, amelyek egy medencében egyesülnek.",
        distanceTime: "15 perc autóval",
      },
      {
        name: "Stájer-házak",
        description: "Festői környezetben található erdei pihenőhely, kirándulások és családi programok ideális helyszíne.",
        distanceTime: "20 perc autóval",
      },
    ],
  },
  {
    icon: Trees,
    title: "Kirándulóhelyek",
    sights: [
      {
        name: "Kálvária-hegy",
        description: "A város fölé magasodó domb, ahol a 18. századi kálváriakápolnák és a Kálvária-templom található.",
        distanceTime: "25 perc séta a belvárosból",
      },
      {
        name: "Óház-kilátó",
        description: "Az egykori Felsővár helyén álló kilátó, ahonnan fantasztikus panoráma nyílik a városra és az Alpokaljára.",
        distanceTime: "30 perc autóval",
      },
      {
        name: "Keresztkút",
        description: "Védett természeti érték a Kőszegi-hegységben, különleges mikroklímával és növényvilággal.",
        distanceTime: "20 perc autóval, majd 30 perces túra",
      },
    ],
  },
  {
    icon: Wine,
    title: "Gasztronómia és borkultúra",
    sights: [
      {
        name: "Kőszegi borvidék",
        description: "A történelmi borvidék pincészetei, ahol a helyi jellegzetességet, a Kékfrankost kóstolhatjuk meg.",
        distanceTime: "5–15 perc autóval",
      },
      {
        name: "Cáki pincesor",
        description: "Műemlék zsúpfedeles pincék sora, ahol a helyi borkultúra évszázados hagyományaival ismerkedhetünk meg.",
        distanceTime: "10 perc autóval",
      },
      {
        name: "Helyi éttermek",
        description: "A belvárosban számos étterem kínálja a helyi specialitásokat és a hagyományos magyar ízeket.",
        distanceTime: "A belvárosban",
      },
    ],
  },
  {
    icon: Compass,
    title: "Határon túli célpontok",
    sights: [
      {
        name: "Burgenland, Ausztria",
        description: "Az osztrák határ közelsége lehetőséget nyújt egynapos kirándulásokra a szomszédos Burgenland tartományba.",
        distanceTime: "15 perc autóval a határtól",
      },
      {
        name: "Léka vára, Ausztria",
        description: "Impozáns középkori erődítmény a határ túloldalán, múzeummal és gyönyörű környezettel.",
        distanceTime: "30 perc autóval",
      },
      {
        name: "Borostyánkő vára, Ausztria",
        description: "Látványos vár festői környezetben, gazdag történelmi kiállítással és panorámás kilátással.",
        distanceTime: "45 perc autóval",
      },
    ],
  },
]

export function KoszegSightsSection() {
  return (
    <section id="koszeg" className="py-24 bg-white">
      <div className="container px-4">
        {/* Header */}
        <BlurFade inView duration={0.5}>
          <div className="text-center mb-14">
            <span className="inline-block text-sky-700 text-sm font-semibold tracking-wider uppercase mb-3">
              Felfedezni való
            </span>
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Fedezze fel Kőszeget és környékét
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Kőszeg és környéke számtalan látnivalót kínál minden évszakban. Béreljen autót, és
              fedezze fel ezt a gyönyörű vidéket kényelmesen!
            </p>
          </div>
        </BlurFade>

        {/* Category cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {sightCategories.map((category, index) => (
            <BlurFade key={index} inView delay={index * 0.07} duration={0.5}>
              <MagicCard
                className="h-full rounded-2xl border border-slate-200"
                gradientColor="#e0f2fe"
                gradientOpacity={0.4}
                gradientFrom="#0284c7"
                gradientTo="#7dd3fc"
                gradientSize={200}
              >
                <div className="p-6 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center flex-shrink-0">
                      <category.icon className="h-5 w-5 text-sky-700" aria-hidden="true" />
                    </div>
                    <h3 className="font-poppins font-semibold text-slate-900 text-sm">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.sights.map((sight, sightIndex) => (
                      <div
                        key={sightIndex}
                        className="border-b border-slate-100 pb-4 last:border-0 last:pb-0"
                      >
                        <strong className="block font-semibold text-slate-900 text-sm mb-1">
                          {sight.name}
                        </strong>
                        <p className="text-xs text-slate-500 mb-1.5 leading-relaxed">
                          {sight.description}
                        </p>
                        <p className="text-xs text-sky-700 font-medium">
                          <Compass className="h-3 w-3 inline-block mr-1" aria-hidden="true" />
                          {sight.distanceTime}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>

        {/* CTA */}
        <BlurFade inView delay={0.3} duration={0.5}>
          <div className="text-center">
            <p className="text-slate-500 mb-6 max-w-2xl mx-auto text-sm leading-relaxed">
              Saját autóval sokkal kényelmesebben fedezheti fel a környék rejtett kincseit.
              Béreljen autót, és élvezze a szabadságot!
            </p>
            <ClientKoszegButton />
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
