"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { DatePicker } from "@/components/ui/date-picker";
import { format, addDays } from "date-fns";
import { sendEmail } from "@/actions/send-email";
import { useCarSelection } from "@/provider/car-provider";
import { cars } from "./client-cars";
import { getCaptchaToken } from "@/utils/captcha";
import { sendGTMEvent } from "@next/third-parties/google";
import { Phone, Mail, CheckCircle2 } from "lucide-react";
import { site } from "@/config/site-config";
import { formatPhoneNumber } from "@/utils/utils";
import { BlurFade } from "@/components/ui/blur-fade";

// Form validációs séma
const formSchema = z.object({
  name: z.string().min(3, { message: "A név legalább 3 karakter hosszú legyen" }),
  email: z.string().email({ message: "Érvénytelen email cím" }),
  phone: z.string().min(9, { message: "Érvénytelen telefonszám" }),
  car: z.string().min(1, { message: "Kérjük válasszon autót" }),
  startDate: z.date({ required_error: "Kérjük válasszon kezdő dátumot" }),
  endDate: z.date({ required_error: "Kérjük válasszon befejező dátumot" }),
  message: z.string().optional(),
}).refine((data) => data.endDate > data.startDate, {
  message: "A befejező dátum későbbi kell legyen, mint a kezdő dátum",
  path: ["endDate"],
});

type FormValues = z.infer<typeof formSchema>;

const checklistItems = [
  "Személyi igazolvány",
  "Vezetői engedély",
  "Lakcímkártya",
  "Kaució összege (készpénz)",
];

