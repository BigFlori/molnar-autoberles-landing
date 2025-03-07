import { Car, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { ClientFooterLinks } from "./client-footer-links";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-white pt-12 pb-6">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Cég infó */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Car className="h-6 w-6 text-blue-600" aria-hidden="true" />
              <span className="text-lg font-semibold">Molnár Autóbérlés</span>
            </div>
            <p className="text-gray-600 mb-4">
              Minőségi autóbérlési szolgáltatások Kőszegen és környékén már 2010 óta. 
              Családi vállalkozásként az Ön elégedettsége a legfontosabb számunkra.
            </p>
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="h-4 w-4 text-blue-600" aria-hidden="true" />
              <span className="text-sm text-gray-600">9730 Kőszeg, Fő tér 1.</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Phone className="h-4 w-4 text-blue-600" aria-hidden="true" />
              <Link href="tel:+36301234567" className="text-sm text-gray-600 hover:text-blue-600">
                +36 30 123 4567
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-blue-600" aria-hidden="true" />
              <Link href="mailto:info@molnarautoberles.hu" className="text-sm text-gray-600 hover:text-blue-600">
                info@molnarautoberles.hu
              </Link>
            </div>
          </div>
          
          {/* Gyors linkek - kliens komponensbe kiszervezve az interaktív részek */}
          <div>
            <h3 className="font-semibold mb-4">Oldalak</h3>
            <ClientFooterLinks />
          </div>
          
          {/* Nyitvatartás */}
          <div>
            <h3 className="font-semibold mb-4">Nyitvatartás</h3>
            <dl className="grid grid-cols-2 gap-y-2">
              <dt className="text-gray-600">Hétfő - Péntek:</dt>
              <dd className="text-gray-800">8:00 - 17:00</dd>
              <dt className="text-gray-600">Szombat:</dt>
              <dd className="text-gray-800">9:00 - 13:00</dd>
              <dt className="text-gray-600">Vasárnap:</dt>
              <dd className="text-gray-800">Zárva</dd>
            </dl>
          </div>
        </div>
        
        <div className="border-t pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © {currentYear} Molnár Autóbérlés. Minden jog fenntartva.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="/adatkezeles" className="text-sm text-gray-600 hover:text-blue-600">
                Adatkezelési tájékoztató
              </Link>
              <Link href="/aszf" className="text-sm text-gray-600 hover:text-blue-600">
                ÁSZF
              </Link>
              <Link href="/sutik" className="text-sm text-gray-600 hover:text-blue-600">
                Süti kezelés
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}