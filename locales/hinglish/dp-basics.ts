import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Dynamic Programming ki Neenv',
  hint: 'Subproblems ko yaad rakho aur dobara mat solve karo — memoization ya tabulation.',
  approach: 'Problem ko overlapping subproblems mein break karo. Subproblem results ko memoize/tabulate karo.',
  useCases: [
    'Optimization problems (minimum cost, maximum profit)',
    'Counting problems (paths, ways)',
    'String matching (edit distance, LCS)',
  ],
  explanation: {
    simple: {
      overview: 'Dynamic Programming: overlapping subproblems memoize karo ya bottom-up table fill karo — exponential se polynomial complexity.',
      analogy: 'Jaise exam ke previous year questions yaad karo — same question aaye toh fresh solve mat karo, yaad karo.',
      steps: [
        'Subproblem define karo (dp[i] ka kya matlab hai?)',
        'Base cases set karo',
        'Recurrence relation likho: dp[i] = f(dp[i-1], dp[i-2]...)',
        'Top-down (memoization) ya bottom-up (tabulation) choose karo',
      ],
      visual: `# Fibonacci DP
dp[0] = 0, dp[1] = 1
dp[i] = dp[i-1] + dp[i-2]
# O(n) instead of O(2^n)!`,
      commonMistakes: [
        'Subproblem definition galat karna',
        'Base cases miss karna',
        'State transition (recurrence) galat likhna',
      ],
      practice: [
        'Climbing stairs solve karo DP se',
        'Longest increasing subsequence DP se solve karo',
      ],
    },
    deepDive: {
      overview: 'DP optimization: space compress karo (rolling array), time optimize karo (divide and conquer DP).',
      steps: [
        'Top-down: @lru_cache decorator se elegant memoization',
        'Bottom-up: extra space O(n) -> O(1) possible agar only adjacent states chahiye',
        'DP on trees: rerooting technique',
        'Bitmask DP: subset enumeration O(2^n * n)',
      ],
      commonMistakes: [
        'Overlapping subproblems ke bina DP apply karna',
        'State dimension miss karna (partial state)',
      ],
      practice: [
        'Coin change problem DP se solve karo',
        'Edit distance (Levenshtein) DP se implement karo',
      ],
    },
  },
};

export default overlay;
