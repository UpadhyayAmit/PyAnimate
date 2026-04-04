import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Quick Sort',
  hint: 'Pivot chuno, array ko partition karo, recursively sort karo.',
  approach: 'Pivot choose karo, smaller elements left mein, larger right mein partition karo, phir recursively dono halves sort karo.',
  useCases: [
    'General-purpose fast in-place sorting',
    'Cache-friendly hone ki wajah se practical applications mein best',
    'Large random datasets mein average O(n log n)',
  ],
  explanation: {
    simple: {
      overview: 'Quick sort: pivot choose karo, usse chhote elements left mein, bade right mein, phir dono sides recursively sort karo.',
      analogy: 'Jaise class register karo — median height ke student ko pivot banao, chhote left, bade right.',
      steps: [
        'Pivot element choose karo (last/random/median)',
        'Partition: pivot se chhote left, bade right',
        'Dono partitions recursively sort karo',
        'Base case: 0 ya 1 element',
      ],
      visual: `[3,6,8,10,1,2,1] pivot=1
-> [] + [1] + [3,6,8,10,2,1]
-> recursively sort right side`,
      commonMistakes: [
        'Always last element as pivot — worst case O(n^2) on sorted data',
        'Partition logic ke off-by-one errors',
        'Base case bhool jaana (n <= 1)',
      ],
      practice: [
        'Quick sort implement karo',
        'Lomuto vs Hoare partition implement karo',
      ],
    },
    deepDive: {
      overview: 'Random pivot ke saath quick sort average O(n log n) hai aur cache-friendly hai — practical fastest sort.',
      steps: [
        'Average O(n log n), Worst O(n^2) (sorted + bad pivot)',
        'Randomized pivot worst case avoid karta hai practically',
        'Tail call optimization — smaller partition first recursion',
        'Introsort: quicksort + heapsort fallback for worst case',
      ],
      commonMistakes: [
        'Sorted/reverse-sorted data pe naive quicksort O(n^2) hai',
        'Equal elements handle karna — three-way partitioning (Dutch flag)',
      ],
      practice: [
        'Three-way partition implement karo (equal elements efficient)',
        'Kth largest element quickselect se O(n) mein nikalo',
      ],
    },
  },
};

export default overlay;
