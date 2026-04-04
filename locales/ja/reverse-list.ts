import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '2つのポインタを使って[1, 2, 3, 4, 5]をin-placeで逆順にしましょう。list.reverse()は使わないで。',
  hint: 'left=0, right=len-1から始めます。arr[left]とarr[right]を交換し、内側に進めます。',
  explanation: {
    simple: {
      overview: 'リストの逆順：要素を逆の順序に並べ替える。',
      analogy: 'トランプの山を裏返すようなもの — 最後のカードが最初になる。',
      steps: [
        '方法1: list.reverse()でインプレース',
        '方法2: list[::-1]で新リスト',
        '方法3: reversed()でイテレータ',
        '手動: 2つのポインタで要素を交換',
      ],
      visual: `lst = [1,2,3,4,5]
lst[::-1] → [5,4,3,2,1]
lst.reverse() → インプレース変更`,
      commonMistakes: [
        '.reverse()(インプレース)と[::-1](新規)を混同',
        'reversed()はイテレータでリストではない',
      ],
      practice: [
        'スライスで文字列を逆順にする',
        'リストが回文かを確認する',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)インプレース、O(n)スライス'
    },
    deepDive: {
      overview: 'list.reverse()はO(n)インプレースでO(1)空間。[::-1]スライスはO(n)の新リスト生成。',
      steps: [
        'インプレース逆順: [0,n-1],[1,n-2]...のペアをスワップ',
        'reversed()はlist_reverseiteratorオブジェクトを返す',
        '文字列: "".join(reversed(s))またはs[::-1]',
        '大データには遅延reversed()が有利',
      ],
      commonMistakes: [
        '逆順反復にだけ使うなら[::-1]はコスト大',
        'reversed()中にリストを変更する',
      ],
      practice: [
        'list.reverse()とスライスのパフォーマンスを比較',
        '2ポインタでインプレース逆順を実装',
      ],
    },
  },
};

export default overlay;
