import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '迭代实现阶乘。验证: 0!=1, 5!=120, 10!=3628800。',
  hint: '从product=1开始，乘以从1到n的每个数字。将n=0作为特殊情况处理。',
  explanation: {
    simple: {
      overview: 'n的阶乘(n!)是1到n所有正整数的乘积，如5!=120。',
      analogy: 'n个人排队的方案数——每个位置选择越来越少。',
      steps: [
        '基础情况: 0!=1, 1!=1',
        'n>1: n! = n × (n-1)!',
        '迭代: result=1; for i in range(2,n+1): result*=i',
        '也可用math.factorial()',
      ],
      visual: `5! = 5×4×3×2×1 = 120
4! = 24
0! = 1 (定义)`,
      commonMistakes: [
        '忘记0!=1的基础情况',
        'n很大时递归会栈溢出',
      ],
      practice: [
        '计算二项式系数C(n,k)=n!/(k!(n-k)!)',
        '比较迭代和递归的阶乘',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)迭代，O(n)递归'
    },
    deepDive: {
      overview: 'math.factorial()用C实现，对大n使用树分解乘法。',
      steps: [
        '尾递归在Python中不优化(用迭代)',
        '阶乘增长比任何指数都快',
        '用Wilson定理进行模阶乘计算',
        '用sympy.factorial()进行符号计算',
      ],
      commonMistakes: [
        '对大n无缓存地用递归',
        'Python任意精度整数不会整数溢出',
      ],
      practice: [
        '用functools.reduce()实现阶乘',
        '求100!末尾零的个数',
      ],
    },
  },
};

export default overlay;
