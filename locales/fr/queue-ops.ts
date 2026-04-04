import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Implémentez une file avec deque. Simulez une file d\'impression: mettez 5 jobs, retirez en FIFO.',
  hint: 'Utilisez collections.deque. appendleft() pour enfiler, pop() pour défiler.',
  explanation: {
    simple: {
      overview: 'Une file est une structure FIFO (Premier Entré, Premier Sorti). Les éléments entrent par l\'arrière et sortent par le devant.',
      analogy: 'Comme une file d\'attente à la caisse — le premier arrivé est le premier servi.',
      steps: [
        'Enqueue : ajoute à l\'arrière',
        'Dequeue : retire à l\'avant',
        'Peek/Front : regarde le premier sans retirer',
        'isEmpty : vérifie si la file est vide',
      ],
      visual: `from collections import deque
file = deque()
file.append(1)    # [1]
file.append(2)    # [1,2]
file.popleft()    # retourne 1, file=[2]`,
      commonMistakes: [
        'Utiliser list.pop(0) comme dequeue — c\'est O(n)',
        'Confondre l\'ordre FIFO et LIFO',
      ],
      practice: [
        'Simule une file d\'attente d\'imprimante',
        'Implémente BFS avec une file',
      ],
      timeComplexity: 'O(1) pour enqueue/dequeue',
      spaceComplexity: 'O(n)'
    },
    deepDive: {
      overview: 'collections.deque a O(1) pour les deux extrémités ; queue.Queue est thread-safe ; heapq implémente une file de priorité.',
      steps: [
        'deque est un tableau dynamique double-extrémité',
        'queue.Queue : thread-safe avec put()/get()',
        'PriorityQueue / heapq pour la file à priorité',
        'asyncio.Queue pour les patterns producteur-consommateur async',
      ],
      commonMistakes: [
        'Utiliser list comme file (pop(0) est O(n))',
        'Confondre file d\'attente et file de priorité',
      ],
      practice: [
        'Implémante une file de priorité avec heapq',
        'Simule un système de traitement de tâches',
      ],
    },
  },
};

export default overlay;
