import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '\'the cat sat on the mat the cat\'で各単語が何回出現するか数えましょう。',
  hint: '辞書を使います。各単語に: d[w] = d.get(w, 0) + 1。',
  explanation: {
    simple: {
      overview: '出現回数のカウント：リストや文字列で各要素が何回現れるかを数える。',
      analogy: '段落の各単語が何回出てくるかを数えるようなもの。',
      steps: [
        '空の辞書を作る',
        '各要素をループで処理',
        '存在すれば+1、なければ1で初期化',
        'collections.Counterも使える',
      ],
      visual: `lst = [1,2,2,3,3,3]
cnt = {}
for x in lst:
    cnt[x] = cnt.get(x,0)+1
# {1:1, 2:2, 3:3}`,
      commonMistakes: [
        '.get()なしで直接[]アクセスするとKeyError',
        'カウンタの初期化を忘れる',
      ],
      practice: [
        '文字列の各文字を数える',
        '最頻出要素を求める',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(k) kはユニークキー数'
    },
    deepDive: {
      overview: 'collections.Counterはdictのサブクラスでカウントに最適化。算術演算もサポート。',
      steps: [
        'Counter(iterable)はO(n)で構築',
        'most_common(k)で頻度上位k件を取得',
        'カウンター同士の加減算が可能',
        'elements()で要素を頻度分繰り返すイテレータ',
      ],
      commonMistakes: [
        'Counterが標準ライブラリにあるのに再実装する',
        'Counterは存在しないキーに0を返す',
      ],
      practice: [
        'Counter.most_common(3)を試す',
        '2つのカウンターを加算して結果を確認',
      ],
    },
  },
};

export default overlay;
