// Service pages (page plan 3.2, 3.3, 3.5, 3.6). English source; Spanish versions of the two renovation pages are in content-es.mjs.
import { ORIGIN, workCards, cardsHtml } from './pages-lib.mjs';

const W = workCards();
const pick = (...hrefs) => hrefs.map((h) => {
  const c = W['/projects/' + h + '.html'];
  if (!c) throw new Error('case card not found on /work/: ' + h);
  return c;
});
export const APARTMENTS = ['penthouse-raised-ceilings-renovation', 'apartment-oak-stone-open-plan', 'apartment-one-bedroom-black-stone', 'apartment-light-oak-three-bedroom', 'apartment-classic-moulding-two-bedroom'];
export const VILLAS = ['villa-white-courtyard-spiral-stair', 'villa-grey-marble-walnut', 'villa-double-height-rooftop-pool'];
export const apartmentCards = (lang) => cardsHtml(pick(...APARTMENTS), lang);
export const villaCards = (lang) => cardsHtml(pick(...VILLAS), lang);

const fig = (src, w, h, alt, cap) => `<figure><img src="${src}" width="${w}" height="${h}" alt="${alt}" loading="lazy" decoding="async"><figcaption>${cap}</figcaption></figure>`;

export const condoEn = {
  lang: 'en', slug: '/condo-renovation/', track: 'condo',
  title: 'Condo & Apartment Renovation in Miami | M5 Studio Miami',
  desc: 'Full condo and apartment renovation in Miami, kitchens and bathrooms included. M5 designs and coordinates every step, board paperwork too. Free site visit.',
  label: 'Condo & apartment renovation',
  h1: 'Condo and apartment renovation in Miami, from design to handover',
  lede: 'One team designs your condo, coordinates the building and the work, and answers for the result. Kitchens and bathrooms are part of the plan, and construction is by licensed &amp; insured Florida contractor partners.',
  crumbs: [['Condo &amp; apartment renovation', null]],
  ctas: [['Book a free site visit', '/#contact', 'btn-ink'], ['See apartment projects', '#interiors', 'btn-line']],
  meta: 'Typical full renovation project: $200–250K · free site visit',
  ctaH: 'Planning a condo renovation in Miami?',
  service: { '@id': ORIGIN + '/condo-renovation/#service', name: 'Condo and apartment renovation', serviceType: 'Condo renovation' },
  sections: [
    { id: 'includes', label: 'What is included', h2: 'What a full condo renovation with M5 includes', html: `
      <p>One team, one plan, one budget, from the first sketch to handover. M5 designs and coordinates. Construction is built with licensed &amp; insured Florida contractor partners under their own permit and contract.</p>
      <ul>
      <li><strong>Design.</strong> Concept, layouts and space planning, photoreal 3D visualization, materials and documentation. See <a href="/interior-design/">interior design with M5</a>.</li>
      <li><strong>Coordination.</strong> One schedule and one itemized budget, with weekly photo updates through handover.</li>
      <li><strong>Construction.</strong> From demolition to d&eacute;cor, by our licensed &amp; insured Florida contractor partners.</li>
      <li><strong>Quality checks.</strong> On-site checks at every stage and a punch-list at handover.</li>
      <li><strong>Walls.</strong> <a href="/venetian-plaster/">Venetian plaster</a> by our own masters, wherever you want a finish with depth.</li>
      </ul>` },
    { id: 'kitchens', alt: true, label: 'Kitchens', h2: 'Kitchens in a condo', html: `
      <p>A condo kitchen is shaped by the building before it is shaped by the design: where plumbing and ventilation can run, which walls are shared, and what the association allows. We check what can move first, then design around it.</p>
      <ul>
      <li><strong>Layout.</strong> Including opening a closed kitchen to the living room where the building allows it.</li>
      <li><strong>Joinery and stone.</strong> Cabinetry, counters and islands, from light oak to black stone.</li>
      <li><strong>Lighting and appliances.</strong> Planned together with ventilation, so nothing is added as an afterthought.</li>
      </ul>
      <p>Browse kitchens in the <a href="#interiors">apartment projects below</a>. Typical kitchen and bathroom prices are in our <a href="/guides/renovation-cost-miami/">Miami renovation cost guide</a>.</p>` },
    { id: 'bathrooms', label: 'Bathrooms', h2: 'Bathrooms and powder rooms', html: `
      <p>Primary baths, guest baths, powder rooms and showers: layout, stone or tile, fixtures and lighting, planned as one design. Venetian plaster and marmorino are common in bathrooms and powder rooms, and wet zones get a protective sealer. Read more about <a href="/venetian-plaster/marmorino/">marmorino plaster</a>.</p>` },
    { id: 'building', alt: true, label: 'Building rules', h2: 'Building rules, board approval and work hours', html: `
      <p>Every building has its own rules. Typically that means association approval for the plans, restricted work hours, elevator reservations and an insurance certificate (COI) for the building. Always check your own building&#x27;s rules. Ours is to take the paperwork off your hands.</p>
      <div class="facts"><div><b>M5 prepares</b><span>The board paperwork, the COI for your building, elevator bookings and the plan for noise-hour rules.</span></div><div><b>Contractor partners pull permits</b><span>Permits are pulled by our licensed &amp; insured Florida contractor partners, who carry the insurance.</span></div><div><b>You decide</b><span>You approve the design and the itemized estimate, and sign changes before they are made.</span></div></div>
      <p>The full checklist is in our guide to <a href="/guides/miami-condo-renovation/">condo renovation rules in Miami</a>.</p>` },
    { id: 'budget', label: 'Timeline and budget', h2: 'Timeline and budget', html: `
      <p>A typical full renovation project with M5 is $200–250K. We price every project after visiting the space, so there is no guessing over the phone: you get an itemized estimate 48 hours after the visit, and it changes only through a change order you approve first.</p>
      <ol>
      <li><strong>Consultation and needs</strong> (about a week). We meet at your space and agree what success looks like.</li>
      <li><strong>Concept</strong> (about 1–2 weeks). Several directions for style and layout.</li>
      <li><strong>Design and 3D</strong> (about 2–3 weeks). Layouts, 3D, materials and the itemized budget.</li>
      <li><strong>Construction</strong> (per the estimate). Weekly photo updates and milestone payments, never a large upfront payment.</li>
      <li><strong>Handover.</strong> Final cleaning, a walkthrough and a 1-year written warranty.</li>
      </ol>` },
    { id: 'interiors', alt: true, label: 'Interiors by M5', h2: 'Interiors by M5', html: `
      <p>Real, completed apartment and penthouse projects by the M5 team, photographed after handover.</p>
      ${apartmentCards('en')}` },
    { id: 'where', label: 'Where we work', h2: 'Where we work', html: `
      <p>We work across South Florida: Miami-Dade first, plus Broward and Palm Beach. See <a href="/south-florida/">areas we serve</a>. Looking at a house instead? Read about <a href="/home-renovation/">full home renovation</a>.</p>` },
  ],
  faq: [
    { q: 'Do I need the association\'s approval to renovate my condo in Miami?', a: 'In most buildings, yes, for anything beyond cosmetic work. Every association has its own rules, so check your building\'s declaration and rules first. We prepare the paperwork and coordinate the building process; the exact requirements come from your association.' },
    { q: 'What can and cannot be changed in a condo renovation?', a: 'Inside your unit, finishes, kitchens, bathrooms and non-structural layouts can usually be redesigned. Structure, shared plumbing stacks and exterior elements are usually off limits or need special approval. Your association\'s rules and the building decide, so we check both before we design.' },
    { q: 'How long does a full condo renovation take?', a: 'It depends on the size, the scope and the building\'s approval process. The design stage takes roughly 4–6 weeks, from the first consultation to the design, 3D and itemized budget. The construction time follows the estimate, with weekly photo updates. You get the timeline upfront.' },
    { q: 'Who pulls the permits and deals with the building management?', a: 'We coordinate it. Permits are pulled by our licensed & insured Florida contractor partners; COI for your building, elevator bookings and noise-hour rules are part of our process, not your problem.' },
    { q: 'Can a closed condo kitchen be opened to the living room?', a: 'Sometimes. It depends on what the wall is: a simple partition can often be opened, while a structural or shared wall usually cannot. We check the building drawings and your association\'s rules before we design the new layout.' },
  ],
};

