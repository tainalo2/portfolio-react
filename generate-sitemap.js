const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

// Crée une instance de SitemapStream
const sitemap = new SitemapStream({ hostname: 'https://www.alexandre-rongier.fr' });

// Ajoute les URLs à ton sitemap
sitemap.write({ url: '/',  changefreq: 'monthly', priority: 1.0 });
sitemap.write({ url: '/devweb/',  changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/streaming/',  changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/entertainer/',  changefreq: 'monthly', priority: 0.8 });
sitemap.end();

// Sauvegarde le fichier sitemap.xml dans le dossier build
streamToPromise(sitemap)
  .then(data => fs.writeFileSync(path.join(__dirname, 'build', 'sitemap.xml'), data));
