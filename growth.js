/* M5 · My Growth — рейтинговый путь A → B → M. Роле-аварная страница.
   Данные из «20 · Шкалы роста M5 — все роли». Уровень сотрудника — из localStorage m5_level (ставит автоматика §8) или ?lv=. */

var METAL={bronze:{e:'🥉',n:'Bronze'},silver:{e:'🥈',n:'Silver'},gold:{e:'🥇',n:'Gold'},platinum:{e:'💎',n:'Platinum «M5»'}};

/* level: [code, riseTo, hold, pay, bonus, badge, com?] ; gate: {gate:'A→B', text} */
function L(code,rise,hold,pay,bonus,badge,com){return {code:code,rise:rise,hold:hold,pay:pay,bonus:bonus,badge:badge,com:com};}
function G(g,t){return {gate:g,text:t};}

var SCALES={
 sales:{label:'Sales Manager',metric:'Signed contracts (counted by deposit)',gate:'Reply ≤15 min · 8+ consults/mo · 100% leads in Monday',period:'Quarter',payhead:'Fixed /mo',com:true,
  rows:[
   L('A1','Hired, onboarded','gate','$4,500','—','', '2.0%'),
   L('A2','Gate 2 months in a row','gate','$4,575','$150','', '2.0%'),
   L('A3','+ 1st signed contract','gate','$4,650','$200','bronze','2.0%'),
   L('A4','2 contracts / quarter','1/qtr','$4,725','$250','bronze','2.0%'),
   L('A5','3 / quarter (~1/mo)','2/qtr','$4,800','$300','bronze','2.0%'),
   G('A → B','Consult→contract conversion ≥25% two quarters · clean CRM'),
   L('B1','4 / quarter','3/qtr','$5,400','$1,500 + certificate','silver','2.2%'),
   L('B2','5 / quarter','4/qtr','$5,500','$400','silver','2.2%'),
   L('B3','6 / quarter','5/qtr','$5,600','$450','silver','2.2%'),
   L('B4','7 / quarter','6/qtr','$5,700','$500','silver','2.2%'),
   L('B5','8 / quarter','7/qtr','$5,800','$600','silver','2.2%'),
   G('B → M','Partner network ≥10 · ≥2 contracts via partners · conversion ≥30%'),
   L('M1','9 / quarter (~3/mo)','8/qtr','$6,300','$2,500','gold','2.5%'),
   L('M2','10 / quarter','9/qtr','$6,425','$700','gold','2.5%'),
   L('M3','11 / quarter','10/qtr','$6,550','$800','gold','2.5%'),
   L('M4','12 / quarter','11/qtr','$6,675','$900','gold','2.5%'),
   L('M5','13 / quarter + grew a mentee','12/qtr','$6,800','$6,000 + M5 Club','platinum','2.5%')
  ]},
 smm:{label:'SMM & Content',metric:'Contracts from social · 30 content units/mo to qualify',gate:'30 content units + stories monthly',period:'Quarter',payhead:'Fixed /mo',note:'Contract ladder is shared with Sales. Fixed pay per your SMM offer.',
  rows:[
   L('A1','Hired, onboarded','gate','per offer','—',''),
   L('A2','Gate 2 months in a row','gate','—','$150',''),
   L('A3','+ 1st contract from social','gate','—','$200','bronze'),
   L('A4','2 contracts / quarter','1/qtr','—','$250','bronze'),
   L('A5','3 / quarter','2/qtr','—','$300','bronze'),
   G('A → B','Content on-brand & consistent · reach growth · clean tracking'),
   L('B1','4 / quarter','3/qtr','—','$1,500 + certificate','silver'),
   L('B2','5 / quarter','4/qtr','—','$400','silver'),
   L('B3','6 / quarter','5/qtr','—','$450','silver'),
   L('B4','7 / quarter','6/qtr','—','$500','silver'),
   L('B5','8 / quarter','7/qtr','—','$600','silver'),
   G('B → M','Your content drives contracts consistently (by source in CRM)'),
   L('M1','9 / quarter','8/qtr','—','$2,500','gold'),
   L('M2','10 / quarter','9/qtr','—','$700','gold'),
   L('M3','11 / quarter','10/qtr','—','$800','gold'),
   L('M4','12 / quarter','11/qtr','—','$900','gold'),
   L('M5','13 / quarter + grew a junior','12/qtr','—','$6,000 + M5 Club','platinum')
  ]},
 designer:{label:'Designer',metric:'Projects accepted with ≤2 revision rounds',gate:'On-time by stage · full docs · M5 material library',period:'Half-year',payhead:'Rate /project',
  rows:[
   L('A1','In the pool, onboarded to M5 standards','gate','$1,500','—',''),
   L('A2','1st project accepted with ≤2 revisions','gate','$1,575','$100','bronze'),
   L('A3','2 such projects / half-year','1/half','$1,650','$150','bronze'),
   L('A4','3 / half-year','2/half','$1,725','$200','bronze'),
   L('A5','4 / half-year','3/half','$1,800','$250','bronze'),
   G('A → B','3 projects in a row on time · client rating ≥9/10'),
   L('B1','5 / half-year','4/half','$1,900','$500 + certificate','silver'),
   L('B2','6 / half-year','5/half','$1,975','$200','silver'),
   L('B3','7 / half-year','6/half','$2,050','$250','silver'),
   L('B4','8 / half-year','7/half','$2,125','$300','silver'),
   L('B5','9 / half-year','8/half','$2,200','$350','silver'),
   G('B → M','Portfolio project brought a referral/contract · runs M5 material library'),
   L('M1','10 / half-year (whole company flow)','9/half','$2,300','$1,000','gold'),
   L('M2','11 / half-year','10/half','$2,375','$350','gold'),
   L('M3','12 / half-year','11/half','$2,450','$400','gold'),
   L('M4','13 / half-year','12/half','$2,525','$450','gold'),
   L('M5','14 / half-year + grew a junior','13/half','$2,600','$3,000 + M5 Club','platinum')
  ]},
 pm:{label:'Project Manager / Site Supervisor',metric:'Sites delivered with no rework, inspections passed first time',gate:'≥90% milestones on time · JobTread daily · change orders signed · 4-point shoot to Drive',period:'Half-year',payhead:'Fixed /mo',
  rows:[
   L('A1','Hired, onboarded (JobTread, HVHZ/NOA standards)','gate','$7,000','—',''),
   L('A2','1st site delivered with no rework','gate','$7,100','$150','bronze'),
   L('A3','2 such sites / half-year','1/half','$7,200','$200','bronze'),
   L('A4','3 / half-year','2/half','$7,300','$250','bronze'),
   L('A5','4 / half-year','3/half','$7,400','$300','bronze'),
   G('A → B','2 sites in a row: zero rework, inspections first-pass, margin ≥ estimate'),
   L('B1','5 / half-year','4/half','$7,800','$750 + certificate','silver'),
   L('B2','6 / half-year','5/half','$7,950','$300','silver'),
   L('B3','7 / half-year','6/half','$8,100','$400','silver'),
   L('B4','8 / half-year','7/half','$8,250','$500','silver'),
   L('B5','9 / half-year','8/half','$8,400','$600','silver'),
   G('B → M','Runs 3+ sites in parallel · subcontractor base ≥3 reliable crews per trade'),
   L('M1','10 / half-year','9/half','$8,800','$1,500','gold'),
   L('M2','11 / half-year','10/half','$9,000','$500','gold'),
   L('M3','12 / half-year','11/half','$9,200','$600','gold'),
   L('M4','13 / half-year','12/half','$9,400','$700','gold'),
   L('M5','14 / half-year + grew a junior','13/half','$9,600','$5,000 + M5 Club','platinum')
  ]}
};

