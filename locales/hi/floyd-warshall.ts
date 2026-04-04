import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Floyd-Warshall apply करें: [[0,3,∞,7],[8,0,2,∞],[5,∞,0,1],[2,∞,∞,0]]। हर k के बाद matrix show करें।',
  hint: 'तीन nested loops: k (relay node), i (source), j (dest)। Update if dist[i][k]+dist[k][j] < dist[i][j]।',
  explanation: {
    simple: {
      overview: 'Floyd-Warshall all-pairs shortest paths ka dynamic programming algorithm hai, negative weights handle karta hai.',
      analogy: 'Jaise saare cities ke beech shortest distance table banana—sab intermediate cities ki routes mein shortest dhundo.',
      steps: [
        'V×V distance matrix initialize karo (same=0, edge=weight, warna=∞)',
        'Har intermediate node k par loop karo',
        'dist[i][j]=min(dist[i][j],dist[i][k]+dist[k][j])',
        'Diagonal negative hai toh negative cycle',
      ],
      visual: `V=4
for k in range(4):
  for i in range(4):
    for j in range(4):
      d[i][j]=min(d[i][j],d[i][k]+d[k][j])`,
      commonMistakes: [
        'Negative cycle detection skip karna (diagonal check karo)',
        'Triple loop order galat likhna',
      ],
      practice: [
        'Matrix graph par Floyd-Warshall implement karo',
        'Floyd-Warshall se negative cycle hai ya nahi check karo',
      ],
      timeComplexity: 'O(V³)',
      spaceComplexity: 'O(V²)'
    },
    deepDive: {
      overview: 'O(V³) all-pairs shortest paths, transitive closure bhi calculate karo, next[i][j]=k matrix se path reconstruct karo.',
      steps: [
        'Path reconstruction: next[i][j]=k store karo',
        'Transitive closure: weights ko 1/0 se replace karo',
        'Johnson\'s algorithm: sparse graphs O(VE log V) better',
        'Negative cycles distances negative infinity tak diverge karte hain',
      ],
      commonMistakes: [
        'V>500 par use karna (O(V³) bahut slow)',
        'Dijkstra se selection tradeoff misunderstand karna',
      ],
      practice: [
        'Path reconstruction ke saath Floyd-Warshall implement karo',
        'Floyd aur matrix chain multiplication compare karo',
      ],
    },
  },
};

export default overlay;
