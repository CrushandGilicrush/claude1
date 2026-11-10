/* Motor: estado, intérprete de comandos y arranque. */
const Juego = (() => {
  const estado = {
    estancia: 'habitacion', inventario: [], contador: 0, terminado: false,
    dispositivo: null, app: null, esperandoCodigo: false, desbloqueado: false,
    desnuda: false, cafeHecho: false, cafeTomado: false, mensajeLeido: false, cuadroVisto: false, contactado: false
  };
  const norm = t => t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();
   const sinArticulo = t => t.replace(/^(en|sobre|contra|a|al|la|el|los|las|un|una|de|del)\s+/, '').replace(/^(a|al|la|el|los|las|un|una|de|del)\s+/, '');
  const T = (clave, datos = {}) => Datos.textos[clave].replace(/\{(\w+)\}/g, (_, k) => datos[k] !== undefined ? datos[k] : Datos[k]);

  /* ---------- Estancias y objetos ---------- */
  function mostrarSala() {
    const s = Datos.estancias[estado.estancia];
    estado.dispositivo = null;
    estado.app = null;
    UI.vista(s.nombre, s.imagen || Datos.imagenSala, false, false, false);
    UI.log(`Te encuentras en <b>${s.nombre}</b>. ${s.desc}`);
  }

  function ir(arg) {
    const nombre = sinArticulo(arg);
    const destino = Datos.destinoAlias[nombre] || nombre;
    if (!Datos.estancias[destino]) return UI.log('No puedes ir a ese lugar o no existe.');
    Ordenes.cortarVideo();
    estado.estancia = destino;
    mostrarSala();
  }

  function examinar(arg) {
    const nombre = sinArticulo(arg);
    if (!nombre) return UI.log('¿Qué quieres examinar?');
    /* Objetos de la estancia + los que llevas encima (p. ej. el libro). */
    const propios = {};
    estado.inventario.forEach(i => { for (const e in Datos.objetos) if (Datos.objetos[e][i] !== undefined) propios[i] = Datos.objetos[e][i]; });
    const objetos = Object.assign({}, propios, Datos.objetos[estado.estancia]);
    /* Busca el objeto como palabra completa dentro de la frase: «mueble antiguo» → «mueble». */
    const frase = ' ' + nombre + ' ';
    const hallado = [...Object.keys(objetos), ...Object.keys(Datos.alias)]
      .filter(k => frase.includes(' ' + k + ' ')).sort((a, b) => b.length - a.length)[0];
    const clave = Datos.alias[hallado] || hallado;
    const desc = objetos[clave];
    if (desc === undefined) return UI.log('No ves nada parecido por aquí.');
    if (clave === 'cuadro') estado.cuadroVisto = true;
    if (clave === 'cajon') return Ordenes.examinarCajon();
    if (clave === 'tablero') return Ajedrez.examinar();
    const img = Datos.imagenesObjetos[clave];
    if (img) {
      estado.dispositivo = 'vista';
      UI.vista(clave.charAt(0).toUpperCase() + clave.slice(1), img, false, true);
    }
    const pista = () => { if (img) UI.log('Escribe «cerrar» para volver a ver la estancia.'); };
    if (clave === 'nevera') return Ordenes.examinarNevera();
    if (clave === 'caldera') { Ordenes.examinarCaldera(); return pista(); }
    UI.log(desc);
    pista();
  }

  /* ---------- Café ---------- */
  function hacerCafe() {
    if (estado.estancia !== 'cocina') return UI.log(T('cafeLejos'));
    if (estado.cafeTomado) return UI.log(T('cafeYaBebido'));
    if (estado.cafeHecho) return UI.log(T('cafeRepetido'));
    estado.cafeHecho = true;
    UI.log(T('cafeHecho'));
  }
  function beberCafe() {
    if (estado.cafeTomado) return UI.log(T('cafeYaBebido'));
    if (!estado.cafeHecho) return UI.log(T('cafeNoHay'));
    estado.cafeTomado = true;
    UI.log(T('cafeBebido'));
  }

  /* ---------- Móvil, ordenador y apps (Life y Telegram) ---------- */
  const encendido = () => estado.dispositivo === 'movil' || estado.dispositivo === 'ordenador';
  const titulo = () => (estado.dispositivo === 'movil' ? 'Móvil' : 'Ordenador');

  function abrir(arg) {
    if (/nevera/.test(arg)) return examinar('nevera');
    if (/congelador/.test(arg)) return Ordenes.abrirCongelador();
    if (/comoda|cajon/.test(arg)) return Ordenes.abrirCajon();
    const pc = /ordenador|pc/.test(arg), movil = /movil/.test(arg);
    if (!pc && !movil) return UI.log('No puedes abrir eso.');
    if (pc && estado.estancia !== 'despacho') return UI.log('El ordenador está en el despacho.');
    if (Datos.exigirCafe && !estado.cafeTomado) return UI.log(T('sinCafe'));
    estado.dispositivo = pc ? 'ordenador' : 'movil';
    estado.app = null;
    UI.vista(titulo(), Datos.imagenes[estado.dispositivo]);
    UI.log(T('enciende', { dispositivo: pc ? 'el ordenador' : 'el móvil' }));
  }

  function mostrarApp(app, texto) {
    estado.app = app;
    UI.vista(`${titulo()} · ${app === 'life' ? 'Life' : 'Telegram'}`, Datos.imagenes[app]);
    UI.log(texto);
  }

  function abrirApp(cmd) {
    if (!encendido()) {
      if (Datos.exigirCafe && !estado.cafeTomado) return UI.log(T('sinCafe'));
      estado.dispositivo = 'movil';   // el móvil siempre está a mano
    }
    if (/life|red social/.test(cmd)) return mostrarApp('life', T(estado.mensajeLeido ? 'lifeVacio' : 'lifeNuevo'));
    if (estado.desbloqueado) return mostrarApp('telegram', estado.mensajeLeido && !estado.contactado ? T('telegramEscribe') : T('telegramListo'));
    UI.vista(`${titulo()} · Telegram`, Datos.imagenes.telegram, true);
    if (!estado.cuadroVisto) return UI.log(T('telegramBloqueado'));
    estado.esperandoCodigo = true;
    UI.log(T('pideCodigo'));
  }

  function comprobarCodigo(cmd) {
    if (['cancelar', 'salir', 'cerrar', 'volver'].includes(cmd)) {
      estado.esperandoCodigo = false;
      UI.vista(titulo(), Datos.imagenes[estado.dispositivo]);
      return UI.log('Apartas la vista de la pantalla.');
    }
    if (cmd !== Datos.codigo) return UI.log(T('codigoMal'));   // sigue esperando el código
    estado.esperandoCodigo = false;
    estado.desbloqueado = true;
    mostrarApp('telegram', T('telegramAbre') + (estado.mensajeLeido ? ' ' + T('telegramEscribe') : ''));
  }

  function leerMensaje() {
    if (estado.app !== 'life') return UI.log(T('sinMensaje'));
    estado.mensajeLeido = true;
    UI.log(T('mensajeIntro'));
    UI.log(T('mensaje'), 'dialogo');
  }

  const escapa = t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  function escribir(arg) {
    if (estado.app !== 'telegram') return UI.log(T('escribirSinApp'));
    if (!estado.mensajeLeido) return UI.log(T('escribirSinMensaje'));
    if (!estado.contactado) {
      estado.contactado = true;
      UI.log(T('escribirOk'));
      UI.dialogo(T('respuesta'));
      return Ordenes.siguiente();
    }
    const texto = arg.replace(new RegExp('^(a )?' + escapa(norm(Datos.contacto)) + '\\s*'), '').trim();
    if (!texto) return UI.log(Dialogos.sinTexto);
    conversar(texto);
  }

  /* Conversación por palabras clave (reglas en js/dialogos.js). */
  const turnos = {};
  function conversar(texto) {
    const msg = ' ' + norm(texto).replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ') + ' ';
    const coincide = p => { p = norm(p); return p.endsWith('*') ? msg.includes(' ' + p.slice(0, -1)) : msg.includes(' ' + p + ' '); };
    const i = Dialogos.reglas.findIndex(r => r.palabras.some(coincide));
    const lista = i >= 0 ? Dialogos.reglas[i].respuestas : Dialogos.porDefecto;
    turnos[i] = (turnos[i] || 0) + 1;
    UI.dialogo(lista[(turnos[i] - 1) % lista.length]);
  }

  /* ---------- Otros comandos ---------- */
  const TF = (clave, defecto) => (Datos.textos && Datos.textos[clave]) || defecto;

  function llamar(cmd) {
    if (cmd.includes('policia')) {
      if (!estado.mensajeLeido) return UI.log(TF('policiaSinMotivo', 'No ha pasado nada que merezca llamar a la policía.'));   // hasta leer el mensaje de Life
      return terminar(estado.contador);
    }
    UI.log('Parece que no hay nadie al otro lado.');
  }

  function desnudarse() {
    if (estado.desnuda) return UI.log(TF('yaDesnuda', 'Ya estás desnuda.'));
    estado.desnuda = true;
    UI.log(TF('desnudarse', 'Con las manos temblorosas, te quitas la ropa.'));
  }

  function terminar(i) {
    estado.terminado = true;
    UI.vaciarCola();
    UI.log(`<b>FIN DE LA PARTIDA</b><br>${Datos.finales[i]}<br><br>Pulsa el botón ↻ para volver a empezar.`, 'final');
    UI.bloquearEntrada();
  }

  function coger(arg) {
    const o = Datos.cogibles.find(c => c.nombres.test(arg));
    if (!o) return UI.log('No puedes coger eso.');
    if (estado.inventario.includes(o.item)) return UI.log(o.yaTienes);
    if (o.estancia !== estado.estancia) return UI.log(o.fuera || `No ves ningún ${o.item} por aquí.`);
    if (o.requiere && !Ordenes.cumple(o.requiere)) return UI.log(o.bloqueado);
    estado.inventario.push(o.item);
    UI.inventario(estado.inventario);
    UI.log(o.texto);
  }

  function leer(arg) {
    if (/mensaje|correo/.test(arg)) return leerMensaje();
    if (!/libro|perversion|emily/.test(arg)) return UI.log('No hay nada que leer ahí.');
    if (!estado.inventario.includes('libro') && estado.estancia !== 'salon') return UI.log('No ves ningún libro por aquí.');
    UI.lectura(Relato.titulo, Relato.texto);
  }

  /* Comandos de texto: globales o ligados a una estancia y un objeto. */
  function comandoTexto(verbo, arg) {
    const c = Datos.comandosTexto.find(c => c.verbos.includes(verbo) && (!c.objetos || c.objetos.includes(sinArticulo(arg))));
    if (!c) return false;
    UI.log(c.estancia && c.estancia !== estado.estancia ? c.fuera : c.texto);
    return true;
  }

  function ayuda() {
    UI.log('Comandos: «ir a [estancia]», «examinar [objeto]», «coger [objeto]», «leer [objeto]», «encender móvil», «encender ordenador», «mirar red social», «abrir telegram», «escribir [mensaje]», «hacer foto [objeto]», «enviar foto», «cerrar», «llamar a la policía».');
  }

  /* ---------- Intérprete ---------- */
  function ejecutar(entrada) {
    if (estado.terminado || !entrada.trim()) return;
    UI.log(entrada, 'usuario');
    const cmd = norm(entrada);
       if (Extras.comando(cmd)) return;
    if (estado.esperandoCodigo) return comprobarCodigo(cmd);
    const ajuste = cmd.match(/^([+-])\s*(\d+)\s*[º°]?\s*c?$/);
    if (ajuste) return Ordenes.ajustar(ajuste[1], parseInt(ajuste[2], 10));
    if (Ajedrez.mover(cmd)) return;
    if (/\b(life|telegram)\b|red social/.test(cmd)) return abrirApp(cmd);
    const [verbo, ...resto] = cmd.split(' ');
    const arg = resto.join(' ');
        if (['abrir', 'mirar', 'ver', 'examinar'].includes(verbo) && /mensaje/.test(arg)) return leerMensaje();
    if (verbo === 'ir') return ir(arg);
    if (['examinar', 'ver', 'mirar'].includes(verbo)) return examinar(arg);
    if (verbo === 'subir' && /temperatura|caldera|calefaccion/.test(arg)) return Ordenes.subirTemperatura();
    if (['apoyar', 'poner', 'tocar', 'colocar', 'pegar', 'mantener'].includes(verbo) && /radiador/.test(arg)) return Ordenes.apoyarMano();
    if (['grabar', 'encender', 'hacer', 'empezar'].includes(verbo) && /video/.test(arg)) return Ordenes.grabarVideo();
    if (['parar', 'detener', 'terminar', 'dejar', 'cortar'].includes(verbo) && /video|grab/.test(arg)) return Ordenes.pararVideo();
    if (/cubito|hielo/.test(arg) && (/boca/.test(arg) || ['chupar', 'lamer', 'comer'].includes(verbo))) return Ordenes.cubitoBoca();
    if ((['morder', 'comer', 'masticar', 'mordisquear'].includes(verbo) || /mordisco/.test(arg)) && /calabac/.test(arg)) return Ordenes.morderCalabacin();
    if (['hacer', 'preparar', 'usar', 'poner'].includes(verbo) && /cafe/.test(arg)) return hacerCafe();
    if (['beber', 'tomar', 'tomarse'].includes(verbo) && /cafe/.test(arg)) return beberCafe();
    if (verbo === 'coger' || verbo === 'coge') return coger(sinArticulo(arg));
    if (verbo === 'leer' || verbo === 'lee') return leer(sinArticulo(arg));
    if (verbo === 'abrir' || verbo === 'encender') return abrir(arg);
    if (['escribir', 'escribirme', 'pintar', 'anotar'].includes(verbo) && /brazo/.test(arg)) return Ordenes.escribirBrazo();
    if (['escribir', 'decir', 'responder', 'contestar', 'preguntar', 'hablar'].includes(verbo))   return Personajes.manejar(arg) || Ordenes.responder(cmd) || escribir(arg);
    if (verbo === 'cerrar' && estado.dispositivo) return mostrarSala();
    if (/^desnud|^desvest/.test(verbo) || (/^quit/.test(verbo) && /ropa/.test(arg))) return desnudarse();
    if (/^llam/.test(verbo)) return llamar(cmd);
    if (verbo === 'ayuda') return ayuda();
    const sujeto = sinArticulo(arg);
    if ((verbo === 'hacer' || verbo === 'sacar') && /^foto/.test(sujeto)) return Ordenes.hacerFoto(sinArticulo(sujeto.replace(/^foto\s*/, '')));
    if (['enviar', 'mandar', 'subir'].includes(verbo) && /^foto/.test(sujeto)) return Ordenes.enviarFoto();
    if (['enviar', 'mandar', 'subir'].includes(verbo) && /^video/.test(sujeto)) return Ordenes.enviarVideo();
    if (comandoTexto(verbo, arg)) return;
       if (Personajes.manejar(cmd) || Ordenes.responder(cmd)) return;
    if (estado.app === 'telegram' && estado.desbloqueado && estado.mensajeLeido) return escribir(cmd);   // texto libre en Telegram = mensaje
    UI.log('No entiendo ese comando.');
  }

  function iniciar() {
    Datos.intro.forEach(([tipo, texto]) => UI.log(texto, tipo));
    mostrarSala();
    UI.inventario(estado.inventario);
    UI.$('terminal').scrollTop = 0;   // el inicio se lee desde arriba
    const input = UI.$('command-input');
    const lanzar = () => { const v = input.value; input.value = ''; ejecutar(v); };
    input.addEventListener('keypress', ev => { if (ev.key === 'Enter') lanzar(); });
    UI.$('btn-ejecutar').addEventListener('click', lanzar);
    UI.$('lectura-cerrar').addEventListener('click', UI.cerrarLectura);
    document.addEventListener('keydown', ev => { if (ev.key === 'Escape') UI.cerrarLectura(); });
  }

  window.addEventListener('load', iniciar);
  return { estado, norm, terminar, ejecutar };
})();
