import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '选择排序',
  hint: '每次遍历找最小值并交换到正确位置。',
  approach: '每次迭代中找到未排序部分的最小值并将其交换到已排序部分的末尾。',
  useCases: [
    '小型数据集的简单排序',
    '内存有限时的原地排序',
    '教学用途，因为逻辑清晰',
  ],
  explanation: {
    simple: {
      overview: '选择排序反复找到未排序部分的最小值，与首元素交换。',
      analogy: '按身高排列运动队——找到最矮的人放到最前，重复直到排好。',
      steps: [
        '找未排序部分的最小值',
        '与未排序部分首元素交换',
        '将未排序边界向右移一位',
        '重复直到所有元素排序',
      ],
      visual: `[64,25,12,22,11]
→[11,25,12,22,64]
→[11,12,25,22,64]
→[11,12,22,25,64]`,
      commonMistakes: [
        '混淆最小值的索引和最小值',
        '忘记更新边界',
      ],
      practice: [
        '实现降序选择排序',
        '统计比较次数和交换次数',
      ],
      timeComplexity: 'O(n²)',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: '选择排序交换次数O(n)最少——适合写入代价高的内存，但不稳定。',
      steps: [
        '交换次数O(n)——比插入排序的O(n²)少',
        '不稳定: 可能改变相等元素的顺序',
        '比较次数始终O(n²)——不依赖输入',
        '始终O(n²)，无法早期终止',
      ],
      commonMistakes: [
        '误以为总比插入排序好(并非如此)',
        '不稳定性导致bug',
      ],
      practice: [
        '用相同key的元素演示不稳定性',
        '找到写入次数最少有用的场景',
      ],
    },
  },
};

export default overlay;
