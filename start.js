/* M5 Start — общий движок кабинетов. Один файл на все роли (/champion*).
   Ссылки вставляются ТОЛЬКО в LINKS — пустая строка = плитка в режиме Soon. */

var LINKS={
  ga4:'https://analytics.google.com/analytics/web/',
  clarity:'https://clarity.microsoft.com/projects/view/xpd5kfm31r/dashboard',
  gcal:'https://calendar.google.com/',
  org:'/org/',
  stock:'https://m5miami.monday.com/boards/5100794770',
  onb:'/onboarding/', // страница сама узнаёт человека по рабочей почте

  drive:'https://drive.google.com/drive/folders/1I41acYvpvpHgkojOxs5sznNkVPExixsm', // «M5 · Company Drive»
  telegram:'https://t.me/+x4q86H688uNiODI8',  // группа «M5 Team»
  monday:'https://m5miami.monday.com/',
  jobtread:'https://app.jobtread.com/', // операционное ядро: лиды→сметы→производство
  quickbooks:'',
  heygen:'',
  openphone:'',
  houzz:'https://pro.houzz.com/', // маркетинг-канал: профиль+отзывы (софт-тариф НЕ берём)
  playbook:'',
  video:'/media/m5_intro.mp4' // бренд-интро (Remotion, 24с)
};

/* фирменные логотипы сервисов (SVG со своими цветами) */
var LOGOS={
  monday:'<svg viewBox="0 0 46 46"><rect width="46" height="46" rx="11" fill="#fff"/><circle cx="13" cy="24" r="6" fill="#ff3d57"/><circle cx="23" cy="24" r="6" fill="#ffcb00"/><circle cx="33" cy="24" r="6" fill="#00ca72"/></svg>',
  drive:'<svg viewBox="0 0 46 46"><rect width="46" height="46" rx="11" fill="#fff"/><g transform="translate(8,10) scale(0.345)"><path fill="#0066da" d="M6.6 66.9l3.8 6.6c.8 1.4 2 2.5 3.4 3.3L27.4 53.5H0c0 1.6.4 3.2 1.2 4.6z"/><path fill="#00ac47" d="M43.6 25L30 1.5c-1.4.8-2.6 1.9-3.4 3.3L1.2 48.7C.4 50.1 0 51.7 0 53.5h27.4z"/><path fill="#ea4335" d="M73.6 76.8c1.4-.8 2.6-1.9 3.4-3.3l1.6-2.7 7.6-13.2c.8-1.4 1.2-3 1.2-4.6H59.4l5.8 11.4z"/><path fill="#00832d" d="M43.6 25L57.2 1.5c-1.4-.8-3-1.2-4.6-1.2H34.6c-1.6 0-3.2.5-4.6 1.2z"/><path fill="#2684fc" d="M59.4 53.5H27.4L13.8 76.8c1.4.8 3 1.2 4.6 1.2h50.4c1.6 0 3.2-.5 4.6-1.2z"/><path fill="#ffba00" d="M73.4 26.5L60.7 4.8c-.8-1.4-2-2.5-3.4-3.3L43.6 25l15.8 28.5h27.2c0-1.8-.4-3.4-1.2-4.6z"/></g></svg>',
  telegram:'<svg viewBox="0 0 46 46"><rect width="46" height="46" rx="11" fill="#229ED9"/><path fill="#fff" d="M9.8 22.2l23-8.9c1.1-.4 2 .3 1.6 1.9l-3.9 18.4c-.3 1.2-1 1.5-2 .9l-5.6-4.1-2.7 2.6c-.3.3-.6.5-1.1.5l.4-5.8L30.4 17c.5-.4-.1-.7-.8-.3L16 25.1l-5.7-1.8c-1.2-.4-1.2-1.2.5-1.1z"/></svg>',
  gcal:'<svg viewBox="0 0 46 46"><rect width="46" height="46" rx="11" fill="#fff"/><rect x="11" y="12" width="24" height="23" rx="3" fill="#fff" stroke="#4285F4" stroke-width="2.4"/><text x="23" y="30" font-family="Arial,Helvetica,sans-serif" font-size="12.5" font-weight="700" fill="#4285F4" text-anchor="middle">31</text></svg>',
  ga4:'<svg viewBox="0 0 46 46"><rect width="46" height="46" rx="11" fill="#fff"/><rect x="12" y="24" width="5.5" height="10" rx="2.7" fill="#E37400"/><rect x="20.2" y="17" width="5.5" height="17" rx="2.7" fill="#E37400"/><rect x="28.4" y="11" width="5.5" height="23" rx="2.7" fill="#F9AB00"/></svg>',
  clarity:'<svg viewBox="0 0 46 46"><rect width="46" height="46" rx="11" fill="#1B6EC2"/><circle cx="23" cy="23" r="10" fill="none" stroke="#fff" stroke-width="3"/><circle cx="23" cy="23" r="3.4" fill="#fff"/></svg>',
  quickbooks:'<svg viewBox="0 0 46 46"><rect width="46" height="46" rx="11" fill="#2CA01C"/><circle cx="23" cy="23" r="12" fill="none" stroke="#fff" stroke-width="3.4"/><rect x="21.3" y="13" width="3.4" height="20" fill="#fff"/></svg>',
  jobtread:'<svg viewBox="0 0 46 46"><rect width="46" height="46" rx="11" fill="#F26722"/><text x="23" y="30" font-family="Arial" font-size="16" font-weight="800" fill="#fff" text-anchor="middle">JT</text></svg>',
  heygen:'<svg viewBox="0 0 46 46"><rect width="46" height="46" rx="11" fill="#5B3DF5"/><text x="23" y="31" font-family="Arial" font-size="18" font-weight="800" fill="#fff" text-anchor="middle">H</text></svg>',
  openphone:'<svg viewBox="0 0 46 46"><rect width="46" height="46" rx="11" fill="#6B5FFF"/><path fill="#fff" d="M19 14c-1 0-1.9.7-2.1 1.7l-.9 3.7c-.2.8.1 1.5.7 2l2.1 1.7c-.2 1.4 2.3 3.9 3.7 3.7l1.7 2.1c.5.6 1.2.9 2 .7l3.7-.9c1-.2 1.7-1.1 1.7-2.1v-2.7c0-.9-.6-1.6-1.5-1.8l-2.4-.4c-.6-.1-1.1.1-1.5.5l-.8.8c-1.6-.9-2.9-2.2-3.8-3.8l.8-.8c.4-.4.6-.9.5-1.5l-.4-2.4c-.2-.9-.9-1.5-1.8-1.5z"/></svg>',
  houzz:'<svg viewBox="0 0 46 46"><rect width="46" height="46" rx="11" fill="#4DBC15"/><path fill="#fff" d="M23 12l-8 4.6v13.4h5.2v-6.2h5.6v6.2H31V16.6z"/></svg>'
};
var BC={monday:'#ff3d57',drive:'#00ac47',telegram:'#229ED9',gcal:'#4285F4',ga4:'#F9AB00',clarity:'#1B6EC2',quickbooks:'#2CA01C',jobtread:'#F26722',heygen:'#5B3DF5',openphone:'#6B5FFF',houzz:'#4DBC15'};