var OFFSCALE={
 director:{label:'Director',head:'You’re off the ladder — you run it.',lines:[
   'Motivation: <b>30% of net profit per project</b> (not a level scale).',
   'You apply the A→B→M scale to <b>your team</b> (supervisors / PMs) and approve their moves with Alex.',
   'Your path: growing authority → <b>General Manager</b>.']},
 founder:{label:'Founder',head:'Owner — the scale is yours to run, not climb.',lines:[
   'You own the system and set the bar the whole team grows against.',
   'Your metals are the company’s: every teammate who hits Platinum «M5» is your win.']}
};

/* «За что платят» — вкладки по типам бонусов, per-role */
var PAY={
 smm:{fixed:'$2,000/mo retainer',for:'your monthly content volume',
   tabs:[
     {k:'💼 Base pay',rows:[
       ['Fixed retainer','$2,000/mo','Your guaranteed base for shipping the monthly content volume — see it in the next tab.']],
       note:'This is money you can count on every month. Everything else is on top.'},
     {k:'📋 What the base covers',rows:[
       ['Reels','16–20 /mo','Published to Instagram + TikTok + YouTube Shorts.'],
       ['Stories','daily','Instagram, every day.'],
       ['Posts','8–12 /mo','Instagram feed.'],
       ['Long videos','2 /mo','YouTube object tours / before-after.'],
       ['Shoots','4–8 /mo','On-site + office, 1–2 a week.']],
       note:'Ship the volume → full retainer. Do less without agreeing it first → retainer is pro-rated to what you shipped.'},
     {k:'📱 Channels',rows:[
       ['📸 Instagram','core · main','Reels + daily stories + feed. Most social leads come from here.'],
       ['🎵 TikTok','core · reach','The same Reels, edited native. Cheapest way to reach people who never heard of M5.'],
       ['▶️ YouTube','core · trust','Shorts + 2 long object tours a month + the podcast. Where a $200K client checks if you are real.'],
       ['📌 Pinterest','next','Every finished project as pins. Design searches keep sending traffic for years, not days.'],
       ['🏡 Houzz','next · high intent','Portfolio + reviews. This is where Miami homeowners actually shortlist contractors.'],
       ['📍 Google Business','next · local','Photos + reviews. "renovation near me" is the highest-intent search there is.'],
       ['👥 Facebook','next · Miami locals','Community groups + ad creative. Older, wealthier homeowners still live here.'],
       ['💼 LinkedIn','next · partners','Realtors, brokers, developers — the partner network that feeds Sales.']],
       note:'<b>Core</b> — Instagram · TikTok · YouTube. These three are what the $2,000 retainer covers today. <b>Next</b> — the growth map: we switch them on one at a time, and the retainer is revisited when we do, so new channels never mean silent extra work. Languages: EN is the main one, ES and RU where they fit the audience.'},
     {k:'💵 Bonuses that pay',rows:[
       ['Per lead','+$50','Every social lead that reaches a consultation.'],
       ['Per contract','+$150','Every signed contract that came from social — this is the real goal.']],
       note:'North star: turn content into clients. A lead is good, a signed contract is the win.'},
     {k:'🏆 Achievements',rows:[
       ['🔥 First viral Reel','+$100','A Reel crosses 100K views.'],
       ['📈 10K followers','+$150','Any one platform hits 10K.'],
       ['🚀 50K followers','+$300','Any one platform hits 50K.'],
       ['👑 100K followers','+$500','Any one platform hits 100K.'],
       ['🎙 Podcast launched','+$200','First 5 episodes live.'],
       ['🎯 Content closed a deal','+$200','A specific post/Reel is credited in a signed contract.'],
       ['🏅 3-month streak','+$150','Full content volume, no misses, 3 months running.']],
       note:'One-time badges + cash for building the audience that brings contracts. Earn a badge once — it is yours forever.'},
     {k:'📈 Level up',rows:[
       ['Retainer grows','$2,000 → $2,500 → $3,000','$2,500 when social gives 3+ contracts/quarter · $3,000 when social is the #1 client source.'],
       ['Metals','🥉 → 🥈 → 🥇 → 💎','Climb the A → B → M ladder below — each band is a metal you keep.']],
       note:'Views &amp; followers are a health check; contracts move your level. The ladder below tracks contracts from social.'}
   ]},
 sales:{fixed:'$4,500/mo + 2% commission',for:'closing contracts',
   tabs:[
     {k:'💼 Base pay',rows:[['Fixed','$4,500/mo','Your base salary. Grows with every level you climb.']],
       note:'Guaranteed monthly, before commission.'},
     {k:'💵 Commission',rows:[['On each contract','2.0% → 2.5%','A cut of every deal you close. The % rises as you move A → B → M.']],
       note:'Example: a $225K project at 2% = $4,500 on top of your base — per contract.'},
     {k:'🏆 Level bonus',rows:[['One-time each level','$150 … $6,000','A cash bonus every time you reach a new level, plus a metal you keep (🥉🥈🥇💎).']],
       note:'The bonus jumps at each band: entering B and M are the big ones.'},
     {k:'✅ To qualify',rows:[['Monthly gate','required','Reply to leads ≤15 min · 8+ consultations · Monday CRM 100% clean.']],
       note:'Miss the gate and the level does not count that month — discipline first.'}
   ]},
 designer:{fixed:'Rate per project',for:'projects accepted cleanly',
   tabs:[
     {k:'💼 Base pay',rows:[['Rate / project','$1,500 → $2,500','You are paid per accepted project. The rate grows with your level.']],note:'More level → higher rate on every project.'},
     {k:'🏆 Level bonus',rows:[['One-time each level','$100 … $2,500','A bonus each new level, plus a metal.']],note:''},
     {k:'✅ To qualify',rows:[['What moves your level','—','Projects accepted with ≤2 revision rounds.']],note:'Client change-orders do not count against you — the record in Monday decides.'}
   ]},
 pm:{fixed:'$7,000/mo',for:'sites delivered clean',
   tabs:[
     {k:'💼 Base pay',rows:[['Fixed','$7,000 → $9,400','Grows with your level.']],note:''},
     {k:'🏆 Level bonus',rows:[['One-time each level','$150 … $3,000','A bonus each new level, plus a metal.']],note:''},
     {k:'✅ To qualify',rows:[['What moves your level','—','Sites delivered with no rework and inspections passed first time.']],note:''}
   ]}
};

