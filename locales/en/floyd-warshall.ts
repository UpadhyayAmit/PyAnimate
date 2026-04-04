import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Apply Floyd-Warshall to: [[0,3,∞,7],[8,0,2,∞],[5,∞,0,1],[2,∞,∞,0]]. Show the matrix after each k.',
  hint: 'Three nested loops: k (relay node), i (source), j (dest). Update if dist[i][k]+dist[k][j] < dist[i][j].',
  explanation: {
    simple: {
      overview: 'All-pairs shortest paths using dynamic programming; handle negative weights but not negative cycles.',
      analogy: 'Asking every possible intermediate city: \'Could I go A→C→B faster than A→B directly?\'',
      steps: [
          'Initialize dist[i][j] = edge weight or ∞ if no edge; dist[i][i]=0.',
          'For each intermediate k: for each (i,j): dist[i][j] = min(dist[i][j], dist[i][k]+dist[k][j]).',
          'After V iterations over k, dist[i][j] is shortest for all pairs.',
      ],
      visual: 'V=3: iterate k=0,1,2 — each pass checks one intermediate city for all pairs.',
      commonMistakes: [
          'Loop order: k is outermost, then i, then j — not i,j,k.',
          'Negative cycle detection: dist[i][i] < 0 after the algorithm indicates a negative cycle.',
      ],
      practice: [
          'Detect negative cycles using Floyd-Warshall.',
          'Find the shortest path between every pair in a dense graph.',
      ],
      timeComplexity: 'O(V³)',
      spaceComplexity: 'O(V²)',
    },
    deepDive: {
      overview: 'Floyd-Warshall can also find the transitive closure and the minimax path (widest path / bandwidth) with minor modifications.',
      analogy: 'Each k-iteration is a DP recurrence: shortest path using only vertices {0..k} as intermediates.',
      steps: [
          'Transitive closure: replace min/+ with OR/AND.',
          'Minimax path: replace min(sum) with max(min(edge weight)).',
          'Path reconstruction: parent[i][j] matrix updated alongside dist.',
          'Johnson\'s algorithm beats Floyd for sparse graphs: O(V² log V + VE).',
      ],
      visual: 'After k=2: dist[0][3] may be shorter going 0→2→3 than 0→3 directly.',
      commonMistakes: [
          'Not initializing dist[i][j]=∞ for non-edges (leave 0 → wrong short-circuits).',
          'Floating-point overflow when adding ∞+weight — add a guard: if dist[i][k] == INF: continue.',
      ],
      practice: [
          'Implement path reconstruction with a parent matrix.',
          'Compare Floyd-Warshall vs running Dijkstra from every source.',
      ],
    },
  },
};

export default overlay;
