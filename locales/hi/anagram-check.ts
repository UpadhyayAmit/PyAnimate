import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Check करें कि (\'listen\',\'silent\'), (\'hello\',\'world\') anagrams हैं। फिर [\'eat\',\'tea\',\'tan\',\'ate\',\'nat\',\'bat\'] में anagram groups ढूंढें।',
  hint: 'दोनों strings को sort करके compare करें, या Counter() use करें। Grouping के लिए sorted word को dict key बनाएं।',
  explanation: {
    simple: {
      overview: 'Agar do strings mein bilkul wahi characters aur same counts hain toh woh anagrams hain.',
      analogy: 'Jaise scrabble tiles rearrange karna—same tiles, alag order.',
      steps: [
        'Normalize karo (lowercase, spaces hatao)',
        'Method 1: sort karke compare karo',
        'Method 2: Counter se compare karo',
        'Equal hain toh anagram hai',
      ],
      visual: `"listen" aur "silent"
sorted("listen") == sorted("silent") ?`,
      commonMistakes: [
        'Case aur spaces normalize nahi karna',
        'Numbers aur symbols count karna chahiye ya nahi (requirements pe depends)',
      ],
      practice: [
        '"listen"/"silent" jaise pairs verify karo',
        'Word list ko anagram groups mein classify karo',
      ],
      timeComplexity: 'O(n log n) sorting, O(n) Counter',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: 'Counter anagram detection O(n), sorting O(n log n) lekin simpler.',
      steps: [
        'Counter(s1)==Counter(s2) O(n) time space',
        'sorted(s1)==sorted(s2) O(n log n)',
        'Multi-word grouping ke liye sorted tuple key use karo',
        'ASCII ke liye frequency array [0]*26 O(n) O(1)',
      ],
      commonMistakes: [
        'Performance important hone par sorting use karna',
        'Unicode ke liye Counter use karo, frequency array nahi',
      ],
      practice: [
        'Word list se anagram groups banao',
        'ASCII strings ke liye frequency array anagram detection implement karo',
      ],
    },
  },
};

export default overlay;
