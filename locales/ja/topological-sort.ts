import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '5→2, 5→0, 4→0, 4→1, 2→3, 3→1のトポロジカルソートを実行しましょう。',
  hint: 'カーンのアルゴリズム: 入次数を計算し、0の頂点をキューに入れ、処理します。',
  explanation: {
    simple: {
      overview: 'トポロジカルソートはDAG(有向非循環グラフ)のノードを依存関係の順に並べる。',
      analogy: '授業の履修順を決めるようなもの：前提科目を先に取る。',
      steps: [
        '各ノードのin-degree(入次数)を計算',
        'in-degree=0の全ノードをキューに追加',
        'ノードをデキューして隣接のin-degreeを減らす',
        'in-degree=0になったノードをキューに追加。全で完了しなければサイクルあり',
      ],
      visual: `1→2→4
  ↓
  3→4
Topo: [1,2,3,4]`,
      commonMistakes: [
        '有向グラフにしか使えない',
        'サイクル検出を省略する',
      ],
      practice: [
        '依存関係のリストから有効なカリキュラムを生成',
        'コース管理でカーンvsDFSを比較',
      ],
      timeComplexity: 'O(V + E)',
      spaceComplexity: 'O(V)'
    },
    deepDive: {
      overview: 'カーンのアルゴリズム(BFS)とDFS後順の2つの実装。どちらもO(V+E)。サイクル検出をサポート。',
      steps: [
        'カーン: BFSキュー+in-degreeカウント',
        'DFS後順: 完了したノードをスタックに積む',
        'サイクル: トポ順でV未満ノードが残れば存在',
        '並列スケジューリング: 同じin-degree層を並列実行',
      ],
      commonMistakes: [
        '複数の有効なトポ順が存在することを忘れる',
        'サイクルがある場合に空リストを返さない',
      ],
      practice: [
        'カーンアルゴリズムを実装してサイクルを検出',
        '最長パスをDAGで求める',
      ],
    },
  },
};

export default overlay;
