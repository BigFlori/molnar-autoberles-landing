import RentalTermsPage from "@/components/pages/rental-terms-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bérlési feltételek | Molnár Autóbérlés",
  description: "Ismerje meg autóbérlési szolgáltatásunk részletes feltételeit. Világos, átlátható és egyszerű bérlési folyamat Kőszegen és környékén.",
};

export default function RentalTerms() {
  return <RentalTermsPage />;
}