export const homeEn = {
  lang: 'en', slug: '/home-renovation/', track: 'home',
  title: 'Full Home Renovation in Miami | M5 Studio Miami',
  desc: 'Full house and villa renovation in Miami. M5 designs and coordinates; construction by licensed & insured Florida contractor partners. Free site visit.',
  label: 'Full home renovation',
  h1: 'Full home renovation in Miami, one team from design to handover',
  lede: 'Houses and villas, renovated as one project: design, coordination and on-site quality checks by one team, with construction by licensed &amp; insured Florida contractor partners.',
  crumbs: [['Full home renovation', null]],
  ctas: [['Book a free site visit', '/#contact', 'btn-ink'], ['See villa projects', '#interiors', 'btn-line']],
  meta: 'Typical full renovation project: $200–250K · free site visit',
  ctaH: 'Planning a home renovation in Miami?',
  service: { '@id': ORIGIN + '/home-renovation/#service', name: 'Full home renovation', serviceType: 'Home renovation' },
  sections: [
    { id: 'team', label: 'One team', h2: 'One accountable team for the whole house', html: `
      <p>A house has many trades and many decisions. We keep them in one plan so you deal with one team: interior design, renovation coordination, on-site quality checks and <a href="/venetian-plaster/">Venetian plaster</a> by our own masters. Construction is built with licensed &amp; insured Florida contractor partners, under their own permit and contract.</p>
      <ul>
      <li><strong>Design first.</strong> Layouts, 3D, materials and an itemized budget before any work starts. See <a href="/interior-design/">interior design with M5</a>.</li>
      <li><strong>One schedule.</strong> Weekly photo updates through handover.</li>
      <li><strong>Inspections and punch-list.</strong> Quality checks at every stage, and a final walkthrough.</li>
      </ul>` },
    { id: 'kitchens', alt: true, label: 'Kitchens', h2: 'Kitchens in a house', html: `
      <p>A house kitchen usually connects to the dining room, the garden or the pool terrace, so we plan it together with them. There is more freedom than in a condo, but walls, openings and the roof still affect structure and permits, so we check the house before we draw.</p>
      <ul>
      <li><strong>Layout and flow.</strong> Islands, pantries and indoor-outdoor connections.</li>
      <li><strong>Joinery, stone and lighting.</strong> Designed as one composition with the living spaces.</li>
      </ul>
      <p>Typical kitchen and bathroom prices are in our <a href="/guides/renovation-cost-miami/">Miami renovation cost guide</a>.</p>` },
    { id: 'bathrooms', label: 'Bathrooms', h2: 'Bathrooms and powder rooms', html: `
      <p>Primary suites, guest baths and powder rooms, designed with the bedrooms they serve. Natural stone, tile and <a href="/venetian-plaster/marmorino/">marmorino plaster</a> work well here: wet zones get a protective sealer.</p>` },
    { id: 'florida', alt: true, label: 'South Florida houses', h2: 'Houses in South Florida: what the climate asks of a renovation', html: `
      <ul>
      <li><strong>Humidity and salt air.</strong> Humidity, salt air and hurricane code decide which finishes survive. Mineral plaster is breathable, washable and repairable, and natural stone handles humidity well.</li>
      <li><strong>Hurricane-rated openings.</strong> In Miami-Dade, every opening needs approved impact protection, so windows and doors are a code decision and a design decision at once.</li>
      <li><strong>Older houses.</strong> Wiring, plumbing and moisture can hide behind walls. We look at the condition during the site visit, and anything that changes the plan goes through a change order you approve first.</li>
      </ul>` },
    { id: 'stages', label: 'Stages and timeline', h2: 'Stages and timeline', html: `
      <ol>
      <li><strong>Consultation and needs</strong> (about a week). We meet at the house and agree the goals and the budget frame.</li>
      <li><strong>Concept</strong> (about 1–2 weeks). Several directions for style and layout.</li>
      <li><strong>Design and 3D</strong> (about 2–3 weeks). Layouts, 3D, materials and the itemized budget.</li>
      <li><strong>Construction</strong> (per the estimate), with weekly photo updates.</li>
      <li><strong>Handover</strong> with a final walkthrough and a 1-year written warranty.</li>
      </ol>` },
    { id: 'budget', alt: true, label: 'Your budget', h2: 'How the budget is protected', html: `
      <p>A typical full renovation project with M5 is $200–250K. The price is set after a site visit, and these rules protect it:</p>
      <ul>
      <li>An itemized estimate before the contract, 48 hours after our visit.</li>
      <li>Payments by milestone, with no large upfront payment.</li>
      <li>Change orders signed by you first.</li>
      <li>Lien releases from every subcontractor.</li>
      <li>Contract and partner insurance certificates on request.</li>
      <li>A 1-year written warranty on every project.</li>
      </ul>` },
    { id: 'interiors', label: 'Interiors by M5', h2: 'Interiors by M5', html: `
      <p>Real, completed villa projects by the M5 team, photographed after handover.</p>
      ${villaCards('en')}` },
    { id: 'where', alt: true, label: 'Where we work', h2: 'Where we work', html: `
      <p>We design and coordinate house renovations across Miami-Dade, Broward and Palm Beach, including areas such as Coral Gables, Pinecrest, Coconut Grove, Fort Lauderdale and Boca Raton. See <a href="/south-florida/">areas we serve</a>. Living in a condo? Read about <a href="/condo-renovation/">condo and apartment renovation</a>.</p>` },
  ],
  faq: [
    { q: 'How long does a full home renovation take in Miami?', a: 'It depends on the size of the house, the scope and the permits. The design stage takes roughly 4–6 weeks, from the first consultation to the design, 3D and itemized budget. The construction time follows the estimate, with weekly photo updates. You get the timeline upfront.' },
    { q: 'Do you handle permits for a house renovation?', a: 'We coordinate them. Permits are pulled by our licensed & insured Florida contractor partners, who work under their own permit and contract. Impact-rated openings and other local requirements are planned into the design from the start.' },
    { q: 'Can we live in the house during the renovation?', a: 'It depends on the scope. For a whole-house renovation most owners move out for the main works, while a smaller scope can sometimes be phased room by room. We tell you honestly after the site visit.' },
    { q: 'How much does a full home renovation cost in Miami?', a: 'A typical full renovation project with M5 is $200–250K. We price every project after visiting the house, so there is no guessing over the phone. You get an itemized estimate 48 hours after the visit, and it changes only through a change order you approve first.' },
    { q: 'Do you renovate kitchens and bathrooms as part of a larger project?', a: 'Yes. Kitchens and bathrooms are part of the full renovation, planned together with the rest of the house. See the kitchens and bathrooms sections on this page.' },
  ],
};

