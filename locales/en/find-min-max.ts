import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Find min and max of [34, 7, 23, 32, 5, 62] in ONE pass without using min()/max().',
  hint: 'Initialize both min_val and max_val to the first element, then compare each remaining element.',
  explanation: {
    simple: {
      overview: 'Scan the list once, tracking the smallest and largest values seen so far.',
      analogy: 'Walking a street and noting the tallest and shortest buildings you pass.',
      steps: [
          'Initialize min_val = max_val = list[0].',
          'For each element: update min_val if smaller, max_val if larger.',
          'Return both at the end.',
          'Alternatively use built-ins: min(lst), max(lst).',
      ],
      visual: '[3,1,4,1,5,9] → min=1, max=9 in one pass',
      commonMistakes: [
          'Initializing min/max to 0 instead of the first element (fails for all-negatives).',
          'Calling min() and max() separately — two passes instead of one.',
      ],
      practice: [
          'Find min and max in a single pass without built-ins.',
          'Find the second largest element.',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'Tournament method finds both min and max in 3n/2 - 2 comparisons vs 2n-2 in the naive approach.',
      analogy: 'Sports tournament bracket: pairs compete first, then winners and losers advance separately.',
      steps: [
          'Pair up elements and compare each pair: 1 comparison per 2 elements → n/2 comparisons.',
          'Track min from the losing pile, max from the winning pile.',
          'Total comparisons: 3n/2 - 2 (optimal lower bound for this problem).',
          'Python\'s built-in min/max stop early with key= and default= parameters.',
      ],
      visual: 'Pairs: (3,1)→min≤1,max≥3; (4,5)→min≤4,max≥5; merge → min=1,max=9',
      commonMistakes: [
          'Ignoring tournament method for large n where comparisons are expensive (e.g., disk reads).',
          'Not using key= in min/max when sorting by a computed attribute.',
      ],
      practice: [
          'Implement the tournament min-max and count comparisons.',
          'Find min of a list of objects by a key attribute.',
      ],
    },
  },
};

export default overlay;
