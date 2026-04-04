import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '使用while循环打印1到10的数字，然后打印它们的总和。',
  hint: '保持一个计数器变量并在每次迭代中更新它。',
  explanation: {
    simple: {
      overview: 'while循环在条件为真时重复执行代码块。',
      analogy: '就像做深蹲——能做就继续，做不动就停。',
      steps: [
        '写while 条件:',
        '条件为True时执行',
        '更新变量使条件最终变False',
        '可用break提前退出',
      ],
      visual: `n = 1
while n <= 5:
    print(n)
    n += 1
# 1 2 3 4 5`,
      commonMistakes: [
        '忘记更新变量→死循环',
        'while后忘记冒号',
        '条件逻辑写错',
      ],
      practice: [
        '用while制作猜数字游戏',
        '用while数一个数的位数',
      ],
    },
    deepDive: {
      overview: 'while-else、continue/break的用法以及无限循环模式。',
      steps: [
        'while-else: 若无break则执行else',
        'continue跳到下一次迭代',
        'break完全退出循环',
        'while True模式实现do-while',
      ],
      commonMistakes: [
        'while-else与try-except不同',
        '把break放在错误的循环外',
      ],
      practice: [
        '用while-else实现线性搜索',
        '用while True实现交互式菜单',
      ],
    },
  },
};

export default overlay;
