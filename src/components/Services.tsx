import { Truck, Droplet, Package, Zap } from 'lucide-react';

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

const colorClasses: Record<string, { bg: string; icon: string; hover: string }> = {
  sky: { bg: 'bg-sky-200', icon: 'text-sky-600', hover: 'hover:bg-sky-400' },
  cyan: { bg: 'bg-cyan-200', icon: 'text-cyan-600', hover: 'hover:bg-cyan-300' },
  green: { bg: 'bg-green-200', icon: 'text-green-600', hover: 'hover:bg-green-300' },
  purple: { bg: 'bg-purple-200', icon: 'text-purple-600', hover: 'hover:bg-purple-300' },
};

export function Services() {
  return (
    <section id="services" className="py-20 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 py-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl uppercase font-bold text-gray-900 mb-4 font-body">
            Services
          </h2>
          <p className="text-xl md:text-2xl text-slate-800 max-w-2xl mx-auto font-custom">
            Comprehensive laundry solutions designed to make your life easier
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 font-body" >
          {services.map((service, index) => {
            const colors = colorClasses[service.color];
            return (
              <div
                key={index}
                className={`${colors.bg} ${colors.hover} p-8 rounded-2xl transition-all transform shadow-xl hover:scale-105 hover:shadow-2xl`}
              >
                <div className={`${colors.icon} mb-6`}>
                  <service.icon className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-custom uppercase">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-body text-sm">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
