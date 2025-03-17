import { Clock, Shield, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Server komponens, statikus tartalommal
const features = [
  {
    icon: Clock,
    title: "Rugalmas bérlés",
    description: "Napi, heti vagy akár hosszabb távú bérlési lehetőségek",
  },
  {
    icon: Shield,
    title: "Megfizethető bérlés",
    description:
      "Autóink kifogástalan állapotban, kedvező áron bérelhetők, hosszabb távú bérlés esetén pedig egyedi árakat biztosítunk.",
  },
  {
    icon: MapPin,
    title: "Kőszeg",
    description: "Kőszeg belvárosában, könnyen megközelíthető helyen",
  },
  {
    icon: MapPin,
    title: "Tele tank",
    description:
      "Autóinkat frissen takarítva, tele tankolva kapod meg. Kérjük vigyázz rá, hisz ugyanúgy tisztán és tele tankkal várjuk vissza.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white" aria-labelledby="about-heading">
      <div className="container px-4">
        <h2 id="about-heading" className="text-3xl font-bold text-center text-gray-900 mb-12">
          Miért válasszon minket?
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title}>
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
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A Molnár Autóbérlés 2024 óta áll ügyfelei rendelkezésére Kőszegen. Különös figyelmet
            fordítunk minden ügyfelünkre, és arra törekszünk, hogy a lehető legjobb szolgáltatást nyújtsuk. Autóinkat
            rendszeresen szervizeljük és tisztítjuk, hogy Ön mindig megbízható és tiszta járművet kapjon.
          </p>
        </div>
      </div>
    </section>
  );
}
