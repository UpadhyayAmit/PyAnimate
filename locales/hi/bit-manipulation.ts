import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Bit ops use करें: (1) 13 even/odd check, (2) 255 में set bits count, (3) XOR से 5 और 9 swap।',
  hint: 'Even/odd: n & 1 == 0। Count bits: while n: count += n & 1; n >>= 1। XOR swap: a^=b; b^=a; a^=b।',
  explanation: {
    simple: {
      overview: 'Bit manipulation integers ke bits (0/1) par directly kaam karta hai, fast aur memory-efficient processing ke liye.',
      analogy: 'Jaise room mein light switches ki row—har switch ek bit hai, independently on/off kar sakte hain.',
      steps: [
        'AND(&): dono 1 toh 1',
        'OR(|): koi ek 1 toh 1',
        'XOR(^): alag hain toh 1 (toggle)',
        'NOT(~), left shift (<<), right shift (>>)',
      ],
      visual: `5 = 0101
3 = 0011
5&3=0001=1
5|3=0111=7
5^3=0110=6
5<<1=1010=10`,
      commonMistakes: [
        'Python integers arbitrary precision hain—bit length variable',
        'Python mein ~n is -(n+1)',
        'C/Java se shift overflow thinking',
      ],
      practice: [
        'Bit operation se n power of 2 hai check karo (n&(n-1)==0)',
        'Bit mask se integer ke saare subsets generate karo',
      ],
      timeComplexity: 'O(1) per bit operation',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'Bit operations masking, optimization, subset generation aur DP ke liye, Python infinite precision par dhyan do.',
      steps: [
        'n&(n-1) lowest set bit clear karta hai (popcount ke liye)',
        'n&(-n) lowest set bit milta hai',
        'XOR: pairs cancel out isolated element dhundo',
        'Bit DP saare subsets n bits ke liye O(2^n*n)',
      ],
      commonMistakes: [
        'Python ka ~ C/Java se alag hai (signed 2s complement)',
        'Bade shifts unexpected large numbers banate hain',
      ],
      practice: [
        'Brian Kernighan algorithm se set bits count karo',
        'XOR se integer pairs se isolated element nikalo',
      ],
    },
  },
};

export default overlay;
