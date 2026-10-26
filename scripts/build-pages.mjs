#!/usr/bin/env node
// Generates the content pages (service, plaster, guide and report pages and their /es/ and /ru/ versions).
// Usage (from the site root):  node scripts/build-pages.mjs && node scripts/build-i18n.mjs
// Sources: scripts/content-*.mjs (copy in EN/ES/RU) and scripts/pages-lib.mjs (shared shell).
// Never edit a generated page by hand; change the source and run this again.
// build-i18n.mjs runs after it and rewrites sitemap.xml, with hreflang alternates for every page that has /es/, /uk/ or /ru/ versions.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { render } from './pages-lib.mjs';
import { PLASTER } from './i18n-plaster.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
process.chdir(ROOT);

const pages = [];
for (const mod of ['./content-plaster.mjs', './content-service.mjs', './content-guides.mjs', './content-es.mjs']) {
  if (!fs.existsSync(path.join(ROOT, 'scripts', mod.slice(2)))) continue;
  const m = await import(mod);
  for (const v of Object.values(m)) if (v && v.slug && v.lang) pages.push(v);
}

// Every page lists the language versions that exist (same slug, other language) for hreflang.
const PL_SLUG = '/venetian-plaster/';
for (const p of pages) {
  p.langs = [...new Set(pages.filter((q) => q.slug === p.slug && !q.noindex).map((q) => q.lang))];
  if (p.slug === PL_SLUG) p.langs = ['en', 'es', 'ru'];
  p.langs.sort((a, b) => (a === 'en' ? -1 : b === 'en' ? 1 : a.localeCompare(b)));
}
const errors = [];
// A link to a page that does not exist yet is written as plain text and reported, so every commit stays link-clean.
// When all pages exist (the last task), the report is empty.
const stripped = [];
const written = [];
function stripDead(html, slug) {
  return html.replace(/<a ([^>]*?)href="(\/[^"#?]*)"([^>]*)>([\s\S]*?)<\/a>/g, (m, a, href, b, inner) => {
    const rel = href.replace(/^\//, '');
    const file = rel === '' || rel.endsWith('/') ? rel + 'index.html' : rel;
    if (fs.existsSync(path.join(ROOT, file)) || (!rel.endsWith('/') && !rel.endsWith('.html') && fs.existsSync(path.join(ROOT, rel)))) return m;
    stripped.push(slug + ' -> ' + href);
    return inner;
  });
}

