import { Clock, Heart, Sparkles } from 'lucide-react';
import { BubbleAnimation } from './BubbleAnimation';

export function Hero() {
  return (
    <section className="relative pt-24 pb-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <BubbleAnimation />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Premium Laundry Service</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Fresh, Clean Laundry
              <span className="block text-blue-600">Delivered to Your Door</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Military Mama's professional wash, fold, and delivery service with allergen-free options.
              Serving The Bronx and Westchester County with military-level precision.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 font-medium text-lg shadow-lg">
                Schedule Pickup
              </button>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-50 transition-all border-2 border-gray-200 font-medium text-lg">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">24-Hour Service</p>
                  <p className="text-sm text-gray-600">Next-day delivery available</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Allergen-Free</p>
                  <p className="text-sm text-gray-600">Sensitive skin friendly</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fresh folded laundry"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
