import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Implementa factorial de forma iterativa. Verifica: 0!=1, 5!=120, 10!=3628800.',
  hint: 'Comienza con product=1, multiplica por cada número del 1 al n. Maneja n=0 como caso especial.',
  explanation: {
    simple: {
      overview: 'El factorial de n (n!) es n × (n-1) × ... × 1. Es el número de formas de ordenar n objetos.',
      analogy: 'Como organizar libros en una estantería: la primera posición tiene n opciones, la segunda n-1, etc.',
      steps: [
        'Caso base: 0! = 1, 1! = 1',
        'Caso recursivo: n! = n × (n-1)!',
        'O iterativo: multiplica de 1 a n',
        'O usa math.factorial() incorporado',
      ],
      visual: `5! = 5×4×3×2×1 = 120

def fact(n):
    return 1 if n <= 1 else n * fact(n-1)`,
      commonMistakes: [
        'Falta el caso base → RecursionError',
        'Confundir 0! = 1 (definición matemática)',
      ],
      practice: [
        'Implementa ambas versiones recursiva e iterativa',
        'Computa combinaciones C(n,k) = n! / (k!(n-k)!)',
      ],
      timeComplexity: 'O(n) — n multiplicaciones',
      spaceComplexity: 'O(n) recursivo (pila), O(1) iterativo'
    },
    deepDive: {
      overview: 'math.factorial() de Python usa el algoritmo de división de primos (más rápido que naive); la memoización da O(1) para llamadas repetidas.',
      steps: [
        'Pila de recursión: Python limita a 1000 por defecto',
        'sys.setrecursionlimit() puede aumentarlo pero arriesga desbordamiento',
        'Stirling: n! ≈ √(2πn)(n/e)^n para valores grandes',
        'math.comb(n,k) calcula binomiales sin overflow intermedios',
      ],
      commonMistakes: [
        'No saber que la recursión ingenua puede desbordar la pila con n grandes',
        'Calcular n!/k! sin reducción — usa math.comb en su lugar',
      ],
      practice: [
        'Implementa factorial iterativo con reduce()',
        'Explora math.comb() para cálculos de combinatorias',
      ],
    },
  },
};

export default overlay;
