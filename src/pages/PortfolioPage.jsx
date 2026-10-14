import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ZoomIn, X, ArrowRight, Sparkles } from 'lucide-react';
import { companyDetails } from '../data/servicesData';

const portfolioItems = [
  {
    title: "Large Format Outdoor Billboard Banner",
    category: "banners",
    categoryName: "Banners & Flex",
    image: "/images/banners.png",
    desc: "Weather-resistant 440 GSM frontlit flex banner mounted on high-impact outdoor frame."
  },
  {
    title: "Standing Roll-Up Banner Standee",
    category: "banners",
    categoryName: "Banners & Flex",
    image: "/images/standing_banner.png",
    desc: "Aluminum pull-up cassette with non-tearable PVC graphic."
  },
  {
    title: "Festival Religious Event Backlit Banner",
    category: "banners",
    categoryName: "Banners & Flex",
    image: "/images/pooja_banners.png",
    desc: "Vibrant high-contrast cultural festival stage banner."
  },
  {
    title: "Starflex Frontlit Commercial Flex",
    category: "banners",
    categoryName: "Banners & Flex",
    image: "/images/starflex-frontlit-flex-roll.png",
    desc: "Weather-resistant 440 GSM frontlit roll with UV resistance."
  },
  {
    title: "Luxury Velvet Soft-Touch Visiting Cards",
    category: "cards",
    categoryName: "Visiting Cards",
    image: "/images/velvet_visiting_card.png",
    desc: "400 GSM imported art board with tactile velvet matte finish."
  },
  {
    title: "Executive Business Cards Suite",
    category: "cards",
    categoryName: "Visiting Cards",
    image: "/images/visiting-cards.png",
    desc: "Corporate visiting cards stack with razor-sharp die cut edges."
  },
  {
    title: "Textured Handmade Style Business Cards",
    category: "cards",
    categoryName: "Visiting Cards",
    image: "/images/textured_visiting_card.png",
    desc: "Premium subtle-texture cardstock for architects and founders."
  },
  {
    title: "Non-Tearable Waterproof Synthetic Cards",
    category: "cards",
    categoryName: "Visiting Cards",
    image: "/images/synthetic_visiting_card.png",
    desc: "Rigid plastic PVC business cards impervious to moisture."
  },
  {
    title: "Luxury Real Estate Promotional Flyer",
    category: "flyers",
    categoryName: "Brochures & Flyers",
    image: "/images/real_estate_flyer.png",
    desc: "Glossy 170 GSM art paper flyer for township residential projects."
  },
  {
    title: "Resort & Hotel Event Brochure",
    category: "flyers",
    categoryName: "Brochures & Flyers",
    image: "/images/resort_flyers.png",
    desc: "Vibrant multi-fold brochure with saturated photographic colors."
  },
  {
    title: "Tech Startup & Product Flyer",
    category: "flyers",
    categoryName: "Brochures & Flyers",
    image: "/images/startup_flyers.png",
    desc: "Precision double-sided flyer with micro-text readability."
  },
  {
    title: "Executive Corporate Presentation Folder",
    category: "flyers",
    categoryName: "Brochures & Flyers",
    image: "/images/presentation_folder.png",
    desc: "Pocket folder with business card slot and matte lamination."
  },
  {
    title: "Self-Adhesive Die-Cut Vinyl Sticker",
    category: "vinyl",
    categoryName: "Vinyl & Stickers",
    image: "/images/vinayl_sticker.png",
    desc: "Waterproof vinyl sticker contour-cut to exact shape."
  },
  {
    title: "Rigid Sunboard Mounted Storefront Display",
    category: "vinyl",
    categoryName: "Vinyl & Stickers",
    image: "/images/sunboard_printing.png",
    desc: "5mm dense foam sunboard with matte laminated direct print."
  },
  {
    title: "Chunaw Prachar Flags & National T-Flags",
    category: "election",
    categoryName: "Election & Flags (चुनाव)",
    image: "/images/plastic_election_flags.jpg",
    desc: "Plastic, paper & knitted nylon election flags, national paper flags and car hood T-flags."
  },
  {
    title: "Election Campaign Poster & Publicity Materials",
    category: "election",
    categoryName: "Election & Flags (चुनाव)",
    image: "/images/campaign_posters.jpg",
    desc: "12x18 and 18x24 inch multi-color candidate campaign posters with voter appeal layout."
  },
  {
    title: "Candidate Badges, Promotion Caps & Canopy Tent",
    category: "election",
    categoryName: "Election & Flags (चुनाव)",
    image: "/images/Canopy Tent.png",
    desc: "Turnkey election management publicity kits with canopy tents, badges, and candidate caps."
  },
  {
    title: "3D LED Acrylic Letters Storefront Sign",
    category: "signage",
    categoryName: "LED & Sign Boards",
    image: "/images/Glossy LED Acrylic 3D Letters.png",
    desc: "Precision laser-cut 3D cast acrylic frontlit letters with waterproof Samsung LED modules."
  },
  {
    title: "CNC Routed LED ACP Glow Sign Board",
    category: "signage",
    categoryName: "LED & Sign Boards",
    image: "/images/LED Glow Sign Board & Box.png",
    desc: "Exterior grade ACP box with routed groove and warm white acrylic inlay illumination."
  },
  {
    title: "Outdoor Heavy ACP Cladding & Metal Sign Board",
    category: "signage",
    categoryName: "LED & Sign Boards",
    image: "/images/Stainless Steel Sign Board (Outdoor).png",
    desc: "Architectural weatherproof ACP facade and premium mirror-finish brass and SS metal signage."
  },
  {
    title: "Custom Carbonless NCR Duplicate/Triplicate Bill Books",
    category: "stationery",
    categoryName: "Bill Books & Books",
    image: "/images/custom_bill_books_invoice_printing (1).png",
    desc: "Multi-color numbered invoice books with micro-perforation and hardbound binding."
  },
  {
    title: "Coaching Study Material & Academic Book Production",
    category: "stationery",
    categoryName: "Bill Books & Books",
    image: "/images/Full Production Book Printing & Publication.png",
    desc: "IIT-JEE / NEET study modules and institution books with hot melt perfect binding."
  },
  {
    title: "Institutional PVC Student ID Cards & Satin Lanyards",
    category: "idcards",
    categoryName: "ID Cards & Lanyards",
    image: "/images/institue_id_cards.png",
    desc: "Photographic thermal PVC identity cards with customized 16mm/20mm sublimation satin lanyards."
  },
  {
    title: "Custom Multi-Color Sublimation Neck Lanyards",
    category: "idcards",
    categoryName: "ID Cards & Lanyards",
    image: "/images/customized_lanyards.png",
    desc: "High-density satin ribbons with metal dog hooks and safety breakaway clasps."
  },
  {
    title: "Wall & Desk Corporate Calendar",
    category: "stationery",
    categoryName: "Bill Books & Books",
    image: "/images/Wall & Desk Calendar Printing.png",
    desc: "Wire-O bound 12-month calendar on 250 GSM coated board."
  },
  {
    title: "Pharmaceutical Medicine Box Packaging",
    category: "offset",
    categoryName: "Offset & Commercial",
    image: "/images/product_box.png",
    desc: "Bulk offset packaging cartons with security embossing."
  },
  {
    title: "Institutional School Folders & Diaries",
    category: "offset",
    categoryName: "Offset & Commercial",
    image: "/images/school_folders.png",
    desc: "Multi-color offset runs for schools and colleges across Bihar."
  }
];

