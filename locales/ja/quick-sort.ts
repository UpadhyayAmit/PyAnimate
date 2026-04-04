import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'クイックソート',
  hint: 'ピボットを選び、配列を分割し、再帰的にソートします。',
  approach: 'ピボットを選択し、小さいものを左に大きいものを右に分割し、両側を再帰的にソートします。',
  useCases: [
    '汎用の高速in-placeソート',
    'キャッシュフレンドリーで実用アプリに最適',
    '大規模なランダムデータセット',
  ],
  explanation: {
    simple: {
      overview: 'クイックソートはピボットを選択し、小さい要素を左・大きい要素を右に分割して再帰的にソートする。',
      analogy: '教師が全員に「ピボット身長より高いか低いか」で分かれさせ、それぞれのグループを再ソートする。',
      steps: [
        '基底ケース: n<=1なら終了',
        'ピボットを選ぶ(末尾・ランダム・中央値)',
        '小さい要素・等しい要素・大きい要素に3分割',
        '小と大を再帰的にソート',
      ],
      visual: `[3,6,8,10,1,2,1] pivot=3
→less=[1,2,1] equal=[3] greater=[6,8,10]
→[1,1,2,3,6,8,10]`,
      commonMistakes: [
        '最悪ケース(ソート済み配列で末尾ピボット)を考慮しない',
        '等しい要素をless/greaterに偏らせる',
      ],
      practice: [
        'ランダムピボット選択を実装',
        'ロムートvsホアのパーティションを比較',
      ],
      timeComplexity: 'O(n log n)平均、O(n²)最悪',
      spaceComplexity: 'O(log n)'
    },
    deepDive: {
      overview: 'ランダム化クイックソートは期待O(n log n)。3方向パーティションで重複要素を効率化。',
      steps: [
        'ロムートパーティション: シンプル、O(n)空間',
        'ホアパーティション: 2ポインタ、スワップ少ない',
        '3方向分割(Dutch National Flag)で重複を効率化',
        'median-of-threeで最悪ケースを回避',
      ],
      commonMistakes: [
        '重複が多い入力で3方向分割を使わない',
        'リンクリストにクイックソートを使う(不適)',
      ],
      practice: [
        'Dutch National Flagアルゴリズムを実装',
        '3方向クイックソートと標準版を重複データで比較',
      ],
    },
  },
};

export default overlay;
