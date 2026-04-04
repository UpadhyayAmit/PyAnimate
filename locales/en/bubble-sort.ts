import type { LessonLocaleOverlay } from '../types';

const bubbleSort: LessonLocaleOverlay = {
  explanation: {
    simple: {
      overview: 'Bubble Sort compares side‑by‑side items and swaps when they are out of order. Each pass pushes the largest remaining item to the end.',
      analogy: 'Think of bubbling air bubbles in water: the biggest bubble rises to the top with each round.',
      steps: [
        'Loop over the list, compare arr[j] and arr[j+1].',
        'Swap if the left item is larger.',
        'After one pass, the largest item is locked at the end.',
        'Shorten the next pass because the tail is already sorted.',
        'Stop early if no swaps occur in a pass.',
      ],
      visual: 'Pass 1: [5,3,8,1,2] → [3,5,1,2,8]; Pass 2 trims the last slot, and so on until sorted.',
      commonMistakes: [
        'Forgetting to reduce the inner-loop bound (wasted comparisons).',
        'Using >= and losing stability when equal items swap.',
        'Not breaking early when a pass makes zero swaps.',
      ],
      practice: [
        'Trace Bubble Sort on an already sorted list and count comparisons with and without early exit.',
        'Show a case where Bubble Sort is stable and explain why.',
        'Modify Bubble Sort to sort descending without changing space complexity.',
      ],
      timeComplexity: 'O(n²) worst/average, O(n) best with early-exit flag',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'Bubble Sort performs n-1 passes; each pass scans adjacent pairs and bubbles the current maximum to its final slot. The inner loop shrinks by one each pass.',
      analogy: 'Like repeatedly sifting pebbles through a tilted sieve—bigger pebbles roll to the bottom each round while smaller ones stay.',
      steps: [
        'Set swapped=false; iterate j from 0 to n-i-2.',
        'Compare arr[j] > arr[j+1]; swap to maintain ascending order.',
        'Track if any swap occurred; if none, the array is sorted (break).',
        'After pass i, positions n-1 down to n-i are finalized.',
        'Continue until i reaches n-2 or an early break fires.',
      ],
      visual:
        'i=0: max→ index n-1; i=1: next max→ index n-2; visualize as a staircase of shrinking scan ranges.',
      commonMistakes: [
        'Recomputing len(arr) inside the inner loop instead of caching n.',
        'Off-by-one: running inner loop to n-i instead of n-i-1 causes out-of-bounds.',
        'Comparing absolute values or different keys than the intended sort key.',
      ],
      practice: [
        'Prove stability formally: show that equal elements never swap because condition is strict >.',
        'Derive the exact comparison count: n(n-1)/2 and show how early-exit changes the bound.',
        'Implement a bidirectional (cocktail) bubble sort and compare swap counts on nearly sorted data.',
      ],
      timeComplexity: 'O(n²) comparisons, O(n²) swaps worst-case',
      spaceComplexity: 'O(1) auxiliary',
    },
  },
};

export default bubbleSort;
