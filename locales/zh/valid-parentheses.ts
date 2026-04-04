import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '检查\'({[]})\'和\'([)]\'是否有效。然后处理\'(((\'的情况。',
  hint: '将开括号压入栈中。当遇到闭括号时，弹出并验证是否匹配。',
  explanation: {
    simple: {
      overview: '括号验证: 检查字符串中的()、[]、{}是否正确匹配和嵌套。',
      analogy: '就像账本的零余额——每次取款(闭括号)都需要对应的存款(开括号)。',
      steps: [
        '用栈和匹配映射',
        '开括号入栈',
        '闭括号与栈顶比较',
        '最后栈为空则有效',
      ],
      visual: `"({[]})" → 栈:( { [ → ] 匹配→}匹配→)匹配→空=True
"(]" → ) 后遇 ] → 与(不匹配=False`,
      commonMistakes: [
        '将空字符串视为无效(它是有效的)',
        '结束时不检查栈是否为空',
      ],
      practice: [
        '找使括号串有效的最少添加/删除',
        '找最长有效括号子串',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: '经典栈问题，用栈跟踪最近的开括号，延伸应用: 嵌套结构解析。',
      steps: [
        '映射: "]":"[", "}":" {", ")":"("',
        '将闭括号转换为对应开括号与栈顶比较',
        '提前终止: 栈空时遇到闭括号返回False',
        '变体: 最少添加数/最长有效子串',
      ],
      commonMistakes: [
        '将闭括号入栈',
        '空栈时pop导致IndexError',
      ],
      practice: [
        '求使括号串有效的最少添加数',
        '用DP求最长有效括号子串',
      ],
    },
  },
};

export default overlay;
