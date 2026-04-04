import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Bellman-Ford एल्गोरिदम को समझें',
  hint: 'negative weights के साथ भी shortest path खोज सकते हैं — V-1 बार edges relax करें।',
  approach: 'सभी edges को V-1 बार relax करो। अगर V-th pass में भी relaxation होती है तो negative cycle है।',
  useCases: [
    'Negative edge weights वाले graphs',
    'Currency arbitrage detection',
    'Network routing में distance-vector algorithms',
  ],
  explanation: {
    simple: {
      overview: 'Bellman-Ford negative weights wale graphs mein bhi single source shortest paths nikalta hai aur negative cycles detect karta hai.',
      analogy: 'Jaise negative interest rates wali currency exchange paths mein cheapest transfer route dhundna.',
      steps: [
        'dist[start]=0 initialize karo, baaki infinity',
        'Saari edges V-1 baar relax karo',
        'Ek baar aur relax karo—update hone par negative cycle hai',
        'Distance array return karo',
      ],
      visual: `V=5, E=6
Saari edges (u,v,w) traverse karo
V-1=4 baar repeat karo
Final check → updates = negative cycle`,
      commonMistakes: [
        'Negative cycle detection skip karna',
        'V-1 ki jagah V baar relax karna',
      ],
      practice: [
        'Negative weight graph par Bellman-Ford implement karo',
        'Bellman-Ford se negative cycle detect karo',
      ],
      timeComplexity: 'O(VE)',
      spaceComplexity: 'O(V)'
    },
    deepDive: {
      overview: 'Bellman-Ford O(VE), negative cycle detection ke liye, SPFA queue-based variant usually faster.',
      steps: [
        'Outer V-1, inner all E, total O(VE)',
        'Negative cycle: V-th relaxation updates honi chahiye',
        'SPFA: deque queue optimization, practically faster',
        'Distributed Bellman-Ford = BGP routing',
      ],
      commonMistakes: [
        'Dense graphs mein Dijkstra ki jagah use karna (slow)',
        'SPFA without pruning worst case O(VE)',
      ],
      practice: [
        'Negative weight graph par Bellman-Ford vs Dijkstra compare karo',
        'Cheapest flights problem mein Bellman-Ford try karo',
      ],
    },
  },
};

export default overlay;
