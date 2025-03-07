import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Mail, Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import { ClientContactMap } from "./client-contact-map";

export function ContactSection() {
  return (
    <section 
      id="contact" 
      className="py-20 bg-white"
      aria-labelledby="contact-heading"
    >
      <div className="container px-4">
        <h2 
          id="contact-heading"
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          Kapcsolat
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-600 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Címünk</h3>
                  <p className="text-gray-600">9730 Kőszeg, Fő tér 1.</p>
                  <a 
                    href="https://goo.gl/maps/YOUR_GOOGLE_MAPS_LINK" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Megtekintés térképen
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-blue-600 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Nyitvatartás</h3>
                  <dl className="space-y-1">
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Hétfő - Péntek:</dt>
                      <dd className="text-gray-800 font-medium">8:00 - 17:00</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Szombat:</dt>
                      <dd className="text-gray-800 font-medium">9:00 - 13:00</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Vasárnap:</dt>
                      <dd className="text-gray-800 font-medium">Zárva</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-600 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Telefon</h3>
                  <Link 
                    href="tel:+36301234567" 
                    className="text-gray-600 hover:text-blue-600"
                  >
                    +36 30 123 4567
                  </Link>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-600 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <Link 
                    href="mailto:info@molnarautoberles.hu" 
                    className="text-gray-600 hover:text-blue-600"
                  >
                    info@molnarautoberles.hu
                  </Link>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-3">Kövessen minket</h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook oldal">
                      <Facebook className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram profil">
                      <Instagram className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Google Maps beágyazás - kliens komponensbe kiszervezve */}
          <ClientContactMap />
        </div>
      </div>
    </section>
  );
}