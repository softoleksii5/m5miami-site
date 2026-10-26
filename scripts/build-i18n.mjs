#!/usr/bin/env node
// Builds /es/, /uk/ and /ru/ home pages from /index.html and rewrites sitemap.xml.
// Usage (from the site root):  node scripts/build-i18n.mjs
// No dependencies (Node 18+). The English /index.html is the only source; never edit generated files by hand.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ORIGIN = 'https://m5miami.com';
const LANGS = ['es', 'uk', 'ru'];
const LOCALE = { en: 'en_US', es: 'es_US', uk: 'uk_UA', ru: 'ru_RU' };
const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr']);

const src = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

// ---- dictionaries ----------------------------------------------------------
function readDictionaries(html) {
  const start = html.indexOf('var I18N = {');
  if (start < 0) throw new Error('I18N object not found in index.html');
  const open = html.indexOf('{', start);
  const end = html.indexOf('\n  };', open);
  if (end < 0) throw new Error('end of I18N object not found');
  return new Function('return (' + html.slice(open, end + 4) + ')')();
}
const I18N = readDictionaries(src);

// ---- helpers ----------------------------------------------------------------
const escAttr = (v) => String(v).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
const escText = (v) => String(v).replace(/&/g, '&amp;');
const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };
function plain(v) {
  return String(v)
    .replace(/<[^>]+>/g, '')
    .replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => {
      if (e[0] === '#') return String.fromCodePoint(e[1].toLowerCase() === 'x' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10));
      return ENT[e.toLowerCase()] ?? m;
    });
}

function mask(html) {
  const store = [];
  const out = html.replace(/<!--[\s\S]*?-->|<script\b[\s\S]*?<\/script>|<style\b[\s\S]*?<\/style>/gi, (m) => {
    store.push(m);
    return '\u0000' + (store.length - 1) + '\u0000';
  });
  return { out, store };
}
const unmask = (html, store) => html.replace(/\u0000(\d+)\u0000/g, (_, i) => store[+i]);

// Replace the inner HTML of every [data-i18n] element, like applyLang() does in the browser.
function translateText(html, dict) {
  const openRe = /<([a-zA-Z][\w-]*)\b([^>]*?)\sdata-i18n="([^"]+)"([^>]*)>/g;
  let out = '';
  let pos = 0;
  let m;
  while ((m = openRe.exec(html))) {
    const [full, tag, , key] = m;
    const value = dict[key];
    if (value === undefined || VOID.has(tag.toLowerCase())) continue;
    const innerStart = m.index + full.length;
    const closeRe = new RegExp('<(/?)' + tag + '\\b[^>]*>', 'gi');
    closeRe.lastIndex = innerStart;
    let depth = 1;
    let c;
    let innerEnd = -1;
    let closeEnd = -1;
    while ((c = closeRe.exec(html))) {
      if (c[1]) depth--; else if (!/\/\s*>$/.test(c[0])) depth++;
      if (depth === 0) { innerEnd = c.index; closeEnd = c.index + c[0].length; break; }
    }
    if (innerEnd < 0) throw new Error('no closing tag for data-i18n="' + key + '"');
    out += html.slice(pos, innerStart) + value;
    pos = innerEnd;
    openRe.lastIndex = closeEnd;
  }
  return out + html.slice(pos);
}

function translatePlaceholders(html, dict) {
  return html.replace(/<[a-zA-Z][^>]*\sdata-i18n-ph="([^"]+)"[^>]*>/g, (tagText, key) => {
    const v = dict[key];
    if (v === undefined) return tagText;
    const ph = 'placeholder="' + escAttr(plain(v)) + '"';
    return /\splaceholder="[^"]*"/.test(tagText) ? tagText.replace(/\splaceholder="[^"]*"/, ' ' + ph) : tagText.replace(/\sdata-i18n-ph=/, ' ' + ph + ' data-i18n-ph=');
  });
}

