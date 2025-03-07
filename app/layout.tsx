import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

// Optimalizált fontbetöltés
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

// SEO metaadatok
export const metadata: Metadata = {
  metadataBase: new URL("https://molnarautoberles.hu"),
  title: {
    template: "%s | Molnár Autóbérlés",
    default: "Molnár Autóbérlés - Autóbérlés egyszerűen Kőszegen",
  },
  description: "Béreljen autót egyszerűen és gyorsan Kőszegen. Megbízható autók, rugalmas feltételek, professzionális szolgáltatás.",
  keywords: ["autóbérlés", "Kőszeg", "bérlés", "autókölcsönzés", "Molnár Autóbérlés"],
  authors: [{ name: "Molnár Autóbérlés" }],
  creator: "Molnár Autóbérlés",
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: "https://molnarautoberles.hu",
    title: "Molnár Autóbérlés - Autóbérlés egyszerűen Kőszegen",
    description: "Béreljen autót egyszerűen és gyorsan Kőszegen. Megbízható autók, rugalmas feltételek, professzionális szolgáltatás.",
    siteName: "Molnár Autóbérlés",
    images: [
      {
        url: "https://molnarautoberles.hu/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Molnár Autóbérlés Kőszeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Molnár Autóbérlés - Autóbérlés egyszerűen Kőszegen",
    description: "Béreljen autót egyszerűen és gyorsan Kőszegen. Megbízható autók, rugalmas feltételek, professzionális szolgáltatás.",
    images: ["https://molnarautoberles.hu/og-image.jpg"],
  },
  alternates: {
    canonical: "https://molnarberles.hu",
  },
  robots: {
    index: true,
    follow: true,
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
        <Toaster position="top-center" />
      </body>
    </html>
  );
}