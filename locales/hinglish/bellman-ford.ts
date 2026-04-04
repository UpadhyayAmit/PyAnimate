import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Bellman-Ford Algorithm',
  hint: 'Negative weights ke baad bhi shortest path dhundh sakta hai — V-1 baar edges relax karo.',
  approach: 'Sabhi edges ko V-1 baar relax karo. Agar V-th pass mein bhi relaxation hoti hai to negative cycle hai.',
  useCases: [
    'Negative edge weights wale graphs',
    'Currency arbitrage detection',
    'Network routing mein distance-vector algorithms',
  ],
  explanation: {
    simple: {
      overview: 'Bellman-Ford shortest path algorithm hai jo negative edges bhi handle karta hai — Dijkstra se slow par zyada powerful.',
      analogy: 'Jaise budget travel plan karo — negative discount (negative edge) bhi consider karo aur cycle check karo.',
      steps: [
        'Sab distances infinity, source = 0',
        'V-1 baar sab edges relax karo (dist[u]+w < dist[v])',
        'Ek aur pass karo — agar koi update hua toh negative cycle hai',
        'Negative cycle detect karo',
      ],
      visual: `V=5 nodes
Pass 1: update direct edges
Pass 2: 2-hop paths
...
Pass V-1: longest simple path covered`,
      commonMistakes: [
        'V-1 passes karna — exactly V-1, V nahi',
        'Negative cycle detection: Vth pass mein update check karo',
        'Disconnected graph: infinity check karo',
      ],
      practice: [
        'Bellman-Ford implement karo',
        'Negative cycle detect karo graph mein',
      ],
    },
    deepDive: {
      overview: 'Bellman-Ford O(VE) time — SPFA (Bellman-Ford with queue) practically faster, worst case same.',
      steps: [
        'Time O(VE) Space O(V)',
        'SPFA: only recently updated vertices ke neighbors relax karo',
        'Johnson algorithm: Bellman-Ford + reweighting + Dijkstra all pairs',
        'Currency arbitrage: negative cycle detect karo',
      ],
      commonMistakes: [
        'SPFA worst case still O(VE) — sparse graphs mein usually faster',
        'Early termination agar koi relaxation nahi hua',
      ],
      practice: [
        'SPFA optimize karo bellman-ford pe',
        'Cheapest flight tickets Bellman-Ford se solve karo',
      ],
    },
  },
};

export default overlay;
