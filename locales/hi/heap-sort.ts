import type { LessonLocaleOverlay } from '../types';

const heapSort: LessonLocaleOverlay = {
  explanation: {
    simple: {
      overview: 'Heap Sort पहले max-heap बनाता है और हर step में सबसे बड़ा element अंत में रखता है।',
      analogy: 'Priority queue जैसा: हमेशा सबसे बड़ा value पहले निकलता है।',
      steps: [
        'array को heapify करके max-heap बनाओ।',
        'root को last unsorted element से swap करो।',
        'heap_size को 1 कम करो।',
        'root से sift-down चलाओ।',
        'heap_size 1 होने तक repeat करो।',
      ],
      visual: '[heap | sorted tail] में right side का sorted part बढ़ता जाता है।',
      commonMistakes: [
        '0-based child index गलत लेना।',
        'हर extraction के बाद heap_size कम न करना।',
        'swap के बाद sift-up करना जबकि sift-down चाहिए।',
      ],
      practice: [
        '[4,10,3,5,1] का heapify trace बनाओ।',
        'बताओ Heap Sort stable क्यों नहीं है।',
        'descending sort के लिए min-heap variant बनाओ।',
      ],
      timeComplexity: 'O(n log n)',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'Heap Sort worst case में O(n log n) guarantee देता है और extra memory constant रखता है।',
      analogy: 'Complete binary tree जहां हर repair root से leaf path पर होती है।',
      steps: [
        'bottom-up build-heap O(n) में करो।',
        'end = n-1 से 1 तक: root/end swap करो।',
        'heap_size-- और root पर sift-down करो।',
        'Invariant: prefix heap है, suffix sorted है।',
        'heap_size == 1 पर algorithm stop होता है।',
      ],
      visual: 'heap shrink होता है और sorted tail grow करती है।',
      commonMistakes: [
        'sift-down में गलत child चुनना।',
        'swap के बाद heap property restore न करना।',
        'inner loop में बेकार recomputation करना।',
      ],
      practice: [
        'prove करो build-heap O(n) क्यों है।',
        'Quick Sort से swaps compare करो।',
        'non-recursive iterative version लिखो।',
      ],
      timeComplexity: 'Theta(n log n)',
      spaceComplexity: 'Theta(1)',
    },
  },
};

export default heapSort;
