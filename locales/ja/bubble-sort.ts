import type { LessonLocaleOverlay } from '../types';

const bubbleSort: LessonLocaleOverlay = {
  prompt: 'array を [9, 1, 5, 3, 7] に変更してください。sorted になるまでに何回 swaps が必要か予測しましょう。',
  hint: 'timeline のオレンジ色の swap events を数えてください。各 swap は大きい element を右に 1 つ移動させます。',
  useCases: [
    'sorting の概念を教える - 最も視覚的な algorithm',
    'ほぼ sorted な arrays の検出 (early exit optimization)',
    'メモリが小さい組み込みシステムで O(1) space が重要な場面',
  ],
  approach:
    'Bubble sort は隣接するペアを比較し、順序が逆なら swap します。各 outer pass の後、最大の未整列要素は必ず最終位置に到達します。nested loops を使い、outer loop が pass 回数 (n-1)、inner loop が比較を担当します (末尾は既に sorted なので毎回短くなる)。大きいデータでは効率的ではなく O(n²) ですが、比較ベース sorting を学ぶには最も視覚的です。',
  executionFrames: [
    {
      summary: 'arr = [5, 3, 8, 1, 2] - 5 個の未整列 elements。',
      why: 'values を list に保存することで index (arr[j], arr[j+1]) で element にアクセスできます。Bubble sort は in-place algorithm なので、新しい list を作らず同じ list を更新し、space complexity を O(1) に保ちます。',
    },
    {
      summary: 'n = 5 - outer passes は最大 4 回必要です。',
      why: 'n = len(arr) を毎回呼ぶ代わりに 1 回だけ保存します。これは micro-optimization であり、同時に loop 境界を読みやすくします。n-1 outer passes が必要なのは、n-1 回後に最小要素が index 0 に確実に入るためです。',
    },
    {
      summary: 'arr[0]=5 > arr[1]=3 - swap が必要です。',
      why: 'arr[j] > arr[j+1] (厳密な greater-than) を使うことで stability を維持します。等しい要素は swap されず、相対順序が保持されます。この比較が比較ベース sort の中核です。',
    },
    {
      summary: 'Python tuple swap - temp variable は不要です。',
      why: 'arr[j], arr[j+1] = arr[j+1], arr[j] は Python の同時代入です。C では temp variable が必要ですが、Python は右辺を先に tuple として評価してから展開するため、上書き前に両方の値が確保されます。',
    },
    {
      summary: '8 が右へ bubble しています - 現時点で最大の element です。',
      why: '8 が 2 ステップで右に 2 つ移動したことに注目してください。最大要素は各 pass で末尾へ bubble します。これが Bubble sort という名前の由来です。この outer pass (i=0) の後、8 は最終位置になります。',
    },
    {
      summary: '8 は index 4 の final position に入りました。',
      why: "inner loop は n - i - 1 回実行されます。'- i' が最適化で、pass i 後の末尾 i 要素は既に sorted かつ final です。再比較は不要なので、総作業量を減らせます。",
    },
    {
      summary: '5 が右へ bubble。 [3, 5, 1, 2, 8] -> [3, 1, 2, 5, 8]',
      why: 'outer pass ごとに 1 要素ずつ確定します。pass 2 後には 5 と 8 の両方が final です。最悪ケースでも n-1 passes で必ず sorted array になるため、アルゴリズムは必ず進捗します。',
    },
    {
      summary: 'Final sorted array: [1, 2, 3, 5, 8].',
      why: '比較回数の合計は n×(n-1)/2 = 10 (n=5) です。これが Bubble sort が O(n²) である理由です。n=1000 なら約 500,000 比較になります。Merge Sort は約 10,000 です。Bubble sort は学習向けで、production には不向きです。',
    },
  ],
  explanation: {
    simple: {
      overview:
        'Bubble Sort は隣り合う要素を比較し、順序が逆なら swap します。各 pass で最大の未確定要素が右端へ移動します。',
      analogy:
        '水中の泡が上に上がるように、大きい値が毎ラウンド右側へ押し上げられます。',
      steps: [
        '配列を走査して arr[j] と arr[j+1] を比較する。',
        'arr[j] > arr[j+1] なら swap する。',
        '1 回の pass 後に最大要素が末尾へ確定する。',
        '末尾は sorted なので次の pass の範囲を縮める。',
        'swap が 0 回なら早期終了する。',
      ],
      visual: 'Pass 1: [5,3,8,1,2] -> [3,5,1,2,8]。その後は確認範囲が段階的に小さくなる。',
      commonMistakes: [
        'inner loop の境界を縮めない。',
        '>= を使って stability を壊す。',
        'swap なしの pass で break しない。',
      ],
      practice: [
        'すでに sorted な入力で early exit あり/なしの比較回数を数える。',
        'Bubble Sort が stable な理由を説明する。',
        'descending に並べるよう条件を変更する。',
      ],
      timeComplexity: 'O(n²) worst/average, O(n) best with early exit',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview:
        'Bubble Sort は n-1 passes を実行します。pass i 後、未整列領域の最大値は最終位置に固定されます。',
      analogy:
        'ふるい分けを繰り返すと、大きい粒が毎回右端へ集まるイメージです。',
      steps: [
        'swapped=false を置き、j を 0..n-i-2 で回す。',
        'arr[j] > arr[j+1] のとき swap する。',
        '1 pass で swap がなければ sorted と判定して break。',
        'pass i 後は末尾 i 要素が確定している。',
        'i=n-2 まで、または early break まで繰り返す。',
      ],
      visual: '走査範囲は階段状に縮む: n-1, n-2, n-3...',
      commonMistakes: [
        'inner loop の off-by-one バグ。',
        '毎回 len(arr) を再計算する。',
        '比較キーを誤って意図しない順序になる。',
      ],
      practice: [
        'strict > 条件で stability を形式的に証明する。',
        'early exit なしの正確な比較回数を導出する。',
        'Cocktail Sort を実装し swap 数を比較する。',
      ],
      timeComplexity: 'O(n²) comparisons, O(n²) swaps worst case',
      spaceComplexity: 'O(1) auxiliary',
    },
  },
};

export default bubbleSort;
