import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '数が正、負、またはゼロかどうかを確認するプログラムを書きましょう。',
  hint: 'if/elif/elseを使います。入力値を変えて各分岐をテストしましょう。',
  explanation: {
    simple: {
      overview: 'if-else文はプログラムに条件に基づく判断をさせる。',
      analogy: '信号機のようなもの：青なら進む、赤なら止まる。',
      steps: [
        'if 条件: と書く',
        'Trueの場合に実行するブロックを追加',
        'elifで追加条件を記述',
        'elseでデフォルト処理を書く',
      ],
      visual: `if x > 0:
    print("正")
elif x == 0:
    print("ゼロ")
else:
    print("負")`,
      commonMistakes: [
        '条件の後のコロンを忘れる',
        'インデントが間違っている',
        '=を比較に使う(==が正しい)',
      ],
      practice: [
        '気温を寒い・快適・暑いに分類する',
        'if-elif-elseで成績判定器を作る',
      ],
    },
    deepDive: {
      overview: 'Pythonのif条件はtruthy/falsyで評価される。三項式もサポート。',
      steps: [
        'falsy値: None, 0, "", [], {}, set()',
        '三項式: 値1 if 条件 else 値2',
        'any()/all()でシーケンスの真偽を判定',
        'and/or/notで複合条件を作る',
      ],
      commonMistakes: [
        '空のコンテナがfalsyであることを知らない',
        '条件をTrueやFalseと比較する(不要)',
      ],
      practice: [
        '三項式で絶対値を求める',
        'さまざまな型のtruthyをテスト',
      ],
    },
  },
};

export default overlay;
