import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Statikus vélemények - szerverkomponens
const reviews = [
  {
    id: 1,
    name: "Kovács Péter",
    rating: 5,
    text: "Kiváló szolgáltatás, rugalmas ügyintézés. Az autó tiszta és megbízható volt.",
    date: "2024-02-15",
  },
  {
    id: 2,
    name: "Nagy Andrea",
    rating: 5,
    text: "Már többször béreltem autót tőlük, mindig elégedett voltam. Korrekt árak és professzionális hozzáállás.",
    date: "2024-01-20",
  },
  {
    id: 3,
    name: "Szabó János",
    rating: 5,
    text: "A legjobb autóbérlési tapasztalatom eddig. Gyors és egyszerű folyamat, kedves kiszolgálás.",
    date: "2024-03-05",
  },
];

export function ReviewsSection() {
  return (
    <section 
      id="reviews" 
      className="py-20 bg-white"
      aria-labelledby="reviews-heading"
    >
      <div className="container px-4">
        <h2 
          id="reviews-heading"
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          Ügyfeleink mondták
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4" aria-label={`${review.rating} csillagos értékelés`}>
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{review.text}</p>
                <div className="flex justify-between items-center">
                  <p className="font-semibold">{review.name}</p>
                  <time dateTime={review.date} className="text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString('hu-HU')}
                  </time>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}