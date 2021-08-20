const STACK_ROUTER = 'router';
const STACK_BOUND_DISPATCH = 'bound dispatch';

/**
 * Generate Sitemap
 * @param {*} app
 * @param {string} siteUrl
 * @param {Array<string>} excludeUrls - Not required.
 * @return {string} generated sitemap text
 */
const generateSitemap = (app, siteUrl, excludeUrls) => {
  const pathList = app._router.stack
    .filter((r) => [STACK_ROUTER, STACK_BOUND_DISPATCH].includes(r.name))
    .map((r) => {
      switch (r.name) {
        case STACK_ROUTER:
          const { stack } = r.handle;

          const parentPath = r.regexp
            .toString()
            .split('?')[0]
            .slice(2)
            .replace(/\\/g, '')
            .slice(0, -1);

          return stack.map((s) => {
            return s.route.path.length === 1
              ? `${siteUrl}${parentPath}`
              : `${siteUrl}${parentPath}${s.route.path}`;
          });
        case STACK_BOUND_DISPATCH:
          const { path } = r.route;

          return `${siteUrl}${path}`;

        default:
          return;
      }
    });

  let mergedPathList = [];
  pathList.forEach((p) => {
    mergedPathList = mergedPathList.concat(p);
  });

  if (excludeUrls && excludeUrls.length) {
    excludeUrls.map((url) => {
      const deleteIndex = mergedPathList.findIndex(
        (p) => p === `${siteUrl}${url}`
      );
      mergedPathList.splice(deleteIndex, 1);
    });
  }

  const getXMLPageList = (urlList) => {
    return urlList
      .map(
        (url) => `
  <url>
    <loc>
      ${url}
    </loc>
  </url>`
      )
      .join('');
  };

  const sitemapData = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${getXMLPageList(
    mergedPathList
  )}
</urlset>
`;

  return sitemapData;
};

module.exports = generateSitemap;
