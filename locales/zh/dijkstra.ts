import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '迪杰斯特拉算法',
  hint: '求非负权重图中的最短路径。',
  approach: '从优先队列中处理距离最短的节点，更新邻居的距离。',
  useCases: [
    'GPS导航和最短路线查找',
    '网络路由协议(OSPF)',
    '游戏AI中的路径寻找',
  ],
  explanation: {
    simple: {
      overview: 'Dijkstra算法找非负权重图中单源最短路径。',
      analogy: '就像导航App——找最短路线，即使有收费高速(权重)也能处理。',
      steps: [
        '初始化dist[start]=0，其他为无穷大',
        '获取未访问节点中距离最小的',
        '松弛邻居节点的距离',
        '重复直到访问所有节点',
      ],
      visual: `A--(1)--B--(2)--C
|              |
(4)            (1)
|              |
D-----(3)------E
A→C: A→B→C=3 vs A→D→E→C=8`,
      commonMistakes: [
        '不能处理负权重(用Bellman-Ford)',
        '不用优先队列导致O(V²)',
      ],
      practice: [
        '实现基于堆的Dijkstra',
        '有负权重时与Bellman-Ford比较',
      ],
      timeComplexity: 'O((V + E) log V)',
      spaceComplexity: 'O(V)'
    },
    deepDive: {
      overview: '优先队列(最小堆)实现O((V+E)log V)，仅适用于正权重边。',
      steps: [
        'heapq.heappush(pq,(dist,node))最小堆',
        '贪心正确性证明: 弹出的节点已是最短距离',
        '负边破坏贪心选择',
        '跳过已访问节点提升性能',
      ],
      commonMistakes: [
        '忽略负权重边',
        '无visited集导致重复处理节点',
      ],
      practice: [
        '用Dijkstra解网络延迟时间',
        '用Dijkstra解最便宜航班(最多k次中转)',
      ],
    },
  },
};

export default overlay;
