import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Dijkstra का एल्गोरिदम सीखें',
  hint: 'Non-negative weights वाले graph में shortest path खोजें।',
  approach: 'Priority queue (min-heap) से shortest distance वाला node process करो, neighbors की distances update करो।',
  useCases: [
    'GPS navigation और shortest route finding',
    'Network routing protocols (OSPF)',
    'Game AI में pathfinding',
  ],
  explanation: {
    simple: {
      overview: 'Dijkstra\'s algorithm non-negative weights wale graph mein single source shortest paths nikalta hai.',
      analogy: 'Jaise navigation app—shortest route dhundo, tolls (weights) handle karo.',
      steps: [
        'dist[start]=0 initialize karo, baaki infinity',
        'Unvisited nodes mein minimum distance wala lo',
        'Neighbor nodes ki distances relax karo',
        'Saare nodes visit hone tak repeat karo',
      ],
      visual: `A--(1)--B--(2)--C
|              |
(4)            (1)
|              |
D-----(3)------E
A→C: A→B→C=3 vs A→D→E→C=8`,
      commonMistakes: [
        'Negative weights handle nahi kar sakta (Bellman-Ford use karo)',
        'Priority queue nahi use karna O(V²) ho jata hai',
      ],
      practice: [
        'Heap-based Dijkstra implement karo',
        'Negative weights ke saath Bellman-Ford se compare karo',
      ],
      timeComplexity: 'O((V + E) log V)',
      spaceComplexity: 'O(V)'
    },
    deepDive: {
      overview: 'Priority queue (min-heap) O((V+E)log V) deta hai, sirf positive weight edges ke liye valid.',
      steps: [
        'heapq.heappush(pq,(dist,node)) min-heap',
        'Greedy correctness: popped node already shortest hai',
        'Negative edges greedy choice todti hai',
        'Visited nodes skip karna performance improve karta hai',
      ],
      commonMistakes: [
        'Negative weight edges ignore karna',
        'Visited set ke bina nodes repeat process hote hain',
      ],
      practice: [
        'Dijkstra se network delay time solve karo',
        'Dijkstra se cheapest flights k stops wale solve karo',
      ],
    },
  },
};

export default overlay;
