import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '5つの数字のリストを作成してください。99を追加し、最小値を削除し、ソートして出力しましょう。',
  hint: 'append()、remove()、sorted()を使います。min()が最小値を見つけます。',
  explanation: {
    simple: {
      overview: 'リストは任意の型を保持できる順序付きコレクション。ミュータブル — 中身を変更できる。',
      analogy: 'リストは買い物リスト：順序があり重複も可能、追加・削除が自由。',
      steps: [
        '作成: my_list = [1, 2, 3]',
        'アクセス: my_list[0]は1を返す',
        '追加: my_list.append(4)',
        '削除: my_list.remove(2)またはmy_list.pop()',
      ],
      visual: `nums = [10, 20, 30]
nums[0] → 10
nums[-1] → 30
nums[1:] → [20, 30]`,
      commonMistakes: [
        '範囲外アクセスでIndexError',
        'list.sort()(インプレース)とsorted(list)を混同',
        'リスト変数は同じリストを参照(シャローコピー)',
      ],
      practice: [
        'reverse()を使わずリストを逆順にする',
        '最大値と2番目に大きい値を求める',
      ],
    },
    deepDive: {
      overview: 'Pythonのリストは動的配列で1.125倍ずつ拡張される。スライスは新しいリストを生成する。',
      steps: [
        'appendはO(1)償却; insert(0,x)はO(n)',
        'スライスa[i:j]はO(k)の新規コピー',
        'list.sort()はTimsort — 安定O(n log n)',
        '先頭挿入にはcollections.dequeが最適',
      ],
      commonMistakes: [
        'ループ内でinsert(0,x) → O(n²)',
        'copy()はシャローコピー — ネストには deepcopy',
      ],
      practice: [
        'appendとinsert(0,x)のパフォーマンスを比較',
        'スライスでリストを回転させる',
      ],
    },
  },
};

export default overlay;
