import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '辺(A-B,4),(A-C,2),(B-C,1),(B-D,5),(C-D,8)のMSTを見つけましょう。',
  hint: '辺を重みでソート。Union-Findでサイクル検出。サイクルを作らない辺を貪欲に追加。',
  explanation: {
    simple: {
      overview: 'クラスカル法は最小全域木(MST)を辺の重みの小さい順に貪欲に追加して求める。',
      analogy: '最安値のケーブルで全都市を繋ぐように — 最も安い単線から始めてサイクルを避けながら追加。',
      steps: [
        '全辺を重みで昇順ソート',
        '最小重みの辺を取り出す',
        'サイクルを形成しない場合(Union-Find)MSTに追加',
        'V-1辺になるまで繰り返す',
      ],
      visual: `辺: (1,2,1)(1,3,3)(2,3,2)(3,4,4)
ソート: 1,2,3,4
追加: (1,2,1)→(2,3,2)→(3,4,4)
MST重み=7`,
      commonMistakes: [
        'Union-Findなしでサイクルを確認',
        'V-1辺で停止しないとMSTが壊れる',
      ],
      practice: [
        'Union-Findをパスの圧縮とランク付きで実装',
        'クラスカルとプリムのMSTを比較',
      ],
      timeComplexity: 'O(E log E)',
      spaceComplexity: 'O(V)'
    },
    deepDive: {
      overview: 'Union-Findでサイクルをほぼ O(α)で検出。疎グラフではクラスカル、密グラフではプリムが有利。',
      steps: [
        'Union by rankとパス圧縮でほぼO(1)操作',
        'E log Eのソートがボトルネック(疎グラフ)',
        'プリムはヒープで隣接頂点を追跡O(E log V)',
        'ボルフカ法: 並列MSTに向いた別のアプローチ',
      ],
      commonMistakes: [
        'パス圧縮なしUnion-FindはO(n)操作になりうる',
        '辺リストをソートしないで追加',
      ],
      practice: [
        '完全Union-Find(パス圧縮+ランク)を実装',
        'Minimum Spanning Forestを求める',
      ],
    },
  },
};

export default overlay;
