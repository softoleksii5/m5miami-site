window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-CYE5Y3L9FN');
window.m5track=function(n,p){try{if(window.gtag)gtag('event',n,p||{})}catch(e){}};
window.M5_LEADS='https://crm.m5miami.com/api/public/leads';
window.m5attr=function(){var a={};try{var q=location.search,ks=['utm_source','utm_medium','utm_campaign','utm_content','utm_term','gclid','fbclid','ttclid'],cur={},has=false;
  ks.forEach(function(k){var m=q.match(new RegExp('[?&]'+k+'=([^&#]{1,200})'));if(m){cur[k]=decodeURIComponent(m[1]);has=true}});
  var first=null;try{first=JSON.parse(localStorage.getItem('m5_attr')||'null')}catch(e){}
  if(!first){first={landing_path:location.pathname+(location.search||''),first_touch_at:new Date().toISOString(),referrer:(document.referrer||'').slice(0,200)};ks.forEach(function(k){if(cur[k])first[k]=cur[k]});try{localStorage.setItem('m5_attr',JSON.stringify(first))}catch(e){}}
  a=Object.assign({},first);
  if(has){a.last_utm_source=cur.utm_source||'';a.last_utm_medium=cur.utm_medium||'';a.last_utm_campaign=cur.utm_campaign||'';a.last_landing_path=location.pathname}
  Object.keys(a).forEach(function(k){if(!a[k])delete a[k]});}catch(e){}return a};
try{m5attr()}catch(e){}
window.m5uuid=function(){try{if(crypto&&crypto.randomUUID)return crypto.randomUUID()}catch(e){}return 'x'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,10)};
window.m5lead=function(p){p=p||{};if(!p.submission_id)p.submission_id=m5uuid();p.attribution=m5attr();p.page=location.pathname;
  p.consent={text:'By submitting, you agree to be contacted about your project.',at:new Date().toISOString(),page:location.pathname};
  return fetch(M5_LEADS,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(p),keepalive:true})
    .then(function(r){return r.json().then(function(j){return {ok:!!(j&&j.ok),lead_id:j&&j.lead_id,created:j&&j.created,status:r.status}}).catch(function(){return {ok:false,status:r.status}})})
    .catch(function(){return {ok:false,status:0}})};
