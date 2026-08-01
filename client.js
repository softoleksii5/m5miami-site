/* M5 Client Hub v2 — кабинет клиента (31.07.2026, редизайн по фидбеку Алекса).
   Светлый «инвесторский» стиль (панорама вилл, как низ главной), аккордеоны с иконками,
   продающий каталог услуг (заявка → m5hook → Telegram «Лиды» мгновенно + WhatsApp),
   кредиты 3%, реферал $500/$500 (ref-код ≠ slug доступа!), фидбек с kudos.
   Google-отзыв просим БЕЗ оплаты (политика Google запрещает платные отзывы).
   Доступ: /client/?p=<slug>. Демо: ?p=brickell-demo. Данные позже — из JobTread API. */

var CLIENTS={
 'brickell-demo':{
   name:'David', project:'Brickell Residence — Full Renovation', status:'Active',
   pm:'Vadym', pmPhone:'17864074441', started:'Sep 2026', eta:'Dec 2026', updated:'Sep 20',
   refCode:'dv7k2f', /* реф-код ВСЕГДА отдельный от slug — slug это ключ доступа к кабинету */
   phase:1, phases:['Design','Materials','Build','Styling','Handover'],
   googleReview:'', /* ссылка g.page появится после создания Google Business Profile */
   tasks:[
     ['done','Design concept & moodboard','Sep 12'],
     ['done','Contract signed · deposit received','Sep 15'],
     ['now','Art-concrete samples for accent wall','Sep 24'],
     ['now','Kitchen: stone countertop selection','Sep 26'],
     ['next','Demolition & rough-in start','Oct 1'],
     ['next','Plaster master arrives on site','Oct 14']
   ],
   docs:{
     'Reports':[['Weekly report #2','Sep 20',''],['Weekly report #1','Sep 13','']],
     'Invoices':[['Invoice 1002 — materials deposit','Sep 18','','$1,500 · Paid'],['Invoice 1001 — design phase','Sep 15','','$2,300 · Paid']],
     'Design':[['Moodboard v2 (approved)','Sep 12',''],['Layout plan 1.1','Sep 8','']]
   },
   materials:[
     {img:'/img/gal_plaster.jpg', ttl:'Art-concrete wall', note:'Sample #3 — warm gray', st:'review'},
     {img:'/img/gal_kitchen.jpg', ttl:'Kitchen fronts', note:'Matte oak + black', st:'approved'},
     {img:'/img/gal_bath.jpg', ttl:'Bathroom stone', note:'Travertine, honed', st:'approved'},
     {img:'/img/gal_living.jpg', ttl:'Living textiles', note:'Ivory boucle set', st:'todo'}
   ],
   credits:{bal:114, earned:314, tier:'Bronze', rate:3, next:'Silver', nextAt:500, nextRate:3.5,
     hist:[
       ['−200','Deep Clean After Works — redeemed','Sep 20'],
       ['+45','3% cashback · Invoice 1002 ($1,500)','Sep 18'],
       ['+69','3% cashback · Invoice 1001 ($2,300)','Sep 15'],
       ['+200','Welcome bonus — thank you for trusting M5','Sep 15']
     ]}
 }
};

/* Продающий каталог: что клиент может добавить к проекту. Заявка в 1 клик. */
var SERVICES=[
 {img:'/img/svc3_plaster.jpg', ttl:'Decorative Plaster & Art-Concrete', sub:'Venetian, microcement, limewash — the signature M5 finish clients photograph most', from:'from $18 / sq ft',
  time:'3–7 days per room',
  what:'A hand-applied mineral finish that turns a flat wall into the centerpiece of the room — the same finish we build our showroom around.',
  steps:['Sample session — we bring 3–5 physical samples to your home and match them to your light','Surface prep & protection of floors and furniture','2–3 coats applied by our master (each needs to cure)','Sealing & final polish, walkthrough together'],
  incl:'Materials, protection, application, sealing and a touch-up kit. Dust-free process.'},
 {img:'/img/svc1_interior.jpg', ttl:'Interior Design Package', sub:'Concept, 3D visuals, materials list — a home that feels curated, not furnished', from:'from $6,500',
  time:'2–4 weeks',
  what:'A complete design brain for your space: how it looks, feels and functions — before a single wall is touched.',
  steps:['Discovery: how you live, what you love, reference session','Concept & moodboard — 2 directions to choose from','3D visualizations of key rooms + full materials & furniture list','Design supervision handoff: drawings your builders actually follow'],
  incl:'Moodboards, 3D renders, material specs, furniture list with links, lighting plan.'},
 {img:'/img/case2_kitchen.jpg', ttl:'Kitchen Remodel', sub:'Custom fronts, stone counters, appliances — the room that sells the home', from:'from $28,000',
  time:'4–8 weeks',
  what:'Full kitchen replacement: layout, cabinetry, stone, appliances, lighting — managed end to end by one team.',
  steps:['Layout & appliance plan (we check every clearance)','Cabinetry order — custom fronts, soft-close everything','Demo, rough-in, stone templating & install','Appliances, lighting, tiling, final detailing'],
  incl:'Design, demolition, cabinetry, countertops, installation, plumbing & electrical hookups, cleanup.'},
 {img:'/img/case3_bath.jpg', ttl:'Bathroom / Spa Remodel', sub:'Stone, glass, rainfall shower — hotel-grade mornings at home', from:'from $18,000',
  time:'3–6 weeks',
  what:'Your bathroom rebuilt to the standard of the hotels you love: waterproofing done right, stone done beautifully.',
  steps:['Design & fixture selection (we bring the catalog to you)','Demo + proper waterproofing (the part nobody sees, everybody regrets skipping)','Tile, stone & glass installation','Fixtures, heated details, final seal & shine'],
  incl:'Design, waterproofing, tile & stone work, glass, plumbing, fixtures installation.'},
 {img:'/img/gal_living.jpg', ttl:'Furniture & Styling', sub:'Sourcing, white-glove delivery, staging — move-in ready, magazine ready', from:'from $9,500',
  time:'2–5 weeks',
  what:'We source, buy, receive, assemble and style everything — you come home to a finished space, not a pile of boxes.',
  steps:['Styling concept on top of your design','Sourcing & ordering (trade discounts passed to you)','Receiving, quality check, white-glove delivery','Full staging day: furniture, art, textiles, greenery'],
  incl:'Sourcing, purchasing management, delivery, assembly, styling day, returns handling.'},
 {img:'/img/case4_villa.jpg', ttl:'Outdoor & Terrace', sub:'Summer kitchens, decks, landscape lighting — Miami lives outside', from:'custom quote',
  time:'2–8 weeks',
  what:'Your outdoor space turned into the best room of the house: kitchen, shade, light, sound.',
  steps:['Site visit & concept (sun, wind, privacy mapping)','Materials board: decking, stone, outdoor fabrics','Build: pergolas, summer kitchen, decking, planters','Lighting & sound — the 8pm test walkthrough'],
  incl:'Design, permits where needed, construction, outdoor kitchen, lighting, plants.'},
 {img:'/img/svc5_supervision.jpg', ttl:'Design Supervision', sub:'Our designer protects the vision on site — weekly visits & style control', from:'from $1,200 / mo',
  time:'monthly',
  what:'The insurance policy for your design: our designer on site every week making sure what was drawn is what gets built.',
  steps:['Weekly site visits with photo report to your hub','Materials & finishes control against the spec','Instant answers for builders — no guessing, no delays','Deviation alerts before they become expensive'],
  incl:'Weekly visits, photo reports, materials control, builder consultations, hub updates.'},
 {img:'/img/case6_showroom.jpg', ttl:'Commercial Fit-Out', sub:'Offices, showrooms, restaurants — spaces that work as hard as you', from:'custom quote',
  time:'4–12 weeks',
  what:'Commercial spaces that convert: built fast, built on brand, built to code.',
  steps:['Brief & brand immersion','Concept + budget in one week','Build with night/weekend crews if you cannot close','Punch list & handover with all documentation'],
  incl:'Design, permits, construction, finishes, millwork, lighting, handover docs.'}
];

