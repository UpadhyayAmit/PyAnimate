import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Algoritmo de Bellman-Ford',
  hint: 'Encuentra caminos más cortos incluso con pesos negativos — V-1 relajaciones.',
  approach: 'Relaja todas las aristas V-1 veces. Si aún hay relajación en el V-ésimo paso, hay un ciclo negativo.',
  useCases: ['Grafos con aristas de peso negativo', 'Detección de arbitraje de divisas', 'Algoritmos vector-distancia en enrutamiento de red'],
  explanation: {
    simple: {
      overview: 'Bellman-Ford encuentra caminos más cortos desde una fuente, incluso con aristas de peso negativo, y detecta ciclos negativos.',
      analogy:
        'Como revisar todos los vuelos V-1 veces: cada ronda puede descubrir rutas más baratas a través de conexiones con descuento (negativas).',
      steps: [
        'Inicializa distancias: origen=0, todos los demás=∞',
        'Repite V-1 veces: relaja todas las aristas',
        'Para relajar (u,v,w): si dist[u]+w < dist[v], actualiza dist[v]',
        'Pasada extra: si alguna distancia cambia, hay ciclo negativo',
      ],
      visual: `V=4 vértices → 3 rondas
Cada ronda relaja todas las aristas
Si la ronda 4 actualiza algo → ciclo negativo`,
      commonMistakes: ['Olvidar las V-1 rondas necesarias para convergencia', 'No realizar la pasada extra para detectar ciclos negativos'],
      practice: ['Detecta un ciclo negativo en un grafo de divisa', 'Compara Bellman-Ford vs Dijkstra en tiempo de ejecución'],
      timeComplexity: 'O(V·E) — V rondas × E aristas',
      spaceComplexity: 'O(V) — para el array de distancias',
    },
    deepDive: {
      overview: 'Bellman-Ford converge en V-1 iteraciones; SPFA (Shortest Path Faster Algorithm) optimiza para grafos escasos.',
      steps: [
        'Puede terminar antes si nada cambia en una ronda completa',
        'SPFA: BFS-like con cola — O(kE) en la práctica aunque O(VE) en el peor caso',
        'Detección de ciclo negativo: ejecuta una pasada V-ésima',
        'Recuperación del camino: almacena el predecesor de cada nodo',
      ],
      commonMistakes: ['Confundir V-1 rondas con V rondas', 'No saber que SPFA puede fallar en el peor caso (grafos diseñados)'],
      practice: ['Implementa Bellman-Ford con terminación anticipada', 'Detecta e imprime el ciclo negativo con rastreo hacia atrás'],
    },
  },
};

export default overlay;
