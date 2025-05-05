"use client";

import { Button } from "@/components/ui/button";

export function ClientKoszegButton() {
  return (
    <Button
      className="bg-blue-600 hover:bg-blue-700"
      onClick={() => {
        document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      Autóbérlés most
    </Button>
  );
}