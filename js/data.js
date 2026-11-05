/* Contenido del juego: textos, estancias, objetos y finales. Aquí se edita la narrativa. */
const Datos = {
  codigo: '885',
  contacto: 'nombre',          // nombre del contacto de Telegram al que hay que escribir
  exigirCafe: true,            // si es true, móvil y ordenador no se pueden usar hasta tomarse el café
  destinoAlias: { pc: 'despacho', ordenador: 'despacho', dormitorio: 'habitacion' },
  /* Textos de la secuencia de inicio. {contacto} y {dispositivo} se sustituyen solos. */
  textos: {
    sinCafe: 'Antes de ponerte a mirar nada, necesitas un café.',
    cafeLejos: 'La cafetera está en la cocina.',
    cafeHecho: 'Preparas la cafetera y la cocina se llena de olor a café recién hecho.',
    cafeRepetido: 'Ya has preparado el café.',
    cafeNoHay: 'No tienes ningún café preparado.',
    cafeBebido: 'Te bebes el café a sorbos y poco a poco te vas espabilando. Puede ser un buen momento para revisar el correo.',
    cafeYaBebido: 'Ya te has tomado el café.',
    enciende: 'Enciendes {dispositivo}. Ves dos accesos: la red social «Life» y «Telegram».',
    sinDispositivo: 'Primero tienes que encender el móvil o el ordenador.',
    lifeNuevo: 'Entras en Life. Tienes un mensaje sin leer.',
    lifeVacio: 'Entras en Life. No tienes mensajes nuevos.',
    sinMensaje: 'No hay ningún mensaje que leer.',
    mensajeIntro: 'El mensaje no tiene remitente conocido. Dice así:',
    mensaje: '«Sé muy bien lo que hiciste. Y tengo las fotos para demostrarlo. Si no quieres que salgan a la luz, entra en Telegram y escríbeme a {contacto} de inmediato.»',
    telegramBloqueado: 'Telegram está protegido con un código de 3 cifras. Hace tiempo que no lo usas y no te acuerdas, pero sí recuerdas que aparece en el cuadro que hay en la pared.',
    pideCodigo: 'Escribe el código de 3 cifras (o «cancelar»):',
    codigoMal: 'Código incorrecto. Inténtalo de nuevo o escribe «cancelar».',
    telegramAbre: 'Telegram se abre. Ya no te volverá a pedir el código.',
    telegramListo: 'Telegram está abierto.',
    telegramEscribe: 'Tienes que escribirle a {contacto}.',
    escribirSinApp: 'Primero tienes que abrir Telegram.',
    escribirSinMensaje: 'No sabes a quién escribir.',
    escribirYa: 'No tienes nada más que decirle por ahora.',
    escribirOk: 'Le escribes con dedos temblorosos. Al instante aparecen tres puntitos...',
    respuesta: '«Has tardado. Veo que sabes seguir instrucciones. Vamos a ver hasta dónde llegas.»',
    /* Orden 1: caldera, radiador y foto */
    pedirCaldera: '«Empecemos con algo sencillo. Sube la caldera a 70 grados. Cuando esté caliente, apoya la mano en el radiador durante un minuto. Después, hazte una foto de la mano y mándamela.»',
    calderaSubir: 'Tienes que escribir el ajuste con el formato de la nota.',
    calderaYa: 'La caldera ya está a 70 grados y el panel está bloqueado.',
    radiadorFrio: 'Apoyas la mano en el radiador. Está templado, nada más.',
    radiadorMano: 'Apoyas la mano sobre el radiador y la mantienes ahí un minuto entero. Cuando la retiras, la tienes roja.',
    radiadorYa: 'Ya tienes la mano roja. No hace falta insistir.',
    fotoManoNormal: 'Haces una foto de tu mano. No tiene nada de especial.',
    fotoManoRoja: 'Haces una foto de tu mano enrojecida.',
    sinTelegram: 'Primero tienes que abrir Telegram.'
  },
  imagenSala: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80",
  imagenes: { movil: 'img/movil.svg', ordenador: 'img/ordenador.svg', life: 'img/life.svg', telegram: 'img/telegram.svg' },
  intro: [
    ['narrativo', 'Despierta... Giras a un lado y a otro de la cama, abrazada a la almohada con fuerza, abrigada del frío. Tu único esfuerzo es abrir los ojos. Tal vez, después de tomarte un café, reunas energía suficiente como para procrastinar con mayor entusiasmo.']
  ],
  estancias: {
    salon: { nombre: 'Salón', imagen: 'img/salon.svg', desc: 'Estancia principal. Hay un sofá, una biblioteca, radiadores y un mueble antiguo.' },
    habitacion: { nombre: 'Habitación', imagen: 'img/habitacion.png', desc: 'Tu habitación es tu pequeño refugio, un espacio reservado a la intimidad y alejado del resto del mundo. La cama ocupa buena parte de la estancia, invitándote al descanso, mientras el armario permanece cerrado, guardando discretamente su contenido. Un espejo refleja la habitación desde uno de sus rincones, devolviéndote una imagen familiar de ti mismo. Junto a él, una cómoda con un cajón completa el mobiliario. Todo parece estar en su sitio. Es un lugar cotidiano, tranquilo y exclusivamente tuyo, donde cada objeto forma parte de tu rutina.' },
    despacho: { nombre: 'Despacho', imagen: 'img/despacho.svg', desc: 'Zona de trabajo con un ordenador de sobremesa, escritorio, juegos de mesa y un cuadro.' },
    cocina: { nombre: 'Cocina', imagen: 'img/cocina.svg', desc: 'Equipada con cocina, cafetera, nevera y una caldera con panel digital.' },
    bano: { nombre: 'Baño', imagen: 'img/bano.svg', desc: 'Dispone de inodoro, lavabo, ducha y un pequeño mueble.' },
    terraza: { nombre: 'Terraza', imagen: 'img/terraza.svg', desc: 'Espacio exterior con macetas y una tumbona cómoda.' }
  },
  /* Descripciones provisionales de «examinar»: reescribir a gusto. */
  objetos: {
    salon: { sofa: 'Un sofá mullido, con una manta arrugada.', biblioteca: 'La mayoría de los libros ya los has leído. De entre todos, sobresale el que te estás leyendo ahora: las perversiones de Emily.', radiador: 'Un radiador de hierro, ahora apagado.', luz: 'Una lámpara de pie con luz cálida.', mueble: 'Un mueble antiguo de madera oscura. Encima hay un tablero de ajedrez con una partida a medias.', tablero: '', libro: 'Las perversiones de Emily. Es el libro que te estás leyendo ahora.' },
    habitacion: { cama: 'La cama deshecha, aún tibia.', armario: 'Un armario de dos puertas, repleto de ropa.', espejo: 'Tu reflejo te devuelve una cara cansada.', comoda: 'Una cómoda de madera con un cajón.' },
    despacho: { ordenador: 'Un ordenador de sobremesa. Lo mismo que el móvil, pero con pantalla grande.', escritorio: 'Un escritorio con papeles revueltos.', 'juegos de mesa': 'Varias cajas de juegos de mesa, apiladas.', cuadro: 'Un panel lleno de rosas y espinas, con placas numeradas.' },
    cocina: { cocina: 'Una cocina limpia, sin nada al fuego.', cafetera: 'Una cafetera que huele a café viejo.', nevera: '', caldera: '' },
    bano: { inodoro: 'Un inodoro corriente.', lavabo: 'Un lavabo con el grifo goteando.', ducha: 'Una ducha con mampara.', mueble: 'Un pequeño mueble con toallas.' },
    terraza: { macetas: 'Macetas con plantas algo secas.', tumbona: 'Una tumbona cómoda, al sol.' }
  },
  alias: { perversiones: 'libro', libreria: 'biblioteca', ajedrez: 'tablero', radiadores: 'radiador', juegos: 'juegos de mesa', maceta: 'macetas', pc: 'ordenador' },
  /* Comandos con respuesta de texto. Sin `estancia`/`objetos`: funcionan en cualquier lugar.
     Con ellos: solo funcionan en esa estancia y nombrando uno de sus objetos. */
  comandosTexto: [
    { verbos: ['bostezar', 'bosteza'], texto: 'Te llevas la mano a la boca y bostezas. Esta situación, más que inquietarte, te da sueño.' },
    { verbos: ['gritar', 'grita'], texto: 'Gritas de impotencia, pero nadie parece oírte (o quizá sí).' },
    { verbos: ['limpiar', 'limpia'], estancia: 'bano', objetos: ['inodoro', 'taza', 'wc'], texto: 'Te pones de rodillas y limpias el borde de la taza.', fuera: 'No ves ningún inodoro por aquí.' }
  ],
  /* Puzzle de ajedrez. `soluciones`: jugadas ganadoras en minúsculas, «origen destino». */
  ajedrez: {
    imagen: 'img/tablero.png',
    soluciones: ['c5 f2'],
    descripcion: 'Una partida de ajedrez a medias. Puedes ganar con un solo movimiento. Escribe la jugada con la casilla de origen y la de destino, por ejemplo «A2 B3».',
    fallo: 'Ese movimiento no te da la victoria. Devuelves las piezas a su sitio.',
    exito: 'Mueves la pieza y la partida queda ganada. Al apoyar la mano en el mueble, el tablero cojea: hay algo debajo. Lo levantas y encuentras una llave.',
    yaResuelto: 'Ya has ganado esta partida.'
  },
  /* Imágenes de objetos: se muestran en el visor al examinarlos («cerrar» vuelve a la estancia). */
  imagenesObjetos: { caldera: 'img/caldera.svg', cuadro: 'img/cuadro.svg', libro: 'img/libro-emily.svg' },
  /* Objetos que se pueden coger («coger [objeto]»). */
  cogibles: [
    { item: 'libro', nombres: /libro|perversion|emily/, estancia: 'salon',
      texto: 'Coges «Las perversiones de Emily» de la biblioteca.', yaTienes: 'Ya tienes el libro contigo.' }
  ],
  verduras: ['zanahorias', 'judías verdes', 'tomates', 'un pimiento rojo'],
  /* Un final por cada valor del contador (0-4) y el de las consecuencias (5). */
  finales: [
    'Final 1 (texto pendiente).', 'Final 2 (texto pendiente).', 'Final 3 (texto pendiente).',
    'Final 4 (texto pendiente).', 'Final 5 (texto pendiente).', 'Final 6: consecuencias (texto pendiente).'
  ]
};
