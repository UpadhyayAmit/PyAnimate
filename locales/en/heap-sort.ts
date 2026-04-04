import type { LessonLocaleOverlay } from '../types';

const heapSort: LessonLocaleOverlay = {
  explanation: {
    simple: {
      overview: 'Heap Sort builds a max-heap, then repeatedly extracts the max to the end of the array.',
      analogy: 'Priority queue of tasks: always pop the top priority and place it at the back of the timeline.',
      steps: [
        'Heapify the array into a max-heap (bottom-up).',
        'For end from n-1 down to 1:',
        'Swap arr[0] (max) with arr[end].',
        'Reduce heap size by 1.',
        'Sift-down arr[0] to restore heap property.',
      ],
      visual: 'Binary tree where parent ≥ children; max bubbles to root then moves to sorted tail.',
      commonMistakes: [
        'Mixing 0-based and 1-based child index formulas.',
        'Forgetting to shrink heap size after each extraction.',
        'Heapifying top-down (O(n log n)) instead of bottom-up (O(n)).',
      ],
      practice: [
        'Heapify [4,10,3,5,1] step by step.',
        'Explain why heap sort is not stable.',
        'Use min-heap to sort descending.',
      ],
      timeComplexity: 'O(n log n)',
      spaceComplexity: 'O(1) in-place',
    },
    deepDive: {
      overview: 'Heap Sort guarantees O(n log n) worst-case with constant extra space; extraction order is deterministic.',
      analogy: 'Maintaining a complete binary tree; each sift-down repairs one root-to-leaf path.',
      steps: [
        'Build heap in O(n) using Floyd’s method from last non-leaf to root.',
        'Loop end = n-1..1: swap root with end, decrement heap_size.',
        'Sift-down root, always comparing with the larger child.',
        'Invariant: prefix [0..heap_size-1] is a heap; suffix is sorted.',
        'Stop when heap_size = 1.',
      ],
      visual: 'Array view: [heap | sorted tail]; heap shrinks while tail grows rightward.',
      commonMistakes: [
        'Using sift-up during extraction instead of sift-down.',
        'Choosing the wrong child when both exist.',
        'Leaving stale heap_size and doing extra iterations.',
      ],
      practice: [
        'Derive O(n) heap-build by summing work per level.',
        'Implement 3-ary heap and discuss branching factor impact.',
        'Benchmark heap sort vs quicksort on nearly sorted data.',
      ],
      timeComplexity: 'Build O(n) + (n-1) sift-downs O(log n) → O(n log n)',
      spaceComplexity: 'Θ(1)',
    },
  },
};

export default heapSort;