function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');}
function param(k){return (location.search.match(new RegExp('[?&]'+k+'=([^&]*)'))||[])[1]||'';}
function detectRole(){
  var r=param('role');
  if(!SCALES[r]&&!OFFSCALE[r]){ try{var m=JSON.parse(localStorage.getItem('m5_member')||'null'); if(m&&m.role)r=m.role;}catch(e){} }
  return r||'sales';
}
function myLevel(){ var l=param('lv')||''; if(!l){try{l=localStorage.getItem('m5_level')||'';}catch(e){}} return l||'A1'; }

var role=detectRole(), lvl=myLevel(), sc=SCALES[role], off=OFFSCALE[role];
var member=null; try{member=JSON.parse(localStorage.getItem('m5_member')||'null');}catch(e){}
var first=(member&&member.name)?esc(member.name.split(' ')[0]):'';

var head='<header><div class="wrap hbar">'+
  '<a class="logo" href="/">M<b>5</b><small>START</small></a>'+
  '<a class="back" href="/champion'+(role!=='founder'&&role!=='sales'?'':'')+'" onclick="history.back();return false">← Back to workspace</a>'+
'</div></header>';

var intro='<div class="wrap"><div class="hero"><h1>'+(first?first+'’s path.':'Your path.')+'</h1>'+
  '<div class="k">'+(sc?sc.label:(off?off.label:''))+' · Level A → B → M</div></div>';

