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
      {b:'gcal',k:'Calendar',t:'My schedule',link:'gcal'},
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
/* Админ-предпросмотр: фаундер открыл кабинет ЧУЖОЙ роли (из /org → Workspace).
   Показываем кабинет ровно так, как его увидит будущий сотрудник:
   без имени фаундера и без его личных блоков, с баннером сверху. */
var preview=false;
try{ if(member&&member.role==='founder'&&ROLES[member.role]&&role!==member.role) preview=true; }catch(e){}

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
  (preview?'<div class="pvw">Admin preview — the <b>'+cfg.label+'</b> workspace exactly as a future hire will see it · <a href="/champion'+(member&&member.role?member.role:'')+'">Back to my workspace →</a></div>':'')+
  '<div class="hero"><h1>'+((member&&typeof member.name==='string'&&member.name&&!preview)?('Welcome, '+esc(member.name.split(' ')[0])+'.'):'Welcome to M5.')+'</h1>'+
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
  '<div id="planSec"></div>'+
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

function smmShow(i){
  var p=document.getElementById('smmPanel'); if(!p)return;
  var d=SMMNET[i];
  if(p.dataset.open===d.id){ p.innerHTML=''; p.dataset.open=''; return; }
  p.dataset.open=d.id;
  p.innerHTML='<div class="smpanel"><div class="smph"><span class="smoc" style="background:'+d.c+';width:26px;height:26px">'+d.ic+'</span><b>'+d.n+'</b><span class="stk-hint">'+d.st+'</span></div>'+d.mock+'</div>';
  var os=document.querySelectorAll('.smo'); for(var k=0;k<os.length;k++)os[k].classList.toggle('on',k===i);
}

/* План E-2 · август→ноябрь. Только для фаундеров и директора (Алекс, Влад, Вадим).
   Обновляется после каждой консультации с адвокатом — дата в шапке.
   ✅/⬜ — статус пункта, меняется по факту. Детали финансов здесь не публикуем. */
var EPLAN_UPD='24.07 · после консультации с иммиграционным адвокатом';
/* Шкала инвестиций: заведено на счёт LLC. Метки: $100K — минимум завести и потратить,
   $150K — цель на счету к началу октября, $200K — план инвестиций на 2026 (=100% шкалы).
   cur обновляется, когда Алекс говорит «завели X». */
