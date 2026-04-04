import type { LessonLocaleOverlay } from '../types';

const dijkstra: LessonLocaleOverlay = {
  explanation: {
    simple: {
      overview: 'Dijkstra finds shortest paths from a source to all nodes with non-negative edge weights.',
      analogy: 'Expanding a bubble of finalized shortest distances outward from the start city.',
      steps: [
        'Set dist[source]=0, others=∞; push source into min-heap.',
        'While heap not empty:',
        'Pop node u with smallest dist.',
        'Relax each edge (u,v,w): if dist[u]+w < dist[v], update and push v.',
        'Extracted nodes have final distances.',
      ],
      visual: 'Visited set grows; frontier edges relax distances into a shortest-path tree.',
      commonMistakes: [
        'Using Dijkstra when edges can be negative (incorrect).',
        'Not skipping stale heap entries after better distances are found.',
        'Using an array priority queue leading to O(V²) on large graphs.',
      ],
      practice: [
        'Run on a 5-node weighted graph and tabulate dist each step.',
        'Reconstruct paths with parent pointers.',
        'Compare binary heap vs Fibonacci heap complexity.',
      ],
      timeComplexity: 'O((V+E) log V) with a binary heap',
      spaceComplexity: 'O(V) for dist/parent/visited',
    },
    deepDive: {
      overview: 'Dijkstra is greedy; once a node is extracted, its distance is optimal because weights are non-negative.',
      analogy: 'Ripples that “freeze” distances one node at a time.',
      steps: [
        'Maintain min-heap keyed by tentative distances.',
        'Extract-min u; if entry is stale, skip.',
        'Relax neighbors with dist[u]+w.',
        'Cut property proves extracted node is optimal.',
        'Early-exit when target is extracted for single-destination queries.',
      ],
      visual: 'Heap shrinks; tree of parents marks shortest-path edges.',
      commonMistakes: [
        'Applying to graphs with negative edges (use Bellman-Ford).',
        'Trying to decrease-key in JS; easier to push duplicates and skip stale.',
        'Mixing directed/undirected edges in adjacency list.',
      ],
      practice: [
        'Prove correctness via the cut property.',
        'Implement early exit for a specific target.',
        'Show Dijkstra reduces to BFS when all weights are 1.',
      ],
      timeComplexity: 'Θ((V+E) log V)',
      spaceComplexity: 'Θ(V)',
    },
  },
};

export default dijkstra;
