
function pjSubmit(f){var go=f.querySelector('button');go.disabled=true;go.style.opacity=.6;
var d={project:document.title,source:'project-page',page:location.pathname,_subject:'New lead — m5miami.com (project)',_template:'table',_captcha:'false',_honey:'',
_autoresponse:'Thank you for contacting M5! We received your request and will reply within one business hour (Mon\u2013Sat). Faster? WhatsApp: https://wa.me/17864074441 \u2014 M5 Interior Design Studio, Miami'};
f.querySelectorAll('input,select').forEach(function(el){if(el.name)d[el.name]=el.value;});
fetch('https://formsubmit.co/ajax/fa2b356d28577b1742e22a611a7e847a',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(d)})
.catch(function(){}).finally(function(){if(window.m5track)m5track('lead_submit',{source:'project-page'});f.querySelector('.ok').style.display='block';f.reset();go.disabled=false;go.style.opacity='';});
return false;}
document.querySelectorAll('a[href*="wa.me"]').forEach(function(a){a.addEventListener('click',function(){if(window.m5track)m5track('whatsapp_click')})});
