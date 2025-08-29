import React from 'react';
import { Star, Quote } from 'lucide-react';

const SocialProof = () => {
  const testimonials = [
    {
      quote: "Since switching to S&S, we've cut our maintenance costs by 35% and haven't had a single compliance issue. Their custom equipment handles our 800-acre solar farm like no other contractor could.",
      author: "Michael Rodriguez",
      company: "Director of Operations, Midwest Solar Solutions",
      rating: 5
    },
    {
      quote: "We tried three different contractors before finding S&S. They're the only ones who showed up with the right equipment and actually delivered on their promises. Our 500-acre facility has never looked better.",
      author: "Sarah Chen",
      company: "Facilities Manager, Industrial Properties Group",
      rating: 5
    },
    {
      quote: "S&S saved us over $200,000 in potential erosion damage with their hydro seeding expertise. What used to be our biggest maintenance headache is now completely worry-free.",
      author: "David Thompson",
      company: "Project Director, Regional Development Corp",
      rating: 5
    }
  ];

  const trustedBy = [
    'Amazon Logistics',
    'Google Data Centers',
    'Sherwin Williams',
    'Midwest Utilities',
    'Solar Energy Partners',
    'Industrial Holdings LLC'
  ];

  return (
    <section className="py-20 bg-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1D2B40] mb-8">
            Real Results from Real Property Owners
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            These aren't just testimonials—they're documented results from property owners who were tired of overpaying for mediocre service and compliance headaches.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#F07520] fill-current" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-[#F07520] mb-4" />
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-[#1D2B40]">{testimonial.author}</p>
                <p className="text-gray-600 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted By */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#1D2B40] mb-8">Trusted By Companies That Demand Results</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {trustedBy.map((company, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 flex items-center justify-center">
                <span className="text-[#1D2B40] font-semibold text-sm text-center">{company}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-[#F07520]/10 rounded-lg border-l-4 border-[#F07520] max-w-2xl mx-auto">
            <p className="text-[#1D2B40] font-medium">
              <strong>Join 500+ smart property owners</strong> who stopped overpaying for inferior service and chose the proven S&S system instead.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;