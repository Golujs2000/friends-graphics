import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';

// Eager load HomePage for optimal Largest Contentful Paint (LCP)
import HomePage from './pages/HomePage';

// Code-split other pages for fast initial bundle & superior Core Web Vitals
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const LocationsPage = lazy(() => import('./pages/LocationsPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const WhyUsPage = lazy(() => import('./pages/WhyUsPage'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const SitemapPage = lazy(() => import('./pages/SitemapPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

// Lightweight route transition fallback
function RouteLoadingFallback() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-[#ff6a00] border-t-transparent animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#0b0f19] text-white selection:bg-[#ff6a00] selection:text-white">
        {/* Navigation Bar */}
        <Navbar />

        {/* Dynamic Route Content with Suspense */}
        <main className="flex-1">
          <Suspense fallback={<RouteLoadingFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:slug" element={<ServiceDetailPage />} />
              <Route path="/locations" element={<LocationsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/faqs" element={<FAQPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/why-us" element={<WhyUsPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-and-conditions" element={<TermsPage />} />
              <Route path="/sitemap" element={<SitemapPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating WhatsApp Action Button */}
        <WhatsAppFloatingButton />
      </div>
    </BrowserRouter>
  );
}
