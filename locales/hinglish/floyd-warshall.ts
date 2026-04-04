import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Floyd-Warshall apply karo: [[0,3,∞,7],[8,0,2,∞],...]. Har k ke baad matrix show karo.',
  hint: 'Teen nested loops: k (relay node), i (source), j (dest). Update if dist[i][k]+dist[k][j] < dist[i][j].',
  explanation: {
    simple: {
      overview: 'Floyd-Warshall all-pairs shortest path deta hai — har node se har dusre node tak shortest distance.',
      analogy: 'Jaise har city se har dusri city ka fastest route nikaalna — ek saath sab nikaalo.',
      steps: [
        'dist[i][j] = direct edge weight (infinity agar nahi)',
        'k = 0 se V-1 tak: intermediate node consider karo',
        'dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])',
        'Negative cycle: dist[i][i] < 0',
      ],
      visual: `dist[i][j] = min(
  dist[i][j],           # direct path
  dist[i][k]+dist[k][j] # via k
)`,
      commonMistakes: [
        'Self-distance dist[i][i] = 0 initially set karna',
        'Negative cycle: diagonal mein negative check karo',
        'Integer overflow — large/infinity values se',
      ],
      practice: [
        'Floyd-Warshall implement karo aur all-pairs shortest paths nikalo',
        'Transitive closure matrix nikalo Floyd-Warshall se',
      ],
    },
    deepDive: {
      overview: 'Floyd-Warshall O(V^3) all-pairs — sparse graphs ke liye Dijkstra V times faster: O(VE log V).',
      steps: [
        'Time O(V^3) Space O(V^2)',
        'Negative cycle: V passes ke baad diagonal check',
        'Path reconstruction: next[i][j] matrix maintain karo',
        'Johnson algorithm: reweighting + V Dijkstras for all-pairs on sparse graphs',
      ],
      commonMistakes: [
        'Dense graphs mein O(V^3) acceptable, sparse mein V x Dijkstra better',
        'Integer overflow jab dist[i][k]+dist[k][j] — infinity se add mat karo',
      ],
      practice: [
        'Johnson algorithm implement karo (Bellman-Ford + Dijkstra)',
        'Detect negative cycles aur report them',
      ],
    },
  },
};

export default overlay;
