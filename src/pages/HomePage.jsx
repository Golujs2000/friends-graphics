import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  MessageCircle,
  Award,
  Zap,
  Layers,
  Store,
  HeartPulse,
  GraduationCap,
  Building2,
  PartyPopper,
  Home as HomeIcon,
  Utensils,
  Megaphone,
  CheckCircle2,
  Phone,
  Flag
} from 'lucide-react';
import { servicesData, companyDetails, industriesData } from '../data/servicesData';
import StatsBar from '../components/StatsBar';
import ProcessFlow from '../components/ProcessFlow';
import WhyUsGrid from '../components/WhyUsGrid';
import Testimonials from '../components/Testimonials';
import FAQAccordion from '../components/FAQAccordion';
import QuickQuoteForm from '../components/QuickQuoteForm';
import ChunavSamagriShowcase from '../components/ChunavSamagriShowcase';
import RealWorkCarousel from '../components/RealWorkCarousel';
import SEOHead from '../components/SEOHead';
import { getLocalBusinessSchema, getWebSiteSchema } from '../data/schemaData';

const iconMap = {
  Flag,
  Store,
  HeartPulse,
  GraduationCap,
  Building2,
  PartyPopper,
  Home: HomeIcon,
  Utensils,
  Megaphone
};

export default function HomePage() {
  const homeSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      getLocalBusinessSchema(),
      getWebSiteSchema()
    ]
  };

  return (
    <div className="space-y-0">
      <SEOHead
        title="Friends Graphics — चुनाव प्रचार सामग्री एवं Printing Services in Patna"
        description="Bihar's leading printing press & wholesale election campaign material hub in Bari Path, Patna. Candidate rally flags, posters, canopy tents, flex banners & offset printing."
        canonicalPath="/"
        keywords="printing press patna, chunav prachar samagri bihar, election flag manufacturer patna, flex printing bari path, election materials bihar, bari path printing shop"
        schemaJson={homeSchema}
      />

      {/* 1. Hero Section (Panoramic Studio Background) */}
      <section className="relative w-full min-h-[580px] lg:min-h-[640px] flex items-center bg-[#080b11] py-12 lg:py-16 overflow-hidden">
        {/* Full-width Background Image with Right Positioning */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-[center_right] sm:bg-right"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(8,11,17,0.98) 0%, rgba(8,11,17,0.92) 36%, rgba(8,11,17,0.60) 65%, rgba(8,11,17,0.25) 85%, rgba(8,11,17,0.65) 100%), url('/images/hero-bg-election.jpg')`
          }}
        />

        {/* Ambient Subtle Radial Glow */}
        <div className="absolute inset-0 bg-radial from-[#ff6a00]/10 via-transparent to-transparent pointer-events-none z-1" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-3xl">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-amber-400 mb-3 bg-red-600/20 border border-[#ff6a00]/40 px-3.5 py-1 rounded-full shadow-lg">
              <span className="text-base">🚩</span>
              <span>बिहार का नं. 1 चुनाव प्रचार सामग्री केंद्र • BIHAR'S #1 ELECTION MATERIAL HUB</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.18] tracking-tight mb-4">
              <span className="text-[#ff6a00]">चुनाव प्रचार सामग्री</span> एवं संपूर्ण प्रिंटिंग<br />
              <span className="text-slate-100 font-extrabold text-2xl sm:text-3xl lg:text-4xl block mt-1">
                All Election Campaign Materials &amp; Commercial Printing in Patna
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-2xl">
              <strong>सांसद, विधायक, जिला परिषद, मुखिया, चेयरमैन एवं मेयर प्रत्याशी प्रचार सामग्री</strong> — कपड़ा व साटन झंडे, चुनावी पोस्टर, फ्लेक्स बैनर, वाटरप्रूफ कैनोपी टेंट, प्रचार टोपी, बैज, टी-शर्ट और वोटर पर्ची — सीधे फैक्ट्री थोक भाव पर। 24 से 48 घंटे में पूरे बिहार व पूर्वी उत्तर प्रदेश में सुपरफास्ट डिलीवरी।
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <a
                href={`https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent("नमस्ते फ्रेंड्स ग्राफिक्स! मुझे चुनाव प्रचार सामग्री (झंडे, पोस्टर, कैनोपी टेंट, टोपी, बैज) की थोक रेट लिस्ट और सैंपल चाहिए।")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white font-black text-sm flex items-center gap-2 shadow-xl shadow-emerald-500/25 hover:scale-[1.02] transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>🚩 चुनावी रेट लिस्ट (WhatsApp)</span>
              </a>

              <a
                href="#election-material"
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#ff6a00] to-[#ff8a00] text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-[#ff6a00]/30 hover:scale-[1.02] transition-all"
              >
                <span>चुनाव सामग्री देखें</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                to="/services"
                className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-xs sm:text-sm flex items-center gap-1.5 backdrop-blur-md transition-all"
              >
                <span>अन्य प्रिंटिंग सेवाएं</span>
              </Link>
            </div>

            {/* Trust Highlights (3 Circular Icon Badges) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 border-t border-white/10">
              {/* Badge 1 */}
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full border border-red-500 bg-red-500/10 flex items-center justify-center shrink-0 text-red-500 shadow-[0_0_12px_rgba(239,68,68,0.25)] group-hover:bg-red-500 group-hover:text-white transition-all">
                  <Flag className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white leading-tight">100% पार्टी सिंबल कलर</div>
                  <div className="text-[11px] text-slate-400">Non-Bleed Vibrant Inks</div>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full border border-[#ff6a00] bg-[#ff6a00]/10 flex items-center justify-center shrink-0 text-[#ff6a00] shadow-[0_0_12px_rgba(255,106,0,0.25)] group-hover:bg-[#ff6a00] group-hover:text-white transition-all">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white leading-tight">1 लाख+ झंडे/पोस्टर रोज़</div>
                  <div className="text-[11px] text-slate-400">High-Speed Offset Press</div>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full border border-emerald-500 bg-emerald-500/10 flex items-center justify-center shrink-0 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.25)] group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white leading-tight">पूरे बिहार व UP सीमावर्ती डिलीवरी</div>
                  <div className="text-[11px] text-slate-400">बिहार + बलिया, कुशीनगर, देवरिया (24-36h)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Floating Quick Highlights (Desktop Only) */}
          <div className="hidden xl:flex flex-col gap-3.5 shrink-0 w-72">
            <div className="bg-[#0f1422]/85 backdrop-blur-md border border-red-500/35 rounded-2xl p-4 shadow-2xl flex items-center gap-3 hover:border-red-400 transition-all hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center shrink-0 text-red-400">
                <Flag className="w-5 h-5 fill-red-500" />
              </div>
              <div>
                <div className="text-xs font-black text-white">चुनावी झंडे • थोक भाव</div>
                <div className="text-[11px] text-amber-300 font-semibold">कपड़ा, साटन व पेपर झंडे</div>
              </div>
            </div>

            <div className="bg-[#0f1422]/85 backdrop-blur-md border border-[#ff6a00]/35 rounded-2xl p-4 shadow-2xl flex items-center gap-3 hover:border-[#ff6a00] transition-all hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-[#ff6a00]/20 border border-[#ff6a00]/40 flex items-center justify-center shrink-0 text-[#ff6a00]">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-black text-white">24h एक्सप्रेस प्रिंटिंग</div>
                <div className="text-[11px] text-slate-300">1 लाख+ दैनिक निर्माण क्षमता</div>
              </div>
            </div>

            <div className="bg-[#0f1422]/85 backdrop-blur-md border border-emerald-500/35 rounded-2xl p-4 shadow-2xl flex items-center gap-3 hover:border-emerald-400 transition-all hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center shrink-0 text-emerald-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-black text-white">कैंडिडेट प्रचार किट</div>
                <div className="text-[11px] text-emerald-300">कैनोपी, पोस्टर, टोपी व बैज</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quick Stats Bar */}
      <StatsBar />

      {/* 3. Chunav Samagri Featured Showcase (Special Election Section) */}
      <ChunavSamagriShowcase />

      {/* 3.5 Real Work & Workshop Showcase Carousel (180+ Actual Photos) */}
      <RealWorkCarousel />

      {/* 4. Complete Printing Solutions Under One Roof */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ff6a00]/10 border border-[#ff6a00]/25 text-[#ff6a00] mb-3">
              <span>कमर्शियल व अन्य प्रिंटिंग • Commercial Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Complete Printing &amp; Election Solutions <span className="brand-gradient-text">Under One Roof</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">
              From candidate election kits and promotional flags to commercial offset printing, ID cards, and custom packaging, Friends Graphics has you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((svc) => (
              <div
                key={svc.slug}
                className="bg-[#0f1420]/80 border border-white/10 rounded-2xl overflow-hidden hover:border-[#ff6a00]/40 transition-all hover:-translate-y-1.5 hover:shadow-2xl flex flex-col group"
              >
                {/* Image (Full width & height, uncropped) */}
                <Link to={`/services/${svc.slug}`} className="h-56 sm:h-60 overflow-hidden relative bg-black/60 p-2.5 flex items-center justify-center block">
                  <img
                    src={svc.heroImage}
                    alt={svc.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-2 py-1 rounded bg-black/80 backdrop-blur-md text-[10px] font-bold text-[#ff6a00] border border-[#ff6a00]/30">
                    #{svc.id}
                  </div>
                </Link>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center justify-between gap-2 mb-1.5 min-h-[18px]">
                    {svc.hindiTitle ? (
                      <span className="text-xs font-bold text-[#ff6a00] truncate">{svc.hindiTitle}</span>
                    ) : (
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">{svc.shortTitle}</span>
                    )}
                    <span className="text-[10px] text-slate-500 font-mono shrink-0">#{svc.id}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#ff6a00] transition-colors mb-1.5 leading-snug">
                    <Link to={`/services/${svc.slug}`} className="hover:text-[#ff6a00] transition-colors block">
                      {svc.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4 flex-grow">
                    {svc.shortDesc}
                  </p>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <Link
                      to={`/services/${svc.slug}`}
                      className="text-xs font-bold text-[#ff6a00] hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={`https://wa.me/${companyDetails.whatsappNumber}?text=Hi%20Friends%20Graphics,%20I%20want%20a%20quote%20for%20${encodeURIComponent(svc.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-[#25d366]/10 hover:bg-[#25d366] text-[#25d366] hover:text-black transition-colors"
                      title="Quick Quote on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-sm transition-all"
            >
              <span>View All {servicesData.length} Printing Services in Detail</span>
              <ArrowRight className="w-4 h-4 text-[#ff6a00]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Friends Graphics */}
      <WhyUsGrid />

      {/* 6. Printing Process (01 to 06) */}
      <ProcessFlow />

      {/* 7. Industries We Serve */}
      <section className="py-20 relative bg-black/20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ff6a00]/10 border border-[#ff6a00]/25 text-[#ff6a00] mb-3">
              <span>Sectors &amp; Industries</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Printing Solutions for <span className="brand-gradient-text">Every Requirement</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">
              Whether you run a retail shop, hospital, school, or corporate office in Patna, we customize dimensions and finishes to your exact industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industriesData.map((ind, i) => {
              const Icon = iconMap[ind.icon] || Store;
              return (
                <div
                  key={i}
                  className="bg-[#0f1420]/70 border border-white/10 rounded-xl p-5 hover:border-[#ff6a00]/40 transition-all hover:-translate-y-1 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#ff6a00]/10 border border-[#ff6a00]/25 flex items-center justify-center shrink-0 text-[#ff6a00]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{ind.name}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{ind.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Large-Format Flex, Giant Hoardings & Highway Billboards (Moved Down with Big Flex Image) */}
      <section className="py-20 relative bg-gradient-to-b from-[#0a0e17] via-[#101625] to-[#0a0e17] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ff6a00]/10 border border-[#ff6a00]/25 text-[#ff6a00]">
                <span>विशालकाय आउटडोर फ्लेक्स व होर्डिंग्स • Large Format Production</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Large Format Flex &amp; <br /><span className="brand-gradient-text">Giant Outdoor Hoardings</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Friends Graphics is equipped with high-speed Japanese wide-format roll-to-roll plotters and heavy-duty 440 GSM Star Flex media. From 20x10 ft massive highway hoardings and political rally stage backdrops to welded MS iron shopfront frames — get vibrant, weather-resistant outdoor branding with brass eyelets and reinforced hem stitching.
              </p>

              {/* Use Cases Pills */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Key Outdoor Large-Format Applications:
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-200">
                  {[
                    "Highway & Bypass Billboards",
                    "Massive Election Rally Backdrops",
                    "MS Iron Welded Shop Hoardings",
                    "Event Welcome Gates & Portals",
                    "Real Estate Site Hoardings",
                    "Coaching & School Mega Banners",
                    "Backlit Commercial Lightboxes",
                    "Roll-Up Exhibition Standees"
                  ].map((uc, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6a00] shrink-0" />
                      <span>{uc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/services/flex-printing-services"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff6a00] to-[#ff8a00] text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-[#ff6a00]/30 hover:scale-[1.02] transition-all"
                >
                  <span>Flex &amp; Hoarding Printing Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent("नमस्ते फ्रेंड्स ग्राफिक्स! मुझे लार्ज-फॉर्मेट फ्लेक्स / आउटडोर होर्डिंग (Star Flex) का कोटेशन चाहिए।")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-sm flex items-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Flex Printing Quote (WhatsApp)</span>
                </a>
              </div>
            </div>

            {/* Right Visual Image - BIG FLEX HOARDING IMAGE */}
            <div className="relative rounded-2xl overflow-hidden border border-[#ff6a00]/30 shadow-2xl group">
              <img
                src="/images/large-format-flex-hoarding-banner.jpg"
                alt="Friends Graphics Large Format Flex Hoarding Banner Printing Press"
                className="w-full h-[440px] object-cover group-hover:scale-102 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-6">
                <div className="bg-[#0f1420]/95 backdrop-blur-md border border-[#ff6a00]/30 rounded-xl p-4 w-full shadow-xl">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-extrabold text-[#ff6a00] uppercase tracking-wider">
                      Industrial Roll-to-Roll Japanese Plotters
                    </span>
                    <span className="text-[10px] bg-red-600/30 text-red-400 px-2 py-0.5 rounded font-mono font-bold">
                      Up to 10.5 ft Seamless
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Heavy-duty 440 GSM Star Flex, rust-free brass eyelets &amp; weather-resistant heat-welded hem stitching.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Bulk & Business Printing (B2B Conversion Section) */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#161f30] via-[#1a1622] to-[#1e1308] border border-[#ff6a00]/35 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ff6a00]/15 text-[#ff6a00] border border-[#ff6a00]/30">
                  <span>B2B Commercial Accounts</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  Need Printing in Bulk? <br />
                  <span className="text-[#ff6a00]">We've Got You Covered.</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                  Whether you're a business, marketing agency, educational institute, organization or event planner, we handle recurring bulk printing with consistent color matching and guaranteed delivery deadlines.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6a00]" />
                    <span>Discounted Slab Pricing for 1,000+ Units</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6a00]" />
                    <span>Priority Express Machine Dispatch</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6a00]" />
                    <span>Dedicated Account Production Manager</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#ff6a00]" />
                    <span>Monthly Corporate Billing Available</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center space-y-4">
                <h4 className="text-base font-bold text-white">Bulk Print Consultation</h4>
                <p className="text-xs text-slate-400">
                  Speak directly with proprietor Ranjan Sharma for bulk slab discounts.
                </p>
                <div className="space-y-2.5">
                  <a
                    href={`tel:${companyDetails.phonePrimary}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <Phone className="w-4 h-4 text-[#ff6a00]" />
                    <span>Call {companyDetails.phonePrimary}</span>
                  </a>
                  <a
                    href={`https://wa.me/${companyDetails.whatsappNumber}?text=Hi%20Friends%20Graphics,%20I%20have%20a%20bulk%20printing%20requirement%20for%20our%20organization.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-[#25d366] text-black font-extrabold text-xs flex items-center justify-center gap-2 hover:bg-[#20ba59] transition-all shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-black stroke-black" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Testimonials */}
      <Testimonials />

      {/* 10. FAQ Section */}
      <FAQAccordion />

      {/* 11. Strong Conversion CTA Banner */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#182236] via-[#20150d] to-[#151b2a] border border-[#ff6a00]/40 rounded-3xl p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Have a Printing Requirement? <br />
              <span className="brand-gradient-text">Let's Get It Printed.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8">
              Tell us what you need. We'll help you select the ideal paper stock, banner substrate, and finishing options with transparent instant pricing.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#ff6a00] to-[#ff8a00] text-white font-bold text-sm shadow-xl shadow-[#ff6a00]/30 hover:scale-105 transition-all"
              >
                Get a Free Quote →
              </Link>
              <a
                href={`https://wa.me/${companyDetails.whatsappNumber}?text=Hi%20Friends%20Graphics,%20I%20have%20an%20urgent%20printing%20requirement.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-xl bg-[#25d366] text-black font-extrabold text-sm flex items-center gap-2 hover:bg-[#20ba59] transition-all shadow-xl"
              >
                <MessageCircle className="w-4 h-4 fill-black stroke-black" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Quick Quote Section (No File Upload) */}
      <section className="py-20 relative bg-[#080b11]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ff6a00]/10 border border-[#ff6a00]/25 text-[#ff6a00]">
                <span>Contact Us Directly</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white">
                Let's Talk About Your <br /><span className="brand-gradient-text">Printing Requirement</span>
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Walk in to our central Bari Path workshop in Popular Palace or chat with our team on WhatsApp for prompt quotations and physical material sample swatches.
              </p>

              <div className="bg-[#0f1420]/80 border border-white/10 rounded-2xl p-6 space-y-4 text-sm text-slate-300">
                <div>
                  <span className="text-xs uppercase font-bold text-slate-400 block mb-1">Workshop Address</span>
                  <p className="text-white font-medium">{companyDetails.address}</p>
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-slate-400 block mb-1">Key Contact Person</span>
                  <p className="text-white font-medium">{companyDetails.founder} (Proprietor)</p>
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-slate-400 block mb-1">Phone / WhatsApp</span>
                  <p className="text-white font-medium">
                    <a href={`tel:${companyDetails.phonePrimary}`} className="text-[#ff6a00] hover:underline mr-3">
                      {companyDetails.phonePrimary}
                    </a>
                    <a href={`tel:${companyDetails.phoneSecondary}`} className="hover:underline">
                      {companyDetails.phoneSecondary}
                    </a>
                  </p>
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-slate-400 block mb-1">Official Email</span>
                  <a href={`mailto:${companyDetails.email}`} className="text-[#ff6a00] hover:underline">
                    {companyDetails.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Quote Generator Form */}
            <div className="lg:col-span-7">
              <QuickQuoteForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
