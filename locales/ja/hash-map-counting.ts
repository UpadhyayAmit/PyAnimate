import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '整数のリストが与えられた時、n/3回より多く登場する全要素を見つけましょう。',
  hint: 'まず頻度辞書を作成します。次にcount > len(arr)//3のキーをフィルタリング。',
  explanation: {
    simple: {
      overview: 'ハッシュマップによるカウント：高速O(1)平均のルックアップで要素を集計・追跡する。',
      analogy: '出席表のようなもの：各名前(キー)にチェック回数(値)を記録。',
      steps: [
        '空の辞書を作る',
        '各要素をループ',
        'すでにあれば+1、なければ1で初期化',
        '.get(key,0)でキーなしエラーを防ぐ',
      ],
      visual: `words = ["cat","bat","cat","hat"]
counts = {}
for w in words:
    counts[w] = counts.get(w,0)+1
# {"cat":2,"bat":1,"hat":1}`,
      commonMistakes: [
        '存在確認前にdict[key]を使う',
        'Counterを知らない',
      ],
      practice: [
        '1〜n+1の整数配列から欠けている数を見つける',
        '重複を最初とそれ以外に分類',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: 'Pythonのdictはハッシュテーブル：O(1)平均の挿入・検索・削除。ハッシュ衝突でO(n)最悪。',
      steps: [
        'Python 3.7+でdictはデフォルトで挿入順序を保持',
        'defaultdict(int)でget()を省略',
        'collections.Counterで最頻出操作を効率化',
        'frozensetやtupleはdictキーに使えるがlistは不可',
      ],
      commonMistakes: [
        'ネストdictにdefaultdict(dict)ではなくdefaultdict(int)を使う',
        'setとdictの違いを忘れる',
      ],
      practice: [
        'defaultdictでword frequencyを実装',
        'hash mapで部分配列のsum == kを数える',
      ],
    },
  },
};

export default overlay;
