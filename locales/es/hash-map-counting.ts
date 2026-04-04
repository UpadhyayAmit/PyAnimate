import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Dada una lista de enteros, encuentra todos los elementos que aparecen más de n/3 veces.',
  hint: 'Usa un diccionario de frecuencias primero. Luego filtra las claves donde count > len(arr)//3.',
  explanation: {
    simple: {
      overview: 'Usa un diccionario (hash map) para contar frecuencias de elementos y resolver problemas de búsqueda en O(1).',
      analogy: 'Como un índice de libro: en lugar de escanear todas las páginas, el índice te dice directamente dónde está cada palabra.',
      steps: [
        'Crea un diccionario vacío',
        'Para cada elemento, actualiza su conteo',
        'Usa el diccionario para buscar en O(1)',
        'Analiza las frecuencias para responder preguntas',
      ],
      visual: `["a","b","a","c","b","a"]
→ {"a":3, "b":2, "c":1}
busca "a" → O(1)`,
      commonMistakes: [
        'No manejar colisiones de hash (Python lo hace internamente)',
        'Olvidar que los dicts de Python mantienen orden de inserción desde Python 3.7',
      ],
      practice: [
        'Comprueba si dos cadenas son anagramas',
        'Encuentra el primer carácter no repetido',
      ],
      timeComplexity: 'O(n) construcción, O(1) búsqueda',
      spaceComplexity: 'O(k) — k elementos únicos'
    },
    deepDive: {
      overview: 'Los dicts de Python usan direccionamiento abierto con exploración aleatoria; las cargas se redimensionan a 2/3 de carga.',
      steps: [
        'Resolución de colisiones: direccionamiento abierto (no encadenamiento)',
        'hash(x) para enteros es x mismo (para enteros pequeños)',
        'El factor de carga 2/3 desencadena la redimensión',
        'frozenset/tupla como clave (hashable); las listas no son hashables',
      ],
      commonMistakes: [
        'Usar lista como clave de dict → TypeError',
        'Asumir que el orden de los dicts es arbitrario (ya no desde Python 3.7)',
      ],
      practice: [
        'Implementa LRU cache con OrderedDict',
        'Usa defaultdict para agrupar anagramas',
      ],
    },
  },
};

export default overlay;
