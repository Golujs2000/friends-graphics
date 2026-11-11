import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, ChevronDown, Search, MessageCircle, Phone, Sparkles } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { companyDetails } from '../data/servicesData';
import { getFAQPageSchema, getBreadcrumbSchema } from '../data/schemaData';

export const allFaqs = [
  {
    category: "Chunav Samagri (चुनाव प्रचार)",
    q: "Do you supply election campaign material (Chunaw Prachar Samagri) and flags in bulk?",
    a: "Yes! Friends Graphics is Bihar's primary wholesale manufacturer of election publicity materials for Vidhan Sabha, Lok Sabha, Municipal Corporation (Nagar Nigam), and Panchayat elections. We produce plastic election flags on virgin biodegradable film, knitted nylon & satin car flags, paper flags, candidate posters, promotional caps, button badges, voter slips, and waterproof folding canopy tents with direct factory slab pricing."
  },
  {
    category: "Chunav Samagri (चुनाव प्रचार)",
    q: "How fast can you dispatch bulk election flags and posters across Bihar?",
    a: "Orders up to 50,000 flags or 20,000 posters can be produced within 24 to 48 hours at our Bari Path, Patna facility. We dispatch via dedicated daily parcel buses and train couriers to all 38 districts of Bihar (Gaya, Muzaffarpur, Bhagalpur, Darbhanga, Purnia, Begusarai, etc.) for next-day field receipt."
  },
  {
    category: "Chunav Samagri (चुनाव प्रचार)",
    q: "Do you supply national flags adhering to the Flag Code of India?",
    a: "Yes. We manufacture official tricolor Indian national paper flags and satin fabric flags adhering strictly to the Flag Code of India 2002 regarding the 3:2 aspect ratio, exact Ashoka Chakra 24-spoke navy reproduction, and true saffron/white/green shades. We also manufacture executive weighted brass and chrome T-flags for car dashboards and conference tables."
  },
  {
    category: "Signage & LED Boards (साइनेज व बोर्ड)",
    q: "What types of sign boards do you fabricate?",
    a: "We manufacture 3D Acrylic LED Letter Signboards (front-lit, back-lit, halo-glow), CNC Routed ACP Glow Signs, outdoor weather-proof ACP facade cladding, and mirror-polished solid brass/SS metal letter signboards. All electricals use IP67 waterproof LED injection modules (Samsung chips) with a 2-year warranty."
  },
  {
    category: "Signage & LED Boards (साइनेज व बोर्ड)",
    q: "Do you provide on-site sign board installation across Bihar?",
    a: "Yes! Our experienced fabrication and installation crew travels across Patna and all major districts of Bihar to perform on-site structural welding, scaffolding, facade mounting, and electrical commissioning."
  },
  {
    category: "Commercial Printing (कमर्शियल प्रिंटिंग)",
    q: "What are the advantages of carbonless NCR duplicate/triplicate bill books?",
    a: "Carbonless NCR (No Carbon Required) bill books use micro-encapsulated chemical dye coatings that transfer handwriting cleanly onto underlying copies without dirty blue carbon paper. Friends Graphics manufactures custom GST tax invoices, challans, cash memos, and transport receipts with sequential numbering and clean laser micro-perforations."
  },
  {
    category: "Commercial Printing (कमर्शियल प्रिंटिंग)",
    q: "What is the difference between Star Flex and Normal Flex for banners?",
    a: "Star Flex uses a denser 340–440 GSM polyester weave with a smoother high-gloss surface and tear-resistant fiber matrix. It retains vibrant UV colors for 12–24 months outdoors without cracking or fading. Normal Flex (240–280 GSM) is suitable for temporary indoor displays or short promotional events."
  },
  {
    category: "Orders & Turnaround (ऑर्डर व डिलीवरी)",
    q: "What file formats do you accept for custom printing?",
    a: "We accept PDF (Print Ready), CorelDraw (.CDR), Adobe Illustrator (.AI), Adobe Photoshop (.PSD), TIFF, and high-resolution JPEG (300 DPI at 1:1 scale or 1:10 vector scale for billboards). If you do not have a print-ready design, our in-house graphic design studio will design it for you."
  },
  {
    category: "Orders & Turnaround (ऑर्डर व डिलीवरी)",
    q: "Where is your workshop located and what are your business hours?",
    a: "We are located at Shop No. B-12, Popular Palace, Langartoli, Bari Path, Patna - 800004, Bihar (near Langartoli crossing). We are open Monday through Saturday from 10:00 AM to 8:30 PM (Sunday closed, except during active election campaigns where our control room operates 24/7)."
  }
];

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openIndices, setOpenIndices] = useState([0, 1]);

  const categories = ['All', 'Chunav Samagri (चुनाव प्रचार)', 'Signage & LED Boards (साइनेज व बोर्ड)', 'Commercial Printing (कमर्शियल प्रिंटिंग)', 'Orders & Turnaround (ऑर्डर व डिलीवरी)'];

  const filteredFaqs = allFaqs.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.q.toLowerCase().includes(searchTerm.toLowerCase()) || item.a.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleIndex = (idx) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Frequently Asked Questions', url: '/faqs' }
  ];

  const fullSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      getFAQPageSchema(allFaqs),
      getBreadcrumbSchema(breadcrumbs)
    ]
  };

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <SEOHead
        title="Printing & Election Material FAQs — Turnaround, Bulk Pricing, Delivery"
        description="Frequently asked questions about Friends Graphics printing services in Patna. Learn about election flags, banner printing, sign board installation, file formats, and Bihar delivery."
        canonicalPath="/faqs"
        keywords="printing press faqs patna, election flags wholesale rates, sign board cost per sq ft, bill book printing time"
        schemaJson={fullSchema}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link to="/" className="hover:text-[#ff6a00] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#ff6a00]">Frequently Asked Questions</span>
        </nav>

        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#ff6a00]/15 text-[#ff6a00] border border-[#ff6a00]/30">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>KNOWLEDGE BASE &amp; FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            Frequently Asked <span className="brand-gradient-text">Questions</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Find immediate answers regarding our election materials, sign board fabrication, paper weights, turnaround deadlines, and delivery across Bihar.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto pt-4 relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search questions (e.g. flag, poster, sign board, delivery)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0f1422] border border-white/10 text-white text-sm focus:border-[#ff6a00] focus:outline-none focus:ring-1 focus:ring-[#ff6a00] transition-colors"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#ff6a00] to-[#ff8a00] text-white shadow-md'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-[#0f1422] rounded-2xl border border-white/10 text-slate-400">
              No matching questions found. Chat with us directly on WhatsApp for instant assistance!
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndices.includes(idx);
              return (
                <div
                  key={idx}
                  className="bg-[#0f1422]/90 border border-white/10 rounded-2xl overflow-hidden hover:border-[#ff6a00]/40 transition-colors"
                >
                  <button
                    onClick={() => toggleIndex(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-[#ff6a00] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#ff6a00]">Q.</span>
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#ff6a00]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4 space-y-2 animate-fade-in">
                      <div className="text-[11px] font-bold text-amber-300 uppercase tracking-wider mb-1">
                        Category: {faq.category}
                      </div>
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Contact Card */}
        <div className="bg-gradient-to-r from-red-950/70 via-[#1c120c] to-amber-950/60 border border-[#ff6a00]/40 rounded-3xl p-6 sm:p-8 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Have a Question Not Listed Here?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Speak directly with founder Ranjan Sharma or message our production desk on WhatsApp for instant answers, custom dimension quotations, or sample dispatches.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent("नमस्ते फ्रेंड्स ग्राफिक्स! मुझे प्रिंटिंग के बारे में एक सवाल पूछना है।")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#25d366] text-black font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Ask on WhatsApp</span>
            </a>

            <a
              href={`tel:${companyDetails.phonePrimary}`}
              className="px-6 py-3 rounded-xl bg-[#ff6a00] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {companyDetails.phonePrimary}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

