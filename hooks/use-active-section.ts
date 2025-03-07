"use client";

import { useState, useEffect } from "react";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Definiálja az elemeket, amelyeket figyelni szeretnénk
    const sections = ["hero", "about", "cars", "booking", "reviews", "contact"];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-10% 0px -90% 0px", // Középre súlyozva
        threshold: 0.1, // 10% látható terület
      }
    );

    // Regisztrálja az observer-t minden szekcióra
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    // Hash változásra figyelés
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        setActiveSection(hash.substring(1));
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    
    // Kezdeti érték beállítása scroll pozíció alapján
    const checkScroll = () => {
      let current = "";
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // A teljes képernyő közepén és felette van a szekció
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            current = section;
          }
        }
      });
      
      if (current) {
        setActiveSection(current);
      }
    };
    
    checkScroll();
    window.addEventListener("scroll", checkScroll);

    // Cleanup
    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          observer.unobserve(element);
        }
      });
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return activeSection;
}