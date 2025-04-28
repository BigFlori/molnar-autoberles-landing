'use server';

import nodemailer from 'nodemailer';
import { z } from 'zod';
import { formatPhoneNumber } from '@/utils/utils';

// Validációs séma
const bookingSchema = z.object({
  name: z.string().min(3, { message: "A név legalább 3 karakter hosszú legyen" }),
  email: z.string().email({ message: "Érvénytelen email cím" }),
  phone: z.string().min(9, { message: "Érvénytelen telefonszám" }),
  car: z.string().min(1, { message: "Kérjük válasszon autót" }),
  startDate: z.string().min(1, { message: "Kérjük válasszon kezdő dátumot" }),
  endDate: z.string().min(1, { message: "Kérjük válasszon befejező dátumot" }),
  message: z.string().optional(),
  captchaToken: z.string().min(1, { message: "ReCAPTCHA validáció szükséges" }),
});

type BookingFormData = z.infer<typeof bookingSchema>;

// reCAPTCHA token validálása
async function verifyCaptcha(token: string) {
  try {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    
    // Ellenőrizzük a captcha eredményt
    // Az adatok tartalmazzák a success mezőt és a score értéket is (0.0 - 1.0 között)
    if (data.success && data.score >= 0.5) {
      return { success: true };
    } else {
      return { 
        success: false, 
        error: "A reCAPTCHA ellenőrzés sikertelen", 
        details: `Score: ${data.score}, Error codes: ${data['error-codes'] ? data['error-codes'].join(', ') : 'none'}` 
      };
    }
  } catch (error) {
    console.error('reCAPTCHA ellenőrzési hiba:', error);
    return { 
      success: false, 
      error: "Hiba történt a reCAPTCHA ellenőrzés során", 
      details: error instanceof Error ? error.message : String(error) 
    };
  }
}

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
    
    const { name, email, phone, car, startDate, endDate, message, captchaToken } = result.data;
    
    // reCAPTCHA ellenőrzés
    const captchaResult = await verifyCaptcha(captchaToken);
    if (!captchaResult.success) {
      return captchaResult;
    }
    
    // Céges adatok környezeti változókból
    const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || "Molnár Autóbérlés";
    const companyAddress = process.env.NEXT_PUBLIC_COMPANY_ADDRESS || "9730 Kőszeg, Fő tér 1.";
    const companyPhone = process.env.NEXT_PUBLIC_PHONE_NUMBER || "+36301234567";
    const formattedCompanyPhone = formatPhoneNumber(companyPhone);
    const companyEmail = process.env.NEXT_PUBLIC_INFO_MAIL || "info@molnarautoberles.hu";
    
    // Email szöveg összeállítása
    const emailText = `
      Új foglalási kérelem érkezett:
      
      Név: ${name}
      Email: ${email}
      Telefon: ${formatPhoneNumber(phone)}
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
    
    // Első email: értesítés a cégnek
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Új foglalási kérelem - ${companyName}`,
      text: emailText,
      replyTo: email,
    });
    
    // Második email: automatikus válasz a felhasználónak
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: `Foglalási kérelme megérkezett - ${companyName}`,
      text: `
        Tisztelt ${name}!
        
        Köszönjük foglalási kérelmét. Üzenetét megkaptuk és hamarosan jelentkezünk a megadott elérhetőségek egyikén.
        
        Foglalás adatai:
        - Választott autó: ${car}
        - Bérlés kezdete: ${startDate}
        - Bérlés vége: ${endDate}
        
        Üdvözlettel,
        ${companyName} csapata
        ${companyAddress}
        ${formattedCompanyPhone}
        ${companyEmail}
      `,
    });
    
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