import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Implement factorial iteratively. Then verify: 0! = 1, 5! = 120, 10! = 3628800.',
  hint: 'Start product=1, multiply by each number from 1 to n. Handle n=0 as a special case.',
  explanation: {
    simple: {
      overview: 'Factorial n! = n × (n-1) × ... × 1 for n≥1; 0! = 1 by convention.',
      analogy: 'Counting arrangements of n cards: n choices for first, n-1 for second, and so on.',
      steps: [
          'Check base case: if n == 0: return 1.',
          'Otherwise: return n * factorial(n-1).',
          'Iterative version: start result=1, multiply 1..n.',
      ],
      visual: '4! = 4×3×2×1 = 24',
      commonMistakes: [
          'Not handling n=0 (should be 1).',
          'Stack overflow for large n in recursive version (use iterative or math.factorial).',
      ],
      practice: [
          'Compute 10! manually then verify with math.factorial.',
          'Find how many trailing zeros 100! has (hint: count factors of 5).',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n) recursive (stack), O(1) iterative',
    },
    deepDive: {
      overview: 'Python\'s math.factorial uses lookup tables and fast multiplication for large n.',
      analogy: 'GMP (GNU Multi-Precision) library: split factorial into prime factors and use fast power strategies.',
      steps: [
          'Recursive: T(n)=T(n-1)+O(n-digits) due to big int multiplication.',
          'Iterative with big ints: ~O(n² log n) due to growing number size.',
          'Stirling approximation: n! ≈ √(2πn)·(n/e)^n for estimation.',
          'math.factorial delegates to C for speed.',
      ],
      visual: 'log(n!) ≈ n·log(n) - n (Stirling) — useful for overflow-safe log-probability computations.',
      commonMistakes: [
          'Calling recursive factorial on n>1000 (Python recursion limit).',
          'Using factorial for combinations when math.comb is available.',
      ],
      practice: [
          'Compute log(n!) using math.lgamma for large n.',
          'Compare recursive vs iterative timing for n=500.',
      ],
    },
  },
};

export default overlay;