var ROLES={
  founder:{label:'Founder',sub:'Your command center',
    chips:['Leads this week','Site analytics','What needs my decision?'],
    tiles:[
      {ic:'🚀',k:'Start here',t:'Setup checklist',link:'onb'},
      {b:'jobtread',k:'CRM & Production',t:'JobTread',link:'jobtread'},
      {b:'ga4',k:'Analytics',t:'GA4 · Site',link:'ga4'},
      {b:'clarity',k:'Sessions',t:'MS Clarity',link:'clarity'},
      {b:'quickbooks',k:'Finance',t:'QuickBooks',link:'quickbooks'},
      {ic:'👥',k:'People',t:'Org structure',link:'org'},
      {b:'drive',k:'Drive',t:'Company docs',link:'drive'},
      {b:'telegram',k:'M5 Pulse',t:'Team channel',link:'telegram'},
      {b:'gcal',k:'Calendar',t:'Meetings & bookings',link:'gcal'}]},
  director:{label:'Director',sub:'Your command center',
    chips:['Margin & pipeline','Stock levels','This week'],
    tiles:[
      {ic:'🚀',k:'Start here',t:'Setup checklist',link:'onb'},
      {b:'jobtread',k:'CRM & Production',t:'JobTread',link:'jobtread'},
      {ic:'📄',k:'Permits',t:'Miami-Dade'},
      {ic:'👥',k:'People',t:'Org structure',link:'org'},
      {b:'quickbooks',k:'Finance',t:'QuickBooks',link:'quickbooks'},
      {b:'telegram',k:'M5 Pulse',t:'Team channel',link:'telegram'},
      {b:'drive',k:'Drive',t:'Company docs',link:'drive'}]},
  smm:{label:'SMM',sub:'Your SMM & content workspace',
    chips:['My score this week','Is this post on-brand?','Take the onboarding quiz'],
    tiles:[
      {ic:'🚀',k:'Start here',t:'Setup checklist',link:'onb'},
      {ic:'🗓',k:'Scheduler',t:'Auto-posting'},
      {b:'heygen',k:'HeyGen',t:'AI avatars',link:'heygen'},
      {b:'telegram',k:'M5 Pulse',t:'Team channel',link:'telegram'},
      {ic:'📸',k:'Channels',t:'IG · TikTok · YT'},
      {b:'drive',k:'Drive',t:'Assets & docs',link:'drive'},
      {ic:'📖',k:'Playbook',t:'Brand & rules',link:'playbook'},
      {ic:'👥',k:'Team',t:'Who is who',link:'org'},
      {ic:'📈',k:'My growth',t:'Level A → B → M'}]},
  sales:{label:'Sales',sub:'Your sales workspace',
    chips:['My pipeline','Today’s leads','Objection scripts'],
    tiles:[
      {ic:'🚀',k:'Start here',t:'Setup checklist',link:'onb'},
      {b:'jobtread',k:'CRM',t:'JobTread',link:'jobtread'},
      {b:'openphone',k:'Calls',t:'OpenPhone',link:'openphone'},
      {b:'gcal',k:'Calendar',t:'Consultations',link:'gcal'},
      {ic:'🧰',k:'Sales Kit',t:'Scripts & pitch'},
      {ic:'🤝',k:'Partners',t:'Realtors & brokers'},
      {b:'telegram',k:'M5 Pulse',t:'Team channel',link:'telegram'},
      {b:'drive',k:'Drive',t:'Docs',link:'drive'},
      {ic:'👥',k:'Team',t:'Who is who',link:'org'},
      {ic:'📈',k:'My growth',t:'Level A → B → M'}]},
  designer:{label:'Designer',sub:'Your design workspace',
    chips:['My projects','Material library','Brand guide'],
    tiles:[
      {ic:'🚀',k:'Start here',t:'Setup checklist',link:'onb'},
      {b:'jobtread',k:'Projects',t:'JobTread',link:'jobtread'},
      {ic:'🎨',k:'Design',t:'3D & tools'},
      {b:'drive',k:'Drive',t:'Assets & docs',link:'drive'},
      {b:'houzz',k:'Houzz',t:'Pro profile',link:'houzz'},
      {b:'telegram',k:'M5 Pulse',t:'Team channel',link:'telegram'},
      {ic:'📖',k:'Playbook',t:'Brand & rules',link:'playbook'},
      {b:'gcal',k:'Calendar',t:'Meetings',link:'gcal'},
      {ic:'👥',k:'Team',t:'Who is who',link:'org'},
      {ic:'📈',k:'My growth',t:'Level A → B → M'}]},
  pm:{label:'Project Manager',sub:'Your production workspace',
    chips:['My projects','Today’s site tasks','Change orders'],
    tiles:[
      {ic:'🚀',k:'Start here',t:'Setup checklist',link:'onb'},
      {b:'jobtread',k:'Production',t:'JobTread',link:'jobtread'},
      {ic:'📐',k:'Supervision',t:'Site QC'},
      {ic:'📄',k:'Permits',t:'Miami-Dade'},
      {b:'drive',k:'Drive',t:'Docs & photos',link:'drive'},
      {b:'telegram',k:'M5 Pulse',t:'Team channel',link:'telegram'},
      {b:'gcal',k:'Calendar',t:'Meetings',link:'gcal'},
      {ic:'👥',k:'Team',t:'Who is who',link:'org'},
      {ic:'📈',k:'My growth',t:'Level A → B → M'}]},
  team:{label:'Team',sub:'Your workspace',
    chips:['My tasks','Knowledge base','Ask anything'],
    tiles:[
      {b:'jobtread',k:'Projects',t:'JobTread',link:'jobtread'},
      {b:'drive',k:'Drive',t:'Knowledge base',link:'drive'},
      {b:'telegram',k:'M5 Pulse',t:'Team channel',link:'telegram'},
      {ic:'✦',k:'AI Agent',t:'M5 assistant'},
      {b:'gcal',k:'Calendar',t:'Meetings',link:'gcal'},
      {ic:'📖',k:'Playbook',t:'Brand & rules',link:'playbook'},
      {ic:'👥',k:'Team',t:'Who is who',link:'org'}]}
};

