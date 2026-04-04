import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'greet(name, greeting=\'こんにちは\')という関数を書いてフォーマットされた挨拶文字列を返しましょう。',
  hint: 'デフォルト引数は必須引数の後に来ます。f文字列でフォーマットした文字列を返します。',
  explanation: {
    simple: {
      overview: '関数は特定のタスクを実行する再利用可能なコードブロック。defで定義し名前で呼び出す。',
      analogy: '関数はレシピのようなもの：一度定義して、何度でもそのレシピを"呼び出す"。',
      steps: [
        'def 関数名(パラメータ): と書く',
        'インデントされた本体を書く',
        'returnで値を返す',
        '関数名(引数)で呼び出す',
      ],
      visual: `def greet(name):
    return f"こんにちは、{name}！"

print(greet("太郎"))  # こんにちは、太郎！`,
      commonMistakes: [
        'returnを忘れると関数はNoneを返す',
        'パラメータ(定義)と引数(呼び出し)を混同',
        '定義前に呼び出す',
      ],
      practice: [
        '長方形の面積を計算する関数を書く',
        '素数判定関数を作る',
      ],
    },
    deepDive: {
      overview: 'Pythonの関数はファーストクラスオブジェクト。デフォルト引数・*args・**kwargs・クロージャをサポート。',
      steps: [
        'デフォルト引数は定義時に一度だけ評価される',
        '*argsで可変長位置引数を収集',
        '**kwargsでキーワード引数を収集',
        'クロージャは外側スコープの変数をキャプチャ',
      ],
      commonMistakes: [
        'ミュータブルをデフォルト値に使う(リストなど)',
        'globalキーワードを使わず外側変数を変更しようとする',
      ],
      practice: [
        '*argsでn個の数を合計する関数',
        'カウンターを返すクロージャを書く',
      ],
    },
  },
};

export default overlay;
