import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Mínimas monedas para hacer amount=11 con monedas=[1,5,6,9]. Construye el array dp paso a paso.',
  hint: 'dp[0]=0, dp[i]=infinito inicial. Para cada moneda c: dp[i] = min(dp[i], dp[i-c]+1) si i>=c.',
  explanation: {
    simple: {
      overview: 'Dado un conjunto de denominaciones de monedas, encuentra el número mínimo de monedas para hacer exactamente una cantidad objetivo.',
      analogy: 'Como dar cambio con el mínimo de billetes y monedas — por ejemplo, para 11€ con {1,5,6}: dos monedas (5+6) es mejor que (1+1+1+1+1+1+5).',
      steps: [
        'Crea dp[0..amount] inicializado a ∞, dp[0]=0',
        'Para cada cantidad de 1 a amount:',
        'Para cada denominación c: si c ≤ cantidad: dp[cantidad] = min(dp[cantidad], dp[cantidad-c]+1)',
        'dp[amount] es la respuesta (∞ significa imposible)',
      ],
      visual: `monedas=[1,5,6], amount=11
dp[0]=0,dp[1]=1,...,dp[5]=1,dp[6]=1
dp[11]=min(dp[10]+1,dp[6]+1,dp[5]+1)=2`,
      commonMistakes: [
        'Inicializar dp a 0 en lugar de ∞ (excepto dp[0])',
        'Confundir mínimo de monedas vs número de formas de hacer el cambio',
      ],
      practice: [
        'Modifica para contar el número de combinaciones en lugar del mínimo',
        'Reconstruye qué monedas se usan rastreando hacia atrás',
      ],
      timeComplexity: 'O(amount × |coins|)',
      spaceComplexity: 'O(amount)'
    },
    deepDive: {
      overview: 'Coin change es mochila ilimitada; el orden del bucle determina combinaciones vs permutaciones.',
      steps: [
        'Bucle externo=cantidad, interno=moneda: cuenta combinaciones (no importa el orden)',
        'Bucle externo=moneda, interno=cantidad: cuenta permutaciones (el orden importa)',
        'El greedy no funciona en general (contraejemplo: monedas [1,3,4], objetivo=6)',
        'Coin change II (número de formas): dp[c] += dp[c-coin]',
      ],
      commonMistakes: [
        'Usar greedy (la denominación más grande primero) — puede fallar para algunas denominaciones',
        'Confundir el orden de los bucles para combinaciones vs permutaciones',
      ],
      practice: [
        'Implementa Coin Change II (número de formas)',
        'Construye un contraejemplo donde el greedy falla',
      ],
    },
  },
};

export default overlay;
