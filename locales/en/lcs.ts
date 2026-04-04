import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Find LCS of \'ABCBDAB\' and \'BDCAB\'. Build the DP matrix and trace back the sequence.',
  hint: 'dp[i][j] = dp[i-1][j-1]+1 if chars match, else max(dp[i-1][j], dp[i][j-1]).',
  explanation: {
    simple: {
      overview: 'Longest Common Subsequence: find the longest sequence of characters that appears in both strings in order.',
      analogy: 'Two DNA strands sharing a genetic signature: find the longest common thread.',
      steps: [
          'dp[i][j] = LCS length of s1[:i] and s2[:j].',
          'If s1[i-1]==s2[j-1]: dp[i][j] = dp[i-1][j-1] + 1.',
          'Else: dp[i][j] = max(dp[i-1][j], dp[i][j-1]).',
          'Answer is dp[m][n].',
      ],
      visual: 's1=\'ABCBD\', s2=\'ACBD\': dp table → LCS=3 (\'ABD\')',
      commonMistakes: [
          'Confusing LCS (subsequence, non-contiguous) with Longest Common Substring (contiguous).',
          'Allocating (m+1)×(n+1) table but indexing from 0 incorrectly.',
      ],
      practice: [
          'Reconstruct the actual LCS string by backtracking.',
          'Compute edit distance (LCS-based relationship: ED = m+n-2*LCS).',
      ],
      timeComplexity: 'O(m×n)',
      spaceComplexity: 'O(m×n), O(min(m,n)) with rolling rows',
    },
    deepDive: {
      overview: 'LCS underpins diff tools (GNU diff), gene alignment (bioinformatics), and edit distance computation.',
      analogy: 'git diff uses a variant of LCS to find the minimal set of added/removed lines.',
      steps: [
          'Edit distance = m + n - 2*LCS (insert/delete only, no substitutions).',
          'Hirschberg\'s algorithm: LCS in O(m+n) space via divide-and-conquer.',
          'Four Russians trick: O(n²/log n) using lookup tables for small blocks.',
          'For DNA: suffix arrays with LCP array give O(n log n) preprocessing for all pair LCS queries.',
      ],
      visual: 'diff: lines only in A marked \'+\', only in B \'-\', common shown as context; LCS = common lines',
      commonMistakes: [
          'Rolling array optimization breaks backtracking — keep full table if reconstruction needed.',
          'LCS != edit distance; substitution adds another DP case.',
      ],
      practice: [
          'Implement shortest edit script (SES) using LCS backtracking.',
          'Use Hirschberg to compute LCS for very long strings with O(n) space.',
      ],
    },
  },
};

export default overlay;
