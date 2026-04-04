import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Genera los primeros 15 números de Fibonacci usando solo dos variables rotantes (sin lista).',
  hint: 'Rastrea prev y curr. Cada paso: new_curr = prev + curr, luego desplaza ambas.',
  explanation: {
    simple: {
      overview: 'La secuencia Fibonacci: cada número es la suma de los dos anteriores (0, 1, 1, 2, 3, 5, 8...). Versión iterativa con dos variables.',
      analogy: 'Como conejos que se reproducen: cada mes tienes los pares del mes anterior más los nuevos.',
      steps: [
        'Inicializa a, b = 0, 1',
        'Repite n veces: a, b = b, a + b',
        'Después de n pasos, a es el n-ésimo número Fibonacci',
        'Sin recursión → sin riesgo de desbordamiento de pila',
      ],
      visual: `a,b = 0,1
Paso 1: a,b = 1,1
Paso 2: a,b = 1,2
Paso 3: a,b = 2,3
Paso 4: a,b = 3,5`,
      commonMistakes: [
        'Usar recursión → O(2^n) sin memoización',
        'Índice incorrecto por error de uno (¿comienza en 0 o 1?)',
      ],
      practice: [
        'Genera los primeros n números Fibonacci en una lista',
        'Encuentra el primer Fibonacci mayor que un valor X',
      ],
      timeComplexity: 'O(n) — exactamente n iteraciones',
      spaceComplexity: 'O(1) — solo dos variables'
    },
    deepDive: {
      overview: 'La exponenciación de matrices da Fibonacci en O(log n); la fórmula de Binet usa el número áureo φ.',
      steps: [
        'Exponenciación de matrices: [[1,1],[1,0]]^n → F(n) en O(log n)',
        'Fórmula de Binet: F(n) = (φ^n - ψ^n) / √5 — error de punto flotante para n grandes',
        'Generador iterativo para Fibonacci perezoso infinito',
        'F(n) % m es periódico (secuencia de Pisano) para aritmética modular',
      ],
      commonMistakes: [
        'Usar fórmula de Binet para n > 70 — error de punto flotante',
        'No conocer que la exponenciación de matrices da O(log n)',
      ],
      practice: [
        'Implementa Fibonacci con generador',
        'Implementa versión O(log n) con multiplicación de matrices',
      ],
    },
  },
};

export default overlay;
