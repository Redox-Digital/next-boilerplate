import fs from 'fs';
import path from 'path';

// Adjust this section to your production domain, and project specs
const BASE_URL = 'https://your-domain.ch';

async function fetchDynamicPages() {
  const response = await fetch(`https://cms.your-domain.ch/path-to-dynamic-pages-endpoint`);
  const json = await response.json();
  return json.data || [];
}

function generateUrl(loc, priority, lastmod = new Date().toISOString()) {
  return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority.toFixed(2)}</priority>
  </url>`;
}

async function generateSitemap() {
  const staticPages = [
    { url: '', priority: 1.0 },
    { url: 'services', priority: 0.9 },
    { url: 'contact', priority: 0.8 },
    { url: 'about-us', priority: 0.7 },
  ];

  const staticUrls = staticPages.map((page) =>
    generateUrl(`${BASE_URL}/${page.url}`, page.priority)
  );

  // DEV : update this section according to your project's specs
  /*
  const pages = await fetchDynamicPages();
  const pagesUrls = projects.map((page) =>
    generateUrl(`${BASE_URL}/projets/${project.id}`, 0.4)
  );
  */
  // DEV values
  const pagesUrls = [];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${[...staticUrls, ...pagesUrls].join('')}
  </urlset>`;

  const outputDir = path.join(process.cwd(), 'out');
  const outputPath = path.join(outputDir, 'sitemap.xml');

  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);
  fs.writeFileSync(outputPath, sitemap.trim());
  console.log(`✅ Sitemap generated at: ${outputPath}`);
}

generateSitemap().catch((err) => {
  console.error('❌ Error generating sitemap:', err);
  process.exit(1);
});
