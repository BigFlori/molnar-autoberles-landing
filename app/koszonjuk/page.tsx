import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site-config";
import { generateMetadata, pageSeo } from "@/config/seo-config";

export const metadata: Metadata = generateMetadata(pageSeo.thankYou);

export default function ThankYouPage() {
  return (
    <div className="min-h-[60vh] bg-gradient-to-b from-blue-50 to-white">
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Köszönjük a foglalását!</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700">
                  Foglalási kérelmét megkaptuk. Hamarosan felvesszük Önnel a kapcsolatot a részletek egyeztetéséhez.
                </p>
                <div className="space-y-2 text-gray-700">
                  <p>
                    Kérdés esetén keressen minket telefonon: {" "}
                    <Link href={`tel:${site.company.phone}`} className="text-blue-600 hover:underline">
                      {site.company.phone}
                    </Link>
                  </p>
                  <p>
                    vagy emailben: {" "}
                    <Link href={`mailto:${site.company.email}`} className="text-blue-600 hover:underline">
                      {site.company.email}
                    </Link>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Button asChild>
                    <Link href="/">Vissza a főoldalra</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/#booking">Újabb foglalás indítása</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}


