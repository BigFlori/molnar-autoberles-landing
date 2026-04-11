"use client"

import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { BlurFade } from "@/components/ui/blur-fade"

const faqItems = [
  {
    question: "Milyen dokumentumok szükségesek az autóbérléshez?",
    answer: `A bérléshez az alábbi dokumentumok szükségesek:
    - Érvényes személyi igazolvány vagy útlevél
    - Legalább 2 éve érvényes vezetői engedély
    - Lakcímkártya
    - A bérlés díjának és a kauciónak megfelelő fedezet (készpénz vagy utalás)`,
  },
  {
    question: "Mennyi a minimum bérlési idő?",
    answer:
      "A minimum bérlési idő 24 óra (1 nap). Rövidebb időtartamra is lehetséges bérlés, de ebben az esetben is a napi díj kerül felszámításra.",
  },
  {
    question: "Mi a teendő meghibásodás vagy baleset esetén?",
    answer:
      "Meghibásodás vagy baleset esetén kérjük, azonnal vegye fel velünk a kapcsolatot telefonon. 24 órás ügyfélszolgálatunk segít a probléma megoldásában. A bérleti szerződésben található biztosítási feltételek szerint járunk el.",
  },
  {
    question: "Lehet-e az autóval külföldre utazni?",
    answer:
      "Igen, autóinkat külföldön is használhatja, az EU területén. Kérjük, előre jelezze külföldi utazási szándékát a bérlés során. Külföldi használat esetén magasabb kauciót kérünk, és speciális biztosítás is szükséges lehet.",
  },
  {
    question: "Hogyan történik az autó átvétele és visszaadása?",
    answer:
      "Az autók átvétele és visszaadása Kőszeg belvárosában, irodánkban történik, rugalmas időbeosztás szerint. Előzetes egyeztetés alapján az átvétel és visszaadás Kőszeg 30 km-es körzetében más helyszínen is lehetséges, ennek díja egyedi megállapodás szerint alakul.",
  },
  {
    question: "Kell-e teletankolni az autót leadáskor?",
    answer:
      "Igen, az autókat tele tankkal adjuk át, és ugyanúgy tele tankkal kérjük vissza. Amennyiben az autó üzemanyagszintje a visszaadáskor alacsonyabb, mint átvételkor, a hiányzó üzemanyag aktuális piaci árát és egy kezelési költséget számítunk fel.",
  },
  {
    question: "Van-e életkori korlátozás a bérléshez?",
    answer:
      "Igen, autóbérléshez minimum 21 éves kor és legalább 2 éves vezetői tapasztalat szükséges. Egyes prémium kategóriás autóknál a minimum életkor 25 év lehet.",
  },
  {
    question: "Lehetséges-e hosszabbítani a bérlést?",
    answer:
      "Igen, a bérlés időtartama meghosszabbítható, amennyiben az autó nem foglalt a következő időszakra. Kérjük, a hosszabbítási szándékát legalább 24 órával a bérlés lejárta előtt jelezze telefonon vagy e-mailben.",
  },
  {
    question: "Mi történik túlfutott kilométerek esetén?",
    answer:
      "A napi, valamint a 2 vagy több napos bérlési konstrukciónál meghatározott kilométer limit van érvényben. A limit felett extra kilométerdíjat számítunk fel, amelynek mértéke 50 Ft/km. Hosszabb időtartamú bérlés esetén egyedi kilométer-megállapodás is lehetséges.",
  },
  {
    question: "Mennyibe kerül a kaució és hogyan kapom vissza?",
    answer:
      "A kaució összege típus függő, személyautók esetében jellemzően 20.000 Ft belföldre, 30.000 Ft külföldi használat esetén. Kisbusz esetén 50.000–100.000 Ft között alakul. A kauciót készpénzben vagy utalással lehet letétbe helyezni. A jármű sérülésmentes visszaszolgáltatása esetén a kaució teljes összegét azonnal visszakapja.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container px-4">
        {/* Header */}
        <BlurFade inView duration={0.5}>
          <div className="text-center mb-12">
            <span className="inline-block text-sky-700 text-sm font-semibold tracking-wider uppercase mb-3">
              GYIK
            </span>
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Gyakran Ismételt Kérdések
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Az autóbérlés folyamatával és feltételeivel kapcsolatos leggyakoribb kérdések és
              válaszok.
            </p>
          </div>
        </BlurFade>

        <div className="max-w-3xl mx-auto">
          <BlurFade inView delay={0.1} duration={0.5}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-slate-50 rounded-xl border border-slate-200 px-2 overflow-hidden data-[state=open]:border-sky-200 data-[state=open]:bg-sky-50/30 transition-colors duration-200"
                >
                  <AccordionTrigger className="px-4 py-4 hover:no-underline font-medium text-slate-900 text-sm md:text-base text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </BlurFade>

          <BlurFade inView delay={0.25} duration={0.5}>
            <div className="text-center mt-10 p-6 bg-sky-50 rounded-2xl border border-sky-100">
              <p className="text-slate-600 text-sm">
                További kérdése van?{" "}
                <button
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-sky-700 font-semibold hover:underline"
                >
                  Lépjen kapcsolatba velünk
                </button>{" "}
                telefonon vagy e-mailben!
              </p>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
