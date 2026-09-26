import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Clock,
  Layers,
  Sparkles,
  Phone,
  ShieldCheck,
  ZoomIn,
  X
} from 'lucide-react';
import { servicesData, companyDetails } from '../data/servicesData';
import QuickQuoteForm from '../components/QuickQuoteForm';

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const [previewImage, setPreviewImage] = useState(null);
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link to="/" className="hover:text-[#ff6a00] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-[#ff6a00] transition-colors">Services</Link>
          <span>/</span>
          <span className="text-[#ff6a00]">{service.title}</span>
        </div>

        {/* Service Hero Banner */}
        <div className="bg-[#0f1420]/80 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ff6a00]/15 text-[#ff6a00] border border-[#ff6a00]/30">
                <span>Service #{service.id} • Professional Printing</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                {service.title} in <span className="brand-gradient-text">Patna</span>
              </h1>
              <p className="text-base text-[#ff6a00] font-semibold">
                {service.tagline}
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                {service.fullDesc}
              </p>

              {/* Turnaround & Order Meta */}
              <div className="flex flex-wrap items-center gap-6 pt-3 text-xs text-slate-300 border-t border-white/5">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#ff6a00]" />
                  <span>Turnaround: <strong>{service.turnaround}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#ff6a00]" />
                  <span>Minimum Order: <strong>{service.minOrder}</strong></span>
                </div>
              </div>

              {/* Quick Action CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href={`https://wa.me/${companyDetails.whatsappNumber}?text=Hi%20Friends%20Graphics,%20I%20would%20like%20to%20order%20or%20get%20pricing%20for%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-[#25d366] text-black font-extrabold text-sm flex items-center gap-2 hover:bg-[#20ba59] shadow-lg shadow-[#25d366]/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-black stroke-black" />
                  <span>Order on WhatsApp Now</span>
                </a>

                <a
                  href={`tel:${companyDetails.phonePrimary}`}
                  className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-sm flex items-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-[#ff6a00]" />
                  <span>Call {companyDetails.phonePrimary}</span>
                </a>
              </div>
            </div>

            {/* Featured Hero Visual (Full width & height, uncropped) */}
            <div
              onClick={() => setPreviewImage({ url: service.heroImage, title: service.title })}
              className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-[#ff6a00]/30 shadow-2xl group aspect-[4/3] bg-black/60 p-2.5 flex items-center justify-center cursor-pointer"
            >
              <img
                src={service.heroImage}
                alt={service.title}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-[11px] font-bold text-white flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3.5 h-3.5 text-[#ff6a00]" />
                <span>Full Size</span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 text-xs text-slate-300 flex items-center justify-between">
                <span>Estd. {companyDetails.established} • Bari Path Hub</span>
                <span className="text-[#ff6a00] font-bold">100% Quality Guaranteed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications Grid: Materials, Finishes, Popular Sizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Substrates & Materials */}
          <div className="bg-[#0f1420]/80 border border-white/10 rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff6a00]"></span>
              Substrates &amp; Materials
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              {service.materials.map((mat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ff6a00] shrink-0 mt-0.5" />
                  <span>{mat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Finishes & Enhancements */}
          <div className="bg-[#0f1420]/80 border border-white/10 rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff6a00]"></span>
              Finishing Options
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              {service.finishes.map((fin, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ff6a00] shrink-0 mt-0.5" />
                  <span>{fin}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3: Standard Dimensions */}
          <div className="bg-[#0f1420]/80 border border-white/10 rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff6a00]"></span>
              Popular Dimensions
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              {service.popularSizes.map((size, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ff6a00] shrink-0 mt-0.5" />
                  <span>{size}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Real Sample Images Gallery */}
        {service.sampleImages && service.sampleImages.length > 1 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Sample Production Works &amp; Varieties
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Actual samples printed at Friends Graphics workshop in Popular Palace, Patna.
                </p>
              </div>
              <Link to="/portfolio" className="text-xs font-bold text-[#ff6a00] hover:underline hidden sm:block">
                View All Works →
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {service.sampleImages.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setPreviewImage({ url: img, title: `${service.title} - Sample ${i + 1}` })}
                  className="rounded-xl overflow-hidden border border-white/10 bg-black/60 aspect-[4/3] p-2 flex items-center justify-center group relative cursor-pointer hover:border-[#ff6a00]/50 transition-all"
                >
                  <img
                    src={img}
                    alt={`${service.title} sample ${i + 1}`}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-black/80 text-[10px] text-white flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-3 h-3 text-[#ff6a00]" />
                  </div>
                  <div className="absolute bottom-2 inset-x-2 bg-black/85 backdrop-blur-sm rounded-lg py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between text-[11px]">
                    <span className="text-white text-[10px]">Full View</span>
                    <a
                      href={`https://wa.me/${companyDetails.whatsappNumber}?text=Hi%20Friends%20Graphics,%20I%20like%20this%20sample%20of%20${encodeURIComponent(service.title)}%20and%20want%20similar%20printing.`}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25d366] font-bold hover:underline"
                    >
                      Inquire
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recommended Applications / Use Cases */}
        <div className="bg-[#0f1420]/60 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-4">
          <h3 className="text-lg font-bold text-white">Recommended Applications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-300">
            {service.useCases.map((uc, i) => (
              <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-black/30 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-[#ff6a00] shrink-0" />
                <span>{uc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dedicated Quick Quote Form pre-filled for this service */}
        <div className="pt-6">
          <QuickQuoteForm preselectedService={service.title} />
        </div>

        {/* Other Services Navigation Footer */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-lg font-bold text-white">Explore Other Services</h4>
            <Link to="/services" className="text-xs font-bold text-[#ff6a00] hover:underline">
              All 8 Services →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {servicesData
              .filter((s) => s.slug !== service.slug)
              .slice(0, 4)
              .map((other) => (
                <Link
                  key={other.slug}
                  to={`/services/${other.slug}`}
                  className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-center text-xs font-semibold text-slate-300 hover:text-white transition-all group"
                >
                  <span>{other.title}</span>
                  <ArrowRight className="w-3 h-3 text-[#ff6a00] mx-auto mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
          </div>
        </div>

        {/* Full Size Image Lightbox Modal */}
        {previewImage && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={() => setPreviewImage(null)}
          >
            <div
              className="bg-[#0f1420] border border-[#ff6a00]/40 rounded-2xl max-w-5xl w-full overflow-hidden shadow-2xl relative flex flex-col max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 bg-[#141b2b] border-b border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-white">{previewImage.title}</h4>
                  <p className="text-xs text-[#ff6a00]">Original Full Width & Height Specimen</p>
                </div>
                <button
                  onClick={() => setPreviewImage(null)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#ff6a00] text-white flex items-center justify-center transition-colors"
                  aria-label="Close Preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 bg-black flex-1 flex items-center justify-center overflow-auto min-h-[300px]">
                <img
                  src={previewImage.url}
                  alt={previewImage.title}
                  className="max-h-[75vh] w-auto h-auto max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
