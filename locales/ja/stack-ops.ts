import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'リストを使ってスタックを実装しましょう。push, pop, peek, is_emptyを追加し、括弧の対応を確認。',
  hint: '開く括弧をプッシュ、閉じる括弧をポップして一致確認。空またはミスマッチで即False。',
  explanation: {
    simple: {
      overview: 'スタックはLIFO(後入れ先出し)の構造。push・pop・peekの3操作を提供。',
      analogy: '皿を積み重ねるようなもの：最後に乗せた皿が最初に取れる。',
      steps: [
        'pushで要素をトップに追加',
        'popでトップの要素を削除して返す',
        'peekでトップを削除せずに確認',
        'is_emptyで空かどうかを確認',
      ],
      visual: `stack = []
stack.append(1)  # push
stack.append(2)
stack.pop()      # → 2
stack[-1]        # peek → 1`,
      commonMistakes: [
        '空スタックのpopはIndexError',
        'スタックではなくqueueの操作を使う',
        'peekはpopではない — 削除しない',
      ],
      practice: [
        'スタックを使って文字列を逆順にする',
        'スタックを使って中置式を後置式に変換',
      ],
      timeComplexity: 'O(1) push/pop/peek',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: 'Pythonのリストをスタックとして使うと全操作がO(1)償却。dequeも可能。',
      steps: [
        'list.append()/pop()はO(1)償却スタック操作',
        '単調スタックで次の大きい/小さい要素をO(n)で解決',
        'DFS反復にスタックを使う',
        'backtracking問題にスタックが有用',
      ],
      commonMistakes: [
        '単調スタックの適用範囲を知らない',
        'スタックフレームが再帰のスタックと同じ原理',
      ],
      practice: [
        '単調スタックで次の大きい要素を求める',
        '毎日の気温問題をスタックで解く',
      ],
    },
  },
};

export default overlay;
