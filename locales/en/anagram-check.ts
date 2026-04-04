import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Check if (\'listen\', \'silent\'), (\'hello\', \'world\') are anagrams. Then find all anagram groups in [\'eat\',\'tea\',\'tan\',\'ate\',\'nat\',\'bat\'].',
  hint: 'Sort both strings and compare, OR use Counter(). For grouping, use sorted word as dict key.',
  explanation: {
    simple: {
      overview: 'Two strings are anagrams if they contain exactly the same characters in any order.',
      analogy: '\'Listen\' and \'Silent\' use the same letters rearranged.',
      steps: [
          'Sort both strings and compare: sorted(a) == sorted(b).',
          'Or use Counter: Counter(a) == Counter(b).',
          'Fastest: count array of 26 if lowercase ASCII only.',
      ],
      visual: '\'anagram\'→sorted→\'aaagmnr\'; \'nagaram\'→sorted→\'aaagmnr\' → equal',
      commonMistakes: [
          'Forgetting to normalize case.',
          'Not handling spaces/punctuation if the problem expects cleaned input.',
      ],
      practice: [
          'Check if two sentences are anagrams ignoring spaces.',
          'Find all anagram groups in a list of words.',
      ],
      timeComplexity: 'O(n log n) sort, O(n) counter',
      spaceComplexity: 'O(n)',
    },
    deepDive: {
      overview: 'Group anagrams in O(n·k·log k) by using sorted tuple as hash key, or O(n·k) with character-count tuple.',
      analogy: 'A filing cabinet keyed by letter inventory: all words with the same letters go in one drawer.',
      steps: [
          'For each word, compute canonical key = tuple(sorted(word)).',
          'Group into defaultdict(list) by key.',
          'Character-count key: tuple of 26 counts avoids sort.',
          'Both are O(n·k) per word across all n words.',
      ],
      visual: '{\'eat\',\'tea\',\'ate\'} → key (a,e,t) → same bucket',
      commonMistakes: [
          'Using frozenset — loses duplicate character info (\'aab\' ≠ \'ab\').',
          'Not considering Unicode normalization for non-ASCII inputs.',
      ],
      practice: [
          'Implement group_anagrams(words) returning list of groups.',
          'Compare timing of sorted key vs count-tuple key for 100k words.',
      ],
    },
  },
};

export default overlay;
