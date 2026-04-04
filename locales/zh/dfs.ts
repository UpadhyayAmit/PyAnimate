import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '深度优先搜索 (DFS)',
  hint: '使用栈或递归深度优先探索图结构。',
  approach: '从起始节点探索，在回溯之前递归地跟随每条路径到末尾。',
  useCases: [
    '迷宫求解和路径查找',
    '拓扑排序和环检测',
    '强连通分量',
  ],
  explanation: {
    simple: {
      overview: '深度优先搜索(DFS)在回溯前尽量深入每条路径。',
      analogy: '就像走迷宫——面对死胡同前一直走一个方向，然后回溯到上个路口换方向。',
      steps: [
        '访问起点并加入visited',
        '对每个未访问邻居递归DFS',
        '访问完所有邻居后回溯',
        '无递归时用显式栈',
      ],
      visual: `    1
   / \\
  2   3
 / \\
4   5
DFS: 1→2→4→5→3`,
      commonMistakes: [
        '不记录visited导致环图无限循环',
        '忘记递归基础情况',
      ],
      practice: [
        '用DFS验证二叉树路径和',
        '用DFS识别连通分量',
      ],
      timeComplexity: 'O(V + E)',
      spaceComplexity: 'O(V)'
    },
    deepDive: {
      overview: 'DFS用于拓扑排序、SCC检测、路径枚举，递归与迭代栈各有权衡。',
      steps: [
        '前序/中序/后序的访问时机',
        '拓扑排序: DFS后序+栈',
        'Tarjan算法: SCC O(V+E)',
        '后向边 = 环检测',
      ],
      commonMistakes: [
        '有向图和无向图的全局vs局部visited差异',
        '混淆后序和前序DFS',
      ],
      practice: [
        '用DFS实现拓扑排序',
        '用DFS检测图中是否存在环',
      ],
    },
  },
};

export default overlay;
