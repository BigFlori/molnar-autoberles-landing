import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import { StickyMobileCallButton } from "@/components/ui/sticky-mobile-call-button";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"
import { layoutMetadata } from "@/config/seo-config";
import { site } from "@/config/site-config";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

// Optimalizált fontbetöltés
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

export const metadata: Metadata = layoutMetadata;

// Viewport beállítások
export const viewport: Viewport = {
  themeColor: "#3b82f6",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" className={inter.variable}>
      <body className={inter.className}>
        <Analytics />
        <Script src={`https://www.google.com/recaptcha/api.js?render=${site.recaptcha.siteKey}`} strategy="beforeInteractive" />
        <Navbar />
        {children}
        <StickyMobileCallButton />
        <Toaster position="top-center" />
        <Footer />
      </body>
    </html>
  );
}
