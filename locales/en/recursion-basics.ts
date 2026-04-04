import type { LessonLocaleOverlay } from '../types';

const recursionBasics: LessonLocaleOverlay = {
  explanation: {
    simple: {
      overview: 'Recursion is a function calling itself with a smaller input until a base case stops.',
      analogy: 'Russian nesting dolls: each opens to a smaller one until the tiniest base case.',
      steps: [
        'Define a base case that returns immediately.',
        'Make progress toward the base case each call.',
        'Assume the recursive call solves the smaller problem.',
        'Combine the smaller result to form the answer.',
        'Return; unwinding builds the final result.',
      ],
      visual: 'Call stack grows down to base, then unwinds upward.',
      commonMistakes: [
        'Missing or unreachable base case (infinite recursion).',
        'Not reducing problem size every call.',
        'Blowing the stack on large inputs.',
      ],
      practice: [
        'Write factorial recursively and trace n=4.',
        'Convert a loop to recursion and compare clarity.',
        'Add memoization to naive Fibonacci and time it.',
      ],
      timeComplexity: 'Depends on recurrence; stack space = depth',
      spaceComplexity: 'O(depth)',
    },
    deepDive: {
      overview: 'Recursion encodes self-similarity; correctness often follows induction.',
      analogy: 'Induction proof: base case then assume n-1 to prove n.',
      steps: [
        'Identify recurrence and base cases.',
        'Memoize overlapping subproblems when present.',
        'Note tail vs non-tail recursion; tail may be optimized.',
        'Analyze recursion tree for time/space.',
        'Convert to iteration with an explicit stack when needed.',
      ],
      visual: 'Recursion tree; leaves are bases; internal nodes combine results.',
      commonMistakes: [
        'Using recursion when iteration is simpler/faster.',
        'Mutating shared state across calls unexpectedly.',
        'Assuming tail-call optimization exists when it may not.',
      ],
      practice: [
        'Draw recursion tree for Fibonacci and count calls.',
        'Refactor DFS recursion into an explicit stack loop.',
        'Prove correctness of a recursive algorithm by induction.',
      ],
      timeComplexity: 'From recurrence (e.g., T(n)=aT(n/b)+f(n))',
      spaceComplexity: 'Θ(depth)',
    },
  },
};

export default recursionBasics;