var REWARDS=[
 {ic:'🧱', ttl:'Art-Concrete Accent Wall', sub:'Signature M5 wall up to 40 sq ft', cr:750},
 {ic:'🏛', ttl:'Design Supervision Month', sub:'Designer visits + style control', cr:500},
 {ic:'🎨', ttl:'Moodboard Pack', sub:'Materials + palette + 2 AI visualizations', cr:250},
 {ic:'✨', ttl:'Deep Clean After Works', sub:'Professional post-renovation cleaning', cr:200},
 {ic:'🏠', ttl:'Smart-Home Consult', sub:'Lighting, climate & security scenarios', cr:150},
 {ic:'🛋', ttl:'Designer Shopping Hour', sub:'A personal hour with our designer — sourcing & styling picks', cr:100}
];

var KUDOS=['Vadym — project lead','Design team','Site crew'];

function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
var slug=(location.search.match(/[?&]p=([^&]*)/)||[])[1]||'';
var C=CLIENTS[slug];
/* Guard: у нового клиента часть данных может отсутствовать — секции не должны падать */
function normC_(){ if(!C) return;
  C.tasks=C.tasks||[]; C.materials=C.materials||[]; C.docs=C.docs||{}; C.phases=C.phases||['Design','Materials','Build','Styling','Handover']; C.phase=C.phase||0;
  C.credits=C.credits||{bal:0,earned:0,tier:'Bronze',rate:3,next:'Silver',nextAt:500,hist:[]}; C.credits.hist=C.credits.hist||[]; }
normC_();
var HUB_HOOK='https://script.google.com/macros/s/AKfycbw_Hwj1am3WSzgrTZTdnH_OWEmzUuC0r2MDouOWvd_Jv-DiawgG1BvpMM3QwO0XeM54yw/exec';
var TOK=(location.search.match(/[?&]t=([^&]*)/)||[])[1]||'';
/* Демо-кабинет: показываем весь флоу, но НИЧЕГО не шлём в боевой Telegram/CRM
   (инцидент 31.07: клики Request с демо падали лид-карточками в «Лиды»). */
var DEMO=(slug==='brickell-demo');
function hub(p){ if(DEMO) return; if(window.m5hook) m5hook(p); }

