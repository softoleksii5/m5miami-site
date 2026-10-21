
var PJ_SID=null;
function pjSubmit(f){var go=f.querySelector('button[type=submit]'),ok=f.querySelector('.ok'),err=f.querySelector('.err');
  if(f._honey&&f._honey.value)return false;
  var name=f.name.value.trim(),phone=f.phone.value.trim(),email=f.email.value.trim(),hood=f.neighborhood.value.trim(),budget=f.budget.value;
  ok.style.display='none';err.style.display='none';
  if(!name||!phone){err.style.display='block';(name?f.phone:f.name).focus();return false;}
  go.disabled=true;go.style.opacity=.6;
  var details=["Law office \u00b7 dark marble-effect Venetian plaster \u00b7 Sample: Venetian plaster \u00b7 dark marble effect",hood,budget].filter(Boolean).join(' · ');
  PJ_SID=PJ_SID||m5uuid();
  m5lead({submission_id:PJ_SID,intent:'lead',name:name,phone:phone,email:email,details:details,lang:'en',service:'plaster',form_source:'work-page'}).then(function(r){
    go.disabled=false;go.style.opacity='';
    if(!r.ok){err.style.display='block';if(window.m5track)m5track('lead_submit_failed',{status:r.status,source:'work-page'});return;}
    PJ_SID=null;
    fetch('https://formsubmit.co/ajax/fa2b356d28577b1742e22a611a7e847a',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({name:name,phone:phone,email:email,neighborhood:hood,budget:budget,project:document.title,source:'work-page',page:location.pathname,lead_id:r.lead_id,_cc:'vlad@m5miami.com,vadim@m5miami.com',_subject:'New lead — m5miami.com (work page)',_template:'table',_captcha:'false',_honey:'',_autoresponse:'Thank you for contacting M5! We received your request and will reply within one business hour (Mon\u2013Sat). Faster? WhatsApp: https://wa.me/17864074441 \u2014 M5 Studio Miami'})}).catch(function(){});
    if(window.m5hook)m5hook({type:'lead',name:name,phone:phone,email:email,details:details,source:'work-page',lead_id:r.lead_id});
    if(window.m5track){m5track('lead_submit',{source:'work-page'});if(r.created)m5track('lead_submit_confirmed',{lead_id:r.lead_id});}
    f.reset();ok.style.display='block';
  });
  return false;}
document.querySelectorAll('a[href*="wa.me"]').forEach(function(a){a.addEventListener('click',function(){if(window.m5track)m5track('whatsapp_click')})});
/* lightbox: native dialog, arrows, swipe, focus return, Back closes */
(function(){
  var dlg=document.getElementById('lb'); if(!dlg||!dlg.showModal) return;
  var img=document.getElementById('lbImg'), cap=document.getElementById('lbCap');
  var links=[].slice.call(document.querySelectorAll('a[data-lb]')), idx=-1, opener=null, pushed=false;
  function show(i){ idx=(i+links.length)%links.length; var a=links[idx]; img.src=a.getAttribute('href'); img.alt=(a.querySelector('img')||{}).alt||''; cap.textContent=(a.getAttribute('data-cap')||'')+'  ·  '+(idx+1)+' / '+links.length; }
  function open(a){ opener=a; if(!pushed){try{history.pushState({lb:1},'');pushed=true;}catch(e){}} show(links.indexOf(a)); dlg.showModal(); document.body.style.overflow='hidden'; document.getElementById('lbClose').focus(); }
  dlg.addEventListener('close',function(){ document.body.style.overflow=''; img.removeAttribute('src'); if(pushed){pushed=false;try{history.back();}catch(e){}} if(opener&&opener.focus){try{opener.focus()}catch(e){}} opener=null; });
  window.addEventListener('popstate',function(){ if(dlg.open){ pushed=false; dlg.close(); } });
  document.addEventListener('click',function(e){ var a=e.target.closest('a[data-lb]'); if(!a) return; if(e.metaKey||e.ctrlKey||e.shiftKey||e.button===1) return; e.preventDefault(); open(a); });
  document.getElementById('lbPrev').addEventListener('click',function(){show(idx-1)});
  document.getElementById('lbNext').addEventListener('click',function(){show(idx+1)});
  document.getElementById('lbClose').addEventListener('click',function(){dlg.close()});
  dlg.addEventListener('click',function(e){ if(e.target===dlg) dlg.close(); });
  dlg.addEventListener('keydown',function(e){ if(e.key==='ArrowLeft'){e.preventDefault();show(idx-1);} else if(e.key==='ArrowRight'){e.preventDefault();show(idx+1);} });
  var sx=0; dlg.addEventListener('touchstart',function(e){sx=e.touches[0].clientX},{passive:true});
  dlg.addEventListener('touchend',function(e){ var dx=e.changedTouches[0].clientX-sx; if(Math.abs(dx)>50) show(dx<0?idx+1:idx-1); },{passive:true});
})();