export function ClientBooking() {
  const { selectedCar, setSelectedCar } = useCarSelection();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      car: "",
      message: "",
    },
  });

  useEffect(() => {
    if (selectedCar && selectedCar !== form.getValues().car) {
      form.setValue("car", selectedCar);
    }
  }, [selectedCar, form]);

  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === "car" && value.car !== selectedCar) {
        setSelectedCar(value.car as string);
      }
    });
    return () => subscription.unsubscribe();
  }, [form, setSelectedCar, selectedCar]);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const startDate = data.startDate;
      const endDate = data.endDate;

      if (startDate < today) {
        toast.error("A kezdő dátum nem lehet korábbi, mint a mai nap!");
        setIsSubmitting(false);
        return;
      }

      if (endDate <= startDate) {
        toast.error("A befejező dátum nem lehet korábbi vagy egyenlő a kezdő dátummal!");
        setIsSubmitting(false);
        return;
      }

      const formattedData = {
        ...data,
        startDate: format(startDate, "yyyy-MM-dd"),
        endDate: format(endDate, "yyyy-MM-dd"),
      };

      const token = await getCaptchaToken();
      const result = await sendEmail(token, formattedData);

      if (result.success) {
        toast.success("Foglalási kérelmét sikeresen elküldtük!");
        form.reset();
        sendGTMEvent({
          event: "booking_request",
          data: formattedData,
        });
        setSelectedCar("");
        router.push("/koszonjuk");
      } else {
        console.error("Hiba az email küldésekor:", result.error, result.details);
        if (result.error && result.error.includes("reCAPTCHA")) {
          toast.error("reCAPTCHA érvényesítési hiba történt. Kérjük, próbálja újra.");
        } else {
          toast.error(`Hiba történt a küldés során: ${result.error}`);
        }
      }
    } catch (error) {
      console.error("Feldolgozási hiba:", error);
      toast.error("Hiba történt a küldés során. Kérjük próbálja újra később.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const phoneNumber = site.company.phone;
  const formattedPhone = formatPhoneNumber(phoneNumber);
  const email = site.company.email;

  return (
    <section id="booking" className="py-24 bg-white">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">

            {/* Left panel — info */}
            <BlurFade inView duration={0.5}>
              <div className="md:sticky md:top-24">
                <span className="inline-block text-sky-700 text-sm font-semibold tracking-wider uppercase mb-4">
                  Online foglalás
                </span>
                <h2 className="font-poppins text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                  Foglalja le online,<br />mi visszahívjuk
                </h2>
                <p className="text-slate-500 text-base leading-relaxed mb-8">
                  Töltse ki az űrlapot, és hamarosan felvesszük Önnel a kapcsolatot a foglalás véglegesítéséhez.
                </p>

                {/* Checklist */}
                <div className="mb-8">
                  <p className="font-poppins font-semibold text-slate-900 text-sm mb-3">
                    Mit hozzon magával?
                  </p>
                  <ul className="space-y-2.5">
                    {checklistItems.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-4.5 w-4.5 h-[18px] w-[18px] text-sky-600 flex-shrink-0" aria-hidden="true" />
                        <span className="text-slate-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div className="space-y-3">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="flex items-center gap-3 text-slate-700 hover:text-sky-700 transition-colors duration-150 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-100 transition-colors duration-150">
                      <Phone className="h-4 w-4 text-sky-700" aria-hidden="true" />
                    </div>
                    <span className="text-sm font-medium">{formattedPhone}</span>
                  </a>
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-3 text-slate-700 hover:text-sky-700 transition-colors duration-150 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-100 transition-colors duration-150">
                      <Mail className="h-4 w-4 text-sky-700" aria-hidden="true" />
                    </div>
                    <span className="text-sm font-medium">{email}</span>
                  </a>
                </div>
              </div>
            </BlurFade>

            {/* Right panel — form */}
            <BlurFade inView delay={0.15} duration={0.5}>
              <Card className="shadow-sm border-slate-200">
                <CardHeader className="sr-only">
                  <CardTitle>Foglalási űrlap</CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Teljes név</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="Kovács János" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email cím</FormLabel>
                              <FormControl>
                                <Input {...field} type="email" placeholder="pelda@gmail.com" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Telefonszám</FormLabel>
                              <FormControl>
                                <Input {...field} type="tel" placeholder="+36301234567" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="car"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Választott autó</FormLabel>
                              <Select
                                value={field.value}
                                onValueChange={(value) => {
                                  field.onChange(value);
                                  setSelectedCar(value);
                                }}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Válasszon autót" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {cars.map((car) => (
                                    <SelectItem key={car.id} value={car.name}>
                                      {car.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="startDate"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Kezdő dátum</FormLabel>
                              <FormControl>
                                <DatePicker
                                  date={field.value}
                                  setDate={field.onChange}
                                  placeholder="Bérlés kezdete"
                                  minDate={new Date()}
                                  disabled={isSubmitting}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="endDate"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel>Befejező dátum</FormLabel>
                              <FormControl>
                                <DatePicker
                                  date={field.value}
                                  setDate={field.onChange}
                                  placeholder="Bérlés vége"
                                  minDate={form.getValues().startDate ? addDays(form.getValues().startDate, 1) : new Date()}
                                  disabled={isSubmitting || !form.getValues().startDate}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Megjegyzés (opcionális)</FormLabel>
                            <FormControl>
                              <Textarea {...field} rows={3} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="text-xs text-slate-400 -mt-1">
                        Az oldal védelmét Google reCAPTCHA biztosítja.{" "}
                        A foglalás elküldésével elfogadja a{" "}
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="text-sky-700 hover:underline">
                          adatvédelmi irányelveket
                        </a>{" "}
                        és{" "}
                        <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer" className="text-sky-700 hover:underline">
                          felhasználási feltételeket
                        </a>.
                      </div>

                      <div className="text-xs text-slate-400 -mt-1">
                        Az űrlap elküldése nem jelenti a foglalás automatikus véglegesítését. Felvesszük Önnel a kapcsolatot.
                      </div>

                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Küldés folyamatban..." : "Foglalás küldése"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </BlurFade>

          </div>
        </div>
      </div>
    </section>
  );
}
