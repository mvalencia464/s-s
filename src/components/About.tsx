import React from 'react';
import { Award, Users, Wrench, Leaf } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Custom-Engineered Equipment',
      description: 'Our specialized machinery handles the toughest terrain, reducing job time by up to 30% and ensuring a clean, uniform cut every time.'
    },
    {
      icon: Wrench,
      title: 'Regional Expertise',
      description: 'We\'ve successfully managed over 150,000 acres in your region, so we know the local regulations, soil conditions, and challenges that other contractors miss.'
    },
    {
      icon: Leaf,
      title: 'Hydro Seeding to Boost Your ROI',
      description: 'Our proprietary hydro-seeding process creates durable, low-maintenance ground cover that reduces erosion, protects your assets, and cuts long-term costs.'
    },
    {
      icon: Users,
      title: 'Best-in-Class Service',
      description: 'You get a dedicated project manager and a detailed maintenance plan to guarantee your property is always in perfect condition, with no surprises.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D2B40] mb-6">
            For the few who truly need it... The one company that speaks your language.
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We've helped maintain and mow over 4,000 acres of active solar farms across eleven states, serving 15+ major solar energy companies. With more than 20 years of heavy-duty commercial land maintenance experience—and as one of the first to specialize in large-scale solar farm mowing—our equipment and expertise can handle jobs of any size, from 100 to over 1,000 acres in a single project.
          </p>
        </div>

        {/* Key Benefits - Above the Fold */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              title: 'Guaranteed Regulatory Compliance',
              description: 'No more headaches, no more fines.'
            },
            {
              title: 'Reduced Operational Costs',
              description: 'Our efficiency saves you money, month after month.'
            },
            {
              title: 'Eco-Friendly, Sustainable Solutions',
              description: 'Protecting your assets and the environment.'
            },
            {
              title: 'A Dedicated Partner',
              description: 'We handle the complexity so you don\'t have to.'
            }
          ].map((benefit, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="w-3 h-3 bg-[#F07520] rounded-full mx-auto mb-3"></div>
              <h4 className="font-bold text-[#1D2B40] mb-2">{benefit.title}</h4>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-[#1D2B40] mb-6">Our "Unfair Advantage" was built with sweat, blood, and tears.</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We didn't go to business school for this. We came from the school of hard knocks. Our background is in utility work, which means we know how to handle the toughest jobs, from clearing rights-of-way to fixing the ground after the work is done.
              </p>
              <p>

                While others are just getting started, we've been around the maintenance world for a long time. We\'ve built our own mowers because nobody else had a clue what we were doing.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-[#1D2B40] rounded-xl">
              <h4 className="text-xl font-bold text-white mb-3">The Unspoken Guarantee</h4>
              <p className="text-[#EAEAEA] italic text-lg">
                "We are in a competitive market, but we don't play the price-cutting game. We've seen a guy with a mower try to underbid us by $50, but they're not paying workman's comp or full medical for their employees. That's not how we do business. You get what you pay for."
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="/Orv Scott.png"
              alt="Orv Scott - Co-Founder"
              className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
            />

            {/* Bottom overlay with logo, title and phrase */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1D2B40] via-[#1D2B40]/80 to-transparent p-8 rounded-b-2xl">
              <div className="flex items-center space-x-4">
                <img
                  src="/white-logo.png"
                  alt="S&S Land Management Logo"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h4 className="text-white font-bold text-xl">Orv Scott</h4>
                  <p className="text-white/90 text-lg">Co-Founder</p>
                  <p className="text-[#F07520] font-semibold text-lg">Built on Experience, Driven by Results</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-12 h-12 bg-[#F07520] rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-xl font-bold text-[#1D2B40] mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;