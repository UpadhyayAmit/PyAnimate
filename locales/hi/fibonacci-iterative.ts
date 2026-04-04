import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'सिर्फ दो rolling variables से (list के बिना) पहले 15 Fibonacci numbers generate करें।',
  hint: 'prev और curr track करें। हर step: new_curr = prev + curr, फिर shift: prev = curr, curr = new_curr।',
  explanation: {
    simple: {
      overview: 'Fibonacci sequence mein har number previous do numbers ka sum hai: 0,1,1,2,3,5,8,13...',
      analogy: 'Jaise khargosh population growth—har generation pichli do generations ka total hai.',
      steps: [
        'a=0, b=1 initialize karo',
        'Loop mein c = a + b calculate karo',
        'a = b, b = c update karo',
        'n times repeat karo nth term ke liye',
      ],
      visual: `a,b = 0,1
for _ in range(8):
    print(a)
    a,b = b, a+b
# 0 1 1 2 3 5 8 13`,
      commonMistakes: [
        'Naive indexing bade n ke liye ghobsi jaata hai',
        'Index (position) aur value ka confusion',
      ],
      practice: [
        'Pehle 20 Fibonacci numbers generate karo',
        'Verify karo ki koi number Fibonacci sequence mein hai',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'Matrix exponentiation O(log n) Fibonacci deta hai, Binet formula closed-form solution.',
      steps: [
        'Iterative: O(n) time O(1) space—practically best',
        'Memoization/DP: O(n) time O(n) space',
        'Matrix power: [[1,1],[1,0]]^n O(log n)',
        'Binet\'s formula: fib(n)=round(φⁿ/√5) (sirf chhote n ke liye accurate)',
      ],
      commonMistakes: [
        'Caching ke bina naive recursion O(2^n) hai—use mat karo',
        'Binet\'s formula bade n ke liye floating point errors deti hai',
      ],
      practice: [
        '@lru_cache ke saath fib() implement karo',
        'Fibonacci aur golden ratio ka relationship explore karo',
      ],
    },
  },
};

export default overlay;
