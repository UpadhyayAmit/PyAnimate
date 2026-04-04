import type { LessonLocaleOverlay } from '../types';

const linearSearch: LessonLocaleOverlay = {
  explanation: {
    simple: {
      overview: 'Linear Search scans each element until it finds the target or reaches the end.',
      analogy: 'Looking for a book on an unsorted shelf by checking every spine in order.',
      steps: [
        'Start at index 0.',
        'Compare arr[i] to target.',
        'If equal, return i.',
        'Else increment i and continue.',
        'If end reached, return not found.',
      ],
      visual: '[7 2 9 4] → check 7 (no) → check 2 (yes at index 1).',
      commonMistakes: [
        'Using i < n-1 and skipping last element.',
        'Not handling empty array.',
        'Using linear search on sorted data where binary search is better.',
      ],
      practice: [
        'Count comparisons for best, worst, average.',
        'Return all indices of a target.',
        'Search from both ends simultaneously and compare steps saved.',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'Linear Search is optimal for tiny or streaming datasets; contiguous scans are cache-friendly.',
      analogy: 'A single pass through a stream you cannot rewind.',
      steps: [
        'Maintain invariant: all indices < i checked.',
        'Optionally early-exit if monotonic data rules out target.',
        'Single pass equality checks; stop on match.',
        'Return index or -1.',
        'For linked lists, traverse pointers (still linear).',
      ],
      visual: 'Checked portion grows; unchecked shrinks.',
      commonMistakes: [
        'Float equality without tolerance.',
        'Hot loops that could use hashing instead.',
        'Ignoring that scans are fine for very small n.',
      ],
      practice: [
        'Expected comparisons for uniform random targets present vs absent.',
        'Use a sentinel (append target) to remove one bounds check.',
        'Implement case-insensitive string search.',
      ],
      timeComplexity: 'Θ(n) comparisons',
      spaceComplexity: 'Θ(1)',
    },
  },
};

export default linearSearch;
