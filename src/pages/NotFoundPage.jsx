import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, MessageCircle, Flag, Search, Phone } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { companyDetails } from '../data/servicesData';

export default function NotFoundPage() {
  return (
    <div className="py-20 sm:py-28 text-center">
      <SEOHead
        title="404 — Page Not Found"
        description="The page you requested could not be found. Explore our complete printing and election campaign services in Patna."
        canonicalPath="/404"
        noIndex={true}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="inline-block text-6xl sm:text-8xl font-black text-[#ff6a00] font-mono tracking-wider drop-shadow-[0_0_25px_rgba(255,106,0,0.4)]">
          404
        </div>

        <h1 className="text-2xl sm:text-4xl font-black text-white">
          Page Not Found / पृष्ठ नहीं मिला
        </h1>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          The link you clicked may be outdated or the page has moved. Don't worry! Explore our main services below or speak directly with our team.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff6a00] to-[#ff8a00] text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-[#ff6a00]/30 hover:scale-105 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home Page</span>
          </Link>

          <Link
            to="/services?category=election"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-[#ff6a00] text-white font-bold text-sm flex items-center gap-2 shadow-lg hover:scale-105 transition-all"
          >
            <Flag className="w-4 h-4 fill-white" />
            <span>चुनाव प्रचार सामग्री</span>
          </Link>

          <Link
            to="/services"
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm flex items-center gap-2 transition-all"
          >
            <span>All Printing Catalog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="pt-8 border-t border-white/10 text-xs text-slate-400">
          Need urgent assistance? Call us directly at{' '}
          <a href={`tel:${companyDetails.phonePrimary}`} className="text-[#ff6a00] font-bold hover:underline">
            {companyDetails.phonePrimary}
          </a>{' '}
          or chat on{' '}
          <a
            href={`https://wa.me/${companyDetails.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 font-bold hover:underline"
          >
            WhatsApp
          </a>.
        </div>
      </div>
    </div>
  );
}

