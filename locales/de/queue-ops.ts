import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Implementieren Sie eine Warteschlange mit deque. Simulieren Sie eine Druckwarteschlange.',
  hint: 'Verwenden Sie collections.deque. appendleft() für Einreihen, pop() für Uitreihen.',
  explanation: {
    simple: {
      overview: 'Queue (Warteschlange): FIFO-Datenstruktur – erstes Element rein, erstes wieder raus.',
      analogy: 'Supermarktkasse: zuerst Angestellte versorgt den ersten Kunden in der Reihe.',
      steps: [
        'Enqueue: dq.append(element) – O(1).',
        'Dequeue: dq.popleft() – O(1) mit collections.deque.',
        'Peek: dq[0].',
        'Leere Queue prüfen: not dq.',
      ],
      visual: 'enqueue(1)→[1]; enqueue(2)→[1,2]; dequeue()→1, Queue=[2]',
      commonMistakes: [
        'list.pop(0) für Dequeue verwenden: O(n) statt O(1).',
        'BFS-Queue: Visited-Set vergessen → unendliche Schleife bei Graphen mit Zyklen.',
      ],
      practice: [
        'BFS auf einem Graphen mit Queue implementieren.',
        'Sliding Window Maximum mit Deque implementieren.',
      ],
      timeComplexity: 'O(1) enqueue/dequeue mit deque',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: 'heapq implementiert Prioritätswarteschlange (Min-Heap) in Python; Max-Heap durch negierte Werte.',
      analogy: 'Krankenhaus-Triage: kritischere Patienten werden vorgezogen unabhängig von Ankunftszeit.',
      steps: [
        'heapq.heappush(heap, item) – O(log n).',
        'heapq.heappop(heap) – O(log n), gibt kleinstes Element zurück.',
        'Max-Heap: Werte negiert speichern.',
        'heapq.heapify(list) – O(n) Heap aus Liste erstellen.',
      ],
      visual: 'Min-Heap [1,3,6,5,9,8]: heappop()→1; neuer Heap→[3,5,6,8,9]',
      commonMistakes: [
        'heapq ist kein doppelendiger Heap – kein effizienter remove(max).',
        'Bei gleichen Prioritäten: (priority, item) als Tupel um Vergleichsfehler zu vermeiden.',
      ],
      practice: [
        'K größte Elemente aus Stream mit Min-Heap der Größe k finden.',
        'Dijkstra mit heapq implementieren.',
      ],
    },
  },
};

export default overlay;
