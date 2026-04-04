import type { LessonLocaleOverlay } from '../types';

const heapSort: LessonLocaleOverlay = {
  explanation: {
    simple: {
      overview: 'Heap Sort pehle max-heap banata hai, phir har round me biggest element ko end me place karta hai.',
      analogy: 'Priority queue jaisa behavior: sabse bada value pehle nikalta hai.',
      steps: [
        'array ka heapify karke max-heap banao.',
        'root ko last unsorted element ke saath swap karo.',
        'heap_size ek kam karo.',
        'root se sift-down chalao.',
        'heap_size 1 tak repeat karo.',
      ],
      visual: '[heap | sorted tail] me right side ka sorted part grow hota hai.',
      commonMistakes: [
        '0-based indexing me child index formula galat lagana.',
        'extraction ke baad heap_size update na karna.',
        'swap ke baad sift-up use karna instead of sift-down.',
      ],
      practice: [
        '[4,10,3,5,1] ka heapify step trace karo.',
        'Explain karo Heap Sort stable kyu nahi hai.',
        'min-heap use karke descending sort banao.',
      ],
      timeComplexity: 'O(n log n)',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'Heap Sort worst-case O(n log n) guaranteed deta hai with constant auxiliary space.',
      analogy: 'Complete binary tree jahan repair root se leaf path par hoti hai.',
      steps: [
        'bottom-up build-heap O(n) me karo.',
        'end = n-1 se 1 tak root/end swap karo.',
        'heap_size-- aur root par sift-down karo.',
        'Invariant: prefix heap hai, suffix sorted hai.',
        'heap_size == 1 par stop karo.',
      ],
      visual: 'heap chhota hota jata hai, sorted tail badi hoti jati hai.',
      commonMistakes: [
        'sift-down me wrong child choose karna.',
        'swap ke baad heap invariant restore na karna.',
        'inner loop me unnecessary recomputation karna.',
      ],
      practice: [
        'derive karo build-heap O(n) kyu hai.',
        'Quick Sort ke comparison me swaps count karo.',
        'iterative non-recursive version implement karo.',
      ],
      timeComplexity: 'Theta(n log n)',
      spaceComplexity: 'Theta(1)',
    },
  },
};

export default heapSort;
