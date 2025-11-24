import { Phone, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 font-custom uppercase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#heroImg" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img src="/logo .png" alt="Military Mama Logo" className="w-8 h-8" />
            <span className="text-2xl font-bold text-slate-900">Military Mama</span>
          </a>

          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-slate-700 hover:text-sky-600 transition-colors font-medium text-lg">
              Services
            </a>
            <a href="#features" className="text-slate-700 hover:text-sky-600 transition-colors font-medium text-lg">
             Mission
            </a>
              <a href="#pricing" className="text-slate-700 hover:text-sky-600 transition-colors font-medium text-lg">
              Pricing
            </a>
            <a href="#reviews" className="text-slate-700 hover:text-sky-600 transition-colors font-medium text-lg">
              Reviews
            </a>
              <a href="#contact" className="text-slate-700 hover:text-sky-600 transition-colors font-medium text-lg">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="tel:917-312-9946" className="flex items-center text-purple-700 hover:text-purple-500 transition-colors font-bold">
              <Phone className="w-4 h-4 mr-2 hidden sm:block" />
              <span className="font-medium text-sm sm:text-base">(917) 312-9946</span>
            </a>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-sky-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-slate-700 hover:text-sky-600 transition-colors font-medium text-lg" onClick={() => setIsMenuOpen(false)}>
                Services
              </a>
              <a href="#features" className="text-slate-700 hover:text-sky-600 transition-colors font-medium text-lg" onClick={() => setIsMenuOpen(false)}>
               Mission
              </a>
                <a href="#pricing" className="text-slate-700 hover:text-sky-600 transition-colors font-medium text-lg" onClick={() => setIsMenuOpen(false)}>
                Pricing
              </a>
              <a href="#reviews" className="text-slate-700 hover:text-sky-600 transition-colors font-medium text-lg" onClick={() => setIsMenuOpen(false)}>
                Reviews
              </a>
                <a href="#contact" className="text-slate-700 hover:text-sky-600 transition-colors font-medium text-lg" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>

            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
