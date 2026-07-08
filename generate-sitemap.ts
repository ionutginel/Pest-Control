import fs from 'fs';
import path from 'path';
import { boroughsData } from './src/data/boroughs';
import { pestsData } from './src/data/pests';

const BASE_URL = 'https://www.londonpestmanagement.co.uk';

const staticPages = [
  '',
  '/services/domestic',
  '/services/commercial',
  '/pests',
  '/areas',
  '/contact'
];

const urls: string[] = [];

// 1. Add static pages
staticPages.forEach(p => {
  urls.push(`${BASE_URL}${p}`);
});

// 2. Add pests
pestsData.forEach(pest => {
  urls.push(`${BASE_URL}/pests/${pest.id}`);
});

// 3. Add areas & postcodes
boroughsData.forEach(borough => {
  urls.push(`${BASE_URL}/areas/${borough.id}`);
  borough.postcodes.forEach(pc => {
    urls.push(`${BASE_URL}/areas/${borough.id}/${pc.toLowerCase()}`);
  });
});

// Build XML
const xmlEntries = urls.map(url => {
  let priority = '0.5';
  let changefreq = 'weekly';

  if (url === BASE_URL) {
    priority = '1.0';
    changefreq = 'daily';
  } else if (url.includes('/services/')) {
    priority = '0.9';
    changefreq = 'weekly';
  } else if (url.includes('/contact')) {
    priority = '0.8';
    changefreq = 'monthly';
  } else if (url.endsWith('/pests') || url.endsWith('/areas')) {
    priority = '0.8';
    changefreq = 'weekly';
  } else if (url.includes('/pests/')) {
    priority = '0.7';
    changefreq = 'weekly';
  } else if (url.includes('/areas/')) {
    const parts = url.replace(BASE_URL, '').split('/').filter(Boolean);
    if (parts.length === 3) {
      priority = '0.6'; // Postcode pages
    } else {
      priority = '0.7'; // Borough page
    }
    changefreq = 'weekly';
  }

  return `  <url>
    <loc>${url}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries.join('\n')}
</urlset>
`;

const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml, 'utf8');
console.log(`Successfully generated sitemap.xml with ${urls.length} entries.`);
