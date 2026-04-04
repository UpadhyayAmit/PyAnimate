import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'ソート済み配列[1,3,6,8,10]に2つのポインタを使って、合計が11になる全ペアを見つけましょう。',
  hint: 'left=0, right=len-1から始めます。sum < targetならleftを右へ。',
  explanation: {
    simple: {
      overview: '2ポインタは2つのインデックスを使い、ソート済み配列の問題を1回のパスで解決する。',
      analogy: '本の両端から読んでいく探偵のように、条件が満たされるまで内側に進める。',
      steps: [
        'leftを先頭、rightを末尾に設定',
        '両ポインタが交差するまでループ',
        '条件を確認して答えを更新',
        '条件に基づいてleftを右へ、rightを左へ移動',
      ],
      visual: `[1,2,3,4,6] target=9
left=0(1),right=4(6)→合計7<9→left++
left=1(2),right=4(6)→合計8<9→left++
left=2(3),right=4(6)→合計9→found!`,
      commonMistakes: [
        'ソートされていない配列で使う',
        'ポインタを内側に進める条件のミス',
      ],
      practice: [
        '2Sumのソート済み配列版を実装',
        '重複ありリストから3Sumの全ペアを求める',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: '2ポインタはO(n)なのでネストループのO(n²)より優れる。スライディングウィンドウもこのパターン。',
      steps: [
        '同方向の2ポインタ: fast/slow(サイクル検出)',
        '反対方向: 合計ターゲット・回文確認',
        '配列をインプレースで変更(移動+圧縮)',
        'コンテナで最大水量(LeetCode #11)',
      ],
      commonMistakes: [
        '非ソート配列でソート前提の2ポインタを使う',
        '左右のどちらを動かすかの判断ミス',
      ],
      practice: [
        '2ポインタで3Sumを実装',
        'Trapping Rain WaterをO(n)で解く',
      ],
    },
  },
};

export default overlay;
