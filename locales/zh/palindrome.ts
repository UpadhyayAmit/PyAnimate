import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '检查\'racecar\'、\'hello\'和\'A man a plan a canal Panama\'是否为回文。',
  hint: '对于最后一个，先转小写并删除空格/标点, 再使用双指针方法。',
  explanation: {
    simple: {
      overview: '回文是正读反读都一样的字符串，如"racecar"。',
      analogy: '就像照镜子——反转后和原来一样。',
      steps: [
        '规范化字符串(小写，去空格)',
        '将字符串与其反转比较',
        '相等则为回文',
        '列表则与反转副本比较',
      ],
      visual: `word = "racecar"
is_pal = word == word[::-1]
# True`,
      commonMistakes: [
        '不忽略大小写和空格',
        '忘记空字符串也是回文',
      ],
      practice: [
        '忽略空格和标点验证句子回文',
        '从单词列表中找出所有回文',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)切片，O(1)双指针'
    },
    deepDive: {
      overview: '切片回文判断O(n)时间空间，双指针O(n)时间O(1)空间。',
      steps: [
        '双指针: left=0,right=len-1向内移动',
        '句子: re.sub(r\'[^a-z0-9]\',\'\',s.lower())预处理',
        '最长回文子序列: Manacher算法O(n)',
        '最长公共子序列DP: LCS法',
      ],
      commonMistakes: [
        '句子问题不忽略非字母数字字符',
        '混淆回文子串和回文子序列',
      ],
      practice: [
        '用双指针实现回文判断',
        '找最长回文子串',
      ],
    },
  },
};

export default overlay;
