import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Merge Sort',
  hint: 'Divide, ordena recursivamente y fusiona — siempre O(n log n).',
  approach: 'Divide el array recursivamente por la mitad hasta elementos individuales, luego fusiona las mitades ordenadas.',
  useCases: [
    'Grandes datasets en disco (ordenación externa)',
    'Ordenar listas enlazadas',
    'Donde se necesita orden estable',
  ],
  explanation: {
    simple: {
      overview: 'La ordenación por mezcla divide la lista a la mitad, ordena cada mitad recursivamente y luego las mezcla.',
      analogy: 'Como organizar un escritorio desordenado: divide en dos pilas, ordena cada una y luego mezcla cuidadosamente las dos pilas ordenadas.',
      steps: [
        'Caso base: lista de tamaño ≤ 1 ya está ordenada',
        'Divide la lista a la mitad',
        'Ordena recursivamente cada mitad',
        'Mezcla las dos mitades ordenadas con dos punteros',
      ],
      visual: '[8,3,5,1] → [8,3][5,1] → [3,8][1,5] → [1,3,5,8]',
      commonMistakes: [
        'Olvidar el caso base de la recursión',
        'Lógica de mezcla incorrecta al combinar dos mitades',
      ],
      practice: [
        'Implementa merge sort de abajo a arriba de forma iterativa',
        'Cuenta inversiones durante la mezcla',
      ],
      timeComplexity: 'O(n log n) — siempre, peor/promedio/mejor caso',
      spaceComplexity: 'O(n) — necesita espacio auxiliar'
    },
    deepDive: {
      overview: 'Merge sort es estable, naturalmente paralelizable y forma la base de Timsort. La variante externa es estándar para archivos grandes.',
      steps: [
        'Estable: elementos iguales mantienen su orden relativo',
        'Bottom-up: evita la sobrecarga de recursión',
        'Paralelización: los subarreglos independientes pueden ordenarse en paralelo',
        'K-way merge con min-heap: O(n log k) para k iterables',
      ],
      commonMistakes: [
        'Usar merge sort cuando O(1) espacio es requerido — usa heap/quick',
        'Olvidar pasar el arreglo auxiliar en implementaciones in-place',
      ],
      practice: [
        'Implementa merge sort iterativo (bottom-up)',
        'Implementa k-way merge con heapq',
      ],
    },
  },
};

export default overlay;
