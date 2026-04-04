import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Encuentra LCS de \'ABCBDAB\' y \'BDCAB\'. Construye la matriz DP y traza la secuencia.',
  hint: 'dp[i][j] = dp[i-1][j-1]+1 si los caracteres coinciden, de lo contrario max(dp[i-1][j], dp[i][j-1]).',
  explanation: {
    simple: {
      overview: 'La Subsecuencia Común Más Larga (LCS) encuentra la subsecuencia más larga presente en ambas cadenas (los caracteres no necesitan ser contiguos).',
      analogy: 'Como encontrar el guión común de dos canciones — buscas las palabras que aparecen en el mismo orden en ambas, aunque no de forma consecutiva.',
      steps: [
        'Crea tabla DP: dp[i][j] = longitud de LCS de s1[:i] y s2[:j]',
        'Si s1[i-1] == s2[j-1]: dp[i][j] = dp[i-1][j-1] + 1',
        'Sino: dp[i][j] = max(dp[i-1][j], dp[i][j-1])',
        'dp[m][n] es la longitud de LCS',
      ],
      visual: `"ABCBDAB" y "BDCAB"
LCS = "BCAB" o "BDAB" (longitud 4)`,
      commonMistakes: [
        'Confundir LCS con substring común más largo (debe ser contiguo)',
        'No rastrear la subsecuencia real (solo su longitud)',
      ],
      practice: [
        'Reconstruye la LCS real rastreando hacia atrás la tabla DP',
        'Usa LCS para implementar diff (líneas añadidas/eliminadas)',
      ],
      timeComplexity: 'O(m×n) — m y n son las longitudes de las cadenas',
      spaceComplexity: 'O(m×n) → optimizable a O(min(m,n))'
    },
    deepDive: {
      overview: 'LCS es la base de diff, distancia de edición y alineación de secuencias; Hirschberg da O(m+n) espacio.',
      steps: [
        'Optimización de espacio: solo necesitas 2 filas → O(min(m,n)) espacio',
        'Algoritmo de Hirschberg: O(mn) tiempo O(m+n) espacio para la subsecuencia real',
        'Distancia de edición (Levenshtein): generaliza LCS con inserciones, eliminaciones, sustituciones',
        'La LCS de muchas cadenas es NP-hard para k > 2 cadenas',
      ],
      commonMistakes: [
        'Pensar que LCS es NP — es polinomial para 2 cadenas',
        'Olvidar que múltiples LCS pueden existir con la misma longitud',
      ],
      practice: [
        'Implementa Levenshtein usando recurrencia similar a LCS',
        'Implementa el algoritmo de Hirschberg para LCS con O(m+n) espacio',
      ],
    },
  },
};

export default overlay;
