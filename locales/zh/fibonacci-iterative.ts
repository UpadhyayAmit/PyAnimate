import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '仅使用两个滚动变量(不用列表)生成前15个斐波那契数。',
  hint: '追踪prev和curr。每步: new_curr = prev + curr，然后移位。',
  explanation: {
    simple: {
      overview: '斐波那契数列中每个数是前两个数的和：0,1,1,2,3,5,8,13...',
      analogy: '兔子种群增长——每一代是前两代的总和。',
      steps: [
        '初始化a=0, b=1',
        '循环中计算c = a + b',
        '更新a = b, b = c',
        '重复n次获取第n项',
      ],
      visual: `a,b = 0,1
for _ in range(8):
    print(a)
    a,b = b, a+b
# 0 1 1 2 3 5 8 13`,
      commonMistakes: [
        '朴素索引对大n会越界',
        '混淆索引(位置)和值',
      ],
      practice: [
        '生成前20个斐波那契数',
        '验证一个数是否在斐波那契数列中',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: '矩阵幂运算可实现O(log n)的斐波那契计算，Binet公式提供封闭形式解。',
      steps: [
        '迭代: O(n)时间O(1)空间——实践中最优',
        '记忆化/DP: O(n)时间O(n)空间',
        '矩阵幂: [[1,1],[1,0]]^n实现O(log n)',
        'Binet公式: fib(n)=round(φⁿ/√5)(仅小n准确)',
      ],
      commonMistakes: [
        '无缓存朴素递归是O(2^n)——不要用',
        'Binet公式对大n有浮点误差',
      ],
      practice: [
        '用@lru_cache实现fib()',
        '研究斐波那契与黄金比例的关系',
      ],
    },
  },
};

export default overlay;
