import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Merge Sort',
  hint: 'Divide karo, sort karo, merge karo — har case mein O(n log n).',
  approach: 'Array ko recursively half-half mein divide karo jab tak single elements na hon, phir sorted halves ko merge karo.',
  useCases: [
    'Large datasets jo disk par hon (external sorting)',
    'Linked lists sorting (merge sort efficient hai yahan)',
    'Stable sort zaroori ho jahan',
  ],
  explanation: {
    simple: {
      overview: 'Merge sort: array ko half mein divide karo, dono halves sort karo, phir merge karo. Divide and conquer!',
      analogy: 'Jaise do sorted card decks merge karna — dono ke top cards compare karo, chhota uthao.',
      steps: [
        'Array ko do halves mein divide karo',
        'Recursively dono halves sort karo',
        'Two sorted halves ko merge karo',
        'Base case: single element already sorted',
      ],
      visual: `[38,27,43,3] -> [38,27] [43,3]
-> [27,38] [3,43]
-> [3,27,38,43]`,
      commonMistakes: [
        'Merge step mein out-of-bounds — indices carefully handle karo',
        'Extra space O(n) chahiye merge ke liye',
        'Base case bhool jaana',
      ],
      practice: [
        'Merge sort implement karo',
        'Merge step separately implement karo do sorted lists ke liye',
      ],
    },
    deepDive: {
      overview: 'Merge sort guaranteed O(n log n) hai — quicksort ke unlike worst case O(n^2) nahi hota.',
      steps: [
        'Time: O(n log n) always, Space: O(n)',
        'Stable sort — equal elements ka order preserve',
        'External sorting ke liye ideal (large files)',
        'Bottom-up iterative merge sort O(1) extra space possible',
      ],
      commonMistakes: [
        'In-place merge O(n log^2 n) complex — usually O(n) space use karo',
        'Very small arrays ke liye overhead — hybrid (timsort) better',
      ],
      practice: [
        'Bottom-up iterative merge sort banao',
        'K sorted lists merge karo heap se',
      ],
    },
  },
};

export default overlay;
