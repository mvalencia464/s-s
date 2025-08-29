import React from 'react';
import { MapPin, Truck } from 'lucide-react';

const ServiceArea = () => {
  const states = [
    'Illinois', 'Indiana', 'Missouri', 'Texas', 'Minnesota', 
    'Wisconsin', 'Michigan', 'Arkansas', 'Oklahoma', 'Kentucky', 
    'Tennessee', 'West Virginia'
  ];

  return (
    <section id="service-area" className="py-20 bg-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D2B40] mb-6">
            Service Area
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Serving the Midwest, South, and expanding as the energy landscape grows. Our regional expertise ensures we understand local conditions and requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Illinois Map */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1727891.0245116004!2d-89.1332618680134!3d40.768423293819524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1756443851682!5m2!1sen!2sus" 
                width="100%" 
                height="400" 
                style={{border: 0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              />
            </div>
            
            {/* Floating Service Badge */}
            <div className="absolute -top-4 -right-4 bg-[#F07520] text-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-2">
                <Truck className="w-5 h-5" />
                <span className="font-semibold">Mobile Service</span>
              </div>
            </div>
          </div>

          {/* States List */}
          <div>
            <h3 className="text-3xl font-bold text-[#1D2B40] mb-8">States We Serve</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {states.map((state, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="w-3 h-3 bg-[#F07520] rounded-full"></div>
                  <span className="font-medium text-[#1D2B40]">{state}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-[#1D2B40] rounded-xl p-6">
              <h4 className="text-xl font-bold text-white mb-3">Expanding Coverage</h4>
              <p className="text-[#EAEAEA] leading-relaxed">
                As the renewable energy sector continues to grow, we're strategically expanding our service area to meet the increasing demand for specialized solar farm and commercial land management services.
              </p>
            </div>

            <div className="mt-6 p-4 bg-[#F07520]/10 rounded-lg border-l-4 border-[#F07520]">
              <p className="text-[#1D2B40] font-medium">
                <strong>Don't see your state?</strong> Contact us to discuss expanding our services to your area.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;