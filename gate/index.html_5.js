
/* ===== кейсы: контент модалок (EN/ES/UK). Заменить фактурой реальных объектов. ===== */
var CASES = {
 en: [
  {tag:"Renovation · Brickell", h:"Brickell 2BR Residence", img:"img/case1_brickell.webp",
   facts:["<b>900</b> sq ft","<b>12</b> weeks","budget <b>$210–240K</b>"],
   p1:"Full-gut renovation of a 30th-floor two-bedroom condo for a family relocating from New York. Building rules allowed work on weekdays 9–5 only, with the freight elevator by reservation — so the schedule was engineered around the condo: demolition and rough-in compressed into the first three weeks, millwork and stone prefabricated off-site.",
   p2:"Handed over in 12 weeks on the signed estimate. COI, condo board approvals and all inspections were handled by our team.",
   scope:["Full demolition & re-layout","Open-plan kitchen–living","New electrical & plumbing","Italian kitchen, stone island","Microcement bathrooms","Hidden lighting scenes","Built-in storage throughout"],
   mat:"Microcement · natural oak · quartzite · Italian cabinetry"},
  {tag:"Kitchen · Edgewater", h:"Edgewater Kitchen", img:"img/case2_kitchen.webp",
   facts:["<b>340</b> sq ft","<b>8</b> weeks","budget <b>$58–68K</b>"],
   p1:"A kitchen and dining zone in a waterfront condo. Plumbing and electrical were relocated under permit; a structural column in the middle of the zone was absorbed into an L-shaped stone island that now anchors the room.",
   p2:"Matte lacquer fronts, quartz counters with a full-height backsplash, an appliance garage to keep the counters clean, and scene lighting for cooking and hosting.",
   scope:["Re-layout under permit","Relocated plumbing & electrical","Custom cabinetry","Quartz island & backsplash","Appliance garage","Scene lighting"],
   mat:"Matte lacquer · quartz · smoked oak"},
  {tag:"Bathroom · Sunny Isles", h:"Sunny Isles Master Bath", img:"img/case3_bath.webp",
   facts:["<b>190</b> sq ft","<b>6</b> weeks","budget <b>$34–42K</b>"],
   p1:"A master bathroom rebuilt as a quiet spa: book-matched porcelain slabs, a walk-in shower with a linear drain, floating vanity and heated floors.",
   p2:"Waterproofing passed inspection on the first visit; moisture-resistant Venetian plaster on the ceiling ties the room to the rest of the home.",
   scope:["Book-matched porcelain slabs","Walk-in shower, linear drain","Floating vanity","Heated floors","Moisture-resistant plaster ceiling"],
   mat:"Porcelain slabs · brushed nickel · Venetian plaster"},
  {tag:"Full villa · Coral Gables", h:"Coral Gables Villa", img:"img/case4_villa.webp",
   facts:["<b>2,580</b> sq ft","<b>16</b> weeks","budget <b>$450–520K</b>"],
   p1:"Complete renovation of a 1970s villa: a new layout with a primary suite, impact windows and doors to HVHZ standard, and a full replacement of mechanical, electrical and plumbing systems.",
   p2:"Venetian plaster runs through the living areas; outside — an outdoor kitchen and landscape lighting. Permits and inspections with Miami-Dade throughout.",
   scope:["New layout, primary suite","Impact windows & doors (HVHZ)","Full MEP replacement","Venetian plaster living areas","Outdoor kitchen","Landscape lighting"],
   mat:"Mineral plaster · travertine · ipe wood · impact glass"},
  {tag:"Fit-out · South Beach", h:"South Beach Loft", img:"img/case5_loft.webp",
   facts:["<b>1,030</b> sq ft","<b>10</b> weeks","budget <b>$180–210K</b>"],
   p1:"A creative studio fit-out: exposed ceilings with acoustic treatment, microcement floors, glass partitions and custom steel-and-oak shelving.",
   p2:"Designed for content production — gallery lighting, a podcast corner and a cyclorama wall. Delivered ready for the first shoot.",
   scope:["Exposed ceilings + acoustics","Microcement floors","Glass partitions","Steel & oak shelving","Gallery lighting","Podcast corner & cyc wall"],
   mat:"Microcement · blackened steel · oak · glass"},
  {tag:"Sample library · by appointment", h:"M5 Sample Library · full-size samples brought to you", img:"img/case6_showroom.webp",
   facts:["<b>45+</b> plaster finishes","<b>we come to you</b>"],
   p1:"Our sample library, by appointment: Venetian plaster finishes on full-size panels — not tiny samples — plus a stone and wood library. We bring the samples to you and plan your project on site.",
   p2:"By appointment — leave a request and we will bring the samples to you.",
   scope:["45+ finishes on full-size panels","Stone & wood library","Material consultations","Project meetings"],
   mat:""}
 ],
 es: [
  {tag:"Renovación · Brickell", h:"Residencia 2BR en Brickell", img:"img/case1_brickell.webp",
   facts:["<b>900</b> sq ft","<b>12</b> semanas","presupuesto <b>$210–240K</b>"],
   p1:"Renovación integral de un condominio de dos habitaciones en el piso 30 para una familia que se mudó desde Nueva York. El edificio permitía trabajar solo entre semana de 9 a 5 y con el montacargas reservado: el cronograma se diseñó alrededor de esas reglas, con demolición e instalaciones en las tres primeras semanas y carpintería y piedra prefabricadas fuera de obra.",
   p2:"Entregada en 12 semanas con el presupuesto firmado. COI, aprobaciones del condo board e inspecciones a cargo de nuestro equipo.",
   scope:["Demolición y nueva distribución","Cocina-salón abierto","Electricidad y plomería nuevas","Cocina italiana, isla de piedra","Baños en microcemento","Escenas de luz oculta","Almacenaje a medida"],
   mat:"Microcemento · roble natural · cuarcita · cocina italiana"},
  {tag:"Cocina · Edgewater", h:"Cocina en Edgewater", img:"img/case2_kitchen.webp",
   facts:["<b>340</b> sq ft","<b>8</b> semanas","presupuesto <b>$58–68K</b>"],
   p1:"Cocina y comedor en un condominio frente al mar. Plomería y electricidad reubicadas con permiso; una columna estructural en medio de la zona quedó integrada en una isla de piedra en L que hoy es el centro de la casa.",
   p2:"Frentes lacados mate, encimeras de cuarzo con salpicadero a techo, garaje de electrodomésticos y escenas de luz para cocinar y recibir.",
   scope:["Nueva distribución con permiso","Plomería y electricidad reubicadas","Carpintería a medida","Isla y salpicadero de cuarzo","Garaje de electrodomésticos","Escenas de iluminación"],
   mat:"Laca mate · cuarzo · roble ahumado"},
  {tag:"Baño · Sunny Isles", h:"Baño principal en Sunny Isles", img:"img/case3_bath.webp",
   facts:["<b>190</b> sq ft","<b>6</b> semanas","presupuesto <b>$34–42K</b>"],
   p1:"Un baño principal convertido en spa: placas de porcelánico book-match, ducha walk-in con drenaje lineal, mueble flotante y suelo radiante.",
   p2:"La impermeabilización pasó la inspección a la primera; el techo en estuco veneciano resistente a la humedad conecta el baño con el resto de la casa.",
   scope:["Porcelánico book-match","Ducha walk-in, drenaje lineal","Mueble flotante","Suelo radiante","Techo en estuco veneciano"],
   mat:"Porcelánico · níquel cepillado · estuco veneciano"},
  {tag:"Villa completa · Coral Gables", h:"Villa en Coral Gables", img:"img/case4_villa.webp",
   facts:["<b>2,580</b> sq ft","<b>16</b> semanas","presupuesto <b>$450–520K</b>"],
   p1:"Renovación completa de una villa de los años 70: nueva distribución con suite principal, ventanas y puertas de impacto (HVHZ) y reemplazo total de instalaciones.",
   p2:"Estuco veneciano en las zonas de estar; fuera, cocina exterior e iluminación de paisaje. Permisos e inspecciones con Miami-Dade.",
   scope:["Nueva distribución, suite principal","Ventanas de impacto (HVHZ)","Reemplazo total MEP","Estuco veneciano","Cocina exterior","Iluminación de paisaje"],
   mat:"Estuco mineral · travertino · madera ipe · vidrio de impacto"},
  {tag:"Fit-out · South Beach", h:"Loft en South Beach", img:"img/case5_loft.webp",
   facts:["<b>1,030</b> sq ft","<b>10</b> semanas","presupuesto <b>$180–210K</b>"],
   p1:"Fit-out de un estudio creativo: techos vistos con tratamiento acústico, suelos de microcemento, mamparas de vidrio y estanterías de acero y roble a medida.",
   p2:"Pensado para producción de contenido: luz de galería, rincón de podcast y pared ciclorama. Entregado listo para el primer rodaje.",
   scope:["Techos vistos + acústica","Suelos de microcemento","Mamparas de vidrio","Estanterías acero y roble","Luz de galería","Podcast y ciclorama"],
   mat:"Microcemento · acero pavonado · roble · vidrio"},
  {tag:"Muestrario · con cita previa", h:"Muestrario M5 · muestras a tamaño real en su casa", img:"img/case6_showroom.webp",
   facts:["<b>45+</b> acabados","<b>vamos a su casa</b>"],
   p1:"Nuestro muestrario, con cita previa: acabados de estuco veneciano en paneles a tamaño real —no muestras pequeñas—, más biblioteca de piedra y madera. Llevamos las muestras a su casa y planeamos su proyecto in situ.",
   p2:"Con cita previa: deje su solicitud y le llevamos las muestras a su casa.",
   scope:["45+ acabados en paneles a tamaño real","Biblioteca de piedra y madera","Consultas de materiales","Reuniones de proyecto"],
   mat:""}
 ],
 uk: [
  {tag:"Реновація · Brickell", h:"Квартира 2BR у Brickell", img:"img/case1_brickell.webp",
   facts:["<b>900</b> sq ft","<b>12</b> тижнів","бюджет <b>$210–240K</b>"],
   p1:"Повна реновація квартири на 30-му поверсі для родини, що переїхала з Нью-Йорка. Правила будинку дозволяли роботи лише в будні з 9 до 17 і вантажний ліфт за бронюванням — графік збудовано навколо цих обмежень: демонтаж і чорнові роботи стиснуті в перші три тижні, меблі та камінь виготовлені поза об'єктом.",
   p2:"Здано за 12 тижнів у межах підписаного кошторису. COI, погодження з condo board та всі інспекції — на нашій команді.",
   scope:["Повний демонтаж і перепланування","Відкрита кухня-вітальня","Нова електрика та сантехніка","Італійська кухня, кам'яний острів","Ванні в мікроцементі","Сценарії прихованого світла","Вбудовані системи зберігання"],
   mat:"Мікроцемент · дуб · кварцит · італійські меблі"},
  {tag:"Кухня · Edgewater", h:"Кухня в Edgewater", img:"img/case2_kitchen.webp",
   facts:["<b>340</b> sq ft","<b>8</b> тижнів","бюджет <b>$58–68K</b>"],
   p1:"Кухня та їдальня в кондо на березі затоки. Сантехніку й електрику перенесено за пермітом; несуча колона посеред зони обіграна Г-подібним кам'яним островом, який став центром простору.",
   p2:"Матові фасади, кварцові стільниці з фартухом на всю висоту, «гараж» для техніки та світлові сценарії для готування і гостей.",
   scope:["Перепланування за пермітом","Перенесення комунікацій","Меблі на замовлення","Кварцовий острів і фартух","Гараж для техніки","Світлові сценарії"],
   mat:"Матовий лак · кварц · димчастий дуб"},
  {tag:"Ванна · Sunny Isles", h:"Майстер-ванна в Sunny Isles", img:"img/case3_bath.webp",
   facts:["<b>190</b> sq ft","<b>6</b> тижнів","бюджет <b>$34–42K</b>"],
   p1:"Майстер-ванна як тихий spa: керамограніт book-match, walk-in душ з лінійним трапом, підвісна тумба та тепла підлога.",
   p2:"Гідроізоляція пройшла інспекцію з першого разу; стеля у вологостійкій венеційській штукатурці пов'язує ванну з рештою дому.",
   scope:["Керамограніт book-match","Walk-in душ, лінійний трап","Підвісна тумба","Тепла підлога","Стеля в венеційській штукатурці"],
   mat:"Керамограніт · нікель · венеційська штукатурка"},
  {tag:"Вілла · Coral Gables", h:"Вілла в Coral Gables", img:"img/case4_villa.webp",
   facts:["<b>2,580</b> sq ft","<b>16</b> тижнів","бюджет <b>$450–520K</b>"],
   p1:"Повна реновація вілли 1970-х: нове планування з майстер-сюїтом, ударостійкі вікна та двері за стандартом HVHZ, повна заміна інженерних систем.",
   p2:"Венеційська штукатурка в житлових зонах; надворі — літня кухня та ландшафтне світло. Перміти й інспекції Miami-Dade на всіх етапах.",
   scope:["Нове планування, майстер-сюїт","Ударостійкі вікна (HVHZ)","Повна заміна інженерії","Венеційська штукатурка","Літня кухня","Ландшафтне світло"],
   mat:"Мінеральна штукатурка · травертин · іпе · ударостійке скло"},
  {tag:"Fit-out · South Beach", h:"Лофт на South Beach", img:"img/case5_loft.webp",
   facts:["<b>1,030</b> sq ft","<b>10</b> тижнів","бюджет <b>$180–210K</b>"],
   p1:"Fit-out творчої студії: відкриті стелі з акустикою, підлоги з мікроцементу, скляні перегородки та стелажі зі сталі й дуба на замовлення.",
   p2:"Простір під продакшн контенту: галерейне світло, подкаст-куточок і циклорама. Здано готовим до першої зйомки.",
   scope:["Відкриті стелі + акустика","Мікроцементні підлоги","Скляні перегородки","Стелажі сталь/дуб","Галерейне світло","Подкаст і циклорама"],
   mat:"Мікроцемент · чорнена сталь · дуб · скло"},
  {tag:"Бібліотека зразків · за записом", h:"Бібліотека зразків M5 · повнорозмірні зразки у вас удома", img:"img/case6_showroom.webp",
   facts:["<b>45+</b> фактур","<b>приїздимо до вас</b>"],
   p1:"Наша бібліотека зразків, за записом: фактури венеційської штукатурки на повнорозмірних панелях — не маленькі зразки, — а також бібліотека каменю й дерева. Привозимо зразки до вас і плануємо проєкт на місці.",
   p2:"За записом — залиште заявку, і ми привеземо зразки до вас.",
   scope:["45+ фактур на повнорозмірних панелях","Бібліотека каменю й дерева","Консультації з матеріалів","Зустрічі по проєкту"],
   mat:""}
 ]
};
var CM_L = {en:{scope:"Scope of work",mat:"Materials",cta:"Get a quote for a similar project"},
            es:{scope:"Alcance del trabajo",mat:"Materiales",cta:"Pida presupuesto para un proyecto similar"},
            uk:{scope:"Обсяг робіт",mat:"Матеріали",cta:"Отримати кошторис схожого проєкту"},
            ru:{scope:"Объём работ",mat:"Материалы",cta:"Получить смету похожего проекта"}};
