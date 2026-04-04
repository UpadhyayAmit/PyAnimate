import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Usa dos punteros en el array ordenado [1,3,6,8,10] para encontrar pares que sumen 11.',
  hint: 'Comienza con left=0, right=len-1. Si suma < objetivo mueve left derecha; si > mueve right izquierda.',
  explanation: {
    simple: {
      overview: 'Dos punteros que se mueven desde extremos opuestos (o a diferentes velocidades) para resolver problemas de arreglos en O(n).',
      analogy: 'Como dos personas buscando un libro específico — una empieza por el principio de la estantería, la otra por el final, y se van acercando.',
      steps: [
        'Coloca L en el inicio, R en el final',
        'Mueve L hacia adelante o R hacia atrás según la condición',
        'Procesa el par (L, R) cuando cumplen el criterio',
        'Para cuando L >= R (o la condición de parada)',
      ],
      visual: `[1,2,3,4,5], objetivo=6
L=0,R=4: 1+5=6 ✓ → par encontrado
L=1,R=3: 2+4=6 ✓ → otro par`,
      commonMistakes: [
        'Aplicar dos punteros a arreglos no ordenados donde se requiere orden',
        'No manejar duplicados correctamente para contar todos los pares',
      ],
      practice: [
        'Encuentra todos los pares que suman a un objetivo',
        'Problema del contenedor de más agua (LeetCode 11)',
      ],
      timeComplexity: 'O(n) después de ordenar O(n log n)',
      spaceComplexity: 'O(1) — sin espacio extra'
    },
    deepDive: {
      overview: 'Las variantes incluyen punteros rápido/lento (ciclos), ventana deslizante, y la bandera holandesa de 3 particiones.',
      steps: [
        'Fast/Slow: detecta ciclos en listas enlazadas en O(n) O(1) espacio',
        'Partición de 3-way Dutch Flag: 3 punteros para < = >',
        'Ventana deslizante: puntero L+R para subarreglos contiguos',
        'Suma de k-way: reduce con ordenación + dos punteros',
      ],
      commonMistakes: [
        'Avanzar ambos punteros en lugar de solo el apropiado',
        'No saber cuándo usar dos punteros vs ventana deslizante',
      ],
      practice: [
        'Detecta ciclo en lista enlazada con puntero lento/rápido',
        'Resuelve 3SUM en O(n²) con ordenación + dos punteros',
      ],
    },
  },
};

export default overlay;
