import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '编写函数greet(name, greeting=\'你好\')，返回格式化的问候字符串。',
  hint: '默认参数放在必需参数之后。使用f字符串返回格式化字符串。',
  explanation: {
    simple: {
      overview: '函数是执行特定任务的可复用代码块，用def定义，通过名称调用。',
      analogy: '函数就像食谱——定义一次，可以反复"调用"这个食谱。',
      steps: [
        '写def 函数名(参数):',
        '编写缩进的函数体',
        '用return返回值',
        '用函数名(参数)调用',
      ],
      visual: `def greet(name):
    return f"你好，{name}！"

print(greet("小明"))  # 你好，小明！`,
      commonMistakes: [
        '忘记return导致函数返回None',
        '混淆参数(定义)和实参(调用)',
        '在定义前调用',
      ],
      practice: [
        '写一个计算矩形面积的函数',
        '写一个判断素数的函数',
      ],
    },
    deepDive: {
      overview: 'Python函数是一等对象，支持默认参数、*args、**kwargs和闭包。',
      steps: [
        '默认参数在定义时只求值一次',
        '*args收集可变位置参数',
        '**kwargs收集关键字参数',
        '闭包捕获外层作用域的变量',
      ],
      commonMistakes: [
        '用可变对象(如列表)作为默认值',
        '不用global关键字就修改外层变量',
      ],
      practice: [
        '用*args写一个对任意多个数求和的函数',
        '写一个返回计数器的闭包',
      ],
    },
  },
};

export default overlay;
