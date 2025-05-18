export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.molnarautoberles.hu",
  company: {
    name: process.env.NEXT_PUBLIC_COMPANY_NAME || "Molnár Autóbérlés Kőszeg",
    shortName: process.env.NEXT_PUBLIC_COMPANY_SHORT_NAME || "Molnár Autóbérlés",
    streetAddress: process.env.NEXT_PUBLIC_COMPANY_STREET_ADDRESS || "Várkör 61.",
    postalCode: process.env.NEXT_PUBLIC_COMPANY_POSTAL_CODE || "9730",
    city: process.env.NEXT_PUBLIC_COMPANY_CITY || "Kőszeg",
    country: process.env.NEXT_PUBLIC_COMPANY_COUNTRY || "HU",
    phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "+36306991993",
    email: process.env.NEXT_PUBLIC_INFO_MAIL || "info@molnarautoberles.hu",
    foundingYear: 2024,
  },
  social: {
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://www.facebook.com/molnarautoberles",
  },
  maps: {
    embedUrl:
      process.env.NEXT_PUBLIC_MAP_EMBED_URL ||
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.250811360186!2d16.541176929354005!3d47.38753901802099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476ea3f7a2b947a7%3A0x77671a1334e75763!2zTW9sbsOhciBBdXTDs2LDqXJsw6lzIEvFkXN6ZWc!5e0!3m2!1shu!2shu!4v1741433708650!5m2!1shu!2shu",
    googleMapsUrl: process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL || "https://maps.app.goo.gl/h2r5jA48hfqYW1Gu5",
  },
  recaptcha: {
    siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
  },
};