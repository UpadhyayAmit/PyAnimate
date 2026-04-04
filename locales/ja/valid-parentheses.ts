import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '\'({[]})\'と\'([)]\'が有効かどうか確認しましょう。そして\'(((\'のケースも処理。',
  hint: '開き括弧をスタックにプッシュ。閉じ括弧が来たらポップして一致を確認。',
  explanation: {
    simple: {
      overview: '括弧の検証: 文字列内の()、[]、{}の開きと閉じが正しく一致しているか確認する。',
      analogy: '会計の残高ゼロのように — 各引き出し(閉じ)には対応する預け入れ(開き)が必要。',
      steps: [
        'スタックと対応マップを使う',
        '開き括弧はスタックに追加',
        '閉じ括弧はスタックのトップと比較',
        'スタックが空なら有効',
      ],
      visual: `"({[]})" → スタック:( { [ → ] 一致 → } 一致 → ) 一致 → 空 = True
"(]" → ) の後に ] → ( と一致しない = False`,
      commonMistakes: [
        '空文字列を無効と判断する(有効)',
        '終了後にスタックが空かを確認しないと余りが残る',
      ],
      practice: [
        '最小の括弧追加・削除で有効にする',
        '最長有効な括弧部分列を求める',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: 'スタックで最後に開いた括弧を追跡する古典問題。次への応用: ネスト構造の解析。',
      steps: [
        'マッピング: "]":"[", "}":"{", ")":"("',
        'CloserをOpenに変換してスタックトップと比較',
        '早期終了: スタック空で閉じ括弧が来たらFalse',
        '変形: 最低追加数・最長有効部分列',
      ],
      commonMistakes: [
        'スタックに閉じ括弧を追加してしまう',
        '空スタックからpopを試みてIndexError',
      ],
      practice: [
        '最小追加で括弧列を有効にする',
        '最長有効括弧部分列をDPで求める',
      ],
    },
  },
};

export default overlay;
