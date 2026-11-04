import React from 'react';
import { Link } from 'react-router-dom';
import {
  Flag,
  ArrowRight,
  MessageCircle,
  Phone,
  CheckCircle2,
  Sparkles,
  Zap,
  Truck,
  ShieldCheck,
  PackageCheck
} from 'lucide-react';
import { companyDetails } from '../data/servicesData';

export const electionServicesList = [
  {
    id: "01",
    slug: "plastic-election-flag",
    title: "Plastic Election Flag",
    hindiTitle: "प्लास्टिक चुनाव झंडा",
    badge: "सबसे लोकप्रिय • Top Seller",
    tagline: "Waterproof Virgin Biodegradable Film Handheld & Bunting Flags",
    description: "हवा और बारिश में न फटने वाले 35-50 माइक्रोन वर्जिन प्लास्टिक झंडे। डंडी सहित (हैंडहेल्ड) एवं 50-झंडों की सड़क लड़ी (bunting) में उपलब्ध।",
    englishDesc: "High-speed rotogravure printed plastic rally flags on rigid PVC sticks or 50-flag pre-strung street garland strings.",
    image: "/images/plastic_election_flags.jpg",
    specs: ["35-50 Micron Virgin Biodegradable Film", "Non-Bleed Vibrant Party Symbol Colors", "Handheld Stick or 50 Flags/String Bunting"],
    minOrder: "1,000 Pieces",
    turnaround: "24-48 Hours Express"
  },
  {
    id: "02",
    slug: "nylon-election-flag",
    title: "Nylon & Satin Election Flag",
    hindiTitle: "नायलॉन एवं साटन चुनाव झंडा",
    badge: "गाड़ी व ऑफिस झंडा • Car & HQ",
    tagline: "100% Warp-Knitted Heavy Nylon & High-Gloss Satin Fabric",
    description: "स्कॉर्पियो, बोलेरो, फॉर्च्यूनर, पार्टी ऑफिस, मंच बैकड्रॉप व विशाल रैलियों के लिए हैवी-ड्यूटी डबल सिलाई वाले नायलॉन और साटन झंडे।",
    englishDesc: "Heavy-duty double lockstitch knitted nylon and premium satin flags for vehicle hoods, antennas, and party office headquarters.",
    image: "/images/nylon_election_flag.jpg",
    specs: ["110-140 GSM 100% Knitted Nylon & Satin", "Double-Needle Lockstitch Wind-Resistant Hem", "Brass Grommets & Canvas Heading"],
    minOrder: "25 Pieces",
    turnaround: "2-3 Days Dispatch"
  },
  {
    id: "03",
    slug: "paper-election-flag",
    title: "Paper Election Flag",
    hindiTitle: "कागज़ का चुनाव झंडा",
    badge: "विशाल जनसभा • Mass Rallies",
    tagline: "High-Gloss Coated Art Paper Flags for Mass Student & Worker Waves",
    description: "बजट-फ्रेंडली, चमकदार 130-170 GSM आर्ट पेपर झंडे। बाइक यात्रा, कार्यकर्ता रैलियों और जनसभाओं के लिए सबसे किफायती विकल्प।",
    englishDesc: "Cost-effective, sharp multi-color gloss paper election flags mounted on wooden/plastic sticks for high-volume mobilization.",
    image: "/images/paper_election_flags.jpg",
    specs: ["130-170 GSM High-Gloss Coated Art Paper", "Eco-Friendly Recyclable Mounting Sticks", "High-Resolution Heidelberg Multi-Color Print"],
    minOrder: "1,000 Pieces",
    turnaround: "Same-Day / 24 Hours"
  },
  {
    id: "04",
    slug: "election-campaign-poster",
    title: "Election Campaign Poster",
    hindiTitle: "चुनावी प्रचार पोस्टर",
    badge: "वॉल पेस्टिंग • High Reach",
    tagline: "12x18 & 18x24 Inch Ultra-Sharp Candidate Publicity Wall Posters",
    description: "हाईडेलबर्ग 4-कलर स्पीडमास्टर प्रेस पर छपे हाई-इम्पैक्ट वॉल पोस्टर। प्रत्याशी का चेहरा, चुनाव चिन्ह और स्लोगन दूर से भी साफ चमकेगा।",
    englishDesc: "Massive reach 4-color offset election posters (12x18, 18x24, 20x30 inch) with high candidate recognition and UV scuff protection.",
    image: "/images/campaign_posters.jpg",
    specs: ["130-170 GSM Gloss Art & 100 GSM Maplitho", "12x18 in, 18x24 in & 20x30 in Dimensions", "Organized Shrink Bundles of 250 & 500 Copies"],
    minOrder: "500 Copies",
    turnaround: "24 Hours Express"
  },
  {
    id: "05",
    slug: "election-management-services",
    title: "Canopy Tents & Voter Booths",
    hindiTitle: "वाटरप्रूफ कैनोपी टेंट व बूथ किट",
    badge: "वोटर सहायता • Voter Help Desk",
    tagline: "Turnkey Foldable Waterproof 6x6 & 10x10 ft Canopies",
    description: "बूथ डे वोटर सहायता डेस्क एवं जन-सम्पर्क के लिए ब्रांडेड फोल्डेबल वाटरप्रूफ कैनोपी टेंट। मजबूत पाउडर-कोटेड स्टील फ्रेम, 2 मिनट में सेटअप।",
    englishDesc: "Heavy waterproof Oxford fabric foldable canopy tents with reinforced steel frames for voter assistance desks and roadshow canopies.",
    image: "/images/Canopy Tent.png",
    specs: ["6x6 ft & 10x10 ft Heavy Waterproof Oxford Fabric", "Powder-Coated Rust-Proof Steel Accordion Frame", "Full 4-Side High-Resolution Custom Candidate Branding"],
    minOrder: "1 Tent",
    turnaround: "2-3 Days Dispatch"
  },
  {
    id: "06",
    slug: "election-management-services",
    title: "Badges, Caps & Rally T-Shirts",
    hindiTitle: "प्रचार टोपी, बैज व टी-शर्ट",
    badge: "कार्यकर्ता किट • Volunteer Kit",
    tagline: "Candidate Photo Button Badges, Embroidered Caps & Printed T-Shirts",
    description: "बूथ कार्यकर्ताओं और रैली वॉलिंटियर्स के लिए पार्टी सिंबल वाले बटन बैज (44mm/58mm), कशीदाकारी कैप्स और कॉटन प्रचार टी-शर्ट्स।",
    englishDesc: "Custom button badges with safety pin backs, embroidered candidate caps with adjustable velcro straps, and breathable rally T-shirts.",
    image: "/images/badges_and_pin.png",
    specs: ["44mm, 58mm & 75mm Rust-Proof Pin-Back Badges", "Custom Embroidered Caps with Adjustable Straps", "Breathable 100% Cotton & Poly-Cotton Rally T-Shirts"],
    minOrder: "100 Badges / 50 Caps",
    turnaround: "2-4 Business Days"
  },
  {
    id: "07",
    slug: "national-paper-flag",
    title: "National Tricolor & Car T-Flags",
    hindiTitle: "राष्ट्रीय तिरंगा एवं कार टी-फ्लैग",
    badge: "वीआईपी व डैशबोर्ड • VIP Vehicles",
    tagline: "Official Tricolor Flags & Chrome/Brass Weighted Table/Car T-Flags",
    description: "वीआईपी गाड़ियों, स्कॉर्पियो डैशबोर्ड और ऑफिस कॉन्फ्रेंस टेबल के लिए क्रोम व ब्रास स्टैंड टी-फ्लैग्स एवं राष्ट्रीय ध्वज संहिता अनुसार तिरंगा।",
    englishDesc: "Indian national paper & fabric tricolor flags adhering to Flag Code, plus executive mirror-polished brass & SS car/desk T-flags.",
    image: "/images/national_t_flags.jpg",
    specs: ["Magnetic & Heavy Weighted Metal Base Stands", "Mirror Polished Brass & SS 304 Chrome Plating", "True Saffron, White & Navy Blue Ashoka Chakra Calibration"],
    minOrder: "10 Sets / 100 Flags",
    turnaround: "Same-Day to 24h"
  },
  {
    id: "08",
    slug: "flex-printing-services",
    title: "Election Flex Banners & Hoardings",
    hindiTitle: "चुनावी फ्लेक्स बैनर व होर्डिंग्स",
    badge: "स्टेज व रोड शो • Rallies & Roads",
    tagline: "Heavy Star Flex, Stage Backdrops & MS Iron Welded Frame Signboards",
    description: "चुनावी जनसभा मंच बैकड्रॉप, रोड होर्डिंग्स, प्रवेश द्वार और स्वागत बैनर के लिए स्टार फ्लेक्स, ब्रास आईलेट्स और वेदरप्रूफ हेम स्टिचिंग।",
    englishDesc: "Large-format 340-440 GSM Star Flex banners with brass grommets, pole pockets, and MS iron frames for election rallies and roadside hoardings.",
    image: "/images/banners.png",
    specs: ["Heavy Duty Star Flex (340 - 440 GSM)", "Brass Eyelets & Reinforced Heat-Sealed Hemming", "Custom Dimensions up to 10.5 ft Seamless Width"],
    minOrder: "1 Piece",
    turnaround: "Same-Day Express"
  }
];

