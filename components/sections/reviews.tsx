import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Statikus vélemények - szerverkomponens
const reviews = [
  {
    id: 1,
    name: "Krepsz Hanna",
    rating: 5,
    text: "Én nagyon meg voltam velük elégedve,nagyon kedvesek. Megbízható és megfizethető. Mindenkinek ajánlom.",
    date: "2025-01-06",
  },
  {
    id: 2,
    name: "Atiska_446",
    rating: 5,
    text: "Megbízható autó meg fizethető áron. Mindenkinek merem ajánlani 🤝",
    date: "2025-01-12",
  },
  {
    id: 3,
    name: "Proksch Edina",
    rating: 5,
    text: "Megbízható-pontos -korrekt‼️",
    date: "2024-12-28",
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
            <Card key={review.id}>
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