export const interiorEn = {
  lang: 'en', slug: '/interior-design/', track: 'interior',
  title: 'Luxury Interior Design in Miami | M5 Studio Miami',
  desc: 'Interior design for Miami condos, apartments and houses: concept, layouts, 3D and materials, coordinated through handover by one team. Free site visit.',
  label: 'Interior design',
  h1: 'Luxury interior design for Miami homes and condos',
  lede: 'M5 is an interior design studio. We draw the rooms, show them in 3D, choose the materials and coordinate the work, so the home you approved is the home you get.',
  crumbs: [['Interior design', null]],
  ctas: [['Book a free site visit', '/#contact', 'btn-ink'], ['See our work', '#interiors', 'btn-line']],
  meta: 'Design only, or design with renovation',
  ctaH: 'Start with a free site visit',
  service: { '@id': ORIGIN + '/interior-design/#service', name: 'Interior design', serviceType: 'Interior design' },
  sections: [
    { id: 'includes', label: 'What is included', h2: 'What the design service includes', html: `
      <ul>
      <li><strong>Concept.</strong> Several directions to choose the style, the layout logic and the budget frame.</li>
      <li><strong>Layouts and space planning.</strong> Rooms you can build, with drawings a contractor can price.</li>
      <li><strong>3D visualization.</strong> Photoreal views, so you see the result before anything is built.</li>
      <li><strong>Materials and lighting.</strong> Specifications for finishes, stone, joinery and lighting, including <a href="/venetian-plaster/">Venetian plaster</a> walls.</li>
      <li><strong>Furniture and documentation.</strong> Furniture selection (FF&amp;E) and the documents the project needs.</li>
      </ul>` },
    { id: 'options', alt: true, label: 'Two ways to work', h2: 'Design only, or design with renovation', html: `
      <div class="facts"><div><b>Design only</b><span>Take the design as a stand-alone service, for a full home or a single room, and carry it out with your own team.</span></div><div><b>Design with renovation</b><span>We coordinate the work too: one plan, one budget, one schedule, with construction by licensed &amp; insured Florida contractor partners.</span></div><div><b>Plaster on top</b><span>Walls in Venetian plaster, marmorino or mineral plaster, applied by our own masters.</span></div></div>
      <p>For full projects, see <a href="/condo-renovation/">condo and apartment renovation</a> and <a href="/home-renovation/">full home renovation</a>.</p>` },
    { id: 'process', label: 'How a project runs', h2: 'How a design project runs', html: `
      <ol>
      <li><strong>Consultation and needs</strong> (about a week). We meet at your space, discuss goals and budget.</li>
      <li><strong>Concept</strong> (about 1–2 weeks). Several directions to choose from.</li>
      <li><strong>Design and 3D</strong> (about 2–3 weeks). Layouts, photoreal 3D, materials and an itemized budget, so you sign knowing exactly what you get.</li>
      </ol>
      <p>From there you either take the design with you, or we coordinate the work to handover.</p>` },
    { id: 'interiors', alt: true, label: 'Interiors by M5', h2: 'Interiors by M5', html: `
      <p>Real, completed villas and apartments designed by the M5 team, photographed after handover.</p>
      ${cardsHtml(pick('villa-white-courtyard-spiral-stair', 'villa-grey-marble-walnut', 'apartment-oak-stone-open-plan'), 'en')}
      <div class="rel"><a class="btn btn-line" href="/work/">See all our work</a></div>` },
    { id: 'record', label: 'Track record', h2: 'The team\'s track record', html: `
      <p>200+ villas and homes delivered worldwide. Now in Miami, the same team and the same system, with our own Venetian plaster studio.</p>
      <p>Looking for ideas first? Read the <a href="/miami-home-design-report-2026/">Miami home design report 2026</a>.</p>` },
  ],
  faq: [
    { q: 'How much does an interior designer cost in Miami?', a: 'Fees depend on the size of the home and the scope: design only, or design with renovation coordination. We price every project after visiting the space, with no guessing over the phone, and you get an itemized estimate 48 hours after the visit.' },
    { q: 'Can I hire M5 for design only?', a: 'Yes. Design can be a stand-alone service, for a full home or a single room. If you later want us to coordinate the work as well, we can.' },
    { q: 'Do you work with owners who live abroad part of the year?', a: 'Yes. You get weekly photo updates through handover and can reach us on WhatsApp, so you can follow the project from anywhere. Our team speaks English, Spanish, Ukrainian and Russian.' },
    { q: 'How long does the design stage take?', a: 'Roughly 4–6 weeks from the first consultation to the design, 3D and itemized budget: about a week for the consultation, 1–2 weeks for the concept and 2–3 weeks for design and 3D.' },
  ],
};

