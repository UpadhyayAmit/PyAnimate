import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: "Verifica si ('listen','silent'), ('hello','world') son anagramas. Encuentra grupos de anagramas.",
  hint: 'Ordena ambas cadenas y compara, o usa Counter(). Para agrupar usa la palabra ordenada como clave.',
  explanation: {
    simple: {
      overview: 'Dos cadenas son anagramas si contienen los mismos caracteres con las mismas frecuencias (ignorando espacios y mayúsculas).',
      analogy: 'Como reorganizar las letras de "amor" para obtener "Roma" — los mismos bloques, diferente disposición.',
      steps: [
        'Limpia ambas cadenas (minúsculas, sin espacios)',
        'Compara sus versiones ordenadas: sorted(s1) == sorted(s2)',
        'O compara sus contadores de caracteres',
        'O usa Counter(s1) == Counter(s2)',
      ],
      visual: `"listen" → sorted → "eilnst"
"silent" → sorted → "eilnst"
¡Son iguales → Anagrama!`,
      commonMistakes: ['Olvidar convertir a minúsculas', 'No eliminar espacios para frases'],
      practice: ['Agrupa anagramas de una lista de palabras', 'Encuentra todos los anagramas de una palabra en un diccionario'],
      timeComplexity: 'O(n log n) con ordenación; O(n) con Counter',
      spaceComplexity: 'O(n) — para la versión ordenada o el contador',
    },
    deepDive: {
      overview: 'La comparación de Counter es O(n); clasificar en grupos se hace con defaultdict(list) ordenando la clave.',
      steps: [
        'Counter(s1) == Counter(s2) es O(n) tiempo y espacio',
        'Agrupar anagramas: dict con clave=tuple(sorted(word))',
        'El filtrado de caracteres Unicode usa unicodedata.normalize()',
        'La multiplicación de números primos asigna un código único a cada multiconjunto de letras',
      ],
      commonMistakes: ['Usar sorted() en cadenas Unicode puede ordenar de forma inesperada', 'Confundir subsecuencia con subanagrama'],
      practice: ['Agrupa anagramas en O(NK log K)', 'Implementa detección de anagramas con hash de primos'],
    },
  },
};

export default overlay;
