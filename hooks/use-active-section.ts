"use client";

import { useState, useEffect } from "react";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    
    const observer = new IntersectionObserver(
      (entries) => {
        let maxVisibility = 0;
        let mostVisibleSection = "";

        entries.forEach((entry) => {
          const boundingRect = entry.boundingClientRect;
          const windowHeight = window.innerHeight;
          
          // Calculate how much of the section is visible in the viewport
          const visibleHeight = Math.min(boundingRect.bottom, windowHeight) - 
                              Math.max(boundingRect.top, 0);
          const visibility = visibleHeight / boundingRect.height;

          if (visibility > maxVisibility) {
            maxVisibility = visibility;
            mostVisibleSection = entry.target.id;
          }
        });

        if (mostVisibleSection) {
          setActiveSection(mostVisibleSection);
        }
      },
      {
        threshold: Array.from({ length: 11 }, (_, i) => i / 10), // 0, 0.1, 0.2, ..., 1.0
        rootMargin: "-10% 0px -10% 0px"
      }
    );

    sections.forEach((section) => observer.observe(section));

    // Kezdeti aktív szekció beállítása
    const setInitialActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentSection = "";
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (scrollPosition >= sectionTop && 
            scrollPosition <= sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    setInitialActiveSection();
    window.addEventListener("scroll", setInitialActiveSection);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", setInitialActiveSection);
    };
  }, []);

  return activeSection;
}