import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle, Clock, ShieldCheck, ArrowRight, Flag, ExternalLink } from 'lucide-react';
import { servicesData, companyDetails } from '../data/servicesData';
import { trackPhoneCall, trackWhatsAppClick } from '../utils/analyticsEvents';

export default function Footer() {
  const electionServices = servicesData.filter((s) =>
    ['rally-election-flag', 'satin-election-flag', 'paper-election-flag', 'national-paper-flag', 'election-campaign-poster', 'election-management-services', 'promotional-canopy-tent'].includes(s.slug)
  );

  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(companyDetails.address)}`;

  return (
    <footer className="bg-[#05070b] border-t border-white/10 pt-16 pb-8 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & NAP */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <div className="bg-white px-3.5 py-2 rounded-2xl shadow-lg border border-white/20 inline-flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="Friends Graphics Patna Logo"
                  className="h-12 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-slate-300">
              Patna's premier commercial printing hub established in <strong>{companyDetails.established}</strong>.
              Over <strong>{companyDetails.yearsOfExperience}+ years</strong> of craftsmanship in <strong>चुनाव प्रचार सामग्री (Election Campaign Materials)</strong>, custom candidate merchandise, and Heidelberg offset printing in Bari Path.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#ff6a00]/10 border border-[#ff6a00]/30 text-[#ff6a00]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Patna Printing Press</span>
              </span>
            </div>

            <div className="text-xs text-slate-400 space-y-1 pt-1">
              <div><strong>Business Name:</strong> {companyDetails.name} ({companyDetails.hindiName})</div>
              <div><strong>Proprietor:</strong> {companyDetails.founder}</div>
              <div><strong>Registration PIN:</strong> 800004 (Patna, Bihar)</div>
            </div>
          </div>

          {/* Col 2: Chunav Prachar Samagri */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 relative inline-flex items-center gap-2">
              <Flag className="w-4 h-4 text-red-500 fill-red-500" />
              <span>चुनाव प्रचार सामग्री</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-red-500 -mb-1"></span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/services?category=election" className="text-amber-400 font-bold hover:text-white flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-red-500" />
                  <span>All Election Materials Hub</span>
                </Link>
              </li>
              {electionServices.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    to={`/services/${svc.slug}`}
                    className="hover:text-[#ff6a00] transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-[#ff6a00] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{svc.hindiTitle || svc.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services/flex-printing-services" className="hover:text-[#ff6a00] transition-colors flex items-center gap-1.5 group">
                  <ArrowRight className="w-3 h-3 text-[#ff6a00] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>चुनावी फ्लेक्स व स्टेज बैकड्रॉप</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation & Guides */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 relative inline-block">
              Guides &amp; Resources
              <span className="block w-8 h-0.5 bg-[#ff6a00] mt-1"></span>
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/locations" className="text-emerald-400 font-bold hover:text-white flex items-center gap-1.5">
                  <span>📍 Locations &amp; Bihar Coverage</span>
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-[#ff6a00] font-bold hover:text-white flex items-center gap-1.5">
                  <span>📚 Printing Knowledge Hub (Blog)</span>
                </Link>
              </li>
              <li>
                <Link to="/blog/bihar-election-campaign-materials-guide" className="hover:text-[#ff6a00] transition-colors line-clamp-1">
                  Election Materials Wholesale Guide
                </Link>
              </li>
              <li>
                <Link to="/services?category=election" className="hover:text-[#ff6a00] transition-colors line-clamp-1">
                  Candidate Kits (सांसद, विधायक, मुखिया)
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="hover:text-[#ff6a00] transition-colors">
                  Client Reviews &amp; Testimonials
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-[#ff6a00] transition-colors">
                  Frequently Asked Questions (FAQs)
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="hover:text-[#ff6a00] transition-colors">
                  HTML Sitemap &amp; Full Index
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-[#ff6a00] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-[#ff6a00] transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Local NAP & Direction */}
          <div className="space-y-3.5">
            <h4 className="text-base font-bold text-white mb-4 relative inline-block">
              Workshop &amp; Counter
              <span className="block w-8 h-0.5 bg-[#ff6a00] mt-1"></span>
            </h4>

            <div className="flex items-start gap-3 text-xs sm:text-sm">
              <MapPin className="w-4 h-4 text-[#ff6a00] shrink-0 mt-1" />
              <div>
                <span className="text-white block font-medium">{companyDetails.address}</span>
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#ff6a00] hover:underline mt-1 inline-flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs sm:text-sm">
              <Phone className="w-4 h-4 text-[#ff6a00] shrink-0" />
              <div>
                <a
                  href={`tel:${companyDetails.phonePrimary}`}
                  onClick={() => trackPhoneCall(companyDetails.phonePrimary, 'footer')}
                  className="hover:text-[#ff6a00] block text-white font-semibold"
                >
                  {companyDetails.phonePrimary}
                </a>
                <a
                  href={`tel:${companyDetails.phoneSecondary}`}
                  onClick={() => trackPhoneCall(companyDetails.phoneSecondary, 'footer')}
                  className="hover:text-[#ff6a00] block text-slate-400"
                >
                  {companyDetails.phoneSecondary}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs sm:text-sm">
              <MessageCircle className="w-4 h-4 text-[#25d366] shrink-0" />
              <a
                href={`https://wa.me/${companyDetails.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('Footer', 'footer')}
                className="hover:text-[#25d366] font-semibold text-slate-200"
              >
                +91 7992421080 (Chat on WhatsApp)
              </a>
            </div>

            <div className="flex items-center gap-3 text-xs sm:text-sm">
              <Mail className="w-4 h-4 text-[#ff6a00] shrink-0" />
              <a href={`mailto:${companyDetails.email}`} className="hover:text-[#ff6a00]">
                {companyDetails.email}
              </a>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-400 pt-1">
              <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
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
            <span>Bari Path, Langartoli, Patna - 800004, Bihar</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
