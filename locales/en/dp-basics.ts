import type { LessonLocaleOverlay } from '../types';

const dpBasics: LessonLocaleOverlay = {
  explanation: {
    simple: {
      overview: 'Dynamic Programming solves overlapping subproblems by storing their solutions and building the answer from them.',
      analogy: 'Climbing stairs while writing down ways to reach each step so you never recompute.',
      steps: [
        'Define a state representing a subproblem.',
        'Write a recurrence to build the state from smaller states.',
        'Identify and initialize base cases.',
        'Choose top-down with memoization or bottom-up tabulation.',
        'Return the value of the target state.',
      ],
      visual: 'A table gradually fills; each cell depends on earlier cells.',
      commonMistakes: [
        'State that is too large (wastes memory).',
        'Missing base initialization so zeros propagate.',
        'Using recursion without memoization → exponential blowup.',
      ],
      practice: [
        'Solve Fibonacci with memoization and tabulation.',
        'Model coin change and write the recurrence.',
        'Decide row/column iteration based on dependencies.',
      ],
      timeComplexity: 'O(states × transitions)',
      spaceComplexity: 'O(states), often reducible',
    },
    deepDive: {
      overview: 'DP optimizes recursion via caching; success depends on good state design and dependency ordering.',
      analogy: 'Filling a spreadsheet where each cell references earlier cells in dependency order.',
      steps: [
        'Show optimal substructure and overlapping subproblems.',
        'Define transition graph and evaluate in topological order.',
        'Memoize top-down or tabulate bottom-up.',
        'Reduce space by keeping only needed previous layers.',
        'Verify correctness with invariants per filled cell.',
      ],
      visual: 'Dependency DAG of states; topo order yields valid fills.',
      commonMistakes: [
        'Mixing 0/1-based indices and reading uninitialized cells.',
        'Overfitting state and missing a dimension that breaks recurrence.',
        'Ignoring modulo requirements when outputs must be bounded.',
      ],
      practice: [
        'Derive LIS DP and reduce to O(n log n) with binary search.',
        'Implement knapsack with rolling arrays.',
        'Draw dependency graph for edit distance and justify iteration order.',
      ],
      timeComplexity: 'Θ(states × transitions)',
      spaceComplexity: 'Θ(states) before optimization',
    },
  },
};

export default dpBasics;
