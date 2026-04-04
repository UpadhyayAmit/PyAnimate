import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Crea variables para tu edad (int), altura (float) y nombre (str).',
  hint: 'Usa type() para inspeccionar el tipo de variable. Los f-strings hacen la impresión más limpia.',
  explanation: {
    simple: {
      overview: 'Las variables son contenedores que almacenan datos. Python tiene tipos como int, float, str y bool.',
      analogy: 'Una variable es como una caja etiquetada: la etiqueta es el nombre, el contenido es el valor.',
      steps: [
        'Elige un nombre descriptivo',
        'Usa = para asignar un valor',
        'Python detecta el tipo automáticamente',
        'Puedes reasignar con un tipo diferente',
      ],
      visual: `edad = 25      # int
altura = 1.75  # float
nombre = "Ana" # str
activo = True  # bool`,
      commonMistakes: [
        'Usar nombres de variables con espacios',
        'Confundir = (asignación) con == (comparación)',
        'Olvidar que las cadenas necesitan comillas',
      ],
      practice: [
        'Crea variables para tu nombre, edad y altura',
        'Comprueba el tipo con type()',
      ],
    },
    deepDive: {
      overview: 'Python usa tipado dinámico: las variables son referencias a objetos. Cada objeto tiene tipo, identidad y valor.',
      steps: [
        'id() devuelve la dirección de memoria del objeto',
        'type() devuelve la clase del objeto',
        'Los enteros pequeños (-5 a 256) se almacenan en caché',
        'isinstance() verifica la herencia de tipo',
      ],
      commonMistakes: [
        'Asumir que las variables tienen tipo fijo',
        'Confundir is (identidad) con == (igualdad de valor)',
      ],
      practice: [
        'Verifica id() en enteros cacheados vs grandes',
        'Explora el tipado dinámico reasignando tipos',
      ],
    },
  },
};

export default overlay;
