import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';
import { servicesData, companyDetails } from '../data/servicesData';

export default function QuickQuoteForm({ preselectedService = '', className = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: preselectedService || 'Banner Printing',
    size: '',
    quantity: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      alert('Please provide your name and phone number.');
      return;
    }

    // Construct formatted WhatsApp message
    const message =
      `*New Printing Inquiry — Friends Graphics Patna*\n` +
      `------------------------------------\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `🖨️ *Service:* ${formData.service}\n` +
      (formData.size ? `📏 *Size / Dimensions:* ${formData.size}\n` : '') +
      (formData.quantity ? `🔢 *Quantity:* ${formData.quantity}\n` : '') +
      (formData.notes ? `📝 *Requirements:* ${formData.notes}\n` : '') +
      `------------------------------------\n` +
      `Estd. ${companyDetails.established} • Sent via friendsgraphicss.com`;

    const encoded = encodeURIComponent(message);
    setSubmitted(true);

    setTimeout(() => {
      window.open(`https://wa.me/${companyDetails.whatsappNumber}?text=${encoded}`, '_blank');
      setSubmitted(false);
    }, 800);
  };

  return (
    <div className={`bg-[#0f1420]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl ${className}`}>
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ff6a00] mb-2">
        <Sparkles className="w-3.5 h-3.5" />
        <span>Instant WhatsApp Estimation</span>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
        Request a Free Quotation
      </h3>
      <p className="text-sm text-slate-400 mb-6">
        No waiting. Fill details below to connect directly with our production manager on WhatsApp.
      </p>

      {submitted ? (
        <div className="bg-[#25d366]/10 border border-[#25d366]/30 rounded-xl p-6 text-center text-[#25d366] space-y-2 animate-fade-in">
          <CheckCircle2 className="w-10 h-10 mx-auto" />
          <h4 className="font-bold text-lg text-white">Opening WhatsApp...</h4>
          <p className="text-xs text-slate-300">
            Connecting you directly with Ranjan Sharma (+91 7992421080)
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Ranjan Kumar"
                className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:border-[#ff6a00] focus:outline-none focus:ring-1 focus:ring-[#ff6a00] transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                WhatsApp Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 7992421080"
                className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:border-[#ff6a00] focus:outline-none focus:ring-1 focus:ring-[#ff6a00] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Service */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Printing Service *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#141b29] border border-white/10 text-white text-sm focus:border-[#ff6a00] focus:outline-none focus:ring-1 focus:ring-[#ff6a00] transition-colors"
              >
                {servicesData.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Custom Printing Requirement">Other Custom Printing</option>
              </select>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Quantity
              </label>
              <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="e.g. 500 pcs, 4 banners"
                className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:border-[#ff6a00] focus:outline-none focus:ring-1 focus:ring-[#ff6a00] transition-colors"
              />
            </div>
          </div>

          {/* Dimensions / Size */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Dimensions / Size
            </label>
            <input
              type="text"
              name="size"
              value={formData.size}
              onChange={handleChange}
              placeholder="e.g. 6x3 ft, 8x4 ft, Standard A4, 3.5x2 inch card"
              className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:border-[#ff6a00] focus:outline-none focus:ring-1 focus:ring-[#ff6a00] transition-colors"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              Specific Requirements / Material Details
            </label>
            <textarea
              name="notes"
              rows={3}
              value={formData.notes}
              onChange={handleChange}
              placeholder="Tell us if you need eyelets, lamination, specific paper GSM, or urgent delivery date..."
              className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white text-sm focus:border-[#ff6a00] focus:outline-none focus:ring-1 focus:ring-[#ff6a00] transition-colors resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-[#ff6a00] to-[#ff8a00] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#ff6a00]/25 hover:shadow-[#ff6a00]/40 hover:scale-[1.01] transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Send Instant Quote Request on WhatsApp</span>
            <Send className="w-4 h-4" />
          </button>

          <p className="text-[11px] text-center text-slate-500">
            Average response time: under 15 minutes during shop hours (10 AM - 8:30 PM).
          </p>
        </form>
      )}
    </div>
  );
}
