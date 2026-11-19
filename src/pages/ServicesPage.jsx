import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, MessageCircle, CheckCircle2, ShieldCheck, Flag, Sparkles, Layers, Building2 } from 'lucide-react';
import { servicesData, companyDetails } from '../data/servicesData';
import QuickQuoteForm from '../components/QuickQuoteForm';
import SEOHead from '../components/SEOHead';
import { getBreadcrumbSchema } from '../data/schemaData';

const electionSlugs = [
  'rally-election-flag',
  'plastic-election-flag',
  'paper-election-flag',
  'satin-election-flag',
  'nylon-election-flag',
  'national-paper-flag',
  'election-campaign-poster',
  'election-management-services',
  'promotional-canopy-tent',
  'candidate-badges-caps-printing',
  'custom-tshirt-printing',
  'non-woven-carry-bag-printing',
  'flex-printing-services'
];

const merchandiseSlugs = [
  'custom-tshirt-printing',
  'non-woven-carry-bag-printing',
  'promotional-canopy-tent',
  'candidate-badges-caps-printing',
  'id-card-printing-services'
];

const commercialSlugs = [
  'offset-printing-services',
  'business-card-printing',
  'brochure-flyer-printing',
  'pamphlet-printing-services',
  'bill-book-printing-services',
  'id-card-printing-services',
  'book-printing-services',
  'calendar-printing-services',
  'flex-printing-services',
  'flex-vinyl-printing'
];