function curLang(){ var l=null; try{l=localStorage.getItem('m5lang')}catch(e){}; return CASES[l]?l:'en'; }
function openCase(n){
  var l=curLang(), c=CASES[l][n-1], t=CM_L[l];
  var el=document.getElementById('cmHero'); var ci=c.img; if(window.innerWidth<=680&&ci.indexOf('img/')===0)ci='img/m/'+ci.slice(4); el.style.backgroundImage="url('"+ci+"')";
  document.getElementById('cmTag').textContent=c.tag;
  document.getElementById('cmH').textContent=c.h;
  document.getElementById('cmFacts').innerHTML=c.facts.map(function(f){return '<span>'+f+'</span>'}).join('');
  document.getElementById('cmP1').textContent=c.p1;
  document.getElementById('cmP2').textContent=c.p2;
  document.getElementById('cmScopeH').textContent=t.scope;
  document.getElementById('cmScope').innerHTML=c.scope.map(function(x){return '<li>'+x+'</li>'}).join('');
  var mh=document.getElementById('cmMatH'), mp=document.getElementById('cmMat');
  if(c.mat){mh.style.display='';mp.style.display='';mh.textContent=t.mat;mp.textContent=c.mat;}else{mh.style.display='none';mp.style.display='none';}
  document.getElementById('cmCta').textContent=t.cta;
  document.getElementById('cmOverlay').classList.add('on');
  document.getElementById('caseModal').classList.add('on');
  document.body.style.overflow='hidden';
  if(window.m5track)m5track('case_open',{case_id:n});
}
function closeCase(){
  document.getElementById('cmOverlay').classList.remove('on');
  document.getElementById('caseModal').classList.remove('on');
  document.body.style.overflow='';
}
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&document.getElementById('caseModal').classList.contains('on'))closeCase()});

