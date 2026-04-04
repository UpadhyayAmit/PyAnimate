import type { LessonLocaleOverlay } from '../types';

const quickSort: LessonLocaleOverlay = {
  explanation: {
    simple: {
      overview: 'Quick Sort chooses a pivot, partitions elements into less/greater, then recursively sorts the partitions.',
      analogy: 'Pivot guest at a doorway: shorter to the left, taller to the right, then repeat inside each room.',
      steps: [
        'Choose a pivot (middle or random).',
        'Partition so items < pivot go left, > pivot go right (equals can sit with pivot).',
        'Recursively quicksort left and right partitions.',
        'Combine; array is sorted in place.',
        'Stop when partition size ≤ 1.',
      ],
      visual: 'Partition [9,3,7,1] around pivot 7 → [3,1 | 7 | 9].',
      commonMistakes: [
        'Always picking first/last as pivot, causing O(n²) on sorted input.',
        'Partition loop that fails to move pointers → infinite loop.',
        'Not handling many duplicates (use 3-way partition).',
      ],
      practice: [
        'Implement Lomuto vs Hoare partition and compare swaps.',
        'Add random pivot; test on sorted and reverse-sorted arrays.',
        'Trace quicksort with duplicates; explain stability (it is unstable).',
      ],
      timeComplexity: 'Average O(n log n); worst O(n²) if partitions are skewed',
      spaceComplexity: 'O(log n) recursion stack on average',
    },
    deepDive: {
      overview: 'Quick Sort is in-place and cache-friendly; good pivots (median-of-three/random) avoid worst cases.',
      analogy: 'Divide-and-conquer on the final rank of the pivot.',
      steps: [
        'Median-of-three pivot: median of first/mid/last.',
        'Partition maintaining invariant [<= pivot | unknown | >= pivot].',
        'Tail-recurse on smaller side first to cap stack depth.',
        'Use 3-way partition to group equals and prevent skew.',
        'Switch to insertion sort for very small partitions.',
      ],
      visual: 'Pointers i/j move toward each other; pivot ends at its final index.',
      commonMistakes: [
        'Recursing on larger side first → stack depth O(n).',
        'Leaving pivot outside partition, so it stays unsorted.',
        'Over-partitioning when all elements equal; 3-way fixes it.',
      ],
      practice: [
        'Prove expected O(n log n) with random pivots.',
        'Instrument partition to count swaps vs comparisons.',
        'Compare cache misses vs merge sort on large arrays.',
      ],
      timeComplexity: 'Expected Θ(n log n); worst Θ(n²)',
      spaceComplexity: 'Θ(log n) with tail-call optimization',
    },
  },
};

export default quickSort;
