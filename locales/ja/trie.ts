import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '[\'apple\',\'app\',\'apt\',\'banana\']からTrieを構築しましょう。search(\'app\')とstartsWith(\'ap\')を実装。',
  hint: '各ノードは子供の辞書 + is_endフラグです。挿入は文字ごとにトレースします。',
  explanation: {
    simple: {
      overview: 'トライ(プレフィックスツリー)は文字列をノードが文字を表すツリー構造で格納する。単語やプレフィックスの検索に最適。',
      analogy: '辞書を文字ごとに分岐するツリーのようなもの — "ca"を知っていれば"cat"も"car"も素早く探せる。',
      steps: [
        '各ノードに子の辞書とis_endフラグを持たせる',
        'insert: word[i]の文字を辿り、なければ新規ノード',
        'search: word全文字を辿れてis_endならTrue',
        'startsWith: word全文字を辿れればTrue',
      ],
      visual: `insert("cat","car","dog")
       root
      / ...
     c   d
     |   |
     a   o
    / \\   \\
   t   r   g`,
      commonMistakes: [
        'searchとstartsWithの終端フラグの違いを混同',
        '削除操作が複雑であることを忘れる',
      ],
      practice: [
        'autocomplete機能(プレフィックスから候補リスト)を実装',
        '辞書内の全単語を最大XOR値で探す',
      ],
      timeComplexity: 'O(L) Lは語長',
      spaceComplexity: 'O(ALPHABET_SIZE * L * N)'
    },
    deepDive: {
      overview: 'トライは接頭辞検索をO(L)で提供。圧縮トライ(基数木)は空間効率が良い。ビットトライはXOR最大化に使う。',
      steps: [
        '辞書ノードの代わりにarray[26]で高速化',
        'CompressedTrie/Radixトライで空間節約',
        'ビットトライ(0/1): 最大XORペアをO(nL)',
        'TrieをAhoCorasickオートマトンに発展させる',
      ],
      commonMistakes: [
        '大量の単語にハッシュセットの代わりにトライを使わない',
        'トライ削除でis_endフラグを誤設定',
      ],
      practice: [
        'Wordboard IIをトライで解く',
        'ビットトライで最大XORを実装',
      ],
    },
  },
};

export default overlay;
