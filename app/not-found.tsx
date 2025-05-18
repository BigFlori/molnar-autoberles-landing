import Link from "next/link";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Az oldal nem található",
  description: "Az általad keresett oldal nem található. Térj vissza a főoldalra és folytasd a böngészést.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="container max-w-md text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-9xl font-bold text-blue-600">404</h1>
            <h2 className="text-3xl font-semibold text-gray-900">Oldal nem található</h2>
            <p className="text-muted-foreground">
              Az általad keresett oldal nem létezik vagy eltávolításra került.
            </p>
          </div>
          
          <div className="w-full max-w-xs mx-auto h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent my-8" />
          
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Térj vissza a főoldalra és fedezd fel autóbérlési szolgáltatásainkat.
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link href="/">
                <ArrowLeft className="w-4 h-4" />
                <span>Vissza a főoldalra</span>
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}