import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '动态规划基础',
  hint: '保存子问题的解以便复用，避免重复计算。',
  approach: '将问题分解为重叠子问题。对子问题结果进行记忆化/制表。',
  useCases: [
    '优化问题（最小成本、最大利润）',
    '计数问题（路径、方法）',
    '字符串匹配（编辑距离、LCS）',
  ],
  explanation: {
    simple: {
      overview: '动态规划将复杂问题分解为简单子问题，记忆解避免重复计算。',
      analogy: '就像爬楼梯——每一步都建立在前面步骤的基础上。',
      steps: [
        '识别子问题',
        '创建dp[]数组或缓存',
        '初始化基础情况',
        '根据递推关系填充dp数组',
      ],
      visual: `fib(n) = fib(n-1) + fib(n-2)
dp = [0,1]
for i in range(2,n+1):
    dp.append(dp[-1]+dp[-2])`,
      commonMistakes: [
        '基础情况设置不正确',
        '数组越界',
        '混淆自顶向下(递归+记忆)和自底向上(迭代)',
      ],
      practice: [
        '用DP解爬楼梯问题',
        '用DP数组求最大子数组和',
      ],
      timeComplexity: '取决于问题和DP关系',
      spaceComplexity: 'O(n)或优化后O(1)'
    },
    deepDive: {
      overview: 'DP适用于重叠子问题和最优子结构的问题，记忆化(自顶向下)对比表格化(自底向上)。',
      steps: [
        '定义状态: dp[i]表示什么?',
        '写出转移: dp[i] = f(dp[i-1],dp[i-2]...)',
        '初始化: dp[0]、dp[1]',
        '空间优化: O(n)→O(1)有时只需两个变量',
      ],
      commonMistakes: [
        '用贪心法解DP问题',
        '2D DP中行列遍历顺序搞错',
      ],
      practice: [
        '实现最小硬币数问题',
        '用DP解最长递增子序列(LIS)',
      ],
    },
  },
};

export default overlay;
