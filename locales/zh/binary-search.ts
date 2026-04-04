import type { LessonLocaleOverlay } from '../types';

const binarySearch: LessonLocaleOverlay = {
  explanation: {
    simple: {
      overview: 'Binary Search 通过不断把 sorted array 对半缩小来查找 target。',
      analogy: '像查字典：先看中间，再决定往左还是往右。',
      steps: [
        '先设 low = 0，high = n - 1。',
        '计算 mid = (low + high) // 2。',
        '如果 arr[mid] == target，返回 mid。',
        '如果 target 更小，high = mid - 1。',
        '否则 low = mid + 1，循环条件是 low <= high。',
      ],
      visual: '[1 3 5 7 9] -> 看 5 -> 往右 -> 找到 7。',
      commonMistakes: [
        '更新 low/high 后忘记重新计算 mid。',
        '循环写成 <，导致最后一个元素被跳过。',
        'mid = (low + high) 在某些语言可能溢出。',
      ],
      practice: [
        '在 7 个元素的数组上分别演示存在和不存在的 target。',
        '实现没找到时返回 insertion index 的版本。',
        '用反例说明为什么必须是 sorted array。',
      ],
      timeComplexity: 'O(log n)',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'Binary Search 是基于 monotonic 条件的 divide-and-conquer，每一步都丢弃一半搜索区间。',
      analogy: '可以看成高度约为 log2(n) 的 decision tree。',
      steps: [
        '维护 inclusive 区间 [low, high]。',
        '用 mid = low + ((high - low) >> 1) 避免 overflow。',
        '根据 arr[mid] 与 target 的关系选择保留哪一半。',
        'Invariant：若 target 存在，它始终在 [low, high] 内。',
        '当 low > high 结束；insertion point 是 low。',
      ],
      visual: '[0..n-1] -> 左半或右半 -> 再继续二分。',
      commonMistakes: [
        '写成 low = mid 或 high = mid，可能死循环。',
        '对 duplicates 不定义 first/last policy。',
        '忽略 sorted 前提直接套用。',
      ],
      practice: [
        '实现 lower_bound 和 upper_bound。',
        '写出 loop invariant 的简短证明。',
        '扩展到 rotated sorted array 的二分查找。',
      ],
      timeComplexity: 'Theta(log n)',
      spaceComplexity: 'Theta(1)',
    },
  },
};

export default binarySearch;
