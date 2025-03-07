"use client";

import Link from "next/link";

export function ClientHeroCta() {
  return (
    <Link
      href="#booking"
      className="inline-flex h-11 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      aria-label="Tovább a foglaláshoz"
      scroll={false}
      onClick={(e) => {
        e.preventDefault();
        document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      Foglaljon most
    </Link>
  );
}