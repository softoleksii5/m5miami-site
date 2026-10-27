// Guides and the report page (page plan 3.12–3.14). English only.
// The cost guide carries typical Miami 2026 ranges (market sources + M5 OS estimate rates), approved by the owner 26.10.2026.
import { ORIGIN } from './pages-lib.mjs';

export const guideCondoEn = {
  lang: 'en', slug: '/guides/miami-condo-renovation/', track: 'guide-condo',
  title: 'Miami Condo Renovation Rules & Approvals | M5 Studio Miami',
  desc: 'Renovating a Miami condo: association approval, work hours, elevator booking, insurance certificates, permits and how long each step takes.',
  label: 'Guide · condo renovation',
  h1: 'Renovating a condo in Miami: approvals, rules and timeline',
  lede: 'What usually stands between you and the first day of work in a condo: the association, the building management and the building department. Every building is different, so treat this as a map and check your own building&#x27;s rules. Planning a full project? See <a href="/condo-renovation/">condo and apartment renovation</a>.',
  crumbs: [['Condo renovation rules', null]],
  ctas: [['Book a free site visit', '/#contact', 'btn-ink'], ['Condo renovation with M5', '/condo-renovation/', 'btn-line']],
  meta: 'Last reviewed: October 2026',
  ctaH: 'Planning a condo renovation in Miami?',
  article: { date: '2026-10-26' },
  sections: [
    { id: 'who', label: '01', h2: 'Who needs to approve what', html: `
      <ul>
      <li><strong>The condo association (the board).</strong> For work beyond cosmetic changes, the board typically has to approve the plans before work starts. What counts as cosmetic is set by your building&#x27;s declaration and rules.</li>
      <li><strong>The building management.</strong> Management usually runs the practical side: the application form, work schedules, elevator reservations, deposits and access.</li>
      <li><strong>The building department.</strong> Work that touches plumbing, electrical, walls, windows or air conditioning generally needs a permit from the county or city.</li>
      </ul>
      <p>Requirements differ from one building to the next. Before you plan, ask management for the renovation rules and the application form.</p>` },
    { id: 'rules', alt: true, label: '02', h2: 'Typical building rules', html: `
      <p>These are the rules owners meet most often. Treat them as typical, and check your building&#x27;s own rules for the details.</p>
      <ul>
      <li><strong>Work hours.</strong> Noisy work is usually limited to set hours on set days, and many buildings restrict weekends and holidays.</li>
      <li><strong>Elevator.</strong> The service elevator is normally reserved in advance, and common areas are protected during deliveries and debris removal.</li>
      <li><strong>Deposits.</strong> Many buildings ask for a deposit against damage to common areas. Amounts and refund terms vary.</li>
      <li><strong>Insurance certificates.</strong> Buildings typically ask for a certificate of insurance (COI) from the contractor, naming the association and the management company.</li>
      <li><strong>Floors and noise.</strong> Many buildings set sound-insulation rules for hard flooring.</li>
      <li><strong>Contractor requirements.</strong> Some buildings require a contractor with a Florida license and insurance, or keep a list of approved ones.</li>
      </ul>` },
    { id: 'permits', label: '03', h2: 'Permits: when they apply and who pulls them', html: `
      <p>Purely cosmetic work, such as paint and surface finishes, generally does not need a permit. Moving plumbing, changing electrical circuits, opening or moving walls, replacing windows or changing air conditioning generally does, and the contractor, who holds the Florida license, pulls the permit. Ask the local building department if you are unsure.</p>
      <p>In an M5 project the permits are pulled by our licensed &amp; insured Florida contractor partners, who work under their own permit and contract. We coordinate the process, including the COI for your building, elevator bookings and noise-hour rules.</p>` },
    { id: 'timeline', alt: true, label: '04', h2: 'A realistic timeline', html: `
      <ol>
      <li><strong>Collect the building&#x27;s rules and application form</strong> from management before you design anything.</li>
      <li><strong>Design and budget.</strong> At M5 this takes roughly 4–6 weeks, from the first consultation to the design, 3D and itemized budget.</li>
      <li><strong>Association approval.</strong> This varies from one association to another, and some boards review applications only at scheduled meetings. Submit early.</li>
      <li><strong>Permits,</strong> where the work needs them. The time depends on the building department.</li>
      <li><strong>Construction,</strong> per the estimate, within the building&#x27;s work hours.</li>
      <li><strong>Handover.</strong> Final cleaning, a walkthrough and closing out the deposit with the building.</li>
      </ol>` },
    { id: 'checklist', label: '05', h2: 'Checklist before you sign', html: `
      <ul>
      <li>You have your building&#x27;s renovation rules and application form.</li>
      <li>You know which insurance certificate the building requires, and who provides it.</li>
      <li>You know who pulls the permits, and under whose license.</li>
      <li>The budget is itemized, in writing, and changes only through a change order you sign first.</li>
      <li>The schedule fits the building&#x27;s work hours and elevator windows.</li>
      <li>You can see the contractor&#x27;s license and insurance certificates.</li>
      </ul>
      <p>Ready to plan? Read about <a href="/condo-renovation/">condo and apartment renovation with M5</a>, or book a free site visit.</p>` },
  ],
  faq: [
    { q: 'Do I need my association\'s approval for a kitchen remodel?', a: 'In most buildings, yes, if the work goes beyond cosmetic changes. Kitchens often involve plumbing, electrical and ventilation, so check your building\'s rules and submit the plans before you start.' },
    { q: 'Do I need a permit to renovate a condo bathroom?', a: 'Generally yes when the work moves plumbing, changes electrical circuits or alters walls, and the contractor, who holds the Florida license, pulls the permit. A purely cosmetic refresh generally does not need one. Check with your building department and your association.' },
    { q: 'How long does board approval usually take?', a: 'It varies from one association to another, and some boards review applications only at scheduled meetings. Ask management for their schedule and submit your application early.' },
  ],
};

