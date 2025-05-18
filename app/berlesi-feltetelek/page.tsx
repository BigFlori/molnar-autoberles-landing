import { Metadata } from "next";
import RentalTermsPage from "@/components/pages/rental-terms-page";
import { RentalTermsSchemaMarkup } from "@/components/schema/rental-terms-schema";
import { generateMetadata, pageSeo } from "@/config/seo-config";

export const metadata: Metadata = generateMetadata(pageSeo.rentalTerms);

export default function RentalTerms() {
  return (
    <>
      <RentalTermsPage />
      <RentalTermsSchemaMarkup />
    </>
  );
}