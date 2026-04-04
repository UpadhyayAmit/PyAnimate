import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Recursion की नींव',
  hint: 'Base case और recursive case — हर बड़ी समस्या छोटे sub-problems में टूटती है।',
  approach: 'Base case define करो (recursion stop कहाँ हो), फिर problem को smaller version पर call करो।',
  useCases: [
    'Tree/graph traversal',
    'Divide and conquer algorithms (merge sort, quicksort)',
    'Mathematical sequences (fibonacci, factorial)',
  ],
  explanation: {
    simple: {
      overview: 'Recursion woh hai jab function khud ko call karta hai, base case aur recursive case chahiye.',
      analogy: 'Jaise Russian nesting dolls—andar wali doll bhi same shape ki smaller doll hai, sabse chhoti nahi khul sakti.',
      steps: [
        'Base case define karo (kab rokein)',
        'Problem chhoti karne wala recursive case define karo',
        'Ensure karo ki recursion mein problem chhoti hoti hai',
        'Hamesha base case ki taraf badho',
      ],
      visual: `def factorial(n):
    if n == 0: return 1      # base
    return n * factorial(n-1) # recursive
factorial(3)=3*2*1*1=6`,
      commonMistakes: [
        'Base case bhool jana → infinite recursion',
        'Recursion reduction galat likhna',
        'sys.setrecursionlimit exceed karna RuntimeError',
      ],
      practice: [
        'Recursion se sum, factorial, fibonacci implement karo',
        'Recursion se binary search implement karo',
      ],
      timeComplexity: 'Problem par depends karta hai',
      spaceComplexity: 'O(n) call stack depth ke liye'
    },
    deepDive: {
      overview: 'Python default recursion depth 1000 hai, tail recursion optimize nahi hota, iterative ya @lru_cache use karo.',
      steps: [
        'Recursion tree se time complexity analyze karo',
        '@lru_cache se overlapping subproblems eliminate karo',
        'Recursion ko explicit stack wale iteration mein convert karo',
        'sys.setrecursionlimit se limit adjust karo (recommended nahi)',
      ],
      commonMistakes: [
        'Repeated computation O(2^n) → memoize karo',
        'Recursion ke space overhead bhool jana',
      ],
      practice: [
        '@lru_cache ke saath aur bina fib() ka time compare karo',
        'Recursive file system traversal implement karo',
      ],
    },
  },
};

export default overlay;
