import { useState } from 'react';
import { Phone, Mail, Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-navy-900/95 backdrop-blur-sm shadow-sm z-50 font-custom uppercase transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#heroImg" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img src="/logo.png" alt="Military Mama Logo" className="w-8 h-8" />
            <span className="text-xl font-semibold text-slate-900 dark:text-yellow-400">Military Mama Laundry</span>
          </a>
          
          <nav className="hidden md:flex space-x-8">
                        <a href="#about" className="text-slate-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-indigo-400 transition-colors font-medium text-lg">
             About
            </a>
            <a href="#services" className="text-slate-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-indigo-400 transition-colors font-medium text-lg">
              Services
            </a>
              <a href="#pricing" className="text-slate-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-indigo-400 transition-colors font-medium text-lg">
              Prices
            </a>
            <a href="#reviews" className="text-slate-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-indigo-400 transition-colors font-medium text-lg">
              Reviews
            </a>
              <a href="#contact" className="text-slate-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-indigo-400 transition-colors font-medium text-lg">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <a href="tel:917-312-9946" className="hidden sm:flex items-center text-purple-700 dark:text-indigo-400 hover:text-purple-500 dark:hover:text-indigo-300 transition-colors font-bold">
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-medium">(917) 312-9946</span>
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-navy-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200 dark:border-navy-700">
            <div className="flex flex-col space-y-3 pt-4">
              <a
                href="#about"
                onClick={closeMenu}
                className="text-slate-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-indigo-400 transition-colors font-medium py-2"
              >
                About
              </a>
                        <a
                href="#services"
                onClick={closeMenu}
                className="text-slate-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-indigo-400 transition-colors font-medium py-2"
              >
                Services
              </a>
      
              <a
                href="#pricing"
                onClick={closeMenu}
                className="text-slate-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-indigo-400 transition-colors font-medium py-2"
              >
                Prices
              </a>
              <a
                href="#reviews"
                onClick={closeMenu}
                className="text-slate-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-indigo-400 transition-colors font-medium py-2"
              >
                Reviews
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="text-slate-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-indigo-400 transition-colors font-medium py-2"
              >
                Contact
              </a>
              <a
                href="tel:917-312-9946"
                className="flex sm:hidden items-center text-purple-700 dark:text-indigo-400 hover:text-purple-500 dark:hover:text-indigo-300 transition-colors py-2"
              >
                <Phone className="w-3 h-3 phone-icon" />
                <span className="font-medium">  (917) 312-9946</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
