/* Contenido del juego: textos, estancias, objetos y finales. Aquí se edita la narrativa. */
const Datos = {
  codigo: '885',
  contacto: 'nombre',          // nombre del contacto de Telegram al que hay que escribir
  exigirCafe: true,            // si es true, móvil y ordenador no se pueden usar hasta tomarse el café
  destinoAlias: { nevera: 'cocina', congelador: 'cocina', pc: 'despacho', ordenador: 'despacho', dormitorio: 'habitacion' },
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
    pedirCaldera: '«Empecemos con algo sencillo. Desnúdate. Sube la caldera a 70 grados. Cuando esté caliente, apoya la mano en el radiador durante un minuto. Después, hazte una foto de la mano y mándamela.»',
    calderaSubir: 'Tienes que escribir el ajuste con el formato de la nota.',
    calderaYa: 'La caldera ya está a 70 grados y el panel está bloqueado.',
    radiadorFrio: 'Apoyas la mano en el radiador. Está templado, nada más.',
    radiadorMano: 'Apoyas la mano sobre el radiador y la mantienes ahí un minuto entero. Cuando la retiras, la tienes roja.',
    radiadorYa: 'Ya tienes la mano roja. No hace falta insistir.',
    fotoManoNormal: 'Haces una foto de tu mano. No tiene nada de especial.',
    fotoManoRoja: 'Haces una foto de tu mano enrojecida.',
    sinTelegram: 'Primero tienes que abrir Telegram.',
    pedirHielo: '«Prueba 2. Coge un par de cubitos de hielo del congelador, sal a la terraza y grábate un vídeo metiéndote uno en la boca. Después, mándamelo.»',
    congeladorYa: 'El congelador ya está abierto.',
    congeladorLejos: 'El congelador está en la cocina.',
    sinHielo: 'No tienes ningún cubito a mano.',
    grabando: 'Enciendes la cámara del móvil y empiezas a grabar.',
    yaGrabando: 'Ya estás grabando.',
    sinGrabar: 'No estás grabando nada.',
    corteVideo: 'Dejas de grabar.',
    cubitoSinGrabar: 'Te metes un cubito en la boca. Está helado, pero nadie lo ha visto.',
    videoCubito: 'Te metes un cubito de hielo en la boca delante de la cámara. Está helado. Detienes la grabación.',
    sinVideo: 'No tienes ningún vídeo que enviar.',
    pedirVerduras: '«Prueba 3. Dime qué verduras tienes en la nevera.»',
    pedirCalabacin: '«Un calabacín. Qué interesante. Grábate un vídeo mordiéndolo y mándamelo.»',
    sinCalabacin: 'No tienes ningún calabacín a mano.',
    calabacinSinGrabar: 'Muerdes el calabacín. Sabe a poco, y nadie lo ha visto.',
    videoCalabacin: 'Das un mordisco al calabacín delante de la cámara. Detienes la grabación.',
    pedirRotulador: '«Prueba 4. Escríbete en el brazo, con un rotulador: hago lo que me pide. Después, mándame una foto.»',
    cajonCerrado: 'El cajón está cerrado con llave.',
    cajonAbre: 'Abres el cajón con la llave.',
    cajonYa: 'El cajón ya está abierto.',
    cajonContenido: 'Dentro del cajón hay un rotulador.',
    cajonVacio: 'El cajón está vacío.',
    sinRotulador: 'No tienes nada con lo que escribir.',
    escribeBrazo: 'Destapas el rotulador y te escribes en el antebrazo, con letra temblorosa: «Hago lo que me pide».',
    brazoYa: 'Ya te has escrito en el brazo.',
    fotoBrazoNormal: 'Haces una foto de tu brazo. No tiene nada escrito.',
    fotoBrazoEscrito: 'Haces una foto de tu brazo con la frase escrita.',
    recuerdaCaldera: '«Te he pedido que te desnudes, subas la caldera a 70 grados, apoyes la mano en el radiador durante un minuto y me mandes una foto de la mano. Hazlo bien.»',
    recuerdaHielo: '«Te he pedido un vídeo en la terraza, metiéndote un cubito de hielo en la boca. Un vídeo, no otra cosa.»',
    recuerdaCalabacin: '«Te he pedido que me digas qué verduras tienes en la nevera. Después ya te diré qué hacer con ellas.»',
    recuerdaCalabacinVideo: '«Te he pedido un vídeo mordiendo el calabacín. Un vídeo, no otra cosa.»',
    recuerdaRotulador: '«Te he pedido que te escribas una frase en el brazo con un rotulador y me mandes una foto. Hazlo bien.»',
    recuerdaGenerico: '«Eso no es lo que te he pedido.»',
    recuerdaDesnudarse: '«Te he dicho que te desnudaras. Hazlo y vuelve a mandármela.»',
    desnudarse: 'Con las manos temblorosas, te quitas la ropa.',
    yaDesnuda: 'Ya estás desnuda.',
    policiaSinMotivo: 'No ha pasado nada que merezca llamar a la policía.'
  },
  imagenSala: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80",
  imagenes: { movil: 'img/movil.svg', ordenador: 'img/ordenador.svg', life: 'img/life.svg', telegram: 'img/telegram.svg' },
  intro: [
    ['narrativo', '<p>Despierta...</em></p><p></p><p>Giras a un lado y a otro de la cama, abrazada a la almohada con fuerza, abrigada del frío.</p> Tu único esfuerzo es abrir los ojos. Tal vez, después de tomarte un café, reunas energía suficiente como para procrastinar con mayor entusiasmo.']
  ],
  estancias: {
    salon: { nombre: 'Salón', imagen: 'img/salon.png', desc: 'Estancia principal. Hay un sofá, una biblioteca, radiadores y un mueble antiguo.' },
    habitacion: { nombre: 'Habitación', imagen: 'img/habitacion.png', desc: 'Tu espacio privado. Contiene la cama, el armario, un espejo y una cómoda con cajón.' },
    despacho: { nombre: 'Despacho', imagen: 'img/despacho.svg', desc: 'Zona de trabajo con un ordenador de sobremesa, escritorio, juegos de mesa y un cuadro.' },
    cocina: { nombre: 'Cocina', imagen: 'img/cocina.svg', desc: 'Equipada con cocina, cafetera, nevera y una caldera con panel digital.' },
    bano: { nombre: 'Baño', imagen: 'img/bano.svg', desc: 'Dispone de inodoro, lavabo, ducha y un pequeño mueble.' },
    terraza: { nombre: 'Terraza', imagen: 'img/terraza.svg', desc: 'Espacio exterior con macetas y una tumbona cómoda.' }
  },
  /* Descripciones provisionales de «examinar»: reescribir a gusto. */
  objetos: {
    salon: { sofa: 'Un sofá mullido, con una manta arrugada.', biblioteca: 'La mayoría de los libros ya los has leído. De entre todos, sobresale el que te estás leyendo ahora: las perversiones de Emily.', radiador: 'Un radiador de hierro, ahora apagado.', luz: 'Una lámpara de pie con luz cálida.', mueble: 'Un mueble antiguo de madera oscura. Encima hay un tablero de ajedrez con una partida a medias.', tablero: '', libro: 'Las perversiones de Emily. Es el libro que te estás leyendo ahora.' },
    habitacion: { cama: 'La cama deshecha, aún tibia.', armario: 'Un armario de dos puertas, repleto de ropa.', espejo: 'Tu reflejo te devuelve una cara cansada.', comoda: 'Una cómoda de madera con un cajón.', cajon: 'Un cajón de la cómoda.' },
    despacho: { ordenador: 'Un ordenador de sobremesa. Lo mismo que el móvil, pero con pantalla grande.', escritorio: 'Un escritorio con papeles revueltos.', 'juegos de mesa': 'Varias cajas de juegos de mesa, apiladas.', cuadro: 'Un panel lleno de rosas y espinas, con placas numeradas.' },
    cocina: { cocina: 'Una cocina limpia, sin nada al fuego.', cafetera: 'Una cafetera que huele a café viejo.', nevera: '', congelador: 'Un congelador pequeño, con la puerta cubierta de escarcha.', caldera: '' },
    bano: { inodoro: 'Un inodoro corriente.', lavabo: 'Un lavabo con el grifo goteando.', ducha: 'Una ducha con mampara.', mueble: 'Un pequeño mueble con toallas.' },
    terraza: { macetas: 'Macetas con plantas algo secas.', tumbona: 'Una tumbona cómoda, al sol.' }
  },
  alias: { verduras: 'nevera', alimentos: 'nevera', comida: 'nevera', cajones: 'cajon', perversiones: 'libro', libreria: 'biblioteca', ajedrez: 'tablero', radiadores: 'radiador', juegos: 'juegos de mesa', maceta: 'macetas', pc: 'ordenador' },
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
      texto: 'Coges «Las perversiones de Emily» de la biblioteca.', yaTienes: 'Ya tienes el libro contigo.' },
    { item: 'vaso con hielo', nombres: /cubito|hielo/, estancia: 'cocina', requiere: 'congelador',
      bloqueado: 'No ves hielo a mano. Quizá en el congelador.', fuera: 'No ves ningún hielo por aquí.',
      texto: 'Coges los dos cubitos y los metes en un vaso.', yaTienes: 'Ya tienes el vaso con hielo.' },
    { item: 'calabacín', nombres: /calabac/, estancia: 'cocina',
      texto: 'Coges un calabacín de la nevera.', yaTienes: 'Ya tienes el calabacín.' },
    { item: 'rotulador', nombres: /rotulador/, estancia: 'habitacion', requiere: 'cajon',
      bloqueado: 'El cajón está cerrado con llave.', texto: 'Coges el rotulador del cajón.', yaTienes: 'Ya tienes el rotulador.' }
  ],
  verduras: ['huevos', 'leche', 'queso', 'una bandeja de pollo', 'zanahorias', 'judías verdes', 'tomates', 'un calabacín', 'pimientos'],
  /* Un final por cada valor del contador (0-4) y el de las consecuencias (5). */
  finales: [
    'Has ganado la partida.', 'Final 2 (texto pendiente).', 'Final 3 (texto pendiente).',
    'Final 4 (texto pendiente).', 'Final 5 (texto pendiente).', 'Tu agresor llega a casa y... Has perdido la partida.'
  ]
};
