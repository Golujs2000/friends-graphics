import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { companyDetails } from '../data/servicesData';
import { getBreadcrumbSchema } from '../data/schemaData';

export default function TermsPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Terms & Conditions', url: '/terms-and-conditions' }
  ];

  return (
    <div className="py-12 sm:py-16">
      <SEOHead
        title="Terms & Conditions — Commercial Printing & Orders Policy"
        description="Terms and conditions for printing, design proofs, wholesale quotes, order manufacturing, and delivery with Friends Graphics Patna."
        canonicalPath="/terms-and-conditions"
        noIndex={true}
        schemaJson={getBreadcrumbSchema(breadcrumbs)}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link to="/" className="hover:text-[#ff6a00] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#ff6a00]">Terms &amp; Conditions</span>
        </nav>

        <header className="space-y-2 border-b border-white/10 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/5 text-slate-300 border border-white/10">
            <ShieldCheck className="w-3.5 h-3.5 text-[#ff6a00]" />
            <span>COMMERCIAL AGREEMENT</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white">Terms &amp; Conditions</h1>
          <p className="text-xs text-slate-400">Last updated: November 2026</p>
        </header>

        <div className="prose prose-invert max-w-none text-slate-300 space-y-6 text-sm sm:text-base leading-relaxed">
          <p>
            Welcome to <strong>Friends Graphics</strong>. By commissioning printing services, placing orders, or requesting physical/digital production proofs with Friends Graphics (Bari Path, Patna, Bihar), you agree to comply with and be bound by the following terms and commercial conditions.
          </p>

          <h2 className="text-xl font-bold text-white mt-6 mb-2">1. Proof Approval &amp; Color Calibration</h2>
          <p>
            Prior to full production runs, digital proofs (via PDF / WhatsApp) or physical color proofs are submitted to the customer for review. 
            Once written or electronic proof approval is granted by the client, Friends Graphics is not liable for typographical errors, misspelling, layout oversights, or incorrect contact details present in the approved artwork.
          </p>

          <h2 className="text-xl font-bold text-white mt-6 mb-2">2. Election Campaign Materials &amp; Legal Compliance</h2>
          <p>
            Clients ordering <strong>Chunav Prachar Samagri (चुनाव प्रचार सामग्री)</strong>, candidate banners, posters, and flags are solely responsible for ensuring that their campaign literature and symbols comply with the Model Code of Conduct, Election Commission of India guidelines, and the Flag Code of India 2002.
          </p>

          <h2 className="text-xl font-bold text-white mt-6 mb-2">3. Production Turnaround &amp; Force Majeure</h2>
          <p>
            Turnaround timelines quoted (e.g. 24–48 hours) commence upon receipt of confirmed order advance payment and final artwork approval. While we make every endeavor to meet strict event and rally deadlines, we cannot be held responsible for transit delays caused by regional road closures, strikes, rail delays, or natural calamities.
          </p>

          <h2 className="text-xl font-bold text-white mt-6 mb-2">4. Payment &amp; Ownership</h2>
          <p>
            Custom manufactured orders require an initial advance deposit prior to machine allocation, with the remaining balance settled upon delivery or dispatch proof generation. Completed goods remain the property of Friends Graphics until full settlement of the commercial invoice.
          </p>
        </div>
      </div>
    </div>
  );
}

