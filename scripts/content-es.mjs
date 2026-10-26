// Spanish versions of the two renovation pages (SPEC T38, page plan section 4). Natural Spanish for Miami readers (formal "usted").
// Needs a native read before the owner relies on it. Same structure and facts as the English pages in content-service.mjs.
import { ORIGIN } from './pages-lib.mjs';
import { apartmentCards, villaCards } from './content-service.mjs';

export const condoEs = {
  lang: 'es', slug: '/condo-renovation/', track: 'condo-es',
  title: 'Remodelación de condominios en Miami | M5 Studio Miami',
  desc: 'Remodelación integral de condominios y apartamentos en Miami, con cocinas y baños. M5 diseña y coordina cada paso, incluidos los trámites del edificio.',
  label: 'Remodelación de condominios y apartamentos',
  h1: 'Remodelación de condominios y apartamentos en Miami',
  lede: 'Un solo equipo diseña su condominio, coordina el edificio y la obra, y responde por el resultado. Las cocinas y los baños forman parte del plan, y la obra la realizan contratistas asociados de Florida con licencia y seguro.',
  crumbs: [['Remodelación de condominios y apartamentos', null]],
  ctas: [['Agendar visita gratuita', '/es/#contact', 'btn-ink'], ['Ver proyectos de apartamentos', '#interiors', 'btn-line']],
  meta: 'Proyecto típico de remodelación integral: $200–250K · visita gratuita',
  ctaH: '¿Piensa remodelar su condominio en Miami?',
  service: { '@id': ORIGIN + '/es/condo-renovation/#service', name: 'Remodelación de condominios y apartamentos', serviceType: 'Remodelación de condominios', inLanguage: 'es' },
  sections: [
    { id: 'includes', label: 'Qué incluye', h2: 'Qué incluye una remodelación integral de condominio con M5', html: `
      <p>Un equipo, un plan, un presupuesto: del primer boceto a la entrega. M5 diseña y coordina; la obra se ejecuta con contratistas asociados de Florida con licencia y seguro, bajo su propio permiso y su propio contrato.</p>
      <ul>
      <li><strong>Diseño.</strong> Concepto, distribución y planificación del espacio, visualización 3D fotorrealista, materiales y documentación. Vea <a href="/interior-design/" hreflang="en" lang="en">diseño de interiores con M5 (EN)</a>.</li>
      <li><strong>Coordinación.</strong> Un solo calendario y un presupuesto detallado, con fotos semanales hasta la entrega.</li>
      <li><strong>Obra.</strong> De la demolición a la decoración, a cargo de nuestros contratistas asociados de Florida con licencia y seguro.</li>
      <li><strong>Control de calidad.</strong> Revisiones en obra en cada etapa y una lista de pendientes al entregar.</li>
      <li><strong>Paredes.</strong> <a href="/es/venetian-plaster/">Estuco veneciano</a> aplicado por nuestros propios maestros, donde quiera un acabado con profundidad.</li>
      </ul>` },
    { id: 'kitchens', alt: true, label: 'Cocinas', h2: 'Cocinas en un condominio', html: `
      <p>La cocina de un condominio la define el edificio antes que el diseño: por dónde pueden pasar las tuberías y la ventilación, qué paredes son compartidas y qué permite la asociación. Primero revisamos qué se puede mover y después diseñamos a partir de eso.</p>
      <ul>
      <li><strong>Distribución.</strong> Incluida la apertura de una cocina cerrada hacia la sala, cuando el edificio lo permite.</li>
      <li><strong>Carpintería y piedra.</strong> Gabinetes, encimeras e islas, del roble claro a la piedra negra.</li>
      <li><strong>Iluminación y electrodomésticos.</strong> Planificados junto con la ventilación, para que nada se agregue a última hora.</li>
      </ul>
      <p>Vea cocinas en los <a href="#interiors">proyectos de apartamentos</a> más abajo.</p>` },
    { id: 'bathrooms', label: 'Baños', h2: 'Baños y baños de visitas', html: `
      <p>Baños principales, baños de huéspedes, baños de visitas y duchas: distribución, piedra o azulejo, grifería e iluminación, planificados como un solo diseño. El estuco veneciano y el marmorino son habituales en baños, y las zonas húmedas llevan un sellador protector. Conozca más sobre el <a href="/venetian-plaster/marmorino/" hreflang="en" lang="en">marmorino (EN)</a>.</p>` },
    { id: 'building', alt: true, label: 'Reglas del edificio', h2: 'Reglas del edificio, aprobación de la junta y horarios de obra', html: `
      <p>Cada edificio tiene sus propias reglas. Por lo general significan la aprobación de la asociación para los planos, horarios de trabajo limitados, reservas del ascensor y un certificado de seguro (COI) para el edificio. Revise siempre las reglas de su propio edificio. Nosotros nos encargamos de los trámites.</p>
      <div class="facts"><div><b>M5 prepara</b><span>Los documentos para la junta, el COI de su edificio, las reservas del ascensor y el plan para los horarios de ruido.</span></div><div><b>Los contratistas gestionan los permisos</b><span>Los permisos los tramitan nuestros contratistas asociados de Florida con licencia y seguro.</span></div><div><b>Usted decide</b><span>Usted aprueba el diseño y el presupuesto detallado, y firma los cambios antes de que se hagan.</span></div></div>
      <p>La lista completa está en nuestra guía sobre las <a href="/guides/miami-condo-renovation/" hreflang="en" lang="en">reglas para remodelar un condominio en Miami (EN)</a>.</p>` },
    { id: 'budget', label: 'Plazos y presupuesto', h2: 'Plazos y presupuesto', html: `
      <p>Un proyecto típico de remodelación integral con M5 ronda los $200–250K. Cada proyecto lo presupuestamos después de visitar el espacio, sin adivinar por teléfono: usted recibe un presupuesto detallado 48 horas después de la visita, y solo cambia mediante una orden de cambio que usted apruebe primero.</p>
      <ol>
      <li><strong>Consulta y necesidades</strong> (alrededor de una semana). Nos reunimos en su espacio y acordamos qué significa el éxito.</li>
      <li><strong>Concepto</strong> (de 1 a 2 semanas). Varias direcciones de estilo y distribución.</li>
      <li><strong>Diseño y 3D</strong> (de 2 a 3 semanas). Distribución, 3D, materiales y el presupuesto detallado.</li>
      <li><strong>Obra</strong> (según el presupuesto). Fotos semanales y pagos por etapas, nunca un pago inicial grande.</li>
      <li><strong>Entrega.</strong> Limpieza final, recorrido y una garantía escrita de 1 año.</li>
      </ol>` },
    { id: 'interiors', alt: true, label: 'Interiors by M5', h2: 'Interiors by M5', html: `
      <p>Proyectos reales y terminados de apartamentos y penthouse del equipo de M5, fotografiados después de la entrega.</p>
      ${apartmentCards('es')}` },
    { id: 'where', label: 'Dónde trabajamos', h2: 'Dónde trabajamos', html: `
      <p>Trabajamos en todo el sur de Florida: primero Miami-Dade, además de Broward y Palm Beach. Vea las <a href="/south-florida/" hreflang="en" lang="en">zonas de servicio (EN)</a>. ¿Busca remodelar una casa? Lea sobre la <a href="/es/home-renovation/">remodelación de casas</a>.</p>` },
  ],
  faq: [
    { q: '¿Necesito la aprobación de la asociación para remodelar mi condominio en Miami?', a: 'En la mayoría de los edificios, sí, para cualquier trabajo que vaya más allá de lo cosmético. Cada asociación tiene sus propias reglas, así que revise primero la declaración y el reglamento de su edificio. Nosotros preparamos los documentos y coordinamos el proceso con el edificio; los requisitos exactos los fija su asociación.' },
    { q: '¿Qué se puede y qué no se puede cambiar en la remodelación de un condominio?', a: 'Dentro de su unidad, normalmente se pueden rediseñar los acabados, las cocinas, los baños y las distribuciones no estructurales. La estructura, las columnas de tuberías compartidas y los elementos exteriores suelen estar prohibidos o requieren una aprobación especial. Lo deciden las reglas de su asociación y el propio edificio, por eso revisamos ambos antes de diseñar.' },
    { q: '¿Cuánto tarda una remodelación integral de un condominio?', a: 'Depende del tamaño, del alcance y del proceso de aprobación del edificio. La etapa de diseño dura aproximadamente de 4 a 6 semanas, desde la primera consulta hasta el diseño, el 3D y el presupuesto detallado. La duración de la obra sigue el presupuesto, con fotos semanales. Usted conoce el plazo desde el principio.' },
    { q: '¿Quién tramita los permisos y trata con la administración del edificio?', a: 'Lo coordinamos nosotros. Los permisos los tramitan nuestros contratistas asociados de Florida con licencia y seguro; el COI de su edificio, las reservas del ascensor y los horarios de ruido son parte de nuestro proceso, no su problema.' },
    { q: '¿Se puede abrir una cocina cerrada de un condominio hacia la sala?', a: 'A veces. Depende de qué tipo de pared sea: un tabique simple muchas veces se puede abrir, mientras que una pared estructural o compartida normalmente no. Revisamos los planos del edificio y las reglas de su asociación antes de diseñar la nueva distribución.' },
  ],
};

