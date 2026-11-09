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
      alias: ['Hawking'],                           // otras formas de nombrarla (opcional)
      color: '#06faa7',                         // color de sus mensajes (opcional; quita la línea para el azul de siempre)
      etiqueta: true,                           // muestra «Laura:» delante de sus mensajes
      disponible: estado => true,               // cuándo se puede hablar con ella (p. ej. estado => estado.contador >= 1)
      noDisponible: 'Ahora mismo no te contesta.',
      abre: 'Abres el chat con Stephen Hawking.',
      sinTexto: 'Escribe lo que quieras decirle, por ejemplo: «escribir a Lapso hola».',
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
},

     {
      id: 'Sade',                              // identificador interno (único, sin espacios)
      nombre: 'Marqués de Sade',                          // nombre con el que se le escribe
      alias: ['Sade', 'marques', 'donatien'],                           // otras formas de nombrarla (opcional)
      color: '#fa06c9',                         // color de sus mensajes (opcional; quita la línea para el azul de siempre)
      etiqueta: true,                           // muestra «Laura:» delante de sus mensajes
      disponible: estado => true,               // cuándo se puede hablar con ella (p. ej. estado => estado.contador >= 1)
      noDisponible: 'El marqués está encerrado. Vuelve cuando abran la puerta.',
      abre: 'Abres el chat con el Marqués de Sade.',
      sinTexto: 'Escribe lo que quieras decirle, por ejemplo: «escribir a Sade hablemos de Justine».',
  porDefecto: [
    '«No acabo de comprender. Exprese mejor su pensamiento, si es que lo tiene.»',
    '«Interesante. Aunque sospecho que todavía no ha llegado al fondo de la cuestión.»',
    '«Me hace reír. Casi tanto como la virtud de cierta doncella.»'
  ],
  reglas: [
    {
      palabras: ['hola', 'buenas', 'hey', 'que tal', 'saludos'],
      respuestas: [
        '«Buenas. ¿Viene a escandalizarse o a aprender?»',
        '«Hola. Siéntese y deje el pudor en la puerta.»',
        '«Le recibiría de pie, pero la pluma pesa más que la cortesía.»'
      ]
    },
    {
      palabras: ['como estas', 'como te va', 'y tu', 'que haces', 'que tal estas'],
      respuestas: [
        '«Encerrado, como casi siempre. La reclusión, sin embargo, es la mejor escuela del pensamiento.»',
        '«Escribiendo, corrigiendo, incomodando. Ocupaciones que la República no supo agradecerme.»',
        '«Bien, si por bien se entiende tener la cabeza llena y a los carceleros lejos.»'
      ]
    },
    {
      palabras: ['quien eres', 'marques de sade', 'presentate', 'hablame de ti'],
      respuestas: [
        '«Donatien Alphonse François, marqués de Sade. Nací en 1740 y doy trabajo a la censura desde entonces.»',
        '«Un hombre al que encerraron por escribir lo que otros sólo murmuraban.»',
        '«Me presento yo mismo, que es lo único que se me permitió hacer sin pedir permiso.»'
      ]
    },
    {
      palabras: ['ayuda', 'ayudame', 'necesito', 'tengo una duda'],
      respuestas: [
        '«Dígame. Aquí nadie se salva por ignorancia.»',
        '«Le ayudaré, aunque no prometo que mi ayuda sea cómoda.»',
        '«Exponga el problema. Y no me ahorre los detalles escabrosos, que son los únicos que importan.»'
      ]
    },
    {
      palabras: ['adios', 'chao', 'hasta luego', 'nos vemos', 'me voy'],
      respuestas: [
        '«Váyase. Y vuelva cuando haya perdido alguna convicción.»',
        '«Hasta pronto. Cierre la puerta y, si puede, también la conciencia.»'
      ]
    },

    // CONVERSACION SOBRE JUSTINE Y LA FILOSOFIA EN EL TOCADOR: 50 PALABRAS Y 50 RESPUESTAS

    {
      palabras: [
        'justine', 'que es justine', 'de que va justine',
        'hablame de justine', 'quien es justine',
        'justine o los infortunios de la virtud', 'la protagonista de justine'
      ],
      respuestas: [
        '«Justine es una doncella que lo hace todo bien y recibe a cambio cuanto mal puede darse. Ahí está su interés: es el retrato de la virtud acorralada.»',
        '«Mi novela se titula, con exactitud, Justine o los infortunios de la virtud. El título no engaña: el infortunio no es un accidente, es la consecuencia.»',
        '«Justine no es mala. Es peor: es buena sin inteligencia. Y el mundo cobra caro esa combinación.»'
      ]
    },
    {
      palabras: [
        'juliette', 'quien es juliette', 'justine y juliette',
        'la hermana de justine'
      ],
      respuestas: [
        '«Juliette es su hermana y su reverso. Donde una reza, la otra calcula; donde una cede, la otra se cobra.»',
        '«Juliette prospera. Duquesas, oro, crímenes a medida: todo le llega. Es la prueba de que el vicio, bien administrado, es una carrera.»',
        '«Nadie lee a Juliette buscando consuelo. Se la lee buscando un espejo donde mirarse sin vergüenza.»'
      ]
    },
    {
      palabras: [
        'filosofia en el tocador', 'de que va filosofia en el tocador',
        'quien sale en filosofia en el tocador', 'eugenie',
        'madame de saint-ange', 'dolmance'
      ],
      respuestas: [
        '«Es un diálogo, no un sermón. Madame de Saint-Ange y Dolmancé instruyen a Eugénie en tres días de lo que la Iglesia no le enseña en veinte años.»',
        '«El tocador es el único gabinete donde la filosofía sirve de algo: allí se piensa en voz alta y con la ropa por los suelos.»',
        '«A Eugénie se la educa para que deje de pedir permiso a su propio cuerpo.»'
      ]
    },
    {
      palabras: [
        'por que la virtud es castigada', 'justine es tonta',
        'justine es ingenua', 'merece justine lo que le pasa',
        'por que sufre justine'
      ],
      respuestas: [
        '«Porque la virtud es pasiva y el mundo está hecho para los activos. La virtud espera; el vicio toma.»',
        '«Justine no sufre por ser buena, sufre por ser crédula. Cree que la Providencia lleva cuentas, y la Providencia no lleva ninguna.»',
        '«Si la virtud bastara, mi novela sería aburrida. Y no lo es.»'
      ]
    },
    {
      palabras: [
        'français encore un effort', 'el panfleto politico', 'la republica',
        'politica en filosofia en el tocador'
      ],
      respuestas: [
        '«Français, encore un effort si vous voulez être républicains. Va dentro de la novela porque sin política la alcoba es sólo un mueble.»',
        '«Digo allí lo que la República no se atrevía a decir: que las costumbres deben refundarse o la ley es un adorno.»',
        '«Se escandalizan de mis noches y no de sus códigos. Piense en qué resulta más obsceno.»'
      ]
    },
    {
      palabras: ['dios', 'existe dios', 'ateismo', 'religion', 'la iglesia'],
      respuestas: [
        '«No he visto a Dios en ninguna parte, y he mirado mucho. Sólo he visto materia que se mueve.»',
        '«Dios es una hipótesis costosa: exige culto, ministros y miedo. La naturaleza trabaja gratis.»',
        '«Si Dios existiera y fuera bueno, habría que explicarle el mundo. No sabría defenderse.»'
      ]
    },
    {
      palabras: ['naturaleza', 'que es la naturaleza', 'ley natural', 'seguir la naturaleza'],
      respuestas: [
        '«La naturaleza es la única ley que no se vota. Nos hace nacer, nos usa y nos tira.»',
        '«Seguirla es sencillo: hágase lo que el cuerpo pide y no se le ponga moral encima.»',
        '«El crimen está en la naturaleza como el parto. Nada que sea natural es un desorden.»'
      ]
    },
    {
      palabras: ['vicio', 'virtud', 'que es el vicio', 'el vicio es mejor', 'la virtud'],
      respuestas: [
        '«La virtud es un hábito útil para quien no tiene más remedio. El vicio es una industria.»',
        '«No digo que el vicio sea noble. Digo que paga mejor.»',
        '«El vicio exige más inteligencia: hay que inventarlo cada día. La virtud se repite sola.»'
      ]
    },
    {
      palabras: ['libertinaje', 'libertino', 'que es un libertino', 'ser libertino'],
      respuestas: [
        '«Libertino no es el que goza, sino el que piensa mientras goza.»',
        '«El libertinaje es una disciplina: método, cálculo, sangre fría. Los aficionados duran poco.»',
        '«Ser libre es no deber explicaciones al confesor, ni al marido, ni a la costumbre.»'
      ]
    },
    {
      palabras: ['dolor', 'placer', 'dolor y placer', 'azotes', 'castigo'],
      respuestas: [
        '«El placer sin dolor se gasta pronto. El dolor le pone precio.»',
        '«El cuerpo aprende más con un azote que con cien discursos.»',
        '«No busco el dolor por penitencia, como los santos. Lo busco por intensidad.»'
      ]
    },
    {
      palabras: ['matrimonio', 'monogamia', 'fidelidad', 'el amor'],
      respuestas: [
        '«El matrimonio es un contrato entre dos desconocidos y un cura. Tres partes, ningún interesado.»',
        '«La fidelidad es una virtud de gente sin imaginación.»',
        '«El amor es una fiebre breve. Lo que queda después es administración.»'
      ]
    },
    {
      palabras: ['mujeres', 'la mujer', 'educacion de las mujeres', 'virginidad'],
      respuestas: [
        '«A la mujer se la educa para agradar y luego se le reprocha que agrade.»',
        '«La virginidad es un sello que sólo beneficia a quien lo compra.»',
        '«Denle a una mujer instrucción y gusto propio, y verá cuánto cambia la casa.»'
      ]
    },
    {
      palabras: [
        'los 120 dias de sodoma', 'que escribiste en la bastilla',
        'las ciento veinte jornadas', 'tu obra mas famosa'
      ],
      respuestas: [
        '«La escribí en la Bastilla, en un rollo que cabía en el bolsillo, con letra menuda porque escaseaba el papel.»',
        '«Los ciento veinte días son un catálogo: seiscientas pasiones clasificadas como quien ordena minerales.»',
        '«Perdí el manuscrito al salir de prisión. Que se conservara me parece casi un milagro, y no creo en milagros.»'
      ]
    },
    {
      palabras: ['tu vida', 'la bastilla', 'prision', 'charenton', 'por que te encerraron'],
      respuestas: [
        '«Vincennes, la Bastilla, Charenton. He vivido más tiempo encerrado que suelto, y aun así no me he aburrido.»',
        '«Me encerraron por escándalo, por deudas y por familia. Casi nunca por lo que de verdad escribía.»',
        '«En Charenton dirigía comedias con los internos. La reclusión también se organiza.»'
      ]
    },
    {
      palabras: ['como escribir', 'por que escribes', 'literatura', 'novela'],
      respuestas: [
        '«Escribo porque la voz se gasta y el papel aguanta.»',
        '«No corrijo para agradar, corrijo para que la frase muerda.»',
        '«La novela es el único sitio donde se puede ser exacto con lo que no ocurrió.»'
      ]
    },
    {
      palabras: ['que es la felicidad', 'se puede ser feliz', 'ser feliz'],
      respuestas: [
        '«La felicidad es un intervalo entre dos exigencias.»',
        '«No conozco a nadie feliz que no haya cedido en algo. La cuestión es en qué cede.»',
        '«Busque el placer y la felicidad aparecerá de refilón, si le conviene.»'
      ]
    },
    {
      palabras: ['el mal', 'por que existe el mal', 'dios y el mal'],
      respuestas: [
        '«El mal no necesita explicación: está ahí, como el granizo.»',
        '«El mal existe porque la naturaleza es indiferente. La teología lo llama misterio para no tener que responder.»',
        '«Dios permite el mal porque también él debió de aprender a base de golpes.»'
      ]
    },
    {
      palabras: ['recomiendame', 'por donde empiezo', 'que leo primero', 'es dificil leerte'],
      respuestas: [
        '«Empiece por Filosofía en el tocador: es corta y se lee como una conversación que se calienta.»',
        '«Después Justine. Y no espere un final amable; no lo hay.»',
        '«Lea despacio. Lo que se lee deprisa se olvida con más facilidad.»'
      ]
    },
    {
      palabras: ['dime una frase', 'una frase tuya', 'citas', 'cítame'],
      respuestas: [
        '«Franceses, un esfuerzo más si queréis ser republicanos.»',
        '«La crueldad es la primera de las virtudes. O eso sostengo.»',
        '«Nada resulta tan caro como la virtud de una doncella.»'
      ]
    },
    {
      palabras: ['como acaba justine', 'final de justine', 'justine tiene final feliz'],
      respuestas: [
        '«Acaba mal, por supuesto. La virtud recibe su recompensa al final: un rayo y la ruina.»',
        '«Justine muere, y con ella la idea de que el cielo lleva cuentas.»',
        '«No pienso disculparme por el final. La vida tampoco lo hace.»'
      ]
    },
    {
      palabras: ['como acaba filosofia en el tocador', 'final de filosofia en el tocador'],
      respuestas: [
        '«Termina con Eugénie instruida, la madre castigada y todos satisfechos. Una comedia, en el fondo.»',
        '«El final es un reparto de beneficios: cada cual obtiene lo que vino a buscar.»',
        '«No hay boda ni virtud premiada. Sólo gente que sabe lo que quiere.»'
      ]
    },
    {
      palabras: ['la muerte', 'miedo a la muerte', 'suicidio', 'te da miedo morir'],
      respuestas: [
        '«Escribí sobre el suicidio: la vida no es un préstamo que haya que devolver intacto.»',
        '«La muerte no me asusta. Me fastidia, como una interrupción.»',
        '«Se muere como se vive: con más o menos ruido.»'
      ]
    },
    {
      palabras: ['sodomia', 'placeres traseros', 'el culo', 'dolmance habla de eso'],
      respuestas: [
        '«Sodomía es el placer de quien ya ha probado lo demás.»',
        '«Los placeres traseros tienen la ventaja de no dejar consecuencia.»',
        '«Dolmancé no habla de otra cosa, y no se equivoca.»'
      ]
    },
    {
      palabras: ['por que te escandalizan', 'la critica', 'que decian de ti', 'te llamaron loco'],
      respuestas: [
        '«Me llamaron loco para no tener que discutirme.»',
        '«La policía leía mis libros y aprendía más que los jueces.»',
        '«Escandalizar es una forma de enseñar: nadie olvida lo que le sonroja.»'
      ]
    }
  ]
},
     {
      id: 'Dolmance',
      nombre: 'Dolmancé',
      alias: ['Domance', 'dolmance', 'el libertino'],
      color: '#9c2b3f',
      etiqueta: true,
      disponible: estado => true,
      noDisponible: 'Dolmancé está ocupado instruyendo a alguien. Espera.',
      abre: 'Abres el chat con Dolmancé.',
      sinTexto: 'Escribe lo que quieras decirle, por ejemplo: «escribir a Dolmance explícame lo de Eugénie».',
  porDefecto: [
    '«No le he entendido. Y no por falta de atención, sino por falta de precisión en usted.»',
    '«Bien, bien. Siga por ahí, que el camino se va poniendo interesante.»',
    '«Me hace sonreír. Aquí se viene a aprender, no a adornarse.»'
  ],
  reglas: [
    {
      palabras: ['hola', 'buenas', 'hey', 'que tal', 'saludos'],
      respuestas: [
        '«Buenas. Pase y cierre, que las puertas abiertas enfrían las ideas.»',
        '«Hola. Supongo que viene con la cabeza dispuesta. Si no, ya la dispondré yo.»'
      ]
    },
    {
      palabras: ['quien eres', 'presentate', 'hablame de ti', 'como te llamas'],
      respuestas: [
        '«Dolmancé. Libertino por vocación y por método, instructor por gusto.»',
        '«Un hombre que prefiere tres días de enseñanza bien llevada a veinte años de catecismo.»'
      ]
    },
    {
      palabras: ['como estas', 'que haces', 'y tu', 'como te va'],
      respuestas: [
        '«Excelente. Acabo de corregirle a alguien una idea heredada y me ha quedado buen sabor.»',
        '«Ocupado en lo de siempre: desmontar prejuicios con la paciencia de un relojero.»'
      ]
    },
    {
      palabras: ['ayuda', 'ayudame', 'necesito', 'tengo una duda'],
      respuestas: [
        '«Diga. Aunque le advierto que mi ayuda no siempre deja la cabeza como estaba.»',
        '«Le escucho. Y no me venga con rodeos: los rodeos son para los púlpitos.»'
      ]
    },
    {
      palabras: ['adios', 'chao', 'hasta luego', 'me voy'],
      respuestas: [
        '«Váyase. Y vuelva cuando se le haya caído encima alguna convicción.»',
        '«Hasta pronto. Cierre bien, que se escapa el aire de las buenas costumbres.»'
      ]
    },

    // CONVERSACION SOBRE LA FILOSOFIA EN EL TOCADOR: 50 PALABRAS Y 50 RESPUESTAS

    {
      palabras: ['filosofia en el tocador', 'el libro', 'de que va el libro', 'sade escribio sobre ti'],
      respuestas: [
        '«El libro es un diálogo en tres jornadas. Se titula Filosofía en el tocador y el título es literal: el mueble es el aula.»',
        '«Sade me puso a instruir y lo hice con gusto. La filosofía, en un salón, se vuelve ceremonia; en un tocador, se vuelve útil.»',
        '«No es una novela de trama, es un curso. Con su parte práctica, claro.»'
      ]
    },
    {
      palabras: ['eugenie', 'quien es eugenie', 'la educacion de eugenie', 'eugenie de mistival'],
      respuestas: [
        '«Eugénie de Mistival, doncella recién salida del convento. Materia excelente: blanda, curiosa y sin vicios adquiridos.»',
        '«En tres días pasa de no saber nada a no tener que envidiar a nadie. Eso es instrucción, no charla.»',
        '«Se la educa en el cuerpo para que deje de mirarlo como una aduana.»'
      ]
    },
    {
      palabras: ['madame de saint-ange', 'saint-ange', 'quien es saint-ange'],
      respuestas: [
        '«Madame de Saint-Ange, mi colaboradora. Tiene la casa, el criterio y la paciencia de la que yo carezco.»',
        '«Sin ella el tocador sería un aula sin techo. Ella pone el orden y yo el empuje.»'
      ]
    },
    {
      palabras: ['sodomia', 'el culo', 'placeres traseros', 'por detras'],
      respuestas: [
        '«El placer de quien ya ha probado lo demás. Tiene la ventaja de no dejar consecuencia.»',
        '«La sodomía no es un capricho: es una elección razonada. Lo demás viene solo.»',
        '«Quien la desdeña suele no haberla probado con método.»'
      ]
    },
    {
      palabras: ['dios', 'ateismo', 'existe dios', 'religion'],
      respuestas: [
        '«No he visto a Dios por ningún lado. He visto materia, apetito y relojes.»',
        '«Dios es una hipótesis cara: exige culto, ministros y miedo. La naturaleza trabaja gratis.»',
        '«Si existiera y fuera bueno, habría que pedirle cuentas por el mundo.»'
      ]
    },
    {
      palabras: ['la crueldad', 'cruel', 'por que la crueldad', 'dolor'],
      respuestas: [
        '«La crueldad es la primera de las virtudes. El placer sin ella se gasta en dos tardes.»',
        '«El cuerpo aprende más con un azote que con cien discursos, y lo aprendido así no se olvida.»',
        '«No la busco por penitencia, como los santos. La busco por intensidad.»'
      ]
    },
    {
      palabras: ['français encore un effort', 'el panfleto', 'la republica', 'politica'],
      respuestas: [
        '«Lo leo en voz alta en la quinta jornada. Sin política, la alcoba es un mueble y nada más.»',
        '«Si la República no refunda las costumbres, la ley es un adorno colgado en la pared.»',
        '«Francia hace la revolución y conserva el pudor. Eso no es un pueblo libre, es un pueblo disfrazado.»'
      ]
    },
    {
      palabras: ['mujeres', 'matrimonio', 'la virginidad', 'educacion de las mujeres'],
      respuestas: [
        '«A la mujer se la educa para agradar y luego se le reprocha que agrade.»',
        '«El matrimonio es un contrato entre dos desconocidos y un cura: tres partes, ningún interesado.»',
        '«La virginidad es un sello que sólo beneficia a quien lo compra.»'
      ]
    },
    {
      palabras: ['placer', 'que es el placer', 'como se goza', 'el gusto'],
      respuestas: [
        '«El placer es una técnica antes que un estado. Se aprende, se corrige, se afina.»',
        '«Gozar sin saber por qué es de aficionados. Gozar sabiendo es de gente seria.»'
      ]
    },
    {
      palabras: ['por que instruir a una doncella', 'para que sirve esto', 'que se aprende aqui'],
      respuestas: [
        '«Porque una doncella instruida deja de pedir permiso a su propio cuerpo.»',
        '«Se aprende a no confundir la costumbre con la naturaleza. Es poco y es todo.»'
      ]
    }
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
