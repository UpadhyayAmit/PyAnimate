import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '[\'apple\',\'app\',\'apt\',\'banana\'] se Trie build karo. search(\'app\') aur startsWith(\'ap\') implement karo.',
  hint: 'Har node children ka dict + is_end flag hai. Insert char by char trace karta hai.',
  explanation: {
    simple: {
      overview: 'Trie (prefix tree) — strings efficiently store karta hai shared prefixes ke saath. Autocomplete ka backbone.',
      analogy: 'Jaise dictionary — A section mein sab "A" se shuru wale words, AA section mein "AA" wale...',
      steps: [
        'Root node banao (empty string)',
        'Har character ke liye child node',
        'Word end mark karo (is_end = True)',
        'Search: character by character tree traverse karo',
      ],
      visual: `Insert "cat","car","dog"
root -> c -> a -> t (end)
              -> r (end)
     -> d -> o -> g (end)`,
      commonMistakes: [
        'is_end flag bhool jaana — "car" aur "card" dono hain',
        'Case sensitivity — lowercase normalize karo',
        'Space: O(ALPHABET_SIZE * MAX_LEN * N) — can be large',
      ],
      practice: [
        'Basic Trie insert/search/startsWith implement karo',
        'Autocomplete feature trie se banao',
      ],
    },
    deepDive: {
      overview: 'Compressed trie (Patricia trie) space efficient hai — suffix trie se all substring problems solve karo.',
      steps: [
        'Array of 26 vs dict children — array faster, dict space efficient',
        'Compressed trie: ek node mein string prefix store karo',
        'Suffix trie: sab suffixes insert karo — substring search O(m)',
        'Word search II: trie + DFS backtracking',
      ],
      commonMistakes: [
        'Aho-Corasick: trie + failure links = multiple pattern matching',
        'Very long strings mein trie deep ho jaata hai',
      ],
      practice: [
        'Word search using trie + DFS implement karo',
        'Replace words in sentence using trie (shortest root)',
      ],
    },
  },
};

export default overlay;
