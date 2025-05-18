"use client";

import { useState, useEffect, useCallback } from "react";
import { Car, Phone, Menu } from "lucide-react";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import Link from "next/link";
import { formatPhoneNumber } from "@/utils/utils";
import { usePathname, useRouter } from "next/navigation"; // Új importok
import { site } from "@/config/site-config";

const navItems = [
  { href: "#about", label: "Rólunk" },
  { href: "#rental-process", label: "Bérlési folyamat" },
  { href: "#cars", label: "Autóink" },
  { href: "#booking", label: "Foglalás" },
  { href: "#faq", label: "GYIK" },
  { href: "#koszeg", label: "Látnivalók" },
  { href: "#contact", label: "Kapcsolat" },
];

export function Navbar() {
  const activeSection = useActiveSection();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [manualActive, setManualActive] = useState<string | null>(null);
  const phoneNumber = site.company.phone;
  const formattedPhone = formatPhoneNumber(phoneNumber);
  
  // Új: usePathname és useRouter hook-ok használata
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  // Scroll figyelése
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Kezdeti érték beállítása
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Módosított navigációs kezelő
  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    
    if (!href) return;
    
    if (isHomePage) {
      // Főoldalon vagyunk - egyszerű görgetés
      const targetId = href.slice(1);
      setManualActive(targetId);
      
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      
      setTimeout(() => {
        setManualActive(null);
      }, 1000);
    } else {
      // Nem a főoldalon vagyunk - navigáljunk a főoldalra, megjelölve a célszekciót
      router.push(`/${href}`);
    }
    
    // Mobilmenü bezárása
    setIsOpen(false);
  }, [isHomePage, router]);

  // A végső aktív szekció: vagy a manuálisan beállított vagy a hook által meghatározott
  const finalActiveSection = manualActive || activeSection;

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200/50" 
          : "bg-white border-b"
      )}
    >
      <div className="container flex h-16 items-center px-4">
        <Link 
          href="/" 
          className="flex items-center gap-1.5 md:gap-2" 
          onClick={(e) => {
            if (isHomePage) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            // Más oldalon nem kell preventDefault, egyszerűen a főoldalra navigálunk
          }}
        >
          <Car className="h-5 w-5 md:h-6 md:w-6 text-blue-600" aria-hidden="true" />
          <h2 className="text-base md:text-xl font-bold text-gray-900">{site.company.shortName}</h2>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center flex-1 gap-4 xl:gap-6 ml-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleClick}
              className={cn(
                "text-sm font-medium transition-colors relative py-1",
                isHomePage && finalActiveSection === item.href.slice(1)
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              )}
            >
              {item.label}
              {isHomePage && finalActiveSection === item.href.slice(1) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop Phone */}
        <Link 
          href={`tel:${phoneNumber}`}
          className="hidden md:flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          <span>{formattedPhone}</span>
        </Link>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-6 ml-auto md:hidden">
          <Link 
            href={`tel:${phoneNumber}`}
            className="text-blue-600 hover:text-blue-700"
            aria-label="Telefon"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </Link>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="text-gray-600 hover:text-gray-900" aria-label="Menü">
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
              <nav className="flex flex-col p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <Car className="h-6 w-6 text-blue-600" aria-hidden="true" />
                    <SheetTitle className="text-lg font-semibold">{site.company.shortName}</SheetTitle>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={handleClick}
                      className={cn(
                        "text-lg font-medium transition-colors py-2 border-b border-gray-100",
                        isHomePage && finalActiveSection === item.href.slice(1)
                          ? "text-blue-600"
                          : "text-gray-600 hover:text-blue-600"
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link 
                    href={`tel:${phoneNumber}`}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 py-2 mt-4"
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    <span>{formattedPhone}</span>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}