/* Capa de interfaz: terminal, visor, inventario y contador. */
const UI = (() => {
  const $ = id => document.getElementById(id);

  /* tipo: 'narrativo' (naranja), 'dialogo' (azul frío), 'usuario', 'final' */
  function log(texto, tipo = 'narrativo') {
    const t = $('terminal'), e = document.createElement('div');
    e.className = 'mb-2 leading-relaxed txt-' + tipo;
    if (tipo === 'usuario') e.textContent = '> ' + texto;
    else e.innerHTML = tipo === 'dialogo' ? '<b>Desconocido:</b> ' + texto : texto;
    t.appendChild(e);
    t.scrollTop = t.scrollHeight;
  }

  function logImagen(src) {
    const t = $('terminal'), e = document.createElement('div');
    e.className = 'mb-2';
    e.innerHTML = `<img src="${src}" alt="Imagen" class="max-h-72 rounded border border-retro-border">`;
    e.firstChild.onload = () => { t.scrollTop = t.scrollHeight; };
    t.appendChild(e);
    t.scrollTop = t.scrollHeight;
  }

  /* Pantalla de lectura a pantalla completa (se cierra con el botón o con Esc). */
  function lectura(titulo, texto) {
    $('lectura-titulo').textContent = titulo;
    const cont = $('lectura-texto');
    cont.innerHTML = '';
    texto.trim().split(/\n\s*\n/).forEach(p => { const e = document.createElement('p'); e.textContent = p.trim(); cont.appendChild(e); });
    cont.scrollTop = 0;
    $('lectura').classList.remove('hidden');
  }
  function cerrarLectura() { $('lectura').classList.add('hidden'); $('command-input').focus(); }

  function vista(titulo, imagen, bloqueado = false, grande = false) {
    $('visor').classList.toggle('visor-grande', grande);
    $('room-title').innerText = titulo;
    $('room-bg').style.backgroundImage = `url('${imagen}')`;
    $('room-bg').classList.toggle('bg-contain', imagen !== Datos.imagenSala);
    $('room-bg').classList.toggle('bg-no-repeat', imagen !== Datos.imagenSala);
    $('bloqueo').classList.toggle('hidden', !bloqueado);
  }

  function contador(n) { $('contador-subm').innerText = n; }

  function inventario(items) {
    $('inventory-count').innerText = items.length + ' objetos';
    $('inventory-list').innerHTML = items.length
      ? items.map(i => `<div class="text-xs text-retro-amber px-2 py-0.5 border border-retro-border rounded">${i}</div>`).join('')
      : '<div class="text-xs text-retro-dim italic">Inventario vacío</div>';
  }

  function bloquearEntrada() { $('command-input').disabled = true; $('btn-ejecutar').disabled = true; }

  return { lectura, cerrarLectura, log, logImagen, vista, contador, inventario, bloquearEntrada, $ };
})();
