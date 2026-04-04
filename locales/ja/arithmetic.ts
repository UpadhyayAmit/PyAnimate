import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '幅=7、高さ=4の長方形の面積と周囲を計算してください。',
  hint: '面積 = 幅 × 高さ。周囲 = 2 × (幅 + 高さ)。べき乗には**を使います。',
  explanation: {
    simple: {
      overview: 'Pythonは基本的な算術演算をサポート：加算・減算・乗算・除算・余り・べき乗。',
      analogy: 'PythonはPEMDAS/BODMASルールに従う計算機。',
      steps: [
        '+加算、-減算',
        '*乗算、/除算(常にfloat)',
        '//切り捨て除算、%余り、**べき乗',
      ],
      visual: `10 + 3 = 13
10 / 3 = 3.333
10 // 3 = 3
10 % 3 = 1
2 ** 8 = 256`,
      commonMistakes: [
        '/は必ずfloatを返すことを忘れる',
        '負数での//(切り捨て)の挙動に注意',
        '%は剰余であってパーセントではない',
      ],
      practice: [
        'math.piを使って円の面積を計算',
        '%で偶数・奇数を判定',
      ],
    },
    deepDive: {
      overview: 'PythonのPEMDAS演算子優先順位と任意精度整数。',
      steps: [
        '優先順位: ** → 単項 → * / // % → + -',
        '浮動小数点はIEEE 754で精度誤差あり',
        'divmod(a,b)で(商,余り)を同時取得',
        'decimal.Decimalで高精度演算',
      ],
      commonMistakes: [
        '0.1+0.2!=0.3の浮動小数点誤差',
        '-2**2=-4と(-2)**2=4の違い',
      ],
      practice: [
        'divmod()とmath.fmod()を試す',
        '財務計算でfloat vs Decimalを比較',
      ],
    },
  },
};

export default overlay;
