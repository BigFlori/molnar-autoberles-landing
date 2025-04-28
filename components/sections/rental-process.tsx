import React from "react";
import { Calendar, CheckSquare, Clock, CreditCard, Car, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const rentalSteps = [
  {
    icon: Calendar,
    title: "Foglalás",
    description: "Válassza ki az Önnek megfelelő autót és bérlési időpontot online vagy telefonon. Foglalását azonnal visszaigazoljuk."
  },
  {
    icon: CheckSquare,
    title: "Dokumentumok",
    description: "Készítse elő a szükséges dokumentumokat: személyi igazolvány, vezetői engedély, lakcímkártya. Ezekre a szerződéskötéshez lesz szükség."
  },
  {
    icon: CreditCard,
    title: "Szerződés és fizetés",
    description: "Az átvétel előtt átnézzük és aláírjuk a bérleti szerződést. A bérleti díj és a kaució befizetése készpénzben vagy bankkártyával lehetséges."
  },
  {
    icon: Car,
    title: "Átvétel",
    description: "Közösen átvizsgáljuk az autót, ellenőrizzük az állapotát, felszereltségét, majd átadjuk a kulcsokat és az összes szükséges dokumentumot."
  },
  {
    icon: Clock,
    title: "Használat",
    description: "Használja az autót a megbeszélt feltételek szerint. Kérdés vagy probléma esetén ügyfélszolgálatunk 24 órában rendelkezésre áll."
  },
  {
    icon: CheckSquare,
    title: "Visszaadás",
    description: "Az autót azonos üzemanyagszinttel és tiszta állapotban kérjük vissza. Közösen elvégezzük az állapotfelmérést, majd visszaadjuk a kauciót."
  }
];

export function RentalProcessSection() {
  return (
    <section id="rental-process" className="py-20 bg-white">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Bérlési folyamat
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Az autóbérlés egyszerű folyamat a Molnár Autóbérlésnél. Az alábbiakban megismerheti a bérlés főbb lépéseit.
        </p>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Középső vonal folyamatábrához - csak asztali nézeten */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-8 bottom-8 w-0.5 bg-blue-200 hidden md:block" />
          
          <div className="space-y-8 md:space-y-12 relative">
            {rentalSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Lépésszám a középső vonalon - csak asztali nézeten */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10 hidden md:flex">
                  {index + 1}
                </div>
                
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:items-center gap-6`}>
                  {/* Lépésszám - mobil nézeten */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold mx-auto md:hidden">
                    {index + 1}
                  </div>
                  
                  <Card className={`w-full md:w-5/12 relative shadow-md hover:shadow-lg transition-shadow ${index % 2 === 0 ? 'md:mr-auto md:pr-6' : 'md:ml-auto md:pl-6'}`}>
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <step.icon className="h-8 w-8 text-blue-600 shrink-0 mt-1" />
                        <div className="space-y-1">
                          <h3 className="font-semibold text-lg">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-gray-600 mb-6">
            A bérlés részletes feltételeiről, a fizetési módokról, a biztosításról és egyéb tudnivalókról a Bérlési feltételek oldalunkon tájékozódhat.
          </p>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/berlesi-feltetelek">
              Részletes bérlési feltételek
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}