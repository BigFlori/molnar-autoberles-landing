"use client";

import { useState, useEffect, useRef } from "react";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastUpdateRef = useRef(0);

  useEffect(() => {
    // Szekciók listája
    const sections = [
      "hero", 
      "about", 
      "koszeg", 
      "rental-process", 
      "cars", 
      "booking", 
      "faq", 
      "reviews", 
      "contact"
    ];
    
    // Debounce funkció - csak bizonyos idő után változtatjuk az aktív szekciót
    // Ez megakadályozza a gyors váltakozást (flickeringet)
    const debouncedSetActiveSection = (sectionId: string) => {
      const now = Date.now();
      
      // Csak akkor állítjuk be az új szekciót, ha:
      // 1. Először történik beállítás, vagy
      // 2. Legalább 300ms eltelt az utolsó beállítás óta
      if (activeSection === "" || now - lastUpdateRef.current > 300) {
        // Ha már van egy beállított timeout, akkor töröljük
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        
        // Új timeout beállítása - 50ms késleltetéssel állítjuk be az aktív szekciót
        timeoutRef.current = setTimeout(() => {
          setActiveSection(sectionId);
          lastUpdateRef.current = Date.now();
        }, 50);
      }
    };
    
    // Scroll eseménykezelő
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      // Minden szekcióra kiszámoljuk, hogy mennyire látható
      let bestSection = "";
      let bestVisibility = 0;
      
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (!element) return;
        
        const rect = element.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;
        
        // A szekció mennyire van a viewportban
        // 1.0 = teljesen látható, 0.0 = nem látható
        const start = Math.max(sectionTop, window.scrollY);
        const end = Math.min(sectionBottom, window.scrollY + window.innerHeight);
        const visibility = Math.max(0, end - start) / rect.height;
        
        // A képernyő közepén lévő szekciók előnyt élveznek
        const distanceFromCenter = Math.abs(sectionTop + rect.height / 2 - scrollPosition);
        const normalizedDistance = 1 - Math.min(distanceFromCenter / window.innerHeight, 1);
        
        // A végső súlyozás a láthatóság és a képernyő közepétől való távolság kombinációja
        const score = visibility * 0.7 + normalizedDistance * 0.3;
        
        if (score > bestVisibility) {
          bestVisibility = score;
          bestSection = sectionId;
        }
      });
      
      // Csak akkor módosítunk, ha van jó szekció
      if (bestSection && bestVisibility > 0.1) {
        debouncedSetActiveSection(bestSection);
      }
    };
    
    // Figyelünk a scroll eseményekre
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Kezdeti beállítás
    handleScroll();
    
    // Hash változásra is figyelünk
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.substring(1);
        if (sections.includes(sectionId)) {
          setActiveSection(sectionId);
          lastUpdateRef.current = Date.now();
        }
      }
    };
    
    window.addEventListener("hashchange", handleHashChange);
    
    // Tisztító funkciókat adjuk vissza
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [activeSection]);

  return activeSection;
}