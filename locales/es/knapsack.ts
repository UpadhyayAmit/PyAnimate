import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Resuelve el problema de la mochila 0/1: items=[(2,6),(2,10),(3,12)], capacidad=5.',
  hint: 'dp[i][w] = max(dp[i-1][w], dp[i-1][w-peso[i]] + valor[i]). Cada celda es un subproblema.',
  explanation: {
    simple: {
      overview: 'El problema de la mochila 0/1: dados artículos con pesos y valores, maximiza el valor total sin exceder la capacidad de peso.',
      analogy: 'Empacar para un viaje: cada artículo tiene peso y valor, solo puedes cargar hasta W kilos — ¿qué llevas para maximizar el valor?',
      steps: [
        'Crea tabla DP: dp[i][w] = máximo valor con los primeros i artículos y capacidad w',
        'Para cada artículo: no incluir (dp[i-1][w]) o incluir (dp[i-1][w-peso_i] + valor_i)',
        'Toma el máximo de las dos opciones',
        'dp[n][W] es la respuesta',
      ],
      visual: `artículos: [(peso=2,val=3),(peso=3,val=4),(peso=4,val=5)]
W=5
dp[3][5] = 7 (artículo 1 + artículo 2)`,
      commonMistakes: [
        'Confundir 0/1 (cada artículo una vez) con mochila fraccional o ilimitada',
        'Iteración incorrecta al optimizar a O(W) espacio',
      ],
      practice: [
        'Optimiza a O(W) espacio con un array 1D',
        'Reconstruye qué artículos se incluyen rastreando hacia atrás la tabla DP',
      ],
      timeComplexity: 'O(n×W) — n artículos × W capacidad',
      spaceComplexity: 'O(n×W) → optimizable a O(W)'
    },
    deepDive: {
      overview: 'La mochila 0/1 usa iteración inversa para el array 1D; la variante de mochila ilimitada itera hacia adelante; Greedy resuelve la mochila fraccional.',
      steps: [
        'Array 1D: itera w de W a peso para garantizar cada artículo una sola vez',
        'Mochila ilimitada: itera w de peso a W (permite artículos múltiples)',
        'Mochila fraccional: ordena por ratio valor/peso — greedy O(n log n)',
        'Extensiones: mochila múltiple, mochila binaria, K inversiones',
      ],
      commonMistakes: [
        'Iterar hacia adelante en 0/1 mochila → cuenta artículos múltiples veces',
        'Confundir mochila fraccional (greedy) con 0/1 (DP)',
      ],
      practice: [
        'Implementa mochila ilimitada (coin change variant)',
        'Implementa reconstrucción de artículos seleccionados para 0/1',
      ],
    },
  },
};

export default overlay;
