import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Recursive Fibonacci implement karo. fib(10) aur fib(35) check karo. Time difference notice karo.',
  hint: 'Dict cache se memoization add karo. Call tree fan-out 2^n se n tak aa jaati hai.',
  explanation: {
    simple: {
      overview: 'Fibonacci recursion se — elegant hai lekin slow! fib(n) = fib(n-1) + fib(n-2), yaar ye O(2^n) hai.',
      analogy: 'Jaise family tree mein pata karo — papaji ke papaji ke... — har kisi se seedha puchho lekin sab repeat karte hain.',
      steps: [
        'Base case: fib(0) = 0, fib(1) = 1',
        'Recursive: fib(n) = fib(n-1) + fib(n-2)',
        'Simple lekin slow — fib(50) practically hang ho jaata hai',
        'Memoize karo speed ke liye',
      ],
      visual: `fib(5)
+-- fib(4)
|   +-- fib(3)
|   |   +-- fib(2)...
|   +-- fib(2)  <- DUPLICATE!
+-- fib(3)      <- DUPLICATE!`,
      commonMistakes: [
        'Memoization ke bina large n — exponential time',
        'fib(0) = 0 ya 1? Convention important',
        'Stack overflow for large n',
      ],
      practice: [
        '@functools.lru_cache se memoized recursive Fibonacci banao',
        'Call tree draw karo fib(5) ke liye — duplicates dekho',
      ],
    },
    deepDive: {
      overview: 'Recursive Fibonacci O(2^n) vs memoized O(n) vs iterative O(n) O(1) space vs matrix O(log n).',
      steps: [
        '@lru_cache decorator se O(1) extra code mein memoization',
        'sys.setrecursionlimit() se limit badhao carefully',
        'Tail recursion Python optimize nahi karta',
        'functools.cache (Python 3.9+) simpler than lru_cache',
      ],
      commonMistakes: [
        'sys.setrecursionlimit() kaam karta hai par stack memory bound hai',
        'lru_cache memory leak ho sakta hai long-running programs mein',
      ],
      practice: [
        'Fibonacci with memoization vs without compare karo timing',
        'Generator se infinite Fibonacci stream banao',
      ],
    },
  },
};

export default overlay;
