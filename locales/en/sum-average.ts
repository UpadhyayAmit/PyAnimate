import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Compute sum and average of scores = [85, 92, 78, 96, 88, 73]. Identify who scored above average.',
  hint: 'Sum all first, divide by count for average. Then filter with a list comprehension.',
  explanation: {
    simple: {
      overview: 'Sum all numbers in a list; divide by count for the average.',
      analogy: 'Adding up your grocery bill then finding the average item price.',
      steps: [
          'total = sum(numbers)  (or manual loop).',
          'count = len(numbers).',
          'average = total / count  (check count != 0 first).',
          'Return or print both values.',
      ],
      visual: '[1,2,3,4,5] → sum=15, len=5 → average=3.0',
      commonMistakes: [
          'ZeroDivisionError when the list is empty.',
          'Integer division losing decimal: use / not //.',
      ],
      practice: [
          'Compute the average exam score for a class.',
          'Find the sum and average of even numbers only.',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'Numerically stable summation (Kahan) reduces floating-point rounding errors across large sums.',
      analogy: 'Carrying a compensation variable to catch the digits lost in each addition.',
      steps: [
          'Naive: total += x (accumulated error ~n·ε).',
          'Kahan: compensation c tracks lost bits; total += (x-c); c = (total-old)-(x-c).',
          'statistics.mean() in Python uses Fraction for exact rational mean.',
          'For very large datasets, chunk and combine partial sums.',
      ],
      visual: 'Kahan keeps error ~ε regardless of n vs naive ~n·ε',
      commonMistakes: [
          'Using sum() on large float lists near machine epsilon.',
          'Ignoring NaN values that propagate through arithmetic.',
      ],
      practice: [
          'Implement Kahan summation and compare error to naive.',
          'Handle NaN with math.isnan filter before summing.',
      ],
    },
  },
};

export default overlay;
