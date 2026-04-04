import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Implement recursive Fibonacci. Check fib(10) and fib(35). Notice the time difference.',
  hint: 'Add memoization via a dict cache. The call tree fan-out from 2^n to n is dramatic.',
  explanation: {
    simple: {
      overview: 'Recursive Fibonacci computes fib(n) = fib(n-1) + fib(n-2) following the mathematical definition directly.',
      analogy: 'Asking two friends for help, each of whom asks two more friends — the work explodes exponentially.',
      steps: [
          'Base cases: fib(0)=0, fib(1)=1.',
          'Recursive case: return fib(n-1) + fib(n-2).',
          'Each call spawns two more until base cases hit.',
      ],
      visual: 'fib(4) → fib(3)+fib(2) → (fib(2)+fib(1))+(fib(1)+fib(0)) → ...',
      commonMistakes: [
          'Missing base cases causing infinite recursion.',
          'Not realizing it\'s exponential O(2^n) without memoization.',
      ],
      practice: [
          'Add @functools.lru_cache to make it O(n).',
          'Draw the call tree for fib(5) and count duplicate calls.',
      ],
      timeComplexity: 'O(2^n) naive, O(n) with memoization',
      spaceComplexity: 'O(n) call stack',
    },
    deepDive: {
      overview: 'The naive recursive Fibonacci is the canonical example of overlapping subproblems solved by memoization or DP.',
      analogy: 'Subproblem DAG: instead of a tree, collapse shared nodes to get a graph and compute each once.',
      steps: [
          'Identify that fib(k) is computed C(n,k) times in the naive tree.',
          'Memoization stores results in a dict: if n in cache: return cache[n].',
          'Bottom-up DP fills an array iteratively → eliminates recursion overhead.',
          'Tail-recursive style (with trampoline) avoids stack overflow.',
      ],
      visual: 'Naive tree: 2^n nodes; Memoized DAG: n nodes; savings grow exponentially.',
      commonMistakes: [
          'Applying memoization but still hitting Python recursion limit at n≈1000.',
          'Converting to iterative but missing the space optimization (rolling 2 vars).',
      ],
      practice: [
          'Profile naive fib(40) vs memoized; show 10000× speedup.',
          'Re-implement using sys.setrecursionlimit and compare to iterative.',
      ],
    },
  },
};

export default overlay;
