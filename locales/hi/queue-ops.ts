import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Deque से queue implement करें। Print queue simulate करें: 5 jobs enqueue करें, FIFO order में dequeue करें।',
  hint: 'collections.deque use करें। Enqueue के लिए appendleft(), dequeue के लिए pop()।',
  explanation: {
    simple: {
      overview: 'Queue FIFO (First In First Out) structure hai jisme enqueue aur dequeue operations hain.',
      analogy: 'Jaise supermarket mein queue—jo pehle aaya woh pehle serve hota hai.',
      steps: [
        'enqueue queue ke tail mein element add karta hai',
        'dequeue head element delete karke return karta hai',
        'peek head dekhta hai',
        'is_empty check karta hai khaali hai ya nahi',
      ],
      visual: `from collections import deque
q = deque()
q.append(1)    # enqueue
q.append(2)
q.popleft()    # dequeue → 1
q[0]           # peek → 2`,
      commonMistakes: [
        'List se queue banane par pop(0) O(n) hai',
        'deque aur list ka fark nahi jaanna',
      ],
      practice: [
        'BFS ke liye queue implement karo',
        'Queue se string mein pehla non-repeating character nikalo',
      ],
      timeComplexity: 'O(1) enqueue/dequeue',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: 'collections.deque dono ends O(1), Queue thread-safe, priority queue heapq se.',
      steps: [
        'deque.appendleft()/popleft() O(1) hai',
        'queue.Queue thread-safe producer/consumer ke liye',
        'heapq.heappush/heappop priority queue O(log n)',
        'Circular buffer fixed capacity queue implementation hai',
      ],
      commonMistakes: [
        'BFS mein list.pop(0) use karna (O(n²) ho jata hai)',
        'Thread safety chahiye hone par deque use karna',
      ],
      practice: [
        'heapq se priority queue implement karo',
        'deque se circular window simulate karo',
      ],
    },
  },
};

export default overlay;
