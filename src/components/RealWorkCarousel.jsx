import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  MessageCircle, 
  ZoomIn, 
  X, 
  Sparkles, 
  Layers, 
  CheckCircle2,
  PhoneCall
} from 'lucide-react';
import { realWorkGalleryData, galleryCategories } from '../data/realWorkGalleryData';
import { companyDetails } from '../data/servicesData';
import { trackWhatsAppClick } from '../utils/analyticsEvents';

export default function RealWorkCarousel({ defaultCategory = 'all', title, subtitle }) {
  const [activeCategory, setActiveCategory] = useState(defaultCategory);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [itemsPerView, setItemsPerView] = useState(3);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Filter items by active category
  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return realWorkGalleryData;
    return realWorkGalleryData.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1280) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const maxIndex = Math.max(0, filteredItems.length - itemsPerView);

  // Auto-play interval
  useEffect(() => {
    if (!isPlaying || maxIndex === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Touch swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    }
    if (touchEndX.current - touchStartX.current > 50) {
      handlePrev();
    }
  };

  const getCategoryCount = (catId) => {
    if (catId === 'all') return realWorkGalleryData.length;
    return realWorkGalleryData.filter(item => item.category === catId).length;
  };

  const handleWhatsAppInquiry = (item) => {
    const message = `नमस्ते फ्रेंड्स ग्राफिक्स! मुझे आपकी वेबसाइट पर देखा गया यह कार्य बहुत पसंद आया:\n` +
      `📌 *उत्पाद:* ${item.titleHi} (${item.title})\n` +
      `📁 *कैटेगरी:* ${item.category}\n` +
      `⚙️ *स्पेसिफिकेशन:* ${item.specs}\n` +
      `कृपया इसकी थोक रेट लिस्ट (Wholesale Price) और डिलीवरी समय बताएं।`;
    trackWhatsAppClick('real_work_carousel');
    window.open(`https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-16 sm:py-20 bg-[#080b11] relative overflow-hidden border-t border-b border-white/10" aria-roledescription="carousel">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#ff6a00]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ff6a00]/10 border border-[#ff6a00]/30 text-[#ff6a00] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real Factory &amp; Workshop Showcase • 180+ Original Photos</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              {title || (
                <>
                  हमारे द्वारा किए गए <span className="brand-gradient-text">वास्तविक कार्य व उत्पाद</span>
                </>
              )}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl leading-relaxed">
              {subtitle || "लंगरटोली, बारी पथ स्थित हमारी अपनी फैक्ट्री में तैयार किए गए असली ऑर्डर्स, प्रिंटिंग मशीनरी, एलईडी बोर्ड्स और चुनाव प्रचार सामग्री की वास्तविक गैलरी।"}
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-3 self-start lg:self-end">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              title={isPlaying ? "Pause auto-slide" : "Play auto-slide"}
              aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-[#ff6a00] hover:border-[#ff6a00]/40 hover:bg-white/10 transition-all shadow-md active:scale-95"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-xl bg-[#ff6a00] text-white hover:bg-[#e05d00] transition-all shadow-[0_0_15px_rgba(255,106,0,0.3)] active:scale-95"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          {galleryCategories.map(cat => {
            const count = getCategoryCount(cat.id);
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2 shrink-0 ${
                  isActive
                    ? 'bg-[#ff6a00] text-white shadow-[0_0_16px_rgba(255,106,0,0.35)] scale-[1.02]'
                    : 'bg-[#0f1420] text-slate-300 border border-white/10 hover:border-white/20 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{cat.labelHi}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                  isActive ? 'bg-black/30 text-white' : 'bg-white/10 text-slate-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Carousel Viewport */}
        <div 
          className="relative overflow-hidden rounded-2xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` 
            }}
          >
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                className="shrink-0 px-2 sm:px-3"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="group bg-[#0f1420] border border-white/10 hover:border-[#ff6a00]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col h-full">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] bg-black/60 overflow-hidden cursor-pointer" onClick={() => setSelectedImage(item)}>
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                      <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-amber-300 border border-white/10 uppercase tracking-wider">
                        {item.category}
                      </span>
                      {item.isFeatured && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-red-600/90 text-white shadow-sm flex items-center gap-1">
                          ★ Featured
                        </span>
                      )}
                    </div>

                    {/* Hover Zoom Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-[2px]">
                      <span className="p-3 rounded-full bg-[#ff6a00] text-white shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                        <ZoomIn className="w-5 h-5" />
                      </span>
                    </div>

                    {/* Bottom overlay with quick specs */}
                    <div className="absolute bottom-2 left-2 right-2 pointer-events-none">
                      <div className="text-[11px] font-medium text-slate-200 bg-black/70 backdrop-blur-md px-2 py-1 rounded-md border border-white/10 truncate">
                        ⚙️ {item.specs}
                      </div>
                    </div>
                  </div>

                  {/* Details Card */}
                  <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between space-y-3">
                    <div>
                      <h3 className="font-extrabold text-white text-base sm:text-lg leading-snug line-clamp-1 group-hover:text-[#ff6a00] transition-colors">
                        {item.titleHi}
                      </h3>
                      <div className="text-xs text-slate-400 font-medium truncate mt-0.5">
                        {item.title}
                      </div>
                      <p className="text-xs text-slate-300 line-clamp-2 mt-2 leading-relaxed">
                        {item.descHi}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="pt-2 border-t border-white/10 flex items-center gap-2">
                      <button
                        onClick={() => handleWhatsAppInquiry(item)}
                        className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-98"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-current" />
                        <span>थोक रेट पूछें (WhatsApp)</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Progress Bar & Indicator */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>प्रदर्शित: <strong>{currentIndex + 1}–{Math.min(currentIndex + itemsPerView, filteredItems.length)}</strong> / कुल {filteredItems.length} उत्पाद</span>
          </div>

          <div className="flex items-center gap-1 max-w-xs overflow-hidden">
            {Array.from({ length: Math.min(15, Math.ceil(filteredItems.length / itemsPerView)) }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * itemsPerView)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / itemsPerView) === i 
                    ? 'w-6 bg-[#ff6a00]' 
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide group ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-slate-300">100% वास्तविक फोटो • फ्रेंड्स ग्राफिक्स पटना वर्कशॉप</span>
          </div>
        </div>
      </div>

      {/* Full-Screen Modal Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative bg-[#0f1420] border border-white/20 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-white/20 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="md:w-3/5 bg-black flex items-center justify-center p-2 relative">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[60vh] md:max-h-[85vh] w-full object-contain rounded-xl"
              />
            </div>

            {/* Modal Content */}
            <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ff6a00]/15 border border-[#ff6a00]/30 text-[#ff6a00]">
                  <span>{selectedImage.category.toUpperCase()}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  {selectedImage.titleHi}
                </h3>
                <div className="text-sm font-medium text-slate-300">
                  {selectedImage.title}
                </div>

                <div className="bg-black/40 border border-white/10 rounded-xl p-3.5 space-y-1.5 text-xs">
                  <div className="text-[#ff6a00] font-bold">स्पेसिफिकेशन्स (Material Specs):</div>
                  <div className="text-slate-200 font-medium">{selectedImage.specs}</div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedImage.descHi}
                </p>

                <p className="text-xs text-slate-400 italic">
                  {selectedImage.desc}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => handleWhatsAppInquiry(selectedImage)}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>व्हाट्सएप पर ऑर्डर / रेट पूछें</span>
                </button>

                <a
                  href={`tel:${companyDetails.phonePrimary}`}
                  className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm flex items-center justify-center gap-2 border border-white/15 transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-[#ff6a00]" />
                  <span>कॉल करें: {companyDetails.phonePrimary}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
