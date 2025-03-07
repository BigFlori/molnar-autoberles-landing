import { Button } from "@/components/ui/button";
import { Facebook, Instagram } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Kapcsolat</h2>
        <div className="max-w-2xl mx-auto text-center">
          <div className="grid gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Címünk</h3>
              <p className="text-gray-600">9730 Kőszeg, Fő tér 1.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Nyitvatartás</h3>
              <p className="text-gray-600">Hétfő - Péntek: 8:00 - 17:00</p>
              <p className="text-gray-600">Szombat: 9:00 - 13:00</p>
              <p className="text-gray-600">Vasárnap: Zárva</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Elérhetőségeink</h3>
              <p className="text-gray-600">Telefon: +36 30 123 4567</p>
              <p className="text-gray-600">Email: info@molnarberles.hu</p>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}