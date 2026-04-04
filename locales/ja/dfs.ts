import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '深さ優先探索 (DFS)',
  hint: 'スタックまたは再帰でグラフを深さ優先で探索します。',
  approach: 'スタートノードから探索し、バックトラックする前に各パスを再帰的に最後まで追います。',
  useCases: [
    '迷路解決とパス探索',
    'トポロジカルソートとサイクル検出',
    '強連結成分',
  ],
  explanation: {
    simple: {
      overview: '深さ優先探索(DFS)はバックトラックするまで各パスを可能な限り深く探索する。',
      analogy: '迷路を探索するように — 行き詰まるまで1つの方向を進み、交差点まで引き返して別の道へ。',
      steps: [
        'ルートを訪問してvisitedに記録',
        '各未訪問の隣接ノードを再帰的にDFS',
        '全隣接を訪問したら戻る',
        '再帰なしは明示的スタックを使う',
      ],
      visual: `    1
   / \\
  2   3
 / \\
4   5
DFS: 1→2→4→5→3`,
      commonMistakes: [
        'visitedを記録しないとサイクルで無限ループ',
        '再帰の基底ケースを忘れる',
      ],
      practice: [
        'DFSで二分木のパス合計を検証',
        'DFSで連結成分を識別',
      ],
      timeComplexity: 'O(V + E)',
      spaceComplexity: 'O(V)'
    },
    deepDive: {
      overview: 'DFSは位相ソート・SCC検出・経路列挙に使われる。再帰 vs 反復スタックはトレードオフ。',
      steps: [
        '前順(Pre)/中順(In)/後順(Post)の訪問タイミング',
        'トポロジカルソート: DFS後順+スタック',
        'Tarjanアルゴリズム: SCC(強連結成分)をO(V+E)',
        'バックエッジ = サイクル検出に使える',
      ],
      commonMistakes: [
        '有向グラフと無向グラフでのグローバルvsローカルvisitedの違い',
        '後順DFSと前順DFSの混同',
      ],
      practice: [
        'DFSでトポロジカルソートを実装',
        'グラフにサイクルがあるかDFSで確認',
      ],
    },
  },
};

export default overlay;
