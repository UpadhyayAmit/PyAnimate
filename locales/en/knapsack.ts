import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Solve 0/1 Knapsack: items=[(2,6),(2,10),(3,12)], capacity=5. Build the DP table row by row.',
  hint: 'dp[i][w] = max(dp[i-1][w], dp[i-1][w-weight[i]] + value[i]). Each cell is one subproblem.',
  explanation: {
    simple: {
      overview: '0/1 Knapsack: given items with weight and value, maximize total value without exceeding capacity.',
      analogy: 'Packing for a trip: you can take each item at most once; maximize what you bring within weight limit.',
      steps: [
          'dp[i][w] = max value using first i items and capacity w.',
          'For each item i: for w = 0..W. If w<weight[i]: dp[i][w]=dp[i-1][w]. Else: dp[i][w] = max(dp[i-1][w], dp[i-1][w-weight[i]] + value[i]).',
          'Answer is dp[n][W].',
      ],
      visual: 'Items [(2,3),(3,4),(4,5)] W=5 → dp table → max value=7 (items 0+1)',
      commonMistakes: [
          'Using 1D array but iterating forward (must iterate w backwards for 0/1 knapsack).',
          'Forgetting to copy dp[i-1] row when using 1D optimization.',
      ],
      practice: [
          'Reconstruct which items were picked by backtracking the dp table.',
          'Solve subset sum (value=weight, target=W).',
      ],
      timeComplexity: 'O(n×W)',
      spaceComplexity: 'O(W) with 1D optimization',
    },
    deepDive: {
      overview: 'Variants: fractional (greedy), unbounded (coin change), multiple knapsack, grouped knapsack.',
      analogy: 'Fractional knapsack is like a liquid: take partial fraction of highest value-per-weight items.',
      steps: [
          'Fractional: sort by value/weight ratio; take greedily until full — O(n log n).',
          '0/1 1D DP: iterate w from W down to weight[i] to prevent reuse.',
          'Unbounded (can reuse): iterate w forward — same item can be used multiple times.',
          'Bitset optimization: for target-sum problems, use integer bit-shifting instead of DP array.',
      ],
      visual: '0/1 1D w-backward: dp=[0,0,0,3,3,3]; after item2: dp=[0,0,0,3,4,4]; after item3: dp=[0,0,0,3,4,5]',
      commonMistakes: [
          'For 0/1 knapsack with 1D array, iterating w forward allows reuse (becomes unbounded).',
          'Fractional greedy fails for 0/1 knapsack — never applies.',
      ],
      practice: [
          'Implement 0/1 knapsack with item reconstruction.',
          'Solve \'Partition Equal Subset Sum\' as a knapsack problem.',
      ],
    },
  },
};

export default overlay;
