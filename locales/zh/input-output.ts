import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '向用户请求两个数字并打印它们的和、差和积。',
  hint: 'input()总是返回字符串。在运算前使用int()或float()进行转换。',
  explanation: {
    simple: {
      overview: 'input()以字符串读取用户输入，print()显示输出，用int()/float()按需转换。',
      analogy: 'input()是提问，print()是给出答案。',
      steps: [
        '用input("提示: ")读取输入',
        '结果始终是字符串',
        '按需用int()或float()转换',
        '用print()显示结果',
      ],
      visual: `name = input("姓名: ")
age = int(input("年龄: "))
print(f"你好{name}，你{age}岁。")`,
      commonMistakes: [
        '忘记把输入转为int/float',
        '非数字输入导致ValueError',
        '用Python 2的print不加括号',
      ],
      practice: [
        '用input()做简单计算器',
        '读取多个数字并计算平均值',
      ],
    },
    deepDive: {
      overview: '文件I/O用带上下文管理器的open()，流操作用sys.stdin/stdout。',
      steps: [
        'open(file,mode): \'r\',\'w\',\'a\',\'rb\'用于二进制',
        '用with open(...)as f确保文件关闭',
        '用sys.stdin.readline()读取竞赛输入',
        '用print(...,file=sys.stderr)输出错误',
      ],
      commonMistakes: [
        '不用with导致文件描述符泄露',
        '一次性加载整个文件 vs 逐行读取',
      ],
      practice: [
        '用with open逐行读取文本文件',
        '将结果写入CSV文件',
      ],
    },
  },
};

export default overlay;
