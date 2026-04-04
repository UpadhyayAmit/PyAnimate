import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '计数排序',
  hint: '通过统计频率，在 O(n+k) 时间内对小范围整数排序。',
  approach: '在计数数组中统计输入值，然后从计数重建已排序的输出。',
  useCases: [
    '对小范围整数排序（如成绩0-100）',
    'Radix Sort的基础算法',
    '当O(n+k)比O(n log n)可行时',
  ],
  explanation: {
    simple: {
      overview: '计数排序通过计数每个值的出现次数来排序——适合范围有限的整数。',
      analogy: '就像统计选举票数然后按顺序列出。',
      steps: [
        '创建大小为值域(max-min+1)的计数数组',
        '统计每个元素的出现次数',
        '将计数转为累积和',
        '将元素放入输出数组并减少计数',
      ],
      visual: `[4,2,2,8,3,3,1]
count[1]=1,count[2]=2,count[3]=2...
→[1,2,2,3,3,4,8]`,
      commonMistakes: [
        '不处理有偏移的负数',
        '值域大时空间消耗过大',
      ],
      practice: [
        '对小写字母字符串计数排序',
        '一次遍历同时求最大最小值',
      ],
      timeComplexity: 'O(n + k) k为值域',
      spaceComplexity: 'O(k)'
    },
    deepDive: {
      overview: '计数排序O(n+k)且稳定，基数排序对d位n元素实现O(d(n+k))。',
      steps: [
        '累积计数保证稳定性',
        '基数排序对每一位应用计数排序',
        '用最大最小值计算偏移',
        '也可用于字符串排序',
      ],
      commonMistakes: [
        'k大时使用(空间问题)',
        '反转稳定计数排序的前缀和步骤',
      ],
      practice: [
        '用基数排序实现0-999的数组排序',
        '验证计数排序对三位整数的稳定性',
      ],
    },
  },
};

export default overlay;
