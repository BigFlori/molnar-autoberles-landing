"use client"

import { Facebook, Mail, Phone, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { ClientContactMap } from "./client-contact-map"
import { formatPhoneNumber, getFullAddress } from "@/utils/utils"
import { site } from "@/config/site-config"
import { BlurFade } from "@/components/ui/blur-fade"

export function ContactSection() {
  const phoneNumber = site.company.phone
  const formattedPhone = formatPhoneNumber(phoneNumber)
  const email = site.company.email
  const facebookUrl = site.social.facebook
  const companyAddress = getFullAddress()
  const googleMapsUrl = site.maps.googleMapsUrl

  return (
    <section
      id="contact"
      className="py-24 bg-slate-50"
      aria-labelledby="contact-heading"
    >
      <div className="container px-4">
        {/* Header */}
        <BlurFade inView duration={0.5}>
          <div className="text-center mb-14">
            <span className="inline-block text-sky-700 text-sm font-semibold tracking-wider uppercase mb-3">
              Elérhetőség
            </span>
            <h2
              id="contact-heading"
              className="font-poppins text-3xl md:text-4xl font-bold text-slate-900 mb-4"
            >
              Kapcsolat
            </h2>
            <p className="text-slate-500 text-lg">
              Keressen minket bizalommal!
            </p>
          </div>
        </BlurFade>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Left column */}
            <BlurFade inView delay={0.1} duration={0.5}>
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6 h-full">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="h-5 w-5 text-sky-700" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-slate-900 mb-1.5">Címünk</h3>
                    <p className="text-slate-600 text-sm mb-1">{companyAddress}</p>
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-700 hover:text-sky-800 text-sm font-medium hover:underline"
                    >
                      Megtekintés térképen →
                    </a>
                  </div>
                </div>

                {/* Opening hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="h-5 w-5 text-sky-700" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-poppins font-semibold text-slate-900 mb-1.5">Nyitvatartás</h3>
                    <dl className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <dt className="text-slate-500">Hétfő – Péntek</dt>
                        <dd className="text-slate-900 font-medium">8:00 – 22:00</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-slate-500">Szombat</dt>
                        <dd className="text-slate-900 font-medium">9:00 – 20:00</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-slate-500">Vasárnap</dt>
                        <dd className="text-slate-900 font-medium">8:00 – 22:00</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </BlurFade>

            {/* Right column */}
            <BlurFade inView delay={0.2} duration={0.5}>
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6 h-full">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="h-5 w-5 text-sky-700" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-slate-900 mb-1.5">Telefon</h3>
                    <Link
                      href={`tel:${phoneNumber}`}
                      className="text-sky-700 hover:text-sky-800 font-medium hover:underline text-sm"
                    >
                      {formattedPhone}
                    </Link>
                    <p className="text-slate-500 text-xs mt-1">24/7 elérhető</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="h-5 w-5 text-sky-700" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-slate-900 mb-1.5">Email</h3>
                    <Link
                      href={`mailto:${email}`}
                      className="text-sky-700 hover:text-sky-800 font-medium hover:underline text-sm break-all"
                    >
                      {email}
                    </Link>
                  </div>
                </div>

                {/* Social */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Facebook className="h-5 w-5 text-sky-700" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-slate-900 mb-1.5">Kövessen minket</h3>
                    {facebookUrl && (
                      <a
                        href={facebookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-700 hover:text-sky-800 font-medium hover:underline text-sm"
                        aria-label="Facebook oldal"
                      >
                        Facebook oldal →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Map */}
          <BlurFade inView delay={0.3} duration={0.5}>
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <ClientContactMap />
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
