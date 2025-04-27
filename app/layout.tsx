import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { StickyMobileCallButton } from "@/components/ui/sticky-mobile-call-button";

// Optimalizált fontbetöltés
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

// Az oldal URL-je környezeti változóból, fallback értékkel
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://molnarautoberles.hu";
const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || "Molnár Autóbérlés";

// SEO metaadatok
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: "%s | Molnár Autóbérlés",
    default: "Molnár Autóbérlés - Autóbérlés egyszerűen Kőszegen",
  },
  description: "Béreljen autót egyszerűen és gyorsan Kőszegen. Megbízható autók, rugalmas feltételek, professzionális szolgáltatás.",
  keywords: ["autóbérlés", "Kőszeg", "bérlés", "autókölcsönzés", "Molnár Autóbérlés"],
  authors: [{ name: companyName }],
  creator: companyName,
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: siteUrl,
    title: "Molnár Autóbérlés - Autóbérlés egyszerűen Kőszegen",
    description: "Béreljen autót egyszerűen és gyorsan Kőszegen. Megbízható autók, rugalmas feltételek, professzionális szolgáltatás.",
    siteName: companyName,
  },
  twitter: {
    card: "summary_large_image",
    title: "Molnár Autóbérlés - Autóbérlés egyszerűen Kőszegen",
    description: "Béreljen autót egyszerűen és gyorsan Kőszegen. Megbízható autók, rugalmas feltételek, professzionális szolgáltatás.",
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Viewport beállítások
export const viewport: Viewport = {
  themeColor: "#3b82f6",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu" className={inter.variable}>
      <body className={inter.className}>
        {children}
        <StickyMobileCallButton />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}