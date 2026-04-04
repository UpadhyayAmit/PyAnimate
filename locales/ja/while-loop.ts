import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'whileループを使って1〜10の数字を表示し、その合計を表示しましょう。',
  hint: 'カウンター変数を保持して毎回更新します。counter > 10で停止。',
  explanation: {
    simple: {
      overview: 'whileループは条件が真の間コードブロックを繰り返す。',
      analogy: 'スクワットの練習のようなもの — できる間は続け、できなくなったら止まる。',
      steps: [
        'while 条件: と書く',
        '条件がTrueなら実行',
        '最終的にFalseになるよう何かを更新する',
        'breakで早期脱出できる',
      ],
      visual: `n = 1
while n <= 5:
    print(n)
    n += 1
# 1 2 3 4 5`,
      commonMistakes: [
        '変数の更新忘れ → 無限ループ',
        'whileの後のコロンを忘れる',
        '条件ロジックが間違っている',
      ],
      practice: [
        '数当てゲームのループを作る',
        'whileで数字の桁数を数える',
      ],
    },
    deepDive: {
      overview: 'while-else、continue/breakの使い方と無限ループパターン。',
      steps: [
        'while-else: breakがなければelseが実行される',
        'continueで次のイテレーションへスキップ',
        'breakでループを完全脱出',
        'while Trueパターンでdo-whileを実現',
      ],
      commonMistakes: [
        'while-elseはtry-exceptとは異なる',
        'breakを正しいループの外に置く',
      ],
      practice: [
        'while-elseで線形探索を実装',
        'while Trueで対話式メニューを作る',
      ],
    },
  },
};

export default overlay;