function detectRole(){
  var m=location.pathname.toLowerCase().match(/champion([a-z]+)/); var r=m?m[1]:'';
  if(!ROLES[r]){var q=(location.search.match(/[?&]role=([^&]*)/)||[])[1]||''; if(ROLES[q])r=q;}
  if(!ROLES[r]){try{var mm=JSON.parse(localStorage.getItem('m5_member')||'null'); if(mm&&ROLES[mm.role])r=mm.role;}catch(e){}}
  return ROLES[r]?r:'team';
}

function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');}

var role=detectRole(), cfg=ROLES[role];
var member=null; try{member=JSON.parse(localStorage.getItem('m5_member')||'null');}catch(e){}

var videoUrl=LINKS.video;
/* Любая ошибка рендера без try/catch = молча пустая страница на телефоне.
   Ловим и показываем честный fallback со ссылкой на вход. */
try {
document.getElementById('app').innerHTML=
'<header><div class="wrap hbar">'+
  '<a class="logo" href="/champion'+role+'">M<b>5</b><small>START</small></a>'+
  '<div class="hr"><span class="priv"><i></i><span>Private · '+cfg.label+'</span></span>'+
  '<a class="signout" href="/" style="text-decoration:none">m5miami.com</a>'+
  '<span class="signout" onclick="signout()">Sign out</span></div>'+
'</div></header>'+
'<div class="wrap">'+
  '<div class="hero"><h1>'+((member&&typeof member.name==='string'&&member.name)?('Welcome, '+esc(member.name.split(' ')[0])+'.'):'Welcome to M5.')+'</h1>'+
  '<div class="k">'+cfg.sub+'</div></div>'+
  '<div class="top">'+
    '<div class="agent">'+
      '<div class="agent-h"><div class="agent-ic">✦</div>'+
      '<div><b>Jin — ask me anything</b><span>Your AI teammate · trained on M5 brand &amp; rules</span></div></div>'+
      '<div class="chips">'+cfg.chips.map(function(c){return '<span class="chip" onclick="askAgent(this.textContent)">'+c+'</span>';}).join('')+'</div>'+
      '<div class="ask"><input type="text" id="askInput" placeholder="Ask Jin..." onkeydown="if(event.key===\'Enter\')askAgent()">'+
      '<button onclick="askAgent()" aria-label="Send">→</button></div>'+
      '<div class="jin-reply" id="jinReply"></div>'+
    '</div>'+
    '<a class="video" href="#" onclick="return openWelcome()" style="background-image:linear-gradient(180deg,rgba(20,18,15,0),rgba(20,18,15,.72)),url(\'/media/welcome_anime2.jpg\');background-size:cover;background-position:center 30%">'+
      '<div class="play">▶</div>'+
      '<div class="video-cap"><b>Welcome from Jin</b><span>Your AI teammate · ~30 sec</span></div>'+
    '</a>'+
  '</div>'+
  '<div class="sec">Daily work</div>'+
  '<div class="grid">'+cfg.tiles.map(function(t){
    var icon=t.b?'<div class="ic brand">'+LOGOS[t.b]+'</div>':'<div class="ic">'+(t.ic||'•')+'</div>';
    var col=t.b?BC[t.b]:'#E6DECB';
    var url=t.link?LINKS[t.link]:'';
    if(t.k==='My growth') url='/growth/?role='+role;
    var ext=url&&url.charAt(0)!=='/';
    var open=url?('href="'+url+'"'+(ext?' target="_blank" rel="noopener"':'')):'href="#" onclick="return soon()"';
    var badge=url?'<span class="live">Live</span>':'<span class="soon">Soon</span>';
    return '<a class="tile" style="--bc:'+col+'" '+open+'>'+icon+
      '<div class="k2">'+t.k+'</div><b>'+t.t+' <i>→</i></b>'+badge+'</a>';
  }).join('')+'</div>'+
  '<div id="lessonSec"></div>'+
  '<div id="stackSec"></div>'+
'</div>'+
'<footer>M5 Interior Design &amp; Build · Miami · Private team hub</footer>'+
'<div class="wv" id="wv" onclick="if(event.target===this)closeWelcome()">'+
  '<div class="wv-box">'+
    '<button class="wv-x" onclick="closeWelcome()" aria-label="Close">✕</button>'+
    '<div class="wv-stage"><div class="wv-img" id="wvImg"></div><video class="wv-vid" id="wvVid" muted playsinline preload="none"></video><div class="wv-cap" id="wvCap"></div></div>'+
    '<audio id="wvMusic" loop preload="auto"></audio>'+
    '<audio id="wvVo" preload="none"></audio>'+
  '</div>'+
'</div>';

} catch(e) {
  document.getElementById('app').innerHTML =
    '<div style="max-width:420px;margin:120px auto;padding:24px;background:#fff;border-radius:14px;'+
    'font-family:-apple-system,sans-serif;text-align:center;color:#20242E">'+
    '<b>Something didn’t load.</b><br><br>'+
    '<a href="/welcomehero/" style="color:#96703B;text-decoration:underline">Tap here to sign in again</a>'+
    '<br><br><span style="font-size:12px;color:#6E6656">If it repeats — open m5miami.com in Safari.</span></div>';
}

