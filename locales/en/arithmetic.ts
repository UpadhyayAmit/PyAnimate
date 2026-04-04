import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Calculate the area and perimeter of a rectangle with width=7 and height=4.',
  hint: 'Area = width * height. Perimeter = 2 * (width + height). Use ** for exponentiation.',
  explanation: {
    simple: {
      overview: 'Python arithmetic operators (+, -, *, /, //, %, **) perform basic maths on numbers.',
      analogy: 'A calculator with extra buttons: // for floor divide, % for remainder, ** for power.',
      steps: [
          '5 + 3 = 8 (addition).',
          '17 // 5 = 3 (floor division, discards remainder).',
          '17 % 5 = 2 (remainder / modulo).',
          '2 ** 10 = 1024 (exponentiation).',
      ],
      visual: '17 ÷ 5 = 3 remainder 2  →  17//5 == 3, 17%5 == 2',
      commonMistakes: [
          'Using / when integer division is intended (5/2 is 2.5, not 2).',
          'Operator precedence surprises: 2+3*4 is 14, not 20.',
      ],
      practice: [
          'Compute the last digit of 12345 using %.',
          'Implement a simple interest formula.',
      ],
      timeComplexity: 'O(1)',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'Python integers are arbitrary precision (no overflow); floats follow IEEE 754 with rounding errors.',
      analogy: 'BigInteger library built-in; floats are scientific notation with limited mantissa bits.',
      steps: [
          'int ops: exact up to memory limit.',
          'float ops: 0.1+0.2 ≈ 0.3 due to binary fractions.',
          'Use decimal module for exact decimal arithmetic.',
      ],
      visual: '0.1 in binary = 0.0001100110011... (repeating) → rounded to 53 bits',
      commonMistakes: [
          'Comparing floats with ==; use abs(a-b) < epsilon.',
          'Dividing a very large int by a float and losing precision.',
      ],
      practice: [
          'Demonstrate 0.1+0.2 != 0.3 and fix with math.isclose.',
          'Compute 10**18 + 1 exactly using Python ints.',
      ],
    },
  },
};

export default overlay;
