/* Equipo de música del salón.
   Para añadir canciones: copia tus archivos (mp3, ogg o wav) a la carpeta `audio/` y añade una línea a `lista`.
   Comandos (solo en el salón, salvo apagar):
     ver equipo / ver canciones     → descripción y lista numerada
     poner música                   → canciones al azar, una tras otra
     poner canción 2 / poner <título> → esa canción (suena una vez)
     siguiente canción              → salta a otra
     apagar música / apagar equipo  → para el sonido
   Mientras suena, el volumen baja al salir del salón (ajustes de abajo). */
/*const Musica = (() => {
  /* ===== CONFIGURACIÓN (edita aquí) ===== */
/*  const lista = [

     { titulo: 'Memories of blue', archivo: 'audio/memories.mp3' },
      { titulo: 'emisora 1', archivo: 'audio/1.mp3' },
      { titulo: 'El rey', archivo: 'audio/Copiapega.mp3' },
      { titulo: 'emisora 2', archivo: 'audio2s.mp3' },
     { titulo: 'Tiempo', archivo: 'audio/lapso1.mp3' },
      { titulo: 'emisora 3', archivo: 'audio/3.mp3' }
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
  }; */

  /* ===== Lógica ===== */
 /* const norm = t => Juego.norm(t);
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
*/
  /* Devuelve true si el comando era para el equipo de música (y ya lo ha gestionado). */
/*  function comando(cmd) {
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
})();*/

