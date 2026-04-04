import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '使用deque实现队列。模拟打印队列：将5个任务入队，按FIFO顺序出队。',
  hint: '使用collections.deque。appendleft()前端入队，pop()出队。',
  explanation: {
    simple: {
      overview: '队列是FIFO(先进先出)结构，提供enqueue(入队)和dequeue(出队)操作。',
      analogy: '就像超市收银台排队——先排的人先结账。',
      steps: [
        'enqueue在队尾添加元素',
        'dequeue删除并返回队头元素',
        'peek查看队头',
        'is_empty检查是否为空',
      ],
      visual: `from collections import deque
q = deque()
q.append(1)    # enqueue
q.append(2)
q.popleft()    # dequeue → 1
q[0]           # peek → 2`,
      commonMistakes: [
        '用list模拟队列导致pop(0)为O(n)',
        '不了解deque和list的区别',
      ],
      practice: [
        '实现BFS的队列',
        '用队列找字符串中第一个不重复的字符',
      ],
      timeComplexity: 'O(1) enqueue/dequeue',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: 'collections.deque两端O(1)，Queue线程安全，优先队列用heapq。',
      steps: [
        'deque.appendleft()/popleft()是O(1)',
        'queue.Queue线程安全适合生产者/消费者',
        'heapq.heappush/heappop实现优先队列O(log n)',
        '循环缓冲区是队列的固定容量实现',
      ],
      commonMistakes: [
        'BFS用list.pop(0)(导致O(n²))',
        '需要线程安全时用deque',
      ],
      practice: [
        '用heapq实现优先队列',
        '用deque模拟循环窗口',
      ],
    },
  },
};

export default overlay;
