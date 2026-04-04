import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'ビット演算を使いましょう: (1) 13の偶数/奇数判定, (2) 255のセットビット数, (3) XORで5と9をスワップ。',
  hint: '偶数/奇数: n & 1 == 0。ビット数: while n: count += n & 1; n >>= 1。XORスワップ: a^=b; b^=a; a^=b。',
  explanation: {
    simple: {
      overview: 'ビット操作は整数のビット(0/1)を直接演算して高速で省メモリな処理を実現する。',
      analogy: '光のスイッチの列のようなもの — 各ライトが1ビットでON/OFFを切り替えられる。',
      steps: [
        'AND(&): 両方1なら1',
        'OR(|): どちらか1なら1',
        'XOR(^): 異なれば1(トグル)',
        'NOT(~)、左シフト(<<)、右シフト(>>)',
      ],
      visual: `5 = 0101
3 = 0011
5&3=0001=1
5|3=0111=7
5^3=0110=6
5<<1=1010=10`,
      commonMistakes: [
        'Pythonでは整数が任意精度 — ビット長は可変',
        'NOT ~nはPythonで-(n+1)',
        'シフトによるオーバーフローのC/Java思考',
      ],
      practice: [
        'nが2の累乗かをビットで確認(n&(n-1)==0)',
        '整数の全部分集合をビットマスクで生成',
      ],
      timeComplexity: 'O(1)ビット演算',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'ビット操作はマスキング・最適化・サブセット生成・DPで活用。Pythonの整数は無限精度に注意。',
      steps: [
        'n&(n-1)で最下位ビットをクリア(popcount活用)',
        'n&(-n)で最下位設定ビットを取得',
        'XOR: ペアをキャンセルして単独要素を見つける',
        'ビットDPでnビットの全サブセットをO(2^n*n)',
      ],
      commonMistakes: [
        'Pythonの~はC/Javaと異なる(符号付き2の補数)',
        '大きなビットシフトで予想外の大きな数になる',
      ],
      practice: [
        'Brian Kernighanでsetビット数をカウント',
        'XORで整数のペアから孤立要素を見つける',
      ],
    },
  },
};

export default overlay;