document.querySelectorAll('a[href^="tel:"]').forEach(function(a){a.addEventListener('click',function(){if(window.m5track)m5track('phone_click')})});
document.querySelectorAll('a[href*="wa.me"]').forEach(function(a){a.addEventListener('click',function(){if(window.m5track)m5track('whatsapp_click')})});

/* ===== service modal (описание + заявка + WhatsApp) ===== */
var SM_WA='17864074441';
var SM_L={
  en:{err:"Your request has not been confirmed yet — please try again or message us on WhatsApp.",tag:"M5 service",formH:"Request this service",name:"Your name",phone:"Phone / WhatsApp",send:"Send request",wa:"WhatsApp us",waText:"Hi M5! I'm interested in: ",thanks:"Thank you! We'll reply within one business hour.",sig:"Signature"},
  es:{err:"Su solicitud aún no se ha confirmado — inténtelo de nuevo o escríbanos por WhatsApp.",tag:"Servicio M5",formH:"Solicitar este servicio",name:"Su nombre",phone:"Teléfono / WhatsApp",send:"Enviar solicitud",wa:"Escríbanos por WhatsApp",waText:"¡Hola M5! Me interesa: ",thanks:"¡Gracias! Le respondemos dentro de una hora laboral.",sig:"Destacado"},
  uk:{err:"Заявку ще не підтверджено — спробуйте ще раз або напишіть у WhatsApp.",tag:"Послуга M5",formH:"Замовити цю послугу",name:"Ваше ім'я",phone:"Телефон / WhatsApp",send:"Надіслати запит",wa:"Написати у WhatsApp",waText:"Вітаю, M5! Мене цікавить: ",thanks:"Дякуємо! Відповімо протягом робочої години.",sig:"Фірмове"},
  ru:{err:"Заявка пока не подтверждена — попробуйте ещё раз или напишите в WhatsApp.",tag:"Услуга M5",formH:"Заказать эту услугу",name:"Ваше имя",phone:"Телефон / WhatsApp",send:"Отправить заявку",wa:"Написать в WhatsApp",waText:"Здравствуйте, M5! Меня интересует: ",thanks:"Спасибо! Ответим в течение рабочего часа.",sig:"Фирменное"}
};
var SM_DESC={
  en:["A full design concept with photoreal 3D — you see the exact result, materials and furniture before anything is built.",
      "Demolition to décor — designed and coordinated by M5, built with licensed & insured Florida contractor partners under their own permit and contract. Fixed scope, weekly photo updates and no surprise costs.",
      "Venetian plaster, Marmorino, travertine and concrete finishes by our own masters — architectural surfaces you see and touch at home first — we bring full-size samples to you.",
      "Designed and coordinated by M5, built with licensed & insured Florida contractor partners under their own permit and contract — HVHZ impact standards and homes built to last.",
      "Independent on-site quality control at every stage — contractor oversight, inspections and punch-list, done right."],
  es:["Un concepto de diseño completo con 3D fotorrealista — ve el resultado exacto, materiales y mobiliario antes de construir nada.",
      "De la demolición al detalle — diseñado y coordinado por M5, construido con contratistas de Florida licenciados y asegurados bajo su propio permiso y contrato. Alcance cerrado, fotos semanales y sin costes sorpresa.",
      "Estuco veneciano, Marmorino, travertino y hormigón por nuestros propios maestros — superficies que ve y toca antes en su casa — llevamos muestras a tamaño real.",
      "Diseñado y coordinado por M5, construido con contratistas de Florida licenciados y asegurados bajo su propio permiso y contrato — normas de impacto HVHZ y casas hechas para durar.",
      "Control de calidad independiente en obra en cada etapa — supervisión de contratistas, inspecciones y punch-list, bien hecho."],
  uk:["Повна концепція дизайну з фотореалістичним 3D — ви бачите точний результат, матеріали й меблі ще до початку робіт.",
      "Від демонтажу до декору — спроектовано та скоординовано M5, будівництво — ліцензованими та застрахованими підрядниками Флориди за їхнім дозволом і контрактом. Фіксований обсяг, щотижневі фото й без несподіваних витрат.",
      "Венеційська штукатурка, Marmorino, травертин і бетон від наших майстрів — архітектурні поверхні, які ви бачите й торкаєтесь у себе вдома — привозимо повнорозмірні зразки.",
      "Спроектовано та скоординовано M5, будівництво — ліцензованими та застрахованими підрядниками Флориди за їхнім дозволом і контрактом — стандарти HVHZ і будинки, збудовані надовго.",
      "Незалежний контроль якості на об'єкті на кожному етапі — нагляд за підрядниками, інспекції та усунення недоліків."],
  ru:["Полная концепция дизайна с фотореалистичным 3D — вы видите точный результат, материалы и мебель до начала работ.",
      "От демонтажа до декора — проектирует и координирует M5, строят лицензированные и застрахованные подрядчики Флориды по своему пермиту и контракту. Фиксированный объём, еженедельные фото и без неожиданных расходов.",
      "Венецианская штукатурка, Marmorino, травертин и бетон руками наших мастеров — архитектурные поверхности, которые вы сначала увидите и потрогаете у себя дома — привозим полноразмерные образцы.",
      "Проектирует и координирует M5, строят лицензированные и застрахованные подрядчики Флориды по своему пермиту и контракту — стандарты HVHZ и дома, построенные надолго.",
      "Независимый контроль качества на объекте на каждом этапе — надзор за подрядчиками, инспекции и устранение недоделок."]
};
function smLang(){ var l=null; try{l=localStorage.getItem('m5lang')}catch(e){}; return SM_L[l]?l:'en'; }
function openService(n){
  var card=document.querySelectorAll('#services .svc')[n-1]; if(!card) return;
  var l=smLang(), t=SM_L[l], d=SM_DESC[l][n-1]||'';
  var h3=card.querySelector('h3'), h=h3?h3.textContent:'';
  var lis=[].map.call(card.querySelectorAll('ul li'),function(x){return x.textContent;});
  var pe=card.querySelector('.svc-price'), price=pe?pe.textContent:'';
  var ph=card.querySelector('.svc-photo'), bg=ph?getComputedStyle(ph).backgroundImage:'';
  document.getElementById('smHero').style.backgroundImage=bg;
  document.getElementById('smTag').textContent=card.classList.contains('sig')?t.sig:t.tag;
  document.getElementById('smH').textContent=h;
  document.getElementById('smDesc').textContent=d;
  document.getElementById('smList').innerHTML=lis.map(function(x){return '<li>'+x+'</li>';}).join('');
  document.getElementById('smPrice').textContent=price;
  document.getElementById('smFormH').textContent=t.formH;
  var nm=document.getElementById('smName'), phn=document.getElementById('smPhone');
  nm.placeholder=t.name; phn.placeholder=t.phone; nm.value=''; phn.value='';
  document.getElementById('smSend').textContent=t.send;
  var wa=document.getElementById('smWa'); wa.textContent=t.wa;
  wa.href='https://wa.me/'+SM_WA+'?text='+encodeURIComponent(t.waText+h);
  document.getElementById('svcOverlay').classList.add('on');
  document.getElementById('serviceModal').classList.add('on');
  document.body.style.overflow='hidden';
  if(window.m5track)m5track('service_open',{service_id:n});
}
function closeService(){
  document.getElementById('svcOverlay').classList.remove('on');
  document.getElementById('serviceModal').classList.remove('on');
  document.body.style.overflow='';
}
var SM_SID=null;
function smSubmit(e){
  e.preventDefault();
  var t=SM_L[smLang()], btn=document.getElementById('smSend'), err=document.getElementById('smErr');
  var payload={
    name:document.getElementById('smName').value.trim(),
    phone:document.getElementById('smPhone').value.trim(),
    service:document.getElementById('smH').textContent,
    lang:smLang(), page:'service-modal',
    _cc:'vlad@m5miami.com,vadim@m5miami.com',
    _subject:'Service request — m5miami.com', _template:'table', _captcha:'false', _honey:'',
    _autoresponse:(smLang()==='ru'?'Спасибо! Получили ваш запрос и ответим в течение рабочего часа. WhatsApp: https://wa.me/17864074441 — M5 Miami':smLang()==='es'?'¡Gracias! Recibimos su solicitud de servicio y responderemos dentro de una hora laboral. WhatsApp: https://wa.me/17864074441 — M5 Miami':smLang()==='uk'?'Дякуємо! Отримали ваш запит і відповімо протягом робочої години. WhatsApp: https://wa.me/17864074441 — M5 Miami':'Thank you! We received your service request and will reply within one business hour. WhatsApp: https://wa.me/17864074441 — M5 Miami')
  };
  btn.disabled=true; btn.style.opacity='.6'; if(err)err.style.display='none';
  SM_SID=SM_SID||m5uuid();
  /* сначала CRM: «спасибо» — только после lead_id (аудит F02) */
  m5lead({submission_id:SM_SID,intent:'service',name:payload.name,phone:payload.phone,service:payload.service,lang:payload.lang,form_source:'service-modal'}).then(function(r){
    btn.disabled=false; btn.style.opacity='';
    if(!r.ok){ if(err){err.textContent=t.err;err.style.display='block';} else alert(t.err); if(window.m5track)m5track('lead_submit_failed',{status:r.status,source:'service-modal'}); return; }
    SM_SID=null;
    payload.lead_id=r.lead_id;
    fetch('https://formsubmit.co/ajax/fa2b356d28577b1742e22a611a7e847a',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(payload)}).catch(function(){});
    if(window.m5hook)m5hook({type:'service',name:payload.name,phone:payload.phone,service:payload.service,lang:payload.lang,source:'service-modal',lead_id:r.lead_id});
    if(window.m5track&&r.created)m5track('service_lead',{service:payload.service,lead_id:r.lead_id});
    alert(t.thanks); closeService();
  });
  return false;
}
document.querySelectorAll('#services .svc').forEach(function(card,i){
  if(i>=5) return;
  card.style.cursor='pointer'; card.setAttribute('role','button'); card.setAttribute('tabindex','0');
  card.addEventListener('click',function(){ openService(i+1); });
  card.addEventListener('keydown',function(e){ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); openService(i+1); } });
});
document.addEventListener('keydown',function(e){ if(e.key==='Escape'&&document.getElementById('serviceModal').classList.contains('on')) closeService(); });

