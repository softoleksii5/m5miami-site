/* lead.js — короткая форма заявки на внутренних страницах (03.11.2026, бриф SEO недели 1).
   Тот же контракт, что у главной: POST crm.m5miami.com/api/public/leads, «спасибо» только после lead_id. */
(function(){
window.M5_LEADS=window.M5_LEADS||'https://crm.m5miami.com/api/public/leads';
if(!window.m5uuid)window.m5uuid=function(){try{if(crypto&&crypto.randomUUID)return crypto.randomUUID()}catch(e){}return 'x'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,10)+Math.random().toString(36).slice(2,6)};
if(!window.m5attr)window.m5attr=function(){var a={};try{var q=location.search,ks=['utm_source','utm_medium','utm_campaign','utm_content','utm_term','gclid','gbraid','wbraid','fbclid','ttclid','msclkid'],cur={},has=false;
  ks.forEach(function(k){var m=q.match(new RegExp('[?&]'+k+'=([^&#]{1,200})'));if(m){cur[k]=decodeURIComponent(m[1]);has=true}});
  var first=null;try{first=JSON.parse(localStorage.getItem('m5_attr')||'null')}catch(e){}
  if(!first){first={landing_path:location.pathname+(location.search||''),first_touch_at:new Date().toISOString(),referrer:(document.referrer||'').slice(0,200)};ks.forEach(function(k){if(cur[k])first[k]=cur[k]});try{localStorage.setItem('m5_attr',JSON.stringify(first))}catch(e){}}
  a=Object.assign({},first);
  if(has){a.last_utm_source=cur.utm_source||'';a.last_utm_medium=cur.utm_medium||'';a.last_utm_campaign=cur.utm_campaign||'';a.last_landing_path=location.pathname}
  var r=(localStorage.getItem('m5_ref')||'').split('|');if(r[0]&&Date.now()-(+r[1]||0)<7776e6)a.ref=r[0];
  try{if(window.m5ctx){var x=m5ctx();if(x.touch)a.touch=x.touch;if(x.sid)a.sid=x.sid;if(x.vid)a.vid=x.vid}if(window.m5flags&&m5flags().denied)a=a.ref?{ref:a.ref}:{}}catch(e){}Object.keys(a).forEach(function(k){if(!a[k])delete a[k]});}catch(e){}return a};
if(!window.m5lead)window.m5lead=function(p){p=p||{};if(!p.submission_id)p.submission_id=m5uuid();p.attribution=m5attr();p.page=location.pathname;
  p.consent={text:'By submitting, you agree to be contacted about your project.',at:new Date().toISOString(),page:location.pathname};
  return fetch(M5_LEADS,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(p),keepalive:true})
    .then(function(r){return r.json().then(function(j){return {ok:!!(j&&j.ok),lead_id:j&&j.lead_id,created:j&&j.created,status:r.status,fields:j&&j.fields}}).catch(function(){return {ok:false,status:r.status}})})
    .catch(function(){return {ok:false,status:0}})};
window.m5InlineSubmit=function(e){e.preventDefault();var f=e.target,btn=f.querySelector('button[type=submit]'),err=f.querySelector('.lf-err'),ok=f.querySelector('.lf-ok');
  if(f._honey&&f._honey.value)return false;
  var name=f.name.value.trim(),phone=f.phone.value.trim(),plan=(f.plan?f.plan.value:'').trim();
  if(!name||!phone){f.reportValidity&&f.reportValidity();return false}
  btn.disabled=true;btn.style.opacity='.6';err.hidden=true;ok.hidden=true;
  f._sid=f._sid||m5uuid();
  var src=f.getAttribute('data-source')||('page:'+location.pathname);
  m5lead({submission_id:f._sid,intent:'lead',name:name,phone:phone,details:plan,lang:f.getAttribute('data-lang')||'en',service:f.getAttribute('data-service')||'renovation',form_source:src}).then(function(r){
    btn.disabled=false;btn.style.opacity='';
    if(!r.ok){err.hidden=false;if(window.m5track)m5track('lead_submit_failed',{status:r.status,source:src});return;}
    f._sid=null;
    try{fetch('https://formsubmit.co/ajax/fa2b356d28577b1742e22a611a7e847a',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({name:name,phone:phone,plan:plan,source:src,lead_id:r.lead_id,_cc:'vlad@m5miami.com,vadim@m5miami.com',_subject:'New lead — m5miami.com',_template:'table',_captcha:'false'})}).catch(function(){})}catch(_){}
    if(window.m5track){m5track('lead_submit',{source:src});if(r.created)m5track('lead_submit_confirmed',{lead_id:r.lead_id,source:src});}
    f.reset();ok.hidden=false;});
  return false;};
})();
