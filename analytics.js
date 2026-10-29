/* M5 · собственная аналитика сайта без cookies и личных данных (12.09.2026).
   Сессия — sessionStorage, посетитель — localStorage, события пачками в M5 OS (/api/public/track) через sendBeacon.
   Считаем: просмотр, секции, клики по целям (WhatsApp, телефон, Instagram, запись), калькулятор, гайд, заявка,
   вовлечённость, время и глубину скролла. GA4/Meta через window.m5track работают как раньше — мы только слушаем.
   28.10.2026 (перенос из GTA, партия 26):
   • сотрудник (cookie m5_staff — ставит crm.m5miami.com после входа) или отказ от аналитики (m5consent('denied'))
     → ни своих событий, ни GA4 / Clarity (их загрузчик в <head> спрашивает m5noTrack()), ни REF-токенов; маркер
     <html data-m5-notrack="staff|consent">;
   • касание визита (m5_touch, sessionStorage): utm / click id / хост реферера / страница входа, без меток — direct=1;
     уходит с событиями (site_events.sm) и с заявкой (leads.attribution.touch);
   • клик по любой ссылке wa.me → в текст первого сообщения «(ref: REF-XXXXXX)», снимок сессии → /api/public/handoff,
     событие whatsapp_click с ref_token (один раз на клик, сколько бы обработчиков страницы его ни звали). */
(function () {
  var C = /(?:^|;\s*)m5_staff=1(?:;|$)/, D = /(?:^|;\s*)m5_consent=denied(?:;|$)/;
  if (!window.m5flags) window.m5flags = function () {
    var c = '', d = false; try { c = document.cookie || ''; } catch (e) {} try { d = localStorage.getItem('m5_consent') === 'denied'; } catch (e) {}
    return { staff: C.test(c), denied: d || D.test(c) };
  };
  if (!window.m5noTrack) window.m5noTrack = function () { var f = window.m5flags(); return f.staff || f.denied; };
  /* согласие: m5consent('denied') — выключить аналитику в этом браузере, m5consent('granted') — вернуть (баннер — позже) */
  window.m5consent = function (v) {
    v = v === 'denied' ? 'denied' : 'granted';
    try { localStorage.setItem('m5_consent', v); } catch (e) {}
    try { document.cookie = 'm5_consent=' + v + ';path=/;max-age=31536000;SameSite=Lax'; } catch (e) {}
  };
  var f = window.m5flags();
  if (f.staff || f.denied) { try { document.documentElement.setAttribute('data-m5-notrack', f.staff ? 'staff' : 'consent'); } catch (e) {} }
})();

