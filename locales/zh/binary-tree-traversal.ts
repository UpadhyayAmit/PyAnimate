import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '实现二叉树的中序、前序和后序遍历。',
  hint: '这里递归很自然。中序: 左→节点→右。前序: 节点→左→右。后序: 左→右→节点。',
  explanation: {
    simple: {
      overview: '二叉树遍历：前序(根-左-右)、中序(左-根-右)、后序(左-右-根)三种递归方式。',
      analogy: '就像读家谱——中序给出升序后代，前序先祖先，后序先子孙。',
      steps: [
        '前序: 处理节点→左→右',
        '中序: 左→处理节点→右',
        '后序: 左→右→处理节点',
        '所有方式均需None检查的基础情况',
      ],
      visual: `     4
    / \\
   2   5
  / \\
 1   3
中序: 1,2,3,4,5
前序: 4,2,1,3,5
后序: 1,3,2,5,4`,
      commonMistakes: [
        '混淆三种遍历顺序',
        '忘记None检查的基础情况',
      ],
      practice: [
        '用栈实现迭代中序遍历',
        '比较递归和迭代遍历',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(h) h为树高'
    },
    deepDive: {
      overview: 'Morris遍历O(1)空间，BFS层序遍历用deque，可从遍历结果重建树。',
      steps: [
        'Morris遍历: 用线索指针实现O(1)空间',
        '迭代中序: 栈+指针',
        '前序+中序可唯一重建树',
        'Zigzag层序: deque交替正反向处理',
      ],
      commonMistakes: [
        '仅前序+中序不能唯一重建(需中序+后序)',
        'Morris遍历中误修改树',
      ],
      practice: [
        '实现Morris遍历',
        '求二叉树的最大路径和',
      ],
    },
  },
};

export default overlay;
