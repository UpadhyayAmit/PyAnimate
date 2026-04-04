import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Fundamentos de Programación Dinámica',
  hint: 'Guarda soluciones de subproblemas para reutilizarlas — memorización o tabulación.',
  approach: 'Descompón el problema en subproblemas superpuestos. Memoriza/tabula los resultados de subproblemas.',
  useCases: [
    'Problemas de optimización (costo mínimo, ganancia máxima)',
    'Problemas de conteo (caminos, formas)',
    'Coincidencia de cadenas (distancia de edición, LCS)',
  ],
  explanation: {
    simple: {
      overview: 'La programación dinámica resolve problemas dividiéndolos en subproblemas solapados y almacenando los resultados para evitar recálculos.',
      analogy: 'Como recordar tu camino al trabajo: la primera vez lo descubres, después solo lo recuerdas. DP guarda las soluciones ya calculadas.',
      steps: [
        'Identifica subproblemas solapados',
        'Define la recurrencia: dp[i] en términos de estados previos',
        'Define los casos base',
        'Llena la tabla dp en orden correcto',
      ],
      visual: `Fibonacci DP:
dp[0]=0, dp[1]=1
dp[i] = dp[i-1] + dp[i-2]
dp = [0,1,1,2,3,5,8,...]`,
      commonMistakes: [
        'No identificar la recurrencia correcta',
        'Olvidar los casos base',
        'Rellenar la tabla en orden incorrecto',
      ],
      practice: [
        'Resuelve Fibonacci con DP tabulación',
        'Resuelve el problema de la escalera (cuántas formas de subir n escalones)',
      ],
      timeComplexity: 'Depende: O(n), O(n²), O(n×W) — evita recálculos',
      spaceComplexity: 'O(n) típico; O(1) si solo se necesitan estados previos'
    },
    deepDive: {
      overview: 'DP requiere subestructura óptima + subproblemas solapados. La tabulación (bottom-up) vs memoización (top-down) tienen diferencias de rendimiento.',
      steps: [
        'Subestructura óptima: la solución óptima contiene soluciones óptimas de subproblemas',
        'Subproblemas solapados: los mismos subproblemas se resuelven múltiples veces',
        'Top-down (memoización): recursión + caché, fácil de escribir',
        'Bottom-up (tabulación): iterativo, evita sobrecarga de recursión, mejor para espacio',
      ],
      commonMistakes: [
        'Confundir greedy con DP — greedy elige localmente sin reconsiderar',
        'No optimizar el espacio cuando solo se necesitan k estados anteriores',
      ],
      practice: [
        'Implementa mochila 0/1 con memo y con tabulación',
        'Optimiza el espacio de Fibonacci DP de O(n) a O(1)',
      ],
    },
  },
};

export default overlay;
