import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Implement a queue with deque. Simulate a print queue: enqueue 5 jobs, dequeue them with FIFO order.',
  hint: 'Use collections.deque. appendleft() for enqueue at front, pop() from right for dequeue.',
  explanation: {
    simple: {
      overview: 'A queue is First-In First-Out: enqueue adds to the back, dequeue removes from the front.',
      analogy: 'A checkout line: first customer to arrive is first to be served.',
      steps: [
          'Use collections.deque for O(1) both ends.',
          'Enqueue: dq.append(x); dequeue: dq.popleft().',
          'Front peek: dq[0]; back peek: dq[-1].',
      ],
      visual: 'enqueue(1)→[1]; enqueue(2)→[1,2]; dequeue()→1,[2]',
      commonMistakes: [
          'Using list.pop(0) — O(n) shift; use deque.popleft() instead.',
          'Treating a queue as a stack (wrong order of retrieval).',
      ],
      practice: [
          'Implement BFS using a queue.',
          'Build a task scheduler that processes jobs FIFO.',
      ],
      timeComplexity: 'O(1) enqueue/dequeue with deque',
      spaceComplexity: 'O(n)',
    },
    deepDive: {
      overview: 'Priority queue (heapq) generalizes queue by serving the highest-priority item regardless of insertion order.',
      analogy: 'Hospital ER triage: critical patients seen first, not the ones who waited longest.',
      steps: [
          'heapq.heappush(h, (priority, item)) — min-heap by default.',
          'heapq.heappop(h) returns (priority, item) with smallest priority.',
          'For max-heap: negate priorities.',
          'queue.PriorityQueue is thread-safe; heapq is not.',
      ],
      visual: 'h=[(1,\'low\'), (0,\'high\')]; heappop→(0,\'high\') — priority 0 first',
      commonMistakes: [
          'Using heapq on a non-heap list (must heapify first or always use heappush/heappop).',
          'Tie-breaking needed: (priority, unique_id, item) to avoid comparing item objects.',
      ],
      practice: [
          'Implement Dijkstra\'s algorithm using heapq.',
          'Merge k sorted lists using a priority queue.',
      ],
    },
  },
};

export default overlay;
