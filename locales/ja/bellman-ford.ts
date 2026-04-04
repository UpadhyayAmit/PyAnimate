import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'ベルマン-フォードアルゴリズム',
  hint: '負の重みがあっても最短経路を求められます — V-1回の緩和を行います。',
  approach: 'すべての辺をV-1回緩和します。V回目のパスでも緩和が起きれば、負のサイクルが存在します。',
  useCases: [
    '負の辺の重みを持つグラフ',
    '通貨裁定取引の検出',
    'ネットワークルーティングの距離ベクトルアルゴリズム',
  ],
  explanation: {
    simple: {
      overview: 'ベルマンフォードは負の重みを持つグラフでも動作する単一始点最短経路アルゴリズム。負サイクルも検出できる。',
      analogy: '負の利率を含む為替レートで最安値の資金移動経路を求めるようなもの。',
      steps: [
        'dist[start]=0、他は無限大に初期化',
        'V-1回、全辺を緩和',
        '更に1回緩和して変化があれば負サイクルあり',
        '結果の距離配列を返す',
      ],
      visual: `V=5, E=6
辺(u,v,w)を全て走査
V-1=4回繰り返し緩和
最後にもう1回確認 → 更新あり=負サイクル`,
      commonMistakes: [
        '負サイクル検出を省略する',
        'V-1回ではなくV回緩和する',
      ],
      practice: [
        '負の重みグラフでのベルマンフォードを実装',
        'ベルマンフォードで負サイクルを検出',
      ],
      timeComplexity: 'O(VE)',
      spaceComplexity: 'O(V)'
    },
    deepDive: {
      overview: 'ベルマンフォードはО(VE)。負サイクル検出に使う。SPFAはキュー最適化版で実際には速い。',
      steps: [
        '外ループV-1回、内ループ全E辺でO(VE)',
        '負サイクル: V回目の緩和で更新があれば存在',
        'SPFA(Shortest Path Faster Algorithm): dequeでキュー最適化',
        '分散版ベルマンフォード = BGPルーティング',
      ],
      commonMistakes: [
        '密グラフでダイクストラの代わりに使う(遅い)',
        '枝刈りなしのSPFAはO(VE)最悪',
      ],
      practice: [
        '負の重みグラフでベルマンフォードvsダイクストラを確認',
        '最安値フライトでベルマンフォードを試す',
      ],
    },
  },
};

export default overlay;
