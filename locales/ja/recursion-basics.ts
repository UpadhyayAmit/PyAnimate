import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '再帰の基礎',
  hint: '基底ケースと再帰ケース — 大きな問題は小さなサブ問題に分解されます。',
  approach: 'ベースケース(再帰が止まる場所)を定義し、より小さなバージョンの問題を呼び出します。',
  useCases: [
    '木/グラフの走査',
    '分割統治アルゴリズム',
    '数学的数列(フィボナッチ、階乗)',
  ],
  explanation: {
    simple: {
      overview: '再帰とは関数が自分自身を呼び出すこと。基底ケースと再帰ケースが必要。',
      analogy: 'ロシアのマトリョーシカ人形のようなもの — 中身も同じ形の小さい人形があり、基底は開かない一番小さい人形。',
      steps: [
        '基底ケースを定義(再帰を停止する条件)',
        '問題を小さくする再帰ケースを定義',
        '再帰の過程で問題が縮小していることを確認',
        '基底ケースに向かって必ず進む',
      ],
      visual: `def factorial(n):
    if n == 0: return 1      # 基底
    return n * factorial(n-1) # 再帰
factorial(3)=3*factorial(2)
=3*2*factorial(1)=3*2*1*1=6`,
      commonMistakes: [
        '基底ケースを忘れると無限再帰',
        '再帰の削減が間違っている',
        'sys.setrecursionlimit()を超えると RuntimeError',
      ],
      practice: [
        '再帰で合計・階乗・フィボナッチを実装',
        '再帰で二分探索を実装',
      ],
      timeComplexity: '問題による',
      spaceComplexity: 'O(n)コールスタック深さ'
    },
    deepDive: {
      overview: 'Pythonはデフォルト再帰深さ1000。末尾再帰最適化なし。反復または@lru_cacheで改善。',
      steps: [
        '再帰ツリーで時間計算量を分析',
        'メモ化 (@lru_cache)で重複部分問題を解消',
        '反復で再帰スタックを明示的スタックに変換',
        'sys.setrecursionlimitで限度を増やす(推奨しない)',
      ],
      commonMistakes: [
        '重複計算でO(2^n)になる(memoize)',
        '再帰の空間コストを忘れる',
      ],
      practice: [
        '@lru_cacheなしとありでfib()の時間を比較',
        '再帰的なファイルシステム走査を実装',
      ],
    },
  },
};

export default overlay;
