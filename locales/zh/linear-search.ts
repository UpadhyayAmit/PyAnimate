import type { LessonLocaleOverlay } from '../types';

const linearSearch: LessonLocaleOverlay = {
  explanation: {
    simple: {
      overview: 'Linear Search 按顺序逐个检查数组元素，直到找到 target 或扫描结束。',
      analogy: '像在未排序书架上找书：一本一本看。',
      steps: [
        '从 index 0 开始。',
        '比较 arr[i] 和 target。',
        '相等则返回 i。',
        '不相等就继续下一个。',
        '到末尾还没找到则返回 not found。',
      ],
      visual: '[7 2 9 4] -> 7 no -> 2 yes (index 1).',
      commonMistakes: [
        '循环条件写成 i < n-1 导致漏掉最后一个元素。',
        '没有处理空数组。',
        '对 sorted 数据仍然使用 linear search。',
      ],
      practice: [
        '统计 best/worst/average 比较次数。',
        '返回 target 的所有下标。',
        '实现双端扫描并比较效果。',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'Linear Search 实现简单、开销低，适合小规模数据或流式数据。',
      analogy: '只能单次读取的数据流，不能回放。',
      steps: [
        'Invariant：所有 < i 的位置都已检查。',
        '每个元素最多比较一次。',
        '找到第一个匹配就提前退出。',
        '未找到时总共比较 n 次。',
        '返回 index 或 -1。',
      ],
      visual: '已检查区域从左到右不断扩大。',
      commonMistakes: [
        '浮点数直接做相等比较而不设容差。',
        '大量重复查询场景不考虑 hash 结构。',
        '对超小输入过度优化。',
      ],
      practice: [
        '写出 loop invariant 的证明。',
        '实现 sentinel 优化。',
        '实现大小写不敏感的字符串线性查找。',
      ],
      timeComplexity: 'Theta(n)',
      spaceComplexity: 'Theta(1)',
    },
  },
};

export default linearSearch;
