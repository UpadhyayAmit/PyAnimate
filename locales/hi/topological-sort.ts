import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Topological sort: 5→2, 5→0, 4→0, 4→1, 2→3, 3→1। Valid orderings list करें।',
  hint: 'Kahn\'s algorithm use करें: in-degrees compute करें, 0 in-degree वाले nodes को enqueue करें।',
  explanation: {
    simple: {
      overview: 'Topological sort DAG (Directed Acyclic Graph) ke nodes ko dependencies ke hisaab se order karta hai.',
      analogy: 'Jaise courses ka order determine karna—pehle prerequisites complete karo.',
      steps: [
        'Har node ka in-degree calculate karo',
        'Saare in-degree=0 nodes queue mein add karo',
        'Node dequeue karo, neighbors ka in-degree -1 karo',
        'In-degree 0 hone par queue mein add karo, agar saare process nahi hue toh cycle hai',
      ],
      visual: `1→2→4
  ↓
  3→4
Topo: [1,2,3,4]`,
      commonMistakes: [
        'Sirf directed graphs ke liye use ho sakta hai',
        'Cycle detection nahi karna',
      ],
      practice: [
        'Dependencies list se valid course schedule banao',
        'Kahn\'s algorithm aur DFS course scheduling mein compare karo',
      ],
      timeComplexity: 'O(V + E)',
      spaceComplexity: 'O(V)'
    },
    deepDive: {
      overview: 'Kahn\'s algorithm (BFS) aur DFS post-order dono O(V+E), cycle detection support karte hain.',
      steps: [
        'Kahn\'s: BFS queue + in-degree count',
        'DFS post-order: finished nodes stack mein',
        'Cycle detection: topological order mein remaining nodes < V toh cycle',
        'Parallel scheduling: same in-degree level parallel execute ho sakta hai',
      ],
      commonMistakes: [
        'Multiple valid topological orderings hoti hain bhool jana',
        'Cycle hone par khaali list return nahi karna',
      ],
      practice: [
        'Kahn\'s algorithm implement karo aur cycle detect karo',
        'DAG mein longest path nikalo',
      ],
    },
  },
};

export default overlay;