export default function ServicesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [activeTab, setActiveTab] = useState(initialCategory);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && cat !== activeTab) {
      setActiveTab(cat);
    }
  }, [searchParams]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: tab });
    }
  };

  const filteredServices = servicesData.filter((svc) => {
    if (activeTab === 'election') return electionSlugs.includes(svc.slug);
    if (activeTab === 'merchandise') return merchandiseSlugs.includes(svc.slug);
    if (activeTab === 'commercial') return commercialSlugs.includes(svc.slug);
    return true;
  });

  return (
    <div className="py-12 sm:py-16">
      <SEOHead
        title={
          activeTab === 'election'
            ? "चुनाव प्रचार सामग्री थोक निर्माता — झंडे, पोस्टर, कैनोपी टेंट | Election Materials Patna"
            : "Commercial Printing & Candidate Publicity Merchandise Hub in Patna, Bihar"
        }
        description={
          activeTab === 'election'
            ? "Bihar's #1 wholesale supplier of election campaign materials (Chunav Prachar Samagri), flags, candidate wall posters, canopy tents, caps, badges, and rally T-shirts in Patna."
            : "Complete commercial printing and candidate publicity solutions in Patna. Flex banners, cloth & satin election flags, custom t-shirts, canopy tents, carbonless bill books, visiting cards, and offset printing."
        }
        canonicalPath={activeTab === 'election' ? '/services?category=election' : '/services'}
        keywords="commercial printing patna, chunav prachar samagri bihar, election flags patna, flex printing services, offset printing bari path, canopy tent patna"
        schemaJson={getBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: activeTab === 'election' ? 'Election Materials' : 'All Services', url: '/services' }
        ])}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-red-600/20 via-[#ff6a00]/25 to-amber-500/20 border border-[#ff6a00]/40 text-[#ff8a00]">
            <Flag className="w-3.5 h-3.5 fill-current" />
            <span>चुनाव प्रचार सामग्री एवं संपूर्ण प्रिंटिंग कैटलॉग • FULL SPECTRUM</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            Printing &amp; Election Services in <span className="brand-gradient-text">Patna, Bihar</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Established in {companyDetails.established}, Friends Graphics is Bihar's premier manufacturing &amp; printing hub for 
            <strong> चुनाव प्रचार सामग्री (Election Campaign Materials)</strong>, candidate publicity merchandise (सांसद, विधायक, जिला परिषद, मुखिया, चेयरमैन, मेयर), custom t-shirts, and bulk commercial offset printing.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-4">
            <button
              onClick={() => handleTabChange('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-[#ff6a00] to-[#ff8a00] text-white shadow-lg shadow-[#ff6a00]/30'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
              }`}
            >
              सभी सेवाएं • All Services ({servicesData.length})
            </button>

            <button
              onClick={() => handleTabChange('election')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-1.5 ${
                activeTab === 'election'
                  ? 'bg-gradient-to-r from-red-600 via-[#ff6a00] to-amber-600 text-white shadow-xl shadow-red-600/30 ring-2 ring-[#ff6a00]'
                  : 'bg-red-950/40 hover:bg-red-900/50 text-amber-300 border border-red-500/30'
              }`}
            >
              <span>🚩</span>
              <span>चुनाव प्रचार सामग्री (Election Materials)</span>
              <span className="px-1.5 py-0.2 rounded bg-black/40 text-[10px] font-mono text-white">
                {electionSlugs.length}
              </span>
            </button>

            <button
              onClick={() => handleTabChange('merchandise')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'merchandise'
                  ? 'bg-gradient-to-r from-[#ff6a00] to-[#ff8a00] text-white shadow-lg shadow-[#ff6a00]/30'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
              }`}
            >
              👕 मर्चेंडाइज व परिधान • Merchandise ({merchandiseSlugs.length})
            </button>

            <button
              onClick={() => handleTabChange('commercial')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'commercial'
                  ? 'bg-gradient-to-r from-[#ff6a00] to-[#ff8a00] text-white shadow-lg shadow-[#ff6a00]/30'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
              }`}
            >
              🖨️ ऑफसेट व कमर्शियल • Offset ({commercialSlugs.length})
            </button>
          </div>
        </div>

        {/* Election Category Spotlight Header */}
        {activeTab === 'election' && (
          <div className="mb-12 bg-gradient-to-r from-red-950/70 via-[#1c120c] to-amber-950/60 border border-red-500/40 rounded-2xl p-6 sm:p-8 text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase bg-red-600 text-white">
              <span>🚩 चुनावी विशेष थोक दरें (Wholesale Election Rates)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              बिहार का संपूर्ण चुनाव प्रचार सामग्री थोक निर्माण केंद्र
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl mx-auto">
              कपड़ा, साटन व पेपर झंडे, वॉल पोस्टर, वाटरप्रूफ कैनोपी टेंट, प्रचार टोपी, बैज, टी-शर्ट और वोटर पर्ची — सांसद, विधायक, जिला परिषद, मुखिया, चेयरमैन एवं मेयर प्रत्याशियों के लिए सीधे पटना बारी पथ स्थित कारखाने से मंगवाएं। बिहार एवं पूर्वी उत्तर प्रदेश (बलिया, कुशीनगर, देवरिया) में 24 से 36 घंटे में एक्सप्रेस डिलीवरी।
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent("नमस्ते! मुझे चुनाव प्रचार सामग्री (झंडे, पोस्टर, कैनोपी, टोपी, बैज) की थोक रेट लिस्ट चाहिए।")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25d366] text-black font-extrabold text-xs sm:text-sm shadow-lg hover:scale-105 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>चुनावी थोक रेट लिस्ट प्राप्त करें (WhatsApp)</span>
              </a>
            </div>
          </div>
        )}

        {/* Services List / Cards */}
        <div className="space-y-12">
          {filteredServices.map((svc, index) => {
            const isEven = index % 2 === 1;
            const isElectionItem = electionSlugs.includes(svc.slug);

            return (
              <div
                key={svc.slug}
                id={svc.slug}
                className={`bg-[#0f1420]/80 border ${
                  isElectionItem ? 'border-amber-500/30 hover:border-[#ff6a00]' : 'border-white/10 hover:border-[#ff6a00]/40'
                } rounded-3xl p-6 sm:p-10 transition-all shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative overflow-hidden`}
              >
                {isElectionItem && (
                  <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] font-black uppercase px-4 py-1 rounded-bl-xl shadow-md flex items-center gap-1">
                    <span>🚩 चुनाव प्रचार सामग्री</span>
                  </div>
                )}

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
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-xs uppercase font-bold tracking-wider text-[#ff6a00]">
                        {svc.tagline}
                      </span>
                      {svc.hindiTitle && (
                        <span className="px-2.5 py-0.5 rounded-full bg-[#ff6a00]/15 text-[#ff6a00] border border-[#ff6a00]/30 text-xs font-bold">
                          {svc.hindiTitle}
                        </span>
                      )}
                    </div>
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
                      href={`https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent(
                        `नमस्ते फ्रेंड्स ग्राफिक्स! मुझे "${svc.hindiTitle || svc.title}" की थोक दर और सैंपल चाहिए।`
                      )}`}
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
          <QuickQuoteForm preselectedService="Election Rally Flag" />
        </div>
      </div>
    </div>
  );
}
