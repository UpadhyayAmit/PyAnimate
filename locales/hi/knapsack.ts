import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '0/1 Knapsack solve करें: items=[(2,6),(2,10),(3,12)], capacity=5। DP table row by row build करें।',
  hint: 'dp[i][w] = max(dp[i-1][w], dp[i-1][w-weight[i]] + value[i])। हर cell एक subproblem है।',
  explanation: {
    simple: {
      overview: 'Knapsack problem: W capacity wale bag mein weights aur values wale items rakhkar maximum value nikalo.',
      analogy: 'Jaise traveler limited weight travel bag mein most valuable items rakhta hai.',
      steps: [
        'dp[i][w]=first i items jo w weight exceed nahi karte ka maximum value',
        'Space optimize: 1D dp[w] use karo',
        'Har item reverse order mein update karo (0/1 case)',
        'Answer dp[W] hai',
      ],
      visual: `items=[(2kg,3rs),(3kg,4rs),(4kg,5rs)] W=5
dp[5]=max(dp[3]+4, dp[5])
Final dp: [0,0,3,4,4,7]`,
      commonMistakes: [
        '0/1 knapsack mein inner loop reverse nahi karna (duplicate selection)',
        '0/1 aur fractional knapsack ka confusion',
      ],
      practice: [
        '2D aur 1D dono mein 0/1 knapsack implement karo',
        'Target sum (sirf weights) problem mein convert karo',
      ],
      timeComplexity: 'O(nW)',
      spaceComplexity: 'O(W)'
    },
    deepDive: {
      overview: 'Knapsack DP foundational hai, 0/1 backward scan, fractional greedy, pseudo-polynomial O(nW).',
      steps: [
        '2D→1D: dp[w]=max(dp[w],dp[w-wt]+val)',
        '0/1 reverse weight scan (duplicate prevent)',
        'Unbounded forward scan (repetition allow)',
        'Subset sum, partition equal knapsack variants hain',
      ],
      commonMistakes: [
        'Reverse aur forward ka confusion → 0/1 aur unbounded misunderstand',
        'O(nW) pseudo-polynomial hai (W bahut bada ho sakta hai)',
      ],
      practice: [
        '1D mein 0/1 aur unbounded knapsack implement karo',
        'Partition equal subset sum solve karo',
      ],
    },
  },
};

export default overlay;
