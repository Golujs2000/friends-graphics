import { companyDetails } from './servicesData';

export const SITE_URL = 'https://www.friendsgraphicss.com';
export const SITE_NAME = 'Friends Graphics';
export const LOGO_URL = `${SITE_URL}/logo.png`;
export const FOUNDER_NAME = 'Ranjan Sharma';

/**
 * Generates LocalBusiness (PrintShop / ProfessionalService) JSON-LD Schema
 */
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'PrintShop',
    '@id': `${SITE_URL}/#localbusiness`,
    name: companyDetails.name,
    alternateName: [companyDetails.hindiName, 'Friends Graphics Patna', 'फ्रेंड्स ग्राफिक्स'],
    description: 'Premier printing press and wholesale manufacturer of election campaign publicity materials (Chunav Prachar Samagri), LED acrylic signboards, star flex banners, and commercial offset printing in Patna, Bihar since 2014.',
    url: SITE_URL,
    logo: LOGO_URL,
    image: [
      `${SITE_URL}/images/hero-bg-election.jpg`,
      `${SITE_URL}/images/plastic_election_flags.jpg`,
      `${SITE_URL}/images/banners.png`
    ],
    telephone: companyDetails.phonePrimary,
    email: companyDetails.email,
    foundingDate: '2014-03-15',
    founder: {
      '@type': 'Person',
      name: FOUNDER_NAME,
      jobTitle: 'Proprietor & Master Print Specialist'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shop No. B-12, Popular Palace, Langartoli, Bari Path',
      addressLocality: 'Patna',
      addressRegion: 'Bihar',
      postalCode: '800004',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.6146,
      longitude: 85.1557
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        opens: '10:00',
        closes: '20:30'
      }
    ],
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, PhonePe, Google Pay, Paytm, Bank Transfer, Net Banking',
    areaServed: [
      { '@type': 'City', name: 'Patna' },
      { '@type': 'AdministrativeArea', name: 'Bari Path' },
      { '@type': 'AdministrativeArea', name: 'Machhua Toli' },
      { '@type': 'AdministrativeArea', name: 'Langartoli' },
      { '@type': 'AdministrativeArea', name: 'Kankarbagh' },
      { '@type': 'AdministrativeArea', name: 'Boring Road' },
      { '@type': 'AdministrativeArea', name: 'Patna City' },
      { '@type': 'State', name: 'Bihar' },
      { '@type': 'State', name: 'Jharkhand' }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Printing & Election Material Services Catalog',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Chunav Prachar Samagri (Election Publicity Materials)',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Plastic Election Flag (प्लास्टिक चुनाव झंडा)' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Nylon & Satin Election Flag (नायलॉन चुनाव झंडा)' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Paper Election Flag (कागज़ चुनाव झंडा)' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Election Campaign Poster (चुनावी पोस्टर)' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Canopy Tents & Campaign Kits (कैनोपी टेंट)' } }
          ]
        },
        {
          '@type': 'OfferCatalog',
          name: 'Signage & Commercial Printing',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Flex Printing Services' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LED Acrylic Sign Board' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Carbonless Bill Books' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Offset Printing' } }
          ]
        }
      ]
    },
    sameAs: [
      'https://www.facebook.com',
      'https://www.instagram.com',
      'https://maps.google.com'
    ]
  };
}

/**
 * Generates WebSite Schema with potentialAction SearchAction
 */
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: companyDetails.name,
    alternateName: companyDetails.hindiName,
    description: 'Official portal for Friends Graphics Patna — Election Material Wholesale & Commercial Printing',
    publisher: {
      '@id': `${SITE_URL}/#localbusiness`
    },
    inLanguage: ['en-IN', 'hi-IN']
  };
}

/**
 * Generates BreadcrumbList Schema
 */
export function getBreadcrumbSchema(items = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`
    }))
  };
}

/**
 * Generates Service Schema for individual service pages
 */
export function getServiceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/services/${service.slug}#service`,
    name: service.title,
    alternateName: service.hindiTitle || service.shortTitle,
    description: service.fullDesc || service.shortDesc,
    provider: {
      '@id': `${SITE_URL}/#localbusiness`
    },
    areaServed: {
      '@type': 'State',
      name: 'Bihar'
    },
    serviceType: service.title,
    category: 'Commercial Printing & Fabrication',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      eligibleRegion: {
        '@type': 'State',
        name: 'Bihar'
      }
    },
    image: service.heroImage.startsWith('http') ? service.heroImage : `${SITE_URL}${service.heroImage}`
  };
}

/**
 * Generates FAQPage Schema compliant with Google guidelines
 */
export function getFAQPageSchema(faqItems = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a
      }
    }))
  };
}

/**
 * Generates Article / BlogPosting Schema
 */
export function getArticleSchema(article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${article.slug}`
    },
    headline: article.title,
    description: article.excerpt,
    image: article.coverImage.startsWith('http') ? article.coverImage : `${SITE_URL}${article.coverImage}`,
    author: {
      '@type': 'Person',
      name: article.author || FOUNDER_NAME,
      jobTitle: 'Senior Print Technologist & Proprietor'
    },
    publisher: {
      '@id': `${SITE_URL}/#localbusiness`
    },
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate || article.publishedDate,
    inLanguage: article.inLanguage || 'en-IN'
  };
}

