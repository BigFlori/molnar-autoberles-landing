import { Car, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import { ClientFooterLinks } from "./client-footer-links"
import { formatPhoneNumber, getFullAddress } from "@/utils/utils"
import { site } from "@/config/site-config"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const phoneNumber = site.company.phone
  const formattedPhone = formatPhoneNumber(phoneNumber)
  const email = site.company.email
  const companyAddress = getFullAddress()
  const companyName = site.company.name
  const companyShortName = site.company.shortName

  return (
    <footer className="bg-slate-900 text-slate-400 pt-14 pb-6">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-sky-700 flex items-center justify-center">
                <Car className="h-4 w-4 text-white" aria-hidden="true" />
              </div>
              <span className="font-poppins text-base font-semibold text-white">
                {companyShortName}
              </span>
            </div>
            <p className="text-sm text-slate-400 mb-5 leading-relaxed">
              Minőségi autóbérlési szolgáltatások Kőszegen és környékén már 2024 óta.
              Családi vállalkozásként az Ön elégedettsége a legfontosabb számunkra.
            </p>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-sky-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-xs text-slate-400 leading-relaxed">{companyAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-sky-500 flex-shrink-0" aria-hidden="true" />
                <Link
                  href={`tel:${phoneNumber}`}
                  className="text-xs text-slate-400 hover:text-white transition-colors"
                >
                  {formattedPhone}
                </Link>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-sky-500 flex-shrink-0" aria-hidden="true" />
                <Link
                  href={`mailto:${email}`}
                  className="text-xs text-slate-400 hover:text-white transition-colors break-all"
                >
                  {email}
                </Link>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-poppins font-semibold text-white mb-5 text-sm">Oldalak</h3>
            <ClientFooterLinks />
          </div>

          {/* Opening hours */}
          <div>
            <h3 className="font-poppins font-semibold text-white mb-5 text-sm">Nyitvatartás</h3>
            <dl className="space-y-2.5 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Hétfő – Péntek</dt>
                <dd className="text-slate-300 font-medium">8:00 – 22:00</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Szombat</dt>
                <dd className="text-slate-300 font-medium">9:00 – 20:00</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Vasárnap</dt>
                <dd className="text-slate-300 font-medium">8:00 – 22:00</dd>
              </div>
            </dl>

            <div className="mt-6 p-4 bg-slate-800 rounded-xl border border-slate-700">
              <p className="text-xs text-slate-400">
                <span className="text-sky-500 font-semibold">24/7</span> telefonos ügyfélszolgálat
                elérhető sürgős esetekre.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-500">
              © {currentYear} {companyName}. Minden jog fenntartva.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-5">
              <Link
                href="/berlesi-feltetelek"
                className="text-xs text-slate-500 hover:text-white transition-colors"
              >
                Bérlési feltételek
              </Link>
              <Link
                href="/aszf-molnarautoberles.pdf"
                target="_blank"
                className="text-xs text-slate-500 hover:text-white transition-colors"
              >
                ÁSZF
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
