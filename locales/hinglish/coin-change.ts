import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'coins=[1,5,6,9] se amount=11 banane ke liye minimum coins. dp array step by step build karo.',
  hint: 'dp[0]=0, baki dp[i]=infinity. Har coin c ke liye: dp[i] = min(dp[i], dp[i-c]+1) if i>=c.',
  explanation: {
    simple: {
      overview: 'Coin change: minimum coins se target amount banao — DP ka must-know problem hai yaar.',
      analogy: 'Jaise ATM se minimum notes mein amount nikalna — smaller denominations bhi consider karo.',
      steps: [
        'dp[i] = minimum coins se amount i',
        'dp[0] = 0 (base case)',
        'Har amount ke liye sab coins try karo: dp[i] = min(dp[i], dp[i-coin]+1)',
        'dp[amount] answer hai (ya infinity agar impossible)',
      ],
      visual: `coins=[1,3,4], amount=6
dp[0]=0
dp[1]=1 (coin 1)
dp[3]=1 (coin 3)
dp[4]=1 (coin 4)
dp[6]=2 (3+3)`,
      commonMistakes: [
        'dp initialization: infinity ya amount+1 use karo',
        'Greedy coin change sirf special cases mein optimal',
        'Coin reuse allowed — unbounded knapsack hai ye',
      ],
      practice: [
        'Coin change minimum coins solve karo',
        'Coin change II: count ways to make amount solve karo',
      ],
    },
    deepDive: {
      overview: 'Coin change unbounded knapsack variant hai — forward iteration 1D DP se O(n*amount) solve.',
      steps: [
        'Bottom-up 1D DP: O(n*amount) time O(amount) space',
        'Coin change II (count ways): dp[i] += dp[i-coin]',
        'Greedy optimal hoti hai canonical coin systems mein',
        'NP-hard general coin systems ke liye (arbitrary coins mein greedy fail)',
      ],
      commonMistakes: [
        '0/1 knapsack se confuse karna — coin change unbounded hai (coins reuse)',
        'Count ways aur min coins: different recurrence hai',
      ],
      practice: [
        'Count all ways to make change implement karo',
        'Prove ya disprove greedy works for given coin set',
      ],
    },
  },
};

export default overlay;
