import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Given a list of integers, find all elements that appear more than n/3 times.',
  hint: 'Use a frequency dictionary first. Then filter keys where count > len(arr)//3.',
  explanation: {
    simple: {
      overview: 'A hash map stores key-value pairs with O(1) average lookup; perfect for frequency counting.',
      analogy: 'A library catalog: look up a book title instantly — no need to scan every shelf.',
      steps: [
          'Create: d = {} or d = defaultdict(int).',
          'Update count: d[key] = d.get(key, 0) + 1.',
          'Lookup: d[key] (raises KeyError if missing) or d.get(key, default).',
          'Iterate: for k, v in d.items().',
      ],
      visual: '[\'a\',\'b\',\'a\'] → {\'a\':2,\'b\':1} → d[\'a\']=2',
      commonMistakes: [
          'KeyError on missing key — always use .get() or defaultdict.',
          'Modifying dict while iterating raises RuntimeError.',
      ],
      practice: [
          'Find the most common element in a list.',
          'Two-sum using a hash map (O(n)).',
      ],
      timeComplexity: 'O(1) average get/set, O(n) iterate',
      spaceComplexity: 'O(k) distinct keys',
    },
    deepDive: {
      overview: 'Python dict uses open addressing with pseudo-random probing; load factor kept ≤2/3 before resizing.',
      analogy: 'Hash table probing: if a slot is occupied, jump to the next slot by a probe function.',
      steps: [
          'hash(key) maps key to a slot index.',
          'Collision: probe sequence finds the next free slot.',
          'Resize doubles capacity and rehashes all entries when 2/3 full.',
          'dict maintains insertion order since Python 3.7 via compact dict layout.',
      ],
      visual: 'hash(\'a\')=97 % 8 = 1; collision at 1 → probe to 2',
      commonMistakes: [
          'Relying on dict ordering in Python 2 (unordered).',
          'Using unhashable types (list, set) as dict keys — use tuple instead.',
      ],
      practice: [
          'Build a minimal hash map from scratch with open addressing.',
          'Benchmark dict vs sorted list lookup for n=10^6.',
      ],
    },
  },
};

export default overlay;
