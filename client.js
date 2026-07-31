/* M5 Client Hub — кабинет клиента (v1, 31.07.2026).
   Паттерн Игоря (emmpa) + наш слой: прогресс, документы, материалы, фидбек,
   кредиты-кешбэк 3%, реферал $250/$250, прямой контакт фаундеров.
   Доступ: /client/?p=<slug>. Слаг = токен из письма PM. Демо: ?p=brickell-demo
   Позже данные переедут в JobTread API — структура CLIENTS повторяет их сущности. */

var CLIENTS={
 'brickell-demo':{
   name:'Taras', project:'Brickell Residence — Full Renovation', status:'Active',
   pm:'Vadym', pmPhone:'+17255770044', started:'Sep 2026',
   phase:1, phases:['Design','Materials','Build','Styling','Handover'],
   tasks:[
     ['done','Design concept & moodboard','Sep 12'],
     ['done','Contract signed · deposit received','Sep 15'],
     ['now','Art-concrete samples for accent wall','Sep 24'],
     ['now','Kitchen: stone countertop selection','Sep 26'],
     ['next','Demolition & rough-in start','Oct 1'],
     ['next','Plaster master arrives on site','Oct 14']
   ],
   docs:{
     'Reports':[['Weekly report #2','Sep 20',''],['Weekly report #1','Sep 13','']],
     'Invoices':[['Invoice 1002 — materials deposit','Sep 18',''],['Invoice 1001 — design phase','Sep 15','']],
     'Design':[['Moodboard v2 (approved)','Sep 12',''],['Layout plan 1.1','Sep 8','']]
   },
   materials:[
     {img:'/img/gal_plaster.jpg', ttl:'Art-concrete wall', note:'Sample #3 — warm gray', st:'review'},
     {img:'/img/gal_kitchen.jpg', ttl:'Kitchen fronts', note:'Matte oak + black', st:'approved'},
     {img:'/img/gal_bath.jpg', ttl:'Bathroom stone', note:'Travertine, honed', st:'approved'},
     {img:'/img/gal_living.jpg', ttl:'Living textiles', note:'Ivory boucle set', st:'todo'}
   ],
   credits:{bal:114, earned:314, tier:'Bronze', rate:3, next:'Silver', nextAt:500,
     hist:[
       ['+45','3% cashback · Invoice 1002 ($1,500)','Sep 18'],
       ['+69','3% cashback · Invoice 1001 ($2,300)','Sep 15'],
       ['+200','Welcome bonus — thank you for trusting M5','Sep 15']
     ]}
 }
};

var REWARDS=[
 {ic:'🧱', ttl:'Art-Concrete Accent Wall', sub:'Signature M5 wall up to 40 sq ft — our showroom finish in your home', cr:750},
 {ic:'🏛', ttl:'Design Supervision Month', sub:'Designer visits + style control during any build month', cr:500},
 {ic:'🎨', ttl:'Moodboard Pack', sub:'Materials + palette + 2 AI visualizations of your space', cr:250},
 {ic:'✨', ttl:'Deep Clean After Works', sub:'Professional post-renovation cleaning crew', cr:200},
 {ic:'🏠', ttl:'Smart-Home Consult', sub:'Lighting, climate & security scenarios for your unit', cr:150},
 {ic:'⚡', ttl:'Priority Scheduling', sub:'Your project jumps the queue for the next phase', cr:100}
];

function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
var slug=(location.search.match(/[?&]p=([^&]*)/)||[])[1]||'';
var C=CLIENTS[slug];

