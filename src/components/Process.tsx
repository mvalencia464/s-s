import React from 'react';
import { Phone, Search, Calendar, Cog } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Phone,
      number: '01',
      title: 'FREE Land Management Audit',
      description: 'We analyze your current costs, identify problem areas, and calculate your potential savings. You\'ll get a detailed report showing exactly where you\'re losing money.',
      details: ['Cost analysis', 'Problem identification', 'Savings calculation']
    },
    {
      icon: Search,
      number: '02',
      title: 'Custom Solution Design',
      description: 'Our experts design a maintenance plan specifically for your property using our custom equipment. You\'ll see exactly how we\'ll solve your unique challenges.',
      details: ['Custom equipment selection', 'Compliance guarantee', 'Detailed timeline']
    },
    {
      icon: Calendar,
      number: '03',
      title: 'Seamless Implementation',
      description: 'We handle everything while you focus on your business. Our team coordinates around your operations with zero disruption and delivers results on schedule, guaranteed.',
      details: ['Zero business disruption', 'On-schedule delivery', 'Dedicated project manager']
    },
    {
      icon: Cog,
      number: '04',
      title: 'Predictable, Worry-Free Maintenance',
      description: 'Enjoy consistent, high-quality results with our ongoing maintenance plans. No more surprise costs, compliance issues, or contractor headaches—just perfect property maintenance.',
      details: ['Predictable costs', 'Guaranteed compliance', 'Proactive maintenance']
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D2B40] mb-8">
            Our Proven 4-Step System That Eliminates Your Headaches
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            While other contractors wing it and hope for the best, we follow a battle-tested system that guarantees results. Here's exactly what happens when you choose S&S.
          </p>
        </div>

        <div className="relative">
          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#F07520] to-[#F07520]/30 transform translate-x-4"></div>
                )}
                
                <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 bg-[#F07520] rounded-xl flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-3xl font-bold text-[#1D2B40]/20">{step.number}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#1D2B40] mb-3">{step.title}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">{step.description}</p>
                  
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#F07520] rounded-full"></div>
                        <span className="text-sm text-gray-600 font-medium">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-[#1D2B40] px-6 py-6 md:px-8 md:py-4 rounded-2xl md:rounded-full max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-center space-y-4 md:space-y-0 md:space-x-4">
              <span className="text-[#EAEAEA] font-medium text-lg md:text-base">Stop losing money on inferior contractors.</span>
              <button className="bg-[#F07520] text-white px-8 py-4 md:py-3 rounded-lg font-bold hover:bg-[#E06610] transition-colors duration-200 w-full md:w-auto">
              Get Your FREE Audit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;