/* ================= QUIZ · price range ================= */
var QZICON={
 home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 9.8V20h13V9.8"/><path d="M10 20v-5.5h4V20"/></svg>',
 design:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16"/><path d="M6.5 16.5 15.8 7.2a1.9 1.9 0 0 1 2.7 0l.3.3a1.9 1.9 0 0 1 0 2.7l-9.3 9.3-4.2 1.2 1.2-4.2Z"/></svg>',
 plaster:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="4" width="13" height="5" rx="1.2"/><path d="M16.5 6.5h3a1 1 0 0 1 1 1V10a1 1 0 0 1-1 1h-7.5a1 1 0 0 0-1 1v2"/><rect x="9.75" y="14" width="2.5" height="6" rx=".8"/></svg>',
 build:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21h16"/><rect x="6" y="11" width="5" height="10"/><rect x="13" y="14" width="5" height="7"/><path d="M8.5 11V5.5l9-1.5V7"/></svg>'
};
var QZ_EP='https://formsubmit.co/ajax/fa2b356d28577b1742e22a611a7e847a';
var QZL={
 en:{err:'Your request has not been confirmed yet — please try again or message us on WhatsApp.',types:[['home','Full renovation','apartment or house, full scope',145],['design','Design + renovation','concept, 3D and coordination',151],['plaster','Venetian plaster','walls & feature surfaces',18],['build','New home / villa','ground-up, with licensed contractor partners',390]],
  q1:'What are we pricing?',q2:'Approximate area?',q2p:'For plaster — approx. wall area',sqft:'SQ FT',
  q3:'Finish level?',levels:[['Standard','quality materials, clean design',1],['Premium','custom joinery, higher-end finishes',1.35],['Luxury','signature materials, full custom',1.7]],
  q4:'When do you want to start?',times:['As soon as possible','In 1–3 months','In 3–6 months','Just exploring'],
  q5:'Where do we send your price range?',name:'Your name',phone:'Phone / WhatsApp',email:'Email (optional)',
  see:'See my price range →',back:'← Back',note:'Your range shows on the next screen.',
  resT:'Your price range',resSub:'Itemized estimate 48 hours after our visit. The visit is free: we come to you, measure and confirm the numbers.',
  resBook:'Book my free site visit',resWa:'Discuss in WhatsApp',
  auto:'Thanks for checking your price range with M5! Your range is below. Next step: a free site visit. We measure, and you get an itemized estimate 48 hours after our visit. Reply to this email or WhatsApp us: https://wa.me/17864074441 — M5 Interior Design Studio, Miami'},
 es:{err:'Su solicitud aún no se ha confirmado — inténtelo de nuevo o escríbanos por WhatsApp.',types:[['home','Reforma completa','apartamento o casa, alcance completo',145],['design','Diseño + reforma','concepto, 3D y coordinación',151],['plaster','Estuco veneciano','paredes y superficies destacadas',18],['build','Casa nueva / villa','desde cero, con contratistas licenciados',390]],
  q1:'¿Qué vamos a presupuestar?',q2:'¿Área aproximada?',q2p:'Para estuco — área aprox. de paredes',sqft:'SQ FT',
  q3:'¿Nivel de acabados?',levels:[['Estándar','materiales de calidad, diseño limpio',1],['Premium','carpintería a medida, mejores acabados',1.35],['Lujo','materiales exclusivos, todo a medida',1.7]],
  q4:'¿Cuándo quiere empezar?',times:['Lo antes posible','En 1–3 meses','En 3–6 meses','Solo explorando'],
  q5:'¿Dónde enviamos su rango de precios?',name:'Su nombre',phone:'Teléfono / WhatsApp',email:'Email (opcional)',
  see:'Ver mi rango de precios →',back:'← Atrás',note:'Su rango aparece en la siguiente pantalla.',
  resT:'Su rango de precios',resSub:'Presupuesto detallado 48 horas después de nuestra visita. La visita es gratuita: vamos, medimos y confirmamos los números.',
  resBook:'Reservar visita gratuita',resWa:'Hablar por WhatsApp',
  auto:'¡Gracias por consultar su rango de precios con M5! Su rango está abajo. Siguiente paso: una visita gratuita a domicilio. Medimos y recibe un presupuesto detallado 48 horas después de nuestra visita. Responda a este correo o escríbanos por WhatsApp: https://wa.me/17864074441 — M5 Interior Design Studio, Miami'},
 uk:{err:'Заявку ще не підтверджено — спробуйте ще раз або напишіть у WhatsApp.',types:[['home','Повний ремонт','квартира чи будинок, повний обсяг',145],['design','Дизайн + ремонт','концепція, 3D і координація',151],['plaster','Венеційська штукатурка','стіни та акцентні поверхні',18],['build','Новий будинок / вілла','з нуля, з ліцензованими підрядниками',390]],
  q1:'Що рахуємо?',q2:'Приблизна площа?',q2p:'Для штукатурки — приблизна площа стін',sqft:'SQ FT',
  q3:'Рівень оздоблення?',levels:[['Стандарт','якісні матеріали, чистий дизайн',1],['Преміум','меблі на замовлення, кращі матеріали',1.35],['Люкс','ексклюзивні матеріали, повний кастом',1.7]],
  q4:'Коли плануєте почати?',times:['Якнайшвидше','Через 1–3 місяці','Через 3–6 місяців','Поки що придивляюсь'],
  q5:'Куди надіслати вилку цін?',name:"Ваше ім'я",phone:'Телефон / WhatsApp',email:'Email (необовʼязково)',
  see:'Показати вилку цін →',back:'← Назад',note:'Вилка зʼявиться на наступному екрані.',
  resT:'Ваша вилка цін',resSub:'Деталізований кошторис — за 48 годин після нашого візиту. Візит безкоштовний: приїдемо, заміряємо й підтвердимо цифри.',
  resBook:'Записатись на безкоштовний замір',resWa:'Обговорити у WhatsApp',
  auto:'Дякуємо, що дізналися вилку цін у M5! Ваша вилка нижче. Наступний крок — безкоштовний виїзд: ми заміряємо, і ви отримаєте деталізований кошторис за 48 годин після нашого візиту. Відповідайте на цей лист або пишіть у WhatsApp: https://wa.me/17864074441 — M5 Interior Design Studio, Miami'},
 ru:{err:'Заявка пока не подтверждена — попробуйте ещё раз или напишите в WhatsApp.',types:[['home','Полный ремонт','квартира или дом, полный объём',145],['design','Дизайн + ремонт','концепция, 3D и координация',151],['plaster','Венецианская штукатурка','стены и акцентные поверхности',18],['build','Новый дом / вилла','с нуля, с лицензированными подрядчиками',390]],
  q1:'Что считаем?',q2:'Примерная площадь?',q2p:'Для штукатурки — примерная площадь стен',sqft:'SQ FT',
  q3:'Уровень отделки?',levels:[['Стандарт','качественные материалы, чистый дизайн',1],['Премиум','мебель на заказ, отделка выше классом',1.35],['Люкс','эксклюзивные материалы, полный кастом',1.7]],
  q4:'Когда хотите начать?',times:['Как можно скорее','Через 1–3 месяца','Через 3–6 месяцев','Пока просто смотрю'],
  q5:'Куда отправить вилку цен?',name:'Ваше имя',phone:'Телефон / WhatsApp',email:'Email (по желанию)',
  see:'Показать вилку цен →',back:'← Назад',note:'Вилка появится на следующем экране.',
  resT:'Ваша вилка цен',resSub:'Детальная смета — через 48 часов после нашего визита. Выезд бесплатный: приедем, замерим и подтвердим цифры.',
  resBook:'Записаться на бесплатный замер',resWa:'Обсудить в WhatsApp',
  auto:'Спасибо, что узнали вилку цен в M5! Ваша вилка ниже. Следующий шаг — бесплатный выезд: мы замерим, и вы получите детальную смету через 48 часов после нашего визита. Ответьте на это письмо или напишите в WhatsApp: https://wa.me/17864074441 — M5 Interior Design Studio, Miami'}
};
function qzLang(){var l=null;try{l=localStorage.getItem('m5lang')}catch(e){};return QZL[l]?l:'en';}
var qz={step:1,type:null,sqft:900,level:null,time:null,src:''};
function openQuiz(src){qz={step:1,type:null,sqft:900,level:null,time:null,src:src||''};
  document.getElementById('qzOverlay').classList.add('on');document.getElementById('qzModal').classList.add('on');
  document.body.style.overflow='hidden';qzRender();
  if(window.m5track)m5track('quiz_open',{source:src||''});return false;}
