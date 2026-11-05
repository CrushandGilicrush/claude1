/* Órdenes del extorsionador. Para añadir una orden: crear su definición y añadir su id a `secuencia`. */
const Ordenes = (() => {
  const secuencia = ['caldera', 'verduras'];   // orden en que se piden (provisional: aún sin órdenes 2, 3 y 5)
  let indice = -1;
  const e = { temperatura: 47, bloqueada: false, manoRoja: false, fase4: null, fotos: [] };
  /* Textos editables en Datos.textos (data.js); si faltan, se usa el valor por defecto. */
  const t = (clave, defecto) => (Datos.textos && Datos.textos[clave]) || defecto;

  const defs = {
    caldera: {
      pide: () => UI.dialogo(t('pedirCaldera', '«Empecemos con algo sencillo. Sube la caldera a 70 grados. Cuando esté caliente, apoya la mano en el radiador durante un minuto. Después, hazte una foto de la mano y mándamela.»'))
    },
    verduras: {
      pide: () => { e.fase4 = 'examinar'; UI.dialogo('«Dime qué verduras tienes en la nevera.»'); }
    }
  };

  const activa = () => secuencia[indice];

  function siguiente() {
    indice++;
    if (indice >= secuencia.length) return Juego.terminar(Datos.finales.length - 1);
    defs[secuencia[indice]].pide();
  }

  function superar() { Juego.estado.contador++; UI.contador(Juego.estado.contador); siguiente(); }

  /* ---- Orden 1: caldera (cocina) → radiador (salón) → foto de la mano → enviar por Telegram ---- */
  function examinarCaldera() {
    UI.log(`Un panel digital marca <b>${e.temperatura} °C</b>. Una nota pegada explica: «Para subir la temperatura: +número C. Para bajarla: -número C.»`);
  }
  function subirTemperatura() {
    if (Juego.estado.estancia !== 'cocina') return UI.log('La caldera está en la cocina.');
    examinarCaldera();
    UI.log(t('calderaSubir', 'Tienes que escribir el ajuste con el formato de la nota.'));
  }
  function ajustar(signo, n) {
    if (Juego.estado.estancia !== 'cocina') return UI.log('No hay ninguna caldera aquí para ajustar.');
    if (e.bloqueada) return UI.log(t('calderaYa', 'La caldera ya está a 70 grados y el panel está bloqueado.'));
    if (activa() !== 'caldera') return UI.log('La caldera no responde.');
    const nueva = e.temperatura + (signo === '-' ? -n : n);
    if (nueva < 25 || nueva > 85) return UI.log('La caldera no reconoce esos parámetros de ajuste.');
    e.temperatura = nueva;
    if (nueva !== 70) return UI.log(`Debes poner la caldera a 70 grados, ni más ni menos. Temperatura actual: ${nueva} °C.`);
    e.bloqueada = true;
    UI.log('La caldera sube hasta los 70 °C y el panel se bloquea.');
  }
  function apoyarMano() {
    if (Juego.estado.estancia !== 'salon') return UI.log('No ves ningún radiador por aquí.');
    if (e.manoRoja) return UI.log(t('radiadorYa', 'Ya tienes la mano roja. No hace falta insistir.'));
    if (!(activa() === 'caldera' && e.bloqueada)) return UI.log(t('radiadorFrio', 'Apoyas la mano en el radiador. Está templado, nada más.'));
    e.manoRoja = true;
    UI.log(t('radiadorMano', 'Apoyas la mano sobre el radiador y la mantienes ahí un minuto entero. Cuando la retiras, la tienes roja.'));
  }

  /* ---- Orden 4: verduras de la nevera ---- */
  function examinarNevera() {
    if (Juego.estado.estancia !== 'cocina') return;
    UI.log('Abres la nevera. Hay: ' + Datos.verduras.join(', ') + '.');
    if (activa() === 'verduras' && e.fase4 === 'examinar') e.fase4 = 'responder';
  }
  /* Respuesta libre: ignora mayúsculas, acentos, espacios y otras verduras. */
  function responder(cmd) {
    if (activa() !== 'verduras' || e.fase4 !== 'responder') return false;
    if (Juego.norm(cmd).includes('pimiento')) {
      e.fase4 = 'foto';
      UI.dialogo('«Perfecto. Haz una fotografía de esa verdura y envíamela.»');
    } else UI.dialogo('«No es eso lo que busco. Mira mejor.»');
    return true;
  }
  const verdura = x => ['zanahoria', 'judia', 'tomate', 'pimiento'].find(v => x.includes(v));

  /* ---- Fotos (comunes) ---- */
  function hacerFoto(objeto) {
    if (!objeto) return UI.log('¿De qué quieres hacer la foto?');
    if (/mano/.test(objeto)) {
      e.fotos.push(e.manoRoja ? 'mano roja' : 'mano');
      return UI.log(e.manoRoja ? t('fotoManoRoja', 'Haces una foto de tu mano enrojecida.') : t('fotoManoNormal', 'Haces una foto de tu mano. No tiene nada de especial.'));
    }
    const v = Juego.estado.estancia === 'cocina' && verdura(objeto);
    if (!v) return UI.log('No puedes hacer una foto de eso.');
    e.fotos.push(v);
    UI.log(`Haces una foto: ${v}.`);
  }
  function enviarFoto() {
    const est = Juego.estado;
    if (!est.desbloqueado) return UI.log('Telegram sigue bloqueado.');
    if (est.app !== 'telegram') return UI.log(t('sinTelegram', 'Primero tienes que abrir Telegram.'));
    if (!e.fotos.length) return UI.log('No tienes ninguna foto que enviar.');
    const ultima = e.fotos[e.fotos.length - 1];
    if (activa() === 'caldera' && e.bloqueada && ultima === 'mano roja') {
      e.fotos.pop();
      UI.dialogo('«Muy bien. Veo que sabes obedecer.»');
      return superar();
    }
    if (activa() === 'verduras' && e.fase4 === 'foto' && ultima === 'pimiento') {
      e.fotos.pop();
      UI.dialogo('«Bien. Por ahora es suficiente.»');
      return superar();
    }
    UI.dialogo('«Eso no es lo que te he pedido.»');
  }

  return { siguiente, examinarCaldera, subirTemperatura, ajustar, apoyarMano, examinarNevera, responder, hacerFoto, enviarFoto };
})();
