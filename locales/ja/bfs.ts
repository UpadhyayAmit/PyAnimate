import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '幅優先探索 (BFS)',
  hint: 'キューを使ってグラフをレベルごとに探索します。',
  approach: 'スタートノードをキューに入れます。ノードを取り出し、未訪問の隣接ノードをキューに追加します。',
  useCases: [
    '重みなしグラフの最短経路',
    'ソーシャルネットワークの分離度',
    'Webクローラーのページ発見',
  ],
  explanation: {
    simple: {
      overview: '幅優先探索(BFS)はグラフ/木をレベル順に探索する。次のレベルに進む前に同レベルの全ノードを訪問する。',
      analogy: '石を水に投げたときの波紋のように — 同心円状に外側へ広がっていく。',
      steps: [
        'ルートをキューに入れてvisitedに追加',
        'キューが空になるまでループ',
        '先頭ノードをデキュー',
        '未訪問の隣接ノードをキューに追加してvisitedに記録',
      ],
      visual: `    1
   / \\
  2   3
 / \\
4   5
BFS: 1→2→3→4→5`,
      commonMistakes: [
        'enqueueと同時にvisitedに追加しないと重複処理',
        'dequeueにlist.pop(0)を使うとO(n²)',
      ],
      practice: [
        '二分木の最小深さをBFSで求める',
        'BFSで連結成分の数を数える',
      ],
      timeComplexity: 'O(V + E)',
      spaceComplexity: 'O(V)'
    },
    deepDive: {
      overview: 'BFSは最短経路(非重み付きグラフ)を保証。dequeが必須。多重始点BFSや0-1 BFSも重要パターン。',
      steps: [
        'deque([(start,0)])でノードと距離を追跡',
        '行列グラフ: 4方向/8方向の隣接を確認',
        '多重始点BFS: 全ソースを同時にキューに入れる',
        '0-1 BFS: 重みが0か1のグラフにdeque最適',
      ],
      commonMistakes: [
        '始点をvisitedに追加せずに無限ループ',
        '0重みエッジを正しく処理しない',
      ],
      practice: [
        '行列での最短距離をBFSで求める',
        '多重始点BFSで最近陸地からの海の距離',
      ],
    },
  },
};

export default overlay;