export const guideCostEn = {
  lang: 'en', slug: '/guides/renovation-cost-miami/', track: 'guide-cost', noindex: true,
  title: 'What a Renovation Costs in Miami | M5 Studio Miami',
  desc: 'Miami renovation prices for 2026: kitchens $15–200K, bathrooms $8–70K, interior design $8–25 per sq ft, full projects $200–250K. What moves the number.',
  label: 'Guide · renovation cost',
  h1: 'What a condo, kitchen, bathroom or full renovation costs in Miami',
  lede: 'Typical Miami prices for 2026, by kitchen, bathroom, design and full project, and what moves the number. A typical full renovation project with M5 is $200–250K.',
  crumbs: [['Renovation cost', null]],
  ctas: [['Book a free site visit', '/#contact', 'btn-ink'], ['Ask for the full cost guide', 'https://wa.me/17864074441?text=Hi%20M5%2C%20please%20send%20me%20the%202026%20renovation%20cost%20guide', 'btn-line']],
  meta: 'Typical full renovation project: $200–250K',
  ctaH: 'Get an itemized estimate',
  article: { date: '2026-10-26' },
  sections: [
    { id: 'read', label: 'How to read this', h2: 'How to read these numbers', html: `
      <p>The ranges below are typical for Miami in 2026, based on market data and our own estimates. They help you plan. Your project gets an itemized, fixed estimate 48 hours after a free site visit, because the building, the layout, the finish level and what is behind the walls all move the number.</p>` },
    { id: 'full', alt: true, label: 'Full renovation', h2: 'Full condo and full house renovation', html: `
      <p>A typical full renovation project with M5 is $200–250K. What moves a project within and beyond that figure:</p>
      <ul>
      <li><strong>Size and scope.</strong> How many rooms, and how much changes: finishes only, or layouts, kitchens and bathrooms too.</li>
      <li><strong>The building.</strong> In a condo, building rules, approvals and work hours shape the schedule. In a house, structure, roof and openings matter more. See <a href="/condo-renovation/">condo and apartment renovation</a> and <a href="/home-renovation/">full home renovation</a>.</li>
      <li><strong>Finish level.</strong> Stone, joinery, plaster and fixtures vary widely in price.</li>
      <li><strong>Condition.</strong> Wiring, plumbing and moisture behind the walls can change the plan once opened.</li>
      </ul>` },
    { id: 'kitchens', label: 'Kitchens', h2: 'Kitchens', html: `
      <div class="tblw"><table class="cmp"><thead><tr><th>Kitchen</th><th>Typical price, Miami 2026</th></tr></thead><tbody>
      <tr><td>Refresh: new fronts, counters, backsplash, lighting</td><td>$15–25K</td></tr>
      <tr><td>Full kitchen remodel: cabinetry, stone, appliances</td><td>$40–80K</td></tr>
      <tr><td>High-end custom kitchen with island and joinery</td><td>$100–200K</td></tr>
      </tbody></table></div>
      <p>The cost of a kitchen follows how much of it moves. A new layout with relocated plumbing and ventilation costs more than the same footprint with new cabinets. Other drivers are the cabinetry and joinery, stone counters and islands, appliances and lighting. Read about <a href="/condo-renovation/#kitchens">condo kitchens</a> and <a href="/home-renovation/#kitchens">house kitchens</a>.</p>` },
    { id: 'bathrooms', alt: true, label: 'Bathrooms', h2: 'Bathrooms', html: `
      <div class="tblw"><table class="cmp"><thead><tr><th>Bathroom</th><th>Typical price, Miami 2026</th></tr></thead><tbody>
      <tr><td>Powder room or bathroom refresh</td><td>$8–14K</td></tr>
      <tr><td>Full bathroom remodel</td><td>$18–35K</td></tr>
      <tr><td>Luxury primary bathroom</td><td>$38–70K</td></tr>
      </tbody></table></div>
      <p>Bathrooms are small rooms with a lot of detail: layout, waterproofing, stone or tile, fixtures and lighting. Plaster is an option too, since Venetian plaster and marmorino work in wet areas with a protective sealer. See <a href="/condo-renovation/#bathrooms">condo bathrooms</a> and <a href="/home-renovation/#bathrooms">house bathrooms</a>.</p>` },
    { id: 'design', label: 'Design fees', h2: 'Design fees', html: `
      <div class="tblw"><table class="cmp"><thead><tr><th>Interior design</th><th>Typical fee, Miami 2026</th></tr></thead><tbody>
      <tr><td>Full interior design: layouts, finishes, lighting, drawings</td><td>$8–12 per sq ft</td></tr>
      <tr><td>High-end design with custom joinery and furnishing</td><td>$15–25 per sq ft</td></tr>
      </tbody></table></div>
      <p>Design can be bought on its own or as part of a full renovation. The fee depends on the size of the home and the scope, and we state it in writing after the site visit. See <a href="/interior-design/">interior design with M5</a>.</p>` },
    { id: 'protect', alt: true, label: 'Your budget', h2: 'How M5 protects the budget', html: `
      <ul>
      <li>An itemized estimate before the contract, 48 hours after our visit.</li>
      <li>Payments by milestone, with no large upfront payment.</li>
      <li>Change orders signed by you first.</li>
      <li>Lien releases from every subcontractor.</li>
      <li>Contract and partner insurance certificates on request.</li>
      <li>A 1-year written warranty on every project.</li>
      </ul>` },
  ],
  faq: [
    { q: 'How much does it cost to renovate a condo in Miami?', a: 'A typical full renovation project with M5 is $200–250K. The exact price depends on the size, the scope, the finish level and the building. We price every project after visiting the space.' },
    { q: 'What does a kitchen remodel cost in Miami?', a: 'Typically $15–25K for a refresh, $40–80K for a full remodel and $100–200K for a high-end custom kitchen in 2026. It depends on how much of the kitchen moves, on the cabinetry and stone, and on the appliances. We give an itemized price after seeing the space.' },
    { q: 'What does a bathroom remodel cost in Miami?', a: 'Typically $8–14K for a powder room or refresh, $18–35K for a full bathroom and $38–70K for a luxury primary bathroom in 2026. It depends on the layout, the waterproofing, the stone or tile and the fixtures. We give an itemized price after seeing the space.' },
    { q: 'Why do renovation quotes differ so much?', a: 'Often the scope is not the same: one quote leaves out work another includes, or uses allowances instead of real prices. An itemized budget that changes only through a change order you sign first makes quotes comparable.' },
  ],
};

