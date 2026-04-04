import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '检查(\'listen\',\'silent\'), (\'hello\',\'world\')是否为变位词。在列表中找出所有变位词组。',
  hint: '对两个字符串排序后比较，或使用Counter()。分组时使用排序后的单词作为字典键。',
  explanation: {
    simple: {
      overview: '若两个字符串有完全相同的字符和相同的数量，则它们是变位词。',
      analogy: '就像重新排列拼字游戏的字母——同一套字母，不同顺序。',
      steps: [
        '规范化(小写，去空格)',
        '方法1: 排序后比较',
        '方法2: 用Counter比较',
        '相等则是变位词',
      ],
      visual: `"listen"和"silent"
sorted("listen") == sorted("silent") ?`,
      commonMistakes: [
        '没有规范化大小写和空格',
        '需要计算数字和符号(视需求)',
      ],
      practice: [
        '验证"listen"/"silent"等对',
        '将单词列表按变位词分组',
      ],
      timeComplexity: 'O(n log n)排序，O(n) Counter',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: 'Counter变位词检测O(n)，排序O(n log n)但简洁。',
      steps: [
        'Counter(s1)==Counter(s2)是O(n)时间空间',
        'sorted(s1)==sorted(s2)是O(n log n)',
        '多单词分组用排序元组作键',
        '频率数组[0]*26仅适用于ASCII的O(n)O(1)',
      ],
      commonMistakes: [
        '性能重要时用排序',
        'Unicode用Counter，不用频率数组',
      ],
      practice: [
        '从单词列表创建变位词分组',
        '用频率数组为ASCII字符串实现变位词检测',
      ],
    },
  },
};

export default overlay;
