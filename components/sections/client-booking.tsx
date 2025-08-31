"use client";

import { useState, useEffect } from "react";
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

export function ClientBooking() {
  // A Context-ből származó értékek
  const { selectedCar, setSelectedCar } = useCarSelection();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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

  // Figyeljük a context-ben lévő selectedCar értékét
  useEffect(() => {
    if (selectedCar && selectedCar !== form.getValues().car) {
      form.setValue("car", selectedCar);
    }
  }, [selectedCar, form]);

  // Figyeljük a form car értékének változását
  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === 'car' && value.car !== selectedCar) {
        setSelectedCar(value.car as string);
      }
    });
    
    return () => subscription.unsubscribe();
  }, [form, setSelectedCar, selectedCar]);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {      
      // Mai dátum ellenőrzése
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Állítsd a mai dátumot éjfélre az összehasonlításhoz
      
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

      // Adatok formázása a küldéshez
      const formattedData = {
        ...data,
        startDate: format(startDate, 'yyyy-MM-dd'),
        endDate: format(endDate, 'yyyy-MM-dd'),
      };

      // Captcha token
      const token = await getCaptchaToken();

      // Server Action meghívása
      const result = await sendEmail(token, formattedData);

      if (result.success) {
        toast.success("Foglalási kérelmét sikeresen elküldtük!");
        form.reset();
        sendGTMEvent({
          event: "booking_request",
          data: formattedData
        });
        setSelectedCar("");
      } else {
        console.error("Hiba az email küldésekor:", result.error, result.details);
        
        // Ha captcha hiba történt
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

  return (
    <section id="booking" className="py-10">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Foglalás</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
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
                  
                  <div className="text-sm text-gray-500 -mt-2">
                    Az oldal védelmét Google reCAPTCHA biztosítja. 
                    A foglalás elküldésével elfogadja a <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Google adatvédelmi irányelveit</a> és <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">felhasználási feltételeit</a>.
                  </div>

                  <div className="text-sm text-gray-500 -mt-2">
                    Az űrlap kitöltése és elküldése nem jelenti automatikusan a foglalás véglegesítését.
                    A foglalás véglegesítéséhez fel vesszük Önnel a kapcsolatot.
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Küldés folyamatban..." : "Foglalás küldése"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}