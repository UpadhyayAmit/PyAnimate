import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Comprueba si \'racecar\', \'hello\' y \'A man a plan a canal Panama\' son palíndromos.',
  hint: 'Para el último, convierte a minúsculas y elimina espacios/puntación primero.',
  explanation: {
    simple: {
      overview: 'Un palíndromo se lee igual hacia adelante que hacia atrás. Comprueba si una cadena o número es un palíndromo.',
      analogy: 'Como una mariposa — simétrica. El lado izquierdo es un espejo del lado derecho.',
      steps: [
        'Limpia la entrada (minúsculas, sin puntuación)',
        'Compara la cadena con su reverso',
        'O usa dos punteros desde los extremos hacia el centro',
        'Devuelve True si todos los caracteres coinciden',
      ],
      visual: `"racecar"[::-1] == "racecar"  → True
"hello"[::-1]   == "olleh"    → False`,
      commonMistakes: [
        'Olvidar convertir a minúsculas antes de comparar',
        'No manejar espacios y puntuación en frases',
      ],
      practice: [
        'Comprueba palíndromos ignorando espacios y mayúsculas',
        'Encuentra el palíndromo más largo en una cadena',
      ],
      timeComplexity: 'O(n) — compara todos los caracteres',
      spaceComplexity: 'O(n) con slicing, O(1) con dos punteros'
    },
    deepDive: {
      overview: 'La comprobación de palíndromos con dos punteros es O(n) tiempo O(1) espacio; el algoritmo de Manacher encuentra todos los palíndromos en O(n).',
      steps: [
        'Dos punteros: L=0, R=n-1; avanza mientras s[L]==s[R]',
        'Ignora no-alfanuméricos con isalnum() en tiempo real',
        'Algoritmo de Manacher: O(n) para palíndromo más largo',
        'Para números: evita conversión con aritmética de reversión de dígitos',
      ],
      commonMistakes: [
        'Confundir la coincidencia de caracteres Unicode multicode-point',
        'No manejar cadenas de longitud 0 o 1 (siempre palíndromos)',
      ],
      practice: [
        'Implementa comprobación de palíndromo con dos punteros',
        'Prueba con frases: "Anita lava la tina"',
      ],
    },
  },
};

export default overlay;
