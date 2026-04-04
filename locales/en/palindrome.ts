import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Check if \'racecar\', \'hello\', and \'A man a plan a canal Panama\' are palindromes.',
  hint: 'For the last one, lowercase and remove spaces/punctuation first. Then use the two-pointer approach.',
  explanation: {
    simple: {
      overview: 'A palindrome reads the same forwards and backwards. Check by comparing the string to its reverse.',
      analogy: '\'Racecar\' — whether you start from the left or right, you read the same word.',
      steps: [
          'Clean the string: lowercase, remove non-alphanumerics.',
          'Compare s == s[::-1].',
          'For manual check: two-pointer — compare s[left] and s[right], move inward.',
      ],
      visual: '\'racecar\' → reversed=\'racecar\' → equal → palindrome',
      commonMistakes: [
          'Forgetting to normalize case (\'Racecar\' ≠ \'racecar\' before lower()).',
          'Not removing spaces/punctuation for sentence palindromes.',
      ],
      practice: [
          'Check \'A man a plan a canal Panama\'.',
          'Find the longest palindromic substring.',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n) for slice, O(1) for two-pointer',
    },
    deepDive: {
      overview: 'Longest Palindromic Substring uses expand-around-center in O(n) or Manacher\'s algorithm for O(n).',
      analogy: 'Manacher pre-processes the string with separator characters so all palindromes are odd-length.',
      steps: [
          'Expand from each center (n centers for odd, n-1 for even): O(n²) naive.',
          'Manacher tracks previously computed radii to skip redundant work.',
          'Mirror property: if center c has radius r, points inside inherit radius ≥ min(r, edge dist).',
          'Final scan over radii array finds max.',
      ],
      visual: 'String: a|b|c|b|a with |s → radii array; mirror speeds fills.',
      commonMistakes: [
          'Forgetting even-length palindromes (need n-1 extra centers).',
          'Manacher index arithmetic off-by-one due to the inserted separators.',
      ],
      practice: [
          'Implement expand-around-center for all palindromic substrings.',
          'Implement Manacher\'s algorithm and verify on \'abacaba\'.',
      ],
    },
  },
};

export default overlay;
