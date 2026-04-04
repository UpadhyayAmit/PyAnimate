import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'カウントソート',
  hint: '小さな範囲の整数をO(n+k)で頻度カウントによりソートします。',
  approach: '入力値をカウント配列で数え、カウントからソート済み出力を再構築します。',
  useCases: [
    '小さな範囲の整数のソート(例:成績0-100)',
    'Radix Sortの基盤アルゴリズム',
    'O(n log n)の代わりにO(n+k)が可能な時',
  ],
  explanation: {
    simple: {
      overview: 'カウンティングソートは各値の出現回数を数えてソート — 範囲が限られた整数に最適。',
      analogy: '選挙の得票数を数えて順に並べるようなもの。',
      steps: [
        '値の範囲(max-min+1)のカウント配列を作る',
        '各要素の出現数をカウント',
        'カウントを累積和に変換',
        '出力配列に要素を配置してカウントを減らす',
      ],
      visual: `[4,2,2,8,3,3,1]
count[1]=1,count[2]=2,count[3]=2,count[4]=1,count[8]=1
→[1,2,2,3,3,4,8]`,
      commonMistakes: [
        'オフセットなしで負の値を処理しない',
        '範囲が大きいと空間が膨大になる',
      ],
      practice: [
        '小文字アルファベット文字列をカウンティングソート',
        'ひとつのループだけで最大値と最小値を求める',
      ],
      timeComplexity: 'O(n + k) kは値の範囲',
      spaceComplexity: 'O(k)'
    },
    deepDive: {
      overview: 'カウンティングソートはO(n+k)で安定。dがd桁のn要素ならラディックスソートでO(d(n+k))。',
      steps: [
        '累積カウントで安定性を保証',
        'ラディックスソートはカウンティングソートを各桁に適用',
        '最大値と最小値でオフセットを計算',
        '文字列ソートにも応用可能',
      ],
      commonMistakes: [
        'kが大きいときに使う(空間が問題)',
        '安定カウンティングソートのためのprefixsum手順を逆にする',
      ],
      practice: [
        '0-999の配列をラディックスソートで実装',
        '3桁の整数でカウンティングソートの安定性を確認',
      ],
    },
  },
};

export default overlay;
