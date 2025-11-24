import { Shirt, Phone, Mail } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 font-custom uppercase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Shirt className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-slate-900">Military Mama</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-slate-700 hover:text-sky-600 transition-colors font-medium text-lg">
              Services
            </a>
            <a href="#features" className="text-slate-700 hover:text-sky-600 transition-colors font-medium text-lg">
              Why Choose Us
            </a>
            <a href="#pricing" className="text-slate-700 hover:text-sky-600 transition-colors font-medium text-lg">
              Prices
            </a>
             <a href="#reviews" className="text-slate-700 hover:text-sky-600 transition-colors font-medium text-lg">
              Reviews
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="#contact" className="sm:flex items-center text-purple-700 hover:text-purple-500 transition-colors font-bold">
              <Phone className="w-4 h-4 mr-2 hidden sm:flex" />
              <span className="font-medium">Contact</span>
            </a>
            {/* <button className="bg-yellow-400 text-black px-6 py-2 rounded-full hover:bg-lime-400 transition-colors font-medium text-lg">
              Book Now!
            </button> */}
          </div>
        </div>
      </div>
    </header>
  );
}
