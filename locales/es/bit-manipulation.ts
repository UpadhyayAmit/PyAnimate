import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Usa operaciones de bits: (1) verifica si 13 es par/impar, (2) cuenta bits en 255, (3) swap XOR.',
  hint: 'Par/impar: n & 1 == 0. Contar bits: while n: count += n & 1; n >>= 1. XOR swap: a^=b; b^=a; a^=b.',
  explanation: {
    simple: {
      overview: 'La manipulación de bits opera directamente en los bits binarios de los enteros para soluciones eficientes en tiempo y espacio.',
      analogy: 'Como interruptores de luz: AND es "ambos deben estar encendidos", OR es "al menos uno", XOR es "exactamente uno diferente".',
      steps: [
        'AND (&): ambos bits deben ser 1 → enmascara bits',
        'OR (|): al menos un bit es 1 → establece bits',
        'XOR (^): bits diferentes → conmuta bits; a^a=0',
        'Shift izquierdo (<<): multiplica por 2; shift derecho (>>): divide por 2',
      ],
      visual: `5 & 3 = 101 & 011 = 001 = 1
5 | 3 = 101 | 011 = 111 = 7
5 ^ 3 = 101 ^ 011 = 110 = 6
5 << 1 = 1010 = 10`,
      commonMistakes: [
        'Confundir & (bit a bit) con and (lógico)',
        'Shift derecho con signo vs sin signo en lenguajes con signo',
      ],
      practice: [
        'Encuentra el único número no duplicado en un array con XOR',
        'Comprueba si un número es potencia de 2: n & (n-1) == 0',
      ],
      timeComplexity: 'O(1) para operaciones individuales; O(log n) para contar bits',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'Los trucos de bits incluyen x&(x-1) para eliminar el bit más bajo, x&(-x) para aislarlo, y el Sieve de Eratóstenes con bitset.',
      steps: [
        'Bit más bajo establecido: x & (-x) usando complemento a dos',
        'Eliminar bit más bajo: x & (x-1) — útil para contar unos (algorit. de Kernighan)',
        'Contar bits: bin(n).count("1") o bin.popcount en C++',
        'Swap XOR: a^=b; b^=a; a^=b — intercambia sin variable temporal',
      ],
      commonMistakes: [
        'Swap XOR falla cuando a y b son la misma variable',
        'Shift aritmético a la derecha preserva el signo en Python (diferente de C)',
      ],
      practice: [
        'Implementa el conteo de bits con x&(x-1)',
        'Usa bitmasking para resolver el TSP en O(2^n × n²)',
      ],
    },
  },
};

export default overlay;
