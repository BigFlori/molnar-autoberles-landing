import { NextRequest, NextResponse } from 'next/server';
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

export async function POST(request: NextRequest) {
  try {
    // Request body feldolgozása
    const body = await request.json();
    
    // Validálás
    const result = bookingSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Érvénytelen adatok", details: result.error.format() },
        { status: 400 }
      );
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
    });
    
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: 'Új foglalási kérelem - Molnár Autóbérlés',
      text: emailText,
      replyTo: email,
    });
    
    // Automatikus válasz a felhasználónak
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
    
    // Sikeres válasz
    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error('Email küldési hiba:', error);
    return NextResponse.json(
      { error: "Hiba történt az email küldése során" },
      { status: 500 }
    );
  }
}