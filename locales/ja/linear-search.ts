import type { LessonLocaleOverlay } from '../types';

const linearSearch: LessonLocaleOverlay = {
  explanation: {
    simple: {
      overview: 'Linear Search は配列を先頭から順に見て target を探します。',
      analogy: '未整理の棚で本を探すように 1 冊ずつ確認します。',
      steps: [
        'index 0 から開始。',
        'arr[i] と target を比較。',
        '一致したら i を返す。',
        '一致しなければ次へ進む。',
        '最後までなければ not found を返す。',
      ],
      visual: '[7 2 9 4] -> 7 no -> 2 yes (index 1).',
      commonMistakes: [
        '条件を i < n-1 にして最後を見落とす。',
        '空配列ケースを処理しない。',
        'sorted data でも常に linear search を使う。',
      ],
      practice: [
        'best/worst/average の比較回数を数える。',
        '一致する全 index を返す版を書く。',
        '両端から探す版と比較する。',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'Linear Search は実装が簡単で、small n や stream で有効です。',
      analogy: '巻き戻しできないデータを 1 回だけ走査するイメージ。',
      steps: [
        'Invariant: i 未満はすべて確認済み。',
        '各要素は最大 1 回比較。',
        '最初の一致で early exit。',
        '一致なしなら n 回比較で終了。',
        'index か -1 を返す。',
      ],
      visual: '確認済み範囲が左から右へ広がる。',
      commonMistakes: [
        'float を許容誤差なしで等値比較する。',
        '大量検索なのに hash 構造を使わない。',
        '小さな入力に過剰最適化する。',
      ],
      practice: [
        'loop invariant の証明を書く。',
        'sentinel 最適化を実装する。',
        'case-insensitive 文字列検索を作る。',
      ],
      timeComplexity: 'Theta(n)',
      spaceComplexity: 'Theta(1)',
    },
  },
};

export default linearSearch;
