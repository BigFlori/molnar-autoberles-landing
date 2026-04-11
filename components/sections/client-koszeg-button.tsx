"use client";

import { Button } from "@/components/ui/button";

export function ClientKoszegButton() {
  return (
    <Button
      className="bg-sky-700 hover:bg-sky-800"
      onClick={() => {
        document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      Autóbérlés most
    </Button>
  );
}