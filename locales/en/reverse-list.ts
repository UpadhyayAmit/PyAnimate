import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Reverse [1, 2, 3, 4, 5] in-place using two pointers. Do NOT use list.reverse() or slicing.',
  hint: 'Start with left=0, right=len-1. Swap arr[left] and arr[right], move both inward until they meet.',
  explanation: {
    simple: {
      overview: 'Reverse a list by swapping elements from both ends moving inward, or use Python\'s built-in reverse.',
      analogy: 'Flipping a deck of cards: swap top and bottom, then second and second-from-bottom, meeting in the middle.',
      steps: [
          'Built-in: lst[::-1] returns a new reversed list.',
          'In-place: lst.reverse() modifies the list.',
          'Manual two-pointer: i=0, j=len-1; swap while i<j; i++, j--.',
      ],
      visual: '[1,2,3,4,5] → swap(1,5) → swap(2,4) → [5,4,3,2,1]',
      commonMistakes: [
          'Using lst[::-1] when you need in-place (creates unnecessary copy).',
          'Off-by-one stopping condition: stop when i >= j.',
      ],
      practice: [
          'Reverse a string using two-pointer approach.',
          'Check if a list is a palindrome by comparing to its reverse.',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1) in-place, O(n) for slice',
    },
    deepDive: {
      overview: 'list.reverse() is a C-level in-place operation; reversed() returns a lazy iterator; slicing allocates a new list.',
      analogy: 'Tape rewinding: reversed() is lazy (seeks each item on demand), slicing dubs the whole tape immediately.',
      steps: [
          'reversed(lst) returns list_reverseiterator — no copy.',
          'list(reversed(lst)) forces evaluation into new list.',
          'for x in reversed(lst) is memory-efficient for large lists.',
          'numpy arrays: arr[::-1] creates a view (O(1), shared memory).',
      ],
      visual: 'reversed([1,2,3]) → iterator yielding 3,2,1 on demand',
      commonMistakes: [
          'Calling list.reverse() on a range or tuple (not supported; convert first).',
          'Mutating during reversed() iteration causes undefined behavior.',
      ],
      practice: [
          'Reverse a linked list in-place.',
          'Iterate a large file backwards using reversed().',
      ],
    },
  },
};

export default overlay;
