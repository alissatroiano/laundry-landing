import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 mt-8 font-body uppercase">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Ready to experience the Military Mama difference? Contact us today to schedule your first pickup.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center space-y-4">
              <a href="tel:917-312-9946" className="bg-blue-100 p-4 rounded-lg hover:bg-blue-200 transition-colors">
                <Phone className="w-8 h-8 text-blue-600" />
              </a>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                <p className="text-gray-600">(917) 312-9946</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <a href="mailto:mmcleaningsvcs@yahoo.com" className="bg-blue-100 p-4 rounded-lg hover:bg-blue-200 transition-colors">
                <Mail className="w-8 h-8 text-blue-600" />
              </a>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600">mmcleaningsvcs@yahoo.com</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="bg-blue-100 p-4 rounded-lg">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Service Area</h3>
                <p className="text-gray-600">The Bronx & Westchester County</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="bg-blue-100 p-4 rounded-lg">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
                <p className="text-gray-600">Monday - Saturday: 7am - 9pm</p>
                <p className="text-gray-600">Sunday: 9am - 6pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