export default function ChunavSamagriShowcase() {
  return (
    <section id="election-material" className="py-20 relative bg-gradient-to-b from-[#090d16] via-[#121826] to-[#090d16] border-y border-[#ff6a00]/30 scroll-mt-20">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-72 bg-gradient-to-b from-[#ff6a00]/15 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider bg-gradient-to-r from-red-600/20 via-[#ff6a00]/25 to-amber-500/20 border border-[#ff6a00]/40 text-[#ff8a00] shadow-[0_0_15px_rgba(255,106,0,0.3)]">
            <Flag className="w-4 h-4 text-red-500 fill-red-500" />
            <span>🚩 बिहार का संपूर्ण चुनाव प्रचार सामग्री केंद्र • BIHAR'S #1 ELECTION MATERIAL HUB</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            चुनाव प्रचार सामग्री <span className="brand-gradient-text">थोक निर्माता एवं सप्लायर</span>
          </h2>
          <p className="text-lg sm:text-xl font-bold text-amber-300">
            All Election Campaign Merchandise &amp; Publicity Materials at Direct Factory Rates
          </p>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            लोकसभा, विधानसभा, नगर निगम एवं पंचायत चुनाव के लिए प्रचार सामग्री का सबसे बड़ा केंद्र। 
            <strong> प्लास्टिक व नायलॉन झंडे, वॉल पोस्टर, वाटरप्रूफ कैनोपी टेंट, प्रचार टोपी, बैज, टी-शर्ट और फ्लेक्स बैनर</strong> — सीधे पटना बारी पथ स्थित कारखाने से मंगवाएं और बिचौलियों का खर्च बचाएं!
          </p>

          {/* Quick War-Room Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-semibold text-slate-200">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 border border-white/10">
              <Zap className="w-3.5 h-3.5 text-[#ff6a00]" />
              <span>1 लाख+ झंडे/पोस्टर रोज़ाना निर्माण क्षमता</span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 border border-white/10">
              <Truck className="w-3.5 h-3.5 text-emerald-400" />
              <span>पूरे बिहार व झारखंड में 24-48h डिलीवरी</span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>100% पार्टी सिंबल कलर एक्यूरेसी</span>
            </span>
          </div>
        </div>

        {/* 8 Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {electionServicesList.map((item) => {
            const encodedWhatsAppMsg = encodeURIComponent(
              `नमस्ते फ्रेंड्स ग्राफिक्स! मुझे "${item.hindiTitle} (${item.title})" की थोक दर (Bulk Rate) और सैंपल फोटो चाहिए।`
            );

            return (
              <div
                key={item.id}
                className="bg-[#0f1422]/90 border border-white/10 rounded-2xl overflow-hidden hover:border-[#ff6a00] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(255,106,0,0.2)] flex flex-col group relative"
              >
                {/* Top Badge */}
                <div className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-md bg-red-600/90 backdrop-blur-md text-[11px] font-black text-white shadow-md border border-red-400/40">
                  {item.badge}
                </div>

                {/* Product Image */}
                <Link
                  to={`/services/${item.slug}`}
                  className="h-52 sm:h-56 overflow-hidden relative bg-black/70 p-3 flex items-center justify-center block"
                >
                  <img
                    src={item.image}
                    alt={`${item.hindiTitle} - ${item.title}`}
                    className="w-full h-full object-contain group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-[10px] font-mono text-slate-400 border border-white/10">
                    Min: {item.minOrder}
                  </div>
                </Link>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  {/* Hindi & English Titles */}
                  <div className="mb-2">
                    <span className="text-base sm:text-lg font-black text-white group-hover:text-[#ff6a00] transition-colors block leading-snug">
                      {item.hindiTitle}
                    </span>
                    <span className="text-xs font-bold text-amber-400 block tracking-wide">
                      {item.title}
                    </span>
                  </div>

                  {/* Hindi Short Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-3 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-1.5 mb-4 pt-2 border-t border-white/10 flex-grow">
                    {item.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6a00] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Turnaround Badge */}
                  <div className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-1 rounded mb-4 text-center">
                    ⚡ {item.turnaround}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
                    <Link
                      to={`/services/${item.slug}`}
                      className="py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-xs flex items-center justify-center gap-1 transition-all"
                    >
                      <span>विवरण (Details)</span>
                      <ArrowRight className="w-3 h-3 text-[#ff6a00]" />
                    </Link>

                    <a
                      href={`https://wa.me/${companyDetails.whatsappNumber}?text=${encodedWhatsAppMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 rounded-lg bg-[#25d366] hover:bg-[#20ba59] text-black font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all hover:scale-[1.02]"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-black" />
                      <span>थोक भाव (Quote)</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Turnkey Campaign War-Room Banner */}
        <div className="mt-14 bg-gradient-to-r from-red-950/80 via-[#1c120c] to-amber-950/70 border-2 border-[#ff6a00]/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-red-600 text-white shadow-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>कैंडिडेट संपूर्ण चुनाव प्रचार कॉम्बो किट (Turnkey Campaign Kit)</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                विधायक, सांसद, मुखिया व पार्षद प्रत्याशी प्रचार पैकेज
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                एक ही जगह से पाएं — <strong>कैनोपी टेंट + 10,000 प्लास्टिक झंडे + 5,000 वॉल पोस्टर + 500 प्रचार टोपी + 1,000 प्रत्याशी बैज + 50 नायलॉन कार झंडे + 10,000 वोटर पर्ची</strong>। 
                एक फोन कॉल पर अपने पूरे विधानसभा या वार्ड का प्रचार मटेरियल तैयार करवाएं।
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-amber-300 pt-1">
                <span>✓ सीधे निर्माता थोक रेट</span>
                <span>✓ 24-घंटे एक्सप्रेस प्रोडक्शन</span>
                <span>✓ सभी 38 जिलों में सुरक्षित बस/ट्रेन डिलीवरी</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={`https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent("नमस्ते! मुझे प्रत्याशी संपूर्ण चुनाव प्रचार कॉम्बो किट (Candidate Campaign Combo Kit) की रेट लिस्ट और सैंपल चाहिए।")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20 transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>चुनावी कॉम्बो रेट लिस्ट (WhatsApp)</span>
              </a>

              <a
                href={`tel:${companyDetails.phonePrimary}`}
                className="w-full py-3.5 px-6 rounded-xl bg-[#ff6a00] hover:bg-[#ff8a00] text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl shadow-[#ff6a00]/30 transition-all hover:scale-[1.02]"
              >
                <Phone className="w-5 h-5" />
                <span>कॉल करें: {companyDetails.phonePrimary}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
