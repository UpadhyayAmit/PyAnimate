import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Minimum coins to make amount=11 with coins=[1,5,6,9]. Build the dp array step by step.',
  hint: 'dp[0]=0, dp[i]=infinity initially. For each coin c: dp[i] = min(dp[i], dp[i-c]+1) if i>=c.',
  explanation: {
    simple: {
      overview: 'Find the minimum number of coins from a given set to make an exact target amount.',
      analogy: 'Making change at a register: use fewest bills/coins to make exact change.',
      steps: [
          'dp[0]=0; dp[i]=∞ for i=1..amount.',
          'For each coin c and each amount i≥c: dp[i] = min(dp[i], dp[i-c]+1).',
          'If dp[amount] is still ∞, return -1 (impossible).',
      ],
      visual: 'coins=[1,2,5], amount=11: dp=[0,1,1,2,2,1,2,2,3,3,2,3] → dp[11]=3 (5+5+1)',
      commonMistakes: [
          'Initializing dp[0]=1 instead of 0.',
          'Greedy (always take largest coin) doesn\'t work for arbitrary coin sets.',
      ],
      practice: [
          'Count the number of ways (not minimum) to make the amount.',
          'Reconstruct the actual coins used.',
      ],
      timeComplexity: 'O(amount × n_coins)',
      spaceComplexity: 'O(amount)',
    },
    deepDive: {
      overview: 'Coin change is the unbounded knapsack problem; counting variants use sum of ways instead of min.',
      analogy: 'Unbounded knapsack: each coin is an item of weight=value=coin; you can use each as many times as needed.',
      steps: [
          'Min coins: dp[i] = min(dp[i-c]+1 for c in coins if i>=c).',
          'Count ways: dp[i] += dp[i-c] for each coin c (order matters for permutations vs combinations).',
          'For combinations: iterate coins in outer loop (prevents permutations).',
          'For permutations: iterate amounts in outer loop.',
      ],
      visual: 'Ways dp[4] with coins [1,2]: iterate coin 1 first→dp=[1,1,1,1,1]; then coin 2→dp=[1,1,2,2,3]',
      commonMistakes: [
          'Swapping loop order changes count from combinations to permutations.',
          'Using 2D DP when 1D rolling array suffices (wastes space).',
      ],
      practice: [
          'Implement coin-change counting (combinations vs permutations) and compare.',
          'Solve \'Perfect Squares\' (same pattern with square-number coin set).',
      ],
    },
  },
};

export default overlay;
