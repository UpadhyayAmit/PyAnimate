import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Use nested loops to print a multiplication table (1–5) as a formatted grid.',
  hint: 'Outer loop for rows, inner for columns. Use print(end=\'\\\\\\\\t\') for tab spacing.',
  explanation: {
    simple: {
      overview: 'Explore how nested loops, break, continue, and else interact to control iteration flow.',
      analogy: 'Nested Russian dolls: outer loop is the big doll, inner loop is each smaller doll inside.',
      steps: [
          'Outer loop runs n times; inner loop runs m times each → O(n×m) steps.',
          'break in inner loop only exits the inner loop.',
          'continue skips the rest of the current iteration.',
          'for/while else runs only when no break occurred.',
      ],
      visual: 'for i in range(3): for j in range(2): print(i,j) → (0,0)(0,1)(1,0)(1,1)(2,0)(2,1)',
      commonMistakes: [
          'Thinking break exits all loops (use a flag or refactor).',
          'Misplacing else under for vs if.',
      ],
      practice: [
          'Print a star triangle using nested loops.',
          'Use for-else to search and report if an item is missing.',
      ],
      timeComplexity: 'O(n×m) for two nested loops',
      spaceComplexity: 'O(1)',
    },
    deepDive: {
      overview: 'Loop transformations (fusion, fission, tiling) are key compiler and performance techniques.',
      analogy: 'Cache blocking: process data in tiles to keep it in CPU L1 cache.',
      steps: [
          'Loop fusion: merge two adjacent loops to reduce iterator overhead.',
          'Loop fission: split one loop into two for better cache usage.',
          'Loop unrolling: duplicate body to reduce branch overhead.',
          'Generator-based loops avoid materializing the whole sequence in memory.',
      ],
      visual: 'Tiled: for i in range(0,n,B): for j in range(i,min(i+B,n)): process(j)',
      commonMistakes: [
          'Over-optimizing loops before profiling (premature optimization).',
          'Forgetting that Python loops have high per-iteration overhead vs compiled code.',
      ],
      practice: [
          'Profile a nested loop with cProfile.',
          'Replace inner loop accumulation with numpy vectorized operation.',
      ],
    },
  },
};

export default overlay;
