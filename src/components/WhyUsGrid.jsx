import React from 'react';
import { Award, Scissors, Layers, Zap, Sliders, MapPin } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: "Quality Printing",
    desc: "Sharp micro-text, true-to-life CMYK fidelity, and calibrated ink density on every substrate."
  },
  {
    icon: Scissors,
    title: "Professional Finishing",
    desc: "Clean hydraulic trimming, thermal gloss/matte lamination, UV coating, creasing, and brass eyelets."
  },
  {
    icon: Layers,
    title: "Multiple Printing Options",
    desc: "From star flex, vinyl stickers, and backlit films to 400 GSM imported boards and handmade papers."
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "Express same-day and 24-hour delivery available for urgent commercial and event banners."
  },
  {
    icon: Sliders,
    title: "Custom Solutions",
    desc: "Every project tailored to your exact custom width, height, quantity, and design needs."
  },
  {
    icon: MapPin,
    title: "Local Printing Partner",
    desc: "Centrally located at Popular Palace, Bari Path, Patna. Walk in for physical paper swatch checks."
  }
];

export default function WhyUsGrid() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ff6a00]/10 border border-[#ff6a00]/25 text-[#ff6a00] mb-3">
            <span>Why Friends Graphics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Why Businesses Choose <span className="brand-gradient-text">Friends Graphics</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3">
            Established in 2014, we combine 12+ years of local printing experience with modern Japanese and German press precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={i}
                className="bg-[#0f1420]/80 border border-white/10 rounded-2xl p-7 hover:border-[#ff6a00]/40 transition-all hover:-translate-y-1 hover:shadow-xl group flex gap-5 items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-[#ff6a00]/10 border border-[#ff6a00]/30 flex items-center justify-center shrink-0 text-[#ff6a00] group-hover:bg-[#ff6a00] group-hover:text-white transition-all shadow-md">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{r.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
