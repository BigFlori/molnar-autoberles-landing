'use server';

import nodemailer from 'nodemailer';
import { z } from 'zod';

// Validációs séma
const bookingSchema = z.object({
  name: z.string().min(3, { message: "A név legalább 3 karakter hosszú legyen" }),
  email: z.string().email({ message: "Érvénytelen email cím" }),
  phone: z.string().min(9, { message: "Érvénytelen telefonszám" }),
  car: z.string().min(1, { message: "Kérjük válasszon autót" }),
  startDate: z.string().min(1, { message: "Kérjük válasszon kezdő dátumot" }),
  endDate: z.string().min(1, { message: "Kérjük válasszon befejező dátumot" }),
  message: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export async function sendEmail(formData: BookingFormData) {
  try {
    // Validálás
    const result = bookingSchema.safeParse(formData);
    if (!result.success) {
      return {
        success: false,
        error: "Érvénytelen adatok",
        details: result.error.format()
      };
    }
    
    const { name, email, phone, car, startDate, endDate, message } = result.data;
    
    // Email szöveg összeállítása
    const emailText = `
      Új foglalási kérelem érkezett:
      
      Név: ${name}
      Email: ${email}
      Telefon: ${phone}
      Választott autó: ${car}
      Bérlés kezdete: ${startDate}
      Bérlés vége: ${endDate}
      Megjegyzés: ${message || "Nincs megjegyzés"}
    `;
    
    // Email küldése (konfiguráció szükséges)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      // TLS beállítások (ha szükséges)
      tls: {
        rejectUnauthorized: true
      }
    });

    // Részletes naplózás debuggoláshoz
    // console.log("Email küldési kísérlet a következő konfigurációval:", {
    //   host: process.env.SMTP_HOST,
    //   port: process.env.SMTP_PORT,
    //   secure: process.env.SMTP_SECURE === 'true',
    //   user: process.env.SMTP_USER ? 'beállítva' : 'nincs beállítva',
    //   pass: process.env.SMTP_PASSWORD ? 'beállítva' : 'nincs beállítva',
    //   from: process.env.EMAIL_FROM,
    //   to: process.env.EMAIL_TO
    // });
    
    // Első email: értesítés a cégnek
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: 'Új foglalási kérelem - Molnár Autóbérlés',
      text: emailText,
      replyTo: email,
    });
    
    // Második email: automatikus válasz a felhasználónak
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Foglalási kérelme megérkezett - Molnár Autóbérlés',
      text: `
        Tisztelt ${name}!
        
        Köszönjük foglalási kérelmét. Üzenetét megkaptuk és hamarosan jelentkezünk a megadott elérhetőségek egyikén.
        
        Foglalás adatai:
        - Választott autó: ${car}
        - Bérlés kezdete: ${startDate}
        - Bérlés vége: ${endDate}
        
        Üdvözlettel,
        Molnár Autóbérlés csapata
        Kőszeg, Fő tér 1.
        +36 30 123 4567
        info@molnarautoberles.hu
      `,
    });
    
    // console.log("Email sikeresen elküldve!");
    
    // Sikeres válasz
    return { success: true };
    
  } catch (error) {
    console.error('Email küldési hiba:', error);
    return {
      success: false,
      error: "Hiba történt az email küldése során",
      details: error instanceof Error ? error.message : String(error)
    };
  }
}