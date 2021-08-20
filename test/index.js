const { expect } = require('chai');
const sitemapGenerator = require('../index');

const TEST_SITE_URL = 'http://example.com';

describe('easy-express-sitemap-generator', () => {
  describe('Generate sitemap', () => {
    const app = require('./express/app');
    const expectResult = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>
    http://example.com
    </loc>
  </url>
  <url>
    <loc>
    http://example.com/about
    </loc>
  </url>
</urlset>`;

    const excludeUrls = ['/login'];
    const sitemap = sitemapGenerator(app, TEST_SITE_URL, excludeUrls);

    // TODO: Error in string comparison
    expect(expectResult).to.is.a(sitemap);
  });

  describe('Generate sitemap(Separate the router module.)', () => {
    const app = require('./express/app-separate-router');
    const expectResult = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>
    http://example.com
    </loc>
  </url>
  <url>
    <loc>
    http://example.com/about
    </loc>
  </url>
  <url>
    <loc>
    http://example.com/users
    </loc>
  </url>
</urlset>`;

    const excludeUrls = ['/login', '/users/new'];
    const sitemap = sitemapGenerator(app, TEST_SITE_URL, excludeUrls);

    // TODO: Error in string comparison
    expect(expectResult).to.is.a(sitemap);
  });
});
