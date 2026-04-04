import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'enumerate()を使ってフルーツのリストをループし、インデックスと共に各要素を表示しましょう。',
  hint: 'enumerate(リスト)は(インデックス, 値)のペアを返します。forでアンパックします。',
  explanation: {
    simple: {
      overview: 'forループはシーケンス(リスト・文字列・range)を反復し、各要素に対してコードを実行する。',
      analogy: '本のページを読むように — 終わるまで順番に処理する。',
      steps: [
        'for 要素 in シーケンス: と書く',
        '要素が各値を取る',
        '各要素でブロックが実行される',
        'range()で数値シーケンスを生成',
      ],
      visual: `for i in range(5):
    print(i)
# 0 1 2 3 4`,
      commonMistakes: [
        '反復中にリストを変更する',
        'range(5)が0-4でrange(1,6)が1-5',
        'range(len())で境界外エラー',
      ],
      practice: [
        'リストの全要素を合計する',
        '入れ子のforで九九表を作る',
      ],
    },
    deepDive: {
      overview: 'forループはイテレータプロトコルを使う。enumerate()・zip()・内包表記が活用法を広げる。',
      steps: [
        'enumerate()でインデックスと値を同時取得',
        'zip()で複数イテラブルを並行反復',
        'リスト内包表記はforの糖衣構文',
        'iter()とnext()で手動制御',
      ],
      commonMistakes: [
        'for i in range(len(lst))の代わりにenumerate()を使う',
        'ループ変数はループ後も存在する(スコープ漏れ)',
      ],
      practice: [
        'forループをリスト内包表記に書き換える',
        'zip()で2つのリストを並行反復',
      ],
    },
  },
};

export default overlay;
