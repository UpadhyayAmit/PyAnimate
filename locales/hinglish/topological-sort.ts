import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Topological sort: 5→2, 5→0, 4→0, 4→1, 2→3, 3→1. Valid orderings list karo.',
  hint: 'Kahn\'s algorithm use karo: in-degrees compute karo, 0 in-degree wale nodes enqueue karo.',
  explanation: {
    simple: {
      overview: 'Topological sort: Directed Acyclic Graph (DAG) ke nodes ko order karo — dependencies pehle. Course prerequisites classic example.',
      analogy: 'Jaise exam schedule karo — prerequisite subject pehle padhna padega.',
      steps: [
        'In-degree calculate karo (kitne edges aate hain node mein)',
        'In-degree 0 wale nodes queue mein daalo',
        'Node process karo, uske neighbors ka in-degree ghataao',
        'Queue khaali hone tak repeat karo',
      ],
      visual: `A->C, B->C, C->D
In-degrees: A=0,B=0,C=2,D=1
Queue: [A,B] -> process -> C in-degree=0 -> [C] -> D`,
      commonMistakes: [
        'Cycle wale graph mein topological sort nahi hota — detect karo',
        'Multiple valid orderings possible — unique nahi hai',
        'DAG assume karna — cycle check karo',
      ],
      practice: [
        'Course schedule II solve karo (topological sort variant)',
        'Build order find karo — compilation dependencies',
      ],
    },
    deepDive: {
      overview: 'Topological sort Kahn algorithm (BFS) ya DFS se — Kahn cycle detection naturally karta hai.',
      steps: [
        'Kahn algorithm: O(V+E), Cycle detection: result length < V toh cycle',
        'DFS-based: finish time decreasing order = topological order',
        'All topological orderings: backtracking se enumerate karo',
        'Parallel tasks: topological sort + level ke tasks parallel karo',
      ],
      commonMistakes: [
        'Kahn mein all in-degree-0 nodes initially queue mein',
        'Graph undirected hai toh topological sort nahi hota',
      ],
      practice: [
        'Kahn algorithm implement karo cycle detection ke saath',
        'Parallel job scheduling mein minimum time nikalo',
      ],
    },
  },
};

export default overlay;
