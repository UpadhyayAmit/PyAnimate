import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Factorial iteratively implement karo. Verify karo: 0!=1, 5!=120, 10!=3628800.',
  hint: 'product=1 se start karo, 1 se n tak har number se multiply karo. n=0 ko special case handle karo.',
  explanation: {
    simple: {
      overview: 'n! = n x (n-1) x ... x 1. Yaar, ye combinatorics ka base hai — permutations calculate karne mein kaam aata hai.',
      analogy: 'Jaise 5 logo ko line mein arrange karo — 5! = 120 tariqe hain.',
      steps: [
        '0! = 1 (base case)',
        '1 se n tak multiply karo',
        'Ya recursion: factorial(n) = n * factorial(n-1)',
        'math.factorial() built-in use karo production mein',
      ],
      visual: `def factorial(n):
    result = 1
    for i in range(1, n+1):
        result *= i
    return result

factorial(5)  # 120`,
      commonMistakes: [
        'Negative numbers ke liye factorial undefined hai',
        '0! = 1 bhool jaana',
        'Large numbers mein stack overflow — iterative use karo',
      ],
      practice: [
        'Recursive aur iterative dono se banao',
        'nCr (combinations) factorial se calculate karo',
      ],
    },
    deepDive: {
      overview: 'Python integers arbitrary precision ke hain — factorial(100) bhi exactly calculate hota hai.',
      steps: [
        'math.factorial() C mein implement hai — fastest option',
        'Memoization se repeated calls cache karo',
        'Stirling approximation large n ke liye: n! approx sqrt(2*pi*n)*(n/e)^n',
        'Gamma function: factorial(n) = gamma(n+1)',
      ],
      commonMistakes: [
        'sys.setrecursionlimit() bhi RAM bounded hai',
        'Floating point se large factorials — precision loss',
      ],
      practice: [
        '@lru_cache se memoized factorial banao',
        'Trailing zeros count karo n! mein (factor of 10 = 2x5)',
      ],
    },
  },
};

export default overlay;
