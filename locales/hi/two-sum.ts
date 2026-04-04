import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '[2, 7, 11, 15] में दो indices ढूंढें जिनका sum 9 हो। फिर target=18 के लिए solve करें।',
  hint: 'Hash map use करें: हर number के लिए check करें कि (target - num) already stored है। O(n) vs O(n²)।',
  explanation: {
    simple: {
      overview: 'Two Sum: array mein do elements dhundo jinका sum target hai, unke indices return karo.',
      analogy: 'Jaise wallet ke coins se exact amount banana—har coin ke liye check karo kitna aur chahiye.',
      steps: [
        'Dictionary seen={} banao',
        'Har number par iterate karo',
        'complement=target-num calculate karo',
        'Agar complement seen mein hai toh answer mila, warna num seen mein add karo',
      ],
      visual: `nums=[2,7,11,15], target=9
num=2: need=7, seen={2:0}
num=7: need=2, 2 in {2:0}!
→ [0,1]`,
      commonMistakes: [
        'Sort+two pointer O(n log n) hai aur indices change ho jaate hain',
        'Same element do baar use nahi kar sakte',
      ],
      practice: [
        'Saare pairs jo target sum dete hain return karo (indices ki jagah values)',
        '3Sum tak extend karo',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: 'Hash table O(n) time space, sort+two pointer O(n log n) time O(1) space lekin indices change.',
      steps: [
        'Hash table: complement=target-x → O(1) lookup',
        'Two pointer: sorted array mein left+right sum check',
        'Multiple targets/pairs: sort+two pointer better',
        '3Sum: fix x then two pointer for rest',
      ],
      commonMistakes: [
        'Same element do baar use karna (index validate karo)',
        'O(n²) brute force use karna (hash use karo)',
      ],
      practice: [
        'Sort+two pointer 2Sum implement karo',
        '3Sum ke saare unique triplets nikalo',
      ],
    },
  },
};

export default overlay;
