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
   G('B → M','Your content drives contracts consistently (by source in CRM)'),
   L('M1','9 / quarter','8/qtr','—','$2,500','gold'),
   L('M2','10 / quarter','9/qtr','—','$700','gold'),
   L('M3','11 / quarter + grew a junior','10/qtr','—','$2,500 + M5 Club','platinum')
  ]},
 designer:{label:'Designer',metric:'Projects accepted with ≤2 revision rounds',gate:'On-time by stage · full docs · M5 material library',period:'Half-year',payhead:'Rate /project',
  rows:[
   L('A1','In the pool, onboarded to M5 standards','gate','$1,500','—',''),
   L('A2','1st project accepted with ≤2 revisions','gate','$1,600','$100','bronze'),
   L('A3','2 such projects / half-year','1/half','$1,700','$150','bronze'),
   G('A → B','3 projects in a row on time · client rating ≥9/10'),
   L('B1','3 / half-year','2/half','$1,900','$500 + certificate','silver'),
   L('B2','4 / half-year','3/half','$2,000','$200','silver'),
   L('B3','5 / half-year','4/half','$2,100','$250','silver'),
   G('B → M','Portfolio project brought a referral/contract · runs M5 material library'),
   L('M1','6 / half-year (whole company flow)','5/half','$2,300','$1,000','gold'),
   L('M2','7 / half-year','6/half','$2,400','$350','gold'),
   L('M3','8 / half-year + grew a junior','7/half','$2,500','$2,500 + M5 Club','platinum')
  ]},
 pm:{label:'Project Manager / Site Supervisor',metric:'Sites delivered with no rework, inspections passed first time',gate:'≥90% milestones on time · JobTread daily · change orders signed · 4-point shoot to Drive',period:'Half-year',payhead:'Fixed /mo',
  rows:[
   L('A1','Hired, onboarded (JobTread, HVHZ/NOA standards)','gate','$7,000','—',''),
   L('A2','1st site delivered with no rework','gate','$7,150','$150','bronze'),
   L('A3','2 such sites / half-year','1/half','$7,300','$200','bronze'),
   G('A → B','2 sites in a row: zero rework, inspections first-pass, margin ≥ estimate'),
   L('B1','3 / half-year','2/half','$7,800','$750 + certificate','silver'),
   L('B2','4 / half-year','3/half','$8,000','$300','silver'),
   L('B3','5 / half-year','4/half','$8,200','$400','silver'),
   G('B → M','Runs 3+ sites in parallel · subcontractor base ≥3 reliable crews per trade'),
   L('M1','6 / half-year','5/half','$8,800','$1,500','gold'),
   L('M2','7 / half-year','6/half','$9,100','$500','gold'),
   L('M3','8 / half-year + grew a junior','7/half','$9,400','$3,000 + M5 Club','platinum')
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

document.getElementById('app').innerHTML=head+intro+legend+body+
  '<footer>M5 Interior Design &amp; Build · Miami · Your rating path to Platinum «M5»</footer></div>';
