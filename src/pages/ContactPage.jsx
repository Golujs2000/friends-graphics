import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Navigation,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { companyDetails } from '../data/servicesData';
import QuickQuoteForm from '../components/QuickQuoteForm';

export default function ContactPage() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyDetails.address)}`;

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-8">
          <Link to="/" className="hover:text-[#ff6a00] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#ff6a00]">Contact Us</span>
        </div>

        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ff6a00]/10 border border-[#ff6a00]/25 text-[#ff6a00]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect With Our Patna Print Specialists</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            Get in Touch with <span className="brand-gradient-text">Friends Graphics</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300">
            Visit our Bari Path shop or chat with us on WhatsApp for fast custom quotes, sample inquiries, or bulk corporate printing orders.
          </p>
        </div>

        {/* Grid: Contact Information & Quote Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info & Map Card */}
          <div className="lg:col-span-6 space-y-6">
            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent("Hello Friends Graphics! I would like to inquire about printing services in Patna.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-3.5 px-5 rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${companyDetails.phonePrimary.replace(/[^0-9+]/g, '')}`}
                className="flex items-center justify-center gap-3 py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#ff6a00] to-[#ee0979] hover:opacity-95 text-white font-bold text-sm shadow-lg shadow-[#ff6a00]/20 transition-all hover:scale-[1.02]"
              >
                <Phone className="w-5 h-5" />
                <span>Call {companyDetails.phonePrimary}</span>
              </a>
            </div>

            {/* Detailed Info Cards */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-[#ff6a00]" />
                <span>Workshop & Shop Location</span>
              </h2>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#ff6a00]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Address</h3>
                    <p className="text-white font-semibold mt-0.5 leading-relaxed">
                      {companyDetails.address}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      (Popular Palace complex near Langartoli crossing, Bari Path print market)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-emerald-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Business Hours</h3>
                    <p className="text-white font-semibold mt-0.5">
                      {companyDetails.hours}
                    </p>
                    <p className="text-xs text-emerald-400 mt-1">
                      Same-day emergency banner printing available on request
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#ff6a00]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone Contacts</h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-0.5">
                      <a href={`tel:${companyDetails.phonePrimary.replace(/[^0-9+]/g, '')}`} className="text-white hover:text-[#ff6a00] font-semibold transition-colors">
                        {companyDetails.phonePrimary} (Primary)
                      </a>
                      <a href={`tel:${companyDetails.phoneSecondary.replace(/[^0-9+]/g, '')}`} className="text-white hover:text-[#ff6a00] font-semibold transition-colors">
                        {companyDetails.phoneSecondary}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-sky-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Support</h3>
                    <a href={`mailto:${companyDetails.email}`} className="text-white hover:text-sky-400 font-semibold mt-0.5 block transition-colors">
                      {companyDetails.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Directions Button */}
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Navigation className="w-5 h-5 text-[#ff6a00] group-hover:rotate-45 transition-transform" />
                  <span>Open Directions on Google Maps</span>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              </a>
            </div>

            {/* Why Contact Friends Graphics card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 space-y-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Direct Workshop Pricing in Patna</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                When you contact Friends Graphics, you speak directly with printing technicians and operators at our Bari Path facility — no third-party agent markups, no hidden charges.
              </p>
              <div className="grid grid-cols-2 gap-2 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Instant WhatsApp Proofs</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Doorstep Delivery Option</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>B2B GST Invoicing</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Free Design Consultation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quote Form (No file upload, directs to WhatsApp) */}
          <div className="lg:col-span-6">
            <QuickQuoteForm />
          </div>
        </div>

        {/* Map / Visit Us Visual Guide */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 overflow-hidden mt-12 sm:mt-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl font-bold text-white">How to Reach Friends Graphics</h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Located in the heart of Bari Path, Patna's primary commercial hub for stationery and printing
              </p>
            </div>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#ff6a00] hover:bg-[#ff7b1a] text-white text-xs font-bold transition-colors w-fit"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
              <span className="text-xs font-bold text-[#ff6a00] uppercase tracking-wider">From Patna Junction</span>
              <p className="text-sm text-white font-medium">Approx. 3.2 km (12-15 mins)</p>
              <p className="text-xs text-slate-400">Head via Dak Bungalow / Gandhi Maidan towards Bari Path and Langartoli.</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
              <span className="text-xs font-bold text-[#ff6a00] uppercase tracking-wider">From Gandhi Maidan</span>
              <p className="text-sm text-white font-medium">Approx. 2.0 km (8-10 mins)</p>
              <p className="text-xs text-slate-400">Direct auto or e-rickshaw available straight down Bari Path to Popular Palace.</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
              <span className="text-xs font-bold text-[#ff6a00] uppercase tracking-wider">Landmarks Nearby</span>
              <p className="text-sm text-white font-medium">Langartoli Chauraha & Machhua Toli</p>
              <p className="text-xs text-slate-400">Ask for Popular Palace commercial complex, basement shop B-12.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