var WV_MUSIC='';/* URL героического трека (Solo-Leveling вайб) — вставить mp3, зациклится */
/* Приветствие Jin: 5 сгенерированных сцен (Higgsfield Seedance 2.0, 23.07),
   субтитр держится всю сцену, клипы идут подряд. */
var WVSCENES=[
 {v:'/media/jin2_s1.mp4', a:'/media/jin2_v1.mp3', c:'Hey, welcome to <b>M5</b>! I’m <b>Jin</b> — your AI teammate. Great to have you with us!'},
 {v:'/media/jin2_s2.mp4', a:'/media/jin2_v2.mp3', c:'I’m powered by <b>artificial intelligence</b> — ask me anything, anytime. I’m here to help you.'},
 {v:'/media/jin2_s3.mp4', a:'/media/jin2_v3.mp3', c:'We’re a tech-first company: <b>JobTread</b> runs our projects, <b>Telegram</b> keeps us in sync, everything lives in <b>Google Drive</b>.'},
 {v:'/media/jin2_s4.mp4', a:'/media/jin2_v4.mp3', c:'Our mission is bold — we build the most <b>luxurious villas in Miami</b>.'},
 {v:'/media/jin2_s5.mp4', a:'/media/jin2_v5.mp3', c:'And you’re part of our <b>superhero team</b>. Let’s build the future together! 🚀'}
];
var wvIdx=0;
function wvPlay(i){
  var vid=document.getElementById('wvVid'),cap=document.getElementById('wvCap'),vo=document.getElementById('wvVo');
  if(i>=WVSCENES.length){ setTimeout(closeWelcome,600); return; }
  wvIdx=i;
  cap.innerHTML='<span>'+WVSCENES[i].c+'</span>';
  /* Видео зациклено внутри сцены; сцену переключает конец реплики Jin.
     Если голос не загрузился — переключаемся по концу видео. */
  vid.loop=true; vid.onended=null;
  vid.src=WVSCENES[i].v;
  vid.onerror=function(){ };
  var advanced=false;
  function next(){ if(advanced)return; advanced=true; wvPlay(i+1); }
  vo.onended=next;
  vo.onerror=function(){ vid.loop=false; vid.onended=next; };
  vo.src=WVSCENES[i].a;
  var p=vid.play(); if(p&&p.catch)p.catch(function(){});
  var q=vo.play(); if(q&&q.catch)q.catch(function(){ vid.loop=false; vid.onended=next; });
}
function openWelcome(){
  var m=document.getElementById('wv'),mus=document.getElementById('wvMusic');
  m.classList.add('on');
  if(WV_MUSIC){ try{ if(mus.src!==WV_MUSIC)mus.src=WV_MUSIC; mus.currentTime=0; mus.volume=0.6; mus.play(); }catch(e){} }
  wvPlay(0);
  return false;
}
function closeWelcome(){
  var m=document.getElementById('wv'),vid=document.getElementById('wvVid'),mus=document.getElementById('wvMusic'),vo=document.getElementById('wvVo');
  m.classList.remove('on');
  try{ vid.pause(); vid.removeAttribute('src'); vid.load(); }catch(e){}
  try{ vo.pause(); vo.removeAttribute('src'); vo.load(); }catch(e){}
  try{ mus.pause(); mus.currentTime=0; }catch(e){}
}
document.addEventListener('keydown',function(e){ if(e.key==='Escape') closeWelcome(); });

