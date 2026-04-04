import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Use a while loop to print numbers 1–10, then print their sum.',
  hint: 'Keep a counter variable and update it each iteration. Stop when counter > 10.',
  explanation: {
    simple: {
      overview: 'A while loop repeats its body as long as a condition stays True.',
      analogy: 'Waiting for a bus: keep checking, board when it arrives.',
      steps: [
          'Write condition: while n > 0:',
          'Update the variable inside the loop to eventually make it False.',
          'break to exit early; continue to skip the rest of the body.',
          'Infinite loop: while True: ... break when done.',
      ],
      visual: 'n=3 → True(body,n=2) → True(body,n=1) → True(body,n=0) → False → done',
      commonMistakes: [
          'Forgetting to update the loop variable causing an infinite loop.',
          'Using == with floats as loop condition (float precision).',
      ],
      practice: [
          'Implement a countdown from 10 to 1.',
          'Read user input until \'quit\' is entered.',
      ],
      timeComplexity: 'O(n) iterations',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'while is syntactic sugar for an if-check followed by a goto back to the condition.',
      analogy: 'A CPU instruction cycle: fetch-decode-execute loops until a halt signal.',
      steps: [
          'Condition evaluated before each iteration.',
          'If False at first check, body never runs.',
          'do-while semantics: while True: body; if not cond: break.',
          'Python optimizes tail-recursive while via loop unrolling in some interpreters.',
      ],
      visual: '→ [check cond] → True → [body] → back to [check]; False → exit',
      commonMistakes: [
          'Not handling the off-by-one in counter-based while (use for instead).',
          'Relying on mutable state without understanding the execution order.',
      ],
      practice: [
          'Implement binary search using while instead of recursion.',
          'Build a simple game loop: while game_running: update(); render().',
      ],
    },
  },
};

export default overlay;
