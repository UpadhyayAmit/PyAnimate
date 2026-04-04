import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Fusiona [1,3,5,7] y [2,4,6,8] en un array ordenado sin usar sort().',
  hint: 'Usa dos punteros (i, j). Compara arr1[i] con arr2[j], añade el menor, avanza ese puntero.',
  explanation: {
    simple: {
      overview: 'Mezcla dos listas ya ordenadas en una sola lista ordenada usando el método de dos punteros.',
      analogy: 'Como mezclar dos mazos de cartas ya ordenados: compara las cartas superiores y pon la menor en el nuevo mazo.',
      steps: [
        'Usa dos punteros, uno por lista',
        'Compara los elementos apuntados',
        'Añade el menor a la lista de resultado',
        'Avanza ese puntero',
        'Añade los elementos restantes de la lista no vacía',
      ],
      visual: `[1,3,5] + [2,4,6]
→ compara 1 vs 2 → toma 1
→ compara 3 vs 2 → toma 2
→ ... → [1,2,3,4,5,6]`,
      commonMistakes: [
        'Olvidar añadir los elementos restantes después de que una lista se agota',
        'Confundir los índices de los punteros',
      ],
      practice: [
        'Mezcla k listas ordenadas con heapq',
        'Implementa mezcla en sitio en O(1) espacio (difícil)',
      ],
      timeComplexity: 'O(n+m) — procesa cada elemento exactamente una vez',
      spaceComplexity: 'O(n+m) — para la lista de salida'
    },
    deepDive: {
      overview: 'La mezcla de dos punteros es la subrutina clave de merge sort; la mezcla k-way usa un min-heap para O(n log k).',
      steps: [
        'La mezcla en sitio es O(n) tiempo pero compleja de implementar correctamente',
        'heapq.merge() genera una mezcla k-way perezosa',
        'Mezcla externa: divide el archivo en runs, mezcla en pasadas — estándar para bases de datos',
        'La mezcla estable preserva el orden de elementos iguales de ambas listas',
      ],
      commonMistakes: [
        'Asumir que heapq.merge() materializa la lista — es un generador',
        'Olvidar manejar listas de longitud desigual',
      ],
      practice: [
        'Implementa k-way merge con heapq.heappush/heappop',
        'Usa heapq.merge() y compara con implementación manual',
      ],
    },
  },
};

export default overlay;
