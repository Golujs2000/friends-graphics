import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { servicesData, companyDetails } from '../data/servicesData';

export default function Footer() {
  return (
    <footer className="bg-[#05070b] border-t border-white/10 pt-16 pb-8 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <div className="bg-white px-3.5 py-2 rounded-2xl shadow-lg border border-white/20 inline-flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="Friends Graphics Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-slate-300">
              Patna's premier commercial printing hub established in <strong>{companyDetails.established}</strong>.
              Over <strong>{companyDetails.yearsOfExperience}+ years</strong> of excellence delivering flex banners, posters, visiting cards, brochures, and offset packaging.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#ff6a00]/10 border border-[#ff6a00]/30 text-[#ff6a00]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Patna Printing Press</span>
              </span>
            </div>
          </div>

          {/* Col 2: Printing Services */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 relative inline-block">
              Our Printing Services
              <span className="block w-8 h-0.5 bg-[#ff6a00] mt-1"></span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    to={`/services/${svc.slug}`}
                    className="hover:text-[#ff6a00] transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-[#ff6a00] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{svc.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 relative inline-block">
              Quick Navigation
              <span className="block w-8 h-0.5 bg-[#ff6a00] mt-1"></span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-[#ff6a00] transition-colors">Home Page</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#ff6a00] transition-colors">Complete Services Catalog</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#ff6a00] transition-colors">About Friends Graphics</Link>
              </li>
              <li>
                <Link to="/why-us" className="hover:text-[#ff6a00] transition-colors">Why Choose Us</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-[#ff6a00] transition-colors">Our Work Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#ff6a00] transition-colors">Contact &amp; Free Quote</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact */}
          <div className="space-y-3.5">
            <h4 className="text-base font-bold text-white mb-4 relative inline-block">
              Workshop &amp; Office
              <span className="block w-8 h-0.5 bg-[#ff6a00] mt-1"></span>
            </h4>

            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-4 h-4 text-[#ff6a00] shrink-0 mt-1" />
              <span>{companyDetails.address}</span>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 text-[#ff6a00] shrink-0" />
              <div>
                <a href={`tel:${companyDetails.phonePrimary}`} className="hover:text-[#ff6a00] block">
                  {companyDetails.phonePrimary}
                </a>
                <a href={`tel:${companyDetails.phoneSecondary}`} className="hover:text-[#ff6a00] block">
                  {companyDetails.phoneSecondary}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <MessageCircle className="w-4 h-4 text-[#25d366] shrink-0" />
              <a
                href={`https://wa.me/${companyDetails.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25d366] font-semibold text-slate-200"
              >
                +91 7992421080 (Chat on WhatsApp)
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-[#ff6a00] shrink-0" />
              <a href={`mailto:${companyDetails.email}`} className="hover:text-[#ff6a00]">
                {companyDetails.email}
              </a>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-400 pt-1">
              <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{companyDetails.hours}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; 2026 {companyDetails.name} ({companyDetails.hindiName}). Established {companyDetails.established}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>Proprietor: <strong>{companyDetails.founder}</strong></span>
            <span>Patna, Bihar</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
