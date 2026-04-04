import type { LessonLocaleOverlay } from '../types';

const linearSearch: LessonLocaleOverlay = {
  explanation: {
    simple: {
      overview: 'Linear Search array ke elements ko ek-ek karke check karta hai jab tak target mil na jaye.',
      analogy: 'Jaise unsorted shelf me book dhundhna: har spine ko dekhna padta hai.',
      steps: [
        'index 0 se start karo.',
        'arr[i] ko target se compare karo.',
        'match ho to i return karo.',
        'match na ho to next index par jao.',
        'end tak na mile to not found return karo.',
      ],
      visual: '[7 2 9 4] -> 7 no -> 2 yes (index 1).',
      commonMistakes: [
        'i < n-1 likhkar last element skip kar dena.',
        'empty array case ignore karna.',
        'sorted data par bhi linear search use karna.',
      ],
      practice: [
        'best/worst/average comparisons count karo.',
        'target ke saare indices return karo.',
        'two-end search variant try karo.',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'Linear Search small n ya streaming data ke liye simple aur reliable approach hai.',
      analogy: 'Ek hi pass me data stream read karna jahan rewind possible nahi hai.',
      steps: [
        'Invariant rakho: i se chote indices already checked hain.',
        'Har element ko maximum ek baar compare karo.',
        'Pehle match par early exit karo.',
        'No match ho to n comparisons ke baad finish karo.',
        'Index ya -1 return karo.',
      ],
      visual: 'Checked area left se right grow karta hai.',
      commonMistakes: [
        'float equality bina tolerance ke compare karna.',
        'bahut baar queries hone par hash map consider na karna.',
        'chhote input par unnecessary optimization karna.',
      ],
      practice: [
        'loop invariant ka proof likho.',
        'sentinel technique implement karo.',
        'case-insensitive string search banao.',
      ],
      timeComplexity: 'Theta(n)',
      spaceComplexity: 'Theta(1)',
    },
  },
};

export default linearSearch;
