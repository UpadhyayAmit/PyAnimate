import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '创建年龄(int)、身高(float)和姓名(str)的变量并打印每个变量及其类型。',
  hint: '使用type()检查变量类型。f字符串使打印更简洁。',
  explanation: {
    simple: {
      overview: '变量是存储数据的容器。Python有int、float、str、bool等类型。',
      analogy: '变量就像贴了标签的盒子——标签是名称，内容是值。',
      steps: [
        '选择有意义的名称',
        '用=赋值',
        'Python自动推断类型',
        '可以用不同类型重新赋值',
      ],
      visual: `age = 25        # int
height = 1.75   # float
name = "Alice"  # str
active = True   # bool`,
      commonMistakes: [
        '变量名中使用空格',
        '混淆=(赋值)和==(比较)',
        '文本忘记加引号',
      ],
      practice: [
        '创建名字、年龄、身高变量',
        '用type()查看类型',
      ],
    },
    deepDive: {
      overview: 'Python是动态类型：变量是对象的引用，对象有类型、id和值。',
      steps: [
        '用id()获取对象内存地址',
        '用type()获取对象的类',
        '-5到256的小整数被缓存',
        '用isinstance()检查类型继承',
      ],
      commonMistakes: [
        '以为变量类型是固定的',
        '混淆is(同一性)和==(等值性)',
      ],
      practice: [
        '用id()比较缓存和非缓存整数',
        '重新赋值不同类型体验动态类型',
      ],
    },
  },
};

export default overlay;
