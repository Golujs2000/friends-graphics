import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, ArrowRight, Flag, Building2, BookOpen, MapPin, ShieldCheck } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { servicesData } from '../data/servicesData';
import { blogPosts } from '../data/blogData';
import { locationsData } from '../data/locationsData';
import { getBreadcrumbSchema } from '../data/schemaData';

export default function SitemapPage() {
  const electionServices = servicesData.filter((s) =>
    ['plastic-election-flag', 'paper-election-flag', 'nylon-election-flag', 'national-paper-flag', 'election-campaign-poster', 'election-management-services'].includes(s.slug)
  );

  const signageServices = servicesData.filter((s) =>
    ['led-acrylic-sign-board', 'led-acp-glow-sign-board', 'outdoor-acp-sign-board', 'brass-sign-board', 'led-sign-boards'].includes(s.slug)
  );

  const commercialServices = servicesData.filter((s) =>
    !electionServices.some((e) => e.slug === s.slug) && !signageServices.some((sg) => sg.slug === s.slug)
  );

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'HTML Sitemap', url: '/sitemap' }
  ];

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <SEOHead
        title="HTML Sitemap — Complete Crawlable Index of All Services & Guides"
        description="Complete site index for Friends Graphics Patna. Direct crawlable navigation links to all election materials, commercial printing services, sign boards, location hubs, and technical guides."
        canonicalPath="/sitemap"
        keywords="sitemap friends graphics, website index patna printing press"
        schemaJson={getBreadcrumbSchema(breadcrumbs)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link to="/" className="hover:text-[#ff6a00] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#ff6a00]">HTML Sitemap</span>
        </nav>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#ff6a00]/15 text-[#ff6a00] border border-[#ff6a00]/30">
            <Layers className="w-3.5 h-3.5" />
            <span>SEARCH ENGINE CRAWLABLE ARCHITECTURE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            Complete Website <span className="brand-gradient-text">Index &amp; Sitemap</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300">
            Easily navigate every service specification, location hub, election publicity product, and technical printing guide across our website.
          </p>
        </div>

        {/* Sitemap Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 1. Core Brand Pages */}
          <div className="bg-[#0f1422] border border-white/10 rounded-2xl p-6 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
              <Building2 className="w-5 h-5 text-[#ff6a00]" />
              <span>Core Brand &amp; Company</span>
            </h2>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-slate-300 hover:text-[#ff6a00] flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#ff6a00]" />
                  <span>Home Page (मुख्य पृष्ठ)</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-[#ff6a00] flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#ff6a00]" />
                  <span>About Us (हमारे बारे में)</span>
                </Link>
              </li>
              <li>
                <Link to="/why-us" className="text-slate-300 hover:text-[#ff6a00] flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#ff6a00]" />
                  <span>Why Choose Friends Graphics</span>
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-slate-300 hover:text-[#ff6a00] flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#ff6a00]" />
                  <span>Work Portfolio &amp; Photos</span>
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-slate-300 hover:text-[#ff6a00] flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#ff6a00]" />
                  <span>Client Reviews &amp; Testimonials</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-[#ff6a00] flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#ff6a00]" />
                  <span>Contact Us &amp; Workshop Map</span>
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-slate-300 hover:text-[#ff6a00] flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#ff6a00]" />
                  <span>Frequently Asked Questions (FAQs)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* 2. Chunav Prachar Samagri */}
          <div className="bg-[#0f1422] border border-red-500/30 rounded-2xl p-6 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
              <Flag className="w-5 h-5 text-red-500 fill-red-500" />
              <span>चुनाव प्रचार सामग्री (Election)</span>
            </h2>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/services?category=election" className="text-amber-300 font-bold hover:text-white flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-red-500" />
                  <span>All Election Materials Hub</span>
                </Link>
              </li>
              {electionServices.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-slate-300 hover:text-[#ff6a00] flex items-center gap-1.5">
                    <ArrowRight className="w-3.5 h-3.5 text-[#ff6a00]" />
                    <span>{s.hindiTitle ? `${s.hindiTitle} (${s.title})` : s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Signage & LED Boards */}
          <div className="bg-[#0f1422] border border-white/10 rounded-2xl p-6 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
              <Building2 className="w-5 h-5 text-[#ff6a00]" />
              <span>Signage &amp; LED Glow Boards</span>
            </h2>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/services?category=signage" className="text-[#ff6a00] font-semibold hover:text-white flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#ff6a00]" />
                  <span>All Signage Solutions</span>
                </Link>
              </li>
              {signageServices.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-slate-300 hover:text-[#ff6a00] flex items-center gap-1.5">
                    <ArrowRight className="w-3.5 h-3.5 text-[#ff6a00]" />
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Commercial & Offset Printing */}
          <div className="bg-[#0f1422] border border-white/10 rounded-2xl p-6 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
              <Layers className="w-5 h-5 text-[#ff6a00]" />
              <span>Commercial &amp; Offset Printing</span>
            </h2>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/services?category=commercial" className="text-[#ff6a00] font-semibold hover:text-white flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#ff6a00]" />
                  <span>All Commercial Services</span>
                </Link>
              </li>
              {commercialServices.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-slate-300 hover:text-[#ff6a00] flex items-center gap-1.5">
                    <ArrowRight className="w-3.5 h-3.5 text-[#ff6a00]" />
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Geographic Service Areas */}
          <div className="bg-[#0f1422] border border-white/10 rounded-2xl p-6 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
              <MapPin className="w-5 h-5 text-emerald-400" />
              <span>Locations &amp; Service Areas</span>
            </h2>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/locations" className="text-emerald-400 font-bold hover:text-white flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Central Production Hub &amp; All Bihar Coverage</span>
                </Link>
              </li>
              {locationsData.patnaAreas.map((area) => (
                <li key={area.slug}>
                  <Link to="/locations" className="text-slate-300 hover:text-[#ff6a00] flex items-center gap-1.5">
                    <ArrowRight className="w-3.5 h-3.5 text-[#ff6a00]" />
                    <span>{area.name} (PIN {area.pincode})</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 6. Technical Guides & Legal */}
          <div className="bg-[#0f1422] border border-white/10 rounded-2xl p-6 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
              <BookOpen className="w-5 h-5 text-blue-400" />
              <span>Guides &amp; Legal Policies</span>
            </h2>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/blog" className="text-blue-400 font-bold hover:text-white flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
                  <span>Knowledge Hub &amp; All Guides</span>
                </Link>
              </li>
              {blogPosts.map((post) => (
                <li key={post.slug}>
                  <Link to={`/blog/${post.slug}`} className="text-slate-300 hover:text-[#ff6a00] flex items-center gap-1.5">
                    <ArrowRight className="w-3.5 h-3.5 text-[#ff6a00]" />
                    <span className="line-clamp-1">{post.title}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-white/10">
                <Link to="/privacy-policy" className="text-slate-400 hover:text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-slate-400 hover:text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
                  <span>Terms &amp; Conditions</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

