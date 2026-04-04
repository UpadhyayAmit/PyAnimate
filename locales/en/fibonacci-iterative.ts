import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Generate the first 15 Fibonacci numbers using only two rolling variables (no list).',
  hint: 'Keep track of prev and curr. Each step: new_curr = prev + curr, then shift: prev = curr, curr = new_curr.',
  explanation: {
    simple: {
      overview: 'Iterative Fibonacci builds up the sequence using two variables, no recursion needed.',
      analogy: 'Leapfrog: always remember only the last two steps you took.',
      steps: [
          'Start with a=0, b=1.',
          'Loop n-1 times: a, b = b, a+b.',
          'After the loop, a holds fib(n).',
      ],
      visual: 'a=0,b=1 → a=1,b=1 → a=1,b=2 → a=2,b=3 → a=3,b=5',
      commonMistakes: [
          'Off-by-one in loop count.',
          'Using a list to store all values when only the last two are needed.',
      ],
      practice: [
          'Print the first 20 Fibonacci numbers.',
          'Find the first Fibonacci number > 1000.',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'Matrix exponentiation computes fib(n) in O(log n) using repeated squaring.',
      analogy: 'Power by squaring: M^n = (M^(n/2))^2 when n is even.',
      steps: [
          'Represent [[1,1],[1,0]]^n; top-left gives fib(n+1).',
          'Use fast matrix multiply with recursion/iteration.',
          'Each squaring doubles progress: log₂(n) multiplications.',
          'Golden ratio formula: fib(n) = round(φ^n / √5) for small n.',
      ],
      visual: '[[1,1],[1,0]]^5 top-left = fib(6) = 8',
      commonMistakes: [
          'Golden ratio method loses precision for large n (float limits).',
          'Forgetting matrix multiplication is O(k³) for k×k matrices.',
      ],
      practice: [
          'Implement matrix exponentiation for fib(1000000) mod prime.',
          'Benchmark iterative vs matrix exponentiation for n=10^6.',
      ],
    },
  },
};

export default overlay;
