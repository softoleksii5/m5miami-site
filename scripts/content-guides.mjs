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
  lang: 'en', slug: '/guides/renovation-cost-miami/', track: 'guide-cost',
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