var EPLAN_FUND={cur:0, min:100, goal:150, plan:200};
var EPLAN=[
 {m:'Август', tag:'Фундамент', items:[
   ['⬜','До 1 августа — подать LLC «M5 Studio Miami»','Florida LLC, Алекс 50% / Влад 50%. Регистрация + EIN. Это старт всего E-2 кейса.'],
   ['⬜','Американский номер телефона','Подключаем и привязываем к сайту и всей лидогенерации.'],
   ['⬜','Instagram M5 + запуск рекламы','Таргет на декоративную штукатурку. Аккаунт, контент, первая кампания.'],
   ['⬜','Сайт: реальные фото работ — Вадим','Реальные работы по штукатурке, сделанные в США, вместо стоков.'],
   ['⬜','Старт поиска шоурума','Майами, центральные улицы, до 100 м²: шоурум + склад + офис. См. подсказку «Шоурум» ниже.'],
   ['⬜','Source of funds — подготовить','Алекс $75K + Влад $75K: документы происхождения инвестиций к сентябрьскому переводу. Детали — офлайн с адвокатом.'],
   ['🎯','Цель месяца','Работают сайт + Instagram + реклама, лиды идут, система крутится.']
 ]},
 {m:'Сентябрь', tag:'Запуск', items:[
   ['⬜','Алекс прилетает в Майами (B1/B2)','Первые числа сентября. Лично открывает банковский счёт компании.'],
   ['⬜','Перевод $100K на счёт компании','К концу сентября на счету — $150K.'],
   ['⬜','До 15 сентября — аренда помещения','Подписать аренду → реновация → готовим шоурум.'],
   ['⬜','Первые 3+ клиента на штукатурку','Запуск реальных работ — выручка и трекшн для кейса.'],
   ['⬜','Вадим официально в штате','Директор/менеджер, W-2, реальная работа — база для его E-2.']
 ]},
 {m:'Октябрь', tag:'Инвестиции + статус', items:[
   ['⬜','Потратить $100K (сен–окт включительно)','Шоурум · авто под материалы · техника, столы, компьютеры · сервисы · найм SMM-таргетолога.'],
   ['⚠️','Вадим: статус после 1 октября','U4U заканчивается 1.10. План продления статуса с адвокатом — заранее, до дедлайна.'],
   ['⬜','Бизнес-план v4 — финал','Факт: $100K потрачено, $150K на счету, план инвестиций $200K на 2026. Реальные фото шоурума вместо рендеров.']
 ]},
 {m:'Ноябрь', tag:'Подача', items:[
   ['⬜','Варшава — подача E-2 всей командой','Алекс + Влад — инвесторы E-2. Вадим — E-2 employee.'],
   ['ℹ️','Обоснование Вадима','Незаменимый специалист: инженерное образование + мастер декоративной штукатурки + опыт управления производством.']
 ]}
];
var EPLAN_HINTS=[
 ['Что такое E-2','Виза инвестора США для граждан стран-участниц договора. Требует существенных инвестиций в реальный работающий бизнес. Алекс и Влад подаются как инвесторы (по 50%), Вадим — как ключевой сотрудник той же компании. Подача — в консульстве (Варшава), к подаче нужны: работающий бизнес, потраченные инвестиции, бизнес-план, source of funds.'],
 ['Бизнес-план','Живой документ: сейчас v3, к подаче станет v4 — намерения заменяются фактами (реальный шоурум, реальные клиенты, реальные траты). Хранится в Company Drive → 06 Legal & Docs, обновляет Клод после каждого события.'],
 ['Шоурум','<img src="/media/showroom_main.jpg" style="max-width:100%;border-radius:10px;margin:6px 0"><img src="/media/showroom_storage.jpg" style="max-width:100%;border-radius:10px;margin:6px 0"><img src="/media/showroom_concept.jpg" style="max-width:100%;border-radius:10px;margin:6px 0"> Майами, центральные улицы, до 100 м²: шоурум декоративной штукатурки + склад материалов + офис. Концепт — «art-concrete». Ищем через LoopNet, Crexi и локальных брокеров; бюджет аренды $5–10K/мес.']
];
(function(){
  try{
    if(role!=='director'&&role!=='founder')return;
    var el=document.getElementById('planSec'); if(!el)return;
    var op=false; try{op=localStorage.getItem('m5_eplan_open')==='1';}catch(e){}
    var h='<details class="stackbox"'+(op?' open':'')+'><summary><span>🗓 План E-2 · август → ноябрь</span><span class="stk-hint">обновлено '+EPLAN_UPD+' · нажми</span></summary><div class="stack">';
    h+='<div class="lsn" style="margin-top:10px">📄 <b>Бизнес-план E-2</b> — закреп: <a href="https://drive.google.com/drive/folders/1I41acYvpvpHgkojOxs5sznNkVPExixsm" target="_blank" rel="noopener" style="color:#96703B">Company Drive → 06 Legal &amp; Docs</a></div>';
    var fp=Math.min(100,Math.round(EPLAN_FUND.cur/EPLAN_FUND.plan*100));
    h+='<div class="lsn" style="margin-top:12px"><b>💰 Инвестиции на счету LLC: $'+EPLAN_FUND.cur+'K из $'+EPLAN_FUND.plan+'K</b></div>'+
       '<div style="position:relative;height:22px;background:#EFE8D9;border-radius:11px;margin:8px 0 2px;overflow:hidden">'+
         '<div style="position:absolute;left:0;top:0;bottom:0;width:'+fp+'%;background:linear-gradient(90deg,#B0894F,#96703B);border-radius:11px;transition:width .6s"></div>'+
         '<div style="position:absolute;left:50%;top:0;bottom:0;width:2px;background:#fff9"></div>'+
         '<div style="position:absolute;left:75%;top:0;bottom:0;width:2px;background:#fff9"></div>'+
       '</div>'+
       '<div style="display:flex;font-size:10.5px;color:#8A8272;letter-spacing:.04em"><span style="width:50%">$100K — минимум завести и потратить</span><span style="width:25%">$150K — цель к окт.</span><span style="width:25%;text-align:right">$200K — план 2026</span></div>';
    for(var i=0;i<EPLAN.length;i++){
      h+='<div class="stk-g" style="font-size:12px;margin-top:16px">'+EPLAN[i].m+' — '+EPLAN[i].tag+'</div>';
      for(var j=0;j<EPLAN[i].items.length;j++){
        var it=EPLAN[i].items[j];
        h+='<details class="pl"><summary>'+it[0]+' '+it[1]+'</summary><div class="lsn" style="padding:4px 10px 8px 26px">'+it[2]+'</div></details>';
      }
    }
    h+='<div class="stk-g" style="margin-top:16px">Подсказки</div>';
    for(var k=0;k<EPLAN_HINTS.length;k++){
      h+='<details class="pl"><summary>💡 '+EPLAN_HINTS[k][0]+'</summary><div class="lsn" style="padding:4px 10px 8px 26px">'+EPLAN_HINTS[k][1]+'</div></details>';
    }
    el.innerHTML=h+'</div></details>';
    var box=el.querySelector('details.stackbox');
    if(box)box.addEventListener('toggle',function(){ try{localStorage.setItem('m5_eplan_open',box.open?'1':'0');}catch(e){} });
  }catch(e){}
})();

