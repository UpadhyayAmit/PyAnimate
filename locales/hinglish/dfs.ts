import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Depth-First Search (DFS)',
  hint: 'Stack ya recursion se graph ki gehraai mein jao.',
  approach: 'Start node se explore karo, har path ko end tak recursively follow karo backtrack karne se pehle.',
  useCases: [
    'Maze solving aur path finding',
    'Topological sort aur cycle detection',
    'Tree/graph mein strongly connected components',
  ],
  explanation: {
    simple: {
      overview: 'DFS (Depth-First Search) — ek path pe jitna deep ja sako jao, phir backtrack karo. Maze solving classic use case.',
      analogy: 'Jaise maze solve karna — ek direction mein jaate raho jab tak dead end na aaye, phir backtrack karo.',
      steps: [
        'Stack ya recursion use karo',
        'Current node ko visited mark karo',
        'Har unvisited neighbor ke liye DFS call karo',
        'Backtrack jab koi unvisited neighbor na ho',
      ],
      visual: `Graph: 1-2, 1-3, 2-4
DFS from 1: 1->2->4(backtrack)->3`,
      commonMistakes: [
        'Visited track nahi karna — cycles mein infinite loop',
        'Pre-order vs post-order processing confusion',
        'Stack overflow deep graphs mein — iterative use karo',
      ],
      practice: [
        'DFS se connected components count karo',
        'Cycle detection undirected graph mein DFS se karo',
      ],
    },
    deepDive: {
      overview: 'DFS O(V+E) hai — topological sort, SCC (Tarjan), DFS tree sab iske applications hain.',
      steps: [
        'Pre-order: node process, then recurse (standard DFS)',
        'Post-order: recurse first, then process (topological sort)',
        'DFS timestamps: discovery aur finish time',
        'Tarjan SCC: O(V+E) strongly connected components',
      ],
      commonMistakes: [
        'Iterative DFS post-order explicit stack pe tricky hai',
        'DFS tree back-edges vs cross-edges — directed vs undirected',
      ],
      practice: [
        'Topological sort DFS se karo',
        'Articulation points DFS se find karo',
      ],
    },
  },
};

export default overlay;
