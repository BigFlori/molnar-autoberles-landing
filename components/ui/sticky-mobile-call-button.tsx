"use client";

import React, { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import Link from "next/link";
import { formatPhoneNumber } from "@/utils/utils";

export function StickyMobileCallButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || "+36301234567";
  const formattedPhone = formatPhoneNumber(phoneNumber);

  // Használjuk a useEffect-et, hogy megbizonyosodjunk róla, kliens oldalon vagyunk
  useEffect(() => {
    setIsClient(true);
    
    // Kezdeti ellenőrzés: alapértelmezetten látszik a gomb
    setIsVisible(true);

    // Ellenőrizzük, hogy látható-e a footer
    const checkFooterVisibility = () => {
      const footer = document.querySelector("footer");
      if (!footer) return false;

      const footerRect = footer.getBoundingClientRect();
      const footerTop = footerRect.top;
      const windowHeight = window.innerHeight;
      
      // Csak akkor rejtjük el a gombot, ha a footer már látható
      // (azaz a footer felső része már belépett a képernyőbe)
      return footerTop < windowHeight;
    };

    // Görgetés kezelése
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isFooterVisible = checkFooterVisibility();
      
      // Ha a footer látható, elrejtjük a gombot
      if (isFooterVisible) {
        setIsVisible(false);
      } else {
        // Egyébként megjelenítjük, kivéve ha lefelé görgetünk és nem vagyunk az oldal tetején
        const isScrollingDown = currentScrollY > lastScrollY;
        const isNotAtTop = currentScrollY > 100;
        
        setIsVisible(!(isScrollingDown && isNotAtTop));
      }
      
      setLastScrollY(currentScrollY);
    };

    // Eseményfigyelő hozzáadása
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Kezdeti ellenőrzés
    handleScroll();

    // Eseményfigyelő eltávolítása
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]); // lastScrollY a függőség, mert felhasználjuk a handleScroll-ban

  // Csak a kliens oldali renderelés után jelenítjük meg
  if (!isClient) return null;

  return (
    <div 
      className={`md:hidden fixed bottom-0 left-0 right-0 transition-transform duration-300 z-40 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Link
        href={`tel:${phoneNumber}`}
        className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 w-full shadow-lg font-medium"
      >
        <Phone className="h-5 w-5" />
        <span>Hívás most: {formattedPhone}</span>
      </Link>
    </div>
  );
}