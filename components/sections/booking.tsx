import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cars } from "./cars";
import { toast } from "sonner";

interface BookingProps {
  selectedCar: string;
  onSelectCar: (carName: string) => void;
}

export function BookingSection({ selectedCar, onSelectCar }: BookingProps) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        toast.success("Foglalási kérelmét sikeresen elküldtük!");
        (e.target as HTMLFormElement).reset();
        onSelectCar("");
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error("Hiba történt a küldés során. Kérjük próbálja újra később.");
    }
  };

  return (
    <section id="booking" className="py-20">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Foglalás</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="grid gap-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Teljes név
                    </label>
                    <Input type="text" name="name" id="name" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email cím
                    </label>
                    <Input type="email" name="email" id="email" required />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Telefonszám
                    </label>
                    <Input type="tel" name="phone" id="phone" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="car" className="text-sm font-medium text-gray-700">
                      Választott autó
                    </label>
                    <Select name="car" value={selectedCar} onValueChange={onSelectCar} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Válasszon autót" />
                      </SelectTrigger>
                      <SelectContent>
                        {cars.map((car) => (
                          <SelectItem key={car.id} value={car.name}>
                            {car.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="startDate" className="text-sm font-medium text-gray-700">
                      Kezdő dátum
                    </label>
                    <Input type="date" name="startDate" id="startDate" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="endDate" className="text-sm font-medium text-gray-700">
                      Befejező dátum
                    </label>
                    <Input type="date" name="endDate" id="endDate" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Megjegyzés (opcionális)
                  </label>
                  <Textarea name="message" id="message" rows={3} />
                </div>
                <Button type="submit" className="w-full">
                  Foglalás küldése
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}