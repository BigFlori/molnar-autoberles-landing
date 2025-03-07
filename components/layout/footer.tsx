import { Car } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Car className="h-6 w-6 text-blue-600" />
            <span className="text-lg font-semibold">Molnár Autóbérlés</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#about" className="text-sm text-gray-600 hover:text-blue-600">Rólunk</a>
            <a href="#cars" className="text-sm text-gray-600 hover:text-blue-600">Autóink</a>
            <a href="#booking" className="text-sm text-gray-600 hover:text-blue-600">Foglalás</a>
            <a href="#contact" className="text-sm text-gray-600 hover:text-blue-600">Kapcsolat</a>
          </nav>
          <p className="text-sm text-gray-600">© 2024 Molnár Autóbérlés. Minden jog fenntartva.</p>
        </div>
      </div>
    </footer>
  );
}