export const homeEs = {
  lang: 'es', slug: '/home-renovation/', track: 'home-es',
  title: 'Remodelación de casas en Miami | M5 Studio Miami',
  desc: 'Remodelación integral de casas y villas en Miami. M5 diseña y coordina; la obra la hacen contratistas asociados de Florida con licencia y seguro.',
  label: 'Remodelación integral de casas',
  h1: 'Remodelación integral de casas en Miami, un solo equipo del diseño a la entrega',
  lede: 'Casas y villas remodeladas como un solo proyecto: diseño, coordinación y control de calidad en obra a cargo de un solo equipo, y la obra la realizan contratistas asociados de Florida con licencia y seguro.',
  crumbs: [['Remodelación de casas', null]],
  ctas: [['Agendar visita gratuita', '/es/#contact', 'btn-ink'], ['Ver proyectos de villas', '#interiors', 'btn-line']],
  meta: 'Proyecto típico de remodelación integral: $200–250K · visita gratuita',
  ctaH: '¿Piensa remodelar su casa en Miami?',
  service: { '@id': ORIGIN + '/es/home-renovation/#service', name: 'Remodelación integral de casas', serviceType: 'Remodelación de casas', inLanguage: 'es' },
  sections: [
    { id: 'team', label: 'Un solo equipo', h2: 'Un equipo responsable de toda la casa', html: `
      <p>Una casa tiene muchos oficios y muchas decisiones. Los mantenemos en un solo plan para que usted trate con un solo equipo: diseño de interiores, coordinación de la remodelación, control de calidad en obra y <a href="/es/venetian-plaster/">estuco veneciano</a> aplicado por nuestros propios maestros. La obra se realiza con contratistas asociados de Florida con licencia y seguro, bajo su propio permiso y su propio contrato.</p>
      <ul>
      <li><strong>Primero el diseño.</strong> Distribución, 3D, materiales y un presupuesto detallado antes de que empiece cualquier trabajo. Vea <a href="/interior-design/" hreflang="en" lang="en">diseño de interiores con M5 (EN)</a>.</li>
      <li><strong>Un solo calendario.</strong> Fotos semanales hasta la entrega.</li>
      <li><strong>Inspecciones y lista de pendientes.</strong> Revisiones de calidad en cada etapa y un recorrido final.</li>
      </ul>` },
    { id: 'kitchens', alt: true, label: 'Cocinas', h2: 'Cocinas en una casa', html: `
      <p>La cocina de una casa suele conectarse con el comedor, el jardín o la terraza de la piscina, así que la planificamos junto con ellos. Hay más libertad que en un condominio, pero las paredes, las aberturas y el techo siguen afectando la estructura y los permisos; por eso revisamos la casa antes de dibujar.</p>
      <ul>
      <li><strong>Distribución y circulación.</strong> Islas, despensas y conexiones entre interior y exterior.</li>
      <li><strong>Carpintería, piedra e iluminación.</strong> Diseñadas como una sola composición con las áreas sociales.</li>
      </ul>` },
    { id: 'bathrooms', label: 'Baños', h2: 'Baños y baños de visitas', html: `
      <p>Suites principales, baños de huéspedes y baños de visitas, diseñados junto con los dormitorios a los que sirven. La piedra natural, el azulejo y el <a href="/venetian-plaster/marmorino/" hreflang="en" lang="en">marmorino (EN)</a> funcionan muy bien aquí: las zonas húmedas llevan un sellador protector.</p>` },
    { id: 'florida', alt: true, label: 'Casas en el sur de Florida', h2: 'Casas en el sur de Florida: lo que el clima exige a una remodelación', html: `
      <ul>
      <li><strong>Humedad y aire salino.</strong> La humedad, el aire salino y el código de huracanes deciden qué acabados sobreviven. El estuco mineral es transpirable, lavable y reparable, y la piedra natural soporta bien la humedad.</li>
      <li><strong>Aberturas resistentes a huracanes.</strong> En Miami-Dade, cada abertura necesita protección contra impactos aprobada, así que las ventanas y puertas son a la vez una decisión de código y de diseño.</li>
      <li><strong>Casas antiguas.</strong> Detrás de las paredes pueden esconderse cableado, tuberías y humedad. Revisamos el estado durante la visita, y cualquier cosa que cambie el plan pasa por una orden de cambio que usted aprueba primero.</li>
      </ul>` },
    { id: 'stages', label: 'Etapas y plazos', h2: 'Etapas y plazos', html: `
      <ol>
      <li><strong>Consulta y necesidades</strong> (alrededor de una semana). Nos reunimos en la casa y acordamos los objetivos y el marco del presupuesto.</li>
      <li><strong>Concepto</strong> (de 1 a 2 semanas). Varias direcciones de estilo y distribución.</li>
      <li><strong>Diseño y 3D</strong> (de 2 a 3 semanas). Distribución, 3D, materiales y el presupuesto detallado.</li>
      <li><strong>Obra</strong> (según el presupuesto), con fotos semanales.</li>
      <li><strong>Entrega</strong> con un recorrido final y una garantía escrita de 1 año.</li>
      </ol>` },
    { id: 'budget', alt: true, label: 'Su presupuesto', h2: 'Cómo protegemos su presupuesto', html: `
      <p>Un proyecto típico de remodelación integral con M5 ronda los $200–250K. El precio se fija después de una visita, y estas reglas lo protegen:</p>
      <ul>
      <li>Un presupuesto detallado antes del contrato, 48 horas después de nuestra visita.</li>
      <li>Pagos por etapas, sin un pago inicial grande.</li>
      <li>Órdenes de cambio firmadas primero por usted.</li>
      <li>Liberaciones de gravamen de cada subcontratista.</li>
      <li>Certificados de seguro del contrato y de los socios, a solicitud.</li>
      <li>Garantía escrita de 1 año en cada proyecto.</li>
      </ul>` },
    { id: 'interiors', label: 'Interiors by M5', h2: 'Interiors by M5', html: `
      <p>Proyectos reales y terminados de villas del equipo de M5, fotografiados después de la entrega.</p>
      ${villaCards('es')}` },
    { id: 'where', alt: true, label: 'Dónde trabajamos', h2: 'Dónde trabajamos', html: `
      <p>Remodelamos casas en Miami-Dade, Broward y Palm Beach, incluidas zonas como Coral Gables, Pinecrest, Coconut Grove, Fort Lauderdale y Boca Raton. Vea las <a href="/south-florida/" hreflang="en" lang="en">zonas de servicio (EN)</a>. ¿Vive en un condominio? Lea sobre la <a href="/es/condo-renovation/">remodelación de condominios y apartamentos</a>.</p>` },
  ],
  faq: [
    { q: '¿Cuánto tarda una remodelación integral de una casa en Miami?', a: 'Depende del tamaño de la casa, del alcance y de los permisos. La etapa de diseño dura aproximadamente de 4 a 6 semanas, desde la primera consulta hasta el diseño, el 3D y el presupuesto detallado. La duración de la obra sigue el presupuesto, con fotos semanales. Usted conoce el plazo desde el principio.' },
    { q: '¿Se encargan de los permisos de la remodelación de una casa?', a: 'Lo coordinamos nosotros. Los permisos los tramitan nuestros contratistas asociados de Florida con licencia y seguro, que trabajan bajo su propio permiso y contrato. Las aberturas con protección contra impactos y otros requisitos locales se planifican en el diseño desde el principio.' },
    { q: '¿Podemos vivir en la casa durante la remodelación?', a: 'Depende del alcance. En una remodelación de toda la casa, la mayoría de los propietarios se muda durante la obra principal, mientras que un alcance menor a veces se puede hacer por fases, habitación por habitación. Se lo decimos con franqueza después de la visita.' },
    { q: '¿Cuánto cuesta una remodelación integral de una casa en Miami?', a: 'Un proyecto típico de remodelación integral con M5 ronda los $200–250K. Cada proyecto lo presupuestamos después de visitar la casa, sin adivinar por teléfono. Usted recibe un presupuesto detallado 48 horas después de la visita, y solo cambia mediante una orden de cambio que usted apruebe primero.' },
    { q: '¿Remodelan cocinas y baños dentro de un proyecto más grande?', a: 'Sí. Las cocinas y los baños forman parte de la remodelación integral, planificados junto con el resto de la casa. Vea las secciones de cocinas y baños en esta página.' },
  ],
};
