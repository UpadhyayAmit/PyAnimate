import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Floyd-Warshallを[[0,3,∞,7],[8,0,2,∞],[5,∞,0,1],[2,∞,∞,0]]に適用しましょう。',
  hint: '3つのネストしたループ: k (中継ノード), i (始点), j (終点)。dist[i][k]+dist[k][j] < dist[i][j]なら更新。',
  explanation: {
    simple: {
      overview: 'フロイド・ワーシャル法はすべてのペアの最短経路を求める動的計画法アルゴリズム。负の辺も処理できる。',
      analogy: '全都市間の最短距離表を作るようなもの — 中間都市を経由する全ルートを探索する。',
      steps: [
        'V×V距離行列を初期化(同頂点=0、辺あり=重み、それ以外=∞)',
        '全中間頂点kでループ',
        'dist[i][j] = min(dist[i][j], dist[i][k]+dist[k][j])',
        '対角線が負なら負サイクルあり',
      ],
      visual: `V=4
for k in range(4):
  for i in range(4):
    for j in range(4):
      d[i][j]=min(d[i][j],d[i][k]+d[k][j])`,
      commonMistakes: [
        '負サイクル検出を省略する(対角線チェック)',
        '3つのループの順序を間違える',
      ],
      practice: [
        '行列グラフでフロイド・ワーシャルを実装',
        '負サイクルがあるかをフロイド・ワーシャルで確認',
      ],
      timeComplexity: 'O(V³)',
      spaceComplexity: 'O(V²)'
    },
    deepDive: {
      overview: 'O(V³)の全対最短経路。推移閉包の計算にも使える。中間ノード行列で経路を再構築できる。',
      steps: [
        '経路再構築: next[i][j]=kを記録',
        '推移閉包: 重みを1/0に変えたフロイドワーシャル',
        'Johnsonアルゴリズム: 疎グラフにはO(VE log V)',
        '負サイクルで距離が負の無限大に発散',
      ],
      commonMistakes: [
        'V>500で使う(O(V³)が遅い)',
        'ダイクストラとの選択基準を誤解する',
      ],
      practice: [
        '経路再構築を含むフロイドワーシャルを実装',
        '行列連鎖でフロイドと比較する',
      ],
    },
  },
};

export default overlay;
