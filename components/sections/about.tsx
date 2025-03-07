import { Clock, Shield, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Clock,
    title: "Rugalmas bérlés",
    description: "Napi, heti vagy akár hosszabb távú bérlési lehetőségek",
  },
  {
    icon: Shield,
    title: "Teljes körű biztosítás",
    description: "Minden autónk rendelkezik CASCO biztosítással",
  },
  {
    icon: MapPin,
    title: "Kényelmes helyszín",
    description: "Kőszeg belvárosában, könnyen megközelíthető helyen",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Miért válasszon minket?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <feature.icon className="h-10 w-10 text-blue-600 mb-4" />
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
            A Molnár Autóbérlés 2010 óta áll ügyfelei rendelkezésére Kőszegen. Családi vállalkozásként különös figyelmet fordítunk minden ügyfelünkre, 
            és arra törekszünk, hogy a lehető legjobb szolgáltatást nyújtsuk. Autóinkat rendszeresen szervizeljük és tisztítjuk, 
            hogy Ön mindig megbízható és tiszta járművet kapjon.
          </p>
        </div>
      </div>
    </section>
  );
}