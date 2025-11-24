import { Clock, Heart, Sparkles } from 'lucide-react';
import { BubbleAnimation } from './BubbleAnimation';
import '../BubbleAnimations.css'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-200 via-sky-200 to-cyan-200 py-5" id='heroImg'>
      <BubbleAnimation />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-2 gap-12 items-center my-5 mx-0">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-purple-700 text-slate-900 px-4 py-2 rounded-full text-xs my-3">
              <Sparkles className="w-4 h-4 font-body text-neutral-100 font-light text-sm animate-pulse space-x-4" />
              <span className='font-custom text-neutral-100 text-base font-semibold uppercase'>Premium Laundry Service</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight text-lg21">
              <span className='font-body uppercase mb-2 space-y-3'>
                Fresh, Clean Laundry
              </span>
              <span className="block text-purple-700 font-bold ml-px mt-2 font-custom text-4xl uppercase">Delivered to Your Door!</span>
            </h1>

            <h2 className="text-xl md:text-2xl font-bold text-slate-800 leading-relaxed font-custom">
              Professional laundry service with a Mother's Touch.
                <br />
              *Serving The Bronx & Westchester County
            </h2>

            <div className="flex flex-wrap gap-4 pb-3">
              <a href="#contact" className="bg-amber-300 text-black px-5 py-4 rounded-full hover:bg-yellow-200 transition-all transform hover:scale-105 font-medium text-sm shadow-lg">
                Contact
              </a>
              <a href="#services" className="bg-sky-100 text-cyan-900 px-5 py-4 rounded-full hover:bg-cyan-400 transition-all font-medium text-sm">
                Learn More
              </a>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-5">
              <div className="flex items-start space-x-2">
                <div className="p-2 rounded-lg">
                  <Clock className="w-6 h-6 text-purple-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 font-body text-xs">24-Hour Service</p>
                  <p className="text-xs text-slate-800">Next-day delivery available</p>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <div className="p-2 rounded-sm">
                  <Heart className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 font-body text-xs">Allergen-Free</p>
                  <p className="text-xs text-slate-700">Sensitive skin friendly products</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                // src="folded-clothes.png"
                src="https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=800"
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
