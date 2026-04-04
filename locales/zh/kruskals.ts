import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '找出边(A-B,4),(A-C,2),(B-C,1),(B-D,5),(C-D,8)的最小生成树。',
  hint: '按权重排序边。使用Union-Find检测环。贪心地添加不形成环的边。',
  explanation: {
    simple: {
      overview: 'Kruskal算法贪心地按权重升序添加边构建最小生成树(MST)。',
      analogy: '就像用最便宜的电缆连接所有城市——从最便宜的开始，避免形成环。',
      steps: [
        '按权重升序排列所有边',
        '取最小权重边',
        '若不形成环(Union-Find)则加入MST',
        '重复直到有V-1条边',
      ],
      visual: `边: (1,2,1)(1,3,3)(2,3,2)(3,4,4)
排序: 1,2,3,4
加入: (1,2,1)→(2,3,2)→(3,4,4)
MST权重=7`,
      commonMistakes: [
        '没有Union-Find就检测环',
        '不在V-1边时停止',
      ],
      practice: [
        '实现带路径压缩和按秩合并的Union-Find',
        '比较Kruskal和Prim的MST',
      ],
      timeComplexity: 'O(E log E)',
      spaceComplexity: 'O(V)'
    },
    deepDive: {
      overview: 'Union-Find使环检测接近O(α)，稀疏图用Kruskal，稠密图用Prim。',
      steps: [
        '按秩合并+路径压缩使操作接近O(1)',
        'E log E的排序是瓶颈(稀疏图)',
        'Prim用堆跟踪邻接顶点O(E log V)',
        'Boruvka算法: 适合并行MST的另一种方法',
      ],
      commonMistakes: [
        '无路径压缩的Union-Find可能O(n)每次操作',
        '不排序边就添加',
      ],
      practice: [
        '实现完整Union-Find(路径压缩+按秩)',
        '求最小生成森林',
      ],
    },
  },
};

export default overlay;
