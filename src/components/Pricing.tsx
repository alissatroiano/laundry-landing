import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Standard Service',
    price: '1.50',
    unit: 'per lb',
    description: 'Perfect for regular laundry needs',
    features: [
      'Wash, dry & fold',
      'Standard detergent',
      '48-hour turnaround',
      'Free pickup & delivery',
      'Satisfaction guaranteed',
    ],
    popular: false,
  },
  {
    name: 'Express Service',
    price: '2.25',
    unit: 'per lb',
    description: 'Fast turnaround when you need it',
    features: [
      'Wash, dry & fold',
      'Standard or allergen-free detergent',
      '24-hour turnaround',
      'Free pickup & delivery',
      'Priority processing',
      'Satisfaction guaranteed',
    ],
    popular: true,
  },
  {
    name: 'Premium Care',
    price: '2.75',
    unit: 'per lb',
    description: 'Ultimate care for your garments',
    features: [
      'Wash, dry & fold',
      'Allergen-free detergent',
      '24-hour turnaround',
      'Free pickup & delivery',
      'Delicate item care',
      'Premium folding',
      'Fabric softener included',
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 mt-8">
          <h2 className="text-3xl text-slate-800 md:text-4xl font-bold font-body text-gray-900 my-1">
            Simple, Transparent
          </h2>
          <h2 className='text-4xl text-green-600 md:text-4xl font-bold font-body text-gray-900 mb-4 uppercase'>
      PRICING</h2>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto font-custom">
            Choose the service that fits your needs. <strong>No hidden fees, ever.
       </strong>   </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-2xl scale-105'
                  : 'bg-gray-50 text-gray-900'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className={`ml-2 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.unit}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.popular ? 'text-green-300' : 'text-green-600'}`} />
                    <span className={plan.popular ? 'text-blue-50' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-white text-blue-600 hover:bg-gray-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Minimum order: 10 lbs • First-time customers get 20% off their first order
          </p>
        </div>
      </div>
    </section>
  );
}
