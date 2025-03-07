"use client";

import { useState } from "react";
import { Car, Phone, Menu } from "lucide-react";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navItems = [
  { href: "#about", label: "Rólunk" },
  { href: "#cars", label: "Autóink" },
  { href: "#booking", label: "Foglalás" },
  { href: "#contact", label: "Kapcsolat" },
];

export function Navbar() {
  const activeSection = useActiveSection();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center px-4">
        <div className="flex items-center gap-1.5 md:gap-2">
          <Car className="h-5 w-5 md:h-8 md:w-8 text-blue-600" />
          <h1 className="text-base md:text-2xl font-bold text-gray-900">Molnár Autóbérlés</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center flex-1 gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleClick}
              className={cn(
                "text-sm font-medium transition-colors",
                activeSection === item.href.slice(1)
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Phone */}
        <a 
          href="tel:+36301234567" 
          className="hidden md:flex items-center gap-2 text-blue-600 hover:text-blue-700"
        >
          <Phone className="h-5 w-5" />
          <span>+36 30 123 4567</span>
        </a>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-6 ml-auto md:hidden">
          <a 
            href="tel:+36301234567" 
            className="text-blue-600 hover:text-blue-700"
          >
            <Phone className="h-5 w-5" />
          </a>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="text-gray-600 hover:text-gray-900">
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
              <nav className="flex flex-col p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <Car className="h-6 w-6 text-blue-600" />
                    <SheetTitle className="text-lg font-semibold">Molnár Autóbérlés</SheetTitle>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={handleClick}
                      className={cn(
                        "text-lg font-medium transition-colors py-2",
                        activeSection === item.href.slice(1)
                          ? "text-blue-600"
                          : "text-gray-600 hover:text-blue-600"
                      )}
                    >
                      {item.label}
                    </a>
                  ))}
                  <a 
                    href="tel:+36301234567" 
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone className="h-5 w-5" />
                    <span>+36 30 123 4567</span>
                  </a>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}