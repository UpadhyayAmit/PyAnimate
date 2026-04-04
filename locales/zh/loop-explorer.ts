import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '使用嵌套循环打印乘法表(1-5)的格式化网格。',
  hint: '外层循环控制行，内层控制列。使用print(end=\'\\t\')进行制表符间距。',
  explanation: {
    simple: {
      overview: '循环探索：用不同条件和控制流进行迭代处理。',
      analogy: '就像在地图上探索城市——可以跳过街道、折返或在目的地停下。',
      steps: [
        'for用于固定次数迭代',
        'while用于动态条件循环',
        'break提前退出',
        'continue跳过当前元素',
      ],
      visual: `for i in range(10):
    if i % 2 == 0:
        continue  # 跳过偶数
    if i > 7:
        break     # 在7处停止
    print(i)  # 1 3 5 7`,
      commonMistakes: [
        '混淆break和continue',
        '忘记更新条件导致死循环',
      ],
      practice: [
        '找范围内的第一个素数',
        '用continue实现FizzBuzz',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'Python循环支持else、enumerate()和zip()，使迭代更具表现力。',
      steps: [
        'for-else/while-else: 无break结束时执行else',
        'enumerate(lst, start=1)从1开始索引',
        'any()/all()对可迭代对象进行布尔检查',
        'itertools.islice()实现惰性切片',
      ],
      commonMistakes: [
        '误以为for-else和if-else相关',
        '忽略itertools处理复杂循环模式',
      ],
      practice: [
        '用for-else实现线性搜索',
        '用itertools.chain()遍历多个列表',
      ],
    },
  },
};

export default overlay;
