import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '挿入ソート',
  hint: '各要素をソート済み部分の正しい位置に挿入します。',
  approach: '各要素を正しい位置に挿入し、他の要素を右にシフトします。',
  useCases: [
    'ほぼソート済みデータへの高効率',
    'リアルタイムデータを一つずつソート',
    '小さな配列に対してシンプルで高速',
  ],
  explanation: {
    simple: {
      overview: '挿入ソートは各要素をソート済み部分の正しい位置に順次挿入する。',
      analogy: 'トランプのトリックを取るように — 新しいカードを手の中の正しい位置に挿入する。',
      steps: [
        'インデックス1から始める',
        '現在の要素をkeyとして保存',
        'keyより大きい要素を右にシフト',
        '正しい位置にkeyを挿入',
      ],
      visual: `[5,3,4,1,2]
→[3,5,4,1,2]
→[3,4,5,1,2]
→[1,3,4,5,2]
→[1,2,3,4,5]`,
      commonMistakes: [
        '比較演算子の向きを間違える',
        '外側ループを0からスタートする',
      ],
      practice: [
        'タプルリストをキーでソートするよう変形',
        'バイナリ挿入ソートを実装して比較回数を削減',
      ],
      timeComplexity: 'O(n²)最悪、O(n)最良',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: '挿入ソートは安定・インプレース。小さい配列や部分ソート済みデータに有利。Timsortのサブルーチンとして使用される。',
      steps: [
        '最良: 既ソート配列でO(n)比較',
        '最悪: 逆順配列でO(n²)シフト',
        '平均: O(n²)—大きいnには不適',
        'TimsortはO(n)のrunに挿入ソートを使う',
      ],
      commonMistakes: [
        '小さい配列でも複雑なアルゴリズムを使う',
        '安定性が重要なユースケースを見逃す',
      ],
      practice: [
        'n=1000でバブルソートと時間を比較',
        'バイナリ挿入ソートを実装',
      ],
    },
  },
};

export default overlay;