var TSTYLE='<style>'+
'.chero{position:relative;border-radius:20px;overflow:hidden;margin:18px 0 22px;min-height:300px;display:flex;align-items:flex-end;'+
'background:linear-gradient(180deg,rgba(20,18,15,.05) 30%,rgba(20,18,15,.78)),url(/img/client_hub_hero.jpg) center/cover}'+
'.chero-in{padding:26px 28px;color:#fff}'+
'.chero-in .ey{font-family:var(--mono);font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#E3C795;margin-bottom:8px}'+
'.chero-in h1{font-size:34px;font-weight:800;letter-spacing:-.02em;margin:0 0 6px}'+
'.chero-in .st{font-size:14px;opacity:.85}'+
'.cph{display:flex;gap:6px;margin:14px 0 6px;flex-wrap:wrap}'+
'.cph span{flex:1;min-width:70px;text-align:center;font-family:var(--mono);font-size:10px;letter-spacing:.08em;text-transform:uppercase;'+
'padding:9px 4px;border-radius:10px;background:#fff;border:1px solid var(--line);color:#AEA898}'+
'.cph span.on{background:#20242E;border-color:#20242E;color:#E3C795}'+
'.cph span.done{background:#F0F8F2;border-color:#CBE3D3;color:#3E8E5A}'+
'.crow{display:grid;grid-template-columns:1.5fr 1fr;gap:16px;align-items:start}'+
'@media(max-width:860px){.crow{grid-template-columns:1fr}}'+
'.cbox{background:#fff;border:1px solid var(--line);border-radius:16px;padding:18px 20px;margin-bottom:16px}'+
'.cbox h3{margin:0 0 12px;font-size:17px;font-weight:800;letter-spacing:-.01em;color:#232733}'+
'.tsk{display:flex;gap:12px;align-items:center;padding:10px 8px;border-radius:10px}'+
'.tsk:hover{background:#FBF7EF}'+
'.tsk i{width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-style:normal;font-size:13px;flex:none}'+
'.tsk.done i{background:#F0F8F2;color:#3E8E5A}.tsk.now i{background:#FDF3E2;color:#B0894F}.tsk.next i{background:#F5EFE6;color:#AEA898}'+
'.tsk b{font-size:14.5px;font-weight:650;color:#20242E}.tsk small{margin-left:auto;color:#AEA898;font-family:var(--mono);font-size:11px;flex:none}'+
'.tsk.done b{color:#8A8272;text-decoration:line-through;text-decoration-color:#CBE3D3}'+
'.dtab{display:flex;gap:8px;margin-bottom:10px;flex-wrap:wrap}'+
'.dtab span{font-family:var(--mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;padding:7px 14px;border-radius:18px;background:#F5EFE6;cursor:pointer;color:#6E6656}'+
'.dtab span.on{background:#20242E;color:#E3C795}'+
'.doc{display:flex;justify-content:space-between;align-items:center;padding:11px 8px;border-radius:10px;color:#20242E}'+
'.doc:hover{background:#FBF7EF}.doc b{font-size:14px;font-weight:650}.doc small{color:#AEA898;font-family:var(--mono);font-size:11px}'+
'.mats{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px}'+
'.mat{border:1px solid var(--line);border-radius:14px;overflow:hidden;background:#fff}'+
'.mat img{width:100%;height:96px;object-fit:cover;display:block}'+
'.mat .mi{padding:10px 12px}.mat b{font-size:13.5px;display:block;color:#20242E}.mat span{font-size:12px;color:#8A8272}'+
'.mat em{display:inline-block;font-style:normal;font-family:var(--mono);font-size:9.5px;letter-spacing:.08em;text-transform:uppercase;padding:3px 8px;border-radius:8px;margin-top:7px}'+
'.mat em.approved{background:#F0F8F2;color:#3E8E5A}.mat em.review{background:#FDF3E2;color:#B0894F}.mat em.todo{background:#F5EFE6;color:#AEA898}'+
'.stars{display:flex;gap:6px;margin:8px 0 12px}'+
'.stars span{font-size:26px;cursor:pointer;filter:grayscale(1);opacity:.45;transition:.15s}'+
'.stars span.on{filter:none;opacity:1;transform:scale(1.08)}'+
'.fb-ta{width:100%;border:1px solid var(--line);border-radius:12px;padding:12px 14px;font:14px var(--sans);color:#20242E;min-height:74px;resize:vertical;box-sizing:border-box}'+
'.cbtn{display:inline-flex;align-items:center;gap:8px;font-family:var(--mono);font-size:11.5px;letter-spacing:.12em;text-transform:uppercase;'+
'padding:12px 22px;border-radius:24px;border:0;cursor:pointer;background:linear-gradient(90deg,#B0894F,#96703B);color:#fff;margin-top:10px}'+
'.cbtn.line{background:transparent;border:1px solid var(--ink);color:var(--ink)}'+
'.credbox{background:linear-gradient(135deg,#20242E,#2C3140);border-radius:16px;color:#fff;padding:20px 22px;margin-bottom:16px}'+
'.credbox .tier{font-family:var(--mono);font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:#E3C795}'+
'.credbox .bal{font-size:44px;font-weight:800;letter-spacing:-.03em;line-height:1.1}'+
'.credbox .bal small{font-size:15px;font-weight:600;color:#AEA898;letter-spacing:0}'+
'.credbar{height:6px;border-radius:3px;background:rgba(255,255,255,.14);margin:12px 0 6px;overflow:hidden}'+
'.credbar i{display:block;height:100%;border-radius:3px;background:linear-gradient(90deg,#B0894F,#E3C795)}'+
'.credbox .nx{font-size:12px;color:#AEA898}'+
'.chist{margin-top:12px;border-top:1px solid rgba(255,255,255,.12);padding-top:10px}'+
'.chist div{display:flex;gap:10px;font-size:12.5px;color:#CFC8B8;padding:4px 0}'+
'.chist b{color:#7ED9A0;font-family:var(--mono);flex:none}'+
'.chist small{margin-left:auto;color:#8A8272;flex:none}'+
'.rwd{display:flex;gap:12px;align-items:center;padding:12px 10px;border-radius:12px;border:1px solid transparent}'+
'.rwd:hover{background:#FBF7EF;border-color:var(--line)}'+
'.rwd .ric{font-size:22px;flex:none;width:40px;height:40px;border-radius:11px;background:#F5EFE6;display:flex;align-items:center;justify-content:center}'+
'.rwd b{font-size:14px;display:block;color:#20242E}.rwd span{font-size:12px;color:#8A8272;display:block}'+
'.rwd .rgo{margin-left:auto;flex:none;font-family:var(--mono);font-size:11px;letter-spacing:.06em;padding:8px 14px;border-radius:18px;background:#20242E;color:#E3C795;cursor:pointer;white-space:nowrap}'+
'.rwd .rgo.na{background:#F5EFE6;color:#AEA898;cursor:default}'+
'.refbox{background:#FDF9F1;border:1px dashed #D9B87C;border-radius:16px;padding:18px 20px;margin-bottom:16px}'+
'.reflink{display:flex;gap:8px;margin-top:10px}'+
'.reflink input{flex:1;border:1px solid var(--line);border-radius:10px;padding:10px 12px;font:12.5px var(--mono);color:#6E6656;background:#fff;min-width:0}'+
'.fdrs{display:flex;gap:10px;align-items:center;padding:10px 0}'+
'.fdrs img{width:44px;height:44px;border-radius:50%;object-fit:cover}'+
'.fdrs b{display:block;font-size:14px;color:#20242E}.fdrs span{font-size:12px;color:#8A8272}'+
'.fdrs a{margin-left:auto;font-family:var(--mono);font-size:11px;color:#96703B;text-decoration:none;border:1px solid #D9B87C;padding:7px 13px;border-radius:16px;white-space:nowrap}'+
'.okmsg{background:#F0F8F2;border:1px solid #CBE3D3;color:#3E8E5A;border-radius:12px;padding:12px 16px;font-size:14px;margin-top:10px;display:none}'+
'.gate{max-width:430px;margin:110px auto;background:#fff;border-radius:18px;padding:34px 30px;text-align:center;border:1px solid var(--line)}'+
'</style>';

