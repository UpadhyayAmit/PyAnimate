import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '[2, 1, 5, 1, 3, 2] में size k=3 वाले subarray का maximum sum ढूंढें।',
  hint: 'पहले window sum compute करें, फिर slide करें: निकलने वाला subtract करें, आने वाला add करें।',
  explanation: {
    simple: {
      overview: 'Sliding window O(n) mein array/string ke contiguous subsequences solve karta hai.',
      analogy: 'Jaise train window se scenery—ek portion observe karo aur smoothly aage badhao.',
      steps: [
        'Window boundaries ke liye do pointers left aur right',
        'Right expand: right boundary right move karo',
        'Left contract: condition violate ho toh left boundary right move karo',
        'Har step mein answer update karo (maximum etc.)',
      ],
      visual: `"abcabcbb" longest non-repeating
→expand to a,b,c(3)
→left shift duplicate a remove karo
→b,c,a(3) → answer 3`,
      commonMistakes: [
        'Left shift par window data update nahi karna',
        'Sirf maximum window dhundna, minimum ignore karna',
      ],
      practice: [
        'Length k ka maximum consecutive sum nikalo',
        'Saare specified characters wali minimum substring dhundo',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(k) k window size'
    },
    deepDive: {
      overview: 'Fixed window simple hai, variable window ka left shrink logic key hai, deque/heapq maximum queries accelerate karte hain.',
      steps: [
        'Fixed size: har step add aur remove',
        'Variable: condition true hone par left++',
        'Monotonic deque mein sliding window maximum',
        'Frequency table + sliding longest non-repeating substring',
      ],
      commonMistakes: [
        'Shrink condition galat set karna',
        'Har step mein answer update karna bhool jana',
      ],
      practice: [
        'Deque se sliding window maximum implement karo',
        'At most k character replacement ke baad longest substring nikalo',
      ],
    },
  },
};

export default overlay;
