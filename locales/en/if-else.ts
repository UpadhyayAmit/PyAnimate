import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Write a program that checks if a number is positive, negative, or zero.',
  hint: 'Use if/elif/else. Test each branch by changing the input value.',
  explanation: {
    simple: {
      overview: 'if/elif/else lets your program choose different paths based on conditions.',
      analogy: 'A traffic light: green → go, yellow → slow, red → stop.',
      steps: [
          'Write condition after if: if score >= 90:',
          'Add elif branches for additional conditions.',
          'End with else for the default case.',
          'Python checks top-to-bottom, takes the first True branch.',
      ],
      visual: 'score=85 → if(>=90): False → elif(>=70): True → print(\'B\')',
      commonMistakes: [
          'Using = (assignment) instead of == (comparison).',
          'Overlapping elif conditions making some branches unreachable.',
      ],
      practice: [
          'Write a grade calculator (A/B/C/D/F).',
          'Check if a number is positive, negative, or zero.',
      ],
      timeComplexity: 'O(1) per evaluation',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'Python evaluates conditions using truthiness: any non-zero/non-empty value is True.',
      analogy: 'Short-circuit evaluation: \'and\' stops at the first False, \'or\' stops at the first True.',
      steps: [
          'x and y: returns x if x is falsy, else y.',
          'x or y: returns x if x is truthy, else y.',
          'not x: inverts truthiness.',
          'Chained comparisons: 1 < x < 10 works as expected.',
      ],
      visual: '0 and \'hello\' → 0 (stops at 0); \'\' or \'default\' → \'default\'',
      commonMistakes: [
          'Relying on truthiness with 0 or empty string when you actually want None check.',
          'Not using \'is None\' vs \'== None\'.',
      ],
      practice: [
          'Use default parameter pattern: value = x or default.',
          'Implement ternary: result = a if condition else b.',
      ],
    },
  },
};

export default overlay;
