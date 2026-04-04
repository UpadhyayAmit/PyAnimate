import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Insertion Sort',
  hint: 'Har element ko sorted part mein sahi jagah insert karo.',
  approach: 'Har element ko uski correct sorted position par insert karo, baaki elements ko right shift karke.',
  useCases: [
    'Nearly sorted data par bahut efficient (O(n))',
    'Real-time data jo one-by-one aata hai use sort karna',
    'Small arrays ke liye simple aur fast',
  ],
  explanation: {
    simple: {
      overview: 'Insertion sort aise kaam karta hai jaise cards sort karte ho haath mein — ek ek card sahi position pe daalo.',
      analogy: 'Jaise hand of cards sort karna — ek card uthao, sahi jagah insert karo sorted pile mein.',
      steps: [
        'Index 1 se shuru karo',
        'Current element ko uthao (key)',
        'Pichhe ke sorted elements se compare karo',
        'Bade elements ko aage shift karo aur key insert karo',
      ],
      visual: `[5, 3, 4, 1, 2]
-> [3, 5, 4, 1, 2]
-> [3, 4, 5, 1, 2]
-> [1, 3, 4, 5, 2]
-> [1, 2, 3, 4, 5]`,
      commonMistakes: [
        'Inner loop condition: j >= 0 aur arr[j] > key dono check karo',
        'Off-by-one: range(1, n)',
        'Shift karna nahi bhoolna — simply swap mat karo',
      ],
      practice: [
        'Insertion sort implement karo aur visualize karo',
        'Nearly sorted array pe insertion sort karo — nearly O(n) hai',
      ],
    },
    deepDive: {
      overview: 'Insertion sort online algorithm hai — streaming data pe kaam karta hai, nearly sorted data ke liye O(n) best case.',
      steps: [
        'Best case O(n): already sorted',
        'Worst/Average O(n^2): reverse sorted',
        'Stable sort — equal elements ka order preserve',
        'Binary insertion sort: find position O(log n), shift O(n)',
      ],
      commonMistakes: [
        'Binary insertion sort pe position find O(log n) karta hai, shift still O(n)',
        'Small arrays (n<20) ke liye insertion sort Python sort mein use hota hai',
      ],
      practice: [
        'Binary search se insertion point find karo',
        'Insertion sort linked list pe implement karo',
      ],
    },
  },
};

export default overlay;
