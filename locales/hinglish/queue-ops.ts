import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Deque se queue implement karo. Print queue simulate karo: 5 jobs enqueue karo, FIFO order mein dequeue.',
  hint: 'collections.deque use karo. Enqueue ke liye appendleft(), dequeue ke liye pop().',
  explanation: {
    simple: {
      overview: 'Queue FIFO structure hai — first in, first out. Python mein collections.deque ya queue.Queue use karo.',
      analogy: 'Jaise bus stand ki line — jo pehle aaya, pehle baitha.',
      steps: [
        'from collections import deque',
        'q = deque() se empty queue',
        'q.append(x) se enqueue (right side)',
        'q.popleft() se dequeue (left side)',
      ],
      visual: `q = deque()
q.append(1)    # deque([1])
q.append(2)    # deque([1, 2])
q.popleft()    # 1, deque([2])`,
      commonMistakes: [
        'List se queue — list.pop(0) O(n) hai, deque.popleft() O(1) hai',
        'Queue empty check: len(q) == 0 ya bool(q)',
        'Thread safety ke liye queue.Queue use karo',
      ],
      practice: [
        'BFS ke liye queue use karo',
        'Circular queue implement karo',
      ],
    },
    deepDive: {
      overview: 'deque double-ended queue hai — O(1) append/pop dono ends se. BFS, sliding window mein essential.',
      steps: [
        'deque(maxlen=k) circular buffer hai automatically',
        'queue.Queue thread-safe hai',
        'heapq se priority queue (min-heap)',
        'asyncio.Queue async programming ke liye',
      ],
      commonMistakes: [
        'deque ka maxlen — purana data silently remove ho jaata hai',
        'heapq max-heap ke liye negate values karo (-x)',
      ],
      practice: [
        'LRU cache deque + dict se implement karo',
        'Task scheduler queue se simulate karo',
      ],
    },
  },
};

export default overlay;
