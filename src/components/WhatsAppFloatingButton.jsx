import React from 'react';
import { MessageCircle } from 'lucide-react';
import { companyDetails } from '../data/servicesData';

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={`https://wa.me/${companyDetails.whatsappNumber}?text=Hi%20Friends%20Graphics,%20I%20have%20an%20urgent%20printing%20inquiry.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Direct WhatsApp Consultation"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25d366] text-black font-extrabold text-sm shadow-[0_8px_30px_rgba(37,211,102,0.45)] hover:bg-[#20ba59] hover:scale-105 transition-all group"
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-40"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
      </span>
      <MessageCircle className="w-5 h-5 fill-black stroke-black" />
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}
