"use client";

import Link from "next/link";

export function ClientHeroCta() {
  return (
    <Link
      href="#cars"
      className="inline-flex h-11 items-center justify-center rounded-md bg-sky-700 px-8 text-sm font-medium text-white transition-colors hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
      aria-label="Tovább a bérelhető autóinkhoz"
      scroll={false}
      onClick={(e) => {
        e.preventDefault();
        document.getElementById('cars')?.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      Bérelhető autóink
    </Link>
  );
}