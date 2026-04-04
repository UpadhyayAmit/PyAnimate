import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Invierte [1, 2, 3, 4, 5] en su lugar usando dos punteros. NO uses list.reverse() o slicing.',
  hint: 'Comienza con left=0, right=len-1. Intercambia arr[left] y arr[right], mueve ambos hacia adentro.',
  explanation: {
    simple: {
      overview: 'Invertir el orden de los elementos en una lista, ya sea en sitio o creando una nueva lista.',
      analogy: 'Como leer una fila de personas desde el final hasta el principio.',
      steps: [
        'Método 1: lista.reverse() — modifica en sitio, O(n)',
        'Método 2: lista[::-1] — crea nueva lista, O(n)',
        'Método 3: reversed(lista) — iterador perezoso',
        'Manual: intercambia extremos moviéndose hacia el centro',
      ],
      visual: `nums = [1, 2, 3, 4, 5]
nums.reverse()      # [5,4,3,2,1] en sitio
nums[::-1]          # nueva lista
list(reversed(nums)) # de iterador`,
      commonMistakes: [
        'Confundir reverse() en sitio (devuelve None) con [::-1]',
        'Usar slicing cuando se necesitan modificaciones en sitio',
      ],
      practice: [
        'Invierte una cadena usando técnicas de lista',
        'Comprueba si una lista es un palíndromo',
      ],
      timeComplexity: 'O(n) — se toca cada elemento',
      spaceComplexity: 'O(1) en sitio, O(n) con slicing'
    },
    deepDive: {
      overview: 'La reversión en sitio intercambia punteros en O(n) tiempo; el slicing asigna nueva memoria; la técnica de dos punteros es elegante.',
      steps: [
        'CPython list.reverse() intercambia punteros en O(n)',
        'a[::-1] asigna nueva lista — usa memoria O(n)',
        'deque admite popleft O(1) para acceso a ambos extremos',
        'Para reversión parcial: usa la técnica de dos punteros con índices',
      ],
      commonMistakes: [
        'Suponer que reversed() materializa la lista — es un iterador',
        'Olvidar que el slicing de cadenas también es O(n)',
      ],
      practice: [
        'Implementa reversión en sitio sin slicing',
        'Compara rendimiento de varios métodos de inversión',
      ],
    },
  },
};

export default overlay;
