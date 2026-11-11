import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { companyDetails } from '../data/servicesData';
import { getBreadcrumbSchema } from '../data/schemaData';

export default function PrivacyPolicyPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Privacy Policy', url: '/privacy-policy' }
  ];

  return (
    <div className="py-12 sm:py-16">
      <SEOHead
        title="Privacy Policy — Data Protection & Privacy Terms"
        description="Privacy policy of Friends Graphics Patna. How we collect, use, and protect your personal and commercial print information."
        canonicalPath="/privacy-policy"
        noIndex={true}
        schemaJson={getBreadcrumbSchema(breadcrumbs)}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link to="/" className="hover:text-[#ff6a00] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#ff6a00]">Privacy Policy</span>
        </nav>

        <header className="space-y-2 border-b border-white/10 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/5 text-slate-300 border border-white/10">
            <ShieldCheck className="w-3.5 h-3.5 text-[#ff6a00]" />
            <span>LEGAL &amp; COMPLIANCE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white">Privacy Policy</h1>
          <p className="text-xs text-slate-400">Last updated: November 2026</p>
        </header>

        <div className="prose prose-invert max-w-none text-slate-300 space-y-6 text-sm sm:text-base leading-relaxed">
          <p>
            At <strong>Friends Graphics</strong> (operating at <em>www.friendsgraphicss.com</em>), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines our practices regarding data collection, usage, and safeguarding when you interact with our website, quotation forms, and WhatsApp services.
          </p>

          <h2 className="text-xl font-bold text-white mt-6 mb-2">1. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide when inquiring about printing services, requesting quotations, or contacting our production desk:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li>Contact details: Name, phone number, WhatsApp contact, email address, and delivery location.</li>
            <li>Project specifics: Dimensions, artwork files, printing specifications, quantities, and delivery deadlines.</li>
            <li>Technical data: Anonymized analytics data (such as page views, device type, approximate geographic region) collected via Google Analytics 4 to optimize website performance and user experience.</li>
          </ul>

          <h2 className="text-xl font-bold text-white mt-6 mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li>To formulate accurate custom quotations and estimate manufacturing turnaround times.</li>
            <li>To communicate artwork proofs, progress updates, and parcel dispatch tracking details via WhatsApp or telephone.</li>
            <li>To coordinate logistics and physical delivery to your address in Patna or district transportation hubs across Bihar.</li>
            <li>We do not sell, rent, or trade your personal or business information to any third parties for marketing purposes.</li>
          </ul>

          <h2 className="text-xl font-bold text-white mt-6 mb-2">3. Artwork &amp; Campaign Confidentiality</h2>
          <p>
            All custom graphics, corporate trademarks, candidate portrait photographs, election slogans, and proprietary invoice templates provided to Friends Graphics are maintained under strict commercial confidentiality and used solely for the fulfillment of your authorized printing run.
          </p>

          <h2 className="text-xl font-bold text-white mt-6 mb-2">4. Contacting Our Data &amp; Privacy Desk</h2>
          <p>
            If you have any questions regarding this Privacy Policy or wish to update or delete your contact records, please contact:
          </p>
          <div className="bg-[#0f1422] border border-white/10 rounded-2xl p-5 space-y-2 text-xs sm:text-sm text-slate-300">
            <div><strong>Friends Graphics</strong> (Proprietor: {companyDetails.founder})</div>
            <div>Shop No. B-12, Popular Palace, Langartoli, Bari Path, Patna - 800004, Bihar</div>
            <div>Phone: {companyDetails.phonePrimary} | WhatsApp: +91 {companyDetails.whatsappNumber}</div>
            <div>Email: {companyDetails.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