function closeQuiz(){document.getElementById('qzOverlay').classList.remove('on');document.getElementById('qzModal').classList.remove('on');document.body.style.overflow='';}
function qzCalc(){var t=QZL[qzLang()],rate=qz.type[3],mult=qz.level[2];
  var base=rate*qz.sqft*mult, lo=Math.round(base*0.9/1000)*1000, hi=Math.round(base*1.15/1000)*1000;
  if(lo<1000)lo=Math.round(base*0.9/100)*100; if(hi<1000)hi=Math.round(base*1.15/100)*100;
  if(rate===18){ lo=Math.max(lo,10000); hi=Math.max(hi,13000); } // венецианская штукатурка: минимальный проект $10K
  return [lo,hi];}
function qzFmt(n){return '$'+n.toLocaleString('en-US');}
function qzRender(){var t=QZL[qzLang()],b=document.getElementById('qzBody'),h='';
  document.getElementById('qzFill').style.width=(qz.step*16.6)+'%';
  if(qz.step===1){h='<div class="qz-q">'+t.q1+'</div><div class="qz-opts">'+t.types.map(function(x,i){
    return '<button class="qz-opt" onclick="qz.type=QZL[qzLang()].types['+i+'];qz.step=2;qzRender()"><span class="ic">'+(QZICON[x[0]]||x[0])+'</span><span>'+x[1]+'<small>'+x[2]+'</small></span></button>';}).join('')+'</div>';}
  else if(qz.step===2){h='<div class="qz-q">'+t.q2+'</div>'+(qz.type&&qz.type[3]===18?'<div class="qz-note" style="margin-bottom:10px">'+t.q2p+'</div>':'')+
    '<div class="qz-sqft"><span id="qzSq">'+qz.sqft.toLocaleString()+'</span> <i>'+t.sqft+'</i></div>'+
    '<div class="qz-slider"><input type="range" class="qzr" min="200" max="6000" step="50" value="'+qz.sqft+'" oninput="qz.sqft=+this.value;document.getElementById(\'qzSq\').textContent=qz.sqft.toLocaleString()"></div>'+
    '<div class="qz-nav"><button class="qz-back" onclick="qz.step=1;qzRender()">'+t.back+'</button><a class="btn btn-ink" href="#" onclick="qz.step=3;qzRender();return false">→</a></div>';}
  else if(qz.step===3){h='<div class="qz-q">'+t.q3+'</div><div class="qz-opts">'+t.levels.map(function(x,i){
    return '<button class="qz-opt" onclick="qz.level=QZL[qzLang()].levels['+i+'];qz.step=4;qzRender()"><span>'+x[0]+'<small>'+x[1]+'</small></span></button>';}).join('')+'</div>'+
    '<div class="qz-nav"><button class="qz-back" onclick="qz.step=2;qzRender()">'+t.back+'</button></div>';}
  else if(qz.step===4){h='<div class="qz-q">'+t.q4+'</div><div class="qz-opts">'+t.times.map(function(x,i){
    return '<button class="qz-opt" onclick="qz.time=QZL[qzLang()].times['+i+'];qz.step=5;qzRender()"><span>'+x+'</span></button>';}).join('')+'</div>'+
    '<div class="qz-nav"><button class="qz-back" onclick="qz.step=3;qzRender()">'+t.back+'</button></div>';}
  else if(qz.step===5){h='<div class="qz-q">'+t.q5+'</div><form class="qz-form" onsubmit="return qzSubmit(event)">'+'<div id="qzErr" style="display:none;font-size:13px;color:#b3261e"></div>'+
    '<input type="text" id="qzName" placeholder="'+t.name+'" required>'+
    '<input type="tel" id="qzPhone" placeholder="'+t.phone+'" required>'+
    '<input type="email" id="qzEmail" placeholder="'+t.email+'">'+
    '<div class="qz-nav"><button type="button" class="qz-back" onclick="qz.step=4;qzRender()">'+t.back+'</button>'+
    '<button class="btn btn-ink" type="submit" id="qzGo">'+t.see+'</button></div>'+
    '<div class="qz-note">'+t.note+'</div></form>';}
  else if(qz.step===6){var r=qzCalc();
    h='<div class="qz-result"><div class="label2">'+t.resT+'</div>'+
    '<div class="qz-price">'+qzFmt(r[0])+' – '+qzFmt(r[1])+'</div>'+
    '<div class="qz-sub">'+t.resSub+'</div>'+
    '<div class="qz-cta"><a class="btn btn-ink" target="_blank" rel="noopener" href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3DpeDHSLKXlPG81Q2u2y4Rpirxr2uix3SFKnOh4h7EQvW0V8PwK5oIGP_tlVksozw2PXdw7uUo" onclick="if(window.m5track)m5track(\'booking_click\')">'+t.resBook+'</a>'+
    '<a class="btn btn-wa" target="_blank" rel="noopener" href="https://wa.me/17864074441?text='+encodeURIComponent('Hi M5! My price range: '+qz.type[1]+', '+qz.sqft+' sq ft, '+qz.level[0]+' → '+qzFmt(r[0])+'–'+qzFmt(r[1])+'. Let\'s talk!')+'">'+t.resWa+'</a></div>'+
    '<div style="margin-top:14px"><a href="/client/?p=brickell-demo" target="_blank" rel="noopener" style="font-size:13px;color:inherit;opacity:.8;text-decoration:underline;text-underline-offset:3px" onclick="if(window.m5track)m5track(\'demo_hub_click\',{source:\'quiz\'})">See how you\'ll track your renovation — live demo →</a></div></div>';}
  b.innerHTML=h;}
