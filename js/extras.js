/* Extras: atajos de prueba y pequeñas coherencias de la escena del radiador.
   Lo de arriba (atajos y textos) se edita a mano; la lógica está debajo y no hace falta tocarla. */
const Extras = (() => {
  /* ===== ATAJOS ===== Se escriben en la terminal como un comando más (sin importar mayúsculas).
     `accion` recibe el estado del juego (Juego.estado). Se pueden añadir más códigos. */
  const atajos = {
    T1234: {
      texto: 'Atajo activado. Telegram está abierto y puedes hablar con el desconocido.',
      accion: est => {
        est.cafeHecho = true; est.cafeTomado = true;          // café ya tomado
        est.mensajeLeido = true; est.cuadroVisto = true;      // mensaje de Life leído y cuadro visto
        est.desbloqueado = true; est.esperandoCodigo = false; // Telegram desbloqueado
        est.dispositivo = 'movil'; est.app = 'telegram';      // móvil encendido con Telegram abierto
        UI.vista('Móvil · Telegram', Datos.imagenes.telegram);
      }
    }
  };

  /* ===== TEXTOS ===== (si existe la misma clave en Datos.textos, manda la de data.js) */
  const textos = {
    radiadorCaliente: 'El radiador está muy caliente. Notas su calor a un palmo de distancia.',
    traseroSinDesnudar: 'Antes tendrías que desnudarte.',
    traseroFrio: 'Apoyas el trasero en el radiador. Está templado, nada más.',
    traseroApoya: 'Apoyas el trasero sobre el radiador y aguantas un minuto entero. Cuando te levantas, la piel está roja.',
    traseroYa: 'Ya lo has hecho. No hace falta insistir.'
  };

  /* ===== Lógica ===== */
  const t = clave => (Datos.textos && Datos.textos[clave]) || textos[clave];
  const caliente = () => typeof Ordenes.radiadorCaliente === 'function' && Ordenes.radiadorCaliente();
  let traseroHecho = false;

  function apoyarTrasero(est) {
    if (est.estancia !== 'salon') return UI.log('No ves ningún radiador por aquí.');
    if (!est.desnuda) return UI.log(t('traseroSinDesnudar'));   // «desnudarse» es previo a esta acción
    if (!caliente()) return UI.log(t('traseroFrio'));
    if (traseroHecho) return UI.log(t('traseroYa'));
    traseroHecho = true;
    UI.log(t('traseroApoya'));
  }

  /* Devuelve true si el comando era un atajo o una de estas acciones (y ya lo ha gestionado). */
  function comando(cmd) {
    const est = Juego.estado;
    const codigo = Object.keys(atajos).find(c => Juego.norm(c) === cmd);
    if (codigo) { atajos[codigo].accion(est); UI.log(atajos[codigo].texto); return true; }
    if (est.esperandoCodigo) return false;
    const [verbo, ...resto] = cmd.split(' ');
    const arg = resto.join(' ');
    if (!/radiador/.test(arg)) return false;
    if (['examinar', 'ver', 'mirar'].includes(verbo) && est.estancia === 'salon' && caliente()) { UI.log(t('radiadorCaliente')); return true; }
    const trasero = /culo|trasero|nalga|pompis|gluteo/.test(arg);
    if (['apoyar', 'poner', 'colocar', 'pegar', 'sentar', 'sentarse'].includes(verbo) && (trasero || verbo.startsWith('sentar'))) { apoyarTrasero(est); return true; }
    return false;
  }

  return { comando };
})();
