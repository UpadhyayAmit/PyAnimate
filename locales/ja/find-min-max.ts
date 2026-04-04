import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'min()/max()を使わずに[34, 7, 23, 32, 5, 62]の最小値と最大値を1回のパスで見つけましょう。',
  hint: 'min_valとmax_valを最初の要素で初期化し、残りの要素と比較します。',
  explanation: {
    simple: {
      overview: '最小値・最大値の検索：コレクションの最小と最大を特定する。',
      analogy: '生徒の列を見て最も低い人と最も高い人を見つけるようなもの。',
      steps: [
        '最初の要素でminとmaxを初期化',
        '残りをループ処理',
        '現在の要素がmin未満ならmin更新',
        '現在の要素がmax超ならmax更新',
      ],
      visual: `nums = [3,1,4,1,5,9]
min_val = nums[0]
for n in nums[1:]:
    if n < min_val:
        min_val = n
# min_val = 1`,
      commonMistakes: [
        '0でmin/maxを初期化する(最初の要素が正解)',
        '空リストの処理を忘れる',
      ],
      practice: [
        '組み込み関数を使わずにmin/maxを求める',
        '2番目に大きい要素を求める',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'Pythonのmin()/max()はkey=を受け付け、任意のイテラブルに使える。',
      steps: [
        'min(lst, key=len)でキー関数を使う',
        'zip()で一回のループにmin/maxを共存',
        'heapq.nsmallest/nlargestでtop-k',
        'numpy.argmin/argmaxで配列操作',
      ],
      commonMistakes: [
        '組み込みmin()/max()があるのに手動ループを書く',
        'min([])はValueErrorを発生させる',
      ],
      practice: [
        'min()にkey=を使ってタプルのリストを処理',
        '比較回数3n/2のmin+max同時アルゴリズムを実装',
      ],
    },
  },
};

export default overlay;
