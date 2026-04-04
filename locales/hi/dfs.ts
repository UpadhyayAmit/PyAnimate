import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Depth-First Search सीखें',
  hint: 'Stack या recursion से graph की गहराई में जाएं।',
  approach: 'Start node से explore करो, हर path को end तक recursively follow करो backtrack करने से पहले।',
  useCases: [
    'Maze solving और path finding',
    'Topological sort और cycle detection',
    'Tree/graph में strongly connected components',
  ],
  explanation: {
    simple: {
      overview: 'Depth-First Search (DFS) backtrack karne se pehle har path mein jitna deep ho sake jata hai.',
      analogy: 'Jaise maze mein chalna—dead end milne se pehle ek direction mein jaate raho, phir last junction par wapis aao.',
      steps: [
        'Start node visit karo aur visited mein mark karo',
        'Har unvisited neighbor par recursively DFS karo',
        'Saare neighbors visit karne ke baad backtrack karo',
        'Bina recursion ke explicit stack use karo',
      ],
      visual: `    1
   / \\
  2   3
 / \\
4   5
DFS: 1→2→4→5→3`,
      commonMistakes: [
        'Visited track nahi karna cyclic graph mein infinite loop',
        'Recursion base case bhool jana',
      ],
      practice: [
        'DFS se binary tree path sum validate karo',
        'DFS se connected components identify karo',
      ],
      timeComplexity: 'O(V + E)',
      spaceComplexity: 'O(V)'
    },
    deepDive: {
      overview: 'DFS topological sort, SCC detection, path enumeration ke liye, recursive vs iterative stack tradeoffs.',
      steps: [
        'Pre/in/post-order: visit timing',
        'Topological sort: DFS post-order + stack',
        'Tarjan algorithm: SCC O(V+E)',
        'Back edge = cycle detection',
      ],
      commonMistakes: [
        'Directed vs undirected graphs mein global vs local visited',
        'Post-order aur pre-order DFS ka confusion',
      ],
      practice: [
        'DFS se topological sort implement karo',
        'DFS se graph mein cycle detect karo',
      ],
    },
  },
};

export default overlay;
