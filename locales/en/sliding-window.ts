import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Find the maximum sum subarray of size k=3 in [2, 1, 5, 1, 3, 2].',
  hint: 'Compute first window sum, then slide: subtract the element leaving, add the one entering.',
  explanation: {
    simple: {
      overview: 'Maintain a window of elements over an array, expanding or shrinking it to meet a constraint.',
      analogy: 'A moving spotlight on a stage: it illuminates a fixed or variable segment that slides across.',
      steps: [
          'Fixed window k: sum first k, then slide — subtract left, add right.',
          'Variable window: expand right until constraint violated, shrink left until valid.',
          'Track max/min window size that satisfies the constraint.',
      ],
      visual: '[1,2,3,1,4,5], k=3: sum=6 → slide → sum=6 → sum=8 → sum=10',
      commonMistakes: [
          'Not initializing the window result before sliding.',
          'Forgetting to shrink the left pointer in variable-window problems.',
      ],
      practice: [
          'Find maximum sum subarray of length k.',
          'Find smallest subarray with sum ≥ target.',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1) or O(k) for window storage',
    },
    deepDive: {
      overview: 'Sliding window + monotonic deque gives O(n) maximum of every k-element window.',
      analogy: 'A deque as a stage-left camera: tracks the best candidate on the left side, evicts outdated ones.',
      steps: [
          'Maintain a deque of indices in decreasing order of arr[i].',
          'When new element arrives, remove all indices from back that are smaller.',
          'Remove front if index is out of window (< i-k+1).',
          'Front of deque is always the max index in current window.',
      ],
      visual: 'arr=[1,3,-1,-3,5,3,6,7],k=3: window maxes → [3,3,5,5,6,7]',
      commonMistakes: [
          'Not pruning the front when the window has slid past it.',
          'Pruning the back with >= instead of > when duplicates matter.',
      ],
      practice: [
          'Implement sliding window maximum with deque.',
          'Solve \'Longest Substring Without Repeating Characters\' with variable sliding window.',
      ],
    },
  },
};

export default overlay;
