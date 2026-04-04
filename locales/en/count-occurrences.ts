import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Count how many times each word appears in: \'the cat sat on the mat the cat\'.',
  hint: 'Use a dictionary. For each word, increment its count: d[w] = d.get(w, 0) + 1.',
  explanation: {
    simple: {
      overview: 'Count how many times each value appears by iterating and tallying in a dictionary.',
      analogy: 'Counting votes: each ballot increments the candidate\'s count by 1.',
      steps: [
          'Create an empty dict counts = {}.',
          'For each item: counts[item] = counts.get(item, 0) + 1.',
          'Or use collections.Counter(iterable) directly.',
      ],
      visual: '[\'a\',\'b\',\'a\',\'c\',\'b\',\'a\'] → {\'a\':3,\'b\':2,\'c\':1}',
      commonMistakes: [
          'KeyError when accessing a missing key — use .get() or defaultdict.',
          'Counter.most_common() returns sorted list — don\'t iterate the Counter for sorted output.',
      ],
      practice: [
          'Count word frequencies in a sentence.',
          'Find the most common element without Counter.',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(k) where k = distinct values',
    },
    deepDive: {
      overview: 'Counter inherits from dict and adds arithmetic operations (add/subtract counters) and most_common().',
      analogy: 'A votes counter that can also combine ballots from two ballot boxes by addition.',
      steps: [
          'Counter(a) + Counter(b) adds corresponding counts.',
          'Counter(a) - Counter(b) subtracts (drops zeros).',
          'Counter.elements() expands back to a list.',
          'Counter.update() merges in-place.',
      ],
      visual: 'Counter(\'ab\') + Counter(\'bc\') → Counter({\'b\':2,\'a\':1,\'c\':1})',
      commonMistakes: [
          'Treating Counter as a set ignores duplicate counts.',
          'Subtracting counters can produce negative counts; use & instead for floor-0 subtraction.',
      ],
      practice: [
          'Implement word-frequency ranking with Counter.most_common(10).',
          'Use Counter subtraction to check if string t is an anagram subset of s.',
      ],
    },
  },
};

export default overlay;
