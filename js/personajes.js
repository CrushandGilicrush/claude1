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
    }
  ];
     const lista = [
    {
      id: 'laura',                              // identificador interno (único, sin espacios)
      nombre: 'Stephen Hawking',                          // nombre con el que se le escribe
      alias: ['Hawk'],                           // otras formas de nombrarla (opcional)
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
