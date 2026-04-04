import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Check karo ki (\'listen\',\'silent\'), (\'hello\',\'world\') anagrams hain. Phir anagram groups dhundho.',
  hint: 'Dono strings ko sort karke compare karo, ya Counter() use karo. Grouping ke liye sorted word ko dict key banao.',
  explanation: {
    simple: {
      overview: 'Anagram check — do strings ke saare same characters hain? Sirf order different. "listen" aur "silent" anagram hain.',
      analogy: 'Jaise scrabble tiles — same tiles hain, different arrangement hai.',
      steps: [
        'Dono strings sort karo aur compare karo',
        'Ya Counter se character frequency count karo',
        'Case normalize karo (lowercase)',
        'Spaces strip karo agar required ho',
      ],
      visual: `"listen" -> sorted -> "eilnst"
"silent" -> sorted -> "eilnst"
# Equal -> Anagram!

Counter("listen") == Counter("silent")  # True`,
      commonMistakes: [
        'Case sensitivity — "Listen" aur "silent" same hain anagram mein',
        'Spaces — usually ignore karte hain',
        'Different lengths — anagram nahi ho sakte',
      ],
      practice: [
        'Two words anagram hain check karo',
        'Anagrams ke groups banao word list se',
      ],
    },
    deepDive: {
      overview: 'Counter comparison O(n) hai, sorting O(n log n) — large strings ke liye Counter better.',
      steps: [
        'sorted() approach: O(n log n) time, O(n) space',
        'Counter approach: O(n) time, O(k) space (k unique chars)',
        'Array of 26 ints (only ASCII) — O(1) space possible',
        'Anagram grouping: sorted string as key in dict',
      ],
      commonMistakes: [
        'Unicode characters — collections.Counter handle karta hai',
        'Counter subtraction negative counts ke liye check karo',
      ],
      practice: [
        'Group anagrams together from a word list',
        'Minimum character swaps se anagram banao',
      ],
    },
  },
};

export default overlay;
