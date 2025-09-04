import React, { useEffect } from 'react';

const BookingPage: React.FC = () => {
  useEffect(() => {
    // Load HighLevel form embed script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on component unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Schedule Your Consultation
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Watch our introduction video and book a consultation to learn how we can reduce your land management costs by 30% while ensuring 100% compliance.
          </p>
        </div>

        {/* First Row: Video and What You'll Learn */}
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
          {/* YouTube Video Section */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
              Learn About Our Services
            </h2>
            <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              {/* Replace the src below with your actual YouTube video URL */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE"
                title="S&S Land Management Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              {/* Custom thumbnail overlay */}
              <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                   style={{
                     backgroundImage: `url('/youtube-thumbnail.jpg')`
                   }}>
                {/* Play button overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group hover:bg-opacity-40 transition-all duration-200 cursor-pointer">
                  <div className="bg-white bg-opacity-90 rounded-full p-4 group-hover:bg-opacity-100 transition-all duration-200 shadow-lg">
                    <svg className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                    </svg>
                  </div>
                </div>
                {/* Duration badge */}
                <div className="absolute bottom-3 right-3 bg-black bg-opacity-80 text-white text-sm px-2 py-1 rounded">
                  12:15
                </div>
              </div>
            </div>
          </div>

          {/* What You'll Learn Section */}
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-lg shadow-md">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                What You'll Learn:
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-lg">✓</span>
                  <span className="text-base md:text-lg">How our proprietary system reduces costs by 30%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-lg">✓</span>
                  <span className="text-base md:text-lg">Our custom-engineered equipment for Midwest & South regions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-lg">✓</span>
                  <span className="text-base md:text-lg">Guaranteed 100% regulatory compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-lg">✓</span>
                  <span className="text-base md:text-lg">Case studies from solar and commercial property owners</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-base md:text-lg font-semibold text-blue-900 mb-3">
                What to Expect:
              </h3>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 text-sm">•</span>
                  <span className="text-sm md:text-base">30-minute consultation call</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 text-sm">•</span>
                  <span className="text-sm md:text-base">Property assessment and cost analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 text-sm">•</span>
                  <span className="text-sm md:text-base">Custom solution proposal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 text-sm">•</span>
                  <span className="text-sm md:text-base">No obligation - completely free</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* Second Row: Extra-Wide Calendar Booking - Breaks out of container */}
      <div className="bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
              Book Your Free Consultation
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to reduce your land management costs? Schedule a free consultation to get started.
            </p>
          </div>
        </div>

        {/* Extra wide calendar container - full viewport width with padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full">
            {/* HighLevel Calendar Widget */}
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/VK5p3BfnXq2LNHpzyHj6"
              style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '800px' }}
              scrolling="no"
              id="lMDfsj2mw3xp7zT7dk9C_1756957694151"
              title="Book Consultation"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <div className="bg-green-600 text-white p-6 rounded-lg">
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              Ready to Reduce Your Land Management Costs?
            </h3>
            <p className="text-base md:text-lg mb-5">
              Join hundreds of satisfied property owners who have saved thousands with our proven system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-center">
                <div className="text-3xl font-bold">30%</div>
                <div className="text-sm">Average Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm">Compliance Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm">Properties Managed</div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default BookingPage;
