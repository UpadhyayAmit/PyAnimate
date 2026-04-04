import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '实现1到30的FizzBuzz。扩展它：为7的倍数添加\'Bazz\'。',
  hint: '先检查3和5(FizzBuzz)，然后单独检查。类似地添加7的情况。',
  explanation: {
    simple: {
      overview: 'FizzBuzz：输出1到n，3的倍数用"Fizz"替换，5的倍数用"Buzz"替换，两者的倍数用"FizzBuzz"替换。',
      analogy: '就像小孩数数游戏，特定数字说单词而不是数字。',
      steps: [
        '循环1到n',
        '3和5的倍数输出"FizzBuzz"',
        '3的倍数输出"Fizz"',
        '5的倍数输出"Buzz"',
        '其他输出数字',
      ],
      visual: `1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz
11 Fizz 13 14 FizzBuzz 16...`,
      commonMistakes: [
        '先检查3和5会漏掉15',
        'if/elif/else的顺序很重要',
      ],
      practice: [
        '扩展：7的倍数加"Bazz"',
        '返回列表而非打印',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: '字符串拼接法避免多次检查，是面试热身题。',
      steps: [
        '拼接法: result=""; 若%3则加Fizz; 若%5则加Buzz',
        '字典法: {0:"FizzBuzz",3:"Fizz",5:"Buzz"}',
        '生成器处理大范围',
        '简洁版: 一行列表推导式',
      ],
      commonMistakes: [
        '条件顺序问题(朴素实现先检查15)',
        '函数版忘记return',
      ],
      practice: [
        '用字符串拼接法实现FizzBuzz',
        '写无限range的生成器版本',
      ],
    },
  },
};

export default overlay;