var TSTYLE='<style>'+
'html,body{overflow-x:hidden}'+
'body{background:linear-gradient(rgba(250,246,238,.14),rgba(250,246,238,.46) 38%,rgba(250,246,238,.94) 60%,#FAF6EE 74%),url(/img/hub_bg.jpg) top center/100% auto no-repeat #FAF6EE}'+
'@media(max-width:680px){body{background-size:220% auto}}'+
'.chero{margin:26px 0 18px;max-width:640px}'+
'.chero .ey{font-family:var(--mono);font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#96703B;margin-bottom:10px}'+
'.chero h1{font-size:40px;font-weight:800;letter-spacing:-.02em;margin:0 0 8px;color:#232733}'+
'.chero .st{font-size:14.5px;color:#5A5142}'+
'.cph{display:flex;gap:6px;margin:20px 0 22px;flex-wrap:wrap}'+
'.cph span{flex:1;min-width:72px;text-align:center;font-family:var(--mono);font-size:10px;letter-spacing:.08em;text-transform:uppercase;'+
'padding:10px 4px;border-radius:12px;background:rgba(255,255,255,.82);border:1px solid var(--line);color:#AEA898;backdrop-filter:blur(4px)}'+
'.cph span.on{background:#20242E;border-color:#20242E;color:#E3C795}'+
'.cph span.done{background:#F0F8F2;border-color:#CBE3D3;color:#3E8E5A}'+
'.acc{background:#fff;border:1px solid var(--line);border-radius:18px;margin-bottom:14px;overflow:hidden;box-shadow:0 2px 12px rgba(60,48,30,.05)}'+
'.acc summary{display:flex;align-items:center;gap:14px;padding:17px 20px;cursor:pointer;list-style:none;user-select:none}'+
'.acc summary::-webkit-details-marker{display:none}'+
'.acc .aic{width:40px;height:40px;border-radius:12px;background:#F5EFE6;display:flex;align-items:center;justify-content:center;font-size:19px;flex:none}'+
'.acc .att b{font-size:16.5px;font-weight:800;color:#232733;display:block;letter-spacing:-.01em}'+
'.acc .att span{font-size:12px;color:#8A8272}'+
'.acc .chev{margin-left:auto;color:#B4AC9A;transition:.25s;font-size:14px}'+
'.acc[open] .chev{transform:rotate(180deg)}'+
'.acc .abody{padding:4px 20px 20px}'+
'.tsk{display:flex;gap:12px;align-items:center;padding:10px 8px;border-radius:10px}'+
'.tsk:hover{background:#FBF7EF}'+
'.tsk i{width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-style:normal;font-size:13px;flex:none}'+
'.tsk.done i{background:#F0F8F2;color:#3E8E5A}.tsk.now i{background:#FDF3E2;color:#B0894F}.tsk.next i{background:#F5EFE6;color:#AEA898}'+
'.tsk b{font-size:14.5px;font-weight:650;color:#20242E}.tsk small{margin-left:auto;color:#AEA898;font-family:var(--mono);font-size:11px;flex:none}'+
'.tsk.done b{color:#8A8272;text-decoration:line-through;text-decoration-color:#CBE3D3}'+
'.jinn{display:flex;gap:10px;align-items:center;background:#F7F2EA;border-radius:12px;padding:11px 14px;margin-top:10px}'+
'.jinn b{color:#20242E}.jinn span{font-size:12.5px;color:#6E6656}'+
'.dtab{display:flex;gap:8px;margin:6px 0 10px;flex-wrap:wrap}'+
'.dtab span{font-family:var(--mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;padding:7px 14px;border-radius:18px;background:#F5EFE6;cursor:pointer;color:#6E6656}'+
'.dtab span.on{background:#20242E;color:#E3C795}'+
'.doc{display:flex;justify-content:space-between;align-items:center;padding:11px 8px;border-radius:10px;color:#20242E}'+
'.doc:hover{background:#FBF7EF}.doc b{font-size:14px;font-weight:650}.doc small{color:#AEA898;font-family:var(--mono);font-size:11px}'+
'.mats{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px}'+
'.mat{border:1px solid var(--line);border-radius:14px;overflow:hidden;background:#fff}'+
'.mat img{width:100%;height:96px;object-fit:cover;display:block}'+
'.mat .mi{padding:10px 12px}.mat b{font-size:13.5px;display:block;color:#20242E}.mat span{font-size:12px;color:#8A8272}'+
'.mat em{display:inline-block;font-style:normal;font-family:var(--mono);font-size:9.5px;letter-spacing:.08em;text-transform:uppercase;padding:3px 8px;border-radius:8px;margin-top:7px}'+
'.mat em.approved{background:#F0F8F2;color:#3E8E5A}.mat em.review{background:#FDF3E2;color:#B0894F}.mat em.todo{background:#F5EFE6;color:#AEA898}'+
'.svcs{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}'+
'@media(max-width:1100px){.svcs{grid-template-columns:repeat(3,1fr)}}'+
'@media(max-width:680px){.svcs{grid-template-columns:repeat(2,1fr)}}'+
'.svc{border:1px solid var(--line);border-radius:16px;overflow:hidden;background:#fff;display:flex;flex-direction:column}'+
'.svc img{width:100%;height:68px;object-fit:cover;display:block}'+
'.svc .si{padding:9px 11px 11px;display:flex;flex-direction:column;flex:1}'+
'.svc b{font-size:12.5px;color:#232733;letter-spacing:-.01em;line-height:1.25}'+
'.svc p{display:none}'+
'.svc .fr{font-family:var(--mono);font-size:9.5px;color:#96703B;letter-spacing:.04em;margin:4px 0 8px;flex:1}'+
'.svc .sa{display:flex;gap:6px}'+
'.sbtn{flex:1;text-align:center;font-family:var(--mono);font-size:9px;letter-spacing:.06em;text-transform:uppercase;padding:8px 6px;border-radius:16px;cursor:pointer;border:0;text-decoration:none;white-space:nowrap}'+
'.sbtn.go{background:linear-gradient(90deg,#B0894F,#96703B);color:#fff}'+
'.sbtn.wa{border:1px solid #25D366;color:#1faa52;background:#fff}'+
'.credrow{display:flex;gap:16px;align-items:stretch;flex-wrap:wrap}'+
'.credbox{flex:1;min-width:240px;background:linear-gradient(135deg,#20242E,#2C3140);border-radius:16px;color:#fff;padding:18px 20px}'+
'.credbox .tier{font-family:var(--mono);font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:#E3C795}'+
'.credbox .bal{font-size:40px;font-weight:800;letter-spacing:-.03em;line-height:1.15}'+
'.credbox .bal small{font-size:14px;font-weight:600;color:#AEA898;letter-spacing:0}'+
'.credbar{height:6px;border-radius:3px;background:rgba(255,255,255,.14);margin:10px 0 6px;overflow:hidden}'+
'.credbar i{display:block;height:100%;border-radius:3px;background:linear-gradient(90deg,#B0894F,#E3C795)}'+
'.credbox .nx{font-size:12px;color:#AEA898}'+
'.chist{margin-top:10px;border-top:1px solid rgba(255,255,255,.12);padding-top:8px}'+
'.chist div{display:flex;gap:10px;font-size:12px;color:#CFC8B8;padding:3px 0}'+
'.chist b{color:#7ED9A0;font-family:var(--mono);flex:none}'+
'.chist small{margin-left:auto;color:#8A8272;flex:none}'+
'.rwd{display:flex;gap:12px;align-items:center;padding:11px 10px;border-radius:12px;border:1px solid transparent}'+
'.rwd:hover{background:#FBF7EF;border-color:var(--line)}'+
'.rwd .ric{font-size:20px;flex:none;width:38px;height:38px;border-radius:11px;background:#F5EFE6;display:flex;align-items:center;justify-content:center}'+
'.rwd b{font-size:14px;display:block;color:#20242E}.rwd span{font-size:12px;color:#8A8272;display:block}'+
'.rwd .rgo{margin-left:auto;flex:none;font-family:var(--mono);font-size:11px;letter-spacing:.06em;padding:8px 14px;border-radius:18px;background:#20242E;color:#E3C795;cursor:pointer;white-space:nowrap}'+
'.rwd .rgo.na{background:#F5EFE6;color:#AEA898;cursor:default}'+
'.refbox{background:#FDF9F1;border:1px dashed #D9B87C;border-radius:14px;padding:16px 18px}'+
'.reflink{display:flex;gap:8px;margin-top:10px}'+
'.reflink input{flex:1;border:1px solid var(--line);border-radius:10px;padding:10px 12px;font:12.5px var(--mono);color:#6E6656;background:#fff;min-width:0}'+
'.stars{display:flex;gap:6px;margin:6px 0 10px}'+
'.stars span{font-size:26px;cursor:pointer;filter:grayscale(1);opacity:.45;transition:.15s}'+
'.stars span.on{filter:none;opacity:1;transform:scale(1.08)}'+
'.kud{display:flex;gap:8px;flex-wrap:wrap;margin:4px 0 12px}'+
'.kud span{font-size:12.5px;padding:8px 14px;border-radius:18px;background:#F5EFE6;color:#6E6656;cursor:pointer;border:1px solid transparent}'+
'.kud span.on{background:#20242E;color:#E3C795}'+
'.fb-ta{width:100%;border:1px solid var(--line);border-radius:12px;padding:12px 14px;font:14px var(--sans);color:#20242E;min-height:70px;resize:vertical;box-sizing:border-box}'+
'.cbtn{display:inline-flex;align-items:center;gap:8px;font-family:var(--mono);font-size:11.5px;letter-spacing:.12em;text-transform:uppercase;'+
'padding:12px 22px;border-radius:24px;border:0;cursor:pointer;background:linear-gradient(90deg,#B0894F,#96703B);color:#fff;margin-top:10px}'+
'.gr{display:flex;gap:12px;align-items:center;background:#F5F9FF;border:1px solid #D6E4F5;border-radius:12px;padding:12px 14px;margin-top:14px}'+
'.gr b{font-size:13.5px;color:#20242E;display:block}.gr span{font-size:12px;color:#6E6656}'+
'.gr .gbadge{margin-left:auto;flex:none;font-family:var(--mono);font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:#3E8E5A;background:#F0F8F2;border:1px solid #CBE3D3;padding:6px 10px;border-radius:10px;white-space:nowrap}'+
'.fdrs{display:flex;gap:10px;align-items:center;padding:9px 0}'+
'.fdrs img{width:44px;height:44px;border-radius:50%;object-fit:cover}'+
'.fdrs b{display:block;font-size:14px;color:#20242E}.fdrs span{font-size:12px;color:#8A8272}'+
'.fdrs a{margin-left:auto;font-family:var(--mono);font-size:11px;color:#96703B;text-decoration:none;border:1px solid #D9B87C;padding:7px 13px;border-radius:16px;white-space:nowrap}'+
'.okmsg{background:#F0F8F2;border:1px solid #CBE3D3;color:#3E8E5A;border-radius:12px;padding:12px 16px;font-size:14px;margin-top:10px;display:none}'+
'.svm{position:fixed;inset:0;background:rgba(25,21,17,.55);z-index:80;display:none;align-items:center;justify-content:center;padding:18px}'+
'.svm.on{display:flex}'+
'.svm-box{background:#fff;border-radius:20px;max-width:640px;width:100%;max-height:88vh;overflow:auto;position:relative}'+
'.svm-box img{width:100%;height:200px;object-fit:cover;display:block}'+
'.svm-x{position:absolute;top:14px;right:14px;width:36px;height:36px;border-radius:50%;background:rgba(25,21,17,.55);color:#fff;border:0;font-size:16px;cursor:pointer;z-index:2}'+
'.svm-in{padding:20px 24px 24px}'+
'.svm-in h3{font-size:22px;margin:0 0 4px;color:#232733;letter-spacing:-.01em}'+
'.svm-meta{display:flex;gap:14px;font-family:var(--mono);font-size:11px;color:#96703B;letter-spacing:.06em;margin-bottom:12px}'+
'.svm-in p{font-size:14px;color:#5A5142;line-height:1.55;margin:0 0 14px}'+
'.svm-st{font-family:var(--mono);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#8A8272;margin:14px 0 8px}'+
'.svm-step{display:flex;gap:12px;align-items:flex-start;padding:7px 0;font-size:13.5px;color:#20242E}'+
'.svm-step i{font-style:normal;min-width:24px;height:24px;border-radius:50%;background:#F5EFE6;color:#96703B;display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:11px;flex:none;margin-top:1px}'+
'.svm-incl{background:#FBF7EF;border-radius:12px;padding:12px 14px;font-size:12.5px;color:#6E6656}'+
'.svm-a{display:flex;gap:10px;margin-top:16px}'+
'.band{width:100vw;margin:-120px 0 -250px calc(50% - 50vw);height:460px;background-position:center;background-size:cover;position:relative;z-index:0;pointer-events:none}'+
'.band::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,#FAF6EE 0%,rgba(250,246,238,.34) 26%,rgba(250,246,238,.10) 48%,rgba(250,246,238,.45) 74%,#FAF6EE 100%)}'+
'.acc{position:relative;z-index:1}'+
'@media(max-width:680px){.band{height:260px;margin:-70px 0 -150px calc(50% - 50vw)}}'+
'.bagrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}'+
'@media(max-width:680px){.bagrid{grid-template-columns:1fr}}'+
'.bapair{position:relative;border-radius:14px;overflow:hidden;border:1px solid var(--line)}'+
'.bapair img{width:100%;height:150px;object-fit:cover;display:block}'+
'.bapair em{position:absolute;top:10px;left:10px;font-style:normal;font-family:var(--mono);font-size:9.5px;letter-spacing:.14em;text-transform:uppercase;padding:4px 10px;border-radius:10px;background:rgba(25,21,17,.72);color:#E3C795}'+
'.bapair.after em{background:#F0F8F2;color:#3E8E5A}'+
'.bacap{font-size:12.5px;color:#8A8272;margin:6px 2px 12px}'+
'.gate{max-width:430px;margin:110px auto;background:#fff;border-radius:18px;padding:34px 30px;text-align:center;border:1px solid var(--line)}'+
'.cjin{max-width:640px;margin:0 0 14px}'+
'.cjin .cjbar{display:flex;gap:8px;background:#fff;border:1px solid var(--line);border-radius:14px;padding:5px 5px 5px 14px;align-items:center;box-shadow:0 5px 18px rgba(60,48,30,.06)}'+
'.cjin .cjic{color:#C8A96A;font-size:14px}'+
'.cjin input{flex:1;border:0;outline:0;font:16px var(--sans);color:#232733;background:transparent;min-width:0}'+
'.cjin button{width:36px;height:36px;border-radius:10px;border:0;background:#20242E;color:#E3C795;font-size:15px;cursor:pointer;flex:0 0 auto}'+
'.cjin button:hover{background:#96703B;color:#fff}'+
'.cjin .cjreply{display:none;background:#fff;border:1px solid var(--line);border-radius:12px;padding:12px 14px;font-size:13.5px;color:#3E3A33;margin-top:8px;line-height:1.5}'+
'.cjin .cjreply.on{display:block}'+
'.cnow{display:flex;gap:10px;flex-wrap:wrap;margin:0 0 18px}'+
'.cnow-c{flex:1;min-width:230px;background:#fff;border:1px solid var(--line);border-left:4px solid #C8A96A;border-radius:14px;padding:13px 16px;box-shadow:0 8px 24px rgba(60,48,30,.07)}'+
'.cnow-c.act{cursor:pointer}'+
'.cnow-c.act:hover{border-color:#C8A96A}'+
'.cnow-tag{display:block;font-family:var(--mono);font-size:9.5px;letter-spacing:.13em;text-transform:uppercase;color:#96703B;margin-bottom:5px}'+
'.cnow-c b{font-size:14.5px;color:#232733}'+
'.cnow-date{display:block;font-size:11.5px;color:#8A8272;margin-top:4px}'+
'.cnow-go{display:block;font-size:11.5px;font-weight:600;color:#96703B;margin-top:6px}'+
'a.doc{display:block;text-decoration:none;color:inherit}'+
'.docmeta{font-family:var(--mono);font-size:9.5px;color:#3E8E5A;border:1px solid #CBE3D3;border-radius:8px;padding:2px 7px;margin-left:6px;white-space:nowrap}'+
'.chist b.neg{color:#8A8272}'+
'.mact{display:flex;gap:8px;margin-top:8px;flex-wrap:wrap}'+
'.mact .sbtn{font-size:10px;min-height:34px;display:inline-flex;align-items:center;justify-content:center;padding:6px 14px}'+
'@media(max-width:680px){.sbtn,.mact .sbtn{font-size:10px;min-height:40px;display:inline-flex;align-items:center;justify-content:center}'+
'.rgo{font-size:11px;padding:10px 14px}'+
'.cph{flex-wrap:nowrap;overflow-x:auto;-webkit-overflow-scrolling:touch;padding-bottom:4px}'+
'.cph span{flex:0 0 auto;min-width:86px}}'+
'</style>';

