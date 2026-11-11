import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  MessageCircle,
  Navigation,
  Clock,
  Truck,
  ShieldCheck,
  CheckCircle2,
  Building2,
  ArrowRight,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { companyDetails } from '../data/servicesData';
import { locationsData } from '../data/locationsData';
import { getBreadcrumbSchema } from '../data/schemaData';
import { trackPhoneCall, trackWhatsAppClick, trackMapDirectionsClick } from '../utils/analyticsEvents';

export default function LocationsPage() {
  const { headquarters, patnaAreas, biharDistrictsCoverage } = locationsData;
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(headquarters.address)}`;

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Locations Served', url: '/locations' }
  ];

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <SEOHead
        title="Printing Press in Patna & Bihar Coverage Areas — Bari Path & All Districts"
        description="Friends Graphics workshop location at Popular Palace, Bari Path, Patna. Local coverage across Machhua Toli, Kankarbagh, Boring Road, and express dispatch to all 38 Bihar districts."
        canonicalPath="/locations"
        keywords="printing press bari path patna, machhua toli printing shop, printing services kankarbagh, election flags supplier bihar districts, popular palace langartoli"
        schemaJson={getBreadcrumbSchema(breadcrumbs)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link to="/" className="hover:text-[#ff6a00] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#ff6a00]">Locations &amp; Service Areas</span>
        </nav>

        {/* Header Banner */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-red-600/20 via-[#ff6a00]/25 to-amber-500/20 border border-[#ff6a00]/40 text-[#ff8a00]">
            <MapPin className="w-3.5 h-3.5" />
            <span>LOCAL SEO ARCHITECTURE • PATNA &amp; ALL BIHAR DISTRICTS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            Printing Press in <span className="brand-gradient-text">Patna, Bari Path</span> &amp; Bihar Distribution
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Headquartered in the historic <strong>Bari Path &amp; Machhua Toli printing cluster</strong> of Patna, Friends Graphics delivers commercial offset printing, LED signboards, and turnkey <strong>चुनाव प्रचार सामग्री (Election Campaign Materials)</strong> to every ward of Patna and all 38 districts of Bihar.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <a
              href={`tel:${companyDetails.phonePrimary}`}
              onClick={() => trackPhoneCall(companyDetails.phonePrimary, 'locations_hero')}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#ff6a00] to-[#ff8a00] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-[#ff6a00]/25 hover:scale-105 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Workshop: {companyDetails.phonePrimary}</span>
            </a>

            <a
              href={`https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent("नमस्ते फ्रेंड्स ग्राफिक्स! मुझे आपके बारी पथ वर्कशॉप की लोकेशन और प्रिंटिंग रेट चाहिए।")}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('Locations Inquiry', 'locations_hero')}
              className="px-5 py-2.5 rounded-xl bg-[#25d366] text-black font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-lg hover:bg-[#20ba59] transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>WhatsApp Location Inquiry</span>
            </a>
          </div>
        </div>

        {/* Main Production Workshop & Embedded Map */}
        <section className="bg-[#0f1422]/90 border border-[#ff6a00]/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left HQ Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase bg-[#ff6a00]/15 text-[#ff6a00] border border-[#ff6a00]/30">
                <Building2 className="w-3.5 h-3.5" />
                <span>Primary Workshop &amp; Order Desk</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Bari Path Central Production Facility
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                {headquarters.description}
              </p>

              <div className="bg-black/40 border border-white/10 rounded-2xl p-5 space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#ff6a00] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-400 block">Exact Address:</span>
                    <strong className="text-white block mt-0.5">{headquarters.address}</strong>
                    <span className="text-xs text-amber-300 mt-1 block">Landmark: {headquarters.landmark}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-400 block">Working Hours:</span>
                    <span className="text-white font-medium">{headquarters.hours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Navigation className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs uppercase font-bold text-slate-400 block">How to Reach:</span>
                    <span className="text-xs text-slate-300">
                      Just 2.5 km from Patna Junction Railway Station via Exhibition Road / Bari Path, and 1.8 km from Gandhi Maidan via Ashok Rajpath / Langartoli.
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackMapDirectionsClick()}
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg transition-all"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Driving Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Map Embed */}
            <div className="lg:col-span-6 h-80 sm:h-96 rounded-2xl overflow-hidden border border-white/15 shadow-xl relative">
              <iframe
                title="Friends Graphics Bari Path Patna Google Maps"
                src={headquarters.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[25%] contrast-[110%]"
              />
            </div>
          </div>
        </section>

        {/* Hyper-Local Patna Neighborhoods */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Key Local Service Areas Across <span className="brand-gradient-text">Patna</span>
            </h2>
            <p className="text-sm text-slate-400">
              We provide rapid on-site quotation, material proofing, and door delivery to all major commercial corridors in Patna.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patnaAreas.map((area) => (
              <div
                key={area.slug}
                className="bg-[#0f1420]/80 border border-white/10 rounded-2xl p-6 hover:border-[#ff6a00]/40 transition-all hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-black uppercase text-[#ff6a00] tracking-wider">
                      PIN: {area.pincode}
                    </span>
                    <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-slate-400">
                      Patna
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1.5">{area.title}</h3>
                  <div className="text-xs font-semibold text-amber-300 mb-2">{area.highlight}</div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{area.desc}</p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <Link
                    to="/services"
                    className="text-[#ff6a00] hover:text-white font-bold flex items-center gap-1 transition-colors"
                  >
                    <span>View Services</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={`https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent(`नमस्ते फ्रेंड्स ग्राफिक्स! मुझे ${area.name} में प्रिंटिंग सर्विस की आवश्यकता है।`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* State-wide Bihar 38 Districts Dispatch Coverage */}
        <section className="bg-gradient-to-br from-[#121929] via-[#161320] to-[#1a110a] border border-[#ff6a00]/30 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              <Truck className="w-3.5 h-3.5" />
              <span>Bihar-Wide Logistics Network</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Express Delivery Across All 38 Districts of Bihar &amp; Jharkhand
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              For large-scale election campaigns and corporate rollouts, we package orders into organized, moisture-proof bundles and dispatch them via dedicated daily bus transport and express rail parcel services from Patna.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {biharDistrictsCoverage.map((dist, idx) => (
              <div
                key={idx}
                className="bg-black/40 border border-white/10 rounded-xl p-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6a00]" />
                    <h4 className="text-sm font-bold text-white">{dist.name}</h4>
                  </div>
                  <div className="text-xs text-emerald-400 font-semibold mb-1">
                    ⚡ {dist.dispatchTime}
                  </div>
                  <div className="text-[11px] text-slate-400">{dist.transitMethod}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
            <span>Need bulk delivery to an unlisted district or block? We ship anywhere in Bihar and Jharkhand.</span>
            <a
              href={`https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent("नमस्ते! मुझे बिहार के जिले में बल्क डिलीवरी का समय और ट्रांसपोर्टेशन चार्ज जानना है।")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-[#25d366] text-black font-extrabold flex items-center gap-1.5 shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-black" />
              <span>Check District Transit on WhatsApp</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

