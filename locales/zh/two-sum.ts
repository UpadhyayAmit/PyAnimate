import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '在[2,7,11,15]中找到两个和为9的索引。然后解决target=18的情况。',
  hint: '使用哈希表：对于每个数字，检查(target - num)是否已经存储。',
  explanation: {
    simple: {
      overview: 'Two Sum: 找数组中和为target的两个元素的索引对。',
      analogy: '就像用钱包里的硬币凑出指定金额——对每枚硬币查找需要凑多少。',
      steps: [
        '创建字典seen={}',
        '遍历每个数',
        '计算complement=target-num',
        '若complement在seen中则找到答案，否则将num加入seen',
      ],
      visual: `nums=[2,7,11,15], target=9
num=2: need=7, seen={2:0}
num=7: need=2, 2在{2:0}中!
→ [0,1]`,
      commonMistakes: [
        '排序+双指针是O(n log n)且改变了索引',
        '不能用同一元素两次',
      ],
      practice: [
        '返回所有和为target的对(值而非索引)',
        '扩展为3Sum',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: '哈希表法O(n)时间空间，排序+双指针O(n log n)时间O(1)空间但改变索引。',
      steps: [
        '哈希表: complement=target-x→O(1)查找',
        '双指针: 有序数组检查left+right的和',
        '多个目标/对: 排序+双指针更优',
        '3Sum: 固定x然后双指针解剩余',
      ],
      commonMistakes: [
        '用同一元素两次(要验证索引)',
        '用O(n²)暴力(应用哈希)',
      ],
      practice: [
        '用排序+双指针实现2Sum',
        '找3Sum的所有唯一三元组',
      ],
    },
  },
};

export default overlay;
