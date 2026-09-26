import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, CheckCircle2, ShieldCheck } from 'lucide-react';
import { servicesData, companyDetails } from '../data/servicesData';
import QuickQuoteForm from '../components/QuickQuoteForm';

export default function ServicesPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ff6a00]/10 border border-[#ff6a00]/25 text-[#ff6a00] mb-3">
            <span>Our Full Printing Spectrum</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            Professional Printing Services in <span className="brand-gradient-text">Patna</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            Established in {companyDetails.established}, Friends Graphics provides state-of-the-art printing solutions for businesses, institutions, events, and individuals across Bihar.
          </p>
        </div>

        {/* Services List / Cards */}
        <div className="space-y-12">
          {servicesData.map((svc, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={svc.slug}
                id={svc.slug}
                className={`bg-[#0f1420]/80 border border-white/10 rounded-3xl p-6 sm:p-10 hover:border-[#ff6a00]/40 transition-all shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}
              >
                {/* Visual / Image */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : ''}`}>
                  <Link
                    to={`/services/${svc.slug}`}
                    className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 group aspect-[4/3] p-3 flex items-center justify-center block"
                  >
                    <img
                      src={svc.heroImage}
                      alt={svc.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-black/80 backdrop-blur-md text-xs font-bold text-[#ff6a00] border border-[#ff6a00]/30">
                      Service {svc.id}
                    </div>
                  </Link>
                </div>

                {/* Content */}
                <div className={`lg:col-span-7 space-y-5 ${isEven ? 'lg:order-1' : ''}`}>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-[#ff6a00]">
                      {svc.tagline}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                      <Link to={`/services/${svc.slug}`} className="hover:text-[#ff6a00] transition-colors">
                        {svc.title}
                      </Link>
                    </h2>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {svc.fullDesc}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 pt-2">
                    <div>
                      <span className="font-bold text-slate-400 block mb-1">Key Materials:</span>
                      <ul className="space-y-1">
                        {svc.materials.slice(0, 2).map((m, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6a00] shrink-0" />
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="font-bold text-slate-400 block mb-1">Popular Finishes:</span>
                      <ul className="space-y-1">
                        {svc.finishes.slice(0, 2).map((f, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6a00] shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-3">
                    <Link
                      to={`/services/${svc.slug}`}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#ff6a00] to-[#ff8a00] text-white font-bold text-xs flex items-center gap-2 shadow-md hover:scale-[1.02] transition-all"
                    >
                      <span>Explore Detailed Specs &amp; Sizes</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={`https://wa.me/${companyDetails.whatsappNumber}?text=Hi%20Friends%20Graphics,%20I%20would%20like%20a%20quotation%20for%20${encodeURIComponent(svc.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-[#25d366]/15 hover:bg-[#25d366] text-[#25d366] hover:text-black font-bold text-xs flex items-center gap-2 border border-[#25d366]/30 transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Instant WhatsApp Quote</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Quote Form Section */}
        <div className="mt-20">
          <QuickQuoteForm />
        </div>
      </div>
    </div>
  );
}