var QZ_SID=null;
function qzSubmit(e){e.preventDefault();var t=QZL[qzLang()],r=qzCalc();
  var go=document.getElementById('qzGo');go.disabled=true;go.style.opacity='.6';
  var email=document.getElementById('qzEmail').value.trim();
  var errEl=document.getElementById('qzErr');if(errEl)errEl.style.display='none';
  var payload={name:document.getElementById('qzName').value.trim(),phone:document.getElementById('qzPhone').value.trim(),
    project:qz.type[1],area_sqft:qz.sqft,finish_level:qz.level[0],timeline:qz.time,
    estimate:qzFmt(r[0])+' – '+qzFmt(r[1]),source:'quiz:'+qz.src,lang:qzLang(),
    _cc:'vlad@m5miami.com,vadim@m5miami.com',
    _subject:'🔥 QUIZ LEAD '+qzFmt(r[0])+'+ — m5miami.com',_template:'table',_captcha:'false',_honey:''};
  if(email){payload.email=email;payload._autoresponse=t.auto+' | '+t.resT+': '+payload.estimate;}
  QZ_SID=QZ_SID||m5uuid();
  m5lead({submission_id:QZ_SID,intent:'quiz',name:payload.name,phone:payload.phone,email:email||'',service:qz.type[1],area_sqft:qz.sqft,level:qz.level[0],quiz_low:r[0],quiz_high:r[1],details:qz.sqft+' sqft, '+qz.level[0]+', '+qz.time+' → '+payload.estimate,lang:qzLang(),form_source:'quiz:'+qz.src}).then(function(res){
    go.disabled=false;go.style.opacity='';
    if(!res.ok){ if(errEl){errEl.textContent=t.err;errEl.style.display='block';} if(window.m5track)m5track('lead_submit_failed',{status:res.status,source:'quiz'}); return; }
    QZ_SID=null;
    payload.lead_id=res.lead_id;
    fetch(QZ_EP,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(payload)}).catch(function(){});
    if(window.m5hook)m5hook({type:'quiz',name:payload.name,phone:payload.phone,email:payload.email||'',service:payload.project,details:payload.area_sqft+' sqft, '+payload.finish_level+', '+payload.timeline+' → '+payload.estimate,lang:payload.lang,source:payload.source,lead_id:res.lead_id});
    if(window.m5track&&res.created)m5track('quiz_lead',{value_low:r[0],project:qz.type[1],lead_id:res.lead_id});
    qz.step=6;qzRender();});
  return false;}

