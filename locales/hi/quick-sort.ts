import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Quick Sort सीखें',
  hint: 'Pivot चुनो, array को partition करो, recursively sort करो।',
  approach: 'Pivot choose करो, smaller elements left में, larger right में partition करो, फिर recursively दोनों halves sort करो।',
  useCases: [
    'General-purpose fast in-place sorting',
    'Cache-friendly होने की वजह से practical applications में best',
    'Large random datasets में average O(n log n)',
  ],
  explanation: {
    simple: {
      overview: 'Quick sort ek pivot select karta hai, chhote ko left aur bade ko right rakhta hai, recursively sort karta hai.',
      analogy: 'Teacher ne class ko kisi ki height ke hisaab se do groups mein bata diya, phir har group sort karo.',
      steps: [
        'Base case: n<=1 toh return',
        'Pivot choose karo (last/random/median)',
        'Less than/equal/greater than teen parts mein batao',
        'Less than aur greater than parts recursively sort karo',
      ],
      visual: `[3,6,8,10,1,2,1] pivot=3
→less=[1,2,1] equal=[3] greater=[6,8,10]
→[1,1,2,3,6,8,10]`,
      commonMistakes: [
        'Worst case consider nahi karna (sorted array mein last element pivot)',
        'Equal elements sirf less ya greater mein jaana unbalanced banata hai',
      ],
      practice: [
        'Random pivot selection implement karo',
        'Lomuto aur Hoare partition compare karo',
      ],
      timeComplexity: 'O(n log n) average, O(n²) worst',
      spaceComplexity: 'O(log n)'
    },
    deepDive: {
      overview: 'Randomized quicksort expected O(n log n), three-way partition duplicates efficiently handle karta hai.',
      steps: [
        'Lomuto partition: simple, O(n) space',
        'Hoare partition: two pointers, kam swaps',
        'Three-way partition (Dutch National Flag) duplicates ke liye',
        'Median-of-three worst case se bachata hai',
      ],
      commonMistakes: [
        'Many duplicates ke liye three-way nahi karna',
        'Linked list par quicksort (suitable nahi)',
      ],
      practice: [
        'Dutch National Flag algorithm implement karo',
        'Three-way quicksort aur standard quicksort duplicate data par compare karo',
      ],
    },
  },
};

export default overlay;
