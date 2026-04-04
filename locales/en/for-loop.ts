import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Loop over a list of fruits and print each with its index using enumerate().',
  hint: 'enumerate(list) gives (index, value) pairs. Unpack in the for statement.',
  explanation: {
    simple: {
      overview: 'A for loop iterates over every item in a sequence, running the body once per item.',
      analogy: 'Flipping through flashcards one by one until the deck is done.',
      steps: [
          'for item in iterable: — Python fetches the next item each iteration.',
          'range(n) generates integers 0..n-1.',
          'break exits early; continue skips to next iteration.',
          'else clause runs if loop completed without break.',
      ],
      visual: 'for i in range(3):  → i=0, body; i=1, body; i=2, body; done',
      commonMistakes: [
          'Modifying the list you\'re iterating over (use a copy).',
          'Off-by-one with range: range(1,n+1) for 1..n.',
      ],
      practice: [
          'Sum all numbers in a list with a for loop.',
          'Print the multiplication table for 7.',
      ],
      timeComplexity: 'O(n) for n iterations',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'for calls iter() on the iterable and repeatedly calls next() until StopIteration.',
      analogy: 'A generator pipeline: each next() pulls one item through the chain.',
      steps: [
          'iter(obj) returns an iterator object with __next__.',
          'next() advances state and returns value.',
          'StopIteration signals loop end.',
          'enumerate provides (index, value) pairs; zip merges iterables.',
      ],
      visual: 'list.__iter__() → list_iterator → next() × n → StopIteration',
      commonMistakes: [
          'Expecting for to work on a non-iterable (int).',
          'Forgetting that generators are consumed once.',
      ],
      practice: [
          'Implement your own range() using a generator.',
          'Use itertools.chain to loop over multiple lists seamlessly.',
      ],
    },
  },
};

export default overlay;
