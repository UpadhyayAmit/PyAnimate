import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '[\'apple\',\'app\',\'apt\',\'banana\'] से Trie build करें। search(\'app\') और startsWith(\'ap\') implement करें।',
  hint: 'हर node children का dict + is_end flag है। Insert char by char trace करता है।',
  explanation: {
    simple: {
      overview: 'Trie (prefix tree) strings nodes mein characters represent karte hue store karta hai, words aur prefix search ke liye.',
      analogy: 'Jaise dictionary jo characters par branch karta hai—\'ca\' jaankar \'cat\' aur \'car\' jaldi milte hain.',
      steps: [
        'Har node mein children dict aur is_end flag',
        'insert: word[i] par walk karo, nahi hai toh create karo',
        'search: puri word walk kar sake aur is_end True ho',
        'startsWith: prefix walk ho sake toh True',
      ],
      visual: `insert("cat","car","dog")
       root
      / ...
     c   d
     |   |
     a   o
    / \\ ... \\
   t   r   g`,
      commonMistakes: [
        'search aur startsWith mein is_end ka fark bhool jana',
        'Delete operation complex hai bhool jana',
      ],
      practice: [
        'Auto-complete implement karo (prefix → candidate words list)',
        'Dictionary mein maximum XOR words dhundo',
      ],
      timeComplexity: 'O(L) L word length',
      spaceComplexity: 'O(ALPHABET_SIZE * L * N)'
    },
    deepDive: {
      overview: 'Trie O(L) prefix search deta hai, compressed Trie (Radix tree) space efficient, bit Trie maximum XOR ke liye.',
      steps: [
        'dict ki jagah array[26] se speed improve karo',
        'CompressedTrie/Radix Trie space save karta hai',
        'Bit Trie (0/1): O(nL) maximum XOR pair ke liye',
        'Trie ko Aho-Corasick automaton mein evolve karo',
      ],
      commonMistakes: [
        'Many words ke liye Trie ki jagah hash set use karna',
        'Trie deletion mein is_end flag galat set karna',
      ],
      practice: [
        'Trie se Word Search II solve karo',
        'Binary Trie maximum XOR implement karo',
      ],
    },
  },
};

export default overlay;
