import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '归并排序',
  hint: '分治法 — 分割、递归排序、合并，始终 O(n log n)。',
  approach: '递归地将数组分成两半，直到单个元素，然后合并已排序的两半。',
  useCases: [
    '磁盘上的大型数据集（外部排序）',
    '链表排序',
    '需要稳定排序的场景',
  ],
  explanation: {
    simple: {
      overview: '归并排序将数组一分为二，递归排序，再归并两个有序半部分。分治法。',
      analogy: '把一副打乱的牌分成小组分别排序再归并。',
      steps: [
        'n<=1则返回(基础情况)',
        '在中点将数组分成两半',
        '递归排序左右两半',
        '将两个有序半部分归并为一个',
      ],
      visual: `[38,27,43,3]
→[38,27] [43,3]
→[27,38] [3,43]
→[3,27,38,43]`,
      commonMistakes: [
        '归并时忘记推进两个指针',
        '基础情况写错(n==0而非n==1)',
      ],
      practice: [
        '单独实现merge函数',
        '实现链表的归并排序',
      ],
      timeComplexity: 'O(n log n)',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: '归并排序稳定且保证O(n log n)，适合链表排序和外部排序。',
      steps: [
        '数组递归深度为O(log n)',
        '每层归并O(n)→总计O(n log n)',
        '自底向上版避免栈溢出',
        '外部归并排序处理大量HDD数据',
      ],
      commonMistakes: [
        '不考虑O(n)空间在小设备上内存不足',
        '小子数组不用插入排序增加常数系数',
      ],
      practice: [
        '实现自底向上迭代归并排序',
        '用归并排序统计逆序对数量',
      ],
    },
  },
};

export default overlay;
