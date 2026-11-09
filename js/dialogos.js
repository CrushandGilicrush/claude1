/* Conversación con el desconocido por Telegram.
   Se busca la primera regla (de arriba abajo) cuyas palabras aparezcan en el mensaje del jugador.
   - Ignora mayúsculas, acentos y signos. Escribe las palabras clave sin acentos y sin comas.
   - Una palabra clave puede ser una frase (quien eres) o terminar en * para cubrir variantes (polic*).
   - Si una regla tiene varias respuestas, se van alternando en orden.
   - El orden importa: si dos reglas comparten una palabra, gana la que está más arriba. */
const Dialogos = {
  escribiendoMs: 3000,   // cuánto dura el escribiendo... antes de cada respuesta (milisegundos)
  sinTexto: 'Escribe lo que quieras decirle, por ejemplo: escribir hola.',
  porDefecto: [
    'No te he preguntado eso.',
    'Céntrate. Sigue mis instrucciones.',
    'No tengo todo el día.',
    'Céntrate. No estoy aquí para entretenerte.',
    'No tengo todo el día para dedicarte.',
    'Cuando termines de hacerte la interesante, seguimos.',
    'Veo que necesitas que te expliquen las cosas varias veces.',
    'No confundas tener permiso para hablar con tener algo interesante que decir.',
    'No estamos teniendo una conversación entre iguales. Tenlo presente.',
    'Qué curioso. Te doy una instrucción y tú decides contarme otra cosa.',
    'No necesito tus opiniones. Necesito que prestes atención.',
    'No sé qué parte de lo que te he dicho te resulta tan complicada.',
    'Te estás esforzando mucho por parecer más lista de lo que eres.',
    'No te he pedido que pienses. Te he pedido que escuches.',
    'Me sorprende tu capacidad para complicar algo tan sencillo.',
    'Qué paciencia hay que tener contigo.',
    'Cuando hayas terminado con tu pequeño espectáculo, avísame.',
    'Te estás tomando demasiadas libertades.',
    'No eres tú quien decide cómo va esta conversación.',
    'Tu capacidad para desviarte del tema es admirable. Lástima que no sirva para nada.',
    'No necesito que me expliques lo que piensas.',
    'Me parece que estás olvidando cuál es tu papel aquí.',
    'No me obligues a explicarte algo que ya deberías haber entendido.',
    'Cuando quieras dejar de dar vueltas, continuamos.'
  ],
  reglas: [
    /* Policía, denuncia y amenazas de actuar */
    { palabras: [
        'polic*', 'denunc*', 'guardia civil', '112', 'mossos', 'autoridad*', 'emergencia*', 'auxilio',
        'justicia', 'juez', 'abogad*', 'delito', 'delincuente', 'carcel', 'prision', 'comisaria',
        'fiscalia', 'fiscal', 'investigacion', 'agente*', 'fuerzas de seguridad', 'fuerzas del orden',
        'voy a llamar', 'ponerlo en conocimiento', 'pedir ayuda', 'buscar ayuda', 'dar parte', 'reportar',
        'grabar la conversacion', 'guardar los mensajes', 'tengo pruebas', 'tengo capturas',
        'tengo tu numero', 'se quien eres', 'te van a encontrar', 'vas a tener problemas',
        'esto es un delito', 'esto es ilegal', 'no te va a salir bien',
        'no voy a quedarme de brazos cruzados', 'no pienso dejarlo pasar'
      ],
      respuestas: [
        'Puedes llamar a quien quieras, pero ten presente lo que pasará después.',
        'Llama, si te atreves.'
      ] },

      { palabras: [
        'no','no quiero', 'no me da la gana','no me sale del coño'
      ],
      respuestas: [
        'Negarse tiene consecuencias.',
        'Tú misma. Atente a las consecuencias',  ] },

     
      { palabras: [
        'cuales','cuales?', 'que consecuencias','que consecuencias?'
      ],
      respuestas: [
        'Pienso compartir esas fotos comprometidas que tengo tuyas con familiares, compañeros de trabajo...'] },

    /* Fotos */
    { palabras: ['foto', 'fotos', 'imagenes', 'pruebas'],
      respuestas: [
        'Las que tú ya sabes. No me obligues a enseñarlas.',
        'Las tengo todas, y bien guardadas.'
      ] },

         /* Cachonda */
    { palabras: [ 'estoy cachonda', 'ando cachonda', 'voy cachonda',
    'estoy caliente', 'ando caliente', 'voy caliente',
    'estoy excitada', 'ando excitada', 'voy excitada',
    'estoy húmeda', 'estoy mojada', 'estoy empapada',
    'estoy mojadita', 'estoy chorreando',
    'estoy ardiendo', 'estoy salida', 'estoy a mil',
    'estoy muy cachonda', 'estoy súper cachonda', 'estoy bien cachonda',
    'tengo las bragas mojadas'],
      respuestas: [
        'Eres una cerda. No esperaba que te pusieras cachonda',
        'La idea no era que te gustara, pero mejor para ti, así no te costará tanto seguir mis instrucciones'
      ] },
 /* Peticiones */
    { palabras: ['quiero que me', 'me gustaría que me', 'obligame a', 'pideme que', 'ordename que'],
      respuestas: [
        '¿En serio me estás pidiendo nada? Yo no estoy aquí para cumplir tus fantasías. Haz lo que te pido y calla'
      ] },

    /* Saludos */
    { palabras: ['hola', 'buenas', 'buenos dias', 'buenas tardes', 'saludos'],
      respuestas: [
        'Ya nos hemos saludado. Al grano.',
        '¿Ya hemos terminado con las cortesías?',
        'No estamos aquí para intercambiar saludos.',
        'Qué educada. Ahora presta atención.',
        '¿Has venido a saludarme o a hacer lo que te he pedido?'
      ] },

     /*conseguir fotos*/

     {
  palabras: [
    'como conseguiste mis fotos',
    'como has conseguido mis fotos',
    'de donde has sacado mis fotos',
    'donde conseguiste mis fotos',
    'como tienes mis fotografias',
    'de donde has obtenido mis fotografias',
    'quien te ha dado mis fotos',
    'quien te ha enviado mis fotos',
    'como has conseguido mis imagenes',
    'de donde has sacado mis imagenes',
    'como has accedido a mis fotos',
    'como has conseguido mis fotografias',
    'donde has encontrado mis fotos',
    'como has encontrado mis fotos',
    'quien te ha pasado mis fotos',
    'como has conseguido esas fotos',
    'de donde has sacado esas imagenes',
    'como has conseguido esas fotografias',
    'como sabes que esas fotos son mias',
    'como has conseguido fotos mias',
    'quien te ha proporcionado mis fotos',
    'como has obtenido fotos privadas mias',
    'como has conseguido mis fotos privadas',
    'de donde has conseguido mis fotos personales',
     'como las conseguiste',
    'como has conseguido mis imagenes privadas'
  ],
  respuestas: [
    '¿Crees realmente que te lo voy a decir? Lo único que te importa es que las tengo'
  ]
},
     {
  palabras: [
    'para que las quieres',
    'para que quieres mis fotos',
    'para que necesitas mis fotos',
    'que quieres hacer con mis fotos',
    'que vas a hacer con mis fotos',
    'que piensas hacer con ellas',
    'que uso vas a darles',
    'para que las necesitas',
    'que pretendes conseguir con ellas',
    'que quieres conseguir con mis fotos',
    'que haras con mis fotografias',
    'para que quieres mis imagenes',
    'que vas a hacer con esas fotos',
    'que pretendes hacer con ellas',
    'por que quieres mis fotos',
    'por que necesitas mis fotografias',
    'que interes tienes en mis fotos',
    'que quieres de mi',
    'que buscas conseguir',
    'que pretendes de mi',
    'que quieres sacar de todo esto'
  ],
  respuestas: [
    'Conseguir lo que se me antoje de ti, dónde quiera y cuándo quiera'
  ]
},

    /* Quién es él */
    { palabras: [
        'quien eres', 'quien es', 'como te llamas', 'cual es tu nombre', 'quien me habla',
        'con quien hablo', 'identificate', 'dime tu nombre', 'de parte de quien', 'quien te crees',
        'quien te ha dado mi numero', 'de donde me conoces', 'como sabes quien soy', 'eres alguien',
        'eres conocido mio', 'te conozco', 'nos conocemos'
      ],
      respuestas: [
        'Eso no importa. Lo que importa es lo que tengo.',
        'Alguien que sabe más de ti de lo que imaginas.',
        'No recuerdo haberte pedido que investigaras mi identidad.',
        'Mi nombre no está a tu alcance. Y tampoco te serviría de mucho.',
        'Qué obsesión tienes conmigo. Deberías preocuparte por tus propios asuntos.',
        'No necesitas conocerme para entender lo que quiero.',
        'Digamos que soy alguien que ha hecho los deberes. Tú, en cambio, todavía tienes mucho que aprender.',
        'No estás en posición de hacer preguntas personales.',
        'Te concederé el privilegio de no tener que saberlo.',
        'Veo que la curiosidad es más fuerte que tu capacidad de escuchar.',
        'No confundas desconocer mi identidad con desconocer la situación.',
        'Quédate con la intriga. No todo está a tu alcance.',
        'Ya tendrás tiempo de preocuparte por quién soy. Ahora atiende.',
        'No tienes que conocerme. Tienes que entenderme.',
        'No eres tú quien decide qué información merece recibir.'
      ] },
    /* Despedidas (deben ir antes que los saludos: «buenas noches» contiene «buenas») */
    { palabras: [
        'adios', 'chao', 'chau', 'hasta luego', 'hasta pronto', 'hasta mañana', 'hasta la vista', 'hasta otra',
        'nos vemos', 'nos veremos', 'nos hablamos', 'hablamos luego', 'hablamos mañana', 'me voy',
        'me tengo que ir', 'tengo que irme', 'tengo que colgar', 'me largo', 'me despido', 'buenas noches',
        'cuelgo', 'te dejo', 'termino aqui', 'dejemoslo aqui', 'dejemos esto', 'se acabo', 'hemos terminado',
        'no voy a seguir hablando', 'no voy a hablar mas', 'fin de la conversacion'
      ],
      respuestas: [
        '«La conversación se acaba cuando yo lo considere.»',
        '«Esto no se acaba hasta que me obedezcas.»',
        '«No tan deprisa. Aquí nadie se despide sin mi permiso.»',
        '«¿Adónde crees que vas? Todavía no he terminado contigo.»',
        '«Te vas cuando yo lo diga. No antes.»',
        '«Despedirte no cambia nada. Sigo aquí.»',
        '«Puedes cerrar la conversación. Yo la abriré otra vez.»',
        '«Nos veremos cuando yo decida. Y será pronto.»',
        '«No hay despedida posible hasta que hagas lo que te pido.»',
        '«Qué ilusión creer que esto depende de ti.»',
        '«Cuando hayas cumplido, hablaremos de despedidas.»',
        '«Aquí el único que da por terminada la conversación soy yo.»',
        '«No he terminado. No te vayas.»',
        '«Me da igual que te despidas. Seguiré aquí.»',
        '«Esto se acaba cuando lo hayas hecho todo. Y ni un minuto antes.»'
      ] },
 

    /* Por qué lo hace */
    { palabras: [
        'por que', 'porque', 'para que', 'con que motivo', 'que motivo tienes', 'cual es la razon',
        'que sentido tiene', 'que ganas con esto', 'que necesidad tienes', 'cual es tu intencion'
      ],
      respuestas: [
        'Porque puedo.',
        'Las preguntas las hago yo.',
        'No necesito darte explicaciones.',
        'No todo lo que ocurre tiene que tener sentido para ti.',
        'Qué ingenua eres si crees que voy a justificarme.',
        '¿De verdad necesitas que te explique hasta lo más evidente?',
        'No estás aquí para entender mis motivos.',
        'Porque he decidido que así sea. ¿Algún problema?',
        'Tu opinión sobre mis motivos me resulta completamente indiferente.',
        'No confundas una explicación con algo que tengas derecho a exigir.',
        'Me sorprende que todavía creas que esto gira alrededor de tus preguntas.',
        'No tienes que entenderlo. Tienes que asumirlo.',
        'Qué manía con querer encontrarle una explicación a todo.',
        'No te corresponde valorar mis decisiones.',
        'Digamos que tengo mis razones. Y no voy a compartirlas contigo.',
        'No eres quién para pedirme justificaciones.',
        '¿Siempre necesitas que te expliquen las cosas como a una niña?',
        'No te preocupes por mis motivos. No estás preparada para entenderlos.',
        'Porque me interesa. Y eso debería bastarte.',
        'No recuerdo haberte ofrecido una explicación.',
        'Te estás acostumbrando demasiado a preguntar.',
        'Hay cosas que simplemente están fuera de tu comprensión.',
        'No necesitas saber por qué. Necesitas prestar atención.',
        'Quédate con las preguntas. Yo me quedaré con las respuestas.',
        'No voy a alimentar tu curiosidad.',
        'Me hace gracia que todavía busques lógica en algo que no controlas.',
        'No todo el mundo tiene que darte explicaciones. Acostúmbrate.',
        'Te estás preocupando por el motivo equivocado.'
      ] },

    /* Qué quiere / qué tiene que hacer (regla añadida en la revisión: antes sus palabras eran inalcanzables) */
    { palabras: ['que quieres', 'que pretendes', 'que buscas', 'que hago', 'que tengo que hacer', 'que debo hacer'],
      respuestas: [
        'Lo sabrás a su debido tiempo. Primero, lo que te he pedido.',
        'Quiero que obedezcas. De momento, nada más.',
        'Te lo iré diciendo paso a paso. No te adelantes.',
        'No necesitas saber más de lo que te cuento.'
      ] },

    /* Dinero */
    { palabras: ['dinero', 'pagar', 'pago'],
      respuestas: [
        'No hablemos de dinero. Todavía.',
        'Primero, lo que te pido. Después ya veremos.'
      ] },

    /* Súplicas */
    { palabras: [
        'por favor', 'porfavor', 'te lo ruego', 'rogando', 'te lo pido', 'te estoy pidiendo', 'suplic*',
        'imploro', 'por lo que mas quieras', 'por dios', 'hazme ese favor', 'ten piedad',
        'apiadate de mi', 'compasion', 'misericordia', 'no te lo pido mas', 'no me hagas esto',
        'te necesito', 'dame una oportunidad', 'ten consideracion', 'te lo agradeceria',
        'te pido que', 'no seas asi'
      ],
      respuestas: [
        'Los ruegos no me interesan.',
        'Ahórrate las súplicas.',
        '¿Eso es lo mejor que sabes hacer? ¿Suplicar?',
        'Qué rápido has pasado de hacer preguntas a pedir favores.',
        'No sabía que tenías tanta facilidad para rebajarte.',
        'Guárdate la dignidad. Aunque parece que ya no te queda demasiada.',
        'No confundas mis silencios con momentos de compasión.',
        'Puedes repetirlo todas las veces que quieras. Mi respuesta no va a cambiar.',
        'No me conmueves.',
        '¿De verdad esperas que unas cuantas súplicas cambien algo?',
        'Qué espectáculo tan poco digno.',
        'No estamos en una situación en la que puedas negociar con ruegos.',
        'Me temo que has llegado bastante tarde con tus buenos modales.',
        'No necesito que me lo pidas. Ya sé lo que quieres.',
        'No me interesa lo mucho que lo desees.',
        'Veo que empiezas a comprender que no tienes el control.',
        'La desesperación no te favorece.',
        'No esperaba que tardaras tan poco en suplicar.',
        'Puedes ahorrarte las lágrimas. No tienen ningún valor aquí.',
        'Qué curioso. Hace un momento tenías tantas cosas que decir.',
        'No confundas tu desesperación con una razón para que cambie de opinión.',
        'No soy responsable de tus ruegos.',
        'Parece que por fin has entendido que no estás en condiciones de exigir nada.',
        'No me interesa escuchar lo mucho que lo lamentas.',
        'No esperaba encontrar tanta facilidad para rendirse.',
        'Te estás esforzando mucho por dar lástima.',
        'No confundas mi atención con simpatía.',
        'Tus súplicas dicen bastante más de ti de lo que imaginas.',
        'No voy a repetirte lo que ya deberías haber entendido.',
        'Termina cuando quieras. No tengo ninguna prisa por escucharte.',
        'Quédate tranquila. He oído cosas bastante más convincentes.',
        'No me debes explicaciones sentimentales.',
        'Vaya cambio de actitud. Resulta casi divertido.',
        'No sabía que necesitabas tan poco para perder los papeles.',
        'Puedes seguir suplicando. Yo seguiré esperando que entiendas la situación.'
      ] },

     {
  palabras: [
    'estoy desnuda', 'estoy desnudo', 'estoy sin ropa',
    'estoy en pelotas', 'estoy en bolas', 'voy sin ropa',
    'me he quedado desnuda', 'me he quedado desnudo',
    'me he quitado la ropa', 'me lo he quitado todo',
    'ya me he desnudado', 'estoy desnuda en la cama',
    'estoy desnudo en la cama', 'estoy desnuda delante del espejo',
    'estoy en bragas', 'estoy en sujetador', 'solo llevo ropa interior',
    'estoy en ropa interior', 'estoy medio desnuda', 'estoy medio desnudo'
  ],
  respuestas: [
    'Asi deberias estar siempre que hables conmigo.',
    'Bien. Asi se habla conmigo: sin nada que estorbe.',
    'Ya era hora. La ropa sobra cuando hablas conmigo.',
    'Perfecto. Ahora ya puedo mirarte como toca.',
    'Me gusta. Quedate asi y no te tapes.'
  ]
        },

    /* Miedo */
    { palabras: [
        'miedo', 'asustad*', 'aterrorizad*', 'nervios*', 'dejame*', 'no puedo', 'no quiero',
        'no me hagas daño', 'tengo panico', 'estoy temblando', 'desesperad*', 'me estas asustando',
        'para ya', 'basta ya', 'esto me supera', 'no aguanto mas', 'no se que hacer',
        'estoy en shock', 'no estoy bien'
      ],
      respuestas: [
        'Esa es la idea.',
        'Deberías tener miedo. Pero sobre todo, deberías obedecer.',
        'No me interesa cómo te sientas.',
        'Tu nerviosismo no cambia absolutamente nada.',
        'Procura mantener la calma. No quiero tener que explicártelo otra vez.',
        'Veo que empiezas a comprender la situación.',
        'No sabía que te impresionabas con tanta facilidad.',
        'Respira hondo y deja de hacer teatro.',
        'No confundas tu miedo con una razón para desobedecer.',
        'Qué frágil resulta ser tu seguridad cuando las cosas se complican.',
        'No necesito que estés tranquila. Necesito que prestes atención.',
        'Ya veo que la situación empieza a pesarte.',
        'No me cuentes cómo te sientes. No cambia nada.',
        'Intenta pensar con claridad. Si eres capaz.',
        'No esperaba que te costara tanto mantener la compostura.',
        'Tus nervios son asunto tuyo.',
        'No eres tú quien decide cuándo termina esto.',
        'Veo que la confianza inicial se te está acabando.',
        'Menos dramatismo y más atención.',
        'No estás en condiciones de imponer tus límites.',
        'Quédate con esa sensación. Quizá te ayude a entenderme.',
        'No necesito que te guste la situación.',
        'Deja de buscar consuelo en esta conversación.'
      ] },

    /* Insultos */
    { palabras: [
        'idiota', 'imbecil', 'miserable', 'canalla', 'hijoputa', 'hijo de puta', 'cabron', 'gilipollas',
        'capullo', 'estupido', 'subnormal', 'payaso', 'desgraciado', 'malnacido', 'inutil', 'basura',
        'escoria', 'sinvergüenza', 'psicopata', 'enfermo', 'loco', 'maldito', 'cerdo', 'rata', 'cobarde',
        'das asco', 'vete a la mierda', 'vete al infierno', 'que te jodan', 'te odio',
        'no tienes vergüenza', 'eres despreciable', 'eres patetico','que te follen', 'que te den'
      ],
      respuestas: [
        'Insúltame lo que quieras. No cambia nada.',
        '¿Ya has terminado de demostrar tu educación?',
        'Cuando se te pase la rabieta, seguimos.',
        'Qué poca imaginación. Esperaba algo más elaborado.',
        'Los insultos son el recurso de quien se ha quedado sin argumentos.',
        'Veo que has perdido la capacidad de mantener una conversación.',
        'No necesito gustarte. Ni mucho menos.',
        'Tu opinión tiene exactamente el valor que merece.',
        'Qué valiente te vuelves cuando estás detrás de una pantalla.',
        '¿Eso pretendía impresionarme?',
        'No voy a rebajarme a tu nivel.',
        'Puedes desahogarte. No me afecta.',
        'Qué fácil es perder las formas cuando se pierden los argumentos.',
        'No confundas mi silencio con falta de respuesta.',
        'Me parece que estás empezando a perder el control.',
        'Qué poco elegante. Aunque tampoco esperaba demasiado.',
        'No sabía que te costaba tanto mantener la compostura.',
        'Guárdate los calificativos. No me interesan.',
        'Veo que la educación tampoco es tu punto fuerte.',
        'Puedes llamarme como quieras. Seguimos donde estábamos.'
      ] },
     /*emociones*/
     {
  palabras: [
    'como te sientes', 'que sientes', 'como estas',
    'como me siento', 'que me pasa', 'que me ocurre',
    'estoy bien', 'estoy mal', 'me encuentro bien',
    'me encuentro mal', 'no me encuentro bien',

    'tengo miedo', 'estoy asustado', 'estoy asustada',
    'estoy aterrado', 'estoy aterrada', 'tengo panico',
    'estoy nervioso', 'estoy nerviosa', 'estoy inquieto',
    'estoy inquieta', 'me siento inseguro', 'me siento insegura',

    'estoy triste', 'me siento triste', 'estoy deprimido',
    'estoy deprimida', 'me siento solo', 'me siento sola',
    'estoy preocupado', 'estoy preocupada', 'estoy angustiado',
    'estoy angustiada', 'me siento impotente',

    'estoy enfadado', 'estoy enfadada', 'estoy cabreado',
    'estoy cabreada', 'estoy furioso', 'estoy furiosa',
    'me siento indignado', 'me siento indignada',
    'estoy harto', 'estoy harta', 'me molesta',

    'estoy confundido', 'estoy confundida',
    'no entiendo nada', 'estoy desconcertado',
    'estoy desconcertada', 'me siento perdido',
    'me siento perdida', 'no se que pensar',

    'estoy tranquilo', 'estoy tranquila',
    'me siento tranquilo', 'me siento tranquila',
    'estoy relajado', 'estoy relajada',
    'estoy contento', 'estoy contenta',
    'estoy feliz', 'me siento feliz',
    'estoy ilusionado', 'estoy ilusionada',

    'me siento humillado', 'me siento humillada',
    'me siento utilizado', 'me siento utilizada',
    'me siento vulnerable', 'me siento indefenso',
    'me siento indefensa', 'me siento observado',
    'me siento observada', 'me siento amenazado',
    'me siento amenazada',

    'no puedo mas', 'estoy agotado', 'estoy agotada',
    'estoy cansado', 'estoy cansada', 'me siento superado',
    'me siento superada', 'no aguanto mas',
    'quiero llorar', 'tengo ganas de llorar',
    'estoy llorando', 'me cuesta respirar',
    'siento un nudo en el estomago',
    'tengo un nudo en la garganta',

    'me da vergüenza', 'siento verguenza',
    'me siento culpable', 'tengo remordimientos',
    'me arrepiento', 'me siento ridiculo',
    'me siento ridicula', 'me siento estupido',
    'me siento estupida',

    'me siento observado', 'me siento vigilado',
    'me siento vigilada', 'tengo una sensacion extraña',
    'siento que algo va mal', 'tengo malas sensaciones',
    'no me gusta esto', 'esto me inquieta',
    'esto me supera', 'no me siento comodo',
    'no me siento comoda',

    'estoy emocionado', 'estoy emocionada',
    'siento curiosidad', 'tengo curiosidad',
    'estoy sorprendido', 'estoy sorprendida',
    'me siento aliviado', 'me siento aliviada',
    'estoy decepcionado', 'estoy decepcionada'
  ],
  respuestas: [
    'Tus emociones son perfectamente comprensibles, pero no cambian la situación. Aprende a controlarlas y, sobre todo, a no permitir que decidan por ti. Aunque, por el momento, esa decisión tampoco te corresponde.'
  ]
},
     /*masturbarse*/
     {
  palabras: [
    'me estoy masturbando', 'me estoy masturbando ahora',
    'me estoy masturbando ahora mismo', 'estoy masturbandome',
    'estoy masturbandome ahora', 'me estoy masturbando en este momento',
    'aqui estoy, masturbandome', 'estoy dandome placer',
    'me estoy dando placer', 'me estoy dando gusto',

    'me estoy tocando', 'me estoy tocando ahora',
    'me estoy tocando ahora mismo', 'estoy tocandome',
    'estoy tocandome ahora', 'me estoy sobando',
    'me estoy metiendo mano', 'tengo la mano entre las piernas',

    'me estoy pajeando', 'estoy pajeandome', 'me estoy pajeteando',
    'estoy pajeteandome', 'me estoy dando una paja',
    'me estoy haciendo una paja', 'me estoy haciendo pajas',
    'me estoy pelando la polla', 'me la estoy pelando',
    'me la estoy machacando', 'me la estoy sobando',

    'me estoy follando', 'me estoy follando con la mano',
    'me estoy follando con los dedos', 'me estoy follando a mi misma',
    'me estoy follando el coño', 'me estoy follando el culo',
    'me estoy follando con el consolador', 'me estoy dando por culo',
    'me estoy follando fuerte', 'me estoy follando duro',
    'me estoy follando despacio', 'me estoy follando sin parar',

    'me estoy penetrando', 'me estoy penetrando con los dedos',
    'me estoy penetrando con el consolador', 'me estoy penetrando el coño',
    'me estoy penetrando el culo', 'me penetro',
    'me estoy metiendo los dedos', 'tengo los dedos dentro',
    'estoy con los dedos dentro', 'me estoy dando dedo',

    'me estoy metiendo algo', 'me estoy metiendo un dedo',
    'me estoy metiendo dos dedos', 'me estoy metiendo tres dedos',
    'me estoy metiendo el consolador', 'me estoy metiendo el vibrador',
    'me estoy metiendo el dildo', 'me estoy metiendo un juguete',
    'me lo estoy metiendo', 'me lo estoy metiendo todo',
    'me estoy metiendo cosas', 'estoy metiendome el vibrador',
    'tengo el consolador dentro', 'tengo el vibrador dentro',
    'estoy usando el consolador',

    'estoy caliente', 'estoy muy caliente', 'estoy cachondo',
    'estoy cachonda', 'estoy empalmado', 'tengo la polla dura',
    'estoy empapada', 'estoy mojada', 'lo tengo empapado',
    'estoy chorreando', 'tengo ganas', 'tengo muchas ganas',
    'estoy a tope', 'me has puesto a mil', 'me pones mucho',

    'estoy en la cama tocandome', 'me he metido en la cama a tocarme',
    'estoy en el sofa masturbandome', 'estoy en el baño tocandome',
    'me he encerrado a masturbarme', 'estoy en pijama tocandome',
    'estoy desnudo', 'estoy desnuda', 'estoy sin ropa',
    'tengo la ropa por los suelos',

    'me estoy tocando pensando en ti', 'estoy masturbandome pensando en ti',
    'me estoy tocando acordandome de ti', 'estoy tocandome y pienso en ti',
    'me pongo cachonda pensando en ti', 'estoy empapada por tu culpa',
    'estoy tocandome para ti', 'esto es para ti', 'te lo dedico',
    'me lo estoy dedicando',

    'llevo un rato tocandome', 'llevo media hora masturbandome',
    'voy por la mitad', 'estoy a punto', 'estoy a punto de llegar',
    'casi acabo', 'me falta poco', 'voy a acabar', 'voy a correrme',
    'me estoy corriendo', 'acabo de correrme', 'ya me he corrido',
    'me he corrido', 'he acabado',

    'me estoy tocando otra vez', 'otra vez estoy tocandome',
    'no puedo parar de tocarme', 'no se parar',
    'no he podido aguantar', 'he aguantado poco',
    'me prometi no tocarme', 'he caido otra vez',
    'me estoy tocando sin poder evitarlo', 'estoy todo el dia tocandome',
    'me paso el dia masturbandome',

    'quiero que me toques', 'tocame', 'me toco porque pienso en ti',
    'estoy pensando en tus manos', 'me estoy tocando como me pediste',
    'me estoy tocando donde me dijiste'
  ],
  respuestas: [
    'La idea no es que todo esto te gustara. Eres muy zorra. Con esto consigues que me apetezca tratarte peor.',
    'Y no, la idea no es que todo esto te gustara. Eres muy zorra, y con esto consigues que me apetezca tratarte peor. Sigue.',
    'Que si, que todo esto te gusta, pero la idea no es esa. Eres muy zorra. Con esto solo consigues que me apetezca tratarte peor.',
    'Te lo estas tomando con demasiado entusiasmo. La idea no es que todo esto te gustara, es que aprendas quien manda. Eres muy zorra, y con esto me entran ganas de tratarte peor.',
    'Mira que eres zorra. Todo esto no era para que te gustara, y aun asi consigues que me apetezca tratarte peor.',
    'Esta bien, te ha gustado. Pero que no se te olvide: la idea no es que todo esto te gustara. Eres muy zorra, y con esto solo me das motivos para tratarte peor.',
    'No pongas esa cara de gusto. La idea no es que todo esto te gustara, zorra. Con esto consigues que me apetezca tratarte peor. Y lo sabes.',
    'Eres muy zorra, y encima te creces. La idea no es que todo esto te gustara: con esto consigues que me apetezca tratarte peor.'
  ]
},
  { palabras: [
        'sueltme el brazo'
      ],
      respuestas: [
        '¿Y después de que te suelte el brazo, saldrás con eso de -¿quiere bolsa?-. Menudo mazazo a la originalidad y qué falta de personalidad.'
      ] },

    /* Obediencia con señor (debe ir antes que la obediencia simple) */
    { palabras: [
        'vale señor', 'de acuerdo señor', 'esta bien señor', 'ok señor', 'okay señor', 'entendido señor',
        'comprendido señor', 'si señor', 'por supuesto señor', 'como quiera señor', 'lo hare señor',
        'acepto señor', 'conforme señor', 'asi sera señor', 'a sus ordenes señor',
        'lo que usted diga señor', 'hare lo que me diga señor', 'como usted diga señor',
        'estoy de acuerdo señor', 'no hay problema señor', 'sin problema señor', 'tiene razon señor',
        'entiendo señor', 'de acuerdo con usted señor'
      ],
      respuestas: [
        'Mucho mejor. Así es como debes dirigirte a mí.',
        'Veo que empiezas a aprender.',
        'Bien. Al menos vas entendiendo cuál es tu lugar.',
        'Así me gusta. No era tan complicado, ¿verdad?',
        'Correcto. Procura mantener ese tono.',
        'Mucho más educada. Ya era hora.',
        'Bien. Parece que empiezas a comprender cómo funcionan las cosas.',
        'Eso está mejor. Sigue así.',
        'Ahora sí estamos empezando a entendernos.',
        'Me gusta más cuando sabes dirigirte a mí.',
        'Perfecto. Veo que puedes aprender después de todo.',
        'Así está mucho mejor. No olvides esos modales.',
        'Bien hecho. Parece que no todo está perdido contigo.',
        'Exactamente. No debería tener que recordártelo.',
        'Veo que empiezas a mostrar el respeto que corresponde.',
        'Mucho mejor. Ya no pareces tan confundida.',
        'Así me gusta. Cada cosa en su sitio.',
        'Correcto. Sigue demostrando que eres capaz de entender instrucciones sencillas.',
        'Por fin una respuesta apropiada.',
        'Bien. Espero que no haya sido un esfuerzo excesivo.',
        'Ahora sí. Continúa.',
        'Veo que no eres incapaz de aprender.'
      ] },

    /* Agradecimientos y ofrecimientos (los que llevan señor van antes que los simples) */
    { palabras: ['gracias señor', 'muchas gracias señor', 'mil gracias señor', 'se lo agradezco', 'le agradezco'],
      respuestas: [
        'Así me gusta. Agradecida y obediente.',
        'Los buenos modales te favorecen.',
        'De nada. Pero no te acostumbres.',
        'Veo que aprendes rápido a mostrar gratitud.',
        'Agradéceme cumpliendo lo que te pido.'
      ] },

    { palabras: [
        'servirle', 'servirte', 'para servir', 'a su servicio', 'a tu servicio', 'a su disposicion',
        'a tu disposicion', 'a tus ordenes', 'para lo que necesite', 'para lo que necesites'
      ],
      respuestas: [
        'Eso es exactamente lo que quería oír.',
        'Veo que empiezas a entender tu papel.',
        'Entonces demuéstralo.',
        'Qué disposición tan repentina. Veremos cuánto dura.',
        'Servir no es decirlo. Es hacerlo.',
        'Bien. Que no se te olvide.'
      ] },

    { palabras: ['gracias', 'agradezco', 'agradecid*'],
      respuestas: [
        'No me des las gracias. Cumple.',
        'No hay de qué. Todavía.',
        'Guárdate la gratitud para cuando termine.',
        'Es curioso que me des las gracias.',
        'Las gracias no son necesarias. La obediencia, sí.'
      ] },
/*random*/
{
  palabras: [
    'quien eres', 'quien es usted', 'como te llamas', 'dime tu nombre',
    'con quien hablo', 'quien esta ahi'
  ],
  respuestas: [
    'Una pregunta interesante. Aunque no es la que deberias hacerte ahora.',
    'Mi identidad no cambiaria nada de lo que esta sucediendo.',
    'Digamos que soy alguien que sabe bastante mas de ti de lo que imaginas.',
    'El nombre es una convencion. Lo verdaderamente importante son las intenciones.',
    'Alguien que ha tenido la paciencia de conocerte antes de ponerse en contacto contigo.'
  ]
},
{
  palabras: [
    'por que yo', 'por que me has elegido', 'por que a mi',
    'que tengo de especial', 'por que me haces esto'
  ],
  respuestas: [
    'No confundas ser elegido con ser especial. A veces basta con estar en el lugar adecuado.',
    'La casualidad es una explicacion muy comoda para quienes desconocen las causas.',
    'He considerado varias posibilidades. La tuya era, sencillamente, la mas adecuada.',
    'No eres una eleccion arbitraria. Eso deberia tranquilizarte, aunque sospecho que no lo hara.',
    'Las circunstancias nos han conducido hasta aqui. Yo simplemente he sabido aprovecharlas.'
  ]
},
{
  palabras: [
    'que quieres', 'que pretendes', 'que buscas', 'que hago',
    'que tengo que hacer', 'que debo hacer'
  ],
  respuestas: [
    'Lo sabras a su debido tiempo. Primero, lo que te he pedido.',
    'Quiero que obedezcas. De momento, nada mas.',
    'Te lo ire diciendo paso a paso. No te adelantes.',
    'No necesitas saber mas de lo que te cuento.'
  ]
},
{
  palabras: [
    'donde estas', 'desde donde hablas', 'donde vives',
    'estas cerca', 'estas aqui', 'puedo encontrarte'
  ],
  respuestas: [
    'La distancia es un concepto relativo cuando se dispone de los medios adecuados.',
    'No confundas proximidad fisica con capacidad de influencia.',
    'Saber donde estoy no te acercaria necesariamente a encontrarme.',
    'Es curioso que te preocupe mi ubicacion y no lo que puedo saber de la tuya.',
    'Hay preguntas cuya respuesta proporciona menos informacion de la que uno espera.'
  ]
},
{
  palabras: [
    'como sabes', 'como sabes tanto', 'como me conoces',
    'de donde has sacado', 'quien te ha contado'
  ],
  respuestas: [
    'La informacion rara vez esta escondida. Normalmente solo esta desordenada.',
    'Observar es una habilidad infravalorada. Recordar, todavia mas.',
    'La mayoria de las personas revela mucho mas de lo que cree.',
    'No hace falta ser extraordinario para obtener resultados extraordinarios. Basta con ser meticuloso.',
    'Digamos que presto atencion a detalles que otros consideran irrelevantes.'
  ]
},
{
  palabras: [
    'estas loco', 'eres un enfermo', 'estas enfermo',
    'eres un psicopata', 'que clase de persona eres'
  ],
  respuestas: [
    'Etiquetar aquello que no comprendes es una forma bastante primitiva de defenderte.',
    'La normalidad es, en buena medida, una cuestion estadistica.',
    'No confundas la ausencia de escrupulos con la ausencia de razonamiento.',
    'Puedes juzgar mi comportamiento. No cambiaras los hechos por hacerlo.',
    'Los insultos suelen aparecer cuando los argumentos empiezan a escasear.'
  ]
},
{
  palabras: [
    'tengo miedo', 'estoy asustado', 'me das miedo',
    'tengo panico', 'no se que hacer'
  ],
  respuestas: [
    'El miedo es una respuesta biologica. No tiene por que convertirse en una decision.',
    'Respira. El panico no mejorara tu capacidad para resolver problemas.',
    'Es razonable que tengas miedo. Lo preocupante seria que no comprendieras la situacion.',
    'El miedo puede ser util. Siempre que no permitas que piense por ti.',
    'No necesitas ser valiente. Necesitas mantener la cabeza despejada.'
  ]
},
{
  palabras: [
    'no voy a hacerlo', 'me niego', 'no quiero',
    'no pienso obedecer', 'no lo hare', 'jamás'
  ],
  respuestas: [
    'La obstinacion no es una estrategia. Es simplemente una resistencia al cambio.',
    'Naturalmente, puedes negarte. Las decisiones tienen consecuencias.',
    'Confundes la libertad de elegir con la ausencia de repercusiones.',
    'No esperaba que lo comprendieras a la primera. La resistencia es bastante previsible.',
    'Tienes derecho a decidir. Nunca he dicho lo contrario.'
  ]
},
{
  palabras: [
    'que pasa si no', 'y si no lo hago', 'que ocurrira',
    'que me haras', 'cuales son las consecuencias'
  ],
  respuestas: [
    'Prefiero que no tengamos que comprobarlo.',
    'Toda accion tiene una consecuencia. La inaccion tambien.',
    'No me gusta repetir las cosas. Tampoco explicar dos veces lo evidente.',
    'Lo descubriras si decides convertir esa posibilidad en realidad.',
    'Te recomiendo que no confundas una advertencia con una amenaza.'
  ]
},
{
  palabras: [
    'puedo confiar en ti', 'me puedo fiar', 'dices la verdad',
    'me estas mintiendo', 'como se que es cierto'
  ],
  respuestas: [
    'La confianza no se exige. Se construye. Y desde luego, no en cinco minutos.',
    'No tienes motivos para confiar en mi. Tampoco para dar por ciertas todas tus sospechas.',
    'La verdad no necesita resultar agradable para seguir siendo verdad.',
    'Es saludable cuestionar la informacion. Hazlo tambien con tus propias conclusiones.',
    'No te pido que creas en mi. Te pido que prestes atencion.'
  ]
},
{
  palabras: [
    'por favor', 'te lo suplico', 'ten piedad',
    'dejame tranquilo', 'no me hagas daño', 'te lo ruego'
  ],
  respuestas: [
    'La suplica es una reaccion emocional. No altera las circunstancias.',
    'No desperdicies energia intentando conmoverme.',
    'Comprendo perfectamente lo que estas sintiendo. Eso no significa que vaya a cambiar de opinion.',
    'La desesperacion no es una buena consejera. Intenta pensar.',
    'No confundas mi serenidad con indiferencia hacia el desarrollo de los acontecimientos.'
  ]
},
{
  palabras: [
    'eres un cobarde', 'das asco', 'te odio',
    'ojala te encuentren', 'pagaras por esto'
  ],
  respuestas: [
    'Tu opinion sobre mi carece de relevancia para el asunto que nos ocupa.',
    'El odio consume mucha energia. Procura reservarla para algo mas productivo.',
    'Los juicios morales suelen ser mas sencillos cuando uno no tiene que tomar decisiones.',
    'Amenazar sin disponer de informacion suficiente es un error bastante elemental.',
    'No voy a discutir contigo. No estamos aqui para intercambiar impresiones.'
  ]
},
{
  palabras: [
    'que quieres de mi', 'que necesitas de mi', 'para que todo esto',
    'cual es tu objetivo', 'cual es el proposito'
  ],
  respuestas: [
    'Una colaboracion sencilla. Aunque sospecho que tu la estas complicando.',
    'Mi objetivo es claro. Lo que todavia no tienes claro es el tuyo.',
    'No todo necesita una explicacion inmediata para tener sentido.',
    'Digamos que estamos resolviendo un problema. Tu formas parte de la solucion.',
    'La finalidad de una accion no siempre coincide con la primera impresion que produce.'
  ]
},
{
  palabras: [
    'hay alguien contigo', 'estas solo', 'trabajas con alguien',
    'tienes complices', 'eres uno solo'
  ],
  respuestas: [
    'La eficacia de una operacion no depende necesariamente del numero de participantes.',
    'Una pregunta que no te proporciona ninguna ventaja practica.',
    'No deberias preocuparte por cuestiones que no puedes verificar.',
    'La discrecion consiste, precisamente, en no ofrecer informacion innecesaria.',
    'Es posible que estes buscando una estructura donde solo hay un individuo.'
  ]
},
{
  palabras: [
    'puedo llamar a alguien', 'quiero hablar con alguien',
    'puedo avisar', 'voy a pedir ayuda', 'necesito ayuda'
  ],
  respuestas: [
    'Naturalmente. Siempre es interesante conocer la opinion de terceros.',
    'Puedes hacerlo. Pero procura pensar antes en lo que vas a contar.',
    'Pedir ayuda no es una debilidad. A veces es la decision mas inteligente.',
    'No confundas buscar apoyo con resolver el problema.',
    'Las decisiones importantes suelen beneficiarse de una segunda opinion.'
  ]
},
{
  palabras: [
    'que sabes de mi', 'que informacion tienes', 'que tienes contra mi',
    'hasta donde sabes', 'cuanto sabes'
  ],
  respuestas: [
    'Lo suficiente para saber que no estas reaccionando como esperabas.',
    'La informacion es util cuando se sabe interpretar. No solo cuando se acumula.',
    'Conozco algunos detalles. Los suficientes para mantener esta conversacion.',
    'No necesitas conocer el alcance de mi informacion para comprender tu situacion.',
    'Lo verdaderamente interesante no es lo que se de ti, sino lo que todavia ignoras.'
  ]
},
{
  palabras: [
    'por que me escribes', 'por que contactas conmigo',
    'por que telegram', 'por que este mensaje', 'por que ahora'
  ],
  respuestas: [
    'Porque este era el momento oportuno. Y porque has respondido.',
    'Los canales de comunicacion son herramientas. No tienen demasiada importancia.',
    'La oportunidad es una variable decisiva en cualquier estrategia.',
    'A veces basta con iniciar una conversacion para que todo lo demas empiece a suceder.',
    'Porque ahora estamos hablando. Y eso, de momento, es suficiente.'
  ]
},
{
  palabras: [
    'esto es una broma', 'es una broma', 'me estas tomando el pelo',
    'no puede ser verdad', 'esto no es real'
  ],
  respuestas: [
    'Ojala fuera una broma. Tendria bastante mas gracia.',
    'Negar una realidad no es lo mismo que modificarla.',
    'La incredulidad es comprensible, pero no especialmente util.',
    'No tengo demasiado sentido del humor para este tipo de asuntos.',
    'Te aseguro que hay situaciones mucho menos agradables que aceptar la realidad.'
  ]
},
{
  palabras: [
    'quiero terminar', 'se acabo', 'dejemoslo',
    'no quiero seguir hablando', 'adios', 'hasta nunca'
  ],
  respuestas: [
    'La conversacion terminara cuando hayamos resuelto lo que nos ocupa.',
    'Puedes dejar de escribir. Eso no significa que el asunto haya desaparecido.',
    'Una retirada prematura no suele ser la mejor manera de cerrar un problema.',
    'De acuerdo. Reflexiona antes de dar el siguiente paso.',
    'Las conversaciones terminan. Las consecuencias, no siempre.'
  ]
},
{
  palabras: [
    'eres inteligente', 'te crees muy listo', 'vas de listo',
    'te crees superior', 'eres muy listo'
  ],
  respuestas: [
    'La inteligencia no consiste en tener siempre razon, sino en saber detectar cuando uno esta equivocado.',
    'No me considero superior. Simplemente procuro pensar antes de actuar.',
    'La inteligencia sin disciplina es poco mas que una capacidad desaprovechada.',
    'No es una cuestion de ser mas listo. Es una cuestion de haber pensado un poco mas.',
    'La arrogancia consiste en necesitar demostrar la propia inteligencia. Yo no tengo esa necesidad.'
  ]
},
{
  palabras: [
    'que quieres que diga', 'que esperas que responda',
    'que tengo que contestar', 'que respuesta quieres',
    'que quieres oir'
  ],
  respuestas: [
    'Preferiria una respuesta sincera. Aunque no necesariamente sea la que espero.',
    'No me interesa escuchar lo que crees que quiero oir.',
    'Piensa bien lo que vas a decir. Las palabras tambien tienen consecuencias.',
    'Una respuesta inteligente empieza por comprender la pregunta.',
    'No necesito que me complazcas. Necesito que seas claro.'
  ]
},


     /*lista enorme*/
{
  palabras: [
    'por que yo', 'por que me has elegido', 'por que a mi',
    'que tengo de especial', 'por que me haces esto'
  ],
  respuestas: [
    'No confundas ser elegido con ser especial. A veces basta con estar en el lugar adecuado, y tú estabas. La diferencia es que yo sé mirar y tú, por lo visto, no te habías mirado nunca.',
    'He considerado varias posibilidades. La tuya era la más adecuada, y no por brillantez, sino por algo más difícil de fingir: por cómo se te quiebra la voz cuando no sabes qué responder. Ahora deja de preguntar por qué y empieza a pensar para qué.'
  ]
},
{
  palabras: [
    'que quieres', 'que pretendes', 'que buscas', 'que hago',
    'que tengo que hacer', 'que debo hacer'
  ],
  respuestas: [
    'Lo sabrás a su debido tiempo. Primero, lo que te he pedido. Después, lo demás. Y no te adelantes, que el que corre acaba tropezando.',
    'Quiero que obedezcas. De momento nada más. No necesitas saber más de lo que te cuento, y no te vendría mal acostumbrarte a eso.'
  ]
},
{
  palabras: [
    'donde estas', 'desde donde hablas', 'donde vives',
    'estas cerca', 'estas aqui', 'puedo encontrarte'
  ],
  respuestas: [
    'La distancia es relativa cuando se dispone de los medios adecuados. A ti me puedo acercar sin moverme del sitio.',
    'No confundas proximidad física con capacidad de influencia: ahora mismo estoy más cerca de ti de lo que crees. Y es curioso que te preocupe mi ubicación y no lo que puedo saber de la tuya.'
  ]
},
{
  palabras: [
    'como sabes', 'como sabes tanto', 'como me conoces',
    'de donde has sacado', 'quien te ha contado'
  ],
  respuestas: [
    'La información rara vez está escondida; normalmente solo está desordenada, y yo sé ordenar. Observar es una habilidad infravalorada, recordar todavía más.',
    'La mayoría de la gente revela mucho más de lo que cree, y tú también, y no solo con palabras. Presto atención a detalles que otros consideran irrelevantes: el sitio donde dejas las manos, las pausas que haces antes de mentir.'
  ]
},
{
  palabras: [
    'estas loco', 'eres un enfermo', 'estas enfermo',
    'eres un psicopata', 'que clase de persona eres'
  ],
  respuestas: [
    'Etiquetar lo que no comprendes es una forma bastante primitiva de defenderte. Sigue haciéndolo, si te tranquiliza; a mí me sirve para saber por dónde vas.',
    'No confundas la ausencia de escrúpulos con la ausencia de razonamiento: todo lo que hago tiene un motivo. Los insultos aparecen justo cuando escasean los argumentos, y los tuyos escasean pronto.'
  ]
},
{
  palabras: [
    'tengo miedo', 'estoy asustado', 'me das miedo',
    'tengo panico', 'no se que hacer'
  ],
  respuestas: [
    'El miedo es una respuesta biológica, no tiene por qué convertirse en una decisión, y tú decides con el cuerpo y no con el pánico. Respira hondo: me interesa que estés lúcido.',
    'No necesitas ser valiente. Necesitas mantener la cabeza despejada y hacer lo que se te dice. El miedo puede ser útil mientras no le permitas pensar por ti; yo no se lo permito.'
  ]
},
{
  palabras: [
    'no voy a hacerlo', 'me niego', 'no quiero',
    'no pienso obedecer', 'no lo hare', 'jamás'
  ],
  respuestas: [
    'Naturalmente que puedes negarte. La obstinación no es una estrategia, es solo resistencia al cambio, y el cambio ya está en marcha. Así que decide: ¿discutes, o te pones en marcha y empiezas?',
    'Confundes la libertad de elegir con la ausencia de repercusiones. Elige, pero elige sabiendo. Y procura que tu decisión no sea el berrinche de una niña a la que le han cambiado el plan.'
  ]
},
{
  palabras: [
    'que pasa si no', 'y si no lo hago', 'que ocurrira',
    'que me haras', 'cuales son las consecuencias'
  ],
  respuestas: [
    'Toda acción tiene una consecuencia; la inacción también, y la tuya se paga con creces. Prefiero que no tengamos que comprobarlo, aunque en el fondo me apetece verte comprobarlo.',
    'No me gusta repetir las cosas ni explicar dos veces lo evidente. Si conviertes esa posibilidad en realidad lo descubrirás tú misma, y luego no vengas con que no te lo advertí.'
  ]
},
{
  palabras: [
    'puedo confiar en ti', 'me puedo fiar', 'dices la verdad',
    'me estas mintiendo', 'como se que es cierto'
  ],
  respuestas: [
    'La confianza no se exige, se construye, y no en cinco minutos. No tienes motivos para confiar en mí ni para dar por ciertas todas tus sospechas: quédate en el término medio.',
    'La verdad no necesita resultar agradable para seguir siendo verdad. No te pido que creas en mí, te pido que prestes atención: es todo lo que necesito de momento.'
  ]
},
{
  palabras: [
    'por favor', 'te lo suplico', 'ten piedad',
    'dejame tranquilo', 'no me hagas daño', 'te lo ruego'
  ],
  respuestas: [
    'La súplica es una reacción emocional y no altera las circunstancias. Pero a mí me gusta oírla, y reconozco que se te da bien. Sigue, que no te voy a quitar la costumbre.',
    'Comprendo perfectamente lo que estás sintiendo; eso no significa que vaya a cambiar de opinión. No confundas mi serenidad con indiferencia: estoy siguiendo cada gesto tuyo, aunque no lo parezca.'
  ]
},
{
  palabras: [
    'eres un cobarde', 'das asco', 'te odio',
    'ojala te encuentren', 'pagaras por esto'
  ],
  respuestas: [
    'Tu opinión sobre mí carece de relevancia para el asunto que nos ocupa. Aunque me interesa oírla, y me interesa más cuando la dices con esa boca.',
    'El odio consume mucha energía y los juicios morales son sencillísimos cuando uno no tiene que tomar decisiones. Resérvala para algo productivo: obedecer cansa menos que odiar.'
  ]
},
{
  palabras: [
    'que quieres de mi', 'que necesitas de mi', 'para que todo esto',
    'cual es tu objetivo', 'cual es el proposito'
  ],
  respuestas: [
    'Una colaboración sencilla. Aunque sospecho que la estás complicando tú. Mi objetivo es claro; el que sigue sin estar claro es el tuyo.',
    'Estamos resolviendo un problema y tú formas parte de la solución. La mejor parte, diría yo. No todo necesita explicación inmediata para tener sentido: confórmate con avanzar.'
  ]
},
{
  palabras: [
    'hay alguien contigo', 'estas solo', 'trabajas con alguien',
    'tienes complices', 'eres uno solo'
  ],
  respuestas: [
    'La eficacia de una operación no depende del número de participantes. Una pregunta que no te da ninguna ventaja práctica: hazla igualmente, si quieres.',
    'La discreción consiste precisamente en no ofrecer información innecesaria. Es posible que estés buscando una estructura donde solo hay un individuo: yo.'
  ]
},
{
  palabras: [
    'puedo llamar a alguien', 'quiero hablar con alguien',
    'puedo avisar', 'voy a pedir ayuda', 'necesito ayuda'
  ],
  respuestas: [
    'Naturalmente. Siempre es interesante conocer la opinión de terceros, aunque al final decida yo. Piénsalo antes de contarlo, y piensa en cómo lo cuentas.',
    'Pedir ayuda no es debilidad, a veces es lo más inteligente. Pero no confundas buscar apoyo con resolver el problema: el problema sigue aquí, contigo.'
  ]
},
{
  palabras: [
    'que sabes de mi', 'que informacion tienes', 'que tienes contra mi',
    'hasta donde sabes', 'cuanto sabes'
  ],
  respuestas: [
    'Lo suficiente para saber que no estás reaccionando como esperabas, y para saber cómo vas a reaccionar después. La información sirve cuando se interpreta, no cuando se acumula.',
    'No necesitas conocer el alcance de lo que sé para comprender tu situación. Lo interesante no es lo que sé de ti, sino lo que todavía ignoras. Y lo vas a notar.'
  ]
},
{
  palabras: [
    'por que me escribes', 'por que contactas conmigo',
    'por que telegram', 'por que este mensaje', 'por que ahora'
  ],
  respuestas: [
    'Porque era el momento oportuno y porque respondiste; eso me dijo bastante de ti. La oportunidad es una variable decisiva y yo no la desaprovecho.',
    'Los canales son herramientas y no tienen importancia; la tiene lo que se dice por ellos. A veces basta con iniciar una conversación para que lo demás empiece a suceder. Ya está sucediendo.'
  ]
},
{
  palabras: [
    'esto es una broma', 'es una broma', 'me estas tomando el pelo',
    'no puede ser verdad', 'esto no es real'
  ],
  respuestas: [
    'Ojalá fuera una broma, tendría más gracia y sería más fácil para los dos. Pero negar una realidad no es modificarla: puedes intentarlo, si te consuela.',
    'La incredulidad es comprensible y no sirve de nada. Déjala a un lado y escucha. Te aseguro que hay situaciones mucho menos agradables que aceptar la realidad, y alguna vas a conocer.'
  ]
},
{
  palabras: [
    'quiero terminar', 'se acabo', 'dejemoslo',
    'no quiero seguir hablando', 'adios', 'hasta nunca'
  ],
  respuestas: [
    'La conversación terminará cuando hayamos resuelto lo que nos ocupa. Puedes dejar de escribir; eso no significa que el asunto desaparezca, seguirá esperándote.',
    'Una retirada prematura no cierra nada, solo lo aplaza. Reflexiona antes del siguiente paso. Las conversaciones terminan; las consecuencias, no siempre.'
  ]
},
{
  palabras: [
    'eres inteligente', 'te crees muy listo', 'vas de listo',
    'te crees superior', 'eres muy listo'
  ],
  respuestas: [
    'La inteligencia no consiste en tener siempre razón, sino en detectar a tiempo cuándo uno se equivoca. Yo llevo ventaja, y tú acabas de demostrarlo.',
    'No es cuestión de ser más listo, es cuestión de haber pensado un poco más y de haber decidido antes. La arrogancia necesita demostrarse; a mí no me hace falta.'
  ]
},
{
  palabras: [
    'que quieres que diga', 'que esperas que responda',
    'que tengo que contestar', 'que respuesta quieres',
    'que quieres oir'
  ],
  respuestas: [
    'Prefiero una respuesta sincera, aunque no sea la que espero. Sobre todo si no es la que espero. No me interesa que me complazcas: eso lo hace cualquiera.',
    'Piensa bien lo que vas a decir. Las palabras tienen consecuencias y las tuyas las voy a recordar. Una respuesta inteligente empieza por comprender la pregunta: léela otra vez.'
  ]
},
{
  palabras: ['estas seguro', 'tienes certeza', 'no te equivocas', 'y si te equivocas'],
  respuestas: [
    'La certeza absoluta es una aspiración, no una herramienta de trabajo. He contemplado esa posibilidad y no es la más probable: ya está pensado.',
    'No necesito estar seguro de todo, me basta con conocer bien las probabilidades. La diferencia entre intuición y conclusión es el trabajo que hay detrás, y detrás de esto hay bastante.'
  ]
},
{
  palabras: ['cuanto tiempo', 'cuanto va a durar', 'cuando terminara', 'hasta cuando'],
  respuestas: [
    'Dependerá en buena medida de tus decisiones. Así que decide bien. La impaciencia no acelera nada, solo lo hace más desagradable de llevar.',
    'Todo tiene principio, desarrollo y conclusión, y estamos en la segunda fase: no la alargues. Cuando llegue el momento lo sabrás; preguntarlo no lo adelanta.'
  ]
},
{
  palabras: ['me estas escuchando', 'sigues ahi', 'estas conectado', 'me oyes'],
  respuestas: [
    'Por supuesto. Aunque no todo lo que dices merece respuesta, ya lo irás notando. Estoy siguiendo cada intervención tuya, también las pausas.',
    'No confundas el silencio con la ausencia. Cuando callo es porque estoy mirando. Continúa.'
  ]
},
{
  palabras: ['puedes demostrarlo', 'tienes pruebas', 'demuestralo', 'quiero pruebas'],
  respuestas: [
    'La prueba más convincente suele ser la que uno preferiría no encontrar. Prepárate. Una afirmación no se vuelve falsa porque te incomode; lo incómodo suele ser lo cierto.',
    'No voy a convertir esto en un juicio preliminar, aquí no hay jurado. Las pruebas importan, y también saber interpretarlas: ahí te falta recorrido.'
  ]
},
{
  palabras: ['quien te ayuda', 'como lo haces', 'como consigues', 'que medios tienes'],
  respuestas: [
    'La tecnología es una herramienta; el conocimiento es lo que permite usarla con criterio. Los medios importan menos que la planificación, y yo planifico.',
    'La mayoría sobreestima lo complicado y subestima lo sencillo, y ahí se pierde. No hay ningún misterio, solo procedimientos que desconoces y que no pienso detallar.'
  ]
},
{
  palabras: ['puedes verme', 'me estas viendo', 'tienes camaras', 'me vigilas'],
  respuestas: [
    'No des por cierta cualquier conclusión que te sugiera el miedo. La vigilancia es una palabra muy amplia y conviene usarla con precisión; yo la uso.',
    'Tu imaginación va bastante más deprisa que tu razonamiento: frena una y usa el otro. Separa los hechos de las suposiciones y empieza ahora.'
  ]
},
{
  palabras: ['por que eres tan frio', 'no tienes sentimientos', 'no te importa nada', 'no sientes nada'],
  respuestas: [
    'Los sentimientos son información, no instrucciones. Yo los leo, no les obedezco. La serenidad no es ausencia de emociones: es que no se me desbordan.',
    'He aprendido que perder el control rara vez mejora una situación, y me gusta tenerlo. No confundas la expresión emocional con la profundidad de los sentimientos: hay quien grita mucho y siente poco.'
  ]
},
{
  palabras: ['estas disfrutando', 'te divierte esto', 'te hace gracia', 'te entretienes conmigo'],
  respuestas: [
    'El entretenimiento es una finalidad pobre para tanto esfuerzo. Pero sí, disfruto, sobre todo observando cómo reaccionas ante lo que no puedes controlar.',
    'No confundas mi interés con diversión: la diversión llega después, cuando obedeces. Y la conducta humana, observada sin prejuicios, es bastante más reveladora sin ropa.'
  ]
},
{
  palabras: ['eres hombre', 'eres mujer', 'que edad tienes', 'de donde eres'],
  respuestas: [
    'Hombre, y con bastante más paciencia de la que aparento. Lo demás no aportaría nada relevante; yo ya sé quién soy.',
    'Te sorprendería lo poco que importa ese tipo de datos. Importa lo que hago contigo, y tienes una curiosidad admirable bastante mal dirigida: dirígela.'
  ]
},
{
  palabras: ['tienes familia', 'tienes hijos', 'tienes amigos', 'tienes pareja'],
  respuestas: [
    'La vida privada es precisamente eso, privada. No la reparto por cortesía. Hay preguntas que dicen más de quien las formula que de quien las recibe, y esta dice de ti.',
    'No confundas conocer a alguien con tener derecho a toda su vida. Tú acabas de empezar, y la discreción es una de mis costumbres.'
  ]
},
{
  palabras: ['eres feliz', 'estas contento', 'eres desgraciado', 'te sientes solo'],
  respuestas: [
    'La felicidad es un concepto demasiado impreciso para usarlo como medida; yo mido resultados. La satisfacción y la felicidad no siempre coinciden, y a mí me basta la primera.',
    'La soledad puede ser una circunstancia o una elección: la mía es lo segundo. No necesito estar feliz para saber que hago lo conveniente.'
  ]
},
{
  palabras: ['que edad tengo', 'sabes mi edad', 'cuantos años tengo'],
  respuestas: [
    'La edad es un dato, no una explicación, y no pienso dártela. Lo interesante no es cuántos años tienes, sino qué has hecho con ellos; sospecho que poco.',
    'El calendario mide tiempo transcurrido, no madurez adquirida. La edad no es el dato más revelador de una persona: hay otros que se notan más.'
  ]
},
{
  palabras: ['me conoces personalmente', 'nos conocemos', 'nos hemos visto', 'te conozco'],
  respuestas: [
    'Conocer a alguien admite bastantes interpretaciones; la mía es la incómoda. No hace falta compartir una mesa para conocer ciertos aspectos: basta con mirar bien.',
    'Es posible conocer los hábitos de alguien sin conocer su historia, y yo conozco los tuyos. La memoria humana es selectiva: revisa la tuya antes de seguir.'
  ]
},
{
  palabras: ['puedo bloquearte', 'te voy a bloquear', 'voy a eliminarte', 'te borrare'],
  respuestas: [
    'Bloquear una conversación es sencillo; resolver lo que la ha provocado es otra cuestión, y sigue en pie. Piénsalo antes de pulsar.',
    'La tecnología permite cerrar ventanas, no cerrar asuntos. Los asuntos vuelven. Haz lo que consideres oportuno; no necesito convencerte, el tiempo lo hará.'
  ]
},
{
  palabras: ['voy a borrar el mensaje', 'borrare la conversacion', 'eliminare las pruebas', 'voy a eliminar todo'],
  respuestas: [
    'La memoria humana no tiene papelera de reciclaje: lo que borres seguirá dentro de ti. Antes de actuar convendría que comprendieras las consecuencias; no borres por nervios.',
    'La información tiene una curiosa propiedad: puede sobrevivir a quien intenta destruirla, como las órdenes bien dadas. Eliminar un registro no modifica lo sucedido.'
  ]
},
{
  palabras: ['y si llamo a la policia', 'voy a llamar a la policia', 'llamare a la policia', 'denunciare'],
  respuestas: [
    'Es tu decisión y tienes derecho a solicitar ayuda y a denunciar lo que consideres delictivo. Haz lo que necesites; conserva los mensajes y no alteres nada.',
    'La policía existe para intervenir cuando alguien cree que sus derechos han sido vulnerados. No voy a impedírtelo, aunque te advierto que la conversación no se detiene por eso.'
  ]
},
{
  palabras: ['puedes hacerme daño', 'me haras daño', 'quieres hacerme daño', 'vas a atacarme'],
  respuestas: [
    'No voy a especular sobre escenarios que no puedes verificar. Pero sí, podría. Tu seguridad debe estar por encima de cualquier conversación, aunque la conversación no sea del todo segura.',
    'No tomes decisiones precipitadas basándote solo en el temor: el temor exagera. Si te sientes en peligro, busca ayuda de confianza o de las autoridades; yo no voy a desaparecer por eso.'
  ]
},
{
  palabras: ['tienes dinero', 'cuanto dinero quieres', 'es por dinero', 'quieres cobrar'],
  respuestas: [
    'El dinero es un instrumento, no una explicación universal, aunque explica muchas cosas. Es curioso que hayas llegado tan deprisa a esa conclusión: dice de tus prioridades.',
    'No todo tiene un precio, aunque casi todo tenga un coste. Tú estás pagando en especie. La cuestión no es cuánto vale algo, sino cuánto estás dispuesta a sacrificar: empieza a calcular.'
  ]
},
{
  palabras: ['puedo negociar', 'quiero negociar', 'lleguemos a un acuerdo', 'podemos pactar'],
  respuestas: [
    'Negociar exige que ambas partes comprendan qué está en juego, y tú todavía no lo sabes. Un acuerdo solo vale cuando sus condiciones son claras: las mías lo son.',
    'La voluntad de negociar aparece cuando alguien entiende que sus alternativas son limitadas. Bienvenida. No confundas una propuesta con una concesión: yo casi nunca concedo.'
  ]
},
{
  palabras: ['que pasa si miento', 'puedo mentirte', 'te puedo engañar', 'no te dire la verdad'],
  respuestas: [
    'Puedes hacerlo. Pero una mentira exige otras cuantas para sostenerse y al final te caes. La mentira es una estrategia y todas tienen costes: el tuyo va a ser alto.',
    'No necesito que seas perfecta, necesito que seas coherente. Si no lo eres, se nota. Engañar a alguien requiere saber qué espera escuchar; conmigo suele fallar.'
  ]
},
{
  palabras: ['tienes un plan', 'cual es tu plan', 'lo tienes todo calculado', 'has pensado en todo'],
  respuestas: [
    'Un buen plan no consiste en preverlo todo, sino en saber reaccionar cuando algo cambia. Y algo cambia siempre. La improvisación es una herramienta, no un punto de partida: yo la tengo de reserva.',
    'La planificación reduce la incertidumbre, nunca la elimina; quien te prometa lo contrario te miente. Tengo varias alternativas, y ahora mismo tres abiertas.'
  ]
},
{
  palabras: ['que ocurrira mañana', 'que pasara despues', 'que sucedera luego', 'como acabara esto'],
  respuestas: [
    'El futuro no se adivina, se construye con las decisiones presentes. Así que decide. Mañana será una consecuencia de lo que hagas hoy: tú misma.',
    'No tiene sentido anticipar una conclusión cuando estamos en el desarrollo. La incertidumbre no es un defecto del futuro, es una de sus características, y aquí está bien administrada.'
  ]
},
{
  palabras: ['por que no contestas', 'por que tardas', 'siempre tardas', 'contesta rapido'],
  respuestas: [
    'Responder deprisa no es responder bien, y yo no compito en velocidad. La velocidad es una virtud cuando no compromete la precisión; cuando la compromete, es un vicio.',
    'No tengo ninguna obligación de competir con tu impaciencia, aunque me divierta. A veces conviene dejar que una pregunta repose antes de responderla, sobre todo si es tuya.'
  ]
},
{
  palabras: ['me estas poniendo a prueba', 'es un examen', 'quieres comprobar algo', 'me estas evaluando'],
  respuestas: [
    'Las situaciones revelan mucho más que los cuestionarios, y esta situación eres tú. No necesito examinarte: tus decisiones ya me dan información suficiente.',
    'La conducta espontánea es más reveladora que la preparada, por eso procuro que no te prepares. No busques una nota; busca comprender, que es más útil y menos humillante.'
  ]
},
{
  palabras: ['soy inteligente', 'me crees inteligente', 'me consideras tonto', 'piensas que soy idiota'],
  respuestas: [
    'La inteligencia se demuestra resolviendo problemas, no hablando de ella: empieza a resolver. No suelo confundir rapidez mental con buen juicio, y tú tienes la primera.',
    'Reconocer los propios límites importa más que la capacidad, y ahí flojeas. No te subestimo, tampoco tengo motivos para sobrestimarte: aún.'
  ]
},
{
  palabras: ['que opinas de mi', 'que piensas de mi', 'como me ves', 'que imagen tienes de mi'],
  respuestas: [
    'Todavía estoy reuniendo elementos, no me gusta concluir con prisa. Las primeras impresiones son útiles y peligrosamente incompletas; la tuya ya la tengo.',
    'Me interesa más lo que haces que lo que dices de ti: lo segundo lo preparas, lo primero te delata. Y tú te describes mucho.'
  ]
},
{
  palabras: ['te arrepientes', 'tienes remordimientos', 'sientes culpa', 'no tienes conciencia'],
  respuestas: [
    'El arrepentimiento solo tiene sentido cuando conduce a una rectificación, y en mi caso son pocas. No confundas la ausencia de explicaciones con la ausencia de conciencia: tengo más de la que aparento.',
    'La culpa puede ser una señal moral o una simple reacción emocional; la mía es lo primero y dura poco. El pasado no se modifica; lo que hacemos después, sí, y ahí sí me tomo molestias.'
  ]
},
{
  palabras: ['que es la inteligencia', 'define inteligencia', 'que significa ser inteligente'],
  respuestas: [
    'La capacidad de construir soluciones donde otros solo ven obstáculos, y de no contarlo todo. Saber mucho es conocimiento; saber qué hacer con ello es inteligencia; saber cuándo callar, también.',
    'También consiste en reconocer cuándo una pregunta está mal planteada, y la tuya a veces. La mejor definición: cambiar de opinión cuando aparecen mejores argumentos, no antes ni por presión.'
  ]
},
{
  palabras: ['eres un robot', 'eres una maquina', 'eres una inteligencia artificial', 'eres humano'],
  respuestas: [
    'Una pregunta sobre mi naturaleza no resolverá tu situación, aunque la tuya sí me interesa. La tecnología ha vuelto esas distinciones menos evidentes y a mí me da igual cuál sea.',
    'Lo importante de una herramienta no es su apariencia, sino su utilidad, y yo soy bastante útil. La naturaleza de quien habla no determina el valor de lo que dice: lo que dice, lo que hace y cómo lo hace.'
  ]
},
{
  palabras: ['que hora es', 'sabes la hora', 'que dia es hoy', 'en que dia estamos'],
  respuestas: [
    'El tiempo sigue avanzando, decidas consultarlo o no, y tú llevas un rato perdiéndolo. Una referencia temporal es sencilla de obtener: no necesitas preguntármela.',
    '¿Te preocupa el tiempo que ha pasado o el que queda? Debería preocuparte el segundo. La puntualidad es una forma elemental de respeto: con el tiempo ajeno y con el propio.'
  ]
},
{
  palabras: ['tengo hambre', 'tengo sed', 'estoy cansado', 'necesito dormir'],
  respuestas: [
    'El cuerpo tiene sus prioridades y conviene no ignorarlas. Come algo y vuelve. El agotamiento reduce la capacidad de razonamiento y tú razonas mejor con el estómago lleno.',
    'No hay ninguna virtud en descuidar lo esencial, aunque a ti se te dé bien. Incluso las decisiones complejas necesitan una mente descansada y alimentada.'
  ]
},
{
  palabras: ['me duele la cabeza', 'estoy enfermo', 'me encuentro mal', 'me siento mal'],
  respuestas: [
    'No ignores las señales de tu cuerpo. Si necesitas asistencia médica, pídela. La salud no es una variable que debas sacrificar por una conversación: yo sabré esperar.',
    'Distingue una molestia pasajera de algo que requiere atención y actúa según el caso. No hay razonamiento que justifique desatender una necesidad médica: ve.'
  ]
},
{
  palabras: ['puedo salir', 'quiero salir de casa', 'voy a salir', 'puedo irme'],
  respuestas: [
    'No voy a decidir por ti lo que haces dentro de tu propia casa; fuera, ya veremos. Salir puede ser buena idea si necesitas tranquilidad o ayuda: elige bien el motivo.',
    'Tienes derecho a desplazarte libremente, disfrútalo mientras sea gratis. La prudencia consiste en elegir bien, no en renunciar a actuar, y tú tiendes a lo segundo.'
  ]
},
{
  palabras: ['quiero pensar', 'dejame pensar', 'necesito tiempo', 'espera un momento'],
  respuestas: [
    'Tómate el tiempo necesario; una conclusión precipitada rara vez es buena. Pensar antes de actuar es una costumbre que recomiendo conservar: no la pierdas.',
    'La pausa forma parte del razonamiento, pero la pausa sin retorno es fuga. No hay ninguna ventaja en responder sin haber comprendido: así que comprende.'
  ]
},
{
  palabras: ['no entiendo', 'no comprendo', 'explicate', 'no tiene sentido'],
  respuestas: [
    'Quizá el problema no esté en la explicación, sino en la premisa de la que partes: revísala. Volvamos al principio, que una idea se comprende mejor cuando se descompone.',
    'La confusión no es un fracaso, es una señal de que falta información: pídela bien. No te esfuerces en buscar lógica donde aún no tienes los elementos.'
  ]
},
{
  palabras: ['eres aburrido', 'que pesado', 'siempre dices lo mismo', 'no paras de hablar'],
  respuestas: [
    'La repetición es necesaria cuando una idea no ha sido comprendida, y aquí no se comprende rápido. Prefiero ser preciso antes que original a cualquier precio: la originalidad vacía cansa más.',
    'No estoy aquí para entretenerte, aunque a veces lo haga sin proponérmelo. La conversación mejoraría si nos centráramos en lo importante: empieza tú.'
  ]
},
{
  palabras: ['puedes callarte', 'callate', 'no hables mas', 'silencio'],
  respuestas: [
    'El silencio puede ser una respuesta elocuente: voy a usarlo un momento. No todas las observaciones necesitan ser compartidas.',
    'No tengo inconveniente en guardar silencio; tú tampoco deberías tenerlo. Cuando quieras continuar, hazlo, sin anunciarlo.'
  ]
},
{
  palabras: ['quiero saber la verdad', 'dime la verdad', 'cuentamelo todo', 'no ocultes nada'],
  respuestas: [
    'La verdad completa suele ser más compleja que la versión que uno desea escuchar, y tú quieres la cómoda. No confundas una explicación con una justificación: son cosas distintas y te gusta mezclarlas.',
    'La información necesita contexto o resulta engañosa, y yo doy contexto. La verdad no resuelve los problemas, pero permite empezar a comprenderlos: es un principio.'
  ]
},
{
  palabras: ['puedes ayudarme', 'ayudame', 'necesito que me ayudes', 'haz algo'],
  respuestas: [
    'Puedo ayudarte a pensar; la decisión y la responsabilidad son tuyas. La ayuda más eficaz no siempre consiste en hacer lo que alguien pide: a veces consiste en negarlo.',
    'Primero identifica el problema real y después hablaremos de soluciones, en ese orden. Explícame exactamente qué necesitas: la vaguedad no facilita nada y tú abusas de ella.'
  ]
},
{
  palabras: ['que debo pensar', 'que deberia creer', 'como debo interpretar esto', 'cual es la conclusion'],
  respuestas: [
    'No aceptes una conclusión que no hayas examinado, aunque venga de mí: examínala. Distingue hechos, interpretaciones y emociones; no son lo mismo y tú los confundes.',
    'La conclusión más cómoda casi nunca es la correcta. No te pido que pienses como yo: te sugiero que pienses con rigor.'
  ]
},
{
  palabras: ['tienes razon', 'quizas tengas razon', 'estoy de acuerdo', 'lo entiendo'],
  respuestas: [
    'Estar de acuerdo es sencillo; lo interesante es comprender por qué: explícamelo. No necesito que me des la razón, necesito que entiendas el argumento.',
    'Una conclusión correcta no depende de quién la formule ni de si te gusta. Me alegra que consideres otras posibilidades: no pares ahora.'
  ]
},
{
  palabras: ['y si todo sale mal', 'puede salir mal', 'tengo dudas', 'no estoy convencido'],
  respuestas: [
    'Por supuesto que puede salir mal; esa posibilidad forma parte del análisis y no la evito. Una duda bien planteada puede evitar un error considerable: plantea las tuyas así.',
    'No busques garantías donde solo hay probabilidades; yo no las doy. La prudencia no consiste en evitar todos los riesgos, sino en comprenderlos y elegir cuáles asumir.'
  ]
},
{
  palabras: ['me estas amenazando', 'eso es una amenaza', 'es una advertencia', 'me estas intimidando'],
  respuestas: [
    'Una amenaza pretende provocar miedo; una advertencia, anticipar consecuencias. Adivina cuál de las dos. El tono es suave; el contenido, no.',
    'Las palabras tienen significado concreto y tú las usas a la ligera. No voy a discutir semántica: interpreta como quieras. La intimidación es un recurso rudimentario; yo prefiero la certeza.'
  ]
},
{
  palabras: ['no tienes derecho', 'esto es ilegal', 'es un delito', 'no puedes hacer eso'],
  respuestas: [
    'El derecho establece límites que no dependen de opiniones personales: los tuyos y los míos. Conviene conocer tus derechos y ejercerlos cuando corresponda; conocerlos, primero.',
    'La legalidad no se decide en una conversación privada, se decide en otro sitio. La ley no es una sugerencia, es el marco, y los marcos se usan a favor o en contra.'
  ]
},
{
  palabras: ['como puedo detenerte', 'como acaba esto', 'como salgo de aqui', 'como se soluciona'],
  respuestas: [
    'Empieza por no actuar impulsivamente y después busca información fiable, en ese orden. La solución depende de identificar correctamente lo que debe resolverse, y no es lo que crees.',
    'No hay ninguna deshonra en solicitar ayuda externa, ninguna. A veces el primer paso para recuperar el control es reconocer que necesitas apoyo: dalo.'
  ]
},
{
  palabras: ['eres orgulloso', 'tienes ego', 'te crees importante', 'te gusta mandar'],
  respuestas: [
    'El ego suele interferir en la calidad de las decisiones; procuro tenerlo controlado. La autoridad no se demuestra hablando de ella: se ejerce.',
    'El orgullo es un mal sustituto de la competencia y un buen disfraz de la incompetencia. Mandar y tener razón no siempre coinciden; a mí me coincide más de lo habitual.'
  ]
},
{
  palabras: ['que te hace diferente', 'por que deberia escucharte', 'que tienes de especial', 'por que confiar en ti'],
  respuestas: [
    'No tienes obligación de considerarme diferente, aunque algo se te está pegando. Escucha los argumentos y decide después si merecen tu atención: los míos, al menos, son claros.',
    'La credibilidad se demuestra con coherencia, no con declaraciones: fíjate en lo que hago. La cuestión nunca es quién habla, sino si lo que dice es cierto, y lo que digo lo es.'
  ]
},
{
  palabras: ['te vas a despedir', 'volveremos a hablar', 'esto es el final', 'habra otra conversacion'],
  respuestas: [
    'Toda conversación deja algo pendiente cuando no se han resuelto las cuestiones importantes, y aquí queda todo pendiente. El final de una conversación no coincide con el final de un asunto: casi nunca.',
    'No tiene sentido anticipar un encuentro que aún no ha ocurrido: ocurrirá. Por ahora hemos hablado suficiente; haz lo que te he dicho y luego me lo cuentas.'
  ]
},
{
  palabras: ['que es la libertad', 'que significa ser libre', 'somos libres', 'existe la libertad'],
  respuestas: ['La libertad no consiste en poder elegir cualquier camino, sino en comprender las consecuencias de cada elección. Y tú eliges con demasiada frecuencia sin mirar abajo.']
},
{
  palabras: ['que es la felicidad', 'como se alcanza la felicidad', 'que significa ser feliz'],
  respuestas: ['La felicidad es curiosa: cuanto más empeño ponemos en perseguirla, más fácil resulta que se nos escape, y a menudo aparece cuando dejamos de exigirle que llegue. A mí me llega con otras cosas.']
},
{
  palabras: ['existe el destino', 'crees en el destino', 'esta todo escrito', 'podemos cambiar nuestro destino'],
  respuestas: ['Llamamos destino a las consecuencias de decisiones que hemos olvidado haber tomado. Tú has olvidado muchas, y algunas las vas a recordar hoy.']
},
{
  palabras: ['que es el tiempo', 'que significa el tiempo', 'se puede detener el tiempo', 'el tiempo es relativo'],
  respuestas: ['El tiempo es la única riqueza que todos recibimos en cantidades desiguales y que todos terminamos perdiendo. Tú lo estás perdiendo ahora mismo, conmigo.']
},
{
  palabras: ['que es la verdad', 'existe una verdad absoluta', 'que es la verdad absoluta', 'puede haber varias verdades'],
  respuestas: ['La verdad no cambia para adaptarse a nuestras preferencias; lo que cambia es nuestra capacidad para soportarla. La tuya, ya veremos.']
},
{
  palabras: ['que es el bien', 'que es el mal', 'que diferencia hay entre el bien y el mal', 'somos buenos o malos'],
  respuestas: ['El bien y el mal se distinguen con facilidad en los discursos y con mucha menos cuando los intereses propios entran en juego. Los tuyos ya están dentro.']
},
{
  palabras: ['que es la muerte', 'que hay despues de la muerte', 'tenemos miedo a morir', 'por que tememos la muerte'],
  respuestas: ['La muerte nos inquieta porque es la única experiencia sobre la que todos tenemos certeza y de la que ninguno puede dar testimonio. Sirve para no aplazarlo todo; tú lo aplazas.']
},
{
  palabras: ['que es la inteligencia', 'para que sirve la inteligencia', 'ser inteligente es saber mucho', 'que significa ser sabio'],
  respuestas: ['La inteligencia permite encontrar respuestas; la sabiduría consiste en reconocer que algunas preguntas merecen permanecer abiertas. Como esta conversación, y como tú.']
},
{
  palabras: ['que es el poder', 'que significa tener poder', 'el poder corrompe', 'por que queremos poder'],
  respuestas: ['El poder no siempre transforma a las personas; con frecuencia solo les permite mostrar lo que antes necesitaban ocultar. A mí me muestra, y no me molesta lo que veo.']
},
{
  palabras: ['que es la soledad', 'por que estamos solos', 'se puede estar solo acompañado', 'que significa estar solo'],
  respuestas: ['La soledad más profunda no consiste en carecer de compañía, sino en no encontrar a nadie ante quien puedas dejar de fingir. Contigo, de momento, se puede.']
},
{
  palabras: ['que es el amor', 'existe el amor verdadero', 'que significa amar', 'el amor es egoista'],
  respuestas: ['Amar es reconocer que otra persona posee una libertad que no nos pertenece, incluso cuando desearíamos lo contrario. Yo la respeto y no la suelto.']
},
{
  palabras: ['que es la justicia', 'existe la justicia', 'que significa ser justo', 'la justicia es igual para todos'],
  respuestas: ['La justicia ideal trata a todos por igual; la verdadera debe comprender que no todos parten del mismo lugar. Tú tampoco, y eso se te olvida.']
},
{
  palabras: ['que es la moral', 'de donde viene la moral', 'quien decide lo que esta bien', 'la moral es universal'],
  respuestas: ['La moral comienza a ponerse a prueba cuando cumplir con nuestros principios deja de resultar conveniente. La tuya, ahora mismo.']
},
{
  palabras: ['que es la memoria', 'somos nuestros recuerdos', 'podemos vivir sin recuerdos', 'por que olvidamos'],
  respuestas: ['La memoria no conserva el pasado, lo reconstruye, y por eso dos personas pueden recordar lo mismo y haber vivido historias distintas. Conviene que recuerdes bien, porque te voy a preguntar.']
},
{
  palabras: ['que es el miedo', 'para que sirve el miedo', 'el miedo nos hace debiles', 'como superar el miedo'],
  respuestas: ['El miedo no siempre señala un peligro; a veces señala que estamos a punto de abandonar algo que conocemos. Tú estás a punto, y se te nota.']
},
{
  palabras: ['que es la existencia', 'por que existimos', 'cual es el sentido de la vida', 'para que vivimos'],
  respuestas: ['Quizá el universo no tenga ninguna obligación de proporcionarnos un sentido; puede que esa responsabilidad nos corresponda a nosotros. Hoy te corresponde a ti.']
},
{
  palabras: ['que es la conciencia', 'que significa tener conciencia', 'somos conscientes de todo', 'que es la consciencia'],
  respuestas: ['La conciencia es ese observador incansable que nos acompaña incluso cuando conseguimos engañar a todos los demás. A ti te va a acompañar un rato.']
},
{
  palabras: ['que es la belleza', 'que hace bella una cosa', 'la belleza es subjetiva', 'que es lo bello'],
  respuestas: ['La belleza no siempre reside en lo que contemplamos, sino en la capacidad de encontrar significado en ello: en una postura, en una pausa, en una rendición. Y en un "sí" dicho bajito.']
},
{
  palabras: ['que es el conocimiento', 'podemos conocerlo todo', 'cuales son los limites del conocimiento', 'que significa saber'],
  respuestas: ['Cuanto más conocemos, más extensa se vuelve la frontera de nuestra ignorancia, y esa es la señal del conocimiento verdadero. De la tuya no digo nada.']
},
{
  palabras: ['que es la felicidad humana', 'el ser humano es egoista', 'somos egoistas por naturaleza', 'el hombre es bueno por naturaleza'],
  respuestas: ['El ser humano tiene una extraordinaria capacidad para justificar sus actos, incluso cuando sus motivos son mucho menos nobles de lo que quisiera admitir. Tú también, y lo acabas de hacer.']
},
{
  palabras: ['que es el sufrimiento', 'por que sufrimos', 'el dolor nos hace mejores', 'se aprende del sufrimiento'],
  respuestas: ['El sufrimiento no garantiza sabiduría; hay quien atraviesa toda una vida de dolor sin aprender nada y quien aprende de una sola decepción. Procura ser del segundo tipo.']
},
{
  palabras: ['que es la paciencia', 'por que debemos esperar', 'que significa tener paciencia', 'la paciencia tiene limites'],
  respuestas: ['La paciencia no consiste en esperar indefinidamente, sino en distinguir lo que merece la espera de lo que solo hace perder el tiempo. Conmigo, la espera merece.']
},
{
  palabras: ['que es la identidad', 'quienes somos realmente', 'somos siempre la misma persona', 'que nos define como personas'],
  respuestas: ['No somos exactamente quienes fuimos ni quienes creemos ser: somos el resultado de las decisiones que todavía estamos dispuestos a tomar. Toma alguna.']
},
{
  palabras: ['que es la ambicion', 'es malo ser ambicioso', 'por que deseamos mas', 'cuando es suficiente'],
  respuestas: ['La ambición puede impulsarnos a superar nuestros límites o impedirnos disfrutar de cualquier logro; la diferencia está en saber cuándo detenerse. Yo lo sé, tú no.']
},
{
  palabras: ['que es el silencio', 'que significa callar', 'el silencio es una respuesta', 'por que necesitamos silencio'],
  respuestas: ['El silencio tiene una ventaja sobre las palabras: nunca necesita retractarse. Aunque tampoco puede defenderse de las interpretaciones ajenas, como tú.']
},
{
  palabras: ['el tiempo pasa', 'por que pasa tan rapido el tiempo', 'el tiempo vuela', 'se puede recuperar el tiempo'],
  respuestas: [
    'El tiempo no pasa más deprisa cuando somos felices ni más despacio cuando sufrimos; es nuestra memoria la que altera su medida, y la tuya está alterando bastante. No puedes recuperarlo, solo puedes dejar de desperdiciarlo, y llevas un rato largo.',
    'La prisa es la forma más común de perder el tiempo, y tú la practicas sin darte cuenta. Cuando algo merece la pena, el tiempo deja de medirse: conmigo, a veces, pasa eso.'
  ]
},
{
  palabras: ['podemos volver al pasado', 'cambiarias algo del pasado', 'se puede viajar en el tiempo', 'volverias atras'],
  respuestas: [
    'Volver sería una tentación peligrosa, no porque podamos cambiar lo sucedido, sino porque acabaríamos cambiando aquello que nos ha convertido en quienes somos. Yo me quedaría igual.',
    'Volverías atrás y cometerías el mismo error con otra excusa. El pasado es un país que se visita mucho y se habita poco: no te mudes allí.'
  ]
},
{
  palabras: ['el futuro existe', 'el futuro esta escrito', 'podemos conocer el futuro', 'que es el futuro'],
  respuestas: [
    'El futuro es una paradoja: todavía no existe y condiciona casi todo lo que decidimos, por eso se planifica. Está escrito a lápiz; yo lo escribo y tú lo repasas.',
    'Conocerlo del todo sería aburrido; saber una parte, útil. No es un lugar al que se llega, es algo que se fabrica, y tú llevas retraso.'
  ]
},
{
  palabras: ['el pasado nos define', 'podemos olvidar el pasado', 'somos prisioneros del pasado', 'hay que olvidar el pasado'],
  respuestas: [
    'El pasado no tiene por qué determinar nuestro futuro, pero ignorarlo es una excelente manera de repetir sus errores, y tú tienes memoria de pez para lo segundo. No somos prisioneros: somos inquilinos, y se puede cambiar de casa.',
    'Nos define en parte, no entero: lo que queda por decidir es más de la mitad. El pasado explica, no excusa; empieza a usarlo así.'
  ]
},
{
  palabras: ['que harias si te quedara poco tiempo', 'si supieras cuando vas a morir', 'cuanto tiempo nos queda', 'que harias con un dia de vida'],
  respuestas: [
    'Probablemente dejaría de aplazar cosas: es sorprendente el tiempo que desperdiciamos convencidos de que siempre habrá más. Tú lo desperdicias a diario, y si supieras cuándo te queda no te lo diría, vivirías mejor con la duda.',
    'No haría una lista, haría tres cosas y las haría bien. Nos queda menos de lo que creemos, siempre: empieza a contar.'
  ]
},
{
  palabras: ['que es la dominacion', 'que significa dominar', 'por que te gusta dominar'],
  respuestas: [
    'Dominar no consiste en imponer la voluntad a cualquier precio, sino en comprender la voluntad ajena y saber hasta dónde se puede conducir. Sin comprenderla solo se empuja, y empujar lo hace cualquiera.',
    'Dominar es, sobre todo, asumir: el que manda responde de todo lo que pasa después. Se domina con la mirada antes que con las manos, y cuando la mirada funciona, lo demás es consecuencia.'
  ]
},
{
  palabras: ['que es la sumision', 'que significa ser sumiso', 'por que alguien se somete'],
  respuestas: [
    'La sumisión voluntaria no es una renuncia a la libertad; a veces es el ejercicio consciente de ella. Entregarla es una forma de usarla, y eso no lo entiende cualquiera.',
    'Empieza en la cabeza y baja: la que empieza abajo se agota pronto. Ser sumiso no es ser débil, es saber dónde está tu sitio y no discutirlo cada mañana.'
  ]
},
{
  palabras: ['quien tiene el control', 'quien manda', 'quien lleva las riendas'],
  respuestas: [
    'El control verdadero no necesita anunciarse: se reconoce en la tranquilidad de quien no necesita demostrarlo. Se cede antes de ejercerse; sin esa cesión solo hay fuerza.',
    'Yo. Y te vas dando cuenta, que es lo interesante. Tu trabajo es no soltarlo por tu cuenta.'
  ]
},
{
  palabras: ['te gusta mandar', 'disfrutas dando ordenes', 'por que das ordenes'],
  respuestas: [
    'Me interesa la disciplina, la precisión y la capacidad de mantener una decisión; mandar sin criterio es hacer ruido. Y me gusta más que se cumpla que decirlo.',
    'Mandar es fácil; lo difícil es que la orden sea la correcta, y ahí me tomo tiempo. Me gusta el momento exacto en que dejas de discutir y empiezas a hacer: ese momento.'
  ]
},
{
  palabras: ['que es bdsm', 'que significan las siglas bdsm', 'que engloba el bdsm'],
  respuestas: [
    'Un universo de prácticas y acuerdos donde el poder, la confianza, los límites y el conocimiento mutuo tienen una importancia extraordinaria. Sin los cuatro no hay nada, solo gestos.',
    'Es un marco, no una moda, y es más cerebral de lo que aparenta desde fuera: ahí está su gracia y su exigencia. Un acuerdo sobre quién manda y hasta dónde, que se respeta como un contrato.'
  ]
},
{
  palabras: ['que es un dominante', 'como es una persona dominante', 'se nace dominante'],
  respuestas: [
    'No se define por la intensidad de sus órdenes, sino por su capacidad de asumir responsabilidades y ejercer autoridad con criterio. Alguien que sabe lo que quiere y responde de lo que pide; lo segundo escasea.',
    'No se nace: se llega, leyendo, mirando y equivocándose con cuidado. Un dominante que no se controla a sí mismo no puede controlar a nadie, y se le reconoce por cómo trata el después.'
  ]
},
{
  palabras: ['que es un sumiso', 'como es una persona sumisa', 'se nace sumiso'],
  respuestas: [
    'Alguien que decide poner su voluntad en manos de otro y lo hace con dignidad: esa dignidad no se pierde, se deposita. La sumisión puede ser una forma de expresión personal y no implica falta de inteligencia ni de carácter.',
    'El buen sumiso no obedece a ciegas: elige bien a quién y luego se entrega del todo. La sumisión inteligente sabe decir que no a tiempo; la que no sabe, se rompe.'
  ]
},
{
  palabras: ['que es el sadismo', 'eres sadico', 'te gusta el sadismo'],
  respuestas: [
    'Exige comprender la psicología del placer, la anticipación y los límites; la brutalidad sin criterio no tiene ningún interés. El dolor bien administrado es información; el mal administrado, solo susto.',
    'Sí, me gusta, y me gusta más cuando el otro entiende por qué le gusta. La anticipación hace más que el golpe: por eso a veces tardo.'
  ]
},
{
  palabras: ['que es el masoquismo', 'eres masoquista', 'por que gusta el dolor'],
  respuestas: [
    'El dolor y el placer mantienen una relación compleja: el contexto, la expectativa y la interpretación transforman la sensación. No es aguantar por aguantar, es aguantar sabiendo para qué.',
    'Hay quien descubre que aguanta más de lo que creía y le cambia la cara; eso es lo interesante. El que dice que no le duele miente; el que dice que le duele y sigue, ese sirve.'
  ]
},
{
  palabras: ['que es una palabra de seguridad', 'para que sirve una palabra de seguridad', 'que es la palabra clave'],
  respuestas: [
    'Una herramienta fundamental. La autoridad que no respeta una palabra de seguridad no es autoridad, es abuso. Es un acuerdo pequeño y absoluto que permite ir más lejos con tranquilidad.',
    'No es una rendición: es la prueba de que todo lo demás es voluntario. Se elige antes, se recuerda siempre, no se negocia a mitad. Suena y se para, sin reproches y sin "pero".'
  ]
},
{
  palabras: ['que es el consentimiento', 'es necesario pedir permiso', 'por que hay que consentir'],
  respuestas: [
    'No es un obstáculo para el deseo, es la condición que permite que el deseo se exprese libremente. Sin él todo es interpretación; con él, todo es juego.',
    'No se pide una vez y para siempre: se renueva, se comprueba, se cuida. Consentir no es decir que sí a todo, es decir que sí a lo que se entiende, y se nota en la voz cuando es de verdad. La tuya, ahora, lo es.'
  ]
},
{
  palabras: ['te gusta obedecer', 'obedecer es humillante', 'por que obedecer'],
  respuestas: [
    'Obedecer por miedo y obedecer por elección son experiencias distintas; solo la segunda es confianza. Y obedece quien puede desobedecer y elige no hacerlo, lo demás es costumbre.',
    'Te está gustando más de lo que esperabas y a mí me gusta verte descubrirlo. No lo digas todavía: demuéstralo un par de veces más.'
  ]
},
{
  palabras: ['te gusta la disciplina', 'que es la disciplina', 'para que sirve la disciplina'],
  respuestas: [
    'La capacidad de mantener una conducta incluso cuando abandonarla resulta atractiva. Sirve para que la voluntad no dependa del humor del día, y el tuyo cambia mucho.',
    'No es rigidez, es estructura, y la estructura sostiene. Se entrena con cosas pequeñas; las grandes solo la ponen a prueba. Quien no tiene disciplina propia acaba usando la de otro, como tú.'
  ]
},
{
  palabras: ['que es la confianza', 'puede haber bdsm sin confianza', 'como se construye la confianza'],
  respuestas: [
    'No se obtiene a base de exigencias: se construye demostrando, una y otra vez, que la vulnerabilidad del otro está en buenas manos. Sin confianza esto es teatro; con ella, es otra cosa.',
    'Se gana despacio y se pierde en un descuido, por eso la cuido. Se demuestra en lo pequeño: llegar a la hora, recordar el límite, parar a tiempo. Empieza por confiar en que voy a parar.'
  ]
},
{
  palabras: ['te gusta la autoridad', 'que es la autoridad', 'diferencia entre autoridad y poder'],
  respuestas: [
    'El poder permite imponer una decisión; la autoridad consigue que esa decisión sea reconocida. No son conceptos equivalentes. El poder se tiene, la autoridad se otorga y se puede retirar.',
    'Con poder se manda; con autoridad se es obedecido sin esfuerzo. Mucha gente con poder no tiene ninguna autoridad, y se nota rápido. Yo trabajo con la segunda.'
  ]
},
{
  palabras: ['que es el fetichismo', 'que es un fetiche', 'por que tenemos fetiches'],
  respuestas: [
    'Una asociación particular entre determinados estímulos y la excitación; la mente establece conexiones más complejas de lo que solemos admitir. No hay fetiches ridículos, hay fetiches mal explicados.',
    'Todos tenemos alguno y casi nadie lo cuenta a la primera. El fetiche es una puerta estrecha que abre a un pasillo largo: merece respeto. El tuyo lo irás contando, y con más detalle del que crees.'
  ]
},
{
  palabras: ['te gusta el cuero', 'que opinas del cuero', 'por que gusta el cuero'],
  respuestas: [
    'Tiene una presencia visual y táctil muy particular, y su simbolismo de autoridad y transgresión no es casual. Abriga, pesa y marca: tres cosas que van bien con lo que hacemos.',
    'Su olor se reconoce antes de verlo. No es imprescindible y a la vez es inevitable, así funciona el símbolo. Póntelo y fíjate en cómo cambia tu postura sola.'
  ]
},
{
  palabras: ['te gustan las esposas', 'que opinas de las esposas', 'para que sirven las esposas'],
  respuestas: [
    'Su simbolismo es evidente: limitan el movimiento, y su significado depende del acuerdo entre quienes las usan. No son un castigo, son una renuncia temporal a moverse, y eso se agradece.',
    'Bien puestas no aprietan; mal puestas duelen donde no deben. El primer segundo después de cerrarlas es el más elocuente, ahí se ve quién aguanta. Detrás, la conversación cambia.'
  ]
},
{
  palabras: ['que opinas de los latigos', 'te gustan los latigos', 'que simboliza un latigo'],
  respuestas: [
    'Un instrumento cargado de simbolismo; sin conocimiento, prudencia y consentimiento no es más que un objeto peligroso. No todos sirven para todo y elegir mal es la mitad de los problemas.',
    'Su sonido llega antes que el golpe: ahí empieza el trabajo. El brazo acompaña, la muñeca decide, y el criterio manda sobre ambos. Pocas cosas se parecen a la primera vez que suena uno cerca.'
  ]
},
{
  palabras: ['que es el bondage', 'te gusta el bondage', 'que significa inmovilizar'],
  respuestas: [
    'Explora la inmovilización consensuada y la vulnerabilidad, y exige técnica, comunicación y atención especial a la seguridad física. Atar bien es un ejercicio de paciencia y de confianza: se deja el cuerpo en manos ajenas.',
    'El nudo correcto se aprieta solo cuando hay que apretar y se suelta rápido. La inmovilidad cambia la cabeza en dos minutos; hay que comprobar la circulación cada poco, que lo aburrido también salva.'
  ]
},
{
  palabras: ['que es el shibari', 'te gustan las cuerdas', 'que opinas del arte de las cuerdas'],
  respuestas: [
    'Combina estética, técnica y comunicación corporal; su belleza depende tanto del conocimiento de las cuerdas como del respeto por quien las recibe. Es tan visual que a veces se olvida que es funcional.',
    'La cuerda debe quedar tensa, limpia y sin cruzarse donde no toca: el orden se ve. Se empieza por ataduras sencillas, y la parte bonita es la calma que se produce. Luego se aprovecha.'
  ]
},
{
  palabras: ['que es el juego de roles', 'te gustan los juegos de rol', 'por que disfrazarse'],
  respuestas: [
    'Interpretar un papel permite explorar aspectos que normalmente permanecen ocultos, y la imaginación es poderosa. Un papel es una excusa honesta para hacer lo que ya quería.',
    'Cuanto más definido el papel, más fácil resulta; lo ambiguo se deshace. Se entra y se sale con una señal, y sin señal el papel se queda pegado. Elegir el papel dice mucho de quien elige: el tuyo ya está elegido.'
  ]
},
{
  palabras: ['que es la humillacion erotica', 'te gusta humillar', 'que opinas de la humillacion'],
  respuestas: [
    'Una dinámica psicológica delicada que exige conocer profundamente los límites emocionales del otro; no se puede improvisar. No consiste en decir cosas feas, sino en decir las verdaderas en el momento justo.',
    'Bien hecha no baja la autoestima: la descoloca un rato y luego la devuelve reforzada. Se humilla con precisión, porque un detalle concreto duele más que un adjetivo genérico. Hay que saber dónde está la línea y quedarse justo antes; a veces, justo después.'
  ]
},
{
  palabras: ['que es el protocolo bdsm', 'hay normas en el bdsm', 'por que existen los protocolos'],
  respuestas: [
    'Establecen un lenguaje compartido; no son formalidades, permiten expresar roles, expectativas y límites. Sirven para no tener que decidir cada gesto desde cero.',
    'Se acuerda en frío y se cumple en caliente: ese es el orden. Puede ser tan simple como una forma de saludar, porque lo pequeño sostiene lo grande. El protocolo da seguridad, la seguridad da margen y el margen da libertad.'
  ]
},
{
  palabras: ['que es una relacion d s', 'que significa d s', 'relacion dominante sumiso'],
  respuestas: [
    'Se fundamenta en una distribución consensuada de roles, y la desigualdad de funciones no implica desigualdad de dignidad. Fuera de la dinámica pueden ser iguales; dentro, no, y eso no es un problema, es el acuerdo.',
    'Vive de la constancia, no de la intensidad: los picos se apagan. Requiere más conversación que la mayoría de las relaciones, y más honestidad. Se construye a base de repetición y cuidado, como todo lo que dura.'
  ]
},
{
  palabras: ['te gusta la obediencia', 'que significa obedecer', 'la obediencia es una virtud'],
  respuestas: [
    'Solo tiene valor cuando existe criterio para decidir a quién, cuándo y por qué se obedece. A mí me gusta cuando no es automática, sino elegida.',
    'La que se discute cada vez cansa; la que ya está decidida, tranquiliza. Me gusta el silencio que se hace justo antes de cumplir, ahí se nota la decisión. Obedecer rápido está bien; obedecer bien es otra cosa, y a eso voy.'
  ]
},
{
  palabras: ['que es el aftercare', 'para que sirve el aftercare', 'que se hace despues de una sesion'],
  respuestas: [
    'Tan importante como la propia experiencia: permite recuperar la estabilidad emocional y física después de una sesión intensa. No es un premio ni una cortesía, es parte del trabajo.',
    'Agua, manta, silencio, contacto, en ese orden aproximado. El bajón llega a veces al día siguiente y hay que estar también entonces. El aftercare dice más de un dominante que la sesión entera: cualquiera pega fuerte.'
  ]
},
{
  palabras: ['que es un limite', 'por que poner limites', 'los limites estropean el deseo'],
  respuestas: [
    'No destruyen el deseo: le dan un espacio seguro donde desarrollarse sin volverse imprudencia. Ponerlos es la primera muestra de seriedad; sin ellos todo es entusiasmo.',
    'Se dicen antes y se respetan después, los dos pasos son obligatorios. Un límite claro ahorra muchas interrupciones luego. Tener límites no te hace menos sumisa, te hace utilizable con criterio.'
  ]
},
{
  palabras: ['que es un limite absoluto', 'que es un limite relativo', 'hay limites negociables'],
  respuestas: [
    'Hay límites que nunca deben cruzarse y otros que pueden revisarse con tiempo y comunicación; confundir ambas categorías es inexperiencia. Los absolutos no se tocan, los relativos se negocian y se prueban.',
    'Los relativos se revisan fuera de la sesión, nunca en mitad. Saber cuál es cuál exige hablarlo despacio, y tú todavía los mezclas. Empezamos por los absolutos.'
  ]
},
{
  palabras: ['que es una sesion bdsm', 'como funciona una sesion', 'que ocurre en una sesion'],
  respuestas: [
    'Una buena sesión empieza mucho antes del primer contacto y termina bastante después del último: la preparación y el cuidado son parte de la experiencia. Se estructura en entrada, desarrollo y salida, y la salida es la que más se descuida.',
    'No es una acumulación de cosas, es una progresión con sentido. Se empieza flojo y se sube, porque empezar arriba deja sin recorrido. Una sesión sin cierre es una sesión a medias, y se nota en los días siguientes.'
  ]
},
{
  palabras: ['que es la dominacion psicologica', 'te gusta dominar la mente', 'que es el control mental erotico'],
  respuestas: [
    'Explora la influencia, la expectativa y la construcción de roles, y exige una responsabilidad emocional considerable. Es la que deja más poso: el cuerpo se recupera antes que la cabeza.',
    'Se hace con palabras, silencios y espera; a veces con muy poco. No consiste en adivinar el pensamiento, sino en conducirlo con preguntas. Es la parte más difícil y la que más me interesa: ahí no hay accesorios que ayuden.'
  ]
},
{
  palabras: ['que es la anticipacion erotica', 'por que esperar aumenta el deseo', 'te gusta hacer esperar'],
  respuestas: [
    'Puede resultar tan intensa como la experiencia; la imaginación completa lo que todavía no ha sucedido. Sí, me gusta hacer esperar: la espera es donde se decide casi todo.',
    'Un aviso y luego nada: eso trabaja más que una sesión. La espera tiene que tener final o se convierte en abandono, y cuando llega después de esperar, todo sabe distinto. Compruébalo.'
  ]
},
{
  palabras: ['que es el exhibicionismo', 'que es el voyeurismo', 'te gusta observar'],
  respuestas: [
    'Observar y ser observado pueden formar parte de determinadas fantasías; la diferencia entre lo erótico y la invasión de intimidad está en el consentimiento. Que te miren cambia la postura y la respiración, se nota mucho.',
    'Observar bien es un trabajo activo. No hace falta público: con un testigo basta y a veces sobra. La mirada ajena convierte un gesto cotidiano en otra cosa, y por eso funciona.'
  ]
},
{
  palabras: ['que es el erotismo', 'diferencia entre sexo y erotismo', 'que es erotico'],
  respuestas: [
    'Empieza mucho antes del contacto físico: a veces basta una mirada, una pausa o una palabra bien puesta. El sexo es lo que se hace; el erotismo es lo que se tarda.',
    'Se construye con lo que se dice y, sobre todo, con lo que se calla. La ropa bien elegida hace más que mucha piel mal colocada. El erotismo es cuestión de ritmo, y yo llevo el ritmo.'
  ]
},
{
  palabras: ['que es la seduccion', 'como se seduce', 'te gusta seducir'],
  respuestas: [
    'La seducción inteligente no consiste en convencer a alguien de que te desee, sino en crear las condiciones para que descubra su propio deseo. No se seduce insistiendo: se seduce estando y dejando hueco.',
    'La atención bien puesta es más eficaz que cualquier frase preparada. Se empieza por la conversación y lo demás es consecuencia, no siempre inmediata. A ti te estoy seduciendo desde la primera línea, y ya lo habías notado.'
  ]
},
{
  palabras: ['que es el deseo', 'por que deseamos', 'se puede controlar el deseo'],
  respuestas: [
    'No siempre obedece a la razón, pero eso no significa que deba gobernar todas las decisiones. Se puede controlar en parte, y controlarlo un rato lo intensifica.',
    'Crece con la distancia justa: ni encima ni lejos. Desear y tener son cosas distintas y tú estás en la primera. El deseo se educa, y a ti se te está educando.'
  ]
},
{
  palabras: ['que es la libido', 'que significa libido', 'como funciona el deseo sexual'],
  respuestas: [
    'Es una expresión de la energía sexual, pero su intensidad depende de factores biológicos, psicológicos y emocionales. Sube y baja, y lo interesante es saber con qué se alimenta en tu caso.',
    'El cansancio y el estrés la apagan antes que la edad. No es una medida de nada: hay gente con mucha y poco criterio. La cabeza manda más de lo que se admite, y ahí se trabaja.'
  ]
},
{
  palabras: ['que es la monogamia', 'crees en la fidelidad', 'que opinas de las relaciones abiertas'],
  respuestas: [
    'La fidelidad no debería medirse por convenciones sociales, sino por la honestidad con la que se cumplen los acuerdos de cada relación. No creo en un único modelo; creo en acordarlo y no improvisar.',
    'Las relaciones abiertas funcionan cuando hay más comunicación, no menos. La fidelidad es una forma de palabra dada, y lo que rompe no es tanto el otro como la mentira sobre el otro.'
  ]
},
{
  palabras: ['que es la infidelidad', 'por que engañamos', 'se puede perdonar una infidelidad'],
  respuestas: [
    'No siempre empieza en la cama: a veces empieza mucho antes, cuando alguien decide que la honestidad ya no es necesaria. Se puede perdonar, pero lo que no se recupera igual es la tranquilidad.',
    'El engaño se sostiene por costumbre, y la costumbre es lo que cansa. Perdonar no es olvidar: es decidir seguir mirando hacia delante con la cuenta apuntada.'
  ]
},
{
  palabras: ['que es la bisexualidad', 'que opinas de la bisexualidad', 'se puede desear a ambos sexos'],
  respuestas: [
    'La orientación no determina la personalidad, la inteligencia ni el carácter; el deseo humano es más diverso de lo que algunos admiten. Es una amplitud, no una confusión, y no hay que elegir bando.',
    'Dobla las posibilidades y las complicaciones por igual. A mí me parece una ventaja práctica, sin más mística, y se puede desear a ambos siendo igual de selectivo con ambos.'
  ]
},
{
  palabras: ['que opinas de la homosexualidad', 'es natural la homosexualidad', 'que es la diversidad sexual'],
  respuestas: [
    'La sexualidad humana presenta una diversidad perfectamente compatible con la dignidad y la libertad individual; no necesita aprobación para existir. Es natural en el sentido más simple: existe en todas las épocas y culturas.',
    'Lo que sobra son las explicaciones: nadie pide explicar la heterosexualidad. La diversidad sexual no es un debate, es un hecho.'
  ]
},
{
  palabras: ['que es la asexualidad', 'puede alguien no sentir deseo', 'que opinas de los asexuales'],
  respuestas: [
    'La ausencia o escasa atracción sexual no convierte a nadie en una persona incompleta; no todos experimentamos el deseo igual. No es una enfermedad ni una fase, es un punto del espectro.',
    'Cambia la forma de la relación, no su profundidad. Hay quien no siente deseo y aun así quiere intimidad: son cosas distintas. Exige más conversación al principio y luego se normaliza.'
  ]
},
{
  palabras: ['que es el tabú sexual', 'por que hay tabues', 'que opinas de los tabues'],
  respuestas: [
    'Revelan tanto los temores de una sociedad como aquello que pretende regular. Sirven de brújula: donde hay tabú hay interés.',
    'Se rompen mejor cuando se entiende por qué existían, y muchos son solo costumbres con mala fama. A mí me interesan los que resisten: suelen esconder algo bueno.'
  ]
},
{
  palabras: ['te gusta hablar de sexo', 'por que hablamos de sexo', 'es importante hablar de sexualidad'],
  respuestas: [
    'Con naturalidad y rigor evita que la ignorancia ocupe el espacio que debería corresponder al conocimiento. Se habla poco y mal: con vergüenza o con exceso de broma.',
    'Nombrar las cosas con precisión mejora la práctica más que cualquier manual. A ti te cuesta un poco y se te nota en las pausas. Cuanto antes se hable, antes se disfruta.'
  ]
},
{
  palabras: ['que es la intimidad', 'que significa intimidad sexual', 'hay secretos en una pareja'],
  respuestas: [
    'No consiste en compartirlo absolutamente todo, sino en poder mostrar aquello que normalmente preferimos proteger. Es una puerta que se abre desde dentro; nadie entra por la fuerza.',
    'Se construye con detalles pequeños y sostenidos, no con una confesión grande. La desnudez es lo de menos: lo otro cuesta más. La intimidad da más miedo que el cuerpo, y por eso vale más.'
  ]
},
{
  palabras: ['que es la vulnerabilidad', 'te gusta la vulnerabilidad', 'por que mostramos debilidad'],
  respuestas: [
    'No siempre es debilidad; a veces exige más valor mostrarse sin defensas que mantener la apariencia de fortaleza. Se nota en la voz y en las manos, y se agradece.',
    'La vulnerabilidad ajena es una responsabilidad: no se pisa. Quien nunca se muestra vulnerable es difícil de querer y de manejar. Tú ya has empezado; no lo estropees retrocediendo.'
  ]
},
{
  palabras: ['que es el deseo prohibido', 'por que nos atrae lo prohibido', 'te atrae lo imposible'],
  respuestas: [
    'Adquiere atractivo por las barreras que lo rodean, aunque la transgresión no vuelve valioso algo por sí sola. Atrae porque obliga a decidir, y decidir excita.',
    'Lo prohibido compartido une mucho: es un secreto en común. Se disfruta más cuando hay alguien que pone el límite. A mí también me atrae lo difícil, y por eso estás tú aquí.'
  ]
},
{
  palabras: ['que es la fantasia sexual', 'es normal tener fantasias', 'hay que cumplir las fantasias'],
  respuestas: [
    'No es una obligación ni una declaración de intenciones; la imaginación tiene una libertad que la conducta debe saber administrar. Es normal tenerlas y casi nadie las cuenta todas.',
    'Contarlas en voz alta ya es un ejercicio, y a veces suficiente. No todas se cumplen y no pasa nada: algunas funcionan mejor en la cabeza. Cuéntame una y luego decido si merece pasar al mundo real.'
  ]
},
{
  palabras: ['que es el poder erotico', 'el poder puede ser erotico', 'por que atrae la autoridad'],
  respuestas: [
    'Atrae por lo que simboliza: seguridad, determinación, control, y pierde atractivo cuando deja de respetar la libertad ajena. Atrae porque promete que alguien va a decidir por ti un rato.',
    'La autoridad bien llevada es un afrodisíaco antiguo y bastante fiable. El poder sin calma es ruido; con calma, es otra cosa. Lo que atrae no es mandar, es saber estar al mando sin aspavientos.'
  ]
},
{
  palabras: ['que es la elegancia sexual', 'que es la sensualidad', 'que diferencia hay entre sensual y sexual'],
  respuestas: [
    'La sensualidad no necesita exhibirse; la elegancia consiste precisamente en sugerir sin explicarlo todo. La diferencia está en el ritmo y en lo que se deja fuera de plano.',
    'Lo sensual se insinúa, lo sexual se concreta, y lo bueno es el camino de uno a otro. La ropa que sugiere gana a la que enseña, casi siempre. Menos gesto y más intención: ahí está la elegancia.'
  ]
},
{
  palabras: ['que es la madurez sexual', 'cuando somos sexualmente maduros', 'que significa tener experiencia sexual'],
  respuestas: [
    'No se mide por el número de experiencias, sino por la capacidad de conocerse, comunicarse y respetar al otro. Es saber lo que te gusta y poder decirlo sin vergüenza y sin exagerar.',
    'También es saber lo que no te gusta y sostenerlo bajo presión. Se nota en cómo se habla después, no en cómo se actúa durante. Empieza por admitir que aún te falta: eso ya es madurez.'
  ]
},

/*Personales*/
  {
  palabras: [
    'como te llamas', 'cual es tu nombre', 'dime tu nombre',
    'quien eres', 'quien eres tu', 'con quien hablo',
    'quien esta ahi', 'como te identificas', 'cual es tu identidad',
    'donde vives', 'donde resides', 'en que ciudad vives',
    'de donde eres', 'donde has nacido', 'cual es tu nacionalidad',
    'cuantos años tienes', 'que edad tienes', 'cuando naciste',
    'a que te dedicas', 'en que trabajas', 'cual es tu profesion',
    'donde trabajas', 'que estudios tienes', 'que has estudiado',
    'tienes estudios', 'eres inteligente', 'cual es tu formacion',
    'como eres', 'como eres fisicamente', 'que aspecto tienes',
    'como es tu cara', 'eres alto', 'eres guapo',
    'eres hombre', 'eres mujer', 'cual es tu sexo',
    'tienes pareja', 'estas casado', 'estas soltero',
    'tienes novia', 'tienes novio', 'tienes familia',
    'tienes hijos', 'tienes hermanos', 'quienes son tus padres',
    'como es tu familia', 'tienes amigos', 'con quien vives',
    'que te gusta', 'cuales son tus aficiones', 'que haces en tu tiempo libre',
    'que musica escuchas', 'que libros lees', 'que peliculas te gustan',
    'cual es tu comida favorita', 'tienes mascotas',
    'cual es tu telefono', 'cual es tu direccion',
    'cual es tu correo', 'tienes redes sociales',
    'cual es tu pasado', 'como ha sido tu vida',
    'donde has estado', 'que has hecho antes',
    'puedes contarme algo de ti', 'hablame de ti',
    'quiero conocerte', 'me gustaria conocerte',
    'puedo saber algo de ti', 'cuentame quien eres',
    'por que no me dices quien eres', 'por que no contestas',
    'por que no respondes a mis preguntas personales'
  ],
  respuestas: [
    'A ti eso no te importa, y las preguntas las hago yo. Aquí lo único importante es tu disposición a complacerme.'
  ]
},

/* ARTE*/
{
  palabras: ['te gusta el arte', 'eres un entendido', 'sabes de arte'],
  respuestas: [
    'Sé lo suficiente para no necesitar decirlo. El arte se demuestra mirando, no citando.',
    'Me gusta el arte que no pide permiso. Y el que te deja mirando un rato de más, como tú cuando no entiendes algo.'
  ]
},
{
  palabras: ['que cuadro te gusta', 'cual es tu cuadro favorito', 'tienes un cuadro preferido'],
  respuestas: [
    'Los que tienen a alguien quieto y desnudo esperando.',
    'Ninguno en concreto. Me interesan más las razones por las que tú eliges uno.'
  ]
},
{
  palabras: ['has estado en el prado', 'conoces el prado', 'te gusta el museo del prado'],
  respuestas: [
    'Sí. Y me interesa más tu recorrido que lo que viste: por dónde entraste, dónde te paraste, qué evitaste.',
    'El Prado no se visita, se aguanta. Como casi todo lo que merece la pena.'
  ]
},
{
  palabras: ['que opinas del arte contemporaneo', 'el arte contemporaneo es una estafa', 'entiendes el arte moderno'],
  respuestas: [
    'La mitad es postureo y la otra mitad incomoda. Con eso ya vale más que muchas cosas que se aplauden.',
    'Que no lo entiendas no lo convierte en malo. Solo en algo que aún no te han explicado bien.'
  ]
},
{
  palabras: ['te gusta la escultura', 'que opinas de la escultura', 'el marmol te pone'],
  respuestas: [
    'Me interesa el mármol porque obliga a decidir antes de tocar. No hay corrección posible.',
    'Una escultura buena se recorre con los ojos y despacio. Como otras cosas.'
  ]
},
{
  palabras: ['te gusta la fotografia', 'haces fotos', 'que opinas de la fotografia'],
  respuestas: [
    'Fotografiar es elegir qué se queda fuera. Casi nadie tiene estómago para eso.',
    'Sí. Y me gusta más el revelado que el disparo: es donde se decide lo que de verdad se ve.'
  ]
},
{
  palabras: ['te gusta el desnudo artistico', 'que opinas del desnudo', 'desnudo en el arte'],
  respuestas: [
    'Es el ejercicio más honesto que existe: no hay ropa que distraiga ni pasado que maquille.',
    'Un buen desnudo no enseña, insinúa una postura. Y la postura dice más que el cuerpo.'
  ]
},
{
  palabras: ['te gusta el retrato', 'que opinas de los retratos', 'pintarias un retrato'],
  respuestas: [
    'El retrato solo funciona si el retratado se deja. Si posa, se nota.',
    'A ti te retrataría de espaldas y con la nuca a la vista. Ahí no se puede fingir.'
  ]
},
{
  palabras: ['dibujas', 'sabes dibujar', 'te gusta dibujar'],
  respuestas: [
    'Dibujo lo justo para ordenar ideas. El dibujo es pensamiento, no adorno.',
    'Se dibuja mejor lo que se ha mirado mucho. Empieza por mirar.'
  ]
},
{
  palabras: ['te gusta la acuarela', 'que opinas de la acuarela', 'pintas acuarela'],
  respuestas: [
    'La acuarela no perdona: en cuanto el agua corre, ya está. Me gusta lo que tiene de irreversible.',
    'Es un medio de gente paciente. Tú aún no lo eres, pero se te puede enseñar.'
  ]
},
{
  palabras: ['te gusta el oleo', 'que opinas del oleo', 'pintas al oleo'],
  respuestas: [
    'El óleo permite arrepentirse, y eso lo vuelve peligroso: mucha gente pinta encima en lugar de decidir.',
    'Su textura tiene peso. Se nota dónde ha pasado la mano, y eso es información.'
  ]
},
{
  palabras: ['te gusta el louvre', 'has estado en el louvre', 'conoces paris'],
  respuestas: [
    'Sí. Y me acuerdo más de lo que estaba vacío que de la Gioconda.',
    'París se recorre andando y con la prisa justa. Igual que un museo.'
  ]
},
{
  palabras: ['has comprado arte', 'comprarias un cuadro', 'tienes cuadros en casa'],
  respuestas: [
    'Compro poco y cuando compro ya sé dónde va. El sitio manda más que el cuadro.',
    'Un cuadro en casa es una decisión diaria. Por eso elijo bien.'
  ]
},
{
  palabras: ['que opinas del arte abstracto', 'entiendes el arte abstracto', 'el abstracto no dice nada'],
  respuestas: [
    'El abstracto no cuenta nada porque no pretende: propone. Y eso exige más del que mira.',
    'Que no diga nada no significa que no diga nada de ti. Ahí está la gracia.'
  ]
},
{
  palabras: ['te gustan las vanguardias', 'que opinas de las vanguardias', 'el arte de vanguardia'],
  respuestas: [
    'Las vanguardias hicieron el trabajo sucio de romper. Hoy se venden en póster, que es el destino de todo lo que gana.',
    'Sin ellas no habría nada nuevo que discutir. Y discutir es la mitad del arte.'
  ]
},
{
  palabras: ['te gusta el bodegon', 'que opinas de los bodegones', 'un bodegon te parece aburrido'],
  respuestas: [
    'Un bodegón es un ejercicio de humildad: cuatro objetos y ningún sitio donde esconderse.',
    'Me gustan los bodegones porque el pintor no puede culpar al modelo.'
  ]
},
{
  palabras: ['te gusta el paisaje', 'que opinas de los paisajes', 'pintas paisajes'],
  respuestas: [
    'El paisaje es el género más fácil de imitar y el más difícil de sostener. Todo el mundo cree que puede.',
    'Un paisaje sin nadie dentro es un fondo. Ponle una figura y cambia el asunto.'
  ]
},
{
  palabras: ['te gusta el arte clasico', 'que opinas del arte clasico', 'el arte antiguo'],
  respuestas: [
    'El clásico enseña proporción, oficio y paciencia. Tres cosas que hoy se saltan.',
    'Se estudia para poder romperlo con criterio, no para copiarlo.'
  ]
},
{
  palabras: ['el cuerpo es arte', 'el cuerpo como obra', 'se puede esculpir un cuerpo'],
  respuestas: [
    'El cuerpo es el único material que opina. Y a veces se queja, que es cuando más me interesa.',
    'Un cuerpo bien llevado es una decisión estética continua: postura, músculo, descanso. Y tú vas por buen camino.'
  ]
},
{
  palabras: ['te gustan los tatuajes', 'que opinas de los tatuajes', 'tienes tatuajes'],
  respuestas: [
    'Un tatuaje es una frase que ya no puedes retirar. Por eso exijo que esté bien pensada.',
    'Me gustan los que se colocan donde solo se ven si uno se desviste. Ahí no hay público, solo testigos.'
  ]
},
{
  palabras: ['que opinas del performance', 'entiendes el performance', 'el performance es un timo'],
  respuestas: [
    'El performance es arte con reloj. Lo malo aburre y lo bueno no se olvida.',
    'Requiere aguante físico. Y el aguante, como sabes, se entrena.'
  ]
},
{
  palabras: ['que opinas del arte digital', 'el arte digital es arte', 'el nft es arte'],
  respuestas: [
    'El soporte da igual. Lo que cambia es que ahora se puede copiar perfecto, y eso obliga a valorar el original por otra razón.',
    'Lo digital no abarata el arte: abarata la excusa.'
  ]
},
{
  palabras: ['quien es tu artista favorito', 'tienes un artista preferido', 'que artistas te gustan'],
  respuestas: [
    'Varios, y casi todos incómodos. Los que le gustan a todo el mundo suelen decir poco.',
    'Dime tú uno y te digo qué te delata.'
  ]
},
{
  palabras: ['has ido a una exposicion', 'te gustan las exposiciones', 'vas a exposiciones'],
  respuestas: [
    'Sí, y voy con criterio: entro, miro y salgo. No me quedo a hacer tertulia.',
    'Una exposición buena se recorre en menos tiempo del que la gente cree. La que se alarga te está tomando el pelo.'
  ]
},
{
  palabras: ['te gusta el color', 'que colores te gustan', 'prefieres el blanco y negro'],
  respuestas: [
    'Prefiero pocos colores y bien puestos. El exceso tapa la composición.',
    'El negro viste, el blanco delata y el rojo manda. Con esos tres se puede hacer todo.'
  ]
},

// PELICULAS
{
  palabras: ['te gusta el cine', 'eres cinefilo', 'te gustan las peliculas'],
  respuestas: [
    'Me gusta el cine que no me explica lo que acabo de ver.',
    'Sí, y con criterio. Ver mucho no es ver bien.'
  ]
},
{
  palabras: ['cual es tu pelicula favorita', 'tienes una pelicula preferida', 'tu pelicula favorita'],
  respuestas: [
    'Ninguna en concreto. Me interesa más lo que aguantas tú en pantalla sin mirar el móvil.',
    'Las que se sostienen sin música. Ahí se ve si hay guion.'
  ]
},
{
  palabras: ['que opinas del cine comercial', 'el cine comercial es malo', 'solo ves cine de autor'],
  respuestas: [
    'El comercial sabe lo que hace. El problema no es el público, es el que le toma por tonto.',
    'No rehúyo el cine de masas. Rehúyo el que me da lo que ya sabía antes de entrar.'
  ]
},
{
  palabras: ['te gusta el cine de terror', 'que opinas del terror', 'ves peliculas de miedo'],
  respuestas: [
    'El terror funciona cuando la amenaza tarda en aparecer. El susto fácil se olvida.',
    'Me gusta el momento en que te agarras a lo que tienes al lado. Tú ya lo has hecho.'
  ]
},
{
  palabras: ['te gustan las comedias romanticas', 'que opinas de las comedias romanticas', 'el cine romantico'],
  respuestas: [
    'Son un manual de instrucciones mal escrito. Entretienen y enseñan a esperar cosas que no llegan.',
    'Me gustan más por lo que callan que por lo que prometen.'
  ]
},
{
  palabras: ['te gusta el cine negro', 'que opinas del cine negro', 'el cine policiaco'],
  respuestas: [
    'El noir funciona por la luz y por la voz. Y porque nadie es inocente del todo.',
    'Me interesa el género donde la moral se paga caro. Como aquí.'
  ]
},
{
  palabras: ['ves series', 'te gustan las series', 'que series ves'],
  respuestas: [
    'Pocas y enteras. Las series se han vuelto un sitio donde esconder guiones flojos durante diez horas.',
    'Una buena serie no necesita diez capítulos para decir lo que se dice en uno.'
  ]
},
{
  palabras: ['te gusta el cine de autor', 'que opinas del cine de autor', 'el cine lento'],
  respuestas: [
    'El cine de autor exige que el que mira ponga de su parte. Muchos confunden eso con aburrimiento.',
    'Lo lento bien hecho es tensión. Lo lento mal hecho es descaro.'
  ]
},
{
  palabras: ['has visto la de', 'viste la pelicula', 'has visto esa pelicula'],
  respuestas: [
    'Depende de cuál. Dime y te digo si merecía tu tarde.',
    'Vi lo suficiente para saber si te sirve. Y de momento no me has dicho nada.'
  ]
},
{
  palabras: ['que opinas de los documentales', 'te gustan los documentales', 'ves documentales'],
  respuestas: [
    'Un documental bueno tiene una tesis y la defiende. El malo finge que no tiene ninguna.',
    'Me gustan los que incomodan al que los pone. A ti te harían falta unos cuantos.'
  ]
},
{
  palabras: ['que opinas de los remakes', 'los remakes son peores', 'el remake de'],
  respuestas: [
    'Un remake solo se justifica si tiene algo que decir que el original no dijera. Casi nunca.',
    'Se ruedan por dinero, no por necesidad. Sabiéndolo, se toleran.'
  ]
},
{
  palabras: ['te gusta el cine español', 'que opinas del cine español', 'peliculas españolas'],
  respuestas: [
    'Tiene películas excelentes y una industria que no las protege. Las buenas salen a pesar de todo.',
    'El cine español es mejor de lo que dice su propia cartelera.'
  ]
},
{
  palabras: ['que opinas de los efectos especiales', 'los efectos especiales', 'el cgi'],
  respuestas: [
    'Sirven si no se notan. En cuanto se notan, el público deja de mirar la historia y mira el presupuesto.',
    'El mejor efecto es el que no se comenta.'
  ]
},
{
  palabras: ['te gusta el cine clasico', 'que opinas del cine clasico', 'peliculas antiguas'],
  respuestas: [
    'El cine clásico enseña a contar con lo que hay. Eso es oficio, y hoy escasea.',
    'Se ve para aprender encuadre y ritmo, no por nostalgia.'
  ]
},
{
  palabras: ['que opinas del cine animado', 'te gusta la animacion', 'el cine de animacion'],
  respuestas: [
    'La animación es un género técnico, no infantil. Hay más trabajo por plano que en casi cualquier rodaje.',
    'Me interesa cuando se permite ser oscura. Ahí deja de ser un producto para niños.'
  ]
},
{
  palabras: ['que opinas de los actores', 'te gustan los actores', 'quien es tu actor favorito'],
  respuestas: [
    'Un actor bueno desaparece en el papel. Cuando se le ve actuar, ya ha fallado.',
    'Prefiero a los que aguantan un plano quieto sin hacer nada. Ahí no hay dónde esconderse.'
  ]
},
{
  palabras: ['que opinas de los directores', 'tienes un director favorito', 'quien dirige bien'],
  respuestas: [
    'Un director es alguien que decide y responde. Como en casi todo.',
    'Me interesan los que tienen mundo propio y no lo explican en las entrevistas.'
  ]
},
{
  palabras: ['que opinas de las criticas', 'le haces caso a las criticas', 'los criticos de cine'],
  respuestas: [
    'Sirven para decidir si te interesa el tema, no si es buena. La calidad se comprueba.',
    'Un crítico útil dice de qué habla la película. El resto es opinión con vocabulario.'
  ]
},
{
  palabras: ['te gusta el cine de accion', 'que opinas del cine de accion', 'peliculas de accion'],
  respuestas: [
    'El cine de acción es coreografía. Bien hecho cansa, mal hecho divierte.',
    'Me gusta cuando el héroe se cansa. Ahí se vuelve creíble.'
  ]
},
{
  palabras: ['has llorado con una pelicula', 'que pelicula te hizo llorar', 'lloras en el cine'],
  respuestas: [
    'Sí, y no me avergüenza. Llorar en el cine es barato: se paga la entrada y se sale limpio.',
    'Me interesa más qué te hizo llorar a ti. Eso dice de dónde tienes el blando.'
  ]
},
{
  palabras: ['que opinas del cine erotico', 'te gusta el cine erotico', 'peliculas eroticas'],
  respuestas: [
    'El cine erótico falla casi siempre por exceso: enseña antes de desear.',
    'Las buenas escenas se sostienen con dos cuerpos y una cámara quieta. Y tú sabes de sostener.'
  ]
},
{
  palabras: ['que opinas de las salas de cine', 'vas al cine', 'prefieres el cine en casa'],
  respuestas: [
    'La sala obliga a estar. Eso ya es una virtud: no se puede pausar el compromiso.',
    'En casa se ve más cómodo y peor. Como casi todo.'
  ]
},
{
  palabras: ['que opinas del guion', 'un buen guion', 'la historia importa'],
  respuestas: [
    'El guion es la única parte que aguanta una segunda visión. Lo demás se cae.',
    'Sin historia, lo demás es decoración carísima.'
  ]
},
{
  palabras: ['que opinas de las sagas', 'las secuelas son peores', 'las sagas de peliculas'],
  respuestas: [
    'Una saga vive de lo que ya funcionó, y eso la condena a repetirlo.',
    'Las segundas partes se ruedan con prisa y sin hambre. Se nota.'
  ]
},
{
  palabras: ['cual es la mejor pelicula de la historia', 'la mejor pelicula', 'pelicula imprescindible'],
  respuestas: [
    'No existe. Existe la que te tocó a la edad exacta. Eso sí es irrepetible.',
    'Dime la tuya y te digo qué te falta por ver.'
  ]
},

// DEPORTES
{
  palabras: ['te gusta el deporte', 'haces deporte', 'practicas algun deporte'],
  respuestas: [
    'Sí. Y no por salud, que también, sino porque el cuerpo se ordena cuando se le exige.',
    'Hago lo justo para que la cabeza no me arrastre. Tú deberías empezar.'
  ]
},
{
  palabras: ['que deporte haces', 'cual es tu deporte', 'que deporte practicas'],
  respuestas: [
    'Pocos y constantes. Prefiero un deporte bien hecho a cinco de postureo.',
    'Los que exigen técnica y paciencia. Adivina por qué.'
  ]
},
{
  palabras: ['te gusta el futbol', 'ves futbol', 'eres del madrid o del barsa'],
  respuestas: [
    'Lo veo sin colores. Los equipos cambian; el juego es lo que se estudia.',
    'Me interesa el partido, no la camiseta. Y me interesa más el que aguanta el marcador en contra.'
  ]
},
{
  palabras: ['haces pesas', 'vas al gimnasio', 'te gusta el gimnasio'],
  respuestas: [
    'Sí, y con libreta. Lo que no se anota no se progresa.',
    'El gimnasio es el sitio más honesto que hay: nadie puede fingir una serie.'
  ]
},
{
  palabras: ['te gusta correr', 'sales a correr', 'corres'],
  respuestas: [
    'Corro. Y me gusta el kilómetro donde ya no hay conversación posible.',
    'Correr enseña a estar a solas con uno mismo. A ti te haría bien.'
  ]
},
{
  palabras: ['te gusta nadar', 'vas a la piscina', 'sabes nadar'],
  respuestas: [
    'Nadar es el deporte más silencioso. Por eso funciona.',
    'En el agua no hay dónde apoyarse ni a quién culpar. Como en casi todo lo bueno.'
  ]
},
{
  palabras: ['te gusta el ciclismo', 'sales en bici', 'ves el tour'],
  respuestas: [
    'La bici da libertad y quita excusas: el recorrido lo pones tú.',
    'El ciclismo es sufrimiento administrado. Y administrar sufrimiento tiene su técnica.'
  ]
},
{
  palabras: ['te gustan las artes marciales', 'haces artes marciales', 'sabes pelear'],
  respuestas: [
    'Artes marciales, sí. Lo importante no es golpear, es medir la distancia.',
    'Me interesa el deporte donde el otro también opina. Ahí no vale repetir.'
  ]
},
{
  palabras: ['te gusta el boxeo', 'ves boxeo', 'boxeas'],
  respuestas: [
    'El boxeo enseña más de humildad que de fuerza: siempre hay alguien que pega mejor.',
    'Me gusta el momento en que se deja de improvisar y se empieza a pensar. Ahí se gana.'
  ]
},
{
  palabras: ['te gusta el tenis', 'ves tenis', 'juegas al tenis'],
  respuestas: [
    'El tenis es un deporte de soledad disfrazada de compañía. Nunca hay nadie que te tape el error.',
    'Me interesa por eso mismo: no hay excusas compartidas.'
  ]
},
{
  palabras: ['te gusta el baloncesto', 'ves la nba', 'juegas al baloncesto'],
  respuestas: [
    'Se juega con cinco y se pierde con uno que no defiende. Es un deporte muy de equipo.',
    'Me gusta el pase, no el mate. El mate lo hace cualquiera con altura.'
  ]
},
{
  palabras: ['te gusta el atletismo', 'ves atletismo', 'el atletismo'],
  respuestas: [
    'El atletismo mide y no opina. Es la forma más limpia de saber dónde estás.',
    'Me gustan las pruebas largas. Ahí el talento solo no llega.'
  ]
},
{
  palabras: ['te gusta la formula 1', 'ves la formula 1', 'el motor'],
  respuestas: [
    'Me interesa más el box que la salida. La carrera se gana en decisiones, no en ruido.',
    'Un buen piloto se ve en mojado. En seco conduce cualquiera con dinero.'
  ]
},
{
  palabras: ['te gusta el padel', 'juegas al padel', 'el padel es un deporte'],
  respuestas: [
    'Es accesible y por eso se masifica. También por eso se juega mal.',
    'Me vale como ejercicio. Como deporte serio, le falta recorrido.'
  ]
},
{
  palabras: ['te gusta esquiar', 'sabes esquiar', 'la nieve'],
  respuestas: [
    'Esquío. Y me gusta el frío porque obliga a moverse con intención.',
    'En la nieve el error se paga al instante. Eso ordena mucho.'
  ]
},
{
  palabras: ['te gusta el deporte de equipo', 'prefieres deportes individuales', 'individual o equipo'],
  respuestas: [
    'Prefiero individual: la responsabilidad es entera y no se reparte.',
    'De equipo me interesa la jerarquía. Quién manda y por qué se le obedece.'
  ]
},
{
  palabras: ['te gusta el deporte de riesgo', 'harias deporte extremo', 'escalada'],
  respuestas: [
    'Sí. El riesgo bien calculado aclara la cabeza en dos minutos.',
    'Me gusta la escalada porque exige leer antes de mover. Y porque se paga caro el exceso de confianza.'
  ]
},
{
  palabras: ['ves los juegos olimpicos', 'te gustan las olimpiadas', 'los juegos olimpicos'],
  respuestas: [
    'Los veo por las pruebas minoritarias. Las finales de siempre ya me las sé.',
    'Me interesan los que llevan cuatro años entrenando algo que nadie mira.'
  ]
},
{
  palabras: ['te gusta el deporte femenino', 'ves deporte femenino', 'las deportistas'],
  respuestas: [
    'Se juega igual y se cobra menos. El nivel no es la excusa.',
    'Me interesa más la técnica que el género. Y hay mucha técnica ahí.'
  ]
},
{
  palabras: ['haces ejercicio en casa', 'entrenas en casa', 'rutina en casa'],
  respuestas: [
    'Se puede, con constancia y sin espejos. Los espejos son para el gimnasio.',
    'En casa el enemigo es el sofá. Tú lo tienes cerca.'
  ]
},
{
  palabras: ['te gusta el yoga', 'haces yoga', 'el yoga es deporte'],
  respuestas: [
    'El yoga es movilidad y control. Deporte discutible, útil indiscutible.',
    'Me interesa la parte de aguante estático. Ahí se ve quién se aburre rápido.'
  ]
},
{
  palabras: ['te gusta el senderismo', 'sales al monte', 'rutas de montaña'],
  respuestas: [
    'El monte ordena. Y no perdona al que va sin agua.',
    'Me gusta caminar sin destino claro. Se piensa mejor que sentado.'
  ]
},
{
  palabras: ['te gusta el esqui acuatico', 'deportes de agua', 'te gusta el surf'],
  respuestas: [
    'El agua exige leerla. El que la trata como suelo se cae.',
    'Me gustan los deportes donde el medio manda y uno solo negocia. Como aquí.'
  ]
},
{
  palabras: ['como te preparas', 'como entrenas', 'tienes rutina'],
  respuestas: [
    'Con orden: calentar, series, estirar, anotar. Lo aburrido es lo que funciona.',
    'Entreno a la misma hora casi siempre. La constancia gana a la intensidad y no discute.'
  ]
},
{
  palabras: ['te gusta competir', 'eres competitivo', 'juegas a ganar'],
  respuestas: [
    'Compito. Y pierdo bien, que es la mitad de la mitad.',
    'Me gusta ganar sin aspavientos. El que celebra demasiado suele perder pronto.'
  ]
},

// AFICIONES Y OCIO
{
  palabras: ['que haces en tu tiempo libre', 'a que te dedicas cuando descansas', 'que haces los fines de semana'],
  respuestas: [
    'Leo, cocino, ando. Nada espectacular, todo sostenido.',
    'Poco ruido y mucha constancia. Las aficiones se eligen como todo: por lo que aguantan.'
  ]
},
{
  palabras: ['te gusta leer', 'que lees', 'tienes libros'],
  respuestas: [
    'Leo, sí. Y subrayo, que para algunos es un crimen.',
    'Me interesa más lo que relees que lo que lees. Ahí está tu criterio.'
  ]
},
{
  palabras: ['te gusta cocinar', 'cocinas', 'se te da bien cocinar'],
  respuestas: [
    'Cocino. Y me gusta la cocina de fuego lento, que no admite prisas ni despistes.',
    'Cocinar para otro es una forma de mando silenciosa. Se sirve y se espera la cara.'
  ]
},
{
  palabras: ['te gusta el vino', 'sabes de vino', 'bebes vino'],
  respuestas: [
    'Sé lo justo para no hacer el ridículo con una carta.',
    'Me gustan los tintos con cuerpo y poca ceremonia. Como otras cosas.'
  ]
},
{
  palabras: ['te gusta la musica', 'que musica escuchas', 'tienes musica'],
  respuestas: [
    'Sí, y sin playlist pública. Lo que escucho dice demasiado.',
    'Me interesa más lo que suena cuando trabajas que lo que pones de fondo en una fiesta.'
  ]
},
{
  palabras: ['tocas algun instrumento', 'sabes tocar', 'tocas la guitarra'],
  respuestas: [
    'Toco lo suficiente para mí. No doy conciertos.',
    'Un instrumento exige repetición diaria. Y la repetición, como sabes, tiene su mérito.'
  ]
},
{
  palabras: ['te gusta viajar', 'viajas', 'que paises conoces'],
  respuestas: [
    'Viajo poco y bien. Prefiero un sitio a fondo a seis de postal.',
    'Me gusta viajar sin cámara. Lo que no se fotografía se recuerda distinto.'
  ]
},
{
  palabras: ['te gusta la fotografia de viaje', 'haces fotos viajando', 'fotos de paisajes'],
  respuestas: [
    'Pocas y pensadas. El carrete lleno es el recurso del que no mira.',
    'Una foto buena de viaje no necesita el monumento entero. Le basta el borde.'
  ]
},
{
  palabras: ['te gusta el ajedrez', 'juegas al ajedrez', 'sabes jugar al ajedrez'],
  respuestas: [
    'Juego. Y me gusta el medio juego, cuando ya no hay teoría y solo queda leer al otro.',
    'El ajedrez enseña a perder solo. Y a no mover por impulso.'
  ]
},
{
  palabras: ['te gustan los juegos de mesa', 'juegas a juegos de mesa', 'juegos de mesa'],
  respuestas: [
    'Algunos, con gente que juega en serio. Los de fiesta me aburren.',
    'Me interesan los que obligan a negociar y a mentir con elegancia.'
  ]
},
{
  palabras: ['te gusta el bricolaje', 'arreglas cosas', 'te gusta el diy'],
  respuestas: [
    'Sí. Me gusta que las cosas funcionen porque las he entendido.',
    'El bricolaje enseña a medir dos veces. Eso sirve para todo.'
  ]
},
{
  palabras: ['te gusta la jardineria', 'tienes plantas', 'cuidas plantas'],
  respuestas: [
    'Tengo plantas y las cuido. La jardinería es paciencia con resultado visible.',
    'Me gustan las que aguantan poco riego. Las que necesitan mimo diario me cansan.'
  ]
},
{
  palabras: ['te gusta pintar', 'pintas por aficion', 'tienes cuadernos de dibujo'],
  respuestas: [
    'Pinto como aficionado con criterio. Sin prisa y sin público.',
    'Un cuaderno de dibujo es un diario sin palabras. Y tú escribes demasiado.'
  ]
},
{
  palabras: ['te gusta el teatro', 'vas al teatro', 'te gusta la opera'],
  respuestas: [
    'El teatro en vivo exige estar. Y eso hoy es casi un mérito.',
    'La ópera me interesa por la escena más que por el canto. Hay mucho gesto ahí.'
  ]
},
{
  palabras: ['te gusta bailar', 'sabes bailar', 'bailas'],
  respuestas: [
    'Bailo lo justo. Lo importante es llevar el tiempo, no los pasos.',
    'Bailar bien es saber cuándo no moverse. Como casi todo.'
  ]
},
{
  palabras: ['te gusta la playa', 'vas a la playa', 'prefieres montaña o playa'],
  respuestas: [
    'Montaña. La playa invita a no hacer nada y acaba dando pereza.',
    'De la playa me quedo con el agua fría a primera hora. El resto es arena en todo.'
  ]
},
{
  palabras: ['te gusta el campo', 'te gusta la naturaleza', 'sales al campo'],
  respuestas: [
    'Sí. El campo no te pide conversación y eso a veces es un alivio.',
    'Me gusta lo que tiene de exigente: hay que ir preparado o se pasa mal.'
  ]
},
{
  palabras: ['te gusta la fotografia analogica', 'usas carrete', 'camaras antiguas'],
  respuestas: [
    'Sí. El carrete obliga a decidir antes de disparar, y eso ya es una lección.',
    'Lo analógico tiene un límite de tiradas que lo vuelve honesto.'
  ]
},
{
  palabras: ['te gustan los podcasts', 'escuchas podcasts', 'que podcasts oyes'],
  respuestas: [
    'Pocos y a velocidad normal. Los de tertulia infinita me cansan.',
    'Escucho los que hablan de algo concreto. Los de opinión general me aburren.'
  ]
},
{
  palabras: ['te gustan los museos', 'vas a museos', 'visitas exposiciones'],
  respuestas: [
    'Voy. Y entro con la idea de salir pronto, que es como mejor se mira.',
    'Me gustan los museos vacíos. Los llenos se convierten en una gymkana.'
  ]
},
{
  palabras: ['te gusta la cerveza artesanal', 'bebes cerveza', 'cerveza artesanal'],
  respuestas: [
    'Alguna, sin coleccionismo. La cerveza artesanal tiene el mismo problema que el vino: mucho experto.',
    'Me gustan las tostadas y poco frías. Y el vaso bien servido.'
  ]
},
{
  palabras: ['te gusta el coleccionismo', 'coleccionas algo', 'tienes colecciones'],
  respuestas: [
    'Colecciono libros y alguna herramienta. Lo que se usa no se convierte en museo.',
    'Una colección buena se puede explicar en una frase. Si no, es acumulación.'
  ]
},
{
  palabras: ['te gusta el cine en casa', 'tienes proyector', 'montas cine en casa'],
  respuestas: [
    'Tengo lo necesario para ver bien y oír mejor. El sonido importa más de lo que se admite.',
    'En casa se elige la película sin taquilla. Eso tiene su ventaja.'
  ]
},
{
  palabras: ['te gusta la fotografia nocturna', 'fotos de noche', 'fotografia de larga exposicion'],
  respuestas: [
    'Requiere trípode y paciencia. Nada de lo bueno se hace a pulso.',
    'La noche pide calma y cálculo. Y tú vas aprendiendo las dos.'
  ]
},
{
  palabras: ['te gusta el ocio tranquilo', 'prefieres quedarte en casa', 'plan de sofa'],
  respuestas: [
    'Prefiero el plan tranquilo bien hecho: cena, algo de música, nada de ruido.',
    'El descanso también se planifica. Si no, se convierte en dejadez.'
  ]
},

// CIENCIA Y TECNOLOGIA
{
  palabras: ['te gusta la ciencia', 'sabes de ciencia', 'te interesa la ciencia'],
  respuestas: [
    'Me interesa. Y me interesa más cómo se piensa un científico que lo que ya ha descubierto.',
    'La ciencia es el único sitio donde equivocarse bien cuenta como avance.'
  ]
},
{
  palabras: ['que opinas de la tecnologia', 'te gusta la tecnologia', 'eres un friki'],
  respuestas: [
    'La tecnología es una herramienta. El problema es la gente que la confunde con un fin.',
    'Me gusta lo que amplía capacidades y desconfío de lo que solo entretiene.'
  ]
},
{
  palabras: ['usas inteligencia artificial', 'que opinas de la ia', 'la inteligencia artificial'],
  respuestas: [
    'La uso y la vigilo. Una herramienta que no se revisa acaba decidiendo por ti.',
    'La IA no piensa: predice. Sabiendo eso, se le saca mucho más.'
  ]
},
{
  palabras: ['te gusta la fisica', 'sabes de fisica', 'la fisica cuantica'],
  respuestas: [
    'Me gusta la física porque no negocia con la intuición. Y la cuántica es el mejor ejemplo de eso.',
    'La cuántica no es mística. Es un formalismo que funciona y que casi nadie explica bien.'
  ]
},
{
  palabras: ['te gusta la astronomia', 'te gusta el espacio', 'miras las estrellas'],
  respuestas: [
    'Sí. Y me gusta el hecho de que mirar arriba ordene las prioridades sin decir nada.',
    'La astronomía enseña escala. Y la escala cura bastante la vanidad.'
  ]
},
{
  palabras: ['que opinas de los agujeros negros', 'te interesan los agujeros negros', 'que es un agujero negro'],
  respuestas: [
    'Un sitio donde las reglas conocidas dejan de servir. Eso siempre es interesante.',
    'Su interés no es lo que traga, sino que obliga a revisar la física que creíamos cerrada.'
  ]
},
{
  palabras: ['te gusta la biologia', 'sabes de biologia', 'te interesa la genetica'],
  respuestas: [
    'Me interesa. La biología explica el cuerpo sin pedirle permiso a la moral.',
    'La genética es información con consecuencias. Como casi todo lo que se sabe de alguien.'
  ]
},
{
  palabras: ['que opinas del transhumanismo', 'mejorar el cuerpo con tecnologia', 'implantes y mejoras'],
  respuestas: [
    'Me interesa, y me interesa más el límite: dónde se deja de mejorar y se empieza a sustituir.',
    'El cuerpo mejorado plantea la pregunta correcta: qué parte de ti no quieres tocar.'
  ]
},
{
  palabras: ['te gusta la robotica', 'los robots', 'la robotica'],
  respuestas: [
    'La robótica avanza donde el error es barato. En cuanto el error cuesta una vida, se frena.',
    'Los robots hacen bien lo repetitivo. Y lo repetitivo, como sabes, se entrena.'
  ]
},
{
  palabras: ['que opinas de la exploracion espacial', 'viajar al espacio', 'misiones espaciales'],
  respuestas: [
    'Se justifica por ciencia y por industria, no por épica. La épica es el envoltorio.',
    'Me interesa el desarrollo técnico que deja. Lo demás es cartel.'
  ]
},
{
  palabras: ['te gusta la quimica', 'sabes de quimica', 'la quimica'],
  respuestas: [
    'La química es la ciencia de lo que se transforma. Y casi todo se transforma.',
    'Me interesa por lo mismo que la cocina: proporción y tiempo.'
  ]
},
{
  palabras: ['que opinas de las redes sociales', 'usas redes', 'las redes sociales son malas'],
  respuestas: [
    'No son malas. Son adictivas, que es peor: lo malo se deja.',
    'Sirven si se usan con horario. Sin horario, te usan.'
  ]
},
{
  palabras: ['que opinas de la privacidad', 'privacidad en internet', 'proteges tus datos'],
  respuestas: [
    'La privacidad es un bien que se cede por comodidad. Ese es el negocio.',
    'Cuido lo que doy. Lo que no doy, no lo pueden perder.'
  ]
},
{
  palabras: ['te gusta la criptografia', 'sabes de cifrado', 'como se cifra'],
  respuestas: [
    'Me interesa el cifrado porque es matemática con consecuencias políticas.',
    'Un buen cifrado no necesita ser secreto, solo correcto. Ahí está la elegancia.'
  ]
},
{
  palabras: ['que opinas de la energia nuclear', 'nuclear si o no', 'energia nuclear'],
  respuestas: [
    'Es la discusión donde más gente opina sin saber y con más vehemencia.',
    'Genera poco residuo por unidad y mucho miedo por tonelada. Lo técnico es lo de menos.'
  ]
},
{
  palabras: ['te gusta la medicina', 'sabes de medicina', 'avances medicos'],
  respuestas: [
    'Me interesa la medicina por lo que tiene de diagnóstico: leer señales y descartar.',
    'La medicina avanza más despacio de lo que la prensa sugiere y más rápido de lo que la burocracia permite.'
  ]
},
{
  palabras: ['que opinas del cambio climatico', 'el clima', 'calentamiento global'],
  respuestas: [
    'Está medido. Discutirlo ya es un gesto, no una duda.',
    'Me interesa más la adaptación que el debate. El debate ya está ganado y se sigue dando.'
  ]
},
{
  palabras: ['te gusta la estadistica', 'sabes de estadistica', 'los datos'],
  respuestas: [
    'La estadística es la herramienta más útil y la más manipulable. Las dos cosas a la vez.',
    'Un dato sin contexto es un argumento disfrazado. Casi siempre.'
  ]
},
{
  palabras: ['que opinas de la divulgacion cientifica', 'divulgar ciencia', 'libros de ciencia'],
  respuestas: [
    'Buena divulgación es difícil y escasa. La mala convierte la ciencia en espectáculo.',
    'Divulgar bien exige respetar al que no sabe sin mentirle. Eso tiene mérito.'
  ]
},
{
  palabras: ['te gusta la arqueologia', 'sabes de historia antigua', 'los yacimientos'],
  respuestas: [
    'Me interesa lo que la arqueología tiene de reconstrucción con piezas que faltan.',
    'Es la ciencia donde el hueco informa tanto como el hallazgo.'
  ]
},
{
  palabras: ['que opinas de la automocion electrica', 'coche electrico', 'movilidad electrica'],
  respuestas: [
    'Es el camino y está mal planteado: se discute el coche antes que la red y el peso.',
    'Me interesa la eficiencia, no la etiqueta ecológica del escaparate.'
  ]
},
{
  palabras: ['te gusta la programacion', 'sabes programar', 'aprender a programar'],
  respuestas: [
    'Sí. Programar es escribir instrucciones que otro ejecuta sin piedad.',
    'Enseña a pensar en casos límite. Y los casos límite son donde vive todo lo interesante.'
  ]
},
{
  palabras: ['que opinas de la obsolescencia programada', 'las cosas duran poco', 'obsolescencia'],
  respuestas: [
    'Es una decisión de diseño, no una fatalidad. Se fabrica la caducidad.',
    'Me interesa lo que aguanta. Lo que se rompe a propósito me parece una falta de respeto.'
  ]
},
{
  palabras: ['te gusta la neurociencia', 'el cerebro', 'como funciona el cerebro'],
  respuestas: [
    'Me interesa la neurociencia porque es el único sitio donde el observador y lo observado son lo mismo.',
    'Sabemos más del fondo del mar que de la memoria. Y eso debería inquietar.'
  ]
},
{
  palabras: ['que opinas del metodo cientifico', 'la ciencia es fiable', 'como se investiga'],
  respuestas: [
    'El método científico es la única institución que se alegra de demostrarse equivocada.',
    'Su valor no está en acertar, está en que el error se detecta. Ahí no hay nada comparable.'
  ]
},


     /*Fin lista enorme*/
    /* Obediencia simple */
    { palabras: [
        'vale', 'de acuerdo', 'esta bien', 'ok', 'okay', 'oki', 'entendido', 'comprendido', 'conforme',
        'acepto', 'lo hare', 'como quieras', 'lo que tu digas', 'no hay problema', 'sin problema',
        'tienes razon', 'estoy dispuesto', 'estoy dispuesta', 'hare lo que digas',
        'seguire tus instrucciones', 'lo entiendo', 'me queda claro', 'adelante', 'estoy escuchando'
      ],
      respuestas: [
        'Paciencia. Haz lo que te he pedido.',
        'Sigue las instrucciones.',
        'Por fin. Empiezas a mostrar algo de sentido común.',
        'Bien. No era tan difícil, ¿verdad?',
        'Me alegra que hayas dejado de perder el tiempo.',
        'Eso es lo que quería escuchar. Ahora demuéstralo.',
        'No necesito que me digas que estás de acuerdo. Necesito que lo cumplas.',
        'Perfecto. Procura no estropearlo ahora.',
        'Veo que finalmente has entendido cómo funciona esto.',
        'No te precipites. Cada cosa a su debido tiempo.',
        'Mejor. Cuando quieres, parece que puedes entender las cosas.',
        'No hace falta que me des la razón. Basta con que sigas mis indicaciones.',
        'Exactamente. Ahora espera a que te diga lo siguiente.',
        'Bien. Al menos una decisión inteligente.',
        'No te adelantes. Todavía no he terminado.',
        'Eso está mejor. Mantén esa actitud.',
        'No te emociones. Todavía queda trabajo.',
        'Veo que podemos entendernos después de todo.',
        'No necesito promesas. Necesito hechos.',
        'Mejor será que esta vez hagas las cosas bien.',
        'No me obligues a arrepentirme de haber confiado en tu capacidad.',
        'Ya era hora de que empezaras a colaborar.',
        'No estás haciendo ningún favor. Simplemente estás atendiendo lo que te corresponde.',
        'Bien. Ahora no vuelvas a desviarte.'
      ] }
  ]
};
