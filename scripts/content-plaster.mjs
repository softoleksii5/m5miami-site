// Plaster content pages (page plan 3.10 and 3.11). English source.
import { ORIGIN } from './pages-lib.mjs';

const fig = (src, w, h, alt, cap, href) =>
  `<figure>${href ? `<a href="${href}">` : ''}<img src="${src}" width="${w}" height="${h}" alt="${alt}" loading="lazy" decoding="async">${href ? '</a>' : ''}<figcaption>${cap}</figcaption></figure>`;

export const costEn = {
  lang: 'en', slug: '/venetian-plaster/cost/', track: 'plaster-cost',
  title: 'What Venetian Plaster Costs in Miami | M5 Studio Miami',
  desc: 'Venetian plaster prices in Miami for 2026: $15–30 per sq ft by finish, projects from $10,000, and a fixed written price after a free site visit.',
  label: 'Venetian plaster · price',
  h1: 'What Venetian plaster costs in Miami',
  lede: 'Typical Venetian plaster prices in Miami run $15–30 per square foot of wall, depending on the finish. Projects with M5 start at $10,000, and you get one fixed number in writing after a free site visit.',
  crumbs: [['Venetian plaster', '/venetian-plaster/'], ['Cost', null]],
  ctas: [['Book a free site visit', '/#contact', 'btn-ink'], ['Venetian plaster with M5', '/venetian-plaster/', 'btn-line']],
  meta: '$15–30 per sq ft · from $10,000 · fixed price in writing',
  ctaH: 'Get a fixed price for your wall',
  ogImage: ORIGIN + '/media/lp/og.jpg',
  article: { date: '2026-10-26' },
  sections: [
    { id: 'short', label: 'The short answer', h2: 'Projects start at $10,000', html: `
      <div class="facts"><div><b>From $10,000</b><span>The starting point for a Venetian plaster, marmorino or mineral plaster project with M5.</span></div><div><b>Free site visit</b><span>A master brings real samples and holds them against your wall, in your light.</span></div><div><b>One fixed price</b><span>Written, for the whole project, with the schedule. No surprises after we start.</span></div></div>
      <h3>Typical prices per square foot of wall, Miami 2026</h3>
      <div class="tblw"><table class="cmp"><thead><tr><th>Finish</th><th>Typical price</th></tr></thead><tbody>
      <tr><td>Mineral plaster, concrete effect</td><td>$15–20 per sq ft</td></tr>
      <tr><td>Marmorino</td><td>$15–25 per sq ft</td></tr>
      <tr><td>Polished Venetian plaster</td><td>$20–30 per sq ft</td></tr>
      <tr><td>Special finishes: metallic, gold leaf, combed relief</td><td>from $30 per sq ft</td></tr>
      </tbody></table></div>
      <p>Prices include surface preparation, materials, hand application and the protective sealer. They are typical ranges for Miami in 2026, and the minimum project is $10,000. Two walls of the same size can still need different work, so your exact price is fixed in writing after we see the wall.</p>
      <p>Everything below explains what moves the price, so you know what to expect before the visit. For the finish itself, see <a href="/venetian-plaster/">Venetian plaster with M5</a>.</p>` },
    { id: 'drivers', alt: true, label: 'What moves the price', h2: 'Seven things that decide the number', html: `
      <ul>
      <li><strong>The finish.</strong> A polished Venetian is built from thin coats, each pressed and burnished by hand. Marmorino, mineral plaster and the other finishes in our <a href="/lookbook/M5_Lookbook_2026.pdf" download>2026 lookbook</a> each have their own steps.</li>
      <li><strong>The area.</strong> One feature wall, a whole room, a hallway with a ceiling: the more continuous surface, the more work, and corners and niches count too.</li>
      <li><strong>The surface underneath.</strong> New drywall, painted walls and old plaster need different preparation. Cracks and uneven areas are fixed first, and we check them at the site visit.</li>
      <li><strong>Height and access.</strong> Tall and double-height walls take more time and equipment than a standard room.</li>
      <li><strong>Wet areas.</strong> Bathrooms, powder rooms and showers get a protective sealer.</li>
      <li><strong>Details.</strong> Fireplaces, columns, niches, curves and hidden doors add craft. A fireplace column with <a href="/projects/fireplace-1000-lines.html">1,000 combed lines</a> is a good example.</li>
      <li><strong>Colour.</strong> Any colour is possible, and we confirm the shade on a real sample before the work starts.</li>
      </ul>` },
    { id: 'special', label: 'Ceilings, bathrooms, fireplaces', h2: 'Ceilings, bathrooms and fireplaces', html: `
      <h3>Ceilings</h3>
      <p>Plaster can run from the wall onto the ceiling without a break, which gives a seamless room. A ceiling is also a large surface worked overhead, so it adds time to the project.</p>
      <h3>Bathrooms and powder rooms</h3>
      <p>Venetian plaster and marmorino are common in bathrooms and powder rooms. Wet zones get a protective sealer. A small room with many corners and details can take as long as a larger plain wall. How it holds up: <a href="/guides/venetian-plaster-humidity-miami/">Venetian plaster in Miami humidity</a>.</p>
      <h3>Fireplaces</h3>
      <p>A fireplace wall or column is a feature that people look at up close, so the finish and the detail work matter. We show the finish on a real panel first.</p>
      <div class="figs">${fig('/img/cost_ivory.jpg', 900, 1125, 'Warm ivory polished Venetian plaster wall with a linear fireplace in a sunlit living room', 'Warm ivory polished Venetian plaster · visualization', '/venetian-plaster/')}${fig('/img/cost_grey.jpg', 900, 1125, 'Powder room in warm grey mineral plaster with a concrete effect and a walnut vanity', 'Grey mineral plaster, concrete effect · visualization', '/venetian-plaster/')}</div>` },
    { id: 'compare', alt: true, label: 'Compared', h2: 'Venetian plaster, microcement and paint', html: `
      <p>An honest comparison of three ways to finish a wall. Prices vary by project, so the table compares what you get, not a number.</p>
      <div class="tblw"><table class="cmp"><thead><tr><th></th><th>Venetian plaster</th><th>Microcement</th><th>Paint</th></tr></thead><tbody>
      <tr><td>What it is</td><td>Mineral plaster, trowelled in thin coats and burnished by hand</td><td>A cement-based coating, applied in thin layers</td><td>A thin film rolled or sprayed on</td></tr>
      <tr><td>Look</td><td>Depth that changes with the light; from satin to a marble-like shine</td><td>Seamless, even, concrete-like</td><td>Flat and uniform</td></tr>
      <tr><td>Joints</td><td>None: seamless from wall to ceiling</td><td>None</td><td>None</td></tr>
      <tr><td>Repair</td><td>Scuffs buff out and a chip is patched without a trace</td><td>Depends on the system and the sealer</td><td>Touch-up often shows; repainting a whole wall is common</td></tr>
      <tr><td>Upfront cost</td><td>Higher: skilled hand work in several coats</td><td>Varies with the system and the installer</td><td>Lowest</td></tr>
      </tbody></table></div>
      ` },
    { id: 'process', label: 'How we fix the price', h2: 'Site visit, sample, written price', html: `
      <ol>
      <li><strong>Book a free site visit.</strong> Send a photo of the wall on WhatsApp or use the form.</li>
      <li><strong>A master brings real samples</strong> and holds them against your wall in your own light. You choose with your eyes. More in the <a href="/sample-library/">sample library</a>.</li>
      <li><strong>We look at the surface, measure and talk through the details:</strong> finish, colour, ceilings, wet areas.</li>
      <li><strong>You get one fixed price in writing,</strong> with the schedule.</li>
      </ol>
      <p>Browse finished walls first in <a href="/portfolio/">our plaster work</a>.</p>
      <h3>Part of a full renovation?</h3>
      <p>A typical full renovation project with M5 is $200–250K, and plaster is one line of the itemized estimate. Typical kitchen, bathroom and design prices are in our free <a href="/?guide=1">renovation cost guide</a>. See <a href="/condo-renovation/">condo and apartment renovation</a> and <a href="/home-renovation/">full home renovation</a>.</p>` },
  ],
  faq: [
    { q: 'Why is Venetian plaster more expensive than paint?', a: 'Paint is a thin film rolled on in an afternoon. Venetian plaster is mineral plaster applied in thin coats by hand and burnished, which takes skilled labour and drying time between coats. You pay for the craft, and for a wall that does not peel and can be repaired.' },
    { q: 'How much does Venetian plaster cost per square foot in Miami?', a: 'Typically $15–30 per square foot of wall in 2026: mineral plaster $15–20, marmorino $15–25, polished Venetian plaster $20–30, and special finishes from $30. Projects with M5 start at $10,000, and you get a fixed written price for the whole project after a free site visit.' },
    { q: 'Does a bathroom cost more than a living room wall?', a: 'Not automatically. The price follows the area, the surface, the finish and the details. Wet zones get a protective sealer, and a small room with many corners can take as long as a larger plain wall. We confirm the exact price after seeing the space.' },
    { q: 'How long does an accent wall take?', a: 'A feature wall or a powder room usually takes several days, including drying between coats. You get the schedule in writing with the price.' },
  ],
};