/* Урок «JobTread — как работать». Виден ролям, живущим в производстве:
   director (Вадим — главный юзер), pm, sales. У founder убран (26.07):
   Алексу он не нужен ежедневно, только занимал фокус. */
var LESSON=[
 ['Что это','JobTread — наша главная рабочая система: все клиенты, сметы, стройка и счета живут здесь. Открывается плиткой «JobTread» выше или на app.jobtread.com — вход по рабочей почте @m5miami.com (приглашение уже в твоём ящике).'],
 ['Лиды приходят сами','Каждая заявка с сайта m5miami.com автоматически становится клиентом в Customers — руками ничего переносить не надо. Открой клиента «DEMO · Maria Gonzalez» — это учебный пример, на нём виден весь путь лида.'],
 ['Воронка = поле Status у Job','Новый лид → Связались → Консультация назначена → Смета отправлена → Выиграно → В производстве → Завершён (или Проиграно). Поменял статус сразу после действия — и вся отчётность компании считается сама. Это главная привычка.'],
 ['Клиент руками','Позвонили напрямую? Customers → New: имя и телефон → Location (адрес объекта) → Job. Дальше тот же путь по воронке.'],
 ['Смета','Внутри Job → Estimates: конструктор позиций с ценами и наценкой, клиент получает красивое предложение и подписывает онлайн. Шаблоны под 5 услуг M5 соберём вместе на онбординге.'],
 ['Мобильное приложение','JobTread — веб-приложение, в магазинах его нет. Открой app.jobtread.com на телефоне: iPhone — Safari → Поделиться → «На экран “Домой”», Android — Chrome → меню → «Добавить на гл. экран». Правило M5 — «4 кадра каждый визит»: до / процесс / после / деталь, фото в Daily Logs прямо с объекта.'],
 ['Календарь — включи синхронизацию','В JobTread: Profile → Calendar Sync → подключи свою почту @m5miami.com. Твои задачи и график по проектам сами появятся в твоём Google-календаре, а перенос даты в календаре обновит JobTread. 5 минут один раз — и расписание всегда под рукой в телефоне.'],
 ['Обучение бесплатно','У JobTread бесплатный онбординг-звонок и живой чат поддержки — бронируй, они настраивают систему вместе с тобой. Вопросы — Джину в чате выше или Алексу.']
];
(function(){
  try{
    if(role!=='director'&&role!=='pm'&&role!=='sales')return;
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
 ['AI & Dev','Облачные рутины','ежедневно: Health+Security · пн: мега-аудит + Growth Lab · Пульс · Brief','https://claude.ai/code/routines'],
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

/* «Мои задачи» — личный TODO Алекса, ведёт Клод (обновляется после каждого решения
   в чате; «сделал» → ✅). Виден только Алексу (hash-gate). */
var ALEXTODO_UPD='26.07';
/* Статусы: todo | done | soon. 4-й элемент 'm' = «мелочь на 5 минут» (отдельная
   секция под целью недели). Кодовое слово Алекса в чате Клоду — «ПОГНАЛИ»:
   Клод открывает этот список и ведёт по шагам, «сделал» → done. */
var ALEXTODO=[
 ['todo','OpenPhone — US-номер (~$15/мес)','Первый шаг: разблокирует Google Business, рекламу и сайт. 10 минут, работает из Дубая. openphone.com'],
 ['todo','Meta Business: FB-страница + Instagram','business.facebook.com → страница «M5 Interior Design & Build» → создать/привязать IG (@m5miami или @m5.miami). ~20 мин. Регистрация на дубайский номер — ок.'],
 ['todo','Google Business Profile','business.google.com · категория Interior Design / Remodeling · service area Miami · телефон — уже US из OpenPhone.'],
 ['todo','TikTok + YouTube — завести аккаунты','На alex@m5miami.com, по 2 минуты. Контент — кросспост тех же Reels.'],
 ['todo','Написать Клоду «аккаунты готовы»','Дальше я сам: контент-календарь на 4 недели + первые 10 сценариев рилсов (вкл. ролик-знакомство Влада) + My Stack.'],
 ['todo','Влад в JobTread','Settings → Members → + Internal Users → Vlad / vlad@m5miami.com / Admin → тумблер +$20/мес → Submit.','m'],
 ['todo','Удалить 5 тест-карточек в Telegram','4 в топике «Пульс» + 1 в топике «Лиды» (карточки TEST/Проверка).','m'],
 ['todo','Прислать чек Higgsfield','Сумма $49 в реестре не подтверждена — глянь письмо Stripe, с какой почты платил.','m'],
 ['soon','Реклама — только после 5–10 постов','Пустой профиль сжигает бюджет. План готов: Реклама_план_запуска_M5.md.']
];

/* Соцсети M5 — визуальная схема системы (просьба Алекса 26.07).
   Кружки кликабельны: внутри мокап «как будет выглядеть» + кто что делает. */
var SMMNET=[
 {id:'ig',n:'Instagram',c:'linear-gradient(45deg,#F58529,#DD2A7B,#8134AF)',st:'core · главный',
  ic:'<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.2" cy="6.8" r="1.2" fill="#fff" stroke="none"/></svg>',
  mock:'<div class="mkhead"><div class="mkava">M5</div><div><b>@m5miami</b><span>M5 Interior Design &amp; Build · Miami<br>Luxury renovation &amp; decorative plaster ✦ EN/ES<br>⤷ m5miami.com — instant estimate</span></div></div>'+
   '<div class="mkhl"><i>Projects</i><i>Plaster</i><i>Before/After</i><i>Team</i><i>Reviews</i></div>'+
   '<div class="mkgrid">'+
   '<div style="background:linear-gradient(160deg,#D9B87C,#96703B)">До / После<small>каждый объект</small></div>'+
   '<div style="background:linear-gradient(160deg,#20242E,#4a5065)">Влад · говорит<small>1–2 в неделю</small></div>'+
   '<div style="background:linear-gradient(160deg,#8a7a5f,#5e5342)">Текстуры<small>штукатурка макро</small></div>'+
   '<div style="background:linear-gradient(160deg,#3e4a5a,#20242E)">Процесс<small>Вадим с объекта</small></div>'+
   '<div style="background:linear-gradient(160deg,#b3906a,#8a6a44)">Рилс-тур<small>по объекту</small></div>'+
   '<div style="background:linear-gradient(160deg,#4d5b52,#2f3a34)">Советы<small>цены · чек-листы</small></div>'+
   '</div><p class="mkp">Грид чередует 6 типов контента. Reels — двигатель охвата, сторис ежедневно. Цель: главный источник соцлидов.</p>'},
 {id:'tt',n:'TikTok',c:'#161823',st:'core · охват',
  ic:'<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"><path d="M14 4v10.5a3.75 3.75 0 1 1-3-3.67"/><path d="M14 4c.5 2.4 2.1 4 4.5 4.3"/></svg>',
  mock:'<div class="mkrow"><div class="mkvert"><b>Хук 0–2с</b>«Это НЕ обои…»<small>текстура-макро</small></div><div class="mkvert"><b>Хук 0–2с</b>«$180K ремонт за 60 сек»<small>таймлапс-тур</small></div><div class="mkvert"><b>Хук 0–2с</b>«Ошибка №1 в кондо Майами»<small>Влад · советы</small></div></div>'+
   '<p class="mkp">Те же Reels, но с нативным монтажом под TikTok: жёсткий хук в первые 2 секунды, субтитры, 15–30с. Задача — дешёвый охват людей, которые нас не знают.</p>'},
 {id:'yt',n:'YouTube',c:'#CC0000',st:'core · доверие',
  ic:'<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"><rect x="2.5" y="6" width="19" height="12" rx="3.5"/><path d="m10.5 9.5 4.5 2.5-4.5 2.5z" fill="#fff" stroke="none"/></svg>',
  mock:'<div class="mkyt"><div class="mkytb">M5 · Interior Design &amp; Build Miami</div><div class="mkytr"><i>Shorts</i><i>Shorts</i><i>Shorts</i><i>Shorts</i></div><div class="mkytv">▶ Full tour: Brickell 2BR — $180K turnkey renovation <small>8:24 · раз в месяц</small></div></div>'+
   '<p class="mkp">Shorts — кросспост Reels. Длинные видео (обзор объекта, «как мы делаем штукатурку») — 1 в месяц, работают годами как SEO-актив и строят доверие до звонка.</p>'},
 {id:'fb',n:'Facebook',c:'#1877F2',st:'техбаза · реклама',
  ic:'<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8"><path d="M14 8.5h3V5.2h-3c-1.9 0-3.5 1.6-3.5 3.5V11H8v3h2.5v6h3.3v-6h2.7l.5-3h-3.2V8.9c0-.2.1-.4.4-.4Z" fill="#fff" stroke="none"/></svg>',
  mock:'<p class="mkp" style="margin-top:6px">Страница-визитка: кавер с виллой, кнопка <b>Get a Quote → m5miami.com</b>, автокросспост из Instagram. Отдельного контента не делаем.</p><p class="mkp"><b>Главная роль — движок Meta-рекламы</b>: через неё крутятся кампании на штукатурку в IG и FB. Без страницы реклама невозможна.</p>'},
 {id:'gb',n:'Google Business',c:'#188038',st:'локальные лиды',
  ic:'<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-6.5-5.2-6.5-10a6.5 6.5 0 0 1 13 0c0 4.8-6.5 10-6.5 10Z"/><circle cx="12" cy="10.5" r="2.3"/></svg>',
  mock:'<div class="mkgb"><b>M5 Interior Design &amp; Build</b><span>★★★★★ 5.0 (12) · Remodeler · Miami, FL</span><div class="mkgbb"><i>Call</i><i>Directions</i><i>Website</i><i>Quote</i></div></div>'+
   '<p class="mkp">Карточка в Google Maps и поиске «decorative plaster miami». Фото работ + отзывы после каждого проекта (движок отзывов в roadmap). Бесплатные горячие локальные лиды. Телефон — только US (OpenPhone).</p>'},
 {id:'hz',n:'Houzz',c:'#4DBC15',st:'портфолио · ниша',
  ic:'<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"><path d="M4 21V10.5L12 4l8 6.5V21h-6v-6h-4v6H4Z"/></svg>',
  mock:'<p class="mkp" style="margin-top:6px">Профиль-портфолио: каждый сданный проект — фотокейс, отзывы клиентов. Тут владельцы домов Майами ищут, с кем строить — аудитория с деньгами и намерением.</p><p class="mkp">Наполняет Алекс. Платную рекламу Houzz (~$499/мес) не берём, пока не нужен доп. поток.</p>'}
];
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
    if(preview)return; // в предпросмотре показываем кабинет глазами сотрудника — личные блоки Алекса скрыты
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
      var opened=false; try{opened=localStorage.getItem('m5_stack_open')==='1';}catch(e){}
      var html='<details class="stackbox"'+(opened?' open':'')+'><summary><span>My stack · только для тебя</span><span class="stk-hint">'+STACK.length+' сервисов + план · нажми</span></summary><div class="stack">';
      for(var g=0;g<groups.length;g++){
        html+='<div class="stk-g">'+groups[g]+'</div>';
        for(var j=0;j<STACK.length;j++){ if(STACK[j][0]!==groups[g])continue;
          html+='<a class="stk" href="'+STACK[j][3]+'" target="_blank" rel="noopener"><b>'+STACK[j][1]+'</b><span>'+STACK[j][2]+'</span></a>';
        }
      }
      var tdDone=0,tdAll=0,tdNextFound=false;
      for(var q=0;q<ALEXTODO.length;q++){ if(ALEXTODO[q][0]!=='soon'){tdAll++; if(ALEXTODO[q][0]==='done')tdDone++;} }
      var td='<details class="stackbox" open><summary><span>📌 Мои задачи · ведёт Клод</span><span class="stk-hint">'+tdDone+' из '+tdAll+' · обновлено '+ALEXTODO_UPD+'</span></summary><div class="stack">';
      td+='<div class="tdbar"><i style="width:'+(tdAll?Math.round(tdDone/tdAll*100):0)+'%"></i></div>';
      td+='<div class="lsn" style="margin:4px 0 8px;color:#8A8272">Напиши Клоду в чат кодовое слово <b style="color:#96703B">«ПОГНАЛИ»</b> — он вспомнит этот список и поведёт тебя по шагам, по одному.</div>';
      var tdRow=function(t,ic,cls){ return '<details class="pl'+cls+'"><summary>'+ic+' '+ALEXTODO[t][1]+(cls===' tdnext'?' <span class="tdgo">следующий шаг</span>':'')+'</summary><div class="lsn" style="padding:4px 10px 8px 34px">'+ALEXTODO[t][2]+'</div></details>'; };
      /* Секция 1: цепочка цели недели (всё, что не 'm' и не soon) */
      td+='<div class="stk-g">🎯 Цель недели · запустить соцсети</div>';
      var num=0;
      for(var t=0;t<ALEXTODO.length;t++){
        if(ALEXTODO[t][0]==='soon'||ALEXTODO[t][3]==='m')continue;
        var ic, cls='';
        if(ALEXTODO[t][0]==='done'){ num++; ic='<span class="tdk done">✓</span>'; cls=' tddone'; }
        else { num++; ic='<span class="tdk">'+num+'</span>'; if(!tdNextFound){ cls=' tdnext'; tdNextFound=true; } }
        td+=tdRow(t,ic,cls);
      }
      /* Секция 2: мелочи на 5 минут ('m') */
      td+='<div class="stk-g" style="margin-top:12px">⚡ Мелочи на 5 минут</div>';
      for(var t2=0;t2<ALEXTODO.length;t2++){
        if(ALEXTODO[t2][3]!=='m')continue;
        if(ALEXTODO[t2][0]==='done'){ td+=tdRow(t2,'<span class="tdk done">✓</span>',' tddone'); }
        else { td+=tdRow(t2,'<span class="tdk">•</span>',''); }
      }
      /* Секция 3: позже (soon) */
      for(var t3=0;t3<ALEXTODO.length;t3++){
        if(ALEXTODO[t3][0]!=='soon')continue;
        td+=tdRow(t3,'<span class="tdk soon">…</span>','');
      }
      td+='</div></details>';
      /* Соцсети — схема системы */
      var sm='<details class="stackbox"><summary><span>📱 Соцсети · как устроена система</span><span class="stk-hint">'+SMMNET.length+' каналов · нажми на кружок</span></summary><div class="stack">';
      sm+='<div class="smflow"><span>🎥 Команда снимает<small>Вадим: 4 кадра + видео · Влад: лицо</small></span><i>→</i><span>☁️ Google Drive<small>01 Content — всё сырьё</small></span><i>→</i><span>🤖 Клод<small>календарь · сценарии · тексты</small></span><i>→</i><span>📲 Публикация<small>планировщик Meta · 15 мин/день</small></span><i>→</i><span>💰 Лиды<small>сайт → JobTread · источник трекается</small></span></div>';
      sm+='<div class="smorb">';
      for(var s2=0;s2<SMMNET.length;s2++){
        sm+='<div class="smo" onclick="smmShow('+s2+')"><span class="smoc" style="background:'+SMMNET[s2].c+'">'+SMMNET[s2].ic+'</span><b>'+SMMNET[s2].n+'</b><small>'+SMMNET[s2].st+'</small></div>';
      }
      sm+='</div><div id="smmPanel"></div>';
      sm+='<div class="stk-g" style="margin-top:14px">Кто что делает</div><div class="lsn"><b>Клод</b> — контент-календарь, сценарии, капшены EN/ES, аналитика «контент → контракты». <b>Вадим + команда</b> — подсъём с объектов. <b>Влад</b> — лицо бренда, 1–2 ролика в неделю. <b>Ты</b> — 15 минут в неделю: утвердить календарь. <b>SMM-менеджер (с сентября)</b> — монтаж, постинг, сторис, комьюнити; её шкала уже в кабинете SMM.</div>';
      sm+='</div></details>';
      /* Roadmap подключений — секцией внутри My Stack (отдельный блок убран 26.07:
         дублировал задачи и размывал фокус; этим планом пользуется Клод по триггерам) */
      var rmIn='<div class="stk-g" style="margin-top:14px">🔌 Что дальше · Клод подключает по триггерам</div>';
      for(var r=0;r<ROADMAP.length;r++){
        rmIn+='<div class="lsn"><b>'+ROADMAP[r][1]+'</b> — '+ROADMAP[r][2]+'<br><span style="color:#8A8272">когда: '+ROADMAP[r][0]+'</span></div>';
      }
      el.innerHTML=td+sm+html+rmIn+'</div></details>';
      var boxes=el.querySelectorAll('details.stackbox');
      /* Порядок фокуса: Задачи и Соцсети — выше Плана E-2; My Stack остаётся внизу */
      var ep=document.getElementById('planSec');
      if(ep&&ep.parentNode&&boxes.length>2){ ep.parentNode.insertBefore(boxes[0],ep); ep.parentNode.insertBefore(boxes[1],ep); }
      if(boxes[2])boxes[2].addEventListener('toggle',function(){ try{localStorage.setItem('m5_stack_open',boxes[2].open?'1':'0');}catch(e){} });
    });
  }catch(e){}
})();
