"use client"

import { useState, useEffect, useCallback } from "react"
import { Car, Phone, Menu } from "lucide-react"
import { useActiveSection } from "@/hooks/use-active-section"
import { cn } from "@/lib/utils"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import Link from "next/link"
import { formatPhoneNumber } from "@/utils/utils"
import { usePathname, useRouter } from "next/navigation"
import { site } from "@/config/site-config"

const navItems = [
  { href: "#about", label: "Rólunk" },
  { href: "#rental-process", label: "Bérlési folyamat" },
  { href: "#cars", label: "Autóink" },
  { href: "#booking", label: "Foglalás" },
  { href: "#faq", label: "GYIK" },
  { href: "#koszeg", label: "Látnivalók" },
  { href: "#contact", label: "Kapcsolat" },
]

export function Navbar() {
  const activeSection = useActiveSection()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [manualActive, setManualActive] = useState<string | null>(null)
  const phoneNumber = site.company.phone
  const formattedPhone = formatPhoneNumber(phoneNumber)

  const pathname = usePathname()
  const router = useRouter()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      const href = e.currentTarget.getAttribute("href")
      if (!href) return

      if (isHomePage) {
        const targetId = href.slice(1)
        setManualActive(targetId)
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
        setTimeout(() => setManualActive(null), 1000)
      } else {
        router.push(`/${href}`)
      }
      setIsOpen(false)
    },
    [isHomePage, router]
  )

  const finalActiveSection = manualActive || activeSection

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/70"
          : "bg-white border-b border-slate-100"
      )}
    >
      <div className="container flex h-16 items-center px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 flex-shrink-0"
          onClick={(e) => {
            if (isHomePage) {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
          }}
        >
          <div className="w-8 h-8 rounded-lg bg-sky-700 flex items-center justify-center">
            <Car className="h-4 w-4 text-white" aria-hidden="true" />
          </div>
          <span className="font-poppins text-base md:text-lg font-semibold text-slate-900">
            {site.company.shortName}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center flex-1 gap-1 mx-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleClick}
              className={cn(
                "text-sm font-medium transition-colors relative px-3 py-2 rounded-lg",
                isHomePage && finalActiveSection === item.href.slice(1)
                  ? "text-sky-700 bg-sky-50"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Phone Button */}
        <Link
          href={`tel:${phoneNumber}`}
          className="hidden md:flex items-center gap-2 text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 transition-colors px-4 py-2 rounded-xl flex-shrink-0"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          <span>{formattedPhone}</span>
        </Link>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-3 ml-auto md:hidden">
          <Link
            href={`tel:${phoneNumber}`}
            className="w-9 h-9 rounded-xl bg-sky-700 flex items-center justify-center text-white hover:bg-sky-800 transition-colors"
            aria-label="Telefon"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
          </Link>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="w-9 h-9 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors"
                aria-label="Menü megnyitása"
              >
                <Menu className="h-4 w-4" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[360px] p-0 bg-white">
              <nav className="flex flex-col p-6">
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-8 h-8 rounded-lg bg-sky-700 flex items-center justify-center">
                    <Car className="h-4 w-4 text-white" aria-hidden="true" />
                  </div>
                  <SheetTitle className="font-poppins text-base font-semibold text-slate-900">
                    {site.company.shortName}
                  </SheetTitle>
                </div>

                <div className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={handleClick}
                      className={cn(
                        "text-base font-medium transition-colors py-3 px-3 rounded-lg",
                        isHomePage && finalActiveSection === item.href.slice(1)
                          ? "text-sky-700 bg-sky-50"
                          : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <Link
                    href={`tel:${phoneNumber}`}
                    className="flex items-center gap-3 text-white bg-sky-700 hover:bg-sky-800 transition-colors py-3 px-4 rounded-xl font-semibold text-sm w-full justify-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    <span>{formattedPhone}</span>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
