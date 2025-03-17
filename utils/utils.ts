/**
 * Formázza a magyar telefonszámokat olvashatóbb formátumba
 * Bemenet: +36301234567 vagy 06301234567
 * Kimenet: +36 30 123 4567 vagy 06 30 123 4567
 *
 * @param {string} phoneNumber - A formázandó telefonszám
 * @returns {string} - A formázott telefonszám
 */
export function formatPhoneNumber(phoneNumber?: string): string {
  if (!phoneNumber) return "";

  // Eltávolítjuk a nem numerikus karaktereket, kivéve a + jelet az elején
  const cleaned = phoneNumber.replace(/[^\d+]/g, "");

  // Ellenőrizzük, hogy magyar-e a telefonszám (+36 vagy 06 előtaggal)
  const isHungarian = cleaned.startsWith("+36") || cleaned.startsWith("06");

  if (isHungarian) {
    const prefix = cleaned.startsWith("+36") ? "+36" : "06";

    // Elválasztjuk a prefixet a számtól
    const withoutPrefix = cleaned.startsWith("+36") ? cleaned.substring(3) : cleaned.substring(2);

    if (withoutPrefix.length >= 9) {
      // Formázás: +36 30 123 4567 formátumba
      const serviceProvider = withoutPrefix.substring(0, 2);
      const part1 = withoutPrefix.substring(2, 5);
      const part2 = withoutPrefix.substring(5, 9);

      return `${prefix} ${serviceProvider} ${part1} ${part2}`;
    }
  }

  // Ha nem magyar szám vagy nem megfelelő a formátum, alapértelmezett kezelés
  if (cleaned.startsWith("+")) {
    // Nemzetközi számok kezelése: +XX YYY ZZZ ZZZ
    if (cleaned.length > 3) {
      const countryCode = cleaned.substring(0, 3);
      const rest = cleaned.substring(3);

      // Csoportosítás 3-4 számjegyenként
      const formatted = rest.replace(/(\d{3})(?=\d)/g, "$1 ");

      return `${countryCode} ${formatted}`;
    }
  } else if (cleaned.length > 4) {
    // Egyéb számokra egyszerű space-ek beszúrása 3-4 számjegyenként
    return cleaned.replace(/(\d{4})(?=\d)/g, "$1 ");
  }

  // Ha egyik formázás sem alkalmazható, visszaadjuk a megtisztított verziót
  return cleaned;
}

/**
 * Összeállítja a teljes címet a környezeti változókból a magyar címformátumnak megfelelően
 * @param includeCountry - Meghatározza, hogy az országkód megjelenjen-e (alapértelmezetten nem)
 * @returns A formázott cím string (pl. "9730 Kőszeg, Várkör 61")
 */
export function getFullAddress(includeCountry: boolean = false): string {
  const streetAddress = process.env.NEXT_PUBLIC_COMPANY_STREET_ADDRESS || "";
  const postalCode = process.env.NEXT_PUBLIC_COMPANY_POSTAL_CODE || "";
  const city = process.env.NEXT_PUBLIC_COMPANY_CITY || "";
  const country = process.env.NEXT_PUBLIC_COMPANY_COUNTRY || "";

  // Magyar formátum: "Irányítószám Város, Utca házszám"
  let formattedAddress = "";

  // Irányítószám és város
  if (postalCode || city) {
    formattedAddress += `${postalCode} ${city}`;
  }

  // Utca és házszám
  if (streetAddress) {
    formattedAddress += formattedAddress ? `, ${streetAddress}` : streetAddress;
  }

  // Országkód hozzáadása, ha szükséges
  if (includeCountry && country) {
    formattedAddress += formattedAddress ? `, ${country}` : country;
  }

  return formattedAddress;
}

/**
 * Visszaadja a postai címet külön részekre bontva
 * @returns Cím komponensek objektuma
 */
export function getAddressParts() {
  return {
    streetAddress: process.env.NEXT_PUBLIC_COMPANY_STREET_ADDRESS || "",
    postalCode: process.env.NEXT_PUBLIC_COMPANY_POSTAL_CODE || "",
    city: process.env.NEXT_PUBLIC_COMPANY_CITY || "",
    country: process.env.NEXT_PUBLIC_COMPANY_COUNTRY || "",
  };
}
