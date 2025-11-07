import { Clock, Shield, MapPin, Wrench, Star, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Server komponens, statikus tartalommal
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
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white" aria-labelledby="about-heading">
      <div className="container px-4">
        <h2 id="about-heading" className="text-3xl font-bold text-center text-gray-900 mb-8">
          Miért válasszon minket?
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => (
            <Card key={feature.title} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <feature.icon className="h-10 w-10 text-blue-600 mb-4" aria-hidden="true" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Rólunk</h3>
          <div className="space-y-4 text-gray-600">
            <p>
              A Molnár Autóbérlés 2024 óta áll ügyfelei rendelkezésére Kőszegen és környékén. Családi vállalkozásként
              indultunk, azzal a céllal, hogy az autóbérlést egyszerűvé és stresszmentessé tegyük mindenki számára.
            </p>
            <p>
              Különös figyelmet fordítunk minden ügyfelünkre, és arra törekszünk, hogy a lehető legjobb szolgáltatást
              nyújtsuk. Autóinkat rendszeresen szervizeljük és tisztítjuk, hogy Ön mindig megbízható és tiszta járművet
              kapjon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