function jinNote(){
  return '<div style="display:flex;gap:10px;align-items:center;background:#F7F2EA;border-radius:12px;padding:11px 14px;margin-top:12px">'+
  '<span style="font-size:18px">✦</span><span style="font-size:12.5px;color:#6E6656">'+
  '<b style="color:#20242E">Jin, our AI, watches this project 24/7</b> — updates land here the moment the team logs them. Questions? Message '+esc(C.pm)+' anytime.</span></div>';
}

try{
if(!C){
  document.getElementById('app').innerHTML=TSTYLE+
  '<header><div class="wrap hbar"><a class="logo" href="/">M<b>5</b><small>CLIENT</small></a></div></header>'+
  '<div class="gate"><div style="font-size:34px;margin-bottom:10px">🔑</div>'+
  '<b style="font-size:18px;color:#20242E">This is a private project hub.</b><br><br>'+
  '<span style="font-size:14px;color:#6E6656">Every M5 client receives a personal link from their project manager. '+
  'Lost yours? Message us on WhatsApp and we’ll resend it.</span><br><br>'+
  '<a class="cbtn" style="text-decoration:none" href="https://wa.me/17255770044">WhatsApp M5</a></div>'+
  '<footer>M5 Interior Design &amp; Build · Miami</footer>';
}else{
  var ph=C.phases.map(function(p,i){return '<span class="'+(i<C.phase?'done':(i===C.phase?'on':''))+'">'+esc(p)+'</span>';}).join('');
  var tasks=C.tasks.map(function(t){var ic=t[0]==='done'?'✓':(t[0]==='now'?'●':'○');
    return '<div class="tsk '+t[0]+'"><i>'+ic+'</i><b>'+esc(t[1])+'</b><small>'+esc(t[2])+'</small></div>';}).join('');
  var cats=Object.keys(C.docs);
  var dtabs=cats.map(function(c,i){return '<span class="'+(i===0?'on':'')+'" onclick="docTab(this,\''+esc(c)+'\')">'+esc(c)+'</span>';}).join('');
  var docHtml=function(cat){return C.docs[cat].map(function(d){
    return '<div class="doc"><b>📄 '+esc(d[0])+'</b><small>'+esc(d[1])+'</small></div>';}).join('');};
  var mats=C.materials.map(function(m){
    return '<div class="mat"><img src="'+m.img+'" alt="" loading="lazy"><div class="mi"><b>'+esc(m.ttl)+'</b><span>'+esc(m.note)+'</span><br><em class="'+m.st+'">'+
    (m.st==='approved'?'Approved':(m.st==='review'?'Your review':'Coming up'))+'</em></div></div>';}).join('');
  var hist=C.credits.hist.map(function(h){return '<div><b>'+esc(h[0])+'</b> '+esc(h[1])+'<small>'+esc(h[2])+'</small></div>';}).join('');
  var rwds=REWARDS.map(function(r,i){var ok=C.credits.bal>=r.cr;
    return '<div class="rwd"><div class="ric">'+r.ic+'</div><div><b>'+esc(r.ttl)+'</b><span>'+esc(r.sub)+'</span></div>'+
    '<span class="rgo'+(ok?'':' na')+'" '+(ok?('onclick="redeem('+i+')"'):'')+'>'+r.cr+' cr</span></div>';}).join('');
  var pct=Math.min(100,Math.round(C.credits.earned/C.credits.nextAt*100));

  document.getElementById('app').innerHTML=TSTYLE+
  '<header><div class="wrap hbar">'+
    '<a class="logo" href="/">M<b>5</b><small>CLIENT</small></a>'+
    '<div class="hr"><span class="priv"><i></i><span>Private · '+esc(C.status)+'</span></span>'+
    '<a class="signout" href="/" style="text-decoration:none">m5miami.com</a></div>'+
  '</div></header>'+
  '<div class="wrap">'+
    '<div class="chero"><div class="chero-in">'+
      '<div class="ey">Your studio hub · everything in one place</div>'+
      '<h1>Hi, '+esc(C.name)+'.</h1>'+
      '<div class="st">'+esc(C.project)+' · started '+esc(C.started)+' · PM: '+esc(C.pm)+'</div>'+
    '</div></div>'+
    '<div class="cph">'+ph+'</div>'+
    '<div class="crow">'+
      '<div>'+
        '<div class="cbox"><h3>Project progress</h3>'+tasks+jinNote()+'</div>'+
        '<div class="cbox"><h3>Documents</h3><div class="dtab">'+dtabs+'</div><div id="docList">'+docHtml(cats[0])+'</div></div>'+
        '<div class="cbox"><h3>Materials &amp; selections</h3><div class="mats">'+mats+'</div></div>'+
        '<div class="cbox"><h3>How was our work this week?</h3>'+
          '<div class="stars" id="stars">'+[1,2,3,4,5].map(function(n){return '<span onclick="starPick('+n+')">★</span>';}).join('')+'</div>'+
          '<textarea class="fb-ta" id="fbText" placeholder="Anything on your mind — a quick “all good”, an idea, or a concern. It goes straight to the founders."></textarea>'+
          '<button class="cbtn" onclick="sendFb()">Send feedback</button>'+
          '<div class="okmsg" id="fbOk">Thank you! Your feedback just landed on the founders’ desk. We read every word.</div>'+
        '</div>'+
      '</div>'+
      '<div>'+
        '<div class="credbox">'+
          '<div class="tier">◆ '+esc(C.credits.tier)+' tier · '+C.credits.rate+'% cashback</div>'+
          '<div class="bal">'+C.credits.bal+' <small>credits available · 1 cr = $1</small></div>'+
          '<div class="credbar"><i style="width:'+pct+'%"></i></div>'+
          '<div class="nx">Earn '+(C.credits.nextAt-C.credits.earned)+' more to reach '+esc(C.credits.next)+' (3.5% cashback)</div>'+
          '<div class="chist">'+hist+'</div>'+
        '</div>'+
        '<div class="cbox"><h3>Spend your credits</h3>'+
          '<div style="font-size:12.5px;color:#8A8272;margin-bottom:8px">Every paid invoice earns '+C.credits.rate+'% back. Redeem for extra M5 services — we confirm within 24h.</div>'+
          rwds+
          '<div class="okmsg" id="rwOk">Request sent! '+esc(C.pm)+' will confirm and schedule it within 24 hours.</div>'+
        '</div>'+
        '<div class="refbox"><b style="font-size:15px;color:#20242E">🤝 Refer a friend — you both win</b>'+
          '<div style="font-size:13px;color:#6E6656;margin-top:6px">You get <b>$250 in credits</b>, your friend gets <b>$250 off</b> their first invoice. Share your personal link:</div>'+
          '<div class="reflink"><input id="refUrl" readonly value="https://m5miami.com/?ref='+esc(slug)+'"><button class="cbtn" style="margin:0" onclick="copyRef()">Copy</button></div>'+
          '<div class="okmsg" id="refOk">Link copied — send it to someone who deserves a beautiful home.</div>'+
        '</div>'+
        '<div class="cbox"><h3>Talk to us directly</h3>'+
          '<div style="font-size:12.5px;color:#8A8272;margin-bottom:4px">Big idea? Concern? Skip the queue — message us directly.</div>'+
          '<div class="fdrs"><img src="/img/ava_alex.jpg" alt=""><div><b>Alex</b><span>Founder · systems &amp; vision</span></div><a href="mailto:hello@m5miami.com">Email</a></div>'+
          '<div class="fdrs"><img src="/img/ava_vadim.jpg" alt=""><div><b>Vadym</b><span>Director · runs your project</span></div><a href="https://wa.me/17255770044">WhatsApp</a></div>'+
        '</div>'+
      '</div>'+
    '</div>'+
  '</div>'+
  '<footer>M5 Interior Design &amp; Build · Miami · Powered by Jin, our AI</footer>';
}
}catch(e){
  document.getElementById('app').innerHTML='<div class="gate" style="margin-top:120px"><b>Something didn’t load.</b><br><br>'+
  '<a href="https://wa.me/17255770044" style="color:#96703B">Message us on WhatsApp</a></div>';
}

