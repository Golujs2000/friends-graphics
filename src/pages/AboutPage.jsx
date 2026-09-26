import React from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  CheckCircle2,
  Clock,
  Printer,
  Users,
  MapPin,
  Phone,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { companyDetails } from '../data/servicesData';
import StatsBar from '../components/StatsBar';

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-8">
          <Link to="/" className="hover:text-[#ff6a00] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#ff6a00]">About Us</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ff6a00]/10 border border-[#ff6a00]/25 text-[#ff6a00]">
              <span>Established in {companyDetails.established}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Patna's Trusted Printing Hub for <span className="brand-gradient-text">{companyDetails.yearsOfExperience}+ Years</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Founded in <strong>2014</strong> by <strong>{companyDetails.founder}</strong>, <strong>Friends Graphics ({companyDetails.hindiName})</strong> has grown from a specialized graphic and print design studio into one of Patna's most recognized commercial printing destinations.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Situated in the commercial heart of Patna at <strong>Popular Palace, Langartoli, Bari Path</strong>, we cater to businesses, coaching institutes, hospitals, political organizations, and families who demand vivid colors, clean cutting, and on-time fulfillment without compromises.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff6a00] to-[#ff8a00] text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-[#ff6a00]/30 hover:scale-105 transition-all"
              >
                <span>Visit Our Workshop</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`https://wa.me/${companyDetails.whatsappNumber}?text=Hi%20Ranjan%20ji,%20I%20would%20like%20to%20discuss%20a%20printing%20project%20with%20Friends%20Graphics.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#25d366]/15 hover:bg-[#25d366] text-[#25d366] hover:text-black font-bold text-sm flex items-center gap-2 border border-[#25d366]/30 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Ranjan Sharma</span>
              </a>
            </div>
          </div>

          {/* Visiting Card & Brand Visual */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-[#ff6a00]/30 shadow-2xl bg-black/60 group">
              <img
                src="/images/card-details.jpg"
                alt="Friends Graphics Visiting Card - Ranjan Sharma Patna"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="p-4 bg-[#0f1420]/90 border-t border-white/10 text-xs text-slate-300 flex items-center justify-between">
                <span>Verified Business Card Details</span>
                <span className="text-[#ff6a00] font-bold">Popular Palace, Patna</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <StatsBar />

      {/* Core Values & Printing Equipment */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Machinery & Technology */}
        <div className="bg-[#0f1420]/80 border border-white/10 rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              State-of-the-Art <span className="brand-gradient-text">Printing Infrastructure</span>
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              We continually invest in Japanese and European printing machinery to ensure color accuracy, sharp text, and weather resistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/30 border border-white/5 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#ff6a00]/10 border border-[#ff6a00]/25 flex items-center justify-center text-[#ff6a00]">
                <Printer className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Large Format Flex &amp; Vinyl Plotters</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Industrial Japanese piezoelectric printheads delivering up to 1440 DPI photorealistic resolution on star flex, vinyl stickers, and backlit translite films.
              </p>
            </div>

            <div className="bg-black/30 border border-white/5 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#ff6a00]/10 border border-[#ff6a00]/25 flex items-center justify-center text-[#ff6a00]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Multi-Color Commercial Offset Press</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                High-speed Heidelberg offset printing for 5,000 to 500,000 copy runs of catalogs, pamphlets, school diaries, and corrugated packaging cartons.
              </p>
            </div>

            <div className="bg-black/30 border border-white/5 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#ff6a00]/10 border border-[#ff6a00]/25 flex items-center justify-center text-[#ff6a00]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Precision Die-Cutting &amp; Finishing</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Hydraulic program cutters, thermal velvet laminators, foil stamping machines, and automated eyeleting tools for flawless finishing.
              </p>
            </div>
          </div>
        </div>

        {/* Why Trust Us - Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#0f1420]/60 border border-white/5 rounded-2xl p-6 space-y-2">
            <h4 className="text-lg font-bold text-white">12+ Years Heritage</h4>
            <p className="text-xs text-slate-400">Serving Patna continuously since 2014 with deep knowledge of substrates and print techniques.</p>
          </div>
          <div className="bg-[#0f1420]/60 border border-white/5 rounded-2xl p-6 space-y-2">
            <h4 className="text-lg font-bold text-white">Central Bari Path Hub</h4>
            <p className="text-xs text-slate-400">Easy accessibility for retail pickups, proof checks, and express courier dispatch across Bihar.</p>
          </div>
          <div className="bg-[#0f1420]/60 border border-white/5 rounded-2xl p-6 space-y-2">
            <h4 className="text-lg font-bold text-white">5,000+ Projects Done</h4>
            <p className="text-xs text-slate-400">From humble shop banners to massive institutional and political campaign requirements.</p>
          </div>
          <div className="bg-[#0f1420]/60 border border-white/5 rounded-2xl p-6 space-y-2">
            <h4 className="text-lg font-bold text-white">Direct Owner Support</h4>
            <p className="text-xs text-slate-400">Speak directly with Ranjan Sharma for tailored quotes, paper recommendations, and timelines.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
