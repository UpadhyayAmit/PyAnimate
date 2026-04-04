import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Factorial iteratively implement करें। Verify करें: 0!=1, 5!=120, 10!=3628800।',
  hint: 'product=1 से start करें, 1 से n तक हर number से multiply करें। n=0 को special case handle करें।',
  explanation: {
    simple: {
      overview: 'n ka factorial (n!) 1 se n tak saare positive integers ka product hai, jaise 5!=120.',
      analogy: 'n logon ko line mein arrange karne ke tarike—har position par choices kam hoti jaati hain.',
      steps: [
        'Base case: 0!=1, 1!=1',
        'n>1: n! = n × (n-1)!',
        'Iterative: result=1; for i in range(2,n+1): result*=i',
        'Ya math.factorial() use karo',
      ],
      visual: `5! = 5×4×3×2×1 = 120
4! = 24
0! = 1 (defined)`,
      commonMistakes: [
        '0!=1 base case bhool jana',
        'Bade n ke liye recursion stack overflow',
      ],
      practice: [
        'Binomial coefficient C(n,k)=n!/(k!(n-k)!) calculate karo',
        'Iterative aur recursive factorial compare karo',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1) iterative, O(n) recursive'
    },
    deepDive: {
      overview: 'math.factorial() C mein implement hai, bade n ke liye tree-decomposition multiplication use karta hai.',
      steps: [
        'Python mein tail recursion optimize nahi hota (iterative use karo)',
        'Factorial kisi bhi exponential se faster grow karta hai',
        'Modular factorial ke liye Wilson theorem',
        'Symbolic computation ke liye sympy.factorial()',
      ],
      commonMistakes: [
        'Bade n ke liye caching ke bina recursion',
        'Python arbitrary precision integers integer overflow nahi karte',
      ],
      practice: [
        'functools.reduce() se factorial implement karo',
        '100! mein trailing zeros count karo',
      ],
    },
  },
};

export default overlay;