/* ================= EXIT INTENT ================= */
function xiSeen(){try{return sessionStorage.getItem('m5_xi')==='1';}catch(e){return false;}}
function xiMark(){try{sessionStorage.setItem('m5_xi','1');}catch(e){}}
function openXi(){if(xiSeen())return;if(document.getElementById('qzModal').classList.contains('on'))return;
  document.getElementById('xiOverlay').classList.add('on');document.getElementById('xiModal').classList.add('on');xiMark();
  if(window.m5track)m5track('exit_intent_shown');}
function closeXi(){document.getElementById('xiOverlay').classList.remove('on');document.getElementById('xiModal').classList.remove('on');}
// триггер (SPEC M1-T8, 21.10): только экраны от 1024 px, после 60 % глубины прокрутки, один раз за сессию (xiSeen)
if (window.matchMedia('(min-width:1024px)').matches) {
  window.addEventListener('scroll', function onXiScroll() {
    var depth = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
    if (depth > 0.6) { window.removeEventListener('scroll', onXiScroll); openXi(); }
  }, { passive: true });
}
var XI_PDF='/guide/m5-miami-renovation-cost-guide-2026.pdf';
var XIL={en:{ok:'Your guide is downloading',dl:"We've also emailed a copy so it's always handy.",lk:'Download the PDF',auto:'Here is your 2026 Miami Renovation Cost Guide: https://m5miami.com/guide/m5-miami-renovation-cost-guide-2026.pdf . Real $/sq ft ranges, the condo rules nobody warns you about, and a planning checklist. Want these numbers applied to your own place? Book a free on-site consultation at https://m5miami.com/#contact or reply to this email with your building name. WhatsApp: https://wa.me/17864074441 . M5 Interior Design Studio, Miami'},
 es:{ok:'Su guía se está descargando',dl:'También le enviamos una copia por correo.',lk:'Descargar el PDF',auto:'Aquí está su Guía de Costos de Reforma en Miami 2026: https://m5miami.com/guide/m5-miami-renovation-cost-guide-2026.pdf . Rangos reales de $/sq ft, las reglas de los condos y un checklist. ¿Quiere aplicar estos números a su propio espacio? Reserve una consulta gratuita en https://m5miami.com/#contact o responda a este correo. WhatsApp: https://wa.me/17864074441 . M5 Interior Design Studio, Miami'},
 uk:{ok:'Ваш гайд завантажується',dl:'Ми також надіслали копію на пошту.',lk:'Завантажити PDF',auto:'Ваш гайд цін на ремонт у Маямі 2026: https://m5miami.com/guide/m5-miami-renovation-cost-guide-2026.pdf . Реальні вилки $/sq ft, правила кондо та чек-лист. Хочете ці цифри для вашого простору? Запишіться на безкоштовну консультацію: https://m5miami.com/#contact або відповідайте на цей лист. WhatsApp: https://wa.me/17864074441 . M5 Interior Design Studio, Miami'},
 ru:{ok:'Ваш гайд скачивается',dl:'Мы также отправили копию на почту.',lk:'Скачать PDF',auto:'Ваш гайд по ценам на ремонт в Майами 2026: https://m5miami.com/guide/m5-miami-renovation-cost-guide-2026.pdf . Реальные вилки $/sq ft, правила кондо, о которых никто не предупреждает, и чек-лист планирования. Хотите примерить эти цифры к вашему пространству? Запишитесь на бесплатную консультацию: https://m5miami.com/#contact или ответьте на это письмо. WhatsApp: https://wa.me/17864074441 . M5 Interior Design Studio, Miami'}};
function xiDownload(){try{var a=document.createElement('a');a.href=XI_PDF;a.setAttribute('download','M5-Miami-Renovation-Cost-Guide-2026.pdf');document.body.appendChild(a);a.click();a.remove();}catch(_){}}
function xiSubmit(e){e.preventDefault();var l=qzLang(),t=XIL[l]||XIL.en;
  var em=document.getElementById('xiEmail').value.trim();
  fetch(QZ_EP,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},
    body:JSON.stringify({email:em,lead_type:'cost-guide download',lang:l,_subject:'📗 Guide lead — m5miami.com',_template:'table',_captcha:'false',_honey:'',_autoresponse:t.auto})}).catch(function(){});
  if(window.m5lead)m5lead({intent:'guide',email:em,lang:l,form_source:'exit-popup',service:'guide'});
  if(window.m5hook)m5hook({type:'guide',email:em,lang:l,source:'exit-popup'});
  if(window.m5track)m5track('guide_lead');
  xiDownload();
  document.querySelector('#xiModal .xi-body').innerHTML='<h4 style="margin:14px 0 6px">'+t.ok+'</h4><p style="font-size:13px;color:#8a8272;margin-bottom:14px">'+t.dl+'</p><a href="'+XI_PDF+'" target="_blank" rel="noopener" download onclick="xiDownload();return false;" class="btn btn-ink" style="display:inline-flex;margin-top:2px">'+t.lk+' ↓</a>';
  setTimeout(closeXi,6000);
  return false;}

/* ===== LEAD MODAL: форма на месте клика ===== */
var LD_BUDGETS={
  general:{en:['$50–100K','$100–250K','$250–500K','$500K+'],es:['$50–100K','$100–250K','$250–500K','$500K+'],uk:['$50–100K','$100–250K','$250–500K','$500K+'],ru:['$50–100K','$100–250K','$250–500K','$500K+']},
  plaster:{en:['$10–25K','$25–50K','$50–100K','$100K+'],es:['$10–25K','$25–50K','$50–100K','$100K+'],uk:['$10–25K','$25–50K','$50–100K','$100K+'],ru:['$10–25K','$25–50K','$50–100K','$100K+']}
};
var LD_LBL={en:{budget:'Project budget',nsy:'Not sure yet'},es:{budget:'Presupuesto del proyecto',nsy:'Aún no lo sé'},uk:{budget:'Бюджет проєкту',nsy:'Ще не визначився'},ru:{budget:'Бюджет проекта',nsy:'Пока не определился'}};
function ldFillBudget(mode){
  var l=qzLang(),t=LD_LBL[l]||LD_LBL.en,sel=document.getElementById('ldBudget');sel.setAttribute('data-mode',mode);
  var opts=['<option value="">'+t.budget+'</option>'];
  (LD_BUDGETS[mode]||LD_BUDGETS.general)[l].forEach(function(v){opts.push('<option>'+v+'</option>');});
  opts.push('<option>'+t.nsy+'</option>');
  sel.innerHTML=opts.join('');
}
function openLead(src,mode){
  ldFillBudget(mode==='plaster'?'plaster':'general');
  document.getElementById('ldOverlay').classList.add('on');
  document.getElementById('ldModal').classList.add('on');
  document.body.style.overflow='hidden';
  if(window.m5track)m5track('lead_modal_open',{source:src||'',mode:mode||'general'});
  return false;}
