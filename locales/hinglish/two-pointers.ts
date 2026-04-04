import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Sorted array [1,3,6,8,10] par two pointers use karke wo pairs dhundho jinका sum 11 ho.',
  hint: 'left=0, right=len-1 se start karo. sum < target to left right; sum > target to right left.',
  explanation: {
    simple: {
      overview: 'Two pointers technique: sorted array pe do pointers se O(n) mein solve karo jo brute force O(n^2) leta.',
      analogy: 'Jaise rope ke dono ends se tighten karo — ek end se chhodo, dusre end se uthao.',
      steps: [
        'Left pointer start pe, right pointer end pe',
        'Condition ke hisaab se left ya right move karo',
        'Jab left >= right ho toh stop karo',
      ],
      visual: `arr = [1,2,3,4,5,6], target=7
left=0(1), right=5(6) -> sum=7 found!`,
      commonMistakes: [
        'Sorted array assume karna zaroor — unsorted pe kaam nahi karta',
        'Pointer update karna bhool jaana — infinite loop',
        'left < right condition use karo (not <=)',
      ],
      practice: [
        'Two sum in sorted array solve karo',
        'Container with most water solve karo',
      ],
    },
    deepDive: {
      overview: 'Two pointers O(n) mein linear scan karta hai — sliding window, fast-slow pointers bhi isi family mein.',
      steps: [
        'Same direction: fast-slow (cycle detection, middle of list)',
        'Opposite direction: pair sum, container with water',
        'Sliding window: fixed/variable size subarray',
        'Three-sum: fix one, two-pointer rest se',
      ],
      commonMistakes: [
        'Duplicates skip karna bhool jaana three-sum mein',
        'Sorted prerequisite ignore karna',
      ],
      practice: [
        'Three-sum problem solve karo two-pointer se',
        'Cycle detection in linked list (Floyd algorithm)',
      ],
    },
  },
};

export default overlay;
