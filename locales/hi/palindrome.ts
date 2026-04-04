import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Check करें कि \'racecar\', \'hello\', \'A man a plan a canal Panama\' palindrome हैं।',
  hint: 'Last one के लिए lowercase करें और spaces/punctuation हटाएं। फिर two-pointer approach use करें।',
  explanation: {
    simple: {
      overview: 'Palindrome woh string hai jo aage-peeche dono taraf padhi ho same lage, jaise "racecar".',
      analogy: 'Jaise aaine mein dekhna—reflection same dikhti hai.',
      steps: [
        'String normalize karo (lowercase, spaces hatao)',
        'String ko uske reverse se compare karo',
        'Equal hai toh palindrome hai',
        'List: reversed copy se compare karo',
      ],
      visual: `word = "racecar"
is_pal = word == word[::-1]
# True`,
      commonMistakes: [
        'Case aur spaces ignore nahi karna',
        'Khaali string bhi palindrome hai—bhool jana',
      ],
      practice: [
        'Spaces aur punctuation ignore karke sentence palindrome verify karo',
        'Word list se saare palindromes dhundo',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n) slicing, O(1) two pointers'
    },
    deepDive: {
      overview: 'Slice palindrome check O(n) time space, two pointer O(n) time O(1) space.',
      steps: [
        'Two pointer: left=0,right=len-1 andar ki taraf move karo',
        'Sentence: re.sub(r\'[^a-z0-9]\',\'\',s.lower()) preprocess karo',
        'Longest palindromic subsequence: Manacher algorithm O(n)',
        'LCS DP method',
      ],
      commonMistakes: [
        'Sentence problems mein non-alphanumeric ignore nahi karna',
        'Palindrome substring aur palindrome subsequence ka confusion',
      ],
      practice: [
        'Two pointers se palindrome check implement karo',
        'Longest palindrome substring dhundo',
      ],
    },
  },
};

export default overlay;
