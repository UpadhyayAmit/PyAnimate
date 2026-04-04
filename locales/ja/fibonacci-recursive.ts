import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '再帰的フィボナッチを実装しましょう。fib(10)とfib(35)を確認し、時間の違いに注目。',
  hint: 'dictキャッシュでメモ化を追加します。呼び出しツリーが2^nからnに劇的に削減。',
  explanation: {
    simple: {
      overview: '再帰的フィボナッチ: f(n)=f(n-1)+f(n-2)。単純だが指数時間でメモ化が必要。',
      analogy: '家系図のように — 各人は両親から情報を得る。',
      steps: [
        '基底ケース: f(0)=0, f(1)=1',
        'それ以外: return f(n-1) + f(n-2)',
        'これはO(2^n) — 非常に遅い',
        '@lru_cacheでO(n)に改善',
      ],
      visual: `fib(4)
├─fib(3)         fib(2)
│  ├─fib(2) fib(1) ├─fib(1) fib(0)
│  └─fib(1) fib(0)`,
      commonMistakes: [
        'メモ化なしで大きいnに使う',
        '基底ケースが0や負で正しく処理されない',
      ],
      practice: [
        '@functools.lru_cacheでfib()をデコレート',
        'メモ化なし/あり/反復の時間を比較',
      ],
      timeComplexity: 'O(2^n)なし、O(n)メモ化あり',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: 'メモ化でO(n)。反復でO(1)空間。行列累乗でO(log n)が可能。',
      steps: [
        'メモ化: @lru_cacheで呼び出し回数O(n)',
        'ボトムアップDP: リストでO(n)・空間O(n)',
        '空間最適化: 2変数ローリングでO(1)',
        '行列法: [[1,1],[1,0]]^nでO(log n)',
      ],
      commonMistakes: [
        '再帰ツリー解析なしでメモ化の価値を見誤る',
        '再帰深さにsys.setrecursionlimitが必要なことを忘れる',
      ],
      practice: [
        'メモ化とタブ化クリーンな実装を書く',
        'nthフィボナッチの剰余計算(mod p)',
      ],
    },
  },
};

export default overlay;