function soon(){ alert('This link is being set up — it will open the live tool soon.'); return false; }
var JIN_HOOK='https://script.google.com/macros/s/AKfycbw_Hwj1am3WSzgrTZTdnH_OWEmzUuC0r2MDouOWvd_Jv-DiawgG1BvpMM3QwO0XeM54yw/exec';
function askAgent(q){
  var inp=document.getElementById('askInput'); q=q||(inp?inp.value.trim():''); if(!q)return;
  if(inp&&!arguments.length)inp.value='';
  var box=document.getElementById('jinReply');
  box.className='jin-reply on';
  if(!window.fetch){ box.innerHTML='Open m5miami.com in Safari to chat with Jin.'; return; }
  box.innerHTML='<span class="jin-typing">Jin is thinking…</span>';
  /* fetch с credentials:'omit' — обязательно: script-тег шлёт Google-cookies,
     из-за чего залогиненный браузер редиректится на /macros/u/N/… и ловит 503.
     Без cookies запрос идёт как анонимный (как curl) и работает всегда. */
  var ctl = ('AbortController' in window) ? new AbortController() : null;
  var to = setTimeout(function(){ if (ctl) ctl.abort(); }, 60000);
  fetch(JIN_HOOK+'?jin=1&role='+encodeURIComponent(role)+'&cb=cb&q='+encodeURIComponent(q),
        {credentials:'omit', signal: ctl ? ctl.signal : undefined})
    .then(function(res){ return res.text(); })
    .then(function(t){
      clearTimeout(to);
      var m = t.match(/^\s*cb\(([\s\S]*)\)\s*;?\s*$/);
      var r = null; try { r = JSON.parse(m ? m[1] : t); } catch(e) {}
      if (r && r.a) box.innerHTML = '<b>Jin</b> ' + esc(r.a).replace(/\n/g,'<br>');
      else box.innerHTML = 'Jin is offline for a second — try again.';
    })
    .catch(function(){
      clearTimeout(to);
      box.innerHTML = 'Jin is offline for a second — try again.';
    });
}
function signout(){ try{localStorage.removeItem('m5_member');localStorage.removeItem('m5_onb_who');}catch(e){}; location.href='/welcomehero'; }

