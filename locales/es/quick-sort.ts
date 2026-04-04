import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Quick Sort',
  hint: 'Elige un pivote, particiona el array y ordena recursivamente.',
  approach: 'Elige un pivote, particiona los menores a la izquierda, mayores a la derecha, luego ordena recursivamente ambas mitades.',
  useCases: [
    'Ordenación rápida in-place de propósito general',
    'Mejor en aplicaciones prácticas por caché-friendly',
    'Grandes datasets aleatorios',
  ],
  explanation: {
    simple: {
      overview: 'El quicksort elige un pivote, coloca los elementos más pequeños a su izquierda, los más grandes a su derecha, y recurse en ambas partes.',
      analogy: 'Como organizar personas en una fila: elige a alguien como pivote, todos más bajos van a la izquierda, todos más altos a la derecha, repite.',
      steps: [
        'Elige un pivote (primer, último o aleatorio)',
        'Particiona: elementos < pivote van a la izquierda',
        'Recurse en la partición izquierda y derecha',
        'La lista está ordenada cuando las particiones tienen tamaño ≤ 1',
      ],
      visual: `[3,6,8,10,1,2,1] pivote=3
→ [1,2,1] 3 [6,8,10]
→ ordena ambas partes`,
      commonMistakes: [
        'Siempre elegir el primer/último elemento como pivote → O(n²) en datos ordenados',
        'No manejar duplicados — puede llevar a O(n²)',
      ],
      practice: [
        'Implementa partición de Lomuto y Hoare',
        'Usa pivote aleatorio para evitar el peor caso',
      ],
      timeComplexity: 'O(n log n) promedio, O(n²) peor caso',
      spaceComplexity: 'O(log n) pila de recursión promedio'
    },
    deepDive: {
      overview: 'Introsort (usado en std::sort) combina quicksort + heapsort para garantizar O(n log n); 3-way partition maneja duplicados.',
      steps: [
        'La partición de Hoare hace ~3x menos swaps que Lomuto',
        '3-way (Dijkstra Dutch Flag): < pivot | == pivot | > pivot, O(n) con todos iguales',
        'Quickselect: O(n) promedio para k-ésimo elemento',
        'Introsort: cambia a heapsort cuando la profundidad > 2 log n',
      ],
      commonMistakes: [
        'No saber que Python usa Timsort, no quicksort, en list.sort()',
        'Confundir la partición de Lomuto (simple) con la de Hoare (eficiente)',
      ],
      practice: [
        'Implementa quickselect para el k-ésimo elemento',
        'Implementa 3-way partition para datos con muchos duplicados',
      ],
    },
  },
};

export default overlay;
