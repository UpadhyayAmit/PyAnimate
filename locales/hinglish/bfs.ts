import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Breadth-First Search (BFS)',
  hint: 'Queue use karke graph ko level-by-level explore karo.',
  approach: 'Queue mein start node daalo. Queue se ek node nikalo, uske unvisited neighbors ko queue mein add karo.',
  useCases: [
    'Shortest path in unweighted graph',
    'Social network mein degrees of separation',
    'Web crawler ka page discovery',
  ],
  explanation: {
    simple: {
      overview: 'BFS (Breadth-First Search) — graph ya tree mein level by level explore karta hai. Shortest path unweighted graph mein.',
      analogy: 'Jaise pani mein stone daalo — rings outward expand hoti hain, pehle paas wale, phir door wale.',
      steps: [
        'Source node queue mein daalo',
        'Queue se node nikalo, usse process karo',
        'Unvisited neighbors queue mein daalo, visited mark karo',
        'Queue empty hone tak repeat karo',
      ],
      visual: `Graph: 1-2, 1-3, 2-4, 3-5
BFS from 1: [1] -> [2,3] -> [4,5]`,
      commonMistakes: [
        'Visited set bhool jaana — infinite loop in cycles',
        'Enqueue karte time visited mark karo, dequeue pe nahi',
        'Source node visited mark karna bhool jaana',
      ],
      practice: [
        'BFS se shortest path unweighted graph mein nikalo',
        'Level order traversal binary tree mein karo',
      ],
    },
    deepDive: {
      overview: 'BFS O(V+E) time aur O(V) space hai — bidirectional BFS se two-end se meet karke O(b^(d/2)) speed.',
      steps: [
        'Visited set enqueue pe update karo (not dequeue)',
        'Multi-source BFS: sab sources ek saath queue mein',
        '0-1 BFS: deque aur edge weight 0 ya 1',
        'Bidirectional BFS: source aur destination dono se simultaneously',
      ],
      commonMistakes: [
        'BFS pe shortest path assume karna weighted graphs mein',
        'Graph disconnected ho — components handle karo',
      ],
      practice: [
        'Word ladder problem BFS se solve karo',
        'Rotting oranges multi-source BFS se solve karo',
      ],
    },
  },
};

export default overlay;
