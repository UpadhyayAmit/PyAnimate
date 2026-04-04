import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '\'ABCBDAB\' aur \'BDCAB\' ka LCS dhundho. DP matrix build karo aur sequence trace back karo.',
  hint: 'dp[i][j] = dp[i-1][j-1]+1 if chars match, else max(dp[i-1][j], dp[i][j-1]).',
  explanation: {
    simple: {
      overview: 'LCS (Longest Common Subsequence) — do strings ka sabse lamba common subsequence dhundho. DNA alignment, diff tools mein use.',
      analogy: 'Jaise do playlists compare karo — kitne common songs hain same order mein.',
      steps: [
        'dp[i][j] = LCS of first i chars of s1 aur j chars of s2',
        'Agar s1[i] == s2[j]: dp[i][j] = dp[i-1][j-1] + 1',
        'Nahi toh: dp[i][j] = max(dp[i-1][j], dp[i][j-1])',
        'Bottom-right se answer milta hai',
      ],
      visual: `s1="ABCBDAB", s2="BDCAB"
LCS = "BCAB" (length 4)
Multiple LCS possible hain`,
      commonMistakes: [
        'LCS length aur actual LCS string ka confusion',
        'Edit distance aur LCS alag hain',
        'Space optimization: only previous row needed',
      ],
      practice: [
        'LCS implement karo aur actual sequence print karo',
        'Shortest common supersequence LCS se nikalo',
      ],
    },
    deepDive: {
      overview: 'LCS O(mn) time aur space — space O(min(m,n)) compress karo, actual sequence backtracking se.',
      steps: [
        'Time O(mn), Space O(mn) -> O(min(m,n)) rolling array',
        'Actual LCS: dp table backtrack karo',
        'Diff utility: LCS se file changes detect karo',
        'LCS se: edit distance, SCS, LPS (palindromic subsequence)',
      ],
      commonMistakes: [
        'LCS length != LCS string — backtrack separately',
        'Memoization top-down approach complex recursion se',
      ],
      practice: [
        'LCS se edit distance nikalo',
        'Longest palindromic subsequence: LCS of s and reversed s',
      ],
    },
  },
};

export default overlay;
