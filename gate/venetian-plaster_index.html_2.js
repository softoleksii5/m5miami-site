
var FEAT=[
  {k:'Samples on your wall',d:'A master comes with real panels and holds them on your wall, in your light. You pick with your own eyes.',i:'/media/lp/p_samples.webp',viz:1},
  {k:'Venetian',d:'Polished to a deep, marble-like shine that moves with the light all day.',v:'/media/lp/venetian.mp4',p:'/media/lp/venetian.webp'},
  {k:'Marmorino',d:'Fine stone grain, soft satin look. Calm and architectural, from bedrooms to facades.',i:'/img/case_powder-room-black-marmorino_3.webp'},
  {k:'By hand',d:'Coat after coat, trowel by trowel. Floors and furniture protected, room left clean.',v:'/media/lp/velvet.mp4',p:'/media/lp/velvet.webp'},
  {k:'Travertine',d:'Layered stone with natural veins, without the weight or grout lines of real slabs.',i:'/img/tex_travertine.webp',kb:1},
  {k:'Live with it',d:'One fixed price in writing, and a wall that changes with the light, every single day.',i:'/media/lp/p_living.webp',viz:1}
];
(function(){
  var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches,desktop=matchMedia('(min-width: 901px)').matches;
  if(reduce)document.documentElement.classList.add('no-motion');
  function mediaHTML(f){return (f.v?'<video muted loop playsinline preload="none" poster="'+f.p+'" data-src="'+f.v+'"></video>':'<img class="'+(f.kb?'kb':'')+'" src="'+f.i+'" alt="'+f.k+'" loading="lazy">')+(f.viz?'<span class="viz">VISUALIZATION</span>':'')}
  var fM=document.getElementById('fMedia'),fTabs=document.getElementById('fTabs'),fCards=document.getElementById('fCards');
  FEAT.forEach(function(f,i){
    var m=document.createElement('div');m.className='m'+(i?'':' on');m.innerHTML=mediaHTML(f);fM.appendChild(m);
    var b=document.createElement('button');b.type='button';b.setAttribute('role','tab');b.innerHTML='<b>'+(i+1)+'</b>'+f.k;b.onclick=function(){go(i,true)};fTabs.appendChild(b);
    var c=document.createElement('div');c.className='fm reveal';c.innerHTML='<div class="v">'+mediaHTML(f)+'</div><div class="t"><b>'+f.k+'</b><span>'+f.d+'</span></div>';fCards.appendChild(c);
  });
  var cur=-1,st=null,lenis=null;
  function play(el){var v=el&&el.querySelector('video');if(!v)return;if(!v.src&&v.dataset.src)v.src=v.dataset.src;var p=v.play();if(p&&p.catch)p.catch(function(){})}
  function stop(el){var v=el&&el.querySelector('video');if(v)v.pause()}
  function go(i,jump){if(i===cur)return;cur=i;
    [].forEach.call(fM.children,function(m,j){m.classList.toggle('on',j===i);j===i?play(m):stop(m)});
    [].forEach.call(fTabs.children,function(b,j){b.classList.toggle('on',j===i);b.setAttribute('aria-selected',j===i)});
    document.getElementById('fT').textContent=FEAT[i].k;document.getElementById('fD').textContent=FEAT[i].d;
    if(jump&&st){var y=st.start+(st.end-st.start)*(i+.5)/FEAT.length;lenis?lenis.scrollTo(y):scrollTo(0,y)}}
  go(0);

  /* lazy videos */
  var io=new IntersectionObserver(function(es){es.forEach(function(e){var v=e.target;if(e.isIntersecting){if(!v.src&&v.dataset.src)v.src=v.dataset.src;var p=v.play();if(p&&p.catch)p.catch(function(){})}else v.pause()})},{rootMargin:'250px'});
  document.querySelectorAll('.lazyv,.feat-m video').forEach(function(v){io.observe(v)});

  /* header */
  var hdr=document.getElementById('hdr');function hs(){hdr.classList.toggle('up',scrollY>40)}addEventListener('scroll',hs,{passive:true});hs();

  /* rail arrows */
  var rail=document.getElementById('rail');document.querySelectorAll('[data-rail]').forEach(function(b){b.onclick=function(){rail.scrollBy({left:(+b.dataset.rail)*rail.clientWidth*.8,behavior:'smooth'})}});

  /* before/after: drag + scroll */
  var ba=document.getElementById('ba'),aft=document.getElementById('baAfter'),line=document.getElementById('baLine'),knob=document.getElementById('baKnob');
  function setBA(p){p=Math.max(2,Math.min(98,p));aft.style.clipPath='inset(0 0 0 '+p+'%)';line.style.left=p+'%';knob.style.left=p+'%';knob.setAttribute('aria-valuenow',Math.round(p))}
  var drag=false;function bx(e){var r=ba.getBoundingClientRect();setBA(((e.touches?e.touches[0].clientX:e.clientX)-r.left)/r.width*100)}
  knob.addEventListener('pointerdown',function(e){drag=true;knob.setPointerCapture(e.pointerId)});
  knob.addEventListener('pointermove',function(e){if(drag)bx(e)});knob.addEventListener('pointerup',function(){drag=false});
  ba.addEventListener('click',function(e){if(e.target!==knob)bx(e)});
  knob.addEventListener('keydown',function(e){var v=+knob.getAttribute('aria-valuenow');if(e.key==='ArrowLeft')setBA(v-5);if(e.key==='ArrowRight')setBA(v+5)});

  if(reduce||!window.gsap){document.querySelectorAll('.reveal').forEach(function(e){e.style.opacity=1;e.style.transform='none'});setBA(50);return}
  gsap.registerPlugin(ScrollTrigger);
  if(window.Lenis){lenis=new Lenis({lerp:.1});lenis.on('scroll',ScrollTrigger.update);gsap.ticker.add(function(t){lenis.raf(t*1000)});gsap.ticker.lagSmoothing(0)}
  document.querySelectorAll('a[href^="#"]:not([data-open])').forEach(function(a){a.addEventListener('click',function(e){var t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();lenis?lenis.scrollTo(t,{offset:-20}):t.scrollIntoView({behavior:'smooth'})}})});
  window._lenis=lenis;

  /* hero: frame shrinks, words drift apart */
  gsap.to('.hero',{scale:.94,borderRadius:34,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
  gsap.to('#heroH',{yPercent:-40,opacity:.2,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});

  /* statement letters light up */
  var s=document.getElementById('stmt');s.innerHTML=s.textContent.split('').map(function(c){return '<span class="ch">'+(c===' '?'&nbsp;':c)+'</span>'}).join('');
  var cs=s.querySelectorAll('.ch');ScrollTrigger.create({trigger:'.stmt',start:'top 70%',end:'center 45%',scrub:true,onUpdate:function(x){var n=Math.round(x.progress*cs.length);cs.forEach(function(c,i){c.style.opacity=i<n?1:.12})}});

  /* before/after: shutter follows scroll */
  setBA(88);ScrollTrigger.create({trigger:'#ba',start:'top 75%',end:'center 40%',scrub:true,onUpdate:function(x){if(!drag)setBA(88-x.progress*38)}});

  /* reveals */
  gsap.utils.toArray('.reveal').forEach(function(el){gsap.to(el,{opacity:1,y:0,duration:.9,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 90%'}})});

  /* features pinned */
  if(desktop){st=ScrollTrigger.create({trigger:'#featPin',start:'top top',end:'+='+(FEAT.length*80)+'%',pin:true,scrub:true,
    onUpdate:function(x){go(Math.min(FEAT.length-1,Math.floor(x.progress*FEAT.length)))},onToggle:function(x){x.isActive?play(fM.children[cur]):stop(fM.children[cur])}})}

  gsap.fromTo('.join>img',{scale:1.12},{scale:1,ease:'none',scrollTrigger:{trigger:'.join',start:'top bottom',end:'bottom bottom',scrub:true}});
})();

/* ===== contacts: modal, quick form, lookbook → M5 OS ===== */
document.addEventListener('click',function(e){var a=e.target.closest('[data-track]');if(a&&window.m5track)m5track(a.getAttribute('data-track'),{page:'lp-venetian'})});
(function(){
  var mdl=document.getElementById('mdl'),last=null;
  function open(){last=document.activeElement;document.getElementById('mBody').style.display='';document.getElementById('mOk').style.display='none';mdl.classList.add('open');if(window._lenis)_lenis.stop();setTimeout(function(){document.getElementById('m_name').focus()},30);m5track('booking_open',{page:'lp-venetian'})}
  function close(){mdl.classList.remove('open');if(window._lenis)_lenis.start();if(last)last.focus()}
  document.querySelectorAll('[data-open]').forEach(function(b){b.addEventListener('click',function(e){e.preventDefault();open()})});
  mdl.addEventListener('click',function(e){if(e.target===mdl||e.target.hasAttribute('data-close'))close()});
  addEventListener('keydown',function(e){if(e.key==='Escape'&&mdl.classList.contains('open'))close()});

  function send(p,btn,label,onok,onfail){btn.disabled=true;btn.textContent='Sending…';
    m5lead(p).then(function(r){btn.disabled=false;btn.textContent=label;if(!r.ok){onfail(r);m5track('lead_submit_failed',{status:r.status,page:'lp-venetian'});return}onok(r);
      m5track('lead_submit',{page:'lp-venetian',form:p.form_source});if(r.created)m5track('lead_submit_confirmed',{lead_id:r.lead_id,page:'lp-venetian'})})}
  function okPhone(v){return v.replace(/\D/g,'').length>=7}

  var mf=document.getElementById('mf'),mSID=null;
  mf.addEventListener('submit',function(e){e.preventDefault();if(mf._honey.value)return;
    var n=mf.name.value.trim(),ph=mf.phone.value.trim(),err=document.getElementById('mErr');
    if(!n||!okPhone(ph)){err.style.display='block';(n?mf.phone:mf.name).focus();return}err.style.display='none';document.getElementById('mFail').style.display='none';
    mSID=mSID||m5uuid();
    send({submission_id:mSID,intent:'service',name:n,phone:ph,service:'Venetian plaster',lang:'en',form_source:'lp-venetian-modal',details:[mf.what.value,mf.zip.value.trim(),mf.who.value].filter(Boolean).join(' · ')},
      document.getElementById('mBtn'),'Book my visit',function(){mSID=null;mf.reset();document.getElementById('mBody').style.display='none';document.getElementById('mOk').style.display='block'},
      function(){document.getElementById('mFail').style.display='block'})});

  var qf=document.getElementById('qf'),qSID=null;
  qf.addEventListener('submit',function(e){e.preventDefault();if(qf._honey.value)return;
    var n=qf.name.value.trim(),ph=qf.phone.value.trim(),note=document.getElementById('qfNote');
    if(!n||!okPhone(ph)){note.textContent='Please add your name and a phone number.';(n?qf.phone:qf.name).focus();return}
    qSID=qSID||m5uuid();
    send({submission_id:qSID,intent:'service',name:n,phone:ph,service:'Venetian plaster',lang:'en',form_source:'lp-venetian-quick'},qf.querySelector('button'),'Book a visit',
      function(){qSID=null;qf.style.display='none';note.style.display='none';document.getElementById('qfOk').style.display='block'},
      function(){note.innerHTML='Not saved. Please message us on <a href="https://wa.me/17864074441" style="text-decoration:underline">WhatsApp</a>.'})});

  var lb=document.getElementById('lbk');
  lb.addEventListener('submit',function(e){e.preventDefault();var em=lb.email.value.trim();if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)){lb.email.focus();return}
    m5lead({intent:'guide',email:em,lang:'en',service:'guide',form_source:'lp-venetian-lookbook'});m5track('guide_lead',{page:'lp-venetian'});
    lb.style.display='none';document.getElementById('lbkOk').style.display='block'});
})();
