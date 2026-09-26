import React from 'react';
import { MessageSquare, FileText, Calculator, Printer, CheckCircle2, Truck } from 'lucide-react';

const steps = [
  {
    step: "01",
    title: "Share Requirement",
    desc: "Tell us what you need printed, including size, quantity, and finishing preferences.",
    icon: MessageSquare
  },
  {
    step: "02",
    title: "Send Your Design",
    desc: "Share artwork on WhatsApp (PDF, CDR, PSD, high-res image) or get design assistance.",
    icon: FileText
  },
  {
    step: "03",
    title: "Get an Instant Quote",
    desc: "Transparent, upfront pricing based on your exact material and volume specifications.",
    icon: Calculator
  },
  {
    step: "04",
    title: "Professional Printing",
    desc: "Your order goes into high-definition digital, flex, or Heidelberg offset press production.",
    icon: Printer
  },
  {
    step: "05",
    title: "Quality Check",
    desc: "Manual inspection for color accuracy, sharp hydraulic cuts, and clean finishing.",
    icon: CheckCircle2
  },
  {
    step: "06",
    title: "Pickup or Delivery",
    desc: "Collect at Popular Palace Bari Path or arrange doorstep delivery anywhere in Patna.",
    icon: Truck
  }
];

export default function ProcessFlow() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ff6a00]/10 border border-[#ff6a00]/25 text-[#ff6a00] mb-3">
            <span>Seamless Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            From Design to Delivery — <span className="brand-gradient-text">Simple &amp; Fast</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3">
            In just six transparent steps, convert your creative ideas into crisp, tangible printed materials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.step}
                className="bg-[#0f1420]/80 border border-white/10 rounded-2xl p-6 sm:p-7 relative hover:border-[#ff6a00]/40 transition-all hover:-translate-y-1 hover:shadow-xl group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-white/20 group-hover:text-[#ff6a00] transition-colors">
                    {st.step}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-[#ff6a00]/10 border border-[#ff6a00]/25 flex items-center justify-center text-[#ff6a00] group-hover:bg-[#ff6a00] group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{st.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{st.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
