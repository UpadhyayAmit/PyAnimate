import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '1〜30のFizzBuzzを実装しましょう。拡張: 7の倍数に\'Bazz\'を追加。',
  hint: 'まず3と5の両方を確認(FizzBuzz)、次に個別に。7のケースも同様に追加。',
  explanation: {
    simple: {
      overview: 'FizzBuzzは1からnまでの数を出力し、3の倍数は"Fizz"、5の倍数は"Buzz"、両方の倍数は"FizzBuzz"に置き換える。',
      analogy: '子供が数える代わりに特定の数で言葉を言うゲームのようなもの。',
      steps: [
        '1からnをループ',
        '3と5の倍数なら"FizzBuzz"を出力',
        '3の倍数なら"Fizz"を出力',
        '5の倍数なら"Buzz"を出力',
        'それ以外は数字を出力',
      ],
      visual: `1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz
11 Fizz 13 14 FizzBuzz 16...`,
      commonMistakes: [
        '3と5を先にチェックすると15の処理が漏れる',
        'if/elif/elseの順序が重要',
      ],
      practice: [
        '7の倍数に"Bazz"を追加して拡張',
        '出力の代わりにリストを返す',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: '文字列連結アプローチで複数チェックを回避。面接のウォームアップとして頻出。',
      steps: [
        '連結アプローチ: result=""; %3でFizz追加; %5でBuzz追加',
        '辞書アプローチ: {0:"FizzBuzz",3:"Fizz",5:"Buzz"}',
        'ジェネレータで大きな範囲に対応',
        '短縮版: ["FizzBuzz"[i%3*4:][:4+i%5*8] or str(i) for i in ...]',
      ],
      commonMistakes: [
        '条件の順序(素朴な実装では15を先にチェック)',
        '関数版でreturnを忘れる',
      ],
      practice: [
        '文字列連結でFizzBuzzを実装',
        '無限レンジのジェネレータ版を書く',
      ],
    },
  },
};

export default overlay;
