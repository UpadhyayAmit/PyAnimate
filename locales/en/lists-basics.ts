import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Create a list of 5 numbers. Append 99, remove the smallest, then print sorted.',
  hint: 'Use append(), remove(), and sorted(). The min() function finds the smallest value.',
  explanation: {
    simple: {
      overview: 'Python lists are ordered, mutable, dynamically sized containers supporting any type.',
      analogy: 'A shopping list that can grow or shrink; you can add, remove, or reorder items freely.',
      steps: [
          'Create: lst = [1, 2, 3] or lst = list(range(5)).',
          'Access: lst[0] for first, lst[-1] for last.',
          'Append: lst.append(x); insert: lst.insert(i, x).',
          'Remove: lst.remove(x) by value; del lst[i] by index; lst.pop(i) by index (returns item).',
      ],
      visual: 'lst=[1,2,3]; lst.append(4) → [1,2,3,4]; del lst[0] → [2,3,4]',
      commonMistakes: [
          'IndexError when accessing out of range.',
          'list.remove() raises ValueError if element not found.',
      ],
      practice: [
          'Build a stack using a list (append/pop).',
          'Find all duplicates in a list.',
      ],
      timeComplexity: 'append O(1) amortized, insert/remove O(n)',
      spaceComplexity: 'O(n)',
    },
    deepDive: {
      overview: 'CPython lists are dynamic arrays; append is amortized O(1) via over-allocation (growth factor ~1.125).',
      analogy: 'Vector in C++: when capacity fills, allocate a bigger buffer and copy — rarely; amortized cost is O(1).',
      steps: [
          'sys.getsizeof([]) shows base overhead; each element pointer is 8 bytes.',
          'Over-allocation: list of n items may have capacity n*1.125.',
          'insert(0, x) is O(n) — shifts every element right.',
          'Sort: Timsort O(n log n) — stable, adaptive to partial order.',
      ],
      visual: 'Capacity growth: 0→4→8→16→25→... avoids O(n²) copy overhead',
      commonMistakes: [
          'Using list as a queue (pop(0) is O(n)); use collections.deque instead.',
          'Sorting a list of mixed types raises TypeError in Python 3.',
      ],
      practice: [
          'Measure memory usage at various list sizes with sys.getsizeof.',
          'Compare deque.appendleft vs list.insert(0,x) for 10k operations.',
      ],
    },
  },
};

export default overlay;
