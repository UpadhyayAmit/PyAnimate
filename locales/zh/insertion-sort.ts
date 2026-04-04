import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '插入排序',
  hint: '将每个元素插入到已排序部分的正确位置。',
  approach: '将每个元素插入到其正确的已排序位置，并将其他元素向右移动。',
  useCases: [
    '对几乎已排序的数据非常高效',
    '对实时逐一到来的数据进行排序',
    '对小型数组简单且快速',
  ],
  explanation: {
    simple: {
      overview: '插入排序将每个元素依次插入已排序部分的正确位置。',
      analogy: '就像整理扑克牌——把新牌插入手中牌的正确位置。',
      steps: [
        '从索引1开始',
        '将当前元素存为key',
        '将比key大的元素向右移',
        '在正确位置插入key',
      ],
      visual: `[5,3,4,1,2]
→[3,5,4,1,2]
→[3,4,5,1,2]
→[1,3,4,5,2]
→[1,2,3,4,5]`,
      commonMistakes: [
        '比较运算符方向错误',
        '外层循环从0开始',
      ],
      practice: [
        '改造以按key排序元组列表',
        '用二分插入排序减少比较次数',
      ],
      timeComplexity: 'O(n²)最坏，O(n)最好',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: '插入排序稳定、原地，对小数组和接近有序的数据有优势，是Timsort的组件。',
      steps: [
        '最好: 已排序数组O(n)次比较',
        '最坏: 逆序数组O(n²)次移位',
        '平均O(n²)——不适合大n',
        'Timsort在O(n)的run上使用插入排序',
      ],
      commonMistakes: [
        '对小数组也用复杂算法',
        '忽略稳定性重要的场景',
      ],
      practice: [
        '和冒泡排序比较n=1000时的时间',
        '实现二分插入排序',
      ],
    },
  },
};

export default overlay;
