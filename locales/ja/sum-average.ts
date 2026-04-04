import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'scores = [85, 92, 78, 96, 88, 73]の合計と平均を計算し、平均以上を特定しましょう。',
  hint: 'まず全て合計し、個数で割って平均を求めます。リスト内包表記でフィルタリング。',
  explanation: {
    simple: {
      overview: 'リストの合計は全要素を足す。平均は合計を要素数で割る。',
      analogy: 'グループの請求書を合計して人数で割り勘にするようなもの。',
      steps: [
        'sum(list)またはループを使う',
        'len(list)で割って平均を求める',
        '空リストはゼロ除算に注意',
        'statistics.mean()で統計的平均',
      ],
      visual: `nums = [10, 20, 30, 40]
total = sum(nums)   # 100
avg = total / len(nums)  # 25.0`,
      commonMistakes: [
        '空リストでゼロ除算',
        '/ではなく//を使って整数除算になる',
      ],
      practice: [
        '一回のループで平均・最小・最大を求める',
        '移動平均を計算する',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'statistics.mean()はFraction/Decimalを正確に扱う。math.fsum()で浮動小数点誤差を回避。',
      steps: [
        'sum()にはオプションのstart引数がある',
        'math.fsum()で高精度累算',
        'statistics.median()、statistics.stdev()',
        'numpy.mean()で大きな数値配列に対応',
      ],
      commonMistakes: [
        '浮動小数点のsum()で精度が落ちることがある',
        '非対称分布で平均≠中央値を忘れる',
      ],
      practice: [
        'sum()とmath.fsum()を浮動小数点で比較',
        'statistics.stdev()で標準偏差を計算',
      ],
    },
  },
};

export default overlay;
