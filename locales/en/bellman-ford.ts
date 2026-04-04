import type { LessonLocaleOverlay } from '../types';

const bellmanFord: LessonLocaleOverlay = {
  explanation: {
    simple: {
      overview: 'Bellman–Ford computes single-source shortest paths with negative edges and detects negative cycles.',
      analogy: 'Tightening slack ropes with repeated passes; if a rope keeps shrinking, there is a bad loop.',
      steps: [
        'Initialize dist[source]=0, others=∞.',
        'Repeat V-1 times: for each edge (u,v,w), relax dist[v] = min(dist[v], dist[u]+w).',
        'Keep parent[v] for paths.',
        'Run one extra pass; if any edge relaxes, a negative cycle exists.',
        'Report distances or negative cycle.',
      ],
      visual: 'Distances shrink over passes; further shrinkage signals a negative cycle.',
      commonMistakes: [
        'Stopping early without checking for negative cycles.',
        'Iterating fewer than V-1 times and missing long paths.',
        'Using Bellman–Ford when all weights are non-negative (Dijkstra is faster).',
      ],
      practice: [
        'Run on a graph with a negative edge but no negative cycle.',
        'Create a graph with a negative cycle and show detection.',
        'Measure early-stop optimization effects.',
      ],
      timeComplexity: 'O(V·E)',
      spaceComplexity: 'O(V)',
    },
    deepDive: {
      overview: 'Bellman–Ford is dynamic programming over path length; iteration k considers paths up to k edges.',
      analogy: 'Filling a table of best distances by path length; values only decrease.',
      steps: [
        'For k = 1..V-1 relax all edges using dist from k-1.',
        'Early-exit if an iteration makes no changes.',
        'Extra iteration flags reachable negative cycles.',
        'Mark vertices in or reachable from negative cycles as undefined.',
        'Optimize by skipping edges whose source wasn’t updated last round.',
      ],
      visual: 'Table of distances per iteration monotonically decreasing.',
      commonMistakes: [
        'Not handling unreachable nodes (dist stays ∞).',
        'Confusing Bellman–Ford with all-pairs (that’s Floyd–Warshall).',
        'Failing to reset change flag each pass.',
      ],
      practice: [
        'Prove correctness by induction on path length.',
        'Implement SPFA variant and discuss worst case.',
        'Detect which vertices are part of a negative cycle.',
      ],
      timeComplexity: 'Θ(V·E)',
      spaceComplexity: 'Θ(V)',
    },
  },
};

export default bellmanFord;
