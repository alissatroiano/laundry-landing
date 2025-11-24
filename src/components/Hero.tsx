import { Clock, Heart, Sparkles } from 'lucide-react';
import { BubbleAnimation } from './BubbleAnimation';
import '../BubbleAnimations.css'

export function Hero() {
  return (
    <section className="relative pt-24 pb-20 overflow-hidden bg-gradient-to-br from-sky-400 via-cyan-200 to-indigo-800">
      <BubbleAnimation />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center my-5 mx-0">
          <div className="space-y-8">
            {/* <div className="inline-flex items-center space-x-2 bg-purple-700 text-slate-900 px-4 py-4 rounded-full text-xs">
              <Sparkles className="w-4 h-4 font-body text-neutral-100 font-light text-sm animate-pulse space-x-4" />
              <span className='font-body text-neutral-100 font-light text-sm'>Premium Laundry Service</span>
            </div> */}

            <h1 className="text-xl md:text-6xl font-bold text-gray-900 leading-tight text-lg21">
              <span className='font-custom uppercase mb-2'>
              Fresh, Clean Laundry
              </span>
              <span className="block text-slate-600 font-custom lowercase ml-px mt-2">Delivered to Your Door!</span>
            </h1>

            <h2 className="text-l text-slate-800 leading-relaxed font-body">
              Professional laundry service for all your needs.
            </h2>

            <div className="flex flex-wrap gap-4 pb-5">
              <button className="bg-amber-300 text-black px-5 py-4 rounded-full hover:bg-yellow-200 transition-all transform hover:scale-105 font-medium text-sm shadow-lg">
                Schedule Pickup
              </button>
              <button className="bg-sky-100 text-cyan-900 px-5 py-4 rounded-full hover:bg-cyan-400 transition-all font-medium text-sm">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-10">
              <div className="flex items-start space-x-2">
                <div className="p-2 rounded-lg">
                  <Clock className="w-6 h-6 text-purple-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 font-body text-sm">24-Hour Service</p>
                  <p className="text-xs text-slate-800">Next-day delivery available</p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <div className="p-2 rounded-lg">
                  <Heart className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 font-body text-sm">Allergen-Free</p>
                  <p className="text-xs text-slate-700">Sensitive skin friendly products</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                // src="folded-clothes.png"
                src="folded-clothes.png"
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