/* Урок «JobTread — как работать». Виден ролям, живущим в производстве:
   director (Вадим — главный юзер), founder, pm. Свёрнут по умолчанию. */
var LESSON=[
 ['Что это','JobTread — наша главная рабочая система: все клиенты, сметы, стройка и счета живут здесь. Открывается плиткой «JobTread» выше или на app.jobtread.com — вход по рабочей почте @m5miami.com (приглашение уже в твоём ящике).'],
 ['Лиды приходят сами','Каждая заявка с сайта m5miami.com автоматически становится клиентом в Customers — руками ничего переносить не надо. Открой клиента «DEMO · Maria Gonzalez» — это учебный пример, на нём виден весь путь лида.'],
 ['Воронка = поле Status у Job','Новый лид → Связались → Консультация назначена → Смета отправлена → Выиграно → В производстве → Завершён (или Проиграно). Поменял статус сразу после действия — и вся отчётность компании считается сама. Это главная привычка.'],
 ['Клиент руками','Позвонили напрямую? Customers → New: имя и телефон → Location (адрес объекта) → Job. Дальше тот же путь по воронке.'],
 ['Смета','Внутри Job → Estimates: конструктор позиций с ценами и наценкой, клиент получает красивое предложение и подписывает онлайн. Шаблоны под 5 услуг M5 соберём вместе на онбординге.'],
 ['Мобильное приложение','JobTread — веб-приложение, в магазинах его нет. Открой app.jobtread.com на телефоне: iPhone — Safari → Поделиться → «На экран “Домой”», Android — Chrome → меню → «Добавить на гл. экран». Правило M5 — «4 кадра каждый визит»: до / процесс / после / деталь, фото в Daily Logs прямо с объекта.'],
 ['Обучение бесплатно','У JobTread бесплатный онбординг-звонок и живой чат поддержки — бронируй, они настраивают систему вместе с тобой. Вопросы — Джину в чате выше или Алексу.']
];
(function(){
  try{
    if(role!=='director'&&role!=='founder'&&role!=='pm'&&role!=='sales')return;
    var el=document.getElementById('lessonSec'); if(!el)return;
    var opened=false; try{opened=localStorage.getItem('m5_lesson_open')==='1';}catch(e){}
    var html='<details class="stackbox"'+(opened?' open':'')+'><summary><span>🎓 JobTread — как работать</span><span class="stk-hint">урок · '+LESSON.length+' шагов · нажми</span></summary><div class="stack">';
    for(var i=0;i<LESSON.length;i++){
      html+='<div class="stk-g">Шаг '+(i+1)+' · '+LESSON[i][0]+'</div><div class="lsn">'+LESSON[i][1]+'</div>';
    }
    el.innerHTML=html+'</div></details>';
    var box=el.querySelector('details.stackbox');
    if(box)box.addEventListener('toggle',function(){ try{localStorage.setItem('m5_lesson_open',box.open?'1':'0');}catch(e){} });
  }catch(e){}
})();

