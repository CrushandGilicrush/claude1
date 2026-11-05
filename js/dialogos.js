/* Conversación con el desconocido por Telegram.
   Se busca la primera regla (de arriba abajo) cuyas palabras aparezcan en el mensaje del jugador.
   - Ignora mayúsculas, acentos y signos. Escribe las palabras clave sin acentos.
   - Una palabra clave puede ser una frase («quien eres») o terminar en * para cubrir variantes («polic*»).
   - Si una regla tiene varias respuestas, se van alternando en orden. */
const Dialogos = {
  sinTexto: 'Escribe lo que quieras decirle, por ejemplo: «escribir hola».',
  porDefecto: ['«No te he preguntado eso.»', '«Céntrate. Sigue mis instrucciones.»', '«No tengo todo el día.»'],
  reglas: [
    { palabras: ['polic*', 'denunc*', 'guardia civil', '112'],
      respuestas: ['«Puedes llamar a quien quieras. Piensa bien qué pasará después.»', '«Llama, si te atreves.»'] },
    { palabras: ['foto', 'fotos', 'imagenes', 'pruebas'],
      respuestas: ['«Las que tú ya sabes. No me obligues a enseñarlas.»', '«Las tengo todas, y bien guardadas.»'] },
    { palabras: ['hola', 'buenas', 'buenos dias', 'buenas tardes'],
      respuestas: ['«No estoy aquí para charlar.»', '«Ya nos hemos saludado. Al grano.»'] },
    { palabras: ['quien eres', 'quien es', 'como te llamas'],
      respuestas: ['«Eso no importa. Lo que importa es lo que tengo.»', '«Alguien que sabe más de ti de lo que imaginas.»'] },
    { palabras: ['por que', 'porque', 'para que'],
      respuestas: ['«Porque puedo.»', '«Las preguntas las hago yo.»'] },
    { palabras: ['dinero', 'pagar', 'pago', 'cuanto'],
      respuestas: ['«No hablemos de dinero. Todavía.»', '«Primero, lo que te pido. Después ya veremos.»'] },
    { palabras: ['por favor', 'te lo ruego', 'suplico', 'te lo pido'],
      respuestas: ['«Los ruegos no me interesan.»', '«Ahórrate las súplicas.»'] },
    { palabras: ['miedo', 'asustada', 'dejame*', 'no puedo'],
      respuestas: ['«Esa es la idea.»', '«Deberías tener miedo. Pero sobre todo, deberías obedecer.»'] },
    { palabras: ['idiota', 'imbecil', 'miserable', 'canalla'],
      respuestas: ['«Insulta lo que quieras. No cambia nada.»'] },
    { palabras: ['vale', 'de acuerdo', 'esta bien', 'que quieres', 'que quieres que haga'],
      respuestas: ['«Paciencia. Haz lo que te he pedido.»', '«Sigue las instrucciones.»'] }
  ]
};
