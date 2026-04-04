import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Implementa una cola con deque. Simula una cola de impresión: encola 5 trabajos, desencola en FIFO.',
  hint: 'Usa collections.deque. appendleft() para encolar, pop() para desencolar.',
  explanation: {
    simple: {
      overview: 'Una cola es una colección FIFO (primero en entrar, primero en salir). Los elementos se añaden al final y se eliminan del frente.',
      analogy: 'Como una fila de supermercado: los clientes se añaden al final y se atienden desde el frente.',
      steps: [
        'Usa collections.deque para O(1) en ambos extremos',
        'enqueue: deque.append(elemento)',
        'dequeue: deque.popleft() elimina el frente',
        'peek: deque[0] sin eliminar',
      ],
      visual: `from collections import deque
q = deque()
q.append(1)    # [1]
q.append(2)    # [1,2]
q.popleft()   # devuelve 1, q=[2]`,
      commonMistakes: [
        'Usar lista con pop(0) → O(n); usa deque.popleft() → O(1)',
        'Usar queue.Queue en lugar de deque para código de una sola hebra',
      ],
      practice: [
        'Implementa BFS con cola',
        'Implementa cola con dos pilas',
      ],
      timeComplexity: 'O(1) enqueue y dequeue con deque',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: 'deque es lista doblemente enlazada en CPython; heapq implementa cola de prioridad (min-heap); queue.Queue añade thread-safety.',
      steps: [
        'deque: O(1) appendleft/popleft — usa lista doblemente enlazada',
        'heapq: min-heap, heappush/heappop O(log n)',
        'Max-heap: invierte el signo o usa (prioridad_negativa, elemento)',
        'queue.Queue: thread-safe con bloqueo para productor-consumidor',
      ],
      commonMistakes: [
        'Usar -valor para max-heap solo funciona con números',
        'queue.Queue.get() bloquea indefinidamente sin timeout',
      ],
      practice: [
        'Implementa cola de prioridad con heapq',
        'Implementa sistema productor-consumidor con queue.Queue',
      ],
    },
  },
};

export default overlay;
