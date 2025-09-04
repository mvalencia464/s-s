import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about', isRoute: false },
    { name: 'Services', href: '#services', isRoute: false },
    { name: 'Service Area', href: '#service-area', isRoute: false },
    { name: 'Portfolio', href: '#portfolio', isRoute: false },
    { name: 'Contact', href: '#contact', isRoute: false },
  ];

  return (
    <header className={`w-full z-50 transition-all duration-300 ${
      isScrolled ? 'fixed top-0 bg-[#1D2B40] shadow-lg' : 'relative bg-[#1D2B40]/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
             src="/white-logo.png"
              alt="S&S Land Management Logo"
              className="w-12 h-12 rounded-lg mr-3 object-cover"
            />
            <div>
              <h1 className="text-white font-bold text-xl">S&S</h1>
              <p className="text-[#EAEAEA] text-sm">Land Management</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-[#EAEAEA] hover:text-[#F07520] transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#EAEAEA] hover:text-[#F07520] transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:5093003701"
              className="flex items-center space-x-2 text-[#EAEAEA] hover:text-[#F07520] transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">509 300 3701</span>
            </a>
            <Link
              to="/booking"
              className="bg-[#F07520] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#E06610] transition-colors duration-200"
            >
              FREE Audit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#EAEAEA]/20">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                item.isRoute ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-[#EAEAEA] hover:text-[#F07520] transition-colors duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-[#EAEAEA] hover:text-[#F07520] transition-colors duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              ))}
              <div className="pt-4 border-t border-[#EAEAEA]/20">
                <a
                  href="tel:5093003701"
                  className="flex items-center space-x-2 text-[#EAEAEA] hover:text-[#F07520] transition-colors duration-200 mb-3"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">509 300 3701</span>
                </a>
                <Link
                  to="/booking"
                  className="w-full bg-[#F07520] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#E06610] transition-colors duration-200 text-center block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FREE Audit
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;