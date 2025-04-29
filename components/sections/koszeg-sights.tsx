import React from "react";
import Image from "next/image";
import { Compass, Mountain, Wine, Trees, Castle, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ClientKoszegButton } from "./client-koszeg-button";

const sightCategories = [
  {
    icon: Castle,
    title: "Történelmi látványosságok",
    sights: [
      {
        name: "Jurisics-vár",
        description: "Kőszeg legismertebb műemléke, a 13. században épült vár, amely a török ostromok során vált híressé. Ma múzeumként működik.",
        distanceTime: "5 perc séta a belvárosból"
      },
      {
        name: "Hősök tornya",
        description: "A vár mellett található 19. századi torony, amely kilátóként szolgál. Tetejéről gyönyörű panoráma nyílik a városra és környékére.",
        distanceTime: "5 perc séta a belvárosból"
      },
      {
        name: "Szent Jakab-templom",
        description: "A 13. században épült templom Kőszeg egyik legrégebbi épülete, gyönyörű gótikus stíluselemekkel.",
        distanceTime: "2 perc séta a Fő térről"
      }
    ]
  },
  {
    icon: Building,
    title: "Városi látnivalók",
    sights: [
      {
        name: "Fő tér",
        description: "A belváros szíve, gyönyörű polgárházakkal, a Szent Imre-templommal és a Városházával. Különleges hangulatú rendezvények helyszíne.",
        distanceTime: "Központi helyszín"
      },
      {
        name: "Sgrafittós ház",
        description: "Különleges homlokzatú történelmi épület a Jurisics téren, egyedi sgrafitto technikával készült díszítésekkel.",
        distanceTime: "1 perc séta a Fő tértől"
      },
      {
        name: "Tábornokház",
        description: "A belváros egyik legszebb barokk épülete, ma kulturális rendezvényeknek és kiállításoknak ad otthont.",
        distanceTime: "3 perc séta a Fő tértől"
      }
    ]
  },
  {
    icon: Mountain,
    title: "Természeti látnivalók",
    sights: [
      {
        name: "Írottkő kilátó",
        description: "A Dunántúl legmagasabb pontján (882 m) található kilátó, ahonnan három ország tájaiban gyönyörködhetünk.",
        distanceTime: "20 perc autóval, majd 45 perces túra"
      },
      {
        name: "Hétforrás",
        description: "Kedvelt kirándulóhely a város határában, hét forrással, amelyek egy medencében egyesülnek.",
        distanceTime: "15 perc autóval a várostól"
      },
      {
        name: "Stájer-házak",
        description: "Festői környezetben található erdei pihenőhely, kirándulások és családi programok ideális helyszíne.",
        distanceTime: "20 perc autóval a várostól"
      }
    ]
  },
  {
    icon: Trees,
    title: "Kirándulóhelyek",
    sights: [
      {
        name: "Kálvária-hegy",
        description: "A város fölé magasodó domb, ahol a 18. századi kálváriakápolnák és a Kálvária-templom található. Kellemes séta és szép kilátás.",
        distanceTime: "25 perc séta a belvárosból"
      },
      {
        name: "Óház-kilátó",
        description: "Az egykori Felsővár helyén álló kilátó, ahonnan fantasztikus panoráma nyílik a városra és az Alpokaljára.",
        distanceTime: "30 perc autóval a várostól és rövid túra"
      },
      {
        name: "Keresztkút",
        description: "Védett természeti érték a Kőszegi-hegységben, különleges mikroklímával és növényvilággal.",
        distanceTime: "20 perc autóval, majd 30 perces túra"
      }
    ]
  },
  {
    icon: Wine,
    title: "Gasztronómia és borkultúra",
    sights: [
      {
        name: "Kőszegi borvidék",
        description: "A történelmi borvidék pincészetei, ahol a helyi jellegzetességet, a Kékfrankost kóstolhatjuk meg.",
        distanceTime: "5-15 perc autóval a városközponttól"
      },
      {
        name: "Cáki pincesor",
        description: "Műemlék zsúpfedeles pincék sora, ahol a helyi borkultúra évszázados hagyományaival ismerkedhetünk meg.",
        distanceTime: "10 perc autóval Kőszegtől"
      },
      {
        name: "Helyi éttermek",
        description: "A belvárosban számos étterem kínálja a helyi specialitásokat és a hagyományos magyar ízeket.",
        distanceTime: "A belvárosban, egymástól sétatávolságra"
      }
    ]
  },
  {
    icon: Compass,
    title: "Határon túli célpontok",
    sights: [
      {
        name: "Burgenland, Ausztria",
        description: "Az osztrák határ közelsége lehetőséget nyújt egynapos kirándulásokra a szomszédos Burgenland tartományba.",
        distanceTime: "15 perc autóval a határtól"
      },
      {
        name: "Léka vára, Ausztria",
        description: "Impozáns középkori erődítmény a határ túloldalán, múzeummal és gyönyörű környezettel.",
        distanceTime: "30 perc autóval Kőszegtől"
      },
      {
        name: "Borostyánkő vára, Ausztria",
        description: "Látványos vár festői környezetben, gazdag történelmi kiállítással és panorámás kilátással.",
        distanceTime: "45 perc autóval Kőszegtől"
      }
    ]
  }
];

export function KoszegSightsSection() {
  return (
    <section id="koszeg" className="py-20 bg-gray-50">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Fedezze fel Kőszeget és környékét
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Kőszeg és környéke számtalan látnivalót kínál minden évszakban. Béreljen autót, és fedezze fel ezt a gyönyörű vidéket kényelmesen, saját tempójában!
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sightCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="h-8 w-8 text-blue-600" />
                  <p className="text-xl font-semibold text-gray-900">{category.title}</p>
                </div>
                
                <div className="space-y-4">
                  {category.sights.map((sight, sightIndex) => (
                    <div key={sightIndex} className="border-b border-gray-100 pb-4 last:border-0">
                      <strong className="block font-semibold text-gray-900 mb-1">{sight.name}</strong>
                      <p className="text-sm text-gray-600 mb-2">{sight.description}</p>
                      <p className="text-xs text-blue-600 font-medium">
                        <Compass className="h-3 w-3 inline-block mr-1" />
                        {sight.distanceTime}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Kőszeg környékén rengeteg a látnivaló, és saját autóval sokkal kényelmesebben felfedezheti az autóbérlés egyszerű folyamatával a környék rejtett kincseit. Béreljen autót, és élvezze a szabadságot!
          </p>
          <ClientKoszegButton />
        </div>
      </div>
    </section>
  );
}