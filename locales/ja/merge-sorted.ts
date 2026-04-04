import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'sort()を使わずに[1,3,5,7]と[2,4,6,8]を1つのソート済み配列にマージしましょう。',
  hint: '2つのポインタ(i, j)を使います。arr1[i]とarr2[j]を比較し、小さい方を追加してポインタを進めます。',
  explanation: {
    simple: {
      overview: '2つのソート済みリストをマージして1つのソート済みリストにする。',
      analogy: '2組のソート済みカード手牌を1枚ずつ比べながら1つの山にまとめる。',
      steps: [
        '両リストに2つのポインタを用意',
        '小さい方の要素を結果に追加してポインタを進める',
        '一方が尽きたら残りを全部追加',
        '結果は完全にソート済み',
      ],
      visual: `A=[1,3,5] B=[2,4,6]
i=0,j=0→1 i=1,j=0→2 i=1,j=1→3
→[1,2,3,4,5,6]`,
      commonMistakes: [
        '一方が尽きた後、残りをインクリメントして追加しない',
        'どちらのポインタを進めるかの条件ミス',
      ],
      practice: [
        '3つのソート済みリストをマージ',
        'k個のソート済みリストをマージ(ヒープ使用)',
      ],
      timeComplexity: 'O(n + m)',
      spaceComplexity: 'O(n + m)'
    },
    deepDive: {
      overview: 'O(n+m)でのソート済みリストのマージはLeetcode #21で頻出。インプレースマージはO(1)空間だがO(n²)。',
      steps: [
        '2ポインタマージはO(n+m)時間空間',
        'インプレース: ギャップ法でO(1)空間O(n log n)',
        'PythonではheapqモジュールでN-wayマージ',
        'listはdequeより先頭挿入でO(n²)になることに注意',
      ],
      commonMistakes: [
        'インプレースを目指して不要な複雑さ',
        'k-wayマージでheapを使わない',
      ],
      practice: [
        'k個ソート済みリストのheap優先度付きマージ',
        'リンクリストの2つのソート済みリストをマージ',
      ],
    },
  },
};

export default overlay;
