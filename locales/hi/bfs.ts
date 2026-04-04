import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Breadth-First Search सीखें',
  hint: 'Queue का उपयोग करके graph को level-by-level खोजें।',
  approach: 'Queue में start node डालो। Queue से एक node निकालो, उसके unvisited neighbors को queue में add करो।',
  useCases: [
    'Shortest path in unweighted graph',
    'Social network में degrees of separation',
    'Web crawler का page discovery',
  ],
  explanation: {
    simple: {
      overview: 'Breadth-First Search (BFS) graph/tree ko level-by-level traverse karta hai, next level se pehle current level ke saare nodes visit karta hai.',
      analogy: 'Jaise paani mein pathhar daalne se ripples—center se concentric circles mein bahar failtی hain.',
      steps: [
        'Start node queue mein add karo aur visited mein mark karo',
        'Queue khaali na ho tab tak loop karo',
        'Current node dequeue karo',
        'Unvisited neighbors queue mein add karo aur visited mark karo',
      ],
      visual: `    1
   / \\
  2   3
 / \\
4   5
BFS: 1→2→3→4→5`,
      commonMistakes: [
        'Enqueue par visited mark nahi karna duplicate processing hoti hai',
        'list.pop(0) se dequeuing O(n²) ho jata hai',
      ],
      practice: [
        'BFS se binary tree minimum depth nikalo',
        'BFS se connected components count karo',
      ],
      timeComplexity: 'O(V + E)',
      spaceComplexity: 'O(V)'
    },
    deepDive: {
      overview: 'BFS shortest path guarantee karta hai (unweighted), deque zaruri hai, multi-source BFS aur 0-1 BFS important patterns hain.',
      steps: [
        'deque([(start,0)]) node aur distance track karo',
        'Matrix graph: 4/8 direction neighbors check karo',
        'Multi-source BFS: saare sources ek saath queue mein add karo',
        '0-1 BFS: 0 ya 1 weight wale graphs ke liye deque optimal',
      ],
      commonMistakes: [
        'Start node visited nahi karna infinite loop',
        '0 weight edges galat handle karna',
      ],
      practice: [
        'BFS se matrix mein nearest distance nikalo',
        'Multi-source BFS se nearest land se ocean distance',
      ],
    },
  },
};

export default overlay;