function accOpen(id){var st=0;try{st=localStorage.getItem('m5c_'+id);}catch(e){} return st===null?null:st==='1';}
function acc(id, ic, ttl, hint, body, openDefault){
  var saved=null; try{saved=localStorage.getItem('m5c_'+id);}catch(e){}
  var isOpen = saved===null ? openDefault : saved==='1';
  return '<details class="acc" id="acc_'+id+'"'+(isOpen?' open':'')+' ontoggle="try{localStorage.setItem(\'m5c_'+id+'\',this.open?\'1\':\'0\')}catch(e){}">'+
  '<summary><div class="aic">'+ic+'</div><div class="att"><b>'+ttl+'</b><span>'+hint+'</span></div><span class="chev">▼</span></summary>'+
  '<div class="abody">'+body+'</div></details>';
}

function renderGate_(){
  document.getElementById('app').innerHTML=TSTYLE+
  '<header><div class="wrap hbar"><a class="logo" href="/">M<b>5</b><small>CLIENT</small></a></div></header>'+
  '<div class="gate"><div style="font-size:34px;margin-bottom:10px">🔑</div>'+
  '<b style="font-size:18px;color:#20242E">This is a private project hub.</b><br><br>'+
  '<span style="font-size:14px;color:#6E6656">Every M5 client receives a personal link from their project manager. '+
  'Lost yours? Message us on WhatsApp and we’ll resend it.</span><br><br>'+
  '<a class="cbtn" style="text-decoration:none" href="https://wa.me/17864074441">WhatsApp M5</a>'+
  '<div style="margin-top:14px"><a href="/client/?p=brickell-demo" style="font-family:var(--mono);font-size:11px;letter-spacing:.1em;color:#96703B;text-decoration:underline">SEE A DEMO PROJECT HUB →</a></div></div>'+
  '<footer>M5 Interior Design &amp; Build · Miami</footer>';
}
function renderHub_(){
  var ph=C.phases.map(function(p,i){return '<span class="'+(i<C.phase?'done':(i===C.phase?'on':''))+'">'+esc(p)+'</span>';}).join('');
  var tasks=C.tasks.map(function(t){var ic=t[0]==='done'?'✓':(t[0]==='now'?'●':'○');
    return '<div class="tsk '+t[0]+'"><i>'+ic+'</i><b>'+esc(t[1])+'</b><small>'+esc(t[2])+'</small></div>';}).join('');
  var doneN=C.tasks.filter(function(t){return t[0]==='done';}).length;
  var cats=Object.keys(C.docs);
  var dtabs=cats.map(function(c,i){return '<span class="'+(i===0?'on':'')+'" onclick="docTab(this,\''+esc(c)+'\')">'+esc(c)+'</span>';}).join('');
  var docHtml=function(cat){
    var rows=(C.docs[cat]||[]);
    if(!rows.length) return '<div class="doc" style="color:#8A8272">Documents appear here after kickoff.</div>';
    return rows.map(function(d){
      var inner='<b>📄 '+esc(d[0])+(d[3]?' <span class="docmeta">'+esc(d[3])+'</span>':'')+'</b><small>'+esc(d[1])+'</small>';
      return d[2]?('<a class="doc" href="'+esc(d[2])+'" target="_blank" rel="noopener">'+inner+'</a>'):('<div class="doc">'+inner+'</div>');
    }).join('');};
  var docsN=0; cats.forEach(function(c){docsN+=C.docs[c].length;});
  var mats=C.materials.map(function(m,mi){
    var act=(m.st==='review')?('<div class="mact"><span class="sbtn go" onclick="matApprove('+mi+')">Approve ✓</span>'+
      '<a class="sbtn wa" target="_blank" rel="noopener" href="https://wa.me/'+C.pmPhone+'?text='+encodeURIComponent('Hi! This is '+C.name+'. About the sample “'+m.ttl+'”: ')+'">Discuss</a></div>'):'';
    return '<div class="mat" id="mat'+mi+'"><img src="'+m.img+'" alt="" loading="lazy"><div class="mi"><b>'+esc(m.ttl)+'</b><span>'+esc(m.note)+'</span><br><em class="'+m.st+'">'+
    (m.st==='approved'?'Approved':(m.st==='review'?'Your review':'Coming up'))+'</em>'+act+'</div></div>';}).join('');
  if(!C.materials.length) mats='<div class="bacap">Materials board fills up during the Design phase — samples land here for your approval.</div>';
  var needRev=C.materials.filter(function(m){return m.st==='review';}).length;
  var svc=SERVICES.map(function(s,i){
    return '<div class="svc" onclick="svcOpen('+i+')" style="cursor:pointer"><img src="'+s.img+'" alt="" loading="lazy"><div class="si"><b>'+esc(s.ttl)+'</b><p>'+esc(s.sub)+'</p>'+
    '<div class="fr">'+esc(s.from)+'</div><div class="sa">'+
    '<span class="sbtn go" onclick="event.stopPropagation();reqSvc('+i+')">Request →</span>'+
    '<a class="sbtn wa" onclick="event.stopPropagation()" target="_blank" rel="noopener" href="https://wa.me/'+C.pmPhone+'?text='+encodeURIComponent('Hi! This is '+C.name+' ('+C.project+'). I’m interested in: '+s.ttl)+'">WA</a>'+
    '</div></div></div>';}).join('');
  var hist=C.credits.hist.map(function(h){var neg=(h[0].charAt(0)==='−'||h[0].charAt(0)==='-');
    return '<div><b'+(neg?' class="neg"':'')+'>'+esc(h[0])+'</b> '+esc(h[1])+'<small>'+esc(h[2])+'</small></div>';}).join('');
  if(!C.credits.hist.length) hist='<div style="color:#8A8272;font-size:12px">Credits start landing with your first paid invoice — '+C.credits.rate+'% of every payment comes back.</div>';
  var rwds=REWARDS.map(function(r,i){var ok=C.credits.bal>=r.cr;
    return '<div class="rwd"><div class="ric">'+r.ic+'</div><div><b>'+esc(r.ttl)+'</b><span>'+esc(r.sub)+'</span></div>'+
    '<span class="rgo'+(ok?'':' na')+'" '+(ok?('onclick="redeem('+i+')"'):'')+'>'+r.cr+' cr</span></div>';}).join('');
  var pct=Math.min(100,Math.round(C.credits.earned/C.credits.nextAt*100));
  var kud=KUDOS.map(function(k,i){return '<span id="kud'+i+'" onclick="kudPick('+i+')">'+esc(k)+'</span>';}).join('');
  /* Отзыв просим БЕЗ вознаграждения (политика Google/FTC запрещает платные отзывы). */
  var gRev=C.googleReview
    ? '<div class="gr"><div style="font-size:20px">⭐</div><div><b>Loved the result? A review means the world to a small studio.</b><span>2 minutes on Google — it helps Miami find us.</span></div><a class="gbadge" style="text-decoration:none" target="_blank" rel="noopener" href="'+esc(C.googleReview)+'">Leave a review</a></div>'
    : '';

  document.getElementById('app').innerHTML=TSTYLE+
  '<header><div class="wrap hbar">'+
    '<a class="logo" href="/">M<b>5</b><small>CLIENT</small></a>'+
    '<div class="hr"><span class="priv"><i></i><span>'+(DEMO?'Demo project · sample data':'Private · '+esc(C.status))+'</span></span>'+
    '<a class="signout" href="/" style="text-decoration:none">m5miami.com</a></div>'+
  '</div></header>'+
  '<div class="wrap">'+
    '<div class="chero">'+
      '<div class="ey">Your studio hub · everything in one place</div>'+
      '<h1>Hi, '+esc(C.name)+'.</h1>'+
      '<div class="st">'+esc(C.project)+' · started '+esc(C.started)+(C.eta?' · target completion: <b>'+esc(C.eta)+'</b>':'')+'</div>'+
      '<div class="st" style="margin-top:4px">Your project lead: '+esc(C.pm)+' · Director</div>'+
    '</div>'+
    '<div class="cph">'+ph+'</div>'+
    clientJinHtml()+
    clientNowHtml()+
    acc('prog','📋','Project progress',doneN+' of '+C.tasks.length+' tasks done · updated '+esc(C.updated||C.started),
      (C.tasks.length?tasks:'<div class="bacap">Your project plan lands here right after kickoff.</div>')+'<div class="jinn"><span style="font-size:18px">✦</span><span><b>Jin, our AI, keeps this page in sync with the team</b> — updates land here as the team logs them.</span></div>', true)+
    acc('ba','📸','Before & after','Where we started — and where it’s going',
      '<div class="bacap">Our content team shoots every room before works begin — so you can watch the transformation.</div>'+
      '<div class="bagrid">'+
      '<div><div class="bapair"><em>Before</em><img src="/img/ba_reno_before.jpg" alt="" loading="lazy"></div><div class="bacap">Living room — day one</div></div>'+
      '<div><div class="bapair after"><em>After</em><img src="/img/ba_reno_after.jpg" alt="" loading="lazy"></div><div class="bacap">Living room — result (example)</div></div>'+
      '<div><div class="bapair"><em>Before</em><img src="/img/ba_plaster_before.jpg" alt="" loading="lazy"></div><div class="bacap">Accent wall — before plaster</div></div>'+
      '<div><div class="bapair after"><em>After</em><img src="/img/ba_plaster_after.jpg" alt="" loading="lazy"></div><div class="bacap">Accent wall — art-concrete (example)</div></div>'+
      '</div>', false)+
    acc('mats','🧱','Materials & selections', needRev? needRev+' waiting for your review':'All approved',
      '<div class="mats">'+mats+'</div>', needRev>0)+
    acc('docs','📄','Documents', docsN+' files · reports, invoices, design',
      '<div class="dtab">'+dtabs+'</div><div id="docList">'+docHtml(cats[0])+'</div>', false)+
    '<div class="band" style="background-image:url(/img/band_kitchen.jpg)"></div>'+
    acc('svc','🛎','Add to your project','Popular upgrades — request in one tap',
      '<div style="font-size:12.5px;color:#8A8272;margin:2px 0 12px">Tap any card for details. One team already on site = better price, zero coordination pain.</div>'+
      '<div class="svcs">'+svc+'</div><div class="okmsg" id="svcOk">'+(DEMO?'Demo mode — in your real hub, '+esc(C.pm)+' texts you the same day.':'Request sent! '+esc(C.pm)+' will text you today with details.')+'</div>', false)+
    acc('cred','💎','Credits & rewards',C.credits.bal+' credits · '+C.credits.tier+' tier · '+C.credits.rate+'% cashback',
      '<div class="credrow"><div class="credbox">'+
        '<div class="tier">◆ '+esc(C.credits.tier)+' tier · '+C.credits.rate+'% cashback</div>'+
        '<div class="bal">'+C.credits.bal+' <small>credits · 1 cr = $1</small></div>'+
        '<div class="credbar"><i style="width:'+pct+'%"></i></div>'+
        '<div class="nx">Earn '+(C.credits.nextAt-C.credits.earned)+' more to reach '+esc(C.credits.next)+' ('+(C.credits.nextRate||3.5)+'% cashback)</div>'+
        '<div class="chist">'+hist+'</div></div>'+
      '<div style="flex:1.2;min-width:260px">'+
        '<div style="font-size:12.5px;color:#8A8272;margin:2px 0 6px">Every paid invoice earns '+C.credits.rate+'% back. Spend on extra M5 services — we confirm within 24h.</div>'+
        rwds+'<div class="okmsg" id="rwOk">'+(DEMO?'Demo mode — in your real hub, '+esc(C.pm)+' confirms within 24 hours.':'Request sent! '+esc(C.pm)+' will confirm and schedule it within 24 hours.')+'</div></div></div>', false)+
    (C.refCode?acc('ref','🤝','Refer a friend — you both get $500','Your personal link inside',
      '<div class="refbox"><div style="font-size:13px;color:#6E6656">You get <b>$500 in credits</b>, your friend gets <b>$500 off</b> their first invoice. Share your personal link:</div>'+
      '<div class="reflink"><input id="refUrl" readonly value="https://m5miami.com/?ref='+esc(C.refCode)+'"><button class="cbtn" style="margin:0" onclick="copyRef()">Copy</button></div>'+
      '<div style="font-size:12px;color:#8A8272;margin-top:8px">When your friend books a consultation, we message you — and the $500 lands on your balance.</div>'+
      '<div class="okmsg" id="refOk">Link copied — send it to someone who deserves a beautiful home.</div></div>', false):'')+
    '<div class="band" style="background-image:url(/img/band_plaster.jpg)"></div>'+
    acc('fb','💬','Feedback & reviews','30 seconds — it goes straight to the founders',
      '<div style="font-size:13px;color:#6E6656;margin:2px 0 4px">How was our work this week?</div>'+
      '<div class="stars" id="stars">'+[1,2,3,4,5].map(function(n){return '<span onclick="starPick('+n+')">★</span>';}).join('')+'</div>'+
      '<div style="font-size:12.5px;color:#8A8272">Anyone on the team impress you? Tap to give kudos — it counts toward their bonus:</div>'+
      '<div class="kud">'+kud+'</div>'+
      '<textarea class="fb-ta" id="fbText" placeholder="Anything on your mind — a quick “all good”, an idea, or a concern."></textarea>'+
      '<button class="cbtn" onclick="sendFb()">Send to the founders</button>'+
      '<div class="okmsg" id="fbOk">'+(DEMO?'Demo mode — in your real hub this lands on the founders’ desk instantly.':'Thank you! Your feedback just landed on the founders’ desk. We read every word.')+'</div>'+
      gRev, false)+
    acc('talk','📞','Talk to us directly','Vlad (co-founder) · '+esc(C.pm)+' (Director)',
      '<div class="fdrs"><img src="/img/ava_vlad.jpg" alt=""><div><b>Vlad</b><span>Co-founder · M5</span></div><a href="mailto:hello@m5miami.com">Email</a></div>'+
      '<div class="fdrs"><img src="/img/ava_vadim.jpg" alt=""><div><b>Vadym</b><span>Director · runs your project</span></div><a target="_blank" rel="noopener" href="https://wa.me/'+C.pmPhone+'">WhatsApp</a></div>', false)+
  '</div>'+
  '<footer>M5 · Interior Design &amp; Build · Miami</footer>'+
  '<div class="svm" id="svm" onclick="if(event.target===this)svcClose()"><div class="svm-box" id="svmBox"></div></div>';
}
/* Реальные клиенты живут НЕ в этом файле: GAS отдаёт JSON по slug+token из листа Clients
   (Sheet-first, решение Алекса 02.08). Ссылка клиента: /client/?p=slug&t=token */
