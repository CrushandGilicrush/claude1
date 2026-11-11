/* Equipo de música del salón.
   Para añadir canciones: copia tus archivos (mp3, ogg o wav) a la carpeta `audio/` y añade una línea a `lista`.
   Comandos (solo en el salón, salvo apagar):
     ver equipo / ver canciones     → descripción y lista numerada
     poner música                   → canciones al azar, una tras otra
     poner canción 2 / poner <título> → esa canción (suena una vez)
     siguiente canción              → salta a otra
     apagar música / apagar equipo  → para el sonido
   Mientras suena, el volumen baja al salir del salón (ajustes de abajo). */
const Musica = (() => {
  /* ===== CONFIGURACIÓN (edita aquí) ===== */
  const lista = [

     { titulo: 'Memories', archivo: 'audio/memmories.mp3' },
      { titulo: 'El rey', archivo: 'audio/Copiapega.mp3' },
     { titulo: 'Tiempo', archivo: 'audio/lapso1.mp3' }
  ];
  const ajustes = {
    volumenSalon: 0.8,                // volumen en el salón (0 a 1)
    volumenResto: 0.3,                // volumen en el resto de la casa
    apagarDesdeCualquierSitio: true,  // false = hay que estar en el salón para apagarlo
    avisarCambio: true                // avisa en la terminal cuando empieza otra canción sola
  };
  const textos = {
    lejos: 'El equipo de música está en el salón.',
    examina: 'Un equipo de música con un altavoz a cada lado. Tiene unos botones de reproducir, siguiente y apagar.',
    suena: 'Pulsas el botón y el equipo se enciende. Empieza a sonar «{titulo}».',
    cambia: 'Empieza a sonar «{titulo}».',
    yaSuena: 'Ya está sonando «{titulo}».',
    apaga: 'Apagas el equipo y la casa se queda en silencio.',
    yaApagado: 'El equipo ya está apagado.',
    noExiste: 'No hay una canción así en la lista.',
    error: 'El equipo hace un ruido extraño y se detiene.'
  };

  /* ===== Lógica ===== */
  const norm = t => Juego.norm(t);
  const audio = new Audio();
  let sonando = false, modo = 'una', actual = -1;
  const tx = (clave, titulo) => textos[clave].replace('{titulo}', titulo || '');

  function volumen() { audio.volume = Juego.estado.estancia === 'salon' ? ajustes.volumenSalon : ajustes.volumenResto; }

  function azar() {
    if (lista.length < 2) return 0;
    let i;
    do { i = Math.floor(Math.random() * lista.length); } while (i === actual);
    return i;
  }

  function reproducir(i, nuevoModo, aviso) {
    actual = i; modo = nuevoModo; sonando = true;
    audio.src = lista[i].archivo;
    volumen();
    const intento = audio.play();
    if (intento && intento.catch) intento.catch(err => { sonando = false; console.warn('Música: no se puede reproducir', lista[i].archivo, err); UI.log(tx('error')); });
    UI.log(tx(aviso || 'suena', lista[i].titulo));
  }

  audio.addEventListener('ended', () => {
    if (sonando && modo === 'aleatorio') reproducir(azar(), 'aleatorio', ajustes.avisarCambio ? 'cambia' : null);
    else sonando = false;
  });
  audio.addEventListener('error', () => { if (sonando) { sonando = false; console.warn('Música: no se encuentra', audio.src); UI.log(tx('error')); } });

  function parar() { audio.pause(); try { audio.currentTime = 0; } catch (e) {} sonando = false; }

  function cual(arg) {   // -1 = ninguna concreta (al azar), -2 = pidió una que no existe
    const limpio = ' ' + arg + ' ';
    const porTitulo = lista.findIndex(c => limpio.includes(' ' + norm(c.titulo) + ' '));
    if (porTitulo >= 0) return porTitulo;
    const n = arg.match(/\d+/);
    if (n) return n[0] >= 1 && n[0] <= lista.length ? n[0] - 1 : -2;
    return -1;
  }

  function examinar() {
    const filas = lista.map((c, i) => `${i + 1}. ${c.titulo}`).join('<br>');
    UI.log(`${textos.examina}<br>${sonando ? 'Está sonando «' + lista[actual].titulo + '».' : 'Está apagado.'}<br>${filas}`);
  }

  /* Devuelve true si el comando era para el equipo de música (y ya lo ha gestionado). */
  function comando(cmd) {
    const est = Juego.estado;
    volumen();
    if (!/\b(musica|equipo|cadena|minicadena|cancion|canciones|disco|discos|radio)\b/.test(cmd)) return false;
    const [verbo, ...resto] = cmd.split(' ');
    const arg = resto.join(' ');
    const enSalon = est.estancia === 'salon';

    if (['apagar', 'parar', 'detener', 'quitar', 'silenciar', 'callar', 'cortar'].includes(verbo)) {
      if (!enSalon && !ajustes.apagarDesdeCualquierSitio) { UI.log(textos.lejos); return true; }
      if (!sonando) { UI.log(textos.yaApagado); return true; }
      parar(); UI.log(textos.apaga); return true;
    }
    if (['siguiente', 'otra', 'cambiar', 'pasar', 'saltar'].includes(verbo)) {
      if (!enSalon) { UI.log(textos.lejos); return true; }
      if (!sonando) { UI.log(textos.yaApagado); return true; }
      reproducir(azar(), modo, 'cambia'); return true;
    }
    if (['examinar', 'ver', 'mirar', 'listar', 'consultar'].includes(verbo)) {
      if (!enSalon) { UI.log(textos.lejos); return true; }
      examinar(); return true;
    }
    if (['poner', 'encender', 'reproducir', 'escuchar', 'activar', 'pulsar', 'dar', 'tocar', 'usar'].includes(verbo)) {
      if (!enSalon) { UI.log(textos.lejos); return true; }
      const i = cual(arg);
      if (i === -2) { UI.log(textos.noExiste); return true; }
      if (i >= 0) { reproducir(i, 'una'); return true; }
      if (sonando) { UI.log(tx('yaSuena', lista[actual].titulo)); return true; }
      reproducir(azar(), 'aleatorio'); return true;
    }
    return false;
  }

  return { comando, parar, lista };
})();
