import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Topological sort of: 5→2, 5→0, 4→0, 4→1, 2→3, 3→1. List valid orderings.',
  hint: 'Use Kahn\'s algorithm: compute in-degrees, enqueue nodes with 0 in-degree, process queue.',
  explanation: {
    simple: {
      overview: 'Topological sort orders vertices in a DAG so every edge points from earlier to later in the sequence.',
      analogy: 'Course prerequisites: you must take Calculus before Linear Algebra.',
      steps: [
          'Kahn\'s BFS: count in-degrees; push 0-in-degree nodes; process, decrement neighbors.',
          'DFS post-order: run DFS; push node to result stack after all descendants are finished.',
          'Reverse the DFS stack to get topological order.',
          'If cycle exists, Kahn\'s algorithm won\'t process all nodes.',
      ],
      visual: 'DAG: A→B→C, A→C. In-degrees: A=0,B=1,C=2. Process A→B→C.',
      commonMistakes: [
          'Running on a graph with cycles (result would miss nodes or be invalid).',
          'Not detecting cycle (cycle = not all nodes processed in Kahn\'s).',
      ],
      practice: [
          'Find a build order given a list of dependencies.',
          'Detect if a course schedule is feasible.',
      ],
      timeComplexity: 'O(V+E)',
      spaceComplexity: 'O(V+E)',
    },
    deepDive: {
      overview: 'Topological sort is foundational for dependency resolution (make, npm), critical path analysis, and data pipeline scheduling.',
      analogy: 'GNU make dependency graph: targets with no prerequisites run first; their dependents run next.',
      steps: [
          'Kahn\'s is BFS-based and naturally detects cycles (leftover nodes = cycle).',
          'DFS-based (post-order) allows lexicographically smallest order with a min-heap.',
          'Strongly Connected Components (Tarjan/Kosaraju) reduce a cyclic graph to a DAG for approximate ordering.',
          'Parallel topological order: process all 0-in-degree nodes simultaneously each \'wave\' — gives critical path length.',
      ],
      visual: 'Parallel: Wave 0: {A}; Wave 1: {B,C}; Wave 2: {D} → critical path = 3 waves',
      commonMistakes: [
          'Kahn\'s with equal priorities: use min-heap for deterministic lexicographic order.',
          'Confusing SCC condensation with topological sort (SCCs themselves can\'t have internal ordering).',
      ],
      practice: [
          'Implement Kahn\'s algorithm; detect and report a cycle.',
          'Find the critical path (longest path) in a DAG using reversed topological order.',
      ],
    },
  },
};

export default overlay;
