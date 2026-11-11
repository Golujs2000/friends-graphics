import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  MessageCircle,
  Phone,
  BookOpen,
  Share2,
  CheckCircle2,
  ShieldCheck,
  ChevronLeft
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { blogPosts } from '../data/blogData';
import { companyDetails } from '../data/servicesData';
import { getArticleSchema, getBreadcrumbSchema } from '../data/schemaData';
import QuickQuoteForm from '../components/QuickQuoteForm';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Guides', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` }
  ];

  const fullSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      getArticleSchema(post),
      getBreadcrumbSchema(breadcrumbs)
    ]
  };

  return (
    <div className="py-12 sm:py-16">
      <SEOHead
        title={post.title}
        description={post.excerpt}
        canonicalPath={`/blog/${post.slug}`}
        ogImage={post.coverImage}
        ogType="article"
        schemaJson={fullSchema}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link to="/" className="hover:text-[#ff6a00] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-[#ff6a00] transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-[#ff6a00] truncate max-w-xs">{post.title}</span>
        </nav>

        {/* Back Link */}
        <div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to All Printing Guides</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ff6a00]/15 text-[#ff6a00] border border-[#ff6a00]/30">
            <span>{post.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
            {post.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2 border-t border-b border-white/10 py-3">
            <span className="flex items-center gap-1.5 text-white font-semibold">
              <User className="w-4 h-4 text-[#ff6a00]" />
              <span>{post.author}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>{post.publishedDate}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span>{post.readTime}</span>
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden border border-white/10 bg-black/50 aspect-video shadow-2xl">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Table of Contents */}
        {post.tableOfContents && post.tableOfContents.length > 0 && (
          <div className="bg-[#0f1422] border border-white/10 rounded-2xl p-6 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ff6a00]">
              <BookOpen className="w-4 h-4" />
              <span>Table of Contents (Jump to Section)</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              {post.tableOfContents.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-slate-300 hover:text-[#ff6a00] hover:underline transition-colors block"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Content */}
        <div
          className="prose prose-invert max-w-none text-slate-300 space-y-6 text-sm sm:text-base leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* Contextual Internal Link / Conversion CTA */}
        {post.relatedServiceSlug && (
          <div className="bg-gradient-to-r from-red-950/70 via-[#1c120c] to-amber-950/60 border border-[#ff6a00]/40 rounded-3xl p-6 sm:p-8 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase bg-red-600 text-white">
              <span>Related Service &amp; Wholesale Rates</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Looking for {post.relatedServiceTitle}?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Get direct factory wholesale pricing, fast proofing, and same-day delivery dispatch across Bihar.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to={`/services/${post.relatedServiceSlug}`}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#ff6a00] to-[#ff8a00] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg"
              >
                <span>View Full Specifications</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`https://wa.me/${companyDetails.whatsappNumber}?text=${encodeURIComponent(`नमस्ते! मैंने आपका लेख "${post.title}" पढ़ा और मुझे ${post.relatedServiceTitle} की दरें जाननी हैं।`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-[#25d366] text-black font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        )}

        {/* Author Bio Box (E-E-A-T) */}
        <div className="bg-[#0f1422] border border-white/10 rounded-2xl p-6 flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#ff6a00]/20 border border-[#ff6a00]/40 flex items-center justify-center shrink-0 text-[#ff6a00] font-black text-lg">
            RS
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white">{post.author}</h4>
            <div className="text-xs text-[#ff6a00] font-semibold">{post.authorRole}</div>
            <p className="text-xs text-slate-400 leading-relaxed pt-1">
              Serving publishers, political war rooms, institutions, and corporate enterprises across Bihar from Bari Path, Patna. Specializing in high-speed offset color management, UV inks, and structural signage fabrication.
            </p>
          </div>
        </div>

        {/* Quote Form */}
        <div className="pt-8 border-t border-white/10">
          <QuickQuoteForm />
        </div>
      </div>
    </div>
  );
}

