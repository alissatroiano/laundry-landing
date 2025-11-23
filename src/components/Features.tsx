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

export function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Military Mama?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're not just another laundry service. With military-grade precision and care, we're your partner in keeping life fresh and clean.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                The Perfect Fold, Every Time
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our team takes pride in delivering perfectly folded clothes that look like they came straight from a boutique. We use specialized folding techniques that minimize wrinkles and maximize freshness.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span>Professional folding standards</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span>Wrinkle-free presentation</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span>Organized by type and preference</span>
                </li>
              </ul>
            </div>
            <div className="h-full min-h-[400px]">
              <img
                src="https://images.pexels.com/photos/6197118/pexels-photo-6197118.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Perfectly folded clothes"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
