import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'dequeでキューを実装しましょう。印刷キューをシミュレート: 5つのジョブをエンキュー、FIFOでデキュー。',
  hint: 'collections.dequeを使います。前端エンキューにappendleft()、デキューにpop()。',
  explanation: {
    simple: {
      overview: 'キューはFIFO(先入れ先出し)の構造。enqueue(追加)とdequeue(削除)の2操作。',
      analogy: 'スーパーのレジ待ちのように：最初に並んだ人が先に通過する。',
      steps: [
        'enqueueで末尾に要素を追加',
        'dequeueで先頭の要素を削除して返す',
        'peekで先頭を確認',
        'is_emptyで空かどうかを確認',
      ],
      visual: `from collections import deque
q = deque()
q.append(1)    # enqueue
q.append(2)
q.popleft()    # dequeue → 1
q[0]           # peek → 2`,
      commonMistakes: [
        'listをキューに使うとpop(0)がO(n)',
        'dequeとlistの違いを知らない',
      ],
      practice: [
        'BFSのキューを実装する',
        'キューを使って最初の出現が重複していない文字を見つける',
      ],
      timeComplexity: 'O(1) enqueue/dequeue',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: 'collections.dequeで両端O(1)。Queueはスレッドセーフ。優先度付きキューにはheapq。',
      steps: [
        'deque.appendleft()/popleft()はO(1)',
        'queue.Queueはスレッドセーフなプロデューサー/コンシューマー',
        'heapq.heappush/heappopで優先度付きキューO(log n)',
        '循環バッファはキューの固定サイズ実装',
      ],
      commonMistakes: [
        'BFSにlist.pop(0)を使う(O(n²)になる)',
        'スレッドセーフが必要な場面でdequeを使う',
      ],
      practice: [
        'heapqで優先度付きキューを実装',
        'dequeで循環ウィンドウをシミュレート',
      ],
    },
  },
};

export default overlay;
