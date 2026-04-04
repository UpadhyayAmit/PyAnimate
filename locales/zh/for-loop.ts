import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '使用enumerate()遍历水果列表并打印每个水果及其索引。',
  hint: 'enumerate(列表)给出(索引, 值)对。在for语句中解包。',
  explanation: {
    simple: {
      overview: 'for循环遍历序列(列表、字符串、range)中的每个元素并执行代码。',
      analogy: '就像翻书的每一页——按顺序处理直到结束。',
      steps: [
        '写for 元素 in 序列:',
        '元素依次取每个值',
        '对每个元素执行代码块',
        '用range()生成数字序列',
      ],
      visual: `for i in range(5):
    print(i)
# 0 1 2 3 4`,
      commonMistakes: [
        '循环中修改列表',
        'range(5)是0-4而range(1,6)是1-5',
        '用range(len())可能越界',
      ],
      practice: [
        '对列表所有元素求和',
        '用嵌套for打印乘法表',
      ],
    },
    deepDive: {
      overview: 'for循环使用迭代器协议，enumerate()、zip()和列表推导式扩展了其用法。',
      steps: [
        'enumerate()同时获取索引和值',
        'zip()并行遍历多个可迭代对象',
        '列表推导式是for循环的语法糖',
        '用iter()和next()手动控制',
      ],
      commonMistakes: [
        '用for i in range(len(lst))替代enumerate()',
        '循环变量在循环后仍存在(作用域泄露)',
      ],
      practice: [
        '将for循环改写为列表推导式',
        '用zip()并行遍历两个列表',
      ],
    },
  },
};

export default overlay;
