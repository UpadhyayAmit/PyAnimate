import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '用硬币=[1,5,6,9]凑成amount=11需要的最少硬币数。逐步构建dp数组。',
  hint: 'dp[0]=0, 其余dp[i]=无穷大。对每个硬币c: dp[i] = min(dp[i], dp[i-c]+1) 若i>=c。',
  explanation: {
    simple: {
      overview: '硬币找零: 用给定面值的硬币凑出目标金额的最少硬币数。',
      analogy: '就像自动售货机用最少数量的硬币找零。',
      steps: [
        '初始化dp[0]=0，dp[1..amount]=∞',
        '对每个amount遍历所有硬币',
        'dp[i]=min(dp[i],dp[i-coin]+1)',
        'dp[amount]是答案(∞则不可能)',
      ],
      visual: `coins=[1,2,5] amount=11
dp=[0,1,1,2,2,1,2,2,3,3,2,3]
dp[11]=3 → (5+5+1)`,
      commonMistakes: [
        '[',
        '"',
        '初',
        '始',
        '化',
        'd',
        'p',
        '[',
        '0',
        ']',
        '=',
        '1',
        '(',
        '应',
        '为',
        '0',
        ')',
        '"',
        ',',
        ' ',
        '"',
        '用',
        '0',
        '而',
        '非',
        '∞',
        '初',
        '始',
        '化',
        'd',
        'p',
        '"',
        ']',
      ],
      practice: [
        '统计硬币组合数(硬币找零II)',
        '最多硬币(不超过总金额的最大枚数)',
      ],
      timeComplexity: 'O(amount × 硬币数)',
      spaceComplexity: 'O(amount)'
    },
    deepDive: {
      overview: '硬币找零是无界背包变体，自底向上DP最常用，自顶向下需记忆化。',
      steps: [
        '完全背包: 硬币可重复使用，正向遍历',
        'dp[i]=min(dp[i],dp[i-c]+1) c∈coins',
        '组合数: +=dp[i]累加',
        '循环硬币在外vs在内决定组合/排列',
      ],
      commonMistakes: [
        '用0/1背包的反向循环',
        '混淆硬币数和组合数',
      ],
      practice: [
        '同时实现硬币找零和硬币找零II',
        '改变循环顺序验证有序/无序组合',
      ],
    },
  },
};

export default overlay;
