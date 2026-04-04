import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '動的プログラミングの基礎',
  hint: '部分問題の解を保存して再利用し、再計算を避けます。',
  approach: '問題を重複するサブ問題に分解します。サブ問題の結果をメモ化/テーブル化します。',
  useCases: [
    '最適化問題(最小コスト、最大利益)',
    '計数問題(経路、方法)',
    '文字列マッチング(編集距離、LCS)',
  ],
  explanation: {
    simple: {
      overview: '動的計画法は複雑な問題を単純な部分問題に分割し、解をメモして再計算を避ける。',
      analogy: 'ハシゴを登るように — 各ステップは前のステップの上に積み重なる。',
      steps: [
        '部分問題を特定する',
        'dp[]配列またはキャッシュを作成',
        '基底ケースを初期化',
        '関係式に基づいてdp配列を埋める',
      ],
      visual: `fib(n) = fib(n-1) + fib(n-2)
dp = [0,1]
for i in range(2,n+1):
    dp.append(dp[-1]+dp[-2])`,
      commonMistakes: [
        '基底ケースを正しく設定しない',
        '配列の境界外アクセス',
        'トップダウン(再帰+メモ)とボトムアップ(反復)を混同',
      ],
      practice: [
        'クライミングステア問題をDPで解く',
        'DP配列を使って最大部分和を求める',
      ],
      timeComplexity: '問題とDP関係による',
      spaceComplexity: 'O(n)または最適化後O(1)'
    },
    deepDive: {
      overview: 'DPは重複部分問題と最適部分構造を持つ問題に適用。メモ化(トップダウン)対タブ化(ボトムアップ)。',
      steps: [
        '状態を定義: dp[i]の意味は？',
        '遷移を書く: dp[i] = f(dp[i-1], dp[i-2]...)',
        '基底ケース: dp[0]、dp[1]を初期化',
        '空間最適化: O(n)→O(1)は2変数で可能なことがある',
      ],
      commonMistakes: [
        'DP問題をグリーディで解こうとする',
        '2D DPで行と列の順序を間違える',
      ],
      practice: [
        'コイン枚数最小問題を実装',
        '最長増加部分列(LIS)をDPで解く',
      ],
    },
  },
};

export default overlay;
