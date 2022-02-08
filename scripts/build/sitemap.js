#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const os = require('os');
const sitemap = require('sitemap');
const stream = require('stream');

const priorityMap = {
  '/docs/getting-started/en': 0.8,
  '/docs/faq/en': 0.8
};

const ROUTES = fs.readFileSync(path.resolve(__dirname, '../site/route-paths.txt')).toString().split(os.EOL);

function generateUrls(lang) {
  const urls = Array.from(new Set(ROUTES.filter(r => r !== '/').map(r => r.replace(/\/(zh|en)$/, ''))));
  return urls.map((r) => {
    const url = `${r}/${lang}`;
    return {
      url,
      changefreq: sitemap.EnumChangefreq.HOURLY,
      priority: priorityMap[url] || 0.6,
      lastmodrealtime: true,
      lastmodISO: new Date().toISOString(),
      links: [
        { lang: 'en', url: `${r}/en` },
        { lang: 'zh', url: `${r}/zh` },
        { lang: 'x-default', url: `${r}/en` }
      ]
    };
  });
}

async function main() {
  const urls = [
    {
      url: '/',
      changefreq: sitemap.EnumChangefreq.HOURLY,
      priority: 1,
      lastmodrealtime: true,
      lastmodISO: new Date().toISOString()
    },
    ...generateUrls('en'),
    ...generateUrls('zh')
  ];
  try {
    const res = await sitemap.streamToPromise(
      stream.Readable.from(urls).pipe(
        new sitemap.SitemapStream({
          hostname: 'https://ng-alain.com',
          cacheTime: 600000,
        })
      )
    );
    const ROOT_DIR = `${path.resolve(__dirname, '../../')}/src/dist/browser`;
    fs.writeFileSync(path.resolve(ROOT_DIR, 'sitemap.xml'), res.toString());
  } catch (ex) {
    console.error('生成SiteMap异常', ex);
  }
}

main()
