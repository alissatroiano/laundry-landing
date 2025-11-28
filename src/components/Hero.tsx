import { Clock, Heart, Sparkles } from 'lucide-react';
import { BubbleAnimation } from './BubbleAnimation';
import '../BubbleAnimations.css'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-100 via-white-100 to-sky-100 dark:from-navy-800 dark:via-navy-900 dark:to-navy-800 py-5 transition-colors duration-300" id='heroImg'>
      <BubbleAnimation />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-2 gap-12 items-center my-5 mx-0">
          <div className="space-y-8">
            <h1 className="mt-5 text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight text-lg21 transition-colors duration-300">
              <span className='font-body uppercase mb-2 space-y-3 pt-6'>
                Fresh, Clean Laundry
              </span>
              <span className="block text-purple-700 dark:text-indigo-400 font-bold ml-px mt-2 font-custom text-4xl uppercase transition-colors duration-300">Delivered to Your Door!</span>
            </h1>

            <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-gray-300 leading-relaxed font-custom transition-colors duration-300">
              Professional laundry service for all your needs.
                <br />
              *Serving The Bronx & Westchester County
            </h2>

            <div className="flex flex-wrap gap-4 pb-3 font-body">
              <a href="#services" className="bg-amber-300 text-black px-5 py-4 rounded-full hover:bg-yellow-200 transition-all transform hover:scale-105 font-medium text-sm shadow-lg">
                Services
              </a>
              <a href="#pricing" className="bg-sky-400 text-slate-700 px-5 py-4 rounded-full hover:bg-cyan-400 transition-all font-medium text-sm">
                Pricing
              </a> 
            </div>

            <div className="grid grid-cols-2 gap-2 pt-5">
              <div className="flex items-start space-x-2">
                <div className="p-2 rounded-lg">
                  <Clock className="w-6 h-6 text-purple-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white font-body text-xs transition-colors duration-300">24-Hour Service</p>
                  <p className="text-xs text-slate-800 dark:text-gray-400 transition-colors duration-300">Next-day delivery available</p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <div className="p-2 rounded-sm">
                  <Heart className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white font-body text-xs transition-colors duration-300">Allergen-Free</p>
                  <p className="text-xs text-slate-700 dark:text-gray-400 transition-colors duration-300">Sensitive skin friendly products</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                // src="folded-clothes.png"
                src="laundry.png"
                alt="Fresh folded laundry"
                className="rounded-3xl hero-img shadow-2xl transition-all transform hover:scale-95"
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
