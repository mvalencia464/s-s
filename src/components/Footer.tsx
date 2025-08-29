import React from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Service Area', href: '#service-area' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Commercial Mowing',
    'Solar Farm Maintenance',
    'Hydro Seeding',
    'Erosion Control',
    'Land Clearing',
    'Right-of-Way Maintenance'
  ];

  return (
    <footer className="bg-[#1D2B40] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img 
               src="/white-logo.png" 
                alt="S&S Land Management Logo"
                className="w-12 h-12 rounded-lg mr-3 object-cover"
              />
              <div>
                <h3 className="text-2xl font-bold">S&S</h3>
                <p className="text-[#EAEAEA]">Land Management</p>
              </div>
            </div>
            
            <p className="text-[#EAEAEA] leading-relaxed mb-6 max-w-md">
              We've helped maintain and mow over 4,000 acres of active solar farms across eleven states, serving 15+ major solar energy companies. With more than 20 years of heavy-duty commercial land maintenance experience.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#F07520]" />
                <span className="text-[#EAEAEA]">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#F07520]" />
                <span className="text-[#EAEAEA]">info@sslandmgmt.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#F07520]" />
                <span className="text-[#EAEAEA]">Serving Midwest & South</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-[#EAEAEA] hover:text-[#F07520] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-[#EAEAEA]">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#EAEAEA]/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-[#EAEAEA] mb-4 md:mb-0">
              <p>&copy; {currentYear} S&S Land Management, LLC. All rights reserved.</p>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-[#EAEAEA] text-sm mr-2">Follow us:</span>
              {[Facebook, Linkedin, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-[#EAEAEA]/10 rounded-lg flex items-center justify-center hover:bg-[#F07520] transition-colors duration-200 group"
                >
                  <Icon className="w-5 h-5 text-[#EAEAEA] group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;