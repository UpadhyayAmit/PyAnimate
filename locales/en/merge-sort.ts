import type { LessonLocaleOverlay } from '../types';

const mergeSort: LessonLocaleOverlay = {
  explanation: {
    simple: {
      overview: 'Merge Sort splits the array, sorts each half, then merges the sorted halves.',
      analogy: 'Shuffling two sorted decks into one by always picking the smaller top card.',
      steps: [
        'Divide array into left and right halves until size 1.',
        'Recursively sort each half.',
        'Merge: walk both halves with pointers, take the smaller each step.',
        'Copy merged result back.',
        'Return the combined sorted array.',
      ],
      visual: 'Recursion tree halves the list; merge step interleaves two sorted rows.',
      commonMistakes: [
        'Missing the base case (length ≤ 1).',
        'Forgetting to append remaining tail elements during merge.',
        'Allocating fresh buffers repeatedly instead of reusing.',
      ],
      practice: [
        'Trace merge sort on [5,2,4,6,1,3] writing each merge output.',
        'Explain why merge sort is stable and when stability matters.',
        'Compute recursion tree height and extra memory needed.',
      ],
      timeComplexity: 'O(n log n)',
      spaceComplexity: 'O(n) auxiliary for merge buffer',
    },
    deepDive: {
      overview: 'Merge Sort guarantees O(n log n) regardless of input and stays stable; it trades memory for predictability.',
      analogy: 'Balanced binary tree of merges: each level costs O(n); there are log₂ n levels.',
      steps: [
        'Split with mid = (l + r) // 2; sort [l, mid) and [mid, r).',
        'Merge using two cursors i, j; append smaller to buffer.',
        'After loop, append remaining from either half.',
        'Alternate buffers per level to reduce copying.',
        'Choose left element first on equals to preserve stability.',
      ],
      visual: 'Levels: n → n/2 → n/4 …; merges combine siblings upward.',
      commonMistakes: [
        'Off-by-one mid with odd lengths.',
        'Breaking stability by picking right element first on ties.',
        'Allocating new buffers in every recursive call.',
      ],
      practice: [
        'Derive T(n)=2T(n/2)+O(n) via Master theorem.',
        'Implement bottom-up iterative merge sort and compare memory.',
        'Add insertion-sort cutoff for small runs and measure speed.',
      ],
      timeComplexity: 'Θ(n log n)',
      spaceComplexity: 'Θ(n) (or Θ(1) for linked lists)',
    },
  },
};

export default mergeSort;
