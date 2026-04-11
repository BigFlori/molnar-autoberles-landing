"use client"

import { Clock, Shield, MapPin, Wrench, Star, Users } from "lucide-react"
import { MagicCard } from "@/components/ui/magic-card"
import { BlurFade } from "@/components/ui/blur-fade"

const features = [
  {
    icon: Clock,
    title: "Rugalmas bérlés",
    description:
      "Napi, heti vagy akár hosszabb távú bérlési lehetőségek az Ön igényeire szabva. Rugalmas átvételi és leadási időpontok.",
  },
  {
    icon: Shield,
    title: "Megfizethető bérlés",
    description:
      "Autóink kifogástalan állapotban, kedvező áron bérelhetők, hosszabb távú bérlés esetén pedig egyedi árakat biztosítunk minden ügyfelünk számára.",
  },
  {
    icon: MapPin,
    title: "Kényelmes elhelyezkedés",
    description:
      "Kőszeg belvárosában, könnyen megközelíthető helyen várjuk. Igény esetén házhozszállítási lehetőség Kőszeg 30 km-es körzetében.",
  },
  {
    icon: Wrench,
    title: "Karbantartott járművek",
    description:
      "Autóinkat rendszeresen szervizeljük és átvizsgáljuk. Minden autónk megfelelő műszaki állapotban van, hogy Ön biztonságban érezze magát.",
  },
  {
    icon: Star,
    title: "Személyes kiszolgálás",
    description:
      "Családi vállalkozásként kiemelten fontos számunkra minden ügyfelünk elégedettsége. Személyre szabott tanácsokkal segítünk a megfelelő autó kiválasztásában.",
  },
  {
    icon: Users,
    title: "Teljes körű tájékoztatás",
    description:
      "Minden részletet elmagyarázunk, legyen szó az autó kezeléséről vagy a bérlés feltételeiről. Nincsenek rejtett költségek vagy meglepetések.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-slate-50" aria-labelledby="about-heading">
      <div className="container px-4">
        {/* Section header */}
        <BlurFade inView duration={0.5}>
          <div className="text-center mb-14">
            <span className="inline-block text-sky-700 text-sm font-semibold tracking-wider uppercase mb-3">
              Miért mi?
            </span>
            <h2
              id="about-heading"
              className="font-poppins text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              Miért válasszon minket?
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
              Kőszeg megbízható autóbérlője vagyunk. Íme néhány ok, amiért ügyfeleink újra és újra visszatérnek.
            </p>
          </div>
        </BlurFade>

        {/* Feature cards grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mb-14">
          {features.map((feature, i) => (
            <BlurFade key={feature.title} inView delay={i * 0.07} duration={0.5}>
              <MagicCard
                className="h-full rounded-2xl border border-slate-200"
                gradientColor="#e0f2fe"
                gradientOpacity={0.5}
                gradientFrom="#0284c7"
                gradientTo="#7dd3fc"
                gradientSize={220}
              >
                <div className="p-6 h-full">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 flex items-center justify-center mb-4 group-hover:bg-sky-100 transition-colors duration-200">
                    <feature.icon
                      className="h-5 w-5 text-sky-700"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-poppins text-base font-semibold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </MagicCard>
            </BlurFade>
          ))}
        </div>

        {/* About text */}
        <BlurFade inView delay={0.3} duration={0.5}>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h3 className="font-poppins text-xl font-semibold text-slate-900 mb-4">
              Rólunk
            </h3>
            <div className="space-y-4 text-slate-600 leading-relaxed text-sm md:text-base">
              <p>
                A Molnár Autóbérlés 2024 óta áll ügyfelei rendelkezésére Kőszegen és környékén. Családi
                vállalkozásként indultunk, azzal a céllal, hogy az autóbérlést egyszerűvé és stresszmentessé
                tegyük mindenki számára.
              </p>
              <p>
                Különös figyelmet fordítunk minden ügyfelünkre, és arra törekszünk, hogy a lehető legjobb
                szolgáltatást nyújtsuk. Autóinkat rendszeresen szervizeljük és tisztítjuk, hogy Ön mindig
                megbízható és tiszta járművet kapjon.
              </p>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