export const southFloridaEn = {
  lang: 'en', slug: '/south-florida/', track: 'south-florida',
  title: 'South Florida Renovation & Interior Design | M5 Studio Miami',
  desc: 'M5 Studio Miami works across South Florida: Miami-Dade first, plus Broward and Palm Beach. Condo and home renovation, Venetian plaster and interior design.',
  label: 'Areas we serve',
  h1: 'Interior design and renovation across South Florida',
  lede: 'We work in Miami-Dade first, and in Broward and Palm Beach counties too. The services are the same everywhere: renovation, Venetian plaster and interior design.',
  crumbs: [['Areas we serve', null]],
  ctas: [['Book a free site visit', '/#contact', 'btn-ink'], ['WhatsApp us', 'https://wa.me/17864074441', 'btn-line']],
  meta: 'Miami-Dade · Broward · Palm Beach',
  ctaH: 'Tell us where your home is',
  about: { '@id': ORIGIN + '/#business' },
  sections: [
    { id: 'miami-dade', label: '01', h2: 'Miami-Dade County', html: `
      <p>We work in Miami, Miami Beach, Coral Gables, Brickell, Sunny Isles Beach, Aventura, Pinecrest, Coconut Grove, Key Biscayne and nearby.</p>
      <p>What changes between a condo tower and a single-family house is mostly the process. In a tower, the building&#x27;s rules shape the project: association approval, work hours, elevator bookings and a certificate of insurance. In a house, the structure, the roof and the openings come first. In Miami-Dade every opening needs approved impact protection. We plan for both. Read more about <a href="/condo-renovation/">condo and apartment renovation</a> and <a href="/home-renovation/">full home renovation</a>.</p>` },
    { id: 'broward', alt: true, label: '02', h2: 'Broward County', html: `
      <p>In Broward we work in Fort Lauderdale, Hollywood, Hallandale Beach and nearby areas.</p>
      <p>The same team comes to you: site visits are by appointment, and samples come to your home. Broward is part of Florida&#x27;s High-Velocity Hurricane Zone together with Miami-Dade, which shapes window and door choices. Each county, and many cities, run their own building department, so permit paths differ; our contractor partners pull the permits.</p>` },
    { id: 'palm-beach', label: '03', h2: 'Palm Beach County', html: `
      <p>In Palm Beach County we work in Boca Raton, Delray Beach, Palm Beach and nearby areas.</p>
      <p>Palm Beach County is the farthest area we serve from Miami, so we agree the visit time with you in advance, and it helps if you send photos and plans on WhatsApp before we arrive. The project then runs the same way as everywhere else, with weekly photo updates through handover.</p>` },
    { id: 'how', alt: true, label: 'How we work', h2: 'How we work outside Miami-Dade', html: `
      <ul>
      <li><strong>Site visits by appointment.</strong> A free site visit, then an itemized estimate 48 hours later.</li>
      <li><strong>Weekly photo updates</strong> through handover, wherever the project is.</li>
      <li><strong>The same model.</strong> M5 designs and coordinates; construction is built with licensed &amp; insured Florida contractor partners under their own permit and contract.</li>
      </ul>` },
    { id: 'services', label: 'Services', h2: 'Services available in every area', html: `
      <ul>
      <li><a href="/condo-renovation/">Condo and apartment renovation</a></li>
      <li><a href="/home-renovation/">Full home renovation</a></li>
      <li><a href="/venetian-plaster/">Venetian plaster</a>, marmorino and mineral plaster, applied by our own masters</li>
      <li><a href="/interior-design/">Interior design</a></li>
      </ul>
      <div class="figs">${fig('/media/lp/w_venetian.jpg', 900, 1125, 'Floor-to-ceiling polished Venetian plaster wall by a glass door', 'Venetian plaster · our masters&#x27; work')}${fig('/media/lp/w_door.jpg', 900, 1125, 'Flush hidden door in a smoky grey mineral plaster wall', 'Mineral plaster · our masters&#x27; work')}</div>
      <p>Want to see finishes first? The <a href="/sample-library/">sample library</a> shows full-size panels, and a master brings them to your home.</p>` },
  ],
  faq: [
    { q: 'Do you take projects outside Miami-Dade?', a: 'Yes. We work in Miami-Dade first, and in Broward and Palm Beach counties too.' },
    { q: 'Is there an extra cost for projects in Broward or Palm Beach?', a: 'Everything is stated in your itemized estimate, which you get 48 hours after the site visit, so there are no surprises later. Tell us the address when you book and we will confirm it.' },
    { q: 'Can I see samples before I decide?', a: 'Yes. Samples come to you: a master brings full-size panels to your home by appointment. See the sample library for the finishes.' },
  ],
};
