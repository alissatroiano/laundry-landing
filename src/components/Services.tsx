import { Truck, Droplet, Package, Zap, Calendar, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: 'Pick-up & Delivery',
    description: 'Convenient scheduled pickup and delivery right to your doorstep. No more laundromat trips.',
    color: 'sky',
  },
  {
    icon: Droplet,
    title: 'Wash & Fold',
    description: 'Professional washing with premium detergents. Your clothes treated with expert care.',
    color: 'purple',
  },
  {
    icon: Package,
    title: 'Impeccable Folding',
    description: 'Perfectly folded clothes every time. Our signature folding technique keeps items wrinkle-free.',
    color: 'green',
  },
  {
    icon: Zap,
    title: '24-Hour Express',
    description: 'Need it fast? Our next-day express service ensures your laundry is ready when you need it.',
    color: 'cyan',
  },
];

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

const colorClasses: Record<string, { bg: string; icon: string; hover: string }> = {
  sky: { bg: 'bg-sky-200', icon: 'text-sky-600', hover: 'hover:bg-sky-400' },
  cyan: { bg: 'bg-cyan-200', icon: 'text-cyan-600', hover: 'hover:bg-cyan-300' },
  green: { bg: 'bg-green-200', icon: 'text-green-600', hover: 'hover:bg-green-300' },
  purple: { bg: 'bg-purple-200', icon: 'text-purple-600', hover: 'hover:bg-purple-300' },
};

export function Services() {
  return (
      <section className="py-10 bg-gradient-to-br from-slate-950 via-sky-950 to-slate-950 text-white relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-4xl uppercase font-bold text-yellow-300 mb-4 font-body">
            Services
          </h2>
          <p className="text-xl md:text-2xl text-sky-50 max-w-2xl mx-auto font-custom font-light">
            Comprehensive laundry solutions designed to make your life easier
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 font-body" >
          {services.map((service, index) => {
            const colors = colorClasses[service.color];
            return (
              <div
                key={index}
                className={`${colors.bg} ${colors.hover} p-5 rounded-2xl transition-all transform shadow-xl hover:scale-105 hover:shadow-2xl`}
              >
                <div className={`${colors.icon} mb-6`}>
                  <service.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl text-center font-bold text-gray-900 mb-3 font-custom uppercase">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed font-body text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="mt-10 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 text-center mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center transform rotate-6 transition-transform hover:rotate-12">
                    <step.icon className="w-10 h-10 text-purple-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-gray-900 text-sm">
                    {step.step}
                  </div>
                </div>

                <h3 className="text-2xl font-semibold font-custom uppercase mb-3">
                  {step.title}
                </h3>
                <p className="text-sky-100 leading-relaxed font-body">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-slate-800/50">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-yellow-400 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