(function () {
  var local = location.hostname === 'localhost' && !window.M5_TRACK_LOCAL;
  var CRM = (window.M5_CRM_BASE || 'https://crm.m5miami.com').replace(/\/$/, '');
  var rnd = function () { return Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 6); };
  var idFrom = function (store, key) { try { var v = store.getItem(key); if (v && /^[a-z0-9]{6,32}$/i.test(v)) return v; var n = rnd(); store.setItem(key, n); return n; } catch (e) { return rnd(); } };
  var flags = window.m5flags();
  var off = flags.staff || flags.denied;
  var sid = idFrom(sessionStorage, 'm5_sid'), vid = idFrom(localStorage, 'm5_vid');
  var device = matchMedia('(max-width: 767px)').matches ? 'mobile' : matchMedia('(max-width: 1024px)').matches ? 'tablet' : 'desktop';
  var lang = (document.documentElement.lang || 'en').slice(0, 2);

  /* касание визита: первая страница вкладки; новая размеченная точка входа (utm / click id / внешний реферер, отличные от
     записанных) заменяет прежнее касание — как в GTA; без меток и внешнего реферера — прямой заход */
  var touch = null;
  try { touch = JSON.parse(sessionStorage.getItem('m5_touch') || 'null'); } catch (e) {}
  if (!touch || typeof touch !== 'object') touch = null;
  var fresh = {};
  try {
    var qp = new URLSearchParams(location.search);
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'utm_id', 'gclid', 'gbraid', 'wbraid', 'fbclid', 'ttclid', 'msclkid'].forEach(function (k) { var v = qp.get(k); if (v) fresh[k] = v.slice(0, 255); });
    var rh = ''; try { rh = new URL(document.referrer).hostname.replace(/^www\./, '').toLowerCase(); } catch (e) {}
    if (rh && !/(^|\.)m5miami\.com$/.test(rh) && rh !== location.hostname) fresh.ref = rh;
  } catch (e) {}
  var sameTouch = function (a, b) { var ks = Object.keys(b); for (var i = 0; i < ks.length; i++) if (a[ks[i]] !== b[ks[i]]) return false; return true; };
  if (!touch || (Object.keys(fresh).length && !sameTouch(touch, fresh))) {
    touch = fresh;
    if (!Object.keys(touch).length) touch.direct = '1';
    touch.landing = location.pathname.slice(0, 200); touch.at = Date.now();
    try { sessionStorage.setItem('m5_touch', JSON.stringify(touch)); } catch (e) {}
  }
  var gaId = function () { var m = /(?:^|;\s*)_ga=GA\d\.\d\.(\d{5,12}\.\d{5,12})(?:;|$)/.exec(document.cookie || ''); return m ? m[1] : null; };
  /* контекст сессии для заявки и REF-снимка; при отказе — пусто */
  window.m5ctx = function () {
    var fl = window.m5flags();
    if (fl.denied) return { consent: 'denied' };
    var c = { sid: sid, vid: vid, sl: lang, device: device, consent: 'granted' };
    try { if (navigator.language) c.dl = String(navigator.language).slice(0, 20); } catch (e) {}
    var g = gaId(); if (g) c.ga = g;
    return { touch: touch, sid: sid, vid: vid, ctx: c };
  };
  var cref = function () { try { var r = (localStorage.getItem('m5_ref') || '').split('|'); return r[0] && Date.now() - (+r[1] || 0) < 7776e6 ? '1' : ''; } catch (e) { return ''; } };

  /* ===== свои события ===== */
  var push = function () {}, flush = function () {};
  if (!off && !local) (function () {
    var API = CRM + '/api/public/track';
    var utm = {}; try { new URLSearchParams(location.search).forEach(function (v, k) { if (k.indexOf('utm_') === 0) utm[k] = v; }); } catch (e) {}
    var base = { sid: sid, vid: vid, lang: lang, path: location.pathname, device: device };
    var q = [], timer;
    // отказ (m5consent('denied')) или вход сотрудника посреди визита — сразу перестаём слать и выбрасываем очередь
    var stopped = function () { var fl = window.m5flags(); return fl.staff || fl.denied; };
    flush = function (beacon) {
      if (stopped()) { q.length = 0; return; }
      if (!q.length) return; var body = JSON.stringify({ ref: document.referrer, utm: utm, touch: touch, cref: cref(), events: q.splice(0) });
      if (beacon && navigator.sendBeacon) { navigator.sendBeacon(API, new Blob([body], { type: 'text/plain' })); return; }
      try { fetch(API, { method: 'POST', body: body, headers: { 'Content-Type': 'text/plain' }, keepalive: true, credentials: 'include' }).catch(function () {}); } catch (e) {}
    };
    push = function (event, target, value) {
      if (stopped()) return;
      var e = { sid: sid, vid: vid, lang: lang, path: base.path, device: device, event: event }; if (target) e.target = target; if (value != null) e.value = value;
      q.push(e); if (!timer) timer = setTimeout(function () { timer = undefined; flush(); }, 3000);
    };
    var start = Date.now(), maxScroll = 0, interacted = false, engaged = false;
    var maybeEngage = function () { if (!engaged && Date.now() - start > 10000 && (maxScroll >= 25 || interacted)) { engaged = true; push('engaged'); } };
    var onScroll = function () { var h = document.documentElement; var d = Math.round(((h.scrollTop + innerHeight) / h.scrollHeight) * 100); if (d > maxScroll) maxScroll = Math.min(100, d); maybeEngage(); };
    push('pageview');
    addEventListener('scroll', onScroll, { passive: true }); setInterval(maybeEngage, 5000);
    // секции: один раз за сессию каждая
    if ('IntersectionObserver' in window) {
      var seen = {}; var io = new IntersectionObserver(function (es) { es.forEach(function (e) { var id = e.target.id; if (e.isIntersecting && id && !seen[id]) { seen[id] = 1; push('section', id); } }); }, { threshold: 0.35 });
      document.querySelectorAll('section[id]').forEach(function (s) { io.observe(s); });
    }
    // переходы: классифицируем по ссылке
    document.addEventListener('click', function (e) {
      interacted = true; maybeEngage();
      var a = e.target && e.target.closest ? e.target.closest('a[href]') : null; if (!a) return;
      var h = a.getAttribute('href') || '', u = a.href || '';
      var target = /wa\.me|whatsapp/i.test(u) ? 'whatsapp' : /instagram/i.test(u) ? 'instagram' : /^tel:/i.test(h) ? 'phone' : /calendar\.app\.google|calendar\.google|calendly/i.test(u) ? 'booking' : /maps\.|goo\.gl|google\.com\/maps/i.test(u) ? 'maps' : h.charAt(0) === '#' ? 'nav:' + h.slice(1) : null;
      if (target) { push('click', target); if (h.charAt(0) !== '#') flush(true); }
    }, true);
    // уход: время и глубина
    var left = false; var onHide = function () { if (document.visibilityState !== 'hidden' || left) return; left = true; push('scroll', undefined, maxScroll); push('leave', undefined, Math.round((Date.now() - start) / 1000)); flush(true); };
    document.addEventListener('visibilitychange', onHide); addEventListener('pagehide', onHide);
  })();

  /* ===== REF-токен «сайт → WhatsApp» ===== */
  var ALPHA = '23456789ABCEFGHJKMNPQRSTUVWXYZ';
  var newToken = function () {
    var s = '', b = null; try { b = crypto.getRandomValues(new Uint8Array(6)); } catch (e) {}
    for (var i = 0; i < 6; i++) s += ALPHA[(b ? b[i] : Math.floor(Math.random() * 256)) % ALPHA.length];
    return 'REF-' + s;
  };
  var tokenOf = function () {
    try { var t = sessionStorage.getItem('m5_wa_ref'); if (t && /^REF-[A-Z0-9]{5,8}$/.test(t)) return t; t = newToken(); sessionStorage.setItem('m5_wa_ref', t); return t; } catch (e) { return newToken(); }
  };
  var HELLO = { en: "Hi M5! I'd like to discuss a project", es: '¡Hola M5! Me gustaría hablar de un proyecto', ru: 'Здравствуйте! Хочу обсудить проект', uk: 'Вітаю! Хочу обговорити проєкт' };
  var clickRef = null, clickAt = 0, reported = false;
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null; if (!a) return;
    var u; try { u = new URL(a.href, location.href); } catch (er) { return; }
    if (!/(^|\.)wa\.me$|^api\.whatsapp\.com$/i.test(u.hostname)) return;
    var fl = window.m5flags();
    if (fl.staff || local) return;   // сотрудник / локальная вёрстка: ссылка как есть, без токена и снимка
    var token = tokenOf();
    var text = u.searchParams.get('text') || HELLO[lang] || HELLO.en;
    if (text.indexOf(token) < 0) text = (text.replace(/\s+$/, '') + ' (ref: ' + token + ')').trim();
    u.searchParams.delete('text');   // encodeURIComponent, а не «+» от URLSearchParams: wa.me надёжнее читает %20
    a.href = u.toString() + (u.search ? '&' : '?') + 'text=' + encodeURIComponent(text);
    clickRef = token; clickAt = Date.now(); reported = false;
    var body = { token: token, channel: 'whatsapp' };   // отказ от аналитики: только токен, канал и сам факт отказа
    if (!fl.denied) {
      var x = window.m5ctx(); body.path = location.pathname.slice(0, 200); body.touch = x.touch; body.ctx = x.ctx;
      try { if (window.m5attr) { var at = window.m5attr(); delete at.touch; delete at.sid; delete at.vid; body.attr = at; } } catch (er) {}
    } else body.ctx = { consent: 'denied' };   // сервер не пишет ни страну, ни ip_hash
    try {
      var s = JSON.stringify(body);
      if (navigator.sendBeacon) navigator.sendBeacon(CRM + '/api/public/handoff', new Blob([s], { type: 'text/plain' }));
      else fetch(CRM + '/api/public/handoff', { method: 'POST', body: s, headers: { 'Content-Type': 'text/plain' }, keepalive: true, credentials: 'include' }).catch(function () {});
    } catch (er) {}
    // событие: если обработчики страницы (onclick / data-track) его не позвали — позовём сами, с токеном
    setTimeout(function () { if (!reported && window.m5track) window.m5track('whatsapp_click', { ref_token: token }); }, 0);
  }, true);

  /* события сайта (m5track → GA4) дублируем в свою аналитику; whatsapp_click — один раз на клик и с ref_token */
  var prev = window.m5track;
  window.m5track = function (n, p) {
    p = p || {};
    if (n === 'whatsapp_click' && clickRef && Date.now() - clickAt < 1500) {
      if (reported) return;
      reported = true; p.ref_token = clickRef;
    }
    try { if (typeof prev === 'function') prev(n, p); } catch (e) {}
    try {
      if (n === 'lead_submit_confirmed' || n === 'service_lead' || n === 'quiz_lead' || n === 'guide_lead') { push('lead', n === 'lead_submit_confirmed' ? 'form' : n.replace('_lead', '')); flush(); }
      else if (n === 'lead_submit_failed') push('lead_error', String(p.reason || p.code || '').slice(0, 40));
      else if (n === 'quiz_open') push('quiz');
      else if (n === 'booking_click') { push('click', 'booking'); flush(true); }
      // whatsapp_click: клик по ссылке wa.me уже посчитан слушателем переходов выше — второй 'click' не пишем
      else if (n === 'phone_click') { push('click', 'phone'); flush(true); }
      else if (n === 'exit_intent_shown') push('exit');
    } catch (e) {}
  };
})();

/* Ссылки на другие страницы и сайты — в новой вкладке (решение Алекса 26.10.2026).
   Не трогаем: якоря на этой же странице, tel:/mailto:, javascript:, переключатель языка (data-l). */
(function(){
  document.addEventListener('click',function(e){
    var a=e.target&&e.target.closest?e.target.closest('a[href]'):null;
    if(!a||a.hasAttribute('data-l')||a.target==='_self')return;
    var h=a.getAttribute('href')||'';
    if(!h||h.charAt(0)==='#'||/^(tel:|mailto:|sms:|javascript:)/i.test(h))return;
    try{var u=new URL(a.href,location.href);if(u.origin===location.origin&&u.pathname===location.pathname&&u.hash)return;}catch(_){}
    a.target='_blank';a.rel='noopener';
  },true);
})();
