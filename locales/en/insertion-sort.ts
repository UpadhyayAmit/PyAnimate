import type { LessonLocaleOverlay } from '../types';

const insertionSort: LessonLocaleOverlay = {
  explanation: {
    simple: {
      overview: 'Insertion Sort builds a sorted prefix, inserting each new element into its correct spot within that prefix.',
      analogy: 'Sorting a hand of cards: slide the new card left until it fits.',
      steps: [
        'Treat the first element as sorted.',
        'For i from 1..n-1, set key = arr[i].',
        'Shift larger prefix elements right until key fits.',
        'Place key at j+1 where the gap opened.',
        'Repeat until all elements are inserted.',
      ],
      visual: '[5 | 2 4 6 1] → insert 2 → [2 5 | 4 6 1] → insert 4 → [2 4 5 | 6 1] …',
      commonMistakes: [
        'Swapping instead of shifting (extra writes).',
        'Forgetting to store key before shifting, losing the value.',
        'Loop bounds that let j go -1 without handling the stop.',
      ],
      practice: [
        'Simulate on nearly sorted input and count comparisons.',
        'Explain why insertion sort is stable.',
        'Sort descending and confirm complexity stays the same.',
      ],
      timeComplexity: 'O(n²) worst, O(n) best on sorted input',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'Insertion Sort is adaptive and stable; great for small or nearly sorted data and used as a cutoff in hybrids.',
      analogy: 'Maintaining an ordered notebook by slipping each new page into its correct slot.',
      steps: [
        'Invariant: prefix [0..i-1] is sorted before processing i.',
        'key = arr[i]; j = i - 1.',
        'While j ≥ 0 and arr[j] > key, shift arr[j] right.',
        'Place key at j+1 once the gap is found.',
        'Advance i; invariant is preserved.',
      ],
      visual: 'Pointer j walks left; gap shifts right until key drops in.',
      commonMistakes: [
        'Using ≥ and breaking stability.',
        'Skipping sentinel optimization on mostly sorted data.',
        'Recursing deeply instead of iterative loop, risking stack issues.',
      ],
      practice: [
        'Prove the invariant formally.',
        'Binary-search the insertion point (fewer comparisons, same moves).',
        'Benchmark vs quicksort with a small-n cutoff.',
      ],
      timeComplexity: 'Moves O(n²); comparisons O(n²) or O(n log n) with binary-search insertion',
      spaceComplexity: 'Θ(1)',
    },
  },
};

export default insertionSort;
