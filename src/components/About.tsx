import { CheckCircle, Shield, Leaf, Star } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Allergen-Free Detergent',
    description: 'We use hypoallergenic, eco-friendly detergents perfect for sensitive skin and the environment.',
  },
  {
    icon: Star,
    title: 'Premium Quality',
    description: 'Our expert team ensures every item receives meticulous attention and care.',
  },
  {
    icon: Shield,
    title: 'Satisfaction Guaranteed',
    description: 'Not happy with our service? We\'ll rewash your items free of charge.',
  },
  {
    icon: CheckCircle,
    title: 'Perfect Every Time',
    description: 'Known for our impeccable folding technique that keeps your clothes looking fresh.',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-sky-100 via-white-100 to-sky-100 dark:from-purple-800 dark:via-violet-900 dark:to-purple-800 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 cards">
        <div className="text-center mb-8 mt-6">
          <h2 className="text-4xl font-bold mb-4 font-body uppercase text-purple-700 dark:text-yellow-600 hover:text-purple-500 dark:hover:text-indigo-300 ">
            About
          </h2>
          <p className="text-xl text-slate-800 dark:text-stone-100 max-w-2xl mx-auto font-custom mt-6">
            <strong className='text-purple-700 dark:text-yellow-600 hover:text-purple-500 dark:hover:text-indigo-300 uppercase mr-1'>Military Mama </strong> is not like any other laundry service. Every order is treated with professionalism, care, and, most importantly, a touch of love. Military Mama knows that there is no better feeling than a mother's touch, so she adds it to each and every order.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mt-0 mb-0 mr-0 ml-0 center text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card__bx bg-sky-100 dark:bg-purple-950 bg-opacity-65 shadow-xl rounded-full p-3 transition-shadow mb-3 text-center"
            >
              <h3 className="text-xl uppercase font-bold text-stone-950 dark:text-stone-50 font-custom">
                <div className='text-center mb-3 '>
                  <feature.icon className="text-yellow-500 " />
                </div>
                {feature.title}
              </h3>
              <div>
                <p className="mt-3 text-stone-950 dark:text-purple-100 leading-relaxed font-body text-sm">
                  {feature.description}
                </p>
              </div>
            </div>

          ))}
        </div>

        <div className="rounded-3xl shadow-2xl bg-indigo-100 bg-opacity-85" id='foldedClothes'>
          <div className="grid md:grid-cols-2 gap-0">
            <div className="pt-10">
              <h3 className="text-3xl font-bold font-custom dark:text-stone-50 mb-6">
                The Perfect Fold, Every Time
              </h3>
              <p className="dark:text-stone-100 font-semibold font-body leading-relaxed mb-6">
                Our team takes pride in delivering perfectly folded clothes that look like they came straight from a boutique. We use specialized folding techniques that minimize wrinkles and maximize freshness.
              </p>
              <ul className="spacmbe-y-3 font-custom">
                <li className="flex text-stone-600 dark:text-stone-100 font-custom">
                  <CheckCircle className="w-5 h-5 text-green-800 dark:text-green-600 mr-3 flex-shrink-0 text-right" />
                  <span>Professional folding standards</span>
                </li>
                <li className="flex text-stone-600 dark:text-stone-100">
                  <CheckCircle className="w-5 h-5 text-green-800 dark:text-green-600 mr-3 flex-shrink-0" />
                  <span> Wrinkle-free presentation</span>
                </li>
                <li className="flex text-stone-600 dark:text-stone-100">
                  <CheckCircle className="w-5 h-5 text-green-800 dark:text-green-600 mr-3 flex-shrink-0" />
                  <span> Organized by type and preference</span>
                </li>
              </ul>
            </div>
            <div className="h-full min-h-[400px]">
              <img
                src="folded-clothes.png"
                alt="Perfectly folded clothes"
                className="w-full h-full object-cover feature-img rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
