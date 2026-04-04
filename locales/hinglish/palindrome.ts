import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Check karo ki \'racecar\', \'hello\', \'A man a plan a canal Panama\' palindrome hain.',
  hint: 'Last wale ke liye lowercase karo aur spaces/punctuation hatao. Phir two-pointer approach use karo.',
  explanation: {
    simple: {
      overview: 'Palindrome wo string hai jo ulti padhne par bhi same ho — "racecar", "madam", "level".',
      analogy: 'Jaise "MADAM" — seedha padho ya ulta, same rahega. Mirror image jaisa word.',
      steps: [
        'String reverse karo',
        'Original se compare karo',
        'Case aur spaces ignore karo typically',
        'Two-pointer se efficiency badhao',
      ],
      visual: `s = "racecar"
s == s[::-1]  # True

# Ignore spaces, case:
s = "race a car"
clean = "".join(s.lower().split())
clean == clean[::-1]  # False`,
      commonMistakes: [
        'Case sensitivity — "Racecar" uppercase se fail ho sakta hai',
        'Spaces aur punctuation — usually strip/ignore karte hain',
        'Number palindromes — 121 palindrome hai',
      ],
      practice: [
        'Any string ke liye palindrome checker banao',
        'Longest palindromic substring nikalo',
      ],
    },
    deepDive: {
      overview: 'Manacher algorithm O(n) mein longest palindromic substring deta hai — interview favorite hai.',
      steps: [
        '[::-1] comparison O(n) time O(n) space hai',
        'Two-pointer O(n) time O(1) space',
        'Manacher algorithm O(n) longest palindrome deta hai',
        'Even-length palindromes "aa" type bhi handle karo',
      ],
      commonMistakes: [
        'Sirf odd-length palindromes check karna (even-length bhool jaana)',
        'Unicode characters — normalization important hai',
      ],
      practice: [
        'Two-pointer se palindrome check O(1) space mein karo',
        'Count karo kitne substrings palindrome hain',
      ],
    },
  },
};

export default overlay;
