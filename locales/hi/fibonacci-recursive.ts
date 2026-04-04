import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Recursive Fibonacci implement करें। fib(10) और fib(35) check करें। Time difference notice करें।',
  hint: 'Dict cache से memoization add करें। Call tree fan-out 2^n से n पर आ जाती है।',
  explanation: {
    simple: {
      overview: 'Recursive Fibonacci: f(n)=f(n-1)+f(n-2). Simple lekin exponential time, memoization chahiye.',
      analogy: 'Jaise family tree—har insaan parents se information leta hai.',
      steps: [
        'Base cases: f(0)=0, f(1)=1',
        'Warna: return f(n-1)+f(n-2)',
        'Yeh O(2^n) hai—bahut slow',
        '@lru_cache se O(n) mein improve karo',
      ],
      visual: `fib(4)
├─fib(3)         fib(2)
│  ├─fib(2) fib(1) ├─fib(1) fib(0)`,
      commonMistakes: [
        'Bade n ke liye memoization ke bina use karna',
        'Base cases 0 ya negative numbers galat handle karna',
      ],
      practice: [
        'fib() ko @functools.lru_cache se decorate karo',
        'Bina memoization/memoization ke saath/iterative ka time compare karo',
      ],
      timeComplexity: 'O(2^n) bina memoization, O(n) saath mein',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: 'Memoization O(n), iterative O(1) space, matrix exponentiation O(log n).',
      steps: [
        'Memoization: @lru_cache se O(n) calls',
        'Bottom-up DP: list O(n) time space',
        'Space optimized: two variable rolling O(1)',
        'Matrix method: [[1,1],[1,0]]^n O(log n)',
      ],
      commonMistakes: [
        'Recursion tree analyze kiye bina memoization ki value nahi samajhna',
        'Bade n ke liye sys.setrecursionlimit bhool jana',
      ],
      practice: [
        'Memoized aur tabulated implementations clearly likho',
        'n-th Fibonacci modulo p nikalo',
      ],
    },
  },
};

export default overlay;
