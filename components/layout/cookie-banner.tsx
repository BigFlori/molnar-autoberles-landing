"use client"

import { useState, useEffect, useRef } from "react"
import { Cookie, Shield, BarChart2, Megaphone, X, ChevronDown, ChevronUp, ExternalLink } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const STORAGE_KEY = "cookie-consent"
const SESSION_KEY = "cookie-dismissed"

type ConsentValue = {
  necessary: true
  analytics: boolean
  marketing: boolean
}

const categories = [
  {
    key: "necessary" as const,
    icon: Shield,
    label: "Szükséges",
    description: "Az oldal működéséhez elengedhetetlen (munkamenet, biztonság). Nem kapcsolható ki.",
    always: true,
  },
  {
    key: "analytics" as const,
    icon: BarChart2,
    label: "Analitika",
    description: "Google Analytics – anonim látogatottsági adatok gyűjtése fejlesztési célból.",
    always: false,
  },
  {
    key: "marketing" as const,
    icon: Megaphone,
    label: "Marketing",
    description: "Remarketing és személyre szabott hirdetések megjelenítéséhez.",
    always: false,
  },
]

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const [consent, setConsent] = useState({ analytics: true, marketing: false })
  const bannerRef = useRef<HTMLDivElement>(null)

  // Show banner if no decision has been made yet
  useEffect(() => {
    setIsMounted(true)
    const stored = localStorage.getItem(STORAGE_KEY)
    const dismissed = sessionStorage.getItem(SESSION_KEY)
    if (!stored && !dismissed) {
      const t = setTimeout(() => setIsVisible(true), 500)
      return () => clearTimeout(t)
    }
  }, [])

  // Switch between dark/light theme based on whether the hero is behind the banner
  useEffect(() => {
    function check() {
      const hero = document.querySelector<HTMLElement>("#hero")
      if (!hero) {
        setIsDark(false)
        return
      }
      // Switch as soon as a light section appears behind the TOP of the banner.
      // The banner occupies the bottom N px of the screen, so we offset by its height.
      const bannerHeight = bannerRef.current?.offsetHeight ?? 180
      const heroBottom = hero.getBoundingClientRect().bottom
      setIsDark(heroBottom >= window.innerHeight - bannerHeight)
    }

    check()
    window.addEventListener("scroll", check, { passive: true })
    window.addEventListener("resize", check, { passive: true })
    return () => {
      window.removeEventListener("scroll", check)
      window.removeEventListener("resize", check)
    }
  }, [])

  function save(value: ConsentValue) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
    setIsVisible(false)
  }

  function handleDismiss() {
    sessionStorage.setItem(SESSION_KEY, "1")
    setIsVisible(false)
  }

  function handleAcceptAll() {
    save({ necessary: true, analytics: true, marketing: true })
  }

  function handleNecessaryOnly() {
    save({ necessary: true, analytics: false, marketing: false })
  }

  function handleSaveCustom() {
    save({ necessary: true, ...consent })
  }

  if (!isMounted) return null

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 flex justify-center px-0 md:px-4 md:pb-4 transition-all duration-500 ease-out",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      )}
    >
      <div
        ref={bannerRef}
        className={cn(
          "w-full md:max-w-xl backdrop-blur-2xl shadow-2xl md:rounded-2xl overflow-hidden transition-colors duration-300",
          isDark
            ? "bg-slate-900/85 border border-white/10"
            : "bg-white/92 border border-slate-200/80"
        )}
      >
        {/* Top accent line */}
        <div className="h-0.5 w-full bg-gradient-to-r from-sky-500 via-sky-400 to-transparent" />

        <div className="p-4 md:p-5 flex flex-col gap-3">

          {/* Header */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className={cn(
                "w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border",
                isDark
                  ? "bg-sky-600/20 border-sky-500/30"
                  : "bg-sky-50 border-sky-200"
              )}>
                <Cookie className={cn("h-3.5 w-3.5", isDark ? "text-sky-400" : "text-sky-600")} />
              </div>
              <h2 className={cn(
                "font-poppins text-sm font-semibold",
                isDark ? "text-white" : "text-slate-900"
              )}>
                Süti (cookie) beállítások
              </h2>
            </div>
            <button
              onClick={handleDismiss}
              className={cn(
                "transition-colors shrink-0",
                isDark ? "text-slate-500 hover:text-slate-300" : "text-slate-400 hover:text-slate-600"
              )}
              aria-label="Bezárás"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Description */}
          <p className={cn("text-xs leading-relaxed", isDark ? "text-slate-400" : "text-slate-500")}>
            Sütiket használunk az oldal működéséhez, látogatottsági statisztikák gyűjtéséhez és
            személyre szabott tartalom megjelenítéséhez. Bővebben az{" "}
            <Link
              href="/berlesi-feltetelek"
              className={cn(
                "transition-colors inline-flex items-center gap-0.5 underline underline-offset-2",
                isDark ? "text-sky-400/80 hover:text-sky-400" : "text-sky-600/80 hover:text-sky-700"
              )}
            >
              adatkezelési tájékoztatóban
              <ExternalLink className="h-2.5 w-2.5" />
            </Link>
            .
          </p>

          {/* Expandable categories */}
          <div>
            <button
              onClick={() => setExpanded((v) => !v)}
              className={cn(
                "flex items-center gap-1 text-[11px] font-medium transition-colors",
                isDark ? "text-sky-400/80 hover:text-sky-400" : "text-sky-600/80 hover:text-sky-700"
              )}
            >
              {expanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
              {expanded ? "Kategóriák elrejtése" : "Kategóriák részletezése"}
            </button>

            {expanded && (
              <div className="mt-2.5 flex flex-col gap-1.5">
                {categories.map(({ key, icon: Icon, label, description, always }) => (
                  <div
                    key={key}
                    className={cn(
                      "flex items-center gap-2.5 rounded-xl px-3 py-2.5 border",
                      isDark
                        ? "bg-white/5 border-white/8"
                        : "bg-slate-50 border-slate-200/60"
                    )}
                  >
                    <Icon className={cn("h-3.5 w-3.5 shrink-0", isDark ? "text-slate-400" : "text-slate-400")} />
                    <div className="flex-1 min-w-0">
                      <p className={cn("text-xs font-semibold", isDark ? "text-white" : "text-slate-800")}>
                        {label}
                      </p>
                      <p className={cn("text-[11px] leading-snug mt-0.5", isDark ? "text-slate-500" : "text-slate-500")}>
                        {description}
                      </p>
                    </div>
                    <div className="shrink-0">
                      {always ? (
                        <span className={cn(
                          "text-[10px] font-medium px-1.5 py-0.5 rounded-full whitespace-nowrap border",
                          isDark
                            ? "text-sky-400 bg-sky-400/10 border-sky-400/20"
                            : "text-sky-600 bg-sky-50 border-sky-200"
                        )}>
                          Mindig aktív
                        </span>
                      ) : (
                        <button
                          role="switch"
                          aria-checked={consent[key as keyof typeof consent]}
                          onClick={() =>
                            setConsent((prev) => ({ ...prev, [key]: !prev[key as keyof typeof consent] }))
                          }
                          className={cn(
                            "relative w-8 h-[18px] rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
                            consent[key as keyof typeof consent] ? "bg-sky-600" : isDark ? "bg-slate-600" : "bg-slate-300"
                          )}
                        >
                          <span
                            className={cn(
                              "absolute top-0.5 left-0.5 w-3.5 h-3.5 bg-white rounded-full shadow transition-transform duration-200",
                              consent[key as keyof typeof consent] ? "translate-x-[14px]" : "translate-x-0"
                            )}
                          />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <button
              onClick={handleAcceptAll}
              className="flex-1 bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold px-3 py-2 rounded-xl transition-colors duration-150"
            >
              Összes elfogadása
            </button>
            {expanded ? (
              <button
                onClick={handleSaveCustom}
                className={cn(
                  "flex-1 text-xs font-medium px-3 py-2 rounded-xl transition-colors duration-150 border",
                  isDark
                    ? "bg-white/10 hover:bg-white/15 border-white/15 text-white"
                    : "bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-700"
                )}
              >
                Beállítások mentése
              </button>
            ) : (
              <button
                onClick={handleNecessaryOnly}
                className={cn(
                  "flex-1 text-xs font-medium px-3 py-2 rounded-xl transition-colors duration-150 border",
                  isDark
                    ? "bg-white/10 hover:bg-white/15 border-white/15 text-white"
                    : "bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-700"
                )}
              >
                Csak szükséges
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}
