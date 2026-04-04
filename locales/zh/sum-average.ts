import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '计算scores = [85, 92, 78, 96, 88, 73]的总和与平均值，并识别高于平均分的分数。',
  hint: '先求总和，除以个数得平均值。然后用列表推导式过滤。',
  explanation: {
    simple: {
      overview: '对列表求和是将所有元素相加，平均值是总和除以元素数量。',
      analogy: '就像AA制付账——汇总账单再除以人数。',
      steps: [
        '用sum(list)或循环求和',
        '除以len(list)得到平均值',
        '注意空列表的除零错误',
        '用statistics.mean()求统计平均',
      ],
      visual: `nums = [10, 20, 30, 40]
total = sum(nums)   # 100
avg = total / len(nums)  # 25.0`,
      commonMistakes: [
        '空列表导致除零错误',
        '用//整除得到整数平均值',
      ],
      practice: [
        '一次遍历求平均值、最小值、最大值',
        '计算移动平均',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'statistics.mean()能精确处理Fraction/Decimal，math.fsum()避免浮点误差。',
      steps: [
        'sum()有可选的start参数',
        'math.fsum()实现高精度累加',
        'statistics.median()、statistics.stdev()',
        'numpy.mean()用于大型数值数组',
      ],
      commonMistakes: [
        '浮点sum()可能损失精度',
        '非对称分布中均值≠中位数',
      ],
      practice: [
        '比较sum()和math.fsum()处理浮点数',
        '用statistics.stdev()计算标准差',
      ],
    },
  },
};

export default overlay;