const categories = [
  { id: "all", label: "All Works" },
  { id: "election", label: "Election & Flags (चुनाव)" },
  { id: "signage", label: "LED & Sign Boards" },
  { id: "stationery", label: "Bill Books & Books" },
  { id: "idcards", label: "ID Cards & Lanyards" },
  { id: "banners", label: "Banners & Flex" },
  { id: "cards", label: "Visiting Cards" },
  { id: "flyers", label: "Brochures & Flyers" },
  { id: "vinyl", label: "Vinyl & Stickers" },
  { id: "offset", label: "Commercial Offset" }
];

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  const filtered = activeTab === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeTab);

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-8">
          <Link to="/" className="hover:text-[#ff6a00] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#ff6a00]">Our Work Portfolio</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ff6a00]/10 border border-[#ff6a00]/25 text-[#ff6a00] mb-3">
            <span>Proof of Craftsmanship</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            See Our <span className="brand-gradient-text">Printing Work</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
            Real samples delivered for retail stores, coaching institutes, corporate brands, and businesses in Patna since 2014.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-[#ff6a00] to-[#ff8a00] text-white shadow-md shadow-[#ff6a00]/30 scale-105'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0f1420]/80 border border-white/10 rounded-2xl overflow-hidden hover:border-[#ff6a00]/40 transition-all hover:-translate-y-1.5 hover:shadow-2xl flex flex-col group cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              {/* Image Container (Full width & height uncropped) */}
              <div className="h-64 sm:h-72 relative overflow-hidden bg-black/70 p-2.5 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-[10px] font-bold text-[#ff6a00] border border-[#ff6a00]/30">
                  {item.categoryName}
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="px-3 py-1.5 rounded-full bg-[#ff6a00] text-white flex items-center gap-1.5 shadow-lg text-xs font-bold">
                    <ZoomIn className="w-4 h-4" />
                    <span>View Full Size</span>
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#ff6a00] transition-colors mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold">
                  <span className="text-[#ff6a00] group-hover:text-white transition-colors">
                    Click to View Full Size
                  </span>
                  <a
                    href={`https://wa.me/${companyDetails.whatsappNumber}?text=Hi%20Friends%20Graphics,%20I%20am%20interested%20in%20getting%20similar%20printing%20done%20for:%20${encodeURIComponent(item.title)}.`}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[#25d366] hover:underline"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full Size Gallery Lightbox Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="bg-[#0f1420] border border-[#ff6a00]/40 rounded-2xl max-w-5xl w-full overflow-hidden shadow-2xl relative flex flex-col max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/80 text-white flex items-center justify-center hover:bg-[#ff6a00] transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="bg-black flex-1 flex items-center justify-center overflow-auto p-3 min-h-[350px]">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="max-h-[75vh] w-auto h-auto max-w-full object-contain"
                />
              </div>

              <div className="p-6 space-y-3 bg-[#131a29]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#ff6a00]">
                  {selectedItem.categoryName}
                </span>
                <h4 className="text-xl font-bold text-white">{selectedItem.title}</h4>
                <p className="text-xs sm:text-sm text-slate-300">{selectedItem.desc}</p>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <a
                    href={`https://wa.me/${companyDetails.whatsappNumber}?text=Hi%20Friends%20Graphics,%20I%20would%20like%20to%20order%20similar%20prints%20as%20${encodeURIComponent(selectedItem.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-[#25d366] text-black font-extrabold text-xs flex items-center gap-2 hover:bg-[#20ba59] transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-black stroke-black" />
                    <span>Inquire This Sample on WhatsApp</span>
                  </a>

                  <Link
                    to="/contact"
                    onClick={() => setSelectedItem(null)}
                    className="text-xs font-bold text-slate-300 hover:text-white flex items-center gap-1"
                  >
                    <span>Request Custom Quote →</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#ff6a00] to-[#ff8a00] text-white font-bold text-sm shadow-xl shadow-[#ff6a00]/30 hover:scale-105 transition-all"
          >
            <span>Have a Specific Custom Print Project? Request a Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
