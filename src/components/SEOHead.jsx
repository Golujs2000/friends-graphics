import { useEffect } from 'react';
import { SITE_URL, SITE_NAME, LOGO_URL } from '../data/schemaData';

export default function SEOHead({
  title,
  description,
  canonicalPath = '',
  ogImage = `${SITE_URL}/images/hero-bg-election.jpg`,
  ogType = 'website',
  schemaJson = null,
  noIndex = false,
  keywords = ''
}) {
  const fullTitle = title.includes('Friends Graphics')
    ? title
    : `${title} | Friends Graphics Patna`;

  const canonicalUrl = `${SITE_URL}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`.replace(/\/$/, '') || SITE_URL;

  useEffect(() => {
    // 1. Update Document Title
    document.title = fullTitle;

    // Helper to set or create meta tag
    const setMetaTag = (attribute, attrValue, content) => {
      let element = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
      return element;
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'robots', noIndex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }

    // 3. Open Graph Tags
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`);
    setMetaTag('property', 'og:site_name', SITE_NAME);
    setMetaTag('property', 'og:locale', 'en_IN');

    // 4. Twitter / X Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`);

    // 5. Local SEO & Geo Tags
    setMetaTag('name', 'geo.region', 'IN-BR');
    setMetaTag('name', 'geo.placename', 'Patna');
    setMetaTag('name', 'geo.position', '25.6146;85.1557');
    setMetaTag('name', 'ICBM', '25.6146, 85.1557');

    // 6. Canonical Link
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);

    // 7. Dynamic JSON-LD Structured Data
    const scriptId = 'dynamic-page-schema';
    let scriptTag = document.getElementById(scriptId);
    if (schemaJson) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = scriptId;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = JSON.stringify(schemaJson);
    } else if (scriptTag) {
      scriptTag.remove();
    }

    // Cleanup on unmount or page change
    return () => {
      const activeScript = document.getElementById(scriptId);
      if (activeScript) {
        activeScript.remove();
      }
    };
  }, [fullTitle, description, canonicalUrl, ogImage, ogType, schemaJson, noIndex, keywords]);

  return null;
}

