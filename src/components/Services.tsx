import React from 'react';
import { Scissors, Sun, Droplets, TreePine } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: 'Commercial Property Maintenance That Actually Works',
      description: 'Stop dealing with contractors who can\'t handle your scale. Our custom-engineered equipment and proven process ensure your industrial sites, logistics centers, and power stations are maintained to perfection—every single time.',
      features: ['30% Faster Job Completion', '100% Safety Compliance', 'Zero Equipment Damage', 'Predictable Monthly Costs']
    },
    {
      icon: Sun,
      title: 'The land you just converted is not a farm anymore. It\'s a liability.',
      description: 'Solar farms are a different beast. You can\'t just send in a herd of sheep or a local guy with a mower. The EPA and Soil & Water Conservation are watching, and you need a partner who understands the rules and has the specialized equipment to get the job done right.',
      features: ['Maximum Energy Output', 'Zero Regulatory Issues', 'Panel Protection Guaranteed', 'Pollinator-Friendly Solutions']
    },
    {
      icon: Droplets,
      title: 'Hydro Seeding That Cuts Long-Term Costs',
      description: 'Transform problem areas into low-maintenance assets. Our proprietary hydro seeding process creates durable ground cover that reduces erosion, eliminates costly repairs, and actually improves your property value over time.',
      features: ['50% Less Erosion Damage', 'Faster Establishment', 'Lower Long-Term Costs', 'Increased Property Value']
    },
    {
      icon: TreePine,
      title: 'Complete Land Management Solutions',
      description: 'One partner for all your land management needs. From land clearing to right-of-way maintenance, we handle the specialized work that other contractors avoid—saving you time, money, and endless coordination headaches.',
      features: ['Single Point of Contact', 'All Services Coordinated', 'No Subcontractor Issues', 'Streamlined Billing']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D2B40] mb-8">
            Stop Overpaying for Subpar Results
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We've helped maintain and mow over 4,000 acres of active solar farms across eleven states, serving 15+ major solar energy companies. With more than 20 years of heavy-duty commercial land maintenance experience—and as one of the first to specialize in large-scale solar farm mowing—our equipment and expertise can handle jobs of any size, from 100 to over 1,000 acres in a single project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-[#F07520] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#1D2B40] mb-4 group-hover:text-[#F07520] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#F07520] rounded-full"></div>
                        <span className="text-sm text-gray-600 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-[#1D2B40] rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-6">
              Stop Losing Money on Inferior Contractors
            </h3>
            <p className="text-[#EAEAEA] text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
              Every day you wait is another day of overpaying for subpar results. Let our experts conduct a comprehensive assessment of your property and show you exactly how much you could be saving.
            </p>
            <button className="bg-[#F07520] text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-[#E06610] transition-all duration-200 transform hover:scale-105 shadow-lg">
              Get Your FREE Land Management Audit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;