import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'プログラムを変更して、あなたの名前と好きな言語を出力しましょう。',
  hint: 'print()を文字列引数で使います。テキストの周りに引用符を忘れずに。',
  explanation: {
    simple: {
      overview: 'Hello Worldプログラムは多くのプログラマーが最初に書くプログラムです。画面に「Hello, World!」と表示するだけです。',
      analogy: '初めて人に挨拶するようなもの — シンプルで直接的な最初のコミュニケーションの一歩。',
      steps: [
        'print()関数を呼び出す',
        '"Hello, World!"というテキストを渡す',
        'Pythonが画面にテキストを表示する',
      ],
      visual: 'print("Hello, World!")  →  Hello, World!',
      commonMistakes: [
        'テキストの引用符を忘れる',
        'PrintとprintのようにPythonは大文字小文字を区別する',
      ],
      practice: [
        'Hello Worldの代わりに自分の名前を表示する',
        '複数のprint()で複数行を表示する',
      ],
    },
    deepDive: {
      overview: 'print()は標準出力に書き込む組み込み関数。デフォルトで末尾に改行文字を追加する。',
      steps: [
        'print()は内部でsys.stdout.write()を呼ぶ',
        'end="\\n"パラメータで改行を制御',
        'sep=" "パラメータで複数引数の区切りを指定',
        'flush=Trueでバッファを強制フラッシュ',
      ],
      commonMistakes: [
        'print()とreturnの混同 — printは表示、returnは値を返す',
        'print()はNoneを返すことを忘れる',
      ],
      practice: [
        'print(end="")で改行なし出力を試す',
        'print("a","b",sep=", ")で複数値を出力',
      ],
    },
  },
};

export default overlay;
