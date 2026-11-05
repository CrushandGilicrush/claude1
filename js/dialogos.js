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

    /* Fotos */
    { palabras: ['foto', 'fotos', 'imagenes', 'pruebas'],
      respuestas: [
        'Las que tú ya sabes. No me obligues a enseñarlas.',
        'Las tengo todas, y bien guardadas.'
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
        'Insulta lo que quieras. No cambia nada.',
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
