import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '\'Python Programming\'をスライスして\'Prog\'を取得しましょう。その後、文字列全体を反転させてください。',
  hint: 'スライス構文はs[start:end]です。逆順にはs[::-1]を使います。',
  explanation: {
    simple: {
      overview: '文字列は文字のシーケンス。Pythonは操作のための強力な組み込みメソッドを提供する。',
      analogy: '文字列はビーズのネックレス — 各ビーズが1文字、切り貼りや検査ができる。',
      steps: [
        'シングルまたはダブルクォートで作成',
        '+またはf-stringで結合',
        'インデックス/スライスで文字にアクセス',
        'upper()、lower()、split()、strip()などのメソッドを使う',
      ],
      visual: `s = "hello"
s[0] → "h"
s[-1] → "o"
s[1:4] → "ell"
s.upper() → "HELLO"`,
      commonMistakes: [
        '文字列はイミュータブル — メソッドは新しい文字列を返す',
        'strとintの+はTypeError',
        'メソッドの戻り値を変数に代入しないで捨てる',
      ],
      practice: [
        'スライスで文字列を逆順にする',
        '文章の母音数を数える',
      ],
    },
    deepDive: {
      overview: 'Python文字列はイミュータブルなUnicodeシーケンス。f-stringとstr.format()で強力な補間が可能。',
      steps: [
        '文字列インターニングで小さい文字列を再利用',
        'join()は多数の文字列結合に最速',
        'encode()/decode()でbytes↔str変換',
        'reモジュールで正規表現パターンマッチ',
      ],
      commonMistakes: [
        'ループ内で+結合 → O(n²)',
        'Python 3でbytesとstrを混用',
      ],
      practice: [
        '"".join()とループ内+を性能比較',
        'str.format()で書式指定を試す',
      ],
    },
  },
};

export default overlay;