/* «My stack» — личная карта сервисов компании. Видна ТОЛЬКО Алексу:
   почта из m5_member сверяется по SHA-256-хэшу, адресов в коде нет. */
var STACK=[
 ['AI & Dev','Claude Code','движок всего: сайт, Jin, автоматика (терминал + VS Code)','https://claude.ai/code'],
 ['AI & Dev','Claude Console','API-ключ Jin, лимиты трат','https://platform.claude.com/'],
 ['AI & Dev','Higgsfield AI','видео и фото-фабрика (план PLUS, MCP подключён)','https://higgsfield.ai/'],
 ['AI & Dev','Облачные рутины','Health Check · Daily Brief · Пульс · Scout','https://claude.ai/code/routines'],
 ['Операционка','JobTread','операционное ядро: лиды → сметы → производство → счета','https://app.jobtread.com/'],
 ['Операционка','Monday CRM','⚠️ отключаем — кабинеты уже без него; остался только API-дубль лидов как страховка','https://m5miami.monday.com/'],
 ['Операционка','Company Drive','все файлы, фото, документы','https://drive.google.com/drive/folders/1I41acYvpvpHgkojOxs5sznNkVPExixsm'],
 ['Операционка','Google Admin','почты @m5miami.com, сброс паролей команде','https://admin.google.com/'],
 ['Операционка','Apps Script «M5 Hub»','автоматика: лиды→TG, SLA, склад, бэкенд Jin','https://script.google.com/u/2/home/projects/1TCKRgl1AKm6-9gyU3WHZpkHWsJRbkgyUkxiUiMvJYJq4p1m9_bv1jP-j/edit'],
 ['Операционка','Google Cloud «m5-site»','вход через Google на сайте (OAuth)','https://console.cloud.google.com/auth/overview?project=m5-site'],
 ['Сайт & аналитика','Houzz','маркетинг-канал: профиль, портфолио, отзывы; реклама — позже','https://pro.houzz.com/'],
 ['Сайт & аналитика','GitHub','код сайта (m5miami-site) + бэкап (M5-Dashbord)','https://github.com/softoleksii5'],
 ['Сайт & аналитика','Porkbun','домен m5miami.com, DNS, автопродление','https://porkbun.com/'],
 ['Сайт & аналитика','GA4','сколько людей и откуда','https://analytics.google.com/analytics/web/'],
 ['Сайт & аналитика','MS Clarity','записи сессий, тепловые карты, rage clicks','https://clarity.microsoft.com/projects/view/xpd5kfm31r/dashboard'],
 ['Связь','Telegram-бот @m5miami_bot','рассылки; группы «M5 Team» и «M5 Partners»','https://t.me/m5miami_bot'],
 ['Связь','Gmail','рабочая почта alex@m5miami.com','https://mail.google.com/']
];

/* Roadmap подключений — что и КОГДА включаем дальше (решение 24.07 после анкеты JobTread).
   Триггер → сервис → зачем. Видно только Алексу, обновляется вместе с My Stack. */
