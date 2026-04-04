import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '对[[0,3,∞,7],[8,0,2,∞],[5,∞,0,1],[2,∞,∞,0]]应用Floyd-Warshall。',
  hint: '三个嵌套循环: k(中继节点), i(源), j(目标)。如果dist[i][k]+dist[k][j] < dist[i][j]则更新。',
  explanation: {
    simple: {
      overview: 'Floyd-Warshall是求所有点对最短路径的动态规划算法，可处理负权边。',
      analogy: '就像创建所有城市间的最短距离表——从所有经由城市的路线中找最短的。',
      steps: [
        '初始化V×V距离矩阵(同点=0，有边=权重，否则=∞)',
        '对所有中间节点k循环',
        'dist[i][j]=min(dist[i][j],dist[i][k]+dist[k][j])',
        '对角线为负则存在负环',
      ],
      visual: `V=4
for k in range(4):
  for i in range(4):
    for j in range(4):
      d[i][j]=min(d[i][j],d[i][k]+d[k][j])`,
      commonMistakes: [
        '跳过负环检测(检查对角线)',
        '三重循环顺序写错',
      ],
      practice: [
        '在矩阵图上实现Floyd-Warshall',
        '用Floyd-Warshall检测是否有负环',
      ],
      timeComplexity: 'O(V³)',
      spaceComplexity: 'O(V²)'
    },
    deepDive: {
      overview: 'O(V³)全对最短路径，也可计算传递闭包，用中间节点矩阵重建路径。',
      steps: [
        '路径重建: 记录next[i][j]=k',
        '传递闭包: 将权重改为1/0的Floyd-Warshall',
        'Johnson算法: 稀疏图O(VE log V)更优',
        '负环使距离发散到负无穷',
      ],
      commonMistakes: [
        'V>500时使用(O(V³)太慢)',
        '误解与Dijkstra的选择时机',
      ],
      practice: [
        '实现含路径重建的Floyd-Warshall',
        '比较Floyd和矩阵链乘法',
      ],
    },
  },
};

export default overlay;
