import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'ローリング変数2つだけ使って(リストなし)最初の15個のフィボナッチ数を生成しましょう。',
  hint: 'prevとcurrを追跡します。各ステップ: new_curr = prev + curr、その後シフト。',
  explanation: {
    simple: {
      overview: 'フィボナッチ数列の各数は前の2つの和: 0,1,1,2,3,5,8,13...',
      analogy: 'ウサギのコロニーの成長 — 各世代は前の2世代の合計。',
      steps: [
        'a=0, b=1で初期化',
        'ループ内でc = a + b を計算',
        'a = b, b = c と更新',
        'n回繰り返してn番目を取得',
      ],
      visual: `a,b = 0,1
for _ in range(8):
    print(a)
    a,b = b, a+b
# 0 1 1 2 3 5 8 13`,
      commonMistakes: [
        '素朴なインデックス参照で大きなnにIndexError',
        'インデックス(位置)と値を混同',
      ],
      practice: [
        '最初の20個のフィボナッチ数を生成',
        '数がフィボナッチ数列にあるか確認',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: '行列累乗でO(log n)のフィボナッチ計算。ビネの公式で閉形式解も可能。',
      steps: [
        '反復: O(n)時間、O(1)空間 — 実用的に最良',
        'メモ化/DP: O(n)時間、O(n)空間',
        '行列累乗: [[1,1],[1,0]]^nでO(log n)',
        'ビネの公式: fib(n)=round(φⁿ/√5) (小さいnのみ)',
      ],
      commonMistakes: [
        'キャッシュなし素朴再帰はO(2^n) — 使わない',
        'ビネの公式は大きなnで浮動小数点誤差あり',
      ],
      practice: [
        '@lru_cacheでfib()を実装',
        'フィボナッチと黄金比の関係を調べる',
      ],
    },
  },
};

export default overlay;
