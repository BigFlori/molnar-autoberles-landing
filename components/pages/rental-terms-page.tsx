import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Calendar, CheckSquare, Clock, CreditCard, Car } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function RentalTermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-2">
              <Link href="/" className="text-blue-600 hover:underline text-sm flex items-center">
                <ChevronLeft className="h-4 w-4" />
                Vissza a főoldalra
              </Link>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Bérlési feltételek</h1>
            
            <section className="mb-10" id="altalanos-feltetelek">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Általános bérlési feltételek</h2>
              <div className="prose prose-blue max-w-none text-gray-600 space-y-4">
                <p>
                  A Molnár Autóbérlés szolgáltatásainak igénybevételéhez az alábbi általános feltételeknek kell megfelelni:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Minimum 21 éves életkor és legalább 2 éves vezetői tapasztalat</li>
                  <li>Érvényes személyi igazolvány vagy útlevél</li>
                  <li>Érvényes vezetői engedély</li>
                  <li>Lakcímkártya</li>
                </ul>
                <p>
                  Megjegyzés: Bizonyos prémium kategóriás autók bérlése esetén a minimum életkor 25 év lehet.
                </p>
              </div>
            </section>
            
            <Separator className="my-6" />
            
            <section className="mb-10" id="berlesi-folyamat">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Bérlési folyamat</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4" id="foglalas">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-1">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Foglalás</h3>
                    <p className="text-gray-600">
                      Válassza ki az Önnek megfelelő autót és bérlési időpontot online vagy telefonon. Foglalását azonnal visszaigazoljuk.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4" id="dokumentumok">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-1">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Dokumentumok</h3>
                    <p className="text-gray-600">
                      Készítse elő a szükséges dokumentumokat: személyi igazolvány, vezetői engedély, lakcímkártya. Ezekre a szerződéskötéshez lesz szükség.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4" id="fizetes">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-1">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Szerződés és fizetés</h3>
                    <p className="text-gray-600">
                      Az átvétel előtt átnézzük és aláírjuk a bérleti szerződést. A bérleti díj és a kaució befizetése készpénzben vagy bankkártyával lehetséges.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4" id="atvetel">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-1">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Átvétel</h3>
                    <p className="text-gray-600">
                      Közösen átvizsgáljuk az autót, ellenőrizzük az állapotát, felszereltségét, majd átadjuk a kulcsokat és az összes szükséges dokumentumot.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4" id="hasznalat">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-1">5</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Használat</h3>
                    <p className="text-gray-600">
                      Használja az autót a megbeszélt feltételek szerint. Kérdés vagy probléma esetén ügyfélszolgálatunk 24 órában rendelkezésre áll.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4" id="visszaadas">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mt-1">6</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Visszaadás</h3>
                    <p className="text-gray-600">
                      Az autót azonos üzemanyagszinttel és tiszta állapotban kérjük vissza. Közösen elvégezzük az állapotfelmérést, majd visszaadjuk a kauciót.
                    </p>
                  </div>
                </div>
              </div>
            </section>
            
            <Separator className="my-6" />
            
            <section className="mb-10" id="fizetesi-feltetelek">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Fizetési feltételek</h2>
              <div className="prose prose-blue max-w-none text-gray-600 space-y-4">
                <p>
                  Autóbérlési szolgáltatásunk igénybevételéhez az alábbi fizetési feltételek vonatkoznak:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>A bérleti díj előre fizetendő a bérlés teljes időtartamára</li>
                  <li>A kaució összege belföldre 20.000 Ft, külföldi használatra 30.000 Ft</li>
                  <li>Elfogadunk készpénzt és bankkártyát is</li>
                  <li>Hosszabb bérlés esetén egyedi fizetési feltételek lehetségesek</li>
                </ul>
                <p>
                  A bérleti díj a kiválasztott autó kategóriájától, a bérlés időtartamától és a szezonalitástól függően változhat. Az aktuális árainkról érdeklődjön telefonon vagy az ajánlatkérő űrlapon keresztül.
                </p>
              </div>
            </section>
            
            <Separator className="my-6" />
            
            <section className="mb-10" id="biztositas">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Biztosítás</h2>
              <div className="prose prose-blue max-w-none text-gray-600 space-y-4">
                <p>
                  Minden autónk rendelkezik kötelező felelősségbiztosítással. CASCO biztosítás szintén része a bérleti díjnak, amely 10% önrészt tartalmaz. 
                </p>
                <p>
                  Kiegészítő biztosítások (pl. önrészcsökkentés, utasbiztosítás) külön díj ellenében igényelhetők. Bérlés előtt részletes tájékoztatást adunk a biztosítási feltételekről.
                </p>
                <p>
                  Baleset vagy káresemény esetén kérjük, azonnal értesítse cégünket a szerződésben található elérhetőségeken.
                </p>
              </div>
            </section>
            
            <Separator className="my-6" />
            
            <section className="mb-10" id="korlatozasok">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Korlátozások és további tudnivalók</h2>
              <div className="prose prose-blue max-w-none text-gray-600 space-y-4">
                <p>
                  Az autóbérlés során az alábbi korlátozások és szabályok érvényesek:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Napi bérlés esetén 300 km, 3 napos bérlés esetén napi 200 km használat van az árban, felette kilométerdíjat számítunk fel (50 Ft/km)</li>
                  <li>Az autókat tisztán adjuk át és tisztán kérjük vissza</li>
                  <li>Dohányozni az autókban szigorúan tilos</li>
                  <li>Háziállat szállítása csak szállítóboxban lehetséges</li>
                  <li>Külföldi használat csak előzetes bejelentés alapján engedélyezett</li>
                </ul>
                <p>
                  A bérlési időtartam meghosszabbítása lehetséges, amennyiben az autó nem foglalt a következő időszakra. A hosszabbítási szándékot legalább 24 órával a bérlés lejárta előtt jelezze telefonon vagy e-mailben.
                </p>
              </div>
            </section>
            
            <div className="bg-gray-50 p-6 rounded-lg mt-8 border border-gray-200" id="foglalas-most">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Foglaljon most</h2>
              <p className="text-gray-600 mb-6">
                Válassza ki a megfelelő autót és foglalja le egyszerűen, gyorsan. Kérdése van? Vegye fel velünk a kapcsolatot telefonon vagy e-mailben!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/#booking">
                    Foglalás
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/#contact">
                    Kapcsolat
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}