"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "motion/react"
import { ArrowRight, Phone } from "lucide-react"
import { DotPattern } from "@/components/ui/dot-pattern"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { BlurFade } from "@/components/ui/blur-fade"

const rotatingWords = ["egyszerűen", "megbízhatóan", "rugalmasan"]

function RotatingWord() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % rotatingWords.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="inline-block overflow-hidden h-[1.35em] align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={rotatingWords[index]}
          className="block text-sky-400"
          initial={{ y: -52, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: 52, opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          {rotatingWords[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

const stats = [
  { value: "2024", label: "óta működünk" },
  { value: "30 km", label: "körzetben kiszállítunk" },
  { value: "24/7", label: "ügyfélszolgálat" },
]

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Photo */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=1600&q=80"
          alt="Autóbérlés Kőszegen — Molnár Autóbérlés"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Dot Pattern overlay */}
      <DotPattern
        width={24}
        height={24}
        cx={1}
        cy={1}
        cr={1.2}
        className="text-white/[0.08] z-10"
      />

      {/* Content */}
      <div className="container px-4 relative z-20 py-20">
        <div className="max-w-2xl">
          {/* Heading */}
          <BlurFade delay={0.1} duration={0.5}>
            <h1 className="font-poppins font-bold text-white leading-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}>
              Autóbérlés{" "}
              <RotatingWord />
              <br />
              <span className="text-white/80">Kőszegen</span>
            </h1>
          </BlurFade>

          {/* Subtitle */}
          <BlurFade delay={0.2} duration={0.5}>
            <p className="text-lg text-white/75 mb-10 max-w-lg leading-relaxed">
              Megbízható autók, rugalmas feltételek, személyes kiszolgálás.
              Fedezze fel Kőszeget és környékét a mi autóinkkal!
            </p>
          </BlurFade>

          {/* CTAs */}
          <BlurFade delay={0.3} duration={0.5}>
            <div className="flex flex-wrap gap-4 mb-14">
              <ShimmerButton
                background="rgba(3, 105, 161, 1)"
                shimmerColor="#7dd3fc"
                shimmerDuration="2.5s"
                borderRadius="12px"
                className="px-7 py-3 text-sm font-semibold gap-2"
                onClick={() =>
                  document.getElementById("cars")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Bérelhető autóink
                <ArrowRight className="h-4 w-4" />
              </ShimmerButton>

              <Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border border-white/40 bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition-all duration-200"
              >
                <Phone className="h-4 w-4" />
                Kapcsolatfelvétel
              </Link>
            </div>
          </BlurFade>

          {/* Stats */}
          <BlurFade delay={0.4} duration={0.5}>
            <div className="flex flex-wrap gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col bg-white/[0.12] backdrop-blur-sm rounded-xl px-5 py-3.5 border border-white/20"
                >
                  <span className="text-xl font-bold text-white font-poppins">{stat.value}</span>
                  <span className="text-xs text-white/60 mt-0.5">{stat.label}</span>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </div>

    </section>
  )
}
