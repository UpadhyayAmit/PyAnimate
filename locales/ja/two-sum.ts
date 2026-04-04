import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '[2,7,11,15]で合計が9になる2つのインデックスを見つけましょう。次にtarget=18で解きましょう。',
  hint: 'ハッシュマップを使用: 各数値に対して(target - num)がすでに格納されているか確認。',
  explanation: {
    simple: {
      overview: 'Two Sum: 配列内の合計がtargetになる2つのインデックスのペアを見つける。',
      analogy: '財布の枚数で合計金額を作るように — 各コインに対して足りない金額を確認する。',
      steps: [
        '辞書 seen = {} を作る',
        '各数値をループ',
        'complement = target - num を計算',
        'complementがseenにあればペア発見。なければseenに追加',
      ],
      visual: `nums=[2,7,11,15], target=9
num=2: need=7, seen={2:0}
num=7: need=2, 2は{2:0}にある!
→ [0,1]`,
      commonMistakes: [
        'ソート+2ポインタはO(n log n)だがインデックスを変える',
        '同じ要素を2回使わない',
      ],
      practice: [
        'target合計の全ペア(インデックスではなく値)を返す',
        '3Sumに拡張する',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: 'ハッシュマップアプローチはO(n)時間空間。ソート+2ポインタはO(n log n)時間O(1)空間だがインデックスを変更する。',
      steps: [
        'ハッシュマップ: complement = target-x→O(1)ルックアップ',
        '2ポインタ: sorted配列でleft+right合計を確認',
        '複数のターゲット/ペア: ソート+2ポインタが有利',
        '3Sum: 固定xで残りを2ポインタ',
      ],
      commonMistakes: [
        '同じ要素を2回使用(インデックスを検証)',
        'O(n²)のブルートフォースを使う(ハッシュを使うべき)',
      ],
      practice: [
        'ソート+2ポインタで2Sumを実装',
        '3Sumで全ユニークの3つ組を求める',
      ],
    },
  },
};

export default overlay;
