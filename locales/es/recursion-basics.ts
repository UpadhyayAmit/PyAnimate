import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Fundamentos de Recursión',
  hint: 'Caso base y caso recursivo — todo problema grande se divide en menores.',
  approach: 'Define el caso base (dónde detener la recursión), luego llama al problema en una versión más pequeña.',
  useCases: [
    'Recorrido de árbol/grafo',
    'Algoritmos divide y vencerás',
    'Secuencias matemáticas (Fibonacci, factorial)',
  ],
  explanation: {
    simple: {
      overview: 'La recursión es cuando una función se llama a sí misma con una entrada más pequeña, hasta alcanzar el caso base.',
      analogy: 'Como las muñecas rusas: cada muñeca contiene una versión más pequeña de sí misma, hasta llegar a la muñeca sólida (caso base).',
      steps: [
        'Define el caso base (la condición de parada)',
        'Define el caso recursivo (llama con entrada más pequeña)',
        'Confía en que el caso recursivo funciona correctamente',
        'Combina el resultado del caso recursivo con el actual',
      ],
      visual: `def suma(n):
    if n == 0: return 0     # caso base
    return n + suma(n-1)    # caso recursivo

suma(3) → 3+suma(2) → 3+2+suma(1) → 6`,
      commonMistakes: [
        'Olvidar el caso base → recursión infinita',
        'No reducir el problema → nunca alcanza el caso base',
      ],
      practice: [
        'Implementa suma recursiva de 1 a n',
        'Implementa potencia recursiva: power(base, exp)',
      ],
      timeComplexity: 'Depende del problema: O(n) simple, O(2^n) árbol',
      spaceComplexity: 'O(profundidad) — para la pila de llamadas'
    },
    deepDive: {
      overview: 'La recursión de cola puede optimizarse; la memoización convierte O(2^n) en O(n); la pila explícita evita límites de recursión.',
      steps: [
        'Python NO optimiza la recursión de cola — usa iteración para profundidades grandes',
        'sys.setrecursionlimit() aumenta el límite pero arriesga desbordamiento de pila',
        '@functools.lru_cache memo the recursive calls',
        'Pila explícita: convierte cualquier recursión a iteración',
      ],
      commonMistakes: [
        'Asumir que Python optimiza la recursión de cola (no lo hace)',
        'No usar memoización cuando hay subproblemas solapados',
      ],
      practice: [
        'Convierte factorial recursivo a iterativo',
        'Agrega memoización a Fibonacci recursivo con @lru_cache',
      ],
    },
  },
};

export default overlay;