function fetchClient_(){
  document.getElementById('app').innerHTML=TSTYLE+'<div style="text-align:center;margin-top:150px;font-family:var(--sans);color:#8A8272">Loading your hub…</div>';
  fetch(HUB_HOOK+'?client='+encodeURIComponent(slug)+'&t='+encodeURIComponent(TOK)+'&cb=cb',{credentials:'omit'})
    .then(function(r){return r.text();})
    .then(function(t){
      var m=t.match(/^\s*cb\(([\s\S]*)\)\s*;?\s*$/); var d=null; try{d=JSON.parse(m?m[1]:t);}catch(e){}
      if(!d||d.err||!d.name){ renderGate_(); return; }
      C=d; normC_();
      try{ renderHub_(); }catch(e2){ renderGate_(); }
    })
    .catch(function(){ renderGate_(); });
}
try{
  if(C){ renderHub_(); }
  else if(slug&&/^[A-Za-z0-9_-]{3,64}$/.test(slug)&&TOK){ fetchClient_(); }
  else { renderGate_(); }
}catch(e){
  document.getElementById('app').innerHTML=(typeof TSTYLE==='string'?TSTYLE:'')+
  '<div style="max-width:420px;margin:120px auto;text-align:center;font-family:Geist,-apple-system,sans-serif;padding:0 20px">'+
  '<b style="font-size:17px;color:#20242E">Something didn’t load.</b><br><br>'+
  '<a href="https://wa.me/17864074441" style="color:#96703B">Message us on WhatsApp</a></div>';
}

