"use client";

import Link from "next/link";

export function ClientFooterLinks() {
  return (
    <nav className="space-y-2">
      <Link href="#" scroll={false} onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} className="block text-gray-600 hover:text-blue-600">
        Főoldal
      </Link>
      <Link href="#about" scroll={false} onClick={(e) => {
        e.preventDefault();
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      }} className="block text-gray-600 hover:text-blue-600">
        Rólunk
      </Link>
      <Link href="#cars" scroll={false} onClick={(e) => {
        e.preventDefault();
        document.getElementById('cars')?.scrollIntoView({ behavior: 'smooth' });
      }} className="block text-gray-600 hover:text-blue-600">
        Autóink
      </Link>
      <Link href="#booking" scroll={false} onClick={(e) => {
        e.preventDefault();
        document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
      }} className="block text-gray-600 hover:text-blue-600">
        Foglalás
      </Link>
      <Link href="#contact" scroll={false} onClick={(e) => {
        e.preventDefault();
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }} className="block text-gray-600 hover:text-blue-600">
        Kapcsolat
      </Link>
      <Link href="/berlesi-feltetelek" className="block text-gray-600 hover:text-blue-600">
        Bérlési feltételek
      </Link>
    </nav>
  );
}