var fbStars=0;
function starPick(n){fbStars=n;var s=document.querySelectorAll('#stars span');for(var i=0;i<s.length;i++){s[i].className=i<n?'on':'';}}
function sendFb(){
  var t=(document.getElementById('fbText').value||'').trim();
  if(!fbStars&&!t)return;
  if(window.m5hook)m5hook({type:'feedback',name:C?C.name:'',service:C?C.project:'',details:(fbStars?fbStars+'★ ':'')+t,source:'client-hub:'+slug});
  document.getElementById('fbText').value='';starPick(0);
  var ok=document.getElementById('fbOk');ok.style.display='block';setTimeout(function(){ok.style.display='none';},6000);
}
function redeem(i){
  var r=REWARDS[i];if(!r)return;
  if(!confirm('Redeem “'+r.ttl+'” for '+r.cr+' credits?\nThe team will confirm within 24 hours.'))return;
  if(window.m5hook)m5hook({type:'redeem',name:C?C.name:'',service:r.ttl,details:r.cr+' credits · balance '+(C?C.credits.bal:'?'),source:'client-hub:'+slug});
  var ok=document.getElementById('rwOk');ok.style.display='block';setTimeout(function(){ok.style.display='none';},6000);
}
function copyRef(){
  var inp=document.getElementById('refUrl');inp.select();inp.setSelectionRange(0,99);
  try{navigator.clipboard.writeText(inp.value);}catch(e){document.execCommand('copy');}
  if(window.m5hook)m5hook({type:'referral-copy',name:C?C.name:'',source:'client-hub:'+slug});
  var ok=document.getElementById('refOk');ok.style.display='block';setTimeout(function(){ok.style.display='none';},5000);
}
function docTab(el,cat){
  var t=document.querySelectorAll('.dtab span');for(var i=0;i<t.length;i++)t[i].className='';
  el.className='on';
  var C2=CLIENTS[slug];
  document.getElementById('docList').innerHTML=C2.docs[cat].map(function(d){
    return '<div class="doc"><b>📄 '+d[0].replace(/</g,'&lt;')+'</b><small>'+d[1].replace(/</g,'&lt;')+'</small></div>';}).join('');
}
