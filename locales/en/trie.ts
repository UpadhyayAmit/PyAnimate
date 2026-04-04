import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Build a Trie from [\'apple\',\'app\',\'apt\',\'banana\']. Implement search(\'app\') and startsWith(\'ap\').',
  hint: 'Each node is a dict of children + is_end flag. Insert traces char by char, creating nodes as needed.',
  explanation: {
    simple: {
      overview: 'A trie (prefix tree) stores strings by shared prefixes, enabling O(k) insertion, lookup, and prefix search.',
      analogy: 'A dictionary organized by letters: branch at \'a\', then \'ap\', then \'app\', then \'apple\'.',
      steps: [
          'Each node has children dict (or array of 26) and an is_end flag.',
          'Insert word: for each char, move to/create child node; mark last as end.',
          'Search exact: traverse chars; check is_end at last node.',
          'Prefix search: traverse prefix; return True if all chars found (no is_end check).',
      ],
      visual: 'Insert \'cat\',\'cap\': root→c→a→t(end), root→c→a→p(end); shared prefix \'ca\'.',
      commonMistakes: [
          'Marking is_end only at very last character node (correct), not at intermediate nodes.',
          'Deleting from trie requires careful removal — don\'t delete shared prefix nodes.',
      ],
      practice: [
          'Implement autocomplete: return all words with a given prefix.',
          'Use a trie for longest word search in a dictionary.',
      ],
      timeComplexity: 'O(k) per operation (k = word length)',
      spaceComplexity: 'O(ALPHABET × n × k) worst case',
    },
    deepDive: {
      overview: 'Compressed trie (Patricia/Radix trie) merges single-child chains; suffix trie/tree solves substring search in O(n).',
      analogy: 'Radix tree: compress \'car\',\'card\',\'care\' so the shared \'car\' segment is one node, not three.',
      steps: [
          'Patricia trie: node stores substring, not single char; saves space and cache lines.',
          'Suffix tree: trie of all suffixes; O(n) build via Ukkonen\'s algorithm.',
          'Aho-Corasick: augments trie with failure links for multi-pattern search in O(n+m+z).',
          'XOR trie: stores binary representations; find max/min XOR pair in O(n log maxVal).',
      ],
      visual: 'Ukkonen suffix tree for \'banana$\': O(n) construction, O(m) per pattern search vs O(n·m) naive.',
      commonMistakes: [
          'Suffix trie (not tree) is O(n²) space — must use Ukkonen for O(n) tree.',
          'XOR trie must pad all numbers to same bit length.',
      ],
      practice: [
          'Implement Aho-Corasick for multi-pattern search.',
          'Solve \'Maximum XOR of Two Numbers\' using an XOR trie.',
      ],
    },
  },
};

export default overlay;