var ROADMAP=[
 ['Сентябрь · LLC + банковский счёт открыты','QuickBooks Online + bookkeeper','бухгалтерия; сразу включаем нативный синк JobTread↔QBO — счета и платежи улетают сами'],
 ['Онбординг-звонок JobTread (ближайшие недели)','Stripe в JobTread','депозиты и milestone-платежи клиентов картой/ACH прямо из сметы'],
 ['Первая W-2 зарплата Вадима (~октябрь)','Gusto','payroll: зарплаты и зарплатные налоги, ~$40/мес + $6/чел'],
 ['Первые закупки материалов','Home Depot Pro Xtra','скидки на объём + чеки закупок автоматом в job costing'],
 ['Первый завершённый проект','Движок отзывов: сначала свой (Jin), не взлетит — Nicejob ~$75/мес','отзывы Google Business / Houzz на автомате'],
 ['Первый замер помещения','Rendr — попробовать','3D-скан телефоном → планы и замеры за минуты вместо рулетки'],
 ['3+ параллельных объекта','CompanyCam — если Daily Logs станет мало','фото-документация объектов; пока хватает JobTread Daily Logs'],
 ['Первый живой лид прошёл по воронке JobTread','—: отключаем Monday','снять двойную запись, закрыть аккаунт — экономия и чистота'],
 ['Запуск рекламы (по плану августа)','Houzz реклама ~$499/мес — решаем отдельно','платный поток лидов; профиль и портфолио должны быть готовы раньше']
];
(function(){
  try{
    var m=JSON.parse(localStorage.getItem('m5_member')||'null');
    if(!m||!m.email||!window.crypto||!crypto.subtle)return;
    crypto.subtle.digest('SHA-256',new TextEncoder().encode(String(m.email).trim().toLowerCase())).then(function(buf){
      var a=new Uint8Array(buf),h='';for(var i=0;i<a.length;i++)h+=('0'+a[i].toString(16)).slice(-2);
      if(h!=='9ee4c44ded143508a8f6b70a94f34606ac5f7f95ac32211472131b694964ef47')return;
      var el=document.getElementById('stackSec'); if(!el)return;
      var groups=[],seen={};
      for(var i=0;i<STACK.length;i++){ if(!seen[STACK[i][0]]){seen[STACK[i][0]]=1;groups.push(STACK[i][0]);} }
      /* Свёрнут по умолчанию: клик по шапке разворачивает. Состояние помнится
         в localStorage, чтобы не сворачивалось при каждом заходе. */
      var opened=false, opened2=false; try{opened=localStorage.getItem('m5_stack_open')==='1'; opened2=localStorage.getItem('m5_roadmap_open')==='1';}catch(e){}
      var html='<details class="stackbox"'+(opened?' open':'')+'><summary><span>My stack · только для тебя</span><span class="stk-hint">'+STACK.length+' сервисов · нажми</span></summary><div class="stack">';
      for(var g=0;g<groups.length;g++){
        html+='<div class="stk-g">'+groups[g]+'</div>';
        for(var j=0;j<STACK.length;j++){ if(STACK[j][0]!==groups[g])continue;
          html+='<a class="stk" href="'+STACK[j][3]+'" target="_blank" rel="noopener"><b>'+STACK[j][1]+'</b><span>'+STACK[j][2]+'</span></a>';
        }
      }
      var rm='<details class="stackbox"'+(opened2?' open':'')+'><summary><span>🔌 Что подключаем дальше · план</span><span class="stk-hint">'+ROADMAP.length+' шагов · нажми</span></summary><div class="stack">';
      for(var r=0;r<ROADMAP.length;r++){
        rm+='<div class="stk-g">'+ROADMAP[r][0]+'</div><div class="lsn"><b>'+ROADMAP[r][1]+'</b> — '+ROADMAP[r][2]+'</div>';
      }
      el.innerHTML=html+'</div></details>'+rm+'</div></details>';
      var boxes=el.querySelectorAll('details.stackbox');
      if(boxes[0])boxes[0].addEventListener('toggle',function(){ try{localStorage.setItem('m5_stack_open',boxes[0].open?'1':'0');}catch(e){} });
      if(boxes[1])boxes[1].addEventListener('toggle',function(){ try{localStorage.setItem('m5_roadmap_open',boxes[1].open?'1':'0');}catch(e){} });
    });
  }catch(e){}
})();
