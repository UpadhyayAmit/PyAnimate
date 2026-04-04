import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '不使用sort()将[1,3,5,7]和[2,4,6,8]合并成一个有序数组。',
  hint: '使用两个指针(i, j)。比较arr1[i]与arr2[j]，追加较小值，移动该指针。',
  explanation: {
    simple: {
      overview: '将两个有序列表归并成一个有序列表。',
      analogy: '将两手有序牌逐一比较合成一堆。',
      steps: [
        '为两个列表各设一个指针',
        '将较小的元素加入结果并推进指针',
        '一方耗尽后将另一方剩余全加入',
        '结果完全有序',
      ],
      visual: `A=[1,3,5] B=[2,4,6]
i=0,j=0→1 i=1,j=0→2 i=1,j=1→3
→[1,2,3,4,5,6]`,
      commonMistakes: [
        '一方耗尽后剩余不用循环追加',
        '条件里推进指针方向写错',
      ],
      practice: [
        '归并三个有序列表',
        '用堆归并k个有序列表',
      ],
      timeComplexity: 'O(n + m)',
      spaceComplexity: 'O(n + m)'
    },
    deepDive: {
      overview: 'O(n+m)归并有序列表是LeetCode #21的经典题，原地归并O(1)空间但O(n²)。',
      steps: [
        '双指针归并O(n+m)时间空间',
        '原地: Gap方法O(1)空间O(n log n)',
        'Python用heapq模块做N路归并',
        'list头部插入O(n²)，用deque',
      ],
      commonMistakes: [
        '为追求原地而引入不必要复杂度',
        'k路归并不用heap',
      ],
      practice: [
        '用heap优先队列归并k个有序列表',
        '归并链表中的两个有序列表',
      ],
    },
  },
};

export default overlay;
