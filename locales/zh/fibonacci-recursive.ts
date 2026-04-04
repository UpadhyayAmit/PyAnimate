import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '实现递归斐波那契。检查fib(10)和fib(35)。注意时间差异。',
  hint: '通过字典缓存添加记忆化。调用树从2^n降至n，效果显著。',
  explanation: {
    simple: {
      overview: '递归斐波那契: f(n)=f(n-1)+f(n-2)。简单但指数级时间，需要记忆化。',
      analogy: '就像家谱——每个人从父母获取信息。',
      steps: [
        '基础情况: f(0)=0, f(1)=1',
        '否则: return f(n-1)+f(n-2)',
        '这是O(2^n)——非常慢',
        '用@lru_cache改进到O(n)',
      ],
      visual: `fib(4)
├─fib(3)         fib(2)
│  ├─fib(2) fib(1) ├─fib(1) fib(0)`,
      commonMistakes: [
        '无记忆化时对大n使用',
        '基础情况不正确处理0或负数',
      ],
      practice: [
        '用@functools.lru_cache装饰fib()',
        '比较无记忆化/有记忆化/迭代的时间',
      ],
      timeComplexity: 'O(2^n)无记忆化，O(n)有记忆化',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: '记忆化O(n)，迭代O(1)空间，矩阵幂O(log n)。',
      steps: [
        '记忆化: @lru_cache使调用次数为O(n)',
        '自底向上DP: 列表O(n)时间空间',
        '空间优化: 两个变量滚动O(1)',
        '矩阵法: [[1,1],[1,0]]^n实现O(log n)',
      ],
      commonMistakes: [
        '不分析递归树就不理解记忆化的价值',
        '忘记大n时需要sys.setrecursionlimit',
      ],
      practice: [
        '写出记忆化和表格化的清晰实现',
        '求第n个斐波那契的模p余数',
      ],
    },
  },
};

export default overlay;
