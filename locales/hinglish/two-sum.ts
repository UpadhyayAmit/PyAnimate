import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '[2, 7, 11, 15] mein do indices dhundho jinका sum 9 ho. Phir target=18 ke liye solve karo.',
  hint: 'Hash map use karo: har number ke liye check karo ki (target - num) already stored hai.',
  explanation: {
    simple: {
      overview: 'Array mein do numbers dhundho jinका sum target ke equal ho — hash map se O(n) solution.',
      analogy: 'Jaise do logon ko dhundho jinki ages ka sum 100 ho — ek khojo, complement check karo.',
      steps: [
        'Target - current = complement',
        'Har element ke liye check karo: complement hash map mein hai?',
        'Nahi hai toh element map mein daalo',
        'Mila toh indices return karo',
      ],
      visual: `nums=[2,7,11,15], target=9
2: complement=7 (not in map) -> store {2:0}
7: complement=2 (in map at 0!) -> return [0,1]`,
      commonMistakes: [
        'Same element twice use karna (index same nahi hona chahiye)',
        'Multiple pairs possible case — kya chahiye pehli ya sabhi?',
        'Sorted ya unsorted — approach alag hogi',
      ],
      practice: [
        'Two sum hash map se O(n) solve karo',
        'Two sum sorted array two-pointer se solve karo',
      ],
    },
    deepDive: {
      overview: 'Two sum multiple variations hain — sorted array two-pointer O(n), all pairs, three-sum, four-sum etc.',
      steps: [
        'Hash map approach O(n) time O(n) space',
        'Two-pointer (sorted) O(n) time O(1) space',
        'Three-sum: fix one, two-pointer remaining O(n^2)',
        'Count pairs: hash map se all pairs O(n)',
      ],
      commonMistakes: [
        'Index collisions: same element twice — check i != j',
        'Overflow in other languages (Python mein nahi)',
      ],
      practice: [
        'All two sum pairs find karo (not just one)',
        'Three sum problem solve karo O(n^2) mein',
      ],
    },
  },
};

export default overlay;
