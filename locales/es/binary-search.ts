import type { LessonLocaleOverlay } from '../types';

const binarySearch: LessonLocaleOverlay = {
  explanation: {
    simple: {
      overview: 'La búsqueda binaria parte en dos un arreglo ordenado hasta hallar el objetivo o agotar el rango.',
      analogy: 'Como buscar una palabra en un diccionario: abre por la mitad, decide izquierda o derecha, repite.',
      steps: [
        'low = 0, high = n-1.',
        'mid = (low + high) // 2.',
        'Si arr[mid] == target → devuelve mid.',
        'Si target < arr[mid] → high = mid - 1.',
        'Si no, low = mid + 1 mientras low <= high.',
      ],
      visual: '[1 3 5 7 9] → probar 5 → ir a la derecha → probar 7 → encontrado en índice 3.',
      commonMistakes: [
        'No recalcular mid tras cambiar low/high.',
        'Usar < en el while y saltar el último elemento.',
        'mid = (low+high) puede desbordar; usar low + (high-low)//2.',
      ],
      practice: [
        'Traza en un arreglo de 7 elementos con objetivo en extremos y ausente.',
        'Devuelve índice de inserción si no se encuentra.',
        'Explica por qué debe estar ordenado; muestra un contraejemplo.',
      ],
      timeComplexity: 'O(log n)',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'La búsqueda binaria trabaja sobre un predicado monótono; cada comparación descarta la mitad.',
      analogy: 'Árbol de decisión de altura log₂ n: cada nodo divide el intervalo.',
      steps: [
        'Mantén límites inclusivos [low, high].',
        'mid = low + ((high - low) >> 1) para evitar overflow.',
        'El predicado decide qué mitad conservar; la invariante mantiene la meta dentro si existe.',
        'Termina cuando low > high; el punto de inserción es low.',
        'Maneja duplicados con lower_bound / upper_bound.',
      ],
      visual: 'Intervalos halving: [0,n-1] → [0,mid-1] o [mid+1,n-1].',
      commonMistakes: [
        'Actualizar low = mid o high = mid (bucle infinito con 2 elementos).',
        'Usarla en datos no ordenados.',
        'Ignorar la política para duplicados (primera vs última aparición).',
      ],
      practice: [
        'Demuestra la invariante de lazo.',
        'Implementa lower_bound (primero ≥ target) y upper_bound (primero > target).',
        'Muestra cómo falla en un arreglo rotado y el arreglo de la versión rotada.',
      ],
      timeComplexity: 'Θ(log n)',
      spaceComplexity: 'Θ(1)',
    },
  },
};

export default binarySearch;
