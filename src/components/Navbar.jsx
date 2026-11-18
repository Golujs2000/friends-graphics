import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, MessageCircle, ArrowRight, Flag } from 'lucide-react';
import { servicesData, companyDetails } from '../data/servicesData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-[#080b11]/95 backdrop-blur-md border-b border-white/10 transition-all w-full overflow-x-clip">
      {/* Top Chunav Samagri Announcement Bar */}
      <div className="bg-gradient-to-r from-red-600 via-[#ff6a00] to-amber-600 text-white text-xs py-1 px-3 sm:px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Mobile Layout (< sm) */}
          <div className="flex sm:hidden items-center justify-between w-full min-w-0 gap-1.5">
            <Link
              to="/services?category=election"
              className="flex items-center gap-1.5 min-w-0 truncate text-white hover:text-amber-200 transition-colors"
            >
              <span className="bg-black/40 text-amber-300 text-[10px] font-black uppercase px-2 py-0.5 rounded-full border border-white/20 shrink-0 flex items-center gap-1">
                <Flag className="w-2.5 h-2.5 fill-amber-300" />
                <span>चुनाव सामग्री</span>
              </span>
              <span className="truncate text-[11px] font-semibold">
                बिहार के नं. 1 थोक निर्माता
              </span>
            </Link>

            <div className="flex items-center gap-1.5 shrink-0">
              <a
                href={`tel:${companyDetails.phonePrimary}`}
                className="bg-black/35 hover:bg-black/50 text-amber-300 p-1 rounded-full border border-white/20 flex items-center justify-center active:scale-95 transition-all"
                aria-label="Call Now"
                title={`Call ${companyDetails.phonePrimary}`}
              >
                <Phone className="w-3 h-3" />
              </a>
              <a
                href={`https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent("नमस्ते! मुझे चुनाव प्रचार सामग्री की थोक रेट लिस्ट चाहिए।")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-2 py-0.5 rounded-full flex items-center gap-1 text-[10px] font-bold border border-emerald-400/40 shadow-sm active:scale-95 transition-all"
              >
                <MessageCircle className="w-2.5 h-2.5 fill-white" />
                <span>रेट लिस्ट</span>
              </a>
            </div>
          </div>

          {/* Tablet & Desktop Layout (>= sm) */}
          <div className="hidden sm:flex items-center justify-between w-full gap-2">
            <div className="flex items-center gap-2 font-medium min-w-0 truncate">
              <span className="bg-black/35 text-amber-200 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border border-white/20 shrink-0 flex items-center gap-1">
                <Flag className="w-2.5 h-2.5 fill-amber-200" />
                <span>चुनाव प्रचार सामग्री</span>
              </span>
              <span className="truncate text-xs">
                बिहार के नं. 1 थोक निर्माता — झंडे, पोस्टर, बैनर, टोपी, बैज व कैनोपी टेंट | Wholesale Election Hub
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs font-bold shrink-0">
              <a href={`tel:${companyDetails.phonePrimary}`} className="hover:underline flex items-center gap-1">
                <Phone className="w-3 h-3" />
                <span>{companyDetails.phonePrimary}</span>
              </a>
              <span className="opacity-60">|</span>
              <a
                href={`https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent("नमस्ते! मुझे चुनाव प्रचार सामग्री (Election Campaign Materials) की थोक रेट लिस्ट चाहिए।")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-200 flex items-center gap-1 font-extrabold"
              >
                <MessageCircle className="w-3 h-3 fill-white" />
                <span>WhatsApp रेट लिस्ट</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group min-w-0 shrink">
            <div className="bg-white hover:bg-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-xl shadow-md border border-white/25 transition-all flex items-center h-10 sm:h-12 group-hover:shadow-[#ff6a00]/25 shrink-0">
              <img
                src="/logo.png"
                alt="Friends Graphics - Next Generation of Printing Hub"
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </div>
            <div className="hidden lg:flex flex-col">
              <span className="text-xl font-black text-[#ff6a00] leading-none tracking-tight font-['Rozha_One',_'Yatra_One',_'Noto_Serif_Devanagari',_serif] drop-shadow-[0_1px_4px_rgba(255,106,0,0.3)]">
                फ्रेन्ड्स ग्राफिक्स
              </span>
              <span className="text-[9px] font-bold uppercase text-slate-300 tracking-[0.2em] mt-1 leading-none">
                BARI PATH, PATNA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
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

            {/* Chunav Samagri Featured Highlight Link */}
            <Link
              to="/services?category=election"
              className="text-xs sm:text-sm font-bold transition-all py-1 px-2.5 rounded-lg bg-gradient-to-r from-red-600/25 to-[#ff6a00]/25 border border-[#ff6a00]/40 text-[#ff8a00] hover:text-white hover:bg-[#ff6a00] flex items-center gap-1.5 shadow-[0_0_12px_rgba(255,106,0,0.2)]"
            >
              <span className="text-sm">🚩</span>
              <span>चुनाव सामग्री</span>
              <span className="px-1.5 py-0.2 rounded bg-red-600 text-[9px] font-black text-white uppercase tracking-wider">
                HOT
              </span>
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
                <div className="absolute top-full -left-16 w-[560px] pt-2 z-50">
                  <div className="bg-[#0f1420]/95 border border-white/10 rounded-2xl shadow-2xl p-3 backdrop-blur-xl">
                    <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5 border-b border-white/10 mb-2">
                      <span>All Printing &amp; Fabrication Solutions</span>
                      <span className="text-[#ff6a00]">{servicesData.length} Services</span>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 max-h-[70vh] overflow-y-auto pr-1">
                      {servicesData.map((svc) => (
                        <Link
                          key={svc.slug}
                          to={`/services/${svc.slug}`}
                          className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all group"
                        >
                          <div className="truncate pr-2">
                            <span className="block truncate text-xs font-semibold text-slate-200 group-hover:text-white">{svc.title}</span>
                            {svc.hindiTitle && (
                              <span className="block truncate text-[11px] text-[#ff6a00] font-medium">{svc.hindiTitle}</span>
                            )}
                          </div>
                          <span className="text-[10px] text-slate-500 group-hover:text-[#ff6a00] font-mono shrink-0">
                            #{svc.id}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="pt-2.5 mt-2 border-t border-white/10">
                      <Link
                        to="/services"
                        className="block text-center text-xs font-bold text-[#ff6a00] hover:text-[#ff8a00] hover:underline py-1"
                      >
                        Explore All Services Catalog →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/locations"
              className={`text-sm font-semibold transition-colors relative py-1 ${
                isActive('/locations') ? 'text-[#ff6a00]' : 'text-slate-300 hover:text-[#ff6a00]'
              }`}
            >
              Locations
              {isActive('/locations') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff6a00] rounded-full"></span>
              )}
            </Link>

            <Link
              to="/blog"
              className={`text-sm font-semibold transition-colors relative py-1 ${
                isActive('/blog') ? 'text-[#ff6a00]' : 'text-slate-300 hover:text-[#ff6a00]'
              }`}
            >
              Guides
              {isActive('/blog') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#ff6a00] rounded-full"></span>
              )}
            </Link>

            <Link
              to="/about"
              className={`text-sm font-semibold transition-colors relative py-1 ${
                isActive('/about') ? 'text-[#ff6a00]' : 'text-slate-300 hover:text-[#ff6a00]'
              }`}
            >
              About
              {isActive('/about') && (
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

          {/* Mobile Right Actions & Menu Toggle */}
          <div className="md:hidden flex items-center gap-1.5 shrink-0">
            <a
              href={`https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent("नमस्ते! मुझे प्रिंटिंग कोटेशन चाहिए।")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-[#25d366]/15 border border-[#25d366]/30 text-[#25d366] hover:bg-[#25d366] hover:text-black transition-all flex items-center justify-center active:scale-95"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </a>

            <a
              href={`tel:${companyDetails.phonePrimary}`}
              className="p-1.5 rounded-lg bg-[#ff6a00]/15 border border-[#ff6a00]/30 text-[#ff6a00] hover:bg-[#ff6a00] hover:text-white transition-all flex items-center justify-center active:scale-95"
              aria-label="Call Friends Graphics"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none rounded-lg bg-white/5 border border-white/10 active:scale-95 transition-all"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d121c] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          {/* Highlighted Mobile Chunav Link */}
          <Link
            to="/services?category=election"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-red-600/25 via-[#ff6a00]/25 to-amber-600/25 border border-[#ff6a00]/50 text-white font-bold text-sm shadow-md"
          >
            <div className="flex items-center gap-2">
              <span className="text-base">🚩</span>
              <span>चुनाव प्रचार सामग्री (Election Material)</span>
            </div>
            <span className="px-2 py-0.5 rounded bg-red-600 text-[10px] font-black text-white uppercase tracking-wider">
              HOT
            </span>
          </Link>

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
            All Printing Services
          </Link>
          <div className="pl-3 space-y-1 border-l border-white/10 my-2 max-h-56 overflow-y-auto pr-1">
            {servicesData.map((svc) => (
              <Link
                key={svc.slug}
                to={`/services/${svc.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-xs text-slate-400 hover:text-[#ff6a00] py-1.5"
              >
                <div className="truncate pr-2">
                  <span className="block truncate text-slate-200">{svc.title}</span>
                  {svc.hindiTitle && (
                    <span className="block truncate text-[10px] text-[#ff6a00]">{svc.hindiTitle}</span>
                  )}
                </div>
                <span className="text-[10px] text-slate-500 font-mono">#{svc.id}</span>
              </Link>
            ))}
          </div>
          <Link
            to="/locations"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold py-2 text-slate-200 hover:text-[#ff6a00]"
          >
            Locations &amp; Coverage (Patna &amp; Bihar)
          </Link>
          <Link
            to="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold py-2 text-slate-200 hover:text-[#ff6a00]"
          >
            Printing Guides &amp; Knowledge Hub
          </Link>
          <Link
            to="/testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold py-2 text-slate-200 hover:text-[#ff6a00]"
          >
            Client Reviews &amp; Testimonials
          </Link>
          <Link
            to="/faqs"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold py-2 text-slate-200 hover:text-[#ff6a00]"
          >
            Frequently Asked Questions
          </Link>
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold py-2 text-slate-200 hover:text-[#ff6a00]"
          >
            About Us
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