function absolutize(html) {
  html = html.replace(/(\b(?:src|href|data-bg|poster|data-src)=")((?:img|projects|media|lookbook|guide)\/|favicon\.svg|tokens\.css|analytics\.js)/g, '$1/$2');
  html = html.replace(/(url\(\s*['"]?)((?:img|media)\/)/g, '$1/$2');
  return html;
}

function setSwitcher(html, lang) {
  return html.replace(/<a href="([^"]*)" hreflang="(\w+)" lang="\w+" data-l="\w+"(?: class="on" aria-current="true")?>/g, (m, href, l) =>
    '<a href="' + href + '" hreflang="' + l + '" lang="' + l + '" data-l="' + l + '"' + (l === lang ? ' class="on" aria-current="true"' : '') + '>');
}

function faqJsonLd(dict) {
  const items = [];
  for (let i = 1; dict['faq' + i + '.q'] !== undefined; i++) {
    items.push({
      '@type': 'Question',
      name: plain(dict['faq' + i + '.q']),
      acceptedAnswer: { '@type': 'Answer', text: plain(dict['faq' + i + '.a']) },
    });
  }
  return '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[\n' + items.map((q) => JSON.stringify(q)).join(',\n') + '\n]}';
}

function buildPage(lang) {
  const dict = I18N[lang];
  const url = ORIGIN + '/' + lang + '/';
  const { out, store } = mask(absolutize(src));
  let html = translatePlaceholders(translateText(out, dict), dict);
  html = unmask(html, store);

  html = html.replace(/<html lang="[^"]*"/, '<html lang="' + lang + '"');
  html = html.replace(/<title>[\s\S]*?<\/title>/, '<title>' + escText(dict['meta.title']) + '</title>');
  html = html.replace(/<meta name="description" content="[^"]*">/, '<meta name="description" content="' + escAttr(dict['meta.desc']) + '">');
  html = html.replace(/<meta property="og:title" content="[^"]*">/, '<meta property="og:title" content="' + escAttr(dict['meta.title']) + '">');
  html = html.replace(/<meta property="og:description" content="[^"]*">/, '<meta property="og:description" content="' + escAttr(dict['meta.desc']) + '">');
  html = html.replace(/<meta property="og:url" content="[^"]*">/, '<meta property="og:url" content="' + url + '">');
  html = html.replace(/<meta property="og:locale" content="[^"]*">/, '<meta property="og:locale" content="' + LOCALE[lang] + '">');
  html = html.replace(/<link rel="canonical" href="[^"]*">/, '<link rel="canonical" href="' + url + '">');
  // Cyrillic pages preload the Cyrillic cut of the display font instead of the Latin one.
  if (lang === 'uk' || lang === 'ru') html = html.replace('/fonts/cormorant-garamond-latin.woff2', '/fonts/cormorant-garamond-cyrillic.woff2');
  html = html.replace(/(<script type="application\/ld\+json">)\s*\{"@context":"https:\/\/schema\.org","@type":"FAQPage"[\s\S]*?(<\/script>)/, (m, a, b) => a + '\n' + faqJsonLd(dict) + '\n' + b);
  html = html.split(ORIGIN + '/?sent=1#contact').join(url + '?sent=1#contact');
  // Pages that exist in Spanish or Russian (build-pages.mjs) are linked in that language; everything else keeps the English page.
  const localized = lang === 'es' ? ['venetian-plaster', 'condo-renovation', 'home-renovation'] : lang === 'ru' ? ['venetian-plaster'] : [];
  for (const slug of localized.filter((x) => fs.existsSync(path.join(ROOT, lang, x, 'index.html')))) html = html.replace(new RegExp('href=([\'"])/' + slug + '/\\1', 'g'), 'href=$1/' + lang + '/' + slug + '/$1');
  html = setSwitcher(html, lang);
  // Language version of the home page: say which language it is in (audit S19 item 4).
  const wp = { '@context': 'https://schema.org', '@type': 'WebPage', '@id': url + '#webpage', url, name: plain(dict['meta.title']), inLanguage: lang, isPartOf: { '@id': ORIGIN + '/#website' } };
  html = html.replace('</head>', '<script type="application/ld+json">' + JSON.stringify(wp) + '</script>\n</head>');
  return html;
}

// ---- pages ------------------------------------------------------------------
for (const lang of LANGS) {
  const dir = path.join(ROOT, lang);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), buildPage(lang));
  console.log('wrote ' + lang + '/index.html');
}

// ---- sitemap ----------------------------------------------------------------
function git(args) {
  try { return execFileSync('git', args, { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim(); } catch { return ''; }
}
function fileFor(loc) {
  const p = loc.replace(ORIGIN, '').replace(/^\//, '');
  return p === '' || p.endsWith('/') ? p + 'index.html' : p;
}
function lastmod(file) {
  const abs = path.join(ROOT, file);
  const dirty = git(['status', '--porcelain', '--', file]);
  const committed = git(['log', '-1', '--format=%cs', '--', file]);
  if (committed && !dirty) return committed;
  const d = fs.existsSync(abs) ? fs.statSync(abs).mtime : new Date();
  return d.toISOString().slice(0, 10);
}

const oldMap = fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8');
// English URLs only: the language versions are re-added below from the files that exist.
const locs = [...oldMap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).filter((l) => !LANGS.some((x) => l.startsWith(ORIGIN + '/' + x + '/')));
// A page belongs to a language cluster when /es/, /uk/ or /ru/ holds the same path as an indexable page.
function counterpart(loc, lang) {
  const rel = loc.replace(ORIGIN, '');
  const loc2 = ORIGIN + (lang === 'en' ? '' : '/' + lang) + rel;
  const file = fileFor(loc2);
  const abs = path.join(ROOT, file);
  if (!fs.existsSync(abs)) return null;
  const head = fs.readFileSync(abs, 'utf8').slice(0, 4000);
  if (/http-equiv="refresh"/i.test(head) || /name="robots"[^>]*noindex/i.test(head)) return null;
  return { loc: loc2, file };
}
const altBlock = (cluster) => cluster.map((c) => '    <xhtml:link rel="alternate" hreflang="' + c.lang + '" href="' + c.loc + '"/>').join('\n')
  + '\n    <xhtml:link rel="alternate" hreflang="x-default" href="' + cluster[0].loc + '"/>';
const entry = (loc, file, cluster) => '  <url>\n    <loc>' + loc + '</loc>\n    <lastmod>' + lastmod(file) + '</lastmod>\n' + (cluster ? altBlock(cluster) + '\n' : '') + '  </url>';
const urls = [];
for (const loc of locs) {
  const cluster = [{ lang: 'en', loc, file: fileFor(loc) }];
  for (const l of ['es', 'uk', 'ru']) { const c = counterpart(loc, l); if (c) cluster.push({ lang: l, ...c }); }
  const multi = cluster.length > 1 ? cluster : null;
  for (const c of cluster) urls.push(entry(c.loc, c.file, multi));
}
fs.writeFileSync(
  path.join(ROOT, 'sitemap.xml'),
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' + urls.join('\n') + '\n</urlset>\n'
);
console.log('wrote sitemap.xml (' + urls.length + ' urls)');
