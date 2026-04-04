import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Counting Sort',
  hint: 'Chhoti range ke integers ko O(n+k) mein sort karo — frequency count se.',
  approach: 'Input values ko count array mein count karo, phir counts se sorted output reconstruct karo.',
  useCases: [
    'Small range ke integers sort karna (jaise grades 0-100)',
    'Radix sort ka base algorithm',
    'Jab O(n+k) possible ho O(n log n) ki jagah',
  ],
  explanation: {
    simple: {
      overview: 'Counting sort: comparison nahi karta — count array banata hai aur reconstruct karta hai. O(n+k) hai!',
      analogy: 'Jaise votes count karna — pehle har candidate ke votes count karo, phir winner announce karo.',
      steps: [
        'Maximum value (k) find karo',
        'Count array [0]*(k+1) banao',
        'Har element ke count increment karo',
        'Count array se sorted array reconstruct karo',
      ],
      visual: `[4,2,2,8,3,3,1]
count: index=value, value=frequency
-> [1,2,2,3,3,4,8]`,
      commonMistakes: [
        'Negative numbers directly handle nahi hote — offset use karo',
        'Very large k pe O(k) space wasteful hoga',
        'Stable version ke liye prefix sum approach use karo',
      ],
      practice: [
        'Counting sort implement karo',
        'Stable counting sort implement karo (prefix sum)',
      ],
    },
    deepDive: {
      overview: 'Counting sort O(n+k) hai lekin k small integer range pe hi kaam karta hai — radix sort ka building block.',
      steps: [
        'Time O(n+k), Space O(k) — k is value range',
        'Stable counting sort prefix sum se: position = prefix[val]-1',
        'Radix sort: counting sort on each digit',
        'Distribution sort category mein — comparison nahi karta',
      ],
      commonMistakes: [
        'k >> n hone par wasteful — use hash-based counting',
        'Non-integer ya large range data pe counting sort mat use karo',
      ],
      practice: [
        'Radix sort using counting sort on each digit implement karo',
        'Stable counting sort implement karo for objects with keys',
      ],
    },
  },
};

export default overlay;
