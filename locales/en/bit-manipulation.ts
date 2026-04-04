import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Use bit ops to: (1) check if 13 is even/odd, (2) count set bits in 255, (3) swap 5 and 9 with XOR.',
  hint: 'Even/odd: n & 1 == 0. Count bits: while n: count += n & 1; n >>= 1. XOR swap: a^=b; b^=a; a^=b.',
  explanation: {
    simple: {
      overview: 'Bit manipulation operates directly on the binary representation of integers using &, |, ^, ~, <<, >>.',
      analogy: 'A row of light switches (bits): AND turns off switches that differ, OR turns on any that are on, XOR toggles where they differ.',
      steps: [
          'AND (&): both bits must be 1.',
          'OR (|): either bit must be 1.',
          'XOR (^): bits must differ; x^x=0, x^0=x.',
          'Shift: x<<1 multiplies by 2; x>>1 divides by 2.',
          'Check bit k: (x >> k) & 1. Set bit k: x | (1 << k). Clear bit k: x & ~(1 << k).',
      ],
      visual: '5=0101, 3=0011: 5&3=0001=1, 5|3=0111=7, 5^3=0110=6',
      commonMistakes: [
          'Confusing & (bitwise) with and (logical).',
          'Negative number bit patterns differ between languages (Python has infinite precision, no fixed width).',
      ],
      practice: [
          'Check if a number is a power of 2: n > 0 and (n & n-1) == 0.',
          'Count set bits (popcount) using Brian Kernighan\'s algorithm.',
      ],
      timeComplexity: 'O(1) per operation, O(log n) for iteration over bits',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'Bit tricks enable O(1) solutions for problems that would otherwise need loops: lowest set bit, next power of 2, Gray code.',
      analogy: 'Compiler intrinsic __builtin_popcount: the CPU has a single instruction for popcount in modern hardware.',
      steps: [
          'Lowest set bit: x & (-x) (two\'s complement trick).',
          'Remove lowest set bit: x & (x-1) — used in popcount loop.',
          'Next power of 2: n=x-1; n|=n>>1; n|=n>>2; n|=n>>4; n|=n>>8; n|=n>>16; return n+1.',
          'XOR swap: a^=b; b^=a; a^=b — no temp variable needed.',
      ],
      visual: 'x=12=1100; x&-x=0100=4 (lowest set bit); x&(x-1)=1000=8 (removed lowest)',
      commonMistakes: [
          'XOR swap fails when a and b are the same variable (a^=a gives 0).',
          'Python integers are signed with unlimited width — no 32-bit overflow to wrap around.',
      ],
      practice: [
          'Implement popcount using x & (x-1) loop.',
          'Encode/decode a Gray code sequence.',
      ],
    },
  },
};

export default overlay;
