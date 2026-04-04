import type { LessonLocaleOverlay } from '../types';

const heapSort: LessonLocaleOverlay = {
  explanation: {
    simple: {
      overview: 'Heap Sort 先构建 max-heap，然后每轮把最大值放到数组末尾。',
      analogy: '像 Priority Queue：每次都先取出最大的元素。',
      steps: [
        '先对数组执行 heapify 构建 max-heap。',
        '把 root 和最后一个未排序元素 swap。',
        'heap_size 减 1。',
        '从 root 做 sift-down 恢复堆性质。',
        '重复直到 heap_size 为 1。',
      ],
      visual: '[heap | sorted tail] 中右侧 sorted 区域不断增长。',
      commonMistakes: [
        '0-based child index 公式写错。',
        '每次 extraction 后忘记减少 heap_size。',
        'swap 后错误使用 sift-up。',
      ],
      practice: [
        '手动 heapify [4,10,3,5,1]。',
        '解释为什么 Heap Sort 不是稳定排序。',
        '用 min-heap 实现降序排序。',
      ],
      timeComplexity: 'O(n log n)',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'Heap Sort 在 worst case 下仍然是 O(n log n)，并且辅助空间为常数。',
      analogy: '在 complete binary tree 上不断修复 root 到 leaf 的路径。',
      steps: [
        '使用 bottom-up build-heap，复杂度 O(n)。',
        'end 从 n-1 到 1：执行 root/end swap。',
        'heap_size--，然后对 root 执行 sift-down。',
        'Invariant：prefix 是 heap，suffix 已 sorted。',
        'heap_size == 1 时结束。',
      ],
      visual: 'heap 逐步缩小，sorted tail 逐步扩大。',
      commonMistakes: [
        'sift-down 时选择了错误 child。',
        'swap 后没有恢复 heap invariant。',
        '内层循环做了不必要的重复计算。',
      ],
      practice: [
        '推导 build-heap 为什么是 O(n)。',
        '和 Quick Sort 对比 swap 次数。',
        '实现非递归 iterative 版本。',
      ],
      timeComplexity: 'Theta(n log n)',
      spaceComplexity: 'Theta(1)',
    },
  },
};

export default heapSort;
