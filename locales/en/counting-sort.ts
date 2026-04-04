import type { LessonLocaleOverlay } from '../types';

const countingSort: LessonLocaleOverlay = {
  explanation: {
    simple: {
      overview: 'Counting Sort tallies occurrences of each key and reconstructs the array in order using those counts.',
      analogy: 'Sorting test scores by counting how many students got each score, then listing from lowest to highest.',
      steps: [
        'Know the value range k (or min/max).',
        'Create count array of size k, all zeros.',
        'Scan input, increment count[value].',
        'Prefix-sum counts to get starting indices.',
        'Place each element into output at its index; copy back.',
      ],
      visual: 'Histogram bars; prefix sum converts bars into starting offsets.',
      commonMistakes: [
        'Not offsetting negatives when range is not 0-based.',
        'Skipping prefix-sum, producing repeated blocks.',
        'Using counting sort when k ≫ n, wasting memory.',
      ],
      practice: [
        'Run counting sort on digits (k=10).',
        'Show how stability enables radix sort.',
        'Compute memory for n=1e5, k=256.',
      ],
      timeComplexity: 'O(n + k)',
      spaceComplexity: 'O(n + k)',
    },
    deepDive: {
      overview: 'Counting Sort is linear when key range k is small; stability comes from placing elements right-to-left.',
      analogy: 'Turning a frequency table into positions: cumulative counts map each value to its slot range.',
      steps: [
        'Count occurrences into counts[k].',
        'Prefix-sum so counts[v] gives start index of value v.',
        'Iterate input from right to left, place x at output[counts[x]], decrement counts[x].',
        'Copy output back if needed; handle min offset when values start >0 or negative.',
        'Reuse buffers if sorting repeatedly.',
      ],
      visual: 'Prefix sums create disjoint index intervals per value.',
      commonMistakes: [
        'Placing left-to-right and losing stability.',
        'Allocating huge counts for massive k; pick counting sort only when k is small.',
        'Not resetting counts between runs.',
      ],
      practice: [
        'Prove stability from the backward placement pass.',
        'Design counting sort for ASCII chars (k=128) and benchmark.',
        'Explain how counting sort powers LSD radix sort.',
      ],
      timeComplexity: 'Θ(n + k)',
      spaceComplexity: 'Θ(n + k)',
    },
  },
};

export default countingSort;
