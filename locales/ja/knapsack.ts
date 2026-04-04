import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '0/1ナップサック問題を解きましょう: items=[(2,6),(2,10),(3,12)], capacity=5。DPテーブルを行ごとに構築。',
  hint: 'dp[i][w] = max(dp[i-1][w], dp[i-1][w-weight[i]] + value[i])。',
  explanation: {
    simple: {
      overview: 'ナップサック問題: 最大重さWのバッグに、重さと価値を持つアイテムを入れて価値を最大化する。',
      analogy: 'スーツケースに収まるだけの旅行グッズを詰めて価値を最大化する旅行者のようなもの。',
      steps: [
        'dp[i][w] = 最初のiアイテムで重さw以下の最大価値',
        '空間最適化: 1Dの dp[w]で実装',
        '各アイテムで逆方向に更新(0/1の場合)',
        '最終値はdp[W]',
      ],
      visual: `items=[(2kg,3¥),(3kg,4¥),(4kg,5¥)] W=5
dp[5]=max(dp[3]+4, dp[5])
最終dp: [0,0,3,4,4,7]`,
      commonMistakes: [
        '0/1ナップサックで内ループを逆順にしない(重複)',
        '分割ナップサックとの混同',
      ],
      practice: [
        '0/1ナップサックを2Dと1Dで実装',
        'ターゲット合計(重みのみ)問題に変形',
      ],
      timeComplexity: 'O(nW)',
      spaceComplexity: 'O(W)'
    },
    deepDive: {
      overview: 'ナップサックはDPの基礎。0/1は逆反復、分割ナップサックは貪欲。擬似多項式O(nW)。',
      steps: [
        '2D→1DP最適化: dp[w] = max(dp[w], dp[w-wt]+val)',
        '0/1は重量の逆順でスキャン(再利用防止)',
        '完全ナップサック: 重量の正順でスキャン(再利用可)',
        'subset sum, partition equalはナップサックの変種',
      ],
      commonMistakes: [
        '逆順と正順の混同 → 0/1と完全ナップサックを誤解',
        'O(nW)は擬似多項式(Wの指数は大きくなりうる)',
      ],
      practice: [
        '0/1と完全ナップサックを1Dで実装',
        '配列を2等分可能か(partition equal subset)',
      ],
    },
  },
};

export default overlay;
