import type { LessonLocaleOverlay } from '../types';

const selectionSort: LessonLocaleOverlay = {
  explanation: {
    simple: {
      overview: 'Selection Sort scans the unsorted part to pick the smallest element and swaps it into the current position.',
      analogy: 'Lining up by height: find the shortest person and move them to the front, then repeat.',
      steps: [
        'For i from 0 to n-2:',
        'Set minIndex = i.',
        'Scan j from i+1 to n-1; if arr[j] < arr[minIndex], update minIndex.',
        'Swap arr[i] and arr[minIndex] once after the scan.',
        'Prefix [0..i] is sorted after each pass.',
      ],
      visual: '[8 3 5 1] → pick 1 swap with 8 → [1 3 5 8]; next pass picks 3, done.',
      commonMistakes: [
        'Swapping every time a smaller value is found instead of once per pass.',
        'Forgetting Selection Sort is unstable unless you shift instead of swap.',
        'Using > instead of < during min search, flipping order.',
      ],
      practice: [
        'Count comparisons and swaps for n=5 sorted input.',
        'Modify to place max at the end each pass (descending).',
        'Make Selection Sort stable using insertion instead of swap.',
      ],
      timeComplexity: 'O(n²) comparisons, O(n) swaps',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'Selection Sort does n(n-1)/2 comparisons regardless of input order; swaps ≤ n-1.',
      analogy: 'Tournament picking: every element competes to be the minimum for that round.',
      steps: [
        'Invariant: first i elements are the i smallest in sorted order.',
        'Inner loop linearly searches the unsorted suffix for the min.',
        'Single swap places min at boundary i.',
        'Shrink unsorted region by one each pass.',
        'Dual-ended variant can place min and max each pass to reduce passes.',
      ],
      visual: '[sorted | unsorted] boundary moves right each pass.',
      commonMistakes: [
        'Not resetting minIndex every outer pass.',
        'Ignoring stability needs when equal keys matter.',
        'Not handling length < 2 (should be no-op).',
      ],
      practice: [
        'Prove the invariant formally.',
        'Compare swap counts vs Bubble/Insertion Sort on random data.',
        'Implement dual-ended selection and analyze complexity.',
      ],
      timeComplexity: 'Θ(n²) comparisons fixed; swaps ≤ n-1',
      spaceComplexity: 'Θ(1)',
    },
  },
};

export default selectionSort;
