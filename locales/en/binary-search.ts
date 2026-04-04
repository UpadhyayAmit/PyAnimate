import type { LessonLocaleOverlay } from '../types';

const binarySearch: LessonLocaleOverlay = {
  explanation: {
    simple: {
      overview: 'Binary Search halves the sorted search space until the target is found or the range is empty.',
      analogy: 'Like finding a word in a dictionary: open near the middle, decide left or right, repeat.',
      steps: [
        'Start with low = 0 and high = n - 1.',
        'Pick mid = (low + high) // 2.',
        'If arr[mid] == target, return mid.',
        'If target < arr[mid], move high to mid - 1.',
        'Else move low to mid + 1. Continue while low <= high.',
      ],
      visual: '[1 3 5 7 9] → check 5 → go right → check 7 → found at index 3.',
      commonMistakes: [
        'Forgetting to recompute mid after updating bounds.',
        'Using < instead of <= in the loop, skipping the last element.',
        'Overflow in languages where mid = (low + high) can overflow (use low + (high - low) // 2).',
      ],
      practice: [
        'Trace on a 7-element array with targets at both ends and an absent target.',
        'Return insertion index when target is absent.',
        'Explain why the array must be sorted; give a counterexample when it is not.',
      ],
      timeComplexity: 'O(log n)',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'Binary Search is a divide-and-conquer search on monotonic predicates; each comparison discards half the space.',
      analogy: 'A decision tree of height log₂ n where each node halves the interval.',
      steps: [
        'Maintain inclusive bounds [low, high].',
        'mid = low + ((high - low) >> 1) avoids overflow.',
        'Predicate decides which half is kept; invariant: target, if present, stays within [low, high].',
        'Terminate when low > high; insertion point is low.',
        'Handle duplicates with lower_bound / upper_bound variants.',
      ],
      visual: 'Interval halves: [0,n-1] → [0,mid-1] or [mid+1,n-1]; tree height ~ log₂ n.',
      commonMistakes: [
        'Updating low = mid or high = mid causing infinite loops on 2-element ranges.',
        'Applying to unsorted data; monotonicity is required.',
        'Ignoring duplicate-handling requirements (first vs last occurrence).',
      ],
      practice: [
        'Prove the loop invariant formally.',
        'Implement lower_bound (first ≥ target) and upper_bound (first > target).',
        'Show how binary search fails on rotated arrays and outline the rotated fix.',
      ],
      timeComplexity: 'Θ(log n) comparisons',
      spaceComplexity: 'Θ(1)',
    },
  },
};

export default binarySearch;
