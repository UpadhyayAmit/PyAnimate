import type { LessonLocaleOverlay } from '../types';

const linearSearch: LessonLocaleOverlay = {
  explanation: {
    simple: {
      overview: 'Linear Search array ko line by line scan karta hai jab tak target mil na jaye.',
      analogy: 'Unsorted shelf me book dhoondhne jaisa: har item check karna padega.',
      steps: [
        'index 0 se start karo.',
        'arr[i] ko target se compare karo.',
        'equal ho to i return karo.',
        'warna next index pe jao.',
        'array end tak target na mile to not found return karo.',
      ],
      visual: '[7 2 9 4] -> 7 no -> 2 yes (index 1).',
      commonMistakes: [
        'loop condition galat rakhna aur last element skip kar dena.',
        'empty array handle na karna.',
        'sorted input pe bhi linear search use karna.',
      ],
      practice: [
        'best/worst/average comparisons nikaalo.',
        'target ke multiple indices return karo.',
        'both-end scan approach compare karo.',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'Linear Search low-overhead approach hai, small datasets aur streams ke liye practical hai.',
      analogy: 'Single pass stream read jahan rewind option nahi hota.',
      steps: [
        'Invariant: i se pehle wale indices already checked hain.',
        'Har element maximum ek baar compare hota hai.',
        'Match milte hi early return karo.',
        'No match case me n comparisons tak process chalta hai.',
        'Index ya -1 return karo.',
      ],
      visual: 'Checked region left se right progressively bada hota hai.',
      commonMistakes: [
        'float compare direct equality se karna.',
        'frequent lookup use case me hash structure ignore karna.',
        'tiny input ke liye over-engineering karna.',
      ],
      practice: [
        'loop invariant proof likho.',
        'sentinel optimization implement karo.',
        'case-insensitive linear string search likho.',
      ],
      timeComplexity: 'Theta(n)',
      spaceComplexity: 'Theta(1)',
    },
  },
};

export default linearSearch;
