import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '在有序数组[1,3,6,8,10]上使用双指针找到所有和为11的对。',
  hint: '从left=0, right=len-1开始。如果sum < target移动left右移；如果 > 则right左移。',
  explanation: {
    simple: {
      overview: '双指针用两个索引，一次遍历解决有序数组问题。',
      analogy: '像侦探从书的两端同时向内读，直到找到满足条件的配对。',
      steps: [
        '将left设为头，right设为尾',
        '循环直到两指针相遇',
        '检查条件并更新答案',
        '根据条件将left右移或right左移',
      ],
      visual: `[1,2,3,4,6] target=9
left=0(1),right=4(6)→和=7<9→left++
left=1(2),right=4(6)→和=8<9→left++
left=2(3),right=4(6)→和=9→找到!`,
      commonMistakes: [
        '用于未排序数组',
        '推进指针的条件写错',
      ],
      practice: [
        '实现有序数组的Two Sum',
        '找重复数组中3Sum的所有对',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: '双指针O(n)优于嵌套循环O(n²)，滑动窗口也是此模式。',
      steps: [
        '同向双指针: fast/slow(环检测)',
        '反向: 求和目标/回文验证',
        '原地修改数组(移动+压缩)',
        '容器最大蓄水(LeetCode #11)',
      ],
      commonMistakes: [
        '对未排序数组用以排序为前提的双指针',
        '混淆左右何时移动',
      ],
      practice: [
        '用双指针实现3Sum',
        '用O(n)解接雨水问题',
      ],
    },
  },
};

export default overlay;
