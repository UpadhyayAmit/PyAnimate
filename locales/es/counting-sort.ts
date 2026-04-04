import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Counting Sort',
  hint: 'Ordena enteros en un rango pequeño en O(n+k) contando frecuencias.',
  approach: 'Cuenta los valores de entrada en un array de conteo, luego reconstruye la salida ordenada de los recuentos.',
  useCases: [
    'Ordenar enteros en rango pequeño (ej. notas 0-100)',
    'Algoritmo base para Radix Sort',
    'Cuando O(n+k) es posible en lugar de O(n log n)',
  ],
  explanation: {
    simple: {
      overview: 'La ordenación por conteo cuenta cuántas veces aparece cada valor, luego reconstruye la lista ordenada a partir de los conteos.',
      analogy: 'Como contar votos por candidato: cuentas todos los votos, luego los listas en orden.',
      steps: [
        'Encuentra el valor máximo k',
        'Crea un arreglo de conteo de tamaño k+1',
        'Cuenta las ocurrencias de cada valor',
        'Suma los conteos para obtener posiciones (suma de prefijo)',
        'Coloca cada elemento en su posición de salida',
      ],
      visual: `[4,2,2,8,3,3,1]
conteo: [0,1,2,2,1,0,0,0,1]
ordenado: [1,2,2,3,3,4,8]`,
      commonMistakes: [
        'Usarla cuando k >> n — desperdicia tiempo y espacio',
        'Olvidar la suma de prefijo para la versión estable',
      ],
      practice: [
        'Ordena caracteres en una cadena con conteo',
        'Ordena objetos por atributo de rango pequeño',
      ],
      timeComplexity: 'O(n+k) — donde k es el rango de valores',
      spaceComplexity: 'O(k) — para el arreglo de conteo'
    },
    deepDive: {
      overview: 'La ordenación por conteo estable (suma de prefijo + paso hacia atrás) es la base del Radix Sort.',
      steps: [
        'Suma de prefijo: count[i] += count[i-1] da posición de inicio de cada valor',
        'Paso hacia atrás: garantiza estabilidad',
        'Radix sort: aplica counting sort por dígito, de LSD a MSD',
        'Para flotantes/cadenas: usa radix sort con representación apropiada',
      ],
      commonMistakes: [
        'Olvidar el paso hacia atrás → el conteo es inestable',
        'No restablecer el arreglo de conteo entre pasadas en radix sort',
      ],
      practice: [
        'Implementa radix sort LSD usando counting sort',
        'Ordena cadenas con counting sort por carácter',
      ],
    },
  },
};

export default overlay;
