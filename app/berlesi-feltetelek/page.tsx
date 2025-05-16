import { Metadata } from "next";
import RentalTermsPage from "@/components/pages/rental-terms-page";
import { RentalTermsSchemaMarkup } from "@/components/schema/rental-terms-schema";

// Az oldal URL-je környezeti változóból, fallback értékkel
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.molnarautoberles.hu";

export const metadata: Metadata = {
  title: "Bérlési feltételek | Molnár Autóbérlés",
  description: "Ismerje meg autóbérlési szolgáltatásunk részletes feltételeit. Világos, átlátható és egyszerű bérlési folyamat Kőszegen és környékén.",
  alternates: {
    canonical: `${siteUrl}/berlesi-feltetelek`,
  },
  keywords: [
    "autóbérlés feltételek", 
    "bérlési dokumentumok", 
    "kaució", 
    "autóbérlés ára", 
    "Kőszeg autóbérlés", 
    "bérlési előírások",
    "autóbérlés biztosítás",
    "kilométer korlátozás"
  ],
};

export default function RentalTerms() {
  return (
    <>
      <RentalTermsPage />
      <RentalTermsSchemaMarkup />
    </>
  );
}