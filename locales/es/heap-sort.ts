import type { LessonLocaleOverlay } from '../types';

const heapSort: LessonLocaleOverlay = {
  explanation: {
    simple: {
      overview: 'Heap Sort construye un max-heap y en cada paso mueve el mayor al final.',
      analogy: 'Como una cola de prioridad: siempre sale primero el valor mas grande.',
      steps: [
        'Convertir el arreglo a max-heap (heapify).',
        'Intercambiar la raiz con el ultimo elemento no ordenado.',
        'Reducir heap_size en 1.',
        'Aplicar sift-down desde la raiz.',
        'Repetir hasta heap_size = 1.',
      ],
      visual: '[heap | sorted tail]: la parte ordenada crece a la derecha.',
      commonMistakes: [
        'Confundir formulas de hijos en base 0 vs base 1.',
        'No reducir heap_size tras cada extraccion.',
        'Usar sift-up cuando toca sift-down.',
      ],
      practice: [
        'Haz heapify de [4,10,3,5,1] paso a paso.',
        'Explica por que Heap Sort no es estable.',
        'Adapta a min-heap para ordenar descendente.',
      ],
      timeComplexity: 'O(n log n)',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'Heap Sort garantiza O(n log n) en el peor caso con memoria auxiliar constante.',
      analogy: 'Arbol binario completo donde cada reparacion sigue una ruta raiz-hoja.',
      steps: [
        'Build-heap en O(n) con metodo bottom-up.',
        'Para end de n-1 a 1: swap root/end.',
        'heap_size-- y luego sift-down en root.',
        'Invariante: prefijo es heap, sufijo esta ordenado.',
        'Termina cuando heap_size == 1.',
      ],
      visual: 'El heap se encoge mientras la cola ordenada crece.',
      commonMistakes: [
        'Comparar con el hijo incorrecto en sift-down.',
        'Romper la invariante del heap tras un swap.',
        'Recalculos innecesarios que empeoran constantes.',
      ],
      practice: [
        'Deriva por que build-heap es O(n).',
        'Compara swaps contra Quick Sort.',
        'Implementa una version iterativa sin recursion.',
      ],
      timeComplexity: 'Theta(n log n)',
      spaceComplexity: 'Theta(1)',
    },
  },
};

export default heapSort;
