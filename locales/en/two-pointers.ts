import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Use two pointers on sorted array [1,3,6,8,10] to find all pairs that sum to 11.',
  hint: 'Start left=0, right=len-1. If sum < target move left right; if > target move right left.',
  explanation: {
    simple: {
      overview: 'Two-pointer technique uses left and right indices that move toward each other to solve array problems without nested loops.',
      analogy: 'Two people walking from opposite ends of a bridge, meeting in the middle.',
      steps: [
          'Sort the array if looking for pairs that sum to a target.',
          'l = 0, r = len-1.',
          'If arr[l]+arr[r] < target: move l right. If > target: move r left. If == target: found.',
      ],
      visual: 'Sorted [1,3,5,7], target=8: (1+7=8)→found',
      commonMistakes: [
          'Forgetting to sort first for sum-pair problems.',
          'Moving both pointers when only one needs to move.',
      ],
      practice: [
          'Find all pairs summing to target in a sorted array.',
          'Remove duplicates from a sorted array in-place.',
      ],
      timeComplexity: 'O(n) after O(n log n) sort',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'Two-pointer patterns: opposite ends (sum/pair), same direction (slow/fast), and partitioning (Dutch flag).',
      analogy: 'Fast/slow pointer in a linked list: if there\'s a cycle, fast catches slow.',
      steps: [
          'Opposite-end: sum of pair, trapping rainwater.',
          'Same-direction fast/slow: cycle detection (Floyd), remove nth node.',
          'Partitioning: Dutch national flag — 3-way partition with 3 pointers.',
          'Sliding window is a two-pointer variant with fixed or variable gap.',
      ],
      visual: 'Fast/slow: slow→1 step; fast→2 steps; cycle detected when they meet.',
      commonMistakes: [
          'Off-by-one when the window is inclusive vs exclusive.',
          'Fast-slow pointer — not initializing both to head (fast should start at head.next in some variants).',
      ],
      practice: [
          'Detect cycle in a linked list with Floyd\'s algorithm.',
          'Solve \'Trapping Rainwater\' using two pointers.',
      ],
    },
  },
};

export default overlay;
