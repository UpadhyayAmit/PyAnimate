import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '找出\'ABCBDAB\'和\'BDCAB\'的LCS。构建DP矩阵并追溯序列。',
  hint: '字符匹配时dp[i][j]=dp[i-1][j-1]+1，否则max(dp[i-1][j], dp[i][j-1])。',
  explanation: {
    simple: {
      overview: '最长公共子序列(LCS): 返回两个字符串的最长公共子序列的长度。',
      analogy: '就像比较两个日程找到共同的空闲时间。',
      steps: [
        'dp[i][j]=s1前i字符和s2前j字符的LCS长',
        's1[i-1]==s2[j-1]则dp[i][j]=dp[i-1][j-1]+1',
        '否则dp[i][j]=max(dp[i-1][j],dp[i][j-1])',
        'dp[m][n]是答案',
      ],
      visual: `s1="ABCBDAB" s2="BDCAB"
dp[m][n]=4 → LCS="BCAB"`,
      commonMistakes: [
        '[',
        '"',
        '以',
        '为',
        '不',
        '重',
        '建',
        '就',
        '能',
        '返',
        '回',
        'L',
        'C',
        'S',
        '字',
        '符',
        '串',
        '"',
        ',',
        ' ',
        '"',
        '索',
        '引',
        '偏',
        '移',
        '(',
        'd',
        'p',
        '[',
        'i',
        ']',
        '对',
        '应',
        's',
        '[',
        'i',
        '-',
        '1',
        ']',
        ')',
        '"',
        ']',
      ],
      practice: [
        '不只求长度，还要重建LCS字符串',
        '改为最长公共子串(连续)',
      ],
      timeComplexity: 'O(mn)',
      spaceComplexity: 'O(mn)，优化后O(min(m,n))'
    },
    deepDive: {
      overview: 'LCS是编辑距离、diff工具、生物信息学的基础，空间可优化到O(min(m,n))。',
      steps: [
        '滚动数组只保留两行，O(min(m,n))空间',
        '编辑距离: 在LCS上加删除/插入代价',
        'Diff: 用LCS找修改/添加/删除',
        'Hirschberg算法: O(mn)时间O(m+n)空间重建',
      ],
      commonMistakes: [
        '混淆子序列(不连续)和子串(连续)',
        '空间优化后回溯重建变难',
      ],
      practice: [
        '将LCS转化为编辑距离',
        '用LCS实现两个文件的diff',
      ],
    },
  },
};

export default overlay;