export const marmorinoEn = {
  lang: 'en', slug: '/venetian-plaster/marmorino/', track: 'marmorino',
  title: 'Marmorino Plaster in Miami | M5 Studio Miami',
  desc: 'Marmorino in Miami: what it is, how it differs from polished Venetian plaster, and where it works, from powder rooms to fireplaces. Hand-applied by M5.',
  label: 'Venetian plaster · marmorino',
  h1: 'Marmorino plaster in Miami',
  lede: 'Marmorino is a mineral plaster with a fine stone grain and a soft satin glow. Our masters apply it by hand on walls, fireplaces, powder rooms and facades.',
  crumbs: [['Venetian plaster', '/venetian-plaster/'], ['Marmorino', null]],
  ctas: [['Book a free site visit', '/#contact', 'btn-ink'], ['See marmorino work', '/projects/powder-room-black-marmorino.html', 'btn-line']],
  meta: 'From $10,000 · samples brought to your wall',
  ctaH: 'See marmorino on your wall',
  ogImage: ORIGIN + '/media/lp/og.jpg',
  service: { '@id': ORIGIN + '/venetian-plaster/marmorino/#service', name: 'Marmorino application', serviceType: 'Marmorino', isRelatedTo: { '@id': ORIGIN + '/venetian-plaster/#service' } },
  sections: [
    { id: 'what', label: 'What it is', h2: 'What marmorino is', html: `
      <p>Marmorino takes its name from <em>marmo</em>, the Italian word for marble. It is a mineral plaster with a fine stone grain, laid on in thin coats and trowelled smooth, so the surface has a quiet, satin look instead of a high gloss.</p>
      <p>Like Venetian plaster it is seamless, with no grout lines, it is washable and repairable, and it does not peel like paint. Our masters trowel every wall by hand, on site.</p>
      <div class="figs">${fig('/media/lp/marmorino_detail.jpg', 520, 520, 'Close-up of a real Marmorino finish with a fine stone grain', 'The real finish up close', '')}${fig('/media/lp/fac_out.jpg', 1400, 1750, 'Modern house with a fluted Marmorino facade, our masters&#x27; work', 'Marmorino facade · our masters&#x27; work', '')}</div>` },
    { id: 'vs', alt: true, label: 'Compared', h2: 'Marmorino vs polished Venetian plaster', html: `
      <div class="tblw"><table class="cmp"><thead><tr><th></th><th>Marmorino</th><th>Polished Venetian plaster</th></tr></thead><tbody>
      <tr><td>Look</td><td>Fine stone texture, soft satin glow</td><td>Smooth, deep, marble-like shine</td></tr>
      <tr><td>Mood</td><td>Calm and architectural</td><td>Dramatic, reflects the light</td></tr>
      <tr><td>Works well on</td><td>Bedrooms, hallways, powder rooms, whole facades</td><td>Fireplaces, feature walls, statement rooms</td></tr>
      <tr><td>Applied</td><td>By hand, in thin coats</td><td>By hand, in thin coats, burnished</td></tr>
      </tbody></table></div>
      <p>Not sure which you want? We bring both to the site visit so you can hold them against your wall. More on Venetian plaster in <a href="/venetian-plaster/">our main plaster guide</a>.</p>` },
    { id: 'where', label: 'Where it works', h2: 'Powder rooms, fireplaces and feature walls', html: `
      <ul>
      <li><strong>Powder rooms and bathrooms.</strong> Marmorino is common here. Wet zones get a protective sealer. More in <a href="/guides/venetian-plaster-humidity-miami/">Venetian plaster in Miami humidity</a>.</li>
      <li><strong>Fireplaces.</strong> A marmorino fireplace wall is seamless, with no joints or grout lines.</li>
      <li><strong>Feature walls and bedrooms.</strong> A calm surface that changes softly with the light through the day.</li>
      <li><strong>Facades.</strong> Outside, marmorino covers whole facades and takes sun, salt air and rain without peeling like paint.</li>
      </ul>` },
    { id: 'work', alt: true, label: 'Our work', h2: 'Our marmorino work', html: `
      <p>A black marmorino powder room, applied by our master. Real photos, master&#x27;s work.</p>
      <div class="grid"><a class="card" href="/projects/powder-room-black-marmorino.html"><img src="/img/case_powder-room-black-marmorino_2_t.jpg" width="844" height="900" alt="Black Marmorino powder room, master&#x27;s work" loading="lazy" decoding="async"><span class="tag">MASTER&#x27;S WORK</span><div class="cap"><h3>Black Marmorino powder room</h3><span class="go">View project &#8594;</span></div></a></div>
      <div class="rel"><a class="btn btn-line" href="/portfolio/">See all plaster work</a></div>` },
    { id: 'price', label: 'Price and process', h2: 'Price and process', html: `
      <p>Marmorino projects start at $10,000, like our other plaster work. The price depends on the area, the surface and the details, and you get a fixed written price after a free site visit. <a href="/venetian-plaster/cost/">What Venetian plaster costs</a> explains what moves the number.</p>
      <p>Want to see it first? The <a href="/sample-library/">sample library</a> shows full-size panels, and a master brings them to your home.</p>` },
  ],
  faq: [
    { q: 'Is marmorino the same as Venetian plaster?', a: 'They are close relatives, both hand-applied mineral plasters, but not identical. Venetian plaster is polished to a smooth, deep, marble-like shine. Marmorino has a finer stone texture and a softer, satin look. We bring both to your site visit.' },
    { q: 'Can marmorino go in a bathroom?', a: 'Yes. Marmorino and Venetian plaster are common in bathrooms and powder rooms. Wet zones get a protective sealer.' },
    { q: 'How is marmorino finished and maintained?', a: 'Our masters trowel it in thin coats by hand and finish it to the sheen you choose. It is washable and repairable: scuffs buff out, and a chip is patched without a trace.' },
  ],
};
