import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '计算宽度=7、高度=4的矩形的面积和周长。',
  hint: '面积 = 宽度 * 高度。周长 = 2 * (宽度 + 高度)。使用**进行幂运算。',
  explanation: {
    simple: {
      overview: 'Python支持基本算术运算：加减乘除、取余、幂运算。',
      analogy: 'Python就像遵循PEMDAS/BODMAS规则的计算器。',
      steps: [
        '+加法、-减法',
        '*乘法、/除法(始终返回float)',
        '//整除、%取余、**幂运算',
      ],
      visual: `10 + 3 = 13
10 / 3 = 3.333
10 // 3 = 3
10 % 3 = 1
2 ** 8 = 256`,
      commonMistakes: [
        '忘记/始终返回float',
        '负数的//向下取整',
        '%是余数不是百分比',
      ],
      practice: [
        '用math.pi计算圆的面积',
        '用%判断奇偶数',
      ],
    },
    deepDive: {
      overview: 'Python的PEMDAS运算符优先级和任意精度整数。',
      steps: [
        '优先级: ** → 一元 → * / // % → + -',
        '浮点数使用IEEE 754，有精度误差',
        'divmod(a,b)同时返回(商,余数)',
        '用decimal.Decimal进行高精度运算',
      ],
      commonMistakes: [
        '0.1+0.2!=0.3的浮点问题',
        '-2**2=-4和(-2)**2=4的区别',
      ],
      practice: [
        '测试divmod()和math.fmod()',
        '金融计算中比较float和Decimal',
      ],
    },
  },
};

export default overlay;
