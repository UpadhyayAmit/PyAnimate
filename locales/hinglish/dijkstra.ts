import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Dijkstra ka Algorithm',
  hint: 'Non-negative weights wale graph mein shortest path nikalo.',
  approach: 'Priority queue (min-heap) se shortest distance wala node process karo, neighbors ki distances update karo.',
  useCases: [
    'GPS navigation aur shortest route finding',
    'Network routing protocols (OSPF)',
    'Game AI mein pathfinding',
  ],
  explanation: {
    simple: {
      overview: 'Dijkstra algorithm weighted graph mein shortest path deta hai — GPS navigation ka base hai yaar.',
      analogy: 'Jaise city mein sabse fast route dhundho — traffic ke hisaab se (edge weights) route choose karo.',
      steps: [
        'Source node ke liye distance 0, baaki infinity',
        'Min-heap (priority queue) mein source add karo',
        'Heap se min distance node nikaalo',
        'Uske neighbors update karo agar shorter path mila',
      ],
      visual: `A->B=4, A->C=2, C->B=1
Dijkstra from A: dist[A]=0, dist[C]=2, dist[B]=3 (via C)`,
      commonMistakes: [
        'Negative weights pe kaam nahi karta — Bellman-Ford use karo',
        'Already visited node ko skip karo',
        'Heap pe duplicate entries — check current dist',
      ],
      practice: [
        'Dijkstra implement karo heapq se',
        'Cheapest flights within k stops solve karo',
      ],
    },
    deepDive: {
      overview: 'Dijkstra O((V+E) log V) hai heapq se — dense graphs ke liye Fibonacci heap O(E + V log V) optimal.',
      steps: [
        'heapq based: O((V+E) log V) time',
        'Set-based visited: O(V^2) time O(V) space',
        'Lazy deletion: stale heap entries check dist',
        'Bidirectional Dijkstra: source aur target dono se',
      ],
      commonMistakes: [
        'Negative edges — use Bellman-Ford ya Johnson algorithm',
        'Revisiting nodes without dist check — slower',
      ],
      practice: [
        'Network delay time Dijkstra se solve karo',
        'Shortest path with at most k edges — modified Dijkstra',
      ],
    },
  },
};

export default overlay;