const Musica = (() => {
  /* ===== CONFIGURACIÓN ===== */
  const lista = [
    { titulo: 'Memories of blue', archivo: 'audio/memories.mp3' },
    { titulo: 'Locutor 1', archivo: 'audio/1.mp3' },
    { titulo: 'El rey', archivo: 'audio/Copiapega.mp3' },
    { titulo: 'Locutor 2', archivo: 'audio/2.mp3' },
    { titulo: 'Tiempo', archivo: 'audio/lapso1.mp3' },
    { titulo: 'Locutor 3', archivo: 'audio/3.mp3' },
    { titulo: 'Locutor 4', archivo: 'audio/4.mp3' },
    { titulo: 'Locutor 5', archivo: 'audio/5.mp3' },
    { titulo: 'Locutor 6', archivo: 'audio/6.mp3' },
    { titulo: 'Locutor 7', archivo: 'audio/7.mp3' },
    { titulo: 'Locutor 8', archivo: 'audio/8.mp3' },
    { titulo: 'Locutor 9', archivo: 'audio/9.mp3' },
    { titulo: 'Locutor 10', archivo: 'audio/10.mp3' },
    { titulo: 'Locutor 11', archivo: 'audio/11.mp3' },
    { titulo: 'Locutor 12', archivo: 'audio/12.mp3' },
    { titulo: 'Locutor 13', archivo: 'audio/13.mp3' },
    { titulo: 'Locutor 14', archivo: 'audio/14.mp3' },
    { titulo: 'Locutor 15', archivo: 'audio/15.mp3' },
    { titulo: 'Locutor 16', archivo: 'audio/16.mp3' },
    { titulo: 'Locutor 17', archivo: 'audio/17.mp3' },
    { titulo: 'Locutor 18', archivo: 'audio/18.mp3' },
    { titulo: 'Locutor 19', archivo: 'audio/19.mp3' },
    { titulo: 'Locutor 20', archivo: 'audio/20.mp3' }
  ];

  const ajustes = {
    volumenSalon: 0.8,
    volumenResto: 0.3,
    apagarDesdeCualquierSitio: true,
    avisarCambio: true
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

  /* ===== LÓGICA ===== */

  const norm = t => Juego.norm(t);
  const audio = new Audio();

  let sonando = false;
  let actual = -1;

  const tx = (clave, titulo) =>
    textos[clave].replace('{titulo}', titulo || '');

  function volumen() {
    audio.volume = Juego.estado.estancia === 'salon'
      ? ajustes.volumenSalon
      : ajustes.volumenResto;
  }

  // Avanza siempre al siguiente archivo de la lista.
  function siguienteIndice() {
    return (actual + 1) % lista.length;
  }

  function reproducir(i, aviso) {
    actual = i;
    sonando = true;

    audio.src = lista[i].archivo;
    volumen();

    const intento = audio.play();

    if (intento && intento.catch) {
      intento.catch(err => {
        sonando = false;
        console.warn('Música: no se puede reproducir', lista[i].archivo, err);
        UI.log(tx('error'));
      });
    }

    UI.log(tx(aviso || 'suena', lista[i].titulo));
  }

  // Al terminar un archivo, reproduce el siguiente.
  audio.addEventListener('ended', () => {
    if (sonando) {
      reproducir(siguienteIndice(), ajustes.avisarCambio ? 'cambia' : null);
    }
  });

  audio.addEventListener('error', () => {
    if (sonando) {
      sonando = false;
      console.warn('Música: no se encuentra', audio.src);
      UI.log(tx('error'));
    }
  });

  function parar() {
    audio.pause();
    try {
      audio.currentTime = 0;
    } catch (e) {}
    sonando = false;
  }

  function cual(arg) {
    const limpio = ' ' + arg + ' ';

    const porTitulo = lista.findIndex(c =>
      limpio.includes(' ' + norm(c.titulo) + ' ')
    );

    if (porTitulo >= 0) return porTitulo;

    const n = arg.match(/\d+/);

    if (n) {
      return n[0] >= 1 && n[0] <= lista.length
        ? n[0] - 1
        : -2;
    }

    return -1;
  }

  function examinar() {
    const filas = lista.map((c, i) =>
      `${i + 1}. ${c.titulo}`
    ).join('<br>');

    UI.log(
      `${textos.examina}<br>` +
      `${sonando ? 'Está sonando «' + lista[actual].titulo + '».' : 'Está apagado.'}<br>` +
      `Posición actual: ${actual + 1} de ${lista.length}<br>` +
      filas
    );
  }

  function comando(cmd) {
    const est = Juego.estado;
    volumen();

    if (!/\b(musica|equipo|cadena|minicadena|cancion|canciones|disco|discos|radio)\b/.test(cmd)) {
      return false;
    }

    const [verbo, ...resto] = cmd.split(' ');
    const arg = resto.join(' ');
    const enSalon = est.estancia === 'salon';

    if (['apagar', 'parar', 'detener', 'quitar', 'silenciar', 'callar', 'cortar'].includes(verbo)) {
      if (!enSalon && !ajustes.apagarDesdeCualquierSitio) {
        UI.log(textos.lejos);
        return true;
      }

      if (!sonando) {
        UI.log(textos.yaApagado);
        return true;
      }

      parar();
      UI.log(textos.apaga);
      return true;
    }

    if (['siguiente', 'otra', 'cambiar', 'pasar', 'saltar'].includes(verbo)) {
      if (!enSalon) {
        UI.log(textos.lejos);
        return true;
      }

      if (!sonando) {
        UI.log(textos.yaApagado);
        return true;
      }

      reproducir(siguienteIndice(), 'cambia');
      return true;
    }

    if (['examinar', 'ver', 'mirar', 'listar', 'consultar'].includes(verbo)) {
      if (!enSalon) {
        UI.log(textos.lejos);
        return true;
      }

      examinar();
      return true;
    }

    if (['poner', 'encender', 'reproducir', 'escuchar', 'activar', 'pulsar', 'dar', 'tocar', 'usar'].includes(verbo)) {
      if (!enSalon) {
        UI.log(textos.lejos);
        return true;
      }

      const i = cual(arg);

      if (i === -2) {
        UI.log(textos.noExiste);
        return true;
      }

      if (i >= 0) {
        reproducir(i);
        return true;
      }

      if (sonando) {
        UI.log(tx('yaSuena', lista[actual].titulo));
        return true;
      }

      // Si está apagado, empieza desde el principio.
      reproducir(0);
      return true;
    }

    return false;
  }

  return { comando, parar, lista };
})();
