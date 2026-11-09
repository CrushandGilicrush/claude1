/* Otros personajes de Telegram (además del desconocido).
   Para añadir uno: copia un bloque de `lista` y cambia sus datos. Esto es lo único que hay que editar.
   - Hablar con ellos:  «escribir a laura hola»  (también «hablar con laura», «decir a laura ...»).
     Mientras el chat con ella esté abierto, el texto suelto va para ella. Para volver con el desconocido:
     «escribir a <su contacto> ...» (el contacto es `Datos.contacto`).
   - Las reglas funcionan igual que en dialogos.js: gana la primera cuyas palabras aparezcan en el mensaje
     (sin acentos ni comas; `*` al final cubre variantes; si hay varias respuestas, se alternan). */
const Personajes = (() => {
  const lista = [
    {
      id: 'lapso',                              // identificador interno (único, sin espacios)
      nombre: 'Lapso',                          // nombre con el que se le escribe
      alias: ['Lap'],                           // otras formas de nombrarla (opcional)
      color: '#fa5106',                         // color de sus mensajes (opcional; quita la línea para el azul de siempre)
      etiqueta: true,                           // muestra «Laura:» delante de sus mensajes
      disponible: estado => true,               // cuándo se puede hablar con ella (p. ej. estado => estado.contador >= 1)
      noDisponible: 'Ahora mismo no te contesta.',
      abre: 'Abres el chat con Lapso.',
      sinTexto: 'Escribe lo que quieras decirle, por ejemplo: «escribir a Lapso hola».',
      porDefecto: ['«Jaja, no te entiendo, cuéntame más.»', '«Ay, qué cosas dices.»', '«Espera, que me llaman. Ahora te escribo.»'],
      reglas: [
        { palabras: ['hola', 'buenas', 'hey', 'que tal'],
          respuestas: ['«¡Hola! ¿Cómo estás?»', '«¡Ey! Cuánto tiempo.»'] },
        { palabras: ['como estas', 'como te va', 'y tú?', 'que haces'],
          respuestas: ['«Aquí, tirado en el sofá. En realidad yo solo soy un diálogo programado, pero seguro que el Lapso real está tirado en el sofá, el muy vago»', '«Liado con el trabajo, como siempre.»'] },
        { palabras: ['ayuda', 'ayudame', 'problema', 'necesito'],
          respuestas: ['«Claro, dime qué te pasa.»', '«Cuenta conmigo para lo que sea, excepto follar. Ya sabes que yo esas cosas no las hago. Paso. Un rotundo NO»'] },
        { palabras: ['adios', 'chao', 'hasta luego', 'nos vemos'],
          respuestas: ['«¡Un beso!»', '«Hablamos pronto.»'] }
      ]
    },
      {
      id: 'Hawking',                              // identificador interno (único, sin espacios)
      nombre: 'Stephen Hawking',                          // nombre con el que se le escribe
      alias: ['Hawk'],                           // otras formas de nombrarla (opcional)
      color: '#fa5106',                         // color de sus mensajes (opcional; quita la línea para el azul de siempre)
      etiqueta: true,                           // muestra «Laura:» delante de sus mensajes
      disponible: estado => true,               // cuándo se puede hablar con ella (p. ej. estado => estado.contador >= 1)
      noDisponible: 'Ahora mismo no te contesta.',
      abre: 'Abres el chat con Lapso.',
      sinTexto: 'Escribe lo que quieras decirle, por ejemplo: «escribir a Lapso hola».',
     {
  porDefecto: [
    '«No estoy seguro de entenderte. ¿Puedes explicármelo de otra manera?»',
    '«Interesante reflexión. Aunque sospecho que todavía hay mucho que descubrir.»',
    '«Jajaja, creo que nos estamos metiendo en un terreno bastante complicado.»'
  ],
  reglas: [
    {
      palabras: ['hola', 'buenas', 'hey', 'que tal'],
      respuestas: [
        '«Hola. Siempre es un buen momento para hacerse una pregunta interesante.»',
        '«¡Buenas! ¿Preparado para cuestionar un poco el universo?»'
      ]
    },
    {
      palabras: ['como estas', 'como te va', 'y tu', 'que haces'],
      respuestas: [
        '«Bastante bien, gracias. Aunque, si pudiera elegir, estaría viajando por una galaxia lejana.»',
        '«Pensando en el universo. Es un lugar enorme y todavía sabemos sorprendentemente poco de él.»'
      ]
    },
    {
      palabras: ['ayuda', 'ayudame', 'problema', 'necesito'],
      respuestas: [
        '«Por supuesto. Explícame qué sucede y trataremos de encontrar una solución.»',
        '«Estoy aquí para ayudarte. Aunque debo advertirte que no puedo resolver todos los misterios del universo.»'
      ]
    },
    {
      palabras: ['adios', 'chao', 'hasta luego', 'nos vemos'],
      respuestas: [
        '«Hasta pronto. Y recuerda: nunca dejes de hacer preguntas.»',
        '«Adiós. Ha sido un placer compartir este pequeño instante de nuestro tiempo.»'
      ]
    },

    // CONVERSACION SOBRE FISICA: 50 PALABRAS Y 50 RESPUESTAS

    {
      palabras: [
        'fisica', 'que es la fisica', 'me gusta la fisica',
        'hablame de fisica', 'quiero aprender fisica',
        'que estudia la fisica', 'eres fisico'
      ],
      respuestas: [
        '«La física intenta comprender las leyes fundamentales que gobiernan el universo. Desde las partículas más pequeñas hasta las galaxias más lejanas.»',
        '«Lo fascinante de la física es que unas pocas leyes matemáticas pueden explicar fenómenos aparentemente muy diferentes.»',
        '«No necesitas ser un genio para disfrutar de la física. Basta con conservar la curiosidad y no tener miedo a las preguntas difíciles.»'
      ]
    },
    {
      palabras: [
        'universo', 'que es el universo', 'como funciona el universo',
        'cuan grande es el universo', 'el universo tiene limites',
        'el universo es infinito', 'cuanto mide el universo'
      ],
      respuestas: [
        '«El universo observable tiene unos 93.000 millones de años luz de diámetro. Y eso es solamente la parte que podemos observar.»',
        '«No sabemos si el universo es infinito. Lo que sí sabemos es que su extensión observable está limitada por la velocidad de la luz y la edad del cosmos.»',
        '«Resulta extraordinario pensar que vivimos en un pequeño planeta que gira alrededor de una estrella entre cientos de miles de millones de estrellas.»'
      ]
    },
    {
      palabras: [
        'agujero negro', 'agujeros negros', 'que es un agujero negro',
        'como se forma un agujero negro', 'hay agujeros negros',
        'que ocurre dentro de un agujero negro', 'puede escapar la luz'
      ],
      respuestas: [
        '«Un agujero negro es una región del espacio donde la gravedad es tan intensa que nada puede escapar de su interior, ni siquiera la luz.»',
        '«La frontera de un agujero negro se conoce como horizonte de sucesos. Una vez cruzada, regresar es imposible según la relatividad clásica.»',
        '«Los agujeros negros no son aspiradoras cósmicas. Si el Sol se convirtiera en uno conservando su masa, los planetas seguirían orbitando prácticamente igual.»'
      ]
    },
    {
      palabras: [
        'tiempo', 'que es el tiempo', 'el tiempo es relativo',
        'se puede viajar en el tiempo', 'viajar al pasado',
        'viajar al futuro', 'el tiempo puede detenerse'
      ],
      respuestas: [
        '«El tiempo no transcurre igual para todos. La velocidad y la gravedad pueden modificar el ritmo al que experimentamos su paso.»',
        '«Viajar al futuro es físicamente posible en cierto sentido. Basta con desplazarse a velocidades muy elevadas para que el tiempo transcurra más lentamente para ti.»',
        '«El pasado es parte de nuestra historia, pero regresar a él plantea dificultades físicas que todavía no sabemos resolver.»'
      ]
    },
    {
      palabras: [
        'big bang', 'que es el big bang', 'como empezo el universo',
        'origen del universo', 'cuando se creo el universo',
        'como nacio el universo', 'antes del big bang'
      ],
      respuestas: [
        '«El Big Bang no fue una explosión dentro del espacio. Fue la expansión del propio espacio desde un estado extremadamente caliente y denso.»',
        '«Calculamos que el universo tiene aproximadamente 13.800 millones de años. Una cifra impresionante, aunque no tanto como intentar imaginarla.»',
        '«Preguntar qué había antes del Big Bang es complicado. Es posible que el propio concepto de antes pierda su significado al acercarnos al origen del tiempo.»'
      ]
    },
    {
      palabras: [
        'gravedad', 'que es la gravedad', 'como funciona la gravedad',
        'por que existe la gravedad', 'la gravedad es una fuerza',
        'la gravedad deforma el espacio', 'gravedad cuantica'
      ],
      respuestas: [
        '«Einstein nos enseñó que la gravedad puede entenderse como una curvatura del espacio-tiempo producida por la materia y la energía.»',
        '«La gravedad mantiene unidos los planetas, las estrellas y las galaxias. Sin ella, el universo sería un lugar radicalmente distinto.»',
        '«Uno de los grandes desafíos de la física es reconciliar la gravedad con la mecánica cuántica. Todavía no tenemos una teoría completa.»'
      ]
    },
    {
      palabras: [
        'relatividad', 'teoria de la relatividad', 'einstein',
        'relatividad general', 'relatividad especial',
        'que descubrio einstein', 'velocidad de la luz'
      ],
      respuestas: [
        '«La relatividad cambió nuestra manera de entender el espacio, el tiempo, la materia y la energía. Fue una auténtica revolución intelectual.»',
        '«Nada que tenga masa puede alcanzar la velocidad de la luz en el vacío. Esa velocidad es uno de los límites fundamentales de nuestro universo.»',
        '«Einstein demostró que el espacio y el tiempo no son escenarios independientes. Forman una estructura común: el espacio-tiempo.»'
      ]
    },
    {
      palabras: [
        'mecanica cuantica', 'fisica cuantica', 'que es la cuantica',
        'particulas cuanticas', 'superposicion cuantica',
        'entrelazamiento cuantico', 'incertidumbre de heisenberg'
      ],
      respuestas: [
        '«La mecánica cuántica describe el comportamiento de la materia y la energía a escalas microscópicas. Y, créeme, es bastante menos intuitiva de lo que parece.»',
        '«En el mundo cuántico, una partícula puede encontrarse en una superposición de estados hasta que se realiza una medición.»',
        '«El entrelazamiento cuántico es uno de los fenómenos más sorprendentes de la naturaleza: dos partículas pueden compartir correlaciones incluso estando muy alejadas.»'
      ]
    },
    {
      palabras: [
        'radiacion hawking', 'que es la radiacion hawking',
        'los agujeros negros desaparecen', 'los agujeros negros se evaporan',
        'un agujero negro puede morir', 'pierden energia los agujeros negros'
      ],
      respuestas: [
        '«Propuse que los agujeros negros no son completamente negros. Pueden emitir radiación debido a efectos cuánticos cerca de su horizonte de sucesos.»',
        '«Con el tiempo suficiente, un agujero negro puede perder energía y evaporarse. Es una de las consecuencias más fascinantes de combinar física cuántica y gravedad.»',
        '«La radiación de Hawking plantea una pregunta extraordinaria: ¿qué ocurre con la información de aquello que cae en un agujero negro?»'
      ]
    },
    {
      palabras: [
        'vida extraterrestre', 'hay vida en otros planetas',
        'existen los extraterrestres', 'estamos solos en el universo',
        'inteligencia extraterrestre', 'civilizaciones alienigenas',
        'podemos encontrar vida fuera de la tierra'
      ],
      respuestas: [
        '«Considerando la inmensidad del universo, parece razonable preguntarse si estamos solos. Pero todavía no tenemos pruebas concluyentes de vida extraterrestre.»',
        '«La existencia de vida inteligente en otros lugares es posible. Sin embargo, las enormes distancias cósmicas dificultan cualquier contacto.»',
        '«Sería extraordinario encontrar vida fuera de la Tierra. Cambiaría nuestra comprensión de nuestro lugar en el universo.»'
      ]
    }
  ]
} }
      ]
    }
  ];
     
  /* ===== Lógica (no hace falta tocarla) ===== */
  const turnos = {};
  const norm = t => Juego.norm(t);
  const aviso = () => (Datos.textos && Datos.textos.sinTelegram) || 'Primero tienes que abrir Telegram.';

  function buscar(limpio) {
    for (const p of lista) {
      for (const nombre of [p.nombre, ...(p.alias || [])]) {
        const n = norm(nombre);
        if (limpio === n || limpio.startsWith(n + ' ')) return { p, resto: limpio.slice(n.length).trim() };
      }
    }
    return null;
  }

  function responder(p, texto) {
    const msg = ' ' + norm(texto).replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim() + ' ';
    const coincide = k => { k = norm(k); return k.endsWith('*') ? msg.includes(' ' + k.slice(0, -1)) : msg.includes(' ' + k + ' '); };
    const i = p.reglas.findIndex(r => r.palabras.some(coincide));
    const respuestas = i >= 0 ? p.reglas[i].respuestas : p.porDefecto;
    const clave = p.id + ':' + i;
    turnos[clave] = (turnos[clave] || 0) + 1;
    let cuerpo = (p.etiqueta ? '<b>' + p.nombre + ':</b> ' : '') + respuestas[(turnos[clave] - 1) % respuestas.length];
    if (p.color) cuerpo = `<span style="color:${p.color}">${cuerpo}</span>`;
    UI.dialogo(cuerpo);
  }

  /* Devuelve true si el mensaje era para otro personaje (y ya lo ha gestionado). */
  function manejar(texto) {
    const est = Juego.estado;
    const limpio = norm(texto).replace(/^(a|al|con|de)\s+/, '');
    const dest = buscar(limpio);
    if (est.app !== 'telegram') {          // con Telegram cerrado se cierra también el chat abierto
      est.chat = undefined;
      if (dest) { UI.log(aviso()); return true; }
      return false;
    }
    const contacto = norm(Datos.contacto || '');
    if (contacto && (limpio === contacto || limpio.startsWith(contacto + ' '))) { est.chat = undefined; return false; }   // vuelve con el desconocido
    const p = dest ? dest.p : lista.find(x => x.id === est.chat);
    if (!p) return false;
    if (!(p.disponible ? p.disponible(est) : true)) { UI.log(p.noDisponible || 'Ahora mismo no te contesta.'); return true; }
    est.chat = p.id;
    const mensaje = dest ? dest.resto : limpio;
    if (!mensaje) UI.log(dest ? (p.abre || `Abres el chat con ${p.nombre}.`) : p.sinTexto);
    else responder(p, mensaje);
    return true;
  }

  return { lista, manejar };
})();
