import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Find MST of edges: (A-B,4), (A-C,2), (B-C,1), (B-D,5), (C-D,8). Show sorted edges and union-find steps.',
  hint: 'Sort edges by weight. Use Union-Find to detect cycles. Greedily add edges that don\'t form a cycle.',
  explanation: {
    simple: {
      overview: 'Kruskal\'s algorithm finds the Minimum Spanning Tree by greedily adding the cheapest edge that doesn\'t form a cycle.',
      analogy: 'Laying power cables between cities: always connect the next cheapest pair that isn\'t already indirectly connected.',
      steps: [
          'Sort all edges by weight ascending.',
          'For each edge (u,v,w): if find(u) != find(v): add edge and union(u,v).',
          'Stop when V-1 edges added (spanning tree complete).',
          'Use Union-Find with path compression and rank for efficiency.',
      ],
      visual: 'Edges sorted: (1,2,1),(1,3,2),(2,4,2),(3,4,3) → MST uses first 3 edges with total weight 5.',
      commonMistakes: [
          'Not sorting edges first.',
          'Missing Union-Find → cycle check is O(V) per edge instead of O(α(V)).',
      ],
      practice: [
          'Implement Kruskal\'s with Union-Find; output MST weight.',
          'Compare Kruskal vs Prim for dense vs sparse graphs.',
      ],
      timeComplexity: 'O(E log E)',
      spaceComplexity: 'O(V+E)',
    },
    deepDive: {
      overview: 'Union-Find (Disjoint Set Union) with path compression and union-by-rank achieves near-O(1) per operation.',
      analogy: 'Hierarchical grouping: merging groups by appointing the larger group\'s leader as the combined group\'s leader.',
      steps: [
          'find(x) with path compression: parent[x] = find(parent[x]) → flattens tree.',
          'union by rank: attach smaller tree under larger by comparing rank.',
          'Amortized complexity per operation: O(α(n)) — inverse Ackermann, effectively O(1).',
          'Borůvka\'s algorithm: O(E log V) alternative using cheapest edge per component.',
      ],
      visual: 'find(5): 5→3→1→0; with compression: 5→0, 3→0 directly after first call.',
      commonMistakes: [
          'Forgetting path compression → O(log n) per find instead of O(α(n)).',
          'Not using union-by-rank → possible O(n) tree height.',
      ],
      practice: [
          'Implement Union-Find with both optimizations and test on LeetCode 684.',
          'Implement Borůvka\'s algorithm for comparison.',
      ],
    },
  },
};

export default overlay;
