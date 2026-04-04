import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '快速排序',
  hint: '选择基准，分割数组，递归排序。',
  approach: '选择一个枢轴，将较小的元素分到左边，较大的分到右边，然后递归排序两半。',
  useCases: [
    '通用快速原地排序',
    '因缓存友好在实际应用中表现最佳',
    '大型随机数据集',
  ],
  explanation: {
    simple: {
      overview: '快速排序选择一个基准值，将小元素放左、大元素放右，递归排序。',
      analogy: '教师让所有人按是否高于基准身高分成两组，再对各组排序。',
      steps: [
        '基础情况: n<=1则返回',
        '选基准(末尾/随机/中位数)',
        '分为小于/等于/大于三部分',
        '递归排序小于和大于部分',
      ],
      visual: `[3,6,8,10,1,2,1] pivot=3
→less=[1,2,1] equal=[3] greater=[6,8,10]
→[1,1,2,3,6,8,10]`,
      commonMistakes: [
        '不考虑最坏情况(已排序数组取末尾为基准)',
        '相等元素都分入less或greater导致不均匀',
      ],
      practice: [
        '实现随机pivot选择',
        '比较Lomuto和Hoare分区',
      ],
      timeComplexity: 'O(n log n)平均，O(n²)最坏',
      spaceComplexity: 'O(log n)'
    },
    deepDive: {
      overview: '随机化快排期望O(n log n)，三向分区高效处理重复元素。',
      steps: [
        'Lomuto分区: 简单，O(n)空间',
        'Hoare分区: 双指针，交换次数少',
        '三向分区(荷兰国旗)高效处理重复',
        'median-of-three避免最坏情况',
      ],
      commonMistakes: [
        '重复多时不用三向分区',
        '链表用快速排序(不适合)',
      ],
      practice: [
        '实现荷兰国旗算法',
        '三向快排和标准快排在重复数据上比较',
      ],
    },
  },
};

export default overlay;
