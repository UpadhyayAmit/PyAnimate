import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '广度优先搜索 (BFS)',
  hint: '使用队列逐层探索图结构。',
  approach: '将起始节点放入队列。从队列取出一个节点，将其未访问的邻居加入队列。',
  useCases: [
    '无权图中的最短路径',
    '社交网络中的分离度',
    'Web爬虫的页面发现',
  ],
  explanation: {
    simple: {
      overview: '广度优先搜索(BFS)按层次遍历图/树，在进入下一层前访问同层所有节点。',
      analogy: '就像石头投入水中的涟漪——从中心同心圆向外扩展。',
      steps: [
        '将起点入队并加入visited',
        '队列不为空时循环',
        '出队当前节点',
        '将未访问的邻居入队并记录visited',
      ],
      visual: `    1
   / \\
  2   3
 / \\
4   5
BFS: 1→2→3→4→5`,
      commonMistakes: [
        '入队时不加入visited导致重复处理',
        '用list.pop(0)出队导致O(n²)',
      ],
      practice: [
        '用BFS求二叉树最小深度',
        '用BFS计算连通分量数',
      ],
      timeComplexity: 'O(V + E)',
      spaceComplexity: 'O(V)'
    },
    deepDive: {
      overview: 'BFS保证最短路径(无权图)，必须用deque，多源BFS和0-1 BFS是重要模式。',
      steps: [
        'deque([(start,0)])跟踪节点和距离',
        '矩阵图: 检查4/8方向邻居',
        '多源BFS: 同时将所有源加入队列',
        '0-1 BFS: 权0或1的图用deque最优',
      ],
      commonMistakes: [
        '起点不加visited导致无限循环',
        '不正确处理0权重边',
      ],
      practice: [
        '用BFS求矩阵中的最短距离',
        '多源BFS求海洋到最近陆地的距离',
      ],
    },
  },
};

export default overlay;
