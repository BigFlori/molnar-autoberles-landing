"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type CarContextType = {
  selectedCar: string;
  setSelectedCar: (car: string) => void;
};

// Létrehozzuk a contextet
const CarContext = createContext<CarContextType | undefined>(undefined);

// Provider komponens
export function CarProvider({ children }: { children: ReactNode }) {
  const [selectedCar, setSelectedCar] = useState("");

  return (
    <CarContext.Provider value={{ selectedCar, setSelectedCar }}>
      {children}
    </CarContext.Provider>
  );
}

// Custom hook a Context használatához
export function useCarSelection() {
  const context = useContext(CarContext);
  if (context === undefined) {
    throw new Error('useCarSelection must be used within a CarProvider');
  }
  return context;
}