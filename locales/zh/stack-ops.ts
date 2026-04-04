import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '使用列表实现栈。添加push, pop, peek, is_empty。使用它检查括号是否平衡。',
  hint: 'push开括号，pop+匹配闭括号。如果弹出空栈或不匹配立即返回False。',
  explanation: {
    simple: {
      overview: '栈是LIFO(后进先出)结构，提供push、pop、peek三种操作。',
      analogy: '就像叠盘子——最后放的盘子最先被取走。',
      steps: [
        'push将元素加入栈顶',
        'pop删除并返回栈顶元素',
        'peek查看栈顶但不删除',
        'is_empty检查是否为空',
      ],
      visual: `stack = []
stack.append(1)  # push
stack.append(2)
stack.pop()      # → 2
stack[-1]        # peek → 1`,
      commonMistakes: [
        '空栈pop导致IndexError',
        '用了queue的操作',
        'peek不是pop——不删除',
      ],
      practice: [
        '用栈反转字符串',
        '用栈将中缀表达式转为后缀表达式',
      ],
      timeComplexity: 'O(1) push/pop/peek',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: '用Python列表实现栈，所有操作均摊O(1)，也可用deque。',
      steps: [
        'list.append()/pop()是均摊O(1)栈操作',
        '单调栈O(n)解决下一个更大/更小元素',
        '用栈实现迭代DFS',
        '回溯问题中栈很有用',
      ],
      commonMistakes: [
        '不了解单调栈的应用范围',
        '递归调用栈与栈数据结构原理相同',
      ],
      practice: [
        '用单调栈求下一个更大的元素',
        '用栈解每日温度问题',
      ],
    },
  },
};

export default overlay;
