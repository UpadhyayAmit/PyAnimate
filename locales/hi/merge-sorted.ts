import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '[1, 3, 5, 7] और [2, 4, 6, 8] को sort() use किए बिना एक sorted array में merge करें।',
  hint: 'Two pointers (i, j) use करें। arr1[i] vs arr2[j] compare करें, smaller append करें, pointer advance करें।',
  explanation: {
    simple: {
      overview: 'Do sorted lists ko ek sorted list mein merge karna.',
      analogy: 'Do haath ke sorted patte ek ek karke compare karke ek dheri mein daalna.',
      steps: [
        'Dono lists ke liye ek-ek pointer set karo',
        'Chhota element result mein add karo aur pointer advance karo',
        'Ek khatam hone par doosre ke baaki sab add karo',
        'Result fully sorted hoga',
      ],
      visual: `A=[1,3,5] B=[2,4,6]
i=0,j=0→1 i=1,j=0→2 i=1,j=1→3
→[1,2,3,4,5,6]`,
      commonMistakes: [
        'Ek khatam hone par baaki loop mein add nahi karna',
        'Condition mein pointer direction galat likhna',
      ],
      practice: [
        'Teen sorted lists merge karo',
        'Heap se k sorted lists merge karo',
      ],
      timeComplexity: 'O(n + m)',
      spaceComplexity: 'O(n + m)'
    },
    deepDive: {
      overview: 'O(n+m) sorted lists merge LeetCode #21 classic hai, in-place merge O(1) space lekin O(n²).',
      steps: [
        'Two-pointer merge O(n+m) time space',
        'In-place: Gap method O(1) space O(n log n)',
        'Python heapq N-way merge ke liye',
        'List head insert O(n²), deque use karo',
      ],
      commonMistakes: [
        'In-place ke liye unnecessary complexity',
        'k-way merge mein heap use nahi karna',
      ],
      practice: [
        'Heap priority queue se k sorted lists merge karo',
        'Linked list mein two sorted lists merge karo',
      ],
    },
  },
};

export default overlay;
