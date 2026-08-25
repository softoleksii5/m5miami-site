/* M5 Start — общий движок кабинетов. Один файл на все роли (/champion*).
   Ссылки вставляются ТОЛЬКО в LINKS — пустая строка = плитка в режиме Soon. */

/* ВРЕМЕННО (12.08, просьба Алекса): открытый вход — хэш-гейты приватных блоков
   пропускают всех. Вернуть защиту: OPEN_ACCESS=false и задеплоить. localStorage
   вошедших не трогается — после возврата защиты перерегистрация не нужна. */
var OPEN_ACCESS=true;

var LINKS={
  ga4:'https://analytics.google.com/analytics/web/',
  clarity:'https://clarity.microsoft.com/projects/view/xpd5kfm31r/dashboard',
  gcal:'https://calendar.google.com/',
  salescrm:'https://crm.m5miami.com/', // M5 CRM — лиды и КП (Vercel + Supabase); менять домен только здесь
  saleskit:'https://crm.m5miami.com/kit', // скрипты продаж внутри CRM
  org:'/org/',
  onb:'/onboarding/', // страница сама узнаёт человека по рабочей почте

  /* Файлы компании — CRM (Supabase Storage). Единое хранилище: объекты, контент,
     чеки, документы, HR. Google Drive с 24.08 — только архив на чтение, из
     интерфейса кабинетов убран. Фильтр раздела — параметр ?b=<bucket>. */
  files:'https://crm.m5miami.com/files',
  telegram:'https://t.me/+x4q86H688uNiODI8',  // группа «M5 Team»
  jobtread:'https://app.jobtread.com/', // операционное ядро: лиды→сметы→производство
  whatsapp:'https://wa.me/17864074441', // бизнес-номер M5 (WhatsApp Business)
  permits:'https://www.miamidade.gov/permits/', // разрешения Miami-Dade
  expenses:'https://docs.google.com/spreadsheets/d/18-OBtv2S340IGODhQypgeK68fmLE85U_U65eVI6I7x4/edit#gid=360903293', // живой журнал расходов (Hub · лист Expenses — сюда пишет бот)
  expensesOld:'https://docs.google.com/spreadsheets/d/1kn88ENlBpt1_hE9y5MIIncKgqjk_9iah6jhJFOBOM8c/edit', // архив трат до запуска бота ($4,424 — уже в счётчике)
  revenue:'https://docs.google.com/spreadsheets/d/18-OBtv2S340IGODhQypgeK68fmLE85U_U65eVI6I7x4/edit#gid=801839867', // журнал доходов (Hub · лист Revenue — бот «доход …»)
  vendors:'https://docs.google.com/spreadsheets/d/18-OBtv2S340IGODhQypgeK68fmLE85U_U65eVI6I7x4/edit#gid=907822598', // реестр подрядчиков (Hub · Vendors — бот «подрядчик …»)
  teamSheet:'https://docs.google.com/spreadsheets/d/18-OBtv2S340IGODhQypgeK68fmLE85U_U65eVI6I7x4/edit#gid=1800521970', // команда: контракты, ставки, выплачено (Hub · Team)
  legalDocs:'https://crm.m5miami.com/files?b=legal', // документы компании: LLC, страховки, аренда, бизнес-план E-2
  planBox:'https://docs.google.com/document/d/1D9ppXo27xQFGo1062SZ7BYUTrjy1gDDoNE5ylJQ6Bwk/edit', // Texture Box — полный план (Google Docs)
  planIdeas:'https://docs.google.com/document/d/1dXBPQWTd4PDf-gyo9xCOwRM0XMhzLxjYSpKkm9Ywjxo/edit', // Каталог 18 креатив-идей
  planSmm:'https://docs.google.com/document/d/1dsonUAcJyTU8wVipu0LlO6Sx5UnvutByq65PiN4lYkM/edit', // Соцсети — план запуска
  receipts:'https://crm.m5miami.com/files?b=receipts',      // чеки — фото и PDF (кладёт Джин из Telegram)
  content:'https://crm.m5miami.com/files?b=content',        // весь контент компании
  contentInbox:'https://crm.m5miami.com/files?b=content',   // общая приёмка — что прислали без темы, Джин разбирает
  projects:'https://crm.m5miami.com/files?b=projects',      // файлы объектов (папка на объект)
  shootRule:'https://docs.google.com/document/d/1EPQnXlehD2946jpjtUZyoS5spFP65WIYpsGU2ddHt84/', // «Правило съёмки ДО/ПРОЦЕСС/ПОСЛЕ» RU+EN (Google Docs)
  jinBot:'https://t.me/m5miami_bot',            // Джин в Telegram: расходы, чеки, вопросы, «куда скидывать»
  reviews:'https://crm.m5miami.com/files?b=content',        // отзывы клиентов — внутри контента
  objTemplate:'https://crm.m5miami.com/files?b=projects',   // структура нового объекта заводится автоматом
  vadimWorks:'https://crm.m5miami.com/files?b=content',     // архив работ Вадима до M5
  visaVadim:'https://crm.m5miami.com/files?b=legal',        // визовые документы Вадима (приватный раздел)
  quickbooks:'',
  heygen:'',
  houzz:'https://pro.houzz.com/', // маркетинг-канал: профиль+отзывы (софт-тариф НЕ берём)
  playbook:'',
  legal:'https://crm.m5miami.com/files?b=legal', // документы партнёров (приватный раздел legal в CRM)
  tutorial:'/media/tutorial_system_ru.mp4' // видео-туториал «Как устроена система M5» (Remotion + Jin, 31.07)
};

/* фирменные логотипы сервисов (SVG со своими цветами) */
var LOGOS={
  whatsapp:'<svg viewBox="0 0 46 46"><rect width="46" height="46" rx="11" fill="#25D366"/><path fill="#fff" d="M23 11.5c-6.3 0-11.4 5.1-11.4 11.4 0 2 .5 4 1.5 5.7L11.5 34l5.6-1.5c1.7.9 3.7 1.4 5.9 1.4 6.3 0 11.4-5.1 11.4-11.4S29.3 11.5 23 11.5Zm0 20.6c-1.9 0-3.7-.5-5.3-1.4l-.4-.2-3.3.9.9-3.2-.2-.4c-1-1.6-1.5-3.5-1.5-5.3 0-5.4 4.4-9.7 9.8-9.7s9.8 4.4 9.8 9.7-4.4 9.6-9.8 9.6Zm5.4-7.2c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4Z"/></svg>',
  telegram:'<svg viewBox="0 0 46 46"><rect width="46" height="46" rx="11" fill="#229ED9"/><path fill="#fff" d="M9.8 22.2l23-8.9c1.1-.4 2 .3 1.6 1.9l-3.9 18.4c-.3 1.2-1 1.5-2 .9l-5.6-4.1-2.7 2.6c-.3.3-.6.5-1.1.5l.4-5.8L30.4 17c.5-.4-.1-.7-.8-.3L16 25.1l-5.7-1.8c-1.2-.4-1.2-1.2.5-1.1z"/></svg>',
  gcal:'<svg viewBox="0 0 46 46"><rect width="46" height="46" rx="11" fill="#fff"/><rect x="11" y="12" width="24" height="23" rx="3" fill="#fff" stroke="#4285F4" stroke-width="2.4"/><text x="23" y="30" font-family="Arial,Helvetica,sans-serif" font-size="12.5" font-weight="700" fill="#4285F4" text-anchor="middle">31</text></svg>',
  ga4:'<svg viewBox="0 0 46 46"><rect width="46" height="46" rx="11" fill="#fff"/><rect x="12" y="24" width="5.5" height="10" rx="2.7" fill="#E37400"/><rect x="20.2" y="17" width="5.5" height="17" rx="2.7" fill="#E37400"/><rect x="28.4" y="11" width="5.5" height="23" rx="2.7" fill="#F9AB00"/></svg>',
  clarity:'<svg viewBox="0 0 46 46"><rect width="46" height="46" rx="11" fill="#1B6EC2"/><circle cx="23" cy="23" r="10" fill="none" stroke="#fff" stroke-width="3"/><circle cx="23" cy="23" r="3.4" fill="#fff"/></svg>',
  quickbooks:'<svg viewBox="0 0 46 46"><rect width="46" height="46" rx="11" fill="#2CA01C"/><circle cx="23" cy="23" r="12" fill="none" stroke="#fff" stroke-width="3.4"/><rect x="21.3" y="13" width="3.4" height="20" fill="#fff"/></svg>',
  jobtread:'<svg viewBox="0 0 46 46"><rect width="46" height="46" rx="11" fill="#F26722"/><text x="23" y="30" font-family="Arial" font-size="16" font-weight="800" fill="#fff" text-anchor="middle">JT</text></svg>',
  heygen:'<svg viewBox="0 0 46 46"><rect width="46" height="46" rx="11" fill="#5B3DF5"/><text x="23" y="31" font-family="Arial" font-size="18" font-weight="800" fill="#fff" text-anchor="middle">H</text></svg>',
  houzz:'<svg viewBox="0 0 46 46"><rect width="46" height="46" rx="11" fill="#4DBC15"/><path fill="#fff" d="M23 12l-8 4.6v13.4h5.2v-6.2h5.6v6.2H31V16.6z"/></svg>'
};
var BC={whatsapp:'#25D366',telegram:'#229ED9',gcal:'#4285F4',ga4:'#F9AB00',clarity:'#1B6EC2',quickbooks:'#2CA01C',jobtread:'#F26722',heygen:'#5B3DF5',houzz:'#4DBC15'};

