import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '[2, 1, 5, 1, 3, 2]でサイズk=3の最大和サブ配列を見つけましょう。',
  hint: '最初のウィンドウの合計を計算し、スライド: 出るものを引いて入るものを加えます。',
  explanation: {
    simple: {
      overview: 'スライディングウィンドウは配列/文字列の連続部分列問題をO(n)で解く。',
      analogy: '汽車の窓からの景色のように — 一部を見ながら滑らかに前進する。',
      steps: [
        'ウィンドウの左端と右端のポインタを設定',
        '右を拡大して右端をインクリメント',
        '条件違反なら左を縮小してインクリメント',
        '各ステップで答え(最大値など)を更新',
      ],
      visual: `"abcabcbb" 重複なし最長部分列
→w=a,b,cまで伸ばす(3)
→lefを進めて重複aを除去
→b,c,a(3) → 答え3`,
      commonMistakes: [
        'ウィンドウ内のデータを更新せずに左を動かす',
        '最大ウィンドウのみで最小ウィンドウを忘れる',
      ],
      practice: [
        '長さkの最大連続合計を求める',
        '指定された文字を含む最小部分列を求める',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(k) kはウィンドウサイズ'
    },
    deepDive: {
      overview: '固定ウィンドウはシンプル。可変ウィンドウは左端の縮小ロジックが核心。deque/heapqで最大値クエリを高速化。',
      steps: [
        '固定サイズ: 毎ステップで加算と削除',
        '可変: 条件がTrueの間left++',
        'deque単調キューを使ったスライディングウィンドウ最大値',
        '頻度マップ+スライドで最長無重複部分列',
      ],
      commonMistakes: [
        '「縮小する時期」の条件を誤設定',
        '各ステップで答えを更新し忘れる',
      ],
      practice: [
        'スライディングウィンドウ最大値をdequeで実装',
        '最多k回の文字置換後の最長部分列を求める',
      ],
    },
  },
};

export default overlay;