export const reportEn = {
  lang: 'en', slug: '/miami-home-design-report-2026/', track: 'report',
  title: 'Miami Home Design Report 2026 | M5 Studio Miami',
  desc: 'Ten design trends and ten costly renovation mistakes for Miami homes in 2026, with a short take on each. Download the full report free.',
  label: 'Report · edition 2026',
  h1: 'Miami home design report 2026',
  lede: 'For ten years the default luxury home was white walls, grey floors and a glossy kitchen. It photographed well and lived badly. This is a short field guide to what is replacing it in South Florida, and to the mistakes that are expensive to fix.',
  crumbs: [['Home design report 2026', null]],
  ctas: [['Download the full report', '/report/', 'btn-ink'], ['Book a free site visit', '/#contact', 'btn-line']],
  meta: 'Free · 10 trends · 10 mistakes',
  ctaH: 'Want these ideas in your home?',
  article: { date: '2026-10-26' },
  sections: [
    { id: 'trends', label: 'Ten trends', h2: 'Ten trends worth your money', html: `
      <h3>1. Warm earth palettes</h3>
      <p>Clay, sand, terracotta, olive and warm off-white are replacing cool white and icy grey. Miami light is hard and blue, and cool palettes go sterile by noon. Pick three tones, not eight, and test samples on the actual wall in the morning, at noon and in the evening.</p>
      <h3>2. Textured walls</h3>
      <p>Venetian plaster, stone and handmade tile give walls depth, not just colour. Flat painted drywall shows every flaw in strong sun. Use one textured hero wall per room, or a whole room in plaster, never a single accent patch. See <a href="/venetian-plaster/">Venetian plaster</a>.</p>
      <h3>3. Medium and warm wood</h3>
      <p>Walnut, smoked oak and teak tones are replacing pale Scandinavian oak, which yellows unevenly in strong UV. Match the wood across cabinetry, doors and flooring, or contrast two species on purpose.</p>
      <h3>4. Natural stone, used as architecture</h3>
      <p>Large slabs with sweeping veining on fireplaces, backsplashes, stair treads and bath walls, not only on counters. Stone handles humidity well and reads as permanent. Book-match the slabs, and look at the actual slab instead of a sample.</p>
      <h3>5. Curves and rounded forms</h3>
      <p>Arched openings, rounded islands and soft-edged plaster niches soften the glass-box look of many new builds. Curves belong in plaster: build the radius in and finish it in mineral plaster.</p>
      <h3>6. Garden rooms and indoor-outdoor zones</h3>
      <p>A covered room that belongs to both the house and the garden, with sliding or pivot glass, the same floor level inside and out, ceiling fans and an outdoor kitchen. Plan deep overhangs, impact-rated sliders, non-slip stone and drainage before the slab is poured.</p>
      <h3>7. Wellness at home</h3>
      <p>A sauna, a cold plunge, a steam shower, an outdoor shower. Plan ventilation and drainage from day one, because a sauna added later is a sauna that rots.</p>
      <h3>8. Analog rooms</h3>
      <p>A library, a listening room, a card room: no screens, good lighting, heavy curtains. Hide the acoustic treatment in the joinery and use plaster walls for warmth.</p>
      <h3>9. Hidden technology</h3>
      <p>Screens behind joinery, speakers in the ceiling, lighting in the millwork and no visible keypads. Run conduit everywhere during framing, since pulling cable later means opening plaster.</p>
      <h3>10. Resilience built in</h3>
      <p>Impact glass, concrete structure, raised living floors, deep overhangs and repairable natural materials. Raise the finished floor, oversize the overhangs and choose materials you can repair instead of replace: plaster, stone, solid wood.</p>` },
    { id: 'mistakes', alt: true, label: 'Ten mistakes', h2: 'Ten mistakes that cost six figures to fix', html: `
      <ol>
      <li><strong>Chasing what is trending</strong> on social media instead of what you will want in ten years.</li>
      <li><strong>Designing for the photo, not the morning.</strong> Prep space, storage and traffic flow come first.</li>
      <li><strong>One overhead light per room.</strong> Layer it: ambient, task and accent.</li>
      <li><strong>A rug that fits under the coffee table and nothing else.</strong> Size up.</li>
      <li><strong>Small art on big walls.</strong></li>
      <li><strong>Glossy tile near water.</strong> It is a slip hazard and it reads cheap.</li>
      <li><strong>Small windows on the side with the view.</strong> Put the big windows on the side with the view, not the neighbour.</li>
      <li><strong>All glazing facing west.</strong> In Miami that means heat, glare and a power bill you will notice.</li>
      <li><strong>Open shelving in a humid kitchen.</strong> It collects dust and grease fast, and salt air makes it worse.</li>
      <li><strong>Forgetting hurricane code until the inspection.</strong> Every opening in Miami-Dade needs approved impact protection.</li>
      </ol>
      <p><strong>Rule of thumb:</strong> if a decision touches the slab, the roof or an opening, it costs ten times more to change after framing than on paper. Decide those first.</p>` },
    { id: 'next', label: 'Next step', h2: 'Take it further', html: `
      <p>The full report is a free PDF with more detail on every trend. If you are planning work, see <a href="/condo-renovation/">condo and apartment renovation</a>, <a href="/home-renovation/">full home renovation</a> or <a href="/interior-design/">interior design</a>.</p>
      <div class="rel"><a class="btn btn-ink" href="/report/">Download the full report</a></div>` },
  ],
  faq: [],
};

