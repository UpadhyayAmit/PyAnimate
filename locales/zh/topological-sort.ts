import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '对以下关系进行拓扑排序: 5→2, 5→0, 4→0, 4→1, 2→3, 3→1。',
  hint: '使用Kahn算法：计算入度，将入度为0的节点入队，处理队列。',
  explanation: {
    simple: {
      overview: '拓扑排序将DAG(有向无环图)的节点按依赖关系排序。',
      analogy: '就像确定选课顺序——先修必修课再上进阶课。',
      steps: [
        '计算每个节点的入度',
        '将所有入度=0的节点加入队列',
        '出队节点，将邻居的入度减1',
        '入度变0的加入队列，若未处理完所有节点则有环',
      ],
      visual: `1→2→4
  ↓
  3→4
Topo: [1,2,3,4]`,
      commonMistakes: [
        '只能用于有向图',
        '不检测环',
      ],
      practice: [
        '从依赖列表生成有效课程表',
        '比较Kahn算法和DFS在课程管理中的应用',
      ],
      timeComplexity: 'O(V + E)',
      spaceComplexity: 'O(V)'
    },
    deepDive: {
      overview: 'Kahn算法(BFS)和DFS后序两种实现，均O(V+E)，支持环检测。',
      steps: [
        'Kahn: BFS队列+入度计数',
        'DFS后序: 完成的节点入栈',
        '环检测: 拓扑序中剩余节点数<V则有环',
        '并行调度: 相同入度层可并行执行',
      ],
      commonMistakes: [
        '忘记存在多个有效拓扑序',
        '有环时不返回空列表',
      ],
      practice: [
        '实现Kahn算法并检测环',
        '在DAG中求最长路径',
      ],
    },
  },
};

export default overlay;
