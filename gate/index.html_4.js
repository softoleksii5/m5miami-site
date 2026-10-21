
  /* hero preload */
  (function(){var i=new Image();i.onload=function(){document.getElementById('heroImg').classList.add('loaded')};i.src=matchMedia('(max-width:680px)').matches?'img/m/hero-portrait.webp':'img/hero.webp'})();

  /* ===== i18n · EN / ES / UK =====
     Добавляешь текст на сайт → заводишь ключ здесь во всех трёх языках и вешаешь data-i18n="ключ"
     (или data-i18n-ph="ключ" для placeholder) на элемент. Всё остальное происходит само. */
  var I18N = {
    en: {
      "meta.title":"M5 — Interior Design Studio in Miami",
      "nav.services":"SERVICES","nav.portfolio":"PORTFOLIO","nav.plaster":"PLASTER","nav.about":"ABOUT","nav.faq":"FAQ","nav.quote":"BOOK A VISIT",
      "hero.badge":"LICENSED & INSURED PARTNERS · MIAMI&#8209;DADE PERMITS",
      "hero.h1":"We design homes in Miami and coordinate every step to handover.",
      "hero.sub":"Interior design · renovation design & coordination · Venetian plaster · fit-out. One team designs it, coordinates it and answers for it.",
      "hero.cta1":"Get a quote","hero.cta2":"View our projects",
      "hero.strip1":"INTERIOR DESIGN STUDIO","hero.strip2":"DESIGN STUDIO","hero.strip3":"ENGLISH · SPANISH · UKRAINIAN · RUSSIAN",
      "why.h":"Why designers specify our <b>Venetian plaster</b>","why.t1":"European school","why.b1":"Italian-grade finish on every wall","why.t2":"13 own materials","why.b2":"50+ finishes · any color · no supplier delays","why.t3":"Matte · pearl · metallic · mirror","why.b3":"One palette, every mood","why.t4":"Walls, ceilings, furniture, doors","why.b4":"One finish across the whole room","why.t5":"Straight onto drywall","why.b5":"No skim coat · a week of prep saved","why.t6":"Washable. Repairable. Warranty.","why.b6":"No callbacks","why.t7":"Free visit, sample & quote","why.b7":"Zero risk to start","why.t8":"Fast. Clean. Condo-ready.","why.b8":"Your schedule holds","stats.label":"Who we are",
      "stats.lead":"200+ villas and homes delivered worldwide. Now in Miami — the same team and the same system, with our own Venetian plaster studio.",
      "stats.u1":"yrs","stats.u2":"yr","stats.s1":"villas &amp; homes delivered worldwide","stats.s2":"sq ft of hand-finished walls","stats.s3":"own materials · 50+ finishes","stats.s4":"to an itemized estimate after our visit","stats.u4":"h","form.ok":"Thank you — we received your request and will reply within one business hour (9am–6pm ET).","form.err":"Your request has not been confirmed yet — please try again or message us on WhatsApp: +1 786 407 4441.","rev.client":"Client","svc1.price":"from $6 / sq ft","svc2.price":"from $145 / sq ft","svc3.price":"from $18 / sq ft · projects from $10K","svc4.price":"from $390 / sq ft","svc5.price":"from 4% of budget",
      "svc.label":"M5 Services","svc.h2":"What we do",
      "svc1.h3":"Interior Design & 3D","svc1.li1":"Concept, layouts & space planning","svc1.li2":"Photoreal 3D visualization","svc1.li3":"Materials, FF&E & documentation",
      "svc2.h3":"Renovation, Start to Handover","svc2.li1":"Demolition to décor — one coordinated plan","svc2.li2":"Fixed-scope pricing, no surprise costs","svc2.li3":"Weekly photo updates through handover",
      "svc.sig":"SIGNATURE","svc3.h3":"Venetian Plaster","svc3.li1":"Venetian plaster · microcement · marmorino","svc3.li2":"Own sample library — samples brought to you","svc3.li3":"Architectural surfaces, not finishes",
      "svc4.h3":"New Homes & Villas","svc4.li1":"Designed & coordinated by M5, built with licensed & insured FL contractor partners","svc4.li2":"Permits & HVHZ impact standards","svc4.li3":"Homes and villas as we grow",
      "svc5.h3":"Technical Supervision","svc5.li1":"On-site quality checks at every stage","svc5.li2":"Contractor & subcontractor oversight","svc5.li3":"Inspections & punch-list control",
      "svc.cta.label":"Not sure where to start?","svc.cta.btn":"Free consultation",
      "plaster.lb":"13 mineral materials in our sample library, with codes and shades:","plaster.lbbtn":"Download the M5 Lookbook 2026 (PDF, 2 MB)","plaster.label":"Our signature","plaster.h2":"Venetian plaster, done by our own masters","plaster.flag":"M5 IN-HOUSE MASTER",
      "plaster.h2b":"Architectural surfaces,<br>not just a finish.",
      "plaster.lead":"Venetian plaster, microcement and marmorino applied by our own trained team — not a random subcontractor. We keep a full sample library and bring the samples to you, so you see and touch the exact texture before we start.",
      "plaster.li1":"Venetian plaster · microcement · marmorino · travertine effects","plaster.li2":"Own sample library — full-size samples brought to your home","plaster.li3":"Feature walls, ceilings, wet areas & full interiors",
      "plaster.ctab":"Free on-site measurement & estimate","plaster.ctas":"We come to you, measure the space and prepare a detailed quote — at no cost.","plaster.ctabtn":"Book a free measurement","plaster.tex":"Real textures from our sample library",
      "proj.label":"Our work","proj.h2":"Villas, apartments &amp; Venetian plaster","proj.viewall":"View all work","w1.tag":"VILLA","w1.h4":"Contemporary villa","w1.m":"FACADE · INTERIORS · POOL","w2.tag":"VILLA INTERIOR","w2.h4":"Double-height living room","w2.m":"MARBLE STAIR · CUSTOM FURNITURE","w3.tag":"APARTMENT","w3.h4":"Oak kitchen &amp; dining","w3.m":"FULL RENOVATION","w4.tag":"APARTMENT","w4.h4":"Open-plan living","w4.m":"FULL RENOVATION","w5.tag":"VENETIAN PLASTER","w5.h4":"Black fireplace wall","w5.m":"MINERAL PLASTER · BY HAND","w6.tag":"MARMORINO","w6.h4":"Black marmorino powder room","w6.m":"BY HAND · OUR MASTERS",
      "qz.open":"See your price range","qz.title":"Your price range","qz.sub":"60 seconds · no obligation",
      "mb.call":"Call","mb.est":"Price range",
      "xi.h":"Wait — grab the 2026 Miami Renovation Cost Guide","xi.p":"Real price ranges per sq ft, condo pitfalls, and a planning checklist — free PDF to your inbox.","xi.email":"Your email","xi.btn":"Send me the guide","xi.note":"No spam — one useful PDF and occasional project insights.",
      "want.ba":"Want this for your home?","want.gal":"One team for all of it — see your numbers.","want.btn":"Get my estimate",
      "gal.label":"Our work · Interiors","gal.h2":"Interiors by M5","gal.sub":"Villas and apartments designed and delivered by our team.","gal.c1":"Living","gal.c2":"Bedroom","gal.c3":"Kitchen","gal.c4":"Bath","gal.c5":"Courtyard",
      "ba.label":"Transformations","ba.h2":"Before & after","ba.before":"BEFORE","ba.after":"AFTER","ba.hint":"Drag to compare","ba.c1":"Venetian plaster · feature wall","ba.c2":"Full apartment renovation",
      "case1.tag":"RENOVATION","case1.h4":"Brickell 2BR Residence","case1.m2":"12 WEEKS",
      "case2.tag":"KITCHEN","case2.h4":"Edgewater Kitchen","case2.m2":"8 WEEKS",
      "case3.tag":"BATHROOM","case3.h4":"Sunny Isles Master Bath","case3.m2":"6 WEEKS",
      "case4.tag":"FULL VILLA","case4.h4":"Coral Gables Villa","case4.m2":"16 WEEKS",
      "case5.tag":"FIT-OUT","case5.h4":"South Beach Loft","case5.m2":"10 WEEKS",
      "case6.tag":"SAMPLE LIBRARY","case6.h4":"M5 Sample Library","case6.m1":"WE COME TO YOU","case6.m2":"BY APPOINTMENT",
      "cta.h2":"Itemized estimate<br>48 hours after our visit.","cta.s1":"FREE ON-SITE CONSULTATION","cta.s2":"REPLY WITHIN ONE BUSINESS HOUR","cta.btn1":"Get a quote","cta.btn2":"WhatsApp us","cta.btn3":"Book a free site visit","cta.wa":"or message us on WhatsApp",
      "money.label":"Transparency","money.h2":"How we protect your money",
      "money.m1":"Itemized estimate before the contract","money.m2":"Payments by milestone, no large upfront","money.m3":"Change orders signed by you first","money.m4":"Lien releases from every subcontractor","money.m5":"Contract & partner insurance certificates on request","money.btn":"1-year written warranty on every project",
      "proc.label":"Our process","proc.h2":"Clear process. Straight timelines.",
      "proc1.name":"Consultation & needs","proc1.side":"≈ 1 week","proc1.desc":"We meet at your space, discuss goals and budget, and agree on what success looks like, before any contract.",
      "proc2.name":"Concept","proc2.side":"≈ 1–2 weeks","proc2.desc":"Several conceptual directions to choose the style, layout logic and budget frame of the project.",
      "proc3.name":"Design & 3D","proc3.side":"≈ 2–3 weeks","proc3.desc":"Layouts, photoreal 3D, materials and an itemized budget — you sign knowing exactly what you get.",
      "proc4.name":"Build & fit-out","proc4.side":"per estimate","proc4.desc":"Permitted construction by insured contractor partners, with weekly photo updates. Milestone payments — never a large upfront.",
      "proc5.name":"Handover & warranty","proc5.side":"final week","proc5.desc":"Final cleaning, walkthrough and a 1-year written warranty backed by the same team that delivered it.",
      "proc.foot":"FREE ON-SITE ESTIMATE · TYPICAL TIMELINE UP TO 3 MONTHS",
      "about.label":"About us","about.h2":"Why clients trust M5",
      "about.p":"Behind M5 is one in-house team — designers, project managers and site supervisors — not a chain of anonymous subcontractors. We stand behind every project, from first sketch to final handover.",
      "trust2.mono":"Licensed & insured partners","trust2.h4":"Built with licensed & insured Florida contractor partners","trust2.p":"Miami-Dade permits pulled by our contractor partners · HVHZ impact standards on every build. Certificates on request.",
      "trust3.mono":"Local","trust3.h4":"A team that speaks your language","trust3.p":"Condo-board experience: COI, elevator bookings, noise hours.",
      "about.plabel":"The people behind M5","about.ph2":"The team behind every project",
      "team1.b":"Vlad","team1.s":"Co-founder","team2.b":"Vadim","team2.s":"Director of production","team3.b":"Site Supervisor","team3.s":"Quality & timelines","team4.b":"Client Manager","team4.s":"Your point of contact",
      "rev.label":"Client stories","rev.h2":"What clients say",
      "rev1.p":"The estimate we signed stayed unchanged to the very end. Everything was done beautifully, down to the smallest detail.","rev1.s":"Brickell · 2BR renovation",
      "rev2.p":"One team from design to handover. Weekly photo updates and no surprise costs — exactly what they promised.","rev2.s":"Coral Gables · full villa",
      "rev3.p":"The Venetian plaster is stunning. They handled the condo board and permits so we didn't have to worry about anything.","rev3.s":"Edgewater · kitchen & living",
      "faq.label":"FAQ","faq.h2":"Questions we hear first",
      "faq1.q":"Do you subcontract the work?","faq1.a":"Design, project management and supervision are in-house. Construction is performed by licensed & insured Florida contractor partners under their own permit and contract. One team answers for the result.",
      "faq2.q":"Who handles permits and the condo board?","faq2.a":"We coordinate it. Miami-Dade permits are pulled by our licensed contractor partners; COI for your building, elevator bookings and noise-hour rules are part of our process — not your problem.",
      "faq3.q":"How much does a project cost?","faq3.a":"We price every project after visiting the space — no guessing over the phone. You get an itemized budget at current Miami market rates before you sign, and it changes only through a change order you approve first. Venetian plaster projects start from $10,000.",
      "faq4.q":"How long does it take?","faq4.a":"A typical renovation takes up to 3 months. You get the timeline upfront and weekly photo updates all the way through.",
      "faq5.q":"Is there a warranty?","faq5.a":"Yes: a 1-year written warranty. The same team that delivered your project fixes any issue after handover.",
      "lead.label":"Book a visit","lead.h2":"Tell us about your space.","lead.f1":"FREE CONSULTATION","lead.f2":"SITE VISIT INCLUDED","lead.f3":"REPLY WITHIN ONE BUSINESS HOUR","lead.book":"Or book a time — free site visit",
      "form.consent":"By submitting, you agree to be contacted about your project.","form.privacy":"Privacy Policy","form.name":"Your name","form.phone":"Phone / WhatsApp","form.hood":"Neighborhood / building","form.budget":"Project budget","form.b4":"Not sure yet","form.btn":"Request a free site visit",
      "foot.about":"Interior design studio — design, renovation coordination and Venetian plaster. One accountable team, from first sketch to final handover. Miami, Florida.",
      "foot.h1":"Main pages","foot.privacy":"Privacy Policy","foot.l1":"Home","foot.l2":"About us","foot.l3":"Portfolio","foot.l4":"Contact","foot.h2":"Services","foot.h3":"Contact us",
      "foot.copy":"© M5 · 2026 · Construction executed with licensed & insured Florida contractor partners"
    },
    es: {
      "meta.title":"M5 — Estudio de diseño interior en Miami",
      "nav.services":"SERVICIOS","nav.portfolio":"PROYECTOS","nav.plaster":"ESTUCO","nav.about":"NOSOTROS","nav.faq":"FAQ","nav.quote":"RESERVAR VISITA",
      "hero.badge":"SOCIOS LICENCIADOS Y ASEGURADOS · PERMISOS MIAMI&#8209;DADE",
      "hero.h1":"Diseñamos hogares en Miami y coordinamos cada paso hasta la entrega.",
      "hero.sub":"Diseño interior · diseño y coordinación de reformas · estuco veneciano · fit-out — diseñado y coordinado por un solo equipo responsable.",
      "hero.cta1":"Pedir presupuesto","hero.cta2":"Ver nuestros proyectos",
      "hero.strip1":"ESTUDIO DE DISEÑO INTERIOR","hero.strip2":"ESTUDIO DE DISEÑO","hero.strip3":"INGLÉS · ESPAÑOL · UCRANIANO · RUSO",
      "why.h":"Por qué los diseñadores eligen nuestro <b>estuco veneciano</b>","why.t1":"Escuela europea","why.b1":"Acabado de nivel italiano en cada pared","why.t2":"13 materiales propios","why.b2":"50+ acabados · cualquier color · sin esperas de proveedor","why.t3":"Mate · perla · metálico · espejo","why.b3":"Una paleta, cada ambiente","why.t4":"Paredes, techos, muebles, puertas","why.b4":"Un solo acabado en toda la estancia","why.t5":"Directo sobre drywall","why.b5":"Sin capa de nivelación · una semana de preparación ahorrada","why.t6":"Lavable. Reparable. Con garantía.","why.b6":"Sin llamadas de vuelta","why.t7":"Visita, muestra y presupuesto gratis","why.b7":"Cero riesgo para empezar","why.t8":"Rápido. Limpio. Listo para condominios.","why.b8":"Su calendario se cumple","stats.label":"Quiénes somos",
      "stats.lead":"Más de 200 villas y casas entregadas en todo el mundo. Ahora en Miami: el mismo equipo y el mismo sistema, con nuestro propio estudio de estuco veneciano.",
      "stats.u1":"años","stats.u2":"año","stats.s1":"villas y casas entregadas en el mundo","stats.s2":"sq ft de muros acabados a mano","stats.s3":"materiales propios · 50+ acabados","stats.s4":"hasta el presupuesto detallado tras la visita","stats.u4":"h","form.ok":"Gracias — recibimos su solicitud y responderemos dentro de una hora laboral (9am–6pm ET).","form.err":"Su solicitud aún no se ha confirmado — inténtelo de nuevo o escríbanos por WhatsApp: +1 786 407 4441.","rev.client":"Cliente","svc1.price":"desde $6 / sq ft","svc2.price":"desde $145 / sq ft","svc3.price":"desde $18 / sq ft · proyectos desde $10K","svc4.price":"desde $390 / sq ft","svc5.price":"desde 4% del presupuesto",
      "svc.label":"Servicios M5","svc.h2":"Qué hacemos",
      "svc1.h3":"Diseño interior y 3D","svc1.li1":"Concepto, distribución y planificación del espacio","svc1.li2":"Visualización 3D fotorrealista","svc1.li3":"Materiales, mobiliario y documentación",
      "svc2.h3":"Reforma, del inicio a la entrega","svc2.li1":"De la demolición al detalle — un solo plan coordinado","svc2.li2":"Precio cerrado, sin costes sorpresa","svc2.li3":"Fotos de avance cada semana hasta la entrega",
      "svc.sig":"DESTACADO","svc3.h3":"Estuco veneciano","svc3.li1":"Estuco veneciano · microcemento · marmorino","svc3.li2":"Muestrario propio — llevamos las muestras a su casa","svc3.li3":"Superficies arquitectónicas, no simples acabados",
      "svc4.h3":"Casas nuevas y villas","svc4.li1":"Diseñado y coordinado por M5, construido con contratistas de Florida licenciados y asegurados","svc4.li2":"Permisos y normas de impacto HVHZ","svc4.li3":"Casas y villas a medida que crecemos",
      "svc5.h3":"Supervisión técnica","svc5.li1":"Control de calidad en obra en cada etapa","svc5.li2":"Supervisión de contratistas y subcontratistas","svc5.li3":"Inspecciones y control de punch-list",
      "svc.cta.label":"¿No sabe por dónde empezar?","svc.cta.btn":"Consulta gratuita",
      "plaster.lb":"13 materiales minerales en nuestra biblioteca de muestras, con códigos y tonos:","plaster.lbbtn":"Descargar el M5 Lookbook 2026 (PDF, 2 MB)","plaster.label":"Nuestra especialidad","plaster.h2":"Estuco veneciano, aplicado por nuestros propios maestros","plaster.flag":"MAESTRO PROPIO M5",
      "plaster.h2b":"Superficies arquitectónicas,<br>no un simple acabado.",
      "plaster.lead":"Estuco veneciano, microcemento y marmorino aplicados por nuestro propio equipo formado — no un subcontratista cualquiera. Mantenemos un muestrario completo y llevamos las muestras a su casa, para que vea y toque la textura exacta antes de empezar.",
      "plaster.li1":"Estuco veneciano · microcemento · marmorino · efecto travertino","plaster.li2":"Muestrario propio — muestras a tamaño real en su casa","plaster.li3":"Paredes destacadas, techos, zonas húmedas e interiores completos",
      "plaster.ctab":"Medición y presupuesto gratis a domicilio","plaster.ctas":"Vamos a su espacio, tomamos medidas y preparamos un presupuesto detallado — sin coste.","plaster.ctabtn":"Reservar medición gratuita","plaster.tex":"Texturas reales de nuestra biblioteca de muestras",
      "proj.label":"Nuestro trabajo","proj.h2":"Villas, apartamentos y estuco veneciano","proj.viewall":"Ver todos los proyectos","w1.tag":"VILLA","w1.h4":"Villa contemporánea","w1.m":"FACHADA · INTERIORES · PISCINA","w2.tag":"INTERIOR DE VILLA","w2.h4":"Salón a doble altura","w2.m":"ESCALERA DE MÁRMOL · MOBILIARIO A MEDIDA","w3.tag":"APARTAMENTO","w3.h4":"Cocina y comedor de roble","w3.m":"REFORMA INTEGRAL","w4.tag":"APARTAMENTO","w4.h4":"Salón de planta abierta","w4.m":"REFORMA INTEGRAL","w5.tag":"ESTUCO VENECIANO","w5.h4":"Chimenea negra","w5.m":"ESTUCO MINERAL · A MANO","w6.tag":"MARMORINO","w6.h4":"Aseo en marmorino negro","w6.m":"A MANO · NUESTROS MAESTROS",
      "qz.open":"Ver su rango de precios","qz.title":"Su rango de precios","qz.sub":"60 segundos · sin compromiso",
      "mb.call":"Llamar","mb.est":"Precios",
      "xi.h":"Espere — llévese la Guía de Costos de Reforma Miami 2026","xi.p":"Rangos reales de precios por sq ft, errores comunes en condos y checklist — PDF gratis a su correo.","xi.email":"Su email","xi.btn":"Enviarme la guía","xi.note":"Sin spam — un PDF útil y consejos ocasionales.",
      "want.ba":"¿Lo quiere para su casa?","want.gal":"Un solo equipo para todo — vea sus números.","want.btn":"Mi estimación",
      "gal.label":"Nuestro trabajo · Interiores","gal.h2":"Interiores de M5","gal.sub":"Villas y apartamentos diseñados y entregados por nuestro equipo.","gal.c1":"Salón","gal.c2":"Dormitorio","gal.c3":"Cocina","gal.c4":"Baño","gal.c5":"Patio",
      "ba.label":"Transformaciones","ba.h2":"Antes y después","ba.before":"ANTES","ba.after":"DESPUÉS","ba.hint":"Arrastra para comparar","ba.c1":"Estuco veneciano · pared destacada","ba.c2":"Reforma integral de apartamento",
      "case1.tag":"REFORMA","case1.h4":"Residencia de 2 dorm. en Brickell","case1.m2":"12 SEMANAS",
      "case2.tag":"COCINA","case2.h4":"Cocina en Edgewater","case2.m2":"8 SEMANAS",
      "case3.tag":"BAÑO","case3.h4":"Baño principal en Sunny Isles","case3.m2":"6 SEMANAS",
      "case4.tag":"VILLA COMPLETA","case4.h4":"Villa en Coral Gables","case4.m2":"16 SEMANAS",
      "case5.tag":"FIT-OUT","case5.h4":"Loft en South Beach","case5.m2":"10 SEMANAS",
      "case6.tag":"MUESTRARIO","case6.h4":"Muestrario M5","case6.m1":"VAMOS A SU CASA","case6.m2":"CON CITA PREVIA",
      "cta.h2":"Presupuesto detallado<br>48 horas después de nuestra visita.","cta.s1":"CONSULTA GRATUITA A DOMICILIO","cta.s2":"RESPUESTA EN UNA HORA LABORAL","cta.btn1":"Pedir presupuesto","cta.btn2":"Escríbanos por WhatsApp","cta.btn3":"Reservar visita gratuita a domicilio","cta.wa":"o escríbanos por WhatsApp",
      "money.label":"Transparencia","money.h2":"Cómo protegemos su dinero",
      "money.m1":"Presupuesto detallado antes del contrato","money.m2":"Pagos por hitos, sin grandes anticipos","money.m3":"Los cambios los firma usted primero","money.m4":"Renuncia de gravamen de cada subcontratista","money.m5":"Contrato y certificados de seguro de los contratistas a petición","money.btn":"Garantía escrita de 1 año en cada proyecto",
      "proc.label":"Nuestro proceso","proc.h2":"Proceso claro. Plazos directos.",
      "proc1.name":"Consulta y necesidades","proc1.side":"≈ 1 semana","proc1.desc":"Nos reunimos en su espacio, hablamos de objetivos y presupuesto, y acordamos qué es el éxito — antes de cualquier contrato.",
      "proc2.name":"Concepto","proc2.side":"≈ 1–2 semanas","proc2.desc":"Varias direcciones conceptuales para elegir el estilo, la lógica de distribución y el marco de presupuesto del proyecto.",
      "proc3.name":"Diseño y 3D","proc3.side":"≈ 2–3 semanas","proc3.desc":"Distribución, 3D fotorrealista, materiales y presupuesto detallado — firma sabiendo exactamente qué recibe.",
      "proc4.name":"Obra y fit-out","proc4.side":"según presupuesto","proc4.desc":"Construcción con permisos por contratistas asegurados, con fotos de avance cada semana. Pagos por hitos — nunca un gran anticipo.",
      "proc5.name":"Entrega y garantía","proc5.side":"última semana","proc5.desc":"Limpieza final, recorrido y una garantía escrita de 1 año respaldada por el mismo equipo que la entregó.",
      "proc.foot":"PRESUPUESTO GRATIS EN OBRA · PLAZO HABITUAL HASTA 3 MESES",
      "about.label":"Nosotros","about.h2":"Por qué los clientes confían en M5",
      "about.p":"Detrás de M5 hay un solo equipo propio — diseñadores, jefes de proyecto y supervisores de obra — no una cadena de subcontratistas anónimos. Respondemos por cada proyecto, del primer boceto a la entrega final.",
      "trust2.mono":"Socios licenciados y asegurados","trust2.h4":"Construido con contratistas asociados de Florida licenciados y asegurados","trust2.p":"Permisos de Miami-Dade gestionados por nuestros contratistas asociados · normas de impacto HVHZ en cada obra. Certificados a petición.",
      "trust3.mono":"Locales","trust3.h4":"Un equipo que habla su idioma","trust3.p":"Experiencia con juntas de condominio: COI, reservas de ascensor, horarios de ruido.",
      "about.plabel":"Las personas detrás de M5","about.ph2":"El equipo detrás de cada proyecto",
      "team1.b":"Vlad","team1.s":"Cofundador","team2.b":"Vadim","team2.s":"Director de producción","team3.b":"Supervisor de obra","team3.s":"Calidad y plazos","team4.b":"Gestor de cliente","team4.s":"Su punto de contacto",
      "rev.label":"Historias de clientes","rev.h2":"Lo que dicen los clientes",
      "rev1.p":"El presupuesto que firmamos se mantuvo sin cambios hasta el final. Todo quedó precioso, hasta el más mínimo detalle.","rev1.s":"Brickell · reforma de 2 dorm.",
      "rev2.p":"Un solo equipo del diseño a la entrega. Fotos de avance cada semana y sin costes sorpresa — justo lo que prometieron.","rev2.s":"Coral Gables · villa completa",
      "rev3.p":"El estuco veneciano es espectacular. Se encargaron de la junta del condominio y de los permisos para que no tuviéramos que preocuparnos por nada.","rev3.s":"Edgewater · cocina y salón",
      "faq.label":"FAQ","faq.h2":"Preguntas que nos hacen primero",
      "faq1.q":"¿Subcontratan el trabajo?","faq1.a":"El diseño, la gestión de proyecto y la supervisión son propios. La construcción la ejecutan contratistas de Florida licenciados y asegurados bajo su propio permiso y contrato — un solo equipo responsable del resultado.",
      "faq2.q":"¿Quién se encarga de los permisos y de la junta del condominio?","faq2.a":"Lo coordinamos nosotros. Los permisos de Miami-Dade los gestionan nuestros contratistas licenciados; el COI de su edificio, las reservas de ascensor y los horarios de ruido son parte de nuestro proceso — no su problema.",
      "faq3.q":"¿Cuánto cuesta un proyecto?","faq3.a":"Calculamos cada proyecto tras visitar el espacio — no damos cifras por teléfono. Recibe un presupuesto detallado a precios reales de mercado en Miami antes de firmar, y no cambia sin una orden de cambio que usted apruebe primero. Los proyectos de estuco veneciano parten de $10,000.",
      "faq4.q":"¿Cuánto tarda?","faq4.a":"Una reforma habitual tarda hasta 3 meses. Recibe el plazo por adelantado y fotos de avance cada semana durante todo el proceso.",
      "faq5.q":"¿Hay garantía?","faq5.a":"Sí — una garantía escrita de 1 año. Cualquier incidencia tras la entrega la resuelve el mismo equipo que la entregó.",
      "lead.label":"Reservar visita","lead.h2":"Cuéntenos sobre su espacio.","lead.f1":"CONSULTA GRATUITA","lead.f2":"VISITA A DOMICILIO INCLUIDA","lead.f3":"RESPUESTA EN UNA HORA LABORAL","lead.book":"O reserve una hora — visita gratis",
      "form.consent":"Al enviar, acepta que le contactemos sobre su proyecto.","form.privacy":"Política de privacidad","form.name":"Su nombre","form.phone":"Teléfono / WhatsApp","form.hood":"Zona / edificio","form.budget":"Presupuesto del proyecto","form.b4":"Aún no lo sé","form.btn":"Solicitar visita gratuita",
      "foot.about":"Estudio de diseño interior — diseño, coordinación de reformas y estuco veneciano. Un solo equipo responsable, del primer boceto a la entrega final. Miami, Florida.",
      "foot.h1":"Páginas principales","foot.privacy":"Política de privacidad","foot.l1":"Inicio","foot.l2":"Nosotros","foot.l3":"Proyectos","foot.l4":"Contacto","foot.h2":"Servicios","foot.h3":"Contáctenos",
      "foot.copy":"© M5 · 2026 · Obra ejecutada con contratistas de Florida licenciados y asegurados"
    },
    uk: {
      "meta.title":"M5 — студія дизайну інтер'єру в Маямі",
      "nav.services":"ПОСЛУГИ","nav.portfolio":"ПОРТФОЛІО","nav.plaster":"ШТУКАТУРКА","nav.about":"ПРО НАС","nav.faq":"FAQ","nav.quote":"ЗАПИСАТИСЯ",
      "hero.badge":"ЛІЦЕНЗОВАНІ ТА ЗАСТРАХОВАНІ ПАРТНЕРИ · ДОЗВОЛИ MIAMI&#8209;DADE",
      "hero.h1":"Проєктуємо оселі в Маямі й координуємо кожен крок до здачі.",
      "hero.sub":"Дизайн інтер'єру · проєкт і координація ремонту · венеційська штукатурка · fit-out — спроєктовано й скоординовано однією командою, що відповідає за результат.",
      "hero.cta1":"Отримати кошторис","hero.cta2":"Переглянути проєкти",
      "hero.strip1":"СТУДІЯ ІНТЕР’ЄРНОГО ДИЗАЙНУ","hero.strip2":"ДИЗАЙН-СТУДІЯ","hero.strip3":"АНГЛІЙСЬКА · ІСПАНСЬКА · УКРАЇНСЬКА · РОСІЙСЬКА",
      "why.h":"Чому дизайнери обирають нашу <b>венеційську штукатурку</b>","why.t1":"Європейська школа","why.b1":"Італійський рівень оздоблення на кожній стіні","why.t2":"13 власних матеріалів","why.b2":"50+ фактур · будь-який колір · без затримок постачальника","why.t3":"Матове · перламутр · метал · дзеркало","why.b3":"Одна палітра, будь-який настрій","why.t4":"Стіни, стелі, меблі, двері","why.b4":"Одне покриття на всю кімнату","why.t5":"Одразу на гіпсокартон","why.b5":"Без шпаклювання · тиждень підготовки заощаджено","why.t6":"Миється. Ремонтується. Гарантія.","why.b6":"Без повторних викликів","why.t7":"Безкоштовний виїзд, зразок і кошторис","why.b7":"Нуль ризику на старті","why.t8":"Швидко. Чисто. Підходить для кондо.","why.b8":"Ваш графік витримано","stats.label":"Хто ми",
      "stats.lead":"Понад 200 вілл і будинків, зданих по всьому світу. Тепер у Маямі — та сама команда й та сама система, із власною студією венеціанської штукатурки.",
      "stats.u1":"роки","stats.u2":"рік","stats.s1":"вілл і будинків по всьому світу","stats.s2":"sq ft стін, зроблених вручну","stats.s3":"власних матеріалів · 50+ фактур","stats.s4":"до детального кошторису після виїзду","stats.u4":"год","form.ok":"Дякуємо — ми отримали вашу заявку і відповімо протягом робочої години (9:00–18:00 ET).","form.err":"Заявку ще не підтверджено — спробуйте ще раз або напишіть у WhatsApp: +1 786 407 4441.","rev.client":"Клієнт","svc1.price":"від $6 / sq ft","svc2.price":"від $145 / sq ft","svc3.price":"від $18 / sq ft · проєкти від $10K","svc4.price":"від $390 / sq ft","svc5.price":"від 4% бюджету",
      "svc.label":"Послуги M5","svc.h2":"Що ми робимо",
      "svc1.h3":"Дизайн інтер'єру та 3D","svc1.li1":"Концепція, планування та зонування","svc1.li2":"Фотореалістична 3D-візуалізація","svc1.li3":"Матеріали, меблі, обладнання та документація",
      "svc2.h3":"Ремонт: від старту до здачі","svc2.li1":"Від демонтажу до декору — один скоординований план","svc2.li2":"Фіксована ціна без несподіваних витрат","svc2.li3":"Щотижневі фотозвіти аж до здачі",
      "svc.sig":"ФІРМОВЕ","svc3.h3":"Венеційська штукатурка","svc3.li1":"Венеційська штукатурка · мікроцемент · marmorino","svc3.li2":"Власна бібліотека зразків — привозимо зразки до вас","svc3.li3":"Архітектурні поверхні, а не просто оздоблення",
      "svc4.h3":"Нові будинки та вілли","svc4.li1":"Проєкт і координація M5, будують ліцензовані та застраховані підрядники Флориди","svc4.li2":"Дозволи та стандарти HVHZ","svc4.li3":"Будинки й вілли в міру зростання",
      "svc5.h3":"Технічний нагляд","svc5.li1":"Контроль якості на об'єкті на кожному етапі","svc5.li2":"Нагляд за підрядниками й субпідрядниками","svc5.li3":"Інспекції та контроль недоліків",
      "svc.cta.label":"Не знаєте, з чого почати?","svc.cta.btn":"Безкоштовна консультація",
      "plaster.lb":"13 мінеральних матеріалів у нашій бібліотеці зразків, з кодами та відтінками:","plaster.lbbtn":"Завантажити M5 Lookbook 2026 (PDF, 2 МБ)","plaster.label":"Наша фішка","plaster.h2":"Венеційська штукатурка від наших власних майстрів","plaster.flag":"ВЛАСНИЙ МАЙСТЕР M5",
      "plaster.h2b":"Архітектурні поверхні,<br>а не просто оздоблення.",
      "plaster.lead":"Венеційська штукатурка, мікроцемент і marmorino наносить наша власна навчена команда — а не випадковий субпідрядник. Ми маємо повну бібліотеку зразків і привозимо їх до вас, тож ви бачите й торкаєтеся точної текстури ще до старту.",
      "plaster.li1":"Венеційська штукатурка · мікроцемент · marmorino · ефект травертину","plaster.li2":"Власна бібліотека зразків — повнорозмірні зразки привозимо до вас","plaster.li3":"Акцентні стіни, стелі, вологі зони та інтер'єри повністю",
      "plaster.ctab":"Безкоштовний замір і кошторис на об'єкті","plaster.ctas":"Приїдемо до вас, зробимо заміри й підготуємо докладний кошторис — безкоштовно.","plaster.ctabtn":"Записатися на безкоштовний замір","plaster.tex":"Реальні фактури з нашої бібліотеки зразків",
      "proj.label":"Наші роботи","proj.h2":"Вілли, апартаменти й венеціанська штукатурка","proj.viewall":"Усі роботи","w1.tag":"ВІЛЛА","w1.h4":"Сучасна вілла","w1.m":"ФАСАД · ІНТЕР’ЄРИ · БАСЕЙН","w2.tag":"ІНТЕР’ЄР ВІЛЛИ","w2.h4":"Вітальня у два світла","w2.m":"МАРМУРОВІ СХОДИ · МЕБЛІ НА ЗАМОВЛЕННЯ","w3.tag":"АПАРТАМЕНТИ","w3.h4":"Дубова кухня-їдальня","w3.m":"ПОВНИЙ РЕМОНТ","w4.tag":"АПАРТАМЕНТИ","w4.h4":"Відкрита вітальня","w4.m":"ПОВНИЙ РЕМОНТ","w5.tag":"ВЕНЕЦІАНСЬКА ШТУКАТУРКА","w5.h4":"Чорна стіна з каміном","w5.m":"МІНЕРАЛЬНА ШТУКАТУРКА · ВРУЧНУ","w6.tag":"МАРМОРИНО","w6.h4":"Гостьовий санвузол у чорному марморино","w6.m":"ВРУЧНУ · НАШІ МАЙСТРИ",
      "qz.open":"Дізнатися вилку цін","qz.title":"Ваша вилка цін","qz.sub":"60 секунд · без зобовʼязань",
      "mb.call":"Дзвінок","mb.est":"Вилка цін",
      "xi.h":"Зачекайте — заберіть Гайд цін на ремонт у Маямі 2026","xi.p":"Реальні вилки цін за sq ft, підводні камені кондо та чек-лист — безкоштовний PDF на пошту.","xi.email":"Ваш email","xi.btn":"Надіслати гайд","xi.note":"Без спаму — один корисний PDF та рідкісні поради.",
      "want.ba":"Хочете так само у себе?","want.gal":"Одна команда на все — дізнайтесь свої цифри.","want.btn":"Мій розрахунок",
      "gal.label":"Наші роботи · Інтер’єри","gal.h2":"Інтер’єри M5","gal.sub":"Вілли та апартаменти, які спроєктувала й здала наша команда.","gal.c1":"Вітальня","gal.c2":"Спальня","gal.c3":"Кухня","gal.c4":"Ванна","gal.c5":"Патіо",
      "ba.label":"Трансформації","ba.h2":"До та після","ba.before":"ДО","ba.after":"ПІСЛЯ","ba.hint":"Тягніть для порівняння","ba.c1":"Венеційська штукатурка · акцентна стіна","ba.c2":"Повний ремонт квартири",
      "case1.tag":"РЕМОНТ","case1.h4":"Резиденція 2 спальні, Brickell","case1.m2":"12 ТИЖНІВ",
      "case2.tag":"КУХНЯ","case2.h4":"Кухня, Edgewater","case2.m2":"8 ТИЖНІВ",
      "case3.tag":"ВАННА","case3.h4":"Ванна кімната, Sunny Isles","case3.m2":"6 ТИЖНІВ",
      "case4.tag":"ВІЛЛА ПІД КЛЮЧ","case4.h4":"Вілла, Coral Gables","case4.m2":"16 ТИЖНІВ",
      "case5.tag":"FIT-OUT","case5.h4":"Лофт, South Beach","case5.m2":"10 ТИЖНІВ",
      "case6.tag":"БІБЛІОТЕКА ЗРАЗКІВ","case6.h4":"Бібліотека зразків M5","case6.m1":"ПРИЇЗДИМО ДО ВАС","case6.m2":"ЗА ЗАПИСОМ",
      "cta.h2":"Деталізований кошторис<br>за 48 годин після нашого візиту.","cta.s1":"БЕЗКОШТОВНА КОНСУЛЬТАЦІЯ НА ОБ'ЄКТІ","cta.s2":"ВІДПОВІДЬ ПРОТЯГОМ РОБОЧОЇ ГОДИНИ","cta.btn1":"Отримати кошторис","cta.btn2":"Напишіть у WhatsApp","cta.btn3":"Записатися на безкоштовний виїзд","cta.wa":"або напишіть нам у WhatsApp",
      "money.label":"Прозорість","money.h2":"Як ми захищаємо ваші гроші",
      "money.m1":"Деталізований кошторис до підписання договору","money.m2":"Оплата за етапами, без великих авансів","money.m3":"Зміни спершу підписуєте ви","money.m4":"Відмова від застави від кожного субпідрядника","money.m5":"Договір і сертифікати страхування підрядників на запит","money.btn":"Письмова гарантія 1 рік на кожен проєкт",
      "proc.label":"Наш процес","proc.h2":"Прозорий процес. Чіткі терміни.",
      "proc1.name":"Консультація та потреби","proc1.side":"≈ 1 тиждень","proc1.desc":"Зустрічаємось на вашому об'єкті, обговорюємо цілі й бюджет і узгоджуємо, яким має бути результат — ще до будь-якого договору.",
      "proc2.name":"Концепція","proc2.side":"≈ 1–2 тижні","proc2.desc":"Кілька концептуальних напрямів, щоб обрати стиль, логіку планування та бюджетні рамки проєкту.",
      "proc3.name":"Дизайн і 3D","proc3.side":"≈ 2–3 тижні","proc3.desc":"Планування, фотореалістичне 3D, матеріали й деталізований бюджет — ви підписуєте, точно знаючи, що отримаєте.",
      "proc4.name":"Будівництво та fit-out","proc4.side":"за кошторисом","proc4.desc":"Будівництво з дозволами застрахованими підрядниками та щотижневими фотозвітами. Оплата за етапами — ніколи великий аванс.",
      "proc5.name":"Здача та гарантія","proc5.side":"останній тиждень","proc5.desc":"Фінальне прибирання, огляд і письмова гарантія на 1 рік від тієї ж команди, що вела проєкт.",
      "proc.foot":"БЕЗКОШТОВНИЙ ЗАМІР І КОШТОРИС · ТЕРМІН ДО 3 МІСЯЦІВ",
      "about.label":"Про нас","about.h2":"Чому клієнти довіряють M5",
      "about.p":"За M5 стоїть одна власна команда — дизайнери, проєкт-менеджери та технагляд на об'єкті, а не ланцюг анонімних субпідрядників. Ми відповідаємо за кожен проєкт, від першого ескізу до фінальної здачі.",
      "trust2.mono":"Ліцензовані та застраховані партнери","trust2.h4":"Будують ліцензовані та застраховані підрядники-партнери Флориди","trust2.p":"Дозволи Miami-Dade отримують наші підрядники-партнери · стандарти HVHZ на кожному об'єкті. Сертифікати на запит.",
      "trust3.mono":"Локальні","trust3.h4":"Команда, що говорить вашою мовою","trust3.p":"Досвід із радами кондомініумів: COI, бронювання ліфта, години тиші.",
      "about.plabel":"Люди за M5","about.ph2":"Команда за кожним проєктом",
      "team1.b":"Влад","team1.s":"Співзасновник","team2.b":"Вадим","team2.s":"Директор з виробництва","team3.b":"Керівник об'єкта","team3.s":"Якість і терміни","team4.b":"Клієнт-менеджер","team4.s":"Ваша точка контакту",
      "rev.label":"Історії клієнтів","rev.h2":"Що кажуть клієнти",
      "rev1.p":"Кошторис, який ми підписали, лишився незмінним до самого кінця. Усе зробили красиво, до найменшої деталі.","rev1.s":"Brickell · ремонт 2 спальні",
      "rev2.p":"Одна команда від дизайну до здачі. Щотижневі фотозвіти й жодних несподіваних витрат — саме те, що обіцяли.","rev2.s":"Coral Gables · вілла, повний проєкт",
      "rev3.p":"Венеційська штукатурка приголомшлива. Вони владнали раду кондомініуму й дозволи, тож нам не довелося ні про що хвилюватися.","rev3.s":"Edgewater · кухня та вітальня",
      "faq.label":"FAQ","faq.h2":"Питання, які ставлять першими",
      "faq1.q":"Ви віддаєте роботу на субпідряд?","faq1.a":"Дизайн, проєкт-менеджмент і нагляд — власні. Будівництво виконують ліцензовані та застраховані підрядники-партнери Флориди за їхнім дозволом і контрактом — одна команда, відповідальна за результат.",
      "faq2.q":"Хто займається дозволами й радою кондомініуму?","faq2.a":"Ми координуємо. Дозволи Miami-Dade отримують наші ліцензовані підрядники; COI для вашого будинку, бронювання ліфта й години тиші — частина нашого процесу, а не ваш клопіт.",
      "faq3.q":"Скільки коштує проєкт?","faq3.a":"Ми рахуємо кожен проєкт після виїзду на об'єкт — не називаємо цифр по телефону. Ви отримуєте деталізований кошторис за реальними ринковими цінами Маямі до підписання, і він не змінюється без зміни, яку ви спершу схвалюєте. Проєкти з венеційською штукатуркою — від $10,000.",
      "faq4.q":"Скільки це триває?","faq4.a":"Звичайний ремонт триває до 3 місяців. Ви отримуєте терміни наперед і щотижневі фотозвіти протягом усього процесу.",
      "faq5.q":"Чи є гарантія?","faq5.a":"Так — письмова гарантія на 1 рік. Будь-яку проблему після здачі усуває та сама команда, що вела проєкт.",
      "lead.label":"Записатися на візит","lead.h2":"Розкажіть про свій простір.","lead.f1":"БЕЗКОШТОВНА КОНСУЛЬТАЦІЯ","lead.f2":"ВИЇЗД НА ОБ'ЄКТ ВКЛЮЧЕНО","lead.f3":"ВІДПОВІДЬ ПРОТЯГОМ РОБОЧОЇ ГОДИНИ","lead.book":"Або оберіть час — безкоштовний візит",
      "form.consent":"Надсилаючи форму, ви погоджуєтесь, що ми зв'яжемось щодо вашого проєкту.","form.privacy":"Політика конфіденційності","form.name":"Ваше ім'я","form.phone":"Телефон / WhatsApp","form.hood":"Район / будинок","form.budget":"Бюджет проєкту","form.b4":"Ще не визначився","form.btn":"Замовити безкоштовний виїзд",
      "foot.about":"Студія дизайну інтер'єру — дизайн, координація ремонту та венеційська штукатурка. Одна відповідальна команда, від першого ескізу до фінальної здачі. Маямі, Флорида.",
      "foot.h1":"Головні сторінки","foot.privacy":"Політика конфіденційності","foot.l1":"Головна","foot.l2":"Про нас","foot.l3":"Портфоліо","foot.l4":"Контакти","foot.h2":"Послуги","foot.h3":"Зв'язатися з нами",
      "foot.copy":"© M5 · 2026 · Будівництво виконують ліцензовані та застраховані підрядники Флориди"
    },
    "ru": {
      "meta.title":"M5 — студия дизайна интерьеров в Майами","nav.services":"УСЛУГИ","nav.portfolio":"ПОРТФОЛИО","nav.plaster":"ШТУКАТУРКА","nav.about":"О НАС",
      "nav.faq":"FAQ","nav.quote":"ЗАПИСАТЬСЯ","hero.badge":"ЛИЦЕНЗИРОВАННЫЕ И ЗАСТРАХОВАННЫЕ ПАРТНЁРЫ · ПЕРМИТЫ MIAMI&#8209;DADE","hero.h1":"Проектируем дома в Майами и координируем каждый шаг до сдачи.","hero.sub":"Дизайн интерьера · проект и координация ремонта · венецианская штукатурка · fit-out. Одна команда проектирует, координирует и отвечает за результат.",
      "hero.cta1":"Рассчитать проект","hero.cta2":"Смотреть проекты","hero.strip1":"СТУДИЯ ИНТЕРЬЕРНОГО ДИЗАЙНА","hero.strip2":"ДИЗАЙН-СТУДИЯ","hero.strip3":"АНГЛИЙСКИЙ · ИСПАНСКИЙ · УКРАИНСКИЙ · РУССКИЙ",
      "why.h":"Почему дизайнеры выбирают нашу <b>венецианскую штукатурку</b>","why.t1":"Европейская школа","why.b1":"Итальянский уровень отделки на каждой стене","why.t2":"13 собственных материалов","why.b2":"50+ фактур · любой цвет · без задержек поставщика","why.t3":"Матовое · перламутр · металлик · зеркало","why.b3":"Одна палитра, любое настроение","why.t4":"Стены, потолки, мебель, двери","why.b4":"Одно покрытие на всю комнату","why.t5":"Сразу на гипсокартон","why.b5":"Без шпаклёвки · неделя подготовки сэкономлена","why.t6":"Моется. Ремонтируется. Гарантия.","why.b6":"Без повторных вызовов","why.t7":"Бесплатный выезд, образец и смета","why.b7":"Ноль риска на старте","why.t8":"Быстро. Чисто. Подходит для кондо.","why.b8":"Ваш график соблюдён","stats.label":"Кто мы","stats.lead":"Более 200 вилл и домов, сданных по всему миру. Теперь в Майами — та же команда и та же система, с собственной студией венецианской штукатурки.","stats.u1":"года","stats.u2":"год","stats.s1":"вилл и домов по всему миру","stats.s2":"sq ft стен, сделанных вручную",
      "stats.s3":"собственных материала · 50+ фактур","stats.s4":"до подробной сметы после выезда","stats.u4":"ч","form.ok":"Спасибо — мы получили вашу заявку и ответим в течение рабочего часа (9:00–18:00 ET).","form.err":"Заявка пока не подтверждена — попробуйте ещё раз или напишите в WhatsApp: +1 786 407 4441.","rev.client":"Клиент","svc1.price":"от $6 / sq ft","svc2.price":"от $145 / sq ft",
      "svc3.price":"от $18 / sq ft · проекты от $10K","svc4.price":"от $390 / sq ft","svc5.price":"от 4% бюджета","svc.label":"Услуги M5","svc.h2":"Что мы делаем",
      "svc1.h3":"Дизайн интерьера и 3D","svc1.li1":"Концепция, планировки и зонирование","svc1.li2":"Фотореалистичная 3D-визуализация","svc1.li3":"Материалы, комплектация и документация","svc2.h3":"Ремонт: от старта до сдачи",
      "svc2.li1":"От демонтажа до декора — один скоординированный план","svc2.li2":"Фиксированная смета без сюрпризов","svc2.li3":"Еженедельные фотоотчёты до самой сдачи","svc.sig":"SIGNATURE","svc3.h3":"Венецианская штукатурка",
      "svc3.li1":"Венецианка · микроцемент · marmorino","svc3.li2":"Своя библиотека образцов — привозим образцы к вам","svc3.li3":"Архитектурные поверхности, а не просто отделка","svc4.h3":"Новые дома и виллы","svc4.li1":"Проект и координация M5, строят лицензированные и застрахованные подрядчики Флориды",
      "svc4.li2":"Пермиты и ураганные стандарты HVHZ","svc4.li3":"Дома и виллы — по мере роста","svc5.h3":"Технадзор","svc5.li1":"Контроль качества на каждом этапе","svc5.li2":"Надзор за подрядчиками и субподрядчиками",
      "svc5.li3":"Инспекции и контроль недоделок","svc.cta.label":"Не знаете, с чего начать?","svc.cta.btn":"Бесплатная консультация","plaster.lb":"13 минеральных материалов в нашей библиотеке образцов, с кодами и оттенками:","plaster.lbbtn":"Скачать M5 Lookbook 2026 (PDF, 2 МБ)","plaster.label":"Наша фирменная услуга","plaster.h2":"Венецианская штукатурка руками наших мастеров",
      "plaster.flag":"МАСТЕР M5","plaster.h2b":"Архитектурные поверхности,<br>а не просто отделка.","plaster.lead":"Венецианскую штукатурку, микроцемент и marmorino наносит наша обученная команда — не случайный субподрядчик. У нас своя библиотека образцов, и мы привозим их к вам: вы увидите и потрогаете текстуру до старта работ.","plaster.li1":"Венецианка · микроцемент · marmorino · эффект травертина","plaster.li2":"Своя библиотека образцов — полноразмерные образцы привозим к вам",
      "plaster.li3":"Акцентные стены, потолки, влажные зоны и целые интерьеры","plaster.ctab":"Бесплатный замер и смета с выездом","plaster.ctas":"Приедем к вам, замерим пространство и подготовим детальную смету — бесплатно.","plaster.ctabtn":"Записаться на бесплатный замер","plaster.tex":"Реальные фактуры из нашей библиотеки образцов","proj.label":"Наши работы",
      "proj.h2":"Виллы, апартаменты и венецианская штукатурка","proj.viewall":"Все работы","w1.tag":"ВИЛЛА","w1.h4":"Современная вилла","w1.m":"ФАСАД · ИНТЕРЬЕРЫ · БАССЕЙН","w2.tag":"ИНТЕРЬЕР ВИЛЛЫ","w2.h4":"Гостиная в два света","w2.m":"МРАМОРНАЯ ЛЕСТНИЦА · МЕБЕЛЬ НА ЗАКАЗ","w3.tag":"АПАРТАМЕНТЫ","w3.h4":"Дубовая кухня-столовая","w3.m":"ПОЛНЫЙ РЕМОНТ","w4.tag":"АПАРТАМЕНТЫ","w4.h4":"Открытая гостиная","w4.m":"ПОЛНЫЙ РЕМОНТ","w5.tag":"ВЕНЕЦИАНСКАЯ ШТУКАТУРКА","w5.h4":"Чёрная стена с камином","w5.m":"МИНЕРАЛЬНАЯ ШТУКАТУРКА · ВРУЧНУЮ","w6.tag":"МАРМОРИНО","w6.h4":"Гостевой санузел в чёрном марморино","w6.m":"ВРУЧНУЮ · НАШИ МАСТЕРА","qz.open":"Узнать вилку цен","qz.title":"Ваша вилка цен","qz.sub":"60 секунд · ни к чему не обязывает",
      "mb.call":"Позвонить","mb.est":"Вилка цен","xi.h":"Подождите — заберите гайд по ценам на ремонт в Майами 2026","xi.p":"Реальные вилки цен за sq ft, подводные камни кондо и чек-лист планирования — бесплатный PDF на почту.","xi.email":"Ваш email",
      "xi.btn":"Прислать гайд","xi.note":"Без спама — один полезный PDF и редкие заметки о проектах.","want.ba":"Хотите так же у себя?","want.gal":"Одна команда для всего — узнайте свои цифры.","want.btn":"Рассчитать проект",
      "gal.label":"Наши работы · Интерьеры","gal.h2":"Интерьеры M5","gal.sub":"Виллы и апартаменты, которые спроектировала и сдала наша команда.","gal.c1":"Гостиная","gal.c2":"Спальня",
      "gal.c3":"Кухня","gal.c4":"Ванная","gal.c5":"Патио","ba.label":"Трансформации","ba.h2":"До и после",
      "ba.before":"ДО","ba.after":"ПОСЛЕ","ba.hint":"Потяните, чтобы сравнить","ba.c1":"Венецианская штукатурка · акцентная стена","ba.c2":"Полный ремонт квартиры",
      "case1.tag":"РЕМОНТ","case1.h4":"Резиденция 2BR в Brickell","case1.m2":"12 НЕДЕЛЬ","case2.tag":"КУХНЯ","case2.h4":"Кухня в Edgewater",
      "case2.m2":"8 НЕДЕЛЬ","case3.tag":"ВАННАЯ","case3.h4":"Мастер-ванная в Sunny Isles","case3.m2":"6 НЕДЕЛЬ","case4.tag":"ВИЛЛА ЦЕЛИКОМ",
      "case4.h4":"Вилла в Coral Gables","case4.m2":"16 НЕДЕЛЬ","case5.tag":"FIT-OUT","case5.h4":"Лофт в South Beach","case5.m2":"10 НЕДЕЛЬ",
      "case6.tag":"БИБЛИОТЕКА ОБРАЗЦОВ","case6.h4":"Библиотека образцов M5","case6.m1":"ПРИЕЗЖАЕМ К ВАМ","case6.m2":"ПО ЗАПИСИ","cta.h2":"Детальная смета<br>через 48 часов после нашего визита.",
      "cta.s1":"БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ С ВЫЕЗДОМ","cta.s2":"ОТВЕТ В ТЕЧЕНИЕ РАБОЧЕГО ЧАСА","cta.btn1":"Рассчитать проект","cta.btn2":"Написать в WhatsApp","cta.btn3":"Записаться на бесплатный выезд","cta.wa":"или напишите нам в WhatsApp",
      "money.label":"Прозрачность","money.h2":"Как мы защищаем ваши деньги","money.m1":"Детальная смета до подписания договора","money.m2":"Оплата по этапам, без большого аванса","money.m3":"Изменения — только после вашего согласования",
      "money.m4":"Lien release от каждого субподрядчика","money.m5":"Договор и сертификаты страхования подрядчиков по запросу","money.btn":"Письменная гарантия 1 год на каждый проект","proc.label":"Наш процесс","proc.h2":"Понятный процесс. Честные сроки.",
      "proc1.name":"Консультация и задачи","proc1.side":"≈ 1 неделя","proc1.desc":"Встречаемся у вас, обсуждаем цели и бюджет и договариваемся, как выглядит успех, — ещё до договора.","proc2.name":"Концепция","proc2.side":"≈ 1–2 недели",
      "proc2.desc":"Несколько концептуальных направлений: выбираем стиль, логику планировки и рамку бюджета.","proc3.name":"Дизайн и 3D","proc3.side":"≈ 2–3 недели","proc3.desc":"Планировки, фотореалистичное 3D, материалы и детальная смета — вы подписываете, точно зная, что получите.","proc4.name":"Стройка и fit-out",
      "proc4.side":"по смете","proc4.desc":"Строительство с пермитами силами застрахованных подрядчиков-партнёров и еженедельные фотоотчёты. Оплата по этапам — никогда большим авансом.","proc5.name":"Сдача и гарантия","proc5.side":"финальная неделя","proc5.desc":"Финальная уборка, приёмка и письменная гарантия 1 год от той же команды, что вела проект.",
      "proc.foot":"БЕСПЛАТНЫЙ ЗАМЕР И СМЕТА · ТИПИЧНЫЙ СРОК ДО 3 МЕСЯЦЕВ","about.label":"О нас","about.h2":"Почему клиенты доверяют M5","about.p":"За M5 стоит одна собственная команда — дизайнеры, менеджеры проектов и технадзор, а не цепочка анонимных субподрядчиков. Мы отвечаем за каждый проект — от первого эскиза до сдачи.","trust2.mono":"Лицензированные и застрахованные партнёры","trust2.h4":"Строят лицензированные и застрахованные подрядчики-партнёры Флориды","trust2.p":"Пермиты Miami-Dade получают наши подрядчики-партнёры · ураганные стандарты HVHZ на каждом объекте. Сертификаты по запросу.",
      "trust3.mono":"Локально","trust3.h4":"Команда, которая говорит на вашем языке","trust3.p":"Опыт работы с кондо: COI, бронь лифта, часы шума.","about.plabel":"Люди за M5","about.ph2":"Команда за каждым проектом",
      "team1.b":"Влад","team1.s":"Сооснователь","team2.b":"Вадим","team2.s":"Директор по производству","team3.b":"Прораб",
      "team3.s":"Качество и сроки","team4.b":"Клиент-менеджер","team4.s":"Ваш контакт в M5","rev.label":"Истории клиентов","rev.h2":"Что говорят клиенты",
      "rev1.p":"Смета, которую мы подписали, не изменилась до самого конца. Всё сделано красиво, до мелочей.","rev1.s":"Brickell · ремонт 2BR","rev2.p":"Одна команда от дизайна до сдачи. Еженедельные фотоотчёты и никаких неожиданных расходов — ровно как обещали.","rev2.s":"Coral Gables · вилла целиком","rev3.p":"Венецианская штукатурка потрясающая. Они сами решили всё с кондо-боардом и пермитами — нам не пришлось волноваться.",
      "rev3.s":"Edgewater · кухня и гостиная","faq.label":"FAQ","faq.h2":"Вопросы, которые задают первыми",
      "faq1.q":"Вы отдаёте работы субподрядчикам?","faq1.a":"Дизайн, ведение проекта и надзор — своя команда. Строительство выполняют лицензированные и застрахованные подрядчики-партнёры Флориды по своему пермиту и контракту. За результат отвечает одна команда.","faq2.q":"Кто занимается пермитами и кондо-боардом?","faq2.a":"Мы координируем. Пермиты Miami-Dade получают наши лицензированные подрядчики; COI для вашего здания, бронь лифта и часы шума — часть нашего процесса, а не ваша забота.","faq3.q":"Сколько стоит проект?",
      "faq3.a":"Мы считаем каждый проект после выезда на объект — не называем цифр по телефону. Детальную смету по реальным рыночным ценам Майами вы видите до подписания, и она меняется только через изменение, которое вы согласовали первым. Проекты с венецианской штукатуркой — от $10,000.","faq4.q":"Сколько это занимает?","faq4.a":"Типичный ремонт — до 3 месяцев. Сроки вы получаете заранее, а фотоотчёты — каждую неделю до самого конца.","faq5.q":"Есть ли гарантия?","faq5.a":"Да: письменная гарантия 1 год. Любой вопрос после сдачи решает та же команда, что вела проект.",
      "lead.label":"Записаться на визит","lead.h2":"Расскажите о вашем пространстве.","lead.f1":"БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ","lead.f2":"ВЫЕЗД ВКЛЮЧЁН","lead.f3":"ОТВЕТ В ТЕЧЕНИЕ РАБОЧЕГО ЧАСА",
      "lead.book":"Или выберите время — бесплатный выезд","form.consent":"Отправляя форму, вы соглашаетесь, что мы свяжемся с вами по вашему проекту.","form.privacy":"Политика конфиденциальности","form.name":"Ваше имя","form.phone":"Телефон / WhatsApp",
      "form.hood":"Район / здание","form.budget":"Бюджет проекта","form.b4":"Пока не определился","form.btn":"Заказать бесплатный выезд","foot.about":"Студия дизайна интерьеров — дизайн, координация ремонта и венецианская штукатурка. Одна ответственная команда от первого эскиза до сдачи. Майами, Флорида.",
      "foot.h1":"Основные страницы","foot.privacy":"Политика конфиденциальности","foot.l1":"Главная","foot.l2":"О нас","foot.l3":"Портфолио",
      "foot.l4":"Контакты","foot.h2":"Услуги","foot.h3":"Связаться с нами","foot.copy":"© M5 · 2026 · Строительство выполняют лицензированные и застрахованные подрядчики Флориды"
    }
  };

  function applyLang(l){
    if(!I18N[l]) l='en';
    document.documentElement.lang = l;
    try{ localStorage.setItem('m5lang', l); }catch(e){}
    var dict = I18N[l];
    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var v = dict[el.getAttribute('data-i18n')];
      if(v!==undefined) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function(el){
      var v = dict[el.getAttribute('data-i18n-ph')];
      if(v!==undefined) el.setAttribute('placeholder', v);
    });
    document.querySelectorAll('.lang-sw button').forEach(function(b){
      b.classList.toggle('on', b.getAttribute('data-l')===l);
    });
    if(dict['meta.title']) document.title = dict['meta.title'];
  }

  (function(){
    var saved=null; try{ saved=localStorage.getItem('m5lang'); }catch(e){}
    var sys=(navigator.language||'en').slice(0,2).toLowerCase();
    applyLang(saved || (I18N[sys] ? sys : 'en'));
  })();

  /* ===== scroll-reveal (появление секций при скролле, как у D5) ===== */
  (function(){
    if(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var sel='.hero-badge,.hero h1,.hero-sub,.hero-ctas,.label,h2,.stats .lead,.stat,.why-top>div,.why-rest>div,.svc,.plaster-txt,.plaster-img,.gal-item,.case,.m-item,.money-note,.p-row,.t-card,.tm,.rev-card,.rev-score,.faq details,.lead-box>div,.form';
    var els=[].slice.call(document.querySelectorAll(sel));
    els.forEach(function(el){ el.classList.add('reveal'); });
    document.querySelectorAll('.svc-grid,.ba-grid,.gal-grid,.money-grid,.team-grid,.rev-grid,.trust-grid').forEach(function(g){
      [].slice.call(g.children).forEach(function(c,i){ if(c.classList.contains('reveal')) c.style.transitionDelay=((i%4)*0.09).toFixed(2)+'s'; });
    });
    if(!('IntersectionObserver' in window)){ els.forEach(function(el){el.classList.add('in')}); return; }
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    },{threshold:0.12,rootMargin:'0px 0px -7% 0px'});
    els.forEach(function(el){ io.observe(el); });
  })();

  /* ===== count-up цифр статистики (14 · 15 · 1yr · 100%) ===== */
  (function(){
    if(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if(!('IntersectionObserver' in window)) return;
    function run(b){
      var m=b.innerHTML.match(/^(\d+)([\s\S]*)$/); if(!m) return; b.dataset.sfx=m[2]||'';
      var target=+m[1], suffix=m[2]||'', dur=1200, t0=null;
      function step(ts){ if(!t0)t0=ts; var p=Math.min((ts-t0)/dur,1); var eased=1-Math.pow(1-p,3);
        b.innerHTML=Math.round(target*eased)+suffix; if(p<1) requestAnimationFrame(step); else b.innerHTML=target+suffix; }
      requestAnimationFrame(step);
    }
    var so=new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if(e.isIntersecting){ run(e.target); so.unobserve(e.target); } });
    },{threshold:0.6});
    document.querySelectorAll('.stat b').forEach(function(b){ so.observe(b); });
  })();

  /* ===== before/after слайдеры ===== */
  (function(){
    document.querySelectorAll('[data-ba]').forEach(function(s){
      var drag=false;
      function set(x){ var r=s.getBoundingClientRect(); var p=Math.max(3,Math.min(97,((x-r.left)/r.width)*100)); s.style.setProperty('--pos',p+'%'); }
      s.addEventListener('pointerdown',function(e){ drag=true; try{s.setPointerCapture(e.pointerId)}catch(_){}; set(e.clientX); });
      s.addEventListener('pointermove',function(e){ if(drag) set(e.clientX); });
      s.addEventListener('pointerup',function(){ drag=false; });
      s.addEventListener('pointercancel',function(){ drag=false; });
      s.addEventListener('pointerleave',function(){ drag=false; });
    });
  })();

  /* ===== хедер: компактный при скролле ===== */
  (function(){
    var h=document.querySelector('header'); if(!h) return;
    function onScroll(){ h.classList.toggle('scrolled', (window.scrollY||window.pageYOffset)>24); }
    window.addEventListener('scroll',onScroll,{passive:true}); onScroll();
  })();

  /* ===== ротатор отзывов ===== */
  (function(){
    var slides=[].slice.call(document.querySelectorAll('.rev-slide'));
    if(slides.length<2) return;
    var dots=[].slice.call(document.querySelectorAll('.rev-dot'));
    var count=document.querySelector('.rev-count');
    var i=0, timer=null;
    function pad(n){ return ('0'+n).slice(-2); }
    function show(n){ i=(n+slides.length)%slides.length;
      slides.forEach(function(s,k){ s.classList.toggle('on',k===i); });
      dots.forEach(function(d,k){ d.classList.toggle('on',k===i); });
      if(count) count.textContent=pad(i+1)+' / '+pad(slides.length);
    }
    function start(){ stop(); timer=setInterval(function(){ show(i+1); },6000); }
    function stop(){ if(timer){ clearInterval(timer); timer=null; } }
    dots.forEach(function(d){ d.addEventListener('click',function(){ show(+d.getAttribute('data-i')); start(); }); });
    start();
  })();
