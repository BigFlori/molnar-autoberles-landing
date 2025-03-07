import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    id: 1,
    name: "Kovács Péter",
    rating: 5,
    text: "Kiváló szolgáltatás, rugalmas ügyintézés. Az autó tiszta és megbízható volt.",
  },
  {
    id: 2,
    name: "Nagy Andrea",
    rating: 5,
    text: "Már többször béreltem autót tőlük, mindig elégedett voltam. Korrekt árak és professzionális hozzáállás.",
  },
  {
    id: 3,
    name: "Szabó János",
    rating: 5,
    text: "A legjobb autóbérlési tapasztalatom eddig. Gyors és egyszerű folyamat, kedves kiszolgálás.",
  },
];

export function ReviewsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Ügyfeleink mondták</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{review.text}</p>
                <p className="font-semibold">{review.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}