function svcOpen(i){
  var s=SERVICES[i]; if(!s) return;
  var steps=(s.steps||[]).map(function(st,n){return '<div class="svm-step"><i>'+(n+1)+'</i><span>'+st+'</span></div>';}).join('');
  document.getElementById('svmBox').innerHTML=
    '<button class="svm-x" onclick="svcClose()">✕</button>'+
    '<img src="'+s.img+'" alt="">'+
    '<div class="svm-in"><h3>'+s.ttl+'</h3>'+
    '<div class="svm-meta"><span>'+s.from+'</span><span>⏱ '+(s.time||'')+'</span></div>'+
    '<p>'+(s.what||s.sub)+'</p>'+
    '<div class="svm-st">How it works</div>'+steps+
    '<div class="svm-st">What’s included</div><div class="svm-incl">'+(s.incl||'')+'</div>'+
    '<div class="svm-a"><span class="sbtn go" style="flex:1" onclick="svcClose();reqSvc('+i+')">Request — '+ (C?esc(C.pm):'we') +' texts you today</span>'+
    '<a class="sbtn wa" style="flex:0 0 auto;padding:11px 18px" target="_blank" rel="noopener" href="https://wa.me/'+(C?C.pmPhone:'17864074441')+'?text='+encodeURIComponent('Hi! This is '+(C?C.name:'')+'. I’m interested in: '+s.ttl)+'">WhatsApp</a></div>'+
    '</div>';
  document.getElementById('svm').className='svm on';
}
function svcClose(){var m=document.getElementById('svm'); if(m)m.className='svm';}
/* «Тот же подход, что в кабинете команды» (02.08): над аккордеонами — одно действие
   и одна ближайшая веха; клиент без «домашки» карточку не видит (правило тишины). */