/* metals legend + rules */
var legend='<div class="gcard grules"><div class="metals">'+
  Object.keys(METAL).map(function(k){return '<span class="ml"><b>'+METAL[k].e+'</b>'+METAL[k].n+'</span>';}).join('')+'</div>'+
  '<p><b>How it works.</b> Your level is your <b>current result</b>, not seniority — hold the bar to stay, beat it to rise, slip and you drop one. Two axes: a monthly <b>discipline gate</b> lets you play; your <b>role metric</b> moves the level. Three rewards each step: higher pay, a one-time bonus, and a metal you keep forever. The source of truth is Monday/CRM — Jin tallies it on the 1st, the director confirms, and a level-up posts to <b>M5 · Pulse</b> automatically.</p>'+
'</div>';

/* блок «за что платят» — вкладки */
var payBlock='';
if(PAY[role]){
  var p=PAY[role];
  payBlock='<div class="sec">How your pay works</div><div class="paywrap">'+
    '<div class="paylead"><span>Your base</span><b>'+p.fixed+'</b><em>for '+p.for+'</em></div>'+
    '<div class="paytabs">'+p.tabs.map(function(t,i){
      return '<button class="ptab'+(i===0?' on':'')+'" onclick="payTab('+i+')">'+t.k+'</button>';
    }).join('')+'</div>'+
    p.tabs.map(function(t,i){
      return '<div class="ppanel'+(i===0?' on':'')+'" id="ppanel'+i+'">'+
        '<div class="paytbl">'+t.rows.map(function(r){
          return '<div class="payrow"><div class="pk">'+r[0]+'</div><div class="pv">'+esc(r[1])+'</div><div class="pd">'+esc(r[2])+'</div></div>';
        }).join('')+'</div>'+
        (t.note?'<div class="paynote">'+t.note+'</div>':'')+'</div>';
    }).join('')+
  '</div>';
}
window.payTab=function(i){
  var tabs=document.querySelectorAll('.ptab'),pans=document.querySelectorAll('.ppanel');
  for(var j=0;j<tabs.length;j++){ tabs[j].classList.toggle('on',j===i); }
  for(var k=0;k<pans.length;k++){ pans[k].classList.toggle('on',k===i); }
};

