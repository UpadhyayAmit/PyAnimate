import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '[2, 1, 5, 1, 3, 2] mein size k=3 wale subarray ka maximum sum dhundho.',
  hint: 'Pehle window sum compute karo, phir slide karo: niklne wala subtract karo, aane wala add karo.',
  explanation: {
    simple: {
      overview: 'Sliding window: array pe ek window slide karte karte best/max/min subarray find karo — O(n).',
      analogy: 'Jaise train ki window se bahar dekho — window move hoti hai, view update hota hai.',
      steps: [
        'Window bounds define karo (left, right)',
        'Window expand/shrink karo condition ke hisaab se',
        'Window mein aggregate maintain karo (sum, max, set)',
        'min/max window size ya score track karo',
      ],
      visual: `[2,1,5,1,3,2] k=3
[2,1,5]=8, [1,5,1]=7, [5,1,3]=9, [1,3,2]=6
Max sum = 9`,
      commonMistakes: [
        'Window shrink bhool jaana — window left pointer advance karo',
        'Fixed vs variable size window — problem statement padho',
        'Edge case: empty array ya k > array size',
      ],
      practice: [
        'Maximum sum subarray of size k nikalo',
        'Longest substring without repeating characters solve karo',
      ],
    },
    deepDive: {
      overview: 'Variable sliding window mein two-pointer se O(n) — monotonic deque se window max/min O(1).',
      steps: [
        'Fixed window: sum update O(1) per slide',
        'Variable window: shrink jab condition violate hoti hai',
        'Deque se O(1) window maximum/minimum',
        'String problems: character set ke liye dict/Counter',
      ],
      commonMistakes: [
        'Characters track karna string windows mein — dict use karo',
        'Deque se stale indices remove karo (front se)',
      ],
      practice: [
        'Minimum window substring solve karo',
        'Maximum of all windows of size k (deque approach)',
      ],
    },
  },
};

export default overlay;
