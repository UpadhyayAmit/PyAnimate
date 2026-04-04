import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Edges: (A-B,4), (A-C,2), (B-C,1), (B-D,5), (C-D,8) ka MST dhundho.',
  hint: 'Edges ko weight se sort karo. Cycle detect karne ke liye Union-Find use karo.',
  explanation: {
    simple: {
      overview: 'Kruskal algorithm Minimum Spanning Tree (MST) banata hai — sabse saste edges chunkar sab nodes connect karo.',
      analogy: 'Jaise cities ko cheapest cable se connect karo — cheapest first, cycle mat banao.',
      steps: [
        'Sab edges weight ke hisaab se sort karo',
        'Union-Find structure banao',
        'Har edge ke liye: agar dono endpoints alag components mein hain toh add karo',
        'V-1 edges lene ke baad MST complete',
      ],
      visual: `Edges sorted by weight: 1,2,3,4,5...
Add cheapest edge if no cycle
Stop when V-1 edges added`,
      commonMistakes: [
        'Union-Find ke bina cycle detection O(V) per edge',
        'Disconnected graph: V-1 se kam edges MST mein',
        'Path compression aur union by rank bhool jaana',
      ],
      practice: [
        'Kruskal implement karo Union-Find se',
        'Minimum cost to connect all cities solve karo',
      ],
    },
    deepDive: {
      overview: 'Kruskal O(E log E) sorting dominant hai — Union-Find almost O(1) amortized per operation.',
      steps: [
        'Union-Find path compression: O(alpha(n)) per operation (almost O(1))',
        'Union by rank: tree balanced rehta hai',
        'Kruskal O(E log E) vs Prim O(E log V) for sparse graphs',
        'Maximum spanning tree: negate weights ya sort descending',
      ],
      commonMistakes: [
        'Union without rank: degenerate O(n) tree',
        'Sparse graphs Kruskal, dense Prim prefer karo',
      ],
      practice: [
        'Union-Find implement karo path compression aur union by rank ke saath',
        'Minimum cost to connect all points solve karo',
      ],
    },
  },
};

export default overlay;
