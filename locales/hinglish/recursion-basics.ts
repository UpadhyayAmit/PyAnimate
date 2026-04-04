import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Recursion ki Neenv',
  hint: 'Base case aur recursive case — badi problem choti sub-problems mein tooti hai.',
  approach: 'Base case define karo (recursion stop kahan ho), phir problem ko smaller version par call karo.',
  useCases: [
    'Tree/graph traversal',
    'Divide and conquer algorithms (merge sort, quicksort)',
    'Mathematical sequences (fibonacci, factorial)',
  ],
  explanation: {
    simple: {
      overview: 'Recursion — function khud aapne aap ko call karta hai. Base case zaroor rakho warna infinite loop!',
      analogy: 'Jaise Russian dolls — badi doll kholte ho, andar chhoti doll hai, phir aur chhoti...',
      steps: [
        'Base case define karo — yahan recursion stop hogi',
        'Recursive case: problem ko smaller version mein todna',
        'Har call progress toward base case honi chahiye',
        'Return values chain karo',
      ],
      visual: `def factorial(n):
    if n == 0: return 1  # base case
    return n * factorial(n-1)  # recursive case

factorial(3) -> 3*factorial(2) -> 3*2*1 = 6`,
      commonMistakes: [
        'Base case bhool jaana — infinite recursion',
        'Base case galat hona — stack overflow',
        'Return bhool jaana recursive call se',
      ],
      practice: [
        'Factorial recursion se banao',
        'Power function x^n recursion se banao',
      ],
    },
    deepDive: {
      overview: 'Python recursion depth limit ~1000 hai — deep recursion ke liye iterative ya sys.setrecursionlimit() use karo.',
      steps: [
        'Call stack: har recursive call stack frame use karta hai',
        'Tail recursion Python mein optimize nahi hota',
        'Memoization se overlapping subproblems cache karo',
        'Tree/graph traversal recursion natural fit hai',
      ],
      commonMistakes: [
        'Deep recursion pe RecursionError — iterative convert karo',
        'Mutable default args in recursive functions dangerous',
      ],
      practice: [
        'Recursive binary search implement karo',
        'Tree height recursive se nikalo',
      ],
    },
  },
};

export default overlay;
