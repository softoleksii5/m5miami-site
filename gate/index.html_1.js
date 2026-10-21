window.m5track=function(n,p){p=p||{};try{if(window.gtag)gtag('event',n,p)}catch(e){}try{if(window.fbq){var S={lead_submit_confirmed:'Lead',service_lead:'Lead',quiz_lead:'Lead',booking_click:'Schedule',whatsapp_click:'Contact'};if(n==='lead_submit'){if(p.source)fbq('track','Lead',p)}else if(n==='guide_lead'){fbq('trackCustom','GuideDownload',p)}else if(S[n]){fbq('track',S[n],p)}else{fbq('trackCustom',n,p)}}}catch(e){}}
window.M5_HOOK='https://script.google.com/macros/s/AKfycbw_Hwj1am3WSzgrTZTdnH_OWEmzUuC0r2MDouOWvd_Jv-DiawgG1BvpMM3QwO0XeM54yw/exec';/* вебхук Apps Script «M5 Hub» (лиды → Telegram + Sheet) */
/* Реферальная метка: ?ref=<слаг клиента> с личной ссылки в Client Hub. Держим 90 дней,
   подмешиваем в каждый лид — в Telegram-карточке видно «кто привёл» → начисляем $250/$250. */
try{var _r=(location.search.match(/[?&]ref=([A-Za-z0-9_-]{1,64})/)||[])[1];if(_r)localStorage.setItem('m5_ref',_r+'|'+Date.now())}catch(e){}
/* Приём заявок → M5 OS (crm.m5miami.com/api/public/leads). Аудит Codex F02/F18, 10.09.2026:
   «отправлено» показываем ТОЛЬКО после того, как CRM вернула lead_id; submission_id защищает от дублей при повторе;
   UTM / click id / реферал / страница входа едут в карточку лида. Formsubmit остаётся почтовой копией, Hub — зеркалом. */
window.M5_LEADS='https://crm.m5miami.com/api/public/leads';
window.m5attr=function(){var a={};try{var q=location.search,ks=['utm_source','utm_medium','utm_campaign','utm_content','utm_term','gclid','fbclid','ttclid'],cur={},has=false;
  ks.forEach(function(k){var m=q.match(new RegExp('[?&]'+k+'=([^&#]{1,200})'));if(m){cur[k]=decodeURIComponent(m[1]);has=true}});
  var first=null;try{first=JSON.parse(localStorage.getItem('m5_attr')||'null')}catch(e){}
  if(!first){first={landing_path:location.pathname+(location.search||''),first_touch_at:new Date().toISOString(),referrer:(document.referrer||'').slice(0,200)};ks.forEach(function(k){if(cur[k])first[k]=cur[k]});try{localStorage.setItem('m5_attr',JSON.stringify(first))}catch(e){}}
  a=Object.assign({},first);
  if(has){a.last_utm_source=cur.utm_source||'';a.last_utm_medium=cur.utm_medium||'';a.last_utm_campaign=cur.utm_campaign||'';a.last_landing_path=location.pathname}
  var r=(localStorage.getItem('m5_ref')||'').split('|');if(r[0]&&Date.now()-(+r[1]||0)<7776e6)a.ref=r[0];
  Object.keys(a).forEach(function(k){if(!a[k])delete a[k]});}catch(e){}return a};
try{m5attr()}catch(e){}
window.m5uuid=function(){try{if(crypto&&crypto.randomUUID)return crypto.randomUUID()}catch(e){}return 'x'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,10)+Math.random().toString(36).slice(2,6)};
/* m5lead(payload) → Promise<{ok,lead_id,status}>. Никогда не бросает: сетевая ошибка = {ok:false}. */
window.m5lead=function(p){p=p||{};if(!p.submission_id)p.submission_id=m5uuid();p.attribution=m5attr();p.page=location.pathname;
  p.consent={text:'By submitting, you agree to be contacted about your project.',at:new Date().toISOString(),page:location.pathname};
  return fetch(M5_LEADS,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(p),keepalive:true})
    .then(function(r){return r.json().then(function(j){return {ok:!!(j&&j.ok),lead_id:j&&j.lead_id,created:j&&j.created,status:r.status,fields:j&&j.fields}}).catch(function(){return {ok:false,status:r.status}})})
    .catch(function(){return {ok:false,status:0}})};
window.m5hook=function(p){try{if(!window.M5_HOOK||M5_HOOK.indexOf('http')!==0)return;p=p||{};try{var q=(localStorage.getItem('m5_ref')||'').split('|');if(q[0]&&Date.now()-(+q[1]||0)<7776e6){p.details=(p.details?p.details+' · ':'')+'REF:'+q[0]}}catch(e){}var s=JSON.stringify(p);if(navigator.sendBeacon){navigator.sendBeacon(M5_HOOK,s)}else{fetch(M5_HOOK,{method:'POST',mode:'no-cors',keepalive:true,body:s})}}catch(e){}}