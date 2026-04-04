import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '解决0/1背包问题: items=[(2,6),(2,10),(3,12)], capacity=5。逐行构建DP表。',
  hint: 'dp[i][w] = max(dp[i-1][w], dp[i-1][w-weight[i]] + value[i])。每个单元格是一个子问题。',
  explanation: {
    simple: {
      overview: '背包问题: 在容量W的包中装入有重量和价值的物品使价值最大。',
      analogy: '就像旅行者在行李箱限重内装最有价值的旅行装备。',
      steps: [
        'dp[i][w]=前i件物品重量不超过w的最大价值',
        '空间优化: 用一维dp[w]',
        '每件物品反向更新(0/1情况)',
        '最终答案是dp[W]',
      ],
      visual: `items=[(2kg,3元),(3kg,4元),(4kg,5元)] W=5
dp[5]=max(dp[3]+4, dp[5])
最终dp: [0,0,3,4,4,7]`,
      commonMistakes: [
        '0/1背包内层不反向遍历(导致重复选取)',
        '混淆分数背包',
      ],
      practice: [
        '用2D和1D实现0/1背包',
        '转化为目标和(只考虑重量)问题',
      ],
      timeComplexity: 'O(nW)',
      spaceComplexity: 'O(W)'
    },
    deepDive: {
      overview: '背包是DP基础，0/1反向遍历，分数背包贪心，伪多项式O(nW)。',
      steps: [
        '2D→1D优化: dp[w]=max(dp[w],dp[w-wt]+val)',
        '0/1反向扫描重量(防重复选)',
        '完全背包正向扫描(允许重复选)',
        'subset sum、partition equal是背包变体',
      ],
      commonMistakes: [
        '混淆反向和正向 → 误解0/1和完全背包',
        'O(nW)是伪多项式(W可以很大)',
      ],
      practice: [
        '用1D实现0/1和完全背包',
        '等和分割(partition equal subset)',
      ],
    },
  },
};

export default overlay;
