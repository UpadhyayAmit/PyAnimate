import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'ネストしたループを使って九九表(1〜5)をグリッド形式で表示しましょう。',
  hint: '外側ループが行、内側が列です。print(end=\'\\t\')でタブ区切り。',
  explanation: {
    simple: {
      overview: 'ループの探索：さまざまな条件・制御フローで反復処理を行う。',
      analogy: '地図で都市を探索するように — 通りをスキップしたり引き返したり目的地で止まれる。',
      steps: [
        'forで固定回数の反復',
        'whileで動的条件の反復',
        'breakで早期脱出',
        'continueで要素をスキップ',
      ],
      visual: `for i in range(10):
    if i % 2 == 0:
        continue  # 偶数をスキップ
    if i > 7:
        break     # 7で停止
    print(i)  # 1 3 5 7`,
      commonMistakes: [
        'breakとcontinueを混同する',
        '条件更新を忘れて無限ループ',
      ],
      practice: [
        '範囲内の最初の素数を見つける',
        'continueを使ってFizzBuzzを実装',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)'
    },
    deepDive: {
      overview: 'Pythonのループはelse・enumerate()・zip()をサポートし、表現力豊かな反復が可能。',
      steps: [
        'for-else/while-else: breakなしに終了するとelseが実行',
        'enumerate(lst, start=1)で1始まりのインデックス',
        'any()/all()でイテラブルのブール検査',
        'itertools.islice()で遅延スライス',
      ],
      commonMistakes: [
        'for-elseがif-elseと関係があると誤解する',
        '複雑なループパターンでitertoolsを無視する',
      ],
      practice: [
        'for-elseで線形探索を実装',
        'itertools.chain()で複数リストを反復',
      ],
    },
  },
};

export default overlay;
