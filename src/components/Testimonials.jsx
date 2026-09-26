import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Amit Kumar",
    role: "Commercial Event Organizer, Patna",
    content: "Excellent printing quality and professional service. The banners came out exactly as expected with deep saturated colors. Delivered on time before our exhibition launch.",
    stars: 5
  },
  {
    name: "Rajesh Singh",
    role: "Retail Business Owner, Bari Path",
    content: "Good quality, reasonable pricing and timely delivery. We order visiting cards and brochures for our Bari Path retail branch regularly from Friends Graphics since years.",
    stars: 5
  },
  {
    name: "Prakash Verma",
    role: "Institute Director, Kankarbagh",
    content: "We printed 30,000 admission pamphlets and several outdoor flex hoardings. Flawless cutting, rich paper stock, and very supportive team led by Ranjan ji.",
    stars: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 relative bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ff6a00]/10 border border-[#ff6a00]/25 text-[#ff6a00] mb-3">
            <span>Customer Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            What Our <span className="brand-gradient-text">Customers Say</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3">
            Trusted by hundreds of local businesses, coaching institutes, and wedding planners across Patna.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-[#0f1420]/80 border border-white/10 rounded-2xl p-7 flex flex-col justify-between hover:border-[#ff6a00]/30 transition-all hover:-translate-y-1 relative"
            >
              <Quote className="w-8 h-8 text-[#ff6a00]/20 absolute top-6 right-6" />
              <div>
                <div className="flex items-center gap-1 text-[#ffb800] mb-4">
                  {[...Array(r.stars)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-[#ffb800]" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-slate-300 italic leading-relaxed mb-6">
                  "{r.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#ff6a00] to-[#1e2638] flex items-center justify-center font-bold text-white text-sm">
                  {r.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{r.name}</h4>
                  <p className="text-xs text-slate-500">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