// ---- Weekly SEO article 1 (27.10.2026): Venetian plaster and Miami humidity. English source; Spanish twin in content-es.mjs. ----
// Prices come only from /venetian-plaster/cost/. Photos are real work only (no AI visualizations); captions name no place.
const gfig = (src, w, h, alt, cap) => `<figure><img src="${src}" width="${w}" height="${h}" alt="${alt}" loading="lazy" decoding="async"><figcaption>${cap}</figcaption></figure>`;

export const guideHumidityEn = {
  lang: 'en', slug: '/guides/venetian-plaster-humidity-miami/', track: 'guide-humidity',
  title: 'Venetian Plaster in Miami Humidity | M5 Studio Miami',
  desc: 'How Venetian plaster holds up in Miami humidity: bathrooms and powder rooms, salt air, air conditioning, mold, care, repairs and honest prices.',
  label: 'Guide · Venetian plaster',
  h1: 'Venetian plaster in Miami humidity: bathrooms, salt air and how it holds up',
  lede: 'Miami air is warm, wet and salty, and most wall finishes were not made for it. Venetian plaster is a mineral finish, and that changes how it behaves in a bathroom, a coastal tower or a house with the air conditioning on all year. Here is what it handles well, where it needs a protective layer, and what we would not promise. The finish itself is on our <a href="/venetian-plaster/">Venetian plaster page</a>.',
  crumbs: [['Venetian plaster and humidity', null]],
  ctas: [['Book a free site visit', '/#contact', 'btn-ink'], ['What it costs', '/venetian-plaster/cost/', 'btn-line']],
  meta: 'Last reviewed: October 2026',
  ctaH: 'Want to see how it looks and feels on your own wall?',
  article: { date: '2026-10-27' },
  sections: [
    { id: 'breathes', label: '01', h2: 'Why mineral plaster &ldquo;breathes&rdquo;', html: `
      <p>Venetian plaster, marmorino and mineral plaster are made from natural minerals: stone dust bound with mineral binders, troweled on in thin coats and burnished by hand. The surface is open at a microscopic level, so water vapor passes through it instead of being trapped behind it.</p>
      <p>Paint and vinyl wallpaper work the other way. They are a film. When moisture builds up behind a film, the film blisters, bubbles and peels. A mineral surface takes up a little moisture when the air is wet and gives it back when the air dries, and there is no film to lift.</p>
      <p>One honest caveat: breathable does not mean waterproof. The plaster handles humidity in the air very well. Direct water is a different job, and that is what the protective layer in the next section is for.</p>` },
    { id: 'bathrooms', alt: true, label: '02', h2: 'Bathrooms and powder rooms: where plaster works and where it needs protection', html: `
      <ul>
      <li><strong>Powder rooms.</strong> The easiest case. No shower, only hand-washing. Plaster on walls and even the ceiling works well, and a powder room is one of the most popular places for it.</li>
      <li><strong>Bathroom walls outside the shower.</strong> Fine, with a protective sealer or wax finish, and a working exhaust fan.</li>
      <li><strong>Inside the shower and right at the spray.</strong> This is where we are careful. Walls that get direct, daily water are usually better in tile or stone. If you want plaster in a wet zone, it gets a water-repellent protective layer, and we agree on the details at the site visit.</li>
      <li><strong>The ceiling.</strong> Steam goes up. A sealed ceiling over a shower with a good fan is fine; without ventilation, no finish will be happy.</li>
      </ul>
      <p>Whatever the room, the rule is the same: plaster plus a protective layer in wet zones, plus ventilation. Wet zones always get a protective sealer from our masters.</p>
      <div class="figs">${gfig('/img/case_powder-room-black-marmorino_2_t.jpg', 844, 900, 'Black Marmorino powder room with lit niches and a ceiling light line, master&#x27;s work in progress', 'Black marmorino powder room · master&#x27;s work, in progress')}${gfig('/media/lp/marmorino_detail.jpg', 520, 520, 'Close-up of a real Marmorino finish with a fine stone grain', 'Marmorino up close · the real finish')}</div>
      <p>See the full project: <a href="/projects/powder-room-black-marmorino.html">black marmorino powder room</a>.</p>` },
    { id: 'salt', label: '03', h2: 'Salt air and air conditioning in coastal towers', html: `
      <p>Salt in the air is hard on metal, which rusts, and on organic coatings, which age faster in strong sun and salt. Mineral plaster is inorganic. It does not rust and does not have a film to chalk or peel, which is why marmorino is used on exterior walls as well as inside.</p>
      <div class="figs">${gfig('/media/lp/fac_out.jpg', 1400, 1750, 'Modern house with a fluted Marmorino facade, our masters&#x27; work', 'Marmorino facade · our masters&#x27; work')}</div>
      <p>Indoors, the bigger swing in a Miami condo is the air conditioning. A unit that runs all day keeps the air dry and the plaster stable. The problem starts when owners travel and switch the A/C off for weeks: humidity climbs, and every finish suffers. Leave the air conditioning on a dehumidifying setting when you are away. Mineral plaster tolerates that swing far better than paint or wallpaper, but no wall finish likes a closed, wet apartment.</p>
      <p>If the building shifts or the substrate moves, any plaster can show a hairline crack. It is a cosmetic repair, covered below. Building rules for the work itself are in our <a href="/guides/miami-condo-renovation/">condo renovation guide</a>.</p>` },
    { id: 'mold', alt: true, label: '04', h2: 'Mold: why mineral plaster is harder to grow on than paint', html: `
      <p>Mold needs moisture and something to eat. Paint binders, wallpaper paste and the paper face of drywall are all food. A mineral surface is inorganic and naturally alkaline, so there is much less for mold to feed on.</p>
      <p>That is an advantage, not a guarantee. Dirt, soap film and constant condensation can still grow something on any surface. If a wall stays wet, the cause is a leak, a missing fan or a cold-surface condensation problem, and it has to be fixed at the source. We will tell you if we see a moisture problem at the site visit, before any plaster goes on.</p>` },
    { id: 'care', label: '05', h2: 'Care and repair', html: `
      <ul>
      <li><strong>Cleaning.</strong> A soft, damp cloth and a little mild soap. No abrasive pads, and no acidic or bleach-based cleaners.</li>
      <li><strong>Wet rooms.</strong> The protective layer wears slowly where water hits it most. Ask us how often to refresh it for your room.</li>
      <li><strong>Scratches and scuffs.</strong> Light marks buff out. A deeper scratch or a chip is patched by the master and blended into the surrounding finish. A repaired spot does not show the way a touched-up painted wall does.</li>
      <li><strong>Hairline cracks.</strong> They are filled and refinished the same way, a small job rather than a repaint of the whole wall.</li>
      </ul>` },
    { id: 'price', alt: true, label: '06', h2: 'What it costs', html: `
      <p>Typical prices in Miami for 2026, per square foot of wall: mineral plaster $15–20, marmorino $15–25, polished Venetian plaster $20–30, special finishes from $30. These include surface preparation, materials, hand application and the protective sealer, so a wet zone does not add a surprise line. Projects with M5 start at $10,000, and you get one fixed price in writing after a free site visit.</p>
      <p>Everything that moves the number is in <a href="/venetian-plaster/cost/">What Venetian plaster costs in Miami</a>. For the difference between the two most common finishes, see <a href="/venetian-plaster/marmorino/">marmorino plaster</a>.</p>` },
    { id: 'sample', label: '07', h2: 'See it before you decide', html: `
      <p>Humidity is easier to judge with a sample in your hand. Send us a photo of your wall on WhatsApp, and we make a real hand-made sample within 48 hours. A master then visits for free, holds the samples against your wall in your own light and checks the surface and the moisture situation. Browse finished walls in <a href="/portfolio/">our plaster work</a> or the <a href="/sample-library/">sample library</a>.</p>` },
  ],
  faq: [
    { q: 'Can Venetian plaster go in a bathroom in Miami?', a: 'Yes. Venetian plaster and marmorino are common in bathrooms and powder rooms. Walls outside the direct spray get a protective sealer or wax and need a working exhaust fan. Inside the shower, tile or stone is often the better choice, and we decide on site.' },
    { q: 'Will Venetian plaster peel or bubble in humid air?', a: 'Not the way paint or wallpaper does. Mineral plaster has no film on top, and it lets water vapor pass through. Persistent water behind the wall, from a leak for example, can damage any finish, so the source has to be fixed first.' },
    { q: 'Does salt air damage Venetian plaster?', a: 'Mineral plaster is inorganic, so it does not rust or chalk the way coatings and metals can. Marmorino is used on exterior walls that face sun, salt air and rain. Indoors, salt is rarely a problem.' },
    { q: 'Does Venetian plaster grow mold?', a: 'It is much harder for mold to grow on mineral plaster than on paint or wallpaper, because there is nothing organic to feed on. It is not mold-proof: a constantly wet wall needs its moisture problem solved, whatever the finish.' },
    { q: 'How do I repair a scratch in Venetian plaster?', a: 'Light scuffs buff out. A deeper scratch or a chip is patched by the master and blended into the surrounding finish, so you do not repaint the whole wall.' },
  ],
};
