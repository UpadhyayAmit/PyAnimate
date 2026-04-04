import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '年齢(int)、身長(float)、名前(str)の変数を作成してください。',
  hint: 'type()で変数の型を確認できます。f文字列で出力がすっきりします。',
  explanation: {
    simple: {
      overview: '変数はデータを格納するコンテナ。Pythonにはint、float、str、boolなどの型がある。',
      analogy: '変数はラベル付きの箱 — ラベルが名前で、中身が値。',
      steps: [
        'わかりやすい名前を選ぶ',
        '=を使って値を代入する',
        'Pythonが型を自動判定する',
        '別の型で再代入も可能',
      ],
      visual: `age = 25        # int
height = 1.75   # float
name = "Taro"   # str
active = True   # bool`,
      commonMistakes: [
        '変数名にスペースを使う',
        '=(代入)と==(比較)を混同する',
        '文字は引用符が必要なことを忘れる',
      ],
      practice: [
        '名前・年齢・身長を変数で作る',
        'type()で型を確認する',
      ],
    },
    deepDive: {
      overview: 'Pythonは動的型付け：変数はオブジェクトへの参照。オブジェクトは型・ID・値を持つ。',
      steps: [
        'id()でオブジェクトのメモリアドレスを取得',
        'type()でオブジェクトのクラスを取得',
        '-5〜256の小さい整数はキャッシュされる',
        'isinstance()で型の継承を確認',
      ],
      commonMistakes: [
        '変数の型が固定と思い込む',
        'is(同一性)と==(等値性)を混同する',
      ],
      practice: [
        'キャッシュ済みvsキャッシュ外の整数でid()を確認',
        '型の再代入で動的型付けを体験',
      ],
    },
  },
};

export default overlay;
