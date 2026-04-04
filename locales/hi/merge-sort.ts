import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Merge Sort सीखें',
  hint: 'Divide करो, conquer करो, merge करो — हर case में O(n log n)।',
  approach: 'Array को recursively half-half में divide करो जब तक single elements न हों, फिर sorted halves को merge करो।',
  useCases: [
    'Large datasets जो disk पर हों (external sorting)',
    'Linked lists sorting (merge sort efficient है यहाँ)',
    'Stable sort जरूरी हो जहाँ',
  ],
  explanation: {
    simple: {
      overview: 'Merge sort array ko half mein toduata hai, recursively sort karta hai, phir do sorted halves merge karta hai. Divide and conquer.',
      analogy: 'Ek shuffled deck ko groups mein batao alag sort karo phir merge karo.',
      steps: [
        'n<=1 toh return karo (base case)',
        'Array ko midpoint par do halves mein batao',
        'Left aur right dono halves recursively sort karo',
        'Do sorted halves ko ek mein merge karo',
      ],
      visual: `[38,27,43,3]
→[38,27] [43,3]
→[27,38] [3,43]
→[3,27,38,43]`,
      commonMistakes: [
        'Merge mein dono pointers advance karna bhool jana',
        'Base case galat likhna (n==0 ki jagah n==1)',
      ],
      practice: [
        'Merge function separately implement karo',
        'Linked list ka merge sort implement karo',
      ],
      timeComplexity: 'O(n log n)',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: 'Merge sort stable aur guaranteed O(n log n) hai, linked list sorting aur external sorting ke liye perfect.',
      steps: [
        'Array recursion depth O(log n) hai',
        'Har level O(n) merge → kul O(n log n)',
        'Bottom-up version stack overflow se bachata hai',
        'External merge sort HDD data ke liye',
      ],
      commonMistakes: [
        'Small devices mein O(n) space memory insufficient ho sakta hai',
        'Chhote subarrays ke liye insertion sort nahi karna constant factor badhata hai',
      ],
      practice: [
        'Bottom-up iterative merge sort implement karo',
        'Merge sort se inversions count karo',
      ],
    },
  },
};

export default overlay;
