import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Insertion Sort',
  hint: 'Inserta cada elemento en su posición correcta dentro de la parte ordenada.',
  approach: 'Inserta cada elemento en su posición correcta desplazando los demás hacia la derecha.',
  useCases: [
    'Muy eficiente con datos casi ordenados',
    'Ordenar datos en tiempo real que llegan uno a uno',
    'Simple y rápido para arrays pequeños',
  ],
  explanation: {
    simple: {
      overview: 'La ordenación por inserción construye una porción ordenada insertando cada elemento nuevo en su posición correcta, como se ordenan cartas en la mano.',
      analogy: 'Como ordenar cartas: tomas una carta nueva y la deslizas a la izquierda hasta que encuentre su lugar correcto.',
      steps: [
        'Comienza con el segundo elemento (índice 1)',
        'Compáralo con los elementos anteriores y muévelos a la derecha si son mayores',
        'Inserta el elemento actual en la posición correcta',
        'Repite hasta que toda la lista esté ordenada',
      ],
      visual: '[5,3,1,4] → [3,5,1,4] → [1,3,5,4] → [1,3,4,5]',
      commonMistakes: [
        'Olvidar guardar el elemento actual antes de mover elementos',
        'Condición de límite incorrecta en el bucle interno',
      ],
      practice: [
        'Ordena una lista pequeña a mano paso a paso',
        'Implementa e identifica cuándo la inserción supera a quicksort',
      ],
      timeComplexity: 'O(n²) peor caso, O(n) mejor caso (ya ordenado)',
      spaceComplexity: 'O(1) — ordenación en sitio'
    },
    deepDive: {
      overview: 'La inserción es estable, adaptativa y usa O(1) espacio. Timsort la usa para runs pequeños (tamaño < 64).',
      steps: [
        'Adaptativa: O(n+d) donde d = número de inversiones',
        'Usa búsqueda binaria para encontrar posición: O(n log n) comparaciones pero O(n²) swaps',
        'Timsort ejecuta inserción en runs de tamaño ≤ 64',
        'Ideal para listas casi ordenadas o muy pequeñas',
      ],
      commonMistakes: [
        'Asumir que la inserción siempre es lenta — es rápida para n pequeño o datos casi ordenados',
        'Confundir el número de comparaciones con el número de swaps',
      ],
      practice: [
        'Implementa inserción con búsqueda binaria para las comparaciones',
        'Perfila insertion sort vs quicksort para tamaños n=10, 100, 1000',
      ],
    },
  },
};

export default overlay;
