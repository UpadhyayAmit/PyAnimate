import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Modify the program to print your name and favorite language.',
  hint: 'Use print() with a string argument. Remember quotes around text.',
  explanation: {
    simple: {
      overview: 'Hello World is the classic first program: print a greeting string to the screen.',
      analogy: 'Turning on a light switch for the first time — a tiny action that proves the whole system works.',
      steps: [
          'Call the print function.',
          'Pass the string \'Hello, World!\' as the argument.',
          'The runtime writes it to standard output.',
      ],
      visual: 'Source → Interpreter → stdout: Hello, World!',
      commonMistakes: [
          'Forgetting the closing parenthesis.',
          'Mixing up single and double quotes inconsistently.',
      ],
      practice: [
          'Print your own name.',
          'Print a multi-line message using two print calls.',
      ],
    },
    deepDive: {
      overview: 'Under the hood, print encodes the string to bytes and writes it to the stdout file descriptor.',
      analogy: 'A postal service address resolution: your message travels through OS layers to a terminal buffer.',
      steps: [
          'print() calls sys.stdout.write() internally.',
          'write() encodes using sys.stdout.encoding.',
          'OS flushes the buffer to the terminal.',
      ],
      visual: 'print → sys.stdout → file descriptor 1 → terminal',
      commonMistakes: [
          'Assuming print flushes instantly (use flush=True if needed).',
          'Not accounting for encoding on Windows (cp1252 vs utf-8).',
      ],
      practice: [
          'Use print(end=\'\') to suppress the newline.',
          'Redirect stdout to a file and observe the output.',
      ],
    },
  },
};

export default overlay;
