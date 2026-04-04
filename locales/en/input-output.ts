import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Ask the user for two numbers and print their sum, difference, and product.',
  hint: 'input() always returns a string. Use int() or float() to convert before math.',
  explanation: {
    simple: {
      overview: 'input() reads a line from the user; print() writes to the screen.',
      analogy: 'A vending machine: you type a code (input), it gives a snack (output).',
      steps: [
          'name = input(\'Enter name: \') pauses for user text.',
          'User types and presses Enter; input() returns the string.',
          'print(f\'Hello, {name}!\') displays the result.',
      ],
      visual: 'stdin → input() → variable → print() → stdout',
      commonMistakes: [
          'Forgetting input() always returns a string; convert with int() for numbers.',
          'Missing the prompt string and confusing the user.',
      ],
      practice: [
          'Ask for two numbers, add them, and print the sum.',
          'Handle bad input with try/except ValueError.',
      ],
    },
    deepDive: {
      overview: 'input() wraps sys.stdin.readline(), strips the trailing newline, and returns a str.',
      analogy: 'A network socket read: data arrives as bytes, decoded to a string before your code sees it.',
      steps: [
          'sys.stdin.readline() reads until newline.',
          'The newline is stripped.',
          'Return value is always str regardless of content.',
      ],
      visual: 'sys.stdin (bytes) → decode(encoding) → str → your variable',
      commonMistakes: [
          'Piping input from a file and hitting EOF: wrap in try/except EOFError.',
          'Blocking on input in async code; use asyncio compatible IO.',
      ],
      practice: [
          'Redirect a file to stdin and read multiple values.',
          'Build a simple REPL that echoes uppercase until \'quit\'.',
      ],
    },
  },
};

export default overlay;
