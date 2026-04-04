import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '0/1 Knapsack solve karo: items=[(2,6),(2,10),(3,12)], capacity=5. DP table row by row build karo.',
  hint: 'dp[i][w] = max(dp[i-1][w], dp[i-1][w-weight[i]] + value[i]). Har cell ek subproblem hai.',
  explanation: {
    simple: {
      overview: '0/1 Knapsack: limited capacity bag mein max value items fit karo — DP ka classic problem.',
      analogy: 'Jaise chhuti pe bag pack karo — weight limit hai, most valuable items daalo.',
      steps: [
        'dp[i][w] = max value using first i items with capacity w',
        'Item i choose ya na choose — max dono ka',
        'dp[i][w] = max(dp[i-1][w], dp[i-1][w-wi]+vi)',
        'Base case: dp[0][*] = dp[*][0] = 0',
      ],
      visual: `items: [(w=1,v=1),(w=3,v=4),(w=4,v=5),(w=5,v=7)]
capacity=7
Optimal: item 4 alone -> value=7`,
      commonMistakes: [
        '0/1 vs unbounded knapsack confusion — 0/1 har item ek baar',
        'dp table iteration order — outer items, inner weights',
        '2D se 1D space optimize karte time reverse iteration zaroori',
      ],
      practice: [
        '0/1 knapsack implement karo',
        'Partition equal subset sum solve karo (knapsack variant)',
      ],
    },
    deepDive: {
      overview: 'Knapsack DP 2D O(nW) se 1D O(W) compress hota hai — reverse iteration se correct hota hai.',
      steps: [
        '2D DP: O(nW) time aur space',
        '1D DP: dp[w] = max(dp[w], dp[w-wi]+vi) — reverse iteration',
        'Unbounded knapsack: forward iteration 1D',
        'Fractional knapsack greedy O(n log n)',
      ],
      commonMistakes: [
        '1D forward iteration for 0/1 — ek item multiple times count hoga',
        'Item weight > capacity: skip item',
      ],
      practice: [
        '1D space-optimized knapsack implement karo',
        'Unbounded knapsack (coin change) implement karo',
      ],
    },
  },
};

export default overlay;
