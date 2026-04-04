import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '使用位运算: (1)检查13是否为偶数/奇数, (2)统计255中的置位数, (3)用XOR交换5和9。',
  hint: '偶数/奇数: n & 1 == 0。统计位: while n: count += n & 1; n >>= 1。XOR交换: a^=b; b^=a; a^=b。',
  explanation: {
    simple: {
      overview: '位操作直接对整数的位(0/1)进行运算，实现快速节省内存的处理。',
      analogy: '就像一排灯开关——每盏灯是一个位，可以独立打开或关闭。',
      steps: [
        'AND(&): 都为1则1',
        'OR(|): 任一为1则1',
        'XOR(^): 不同则1(切换)',
        'NOT(~)、左移(<<)、右移(>>)',
      ],
      visual: `5 = 0101
3 = 0011
5&3=0001=1
5|3=0111=7
5^3=0110=6
5<<1=1010=10`,
      commonMistakes: [
        'Python整数任意精度——位长可变',
        'Python中~n是-(n+1)',
        '来自C/Java的移位溢出思维',
      ],
      practice: [
        '用位运算判断n是否为2的幂(n&(n-1)==0)',
        '用位掩码生成整数的所有子集',
      ],
      timeComplexity: 'O(1)位运算',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: '位操作用于掩码、优化、子集生成和DP，Python整数无限精度需注意。',
      steps: [
        'n&(n-1)清除最低位(用于popcount)',
        'n&(-n)得最低置位',
        'XOR: 成对抵消找单独元素',
        '位DP对n位的所有子集O(2^n*n)',
      ],
      commonMistakes: [
        'Python的~与C/Java不同(符号位2补数)',
        '大位移产生意外的大数',
      ],
      practice: [
        '用Brian Kernighan算法计算置位数',
        '用XOR从整数对中找孤立元素',
      ],
    },
  },
};

export default overlay;
