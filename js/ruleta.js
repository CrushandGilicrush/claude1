/* Ruleta de Laura: aparece cuando el jugador dice una palabra clave en su chat.
   Todo lo que se edita está en CONFIGURACIÓN (palabras, textos y las cinco opciones). La lógica y el dibujo van debajo.
   Cada opción puede llevar una frase de Laura (`laura`) y una acción (`accion`) que recibe el estado del juego. */
const Ruleta = (() => {
  /* ===== CONFIGURACIÓN ===== */
  const config = {
    personaje: 'lapso',                 // id del personaje de personajes.js que propone el juego
    palabras: ['ruleta', 'jugar', 'juego', 'apostar', 'echamos una partida'],   // palabras clave (sin acentos; * al final = variantes)
    intro: ['«¡Vale! Gira la ruleta y veremos qué te toca.»', '«¿Otra vez? Venga, gira.»'],   // lo que dice Laura antes (se alternan)
    repetible: true,                    // false = solo se puede jugar una vez
    duracion: 4800,                     // milisegundos que gira
    vueltas: 5,                         // vueltas completas aproximadas
    numeros: true                       // muestra 1-5 sobre los sectores
  };
  const opciones = [
    { texto: 'Dos pinzas, una por cada pezón. 30 minutos', lapso: '«Dos pinzas... podía haber sido peor. Te espero mientras vas a buscarlas y te las pones,»' },
    { texto: 'De rodillas sobre arroz crudo, 2 minutos', lapso: '«Te estás planteando si hacerlo o no, pero jugar solo tiene sentido si cumples con las reglas, así que, hazlo.»' },
    { texto: 'Escribe 50 veces: Esto me pasa por jugar con Lapso. Le haces una foto y la subes a fetlife', lapso: '«De todas las opciones, te ha tocado la peor. Ve a coger papel y boli.»' },
    { texto: 'Mastúrbate hasta que estés a las puertas del orgasmo y detente', lapso: '«Imagina estar atada todo el día y a las puertas del orgasmo cada media hora... Bueno, ¿vas a tentar otra vez a la suerte?» ' },
    { texto: 'Ponte cinta adhesiva en la boca, 1 hora', lapso: '«Al menos puedes escribir. ¿Se te han quitado las ganas de seguir jugando?»' }
    // Opcional en cada opción: peso: 2 (el doble de probable) y accion: estado => { ... }
  ];
  const colores = ['#15110f', '#8d0f14', '#7b0b10', '#15110f', '#8d0f14'];   // cuero de cada sector (como la foto)

  /* ===== Dibujo y lógica ===== */
  const TAU = Math.PI * 2, W = 460, H = 500, CX = 230, CY = 250, R = 190, RI = 172;
  const n = opciones.length, seg = TAU / n;
  const norm = t => Juego.norm(t);
  let fondo, lienzo, c, botonGirar, textoResultado, cuero;
  let angulo = 0, girando = false, ganador = -1, raf = 0, jugada = false, turnoIntro = 0, actual = null, giro = null;

  function crearCuero() {
    const t = document.createElement('canvas');
    t.width = t.height = 140;
    const x = t.getContext('2d');
    for (let i = 0; i < 1100; i++) {
      x.strokeStyle = Math.random() < 0.6 ? 'rgba(0,0,0,0.20)' : 'rgba(255,235,210,0.06)';
      x.lineWidth = Math.random() * 1.2 + 0.3;
      const px = Math.random() * 140, py = Math.random() * 140, a = Math.random() * TAU, l = 2 + Math.random() * 8;
      x.beginPath(); x.moveTo(px, py); x.lineTo(px + Math.cos(a) * l, py + Math.sin(a) * l); x.stroke();
    }
    for (let i = 0; i < 14; i++) {
      const px = Math.random() * 140, py = Math.random() * 140, r = 15 + Math.random() * 25;
      const g = x.createRadialGradient(px, py, 0, px, py, r);
      g.addColorStop(0, 'rgba(0,0,0,0.10)'); g.addColorStop(1, 'rgba(0,0,0,0)');
      x.fillStyle = g; x.fillRect(px - r, py - r, r * 2, r * 2);
    }
    return c.createPattern(t, 'repeat');
  }

  function remache(x, y, r) {
    const g = c.createRadialGradient(x - r * 0.35, y - r * 0.4, r * 0.1, x, y, r);
    g.addColorStop(0, '#f1d4a0'); g.addColorStop(0.55, '#a7763d'); g.addColorStop(1, '#4b2e16');
    c.beginPath(); c.arc(x, y, r, 0, TAU); c.fillStyle = g; c.fill();
    c.lineWidth = 1; c.strokeStyle = 'rgba(0,0,0,0.55)'; c.stroke();
  }

  function marco(trazo, rojo, dentro) {   // pieza de cuero negro con filete rojo
    c.save();
    trazo(0); c.fillStyle = '#0d0a09'; c.fill();
    c.clip(); c.fillStyle = cuero; c.fillRect(0, 0, W, H);
    c.restore();
    trazo(0); c.lineWidth = 2; c.strokeStyle = '#000'; c.stroke();
    trazo(dentro); c.lineWidth = 4; c.strokeStyle = rojo; c.stroke();
  }

  function dibujar(desvio) {
    c.clearRect(0, 0, W, H);
    const barra = d => { c.beginPath(); c.rect(CX - 52 + d, 10 + d, 104 - 2 * d, 462 - 2 * d); };
    marco(barra, '#8d0f14', 7);
    for (const [sx, sy] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
      const rombo = d => { const x = CX + sx * 150, y = CY + sy * 150, r = 54 - d * 1.4; c.beginPath(); c.moveTo(x, y - r); c.lineTo(x + r, y); c.lineTo(x, y + r); c.lineTo(x - r, y); c.closePath(); };
      marco(rombo, '#8d0f14', 7);
    }
    c.fillStyle = '#080605'; c.fillRect(CX - 74, 474, 148, 20);            // peana
    c.fillStyle = 'rgba(255,230,190,0.08)'; c.fillRect(CX - 74, 474, 148, 2);

    /* disco */
    c.save(); c.translate(CX, CY); c.rotate(angulo);
    c.shadowColor = 'rgba(0,0,0,0.7)'; c.shadowBlur = 24; c.shadowOffsetY = 8;
    c.beginPath(); c.arc(0, 0, R, 0, TAU); c.fillStyle = '#2a1c12'; c.fill();
    c.shadowColor = 'transparent'; c.shadowBlur = 0; c.shadowOffsetY = 0;
    for (let i = 0; i < n; i++) {
      const a0 = -Math.PI / 2 + i * seg, a1 = a0 + seg;
      c.save();
      c.beginPath(); c.moveTo(0, 0); c.arc(0, 0, RI, a0, a1); c.closePath();
      c.fillStyle = colores[i % colores.length]; c.fill(); c.clip();
      c.fillStyle = cuero; c.fillRect(-R, -R, R * 2, R * 2);
      const g = c.createRadialGradient(0, 0, RI * 0.2, 0, 0, RI);
      g.addColorStop(0, 'rgba(255,255,255,0.05)'); g.addColorStop(1, 'rgba(0,0,0,0.38)');
      c.fillStyle = g; c.fillRect(-R, -R, R * 2, R * 2);
      c.restore();
    }
    c.lineWidth = 2.5; c.strokeStyle = '#c9a15a';
    for (let i = 0; i < n; i++) {
      const a = -Math.PI / 2 + i * seg;
      c.beginPath(); c.moveTo(Math.cos(a) * 40, Math.sin(a) * 40); c.lineTo(Math.cos(a) * RI, Math.sin(a) * RI); c.stroke();
    }
    if (config.numeros) {
      c.font = 'bold 34px Georgia, serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
      for (let i = 0; i < n; i++) {
        c.save(); c.rotate((i + 0.5) * seg); c.translate(0, -RI * 0.64);
        c.fillStyle = 'rgba(0,0,0,0.55)'; c.fillText(i + 1, 1.5, 2.5);
        c.fillStyle = '#e8d3ad'; c.fillText(i + 1, 0, 0);
        c.restore();
      }
    }
    if (ganador >= 0 && !girando) {      // sector ganador resaltado
      const a0 = -Math.PI / 2 + ganador * seg;
      c.save(); c.shadowColor = '#f3cf86'; c.shadowBlur = 14; c.lineWidth = 4; c.strokeStyle = '#f3cf86';
      c.beginPath(); c.moveTo(Math.cos(a0 + 0.02) * 44, Math.sin(a0 + 0.02) * 44); c.arc(0, 0, RI - 3, a0 + 0.02, a0 + seg - 0.02); c.lineTo(Math.cos(a0 + seg - 0.02) * 44, Math.sin(a0 + seg - 0.02) * 44);
      c.stroke(); c.restore();
    }
    c.beginPath(); c.arc(0, 0, R, 0, TAU); c.arc(0, 0, RI, 0, TAU, true); c.closePath();   // aro de bronce
    const aro = c.createRadialGradient(0, 0, RI, 0, 0, R);
    aro.addColorStop(0, '#5e3e22'); aro.addColorStop(0.45, '#b58751'); aro.addColorStop(1, '#4a2f19');
    c.fillStyle = aro; c.fill();
    c.lineWidth = 1.5; c.strokeStyle = 'rgba(255,220,160,0.35)'; c.beginPath(); c.arc(0, 0, R - 1, 0, TAU); c.stroke();
    c.strokeStyle = 'rgba(0,0,0,0.5)'; c.beginPath(); c.arc(0, 0, RI, 0, TAU); c.stroke();
    for (let k = 0; k < 15; k++) { const a = (k / 15) * TAU; remache(Math.cos(a) * (R + RI) / 2, Math.sin(a) * (R + RI) / 2, 5.5); }
    const eje = c.createRadialGradient(0, 0, 18, 0, 0, 44);                                // eje central
    eje.addColorStop(0, '#6d4726'); eje.addColorStop(1, '#2e1c0e');
    c.beginPath(); c.arc(0, 0, 44, 0, TAU); c.fillStyle = eje; c.fill();
    c.lineWidth = 2; c.strokeStyle = '#b58751'; c.stroke();
    for (let k = 0; k < 8; k++) { const a = (k / 8) * TAU; remache(Math.cos(a) * 35, Math.sin(a) * 35, 3.3); }
    const cupula = c.createRadialGradient(-9, -10, 2, 0, 0, 28);
    cupula.addColorStop(0, '#f1d3a0'); cupula.addColorStop(0.35, '#a9773f'); cupula.addColorStop(1, '#4e2f17');
    c.beginPath(); c.arc(0, 0, 27, 0, TAU); c.fillStyle = cupula; c.fill();
    c.restore();

    /* puntero fijo, con un pequeño temblor al pasar cada borde */
    c.save(); c.translate(CX, CY - R + 10); c.rotate(desvio || 0);
    c.shadowColor = 'rgba(0,0,0,0.6)'; c.shadowBlur = 8; c.shadowOffsetY = 3;
    c.beginPath(); c.moveTo(-30, -56); c.lineTo(30, -56); c.lineTo(0, 0); c.closePath();
    const rojo = c.createLinearGradient(0, -56, 0, 0); rojo.addColorStop(0, '#b3151c'); rojo.addColorStop(1, '#7d0c11');
    c.fillStyle = rojo; c.fill(); c.shadowColor = 'transparent';
    c.lineWidth = 3; c.lineJoin = 'round'; c.strokeStyle = '#d1a45a'; c.stroke();
    c.restore();
  }

  /* ángulo final para que el sector `i` quede bajo el puntero (arriba); u = posición dentro del sector (0 a 1) */
  function calcularFin(inicio, i, u, vueltas) {
    const objetivo = (((-(i + u) * seg) % TAU) + TAU) % TAU;
    return inicio - (((inicio % TAU) + TAU) % TAU) + TAU * vueltas + objetivo;
  }

  function elegir() {
    const pesos = opciones.map(o => (o.peso === undefined ? 1 : o.peso));
    let r = Math.random() * pesos.reduce((a, b) => a + b, 0);
    for (let i = 0; i < n; i++) { r -= pesos[i]; if (r < 0) return i; }
    return n - 1;
  }

  function aplicar(i) {   // lo que pasa al caer en la opción i
    const o = opciones[i];
    ganador = i; girando = false; giro = null;
    textoResultado.textContent = o.texto;
    botonGirar.disabled = false; botonGirar.textContent = config.repetible ? 'Girar otra vez' : 'Girar';
    if (!config.repetible) botonGirar.hidden = true;
    dibujar(0);
    UI.log(`La ruleta se detiene en el <b>${i + 1}</b>: ${o.texto}`);
    if (o.laura && actual) UI.dialogo(formato(actual, o.laura));
    if (typeof o.accion === 'function') { try { o.accion(Juego.estado); } catch (e) { console.warn('Ruleta: error en la acción', e); } }
  }

  function girar() {
    if (girando) return;
    const reducido = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    const i = elegir();
    const fin = calcularFin(angulo, i, 0.2 + Math.random() * 0.6, config.vueltas);
    giro = { i, inicio: angulo, fin, t0: 0, dur: reducido ? 900 : config.duracion };
    girando = true; ganador = -1; textoResultado.textContent = ''; botonGirar.disabled = true;
    const paso = ahora => {
      if (!giro) return;
      if (!giro.t0) giro.t0 = ahora;
      const t = Math.min(1, (ahora - giro.t0) / giro.dur), e = 1 - Math.pow(1 - t, 4);
      const nuevo = giro.inicio + (giro.fin - giro.inicio) * e, vel = Math.abs(nuevo - angulo);
      angulo = nuevo;
      const fase = ((((-angulo) % seg) + seg) % seg) / seg, d = Math.min(fase, 1 - fase);
      dibujar(-(1 - Math.min(1, d * 8)) * Math.min(0.34, vel * 5));
      if (t < 1) raf = requestAnimationFrame(paso); else aplicar(giro.i);
    };
    raf = requestAnimationFrame(paso);
  }

  function cerrar() {
    if (!fondo || fondo.hidden) return;
    cancelAnimationFrame(raf);
    if (giro) { angulo = giro.fin; aplicar(giro.i); }   // si se cierra a medias, el resultado cuenta igual
    fondo.hidden = true;
    const entrada = document.getElementById('command-input');
    if (entrada) entrada.focus();
  }

  function crearDOM() {
    if (fondo) return;
    const css = document.createElement('style');
    css.textContent = `
      .rl-fondo { position: fixed; inset: 0; z-index: 70; display: flex; align-items: center; justify-content: center; padding: 12px; overflow-y: auto;
        background: radial-gradient(ellipse at center, #28190f 0%, #050505 72%); }
      .rl-fondo[hidden] { display: none; }
      .rl-caja { display: flex; flex-direction: column; align-items: center; gap: 12px; }
      .rl-lienzo { width: min(92vw, calc(58vh * 0.92), 440px); height: auto; aspect-ratio: 460 / 500; filter: drop-shadow(0 14px 22px rgba(0,0,0,.65)); }
      .rl-resultado { min-height: 3em; max-width: 34ch; margin: 0; text-align: center; font-size: 15px; line-height: 1.5; color: #e7d9c4; }
      .rl-botones { display: flex; gap: 10px; }
      .rl-boton { font: inherit; font-weight: 700; font-size: 14px; padding: 10px 22px; border-radius: 10px; cursor: pointer; border: 1px solid transparent; }
      .rl-boton:focus-visible { outline: 2px solid #e8d3ad; outline-offset: 2px; }
      .rl-boton:disabled { opacity: .5; cursor: default; }
      .rl-girar { background: #870000; color: #e5e5e5; border-color: rgba(200,0,0,.5); }
      .rl-girar:hover:not(:disabled) { background: #c80000; }
      .rl-cerrar { background: #272f3c; color: #cbd5e1; }
      .rl-cerrar:hover { background: #343e4f; }`;
    document.head.appendChild(css);
    fondo = document.createElement('div');
    fondo.className = 'rl-fondo'; fondo.hidden = true;
    fondo.innerHTML = `<div class="rl-caja" role="dialog" aria-label="Ruleta">
      <canvas class="rl-lienzo" width="${W}" height="${H}"></canvas>
      <p class="rl-resultado" aria-live="polite"></p>
      <div class="rl-botones"><button type="button" class="rl-boton rl-girar">Girar</button><button type="button" class="rl-boton rl-cerrar">Cerrar</button></div></div>`;
    document.body.appendChild(fondo);
    lienzo = fondo.querySelector('canvas'); c = lienzo.getContext('2d');
    textoResultado = fondo.querySelector('.rl-resultado'); botonGirar = fondo.querySelector('.rl-girar');
    botonGirar.addEventListener('click', girar);
    fondo.querySelector('.rl-cerrar').addEventListener('click', cerrar);
    document.addEventListener('keydown', ev => { if (ev.key === 'Escape') cerrar(); });
    cuero = crearCuero();
  }

  function abrir(p) {
    crearDOM();
    actual = p || actual;
    ganador = -1; textoResultado.textContent = ''; botonGirar.hidden = false; botonGirar.disabled = false;
    botonGirar.textContent = jugada ? 'Girar otra vez' : 'Girar';
    fondo.hidden = false;
    dibujar(0);
    botonGirar.focus();
    jugada = true;
  }

  /* Mensajes de Laura con su etiqueta y color, igual que en personajes.js */
  function formato(p, texto) {
    let cuerpo = (p.etiqueta ? '<b>' + p.nombre + ':</b> ' : '') + texto;
    if (p.color) cuerpo = `<span style="color:${p.color}">${cuerpo}</span>`;
    return cuerpo;
  }

  /* Devuelve true si el mensaje activa la ruleta (Laura contesta y se abre la ruleta). */
  function probar(p, mensaje) {
    if (p.id !== config.personaje) return false;
    if (!config.repetible && jugada) return false;
    const msg = ' ' + norm(mensaje).replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim() + ' ';
    const coincide = config.palabras.some(k => { k = norm(k); return k.endsWith('*') ? msg.includes(' ' + k.slice(0, -1)) : msg.includes(' ' + k + ' '); });
    if (!coincide) return false;
    UI.dialogo(formato(p, config.intro[turnoIntro++ % config.intro.length]));
    UI.despues(() => abrir(p));
    return true;
  }

  return { probar, abrir, config, opciones, _calcularFin: calcularFin, _seg: seg };
})();
