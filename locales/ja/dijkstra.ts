import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'ダイクストラアルゴリズム',
  hint: '非負の重みを持つグラフの最短経路を求めます。',
  approach: '優先度キューから最短距離のノードを処理し、隣接ノードの距離を更新します。',
  useCases: [
    'GPSナビゲーションと最短経路探索',
    'ネットワークルーティングプロトコル(OSPF)',
    'ゲームAIのパスファインディング',
  ],
  explanation: {
    simple: {
      overview: 'ダイクストラ法は非負の重み付きグラフでの単一始点最短経路アルゴリズム。',
      analogy: '地図アプリのように — 最短の経路を見つけるが、高速道路料金(重み)があっても機能する。',
      steps: [
        '始点セットdist[start]=0、他は無限大',
        '未訪問ノードの最小距離ノードを取得',
        '隣接ノードの距離を緩和',
        '全ノードを訪問するまで繰り返す',
      ],
      visual: `A--(1)--B--(2)--C
|              |
(4)            (1)
|              |
D-----(3)------E
A→C: A→B→C=3 vs A→D→E→C=8`,
      commonMistakes: [
        '負の重みでは機能しない(ベルマンフォードを使う)',
        '優先度キューなしでO(V²)になる',
      ],
      practice: [
        'ヒープを使ったダイクストラを実装',
        '負の重みがある場合にベルマンフォードと比較',
      ],
      timeComplexity: 'O((V + E) log V)',
      spaceComplexity: 'O(V)'
    },
    deepDive: {
      overview: '優先度キュー(min-heap)実装でO((V+E)log V)。正の重みのみに有効。',
      steps: [
        'heapq.heappush(pq, (dist, node))で最小ヒープ',
        '取り出したノードが最短距離を持つことを証明: 貪欲性',
        '負の辺があると貪欲選択が崩れる',
        '訪問済みノードをスキップしてパフォーマンス向上',
      ],
      commonMistakes: [
        '負の辺を無視する',
        'visited setなしで同じノードを複数回処理',
      ],
      practice: [
        'ダイクストラでネットワーク遅延時間を解く',
        'ダイクストラで最安値フライト(最大k経由)を解く',
      ],
    },
  },
};

export default overlay;
