import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '階乗を反復的に実装しましょう。確認: 0!=1, 5!=120, 10!=3628800。',
  hint: 'product=1で始め、1からnまでの各数を掛けます。n=0は特別なケースとして処理。',
  explanation: {
    simple: {
      overview: 'nの階乗(n!)はnまでの全正の整数の積。例: 5! = 5×4×3×2×1 = 120。',
      analogy: 'n人の並び方の数 — 各位置で選択肢が一つ減っていく。',
      steps: [
        '基底ケース: 0!=1, 1!=1',
        'n>1: n! = n × (n-1)!',
        '反復: result=1; for i in range(2,n+1): result*=i',
        'math.factorial()を使う',
      ],
      visual: `5! = 5×4×3×2×1 = 120
4! = 24
0! = 1 (定義による)`,
      commonMistakes: [
        '0!=1の基底ケースを忘れる',
        'nが大きいとき再帰でスタックオーバーフロー',
      ],
      practice: [
        '二項係数C(n,k)=n!/(k!(n-k)!)を計算',
        '反復vs再帰の階乗を比較',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)反復、O(n)再帰'
    },
    deepDive: {
      overview: 'math.factorial()はCで実装され、大きなnに対してツリー乗算を使う。',
      steps: [
        '末尾再帰はPythonで最適化されない(反復を使う)',
        '階乗は任意の指数より速く成長する',
        '剰余計算(n! mod p)にウィルソンの定理を活用',
        'sympy.factorial()で記号計算',
      ],
      commonMistakes: [
        'キャッシュなしで大きなnに再帰を使う',
        'Pythonは任意精度整数なので整数オーバーフローはない',
      ],
      practice: [
        'functools.reduce()で階乗を実装',
        '100!の末尾のゼロの数を求める',
      ],
    },
  },
};

export default overlay;
