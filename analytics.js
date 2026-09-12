/* M5 · собственная аналитика сайта без cookies и личных данных (12.09.2026).
   Сессия — sessionStorage, посетитель — localStorage, события пачками в M5 OS (/api/public/track) через sendBeacon.
   Считаем: просмотр, секции, клики по целям (WhatsApp, телефон, Instagram, запись), калькулятор, гайд, заявка,
   вовлечённость, время и глубину скролла. GA4/Meta через window.m5track работают как раньше — мы только слушаем. */
(function () {
  if (location.hostname === 'localhost' && !window.M5_TRACK_LOCAL) return;
  var API = 'https://crm.m5miami.com/api/public/track';
  var rnd = function () { return Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 6); };
  var idFrom = function (store, key) { try { var v = store.getItem(key); if (v && /^[a-z0-9]{6,32}$/i.test(v)) return v; var n = rnd(); store.setItem(key, n); return n; } catch (e) { return rnd(); } };
  var sid = idFrom(sessionStorage, 'm5_sid'), vid = idFrom(localStorage, 'm5_vid');
  var utm = {}; try { new URLSearchParams(location.search).forEach(function (v, k) { if (k.indexOf('utm_') === 0) utm[k] = v; }); } catch (e) {}
  var device = matchMedia('(max-width: 767px)').matches ? 'mobile' : matchMedia('(max-width: 1024px)').matches ? 'tablet' : 'desktop';
  var lang = (document.documentElement.lang || 'en').slice(0, 2);
  var base = { sid: sid, vid: vid, lang: lang, path: location.pathname, device: device };
  var q = [], timer;
  var flush = function (beacon) {
    if (!q.length) return; var body = JSON.stringify({ ref: document.referrer, utm: utm, events: q.splice(0) });
    if (beacon && navigator.sendBeacon) { navigator.sendBeacon(API, new Blob([body], { type: 'text/plain' })); return; }
    try { fetch(API, { method: 'POST', body: body, headers: { 'Content-Type': 'text/plain' }, keepalive: true }).catch(function () {}); } catch (e) {}
  };
  var push = function (event, target, value) {
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
  // события сайта (m5track → GA4/Meta) дублируем в свою аналитику
  var prev = window.m5track;
  window.m5track = function (n, p) {
    try { if (typeof prev === 'function') prev(n, p); } catch (e) {}
    try {
      p = p || {};
      if (n === 'lead_submit_confirmed' || n === 'service_lead' || n === 'quiz_lead' || n === 'guide_lead') { push('lead', n === 'lead_submit_confirmed' ? 'form' : n.replace('_lead', '')); flush(); }
      else if (n === 'lead_submit_failed') push('lead_error', String(p.reason || p.code || '').slice(0, 40));
      else if (n === 'quiz_open') push('quiz');
      else if (n === 'booking_click') { push('click', 'booking'); flush(true); }
      else if (n === 'whatsapp_click') { push('click', 'whatsapp'); flush(true); }
      else if (n === 'phone_click') { push('click', 'phone'); flush(true); }
      else if (n === 'exit_intent_shown') push('exit');
    } catch (e) {}
  };
  // уход: время и глубина
  var left = false; var onHide = function () { if (document.visibilityState !== 'hidden' || left) return; left = true; push('scroll', undefined, maxScroll); push('leave', undefined, Math.round((Date.now() - start) / 1000)); flush(true); };
  document.addEventListener('visibilitychange', onHide); addEventListener('pagehide', onHide);
})();
