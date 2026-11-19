import fs from 'fs';
import { servicesData } from '../src/data/servicesData.js';
import { blogPosts } from '../src/data/blogData.js';

const baseUrl = 'https://www.friendsgraphics.in';
const today = '2026-11-19';

const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/locations', priority: '0.8', changefreq: 'weekly' },
  { url: '/portfolio', priority: '0.8', changefreq: 'weekly' },
  { url: '/about', priority: '0.7', changefreq: 'monthly' },
  { url: '/why-us', priority: '0.7', changefreq: 'monthly' },
  { url: '/testimonials', priority: '0.7', changefreq: 'monthly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/faqs', priority: '0.7', changefreq: 'weekly' },
  { url: '/blog', priority: '0.8', changefreq: 'weekly' },
  { url: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms-and-conditions', priority: '0.3', changefreq: 'yearly' },
  { url: '/sitemap', priority: '0.4', changefreq: 'monthly' }
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <!-- Core Static Pages -->
`;

staticPages.forEach(p => {
  xml += `  <url>
    <loc>${baseUrl}${p.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>\n`;
});

xml += `\n  <!-- 20 Service Pages (Election & Commercial) -->\n`;
servicesData.forEach(s => {
  const isElection = ['rally-election-flag', 'satin-election-flag', 'paper-election-flag', 'election-campaign-poster', 'promotional-canopy-tent', 'candidate-badges-caps-printing', 'custom-tshirt-printing', 'non-woven-carry-bag-printing', 'national-paper-flag', 'election-management-services'].includes(s.slug);
  const priority = isElection ? '0.9' : (s.slug === 'flex-printing-services' ? '0.85' : '0.8');

  xml += `  <url>
    <loc>${baseUrl}/services/${s.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
    <image:image>
      <image:loc>${baseUrl}${s.heroImage}</image:loc>
      <image:title>${s.title.replace(/&/g, '&amp;')}</image:title>
    </image:image>
  </url>\n`;
});

xml += `\n  <!-- Informational Blog Guides (E-E-A-T Topical Authority) -->\n`;
blogPosts.forEach(b => {
  xml += `  <url>
    <loc>${baseUrl}/blog/${b.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.75</priority>
  </url>\n`;
});

xml += `</urlset>\n`;

fs.writeFileSync('public/sitemap.xml', xml, 'utf8');
console.log('Generated public/sitemap.xml with ' + (staticPages.length + servicesData.length + blogPosts.length) + ' URLs.');
