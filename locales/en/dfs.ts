import type { LessonLocaleOverlay } from '../types';

const dfs: LessonLocaleOverlay = {
  explanation: {
    simple: {
      overview: 'Depth-First Search explores as far as possible along each branch before backtracking.',
      analogy: 'Walking a maze: follow one corridor to the end, backtrack, try the next.',
      steps: [
        'Start at node; mark visited.',
        'For each neighbor:',
        'If unvisited, DFS(neighbor).',
        'Backtrack when no unvisited neighbors remain.',
        'Record order if needed (pre/post).',
      ],
      visual: 'Recursive call stack forms a path; unwinds on backtrack.',
      commonMistakes: [
        'Marking visited after the recursive call (creates cycles).',
        'Deep recursion on huge graphs without iterative fallback.',
        'Confusing pre-order vs post-order uses.',
      ],
      practice: [
        'List discovery/finish times on a small directed graph.',
        'Detect a cycle in a directed graph with colors (white/gray/black).',
        'Topologically sort using DFS post-order.',
      ],
      timeComplexity: 'O(V + E)',
      spaceComplexity: 'O(V) recursion/stack',
    },
    deepDive: {
      overview: 'DFS powers topological sort, articulation points, bridges, and SCC algorithms.',
      analogy: 'Timestamped walk that records entry and exit of each node.',
      steps: [
        'Assign discovery time on entry, finish time on exit.',
        'Classify edges (tree, back, forward, cross) via timestamps.',
        'Compute low-link values for articulation points/bridges (Tarjan).',
        'SCC: Kosaraju/Tarjan rely on DFS orderings.',
        'Iterative version uses explicit stack to avoid recursion limits.',
      ],
      visual: 'DFS tree with back edges; times on nodes.',
      commonMistakes: [
        'Misclassifying edges in undirected graphs (only back edges).',
        'Not resetting global timers between runs.',
        'Stack overflow risk on large graphs; prefer iterative.',
      ],
      practice: [
        'Implement iterative DFS and compare order.',
        'Find bridges in an undirected graph using low-link.',
        'Topologically sort a DAG via descending finish times.',
      ],
      timeComplexity: 'Θ(V+E)',
      spaceComplexity: 'Θ(V)',
    },
  },
};

export default dfs;
