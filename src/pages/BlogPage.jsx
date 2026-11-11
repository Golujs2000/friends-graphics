import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, Clock, ArrowRight, User, Sparkles, Tag, CheckCircle2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { blogPosts } from '../data/blogData';
import { getBreadcrumbSchema } from '../data/schemaData';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Election Publicity (चुनाव प्रचार)', 'Signage & LED Boards (साइनेज व बोर्ड)', 'Commercial Printing (कमर्शियल प्रिंटिंग)'];

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter((post) => post.category === selectedCategory);

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Printing Guides & Resources', url: '/blog' }
  ];

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <SEOHead
        title="Printing & Signage Guides, Cost Comparisons & Technical Advice"
        description="Expert printing guides by Friends Graphics Patna. In-depth technical articles on election campaign materials, 3D acrylic sign boards, paper GSM selection, and cost comparisons."
        canonicalPath="/blog"
        keywords="election printing guide bihar, acrylic sign board vs acp glow sign, paper gsm chart, printing press patna guide"
        schemaJson={getBreadcrumbSchema(breadcrumbs)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link to="/" className="hover:text-[#ff6a00] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#ff6a00]">Printing &amp; Signage Guides</span>
        </nav>

        {/* Page Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#ff6a00]/15 text-[#ff6a00] border border-[#ff6a00]/30">
            <BookOpen className="w-3.5 h-3.5" />
            <span>TOPICAL AUTHORITY &amp; EXPERT PRINT GUIDES (E-E-A-T)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            Commercial Printing &amp; Election Material <span className="brand-gradient-text">Knowledge Hub</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Written by master print technologist <strong>Ranjan Sharma</strong> with over 12+ years of field experience in Patna, Bihar. Learn technical paper weights, flag substrates, sign board fabrication, and cost optimization.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#ff6a00] to-[#ff8a00] text-white shadow-lg shadow-[#ff6a00]/30'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-[#0f1422]/90 border border-white/10 rounded-3xl overflow-hidden hover:border-[#ff6a00]/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl flex flex-col group"
            >
              <Link to={`/blog/${post.slug}`} className="h-52 overflow-hidden relative bg-black/60 block">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-amber-300 border border-white/10">
                  {post.category}
                </div>
              </Link>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#ff6a00]" />
                    <span>{post.publishedDate}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{post.readTime}</span>
                  </span>
                </div>

                <h2 className="text-lg font-bold text-white group-hover:text-[#ff6a00] transition-colors mb-2 leading-snug line-clamp-2">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-xs text-slate-300 leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span className="truncate">{post.author}</span>
                  </div>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-xs font-bold text-[#ff6a00] hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

