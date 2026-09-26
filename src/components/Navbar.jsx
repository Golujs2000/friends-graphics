import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { servicesData, companyDetails } from '../data/servicesData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-[#080b11]/90 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-white/95 hover:bg-white px-2.5 py-1 rounded-xl shadow-md border border-white/20 transition-all flex items-center h-11">
              <img
                src="/logo.svg"
                alt="Friends Graphics - Next Generation of Printing Hub"
                className="h-9 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-2xl font-black text-[#ff6a00] leading-none tracking-tight font-['Rozha_One',_'Yatra_One',_'Noto_Serif_Devanagari',_serif] drop-shadow-[0_1px_4px_rgba(255,106,0,0.3)]">
                फ्रेन्ड्स ग्राफिक्स
              </span>
              <span className="text-[7px] sm:text-[9px] font-bold uppercase text-slate-200 tracking-[0.22em] mt-1 leading-none">
                NEXT GENERATION OF PRINTING HUB
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            <Link
              to="/"
              className={`text-sm font-semibold transition-colors relative py-1 ${
                isActive('/') ? 'text-[#ff6a00]' : 'text-slate-300 hover:text-[#ff6a00]'
              }`}
            >
              Home
              {isActive('/') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff6a00] rounded-full"></span>
              )}
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                to="/services"
                className={`text-sm font-semibold flex items-center gap-1 transition-colors py-1 ${
                  location.pathname.startsWith('/services')
                    ? 'text-[#ff6a00]'
                    : 'text-slate-300 hover:text-[#ff6a00]'
                }`}
              >
                Services <ChevronDown className="w-4 h-4" />
                {location.pathname.startsWith('/services') && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff6a00] rounded-full"></span>
                )}
              </Link>

              {/* Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 pt-2 z-50">
                  <div className="bg-[#0f1420] border border-white/10 rounded-xl shadow-2xl p-2.5 backdrop-blur-xl">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5 border-b border-white/5 mb-1">
                      All Printing Solutions
                    </div>
                    {servicesData.map((svc) => (
                      <Link
                        key={svc.slug}
                        to={`/services/${svc.slug}`}
                        className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-all group"
                      >
                        <span>{svc.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[#ff6a00] transition-opacity" />
                      </Link>
                    ))}
                    <div className="pt-2 mt-1 border-t border-white/5">
                      <Link
                        to="/services"
                        className="block text-center text-xs font-bold text-[#ff6a00] hover:underline py-1"
                      >
                        Explore All Services →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`text-sm font-semibold transition-colors relative py-1 ${
                isActive('/about') ? 'text-[#ff6a00]' : 'text-slate-300 hover:text-[#ff6a00]'
              }`}
            >
              About Us
              {isActive('/about') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff6a00] rounded-full"></span>
              )}
            </Link>

            <Link
              to="/why-us"
              className={`text-sm font-semibold transition-colors relative py-1 ${
                isActive('/why-us') ? 'text-[#ff6a00]' : 'text-slate-300 hover:text-[#ff6a00]'
              }`}
            >
              Why Us
              {isActive('/why-us') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff6a00] rounded-full"></span>
              )}
            </Link>

            <Link
              to="/portfolio"
              className={`text-sm font-semibold transition-colors relative py-1 ${
                isActive('/portfolio') ? 'text-[#ff6a00]' : 'text-slate-300 hover:text-[#ff6a00]'
              }`}
            >
              Portfolio
              {isActive('/portfolio') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff6a00] rounded-full"></span>
              )}
            </Link>

            <Link
              to="/contact"
              className={`text-sm font-semibold transition-colors relative py-1 ${
                isActive('/contact') ? 'text-[#ff6a00]' : 'text-slate-300 hover:text-[#ff6a00]'
              }`}
            >
              Contact
              {isActive('/contact') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff6a00] rounded-full"></span>
              )}
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${companyDetails.whatsappNumber}?text=Hi%20Friends%20Graphics,%20I%20have%20a%20printing%20inquiry.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#25d366]/10 border border-[#25d366]/30 text-[#25d366] text-xs font-bold hover:bg-[#25d366] hover:text-black transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <Link
              to="/contact"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-[#ff6a00] to-[#ff8a00] text-white text-xs font-bold shadow-md hover:shadow-[#ff6a00]/30 hover:scale-[1.02] transition-all"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d121c] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold py-2 text-slate-200 hover:text-[#ff6a00]"
          >
            Home
          </Link>
          <Link
            to="/services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold py-2 text-slate-200 hover:text-[#ff6a00]"
          >
            All Services
          </Link>
          <div className="pl-4 space-y-2 border-l border-white/10 my-1">
            {servicesData.map((svc) => (
              <Link
                key={svc.slug}
                to={`/services/${svc.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-slate-400 hover:text-[#ff6a00] py-1"
              >
                {svc.title}
              </Link>
            ))}
          </div>
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold py-2 text-slate-200 hover:text-[#ff6a00]"
          >
            About Us
          </Link>
          <Link
            to="/why-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold py-2 text-slate-200 hover:text-[#ff6a00]"
          >
            Why Us
          </Link>
          <Link
            to="/portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold py-2 text-slate-200 hover:text-[#ff6a00]"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold py-2 text-slate-200 hover:text-[#ff6a00]"
          >
            Contact Us
          </Link>
          <div className="pt-2">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full block text-center py-2.5 rounded-lg bg-[#ff6a00] text-white font-bold text-sm shadow-md"
            >
              Request Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
