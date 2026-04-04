import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'ユーザーに2つの数字を入力してもらい、合計・差・積を表示しましょう。',
  hint: 'input()は常に文字列を返します。計算前にint()やfloat()で変換します。',
  explanation: {
    simple: {
      overview: 'input()はユーザー入力を文字列として読む。print()は出力を表示。必要に応じてint()やfloat()で変換する。',
      analogy: 'input()は質問すること、print()は答えを返すこと。',
      steps: [
        'input("メッセージ: ")で入力を読む',
        '結果は常に文字列',
        '必要に応じてint()やfloat()で変換',
        'print()で結果を表示',
      ],
      visual: `name = input("名前: ")
age = int(input("年齢: "))
print(f"こんにちは{name}、{age}歳ですね。")`,
      commonMistakes: [
        '入力のint/float変換を忘れる',
        '数値以外の入力でValueError',
        'Python 2のprintを括弧なしで使う',
      ],
      practice: [
        'input()でシンプルな電卓を作る',
        '複数の数値を読んで平均を計算',
      ],
    },
    deepDive: {
      overview: 'ファイルI/Oにはコンテキストマネージャ付きopen()、ストリームにはsys.stdin/stdoutを使う。',
      steps: [
        'open(file,mode): \'r\',\'w\',\'a\',\'rb\'でバイナリ',
        'with open(...)as fでファイルを確実に閉じる',
        'sys.stdin.readline()で競プロ入力',
        'print(...,file=sys.stderr)でエラー出力',
      ],
      commonMistakes: [
        'withを使わないとファイルディスクリプタがリーク',
        'ファイル全体をメモリに読む vs 一行ずつ',
      ],
      practice: [
        'with openでテキストファイルを一行ずつ読む',
        'CSVファイルに結果を書き込む',
      ],
    },
  },
};

export default overlay;
