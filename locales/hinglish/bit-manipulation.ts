import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Bit ops use karo: (1) 13 even/odd check, (2) 255 mein set bits count, (3) XOR se 5 aur 9 swap.',
  hint: 'Even/odd: n & 1 == 0. Count bits: while n: count += n & 1; n >>= 1. XOR swap: a^=b; b^=a; a^=b.',
  explanation: {
    simple: {
      overview: 'Bit manipulation — binary level pe directly kaam karo. Fast, memory efficient, interviews mein common hai.',
      analogy: 'Jaise binary switch panel — har switch on/off hai, combinations se magic karo.',
      steps: [
        'AND (&): dono bits 1 toh 1 — masking ke liye',
        'OR (|): koi bhi 1 toh 1 — set bits ke liye',
        'XOR (^): different bits 1 — toggle/cancel ke liye',
        'Left shift (<<): multiply by 2, Right shift (>>): divide by 2',
      ],
      visual: `5 = 101
3 = 011
5 & 3 = 001 = 1
5 | 3 = 111 = 7
5 ^ 3 = 110 = 6
5 << 1 = 1010 = 10`,
      commonMistakes: [
        'Operator precedence — bit ops low priority hain, parentheses use karo',
        'Python mein negative integers two\'s complement infinite precision',
        'Java/C mein ~ aur Python mein ~ alag behave karte hain',
      ],
      practice: [
        'Check karo number power of 2 hai ya nahi: n & (n-1) == 0',
        'Count set bits (Hamming weight) implement karo',
      ],
    },
    deepDive: {
      overview: 'Bit tricks interview favorites hain — Brian Kernighan, XOR swap, bitmask DP, bit fields sab kaam aate hain.',
      steps: [
        'n & (n-1): lowest set bit clear karta hai (popcount ke liye)',
        'n & (-n): lowest set bit isolate karta hai',
        'XOR: pairs cancel hote hain — isolated element dhundho',
        'Bitmask DP: sab subsets enumerate karo O(2^n*n)',
      ],
      commonMistakes: [
        'Python ka ~ alag hai C/Java se — (~n = -(n+1))',
        'Bade shifts unexpected large numbers banate hain Python mein',
      ],
      practice: [
        'Brian Kernighan algorithm se set bits count karo',
        'XOR se integer array mein isolated element nikalo',
      ],
    },
  },
};

export default overlay;