var body='';
if(off){
  body='<div class="gcard goff"><div class="offh">'+off.head+'</div><ul>'+off.lines.map(function(x){return '<li>'+x+'</li>';}).join('')+'</ul></div>';
} else if(sc){
  var atGate=false;
  body='<div class="sec">'+esc(sc.label)+' · metric: '+esc(sc.metric)+'</div>'+
    '<div class="gate-note">Discipline gate (required every month): '+esc(sc.gate)+' · Period: '+sc.period+'</div>'+
    '<div class="ladder">';
  sc.rows.forEach(function(r){
    if(r.gate){ body+='<div class="grow"><span class="glock">🔒 Gate '+r.gate+'</span><span>'+esc(r.text)+'</span></div>'; return; }
    var me=(r.code===lvl);
    var band=r.code.charAt(0);
    body+='<div class="lrow band-'+band+(me?' me':'')+'">'+
      '<div class="lv">'+r.code+(me?'<span class="youp">You</span>':'')+'</div>'+
      '<div class="lmain"><div class="lup">'+esc(r.rise)+'</div>'+
        '<div class="lmeta">'+(sc.com?'<span>Comm '+r.com+'</span>':'')+(r.hold!=='gate'?'<span>Hold: '+r.hold+'</span>':'')+'</div></div>'+
      '<div class="lpay"><b>'+r.pay+'</b><span>'+sc.payhead+'</span></div>'+
      '<div class="lbon">'+(r.bonus&&r.bonus!=='—'?'<b>+'+r.bonus+'</b>':'—')+'</div>'+
      '<div class="lbadge">'+(r.badge?METAL[r.badge].e:'')+'</div>'+
    '</div>';
  });
  body+='</div>';
  if(sc.note) body+='<div class="gate-note" style="margin-top:10px">'+esc(sc.note)+'</div>';
}

document.getElementById('app').innerHTML=head+intro+legend+payBlock+body+
  '<footer>M5 Interior Design &amp; Build · Miami · Your rating path to Platinum «M5»</footer></div>';
