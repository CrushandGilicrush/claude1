/* Contenido del juego: textos, estancias, objetos y finales. Aquí se edita la narrativa. */
const Datos = {
  codigo: '885',
  contacto: 'nombre',          // nombre del contacto de Telegram al que hay que escribir
  exigirCafe: true,            // si es true, móvil y ordenador no se pueden usar hasta tomarse el café
  destinoAlias: { nevera: 'cocina', congelador: 'cocina', pc: 'despacho', ordenador: 'despacho', dormitorio: 'habitacion' },
  /* Textos de la secuencia de inicio. {contacto} y {dispositivo} se sustituyen solos. */
  textos: {
    sinCafe: 'Antes de ponerte a mirar nada, ve a prepararte un café.',
    cafeLejos: 'La telequinesis no es tu fuerte. Si quieres un café, te sugiero ir a la cocina.',
    cafeHecho: 'Preparas la cafetera y la cocina se llena de un olor a café recién hecho.',
    cafeRepetido: 'Ya has preparado un café. No tomes más',
    cafeNoHay: 'No tienes ningún café preparado.',
    cafeBebido: 'Te bebes el café a sorbos y poco a poco te vas espabilando. Puede ser un buen momento para entrar en Fetlife.',
    cafeYaBebido: 'Ya te has tomado el café.',
    enciende: 'Enciendes {dispositivo}. Ves dos accesos directos en la pantalla de inicio: «Fetlife» y «Telegram».',
    sinDispositivo: 'Primero tienes que encender el móvil o el ordenador.',
    lifeNuevo: 'Entras en fetlife. Ves que uno de tus amigos ha comentado el estatus de un tal Lapso: <em>Menuda porquería de juego</em> le dice. No sientes curiosidad por el tema, así que te fijas en el cirulito rojo que te notifica que tienes un mensaje sin leer.',
    lifeVacio: 'Entras en Fetlife. No tienes mensajes nuevos.',
    sinMensaje: 'No tienes mensajes nuevos.',
    mensajeIntro: 'El mensaje es de un desconocido llamado 02E4E3E.  Encabeza el mensaje una foto borrosa. Curiosa, antes de leer nada, desactivas la censura para poder verla. De pronto sientes una punzada en el estómago y tus pulsaciones se aceleran: la foto es tuya, o, más bien, sales tú en una situación y en unas condiciones que jamás debiron ser registradas de modo alguno. Nerviosa decides leer el mensaje:',
    mensaje: '«Te confieso que es de mis fotos favoritas. Tengo otras tuyas, pero ninguna como esta. No es lo degradante de la escena, sino la expresión de tu cara. Intuyo que preferirías mantener estas fotos alejadas de tus amigos, familiares y compañeros de trabajo. Si es así, entra en Telegram y escríbeme a {contacto} de inmediato»',
    telegramBloqueado: 'Telegram está protegido con un código de 3 cifras. Hace tiempo que no lo usas y no consigues recordarlo, pero sabes que aparece en el cuadro que hay en la pared.',
    pideCodigo: 'Escribe el código de 3 cifras (o «cancelar»):',
    codigoMal: 'Código incorrecto. Inténtalo de nuevo o escribe «cancelar».',
    telegramAbre: 'Telegram se abre. Ya no te volverá a pedir el código.',
    telegramListo: 'Telegram está abierto.',
    telegramEscribe: 'Tienes que escribir a {contacto}.',
    escribirSinApp: 'Primero tienes que abrir Telegram.',
    escribirSinMensaje: 'No sabes a quién escribir.',
    escribirYa: 'No tienes nada más que decirle por ahora.',
    escribirOk: 'Escribes nerviosa, pensando con torpeza en las opciones que tienes y dudando si estás haciendo lo correcto o no. Al instante aparecen parpadeando tres puntitos...',
    respuesta: '«Mientras esperaba que me escribieras, estaba pensando qué estarías dispuesta a hacer para que no compartiera estas fotos. Estoy seguro de que estás dispuesta a complacerme»',
    /* Orden 1: caldera, radiador y foto */
    pedirCaldera: '«Para empezar te quiero como en la foto: desnuda, así que ve quitándote la ropa. Ahora. Luego quiero que subas la temperatura de la caldera a 70 grados, te acerques a un radiador y apoyes el culo en él durante un minuto. Después, hazte una foto del culo y mándamela.»',
    calderaSubir: 'Tienes que escribir el ajuste con el formato de la nota.',
    calderaYa: 'La caldera ya está a 70 grados y el panel está bloqueado.',
    radiadorFrio: 'Apoyas el culo en el radiador. Está templado, nada más.',
    radiadorMano: 'Apoyas el culo sobre el radiador y lo mantienes ahí un minuto entero. Quema mucho más de lo que imaginabas y te cuesta manterno ahí pegado. Cuando lo retiras, lo tienes completamente rojo.',
    radiadorYa: 'Ya tienes el culo demasiado sensible como para repetirlo',
    fotoManoNormal: 'Te haces una foto del culo. Una más de las muchas que tienes.',
    fotoManoRoja: 'Haces una foto de tu culo enrojecido.',
    sinTelegram: 'Primero tienes que abrir Telegram.',
    pedirHielo: '«Me gusta la foto. Se te ha quemado bastante, así que vamos refrescarlo un poco. Ve a la nevera y coge un par de cubitos de hielo del congelador, sal a la terraza y grábate un vídeo metiéndote los dos cubitos por el culo. Hazlo bien o lo repetirás. Que se te vea la cara. Después, mándamelo.»',
    congeladorYa: 'El congelador ya está abierto.',
    congeladorLejos: 'El congelador está en la cocina.',
    sinHielo: 'No tienes ningún cubito a mano.',
    grabando: 'Enciendes la cámara del móvil, lo apoyas en el suelo y comienzas a grabar.',
    yaGrabando: 'Ya estás grabando.',
    sinGrabar: 'No estás grabando nada.',
    corteVideo: 'Dejas de grabar.',
    cubitoSinGrabar: 'Te metes un cubito en el culo. Está helado, pero, si no lo grabas, lo estás pasando mal para nada.',
    videoCubito: 'Te sientas en la silla, de espalda a la calle, por si alguien estuviera mirando. Estás incómoda y deseas hacerlo rápido. Sacas un cubito de hielo del vaso, separas la pierna y apoyas una de ellas en la otra silla. Empujas Poco a poco va entrando hasta que finalmente queda atrapado dentro de ti. Duele. Coges el otro cubito y repites el proceso, esta vez mucho más rápido. Notas una presión muy fuerte en la parte baja de tu cuerpo. Molesta, te levantas y detienes la grabación.',
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
    desnudarse: 'Con las manos temblorosas, te quitas toda la ropa. Estás completamente desnuda, vulnerable.',
    yaDesnuda: 'Ya estás desnuda.',
    policiaSinMotivo: 'No ha pasado nada que merezca llamar a la policía.'
  },
  imagenSala: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80",
  imagenes: { movil: 'img/movil.svg', ordenador: 'img/ordenador.svg', life: 'img/life.svg', telegram: 'img/telegram.svg' },
  intro: [
    ['narrativo', 'Despierta. Está amaneciendo,  pero cuesta renunciar al calor de la manta. Te gusta remolonear. Has planeado procrastinar todo el día, pero antes de volcarte a tan dura tarea, quieres echar un vistazo a life y ver qué se cuece por ahí. Pero primero vas a tener que levantarte, y antes de ir a lo que tú llamas despacho y abrir el ordenador, quieres tomarte un café.']
  ],
  estancias: {
    salon: { nombre: 'Salón', imagen: 'img/salon.png', desc: 'Estancia principal. Hay un sofá, una biblioteca, radiadores y un mueble antiguo.' },
    habitacion: { nombre: 'Habitación', imagen: 'img/habitacion2.png', desc: 'Tu espacio privado. Contiene la cama, el armario, un espejo y una cómoda con cajón.' },
    despacho: { nombre: 'Despacho', imagen: 'img/despacho.png', desc: 'Zona de trabajo con un ordenador de sobremesa, escritorio, juegos de mesa y un cuadro.' },
    cocina: { nombre: 'Cocina', imagen: 'img/cocina1.png', desc: 'Equipada con cocina, cafetera, nevera y una caldera con panel digital.' },
    bano: { nombre: 'el baño', imagen: 'img/baño.png', desc: 'Se trata de una estancia pequeña pero confortable, iluminada por una luz tenue que apenas consigue disipar las sombras de los rincones. A un lado se encuentra el inodoro, junto al lavabo, cuya superficie de porcelana conserva algunas marcas de uso. Sobre él, un espejo refleja la estancia con claridad. Bajo este, pegado a la pared, hay un mueble de baño con varios compartimentos donde se guardan los productos de higiene y otros objetos cotidianos. Al fondo, la ducha, protegida por una mampara de cristal, permanece silenciosa. ' },
    terraza: { nombre: 'Terraza', imagen: 'img/terraza.png', desc: 'Espacio exterior con macetas y una tumbona cómoda.' }
  },
  /* Descripciones provisionales de «examinar»: reescribir a gusto. */
  objetos: {
    salon: { sofa: 'Un sofá mullido, con una manta arrugada.', biblioteca: 'La mayoría de los libros ya los has leído. De entre todos, sobresale el que te estás leyendo ahora: las perversiones de Emily.', radiador: 'Un radiador de hierro, ahora apagado.', luz: 'Una lámpara de pie con luz cálida.', mueble: 'Un mueble antiguo de madera oscura. Encima hay un tablero de ajedrez con una partida a medias.', tablero: '', libro: 'Las perversiones de Emily. Es el libro que te estás leyendo ahora.' },
    habitacion: { cama: 'La cama deshecha, aún tibia.', armario: 'Un armario de dos puertas, repleto de ropa.', espejo: 'Tu reflejo te devuelve una cara cansada.', comoda: 'Una cómoda de madera con un cajón.', cajon: 'Un cajón de la cómoda.' },
    despacho: { ordenador: 'Un ordenador de sobremesa. Lo mismo que el móvil, pero con pantalla grande.', escritorio: 'Un escritorio con papeles revueltos.', 'juegos de mesa': 'Varias cajas de juegos de mesa, apiladas.', cuadro: 'Un panel lleno de rosas y espinas, con placas numeradas.' },
    cocina: { cocina: 'Una cocina limpia, sin nada al fuego.', cafetera: 'Una cafetera que huele a café viejo.', nevera: '', congelador: 'Un congelador pequeño, con la puerta cubierta de escarcha.', caldera: '' },
    bano: { inodoro: 'te acercas a revisar el inodoro y detectas lo que parece una pequeña mancha. Al acertcarte más compruebas que, escrito con rotulador, pone: Lapso meó aquí. Y te preguntas: ¿quién coño es Lapso? ¿Lo tendré en telegram?', lavabo: 'Un lavabo con el grifo goteando.', espejo: 'un espejo limpio y reluciente', ducha: 'Una ducha con mampara.', mueble: 'Un pequeño mueble con toallas.' },
    terraza: { macetas: 'Macetas con plantas algo secas.', tumbona: 'Una tumbona cómoda, al sol.' }
  },
  alias: { verduras: 'nevera', alimentos: 'nevera', comida: 'nevera', cajones: 'cajon', perversiones: 'libro', libreria: 'biblioteca', ajedrez: 'tablero', radiadores: 'radiador', juegos: 'juegos de mesa', maceta: 'macetas', pc: 'ordenador' },
  /* Comandos con respuesta de texto. Sin `estancia`/`objetos`: funcionan en cualquier lugar.
     Con ellos: solo funcionan en esa estancia y nombrando uno de sus objetos. */
  comandosTexto: [
    { verbos: ['bostezar', 'bosteza'], texto: 'Te llevas la mano a la boca y bostezas. Esta situación, más que inquietarte, te da sueño.' },
    { verbos: ['bostezar', 'bosteza', 'bostezas'], texto: 'Te llevas la mano a la boca y bostezas. Esta situación, más que inquietarte, te da sueño.' },
{ verbos: ['reir', 'reirse', 'reirme', 'sonreir'], texto: 'Se te escapa una risa. No parece que hayas entendido todavía la gravedad de la situación.' },
{ verbos: ['llorar', 'llorarme', 'sollozar', 'gimotear'], texto: 'Las lágrimas empiezan a recorrer tus mejillas. Procura recomponerte; todavía no hemos terminado.' },
{ verbos: ['gritar', 'chillar', 'vociferar', 'berrear'], texto: 'Lanzas un grito al aire. El ruido no cambia absolutamente nada.' },
{ verbos: ['susurrar', 'murmurar', 'musitar'], texto: 'Murmuras algo entre dientes. Si tienes algo que decir, quizá deberías hacerlo con más convicción.' },
{ verbos: ['suspirar', 'resoplar'], texto: 'Dejas escapar un largo suspiro. Parece que empiezas a comprender que las cosas no siempre salen como deseas.' },
{ verbos: ['silbar', 'pitar', 'tararear'], texto: 'Te pones a silbar distraídamente. Curiosa manera de disimular tu nerviosismo.' },
{ verbos: ['cantar', 'entonar'], texto: 'Te arrancas a cantar. No tienes precisamente una voz privilegiada, pero al menos tienes iniciativa.' },
{ verbos: ['bailar', 'danzar', 'menearse'], texto: 'Empiezas a bailar unos pasos improvisados. No parece el momento más oportuno, pero tú sabrás.' },
{ verbos: ['saltar', 'brincar', 'botar'], texto: 'Das unos cuantos saltos. Quizá pretendes liberar tensión, aunque el resultado es bastante ridículo.' },
{ verbos: ['sentarse', 'sentarme', 'sentar'], texto: 'Te sientas y adoptas una postura aparentemente tranquila. No confundas descansar con tener el control.' },
{ verbos: ['levantarse', 'levantarme', 'incorporarse'], texto: 'Te incorporas lentamente. Al menos parece que todavía conservas cierta iniciativa.' },
{ verbos: ['arrodillarse', 'arrodillarme', 'arrodillar'], texto: 'Te arrodillas. No sabes muy bien por qué lo has hecho, pero la postura resulta bastante elocuente.' },
{ verbos: ['tumbarse', 'tumbarme', 'acostarse', 'acostarme', 'echarse'], texto: 'Te tumbas y miras al techo. Una excelente manera de dejar que los problemas sigan acumulándose.' },
{ verbos: ['estirarse', 'estirarme', 'desperezarse'], texto: 'Estiras los brazos y desperezas el cuerpo. Parece que te has olvidado por un instante de todo lo demás.' },
{ verbos: ['rascarse', 'rascarme', 'rascar'], texto: 'Te rascas distraídamente. Un gesto insignificante para una situación que dista mucho de serlo.' },
{ verbos: ['peinarse', 'peinarme', 'peinar'], texto: 'Te arreglas el pelo con los dedos. La apariencia es importante, aunque no siempre suficiente.' },
{ verbos: ['mirarse', 'mirarme', 'observarse', 'observarme'], texto: 'Te observas detenidamente. Quizá buscas en tu reflejo alguna respuesta que todavía no has encontrado.' },
{ verbos: ['guinar', 'guinar el ojo', 'parpadear'], texto: 'Guiñas un ojo con cierta picardía. No sé si pretendes resultar convincente, pero tendrás que esforzarte un poco más.' },
{ verbos: ['toser', 'carraspear', 'aclararse la garganta'], texto: 'Carraspeas para llamar la atención. Adelante, ya te estamos escuchando.' },
{ verbos: ['estornudar', 'achis'], texto: 'Estornudas con fuerza. Por una vez, algo escapa completamente a tu voluntad.' },
{ verbos: ['sangrar', 'sangrarme'], texto: 'Observas cómo una pequeña herida empieza a sangrar. No parece que sea el mejor momento para descuidarte.' },
{ verbos: ['morderse', 'morderme', 'morder'], texto: 'Te muerdes el labio, intentando contener los nervios. Ese pequeño gesto te delata.' },
{ verbos: ['pellizcarse', 'pellizcarme', 'pellizcar'], texto: 'Te das un pellizco para comprobar que no estás soñando. Por desgracia, la realidad sigue ahí.' },
{ verbos: ['temblar', 'estremecerse', 'estremecerme'], texto: 'Tu cuerpo empieza a temblar ligeramente. No hace falta que disimules; el miedo también tiene su propio lenguaje.' },
{ verbos: ['sudar', 'sudarme', 'transpirar'], texto: 'Notas cómo empiezas a sudar. Parece que la situación te está afectando más de lo que quieres admitir.' },
{ verbos: ['enfadarse', 'enfadarme', 'cabrearse', 'cabrearme', 'indignarse'], texto: 'Te enfadas y aprietas los dientes. Puedes indignarte todo lo que quieras; eso no va a resolver nada.' },
{ verbos: ['calmarse', 'calmarme', 'tranquilizarse', 'relajarse'], texto: 'Intentas tranquilizarte respirando profundamente. Así está mejor. Mantén la calma.' },
{ verbos: ['pensar', 'reflexionar', 'meditar', 'razonar'], texto: 'Te detienes a pensar. Una costumbre que deberías practicar con mayor frecuencia.' },
{ verbos: ['recordar', 'acordarse', 'rememorar'], texto: 'Intentas recordar los últimos acontecimientos. La memoria es caprichosa, pero conviene que no olvides lo importante.' },
{ verbos: ['olvidar', 'olvidarse', 'despistarse'], texto: 'Intentas olvidar lo sucedido. Qué sencillo sería todo si bastara con proponérselo.' },
{ verbos: ['imaginar', 'fantasear', 'sonar', 'sonar despierto'], texto: 'Dejas volar la imaginación. Ten cuidado: las fantasías no siempre son un buen refugio.' },
{ verbos: ['quejarse', 'quejarme', 'protestar', 'reclamar'], texto: 'Empiezas a quejarte. Puedes continuar si eso te hace sentir mejor, aunque dudo que sirva de mucho.' },
{ verbos: ['obedecer', 'acatar', 'cumplir'], texto: 'Decides obedecer. A veces aceptar las circunstancias requiere menos esfuerzo que luchar contra ellas.' },
{ verbos: ['negarse', 'negarme', 'rechazar', 'oponerse', 'resistirse'], texto: 'Te niegas a aceptar la situación. Veo que todavía conservas cierto espíritu de resistencia.' },
{ verbos: ['confesar', 'confesarme', 'admitir', 'reconocer'], texto: 'Te dispones a confesar. No tengas miedo de las palabras; a veces decir la verdad es lo único que queda.' },
{ verbos: ['mentir', 'enganar', 'disimular', 'fingir'], texto: 'Intentas disimular y fingir que todo está bien. No te esfuerces demasiado: no resulta especialmente convincente.' },
{ verbos: ['rezar', 'orar', 'suplicar', 'implorar'], texto: 'Juntas las manos y empiezas a rezar. Nunca está de más buscar ayuda, aunque quizá deberías haberlo pensado antes.' },
{ verbos: ['maldecir', 'blasfemar', 'insultar'], texto: 'Dejas escapar una retahíla de improperios. Procura controlar ese vocabulario.' },
{ verbos: ['escupir', 'escupirme', 'escupirse'], texto: 'Escupes al suelo. Un gesto poco elegante que no mejora precisamente tu imagen.' },
{ verbos: ['rascar', 'aranar', 'aranarse', 'aranarme'], texto: 'Te arañas distraídamente la piel. Parece que necesitas descargar la tensión de alguna manera.' },
{ verbos: ['abrazarse', 'abrazarme', 'abrazar'], texto: 'Te rodeas el cuerpo con los brazos en un intento de encontrar algo de consuelo.' },
{ verbos: ['masturbarse', 'masturbarme', 'masturbar', 'hacerse una paja', 'hacerme una paja', 'hacer una paja'], objetos: ['ducha'], texto: 'Decides masturbarte con la ducha. Hoy la presión del agua es idonea y no tardas en tener un orgasmo ' },
    { verbos: ['masturbarse', 'masturbarme', 'masturbar', 'hacerse una paja', 'hacerme una paja', 'hacer una paja'], texto: 'Decides masturbarte. Parece que has encontrado una manera bastante particular de distraerte de tus problemas.' },
{ verbos: ['pajear', 'pajearse', 'pajearme', 'pajearte', 'hacerse una manuela', 'hacerme una manuela', 'hacerse una paja'], texto: 'Te dispones a hacerte una paja. Al menos parece que has encontrado algo con lo que entretenerte.' },
/*{ verbos: ['masturbarse con la ducha', 'masturbarme con la ducha', 'masturbar con la ducha', 'hacerse una paja con la ducha', 'hacerme una paja con la ducha', 'hacer una paja con la ducha'], texto: 'Decides masturbarte con la ducha. Hoy la presión del agua es idonea y no tardas en tener un orgasmo .' },*/
    { verbos: ['cascarsela', 'cascarmela', 'pelarsela', 'pelarmela'], texto: 'Decides aliviar tensiones por tu cuenta. No parece que tengas demasiada prisa por continuar.' },
{ verbos: ['excitarse', 'excitarme', 'calentarse', 'calentarme'], texto: 'Te dejas llevar por tus pensamientos y empiezas a excitarte. Parece que tu imaginación trabaja a pleno rendimiento.' },
{ verbos: ['lavarse', 'lavarme', 'asearse', 'asearme', 'ducharse', 'ducharme'], texto: 'Decides asearte. Una buena higiene siempre es recomendable, incluso en las circunstancias más extrañas.' },
{ verbos: ['escuchar', 'escucharme', 'prestar atencion'], texto: 'Agudizas el oído y prestas atención. Por fin parece que has decidido escuchar en lugar de hacer lo que te viene en gana.' },
    { verbos: ['gritar', 'grita'], texto: 'Gritas de impotencia, pero nadie parece oírte (o quizá sí).' },
    { verbos: ['encender', 'enciende'], estancia: 'cocina', objetos: ['cafetera'], texto: 'Enciendes la cafetera', fuera: 'No ves ninguna cafetera por aquí.' },
    { verbos: ['encender', 'enciende'], estancia: 'cocina', objetos: ['cafetera'], texto: 'Ya está encendida.', fuera: 'No ves ninguna cafetera por aquí.' },
    //baño
    { verbos: ['mirarse', 'mirar', 'observar'], estancia: 'bano', objetos: ['espejo'], texto: 'Te observas detenidamente en el espejo. Tu reflejo te devuelve una mirada algo cansada.', fuera: 'No ves ningún espejo por aquí.' },
// MEAR SIN OBJETO
{
  verbos: ['mear', 'orinar', 'hacer pis', 'hacer pipi', 'echar una meada', 'miccionar'],
  estancia: 'bano',
  texto: 'Te acercas al inodoro, levantas la tapa y haces pis. Hmmmm... qué bien te sientes. Después tiras de la cadena. ',
  fuera: 'No hay ningún inodoro por aquí.'
},

// CAGAR SIN OBJETO
{
  verbos: ['cagar', 'defecar', 'hacer caca', 'hacer de vientre', 'echar un zurullo', 'hacer popo'],
  estancia: 'bano',
  texto: 'Te sientas en el inodoro y haces tus necesidades. Después tiras de la cadena. Todo correcto. Te sientes mejor. Y hasta aquí la descripción de lo que acabas de hacer. ',
  fuera: 'No hay ningún inodoro por aquí.'
},

// MEAR EN OBJETOS CONCRETOS
{
  verbos: ['mear', 'orinar', 'hacer pis', 'hacer pipi', 'echar una meada', 'miccionar'],
  estancia: 'bano',
  objetos: ['ducha'],
  texto: 'Aunque no es el lugar apropiado para ello, decides mear en la ducha. Cosas peores has hecho.',
  fuera: 'No hay ninguna ducha por aquí.'
},

{
  verbos: ['mear', 'orinar', 'hacer pis', 'hacer pipi', 'echar una meada', 'miccionar'],
  estancia: 'bano',
  objetos: ['lavabo'],
  texto: 'Decides mear en el lavabo. No parece una decisión especialmente acerta. Alguien debería obligarte a limpiarlo con la lengua, cerda.',
  fuera: 'No hay ningún lavabo por aquí.'
},

{
  verbos: ['mear', 'orinar', 'hacer pis', 'hacer pipi', 'echar una meada', 'miccionar'],
  estancia: 'bano',
  objetos: ['suelo'],
  texto: 'Sin preocuparte demasiado por las consecuencias, decides mear directamente en el suelo del baño. Alguien debería obligarte a limpiarlo con la lengua, cerda.',
  fuera: 'No hay ningún suelo por aquí.'
},

// CAGAR EN OBJETOS CONCRETOS
{
  verbos: ['cagar', 'defecar', 'hacer caca', 'hacer de vientre', 'echar un zurullo', 'hacer popo'],
  estancia: 'bano',
  objetos: ['ducha'],
  texto: 'Decides hacer tus necesidades en la ducha. A ti, y solo a ti, se le podrìa ocurrir hacer algo así. No tienes remedio.',
  fuera: 'No hay ninguna ducha por aquí.'
},

{
  verbos: ['cagar', 'defecar', 'hacer caca', 'hacer de vientre', 'echar un zurullo', 'hacer popo'],
  estancia: 'bano',
  objetos: ['lavabo'],
  texto: '¿De verdad quieres cagar en el lavabo? Estás fatal...',
  fuera: 'No hay ningún lavabo por aquí.'
},

{
  verbos: ['cagar', 'defecar', 'hacer caca', 'hacer de vientre', 'echar un zurullo', 'hacer popo'],
  estancia: 'bano',
  objetos: ['suelo'],
  texto: 'Te agachas y haces tus necesidades directamente en el suelo del baño. La escena es bastante desagradable.',
  fuera: 'No hay ningún suelo por aquí.'
},
{ verbos: ['ducharse', 'duchar', 'ducharme', 'bañarse'], estancia: 'bano', texto: 'Abres el grifo y te das una ducha. El agua caliente te ayuda a relajarte durante unos minutos.', fuera: 'No ves ninguna ducha por aquí.' },
{ verbos: ['lavarse', 'lavar','lavarme'], estancia: 'bano', texto: 'Abres el grifo, te enjabonas las manos y las aclaras cuidadosamente.', fuera: 'No tienes ningún lavabo a mano.' },
{ verbos: ['cepillarse', 'cepillar', 'cepillarme'], estancia: 'bano', objetos: ['dientes', 'cepillo dientes'], texto: 'Coges el cepillo de dientes y te los limpias durante un par de minutos.', fuera: 'No tienes ningún cepillo de dientes por aquí.' },
{ verbos: ['peinarse', 'peinar','peinarme'], estancia: 'bano', texto: 'Te pasas el peine por el cabello intentando poner un poco de orden.', fuera: 'No encuentras ningún peine por aquí.' },
{ verbos: ['abrir', 'destapar'], estancia: 'bano', objetos: ['grifo', 'grifos'], texto: 'Abres el grifo. El agua empieza a correr por el lavabo, deslizándose sin prisa hacia el desagüe. Te quedas observándola mientras desaparece, incapaz de retener ni una sola gota. Piensas que la vida se parece bastante a ese pequeño espectáculo: los minutos se escurren ante tus ojos, uno detrás de otro, y tú permaneces inmóvil, contemplando cómo se pierden. Quizá algún día comprendas que el tiempo, como el agua, no regresa una vez que se ha ido. ', fuera: 'No ves ningún grifo por aquí.' },
{ verbos: ['cerrar', 'cortar'], estancia: 'bano', objetos: ['grifo', 'grifos'], texto: 'Cierras el grifo y el agua deja de correr. ', fuera: 'No ves ningún grifo por aquí.' },
{ verbos: ['secarse', 'secar'], estancia: 'bano', texto: 'Coges la toalla y te secas cuidadosamente', fuera: 'No encuentras ninguna toalla por aquí.' },
    { verbos: ['limpiar', 'limpia'], estancia: 'bano', objetos: ['inodoro', 'taza', 'wc'], texto: 'Te pones de rodillas y limpias el borde de la taza con la lengua. Ojalá hubiera alguien que te sujetara la cabeza para que no pudieras levantarla. Sigue limpiando...', fuera: 'No ves ningún inodoro por aquí.' }
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
  imagenesObjetos: { caldera: 'img/contador.png', cuadro: 'img/cuadro.png', libro: 'img/libro.png' },
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