function closeLead(){
  document.getElementById('ldOverlay').classList.remove('on');
  document.getElementById('ldModal').classList.remove('on');
  document.body.style.overflow='';}
var LD_SID=null;
var LD_ERR={en:'Your request has not been confirmed yet — please try again or message us on WhatsApp.',es:'Su solicitud aún no se ha confirmado — inténtelo de nuevo o escríbanos por WhatsApp.',uk:'Заявку ще не підтверджено — спробуйте ще раз або напишіть у WhatsApp.',ru:'Заявка пока не подтверждена — попробуйте ещё раз или напишите в WhatsApp.'};
function ldSubmit(e){e.preventDefault();
  var go=document.getElementById('ldGo');go.disabled=true;go.style.opacity='.6';
  var A={en:'Thank you for contacting M5! We received your request and will reply within one business hour (Mon–Sat). Faster? WhatsApp: https://wa.me/17864074441 — M5 Miami',
    es:'¡Gracias por contactar a M5! Responderemos dentro de una hora laboral (lun–sáb). ¿Más rápido? WhatsApp: https://wa.me/17864074441 — M5 Miami',
    uk:'Дякуємо за звернення до M5! Відповімо протягом робочої години (пн–сб). Швидше? WhatsApp: https://wa.me/17864074441 — M5 Miami',
    ru:'Спасибо за обращение в M5! Ответим в течение рабочего часа (пн–сб). Быстрее? WhatsApp: https://wa.me/17864074441 — M5 Miami'};
  var OK={en:'Sent! We will reply within one business hour.',es:'¡Enviado! Responderemos dentro de una hora laboral.',uk:'Надіслано! Відповімо протягом робочої години.',ru:'Отправлено! Ответим в течение рабочего часа.'};
  var l=qzLang(),ok=document.getElementById('ldOk');
  var name=document.getElementById('ldName').value.trim(),phone=document.getElementById('ldPhone').value.trim(),hood=document.getElementById('ldHood').value.trim(),budget=document.getElementById('ldBudget').value;
  var mode=(document.getElementById('ldBudget').getAttribute('data-mode')||'general');
  ok.style.display='none';ok.style.color='#1faa52';
  LD_SID=LD_SID||m5uuid();
  m5lead({submission_id:LD_SID,intent:'lead',name:name,phone:phone,details:(hood+' '+budget).trim(),lang:l,service:mode==='plaster'?'Venetian plaster':'renovation',form_source:'lead-modal'}).then(function(r){
    go.disabled=false;go.style.opacity='';
    if(!r.ok){ok.textContent=LD_ERR[l]||LD_ERR.en;ok.style.color='#b3261e';ok.style.display='block';if(window.m5track)m5track('lead_submit_failed',{status:r.status,source:'lead-modal'});return;}
    LD_SID=null;
    fetch(QZ_EP,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},
      body:JSON.stringify({name:name,phone:phone,neighborhood:hood,budget:budget,source:'lead-modal',lead_id:r.lead_id,lang:l,_cc:'vlad@m5miami.com,vadim@m5miami.com',_subject:'New lead — m5miami.com',_template:'table',_captcha:'false',_honey:'',_autoresponse:A[l]||A.en})}).catch(function(){});
    if(window.m5hook)m5hook({type:'lead',name:name,phone:phone,details:(hood+' '+budget).trim(),lang:l,source:'lead-modal',lead_id:r.lead_id});
    if(window.m5track&&r.created)m5track('lead_submit',{source:'modal',lead_id:r.lead_id});
    ok.textContent=OK[l]||OK.en;ok.style.display='block';
    setTimeout(closeLead,2200);});
  return false;}
/* перехват всех ссылок на #contact → модалка на месте (нижняя форма остаётся для скролящих) */
document.addEventListener('click',function(e){
  var a=e.target.closest('a[href="#contact"]');
  if(!a)return;
  e.preventDefault();
  // контекст «штукатурка»: клик в секции #plaster или из модалки штукатурки
  var mode = (a.closest('#plaster') || (document.getElementById('serviceModal')&&document.getElementById('serviceModal').classList.contains('on')&&/plaster|estuco|штукатур/i.test((document.getElementById('smH')||{}).textContent||''))) ? 'plaster' : 'general';
  if(typeof closeQuiz==='function')closeQuiz();
  if(typeof closeService==='function')closeService();
  openLead(a.textContent.trim().slice(0,30), mode);
});

/* автоответ главной формы — подставляем текст на языке пользователя */
(function(){var f=document.getElementById('leadForm');if(!f)return;
  var A={en:'Thank you for contacting M5! We received your request and will reply within one business hour (Mon–Sat). Faster? WhatsApp us: https://wa.me/17864074441 — M5 Interior Design Studio, Miami',
    es:'¡Gracias por contactar a M5! Recibimos su solicitud y responderemos dentro de una hora laboral (lun–sáb). ¿Más rápido? WhatsApp: https://wa.me/17864074441 — M5 Interior Design Studio, Miami',
    uk:'Дякуємо за звернення до M5! Ми отримали ваш запит і відповімо протягом робочої години (пн–сб). Швидше? WhatsApp: https://wa.me/17864074441 — M5 Interior Design Studio, Miami',
    ru:'Спасибо за обращение в M5! Мы получили вашу заявку и ответим в течение рабочего часа (пн–сб). Быстрее? WhatsApp: https://wa.me/17864074441 — M5 Interior Design Studio, Miami'};
  var i=document.createElement('input');i.type='hidden';i.name='_autoresponse';f.appendChild(i);
  f.addEventListener('submit',function(){i.value=A[qzLang()]||A.en;});})();

/* ===== lazy background loading (ads: page weight) ===== */
(function(){
  var els=[].slice.call(document.querySelectorAll('[data-bg]'));
  if(!els.length)return;
  function apply(el){ if(el.__bg)return; el.__bg=1; var bg=el.getAttribute('data-bg'); if(window.innerWidth<=680&&bg.indexOf('img/')===0)bg='img/m/'+bg.slice(4); el.style.backgroundImage="url('"+bg+"')"; el.style.backgroundPosition='center'; el.style.backgroundSize='cover'; }
  if(!('IntersectionObserver' in window)){ els.forEach(apply); return; }
  var io=new IntersectionObserver(function(entries){ entries.forEach(function(en){ if(en.isIntersecting){ apply(en.target); io.unobserve(en.target); } }); },{rootMargin:'400px'});
  els.forEach(function(el){ io.observe(el); });
})();

/* ===== мобильное меню (SPEC M1-T10) ===== */
(function(){
  var btn=document.querySelector('.menu-btn'), nav=document.getElementById('mnav');
  if(!btn||!nav) return;
  function set(open){
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    nav.hidden=!open;
    document.body.classList.toggle('menu-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  btn.addEventListener('click', function(){ set(nav.hidden); });
  nav.addEventListener('click', function(e){ if(e.target.closest('a')) set(false); });
  document.addEventListener('keydown', function(e){ if(e.key==='Escape' && !nav.hidden) set(false); });
  matchMedia('(min-width:901px)').addEventListener('change', function(m){ if(m.matches && !nav.hidden) set(false); });
})();
