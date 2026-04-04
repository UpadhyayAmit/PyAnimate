import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '修改程序以打印你的名字和最喜欢的编程语言。',
  hint: '使用带字符串参数的print()。记得在文本周围加引号。',
  explanation: {
    simple: {
      overview: 'Hello World程序是大多数程序员写的第一个程序。它只是在屏幕上显示"Hello, World!"。',
      analogy: '就像第一次问候别人——简单直接，是沟通的第一步。',
      steps: [
        '调用print()函数',
        '传入文本"Hello, World!"',
        'Python将文本显示在屏幕上',
      ],
      visual: 'print("Hello, World!")  →  Hello, World!',
      commonMistakes: [
        '忘记文本的引号',
        'print和Print——Python区分大小写',
      ],
      practice: [
        '把Hello World换成你的名字显示',
        '用多个print()打印多行',
      ],
    },
    deepDive: {
      overview: 'print()是写入标准输出的内置函数，默认在末尾追加换行符。',
      steps: [
        'print()内部调用sys.stdout.write()',
        '用end="\\n"参数控制换行',
        '用sep=" "参数指定多参数分隔符',
        '用flush=True强制刷新缓冲区',
      ],
      commonMistakes: [
        '混淆print()和return——print是显示，return是返回值',
        '忘记print()返回None',
      ],
      practice: [
        '用print(end="")输出无换行内容',
        '用print("a","b",sep=", ")输出多个值',
      ],
    },
  },
};

export default overlay;
