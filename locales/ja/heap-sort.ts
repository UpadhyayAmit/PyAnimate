import type { LessonLocaleOverlay } from '../types';

const heapSort: LessonLocaleOverlay = {
  explanation: {
    simple: {
      overview: 'Heap Sort は max-heap を作り、毎回最大値を末尾へ移動します。',
      analogy: 'Priority Queue のように、常に最大値から取り出すイメージです。',
      steps: [
        '配列を heapify して max-heap を作る。',
        'root と最後の未整列要素を swap する。',
        'heap_size を 1 減らす。',
        'root から sift-down を行う。',
        'heap_size が 1 になるまで繰り返す。',
      ],
      visual: '[heap | sorted tail] で右側の sorted 部分が伸びる。',
      commonMistakes: [
        '0-based の child index 計算ミス。',
        'extraction 後に heap_size を減らさない。',
        'swap 後に sift-up を使ってしまう。',
      ],
      practice: [
        '[4,10,3,5,1] を heapify して手順を追う。',
        'Heap Sort が stable でない理由を説明する。',
        'min-heap で降順ソート版を作る。',
      ],
      timeComplexity: 'O(n log n)',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'Heap Sort は worst-case でも O(n log n) を保証し、補助メモリは定数です。',
      analogy: '完全二分木で root-leaf 経路を修復し続ける処理。',
      steps: [
        'bottom-up build-heap を O(n) で実行。',
        'end = n-1 から 1 まで root/end を swap。',
        'heap_size-- して root を sift-down で修復。',
        'Invariant: prefix は heap、suffix は sorted。',
        'heap_size == 1 で終了。',
      ],
      visual: 'heap が縮み、sorted tail が拡大する。',
      commonMistakes: [
        'sift-down で比較する child を誤る。',
        'swap 後に heap invariant を復元しない。',
        '内側ループの無駄な再計算。',
      ],
      practice: [
        'build-heap が O(n) になる理由を導出する。',
        'Quick Sort と swap 回数を比較する。',
        '再帰なしの反復版を実装する。',
      ],
      timeComplexity: 'Theta(n log n)',
      spaceComplexity: 'Theta(1)',
    },
  },
};

export default heapSort;
