import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Merge [1, 3, 5, 7] and [2, 4, 6, 8] into one sorted array without using sort().',
  hint: 'Use two pointers (i, j). Compare arr1[i] with arr2[j], append smaller, advance that pointer.',
  explanation: {
    simple: {
      overview: 'Merge two already-sorted lists into one sorted list using two pointers, one per list.',
      analogy: 'Two sorted stacks of playing cards: compare top cards, take the smaller, repeat.',
      steps: [
          'i=0, j=0 pointing to heads of both lists.',
          'While both have elements: if a[i]<=b[j]: take a[i], i++; else take b[j], j++.',
          'Append leftover elements from whichever list remains.',
          'Total: O(n+m) time, O(n+m) space.',
      ],
      visual: 'A=[1,3,5], B=[2,4,6] → compare 1<2,take1; 3>2,take2; ... → [1,2,3,4,5,6]',
      commonMistakes: [
          'Forgetting to append the remaining tail of one list.',
          'Mutating the input lists instead of building a new list.',
      ],
      practice: [
          'Merge k sorted lists (use a min-heap).',
          'Merge in-place without extra space (harder: O(1) space O(n log n) time).',
      ],
      timeComplexity: 'O(n+m)',
      spaceComplexity: 'O(n+m)',
    },
    deepDive: {
      overview: 'k-way merge with a min-heap is the basis of external sort: merge k sorted runs from disk.',
      analogy: 'External merge sort: each run is a sorted file on disk; heap holds one element per file.',
      steps: [
          'Push (value, run_id) for head of each run into min-heap.',
          'Pop min, add to output, push next from same run.',
          'O(N log k) total where N = total elements, k = number of runs.',
          'Disk I/O dominates; minimize seeks by buffering each run.',
      ],
      visual: '3 sorted lists, heap size 3: always pop min → sorted output; k small, heap ops cheap.',
      commonMistakes: [
          'Not maintaining run_id in heap tuple — can\'t know which list to refill.',
          'Heap comparison fails if elements aren\'t comparable; use (value, run_id, element) tuple.',
      ],
      practice: [
          'Implement merge-k sorted lists with heapq.',
          'Simulate external sort: sort chunks of 1MB, merge with k-way merge.',
      ],
    },
  },
};

export default overlay;
