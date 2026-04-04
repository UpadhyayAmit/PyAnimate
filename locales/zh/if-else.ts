import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '编写一个程序检查数字是正数、负数还是零。',
  hint: '使用if/elif/else。通过改变输入值来测试每个分支。',
  explanation: {
    simple: {
      overview: 'if-else语句让程序根据条件做出判断。',
      analogy: '就像交通信号灯：绿灯行，红灯停。',
      steps: [
        '写if 条件:',
        '添加条件为True时执行的代码块',
        '用elif添加更多条件',
        '用else写默认处理',
      ],
      visual: `if x > 0:
    print("正数")
elif x == 0:
    print("零")
else:
    print("负数")`,
      commonMistakes: [
        '条件后忘记冒号',
        '缩进错误',
        '用=进行比较(应用==)',
      ],
      practice: [
        '将温度分类为冷/舒适/热',
        '用if-elif-else制作成绩判断器',
      ],
    },
    deepDive: {
      overview: 'Python的if条件用truthy/falsy评估，支持三目表达式。',
      steps: [
        'falsy值: None, 0, "", [], {}, set()',
        '三目: 值1 if 条件 else 值2',
        '用any()/all()判断序列真值',
        '用and/or/not构建复合条件',
      ],
      commonMistakes: [
        '不知道空容器是falsy的',
        '不必要地与True/False比较条件',
      ],
      practice: [
        '用三目表达式求绝对值',
        '测试各种类型的truthy值',
      ],
    },
  },
};

export default overlay;
