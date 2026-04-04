import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Find two indices in [2, 7, 11, 15] that sum to 9. Then solve for target=18.',
  hint: 'Use a hash map: for each number, check if (target - num) is already stored. O(n) vs O(n²).',
  explanation: {
    simple: {
      overview: 'Find two indices whose values add up to a target using a hash map for O(n) performance.',
      analogy: 'At a party, remember everyone\'s name (hash map); when you meet someone, check if you\'ve already seen their complement.',
      steps: [
          'Create seen = {}.',
          'For each (i, num) in enumerate(nums):',
          'complement = target - num.',
          'If complement in seen: return [seen[complement], i].',
          'Else: seen[num] = i.',
      ],
      visual: '[2,7,11,15], target=9 → see 2(comp=7,no) → see 7(comp=2,yes) → [0,1]',
      commonMistakes: [
          'Returning indices incorrectly (return the stored index, not the complement).',
          'Using nested loop O(n²) when O(n) with hash map is expected.',
      ],
      practice: [
          'Extend to three-sum: sort + two-pointer.',
          'Handle duplicates: return all pairs, not just the first.',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
    },
    deepDive: {
      overview: 'Two-sum is the canonical hash map problem; its variants (3-sum, 4-sum) reduce to two-sum via sorting + two-pointer.',
      analogy: 'Reducing k-sum to 2-sum: fix k-2 elements, then find a pair summing to the remainder.',
      steps: [
          '2-sum with sorted array: two pointers l=0, r=n-1; move based on sum vs target.',
          '3-sum: fix a[i], find two-sum for a[i+1..n-1] with target-a[i]; sort + two-pointer.',
          '4-sum: fix two outer elements, call 2-sum on inner window.',
          'Deduplication: skip duplicates when advancing pointers.',
      ],
      visual: 'Sorted [1,3,5,7], target=8: l=0(1),r=3(7)→sum=8→found',
      commonMistakes: [
          'Not deduplicating in k-sum leads to duplicate result tuples.',
          'Hash map 2-sum can\'t enforce distinct indices — guard against same element used twice.',
      ],
      practice: [
          'Solve LeetCode 15 (3Sum) using the pattern.',
          'Extend to return count of all pairs (not just indices).',
      ],
    },
  },
};

export default overlay;
