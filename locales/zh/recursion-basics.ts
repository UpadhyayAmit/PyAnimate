import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '递归基础',
  hint: '基本情况与递归情况 — 大问题分解为小子问题。',
  approach: '定义基础情形（递归在哪里停止），然后对较小版本的问题进行调用。',
  useCases: [
    '树/图的遍历',
    '分治算法',
    '数学序列（斐波那契、阶乘）',
  ],
  explanation: {
    simple: {
      overview: '递归是函数调用自身，需要基础情况和递归情况。',
      analogy: '就像俄罗斯套娃——里面还有同样形状的更小娃娃，最小的不能再打开。',
      steps: [
        '定义基础情况(何时停止)',
        '定义使问题变小的递归情况',
        '确保递归过程中问题缩小',
        '始终向基础情况前进',
      ],
      visual: `def factorial(n):
    if n == 0: return 1      # 基础
    return n * factorial(n-1) # 递归
factorial(3)=3*2*1*1=6`,
      commonMistakes: [
        '忘记基础情况导致无限递归',
        '递归减少量写错',
        '超过sys.setrecursionlimit导致RuntimeError',
      ],
      practice: [
        '用递归实现求和、阶乘、斐波那契',
        '用递归实现二分查找',
      ],
      timeComplexity: '取决于问题',
      spaceComplexity: 'O(n)调用栈深度'
    },
    deepDive: {
      overview: 'Python默认递归深度1000，不优化尾递归，用迭代或@lru_cache改进。',
      steps: [
        '用递归树分析时间复杂度',
        '用@lru_cache消除重叠子问题',
        '将递归转为用显式栈的迭代',
        '用sys.setrecursionlimit调整限制(不推荐)',
      ],
      commonMistakes: [
        '重复计算导致O(2^n)(要记忆化)',
        '忘记递归的空间开销',
      ],
      practice: [
        '比较有无@lru_cache的fib()时间',
        '实现递归文件系统遍历',
      ],
    },
  },
};

export default overlay;
