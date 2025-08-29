import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-[80vh] flex items-center bg-gradient-to-br from-[#1D2B40] to-[#2A3B52]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23F07520%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Punchy Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
              Land<br />
              Management,<br />
              <span className="text-[#F07520]"> Perfected.</span>
            </h1>
            
            {/* Sub-headline */}
            <p className="text-2xl text-[#EAEAEA] mb-8 font-light leading-relaxed">
              Experience precision,<br />
              and unmatched efficiency.
            </p>

            {/* CTA Button */}
            <button className="bg-[#F07520] text-white px-10 py-5 rounded-lg font-bold text-xl hover:bg-[#E06610] transition-all duration-200 transform hover:scale-105 shadow-xl flex items-center justify-center group mx-auto lg:mx-0 mb-10">
              Request Your Free Site Audit
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            {/* Hero Benefits */}
            <div className="space-y-6">
              <p className="text-lg text-[#EAEAEA] leading-relaxed">
                From solar to large commercial properties and specialized fleet delivery:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#F07520] flex-shrink-0" />
                  <span className="text-[#EAEAEA] text-lg">Guaranteed regulatory compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#F07520] flex-shrink-0" />
                  <span className="text-[#EAEAEA] text-lg">Reduced operational costs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#F07520] flex-shrink-0" />
                  <span className="text-[#EAEAEA] text-lg">Eco-friendly, sustainable solutions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/Generated Image August 28, 2025 - 10_23PM.jpeg" 
                alt="Precision solar farm maintenance and land management"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D2B40]/40 to-transparent"></div>
              
              {/* Logo Overlay */}
              <div className="absolute top-6 left-6">
                <img 
                  src="/white-logo copy.png" 
                  alt="S&S Land Management Logo"
                  className="w-16 h-16 object-contain opacity-90"
                />
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1D2B40]">4,000+</div>
                <div className="text-sm text-gray-600 font-medium">Acres Managed</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-[#F07520] p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">20+</div>
                <div className="text-sm text-white/90 font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;