import { Shirt, Phone, Mail } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Shirt className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">Military Mama</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Services
            </a>
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Why Choose Us
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Pricing
            </a>
            <a href="#reviews" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Reviews
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="tel:917-312-9946" className="hidden sm:flex items-center text-gray-700 hover:text-blue-600 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-medium">(917) 312-9946</span>
            </a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
