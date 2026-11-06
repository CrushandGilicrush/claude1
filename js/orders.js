/* Órdenes del extorsionador. Para añadir una orden: crear su definición en `defs` y añadir su id a `secuencia`.
   Los textos se pueden cambiar en Datos.textos (data.js); si falta alguno, se usa el de DEF. */
const Ordenes = (() => {
  const secuencia = ['caldera', 'hielo', 'calabacin', 'rotulador'];   // Pruebas 1 a 4
  let indice = -1;
  const e = {
    temperatura: 47, bloqueada: false, manoRoja: false, congelador: false, grabando: false,
    fase3: null, neveraVista: false, cajon: false, brazo: false, fotos: [], videos: []
  };
  const DEF = {
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
    congelador: 'Abres el congelador. Entre la escarcha hay una bandeja con dos cubitos de hielo.',
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
    recuerdaDesnudarse: '«Te he dicho que te desnudaras. Hazlo y vuelve a mandármela.»'
  };
  const t = clave => (Datos.textos && Datos.textos[clave]) || DEF[clave];
  const est = () => Juego.estado;
  const activa = () => secuencia[indice];
  const cumple = nombre => !!e[nombre];   // lo usa «coger» para objetos que requieren algo previo

  const defs = {
    caldera: { pide: () => UI.dialogo(t('pedirCaldera')) },
    hielo: { pide: () => UI.dialogo(t('pedirHielo')) },
    calabacin: { pide: () => { e.fase3 = e.neveraVista ? 'responder' : 'examinar'; UI.dialogo(t('pedirVerduras')); } },
    rotulador: { pide: () => UI.dialogo(t('pedirRotulador')) }
  };

  function siguiente() {
    indice++;
    if (indice >= secuencia.length) return UI.despues(() => Juego.terminar(Datos.finales.length - 1));
    defs[secuencia[indice]].pide();
  }
  function superar() { est().contador++; UI.contador(est().contador); siguiente(); }

  /* ---- Prueba 1: caldera (cocina) → radiador (salón) → foto de la mano → enviar por Telegram ---- */
  function examinarCaldera() {
    UI.log(`Un panel digital marca <b>${e.temperatura} °C</b>. Una nota pegada explica: «Para subir la temperatura: +número C. Para bajarla: -número C.»`);
  }
  function subirTemperatura() {
    if (est().estancia !== 'cocina') return UI.log('La caldera está en la cocina.');
    examinarCaldera();
    UI.log(t('calderaSubir'));
  }
  function ajustar(signo, n) {
    if (est().estancia !== 'cocina') return UI.log('No hay ninguna caldera aquí para ajustar.');
    if (e.bloqueada) return UI.log(t('calderaYa'));
    if (activa() !== 'caldera') return UI.log('La caldera no responde.');
    const nueva = e.temperatura + (signo === '-' ? -n : n);
    if (nueva < 25 || nueva > 85) return UI.log('La caldera no reconoce esos parámetros de ajuste.');
    e.temperatura = nueva;
    if (nueva !== 70) return UI.log(`Debes poner la caldera a 70 grados, ni más ni menos. Temperatura actual: ${nueva} °C.`);
    e.bloqueada = true;
    UI.log('La caldera sube hasta los 70 °C y el panel se bloquea.');
  }
  function apoyarMano() {
    if (est().estancia !== 'salon') return UI.log('No ves ningún radiador por aquí.');
    if (e.manoRoja) return UI.log(t('radiadorYa'));
    if (!(activa() === 'caldera' && e.bloqueada)) return UI.log(t('radiadorFrio'));
    e.manoRoja = true;
    UI.log(t('radiadorMano'));
  }

  /* ---- Prueba 2: hielo del congelador → terraza → vídeo con el cubito en la boca ---- */
  function abrirCongelador() {
    if (est().estancia !== 'cocina') return UI.log(t('congeladorLejos'));
    UI.log(e.congelador ? t('congeladorYa') : t('congelador'));
    e.congelador = true;
  }
  function grabarVideo() {
    if (e.grabando) return UI.log(t('yaGrabando'));
    e.grabando = true;
    UI.log(t('grabando'));
  }
  function finVideo(tipo, texto) { e.grabando = false; e.videos.push(tipo); UI.log(texto); }
  function pararVideo() { if (!e.grabando) return UI.log(t('sinGrabar')); finVideo('nada', t('corteVideo')); }
  function cortarVideo() { if (e.grabando) finVideo('nada', t('corteVideo')); }   // al cambiar de estancia
  function cubitoBoca() {
    if (!est().inventario.includes('vaso con hielo')) return UI.log(t('sinHielo'));
    if (!e.grabando) return UI.log(t('cubitoSinGrabar'));
    finVideo(est().estancia === 'terraza' ? 'cubito' : 'cubito-casa', t('videoCubito'));
  }

  /* ---- Prueba 3: alimentos de la nevera → «calabacín» por Telegram → vídeo mordiéndolo ---- */
  function examinarNevera() {
    if (est().estancia !== 'cocina') return;
    UI.log('Abres la nevera. Hay: ' + Datos.verduras.join(', ') + '.');
    e.neveraVista = true;
    if (activa() === 'calabacin' && e.fase3 === 'examinar') e.fase3 = 'responder';
  }
  /* Respuesta libre por Telegram: ignora mayúsculas, acentos, espacios y otros alimentos.
     Basta con que aparezca «calabac…» (calabacín, calabacines). */
  const ALIMENTOS = /huevo|leche|queso|pollo|zanahoria|judia|tomate|calabac|pimiento/;
  function responder(cmd) {
    if (activa() !== 'calabacin' || e.fase3 === 'video') return false;
    const texto = Juego.norm(cmd), dice = texto.includes('calabac');
    if (est().app !== 'telegram') {   // si parece una respuesta pero Telegram está cerrado, avisa
      if (!dice && !(e.fase3 === 'responder' && ALIMENTOS.test(texto))) return false;
      UI.log(t('sinTelegram'));
      return true;
    }
    if (dice) { e.fase3 = 'video'; UI.dialogo(t('pedirCalabacin')); return true; }
    if (e.fase3 === 'responder') { UI.dialogo('«No es eso lo que busco. Mira mejor.»'); return true; }
    return false;
  }
  function morderCalabacin() {
    if (est().estancia !== 'cocina' && !est().inventario.includes('calabacín')) return UI.log(t('sinCalabacin'));
    if (!e.grabando) return UI.log(t('calabacinSinGrabar'));
    finVideo('calabacin', t('videoCalabacin'));
  }

  /* ---- Prueba 4: llave (ajedrez) → cajón de la cómoda → rotulador → escribir en el brazo → foto ---- */
  function abrirCajon() {
    if (est().estancia !== 'habitacion') return UI.log('No ves ningún cajón por aquí.');
    if (e.cajon) return UI.log(t('cajonYa'));
    if (!est().inventario.includes('llave')) return UI.log(t('cajonCerrado'));
    e.cajon = true;
    UI.log(t('cajonAbre'));
  }
  function examinarCajon() {
    if (!e.cajon) return UI.log(t('cajonCerrado'));
    UI.log(est().inventario.includes('rotulador') ? t('cajonVacio') : t('cajonContenido'));
  }
  function escribirBrazo() {
    if (!est().inventario.includes('rotulador')) return UI.log(t('sinRotulador'));
    if (e.brazo) return UI.log(t('brazoYa'));
    e.brazo = true;
    UI.log(t('escribeBrazo'));
  }

  /* ---- Fotos y vídeos (comunes) ---- */
  function hacerFoto(objeto) {
    if (!objeto) return UI.log('¿De qué quieres hacer la foto?');
    if (/mano/.test(objeto)) {
      e.fotos.push(e.manoRoja ? 'mano roja' : 'mano');
      return UI.log(t(e.manoRoja ? 'fotoManoRoja' : 'fotoManoNormal'));
    }
    if (/brazo/.test(objeto)) {
      e.fotos.push(e.brazo ? 'brazo escrito' : 'brazo');
      return UI.log(t(e.brazo ? 'fotoBrazoEscrito' : 'fotoBrazoNormal'));
    }
    UI.log('No puedes hacer una foto de eso.');
  }
  function telegramListo() {
    if (!est().desbloqueado) { UI.log('Telegram sigue bloqueado.'); return false; }
    if (est().app !== 'telegram') { UI.log(t('sinTelegram')); return false; }
    return true;
  }
  /* Lo que el desconocido recuerda al jugador cuando manda algo que no es lo pedido. */
  function recordatorio() {
    const o = activa();
    if (o === 'caldera') return t('recuerdaCaldera');
    if (o === 'hielo') return t('recuerdaHielo');
    if (o === 'calabacin') return t(e.fase3 === 'video' ? 'recuerdaCalabacinVideo' : 'recuerdaCalabacin');
    if (o === 'rotulador') return t('recuerdaRotulador');
    return t('recuerdaGenerico');
  }
  function enviarFoto() {
    if (!telegramListo()) return;
    if (!e.fotos.length) return UI.log('No tienes ninguna foto que enviar.');
    const ultima = e.fotos[e.fotos.length - 1];
    if (activa() === 'caldera' && e.bloqueada && ultima === 'mano roja') {
      if (!est().desnuda) return UI.dialogo(t('recuerdaDesnudarse'));   // desnudarse es necesario en la prueba 1
      e.fotos.pop();
      UI.dialogo('«Muy bien. Veo que sabes obedecer.»');
      return superar();
    }
    if (activa() === 'rotulador' && ultima === 'brazo escrito') {
      e.fotos.pop();
      UI.dialogo('«Eso es. Justo lo que quería ver.»');
      return superar();
    }
    UI.dialogo(recordatorio());
  }
  function enviarVideo() {
    if (!telegramListo()) return;
    if (!e.videos.length) return UI.log(t('sinVideo'));
    const ultimo = e.videos[e.videos.length - 1];
    if (activa() === 'hielo' && ultimo === 'cubito') {
      e.videos.pop();
      UI.dialogo('«Bien. Eso ha estado mejor de lo que esperaba.»');
      return superar();
    }
    if (activa() === 'hielo' && ultimo === 'cubito-casa') return UI.dialogo('«Te he dicho que en la terraza. Repítelo.»');
    if (activa() === 'calabacin' && e.fase3 === 'video' && ultimo === 'calabacin') {
      e.videos.pop();
      UI.dialogo('«Perfecto. Sabía que no tendrías problema.»');
      return superar();
    }
    UI.dialogo(recordatorio());
  }

  return {
    siguiente, cumple, examinarCaldera, subirTemperatura, ajustar, apoyarMano,
    abrirCongelador, grabarVideo, pararVideo, cortarVideo, cubitoBoca,
    examinarNevera, responder, morderCalabacin,
    abrirCajon, examinarCajon, escribirBrazo,
    hacerFoto, enviarFoto, enviarVideo
  };
})();
