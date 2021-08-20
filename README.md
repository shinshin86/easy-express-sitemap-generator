# easy-express-sitemap-generator

This is an npm package for creating sitemaps easily with Express.

## Usage

```javascript
const express = require('express');
const app = express();
const sitemapGenerator = require('easy-express-sitemap-generator');

app.get('/', (req, res) => {
  res.send('path: "https://example.com/"');
});

app.get('/about', (req, res) => {
  res.send('path: "https://example.com/about"');
});

const YOUR_SITE_URL = 'http://example.com';

const sitemap = sitemapGenerator(app, YOUR_SITE_URL);

console.log(sitemap);
```

↓

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>
      http://example.com/
    </loc>
  </url>
  <url>
    <loc>
      http://example.com/about
    </loc>
  </url>
</urlset>
```
