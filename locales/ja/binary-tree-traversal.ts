import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '二分木の中順・前順・後順走査を実装しましょう。',
  hint: '再帰が自然です。中順: 左→ノード→右。前順: ノード→左→右。後順: 左→右→ノード。',
  explanation: {
    simple: {
      overview: '二分木の走査：前順(根-左-右)、中順(左-根-右)、後順(左-右-根)の3つの再帰的な方法。',
      analogy: '家系図を読むように — 中順は子孫の昇順を与え、前順は先祖が先、後順は子孫が先。',
      steps: [
        '前順: ノードを処理 → 左 → 右',
        '中順: 左 → ノードを処理 → 右',
        '後順: 左 → 右 → ノードを処理',
        '全てNoneチェックの基底ケースが必要',
      ],
      visual: `     4
    / \\
   2   5
  / \\
 1   3
中順: 1,2,3,4,5
前順: 4,2,1,3,5
後順: 1,3,2,5,4`,
      commonMistakes: [
        '3種類の走査順を混同する',
        'Noneチェックの基底ケースを忘れる',
      ],
      practice: [
        '反復で中順走査を実装(スタック使用)',
        '再帰と反復の走査を比較',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(h) hは木の高さ'
    },
    deepDive: {
      overview: 'Morrisトラバーサルで空間O(1)の走査が可能。BFSレベル順はdequeを使う。走査から木を再構築できる。',
      steps: [
        'Morrisトラバーサル: スレッドポインタでO(1)空間',
        '反復中順: スタック+ポインタ',
        '前順+中順から木を一意に再構築',
        'Zigzag level order: dequeで前後を交互に処理',
      ],
      commonMistakes: [
        '前順と中順だけでは木を一意に再構築できない(中順+後順が必要)',
        'Morris走査中にツリーを誤変更する',
      ],
      practice: [
        'Morrisトラバーサルを実装',
        '二分木の最大パス和を求める',
      ],
    },
  },
};

export default overlay;