const len = (s) => [...String(s).replace(/&amp;/g, '&').replace(/&#x27;/g, "'")].length;
for (const p of pages) {
  if (len(p.title) > 60) errors.push(p.slug + ' title ' + len(p.title));
  if (len(p.desc) < 120 || len(p.desc) > 155) errors.push(p.slug + ' (' + p.lang + ') description ' + len(p.desc));
  const dir = path.join(ROOT, p.lang === 'en' ? '' : p.lang, p.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), render(p));
  written.push([path.join(dir, 'index.html'), p.lang + p.slug]);
  console.log('wrote ' + path.relative(ROOT, path.join(dir, 'index.html')));
}


// ---- Venetian plaster page in Spanish and Russian (T38) -----------------------------------------------------------
// The English page is the only source. Translations come from i18n-plaster.mjs; a changed English text stops the build.
const PL_LANGS = ['en', 'es', 'ru'];
const plAlternates = PL_LANGS.map((l) => '<link rel="alternate" hreflang="' + l + '" href="https://m5miami.com' + (l === 'en' ? '' : '/' + l) + '/venetian-plaster/">').join('\n')
  + '\n<link rel="alternate" hreflang="x-default" href="https://m5miami.com/venetian-plaster/">\n';
function buildPlaster(lang) {
  let html = fs.readFileSync(path.join(ROOT, 'venetian-plaster/index.html'), 'utf8');
  // keep the English page's hreflang block in sync (idempotent)
  html = html.replace(/<link rel="alternate" hreflang="[^"]*" href="[^"]*">\n/g, '');
  html = html.replace(/(<link rel="canonical" href="https:\/\/m5miami\.com\/venetian-plaster\/">\n)/, '$1' + plAlternates);
  if (lang === 'en') return html;
  html = html.replace(/<!--[\s\S]*?-->/g, '');
  const idx = lang === 'es' ? 1 : 2;
  const missing = [];
  for (const entry of [...PLASTER].sort((a, b) => b[0].length - a[0].length)) {
    if (!html.includes(entry[0])) { missing.push(entry[0].slice(0, 70)); continue; }
    html = html.split(entry[0]).join(entry[idx]);
  }
  if (missing.length) throw new Error('plaster translation: English text not found in /venetian-plaster/ (changed?):\n  ' + missing.join('\n  '));
  const url = 'https://m5miami.com/' + lang + '/venetian-plaster/';
  html = html.replace('<html lang="en">', '<html lang="' + lang + '">');
  html = html.replace(/<link rel="canonical" href="[^"]*">/, '<link rel="canonical" href="' + url + '">');
  html = html.replace(/<meta property="og:url" content="[^"]*">/, '<meta property="og:url" content="' + url + '">');
  html = html.replace('<meta property="og:site_name" content="M5 Studio Miami">', '<meta property="og:site_name" content="M5 Studio Miami">\n<meta property="og:locale" content="' + (lang === 'es' ? 'es_US' : 'ru_RU') + '">');
  html = html.split('https://m5miami.com/venetian-plaster/#service').join(url + '#service');
  html = html.replace('"url": "https://m5miami.com/venetian-plaster/"}', '"url": "' + url + '", "inLanguage": "' + lang + '"}');
  html = html.split("lang:'en'").join("lang:'" + lang + "'");
  html = html.replace('<a class="mark" href="/venetian-plaster/"', '<a class="mark" href="/' + lang + '/venetian-plaster/"');
  for (const slug of ['condo-renovation', 'home-renovation']) {
    if (pages.some((q) => q.lang === lang && q.slug === '/' + slug + '/')) html = html.split('href="/' + slug + '/"').join('href="/' + lang + '/' + slug + '/"');
  }
  html = html.replace('<a href="/">m5miami.com</a>', '<a href="/' + lang + '/">m5miami.com</a>');
  if (lang === 'ru') {
    html = html.replace('/fonts/geist-latin.woff2', '/fonts/geist-cyrillic.woff2');
    html = html.replace('</style>', '  .hero h1{font-size:clamp(40px,7.2vw,124px)}\n</style>');
  }
  return '<!-- Generated from /venetian-plaster/ by scripts/build-pages.mjs. Do not edit by hand. -->\n' + html;
}
for (const l of PL_LANGS) {
  const out = path.join(ROOT, l === 'en' ? '' : l, 'venetian-plaster/index.html');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  const built = buildPlaster(l);
  if (l === 'en') { if (built !== fs.readFileSync(out, 'utf8')) { fs.writeFileSync(out, built); console.log('updated venetian-plaster/index.html (hreflang)'); } }
  else { fs.writeFileSync(out, built); written.push([out, l + '/venetian-plaster/']); console.log('wrote ' + l + '/venetian-plaster/index.html'); }
}

for (const [file, slug] of written) fs.writeFileSync(file, stripDead(fs.readFileSync(file, 'utf8'), slug));

// Add the new English URLs to sitemap.xml (build-i18n.mjs then rewrites it with the language alternates).
const smPath = path.join(ROOT, 'sitemap.xml');
let sm = fs.readFileSync(smPath, 'utf8');
for (const p of pages.filter((x) => x.lang === 'en' && !x.noindex)) {
  const loc = 'https://m5miami.com' + p.slug;
  if (!sm.includes('<loc>' + loc + '</loc>')) sm = sm.replace('</urlset>', '  <url>\n    <loc>' + loc + '</loc>\n  </url>\n</urlset>');
}
fs.writeFileSync(smPath, sm);
if (stripped.length) console.log('NOT YET LINKED (target missing):\n' + [...new Set(stripped)].join('\n'));
if (errors.length) { console.error('LENGTH PROBLEMS:\n' + errors.join('\n')); process.exitCode = 1; }
