import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '对\'Python Programming\'进行切片以获得\'Prog\'，然后反转完整字符串。',
  hint: '切片语法是s[start:end]。对于反转使用s[::-1]。',
  explanation: {
    simple: {
      overview: '字符串是字符序列，Python提供了丰富的内置方法进行操作。',
      analogy: '字符串就像珠串项链——每颗珠子是一个字符，可以切割、检查和拼接。',
      steps: [
        '用单引号或双引号创建',
        '用+或f-string拼接',
        '用索引/切片访问字符',
        '用upper()、lower()、split()、strip()等方法',
      ],
      visual: `s = "hello"
s[0] → "h"
s[-1] → "o"
s[1:4] → "ell"
s.upper() → "HELLO"`,
      commonMistakes: [
        '字符串不可变——方法返回新字符串',
        'str+int会TypeError',
        '不保存方法返回值',
      ],
      practice: [
        '用切片反转字符串',
        '统计句子中的元音数量',
      ],
    },
    deepDive: {
      overview: 'Python字符串是不可变的Unicode序列，f-string和str.format()提供强大的插值。',
      steps: [
        '字符串驻留机制重用小字符串',
        'join()是拼接多个字符串最快的方式',
        '用encode()/decode()进行bytes↔str转换',
        '用re模块进行正则表达式匹配',
      ],
      commonMistakes: [
        '循环中用+拼接 → O(n²)',
        'Python 3中混用bytes和str',
      ],
      practice: [
        '比较"".join()和循环拼接的性能',
        '用str.format()练习格式化',
      ],
    },
  },
};

export default overlay;
