import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { companyDetails } from '../data/servicesData';

const faqs = [
  {
    q: "What printing and fabrication services does Friends Graphics provide?",
    a: "We provide comprehensive printing and signage under one roof: Flex and banner printing, election campaign materials (plastic, paper & nylon election flags, national flags, T-flags), LED acrylic & ACP glow sign boards, brass sign boards, visiting cards, brochures, pamphlets, bill books, books, calendars, PVC ID cards, vinyl stickers, and commercial offset printing."
  },
  {
    q: "Do you supply election campaign material (Chunaw Prachar Samagri) and flags?",
    a: "Yes! We are a leading wholesale supplier in Patna for Lok Sabha, Vidhan Sabha, Panchayat, and Municipal elections. We manufacture plastic election flags, paper election flags, knitted nylon flags, national paper flags, vehicle/table T-flags, candidate badges, campaign caps, canopy tents, and high-volume election posters with express turnaround."
  },
  {
    q: "Do you fabricate LED Acrylic & ACP Glow Sign Boards?",
    a: "Yes, we fabricate 3D acrylic LED letter sign boards, CNC routed ACP glow signs, outdoor ACP facade cladding, and mirror-polished solid brass/SS signboards with high-grade waterproof Samsung LED modules and on-site installation across Bihar."
  },
  {
    q: "Do you print custom carbonless NCR bill books and corporate stationery?",
    a: "Yes! We manufacture duplicate, triplicate, and quadruplicate carbonless NCR bill books, invoice registers, delivery challans, cash vouchers, letterheads, and corporate presentation folders with sequential numbering and micro-perforations."
  },
  {
    q: "Do you accept bulk commercial orders?",
    a: "Yes! Bulk requirements are fulfilled with dedicated wholesale tier pricing, whether you need 50,000 election flags, 100,000 pamphlets, 5,000 student ID cards, or large-scale outdoor flex hoardings."
  },
  {
    q: "Can I provide my own design or do you design in-house?",
    a: "Both! Customers can provide print-ready artwork (PDF, CorelDraw CDR, Illustrator AI, Photoshop PSD, or high-res JPEG) or collaborate with our experienced in-house graphic design team in Patna."
  },
  {
    q: "How can I get an instant quotation?",
    a: `Contact Friends Graphics directly through phone (${companyDetails.phonePrimary}), WhatsApp (+91 7992421080), or use the instant quote generator on this site.`
  },
  {
    q: "When was Friends Graphics established and where is it located?",
    a: `Friends Graphics was established in ${companyDetails.established}. We are centrally located at ${companyDetails.address}. You can walk in during business hours (10 AM to 8:30 PM) to inspect physical material swatches and samples.`
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ff6a00]/10 border border-[#ff6a00]/25 text-[#ff6a00] mb-3">
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Frequently Asked <span className="brand-gradient-text">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Everything you need to know about our printing turnaround, design formats, and bulk orders.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`border rounded-xl transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-[#0f1420] border-[#ff6a00]/40 shadow-lg'
                    : 'bg-[#0f1420]/60 border-white/5 hover:border-white/15'
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full px-5 sm:px-6 py-4 text-left flex items-center justify-between gap-4"
                >
                  <span className={`text-base font-semibold transition-colors ${
                    isOpen ? 'text-[#ff6a00]' : 'text-slate-200'
                  }`}>
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                    isOpen ? 'rotate-180 bg-[#ff6a00] text-black' : 'bg-white/5 text-slate-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-slate-400 leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
