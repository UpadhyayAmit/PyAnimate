import type { LessonLocaleOverlay } from '../types';

const bfs: LessonLocaleOverlay = {
  explanation: {
    simple: {
      overview: 'Breadth-First Search explores neighbors level by level using a queue.',
      analogy: 'Ripples from a stone: distance 1 first, then distance 2, and so on.',
      steps: [
        'Enqueue start node; mark visited.',
        'While queue not empty:',
        'Dequeue u; process it.',
        'Enqueue each unvisited neighbor v of u; mark visited.',
        'Repeat until queue empty.',
      ],
      visual: 'Layered rings from the start; queue holds the current frontier.',
      commonMistakes: [
        'Marking visited after enqueue, causing duplicates.',
        'Using a stack (that becomes DFS).',
        'Not resetting visited between runs.',
      ],
      practice: [
        'Run BFS on a small graph and record order + parent tree.',
        'Find shortest path in an unweighted graph and reconstruct it.',
        'Adapt to grid movement (4- or 8-direction).',
      ],
      timeComplexity: 'O(V + E)',
      spaceComplexity: 'O(V) for queue + visited',
    },
    deepDive: {
      overview: 'BFS yields shortest-path tree on unweighted graphs and tests bipartite graphs via level parity.',
      analogy: 'Expanding frontiers; each expansion only touches the previous layer’s edges.',
      steps: [
        'Maintain queue of frontier nodes; store dist and parent.',
        'Pop u, relax edges to undiscovered neighbors v.',
        'Set dist[v] = dist[u] + 1, parent[v] = u.',
        'Use dist parity to 2-color for bipartite test.',
        'Early-exit when target is dequeued for single-source/single-target shortest path.',
      ],
      visual: 'Frontier rings; parents form a breadth-first tree.',
      commonMistakes: [
        'Using adjacency matrix on sparse graphs (O(V²)).',
        'Re-queuing nodes when shorter paths aren’t possible in unweighted graphs.',
        'Mixing directed/undirected visited logic.',
      ],
      practice: [
        'Prove correctness via induction on layers.',
        'Seed queue with multiple sources for multi-source BFS.',
        'Count connected components with repeated BFS runs.',
      ],
      timeComplexity: 'Θ(V+E)',
      spaceComplexity: 'Θ(V)',
    },
  },
};

export default bfs;
