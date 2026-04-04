import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '在[2, 1, 5, 1, 3, 2]中找到大小为k=3的最大和子数组。',
  hint: '先计算第一个窗口和，然后滑动：减去离开的元素，加上进入的元素。',
  explanation: {
    simple: {
      overview: '滑动窗口用O(n)解决数组/字符串的连续子序列问题。',
      analogy: '就像火车车窗的景色——观察一部分窗口并平滑前进。',
      steps: [
        '设左右两个指针作为窗口边界',
        '右扩展：右边界右移',
        '左收缩：若违反条件则左边界右移',
        '每步更新答案(最大值等)',
      ],
      visual: `"abcabcbb" 最长无重复子串
→扩展到a,b,c(3)
→左移去重复的a
→b,c,a(3) → 答案3`,
      commonMistakes: [
        '左移时不更新窗口内数据',
        '只找最大窗口而忽略最小窗口',
      ],
      practice: [
        '找长度k的最大连续和',
        '找包含所有指定字符的最小子串',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(k) k为窗口大小'
    },
    deepDive: {
      overview: '固定窗口简单，可变窗口的左边收缩逻辑是关键，用deque/heapq加速最大值查询。',
      steps: [
        '固定大小: 每步加入和移除',
        '可变: 条件成立时left++',
        '用单调deque实现滑动窗口最大值',
        '频率表+滑动实现最长无重复子串',
      ],
      commonMistakes: [
        '收缩条件设置错误',
        '每步忘记更新答案',
      ],
      practice: [
        '用deque实现滑动窗口最大值',
        '找最多k次字符替换后的最长子串',
      ],
    },
  },
};

export default overlay;
