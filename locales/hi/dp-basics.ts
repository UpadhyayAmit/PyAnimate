import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Dynamic Programming की नींव',
  hint: 'Subproblems को याद रखें और दोबारा हल न करें — memoization या tabulation।',
  approach: 'Problem को overlapping subproblems में break करो। Subproblem results को memoize/tabulate करो।',
  useCases: [
    'Optimization problems (minimum cost, maximum profit)',
    'Counting problems (paths, ways)',
    'String matching (edit distance, LCS)',
  ],
  explanation: {
    simple: {
      overview: 'Dynamic programming complex problem ko simple subproblems mein todta hai, solutions remember karta hai repeat computation se bachne ke liye.',
      analogy: 'Jaise seedhiyan chadna—har step pichle steps ke upar build karta hai.',
      steps: [
        'Subproblems identify karo',
        'dp[] array ya cache banao',
        'Base cases initialize karo',
        'Recurrence relation se dp array fill karo',
      ],
      visual: `fib(n) = fib(n-1) + fib(n-2)
dp = [0,1]
for i in range(2,n+1):
    dp.append(dp[-1]+dp[-2])`,
      commonMistakes: [
        'Base cases galat set karna',
        'Array out of bounds',
        'Top-down (recursion+memo) aur bottom-up (iterative) ka confusion',
      ],
      practice: [
        'DP se staircase climbing problem solve karo',
        'DP array se maximum subarray sum nikalo',
      ],
      timeComplexity: 'Problem aur DP relation par depends karta hai',
      spaceComplexity: 'O(n) ya optimized O(1)'
    },
    deepDive: {
      overview: 'DP overlapping subproblems aur optimal substructure wale problems ke liye, memoization (top-down) vs tabulation (bottom-up).',
      steps: [
        'State define karo: dp[i] kya represent karta hai?',
        'Transition likho: dp[i] = f(dp[i-1],dp[i-2]...)',
        'Initialize karo: dp[0], dp[1]',
        'Space optimize karo: O(n)→O(1) kabhi kabhi sirf do variables',
      ],
      commonMistakes: [
        'DP problem par greedy apply karna',
        '2D DP mein row-column traversal order galat karna',
      ],
      practice: [
        'Minimum coin change problem implement karo',
        'DP se Longest Increasing Subsequence (LIS) solve karo',
      ],
    },
  },
};

export default overlay;
