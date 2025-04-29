"use client";

import React from "react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

// FAQ adatok
const faqItems = [
  {
    question: "Milyen dokumentumok szükségesek az autóbérléshez?",
    answer: `A bérléshez az alábbi dokumentumok szükségesek:
    - Érvényes személyi igazolvány vagy útlevél
    - Legalább 2 éve érvényes vezetői engedély
    - Lakcímkártya
    - A bérlés díjának és a kauciónak megfelelő fedezet (készpénz vagy bankkártya)`
  },
  {
    question: "Mennyi a minimum bérlési idő?",
    answer: "A minimum bérlési idő 24 óra (1 nap). Rövidebb időtartamra is lehetséges bérlés, de ebben az esetben is a napi díj kerül felszámításra."
  },
  {
    question: "Mi a teendő meghibásodás vagy baleset esetén?",
    answer: `Meghibásodás vagy baleset esetén kérjük, azonnal vegye fel velünk a kapcsolatot telefonon. 24 órás ügyfélszolgálatunk segít a probléma megoldásában. A bérleti szerződésben található biztosítási feltételek szerint járunk el. A szükséges segélyhívó számokat és eljárásrendet a kesztyűtartóban található dokumentumok tartalmazzák.`
  },
  {
    question: "Lehet-e az autóval külföldre utazni?",
    answer: "Igen, autóinkat külföldön is használhatja, az EU területén. Kérjük, előre jelezze külföldi utazási szándékát a bérlés során. Külföldi használat esetén magasabb kauciót kérünk, és speciális biztosítás is szükséges lehet."
  },
  {
    question: "Hogyan történik az autó átvétele és visszaadása?",
    answer: "Az autók átvétele és visszaadása Kőszeg belvárosában, irodánkban történik, rugalmas időbeosztás szerint. Előzetes egyeztetés alapján az átvétel és visszaadás Kőszeg 30 km-es körzetében más helyszínen is lehetséges, ennek díja egyedi megállapodás szerint alakul."
  },
  {
    question: "Kell-e teletankolni az autót leadáskor?",
    answer: "Igen, az autókat tele tankkal adjuk át, és ugyanúgy tele tankkal kérjük vissza. Amennyiben az autó üzemanyagszintje a visszaadáskor alacsonyabb, mint átvételkor, a hiányzó üzemanyag aktuális piaci árát és egy kezelési költséget számítunk fel."
  },
  {
    question: "Van-e életkori korlátozás a bérléshez?",
    answer: "Igen, autóbérléshez minimum 21 éves kor és legalább 2 éves vezetői tapasztalat szükséges. Egyes prémium kategóriás autóknál a minimum életkor 25 év lehet."
  },
  {
    question: "Lehetséges-e hosszabbítani a bérlést?",
    answer: "Igen, a bérlés időtartama meghosszabbítható, amennyiben az autó nem foglalt a következő időszakra. Kérjük, a hosszabbítási szándékát legalább 24 órával a bérlés lejárta előtt jelezze telefonon vagy e-mailben."
  },
  {
    question: "Mi történik túlfutott kilométerek esetén?",
    answer: "A napi, valamint a 3 napos bérlési konstrukciónál meghatározott kilométer limit van érvényben. A limit felett extra kilométerdíjat számítunk fel, amelynek mértéke 50 Ft/km. Hosszabb időtartamú bérlés esetén egyedi kilométer-megállapodás is lehetséges."
  },
  {
    question: "Mennyibe kerül a kaució és hogyan kapom vissza?",
    answer: "A kaució összege belföldre 20.000 Ft, külföldi használat esetén 30.000 Ft. A kauciót készpénzben vagy bankkártyával lehet letétbe helyezni. A jármű sérülésmentes visszaszolgáltatása esetén a kaució teljes összegét azonnal visszakapja. Bankkártyás fizetés esetén a visszautalás 2-3 munkanapot vesz igénybe."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Gyakran Ismételt Kérdések
        </h2>
        
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          Az autóbérlés folyamatával és feltételeivel kapcsolatos leggyakoribb kérdések és válaszok, hogy egyszerűen és kényelmesen intézhesse autóbérlését Kőszegen.
        </p>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow">
                <AccordionTrigger className="px-6 hover:no-underline font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 whitespace-pre-line">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center mt-10">
            <p className="text-gray-600">
              További kérdése van? Forduljon hozzánk bizalommal telefonon vagy e-mailben, hogy az autóbérlés egyszerű folyamatát még gördülékenyebbé tegyük!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}