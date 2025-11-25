import { Calendar, Package, Sparkles, Truck } from 'lucide-react';

const steps = [
  {
    icon: Calendar,
    title: 'Schedule Pickup',
    description: 'Book online or call us. Choose a convenient time that works for your schedule.',
    step: '1',
  },
  {
    icon: Package,
    title: 'We Collect',
    description: 'Our team arrives at your door to collect your laundry. Just hand it over and relax.',
    step: '2',
  },
  {
    icon: Sparkles,
    title: 'We Clean & Fold',
    description: 'Professional washing with your choice of detergent and our signature perfect fold.',
    step: '3',
  },
  {
    icon: Truck,
    title: 'We Deliver',
    description: 'Fresh, clean laundry delivered back to your door. It\'s that simple!',
    step: '4',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-sky-600 to-cyan-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Getting fresh, clean laundry has never been easier
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center transform rotate-6 transition-transform hover:rotate-12">
                    <step.icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center font-bold text-gray-900 text-sm">
                    {step.step}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-blue-400/30">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
