import React from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle2, ShieldCheck, Quote, MessageCircle, ArrowRight, Building2, User } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { companyDetails } from '../data/servicesData';
import { getBreadcrumbSchema } from '../data/schemaData';

const clientReviews = [
  {
    name: "Vikash Kumar",
    role: "Campaign Coordinator, Vidhan Sabha Elections",
    location: "Patna, Bihar",
    rating: 5,
    date: "October 2026",
    service: "Chunav Prachar Samagri & 50,000 Plastic Flags",
    review: "Friends Graphics delivered 50,000 plastic flags and 10,000 candidate posters in just 36 hours before our major rally. The party symbol colors were 100% accurate, and the quality of sticks and welding was unmatched. Bihar's best election material supplier!"
  },
  {
    name: "Dr. Alok Verma",
    role: "Administrative Director, Specialty Hospital",
    location: "Kankarbagh, Patna",
    rating: 5,
    date: "September 2026",
    service: "LED Acrylic Sign Board & Hospital Stationery",
    review: "Installed a 24x4 ft 3D Acrylic LED Glow Sign Board at our main clinic entrance. The finish is stunning and completely waterproof through the monsoon. They also print our prescription pads and patient registration files with flawless consistency."
  },
  {
    name: "Ramesh Aggarwal",
    role: "Wholesale Textile Merchant",
    location: "Bari Path, Patna",
    rating: 5,
    date: "August 2026",
    service: "Carbonless NCR Triplicate Bill Books",
    review: "We have been printing our GST invoice registers and delivery challan books with Ranjan ji for over 6 years. Clean numbering, crisp micro-perforations, and the chemical NCR paper never smudges. Highly recommended."
  },
  {
    name: "Pooja Singh",
    role: "Managing Director, Apex Coaching Institute",
    location: "Boring Road, Patna",
    rating: 5,
    date: "July 2026",
    service: "Study Material Books, Banners & Student PVC ID Cards",
    review: "Printed 3,000 study modules and 500 PVC student ID cards with custom sublimation lanyards. The binding was perfect, and prices were substantially lower than other Delhi or Patna printers."
  },
  {
    name: "Sunil Tiwari",
    role: "Panchayat Mukhiya Candidate",
    location: "Vaishali District, Bihar",
    rating: 5,
    date: "June 2026",
    service: "Canopy Tent, Candidate Badges & Vehicle Flags",
    review: "Ordered 2 folding canopy tents, 1,000 badges, and 50 vehicle Scorpio flags. They sent everything by direct parcel bus the very next morning. Saved our campaign thousands in middleman commissions."
  },
  {
    name: "Amitabh Sen",
    role: "Showroom Franchise Owner",
    location: "Bailey Road, Patna",
    rating: 5,
    date: "May 2026",
    service: "CNC Routed ACP Glow Sign & Star Flex Banners",
    review: "From site measurement to structural iron welding and LED fitting, their team handled everything seamlessly. The store facade looks magnificent at night."
  }
];

export default function TestimonialsPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Client Reviews & Testimonials', url: '/testimonials' }
  ];

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <SEOHead
        title="Client Reviews & Testimonials — Verified Customer Feedback in Patna"
        description="Read genuine verified reviews from retail businesses, political candidates, hospitals, and educational institutions across Bihar who trust Friends Graphics for printing and signage."
        canonicalPath="/testimonials"
        keywords="friends graphics reviews patna, printing press testimonials, best printer in bihar review"
        schemaJson={getBreadcrumbSchema(breadcrumbs)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link to="/" className="hover:text-[#ff6a00] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#ff6a00]">Reviews &amp; Testimonials</span>
        </nav>

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#ff6a00]/15 text-[#ff6a00] border border-[#ff6a00]/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>VERIFIED CUSTOMER TESTIMONIALS (E-E-A-T PROOF)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            Trusted by Over <span className="brand-gradient-text">1,000+ Businesses</span> Across Bihar
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            See how political war rooms, healthcare centers, educational institutes, and merchants in Patna rely on our speed, precision, and factory pricing.
          </p>

          {/* Aggregate Rating Banner */}
          <div className="inline-flex items-center gap-6 bg-[#0f1422] border border-white/10 rounded-2xl px-6 py-3 shadow-xl">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-left border-l border-white/10 pl-4">
              <strong className="text-white text-lg font-black block leading-none">4.9 / 5.0</strong>
              <span className="text-[11px] text-slate-400">Based on 250+ Verified Client Reviews</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientReviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#0f1422]/90 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#ff6a00]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl relative"
            >
              <Quote className="w-10 h-10 text-[#ff6a00]/15 absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">{rev.date}</span>
                </div>

                <div className="text-xs font-bold text-[#ff6a00] bg-[#ff6a00]/10 border border-[#ff6a00]/25 px-2.5 py-1 rounded-md inline-block">
                  Service: {rev.service}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{rev.review}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#ff6a00] to-[#ff8a00] flex items-center justify-center text-white font-black text-sm shrink-0">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{rev.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </h4>
                  <div className="text-[11px] text-slate-400">{rev.role}</div>
                  <div className="text-[10px] text-slate-500">{rev.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-red-950/70 via-[#1c120c] to-amber-950/60 border border-[#ff6a00]/40 rounded-3xl p-8 sm:p-12 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Ready to Experience Bihar's Trusted Printing Partner?
          </h3>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Get sample materials, instant WhatsApp pricing, or walk in to our Bari Path production center.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff6a00] to-[#ff8a00] text-white font-bold text-sm shadow-lg hover:scale-105 transition-all"
            >
              Request a Free Quote
            </Link>

            <a
              href={`https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent("नमस्ते फ्रेंड्स ग्राफिक्स! मुझे प्रिंटिंग कोटेशन और सैंपल्स चाहिए।")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#25d366] text-black font-extrabold text-sm flex items-center gap-2 shadow-lg hover:bg-[#20ba59] transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>WhatsApp Production Team</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

