import type { LessonLocaleOverlay } from '../types';

const binarySearch: LessonLocaleOverlay = {
  explanation: {
    simple: {
      overview: 'Binary Search は sorted array を半分ずつ絞って target を探します。',
      analogy: '辞書で単語を探すときのように、真ん中を見て左か右を選びます。',
      steps: [
        'low = 0, high = n - 1 で開始。',
        'mid = (low + high) // 2 を計算。',
        'arr[mid] == target なら mid を返す。',
        'target が小さければ high = mid - 1。',
        'それ以外は low = mid + 1。low <= high の間繰り返す。',
      ],
      visual: '[1 3 5 7 9] -> 5 を確認 -> 右へ -> 7 を発見。',
      commonMistakes: [
        'low/high 更新後に mid を再計算しない。',
        'ループ条件を < にして最後の要素を見落とす。',
        'mid = (low + high) は言語によって overflow する可能性。',
      ],
      practice: [
        '7 要素の配列で存在/未存在 target をトレースする。',
        '見つからない場合に insertion index を返す版を作る。',
        'なぜ sorted が必須かを反例で説明する。',
      ],
      timeComplexity: 'O(log n)',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'Binary Search は monotonic な条件に対する divide-and-conquer で、毎回探索範囲を半分にします。',
      analogy: '高さ log2(n) の decision tree をたどるイメージ。',
      steps: [
        'Inclusive bounds [low, high] を維持する。',
        'mid = low + ((high - low) >> 1) は overflow-safe。',
        'arr[mid] との比較で残す half を選ぶ。',
        'Invariant: target が存在するなら常に [low, high] 内にある。',
        'low > high で終了。insertion point は low。',
      ],
      visual: '[0..n-1] -> left half / right half -> 再び同じ処理。',
      commonMistakes: [
        'low = mid または high = mid で無限ループ。',
        'duplicates の first/last policy を決めない。',
        'sorted 前提を無視して適用する。',
      ],
      practice: [
        'lower_bound / upper_bound を実装する。',
        'loop invariant を簡潔に証明する。',
        'rotated sorted array 向け binary search を設計する。',
      ],
      timeComplexity: 'Theta(log n)',
      spaceComplexity: 'Theta(1)',
    },
  },
};

export default binarySearch;
