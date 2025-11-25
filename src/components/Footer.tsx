import { Shirt, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-navy-950 text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shirt className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">Military Mama</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Professional laundry service serving The Bronx and Westchester County with military-grade precision and care.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Wash & Fold</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Express Service</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Premium Care</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Pickup & Delivery</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Follow us for tips, promotions, and updates
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-navy-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Military Mama. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
