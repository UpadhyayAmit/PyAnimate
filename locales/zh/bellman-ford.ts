import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '贝尔曼-福特算法',
  hint: '即使有负权重也能找到最短路径 — 进行 V-1 次松弛操作。',
  approach: '松弛所有边V-1次。如果第V次遍历仍有松弛，则存在负权环。',
  useCases: [
    '具有负边权的图',
    '货币套利检测',
    '网络路由中的距离向量算法',
  ],
  explanation: {
    simple: {
      overview: 'Bellman-Ford在有负权重的图中也能求单源最短路径，并能检测负环。',
      analogy: '就像找包含负利率的汇率路径中的最便宜转账路线。',
      steps: [
        '初始化dist[start]=0，其他为无穷大',
        '对所有边重复V-1次松弛',
        '再松弛一次，有更新则存在负环',
        '返回距离数组',
      ],
      visual: `V=5, E=6
遍历所有边(u,v,w)
重复V-1=4次松弛
最后确认 → 有更新=负环`,
      commonMistakes: [
        '跳过负环检测',
        '松弛V次而不是V-1次',
      ],
      practice: [
        '在负权图上实现Bellman-Ford',
        '用Bellman-Ford检测负环',
      ],
      timeComplexity: 'O(VE)',
      spaceComplexity: 'O(V)'
    },
    deepDive: {
      overview: 'Bellman-Ford O(VE)，用于负环检测，SPFA是队列优化版通常更快。',
      steps: [
        '外层V-1次，内层全E边，共O(VE)',
        '负环: 第V次松弛有更新则存在',
        'SPFA: deque队列优化, 实践较快',
        '分布式Bellman-Ford = BGP路由',
      ],
      commonMistakes: [
        '稠密图中用它替代Dijkstra(慢)',
        '无剪枝的SPFA最坏O(VE)',
      ],
      practice: [
        '比较负权图中Bellman-Ford和Dijkstra',
        '在最便宜航班问题中试用Bellman-Ford',
      ],
    },
  },
};

export default overlay;
