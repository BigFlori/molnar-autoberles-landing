"use client"

import { Star } from "lucide-react"
import { Marquee } from "@/components/ui/marquee"
import { BlurFade } from "@/components/ui/blur-fade"

const reviews = [
  {
    id: 1,
    name: "Krepsz Hanna",
    rating: 5,
    text: "Én nagyon meg voltam velük elégedve, nagyon kedvesek. Megbízható és megfizethető. Mindenkinek ajánlom.",
    date: "2025-01-06",
  },
  {
    id: 2,
    name: "Atiska_446",
    rating: 5,
    text: "Megbízható autó meg fizethető áron. Mindenkinek merem ajánlani.",
    date: "2025-01-12",
  },
  {
    id: 3,
    name: "Proksch Edina",
    rating: 5,
    text: "Megbízható · Pontos · Korrekt! Nagyon elégedett voltam a szolgáltatással.",
    date: "2024-12-28",
  },
  {
    id: 4,
    name: "originalzsebe",
    rating: 5,
    text: "Remek autót kaptam, gyors és zökkenőmentes volt az ügyintézés. Ajánlom mindenki figyelmébe aki autót szeretne bérelni.",
    date: "2025-06-11",
  },
  {
    id: 5,
    name: "Máte Kolonics",
    rating: 5,
    text: "Nagyon korrekt és igényes autót tudtunk itt bérelni ajánlom őket bárkinek!",
    date: "2025-07-11",
  },
  {
    id: 6,
    name: "Ákos Dávid",
    rating: 5,
    text: "TOP! Gyors, precíz és korrekt. Autók megbízhatók 5*",
    date: "2025-07-11",
  },
  // Duplicate reviews to fill the marquee
  {
    id: 7,
    name: "Krepsz Hanna",
    rating: 5,
    text: "Én nagyon meg voltam velük elégedve, nagyon kedvesek. Megbízható és megfizethető. Mindenkinek ajánlom.",
    date: "2025-01-06",
  },
  {
    id: 8,
    name: "Atiska_446",
    rating: 5,
    text: "Megbízható autó meg fizethető áron. Mindenkinek merem ajánlani.",
    date: "2025-01-12",
  },
  {
    id: 9,
    name: "Proksch Edina",
    rating: 5,
    text: "Megbízható · Pontos · Korrekt! Nagyon elégedett voltam a szolgáltatással.",
    date: "2024-12-28",
  },
  {
    id: 10,
    name: "originalzsebe",
    rating: 5,
    text: "Remek autót kaptam, gyors és zökkenőmentes volt az ügyintézés. Ajánlom mindenki figyelmébe aki autót szeretne bérelni.",
    date: "2025-06-11",
  },
  {
    id: 11,
    name: "Máte Kolonics",
    rating: 5,
    text: "Nagyon korrekt és igényes autót tudtunk itt bérelni ajánlom őket bárkinek!",
    date: "2025-07-11",
  },
  {
    id: 12,
    name: "Ákos Dávid",
    rating: 5,
    text: "TOP! Gyors, precíz és korrekt. Autók megbízhatók 5*",
    date: "2025-07-11",
  },
]

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  const initials = review.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className="w-72 shrink-0 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col h-56">
      {/* Stars */}
      <div
        className="flex items-center gap-0.5 mb-3"
        aria-label={`${review.rating} csillagos értékelés`}
      >
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
        ))}
      </div>

      {/* Text */}
      <p className="text-slate-600 text-sm leading-relaxed flex-1">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
            <span className="text-sky-800 font-bold text-xs">{initials}</span>
          </div>
          <p className="font-semibold text-slate-900 text-sm">{review.name}</p>
        </div>
        <time dateTime={review.date} className="text-xs text-slate-400">
          {new Date(review.date).toLocaleDateString("hu-HU")}
        </time>
      </div>
    </div>
  )
}

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="py-24 bg-slate-50 overflow-hidden"
      aria-labelledby="reviews-heading"
    >
      <div className="container px-4">
        <BlurFade inView duration={0.5}>
          <div className="text-center mb-12">
            <span className="inline-block text-sky-700 text-sm font-semibold tracking-wider uppercase mb-3">
              Vélemények
            </span>
            <h2
              id="reviews-heading"
              className="font-poppins text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              Ügyfeleink mondták
            </h2>
            <p className="text-slate-500 text-lg">
              Valós visszajelzések elégedett ügyfeleinktől
            </p>
          </div>
        </BlurFade>
      </div>

      {/* Full-width marquee (outside container) */}
      <Marquee
        pauseOnHover
        className="[--duration:60s] py-2"
        repeat={2}
      >
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </Marquee>

      {/* Google rating note */}
      <BlurFade inView delay={0.2} duration={0.5}>
        <div className="text-center mt-8">
          <p className="text-slate-400 text-sm">
            Minden vélemény a Google Maps-ről származik
          </p>
        </div>
      </BlurFade>
    </section>
  )
}