function clientNowHtml(){
  var cards='';
  var rev=[]; for(var i=0;i<C.materials.length;i++) if(C.materials[i].st==='review') rev.push(C.materials[i]);
  if(rev.length) cards+='<div class="cnow-c act" onclick="openAcc(\'mats\')"><span class="cnow-tag">🖐 Waiting on you</span><b>'+esc(rev[0].ttl)+(rev.length>1?' + '+(rev.length-1)+' more':'')+'</b><span class="cnow-go">Review &amp; approve →</span></div>';
  var nowT=null,nextT=null;
  for(var j=0;j<C.tasks.length;j++){ if(!nowT&&C.tasks[j][0]==='now')nowT=C.tasks[j]; if(!nextT&&C.tasks[j][0]==='next')nextT=C.tasks[j]; }
  /* Дедуп: если слева уже «ждём согласования» — справа показываем СЛЕДУЮЩЕЕ событие,
     а не ту же позицию вторым заголовком. */
  var t=rev.length?(nextT||nowT):(nowT||nextT);
  var lbl=(t===nowT&&nowT)?'⏳ Happening now':'⏭ Up next';
  if(t) cards+='<div class="cnow-c"><span class="cnow-tag">'+lbl+'</span><b>'+esc(t[1])+'</b><span class="cnow-date">'+esc(t[2])+'</span></div>';
  return cards?('<div class="cnow">'+cards+'</div>'):'';
}
window.openAcc=function(id){ try{ var d=document.getElementById('acc_'+id); if(d){ d.open=true; try{localStorage.setItem('m5c_'+id,'1');}catch(e2){} d.scrollIntoView({behavior:'smooth',block:'start'}); } }catch(e){} };
function clientJinHtml(){
  return '<div class="cjin"><div class="cjbar"><span class="cjic">✦</span>'+
    '<input type="text" id="cjInput" placeholder="Ask Jin about your project — timeline, materials, credits…" onkeydown="if(event.key===\'Enter\')cjAsk()">'+
    '<button onclick="cjAsk()" aria-label="Send">→</button></div>'+
    '<div class="cjreply" id="cjReply"></div></div>';
}
window.cjAsk=function(){
  var inp=document.getElementById('cjInput'); var q=inp?inp.value.trim():''; if(!q)return;
  inp.value='';
  var box=document.getElementById('cjReply'); box.className='cjreply on';
  if(!window.fetch){ box.innerHTML='Message us on WhatsApp — we reply fast.'; return; }
  box.innerHTML='<span style="color:#8A8272">Jin is thinking…</span>';
  var HOOK='https://script.google.com/macros/s/AKfycbw_Hwj1am3WSzgrTZTdnH_OWEmzUuC0r2MDouOWvd_Jv-DiawgG1BvpMM3QwO0XeM54yw/exec';
  fetch(HOOK+'?jin=1&role=client&cb=cb&q='+encodeURIComponent(q.slice(0,500)),{credentials:'omit'})
    .then(function(r){return r.text();})
    .then(function(t){
      var m=t.match(/^\s*cb\(([\s\S]*)\)\s*;?\s*$/); var r2=null; try{r2=JSON.parse(m?m[1]:t);}catch(e){}
      box.innerHTML=(r2&&r2.a)?('<b>✦ Jin</b> · '+esc(r2.a).replace(/\n/g,'<br>')):'Jin is offline for a second — try again, or WhatsApp us.';
    })
    .catch(function(){ box.innerHTML='Jin is offline for a second — try again, or WhatsApp us.'; });
};
function matApprove(i){
  var m=C&&C.materials[i]; if(!m)return;
  if(!confirm('Approve “'+m.ttl+'”?'+(DEMO?' (Demo — nothing is sent.)':' The team gets notified right away.')))return;
  hub({type:'approve',name:C.name,service:m.ttl,details:'Material approved · '+C.project,source:'client-hub:'+slug});
  m.st='approved';
  var em=document.querySelector('#mat'+i+' em'); if(em){em.className='approved';em.textContent='Approved';}
  var ac=document.querySelector('#mat'+i+' .mact'); if(ac)ac.style.display='none';
}
var fbStars=0, fbKud=-1;
function starPick(n){fbStars=n;var s=document.querySelectorAll('#stars span');for(var i=0;i<s.length;i++){s[i].className=i<n?'on':'';}}
function kudPick(i){fbKud=(fbKud===i)?-1:i;for(var j=0;j<KUDOS.length;j++){var el=document.getElementById('kud'+j);if(el)el.className=(j===fbKud)?'on':'';}}
function sendFb(){
  var t=(document.getElementById('fbText').value||'').trim();
  if(!fbStars&&!t&&fbKud<0)return;
  var d=(fbStars?fbStars+'★':'')+(fbKud>=0?' · Kudos: '+KUDOS[fbKud]:'')+(t?' · '+t:'');
  hub({type:'feedback',name:C?C.name:'',service:C?C.project:'',details:d,source:'client-hub:'+slug});
  document.getElementById('fbText').value='';starPick(0);kudPick(-1);
  var ok=document.getElementById('fbOk');ok.style.display='block';setTimeout(function(){ok.style.display='none';},6000);
}
function reqSvc(i){
  var s=SERVICES[i];if(!s)return;
  if(!confirm('Request “'+s.ttl+'”? '+(C?C.pm:'We')+' will text you today — no obligation.'))return;
  hub({type:'service',name:C?C.name:'',phone:'',service:s.ttl,details:'Client Hub upsell · '+(C?C.project:'')+' · '+s.from,source:'client-hub-upsell:'+slug});
  var ok=document.getElementById('svcOk');ok.style.display='block';
  try{ok.scrollIntoView({behavior:'smooth',block:'nearest'});}catch(e){}
  setTimeout(function(){ok.style.display='none';},7000);
}
function redeem(i){
  var r=REWARDS[i];if(!r)return;
  if(!confirm('Redeem “'+r.ttl+'” for '+r.cr+' credits?\nThe team will confirm within 24 hours.'))return;
  hub({type:'redeem',name:C?C.name:'',service:r.ttl,details:r.cr+' credits · balance '+(C?C.credits.bal:'?'),source:'client-hub:'+slug});
  var ok=document.getElementById('rwOk');ok.style.display='block';setTimeout(function(){ok.style.display='none';},6000);
}
function copyRef(){
  var inp=document.getElementById('refUrl');inp.select();inp.setSelectionRange(0,99);
  try{navigator.clipboard.writeText(inp.value);}catch(e){document.execCommand('copy');}
  hub({type:'referral-copy',name:C?C.name:'',source:'client-hub:'+slug});
  var ok=document.getElementById('refOk');ok.style.display='block';setTimeout(function(){ok.style.display='none';},5000);
}
function docTab(el,cat){
  var t=document.querySelectorAll('.dtab span');for(var i=0;i<t.length;i++)t[i].className='';
  el.className='on';
  var C2=CLIENTS[slug];
  var rows2=(C2.docs[cat]||[]);
  document.getElementById('docList').innerHTML=rows2.length?rows2.map(function(d){
    var inner='<b>📄 '+esc(d[0])+(d[3]?' <span class="docmeta">'+esc(d[3])+'</span>':'')+'</b><small>'+esc(d[1])+'</small>';
    return d[2]?('<a class="doc" href="'+esc(d[2])+'" target="_blank" rel="noopener">'+inner+'</a>'):('<div class="doc">'+inner+'</div>');}).join(''):'<div class="doc" style="color:#8A8272">Documents appear here after kickoff.</div>';
}