var ROLES={
  founder:{label:'Co-founder',sub:'Your command center',
    chips:['Что по лидам?','Как завести кабинет клиента?','Где документы компании?'],
    tiles:[
      {ic:'🚀',k:'Start here',t:'Setup checklist',link:'onb'},
      {b:'jobtread',k:'CRM & Production',t:'JobTread',link:'jobtread'},
      {b:'telegram',k:'M5 Pulse',t:'Team channel',link:'telegram'},
      {ic:'📁',k:'Файлы',t:'Объекты · чеки · документы',link:'files'},
      {b:'gcal',k:'Calendar',t:'Meetings & bookings',link:'gcal'},
      {ic:'👥',k:'People',t:'Org structure',link:'org'},
      {b:'ga4',k:'Analytics',t:'GA4 · Site',link:'ga4'},
      {b:'clarity',k:'Sessions',t:'MS Clarity',link:'clarity'}]},
  director:{label:'Director',sub:'Your command center',
    chips:['Как сдать вечерний отчёт?','Как добавить клиента в JobTread?','Где фото объектов?'],
    tiles:[
      {ic:'🚀',k:'Start here',t:'Setup checklist',link:'onb'},
      {b:'jobtread',k:'CRM & Production',t:'JobTread',link:'jobtread'},
      {b:'gcal',k:'Calendar',t:'My schedule',link:'gcal'},
      {b:'telegram',k:'M5 Pulse',t:'Team channel',link:'telegram'},
      {ic:'📁',k:'Файлы',t:'Объекты · чеки · документы',link:'files'},
      {ic:'🛂',k:'Виза',t:'Мои документы',link:'visaVadim'},
      {ic:'📄',k:'Permits',t:'Miami-Dade',link:'permits'},
      {ic:'👥',k:'People',t:'Org structure',link:'org'}]},
  smm:{label:'SMM',sub:'Your SMM & content workspace',
    chips:['Что снимать на объекте?','Где сырьё для контента?','Какой у нас тон и стиль?'],
    tiles:[
      {ic:'🚀',k:'Start here',t:'Setup checklist',link:'onb'},
      {ic:'📁',k:'Файлы',t:'Контент и объекты',link:'files'},
      {b:'telegram',k:'M5 Pulse',t:'Team channel',link:'telegram'},
      {ic:'📈',k:'My growth',t:'Levels & growth'},
      {ic:'👥',k:'Team',t:'Who is who',link:'org'},
      {ic:'🗓',k:'Scheduler',t:'Auto-posting'},
      {b:'heygen',k:'HeyGen',t:'AI avatars',link:'heygen'},
      {ic:'📸',k:'Channels',t:'IG · TikTok · YT'},
      {ic:'📖',k:'Playbook',t:'Brand & rules',link:'playbook'}]},
  sales:{label:'Sales',sub:'Your sales workspace',
    chips:['Как ответить на новый лид?','Как собрать КП в CRM?','Где скрипты продаж?'],
    tiles:[
      {ic:'🚀',k:'Start here',t:'Setup checklist',link:'onb'},
      {ic:'📇',k:'CRM · Sales',t:'Лиды и КП',link:'salescrm'},
      {b:'jobtread',k:'Production',t:'JobTread',link:'jobtread'},
      {b:'whatsapp',k:'Calls & chats',t:'WhatsApp Business',link:'whatsapp'},
      {b:'telegram',k:'M5 Pulse',t:'Team channel',link:'telegram'},
      {b:'gcal',k:'Calendar',t:'Consultations',link:'gcal'},
      {ic:'📁',k:'Файлы',t:'Документы сделок',link:'files'},
      {ic:'👥',k:'Team',t:'Who is who',link:'org'},
      {ic:'📈',k:'My growth',t:'Levels & growth'},
      {ic:'🧰',k:'Sales Kit',t:'Scripts & pitch',link:'saleskit'},
      {ic:'🤝',k:'Partners',t:'Realtors & brokers'}]},
  designer:{label:'Designer',sub:'Your design workspace',
    chips:['Где библиотека материалов?','Как согласовать образец?','Бренд и стиль M5'],
    tiles:[
      {ic:'🚀',k:'Start here',t:'Setup checklist',link:'onb'},
      {b:'jobtread',k:'Projects',t:'JobTread',link:'jobtread'},
      {ic:'📁',k:'Файлы',t:'Объекты и материалы',link:'files'},
      {b:'houzz',k:'Houzz',t:'Pro profile',link:'houzz'},
      {b:'telegram',k:'M5 Pulse',t:'Team channel',link:'telegram'},
      {b:'gcal',k:'Calendar',t:'Meetings',link:'gcal'},
      {ic:'👥',k:'Team',t:'Who is who',link:'org'},
      {ic:'📈',k:'My growth',t:'Levels & growth'},
      {ic:'🎨',k:'Design',t:'3D & tools'},
      {ic:'📖',k:'Playbook',t:'Brand & rules',link:'playbook'}]},
  pm:{label:'Project Manager',sub:'Your production workspace',
    chips:['Ритм дня на объекте','Как загрузить фото с объекта?','Что писать в вечернем отчёте?'],
    tiles:[
      {ic:'🚀',k:'Start here',t:'Setup checklist',link:'onb'},
      {b:'jobtread',k:'Production',t:'JobTread',link:'jobtread'},
      {ic:'📁',k:'Файлы',t:'Объекты и фото',link:'files'},
      {b:'telegram',k:'M5 Pulse',t:'Team channel',link:'telegram'},
      {b:'gcal',k:'Calendar',t:'Meetings',link:'gcal'},
      {ic:'📄',k:'Permits',t:'Miami-Dade',link:'permits'},
      {ic:'👥',k:'Team',t:'Who is who',link:'org'},
      {ic:'📈',k:'My growth',t:'Levels & growth'},
      {ic:'📐',k:'Supervision',t:'Site QC'}]},
  team:{label:'Team',sub:'Your workspace',
    chips:['My tasks','Knowledge base','Ask anything'],
    tiles:[
      {b:'jobtread',k:'Projects',t:'JobTread',link:'jobtread'},
      {ic:'📁',k:'Файлы',t:'База файлов компании',link:'files'},
      {b:'telegram',k:'M5 Pulse',t:'Team channel',link:'telegram'},
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

/* Персональные аватарки (Pixar-стиль, серия для всей команды).
   Матчим по префиксу рабочей почты, запасной вариант — по имени. */
var AVATARS={alex:'/img/ava_alex_t.webp',vlad:'/img/ava_vlad_t.webp',vadim:'/img/ava_vadim_t.webp',vadym:'/img/ava_vadim_t.webp'};
var avaUrl='';
try{
  if(member&&!preview){
    var akey=String(member.email||'').split('@')[0].toLowerCase();
    if(!AVATARS[akey]) akey=String(member.name||'').trim().split(' ')[0].toLowerCase();
    avaUrl=AVATARS[akey]||'';
  }
}catch(e){}
/* ── Первый экран v3 (01.08): «Now»-карточка · Company pulse · режим новичка ──
   «Now» — одна карточка-целеуказатель: одно честное действие по роли (без фейк-данных).
   Pulse — полоса цифр только для co-founder/director; лиды подтягиваются живьём
   из M5 Hub (?pulse=1), остальные плитки честно ведут в источник.
   Новичок (роль без завершённого онбординга или ?new=1) вместо «Now» видит
   чек-лист первого дня с бадди; галочки — в localStorage, финал снимает режим. */
function onbDone(){ try{return localStorage.getItem('m5_onb_done')==='1';}catch(e){return false;} }
var NEWBIE=/[?&]new=1/.test(location.search) || (!onbDone() && ['sales','smm','pm','designer','team'].indexOf(role)>-1);
var TILES=cfg.tiles.filter(function(t){
  if(t.k==='Start here') return !onbDone()&&!NEWBIE;   // одна точка входа: карточка новичка ИЛИ плитка, не обе
  if(t.k==='My growth') return true;          // своя внутренняя страница /growth/
  var u=t.link?LINKS[t.link]:'';
  return !!u;                                 // «Soon»-плитки не показываем вовсе
});
/* «Куда что» — одна строка быстрых ссылок для всех ролей: те же 5 точек, что в закрепе TG и у Джина */
function quickHtml(){
  var Q=[
    ['📸','Файлы объектов',LINKS.projects],
    ['🎬','Правило съёмки',LINKS.shootRule],
    ['💸','Расход — боту в TG',LINKS.jinBot],
    ['🧾','Чеки',LINKS.receipts],
    ['✦','Спросить Джина',LINKS.jinBot]
  ];
  return '<div class="quick"><span class="qcap">Куда что</span>'+Q.map(function(q){
    return '<a class="qlink" href="'+q[2]+'" target="_blank" rel="noopener"><i>'+q[0]+'</i>'+q[1]+'</a>';
  }).join('')+'</div>';
}
function nowHtml(){
  if(NEWBIE) return obHtml();
  var n;
  if(role==='founder') n={txt:'<b>Фокус недели:</b> запустить соцсети — Meta Business, Google Business Profile, TikTok/YT. Детали — в спейсах «Контент» и «Задачи».'};
  else if(role==='director') n=(new Date().getHours()>=17)
    ? {txt:'<b>Вечерний отчёт</b> — 2 минуты: голосовое или пара строк в Telegram → Projects. Фото дня — туда же, Джин сам разложит по объекту.',btn:'Отправить',url:LINKS.telegram}
    : {txt:'<b>Сегодня:</b> фото и видео с объекта — Джину в Telegram, он разложит. Вечером — отчёт в Projects (2 минуты).',btn:'Файлы объектов',url:LINKS.projects};
  else if(role==='sales') n={txt:'<b>Правило первого касания:</b> новый лид получает ответ за 15 минут. Лиды падают в CRM-кабинет и в Telegram → Лиды.',btn:'Открыть CRM',url:LINKS.salescrm};
  else if(role==='smm') n={txt:'<b>Ритм контента:</b> сырьё — только из Файлов CRM (Контент и папки объектов); на новом объекте снимаем «до» в первые 3 дня.',btn:'Открыть файлы',url:LINKS.content};
  else n={txt:'Задачи дня — в Telegram · M5 Team. Не знаешь, с чего начать — спроси Jin сверху.',btn:'Открыть чат',url:LINKS.telegram};
  var open=n.url?('href="'+n.url+'" target="_blank" rel="noopener"'):('href="#" onclick="'+n.act+';return false"');
  return '<div class="nowcard"><span class="now-tag">⚡ Now</span><div class="now-txt">'+n.txt+'</div>'+(n.btn?'<a class="now-btn" '+open+'>'+n.btn+' →</a>':'')+'</div>';
}
window.nowTasks=function(){ try{ var b=document.getElementById('tdBox')||document.getElementById('planSec'); if(b){ if(b.tagName==='DETAILS')b.open=true; b.scrollIntoView({behavior:'smooth',block:'start'}); } }catch(e){} };
/* Онбординг-чеклист первого дня: 2 шага уже отмечены (endowed progress),
   галочки живут в localStorage, «всё готово» ставит m5_onb_done. */
var OB_STEPS=[
  {t:'Аккаунт создан',fixed:1},
  {t:'Jin уже знает твою роль и правила M5',fixed:1},
  {t:'Задай Jin первый вопрос — строка сверху'},
  {t:'Посмотри видео «Как устроена система» · 2 мин',url:'/media/tutorial_system_ru.mp4'},
  {t:'Прочитай свой плейбук — блок «Your playbook» ниже'},
  {t:'Напиши «Привет, я на месте» в чат команды',url:''},
  {t:'Полная настройка аккаунтов — Setup checklist',url:'/onboarding/'}
];
function obState(i){ try{return localStorage.getItem('m5_ob_'+i)==='1';}catch(e){return false;} }
window.obToggle=function(i){
  try{
    localStorage.setItem('m5_ob_'+i,obState(i)?'0':'1');
    var all=true; for(var k=0;k<OB_STEPS.length;k++){ if(!OB_STEPS[k].fixed&&!obState(k)){all=false;break;} }
    if(all) localStorage.setItem('m5_onb_done','1');
    location.reload();
  }catch(e){}
};
function obHtml(){
  var buddy=(role==='smm'||role==='sales')?{name:'Alex',r:'Co-founder',img:'/img/ava_alex_t.webp'}:{name:'Vadym',r:'Director',img:'/img/ava_vadim_t.webp'};
  OB_STEPS[5].url=LINKS.telegram;
  if(typeof ROLEGUIDE!=='undefined'&&!ROLEGUIDE[role]) OB_STEPS[4].t='Загляни в файлы компании — плитка «Файлы» ниже';
  var done=0,total=OB_STEPS.length,rows='';
  for(var i=0;i<OB_STEPS.length;i++){
    var st=OB_STEPS[i], on=st.fixed||obState(i); if(on)done++;
    var link=st.url?(' <a href="'+st.url+'" target="_blank" rel="noopener" onclick="event.stopPropagation()" style="color:#96703B;text-decoration:underline;text-underline-offset:2px">открыть ↗</a>'):'';
    rows+='<div class="obstep'+(on?' done':'')+'"'+(st.fixed?'':' onclick="obToggle('+i+')" style="cursor:pointer"')+'><i>'+(on?'✓':'')+'</i><span>'+st.t+link+'</span></div>';
  }
  var pct=Math.round(done/total*100);
  return '<div class="nowcard obcard">'+
    '<div class="ob-head"><span class="now-tag">⚡ Your first day at M5</span><span class="ob-pct">'+pct+'%</span></div>'+
    '<div class="obbar"><i style="width:'+pct+'%"></i></div>'+rows+
    '<div class="lsn" style="color:#8A8272;font-size:11.5px;margin-top:6px">Отмечай шаги по мере выполнения — когда всё готово, кабинет переключится в рабочий режим.</div>'+
    '<div class="buddy"><img src="'+buddy.img+'" alt="" loading="lazy" decoding="async"><div><b>'+buddy.name+' · '+buddy.r+'</b><span>Твой бадди: любой вопрос — пиши напрямую, это нормально.</span></div>'+
    '<a class="now-btn" href="'+LINKS.telegram+'" target="_blank" rel="noopener">Написать →</a></div></div>';
}
function pulseHtml(){
  if(NEWBIE||(role!=='founder'&&role!=='director')) return '';
  var P=[
    {i:'plLeads',k:'Leads · 7d',v:'…',d:'считаю…',s:'все источники',url:LINKS.jobtread},
    {i:'plPipe',k:'Pipeline',v:'…',d:'считаю…',s:'JobTread',url:LINKS.jobtread},
    {i:'plBook',k:'Booking rate',v:'…',d:'лид → смета',s:'JobTread',url:LINKS.jobtread},
    {i:'plExp',k:'Расходы',v:'…',d:'считаю…',s:'открыть таблицу',url:LINKS.expenses}
  ];
  return '<div class="sec">Company pulse · 7 days</div><div class="pulsegrid">'+P.map(function(p){
    return '<a class="ptile"'+(p.i?' id="'+p.i+'"':'')+' href="'+p.url+'" target="_blank" rel="noopener"><div class="pk">'+p.k+'</div><b>'+p.v+'</b><div class="pdelta">'+p.d+'</div><small>'+(p.s||'')+'</small></a>';}).join('')+'</div>';
}
/* Живые лиды с M5 Hub (тот же endpoint, что Jin; credentials:'omit' — см. askAgent) */
function loadPulse(){
  try{
    if(!window.fetch||!document.getElementById('plLeads'))return;
    fetch(JIN_HOOK+'?pulse=1&k=m5p-4471&cb=cb',{credentials:'omit'}).then(function(r){return r.text();}).then(function(t){
      var m=t.match(/^\s*cb\(([\s\S]*)\)\s*;?\s*$/); var d=null; try{d=JSON.parse(m?m[1]:t);}catch(e){}
      if(!d||typeof d.leads7!=='number'){pulseFallback_();return;}
      var L=document.getElementById('plLeads');
      var delta=(typeof d.leadsPrev==='number')?(d.leads7-d.leadsPrev):null;
      L.querySelector('b').textContent=d.leads7;
      var pd=L.querySelector('.pdelta');
      if(d.leads7===0){ pd.textContent='до запуска рекламы'; }
      else { pd.textContent=(delta===null)?'за 7 дней':((delta>=0?'+':'')+delta+' vs прошлая неделя'); if(delta!==null&&delta>0)pd.className='pdelta up'; }
      if(typeof d.site7==='number')L.querySelector('small').textContent='с сайта — '+d.site7;
      /* Виза: пока Вадим ничего не загрузил — ведём его туда прямо из карточки «Now».
         Фаундерам в блоке E-2 показываем, сколько файлов уже лежит. */
      try{
        var vn=parseInt(d.visa||'0',10)||0;
        if(role==='director'&&vn===0){
          var nb=document.querySelector('.nowcard');
          if(nb&&!NEWBIE) nb.innerHTML='<span class="now-tag">⚡ Now</span><div class="now-txt">'+
            '<b>Документы по визе E-2</b> — раздел в CRM готов, внутри инструкция «читать первым»: паспорт, статус, диплом, опыт. Загружай по частям, как удобно.</div>'+
            '<a class="now-btn" href="'+LINKS.visaVadim+'" target="_blank" rel="noopener">Открыть раздел →</a>';
        }
        var vl=document.querySelector('a.stk[href="'+LINKS.visaVadim+'"] span');
        if(vl&&vn>0) vl.textContent='Загружено файлов: '+vn+(d.visaSeen?' · последние: '+d.visaSeen:'');
      }catch(ev){}
      var E=document.getElementById('plExp');
      if(E&&d.exp){ E.querySelector('b').textContent='$'+(Math.round(Number(d.exp)/100)/10)+'K'; E.querySelector('.pdelta').textContent='весь период · на '+(d.expUpd||''); }
      else if(E){ E.querySelector('b').textContent='→'; E.querySelector('.pdelta').textContent='открыть реестр'; }
      /* Company · back office: живые доход/расход/итог/подрядчики */
      try{
        var cR=document.getElementById('coRev'),cE=document.getElementById('coExp'),cN=document.getElementById('coNet'),cV=document.getElementById('coVend');
        var cRv=Number(d.rev||0), cEx=Number(d.exp||0);
        if(cR){ cR.querySelector('b').textContent='$'+cRv.toLocaleString('en-US'); if(d.revUpd)cR.querySelector('.pdelta').textContent='обновлено '+d.revUpd; }
        if(cE){ cE.querySelector('b').textContent='$'+cEx.toLocaleString('en-US'); if(d.expUpd)cE.querySelector('.pdelta').textContent='обновлено '+d.expUpd; }
        if(cN){ var cNt=cRv-cEx; cN.querySelector('b').textContent=(cNt<0?'−$':'$')+Math.abs(cNt).toLocaleString('en-US'); }
        if(cV){ cV.querySelector('b').textContent=String(Number(d.vend||0)); }
      }catch(eCo){}
      var PP=document.getElementById('plPipe'), BB=document.getElementById('plBook'), jp=d.pipe;
      if(PP){ if(jp&&jp.total>0){ PP.querySelector('b').textContent=jp.total; PP.querySelector('.pdelta').textContent='Лиды '+jp.lead+' · Сметы '+jp.est+' · Работа '+jp.work; }
        else { PP.querySelector('b').textContent='0'; PP.querySelector('.pdelta').textContent='воронка пуста — всё впереди'; } }
      if(BB){ if(jp&&jp.booking>=0){ BB.querySelector('b').textContent=jp.booking+'%'; }
        else { BB.querySelector('b').textContent='—'; BB.querySelector('.pdelta').textContent='появится с первыми лидами'; } }
    }).catch(function(){pulseFallback_();});
  }catch(e){}
}
function pulseFallback_(){
  try{
    var ids=['plLeads','plPipe','plBook','plExp'];
    for(var i=0;i<ids.length;i++){ var el=document.getElementById(ids[i]); if(!el)continue;
      el.querySelector('b').textContent='→';
      el.querySelector('.pdelta').textContent=(ids[i]==='plExp')?'открыть реестр':'открыть в JobTread';
    }
  }catch(e){}
}

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
  '<div class="hero2">'+
    '<div class="h2-top">'+
      (avaUrl?'<img class="h2-ava" src="'+avaUrl+'" alt="" decoding="async">':'')+
      '<div class="h2-id"><b>'+((member&&typeof member.name==='string'&&member.name&&!preview)?esc(member.name.split(' ')[0]):'M5 Team')+'</b><span>'+cfg.sub+'</span></div>'+
      '<div class="h2-clock"><b id="h2Time">–:–</b><span>Miami</span></div>'+
    '</div>'+
    '<div class="ask h2-ask"><span class="askic">✦</span><input type="text" id="askInput" placeholder="Ask Jin — tasks, clients, how-to…" onkeydown="if(event.key===\'Enter\')askAgent()">'+
    '<button onclick="askAgent()" aria-label="Send">→</button></div>'+
    '<div class="jin-reply" id="jinReply"></div>'+
    '<div class="h2-chips">'+cfg.chips.map(function(c){return '<span class="chip" onclick="askAgent(this.textContent)">'+c+'</span>';}).join('')+
    '<span class="chip h2-meet" onclick="openWelcome()">▶ Meet Jin · 30 sec</span></div>'+
  '</div>'+
  nowHtml()+
  quickHtml()+
  pulseHtml()+
  '<div class="sec">Daily work</div>'+
  '<div class="grid">'+TILES.slice(0,4).map(function(t){
    var icon=t.b?'<div class="ic brand">'+LOGOS[t.b]+'</div>':'<div class="ic">'+(t.ic||'•')+'</div>';
    var col=t.b?BC[t.b]:'#E6DECB';
    var url=t.link?LINKS[t.link]:'';
    if(t.k==='My growth') url='/growth/?role='+role;
    var ext=url&&url.charAt(0)!=='/';
    var open=url?('href="'+url+'"'+(ext?' target="_blank" rel="noopener"':'')):'href="#" onclick="return soon()"';
    return '<a class="tile" style="--bc:'+col+'" '+open+'>'+icon+
      '<div class="k2">'+t.k+'</div><b>'+t.t+' <i>→</i></b></a>';
  }).join('')+'</div>'+
  (TILES.length>4?('<details class="stackbox alltools"><summary><span>🧰 All tools</span><span class="stk-hint">'+(TILES.length-4)+' more</span></summary><div class="grid" style="padding:12px 14px 14px">'+TILES.slice(4).map(function(t){
    var icon=t.b?'<div class="ic brand">'+LOGOS[t.b]+'</div>':'<div class="ic">'+(t.ic||'•')+'</div>';
    var col=t.b?BC[t.b]:'#E6DECB';
    var url=t.link?LINKS[t.link]:'';
    if(t.k==='My growth') url='/growth/?role='+role;
    var ext=url&&url.charAt(0)!=='/';
    var open2=url?('href="'+url+'"'+(ext?' target="_blank" rel="noopener"':'')):'href="#" onclick="return soon()"';
    return '<a class="tile" style="--bc:'+col+'" '+open2+'>'+icon+'<div class="k2">'+t.k+'</div><b>'+t.t+' <i>→</i></b></a>';
  }).join('')+'</div></details>'):'')+
  '<div id="contSec"></div>'+
  '<div id="expSec"></div>'+
  '<div id="companySec"></div>'+
  '<div id="ideasSec"></div>'+
  '<div id="hireSec"></div>'+
  '<div id="guideSec"></div>'+
  '<div id="clientsSec"></div>'+
  '<div id="planSec"></div>'+
  '<div id="lessonSec"></div>'+
  '<div id="kpiSec"></div>'+
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
if(role==='founder'||role==='director') setTimeout(loadPulse,50);

/* ── Спейсы-страницы (25.08, принцип Notion): каждый раздел — отдельная страница,
   в которую проваливаешься из левой панели. Роутинг по hash (#/route), моб. — плитки
   на главной. «Закольцовка»: на каждой странице чипы-связи с соседними системами. */
(function(){
  try{
    if(document.getElementById('m5side')) return;
    var CRM='https://crm.m5miami.com';
    var ROUTES=[
      {r:'home',    t:'Главная',   ic:'🏠', secs:[]},
      {r:'tasks',   t:'Задачи',    ic:'📌', secs:['#stackSec'], sub:'Доска задач — в CRM; здесь стек и планы',
        rel:[['Доска задач',CRM+'/tasks'],['Спринт команды','https://m5miami.com/sprint/']]},
      {r:'clients', t:'Клиенты',   ic:'👥', secs:['#clientsSec'], sub:'Кабинеты клиентов и допродажи',
        rel:[['CRM · сделки',CRM+'/proposals'],['Файлы · договоры',CRM+'/files?b=deals'],['Демо-кабинет','/client/?p=brickell-demo']]},
      {r:'projects',t:'Проекты',   ic:'📖', secs:['#kpiSec','#lessonSec'], sub:'Как вести объект · обучение JobTread',
        rel:[['JobTread','https://app.jobtread.com'],['Файлы · объекты',CRM+'/files?b=projects']]},
      {r:'content', t:'Контент',   ic:'📸', secs:['#contSec'], sub:'Съёмка, соцсети, куда скидывать',
        rel:[['Файлы · контент',CRM+'/files?b=content']]},
      {r:'expenses',t:'Финансы',   ic:'💸', secs:['#expSec'], sub:'Расходы и чеки',
        rel:[['Чеки',CRM+'/files?b=receipts']]},
      {r:'company', t:'Компания',  ic:'🏢', secs:['#companySec','#ideasSec'], sub:'Back office, идеи, партнёрство',
        rel:[['Файлы · документы',CRM+'/files?b=legal']]},
      {r:'people',  t:'Кандидаты', ic:'💼', secs:['#hireSec'], sub:'Найм и портал join',
        rel:[['Портал найма','/join/'],['Файлы · HR',CRM+'/files?b=hr']]},
      {r:'plan',    t:'План E-2',  ic:'🗓', secs:['#planSec'], sub:'Дорожная карта визы',
        rel:[['Чеклист спринта','https://m5miami.com/sprint/']]},
      {r:'playbook',t:'Playbook',  ic:'📘', secs:['#guideSec'], sub:'Твоя роль и кто что делает',
        rel:[['Онбординг','/onboarding/']]}
    ];
    /* страницы: переносим секции внутрь и раскрываем аккордеоны в плоские блоки */
    var wrap=document.querySelector('.wrap:not(.hbar)'); if(!wrap) return;
    var live=[ROUTES[0]];
    for(var i=1;i<ROUTES.length;i++){
      var R=ROUTES[i], els=[];
      for(var j=0;j<R.secs.length;j++){ var e=document.querySelector(R.secs[j]); if(e) els.push(e); }
      if(!els.length) continue;
      live.push(R);
      var pg=document.createElement('section');
      pg.className='space'; pg.id='sp-'+R.r;
      var rel='';
      for(var k=0;k<(R.rel||[]).length;k++){
        rel+='<a class="rel" href="'+R.rel[k][1]+'"'+(/^http/.test(R.rel[k][1])?' target="_blank" rel="noopener"':'')+'>'+esc(R.rel[k][0])+' ↗</a>';
      }
      pg.innerHTML='<div class="crumbs"><a href="#/home">M5 Start</a> / '+esc(R.t)+'</div>'
        +'<div class="sp-head"><span class="sp-ic">'+R.ic+'</span><div><h1>'+esc(R.t)+'</h1>'
        +(R.sub?'<p>'+esc(R.sub)+'</p>':'')+'</div></div>'
        +(rel?'<div class="rels">'+rel+'</div>':'')
        +'<div class="sp-body"></div>';
      var body=pg.querySelector('.sp-body');
      for(var j2=0;j2<els.length;j2++) body.appendChild(els[j2]);
      wrap.appendChild(pg);
    }
    /* перекладываем: Socials → Контент, Partnership → Компания */
    setTimeout(function(){
      var all=document.querySelectorAll('details.stackbox');
      for(var a=0;a<all.length;a++){
        var t=(all[a].querySelector('summary')||{}).textContent||'';
        if(/Socials/i.test(t)){ var c=document.querySelector('#sp-content .sp-body'); if(c) c.appendChild(all[a]); }
        if(/Partnership/i.test(t)){ var cp=document.querySelector('#sp-company .sp-body'); if(cp) cp.appendChild(all[a]); }
      }
      /* на страницах аккордеоны всегда раскрыты и без карточной рамки */
      var boxes=document.querySelectorAll('.space details.stackbox');
      for(var b=0;b<boxes.length;b++){ boxes[b].setAttribute('open',''); boxes[b].className+=' flat'; }
      var sums=document.querySelectorAll('.space summary > span:first-child');
      for(var sSum=0;sSum<sums.length;sSum++){
        sums[sSum].textContent=sums[sSum].textContent.replace(/^[^A-Za-zА-Яа-яЁё0-9«"]+/,'');
      }
      route();
    },0);
    /* главная: элементы верхнего уровня + плитки спейсов для мобилы */
    var homeEls=[];
    ['.hero2','.nowcard','.quick','.pulsegrid','.grid'].forEach(function(sel){
      var e2=wrap.querySelector(sel); if(e2){ e2.classList.add('home-el'); homeEls.push(e2);
        if(e2.previousElementSibling&&e2.previousElementSibling.className==='sec'){ e2.previousElementSibling.classList.add('home-el'); } }
    });
    var at=wrap.querySelector(':scope > details.stackbox'); if(at) at.classList.add('home-el');
    var idx=document.createElement('div'); idx.className='sp-index home-el';
    var ih='';
    for(var q=1;q<live.length;q++){
      ih+='<a href="#/'+live[q].r+'"><i>'+live[q].ic+'</i><b>'+esc(live[q].t)+'</b><span>'+esc(live[q].sub||'')+'</span></a>';
    }
    idx.innerHTML=ih; wrap.appendChild(idx);
    /* панель слева: роуты + инструменты */
    var h='<div class="side-logo">M<b>5</b><small>START</small></div>'
      +'<div class="side-role"><b>'+esc(cfg.label)+'</b>'
      +((member&&member.name&&!preview)?esc(member.name):'Private workspace')+'</div>';
    for(var n=0;n<live.length;n++){
      h+='<a class="sn" href="#/'+live[n].r+'" data-r="'+live[n].r+'"><i>'+live[n].ic+'</i>'+esc(live[n].t)+'</a>';
    }
    h+='<div class="side-sep">Инструменты</div>'
      +'<a class="sn" href="'+(LINKS.salescrm||CRM)+'" target="_blank" rel="noopener"><i>📇</i>CRM</a>'
      +'<a class="sn" href="'+(LINKS.files||CRM+'/files')+'" target="_blank" rel="noopener"><i>📁</i>Файлы</a>'
      +'<a class="sn" href="'+(LINKS.jobtread||'#')+'" target="_blank" rel="noopener"><i>🛠</i>JobTread</a>'
      +'<div class="side-foot"><a href="/">m5miami.com</a><span onclick="signout()">Sign out</span></div>';
    var aside=document.createElement('aside');
    aside.className='side'; aside.id='m5side'; aside.innerHTML=h;
    document.body.appendChild(aside);
    document.body.className+=' has-side';
    /* роутер */
    function cur(){ var m=location.hash.match(/^#\/([a-z-]+)/); return (m&&m[1])||'home'; }
    function route(){
      var r=cur(), ok=false;
      for(var v=0;v<live.length;v++) if(live[v].r===r) ok=true;
      if(!ok) r='home';
      document.body.setAttribute('data-r',r);
      var links=aside.querySelectorAll('a.sn[data-r]');
      for(var l=0;l<links.length;l++){ links[l].className='sn'+(links[l].getAttribute('data-r')===r?' on':''); }
      window.scrollTo(0,0);
    }
    window.addEventListener('hashchange',route); route();
  }catch(eSide){}
})();

/* Часы Майами в шапке (принцип AVG: часы Бали в hero кабинета) */
(function(){
  try{
    var el=document.getElementById('h2Time'); if(!el) return;
    function tick(){ el.textContent=new Intl.DateTimeFormat('en-US',
      {timeZone:'America/New_York',hour:'numeric',minute:'2-digit'}).format(new Date()); }
    tick(); setInterval(tick,30000);
  }catch(eClk){}
})();



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
 /* Субтитр обновлён 24.08 под переезд файлов в CRM. ВНИМАНИЕ: озвучка jin2_v3.mp3
    ещё говорит «Google Drive» — нужен ре-рендер голоса, иначе текст ≠ звук. */
 {v:'/media/jin2_s3.mp4', a:'/media/jin2_v3.mp3', c:'We’re a tech-first company: <b>JobTread</b> runs our projects, <b>Telegram</b> keeps us in sync, and every file lives in our own <b>M5 CRM</b>.'},
 {v:'/media/jin2_s4.mp4', a:'/media/jin2_v4.mp3', c:'Our mission is bold — we craft Miami’s most beautiful <b>renovations</b> and signature <b>plaster finishes</b>.'},
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
var EPLAN_UPD='01.08';
var EPLAN=[
 {m:'Август', tag:'Фундамент', items:[
   ['✅','LLC зарегистрирована — M5 Studio Miami LLC','Sunbiz: ACTIVE, № L26000418311, подана 07.08 (effective 03.08), manager-managed — Алекс и Влад MGR. Осталось: EIN (SS-4 подписать и вернуть бухгалтеру). Как придёт EIN — скажи Клоду: запустит триггеры (банк-чеклист, QuickBooks, Google Ads-профиль Organization).'],
   ['✅','Американский номер телефона','Готово: +1 786 407 4441 (WhatsApp Business) — стоит на сайте и в кабинете клиента.'],
   ['⬜','Instagram M5 + запуск рекламы','Таргет на декоративную штукатурку. Аккаунт, контент, первая кампания.'],
   ['⬜','Сайт: реальные фото работ — Вадим','Реальные работы по штукатурке, сделанные в США, вместо стоков.'],
   ['⬜','Старт поиска шоурума','Майами, центральные улицы, до 100 м²: шоурум + склад + офис. См. подсказку «Шоурум» ниже.'],
   ['⬜','Source of funds — подготовить','Документы происхождения инвестиций к сентябрьскому переводу. Суммы и детали — офлайн с адвокатом.'],
   ['🎯','Цель месяца','Работают сайт + Instagram + реклама, лиды идут, система крутится.']
 ]},
 {m:'Сентябрь', tag:'Запуск', items:[
   ['⬜','Алекс прилетает в Майами (B1/B2)','Первые числа сентября. Лично открывает банковский счёт компании.'],
   ['⬜','Перевод инвестиций на счёт компании','По плану бизнес-плана; суммы и статус — офлайн с адвокатом.'],
   ['⬜','До 15 сентября — аренда помещения','Подписать аренду → реновация → готовим шоурум.'],
   ['⬜','Первые 3+ клиента на штукатурку','Запуск реальных работ — выручка и трекшн для кейса.'],
   ['⬜','Вадим официально в штате','Директор/менеджер, W-2, реальная работа — база для его E-2.']
 ]},
 {m:'Октябрь', tag:'Инвестиции + статус', items:[
   ['⬜','Инвестиции потратить по плану (сен–окт)','Шоурум · авто под материалы · техника, столы, компьютеры · сервисы · найм SMM-таргетолога.'],
   ['⚠️','Вадим: продление статуса','План с адвокатом — заранее, до осеннего дедлайна. Детали — офлайн.'],
   ['⬜','Бизнес-план v4 — финал','Намерения заменяем фактами: инвестиции потрачены и заведены по плану, реальные фото шоурума вместо рендеров.']
 ]},
 {m:'Ноябрь', tag:'Подача', items:[
   ['⬜','Варшава — подача E-2 всей командой','Алекс + Влад — инвесторы E-2. Вадим — E-2 employee.'],
   ['ℹ️','Обоснование Вадима','Незаменимый специалист: инженерное образование + мастер декоративной штукатурки + опыт управления производством.']
 ]}
];
var EPLAN_HINTS=[
 ['Что такое E-2','Виза инвестора США для граждан стран-участниц договора. Требует существенных инвестиций в реальный работающий бизнес. Алекс и Влад подаются как инвесторы (по 50%), Вадим — как ключевой сотрудник той же компании. Подача — в консульстве (Варшава), к подаче нужны: работающий бизнес, потраченные инвестиции, бизнес-план, source of funds.'],
 ['Бизнес-план','Живой документ: сейчас v3, к подаче станет v4 — намерения заменяются фактами (реальный шоурум, реальные клиенты, реальные траты). Хранится в CRM · Файлы → Legal, обновляет Клод после каждого события.'],
 ['Шоурум','<img src="/media/showroom_main.webp" style="max-width:100%;border-radius:10px;margin:6px 0"><img src="/media/showroom_storage.webp" style="max-width:100%;border-radius:10px;margin:6px 0"><img src="/media/showroom_concept.webp" style="max-width:100%;border-radius:10px;margin:6px 0"> Майами, центральные улицы, до 100 м²: шоурум декоративной штукатурки + склад материалов + офис. Концепт — «art-concrete». Ищем через LoopNet, Crexi и локальных брокеров; бюджет аренды $5–10K/мес.']
];
(function(){
  try{
    if(role!=='director'&&role!=='founder')return;
    var el=document.getElementById('planSec'); if(!el)return;
    /* Интерим-гейт (аудит 01.08): E-2 не рендерим по одному ?role= — только по хэшу почты
       Алекса/Влада/Вадима из m5_member. Полный серверный гейт — следующий шаг. */
    var TRIO=['9ee4c44ded143508a8f6b70a94f34606ac5f7f95ac32211472131b694964ef47',
              '89f6492713f94c1bb2dca64eb38d5ff1cc9a9f4f23b67c896b1d8eb914913322',
              '5c73e10d48407d2b9ff50fb4383019c45b75eafe46b334ea4bf20de51d7df9ba'];
    var mm=null; try{mm=JSON.parse(localStorage.getItem('m5_member')||'null');}catch(e){}
    if(OPEN_ACCESS&&!(mm&&mm.email))mm={email:'guest@open'};
    if(!mm||!mm.email||!window.crypto||!crypto.subtle)return;
    crypto.subtle.digest('SHA-256',new TextEncoder().encode(String(mm.email).trim().toLowerCase())).then(function(tbuf){
    var ta=new Uint8Array(tbuf),thx='';for(var ti=0;ti<ta.length;ti++)thx+=('0'+ta[ti].toString(16)).slice(-2);
    if(!OPEN_ACCESS&&TRIO.indexOf(thx)===-1)return;
    var op=false; try{op=localStorage.getItem('m5_eplan_open')==='1';}catch(e){}
    var eDone=0,eAll=0;
    for(var ex=0;ex<EPLAN.length;ex++)for(var ey=0;ey<EPLAN[ex].items.length;ey++){var es=EPLAN[ex].items[ey][0]; if(es==='✅'||es==='⬜'||es==='⚠️'){eAll++; if(es==='✅')eDone++;}}
    var h='<details class="stackbox"'+(op?' open':'')+'><summary><span>🗓 План E-2 · август → ноябрь</span><span class="stk-hint">'+eDone+'/'+eAll+' · обновлено '+EPLAN_UPD+'</span></summary><div class="stack">';
    h+='<a class="stk" href="'+LINKS.visaVadim+'" target="_blank" rel="noopener" style="margin-top:10px"><b>🛂 Visa — Vadim (документы Вадима)</b><span>Вадим загружает сюда паспорт, диплом, опыт, финансы · приватный раздел CRM · внутри инструкция «читать первым»</span></a>';
    h+='<div class="lsn" style="margin-top:10px">📄 <b>Бизнес-план E-2</b> — закреп: <a href="'+LINKS.legalDocs+'" target="_blank" rel="noopener" style="color:#96703B">CRM · Файлы → Legal</a></div>';
    h+='<div class="lsn" style="margin-top:12px"><b>💰 Шкала инвестиций</b> — суммы и статус живут в Бизнес-плане (CRM · Файлы) и офлайн с адвокатом; в кабинете не публикуем.</div>';
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
    });
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
    var html='<details class="stackbox"'+(opened?' open':'')+'><summary><span>🎓 JobTread — как работать</span><span class="stk-hint">'+LESSON.length+' шагов</span></summary><div class="stack">';
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
 ['AI & Dev','Почтовый дозор','ежедневно 08:52: Клод читает alex@ за сутки, важное — Алексу в TG (локально на Mac)','https://mail.google.com/'],
 ['Операционка','JobTread','операционное ядро: лиды → сметы → производство → счета','https://app.jobtread.com/'],
 ['Операционка','CRM · Файлы','единое хранилище: объекты, контент, чеки, документы, HR','https://crm.m5miami.com/files'],
 ['Операционка','Google Admin','почты @m5miami.com, сброс паролей команде','https://admin.google.com/'],
 ['Операционка','Apps Script «M5 Hub»','автоматика: лиды→TG, SLA, склад, бэкенд Jin','https://script.google.com/u/2/home/projects/1TCKRgl1AKm6-9gyU3WHZpkHWsJRbkgyUkxiUiMvJYJq4p1m9_bv1jP-j/edit'],
 ['Операционка','Google Cloud «m5-site»','вход через Google на сайте (OAuth)','https://console.cloud.google.com/auth/overview?project=m5-site'],
 ['Сайт & аналитика','Client Hub','кабинет клиента: прогресс, кредиты 3%, реферал $500/$500, фидбек (данные — из JobTread по мере интеграции)','/client/?p=brickell-demo'],
 ['Сайт & аналитика','Houzz','маркетинг-канал: профиль, портфолио, отзывы; реклама — позже','https://pro.houzz.com/'],
 ['Сайт & аналитика','GitHub','код сайта (m5miami-site), превью (m5miami-preview) + бэкап (M5-Dashbord)','https://github.com/softoleksii5'],
 ['Сайт & аналитика','Preview-сайт','preview.m5miami.com — полный сайт целиком, пока на боевой главной заглушка coming-soon (реш. 17.08)','https://preview.m5miami.com/'],
 ['Сайт & аналитика','Porkbun','домены: m5miami.com + m5florida.com (301-редирект), DNS, автопродление','https://porkbun.com/'],
 ['Сайт & аналитика','GA4','сколько людей и откуда','https://analytics.google.com/analytics/web/'],
 ['Сайт & аналитика','MS Clarity','записи сессий, тепловые карты, rage clicks','https://clarity.microsoft.com/projects/view/xpd5kfm31r/dashboard'],
 ['AI & Dev','Apps Script API','Клод правит и деплоит M5 Hub программно (gapi.sh, проект под alex@)','https://script.google.com/'],
 ['AI & Dev','Supabase (M5)','база CRM + приватные бакеты файлов: projects, content, receipts, legal, hr','https://supabase.com/dashboard/projects'],
 ['Связь','WhatsApp Business','+1 786 407 4441 — бизнес-номер: сайт, кабинет клиента, реклама','https://wa.me/17864074441'],
 ['Связь','Telegram-бот @m5miami_bot','рассылки; группы «M5 Team» и «M5 Partners»','https://t.me/m5miami_bot'],
 ['Связь','Gmail','рабочая почта alex@m5miami.com','https://mail.google.com/'],
 ['Связь','Loom','видео-объяснялки команде: экран + кружочек с камерой, ссылка сразу','https://www.loom.com/'],
 ['Связь','Zight','скриншоты и запись экрана со стрелочками/кружками (аннотации)','https://zight.com/']
];

/* «Мои задачи» — личный TODO Алекса, ведёт Клод (обновляется после каждого решения
   в чате; «сделал» → ✅). Виден только Алексу (hash-gate). */
var ALEXTODO_UPD='19.08';
/* Статусы: todo | done | soon. 4-й элемент 'm' = «мелочь на 5 минут» (отдельная
   секция под целью недели). Кодовое слово Алекса в чате Клоду — «ПОГНАЛИ»:
   Клод открывает этот список и ведёт по шагам, «сделал» → done. */
var ALEXTODO=[
 ['soon','Porkbun: DNS-строка для превью-поддомена (теперь опционально)','Код 2026 на заглушке УЖЕ открывает полный сайт прямо на боевом (/welcome.html за гейтом, реш. 19.08) — блокера нет. DNS-строка нужна, только если захочешь отдельный чистый поддомен preview.m5miami.com (делиться ссылкой без пароля, репо уже готов): porkbun.com → Domain Management → m5miami.com → DNS Records → Add: Type CNAME, Host «preview», Answer «softoleksii5.github.io», TTL 600. API-ключей Porkbun у Клода нет — шаг ручной (2 мин).','m'],
 ['done','JobTread — связь работает, демо-мусор вычищен','Заявки с сайта создают Customer+Contact+Job автоматически. Клод получил доступ на запись (scripts/jt_api.sh) и удалил демо-джобы Taras — SLA-алерты остановлены.'],
 ['done','Apps Script v13 — Клод применил сам через API','Фидбек/идеи → Partners, SLA только фаундерам (максимум 2 на лид), Jin знает JobTread и кабинет клиента, Monday отключён. Плюс найден и выключен локальный агент «SLA-алерт больше часа» (launchd, слал каждые 30 мин). Telegram чист.'],
 ['done','Раздел «Виза — Вадим» готов','Создан и открыт только вам троим (alex@, vlad@, vadim@). С 24.08 живёт в CRM · Файлы → Legal, плитка «Виза» ведёт туда.','m'],
 ['done','Договор с Владом — в приватном разделе файлов','Подписанный PDF v3 от 22.07 загружен. С 24.08 — CRM · Файлы → Legal (приватный бакет). Плитка в кабинете ведёт туда.','m'],
 ['done','Файлы компании — в CRM (решение 24.08)','Хранилище: Supabase Storage за кабинетом crm.m5miami.com/files — объекты, контент, чеки, документы, HR. Кабинеты, онбординг и портал найма переведены на него. Google Drive остаётся архивом только для чтения.','m'],
 ['done','Показать команде кабинет клиента','Пост с демо-ссылкой и видео-туториалом ушёл в M5 Team → Pulse & Wins (31.07).','m'],
 ['done','US-номер есть: +1 786 407 4441 (WhatsApp Business)','Клод заменил номер на всём сайте и в кабинете клиента (31.07). Разблокированы: Google Business Profile, Meta-реклама — следующие шаги списка.'],
 ['todo','Meta Business: FB-страница + Instagram + 2 строки Клоду','business.facebook.com → страница «M5 Interior Design & Build» → создать/привязать IG (@m5miami или @m5.miami). ~20 мин. Затем пришли Клоду 2 строки: Pixel ID (Events Manager) + строку доменной верификации — код пикселя уже вшит в сайт и ждёт ID. Чеклист: 4 Рабочие документы/Настройка_Meta_и_номер.md.'],
 ['soon','Google Business Profile — по приезде в Майами','Реш. 04.08: видео-верификация GBP требует физического присутствия; из Дубая высокий риск бана профиля, который трудно снять. Заводим с адресом LLC / по прилёте в сентябре.'],
 ['todo','TikTok + YouTube — завести аккаунты','На alex@m5miami.com, по 2 минуты. Контент — кросспост тех же Reels.'],
 ['todo','Написать Клоду «аккаунты готовы»','Дальше я сам: контент-календарь на 4 недели + первые 10 сценариев рилсов (вкл. ролик-знакомство Влада) + My Stack.'],
 ['todo','JobTread: забронировать онбординг — 2 минуты, вкладка уже открыта','CEO JobTread ответил: время по почте не согласовывают, бронь только в приложении → app.jobtread.com/help/meet. Наш персональный менеджер — Пабло. Бери слот 10:00 Central = 19:00 Дубай = 11:00 у Вадима (холд на вторник в календаре стоит). На будущее: писать им на support@jobtread.com, а не info@ — там тикет и ответ за час.'],
 ['todo','JobTread: тур на 40 минут ДО звонка','Пройди демо-джоб «DEMO Turnkey Brickell 2BR» — гайд: M5/4 Рабочие документы/JobTread_первая_сессия.md. Главное — собрать тестовую смету и отправить её себе как клиенту. Каталог смет в аккаунте пока дефолтный от JobTread, наших услуг нет — это работа Вадима на звонке.'],
 ['todo','Влад в JobTread','Settings → Members → + Internal Users → Vlad / vlad@m5miami.com / Admin → тумблер +$20/мес → Submit.','m'],
 ['done','Тест-карточки в Telegram удалены','Клод вычистил 23 сообщения (тесты, demo-лиды, SLA-дубли) 31.07.','m'],
 ['done','Пульт «Company · back office» в кабинете (04.08)','Документы · финконтроль (живые доход/расход/итог) · налоги-план · реестр подрядчиков · Team-реестр с контрактами. Бот понимает «доход 3000 депозит — объект» и «подрядчик Имя, специализация, тел, ставка». Заодно починен баг: бот писал «LITN» вместо переносов строк.','m'],
 ['todo','Прислать чек Higgsfield','Сумма $49 в реестре не подтверждена — глянь письмо Stripe, с какой почты платил.','m'],
 ['done','LLC зарегистрирована — M5 Studio Miami LLC (L26000418311)','Sunbiz ACTIVE, подана 07.08, effective 03.08, Алекс и Влад — MGR. Ждём EIN (SS-4 подписать и вернуть бухгалтеру) — как придёт, скажи Клоду: запустит банк-чеклист, QuickBooks и Google Ads (профиль Organization).','m'],
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
   '<p class="mkp">Карточка в Google Maps и поиске «decorative plaster miami». Фото работ + отзывы после каждого проекта (движок отзывов в roadmap). Бесплатные горячие локальные лиды. Телефон — только US: +1 786 407 4441 (WhatsApp Business).</p>'},
 {id:'hz',n:'Houzz',c:'#4DBC15',st:'портфолио · ниша',
  ic:'<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"><path d="M4 21V10.5L12 4l8 6.5V21h-6v-6h-4v6H4Z"/></svg>',
  mock:'<p class="mkp" style="margin-top:6px">Профиль-портфолио: каждый сданный проект — фотокейс, отзывы клиентов. Тут владельцы домов Майами ищут, с кем строить — аудитория с деньгами и намерением.</p><p class="mkp">Наполняет Алекс. Платную рекламу Houzz (~$499/мес) не берём, пока не нужен доп. поток.</p>'}
];
var ROADMAP=[
 ['Сентябрь · LLC + банковский счёт открыты','QuickBooks Online + bookkeeper','бухгалтерия; сразу включаем нативный синк JobTread↔QBO — счета и платежи улетают сами'],
 ['Онбординг-звонок JobTread (ближайшие недели)','Stripe в JobTread','депозиты и milestone-платежи клиентов картой/ACH прямо из сметы'],
 ['Первая W-2 зарплата Вадима (~октябрь)','Gusto','payroll: зарплаты и зарплатные налоги, ~$40/мес + $6/чел'],
 ['Первый найм (sales / SMM / мастер)','Jin-KPI','панель мотивации: Jin считает по парным метрикам — Алекс/Вадим решают и платят; план в Кабинеты_и_Jin-KPI_план_M5.md'],
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
    if(OPEN_ACCESS&&!(m&&m.email))m={email:'guest@open'};
    if(!m||!m.email||!window.crypto||!crypto.subtle)return;
    crypto.subtle.digest('SHA-256',new TextEncoder().encode(String(m.email).trim().toLowerCase())).then(function(buf){
      var a=new Uint8Array(buf),h='';for(var i=0;i<a.length;i++)h+=('0'+a[i].toString(16)).slice(-2);
      if(!OPEN_ACCESS&&h!=='9ee4c44ded143508a8f6b70a94f34606ac5f7f95ac32211472131b694964ef47')return;
      var el=document.getElementById('stackSec'); if(!el)return;
      var groups=[],seen={};
      for(var i=0;i<STACK.length;i++){ if(!seen[STACK[i][0]]){seen[STACK[i][0]]=1;groups.push(STACK[i][0]);} }
      /* Свёрнут по умолчанию: клик по шапке разворачивает. Состояние помнится
         в localStorage, чтобы не сворачивалось при каждом заходе. */
      var opened=false; try{opened=localStorage.getItem('m5_stack_open')==='1';}catch(e){}
      var html='<details class="stackbox"'+(opened?' open':'')+'><summary><span>🧩 My Stack · private</span><span class="stk-hint">'+STACK.length+' сервисов + план</span></summary><div class="stack">';
      for(var g=0;g<groups.length;g++){
        html+='<div class="stk-g">'+groups[g]+'</div>';
        for(var j=0;j<STACK.length;j++){ if(STACK[j][0]!==groups[g])continue;
          html+='<a class="stk" href="'+STACK[j][3]+'" target="_blank" rel="noopener"><b>'+STACK[j][1]+'</b><span>'+STACK[j][2]+'</span></a>';
        }
      }
      var tdDone=0,tdAll=0,tdNextFound=false;
      for(var q=0;q<ALEXTODO.length;q++){ if(ALEXTODO[q][0]!=='soon'){tdAll++; if(ALEXTODO[q][0]==='done')tdDone++;} }
      var td='<details class="stackbox" id="tdBox"><summary><span>📌 My tasks · run by Claude</span><span class="stk-hint">'+tdDone+' из '+tdAll+' · обновлено '+ALEXTODO_UPD+'</span></summary><div class="stack">';
      td+='<div class="tdbar"><i style="width:'+(tdAll?Math.round(tdDone/tdAll*100):0)+'%"></i></div>';
      td+='<div class="lsn" style="margin:4px 0 8px;color:#8A8272">Напиши Клоду в чат кодовое слово <b style="color:#96703B">«ПОГНАЛИ»</b> — он вспомнит этот список и поведёт тебя по шагам, по одному.</div>';
      var tdRow=function(t,ic,cls){ return '<details class="pl'+cls+'"><summary>'+ic+' '+ALEXTODO[t][1]+(cls===' tdnext'?' <span class="tdgo">следующий шаг</span>':'')+'</summary><div class="lsn" style="padding:4px 10px 8px 34px">'+ALEXTODO[t][2]+'</div></details>'; };
      /* Секция 1: цепочка цели недели (всё, что не 'm' и не soon) */
      td+='<div class="stk-g">🎯 Цель недели · запустить соцсети</div>';
      var num=0, tdDoneRows='', tdDoneCnt=0;
      for(var t=0;t<ALEXTODO.length;t++){
        if(ALEXTODO[t][0]==='soon'||ALEXTODO[t][3]==='m')continue;
        if(ALEXTODO[t][0]==='done'){ tdDoneCnt++; tdDoneRows+=tdRow(t,'<span class="tdk done">✓</span>',' tddone'); continue; }
        num++; var cls='';
        if(!tdNextFound){ cls=' tdnext'; tdNextFound=true; }
        td+=tdRow(t,'<span class="tdk">'+num+'</span>',cls);
      }
      if(tdDoneCnt)td+='<details class="pl tddone"><summary><span class="tdk done">✓</span> Сделано ('+tdDoneCnt+')</summary><div style="padding:2px 0 2px 8px">'+tdDoneRows+'</div></details>';
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
      var sm='<details class="stackbox"><summary><span>📱 Socials · how it works</span><span class="stk-hint">'+SMMNET.length+' каналов</span></summary><div class="stack">';
      sm+='<div class="smflow"><span>🎥 Команда снимает<small>Вадим: 4 кадра + видео · Влад: лицо</small></span><i>→</i><span>📁 CRM · Файлы<small>Контент — всё сырьё</small></span><i>→</i><span>🤖 Клод<small>календарь · сценарии · тексты</small></span><i>→</i><span>📲 Публикация<small>планировщик Meta · 15 мин/день</small></span><i>→</i><span>💰 Лиды<small>сайт → JobTread · источник трекается</small></span></div>';
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

/* ═══ Кнопка «Идея / баг» — паттерн Игоря (emmpa): каждый в команде чинит систему.
   Мелкое Клод правит сам, крупное уходит Алексу. Отправка через M5 Hub (тот же
   endpoint, что Jin), type:'idea' — падает в Sheet + карточкой в Telegram. ═══ */
(function(){
  try{
    var css='.fbx{position:fixed;right:18px;bottom:18px;z-index:60;font-family:var(--mono);font-size:11px;letter-spacing:.1em;'+
    'text-transform:uppercase;background:#20242E;color:#E3C795;border-radius:24px;padding:12px 18px;cursor:pointer;'+
    'box-shadow:0 8px 24px rgba(20,18,15,.28);border:1px solid rgba(227,199,149,.35)}'+
    '.fbx:hover{background:#2C3140}'+
    '.fbm{position:fixed;inset:0;background:rgba(20,18,15,.5);z-index:61;display:none;align-items:center;justify-content:center;padding:18px}'+
    '.fbm.on{display:flex}'+
    '.fbm-box{background:#fff;border-radius:18px;max-width:440px;width:100%;padding:24px 24px 20px}'+
    '.fbm-box b{font-size:17px;color:#20242E}'+
    '.fbm-box p{font-size:12.5px;color:#8A8272;margin:6px 0 12px}'+
    '.fbm-box textarea{width:100%;box-sizing:border-box;border:1px solid #EBE3D4;border-radius:12px;padding:12px;min-height:90px;font:14px var(--sans);color:#20242E;resize:vertical}'+
    '.fbm-a{display:flex;gap:10px;justify-content:flex-end;margin-top:12px}'+
    '.fbm-a span{font-family:var(--mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;padding:10px 18px;border-radius:20px;cursor:pointer}'+
    '.fbm-send{background:linear-gradient(90deg,#B0894F,#96703B);color:#fff}'+
    '.fbm-x2{color:#8A8272}'+
    '.fbm-ok{display:none;background:#F0F8F2;border:1px solid #CBE3D3;color:#3E8E5A;border-radius:10px;padding:10px 14px;font-size:13px;margin-top:10px}';
    var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
    var wrap=document.createElement('div');
    wrap.innerHTML='<div class="fbx" onclick="fbOpen()">⚡ Идея / баг</div>'+
    '<div class="fbm" id="fbm" onclick="if(event.target===this)fbClose()"><div class="fbm-box">'+
    '<b>⚡ Идея или баг</b>'+
    '<p>Что-то сломалось или есть идея, как сделать M5 лучше? Пиши как есть — уйдёт напрямую Алексу и Клоду (нашему AI-инженеру). Мелкое чиним быстро, крупное — после согласования.</p>'+
    '<textarea id="fbTxt" placeholder="Например: на телефоне обрезается прогресс-бар…"></textarea>'+
    '<div class="fbm-ok" id="fbmOk">Отправлено! Алекс и Клод увидят это в Telegram сегодня 🙌</div>'+
    '<div class="fbm-a"><span class="fbm-x2" onclick="fbClose()">Отмена</span><span class="fbm-send" onclick="fbSend()">Отправить</span></div>'+
    '</div></div>';
    document.body.appendChild(wrap);
    window.fbOpen=function(){document.getElementById('fbm').className='fbm on';};
    window.fbClose=function(){document.getElementById('fbm').className='fbm';};
    window.fbSend=function(){
      var t=(document.getElementById('fbTxt').value||'').trim(); if(!t)return;
      var m=null; try{m=JSON.parse(localStorage.getItem('m5_member')||'null');}catch(e){}
      var p={type:'idea',name:(m&&m.name)||'team member',email:(m&&m.email)||'',details:t,source:'cabinet:'+role};
      try{var s=JSON.stringify(p); if(navigator.sendBeacon){navigator.sendBeacon(JIN_HOOK,s);}else{fetch(JIN_HOOK,{method:'POST',mode:'no-cors',keepalive:true,body:s});}}catch(e){}
      document.getElementById('fbTxt').value='';
      var ok=document.getElementById('fbmOk');ok.style.display='block';
      setTimeout(function(){ok.style.display='none';fbClose();},1800);
    };
  }catch(e){}
})();

/* ═══ Jin-KPI · пилот системы мотивации (founder + director).
   Формула из ресёрча 31.07: Jin считает и ПРЕДЛАГАЕТ — человек утверждает —
   сотрудник видит логику. Парные метрики против закона Гудхарта. ═══ */
(function(){
  try{
    if(role!=='founder'&&role!=='director')return;
    var el=document.getElementById('kpiSec'); if(!el)return;
    var isDir=(role==='director');
    var ht='<details class="stackbox"'+(isDir?' open':'')+'><summary><span>📖 How to run a project · 3 steps</span><span class="stk-hint">ежедневный ритм</span></summary><div class="stack">';
    ht+='<div class="lsn"><b>0 · Старт проекта.</b> Договор подписан → PDF в карточку сделки в CRM (файл ложится в <b>Файлы → объекты</b>) → сообщение в Projects «Договор подписан: имя · адрес · старт». Дальше Клод заводит кабинет клиента, SMM снимает «до». Полная инструкция по ролям: Кто_чем_пользуется + Документооборот (4 Рабочие документы).</div>';
    ht+='<div class="lsn"><b>1 · Днём — фото и видео с объекта.</b> Кидай всё сырьё Джину в Telegram (тема объекта) — он сам разложит по объекту, стадию выбирать не надо. Посмотреть, что уже лежит, — плитка <b>Файлы</b>. Длинное видео, которое Telegram не берёт, — загрузи сам на crm.m5miami.com/files.</div>';
    ht+='<div class="lsn"><b>2 · Вечером — 2 минуты в Telegram.</b> В «M5 Team» → топик <b>Projects</b>: голосовое или пару строк — что сделали сегодня, что завтра, что нужно. Всё, отчёт сдан.</div>';
    ht+='<div class="lsn"><b>3 · Дальше — Джин и Клод.</b> Мы переносим статус в <b>кабинет клиента</b> — клиент видит галочки и фото сам, тебе руками ничего заполнять не надо. После подключения JobTread шаг 2 станет отчётом прямо в его приложении с фото — кабинет клиента обновится автоматически.</div>';
    ht+='<div class="lsn" style="color:#8A8272">Деньги и счета — <b>QuickBooks</b> (подключим после регистрации LLC — план в My Stack): мы туда только загружаем чеки. Вопросы в любой момент — Джину наверху или Алексу.</div>';
    ht+='</div></details>';
    /* Jin-KPI из кабинета убран до первого найма (аудит 01.08): применять некому.
       План остался в ROADMAP (My Stack) и в 4 Рабочие/Кабинеты_и_Jin-KPI_план_M5.md. */
    el.innerHTML=ht;
  }catch(e){}
})();


/* ═══ Контент: куда скидывать фото, видео и отзывы (02.08, вопрос Алекса про
   отзыв и видео у Вадима). Одно правило: не знаешь куда — шли боту. ═══ */
(function(){
  try{
    var el=document.getElementById('contSec'); if(!el)return;
    var op=false; try{op=localStorage.getItem('m5_cont_open')==='1';}catch(e){}
    if(/[?&]open=cont/.test(location.search)) op=true;   // прямая ссылка из закрепа/бота
    var h='<details class="stackbox"'+(op?' open':'')+'><summary><span>📸 Контент · куда скидывать</span><span class="stk-hint">3 пути — любой годится</span></summary><div class="stack">';
    h+='<div class="stk-g">Путь 1 · Тема объекта в Telegram — для объектов с договором</div>';
    h+='<div class="lsn">У каждого объекта есть тема «🏠 Имя объекта» в группе <b>M5 Team</b>. Открой её и кинь фото/видео — без подписей. Джин заберёт, разложит и поставит 👌. Не удаляй с телефона, пока нет 👌.</div>';
    h+='<div class="stk-g" style="margin-top:12px">Путь 2 · Личка бота — портфолио и всё без договора</div>';
    h+='<div class="lsn">Старые работы, шоу-рум, отзывы клиентов → в личку <b>@m5miami_bot</b> + одной строкой название объекта («мой объект на Collins, венецианка»). Отзыв — с подписью «отзыв».</div>';
    h+='<div class="stk-g" style="margin-top:12px">Путь 3 · Напрямую в CRM · Файлы — с телефона и с компьютера</div>';
    h+='<div class="lsn">Открой <b>crm.m5miami.com/files</b> (плитка «Файлы» в кабинете) → выбери объект → кнопка загрузки. На телефоне работает так же: из галереи выбрал кадры → загрузил. Не знаешь, куда положить — грузи без раздела, я разберу. Длинное видео, которое Telegram не берёт, — только этим путём. О любой загрузке я узнаю сам.</div>';
    h+='<a class="stk" href="'+LINKS.projects+'" target="_blank" rel="noopener"><b>🏠 Файлы объектов</b><span>объекты с договором: загрузка прямо со страницы</span></a>';
    if(role==='director'){
      h+='<a class="stk" href="'+LINKS.vadimWorks+'" target="_blank" rel="noopener"><b>🧱 Работы Вадима до M5 — твой архив</b><span>прошлые объекты: фото, процесс, видео — для сайта и рекламы</span></a>';
    }
    h+='<a class="stk" href="'+LINKS.contentInbox+'" target="_blank" rel="noopener"><b>📥 Входящее — если некогда думать</b><span>общая приёмка: кидай что угодно, разберу</span></a>';
    h+='<a class="stk" href="'+LINKS.reviews+'" target="_blank" rel="noopener"><b>⭐ Отзывы клиентов</b><span>видео, голосовые, скрины переписок — самое ценное</span></a>';
    h+='<div class="stk-g" style="margin-top:12px">Как снимать, чтобы кадры годились</div>';
    h+='<div class="lsn">Правило <b>«4 кадра каждый визит»</b>: до · процесс · после · макро-деталь. Вертикально — для рилсов, горизонтально — для сайта. Дневной свет, без вспышки; штукатурку снимай сбоку под углом — так видно рельеф.</div>';
    h+='<div class="lsn" style="color:#8A8272">Эти же ссылки — в закрепе группы «M5 Team» (сообщение, приколотое сверху). Стадии «до/процесс/после» никто не выбирает руками — это делаю я.</div>';
    el.innerHTML=h+'</div></details>';
    var box=el.querySelector('details.stackbox');
    if(box)box.addEventListener('toggle',function(){ try{localStorage.setItem('m5_cont_open',box.open?'1':'0');}catch(e){} });
  }catch(e){}
})();

/* ═══ Hiring: кандидаты с портала /join/ (02.08). Только founder/director.
   Данные за серверной сессией: m5_sid появляется при входе через кнопку Google. ═══ */
(function(){
  try{
    var el=document.getElementById('hireSec'); if(!el)return;
    if(role!=='founder'&&role!=='director')return;
    var sid=''; try{sid=localStorage.getItem('m5_sid')||'';}catch(e){}
    var ST={'new':'🆕 новый','liked':'👍 нравится','no':'👎 нет','pool':'💾 в пуле','hired':'🎉 нанят'};
    function head(hint){return '<details class="stackbox"><summary><span>💼 Hiring · кандидаты</span><span class="stk-hint">'+hint+'</span></summary><div class="stack">';}
    var tail='<a class="stk" href="/join/" target="_blank" rel="noopener"><b>🌐 Портал найма /join/</b><span>эту ссылку шлём кандидатам: бренд, квиз, тестовое задание, форма · их работы падают в CRM · Файлы → HR</span></a></div></details>';
    if(!sid){
      el.innerHTML=head('нужен вход через Google')+'<div class="lsn">Кандидаты видны только в защищённой сессии. Нажми <b>Sign out</b> и войди заново через <b>кнопку Google</b> — сессия включится сама, один раз на 60 дней.</div>'+tail;
      return;
    }
    window.m5cands=function(d){
      try{
        if(!d||!d.ok||!d.CANDS){ el.innerHTML=head('сессия истекла')+'<div class="lsn">Перезайди через кнопку Google на странице входа — и кандидаты появятся.</div>'+tail; return; }
        var c=d.CANDS,h=head(c.length?(c.length+' · 👍/👎 прямо здесь'):'пока пусто');
        if(!c.length)h+='<div class="lsn">Заявок ещё нет. Как только кандидат заполнит форму на /join/ — он появится здесь, а в Telegram придёт алерт. Кандидаты сохраняются навсегда: 💾 — в пул фрилансеров с их ставками.</div>';
        for(var i=0;i<c.length;i++){
          var x=c[i],lk=String(x.links||'').match(/https?:\/\/[^\s,]+/);
          h+='<div class="stk"><b>'+(x.role==='editor'?'✂️':'🎬')+' '+esc(x.name||'без имени')+' <span class="cst" style="font-weight:400;color:#8A8272">'+(ST[x.st]||esc(x.st))+'</span></b>'+
             '<span>'+esc(x.d)+(x.rate?' · ставка: '+esc(x.rate):'')+(x.langs?' · '+esc(x.langs):'')+'</span>'+
             (x.ai?'<span>AI: '+esc(x.ai.slice(0,110))+'</span>':'')+
             '<span style="margin-top:6px;display:flex;gap:12px;flex-wrap:wrap;align-items:center">'+
             (lk?'<a href="'+lk[0]+'" target="_blank" rel="noopener" style="color:#96703B">портфолио ↗</a>':'')+
             /* x.f — идентификатор загрузок кандидата от M5 Hub. Ссылкой пришёл — открываем как есть,
                иначе ведём в HR-раздел файлов CRM (Drive из интерфейса убран 24.08). */
             (x.f?'<a href="'+(/^https?:\/\/[^\s"'<>]+$/.test(String(x.f))?x.f:'https://crm.m5miami.com/files?b=hr')+'" target="_blank" rel="noopener" style="color:#96703B">📁 его загрузки</a>':'')+
             (x.email?'<a href="mailto:'+esc(x.email)+'" style="color:#96703B">почта</a>':'')+
             '<i style="font-style:normal;cursor:pointer" title="нравится" onclick="candStat('+x.r+',\'liked\',this)">👍</i>'+
             '<i style="font-style:normal;cursor:pointer" title="не подходит" onclick="candStat('+x.r+',\'no\',this)">👎</i>'+
             '<i style="font-style:normal;cursor:pointer" title="сохранить в пул фрилансеров" onclick="candStat('+x.r+',\'pool\',this)">💾</i>'+
             '</span></div>';
        }
        el.innerHTML=h+tail;
      }catch(e){}
    };
    var s=document.createElement('script');
    s.src=JIN_HOOK+'?priv=1&cb=m5cands&sid='+encodeURIComponent(sid)+'&z='+Date.now();
    document.head.appendChild(s);
  }catch(e){}
})();
function candStat(row,val,btn){
  var sid=''; try{sid=localStorage.getItem('m5_sid')||'';}catch(e){}
  if(!sid)return;
  var cbn='m5cs'+row+val;
  window[cbn]=function(d){
    if(d&&d.ok){ try{
      var ST={'new':'🆕 новый','liked':'👍 нравится','no':'👎 нет','pool':'💾 в пуле','hired':'🎉 нанят'};
      var card=btn.closest('.stk'); card.querySelector('.cst').textContent=ST[d.st]||d.st;
    }catch(e){} }
  };
  var s=document.createElement('script');
  s.src=JIN_HOOK+'?candstat=1&cb='+cbn+'&sid='+encodeURIComponent(sid)+'&row='+row+'&val='+val+'&z='+Date.now();
  document.head.appendChild(s);
}

/* ═══ Расходы: одно правило для всех, чтобы траты не терялись (02.08).
   Механика: человек шлёт трату в Telegram-бот → Клод заносит в таблицу и
   складывает чек в CRM · Файлы. Руками таблицу никто не заполняет. ═══ */
(function(){
  try{
    var el=document.getElementById('expSec'); if(!el)return;
    var op=false; try{op=localStorage.getItem('m5_exp_open')==='1';}catch(e){}
    var h='<details class="stackbox"'+(op?' open':'')+'><summary><span>💸 Расходы · куда сдавать</span><span class="stk-hint">правило одно для всех</span></summary><div class="stack">';
    h+='<div class="lsn"><b>1 · Потратил — сразу напиши боту.</b> Открой <b>@m5miami_bot</b> в Telegram и отправь одним сообщением: <b>«расход 40 шпаклёвка Home Depot»</b>. Можно голосовым. Сумма в долларах, что купил, где — этого достаточно.</div>';
    h+='<div class="lsn"><b>2 · Сфоткай чек и приложи.</b> Фото чека — следующим сообщением боту, он сам положит его в раздел <b>Чеки</b> (ссылка ниже). Без чека трата всё равно записывается, но для бухгалтера и налоговой чек нужен — не выбрасывай.</div>';
    h+='<div class="lsn"><b>3 · Дальше не твоя забота.</b> Клод заносит трату в общую таблицу, складывает чек в CRM · Файлы → Чеки и обновляет цифру «Расходы» в пульте кабинета. Таблицу руками не заполняет никто.</div>';
    h+='<a class="stk" href="'+LINKS.expenses+'" target="_blank" rel="noopener"><b>📊 Журнал расходов (живой)</b><span>сюда пишет бот: дата, кто, сумма, что, объект · траты до бота — в архивном реестре ($4,424 уже в счётчике)</span></a>';
    h+='<a class="stk" href="'+LINKS.receipts+'" target="_blank" rel="noopener"><b>🧾 Раздел «Чеки»</b><span>CRM · Файлы → Чеки: фото и PDF всех чеков</span></a>';
    h+='<div class="lsn" style="color:#8A8272">Почему так: пока компания не зарегистрирована, все траты идут с личных карт — и если их не собрать, при регистрации LLC и подаче налогов мы просто потеряем эти деньги как расходы бизнеса. Одно сообщение боту в момент покупки решает вопрос.</div>';
    el.innerHTML=h+'</div></details>';
    var box=el.querySelector('details.stackbox');
    if(box)box.addEventListener('toggle',function(){ try{localStorage.setItem('m5_exp_open',box.open?'1':'0');}catch(e){} });
  }catch(e){}
})();

/* ═══ Company · back office — пульт владельца (просьба Алекса 04.08): документы,
   финконтроль, налоги, подрядчики, команда — одной раскрывашкой, чтобы кабинет
   не пух. Цифры сверху живые (loadPulse дописывает из M5 Hub). Журналы — в Google
   Sheets, файлы — в CRM; сюда — только двери + правила «как это попадает само». ═══ */
(function(){
  try{
    if(role!=='founder'&&role!=='director')return;
    var el=document.getElementById('companySec'); if(!el)return;
    var op=false; try{op=localStorage.getItem('m5_co_open')==='1';}catch(e){}
    var h='<details class="stackbox"'+(op?' open':'')+'><summary><span>🏢 Company · back office</span><span class="stk-hint">документы · деньги · налоги · подрядчики · команда</span></summary><div class="stack">';
    h+='<div class="pulsegrid" style="margin-top:10px">'+
      '<a class="ptile" id="coRev" href="'+LINKS.revenue+'" target="_blank" rel="noopener"><div class="pk">Доход</div><b>…</b><div class="pdelta">за всё время</div><small>бот: «доход 3000 депозит»</small></a>'+
      '<a class="ptile" id="coExp" href="'+LINKS.expenses+'" target="_blank" rel="noopener"><div class="pk">Расходы</div><b>…</b><div class="pdelta">за всё время</div><small>бот: «расход 40 …»</small></a>'+
      '<a class="ptile" id="coNet" href="'+LINKS.revenue+'" target="_blank" rel="noopener"><div class="pk">Итог</div><b>…</b><div class="pdelta">доход − расход</div><small>до QuickBooks — оценка</small></a>'+
      '<a class="ptile" id="coVend" href="'+LINKS.vendors+'" target="_blank" rel="noopener"><div class="pk">Подрядчики</div><b>…</b><div class="pdelta">в реестре</div><small>бот: «подрядчик …»</small></a>'+
    '</div>';
    h+='<details class="pl"><summary>📁 Документы компании — где что лежит</summary><div style="padding:4px 10px 8px 10px">'+
      '<a class="stk" href="'+LINKS.legalDocs+'" target="_blank" rel="noopener"><b>CRM · Файлы → Legal — главный реестр</b><span>LLC (Articles · EIN · Operating Agreement), страховки, аренда, бизнес-план E-2 — всё сюда</span></a>'+
      '<div class="lsn">Статусы: ⬜ LLC (подача 3–9 авг) · ⬜ EIN · ⬜ Operating Agreement · ⬜ GL-страховка. Как только событие случилось — скажи Клоду («LLC подана») — обновлю здесь и в плане E-2.</div>'+
      '<div class="lsn">Договоры клиентов живут в карточке сделки в CRM (файл — в <b>Файлы → объекты</b>). Договор партнёров — блок «Alex + Vlad» ниже (видите только вы двое). Виза Вадима — в плане E-2.</div>'+
      '<div class="lsn" style="color:#8A8272">Правило: любой новый документ компании → в CRM · Файлы → Legal или боту с подписью «документ» — разложу и обновлю статусы.</div>'+
    '</div></details>';
    h+='<details class="pl"><summary>💰 Финконтроль — как деньги учитываются</summary><div style="padding:4px 10px 8px 10px">'+
      '<div class="lsn"><b>Одно правило:</b> в момент, когда деньги пришли или ушли — одно сообщение боту: <b>«расход 40 шпаклёвка Home Depot»</b> · <b>«доход 3000 депозит — Brickell»</b>. Дальше само: строка в журнале → цифры выше → алерт партнёрам. Таблицы руками не заполняет никто.</div>'+
      '<a class="stk" href="'+LINKS.revenue+'" target="_blank" rel="noopener"><b>📈 Журнал доходов</b><span>кто внёс · сумма · клиент · этап · объект</span></a>'+
      '<a class="stk" href="'+LINKS.expenses+'" target="_blank" rel="noopener"><b>📉 Журнал расходов</b><span>живые траты от бота · чеки — в CRM · Файлы → Чеки (блок Расходы выше)</span></a>'+
      '<div class="lsn" style="color:#8A8272">Траты до запуска бота ($4,424) уже в счётчике — <a href="'+LINKS.expensesOld+'" target="_blank" rel="noopener" style="color:#96703B">архивный реестр</a>. После LLC + банка подключаем QuickBooks + синк с JobTread — это станет настоящим P&amp;L, журналы останутся историей до-LLC периода.</div>'+
    '</div></details>';
    h+='<details class="pl"><summary>🧾 Налоги — статус и план</summary><div style="padding:4px 10px 8px 10px">'+
      '<div class="lsn"><b>Сейчас (до LLC):</b> налогов ещё нет — копим базу вычетов: каждый чек в CRM · Файлы + каждая трата в журнале. Это уже происходит автоматически через бота.</div>'+
      '<div class="lsn"><b>После LLC + EIN (сентябрь):</b> QuickBooks Online + онлайн-CPA (бухгалтер). CPA приглашается в QuickBooks как Accountant — видит книги напрямую, ничего пересылать не нужно; его цифры «к уплате / уплачено» появятся в этом блоке. ⬜ выбрать CPA — скажи «ищем CPA», подберу кандидатов.</div>'+
      '<div class="lsn" style="color:#8A8272">Календарь Florida LLC: Annual Report — до 1 мая ($138.75) · федеральная декларация партнёрства (форма 1065) — до 15 марта · sales tax на ремонт real property во Флориде обычно не начисляется клиенту (подтвердит CPA — зависит от формы контракта).</div>'+
    '</div></details>';
    h+='<details class="pl"><summary>🧱 Подрядчики — реестр и правила</summary><div style="padding:4px 10px 8px 10px">'+
      '<a class="stk" href="'+LINKS.vendors+'" target="_blank" rel="noopener"><b>Реестр подрядчиков</b><span>имя · специализация · контакт · ставки · условия · W-9 · рейтинг</span></a>'+
      '<div class="lsn"><b>Добавить:</b> боту — <b>«подрядчик Хуан Перес, штукатурка, +1 305 555 0000, $25/sqft»</b>. Любой из вас троих. Всё через запятую, порядок: имя, специализация, контакт, ставка.</div>'+
      '<div class="lsn" style="color:#8A8272">Правила денег: до первой оплаты берём у суба <b>форму W-9</b> (фото — боту); всем, кому заплатили ≥$600/год — в январе CPA делает 1099-NEC по этому реестру и чекам. Наряды и сметы субов — в JobTread на объекте; реестр — адресная книга и ценник.</div>'+
    '</div></details>';
    h+='<details class="pl"><summary>👥 Команда — контракты, ставки, выплаты</summary><div style="padding:4px 10px 8px 10px">'+
      '<a class="stk" href="/org/"><b>Оргструктура и контакты</b><span>кто есть кто, роли, обязанности — страница Org</span></a>'+
      '<a class="stk" href="'+LINKS.teamSheet+'" target="_blank" rel="noopener"><b>Team-реестр (приватный)</b><span>тип (W-2/фрилансер) · ставка · контракт с/по · ссылка на договор · выплачено всего</span></a>'+
      '<div class="lsn"><b>Новый человек:</b> скажи Клоду «заведи в команду: имя, роль, ставка, тип» — строка в реестре + раздел в CRM · Файлы → HR + доступы по чек-листу. Кандидаты с портала найма — блок Hiring выше.</div>'+
      '<div class="lsn" style="color:#8A8272">Деньги и контракты — только в Team-реестре (на страницу Org не публикуем). KPI сотрудников включим с первым наймом — план Jin-KPI готов (Jin считает → человек утверждает).</div>'+
    '</div></details>';
    h+='<div class="lsn" style="color:#8A8272;margin-top:10px">Как пользоваться: раз в неделю открыл — цифры сверху живые; вопрос «сколько заработали / кому платим / где документ» — здесь или Джину наверху.</div>';
    el.innerHTML=h+'</div></details>';
    var box=el.querySelector('details.stackbox');
    if(box)box.addEventListener('toggle',function(){ try{localStorage.setItem('m5_co_open',box.open?'1':'0');}catch(e){} });
  }catch(e){}
})();

/* ═══ Идеи · очередь запуска (просьба Алекса 07.08: «всё, что мне нужно помнить —
   в кабинете, без повторений»). Только уникальное: задачи — в My tasks, соцсети-схема —
   в Socials, план E-2 — ниже. Полные планы — Google Docs, ссылки внутри блока. ═══ */
(function(){
  try{
    if(role!=='founder')return;
    var el=document.getElementById('ideasSec'); if(!el)return;
    var op=false; try{op=localStorage.getItem('m5_ideas_open')==='1';}catch(e){}
    var h='<details class="stackbox"'+(op?' open':'')+'><summary><span>💡 Идеи · очередь запуска</span><span class="stk-hint">сентябрь + контент · обновлено 07.08</span></summary><div class="stack">';
    h+='<div class="stk-g">📦 Сентябрь · по приезде (реш. 07.08)</div>';
    h+='<a class="stk" href="'+LINKS.planBox+'" target="_blank" rel="noopener"><b>M5 Texture Box — главная идея сентября</b><span>20 боксов × 8 фактур ручной отливки → дизайн-студиям и люкс-риелторам · 28 адресатов уже отресёрчены (Sire Design, Strang, Britto Charette, Goldentayer, Ivan &amp; Mike) · QR-трекинг per-бокс · план полностью готов — открой</span></a>';
    h+='<div class="lsn">🧱 <b>«Стена в подарок»</b> — панно бесплатно в знаковом месте диаспоры (Sunny Isles/Aventura) за табличку «Wall by M5» + видео процесса → сарафан в «Наши в Майами».</div>';
    h+='<div class="lsn">🏠 <b>Listing Wall</b> — wow-стена люкс-риелтору перед фотосессией листинга за себестоимость (~$400) → co-branded reel + канал рефералов.</div>';
    h+='<div class="lsn">🤝 <b>/pros — trade-программа</b> — страница для дизайнеров без бригад: «мы ваш execution-партнёр по фактурам», аутрич по базе 100 студий.</div>';
    h+='<div class="lsn">🎨 <b>Открытие шоурума = Wynwood Art Walk</b> — вторая суббота ноября: Вадим кладёт венецианку в витрине как перформанс; вторая волна — Art Basel (нач. декабря).</div>';
    h+='<div class="stk-g" style="margin-top:12px">🎬 Контент-очередь · делает Клод до аккаунтов</div>';
    h+='<div class="lsn"><b>Топ-5 одобрено к производству:</b> Plaster ASMR (нарезка 17 видео Техаса) · Texture of the Day (27 фактур) · Guess the price · Houzz-профиль (66 фото, нужны твои 20 мин на регистрацию) · email-цепочка «7 дней после гайда». Готовое копится в CRM · Файлы → Контент (Ready to post); публикация стартует после заведения аккаунтов.</div>';
    h+='<div class="lsn" style="color:#8A8272">🐉 В резерве: «Jin reacts» (дракон судит ремонты — пруф-концепт по запросу), fake-OOH «Miami, but plastered», сериал «Texas built us», живая смета, видео-приветствия Jin.</div>';
    h+='<a class="stk" href="'+LINKS.planIdeas+'" target="_blank" rel="noopener"><b>📚 Полный каталог — 18 идей</b><span>контент · конверсия · Майами-партнёрства, с ресурсами и первыми шагами</span></a>';
    h+='<a class="stk" href="'+LINKS.planSmm+'" target="_blank" rel="noopener"><b>📱 Соцсети — план запуска</b><span>аккаунты @m5miami, био, стартер-пак 10 постов, найм SMM через /join</span></a>';
    el.innerHTML=h+'</div></details>';
    var box=el.querySelector('details.stackbox');
    if(box)box.addEventListener('toggle',function(){ try{localStorage.setItem('m5_ideas_open',box.open?'1':'0');}catch(e){} });
  }catch(e){}
})();

/* ═══ Клиенты · хабы — список всех клиентских кабинетов (founder + director).
   Новый клиент = Клод добавляет строку сюда и объект в client.js (единая точка — чат с Клодом). ═══ */
var CLIENTHUBS=[
 {slug:'brickell-demo', name:'David', project:'Brickell Residence — Full Renovation', status:'Demo'}
];
(function(){
  try{
    if(role!=='founder'&&role!=='director')return;
    var el=document.getElementById('clientsSec'); if(!el)return;
    var row=function(c){return '<a class="stk" href="/client/?p='+c.slug+'"><b>'+c.name+' <span style="font-family:var(--mono);font-size:9.5px;letter-spacing:.08em;text-transform:uppercase;color:#B0894F;border:1px solid #D9B87C;border-radius:8px;padding:2px 7px;margin-left:6px">'+c.status+'</span></b><span>'+c.project+' · открыть кабинет →</span></a>';};
    var allDemo=true; for(var ad=0;ad<CLIENTHUBS.length;ad++){ if(CLIENTHUBS[ad].status!=='Demo'){allDemo=false;break;} }
    var h='<details class="stackbox"'+((role==='director'&&!allDemo)?' open':'')+'><summary><span>👥 Clients · control panel</span><span class="stk-hint">'+CLIENTHUBS.length+(allDemo?' · demo':' · кабинеты клиентов')+'</span></summary><div class="stack">';
    var recent=CLIENTHUBS.slice(0,5);
    for(var i=0;i<recent.length;i++){ h+=row(recent[i]); }
    if(CLIENTHUBS.length>5){
      h+='<details class="pl"><summary>📁 Все клиенты ('+CLIENTHUBS.length+')</summary><div style="padding:4px 0 4px 10px">';
      for(var j=5;j<CLIENTHUBS.length;j++){ h+=row(CLIENTHUBS[j]); }
      h+='</div></details>';
    }
    h+='<div class="lsn" style="color:#8A8272">Отсюда вы (Алекс, Влад, Вадим) заходите в кабинет любого клиента и видите его глазами. Новый клиент — скажи Клоду «заведи кабинет для …»; правки данных — тоже через Клода. Новые добавляются наверх, старые уходят в «Все клиенты».</div>';
    h+='</div></details>';
    el.innerHTML=h;
  }catch(e){}
})();

/* ═══ Partnership agreement — видят ТОЛЬКО совладельцы (Алекс и Влад, по хэшам почт). ═══ */
(function(){
  try{
    var OWNERS=['9ee4c44ded143508a8f6b70a94f34606ac5f7f95ac32211472131b694964ef47',
                '89f6492713f94c1bb2dca64eb38d5ff1cc9a9f4f23b67c896b1d8eb914913322'];
    if(preview)return;
    var m=JSON.parse(localStorage.getItem('m5_member')||'null');
    if(OPEN_ACCESS&&!(m&&m.email))m={email:'guest@open'};
    if(!m||!m.email||!window.crypto||!crypto.subtle)return;
    crypto.subtle.digest('SHA-256',new TextEncoder().encode(String(m.email).trim().toLowerCase())).then(function(buf){
      var a=new Uint8Array(buf),hx='';for(var i=0;i<a.length;i++)hx+=('0'+a[i].toString(16)).slice(-2);
      if(!OPEN_ACCESS&&OWNERS.indexOf(hx)===-1)return;
      var el=document.getElementById('clientsSec'); if(!el)return;
      var d=document.createElement('div');
      d.innerHTML='<details class="stackbox"><summary><span>🤝 Alex + Vlad · Partnership</span><span class="stk-hint">только совладельцы</span></summary><div class="stack">'+
      '<a class="stk" href="'+LINKS.legal+'" target="_blank" rel="noopener"><b>Partnership agreement (signed v3 · 22.07)</b><span>Подписанный PDF — в CRM · Файлы → Legal (приватный раздел)</span></a>'+
      '</div></details>';
      el.appendChild(d.firstChild);
    });
  }catch(e){}
})();

/* ═══ Инструкции по ролям — прямо в кабинете (просьба Алекса 31.07: текстом, а не файлом).
   У каждого сотрудника — свои шаги; у директора и фаундеров — «вид сверху» на всю команду.
   Полный регламент: M5/4 Рабочие документы/Документооборот_клиентский_цикл.md ═══ */
var ROLEGUIDE={
 sales:[
  ['1 · Новый лид — ответ за 15 минут','Карточка падает в Telegram «Лиды» и в JobTread. Звони или пиши с бизнес-WhatsApp +1 786 407 4441. Цель — записать на консультацию/замер.'],
  ['2 · Консультация → замер → КП','Лид и КП ведёшь в CRM (плитка CRM · Sales): статусы, discovery, «живая смета» с фиксацией цены. Календарь замеров — плитка Calendar. После подписания договора объект переезжает в JobTread (производство).'],
  ['3 · Договор подписан','PDF договора — в карточку сделки в CRM (файл сам ложится в Файлы → объекты). Затем пост в «M5 Team» → Projects: «🖊 Договор подписан: имя · адрес · старт [дата]» — это сигнал всей команде.'],
  ['4 · Ссылка клиенту','Клод заведёт кабинет клиента и даст тебе персональную ссылку — отправь её клиенту с бизнес-WhatsApp: «Ваш личный кабинет — прогресс, документы, материалы».'],
  ['5 · Допродажи','Заявки клиента из его кабинета (услуги/кредиты) прилетают в Telegram — отвечаешь в тот же день.']],
 smm:[
  ['1 · Фотосессия «ДО» — 3 дня после договора','Увидела в Projects «Договор подписан» → едешь на объект: фото + видео каждой комнаты → Джину в тему объекта или сразу в CRM · Файлы → объект. Стадию «до» проставит Джин. Из этого потом собираем «до/после».'],
  ['2 · Сырьё — только из CRM · Файлы','Раздел Контент (общий) и папка объекта (Вадим грузит с объектов ежедневно). Ничего не снимаем «в никуда» — всё в файлы.'],
  ['3 · Контент-цикл','Календарь и сценарии готовит Клод → съёмка (с Вадимом/Владом) → монтаж → постинг IG/TikTok/YT. Влад — лицо бренда: 1–2 ролика в неделю с ним.'],
  ['4 · Финал проекта','Фотосессия «ПОСЛЕ» → в файлы объекта, стадия «после» → рилс «до/после» — главный формат продаж.']],
 pm:[
  ['1 · Днём — фото с объекта','Фото/видео хода работ → Джину в Telegram (тема объекта) — он разложит по объекту в CRM · Файлы. Длинное видео — загрузи сам на crm.m5miami.com/files.'],
  ['2 · Вечером — 2 минуты','Голосовое или пару строк в «M5 Team» → Projects: что сделали · что завтра · что нужно. Всё — отчёт сдан.'],
  ['3 · Материалы на согласование','Фото образца → Джину с подписью «материал» (ляжет в файлы объекта) + строка в вечернем отчёте. Статус клиенту выставит Клод.'],
  ['4 · Галочки — не твоя забота','Прогресс в кабинете клиента обновляет Клод/Джин по твоему отчёту.']],
 designer:[
  ['1 · Концепт и мудборды','Ведёшь в JobTread + 3D и материалы — в CRM · Файлы → объект. Референсы стиля — Playbook.'],
  ['2 · Образцы материалов','Фото → в файлы объекта (или Джину с подписью «материал») — Клод выставит клиенту на согласование в кабинете.'],
  ['3 · Дизайн-надзор','Еженедельный визит на объект + фотоотчёт в файлы объекта: то, что нарисовано = то, что строится.']]
};
var TEAMVIEW=[
 ['Sales','Лиды за 15 минут · КП в CRM · договор → карточка сделки в CRM + пост в Projects · ссылка на кабинет клиенту · допродажи'],
 ['SMM','Фотосессии «до/после» · контент только из CRM · Файлы · постинг IG/TikTok/YT · 1–2 ролика с Владом'],
 ['Мастер / бригада','Работы по наряду Вадима · фото «до/после» своего участка Вадиму · без систем — только качество'],
 ['Вадим (ты)','Дневной цикл (блок «Как вести проект» выше) · контроль качества и приёмка · обучение команды этим инструкциям'],
 ['Клод / Джин','Кабинеты клиентов, галочки, кредиты · карточки лидов · отчёты и напоминания · чинит систему по кнопке Idea/Bug'],
 ['Бухгалтер','QuickBooks: инвойсы, оплаты, налоги · мы только шлём чеки Джину — он складывает их в CRM · Файлы']
];
(function(){
  try{
    var el=document.getElementById('guideSec'); if(!el)return;
    var h='';
    if(ROLEGUIDE[role]){
      h+='<details class="stackbox"'+(onbDone()?'':' open')+'><summary><span>📖 Your playbook · '+role+'</span><span class="stk-hint">'+ROLEGUIDE[role].length+' шагов</span></summary><div class="stack">';
      for(var i=0;i<ROLEGUIDE[role].length;i++){
        h+='<div class="lsn"><b>'+ROLEGUIDE[role][i][0]+'.</b> '+ROLEGUIDE[role][i][1]+'</div>';
      }
      h+='<div class="lsn" style="color:#8A8272">Вопросы — Джину наверху. Что-то неудобно — кнопка «⚡ Идея / баг» справа внизу.</div></div></details>';
    }
    if(role==='director'||role==='founder'){
      h+='<details class="stackbox"><summary><span>🧭 Team · who does what</span><span class="stk-hint">'+TEAMVIEW.length+' ролей</span></summary><div class="stack">';
      for(var t=0;t<TEAMVIEW.length;t++){
        h+='<div class="lsn"><b>'+TEAMVIEW[t][0]+'</b> — '+TEAMVIEW[t][1]+'</div>';
      }
      h+='<div class="stk-g" style="margin-top:10px">Путь клиента за 30 секунд</div>';
      h+='<div class="lsn">Лид → Sales (15 мин) → замер → КП в CRM → договор (карточка сделки в CRM + пост в Projects) → Клод заводит кабинет клиента → SMM снимает «ДО» → Вадим ведёт дневной цикл → Клод ставит галочки клиенту → инвойсы/кредиты → финал: SMM «ПОСЛЕ» + просим Google-отзыв (бесплатно, на пике эмоций) + реферальная ссылка $500/$500.</div>';
      h+='<div class="lsn" style="color:#8A8272">Полная орг-структура и контакты — <a href="/org/" style="color:#96703B">страница Org →</a></div>';
      h+='</div></details>';
    }
    el.innerHTML=h;
  }catch(e){}
})();
