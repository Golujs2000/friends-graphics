import React from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  CheckCircle2,
  Clock,
  Printer,
  ShieldCheck,
  Zap,
  Sliders,
  MapPin,
  XCircle,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { companyDetails } from '../data/servicesData';
import WhyUsGrid from '../components/WhyUsGrid';
import Testimonials from '../components/Testimonials';

export default function WhyUsPage() {
  return (
    <div className="py-12 sm:py-16 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-8">
          <Link to="/" className="hover:text-[#ff6a00] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#ff6a00]">Why Choose Us</span>
        </div>

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ff6a00]/10 border border-[#ff6a00]/25 text-[#ff6a00] mb-3">
            <span>Why Friends Graphics</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            The Precision &amp; Reliability Your Brand Deserves
          </h1>
          <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            Established in {companyDetails.established}, we have delivered over 5,000 commercial and event projects across Patna with an unmatched record for accuracy, color fidelity, and punctual deadlines.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <WhyUsGrid />

        {/* Comparison Section: Friends Graphics vs. Generic Local Printers */}
        <div className="mt-20 bg-[#0f1420]/80 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              The Friends Graphics <span className="brand-gradient-text">Difference</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              See why leading coaching institutes, hospitals, and retailers in Patna trust us over generic printing brokers.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase font-bold tracking-wider text-slate-400">
                  <th className="py-4 px-4">Feature / Standard</th>
                  <th className="py-4 px-4 text-[#ff6a00] bg-[#ff6a00]/5 rounded-t-xl">Friends Graphics</th>
                  <th className="py-4 px-4 text-slate-500">Generic Local Printers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">Printing Equipment</td>
                  <td className="py-4 px-4 bg-[#ff6a00]/5 text-white font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6a00] shrink-0" />
                    <span>In-House Japanese Roland &amp; Heidelberg Presses</span>
                  </td>
                  <td className="py-4 px-4 text-slate-400 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-500/70 shrink-0" />
                    <span>Outsourced 3rd-party third tier machines</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">Turnaround Speed</td>
                  <td className="py-4 px-4 bg-[#ff6a00]/5 text-white font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6a00] shrink-0" />
                    <span>Same-day &amp; 24-hr express priority runs</span>
                  </td>
                  <td className="py-4 px-4 text-slate-400 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-500/70 shrink-0" />
                    <span>Unpredictable delays &amp; vague commitments</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">Substrate Quality</td>
                  <td className="py-4 px-4 bg-[#ff6a00]/5 text-white font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6a00] shrink-0" />
                    <span>Genuine heavy Star Flex &amp; 350+ GSM art board</span>
                  </td>
                  <td className="py-4 px-4 text-slate-400 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-500/70 shrink-0" />
                    <span>Thin low-grade flex prone to tearing in wind</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">Finishing Quality</td>
                  <td className="py-4 px-4 bg-[#ff6a00]/5 text-white font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6a00] shrink-0" />
                    <span>Thermal lamination, reinforced brass eyelets</span>
                  </td>
                  <td className="py-4 px-4 text-slate-400 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-500/70 shrink-0" />
                    <span>Rough manual hand cuts &amp; loose eyelets</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">Direct Owner Support</td>
                  <td className="py-4 px-4 bg-[#ff6a00]/5 text-white font-medium flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6a00] shrink-0" />
                    <span>Direct WhatsApp line with Ranjan Sharma</span>
                  </td>
                  <td className="py-4 px-4 text-slate-400 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-500/70 shrink-0" />
                    <span>Multiple middlemen agents</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Testimonials */}
        <div className="pt-10">
          <Testimonials />
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-[#182236] to-[#151b2a] border border-[#ff6a00]/30 rounded-3xl p-8 sm:p-12 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Ready for Print Quality That Exceeds Expectations?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Discuss your upcoming project with our production team for quick turnaround and transparent pricing.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff6a00] to-[#ff8a00] text-white font-bold text-xs shadow-lg hover:scale-105 transition-all"
            >
              Get Free Quotation →
            </Link>
            <a
              href={`https://wa.me/${companyDetails.whatsappNumber}?text=Hi%20Friends%20Graphics,%20I%20have%20an%20urgent%20print%20order.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#25d366] text-black font-extrabold text-xs flex items-center gap-2 hover:bg-[#20ba59] transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-black stroke-black" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
