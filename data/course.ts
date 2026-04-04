import { getLocaleOverlays } from '../locales';
import type { LessonExplanation } from '../locales/types';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export type TrackLevel = {
  id: string;
  title: string;
  audience: string;
  accent: string;
  iconBg: string;
  goals: string[];
  lessonCount: number;
  description: string;
};

export type LessonCard = {
  title: string;
  description: string;
  duration: string;
  concept: string;
  accentColor: string;
  accentBg: string;
  lessonId: string;
};

export type ExecutionFrame = {
  line: number;
  summary: string;
  why: string; // reasoning behind the design choice at this line
  event: string;
  memory: { name: string; value: string }[];
  output?: string[];
};

export type PlaygroundLesson = {
  id: string;
  title: string;
  level: string;
  levelColor: string;
  duration: string;
  objective: string;
  prompt: string;
  hint: string;
  starterCode: string;
  executionFrames: ExecutionFrame[];
  output: string[];
  timeComplexity: string;
  spaceComplexity: string;
  useCases: string[];
  approach: string;
  explanation?: LessonExplanation;
};

export type AlgorithmEntry = {
  id: string;
  title: string;
  description: string;
  timeComplexity: string;
  spaceComplexity: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  hasPlayground: boolean;
  duration: string;
  tags: string[];
};

export type HeroStat = {
  label: string;
  value: string;
};

// ─────────────────────────────────────────────────────────────────────────────
// Tracks
// ─────────────────────────────────────────────────────────────────────────────

export const trackLevels: TrackLevel[] = [
  {
    id: 'foundation',
    title: 'Foundation',
    audience: 'Absolute beginners, zero experience',
    accent: 'from-sky-900/60 to-blue-950/40',
    iconBg: 'bg-sky-50',
    goals: ['Print & variables', 'Types and comparisons', 'If / else logic'],
    lessonCount: 10,
    description: 'Start from zero. Learn how Python thinks about data, decisions, and flow — step by step, with every concept animated.',
  },
  {
    id: 'beginner',
    title: 'Beginner',
    audience: 'First-time Python learners',
    accent: 'from-indigo-900/60 to-violet-950/40',
    iconBg: 'bg-blue-50',
    goals: ['Loops & iteration', 'Functions & scope', 'List operations'],
    lessonCount: 10,
    description: 'Build real programming habits. Master loops, functions, and lists by watching them execute one step at a time.',
  },
  {
    id: 'intermediate',
    title: 'Intermediate',
    audience: 'Builders shipping scripts and apps',
    accent: 'from-emerald-900/60 to-teal-950/40',
    iconBg: 'bg-green-50',
    goals: ['Data structures', 'Searching algorithms', 'OOP foundations'],
    lessonCount: 10,
    description: 'Upgrade your toolkit. Explore dictionaries, stacks, queues, and your first search algorithms with visual state tracking.',
  },
  {
    id: 'advanced',
    title: 'Advanced',
    audience: 'Engineers refining problem solving',
    accent: 'from-amber-900/60 to-orange-950/40',
    iconBg: 'bg-amber-50',
    goals: ['Sorting algorithms', 'Recursion & trees', 'Time complexity'],
    lessonCount: 10,
    description: 'Think algorithmically. See sorting and tree algorithms animate in real time, understand Big O through observation.',
  },
  {
    id: 'mastery',
    title: 'Mastery',
    audience: 'Experts exploring internals',
    accent: 'from-rose-900/60 to-red-950/40',
    iconBg: 'bg-orange-50',
    goals: ['Graph traversal', 'Dynamic programming', 'System-level thinking'],
    lessonCount: 10,
    description: 'Push to the frontier. Graph search, dynamic programming, and interview-level algorithms — all visualized live.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Algorithm catalog — 10 per level
// ─────────────────────────────────────────────────────────────────────────────

export const algorithmsByLevel: Record<string, AlgorithmEntry[]> = {
  foundation: [
    {
      id: 'hello-world',
      title: 'Hello World & Print',
      description: "Your first Python output. See how print() sends data to the console and why it's the foundation of all debugging.",
      timeComplexity: 'O(1)',
      spaceComplexity: 'O(1)',
      category: 'Basics',
      difficulty: 'easy',
      hasPlayground: true,
      duration: '5 min',
      tags: ['print', 'output', 'basics'],
    },
    {
      id: 'variables-types',
      title: 'Variables & Types',
      description: 'Watch a variable come to life in memory. See int, float, str, and bool as living boxes that hold values.',
      timeComplexity: 'O(1)',
      spaceComplexity: 'O(1)',
      category: 'Basics',
      difficulty: 'easy',
      hasPlayground: true,
      duration: '8 min',
      tags: ['variables', 'types', 'memory'],
    },
    {
      id: 'string-operations',
      title: 'String Operations',
      description: 'Strings are sequences. See slicing, concatenation, and methods animate over character arrays.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      category: 'Strings',
      difficulty: 'easy',
      hasPlayground: true,
      duration: '8 min',
      tags: ['strings', 'slicing', 'methods'],
    },
    {
      id: 'arithmetic',
      title: 'Arithmetic & Math',
      description: 'Numbers, operators, and integer division. See exactly how Python evaluates expressions step by step.',
      timeComplexity: 'O(1)',
      spaceComplexity: 'O(1)',
      category: 'Math',
      difficulty: 'easy',
      hasPlayground: true,
      duration: '6 min',
      tags: ['math', 'operators', 'division'],
    },
    {
      id: 'if-else',
      title: 'If / Else Conditions',
      description: 'Code that makes decisions. Watch execution jump between branches based on truthiness.',
      timeComplexity: 'O(1)',
      spaceComplexity: 'O(1)',
      category: 'Control Flow',
      difficulty: 'easy',
      hasPlayground: true,
      duration: '8 min',
      tags: ['conditions', 'branching', 'boolean'],
    },
    {
      id: 'while-loop',
      title: 'While Loops',
      description: 'Repetition driven by a condition. See the loop guard check before every iteration and why infinite loops happen.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      category: 'Loops',
      difficulty: 'easy',
      hasPlayground: true,
      duration: '10 min',
      tags: ['loops', 'while', 'iteration'],
    },
    {
      id: 'for-loop',
      title: 'For Loops & Range',
      description: "Iterate over sequences. See how Python's for loop is really an iterator under the hood.",
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      category: 'Loops',
      difficulty: 'easy',
      hasPlayground: true,
      duration: '12 min',
      tags: ['loops', 'for', 'range'],
    },
    {
      id: 'lists-basics',
      title: 'Lists Basics',
      description: "Python's most useful container. See append, pop, and index as operations on an animated memory block.",
      timeComplexity: 'O(1) amortized',
      spaceComplexity: 'O(n)',
      category: 'Data Structures',
      difficulty: 'easy',
      hasPlayground: true,
      duration: '10 min',
      tags: ['lists', 'append', 'index'],
    },
    {
      id: 'functions-intro',
      title: 'Functions Intro',
      description: 'Reusable blocks of logic. Watch a function call push a stack frame and return value flow back to the caller.',
      timeComplexity: 'O(1)',
      spaceComplexity: 'O(1)',
      category: 'Functions',
      difficulty: 'easy',
      hasPlayground: true,
      duration: '12 min',
      tags: ['functions', 'return', 'scope'],
    },
    {
      id: 'input-output',
      title: 'Input & Output',
      description: 'Programs that talk to users. See how input() pauses execution and returns a string value.',
      timeComplexity: 'O(1)',
      spaceComplexity: 'O(1)',
      category: 'I/O',
      difficulty: 'easy',
      hasPlayground: true,
      duration: '6 min',
      tags: ['input', 'output', 'interactive'],
    },
  ],

  beginner: [
    {
      id: 'linear-search',
      title: 'Linear Search',
      description: 'Check every element until you find the target. O(n) — the simplest search algorithm there is.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      category: 'Searching',
      difficulty: 'easy',
      hasPlayground: true,
      duration: '8 min',
      tags: ['search', 'linear', 'brute force'],
    },
    {
      id: 'count-occurrences',
      title: 'Count Occurrences',
      description: 'Count how many times a value appears. See a hash map accumulate counts with each pass.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(k)',
      category: 'Counting',
      difficulty: 'easy',
      hasPlayground: true,
      duration: '8 min',
      tags: ['counting', 'dictionary', 'frequency'],
    },
    {
      id: 'find-min-max',
      title: 'Find Min & Max',
      description: 'Track the running minimum and maximum through a single pass. See why one loop is enough.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      category: 'Array',
      difficulty: 'easy',
      hasPlayground: true,
      duration: '8 min',
      tags: ['min', 'max', 'single pass'],
    },
    {
      id: 'sum-average',
      title: 'Sum & Average',
      description: 'Accumulate values and compute the mean. See the accumulator pattern that powers many algorithms.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      category: 'Math',
      difficulty: 'easy',
      hasPlayground: true,
      duration: '6 min',
      tags: ['sum', 'average', 'accumulator'],
    },
    {
      id: 'loop-explorer',
      title: 'Loop Explorer',
      description: 'Watch how loop iterations update shared state. See score accumulate with each pass.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      category: 'Loops',
      difficulty: 'easy',
      hasPlayground: true,
      duration: '12 min',
      tags: ['loops', 'state', 'accumulator'],
    },
    {
      id: 'reverse-list',
      title: 'Reverse a List',
      description: 'Two-pointer swap from both ends. Watch pointers move inward until they meet in the middle.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      category: 'Array',
      difficulty: 'easy',
      hasPlayground: true,
      duration: '8 min',
      tags: ['reverse', 'two pointers', 'in-place'],
    },
    {
      id: 'palindrome',
      title: 'Check Palindrome',
      description: 'Compare characters from both ends. See how the two-pointer technique confirms symmetry.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      category: 'Strings',
      difficulty: 'easy',
      hasPlayground: true,
      duration: '8 min',
      tags: ['palindrome', 'two pointers', 'strings'],
    },
    {
      id: 'fizzbuzz',
      title: 'FizzBuzz',
      description: 'Classic divisibility check. See modulo drive conditional output across 100 iterations.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      category: 'Math',
      difficulty: 'easy',
      hasPlayground: true,
      duration: '6 min',
      tags: ['modulo', 'conditions', 'classic'],
    },
    {
      id: 'factorial',
      title: 'Factorial (Iterative)',
      description: 'Multiply from 1 to n. See the product grow step by step and understand why 0! = 1.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      category: 'Math',
      difficulty: 'easy',
      hasPlayground: true,
      duration: '6 min',
      tags: ['factorial', 'iterative', 'math'],
    },
    {
      id: 'fibonacci-iterative',
      title: 'Fibonacci (Iterative)',
      description: 'Generate the sequence with two rolling variables. See why this beats the recursive version in space.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      category: 'Math',
      difficulty: 'medium',
      hasPlayground: true,
      duration: '8 min',
      tags: ['fibonacci', 'iterative', 'rolling vars'],
    },
  ],

  intermediate: [
    {
      id: 'binary-search',
      title: 'Binary Search',
      description: 'Halve the search space every step. Requires sorted input. Watch O(log n) happen live.',
      timeComplexity: 'O(log n)',
      spaceComplexity: 'O(1)',
      category: 'Searching',
      difficulty: 'medium',
      hasPlayground: true,
      duration: '12 min',
      tags: ['binary search', 'divide & conquer', 'sorted'],
    },
    {
      id: 'selection-sort',
      title: 'Selection Sort',
      description: 'Find the minimum each pass and move it to the front. See n passes produce a sorted array.',
      timeComplexity: 'O(n²)',
      spaceComplexity: 'O(1)',
      category: 'Sorting',
      difficulty: 'medium',
      hasPlayground: true,
      duration: '12 min',
      tags: ['sorting', 'selection', 'in-place'],
    },
    {
      id: 'insertion-sort',
      title: 'Insertion Sort',
      description: 'Insert each element into its correct position in the already-sorted prefix. Efficient for nearly sorted data.',
      timeComplexity: 'O(n²) worst, O(n) best',
      spaceComplexity: 'O(1)',
      category: 'Sorting',
      difficulty: 'medium',
      hasPlayground: true,
      duration: '12 min',
      tags: ['sorting', 'insertion', 'adaptive'],
    },
    {
      id: 'two-pointers',
      title: 'Two Pointers',
      description: 'Use two indices moving toward each other to solve array problems in O(n) instead of O(n²).',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      category: 'Array',
      difficulty: 'medium',
      hasPlayground: true,
      duration: '10 min',
      tags: ['two pointers', 'optimization', 'array'],
    },
    {
      id: 'hash-map-counting',
      title: 'Hash Map Counting',
      description: 'Use a dictionary to count in O(1) per lookup. The foundation of many frequency problems.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(k)',
      category: 'Hash Maps',
      difficulty: 'medium',
      hasPlayground: true,
      duration: '10 min',
      tags: ['hash map', 'frequency', 'dictionary'],
    },
    {
      id: 'stack-ops',
      title: 'Stack Operations',
      description: 'LIFO in action. See push, pop, and peek animate on a list used as a stack.',
      timeComplexity: 'O(1) per op',
      spaceComplexity: 'O(n)',
      category: 'Data Structures',
      difficulty: 'medium',
      hasPlayground: true,
      duration: '10 min',
      tags: ['stack', 'LIFO', 'data structures'],
    },
    {
      id: 'queue-ops',
      title: 'Queue Operations',
      description: 'FIFO in action. See enqueue and dequeue animate and understand why deque beats a list.',
      timeComplexity: 'O(1) per op',
      spaceComplexity: 'O(n)',
      category: 'Data Structures',
      difficulty: 'medium',
      hasPlayground: true,
      duration: '8 min',
      tags: ['queue', 'FIFO', 'deque'],
    },
    {
      id: 'anagram-check',
      title: 'Anagram Check',
      description: 'Are two strings rearrangements of each other? See character counting solve it in O(n).',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(k) — k = unique chars',
      category: 'Strings',
      difficulty: 'medium',
      hasPlayground: true,
      duration: '8 min',
      tags: ['strings', 'anagram', 'counting'],
    },
    {
      id: 'sliding-window',
      title: 'Sliding Window Max Sum',
      description: 'Find the maximum sum in every window of size k. Watch the window glide across the array.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      category: 'Array',
      difficulty: 'medium',
      hasPlayground: true,
      duration: '8 min',
      tags: ['sliding window', 'optimization', 'array'],
    },
    {
      id: 'merge-sorted',
      title: 'Merge Sorted Arrays',
      description: 'Combine two sorted arrays into one. The core operation behind merge sort.',
      timeComplexity: 'O(m + n)',
      spaceComplexity: 'O(m + n)',
      category: 'Sorting',
      difficulty: 'medium',
      hasPlayground: true,
      duration: '8 min',
      tags: ['merge', 'sorted', 'two pointers'],
    },
  ],

  advanced: [
    {
      id: 'bubble-sort',
      title: 'Bubble Sort',
      description: 'Compare adjacent pairs. Larger elements bubble to the top each pass.',
      timeComplexity: 'O(n²)',
      spaceComplexity: 'O(1)',
      category: 'Sorting',
      difficulty: 'medium',
      hasPlayground: true,
      duration: '15 min',
      tags: ['sorting', 'comparison', 'in-place'],
    },
    {
      id: 'merge-sort',
      title: 'Merge Sort',
      description: 'Divide, sort halves, merge. See the recursion tree split and recombine.',
      timeComplexity: 'O(n log n)',
      spaceComplexity: 'O(n)',
      category: 'Sorting',
      difficulty: 'hard',
      hasPlayground: true,
      duration: '18 min',
      tags: ['sorting', 'divide & conquer', 'recursive'],
    },
    {
      id: 'quick-sort',
      title: 'Quick Sort',
      description: 'Choose a pivot, partition around it, recurse. Average O(n log n) with great cache performance.',
      timeComplexity: 'O(n log n) avg, O(n²) worst',
      spaceComplexity: 'O(log n)',
      category: 'Sorting',
      difficulty: 'hard',
      hasPlayground: true,
      duration: '18 min',
      tags: ['sorting', 'pivot', 'in-place'],
    },
    {
      id: 'heap-sort',
      title: 'Heap Sort',
      description: 'Build a max-heap, extract elements in order. Guaranteed O(n log n) unlike quicksort.',
      timeComplexity: 'O(n log n)',
      spaceComplexity: 'O(1)',
      category: 'Sorting',
      difficulty: 'hard',
      hasPlayground: true,
      duration: '20 min',
      tags: ['sorting', 'heap', 'priority queue'],
    },
    {
      id: 'bfs',
      title: 'Breadth-First Search',
      description: 'Explore a graph level by level using a queue. Find shortest paths in unweighted graphs.',
      timeComplexity: 'O(V + E)',
      spaceComplexity: 'O(V)',
      category: 'Graph',
      difficulty: 'hard',
      hasPlayground: true,
      duration: '18 min',
      tags: ['graph', 'BFS', 'queue', 'shortest path'],
    },
    {
      id: 'dfs',
      title: 'Depth-First Search',
      description: 'Explore as deep as possible before backtracking. See the call stack grow with each recursive step.',
      timeComplexity: 'O(V + E)',
      spaceComplexity: 'O(V)',
      category: 'Graph',
      difficulty: 'hard',
      hasPlayground: true,
      duration: '18 min',
      tags: ['graph', 'DFS', 'recursion', 'backtracking'],
    },
    {
      id: 'binary-tree-traversal',
      title: 'Binary Tree Traversal',
      description: 'In-order, pre-order, post-order. Watch nodes visit in different sequences on the same tree.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(h)',
      category: 'Trees',
      difficulty: 'hard',
      hasPlayground: true,
      duration: '15 min',
      tags: ['trees', 'traversal', 'recursion'],
    },
    {
      id: 'two-sum',
      title: 'Two Sum',
      description: 'Find two numbers that add to a target. See how a hash map turns O(n²) into O(n).',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      category: 'Hash Maps',
      difficulty: 'medium',
      hasPlayground: true,
      duration: '12 min',
      tags: ['array', 'hash map', 'complement'],
    },
    {
      id: 'valid-parentheses',
      title: 'Valid Parentheses',
      description: 'Use a stack to match open and close brackets. Classic stack application interview question.',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(n)',
      category: 'Stacks',
      difficulty: 'medium',
      hasPlayground: true,
      duration: '12 min',
      tags: ['stack', 'brackets', 'matching'],
    },
    {
      id: 'fibonacci-recursive',
      title: 'Fibonacci (Recursive)',
      description: 'See the call tree fan out exponentially. Understand why memoization is essential.',
      timeComplexity: 'O(2ⁿ) naive, O(n) memoized',
      spaceComplexity: 'O(n)',
      category: 'Recursion',
      difficulty: 'medium',
      hasPlayground: true,
      duration: '15 min',
      tags: ['recursion', 'fibonacci', 'memoization'],
    },
  ],

  mastery: [
    {
      id: 'dijkstra',
      title: "Dijkstra's Shortest Path",
      description: 'Find shortest paths from a source to all nodes using a priority queue. The backbone of GPS navigation.',
      timeComplexity: 'O((V + E) log V)',
      spaceComplexity: 'O(V)',
      category: 'Graph',
      difficulty: 'hard',
      hasPlayground: true,
      duration: '25 min',
      tags: ['graph', 'shortest path', 'greedy', 'priority queue'],
    },
    {
      id: 'knapsack',
      title: '0/1 Knapsack (DP)',
      description: 'Maximise value within a weight limit. See the DP table fill row by row.',
      timeComplexity: 'O(n × W)',
      spaceComplexity: 'O(n × W)',
      category: 'Dynamic Programming',
      difficulty: 'hard',
      hasPlayground: true,
      duration: '25 min',
      tags: ['DP', 'knapsack', 'optimization'],
    },
    {
      id: 'lcs',
      title: 'Longest Common Subsequence',
      description: 'Find the longest subsequence shared by two strings. Core of diff tools and DNA alignment.',
      timeComplexity: 'O(m × n)',
      spaceComplexity: 'O(m × n)',
      category: 'Dynamic Programming',
      difficulty: 'hard',
      hasPlayground: true,
      duration: '20 min',
      tags: ['DP', 'LCS', 'subsequence'],
    },
    {
      id: 'topological-sort',
      title: 'Topological Sort',
      description: "Order tasks respecting dependencies. See Kahn's algorithm remove nodes with zero in-degree.",
      timeComplexity: 'O(V + E)',
      spaceComplexity: 'O(V)',
      category: 'Graph',
      difficulty: 'hard',
      hasPlayground: true,
      duration: '20 min',
      tags: ['graph', 'topological', 'DAG'],
    },
    {
      id: 'kruskals',
      title: "Kruskal's MST",
      description: 'Build a minimum spanning tree by greedily adding lowest-weight edges without forming cycles.',
      timeComplexity: 'O(E log E)',
      spaceComplexity: 'O(V)',
      category: 'Graph',
      difficulty: 'hard',
      hasPlayground: true,
      duration: '25 min',
      tags: ['graph', 'MST', 'union-find', 'greedy'],
    },
    {
      id: 'trie',
      title: 'Trie (Prefix Tree)',
      description: 'Insert and search strings letter by letter. See how autocomplete works under the hood.',
      timeComplexity: 'O(m) per op',
      spaceComplexity: 'O(m × n)',
      category: 'Trees',
      difficulty: 'hard',
      hasPlayground: true,
      duration: '20 min',
      tags: ['trie', 'prefix', 'autocomplete'],
    },
    {
      id: 'floyd-warshall',
      title: 'Floyd-Warshall',
      description: 'All-pairs shortest paths with a 3-loop DP. See the distance matrix update in O(V³).',
      timeComplexity: 'O(V³)',
      spaceComplexity: 'O(V²)',
      category: 'Graph',
      difficulty: 'hard',
      hasPlayground: true,
      duration: '22 min',
      tags: ['graph', 'all-pairs', 'DP'],
    },
    {
      id: 'segment-tree',
      title: 'Segment Tree',
      description: 'Range queries and point updates in O(log n). See the tree build and propagate sums upward.',
      timeComplexity: 'O(log n) query/update',
      spaceComplexity: 'O(n)',
      category: 'Trees',
      difficulty: 'hard',
      hasPlayground: true,
      duration: '25 min',
      tags: ['segment tree', 'range query', 'update'],
    },
    {
      id: 'coin-change',
      title: 'Coin Change (DP)',
      description: 'Minimum coins to make an amount. See the DP array fill from 0 up to the target.',
      timeComplexity: 'O(amount × n)',
      spaceComplexity: 'O(amount)',
      category: 'Dynamic Programming',
      difficulty: 'hard',
      hasPlayground: true,
      duration: '18 min',
      tags: ['DP', 'coins', 'greedy vs DP'],
    },
    {
      id: 'bit-manipulation',
      title: 'Bit Manipulation Tricks',
      description: 'AND, OR, XOR, shifts — the operations behind cryptography, graphics, and competitive programming.',
      timeComplexity: 'O(1)',
      spaceComplexity: 'O(1)',
      category: 'Bit Ops',
      difficulty: 'hard',
      hasPlayground: true,
      duration: '18 min',
      tags: ['bits', 'XOR', 'masks', 'shifts'],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Feature outcomes
// ─────────────────────────────────────────────────────────────────────────────

export const featuredOutcomes = [
  {
    title: 'Trace code visually',
    description: 'See variables, loops, and stack transitions instead of reading raw output alone.',
    accentClass: 'text-wave',
    bgClass: 'bg-blue-50',
  },
  {
    title: 'Practice by level',
    description: 'Move through clear tracks with pacing from first syntax to advanced algorithms.',
    accentClass: 'text-leaf',
    bgClass: 'bg-green-50',
  },
  {
    title: 'Experiment safely',
    description: 'Edit live, replay execution, and understand mistakes before they harden into habits.',
    accentClass: 'text-signal',
    bgClass: 'bg-orange-50',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Hero stats
// ─────────────────────────────────────────────────────────────────────────────

export const heroStats: HeroStat[] = [
  { label: 'Guided tracks', value: '5' },
  { label: 'Algorithm lessons', value: '50+' },
  { label: 'Browser-first', value: '0 install' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Algorithm lesson cards (landing)
// ─────────────────────────────────────────────────────────────────────────────

export const lessonCards: LessonCard[] = [
  {
    title: 'Bubble Sort Visualized',
    description: 'Watch every comparison and swap happen frame by frame. See why adjacent elements bubble to the top.',
    duration: '15 min',
    concept: 'Sorting Algorithm',
    accentColor: 'text-wave',
    accentBg: 'bg-blue-50',
    lessonId: 'bubble-sort',
  },
  {
    title: 'Binary Search in Action',
    description: 'See the search space cut in half with each step. Understand O(log n) by watching it happen live.',
    duration: '12 min',
    concept: 'Search Algorithm',
    accentColor: 'text-leaf',
    accentBg: 'bg-green-50',
    lessonId: 'binary-search',
  },
  {
    title: 'Loop Explorer',
    description: 'Understand how loop iterations update shared state. See score accumulate frame by frame.',
    duration: '12 min',
    concept: 'Loops & State',
    accentColor: 'text-signal',
    accentBg: 'bg-orange-50',
    lessonId: 'loop-explorer',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Playground lessons — full with complexity, approach, why on each frame
// ─────────────────────────────────────────────────────────────────────────────

export const playgroundLessons: PlaygroundLesson[] = [
  // ── Loop Explorer ──────────────────────────────────────────────────────────
  {
    id: 'loop-explorer',
    title: 'Loop Explorer',
    level: 'Beginner',
    levelColor: 'text-wave',
    duration: '12 min',
    objective: 'Understand how loop iterations update shared state.',
    prompt: 'Modify the list to produce a final score of 20. Which iteration changed the total most?',
    hint: 'Watch the score cell after each loop pass and compare how much each step adds.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    useCases: ['Summing totals in a shopping cart', 'Accumulating sensor readings', 'Running totals in financial reports'],
    approach:
      'We use a single accumulator variable (score) and iterate through a list once. This is the accumulator pattern — one of the most fundamental patterns in programming. O(n) time because we visit each element exactly once, O(1) space because we only need one extra variable regardless of list size.',
    output: ['score: 2', 'score: 6', 'score: 12', 'final: 12'],
    starterCode: `score = 0
steps = [2, 4, 6]

for step in steps:
    score = score + step
    print("score:", score)

print("final:", score)
`,
    executionFrames: [
      {
        line: 1,
        event: 'Create score',
        summary: 'Initialize score with 0.',
        why: "We must initialize score to 0 before the loop. Python has no default numeric value — uninitialized variables cause NameError. Choosing 0 is the additive identity: adding 0 changes nothing, so it's the correct neutral starting point.",
        memory: [{ name: 'score', value: '0' }],
        output: [],
      },
      {
        line: 2,
        event: 'Load steps',
        summary: 'Store a list of incoming steps.',
        why: 'We store the data in a list so we can iterate over it with a for loop. A list is ordered and allows duplicates — perfect for a sequence of steps. Defining it before the loop means we can change the input data without touching the loop logic.',
        memory: [
          { name: 'score', value: '0' },
          { name: 'steps', value: '[2, 4, 6]' },
        ],
        output: [],
      },
      {
        line: 5,
        event: 'Iteration 1',
        summary: 'First pass: score = 0 + 2 = 2.',
        why: "The for loop automatically assigns each element to 'step' in order. We add step to score instead of reassigning because we want to accumulate — keep a running total. score = score + step is the classic accumulator update.",
        memory: [
          { name: 'score', value: '2' },
          { name: 'step', value: '2' },
          { name: 'steps', value: '[2, 4, 6]' },
        ],
        output: ['score: 2'],
      },
      {
        line: 5,
        event: 'Iteration 2',
        summary: 'Second pass: score = 2 + 4 = 6.',
        why: 'score retains its value between iterations because it was defined outside the loop. Variables inside a loop body reset each iteration; variables outside persist. This scope rule is why we defined score = 0 before the for statement.',
        memory: [
          { name: 'score', value: '6' },
          { name: 'step', value: '4' },
          { name: 'steps', value: '[2, 4, 6]' },
        ],
        output: ['score: 2', 'score: 6'],
      },
      {
        line: 5,
        event: 'Iteration 3',
        summary: 'Third pass: score = 6 + 6 = 12.',
        why: "The loop runs exactly len(steps) = 3 times. Python's for loop knows when to stop because lists have a known length. No off-by-one errors — unlike a while loop, there's no index to mismanage.",
        memory: [
          { name: 'score', value: '12' },
          { name: 'step', value: '6' },
          { name: 'steps', value: '[2, 4, 6]' },
        ],
        output: ['score: 2', 'score: 6', 'score: 12'],
      },
      {
        line: 8,
        event: 'Return output',
        summary: 'Print the final accumulated value.',
        why: 'We print outside the loop because we only want the final result once, not after every step. This separation — compute inside loop, report outside — is a clean pattern that keeps accumulation and reporting independent.',
        memory: [
          { name: 'score', value: '12' },
          { name: 'steps', value: '[2, 4, 6]' },
        ],
        output: ['score: 2', 'score: 6', 'score: 12', 'final: 12'],
      },
    ],
  },

  // ── Bubble Sort ────────────────────────────────────────────────────────────
  {
    id: 'bubble-sort',
    title: 'Bubble Sort',
    level: 'Advanced',
    levelColor: 'text-gold',
    duration: '15 min',
    objective: 'See how adjacent comparisons and swaps move larger elements toward the end each pass.',
    prompt: 'Change the array to [9, 1, 5, 3, 7]. Predict how many swaps it takes before sorted.',
    hint: 'Count the orange swap events in the timeline. Each swap moves the larger element one position right.',
    timeComplexity: 'O(n²)',
    spaceComplexity: 'O(1)',
    useCases: [
      'Teaching sorting concepts — most visual algorithm',
      'Detecting nearly-sorted arrays (early exit optimization)',
      'Embedded systems with tiny memory where O(1) space matters',
    ],
    approach:
      "Bubble sort compares every adjacent pair and swaps if out of order. After each full outer pass, the largest unsorted element is guaranteed to be in its correct final position. We use nested loops: outer controls passes (n-1 needed), inner controls comparisons (shrinks each pass because the end is already sorted). This is NOT efficient for large data — O(n²) — but it's the most visual algorithm for learning comparison-based sorting.",
    output: [
      'swap: [3, 5, 8, 1, 2]',
      'swap: [3, 5, 1, 8, 2]',
      'swap: [3, 5, 1, 2, 8]',
      'swap: [3, 1, 5, 2, 8]',
      'swap: [3, 1, 2, 5, 8]',
      'swap: [1, 3, 2, 5, 8]',
      'swap: [1, 2, 3, 5, 8]',
      'sorted: [1, 2, 3, 5, 8]',
    ],
    starterCode: `arr = [5, 3, 8, 1, 2]
n = len(arr)

for i in range(n):
    for j in range(n - i - 1):
        if arr[j] > arr[j + 1]:
            arr[j], arr[j + 1] = arr[j + 1], arr[j]
            print("swap:", arr)

print("sorted:", arr)
`,
    executionFrames: [
      {
        line: 1,
        event: 'Load array',
        summary: 'arr = [5, 3, 8, 1, 2] — 5 unsorted elements.',
        why: 'We store values in a list so we can access elements by index (arr[j], arr[j+1]). Bubble sort is an in-place algorithm — we modify this same list rather than creating a new one, which keeps space complexity O(1).',
        memory: [{ name: 'arr', value: '[5, 3, 8, 1, 2]' }],
        output: [],
      },
      {
        line: 2,
        event: 'Get length',
        summary: 'n = 5 — we need up to 4 outer passes.',
        why: 'We store n = len(arr) once instead of calling len() every iteration. This is a micro-optimization, but more importantly it makes the loop bounds readable. We need n-1 outer passes because after n-1 passes, the smallest element is guaranteed to be in position 0.',
        memory: [
          { name: 'arr', value: '[5, 3, 8, 1, 2]' },
          { name: 'n', value: '5' },
        ],
        output: [],
      },
      {
        line: 6,
        event: 'Compare [0]↔[1]',
        summary: 'arr[0]=5 > arr[1]=3 — swap needed.',
        why: "We compare arr[j] > arr[j+1] (strict greater-than) to maintain stability — equal elements don't swap, preserving their original relative order. This comparison is the core of every comparison-based sort.",
        memory: [
          { name: 'arr', value: '[5, 3, 8, 1, 2]' },
          { name: 'i', value: '0' },
          { name: 'j', value: '0' },
        ],
        output: [],
      },
      {
        line: 7,
        event: 'Swap 5 ↔ 3',
        summary: 'Python tuple swap — no temp variable needed.',
        why: "arr[j], arr[j+1] = arr[j+1], arr[j] is Python's elegant simultaneous assignment. In C you'd need a temp variable. Python evaluates the right side first as a tuple, then unpacks — so both values are captured before either is overwritten.",
        memory: [
          { name: 'arr', value: '[3, 5, 8, 1, 2]' },
          { name: 'i', value: '0' },
          { name: 'j', value: '0' },
        ],
        output: ['swap: [3, 5, 8, 1, 2]'],
      },
      {
        line: 7,
        event: 'Swap 8 ↔ 1',
        summary: "8 is bubbling right — it's the largest so far.",
        why: "Notice 8 has moved two positions right in two steps. The largest element always bubbles to the end of each pass — that's where the name 'bubble sort' comes from. After this outer pass (i=0), 8 will be in its final position.",
        memory: [
          { name: 'arr', value: '[3, 5, 1, 8, 2]' },
          { name: 'i', value: '0' },
          { name: 'j', value: '2' },
        ],
        output: ['swap: [3, 5, 8, 1, 2]', 'swap: [3, 5, 1, 8, 2]'],
      },
      {
        line: 7,
        event: 'Pass 1 done',
        summary: '8 is now in its final position at index 4.',
        why: "The inner loop runs n - i - 1 times. The '- i' is the optimization: after pass i, the last i elements are already sorted and in their final positions. No need to compare them again — this halves the total work compared to always going to the end.",
        memory: [
          { name: 'arr', value: '[3, 5, 1, 2, 8]' },
          { name: 'i', value: '0' },
          { name: 'j', value: '3' },
        ],
        output: ['swap: [3, 5, 8, 1, 2]', 'swap: [3, 5, 1, 8, 2]', 'swap: [3, 5, 1, 2, 8]'],
      },
      {
        line: 7,
        event: 'Pass 2 swaps',
        summary: '5 bubbles right. [3, 5, 1, 2, 8] → [3, 1, 2, 5, 8]',
        why: 'Each outer pass settles one more element. After pass 2, both 5 and 8 are final. The algorithm guarantees progress even in the worst case — n-1 passes always produces a sorted array.',
        memory: [
          { name: 'arr', value: '[3, 1, 2, 5, 8]' },
          { name: 'i', value: '1' },
          { name: 'j', value: '2' },
        ],
        output: ['swap: [3, 5, 8, 1, 2]', 'swap: [3, 5, 1, 8, 2]', 'swap: [3, 5, 1, 2, 8]', 'swap: [3, 1, 5, 2, 8]', 'swap: [3, 1, 2, 5, 8]'],
      },
      {
        line: 10,
        event: 'Sorted!',
        summary: 'Final sorted array: [1, 2, 3, 5, 8].',
        why: "Total comparisons: n×(n-1)/2 = 10 for n=5. This is why bubble sort is O(n²) — the number of comparisons grows quadratically. For n=1000, that's ~500,000 comparisons. Merge sort does it in ~10,000. Use bubble sort only for learning, not production.",
        memory: [
          { name: 'arr', value: '[1, 2, 3, 5, 8]' },
          { name: 'n', value: '5' },
        ],
        output: [
          'swap: [3, 5, 8, 1, 2]',
          'swap: [3, 5, 1, 8, 2]',
          'swap: [3, 5, 1, 2, 8]',
          'swap: [3, 1, 5, 2, 8]',
          'swap: [3, 1, 2, 5, 8]',
          'swap: [1, 3, 2, 5, 8]',
          'swap: [1, 2, 3, 5, 8]',
          'sorted: [1, 2, 3, 5, 8]',
        ],
      },
    ],
  },

  // ── Binary Search ──────────────────────────────────────────────────────────
  {
    id: 'binary-search',
    title: 'Binary Search',
    level: 'Intermediate',
    levelColor: 'text-leaf',
    duration: '12 min',
    objective: 'See how halving the search space each step achieves O(log n) time complexity.',
    prompt: 'Change target to 11. Predict how many steps it takes to find it.',
    hint: 'The search space halves every iteration: 7 → 4 → 2 → 1 elements. Count mid calculations.',
    timeComplexity: 'O(log n)',
    spaceComplexity: 'O(1)',
    useCases: [
      'Dictionary lookups (words are sorted)',
      'Database index traversal',
      'Finding a version that introduced a bug (git bisect)',
      'Searching a sorted leaderboard',
    ],
    approach:
      "Binary search requires a sorted array. We maintain two pointers (low, high) that define the current search space. Each iteration we check the middle element: if it matches, done; if target is larger, discard the left half; if smaller, discard the right half. This halving means we need at most ⌈log₂(n)⌉ steps. For n=1,000,000 that's only 20 comparisons — vs 500,000 average for linear search.",
    output: ['mid=3, arr[3]=7', 'target found! result: 3'],
    starterCode: `arr = [1, 3, 5, 7, 9, 11, 13]
target = 7
low, high = 0, len(arr) - 1

while low <= high:
    mid = (low + high) // 2
    print(f"mid={mid}, arr[mid]={arr[mid]}")
    if arr[mid] == target:
        print("target found! result:", mid)
        break
    elif arr[mid] < target:
        low = mid + 1
    else:
        high = mid - 1
`,
    executionFrames: [
      {
        line: 1,
        event: 'Load array',
        summary: 'Sorted array of 7 elements.',
        why: "Binary search REQUIRES a sorted array. Without sorting, the invariant breaks — we can't safely discard half the search space if we don't know which half the target is in. If the input might be unsorted, sort first (O(n log n)) then search (O(log n)).",
        memory: [{ name: 'arr', value: '[1, 3, 5, 7, 9, 11, 13]' }],
        output: [],
      },
      {
        line: 2,
        event: 'Set target',
        summary: "We're searching for 7.",
        why: "We separate the target from the array so the same function works for any search value. This is the single responsibility principle — the algorithm doesn't need to know about the specific value, only how to compare.",
        memory: [
          { name: 'arr', value: '[1, 3, 5, 7, 9, 11, 13]' },
          { name: 'target', value: '7' },
        ],
        output: [],
      },
      {
        line: 3,
        event: 'Set bounds',
        summary: 'low=0, high=6. Full array is the search space.',
        why: 'Two pointers define the active search space. low starts at 0, high at len-1 (not len) because arrays are 0-indexed. The condition low <= high (not <) ensures we check single-element windows — critical for not missing the target.',
        memory: [
          { name: 'target', value: '7' },
          { name: 'low', value: '0' },
          { name: 'high', value: '6' },
        ],
        output: [],
      },
      {
        line: 6,
        event: 'Compute mid',
        summary: 'mid = (0 + 6) // 2 = 3.',
        why: "We use integer division (//) to get the center index. Note: in languages with fixed-size integers (C, Java), (low + high) can overflow for large arrays — safer formula is low + (high - low) // 2. Python has arbitrary-precision integers so overflow isn't an issue here.",
        memory: [
          { name: 'target', value: '7' },
          { name: 'low', value: '0' },
          { name: 'high', value: '6' },
          { name: 'mid', value: '3' },
        ],
        output: [],
      },
      {
        line: 7,
        event: 'Inspect arr[3]',
        summary: 'arr[3] = 7. Printing the search state.',
        why: "This print is for learning only — production binary search wouldn't print each step. But seeing mid and arr[mid] every iteration makes the halving pattern visible. In a debugger or visualizer this is exactly the state you'd inspect.",
        memory: [
          { name: 'target', value: '7' },
          { name: 'low', value: '0' },
          { name: 'high', value: '6' },
          { name: 'mid', value: '3' },
        ],
        output: ['mid=3, arr[3]=7'],
      },
      {
        line: 8,
        event: 'Match found!',
        summary: 'arr[mid] == target. Found in 1 step!',
        why: 'We found the target on the first try because 7 is exactly the median of this array. In the best case, binary search is O(1). Average case is O(log n). We use break to exit the while loop immediately — no point continuing once found. If not using break, you could return mid inside a function.',
        memory: [
          { name: 'target', value: '7' },
          { name: 'low', value: '0' },
          { name: 'high', value: '6' },
          { name: 'mid', value: '3' },
        ],
        output: ['mid=3, arr[3]=7', 'target found! result: 3'],
      },
    ],
  },

  // ── Linear Search ─────────────────────────────────────────────────────────
  {
    id: 'linear-search',
    title: 'Linear Search',
    level: 'Beginner',
    levelColor: 'text-wave',
    duration: '8 min',
    objective: 'See how checking every element one by one finds a target — and why O(n) matters.',
    prompt: 'Change the target to a value NOT in the list. What does the algorithm return?',
    hint: 'Watch the index climb from 0 to the end. When it reaches len(arr) without a match, we return -1.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    useCases: [
      'Searching an unsorted list (e.g., names in a contact list)',
      'Finding first occurrence of a value in a stream',
      'Baseline for benchmarking faster algorithms',
    ],
    approach:
      'Linear search is the simplest possible search: start at index 0, check each element, return when found. No sorting needed. Its strength is simplicity and universality — it works on any collection. Its weakness is O(n) time: for a list of 1 million items, you might check 1 million elements. Use it when the list is small, unsorted, or searched only once.',
    output: ['checking index 0: 3', 'checking index 1: 9', 'checking index 2: 7', 'found 7 at index 2'],
    starterCode: `arr = [3, 9, 7, 1, 5]
target = 7
result = -1

for i in range(len(arr)):
    print(f"checking index {i}: {arr[i]}")
    if arr[i] == target:
        result = i
        break

print(f"found {target} at index {result}" if result != -1 else "not found")
`,
    executionFrames: [
      {
        line: 1,
        event: 'Load array',
        summary: 'arr = [3, 9, 7, 1, 5] — unsorted, 5 elements.',
        why: "The array is intentionally unsorted. Linear search doesn't require any ordering — that's its main advantage over binary search. You can call it immediately on any data without preprocessing.",
        memory: [{ name: 'arr', value: '[3, 9, 7, 1, 5]' }],
        output: [],
      },
      {
        line: 2,
        event: 'Set target',
        summary: 'We are searching for 7.',
        why: 'We separate target from the array for reusability. This pattern — data separate from the value we seek — lets us use the same code to search for any value.',
        memory: [
          { name: 'arr', value: '[3, 9, 7, 1, 5]' },
          { name: 'target', value: '7' },
        ],
        output: [],
      },
      {
        line: 3,
        event: 'Init result',
        summary: "result = -1 as 'not found' sentinel.",
        why: "We use -1 as the sentinel value for 'not found' because -1 is never a valid list index in Python (well, it's the last element, but by convention -1 means not found in search problems). This lets us check result != -1 at the end.",
        memory: [
          { name: 'arr', value: '[3, 9, 7, 1, 5]' },
          { name: 'target', value: '7' },
          { name: 'result', value: '-1' },
        ],
        output: [],
      },
      {
        line: 6,
        event: 'Check index 0',
        summary: 'arr[0] = 3 ≠ 7. Continue.',
        why: "We start at index 0 because Python lists are 0-indexed. range(len(arr)) generates [0, 1, 2, 3, 4]. We use range(len(arr)) instead of 'for item in arr' because we need the index i to record WHERE we found the target.",
        memory: [
          { name: 'arr', value: '[3, 9, 7, 1, 5]' },
          { name: 'target', value: '7' },
          { name: 'i', value: '0' },
        ],
        output: ['checking index 0: 3'],
      },
      {
        line: 6,
        event: 'Check index 1',
        summary: 'arr[1] = 9 ≠ 7. Continue.',
        why: 'No match. We move to the next element. This is the O(n) nature: in the worst case (target at the end or absent), we check every single element.',
        memory: [
          { name: 'arr', value: '[3, 9, 7, 1, 5]' },
          { name: 'target', value: '7' },
          { name: 'i', value: '1' },
        ],
        output: ['checking index 0: 3', 'checking index 1: 9'],
      },
      {
        line: 7,
        event: 'Found at index 2',
        summary: 'arr[2] = 7 == target. Match!',
        why: "We found the target at index 2. We set result = i to record the position, then break immediately — no need to check the rest of the list. This 'early exit' optimization makes the average case much better than worst case.",
        memory: [
          { name: 'arr', value: '[3, 9, 7, 1, 5]' },
          { name: 'target', value: '7' },
          { name: 'i', value: '2' },
          { name: 'result', value: '2' },
        ],
        output: ['checking index 0: 3', 'checking index 1: 9', 'checking index 2: 7', 'found 7 at index 2'],
      },
    ],
  },

  // ── Selection Sort ────────────────────────────────────────────────────────
  {
    id: 'selection-sort',
    title: 'Selection Sort',
    level: 'Intermediate',
    levelColor: 'text-leaf',
    duration: '12 min',
    objective: 'See how finding the minimum each pass guarantees a sorted prefix grows by one each time.',
    prompt: 'Try arr = [64, 25, 12, 22, 11]. Count how many swaps are made total.',
    hint: "Selection sort makes exactly n-1 swaps — one per pass. Count the 'Swap minimum' events in the timeline.",
    timeComplexity: 'O(n²)',
    spaceComplexity: 'O(1)',
    useCases: [
      'Writing to flash memory (minimizes writes — only n-1 swaps)',
      'Teaching sorting algorithms — very visual and intuitive',
      'Small datasets where code simplicity matters more than speed',
    ],
    approach:
      'Selection sort divides the array into a sorted prefix and unsorted suffix. Each pass scans the entire unsorted portion to find the minimum, then swaps it into the next sorted position. This guarantees exactly n-1 swaps — compared to bubble sort which can make O(n²) swaps. This makes it better when write operations are expensive (flash storage). Time complexity is still O(n²) for comparisons.',
    output: [
      'pass 1: [11, 64, 25, 12, 22]',
      'pass 2: [11, 12, 64, 25, 22]',
      'pass 3: [11, 12, 22, 64, 25]',
      'pass 4: [11, 12, 22, 25, 64]',
      'sorted: [11, 12, 22, 25, 64]',
    ],
    starterCode: `arr = [64, 25, 12, 22, 11]
n = len(arr)

for i in range(n - 1):
    min_idx = i
    for j in range(i + 1, n):
        if arr[j] < arr[min_idx]:
            min_idx = j
    arr[i], arr[min_idx] = arr[min_idx], arr[i]
    print(f"pass {i + 1}: {arr}")

print("sorted:", arr)
`,
    executionFrames: [
      {
        line: 1,
        event: 'Load array',
        summary: 'arr = [64, 25, 12, 22, 11] — unsorted, 5 elements.',
        why: "The classic selection sort example starts with a larger first element. This makes it easy to see the minimum 'travel' across the array on the first pass.",
        memory: [
          { name: 'arr', value: '[64, 25, 12, 22, 11]' },
          { name: 'n', value: '5' },
        ],
        output: [],
      },
      {
        line: 5,
        event: 'Start pass 1',
        summary: "Assume position 0 (64) is the minimum — we'll check if anything smaller exists.",
        why: 'We set min_idx = i (not 0) because the sorted portion grows from the left. On pass 1, i=0 and we search the entire array. On pass 2, i=1 and we skip the already-sorted index 0.',
        memory: [
          { name: 'arr', value: '[64, 25, 12, 22, 11]' },
          { name: 'i', value: '0' },
          { name: 'min_idx', value: '0' },
        ],
        output: [],
      },
      {
        line: 7,
        event: 'Found new min: 11',
        summary: 'Scanning finds 11 at index 4 as the true minimum.',
        why: 'The inner loop scans from i+1 to n-1. Each time it finds a value smaller than the current minimum, it updates min_idx. We track the INDEX (not the value) so we know where to swap. Using index instead of value handles duplicate elements correctly.',
        memory: [
          { name: 'arr', value: '[64, 25, 12, 22, 11]' },
          { name: 'i', value: '0' },
          { name: 'min_idx', value: '4' },
        ],
        output: [],
      },
      {
        line: 9,
        event: 'Swap min to front',
        summary: 'Swap arr[0]=64 with arr[4]=11. Pass 1 complete.',
        why: "After the inner loop, min_idx points to the smallest element in the unsorted portion. One swap places it at position i. This is selection sort's key advantage: exactly ONE swap per pass, regardless of how disordered the data is.",
        memory: [
          { name: 'arr', value: '[11, 25, 12, 22, 64]' },
          { name: 'i', value: '0' },
          { name: 'min_idx', value: '4' },
        ],
        output: ['pass 1: [11, 25, 12, 22, 64]'],
      },
      {
        line: 9,
        event: 'Pass 2: swap 12',
        summary: 'Min of [25,12,22,64] is 12 at index 2. Swap to position 1.',
        why: 'Pass 2 starts at i=1, assuming index 0 is already sorted. The sorted prefix [11] is untouched forever. This is the invariant: after pass k, the first k elements are sorted and final.',
        memory: [
          { name: 'arr', value: '[11, 12, 25, 22, 64]' },
          { name: 'i', value: '1' },
          { name: 'min_idx', value: '2' },
        ],
        output: ['pass 1: [11, 25, 12, 22, 64]', 'pass 2: [11, 12, 25, 22, 64]'],
      },
      {
        line: 12,
        event: 'Sorted!',
        summary: '4 passes, exactly 4 swaps. Array fully sorted.',
        why: "Selection sort always makes exactly n-1 passes and at most n-1 swaps. The outer loop runs range(n-1) — not range(n) — because after placing n-1 elements, the last one is automatically in the correct position. Total comparisons: n(n-1)/2 = 10 for n=5. Same as bubble sort's comparisons but far fewer swaps.",
        memory: [
          { name: 'arr', value: '[11, 12, 22, 25, 64]' },
          { name: 'n', value: '5' },
        ],
        output: [
          'pass 1: [11, 25, 12, 22, 64]',
          'pass 2: [11, 12, 25, 22, 64]',
          'pass 3: [11, 12, 22, 25, 64]',
          'pass 4: [11, 12, 22, 25, 64]',
          'sorted: [11, 12, 22, 25, 64]',
        ],
      },
    ],
  },

  // ── Factorial ─────────────────────────────────────────────────────────────
  {
    id: 'factorial',
    title: 'Factorial (Iterative)',
    level: 'Beginner',
    levelColor: 'text-wave',
    duration: '6 min',
    objective: 'Understand the accumulator multiplication pattern and why 0! equals 1.',
    prompt: 'Compute 10!. What happens if you pass 0? Why does 0! = 1 make mathematical sense?',
    hint: "The identity for multiplication is 1 — multiplying by 1 changes nothing. That's why result starts at 1, not 0.",
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    useCases: [
      'Counting permutations (how many ways to arrange n items)',
      'Combinatorics in probability calculations',
      'Denominator in nCr and nPr formulas',
    ],
    approach:
      "We use the multiplicative accumulator pattern: result starts at 1 (the identity for multiplication), then we multiply each integer from 1 to n in sequence. Iterative is preferred over recursive for this because it uses O(1) space — no call stack growth — and avoids Python's recursion limit.",
    output: ['step 1: 1 × 1 = 1', 'step 2: 1 × 2 = 2', 'step 3: 2 × 3 = 6', 'step 4: 6 × 4 = 24', '5! = 120'],
    starterCode: `n = 5
result = 1

for i in range(1, n + 1):
    result = result * i
    print(f"step {i}: {result // i} × {i} = {result}")

print(f"{n}! = {result}")
`,
    executionFrames: [
      {
        line: 1,
        event: 'Set n',
        summary: 'Computing 5! = 5 × 4 × 3 × 2 × 1 = 120.',
        why: "We choose 5 as a demonstration because it's small enough to trace fully but large enough to show how the result grows. The mathematical definition: n! = n × (n-1) × ... × 2 × 1.",
        memory: [{ name: 'n', value: '5' }],
        output: [],
      },
      {
        line: 2,
        event: 'Init result',
        summary: 'result = 1, the multiplicative identity.',
        why: 'We start with 1, NOT 0. If we started with 0, every product would be 0 (anything × 0 = 0). The multiplicative identity is 1: anything × 1 = itself. This mirrors how addition accumulators start at 0 (the additive identity).',
        memory: [
          { name: 'n', value: '5' },
          { name: 'result', value: '1' },
        ],
        output: [],
      },
      {
        line: 5,
        event: 'Multiply by 1',
        summary: 'result = 1 × 1 = 1. Step 1 done.',
        why: 'range(1, n+1) generates [1, 2, 3, 4, 5] — we include n (hence n+1 as the stop) and start at 1, not 0. Multiplying by 0 would zero out the result. Starting at 1 is redundant but makes the loop symmetric.',
        memory: [
          { name: 'n', value: '5' },
          { name: 'result', value: '1' },
          { name: 'i', value: '1' },
        ],
        output: ['step 1: 1 × 1 = 1'],
      },
      {
        line: 5,
        event: 'Multiply by 2',
        summary: 'result = 1 × 2 = 2.',
        why: 'The accumulator pattern: result = result * i. We update result in-place each iteration. The current result becomes the left operand for the next multiplication — exactly like the mathematical definition n! = n × (n-1)!.',
        memory: [
          { name: 'n', value: '5' },
          { name: 'result', value: '2' },
          { name: 'i', value: '2' },
        ],
        output: ['step 1: 1 × 1 = 1', 'step 2: 1 × 2 = 2'],
      },
      {
        line: 5,
        event: 'Multiply by 3→5',
        summary: '2×3=6, 6×4=24, 24×5=120.',
        why: 'The result grows fast — this is the nature of factorial. n=5 gives 120; n=20 gives 2,432,902,008,176,640,000. Python handles arbitrarily large integers natively, so factorial never overflows in Python unlike in C/Java.',
        memory: [
          { name: 'n', value: '5' },
          { name: 'result', value: '120' },
          { name: 'i', value: '5' },
        ],
        output: ['step 1: 1 × 1 = 1', 'step 2: 1 × 2 = 2', 'step 3: 2 × 3 = 6', 'step 4: 6 × 4 = 24', 'step 5: 24 × 5 = 120'],
      },
      {
        line: 8,
        event: 'Print result',
        summary: '5! = 120.',
        why: "We print outside the loop because we only want the final answer once. This clean separation — compute inside, report outside — is the accumulator pattern's best practice.",
        memory: [
          { name: 'n', value: '5' },
          { name: 'result', value: '120' },
        ],
        output: ['step 1: 1 × 1 = 1', 'step 2: 1 × 2 = 2', 'step 3: 2 × 3 = 6', 'step 4: 6 × 4 = 24', 'step 5: 24 × 5 = 120', '5! = 120'],
      },
    ],
  },

  // ── Fibonacci Iterative ───────────────────────────────────────────────────
  {
    id: 'fibonacci-iterative',
    title: 'Fibonacci (Iterative)',
    level: 'Beginner',
    levelColor: 'text-wave',
    duration: '8 min',
    objective: 'See the rolling-variable pattern and why O(1) space beats recursion for Fibonacci.',
    prompt: 'Change n to 10 and trace the sequence. Why do we only need two variables — not the whole sequence?',
    hint: 'Each new Fibonacci number only depends on the previous two. We never look back further — so we only keep two.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    useCases: [
      "Nature's growth patterns (spirals, branching)",
      'Financial models and golden ratio approximations',
      'Memoization tutorial baseline (compare recursive version)',
    ],
    approach:
      'We use two rolling variables (a, b) that always hold the last two Fibonacci numbers. Each step: new value = a + b, then shift — b becomes the old a, a becomes the new value. This is O(1) space because we only ever need two variables, regardless of n. The recursive approach uses O(n) stack space and O(2ⁿ) time without memoization.',
    output: ['F(1) = 0', 'F(2) = 1', 'F(3) = 1', 'F(4) = 2', 'F(5) = 3', 'F(6) = 5', 'F(7) = 8'],
    starterCode: `n = 7
a, b = 0, 1

for i in range(1, n + 1):
    print(f"F({i}) = {a}")
    a, b = b, a + b

print(f"The {n}th Fibonacci number is:", a)
`,
    executionFrames: [
      {
        line: 1,
        event: 'Set n',
        summary: 'Compute first 7 Fibonacci numbers.',
        why: 'The Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21... Each number is the sum of the previous two. We choose n=7 to show enough of the sequence to see the pattern clearly.',
        memory: [{ name: 'n', value: '7' }],
        output: [],
      },
      {
        line: 2,
        event: 'Init a, b',
        summary: 'a=0 (F₁), b=1 (F₂) — the two seeds.',
        why: "The Fibonacci sequence is defined by two starting values: F(1)=0, F(2)=1. Every subsequent number is derived from these. Python's tuple assignment a, b = 0, 1 initialises both in one line — clean and explicit.",
        memory: [
          { name: 'a', value: '0' },
          { name: 'b', value: '1' },
          { name: 'n', value: '7' },
        ],
        output: [],
      },
      {
        line: 5,
        event: 'Print F(1)=0',
        summary: 'Current a=0 is F(1).',
        why: "We print a BEFORE updating it because a holds the current Fibonacci number for this iteration. If we updated first, we'd print the wrong value.",
        memory: [
          { name: 'a', value: '0' },
          { name: 'b', value: '1' },
          { name: 'i', value: '1' },
        ],
        output: ['F(1) = 0'],
      },
      {
        line: 6,
        event: 'Roll: a=1, b=1',
        summary: 'a, b = b, a+b → a=1, b=0+1=1.',
        why: 'The simultaneous assignment a, b = b, a+b is the heart of this algorithm. Python evaluates the right side as a tuple (b, a+b) BEFORE any assignment happens — so both old values are captured simultaneously. This avoids needing a temp variable.',
        memory: [
          { name: 'a', value: '1' },
          { name: 'b', value: '1' },
          { name: 'i', value: '1' },
        ],
        output: ['F(1) = 0', 'F(2) = 1'],
      },
      {
        line: 6,
        event: 'Roll: a=1, b=2',
        summary: 'a=1 (F₃), b=1+1=2 (next).',
        why: 'After two steps, a holds F(3)=1, b holds F(4)=2. The rolling window always contains [current, next]. We never store the whole sequence — just two numbers. This is why space complexity is O(1).',
        memory: [
          { name: 'a', value: '1' },
          { name: 'b', value: '2' },
          { name: 'i', value: '3' },
        ],
        output: ['F(1) = 0', 'F(2) = 1', 'F(3) = 1', 'F(4) = 2'],
      },
      {
        line: 8,
        event: 'Final: F(7)=8',
        summary: 'After 7 iterations, a = 8.',
        why: 'a holds the 7th Fibonacci number. We print after the loop because the loop runs n times, printing F(1) through F(n). The rolling pattern means after the loop, a is always the nth Fibonacci number.',
        memory: [
          { name: 'a', value: '8' },
          { name: 'n', value: '7' },
        ],
        output: ['F(1) = 0', 'F(2) = 1', 'F(3) = 1', 'F(4) = 2', 'F(5) = 3', 'F(6) = 5', 'F(7) = 8'],
      },
    ],
  },

  // ── Stack Operations ──────────────────────────────────────────────────────
  {
    id: 'stack-ops',
    title: 'Stack Operations',
    level: 'Intermediate',
    levelColor: 'text-leaf',
    duration: '10 min',
    objective: 'See LIFO in action — push, pop, and peek on a stack backed by a Python list.',
    prompt: 'Add two more pushes after the pops and observe how the stack evolves. What is the top after all operations?',
    hint: "After each operation watch the 'stack' memory card. The rightmost element is always the top.",
    timeComplexity: 'O(1) per operation',
    spaceComplexity: 'O(n)',
    useCases: [
      "Function call stack (Python's own execution uses a stack)",
      'Undo/redo in editors',
      'Browser back/forward history',
      'Balanced parentheses checking',
    ],
    approach:
      "A stack is a LIFO (Last In, First Out) data structure. In Python, a list is the natural stack implementation: append() for push (add to top) and pop() for pop (remove from top) are both O(1) amortized. We avoid pop(0) or insert(0) which are O(n). The 'top' is always the last element — index -1.",
    output: [
      'push 10 → [10]',
      'push 20 → [10, 20]',
      'push 30 → [10, 20, 30]',
      'peek: 30 (top)',
      'pop: 30 → [10, 20]',
      'pop: 20 → [10]',
      'top is now: 10',
    ],
    starterCode: `stack = []

def push(val):
    stack.append(val)
    print(f"push {val} → {stack}")

def pop():
    if stack:
        val = stack.pop()
        print(f"pop: {val} → {stack}")
        return val

def peek():
    if stack:
        print(f"peek: {stack[-1]} (top)")
        return stack[-1]

push(10)
push(20)
push(30)
peek()
pop()
pop()
print("top is now:", stack[-1])
`,
    executionFrames: [
      {
        line: 1,
        event: 'Init stack',
        summary: 'Empty list as the backing store.',
        why: "Python's list is a perfect stack because append() adds to the end (top) in O(1) and pop() removes from the end in O(1). No special class needed. The convention: index -1 is always the top.",
        memory: [{ name: 'stack', value: '[]' }],
        output: [],
      },
      {
        line: 18,
        event: 'push(10)',
        summary: 'stack.append(10) → [10].',
        why: 'append() adds to the END of the list, which is the top of the stack. This is O(1) amortized — Python over-allocates memory for lists so most appends are instant.',
        memory: [{ name: 'stack', value: '[10]' }],
        output: ['push 10 → [10]'],
      },
      {
        line: 19,
        event: 'push(20)',
        summary: 'stack.append(20) → [10, 20].',
        why: "20 is on top of 10. In a real stack visualization, you'd see 10 at the bottom and 20 above it. The list index mirrors this — lower indices = bottom, higher indices = top.",
        memory: [{ name: 'stack', value: '[10, 20]' }],
        output: ['push 10 → [10]', 'push 20 → [10, 20]'],
      },
      {
        line: 20,
        event: 'push(30)',
        summary: 'stack.append(30) → [10, 20, 30].',
        why: 'Three elements. Top is 30. The stack represents history: 10 was pushed first, then 20, then 30. LIFO means 30 will be retrieved first on pop.',
        memory: [{ name: 'stack', value: '[10, 20, 30]' }],
        output: ['push 10 → [10]', 'push 20 → [10, 20]', 'push 30 → [10, 20, 30]'],
      },
      {
        line: 21,
        event: 'peek()',
        summary: 'stack[-1] = 30. Non-destructive read.',
        why: "peek() reads the top without removing it. stack[-1] is Python's way to access the last element. This is the key difference from pop: peek lets you see the top while leaving the stack unchanged.",
        memory: [{ name: 'stack', value: '[10, 20, 30]' }],
        output: ['push 10 → [10]', 'push 20 → [10, 20]', 'push 30 → [10, 20, 30]', 'peek: 30 (top)'],
      },
      {
        line: 22,
        event: 'pop() → 30',
        summary: 'Remove and return 30. Stack is now [10, 20].',
        why: 'list.pop() removes the LAST element — O(1). This is LIFO: last pushed (30) is first popped. Note: list.pop(0) would be O(n) because it shifts all elements. Always pop from the end for stack behavior.',
        memory: [{ name: 'stack', value: '[10, 20]' }],
        output: ['push 10 → [10]', 'push 20 → [10, 20]', 'push 30 → [10, 20, 30]', 'peek: 30 (top)', 'pop: 30 → [10, 20]'],
      },
      {
        line: 24,
        event: 'Top is 10',
        summary: 'After two pops, only 10 remains.',
        why: "We print stack[-1] directly instead of calling peek() to show that the underlying list is always accessible. In production code you'd use the peek() function for encapsulation, but Python doesn't enforce this — the raw list is always available.",
        memory: [{ name: 'stack', value: '[10]' }],
        output: [
          'push 10 → [10]',
          'push 20 → [10, 20]',
          'push 30 → [10, 20, 30]',
          'peek: 30 (top)',
          'pop: 30 → [10, 20]',
          'pop: 20 → [10]',
          'top is now: 10',
        ],
      },
    ],
  },

  // ── Two Sum ───────────────────────────────────────────────────────────────
  {
    id: 'two-sum',
    title: 'Two Sum',
    level: 'Advanced',
    levelColor: 'text-gold',
    duration: '12 min',
    objective: 'See how a hash map turns an O(n²) brute-force problem into an O(n) single-pass solution.',
    prompt: 'Change target to 11. Which pair adds up to 11? Can there be multiple valid pairs?',
    hint: "For each number, we ask: 'does target - this_number already exist in seen?' The hash map answers that in O(1).",
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    useCases: [
      'Most common LeetCode interview question (#1 most submitted)',
      'Financial: find two transactions that sum to a target amount',
      'Two-factor authentication: finding matching token pairs',
    ],
    approach:
      'Brute force: check every pair → O(n²). Hash map: for each number, compute its complement (target - num), check if the complement was seen before. If yes, done. If no, store current number in the hash map. One pass, O(1) lookup per element → O(n) total. We trade O(n) space for O(n²) → O(n) time improvement.',
    output: ['i=0, num=2, need=7, seen={}', 'i=1, num=7, need=2, seen={2:0}', 'found! indices [0, 1] → values [2, 7]'],
    starterCode: `nums = [2, 7, 11, 15]
target = 9
seen = {}

for i, num in enumerate(nums):
    complement = target - num
    print(f"i={i}, num={num}, need={complement}, seen={seen}")
    if complement in seen:
        print(f"found! indices [{seen[complement]}, {i}] → values [{complement}, {num}]")
        break
    seen[num] = i
`,
    executionFrames: [
      {
        line: 1,
        event: 'Load nums',
        summary: 'nums = [2, 7, 11, 15], target = 9.',
        why: 'The classic example: 2 + 7 = 9. We need to find which two indices produce this sum. The naive approach would be a nested loop checking every pair — O(n²).',
        memory: [
          { name: 'nums', value: '[2, 7, 11, 15]' },
          { name: 'target', value: '9' },
          { name: 'seen', value: '{}' },
        ],
        output: [],
      },
      {
        line: 5,
        event: 'Check num=2',
        summary: 'complement = 9 - 2 = 7. Is 7 in seen? No.',
        why: "We compute complement = target - num. This is the key insight: we don't need to search for 'which number pairs with 2?' — we calculate it. The complement of 2 given target 9 is 7. Then we ask: have I seen 7 before? We haven't yet, so store 2.",
        memory: [
          { name: 'num', value: '2' },
          { name: 'complement', value: '7' },
          { name: 'seen', value: '{}' },
        ],
        output: ['i=0, num=2, need=7, seen={}'],
      },
      {
        line: 10,
        event: 'Store 2 → index 0',
        summary: "seen = {2: 0}. We've visited 2 at index 0.",
        why: "We store seen[num] = i (value → index). When we later find 7, we can instantly report that 7's complement (2) is at index 0. This is the hash map trade: O(n) space buys us O(1) complement lookups.",
        memory: [
          { name: 'num', value: '2' },
          { name: 'seen', value: '{2: 0}' },
        ],
        output: ['i=0, num=2, need=7, seen={}'],
      },
      {
        line: 5,
        event: 'Check num=7',
        summary: 'complement = 9 - 7 = 2. Is 2 in seen? YES!',
        why: "For num=7, complement = 2. We check: is 2 in the seen dictionary? O(1) hash lookup — yes! We immediately know the answer: index seen[2]=0 and current index i=1. Without the hash map, we'd have had to search back through all previous numbers.",
        memory: [
          { name: 'num', value: '7' },
          { name: 'complement', value: '2' },
          { name: 'seen', value: '{2: 0}' },
        ],
        output: ['i=0, num=2, need=7, seen={}', 'i=1, num=7, need=2, seen={2: 0}'],
      },
      {
        line: 9,
        event: 'Answer found!',
        summary: 'Pair [2, 7] at indices [0, 1]. Done in 2 iterations.',
        why: 'We found the answer after checking only 2 elements (not all 4). For n elements, hash map two sum runs in at most n iterations — O(n). The break exits immediately. No need to continue scanning once the pair is found.',
        memory: [
          { name: 'nums', value: '[2, 7, 11, 15]' },
          { name: 'target', value: '9' },
          { name: 'seen', value: '{2: 0}' },
        ],
        output: ['i=0, num=2, need=7, seen={}', 'i=1, num=7, need=2, seen={2: 0}', 'found! indices [0, 1] → values [2, 7]'],
      },
    ],
  },

  // ── Valid Parentheses ─────────────────────────────────────────────────────
  {
    id: 'valid-parentheses',
    title: 'Valid Parentheses',
    level: 'Advanced',
    levelColor: 'text-gold',
    duration: '10 min',
    objective: 'See how a stack naturally models nested bracket matching without any complex logic.',
    prompt: "Try s = '({)}'. Why does this fail even though the counts are equal?",
    hint: "The stack checks ORDER, not just count. '({)}' fails because ) tries to close ( but the top of the stack is {.",
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    useCases: [
      'Code editor syntax checking (unmatched brackets)',
      'XML/HTML tag validation',
      'Math expression evaluation',
      'Compiler tokenizer verification',
    ],
    approach:
      'A stack is the natural data structure for matching nested brackets. Rule: push every opening bracket. When we see a closing bracket, check if the top of the stack is its matching opener — if not, invalid. At the end, the stack must be empty (every opener was closed). We use a hash map for the bracket pairs to keep the logic clean.',
    output: ["( → push, stack=['(']", "( → push, stack=['(', '(']", ") → pop '(' ✓, stack=['(']", ") → pop '(' ✓, stack=[]", 'valid: True'],
    starterCode: `s = "(())"
stack = []
pairs = {")": "(", "]": "[", "}": "{"}

for ch in s:
    if ch in "([{":
        stack.append(ch)
        print(f"{ch} → push, stack={stack}")
    elif ch in ")]}":
        if not stack or stack[-1] != pairs[ch]:
            print("invalid!")
            break
        stack.pop()
        print(f"{ch} → pop '{pairs[ch]}' ✓, stack={stack}")

print("valid:", len(stack) == 0)
`,
    executionFrames: [
      {
        line: 1,
        event: 'Set input',
        summary: 's = "(())" — nested valid parentheses.',
        why: "We test with a nested case to show the stack's ability to handle nesting. Simple counting (open count == close count) would also say this is valid, but the stack approach handles cases like '({)}' correctly.",
        memory: [
          { name: 's', value: '"(())"' },
          { name: 'stack', value: '[]' },
        ],
        output: [],
      },
      {
        line: 3,
        event: 'Build pairs map',
        summary: 'Map each closer to its expected opener.',
        why: "The pairs dictionary {')': '(', ...} maps closing brackets to their matching openers. When we see ')', we look up pairs[')'] = '(' and compare with the stack top. This avoids a chain of if/elif and handles all bracket types cleanly.",
        memory: [
          { name: 'stack', value: '[]' },
          { name: 'pairs', value: "{')':'(', ']':'[', '}':'{'}" },
        ],
        output: [],
      },
      {
        line: 7,
        event: "Push first '('",
        summary: 'Opening bracket — push onto stack.',
        why: "Any opening bracket gets pushed immediately. We don't know yet if it will be matched — we'll find out when we encounter the corresponding closing bracket. The stack remembers the sequence of unclosed openers.",
        memory: [
          { name: 'stack', value: "['(']" },
          { name: 'ch', value: "'('" },
        ],
        output: ["( → push, stack=['(']"],
      },
      {
        line: 7,
        event: "Push second '('",
        summary: 'Another opener — stack grows.',
        why: "Nesting! We now have two unclosed openers. The stack tracks this perfectly — the inner '(' is on top, which means the inner bracket must be closed before the outer one. This is exactly LIFO behavior matching the nesting requirement.",
        memory: [
          { name: 'stack', value: "['(', '(']" },
          { name: 'ch', value: "'('" },
        ],
        output: ["( → push, stack=['(']", "( → push, stack=['(', '(']"],
      },
      {
        line: 13,
        event: "Pop for first ')'",
        summary: "stack[-1] = '(' matches pairs[')'] = '('. Valid.",
        why: "We see ')'. Its expected opener is pairs[')'] = '('. We check the stack top: it IS '('. Match confirmed — pop it. The stack now has only the outer '(' remaining. Order is preserved.",
        memory: [
          { name: 'stack', value: "['(']" },
          { name: 'ch', value: "')'" },
        ],
        output: ["( → push, stack=['(']", "( → push, stack=['(', '(']", ") → pop '(' ✓, stack=['(']"],
      },
      {
        line: 15,
        event: 'Stack empty — valid!',
        summary: 'All brackets matched. len(stack) == 0 → True.',
        why: 'After processing all characters, an empty stack means every opener was properly closed in the right order. A non-empty stack would mean unclosed openers remain. len(stack) == 0 is the final validity check.',
        memory: [{ name: 'stack', value: '[]' }],
        output: ["( → push, stack=['(']", "( → push, stack=['(', '(']", ") → pop '(' ✓, stack=['(']", ") → pop '(' ✓, stack=[]", 'valid: True'],
      },
    ],
  },

  // ── Variables & Types ──────────────────────────────────────────────────────
  {
    id: 'variables-types',
    title: 'Variables & Types',
    level: 'Foundation',
    levelColor: 'text-sky-400',
    duration: '8 min',
    objective: 'See how Python binds names to objects in memory.',
    prompt: 'Change x to a float and y to a boolean. What does type() return?',
    hint: 'Python shows the type right after assignment — watch the Memory View update.',
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(1)',
    useCases: ['Understanding mutability in data pipelines', 'Debugging type errors', 'API input validation'],
    approach:
      'Each assignment binds a name to a new object in memory. Python is dynamically typed — the variable holds a reference, not the value itself.',
    output: [],
    starterCode: `x = 42
y = "hello"
z = True

print(type(x))
print(type(y))
print(type(z))
print(x, y, z)
`,
    executionFrames: [
      {
        line: 1,
        event: 'Assign int',
        summary: "x = 42 creates an integer object and binds name 'x' to it.",
        why: 'Python stores every value as an object on the heap. The variable x is just a label pointing to the object 42. This makes reassignment cheap — you just point the label elsewhere.',
        memory: [{ name: 'x', value: '42' }],
        output: [],
      },
      {
        line: 2,
        event: 'Assign str',
        summary: "y = 'hello' creates a string object. Strings are immutable sequences.",
        why: "Strings in Python are immutable — you can't change individual characters. Any 'modification' creates a new string object. That's why concatenation inside loops is expensive.",
        memory: [
          { name: 'x', value: '42' },
          { name: 'y', value: "'hello'" },
        ],
        output: [],
      },
      {
        line: 3,
        event: 'Assign bool',
        summary: 'z = True. Booleans are a subtype of int in Python — True == 1.',
        why: "Python's bool inherits from int. This means True + True == 2. It's a historical decision that enables compact conditional math but can cause subtle bugs if types aren't validated.",
        memory: [
          { name: 'x', value: '42' },
          { name: 'y', value: "'hello'" },
          { name: 'z', value: 'True' },
        ],
        output: [],
      },
      {
        line: 5,
        event: 'Print type(x)',
        summary: "type(x) returns <class 'int'>. Python dynamically resolves the type at runtime.",
        why: "type() introspects the object's class at runtime. No declaration needed — Python figures it out from the assigned value. This is called dynamic typing.",
        memory: [
          { name: 'x', value: '42' },
          { name: 'y', value: "'hello'" },
          { name: 'z', value: 'True' },
        ],
        output: ["<class 'int'>"],
      },
      {
        line: 6,
        event: 'Print type(y)',
        summary: "type(y) returns <class 'str'>.",
        why: 'The same type() function works on any Python object. You can use isinstance(y, str) for safer type checks in production code — it handles inheritance correctly.',
        memory: [
          { name: 'x', value: '42' },
          { name: 'y', value: "'hello'" },
          { name: 'z', value: 'True' },
        ],
        output: ["<class 'int'>", "<class 'str'>"],
      },
      {
        line: 8,
        event: 'Print all vars',
        summary: 'print(x, y, z) outputs all three values separated by spaces.',
        why: "print() with multiple arguments inserts a space separator by default (sep=' '). You can change sep='' or sep='\\n' to control formatting.",
        memory: [
          { name: 'x', value: '42' },
          { name: 'y', value: "'hello'" },
          { name: 'z', value: 'True' },
        ],
        output: ["<class 'int'>", "<class 'str'>", "<class 'bool'>", '42 hello True'],
      },
    ],
  },

  // ── If / Else ──────────────────────────────────────────────────────────────
  {
    id: 'if-else',
    title: 'If / Else Conditions',
    level: 'Foundation',
    levelColor: 'text-sky-400',
    duration: '8 min',
    objective: 'Watch execution jump between branches based on truthiness.',
    prompt: 'Change score to 45. Which branch runs? What if score equals exactly 50?',
    hint: "Watch the highlighted line jump — it skips the branch that doesn't match.",
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(1)',
    useCases: ['Input validation in web forms', 'Business rule engines', 'Access control logic'],
    approach: 'Python evaluates the condition expression and jumps to the matching branch. Only one branch executes per if/elif/else chain.',
    output: [],
    starterCode: `score = 75

if score >= 90:
    grade = "A"
elif score >= 70:
    grade = "B"
elif score >= 50:
    grade = "C"
else:
    grade = "F"

print("Grade:", grade)
`,
    executionFrames: [
      {
        line: 1,
        event: 'Set score',
        summary: 'score = 75. This value will drive which branch executes.',
        why: 'The condition check will compare score against each threshold in order. Python evaluates conditions top-to-bottom and takes the first true branch.',
        memory: [{ name: 'score', value: '75' }],
        output: [],
      },
      {
        line: 3,
        event: 'Check >= 90',
        summary: '75 >= 90 → False. This branch is skipped.',
        why: 'Python short-circuits here — since 75 < 90, execution immediately moves to the next elif. The code inside this if block is never touched.',
        memory: [{ name: 'score', value: '75' }],
        output: [],
      },
      {
        line: 5,
        event: 'Check >= 70',
        summary: '75 >= 70 → True! Execution enters this branch.',
        why: "The first True condition wins. Python doesn't check the remaining elif/else branches even if they would also be True. This top-down priority is fundamental to if/elif/else design.",
        memory: [{ name: 'score', value: '75' }],
        output: [],
      },
      {
        line: 6,
        event: 'Assign grade B',
        summary: "grade = 'B'. This branch body runs because the condition was True.",
        why: 'Only the body of the matched branch executes. The elif score >= 50 and else branches are completely skipped — Python jumps straight to the end of the if/elif/else block.',
        memory: [
          { name: 'score', value: '75' },
          { name: 'grade', value: "'B'" },
        ],
        output: [],
      },
      {
        line: 12,
        event: 'Print result',
        summary: "print outputs 'Grade: B'.",
        why: 'Execution resumes after the entire if/elif/else block. The variable grade holds the value set by the matched branch.',
        memory: [
          { name: 'score', value: '75' },
          { name: 'grade', value: "'B'" },
        ],
        output: ['Grade: B'],
      },
    ],
  },

  // ── While Loop ─────────────────────────────────────────────────────────────
  {
    id: 'while-loop',
    title: 'While Loops',
    level: 'Foundation',
    levelColor: 'text-sky-400',
    duration: '10 min',
    objective: 'See how condition-driven repetition works step by step.',
    prompt: 'Change the while condition to n < 8. How many iterations run?',
    hint: 'Watch the condition check before each iteration — when it becomes False, the loop exits.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    useCases: ['Polling until a server responds', 'Game loops', 'Reading input until valid'],
    approach:
      'A while loop re-evaluates its condition before every iteration. When the condition is False, execution falls through to after the loop.',
    output: [],
    starterCode: `n = 1
total = 0

while n <= 5:
    total = total + n
    print(f"n={n}, total={total}")
    n = n + 1

print("Final total:", total)
`,
    executionFrames: [
      {
        line: 1,
        event: 'Init vars',
        summary: 'n = 1, total = 0. Both loop counter and accumulator are set.',
        why: 'We need two variables: n drives the loop condition, total accumulates the sum. Initialising before the loop is essential — without it Python raises NameError.',
        memory: [
          { name: 'n', value: '1' },
          { name: 'total', value: '0' },
        ],
        output: [],
      },
      {
        line: 4,
        event: 'Check n <= 5',
        summary: '1 <= 5 → True. Entering first iteration.',
        why: 'The condition is checked before the loop body runs — this is called a pre-test loop. If the initial value made this False, the body would never execute.',
        memory: [
          { name: 'n', value: '1' },
          { name: 'total', value: '0' },
        ],
        output: [],
      },
      {
        line: 5,
        event: 'Accumulate',
        summary: 'total = 0 + 1 = 1. The sum grows with each pass.',
        why: 'The accumulator pattern: total starts at 0 (identity for addition) and we add each term. This is O(1) space regardless of n — we never store all values at once.',
        memory: [
          { name: 'n', value: '1' },
          { name: 'total', value: '1' },
        ],
        output: ['n=1, total=1'],
      },
      {
        line: 7,
        event: 'Increment n',
        summary: 'n = 1 + 1 = 2. Advancing the counter prevents an infinite loop.',
        why: 'Without n = n + 1 the condition n <= 5 would stay True forever. Every while loop must have a way to eventually make its condition False — this is the exit guarantee.',
        memory: [
          { name: 'n', value: '2' },
          { name: 'total', value: '1' },
        ],
        output: ['n=1, total=1'],
      },
      {
        line: 4,
        event: 'Re-check condition',
        summary: '2 <= 5 → True. Continuing. (Iterations 2–5 run similarly.)',
        why: 'The condition is checked every time control returns to the top of the loop. This is what makes while fundamentally different from a for loop — the exit is checked dynamically.',
        memory: [
          { name: 'n', value: '2' },
          { name: 'total', value: '1' },
        ],
        output: ['n=1, total=1', 'n=2, total=3'],
      },
      {
        line: 9,
        event: 'Loop exits',
        summary: 'After n reaches 6, condition 6 <= 5 is False. Loop ends. Final total = 15.',
        why: '1+2+3+4+5 = 15. The Gaussian sum formula n(n+1)/2 gives the same result in O(1) — but iterating explicitly like this is clearer for learning and generalises to non-arithmetic sums.',
        memory: [
          { name: 'n', value: '6' },
          { name: 'total', value: '15' },
        ],
        output: ['n=1, total=1', 'n=2, total=3', 'n=3, total=6', 'n=4, total=10', 'n=5, total=15', 'Final total: 15'],
      },
    ],
  },

  // ── Count Occurrences ──────────────────────────────────────────────────────
  {
    id: 'count-occurrences',
    title: 'Count Occurrences',
    level: 'Beginner',
    levelColor: 'text-indigo-400',
    duration: '8 min',
    objective: 'Build a frequency map with a dictionary.',
    prompt: "Add 'banana' to the fruits list. Does the count update correctly?",
    hint: 'Watch the dict grow key by key — each new fruit adds an entry, each repeat increments it.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(k)',
    useCases: ['Word frequency in NLP pipelines', 'Analytics dashboards', 'Inventory tracking'],
    approach: 'Use a dict where keys are values and values are counts. The .get(key, 0) idiom reads the current count (defaulting to 0) and adds 1.',
    output: [],
    starterCode: `fruits = ["apple", "banana", "apple", "cherry", "banana", "apple"]
counts = {}

for fruit in fruits:
    counts[fruit] = counts.get(fruit, 0) + 1

print(counts)
for fruit, count in counts.items():
    print(f"{fruit}: {count}")
`,
    executionFrames: [
      {
        line: 1,
        event: 'Init list',
        summary: "fruits list has 6 items. 'apple' appears 3 times.",
        why: "We're deliberately including duplicates to demonstrate counting. Real-world use cases include log analysis, word frequency, and user activity tracking.",
        memory: [{ name: 'fruits', value: "['apple','banana',...]" }],
        output: [],
      },
      {
        line: 2,
        event: 'Empty dict',
        summary: 'counts = {}. The frequency map starts empty.',
        why: "We start with an empty dict rather than pre-populating it. This way the code handles any set of fruits — we don't need to know the keys in advance.",
        memory: [{ name: 'counts', value: '{}' }],
        output: [],
      },
      {
        line: 4,
        event: 'First apple',
        summary: "fruit = 'apple'. counts.get('apple', 0) returns 0 (not seen yet). counts['apple'] = 1.",
        why: ".get(key, default) avoids a KeyError when the key doesn't exist yet. The alternative counts[key] += 1 would crash on the first occurrence. This is a classic Python idiom.",
        memory: [{ name: 'counts', value: "{'apple': 1}" }],
        output: [],
      },
      {
        line: 4,
        event: 'First banana',
        summary: "fruit = 'banana'. Not in dict yet → counts['banana'] = 0 + 1 = 1.",
        why: 'Each new unique fruit creates a new key with value 1. The dict grows dynamically — no need to declare keys upfront. This is O(1) average per insertion.',
        memory: [{ name: 'counts', value: "{'apple': 1, 'banana': 1}" }],
        output: [],
      },
      {
        line: 4,
        event: 'Repeat apple',
        summary: "'apple' seen again. counts.get('apple', 0) = 1. counts['apple'] = 2.",
        why: 'On repeat encounters, .get() returns the existing count (1) instead of the default (0). The increment adds to the running total. This single line handles both first-time and repeat cases.',
        memory: [{ name: 'counts', value: "{'apple': 2, 'banana': 1, 'cherry': 1}" }],
        output: [],
      },
      {
        line: 7,
        event: 'Print results',
        summary: 'Final counts: apple=3, banana=2, cherry=1. One pass through the list.',
        why: 'The entire algorithm is O(n) time and O(k) space where k is unique fruits. Compare to a naive O(n²) approach that counts each fruit with a separate .count() call in a loop.',
        memory: [{ name: 'counts', value: "{'apple': 3, 'banana': 2, 'cherry': 1}" }],
        output: ["{'apple': 3, 'banana': 2, 'cherry': 1}", 'apple: 3', 'banana: 2', 'cherry: 1'],
      },
    ],
  },

  // ── Reverse a List ─────────────────────────────────────────────────────────
  {
    id: 'reverse-list',
    title: 'Reverse a List',
    level: 'Beginner',
    levelColor: 'text-indigo-400',
    duration: '8 min',
    objective: 'Use two pointers to reverse in-place without extra memory.',
    prompt: 'What happens if the list has an odd number of elements? Try [1,2,3,4,5].',
    hint: 'Watch left and right converge — when they meet in the middle, all swaps are done.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    useCases: ['In-place buffer reversal', 'Palindrome checking', 'String manipulation'],
    approach:
      'Two pointers start at opposite ends. Swap elements and move pointers inward until they meet. No extra array needed — just one temp variable.',
    output: [],
    starterCode: `nums = [1, 2, 3, 4, 6]
left = 0
right = len(nums) - 1

while left < right:
    nums[left], nums[right] = nums[right], nums[left]
    print(f"Swapped: {nums}")
    left += 1
    right -= 1

print("Reversed:", nums)
`,
    executionFrames: [
      {
        line: 1,
        event: 'Init list',
        summary: 'nums = [1, 2, 3, 4, 6]. Two pointers will swap from both ends.',
        why: 'We chose a 5-element list to show the middle element stays untouched. With an even-length list every element gets swapped exactly once.',
        memory: [
          { name: 'nums', value: '[1,2,3,4,6]' },
          { name: 'left', value: '0' },
          { name: 'right', value: '4' },
        ],
        output: [],
      },
      {
        line: 5,
        event: 'Check left < right',
        summary: "0 < 4 → True. Pointers haven't crossed — swap needed.",
        why: 'The condition left < right stops exactly when pointers meet or cross. For odd-length lists they meet at the middle; for even-length they cross. Either way, no over-swapping occurs.',
        memory: [
          { name: 'left', value: '0' },
          { name: 'right', value: '4' },
        ],
        output: [],
      },
      {
        line: 6,
        event: 'Swap ends',
        summary: 'Swap nums[0]=1 with nums[4]=6 → [6, 2, 3, 4, 1].',
        why: "Python's simultaneous assignment a, b = b, a is atomic — no temp variable needed. Under the hood Python evaluates the right side first, then assigns. Elegant and O(1) space.",
        memory: [
          { name: 'nums', value: '[6,2,3,4,1]' },
          { name: 'left', value: '1' },
          { name: 'right', value: '3' },
        ],
        output: ['Swapped: [6, 2, 3, 4, 1]'],
      },
      {
        line: 6,
        event: 'Swap inner pair',
        summary: 'Swap nums[1]=2 with nums[3]=4 → [6, 4, 3, 2, 1].',
        why: "Each iteration handles one symmetric pair. After 2 swaps on a 5-element list, only the middle element (index 2) remains — it's already in its correct reversed position.",
        memory: [
          { name: 'nums', value: '[6,4,3,2,1]' },
          { name: 'left', value: '2' },
          { name: 'right', value: '2' },
        ],
        output: ['Swapped: [6, 2, 3, 4, 1]', 'Swapped: [6, 4, 3, 2, 1]'],
      },
      {
        line: 5,
        event: 'Condition false',
        summary: 'left = 2, right = 2. 2 < 2 is False. Loop exits — reversal complete.',
        why: 'The two-pointer technique is O(n/2) swaps = O(n) time and O(1) space. Compare to creating a reversed copy: same time but O(n) extra space.',
        memory: [
          { name: 'nums', value: '[6,4,3,2,1]' },
          { name: 'left', value: '2' },
          { name: 'right', value: '2' },
        ],
        output: ['Swapped: [6, 2, 3, 4, 1]', 'Swapped: [6, 4, 3, 2, 1]', 'Reversed: [6, 4, 3, 2, 1]'],
      },
    ],
  },

  // ── Insertion Sort ─────────────────────────────────────────────────────────
  {
    id: 'insertion-sort',
    title: 'Insertion Sort',
    level: 'Intermediate',
    levelColor: 'text-emerald-400',
    duration: '12 min',
    objective: 'Sort by growing a sorted prefix one element at a time.',
    prompt: 'What is the minimum swaps needed for [1,2,3,5,4]? Why is it faster than bubble sort here?',
    hint: 'Watch the key element shift left only as far as needed — this is why nearly-sorted input is fast.',
    timeComplexity: 'O(n²) worst, O(n) best',
    spaceComplexity: 'O(1)',
    useCases: [
      'Sorting small arrays (faster than quicksort below ~16 elements)',
      'Online sorting as data streams in',
      'Used as subroutine in timsort',
    ],
    approach:
      'For each element, shift it left past every larger element until it finds its sorted position. The left portion is always sorted; we extend it by one each pass.',
    output: [],
    starterCode: `arr = [5, 2, 4, 1, 3]

for i in range(1, len(arr)):
    key = arr[i]
    j = i - 1
    while j >= 0 and arr[j] > key:
        arr[j + 1] = arr[j]
        j -= 1
    arr[j + 1] = key
    print(f"Pass {i}: {arr}")

print("Sorted:", arr)
`,
    executionFrames: [
      {
        line: 1,
        event: 'Init array',
        summary: "arr = [5, 2, 4, 1, 3]. We'll grow a sorted prefix from the left.",
        why: 'Insertion sort treats the first element as a sorted list of size 1. Each subsequent element is inserted into its correct position in the already-sorted left portion.',
        memory: [{ name: 'arr', value: '[5,2,4,1,3]' }],
        output: [],
      },
      {
        line: 3,
        event: 'Pass 1: key=2',
        summary: 'i=1, key=2. Compare with arr[0]=5. 5 > 2 → shift 5 right. Place 2 at index 0.',
        why: 'key saves the value being inserted before we overwrite positions. The while loop shifts larger elements right to make space — no swaps, just shifts, which is why insertion sort is cache-friendly.',
        memory: [
          { name: 'arr', value: '[2,5,4,1,3]' },
          { name: 'key', value: '2' },
        ],
        output: ['Pass 1: [2, 5, 4, 1, 3]'],
      },
      {
        line: 3,
        event: 'Pass 2: key=4',
        summary: 'i=2, key=4. Compare 5 > 4 → shift. Compare 2 > 4 → False. Place 4 at index 1.',
        why: 'The inner while stops as soon as we find an element ≤ key. This early exit is why insertion sort is O(n) on nearly-sorted data — few shifts needed.',
        memory: [
          { name: 'arr', value: '[2,4,5,1,3]' },
          { name: 'key', value: '4' },
        ],
        output: ['Pass 1: [2, 5, 4, 1, 3]', 'Pass 2: [2, 4, 5, 1, 3]'],
      },
      {
        line: 3,
        event: 'Pass 3: key=1',
        summary: 'i=3, key=1. Shifts 5, 4, 2 right. 1 inserted at index 0. Worst case for this element.',
        why: 'When key is smaller than everything in the sorted prefix, every element shifts right. This O(n) inner work per pass drives the O(n²) worst case when the array is reverse-sorted.',
        memory: [
          { name: 'arr', value: '[1,2,4,5,3]' },
          { name: 'key', value: '1' },
        ],
        output: ['Pass 1: [2, 5, 4, 1, 3]', 'Pass 2: [2, 4, 5, 1, 3]', 'Pass 3: [1, 2, 4, 5, 3]'],
      },
      {
        line: 3,
        event: 'Pass 4: key=3',
        summary: 'i=4, key=3. Shifts 5, 4. 3 placed at index 2.',
        why: "Only 2 shifts needed because 1 and 2 are already ≤ 3. This adaptivity — doing minimal work when input is partially sorted — is why Python's timsort uses insertion sort for small subarrays.",
        memory: [
          { name: 'arr', value: '[1,2,3,4,5]' },
          { name: 'key', value: '3' },
        ],
        output: ['Pass 1: [2, 5, 4, 1, 3]', 'Pass 2: [2, 4, 5, 1, 3]', 'Pass 3: [1, 2, 4, 5, 3]', 'Pass 4: [1, 2, 3, 4, 5]'],
      },
      {
        line: 12,
        event: 'Sorted!',
        summary: 'Final: [1, 2, 3, 4, 5]. 4 passes, O(n-1) outer iterations.',
        why: "Insertion sort is stable (preserves relative order of equal elements), in-place (O(1) space), and adaptive (O(n) on nearly sorted). Python's sorted() uses timsort which uses insertion sort for runs ≤ 64 elements.",
        memory: [{ name: 'arr', value: '[1,2,3,4,5]' }],
        output: [
          'Pass 1: [2, 5, 4, 1, 3]',
          'Pass 2: [2, 4, 5, 1, 3]',
          'Pass 3: [1, 2, 4, 5, 3]',
          'Pass 4: [1, 2, 3, 4, 5]',
          'Sorted: [1, 2, 3, 4, 5]',
        ],
      },
    ],
  },

  // ── Hash Map Counting ──────────────────────────────────────────────────────
  {
    id: 'hash-map-counting',
    title: 'Hash Map Counting',
    level: 'Intermediate',
    levelColor: 'text-emerald-400',
    duration: '10 min',
    objective: 'Use a dict to find the most common word in O(n) time.',
    prompt: "Add 'the' three more times to the text. Does it become the most frequent?",
    hint: 'Watch how the dict handles collisions — each key maps to exactly one count bucket.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(k)',
    useCases: ['Search autocomplete ranking', 'Log anomaly detection', 'Trending hashtags on social media'],
    approach:
      'Build a frequency dict in one pass, then find the max. Total O(n) — far better than the O(n²) approach of counting each word separately with .count().',
    output: [],
    starterCode: `words = ["the", "quick", "the", "fox", "the", "quick", "jumps"]
freq = {}

for word in words:
    freq[word] = freq.get(word, 0) + 1

most_common = max(freq, key=freq.get)
print("Frequencies:", freq)
print("Most common:", most_common, "→", freq[most_common], "times")
`,
    executionFrames: [
      {
        line: 1,
        event: 'Set up words',
        summary: "'the' × 3, 'quick' × 2, 'fox' × 1, 'jumps' × 1. 7 words total.",
        why: 'Real-world text often has a Zipfian distribution — a few words appear very frequently, most appear rarely. Hash map counting exploits this by only storing unique keys.',
        memory: [{ name: 'freq', value: '{}' }],
        output: [],
      },
      {
        line: 4,
        event: "Count 'the' (×3)",
        summary: "Three iterations: freq['the'] goes 0→1→2→3.",
        why: 'Each lookup in a Python dict is O(1) average — the hash function maps the key to a bucket, no iteration needed. This is what makes hash maps superior to lists for frequency counting.',
        memory: [{ name: 'freq', value: "{'the': 3}" }],
        output: [],
      },
      {
        line: 4,
        event: 'Count remaining',
        summary: 'Remaining words processed. quick=2, fox=1, jumps=1.',
        why: 'Total work: one pass through 7 words = O(n). Compare to [words.count(w) for w in set(words)] which calls .count() (itself O(n)) once per unique word — making it O(n × k) = O(n²) in the worst case.',
        memory: [{ name: 'freq', value: "{'the': 3, 'quick': 2, 'fox': 1, 'jumps': 1}" }],
        output: [],
      },
      {
        line: 7,
        event: 'Find max',
        summary: 'max(freq, key=freq.get) iterates keys and returns the one with the highest value.',
        why: "key=freq.get passes the dict's .get method as the comparison function. Python's max() calls it on each key to determine ordering. This is more Pythonic than manual max-tracking in a loop.",
        memory: [{ name: 'most_common', value: "'the'" }],
        output: [],
      },
      {
        line: 8,
        event: 'Print freq',
        summary: 'Frequencies dict printed.',
        why: "For production use, consider collections.Counter — it's a dict subclass with .most_common(n) built in. But understanding the manual version shows exactly what's happening under the hood.",
        memory: [{ name: 'most_common', value: "'the'" }],
        output: ["Frequencies: {'the': 3, 'quick': 2, 'fox': 1, 'jumps': 1}"],
      },
      {
        line: 9,
        event: 'Print winner',
        summary: "Most common: 'the' → 3 times.",
        why: 'One pass to count + one pass to find max = O(2n) = O(n). The hash map turned an O(n²) problem into O(n). This pattern — count then query — underlies many algorithm optimisations.',
        memory: [{ name: 'most_common', value: "'the'" }],
        output: ["Frequencies: {'the': 3, 'quick': 2, 'fox': 1, 'jumps': 1}", 'Most common: the → 3 times'],
      },
    ],
  },

  // ── For Loop ──────────────────────────────────────────────────────────────
  {
    id: 'for-loop',
    title: 'For Loops & Range',
    level: 'Foundation',
    levelColor: 'text-sky-400',
    duration: '12 min',
    objective: "See how Python's for loop iterates over sequences using an iterator protocol.",
    prompt: 'Change range(1, 6) to range(0, 10, 2). How many iterations run? What does the third argument do?',
    hint: 'range(start, stop, step) — the third argument is the step size. range(0, 10, 2) gives [0, 2, 4, 6, 8].',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    useCases: [
      'Iterating over lists, strings, or any sequence',
      'Generating number sequences with range()',
      'Accumulating totals across fixed-size data',
    ],
    approach:
      "Python's for loop uses the iterator protocol under the hood — calling __iter__ and __next__ on the sequence. range() generates integers lazily (no list in memory). The loop variable is automatically assigned each value in order.",
    output: ['i=1, squared=1', 'i=2, squared=4', 'i=3, squared=9', 'i=4, squared=16', 'i=5, squared=25', 'Sum of squares: 55'],
    starterCode: `total = 0

for i in range(1, 6):
    squared = i * i
    total = total + squared
    print(f"i={i}, squared={squared}")

print("Sum of squares:", total)
`,
    executionFrames: [
      {
        line: 1,
        event: 'Init total',
        summary: 'total = 0. Accumulator starts at the additive identity.',
        why: "We initialize total before the loop. Variables used inside a loop and defined outside persist across iterations — that's what makes them accumulators.",
        memory: [{ name: 'total', value: '0' }],
        output: [],
      },
      {
        line: 3,
        event: 'Start loop i=1',
        summary: 'range(1, 6) produces [1, 2, 3, 4, 5]. First iteration: i=1.',
        why: "range(1, 6) starts at 1 and stops BEFORE 6. Python's range is exclusive on the stop — a common source of confusion. The loop variable i is automatically set to each value.",
        memory: [
          { name: 'total', value: '0' },
          { name: 'i', value: '1' },
        ],
        output: [],
      },
      {
        line: 4,
        event: 'Compute 1²=1',
        summary: 'squared = 1 × 1 = 1.',
        why: 'We store the result in a named variable (squared) instead of computing it twice. This is the DRY principle — compute once, use multiple times.',
        memory: [
          { name: 'total', value: '0' },
          { name: 'i', value: '1' },
          { name: 'squared', value: '1' },
        ],
        output: [],
      },
      {
        line: 5,
        event: 'Accumulate',
        summary: 'total = 0 + 1 = 1.',
        why: "The accumulator pattern in action. total retains its value between iterations because it's defined outside the loop scope.",
        memory: [
          { name: 'total', value: '1' },
          { name: 'i', value: '1' },
          { name: 'squared', value: '1' },
        ],
        output: ['i=1, squared=1'],
      },
      {
        line: 4,
        event: 'i=3, squared=9',
        summary: 'Third iteration. squared = 3×3 = 9, total = 1+4+9 = 14.',
        why: "Each iteration runs the entire body independently. The loop body re-assigns both squared and updates total. No state leaks between the 'squared' calculations.",
        memory: [
          { name: 'total', value: '14' },
          { name: 'i', value: '3' },
          { name: 'squared', value: '9' },
        ],
        output: ['i=1, squared=1', 'i=2, squared=4', 'i=3, squared=9'],
      },
      {
        line: 8,
        event: 'Loop complete',
        summary: '5 iterations done. total = 1+4+9+16+25 = 55.',
        why: "After all iterations, the loop exits naturally. The variable i still holds the last value (5) and squared holds 25 — they're accessible after the loop in Python.",
        memory: [
          { name: 'total', value: '55' },
          { name: 'i', value: '5' },
          { name: 'squared', value: '25' },
        ],
        output: ['i=1, squared=1', 'i=2, squared=4', 'i=3, squared=9', 'i=4, squared=16', 'i=5, squared=25', 'Sum of squares: 55'],
      },
    ],
  },

  // ── Palindrome Check ──────────────────────────────────────────────────────
  {
    id: 'palindrome',
    title: 'Palindrome Check',
    level: 'Beginner',
    levelColor: 'text-wave',
    duration: '8 min',
    objective: 'Use Python string slicing to check if a word reads the same forwards and backwards.',
    prompt: "Try 'racecar' and 'hello'. What does s[::-1] actually do step by step?",
    hint: "s[::-1] means: start at the end, go to the beginning, step -1 (backwards). It's the most Pythonic reversal.",
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    useCases: [
      'DNA sequence analysis (palindromic sequences in genetics)',
      'Word puzzles and games',
      'Input validation (e.g., palindromic part numbers)',
    ],
    approach:
      "We use Python's slice notation s[::-1] to reverse the string, then compare with the original. This is O(n) time and O(n) space (creates a new reversed string). An alternative is two-pointer (O(n) time, O(1) space) but slicing is the most readable Python approach.",
    output: ['original: madam', 'reversed: madam', 'is palindrome: True'],
    starterCode: `s = "madam"

reversed_s = s[::-1]
print("original:", s)
print("reversed:", reversed_s)
print("is palindrome:", s == reversed_s)
`,
    executionFrames: [
      {
        line: 1,
        event: 'Set string',
        summary: 's = "madam" — a 5-character string.',
        why: 'madam is a classic palindrome example. Strings in Python are immutable sequences of characters — every operation on a string creates a new one.',
        memory: [{ name: 's', value: '"madam"' }],
        output: [],
      },
      {
        line: 3,
        event: 'Reverse with slice',
        summary: 's[::-1] = "madam". Step -1 iterates the string backwards.',
        why: 'Slice notation s[start:stop:step]. With s[::-1], start and stop are omitted (defaults: full string), step=-1 means traverse backwards. This creates a new string — the original s is unchanged because strings are immutable.',
        memory: [
          { name: 's', value: '"madam"' },
          { name: 'reversed_s', value: '"madam"' },
        ],
        output: [],
      },
      {
        line: 4,
        event: 'Print original',
        summary: 'Prints "original: madam".',
        why: 'We print both sides before the comparison so we can visually verify the reversal. In real code you might skip these prints.',
        memory: [
          { name: 's', value: '"madam"' },
          { name: 'reversed_s', value: '"madam"' },
        ],
        output: ['original: madam'],
      },
      {
        line: 5,
        event: 'Print reversed',
        summary: 'Prints "reversed: madam". Same as original.',
        why: "For a palindrome, the reversed string is identical. For 'hello', reversed would be 'olleh' — visibly different.",
        memory: [
          { name: 's', value: '"madam"' },
          { name: 'reversed_s', value: '"madam"' },
        ],
        output: ['original: madam', 'reversed: madam'],
      },
      {
        line: 6,
        event: 'Compare',
        summary: '"madam" == "madam" → True. It\'s a palindrome!',
        why: 'String equality in Python compares character by character. == returns True only if both length and all characters match. This is a natural O(n) check.',
        memory: [
          { name: 's', value: '"madam"' },
          { name: 'reversed_s', value: '"madam"' },
        ],
        output: ['original: madam', 'reversed: madam', 'is palindrome: True'],
      },
    ],
  },

  // ── Two Pointers ─────────────────────────────────────────────────────────
  {
    id: 'two-pointers',
    title: 'Two Pointers',
    level: 'Intermediate',
    levelColor: 'text-leaf',
    duration: '10 min',
    objective: 'See how two pointers moving inward can check a sorted array in O(n) with O(1) space.',
    prompt: 'Change target to 17. Which pair sums to 17? What if no pair exists?',
    hint: 'If nums[left] + nums[right] < target, move left forward. If > target, move right backward. If = target, found!',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    useCases: [
      'Two Sum on a sorted array (O(1) space vs O(n) for hash map)',
      'Checking if a string is a palindrome (char comparison from both ends)',
      'Container with most water — maximize area between two lines',
    ],
    approach:
      'Two pointers work on sorted arrays. Start left=0 and right=n-1. Each step: if sum < target, move left right (increase sum); if sum > target, move right left (decrease sum); if equal, found. Each element is visited at most once — O(n). No extra space needed — O(1).',
    output: ['left=0(1) right=5(14) sum=15 < 17', 'left=1(3) right=5(14) sum=17 == target!', 'found pair: (3, 14) at indices [1, 5]'],
    starterCode: `nums = [1, 3, 5, 7, 9, 14]
target = 17
left, right = 0, len(nums) - 1

while left < right:
    s = nums[left] + nums[right]
    print(f"left={left}({nums[left]}) right={right}({nums[right]}) sum={s}", end=" ")
    if s == target:
        print(f"== target!")
        print(f"found pair: ({nums[left]}, {nums[right]}) at indices [{left}, {right}]")
        break
    elif s < target:
        print("< target")
        left += 1
    else:
        print("> target")
        right -= 1
`,
    executionFrames: [
      {
        line: 1,
        event: 'Load sorted array',
        summary: 'nums = [1, 3, 5, 7, 9, 14] — must be sorted for two pointers.',
        why: "Two pointers REQUIRES a sorted array. Sorting guarantees that moving left increases the sum and moving right decreases it. Without this property we can't make confident directional moves.",
        memory: [
          { name: 'nums', value: '[1, 3, 5, 7, 9, 14]' },
          { name: 'target', value: '17' },
        ],
        output: [],
      },
      {
        line: 3,
        event: 'Set pointers',
        summary: 'left=0 (pointing at 1), right=5 (pointing at 14).',
        why: 'Start with the widest window: smallest at left, largest at right. This covers all possibilities — we shrink inward based on the comparison result.',
        memory: [
          { name: 'nums', value: '[1, 3, 5, 7, 9, 14]' },
          { name: 'target', value: '17' },
          { name: 'left', value: '0' },
          { name: 'right', value: '5' },
        ],
        output: [],
      },
      {
        line: 6,
        event: 'Sum=15 < 17',
        summary: '1 + 14 = 15. Less than target — move left pointer right.',
        why: "Sum is too small. To increase it, we need a bigger left element. We can't increase the right (14 is already the max). So move left forward to 3.",
        memory: [
          { name: 'left', value: '0' },
          { name: 'right', value: '5' },
          { name: 's', value: '15' },
        ],
        output: ['left=0(1) right=5(14) sum=15 < target'],
      },
      {
        line: 13,
        event: 'Advance left',
        summary: 'left moves from 0 to 1. Now pointing at 3.',
        why: 'left += 1 discards the smallest remaining element from consideration. We know no valid pair includes nums[0]=1 (the sum 1+anything would be ≤ 15 which we already know is too small).',
        memory: [
          { name: 'left', value: '1' },
          { name: 'right', value: '5' },
        ],
        output: ['left=0(1) right=5(14) sum=15 < target'],
      },
      {
        line: 6,
        event: 'Sum=17 == target!',
        summary: '3 + 14 = 17. Exact match found in 2 steps!',
        why: 'We found the pair in just 2 iterations. The two-pointer approach is O(n) but typically finds the answer quickly. Compare to hash map which also runs in O(n) but uses O(n) extra space. Here we used O(1) space.',
        memory: [
          { name: 'left', value: '1' },
          { name: 'right', value: '5' },
          { name: 's', value: '17' },
        ],
        output: ['left=0(1) right=5(14) sum=15 < target', 'left=1(3) right=5(14) sum=17 == target!', 'found pair: (3, 14) at indices [1, 5]'],
      },
    ],
  },

  // ── Merge Sort ────────────────────────────────────────────────────────────
  {
    id: 'merge-sort',
    title: 'Merge Sort',
    level: 'Advanced',
    levelColor: 'text-gold',
    duration: '18 min',
    objective: 'See divide-and-conquer in action: split the array in half recursively, then merge sorted halves.',
    prompt: 'Change arr to [9, 3, 7, 1, 5, 2, 8]. How many recursive calls does merge sort make?',
    hint: "Each call splits into two — the total calls form a binary tree with log₂(n) levels. For n=7 that's about 3 levels.",
    timeComplexity: 'O(n log n)',
    spaceComplexity: 'O(n)',
    useCases: [
      'Sorting linked lists (merge sort is natural for them)',
      'External sort: merging sorted files too large for RAM',
      'Count inversions in an array',
      "Stable sort used in Python's built-in sorted() (Timsort is based on it)",
    ],
    approach:
      "Merge sort is a divide-and-conquer algorithm. Divide: split array in half. Conquer: recursively sort each half. Combine: merge two sorted halves into one sorted array. The merge step is the key — it's O(n) and produces a sorted array from two sorted inputs. Total: O(n log n) time, O(n) space for the temporary arrays.",
    output: [
      'merge([3],[5]) → [3,5]',
      'merge([1],[2]) → [1,2]',
      'merge([3,5],[1,2]) → [1,2,3,5]',
      'merge([7],[4]) → [4,7]',
      'merge([1,2,3,5],[4,7]) → [1,2,3,4,5,7]',
      'sorted: [1, 2, 3, 4, 5, 7]',
    ],
    starterCode: `def merge_sort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    print(f"merge({left},{right}) → {result}")
    return result

arr = [5, 3, 1, 2, 7, 4]
sorted_arr = merge_sort(arr)
print("sorted:", sorted_arr)
`,
    executionFrames: [
      {
        line: 1,
        event: 'Define merge_sort',
        summary: 'merge_sort splits array recursively until single elements remain.',
        why: 'The base case is len(arr) <= 1: a single element is always sorted. This stops the recursion. Without the base case, the function would recurse infinitely.',
        memory: [{ name: 'arr', value: '[5, 3, 1, 2, 7, 4]' }],
        output: [],
      },
      {
        line: 4,
        event: 'Compute midpoint',
        summary: 'mid = len(arr) // 2 splits array into two halves.',
        why: 'Integer division gives the exact midpoint. For n=6: mid=3, left=[5,3,1], right=[2,7,4]. We use // not / to get an integer index. Splitting in half is what gives us O(log n) levels of recursion.',
        memory: [
          { name: 'arr', value: '[5, 3, 1, 2, 7, 4]' },
          { name: 'mid', value: '3' },
        ],
        output: [],
      },
      {
        line: 5,
        event: 'Recurse left',
        summary: 'merge_sort([5, 3, 1]) — left half recurses until single elements.',
        why: "arr[:mid] creates a new slice [5,3,1]. The recursive call eventually reaches base cases: [5], [3], [1]. Each is 'sorted' trivially. The magic happens in the merge step on the way back up.",
        memory: [
          { name: 'arr', value: '[5, 3, 1, 2, 7, 4]' },
          { name: 'left', value: '[1, 3, 5]' },
        ],
        output: ['merge([3],[5]) → [3,5]', 'merge([1],[3,5]) → [1,3,5]'],
      },
      {
        line: 9,
        event: 'Merge two halves',
        summary: 'merge([1,3,5], [2,4,7]) — compare and pick smallest each step.',
        why: "The merge function uses two pointers (i, j) to walk through both sorted arrays simultaneously, always picking the smaller element. This is O(n) and produces a perfectly sorted result. It's the core insight of merge sort.",
        memory: [
          { name: 'left', value: '[1, 3, 5]' },
          { name: 'right', value: '[2, 4, 7]' },
          { name: 'result', value: '[1, 2, 3, 4, 5, 7]' },
        ],
        output: [
          'merge([3],[5]) → [3,5]',
          'merge([1],[3,5]) → [1,3,5]',
          'merge([7],[4]) → [4,7]',
          'merge([2],[4,7]) → [2,4,7]',
          'merge([1,3,5],[2,4,7]) → [1,2,3,4,5,7]',
        ],
      },
      {
        line: 22,
        event: 'Sorted!',
        summary: 'Result: [1, 2, 3, 4, 5, 7]. O(n log n) achieved.',
        why: "Total work: O(n) merge work per level × O(log n) levels = O(n log n). Space: O(n) for the temporary arrays during merging. This is why Python's built-in sort (Timsort) is based on merge sort — it's reliably fast.",
        memory: [
          { name: 'arr', value: '[5, 3, 1, 2, 7, 4]' },
          { name: 'sorted_arr', value: '[1, 2, 3, 4, 5, 7]' },
        ],
        output: [
          'merge([3],[5]) → [3,5]',
          'merge([1],[3,5]) → [1,3,5]',
          'merge([7],[4]) → [4,7]',
          'merge([2],[4,7]) → [2,4,7]',
          'merge([1,3,5],[2,4,7]) → [1,2,3,4,5,7]',
          'sorted: [1, 2, 3, 4, 5, 7]',
        ],
      },
    ],
  },
  // ── Quick Sort ────────────────────────────────────────────────────────────
  {
    id: 'quick-sort',
    title: 'Quick Sort',
    level: 'Advanced',
    levelColor: 'text-rose-400',
    duration: '18 min',
    objective: 'Watch partition divide the array around a pivot, then recurse on each half.',
    prompt: 'Change arr to [3, 6, 8, 10, 1, 2, 1]. What pivot gets chosen each time and why?',
    hint: 'The pivot is always arr[high]. Try tracing which element becomes the pivot in each recursive call.',
    timeComplexity: 'O(n log n) avg / O(n²) worst',
    spaceComplexity: 'O(log n)',
    useCases: [
      'Default sort in many standard libraries (V8, C++ std::sort uses introsort based on quicksort)',
      'Cache-friendly in-place sorting — no extra array needed',
      'Quickselect variant finds kth smallest in O(n) average',
      'Database query optimisers use variants for in-memory sorting',
    ],
    approach:
      'Quick sort picks a pivot (last element here) and partitions the array so all elements ≤ pivot go left and all > pivot go right. The pivot ends up in its final sorted position after each partition call. Recursing on both halves gives O(n log n) average time. The worst case O(n²) occurs when the pivot is always the smallest or largest — randomising pivot selection avoids this.',
    output: ['[11, 12, 22, 25, 34, 64, 90]'],
    starterCode: `def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)

arr = [64, 34, 25, 12, 22, 11, 90]
quick_sort(arr, 0, len(arr) - 1)
print(arr)
`,
    executionFrames: [
      {
        line: 16,
        event: 'assign',
        summary: 'arr = [64, 34, 25, 12, 22, 11, 90] — 7 elements to sort.',
        why: 'Quick sort works in-place — no extra array. The original array gets rearranged through swaps during partitioning.',
        memory: [{ name: 'arr', value: '[64, 34, 25, 12, 22, 11, 90]' }],
        output: [],
      },
      {
        line: 17,
        event: 'call',
        summary: 'quick_sort(arr, 0, 6) — sort the full array.',
        why: 'We pass low=0 and high=6 (last index). The function will call partition to place arr[6]=90 in its correct position, then recurse on the sub-arrays.',
        memory: [
          { name: 'arr', value: '[64, 34, 25, 12, 22, 11, 90]' },
          { name: 'low', value: '0' },
          { name: 'high', value: '6' },
        ],
        output: [],
      },
      {
        line: 2,
        event: 'assign',
        summary: 'pivot = arr[6] = 90. i = -1. Scanning j from 0 to 5.',
        why: 'Choosing arr[high] as pivot is simple. Here pivot=90 is the maximum, so every element is ≤ pivot and will go to the left side. This is the best case for this partition.',
        memory: [
          { name: 'pivot', value: '90' },
          { name: 'i', value: '-1' },
          { name: 'arr', value: '[64, 34, 25, 12, 22, 11, 90]' },
        ],
        output: [],
      },
      {
        line: 4,
        event: 'loop',
        summary: 'j=0..5: all elements ≤ 90 so each triggers a swap with itself (i advances to 0,1,2,3,4,5).',
        why: 'Since all elements are smaller than 90, i increments each iteration and arr[i] swaps with arr[j] — but i==j so nothing actually moves. The partition finds that 90 already belongs at the end.',
        memory: [
          { name: 'pivot', value: '90' },
          { name: 'i', value: '5' },
          { name: 'j', value: '5' },
          { name: 'arr', value: '[64, 34, 25, 12, 22, 11, 90]' },
        ],
        output: [],
      },
      {
        line: 8,
        event: 'swap',
        summary: 'arr[i+1] ↔ arr[high]: arr[6] ↔ arr[6]. Pivot 90 stays at index 6. pi=6.',
        why: 'The partition index is 6 — pivot 90 is already in its final sorted position. Quick sort now recurses on [64,34,25,12,22,11] (left) and an empty right side.',
        memory: [
          { name: 'arr', value: '[64, 34, 25, 12, 22, 11, 90]' },
          { name: 'pi', value: '6' },
        ],
        output: [],
      },
      {
        line: 12,
        event: 'call',
        summary: 'Recurse left: quick_sort(arr, 0, 5). Now pivot = arr[5] = 11.',
        why: 'With pivot=11 (smallest element), all others are larger. 11 will end up at index 0 after partition. This shows worst-case-like behaviour for this particular sub-call.',
        memory: [
          { name: 'arr', value: '[64, 34, 25, 12, 22, 11, 90]' },
          { name: 'low', value: '0' },
          { name: 'high', value: '5' },
          { name: 'pivot', value: '11' },
        ],
        output: [],
      },
      {
        line: 4,
        event: 'compare',
        summary: 'Scan j=0..4: no element ≤ 11 (64,34,25,12,22 are all >11). i stays at -1.',
        why: 'When pivot is the minimum, nothing swaps in the loop. Then arr[i+1]=arr[0] swaps with arr[high]=arr[5], placing 11 at index 0. This is the worst case scenario.',
        memory: [
          { name: 'pivot', value: '11' },
          { name: 'i', value: '-1' },
          { name: 'arr', value: '[64, 34, 25, 12, 22, 11, 90]' },
        ],
        output: [],
      },
      {
        line: 8,
        event: 'swap',
        summary: 'arr[0] ↔ arr[5]: 64 and 11 swap. pi=0. Array: [11, 34, 25, 12, 22, 64, 90].',
        why: '11 is now at its final position (index 0). No left sub-array to recurse on. Right sub-array [34,25,12,22,64] continues recursing until sorted.',
        memory: [
          { name: 'arr', value: '[11, 34, 25, 12, 22, 64, 90]' },
          { name: 'pi', value: '0' },
        ],
        output: [],
      },
      {
        line: 13,
        event: 'call',
        summary: 'Recurse: quick_sort continues until all pivots are placed. Array sorts progressively.',
        why: 'Each partition call places exactly one element in its final position. With n=7 elements, exactly 7 partition calls are needed. The recursion depth is O(log n) on average.',
        memory: [{ name: 'arr', value: '[11, 12, 22, 25, 34, 64, 90]' }],
        output: [],
      },
      {
        line: 18,
        event: 'output',
        summary: 'print(arr) → [11, 12, 22, 25, 34, 64, 90]. Sorted in-place!',
        why: 'Quick sort sorted in-place with O(log n) stack space. Compare to merge sort which needs O(n) extra space. The trade-off: quick sort is cache-friendly and typically 2-3× faster in practice despite the same O(n log n) average complexity.',
        memory: [{ name: 'arr', value: '[11, 12, 22, 25, 34, 64, 90]' }],
        output: ['[11, 12, 22, 25, 34, 64, 90]'],
      },
    ],
  },
  // ── Heap Sort ─────────────────────────────────────────────────────────────
  {
    id: 'heap-sort',
    title: 'Heap Sort',
    level: 'Advanced',
    levelColor: 'text-rose-400',
    duration: '20 min',
    objective: 'Build a max-heap from the array, then extract the maximum element one by one into sorted order.',
    prompt: 'Change arr to [4, 10, 3, 5, 1]. Draw the heap tree after building it. Which element is always at index 0?',
    hint: 'In a max-heap, arr[0] is always the largest element. After each extraction, heapify restores this property.',
    timeComplexity: 'O(n log n)',
    spaceComplexity: 'O(1)',
    useCases: [
      'Priority queues — always extract the maximum/minimum efficiently',
      'Operating system schedulers use heap-based priority queues',
      'Guaranteed O(n log n) worst case — unlike quicksort',
      'Finding the k largest elements in a stream',
    ],
    approach:
      'Heap sort has two phases. First, build a max-heap from the array in O(n) by calling heapify from the bottom up (starting at n//2-1). Second, repeatedly swap the root (maximum) with the last element, shrink the heap size by 1, and heapify the root to restore the heap property. Each extraction is O(log n) and we do n extractions, giving O(n log n). Space is O(1) because everything happens in-place.',
    output: ['[5, 6, 7, 11, 12, 13]'],
    starterCode: `def heapify(arr, n, i):
    largest = i
    l, r = 2 * i + 1, 2 * i + 2
    if l < n and arr[l] > arr[largest]:
        largest = l
    if r < n and arr[r] > arr[largest]:
        largest = r
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

def heap_sort(arr):
    n = len(arr)
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)
    for i in range(n - 1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0]
        heapify(arr, n, i)

arr = [12, 11, 13, 5, 6, 7]
heap_sort(arr)
print(arr)
`,
    executionFrames: [
      {
        line: 19,
        event: 'assign',
        summary: 'arr = [12, 11, 13, 5, 6, 7] — 6 elements. n=6.',
        why: 'The array represents a binary tree: index i has children at 2i+1 and 2i+2. arr[0]=12 is the root. We need to rearrange this into a valid max-heap where every parent ≥ its children.',
        memory: [
          { name: 'arr', value: '[12, 11, 13, 5, 6, 7]' },
          { name: 'n', value: '6' },
        ],
        output: [],
      },
      {
        line: 13,
        event: 'loop',
        summary: 'Build heap phase: heapify from i=2 down to i=0 (n//2-1 = 2).',
        why: "We start from the last internal node (n//2-1=2) and go up to root (0). Leaf nodes don't need heapifying. This bottom-up approach builds the heap in O(n) — more efficient than n insertions which would be O(n log n).",
        memory: [
          { name: 'arr', value: '[12, 11, 13, 5, 6, 7]' },
          { name: 'i', value: '2' },
        ],
        output: [],
      },
      {
        line: 1,
        event: 'call',
        summary: 'heapify(arr, 6, 2): i=2, arr[2]=13. Children: l=5(arr[5]=7), r=6(out of bounds).',
        why: 'heapify checks if a node is larger than its children. Here arr[2]=13 > arr[5]=7, so no swap needed. Node 13 is already in the right place.',
        memory: [
          { name: 'i', value: '2' },
          { name: 'largest', value: '2' },
          { name: 'arr[2]', value: '13' },
        ],
        output: [],
      },
      {
        line: 1,
        event: 'call',
        summary: 'heapify(arr, 6, 1): i=1, arr[1]=11. Children: l=3(5), r=4(6). largest stays 1.',
        why: 'arr[1]=11 > arr[3]=5 and arr[1]=11 > arr[4]=6. No swap needed. Node 11 is the largest in its subtree.',
        memory: [
          { name: 'i', value: '1' },
          { name: 'largest', value: '1' },
          { name: 'arr', value: '[12, 11, 13, 5, 6, 7]' },
        ],
        output: [],
      },
      {
        line: 1,
        event: 'call',
        summary: 'heapify(arr, 6, 0): i=0, arr[0]=12. Children: l=1(11), r=2(13). largest=2!',
        why: 'arr[2]=13 > arr[0]=12, so largest=2. We swap arr[0] and arr[2]. Now 13 is the root — the max-heap property is satisfied at the root. Array becomes [13, 11, 12, 5, 6, 7].',
        memory: [
          { name: 'i', value: '0' },
          { name: 'largest', value: '2' },
          { name: 'arr', value: '[13, 11, 12, 5, 6, 7]' },
        ],
        output: [],
      },
      {
        line: 15,
        event: 'loop',
        summary: 'Extract phase: i=5. Swap arr[0]=13 with arr[5]=7. Heap size shrinks to 5.',
        why: 'The root of a max-heap is always the maximum. Swapping it to the end puts it in its final sorted position. We then heapify the remaining n-1 elements to find the next maximum.',
        memory: [
          { name: 'arr', value: '[7, 11, 12, 5, 6, 13]' },
          { name: 'i', value: '5' },
        ],
        output: [],
      },
      {
        line: 17,
        event: 'call',
        summary: 'heapify(arr, 5, 0): restore heap for indices 0-4. 12 bubbles to root.',
        why: 'After removing 13 from the root, 7 is at the top. heapify sifts it down while 12 (the new max among remaining elements) rises to the root. Array: [12, 11, 7, 5, 6, 13].',
        memory: [
          { name: 'arr', value: '[12, 11, 7, 5, 6, 13]' },
          { name: 'heap size', value: '5' },
        ],
        output: [],
      },
      {
        line: 16,
        event: 'swap',
        summary: 'i=4: Swap arr[0]=12 with arr[4]=6. Extract 12 to its sorted position.',
        why: '12 is now at index 4 — its final position. We continue extracting. Each extraction is O(log n) because heapify must sift down at most log n levels. After all extractions: sorted ascending.',
        memory: [
          { name: 'arr', value: '[6, 11, 7, 5, 12, 13]' },
          { name: 'i', value: '4' },
        ],
        output: [],
      },
      {
        line: 20,
        event: 'output',
        summary: 'print(arr) → [5, 6, 7, 11, 12, 13]. Heap sort complete!',
        why: "Heap sort achieved O(n log n) with O(1) extra space — better space complexity than merge sort's O(n). The trade-off: heap sort is not cache-friendly (jumps around memory) so quicksort is usually faster in practice despite worse worst-case.",
        memory: [{ name: 'arr', value: '[5, 6, 7, 11, 12, 13]' }],
        output: ['[5, 6, 7, 11, 12, 13]'],
      },
    ],
  },
  // ── BFS ───────────────────────────────────────────────────────────────────
  {
    id: 'bfs',
    title: 'Breadth-First Search',
    level: 'Advanced',
    levelColor: 'text-rose-400',
    duration: '18 min',
    objective: 'Explore a graph level by level using a queue. BFS finds shortest paths in unweighted graphs.',
    prompt: 'Change the start node to 0. What order are nodes visited? How does BFS guarantee the shortest path?',
    hint: 'BFS visits all neighbors at distance 1 before distance 2. The first time you reach a node is always via the shortest path.',
    timeComplexity: 'O(V + E)',
    spaceComplexity: 'O(V)',
    useCases: [
      'Shortest path in unweighted graphs (GPS routing on simple maps)',
      'Web crawlers explore links level by level',
      'Social network degree of separation (6 degrees of Kevin Bacon)',
      'Peer-to-peer network discovery (BitTorrent node lookup)',
    ],
    approach:
      'BFS uses a queue (FIFO) to explore the graph level by level. Start by enqueuing the start node and marking it visited. At each step, dequeue a node, process it, then enqueue all unvisited neighbors and mark them visited. Marking as visited when enqueuing (not dequeuing) is critical — it prevents adding the same node to the queue multiple times, keeping time complexity O(V+E). The result visits nodes in order of increasing distance from the start.',
    output: ['[2, 0, 3, 1]'],
    starterCode: `from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)
    order = []
    while queue:
        node = queue.popleft()
        order.append(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
    return order

graph = {0: [1,2], 1: [2], 2: [0,3], 3: [3]}
result = bfs(graph, 2)
print(result)
`,
    executionFrames: [
      {
        line: 16,
        event: 'assign',
        summary: 'graph defined: 4 nodes (0-3), directed edges. Starting BFS from node 2.',
        why: 'The graph is represented as an adjacency list — a dict mapping each node to its list of neighbors. This representation is O(V+E) space and makes neighbor lookup O(degree), which is efficient for sparse graphs.',
        memory: [
          { name: 'graph', value: '{0:[1,2], 1:[2], 2:[0,3], 3:[3]}' },
          { name: 'start', value: '2' },
        ],
        output: [],
      },
      {
        line: 4,
        event: 'assign',
        summary: 'visited = {2}, queue = deque([2]), order = [].',
        why: "We initialise with start=2 already in visited. This prevents revisiting it when we see it as a neighbor of node 0. Using a set for visited gives O(1) lookup — much faster than a list's O(n) search.",
        memory: [
          { name: 'visited', value: '{2}' },
          { name: 'queue', value: 'deque([2])' },
          { name: 'order', value: '[]' },
        ],
        output: [],
      },
      {
        line: 8,
        event: 'loop',
        summary: 'Iteration 1: dequeue node 2. order=[2]. Neighbors of 2: [0, 3].',
        why: 'queue.popleft() is O(1) with deque (unlike list.pop(0) which is O(n)). This is why we use collections.deque not a plain list for BFS queues.',
        memory: [
          { name: 'node', value: '2' },
          { name: 'visited', value: '{2}' },
          { name: 'order', value: '[2]' },
          { name: 'queue', value: 'deque([])' },
        ],
        output: [],
      },
      {
        line: 11,
        event: 'branch',
        summary: 'Neighbor 0 not visited → add to visited and queue. Neighbor 3 same.',
        why: "We mark neighbors as visited WHEN ENQUEUING, not when dequeuing. This prevents duplicate entries in the queue. If we marked on dequeue, both 2 and 1 could enqueue node 2's neighbor before it's processed.",
        memory: [
          { name: 'visited', value: '{2, 0, 3}' },
          { name: 'queue', value: 'deque([0, 3])' },
          { name: 'order', value: '[2]' },
        ],
        output: [],
      },
      {
        line: 8,
        event: 'loop',
        summary: 'Iteration 2: dequeue node 0. order=[2,0]. Neighbors of 0: [1, 2].',
        why: "Node 0 was enqueued when we processed node 2's neighbors. BFS processes nodes in the exact order they were enqueued — FIFO guarantees level-by-level traversal.",
        memory: [
          { name: 'node', value: '0' },
          { name: 'order', value: '[2, 0]' },
          { name: 'queue', value: 'deque([3])' },
        ],
        output: [],
      },
      {
        line: 11,
        event: 'branch',
        summary: 'Neighbor 1: not visited → enqueue. Neighbor 2: already visited → skip.',
        why: 'Node 2 is already in visited, so we skip it. This is the cycle detection mechanism of BFS. Without the visited set, we would loop forever on the 2→0→2 cycle.',
        memory: [
          { name: 'visited', value: '{0, 1, 2, 3}' },
          { name: 'queue', value: 'deque([3, 1])' },
          { name: 'order', value: '[2, 0]' },
        ],
        output: [],
      },
      {
        line: 8,
        event: 'loop',
        summary: "Iteration 3: dequeue node 3. order=[2,0,3]. Node 3's neighbor is itself — already visited.",
        why: "Node 3 has a self-loop (3:[3]). Since 3 is already in visited, the self-loop doesn't cause infinite recursion. BFS handles self-loops and cycles gracefully.",
        memory: [
          { name: 'node', value: '3' },
          { name: 'order', value: '[2, 0, 3]' },
          { name: 'queue', value: 'deque([1])' },
        ],
        output: [],
      },
      {
        line: 8,
        event: 'loop',
        summary: 'Iteration 4: dequeue node 1. order=[2,0,3,1]. Neighbor 2 already visited. Queue empty.',
        why: 'All 4 nodes have been visited. BFS found node 1 at distance 2 from start (2→0→1). This is the shortest path — BFS guarantees this because it explores all distance-1 nodes before distance-2 nodes.',
        memory: [
          { name: 'node', value: '1' },
          { name: 'order', value: '[2, 0, 3, 1]' },
          { name: 'queue', value: 'deque([])' },
        ],
        output: [],
      },
      {
        line: 17,
        event: 'output',
        summary: 'result = [2, 0, 3, 1]. BFS traversal order from node 2.',
        why: 'Total work: each node dequeued once (V operations) and each edge examined once (E operations) = O(V+E). Space: O(V) for the queue and visited set. This is optimal — you must examine every edge at least once to guarantee shortest paths.',
        memory: [{ name: 'result', value: '[2, 0, 3, 1]' }],
        output: ['[2, 0, 3, 1]'],
      },
    ],
  },
  // ── DFS ───────────────────────────────────────────────────────────────────
  {
    id: 'dfs',
    title: 'Depth-First Search',
    level: 'Advanced',
    levelColor: 'text-rose-400',
    duration: '18 min',
    objective: 'Explore as deep as possible before backtracking. Watch the call stack grow with each recursive step.',
    prompt: 'Change the start node to 2. How does the traversal order change? What happens if you remove node 3 from the graph?',
    hint: 'DFS follows one path to its end before backtracking. The call stack depth equals the depth of the current path.',
    timeComplexity: 'O(V + E)',
    spaceComplexity: 'O(V)',
    useCases: [
      'Detecting cycles in a graph (used in deadlock detection)',
      'Topological sorting of dependencies (build systems, package managers)',
      'Solving mazes and puzzles (backtracking)',
      "Finding connected components and strongly connected components (Tarjan's algorithm)",
    ],
    approach:
      'DFS uses the call stack (recursion) to explore as far as possible along each branch before backtracking. We add the current node to visited before recursing on its neighbors — this prevents infinite loops on cycles. The recursive structure mirrors the tree structure of the DFS traversal. Each node is visited exactly once and each edge examined once, giving O(V+E) time. Stack space is O(V) in the worst case (a path graph where DFS goes to depth V).',
    output: ['[0, 1, 3, 2]'],
    starterCode: `def dfs(graph, node, visited=None):
    if visited is None:
        visited = set()
    visited.add(node)
    order = [node]
    for neighbor in graph[node]:
        if neighbor not in visited:
            order += dfs(graph, neighbor, visited)
    return order

graph = {0: [1, 2], 1: [0, 3], 2: [0], 3: [1]}
result = dfs(graph, 0)
print(result)
`,
    executionFrames: [
      {
        line: 10,
        event: 'assign',
        summary: 'graph = {0:[1,2], 1:[0,3], 2:[0], 3:[1]}. Start DFS from node 0.',
        why: 'Undirected graph with 4 nodes and 3 edges (0-1, 0-2, 1-3). Represented as adjacency list with each edge appearing twice (both directions). DFS will visit all 4 nodes starting from 0.',
        memory: [{ name: 'graph', value: '{0:[1,2], 1:[0,3], 2:[0], 3:[1]}' }],
        output: [],
      },
      {
        line: 1,
        event: 'call',
        summary: 'dfs(graph, 0, None). visited=None triggers initialization to empty set.',
        why: 'Using visited=None as default (not visited=set()) is important! Mutable default arguments in Python are shared across calls. With set(), all calls would share the same set — a classic Python gotcha.',
        memory: [
          { name: 'node', value: '0' },
          { name: 'visited', value: 'set()' },
          { name: 'order', value: '[0]' },
        ],
        output: [],
      },
      {
        line: 4,
        event: 'assign',
        summary: 'visited.add(0). order=[0]. Now loop over neighbors [1, 2].',
        why: 'We mark node 0 as visited BEFORE recursing. This prevents an infinite loop when neighbor 1 tries to visit node 0 back. The visited set is shared across all recursive calls via the visited parameter.',
        memory: [
          { name: 'node', value: '0' },
          { name: 'visited', value: '{0}' },
          { name: 'order', value: '[0]' },
        ],
        output: [],
      },
      {
        line: 6,
        event: 'branch',
        summary: 'Neighbor 1 not visited. Recurse: dfs(graph, 1, {0}).',
        why: 'DFS goes as deep as possible — it immediately recurses on the first neighbor (1) rather than enqueuing all neighbors like BFS. The call stack now has dfs(0) waiting for dfs(1) to return.',
        memory: [
          { name: 'node', value: '1' },
          { name: 'visited', value: '{0, 1}' },
          { name: 'order', value: '[1]' },
        ],
        output: [],
      },
      {
        line: 6,
        event: 'branch',
        summary: 'dfs(1): neighbor 0 is already visited. Recurse on neighbor 3: dfs(graph, 3, {0,1}).',
        why: 'Node 0 is in visited, so we skip it (avoiding backtrack to parent). Node 3 is unvisited — DFS dives deeper. Stack depth is now 3: dfs(0) → dfs(1) → dfs(3).',
        memory: [
          { name: 'node', value: '3' },
          { name: 'visited', value: '{0, 1, 3}' },
          { name: 'call stack depth', value: '3' },
        ],
        output: [],
      },
      {
        line: 5,
        event: 'return',
        summary: 'dfs(3): only neighbor is 1, already visited. Returns [3]. Backtrack to dfs(1).',
        why: "Node 3 is a leaf in the DFS tree — no unvisited neighbors. The function returns [3] and the call stack unwinds. This is the 'backtracking' step — DFS backtracks when it hits a dead end.",
        memory: [
          { name: 'node', value: '3' },
          { name: 'order (returned)', value: '[3]' },
          { name: 'visited', value: '{0, 1, 3}' },
        ],
        output: [],
      },
      {
        line: 7,
        event: 'return',
        summary: 'dfs(1) combines: order=[1]+[3]=[1,3]. No more unvisited neighbors. Backtrack to dfs(0).',
        why: 'dfs(1) finishes after exploring the entire subtree rooted at 1 (which included node 3). It returns [1, 3] to dfs(0), which adds it to its own order list.',
        memory: [
          { name: 'node', value: '1' },
          { name: 'order (returned)', value: '[1, 3]' },
          { name: 'visited', value: '{0, 1, 3}' },
        ],
        output: [],
      },
      {
        line: 6,
        event: 'branch',
        summary: 'Back in dfs(0): now process neighbor 2. Recurse: dfs(graph, 2, {0,1,3}).',
        why: 'After the dfs(1) subtree is fully explored, dfs(0) moves to its next neighbor: 2. DFS explores one full branch before moving to the next.',
        memory: [
          { name: 'node', value: '2' },
          { name: 'visited', value: '{0, 1, 2, 3}' },
          { name: 'order (returned)', value: '[2]' },
        ],
        output: [],
      },
      {
        line: 11,
        event: 'output',
        summary: 'result = [0, 1, 3, 2]. DFS visited in order: 0 → 1 → 3 (deep) → backtrack → 2.',
        why: 'DFS order: 0,1,3,2. BFS from 0 would give: 0,1,2,3. Same nodes, different order. DFS goes deep (1→3) before exploring node 2. This traversal order is the foundation of topological sort and cycle detection.',
        memory: [{ name: 'result', value: '[0, 1, 3, 2]' }],
        output: ['[0, 1, 3, 2]'],
      },
    ],
  },
  // ── Binary Tree Traversal ─────────────────────────────────────────────────
  {
    id: 'binary-tree-traversal',
    title: 'Binary Tree Traversal',
    level: 'Advanced',
    levelColor: 'text-rose-400',
    duration: '15 min',
    objective: 'See how in-order traversal visits a binary search tree in sorted order. Understand left-root-right recursion.',
    prompt: 'Add root.right.left = Node(5) and root.right.right = Node(7). What does the in-order result become?',
    hint: 'In-order visits left subtree, then root, then right subtree. For a BST this always gives sorted ascending order.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(h) — h = tree height',
    useCases: [
      'In-order traversal of a BST produces sorted output — used in tree-sort',
      'Expression tree evaluation (post-order gives Reverse Polish Notation)',
      'Directory tree traversal (pre-order to print file paths)',
      'Serialisation and deserialisation of trees for storage/transmission',
    ],
    approach:
      'Binary tree traversal visits every node exactly once. In-order (Left→Root→Right) visits the left subtree recursively, then the current node, then the right subtree. For a Binary Search Tree (BST), this produces sorted ascending output because all left subtree values are smaller and all right subtree values are larger. The recursion depth equals the tree height h: O(log n) for balanced trees, O(n) for degenerate (linked-list shaped) trees.',
    output: ['[1, 2, 3, 4, 6]'],
    starterCode: `class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def inorder(node, result=[]):
    if node:
        inorder(node.left, result)
        result.append(node.val)
        inorder(node.right, result)
    return result

root = Node(4)
root.left = Node(2)
root.right = Node(6)
root.left.left = Node(1)
root.left.right = Node(3)
result = inorder(root)
print(result)
`,
    executionFrames: [
      {
        line: 13,
        event: 'assign',
        summary: 'Build BST: root=4, left=2, right=6, 2.left=1, 2.right=3.',
        why: "This is a valid BST: all left subtree values (1,2,3) < root (4) < right subtree values (6). In-order traversal of any BST always produces sorted ascending output — that's the key property we're demonstrating.",
        memory: [
          { name: 'root.val', value: '4' },
          { name: 'root.left.val', value: '2' },
          { name: 'root.right.val', value: '6' },
        ],
        output: [],
      },
      {
        line: 7,
        event: 'call',
        summary: 'inorder(root=4): go left first. Call inorder(node.left = 2).',
        why: "In-order means: Left → Root → Right. We must fully explore the left subtree before processing the current node. The recursion naturally handles this — we don't return to node 4 until node 2's entire subtree is processed.",
        memory: [
          { name: 'current node', value: '4' },
          { name: 'result', value: '[]' },
        ],
        output: [],
      },
      {
        line: 7,
        event: 'call',
        summary: 'inorder(node=2): go left. Call inorder(node.left = 1).',
        why: 'Still following Left → Root → Right. From node 2, we first go to its left child (1) before appending 2 to result. Call stack: inorder(4) → inorder(2) → inorder(1).',
        memory: [
          { name: 'current node', value: '2' },
          { name: 'result', value: '[]' },
        ],
        output: [],
      },
      {
        line: 9,
        event: 'assign',
        summary: 'inorder(node=1): left is None → base case. Append 1 to result. result=[1].',
        why: "Node 1 is a leaf. Its left child is None, so the base case `if node` is False and we return immediately. Then we append node.val=1. 1 is correctly the first element — it's the leftmost (smallest) node in the BST.",
        memory: [
          { name: 'current node', value: '1' },
          { name: 'result', value: '[1]' },
        ],
        output: [],
      },
      {
        line: 9,
        event: 'assign',
        summary: 'Back in inorder(2): append 2. result=[1,2]. Then recurse right → inorder(3).',
        why: "After fully processing node 1 (left subtree of 2), we append node 2's value. Now result=[1,2]. Then we go to node 2's right child (3). In-order for the subtree rooted at 2: [1, 2, 3].",
        memory: [
          { name: 'current node', value: '2' },
          { name: 'result', value: '[1, 2]' },
        ],
        output: [],
      },
      {
        line: 9,
        event: 'assign',
        summary: 'inorder(node=3): leaf node. Append 3. result=[1,2,3]. Backtrack to inorder(4).',
        why: 'Node 3 is a leaf (both children None). We append 3 and return. The entire left subtree of root (4) has been processed: [1, 2, 3]. Now we unwind back to inorder(4).',
        memory: [
          { name: 'current node', value: '3' },
          { name: 'result', value: '[1, 2, 3]' },
        ],
        output: [],
      },
      {
        line: 9,
        event: 'assign',
        summary: 'Back in inorder(4): append 4. result=[1,2,3,4]. Then recurse right → inorder(6).',
        why: "Root value 4 is appended after its entire left subtree. This is the 'Root' step of Left→Root→Right. result=[1,2,3,4] so far — already sorted! Now we process the right subtree.",
        memory: [
          { name: 'current node', value: '4' },
          { name: 'result', value: '[1, 2, 3, 4]' },
        ],
        output: [],
      },
      {
        line: 9,
        event: 'assign',
        summary: 'inorder(node=6): leaf node. Append 6. result=[1,2,3,4,6]. Done!',
        why: "Node 6's children are both None (base case). Append 6. The complete in-order traversal is [1,2,3,4,6] — perfectly sorted! This works because BST property guarantees left<root<right at every node.",
        memory: [
          { name: 'current node', value: '6' },
          { name: 'result', value: '[1, 2, 3, 4, 6]' },
        ],
        output: [],
      },
      {
        line: 18,
        event: 'output',
        summary: 'print(result) → [1, 2, 3, 4, 6]. In-order BST traversal = sorted output!',
        why: 'O(n) time — every node visited exactly once. O(h) call stack space where h is tree height. For a balanced BST h=O(log n). Warning: the result=[] default argument is a Python gotcha — mutable defaults are shared between calls. In production code, use result=None and initialise inside the function.',
        memory: [{ name: 'result', value: '[1, 2, 3, 4, 6]' }],
        output: ['[1, 2, 3, 4, 6]'],
      },
    ],
  },
  // ── Fibonacci (Recursive) ─────────────────────────────────────────────────
  {
    id: 'fibonacci-recursive',
    title: 'Fibonacci (Recursive)',
    level: 'Advanced',
    levelColor: 'text-rose-400',
    duration: '15 min',
    objective: 'See the call tree fan out exponentially without memoization, then watch memoization collapse it to linear.',
    prompt: 'Increase fib(8) to fib(12). Count the total function calls. Now try fib_memo(30) — instant! Why?',
    hint: 'Naive fib(n) makes 2^n calls. Memoized fib_memo(n) makes exactly 2n-1 calls — once for each unique subproblem.',
    timeComplexity: 'O(2ⁿ) naive / O(n) memoized',
    spaceComplexity: 'O(n)',
    useCases: [
      'Dynamic programming pattern — memoize overlapping subproblems',
      'Fibonacci numbers appear in nature (spiral patterns, golden ratio)',
      'Understanding exponential vs polynomial time complexity',
      'Template for top-down DP: LCS, edit distance, knapsack',
    ],
    approach:
      "Naive recursive Fibonacci recalculates the same subproblems exponentially many times. fib(5) calls fib(4) and fib(3). fib(4) also calls fib(3) — that's a duplicate. The call tree has 2^n leaves, making it O(2^n). Memoization stores each result in a dict the first time it's computed. On subsequent calls, we return the cached result in O(1). This reduces the call tree from an exponential bush to a linear chain, making it O(n) time and O(n) space.",
    output: ['Naive: 21', 'Memo: 55'],
    starterCode: `def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)

def fib_memo(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fib_memo(n-1, memo) + fib_memo(n-2, memo)
    return memo[n]

print("Naive:", fib(8))
print("Memo:", fib_memo(10))
`,
    executionFrames: [
      {
        line: 1,
        event: 'call',
        summary: 'fib(8): naive recursion. Will make ~2^8 = 256 function calls.',
        why: 'Naive fib has no memory of previous results. fib(8) calls fib(7) and fib(6). fib(7) calls fib(6) again. fib(6) is computed many times — this exponential blowup makes it impractical for n > 40.',
        memory: [
          { name: 'n', value: '8' },
          { name: 'call count (approx)', value: '~256' },
        ],
        output: [],
      },
      {
        line: 2,
        event: 'branch',
        summary: 'Base case: if n <= 1, return n. fib(0)=0, fib(1)=1.',
        why: 'The base cases stop the recursion. Fibonacci is defined as F(0)=0, F(1)=1. Without base cases the recursion would never terminate. These are reached at the leaves of the call tree.',
        memory: [
          { name: 'n', value: '1' },
          { name: 'return value', value: '1' },
        ],
        output: [],
      },
      {
        line: 4,
        event: 'return',
        summary: 'fib(8) = fib(7) + fib(6). Each sub-call fans out into two more calls recursively.',
        why: 'Each call spawns TWO more calls (except base cases). Call tree has height 8 and up to 2^8=256 nodes. The tree is not balanced — fib(n-1) subtree is deeper than fib(n-2). Total calls = 2*fib(n+1)-1 ≈ 2^n.',
        memory: [
          { name: 'fib(8)', value: '21' },
          { name: 'fib(7)', value: '13' },
          { name: 'fib(6)', value: '8' },
        ],
        output: [],
      },
      {
        line: 14,
        event: 'output',
        summary: 'print("Naive:", fib(8)) → Naive: 21. Correct, but extremely slow for large n.',
        why: 'fib(8)=21 is correct. But for fib(40) the naive version makes ~2.7 billion calls! The problem is overlapping subproblems — fib(6) is computed in both the fib(7) branch and the fib(6) branch. Memoization solves this.',
        memory: [{ name: 'fib(8)', value: '21' }],
        output: ['Naive: 21'],
      },
      {
        line: 6,
        event: 'call',
        summary: 'fib_memo(10, {}): memoized version. memo={} starts empty.',
        why: 'memo={} as a default argument is intentionally shared across calls (a Python feature/gotcha). Here it acts as a persistent cache. Each unique n value will be computed exactly once and stored in memo.',
        memory: [
          { name: 'n', value: '10' },
          { name: 'memo', value: '{}' },
        ],
        output: [],
      },
      {
        line: 7,
        event: 'branch',
        summary: 'n=10 not in memo → proceed to compute. Recurse: fib_memo(9) + fib_memo(8).',
        why: 'First call for each n: cache miss. We compute and store the result. The recursion still goes deep (n, n-1, n-2, ... 1, 0) but each level only goes DOWN the fib(n-1) branch — fib(n-2) is already cached!',
        memory: [
          { name: 'n', value: '10' },
          { name: 'memo', value: '{}' },
          { name: 'cache miss', value: 'true' },
        ],
        output: [],
      },
      {
        line: 11,
        event: 'assign',
        summary: 'Computing down: fib_memo(2)=1, fib_memo(3)=2, fib_memo(4)=3... memo fills up.',
        why: "With memoization, we compute fib(0) through fib(10) in sequence, caching each result. When fib_memo(10) later needs fib_memo(8), it's already in memo — O(1) lookup instead of O(2^8) recursive calls.",
        memory: [{ name: 'memo', value: '{0:0, 1:1, 2:1, 3:2, 4:3, 5:5}' }],
        output: [],
      },
      {
        line: 7,
        event: 'branch',
        summary: 'Cache hit! fib_memo(8) needed by fib_memo(10) found in memo instantly.',
        why: 'memo[8]=21 was computed when calculating fib_memo(9). Now fib_memo(10) gets it in O(1). Without memoization this would recompute 2^8=256 calls. With memo: O(1). This is the essence of dynamic programming.',
        memory: [
          { name: 'memo', value: '{0:0,1:1,2:1,3:2,4:3,5:5,6:8,7:13,8:21,9:34}' },
          { name: 'cache hit for n=8', value: '21' },
        ],
        output: [],
      },
      {
        line: 15,
        event: 'output',
        summary: 'print("Memo:", fib_memo(10)) → Memo: 55. Only 19 calls made (2n-1)!',
        why: "fib_memo(10)=55 computed with only 2×10-1=19 function calls vs 177 for naive fib(10). The memoized version is O(n) time and O(n) space. For fib(100) it's 199 calls vs 10^21 — the difference between instant and longer than the age of the universe.",
        memory: [
          { name: 'fib_memo(10)', value: '55' },
          { name: 'total calls', value: '19' },
        ],
        output: ['Naive: 21', 'Memo: 55'],
      },
    ],
  },

  // ── Dijkstra's Shortest Path ──────────────────────────────────────────────
  {
    id: 'dijkstra',
    title: "Dijkstra's Shortest Path",
    level: 'mastery',
    levelColor: 'text-amber-400',
    duration: '25 min',
    objective: 'Use a min-heap priority queue to greedily explore the nearest unvisited node and find shortest paths from a source.',
    prompt: 'Add a new node 4 connected from node 3 with weight 2. What is the shortest path from 0 to 4?',
    hint: "Extend the graph dict with node 4 and add (4,2) to node 3's adjacency list. Run dijkstra and check dist[4].",
    timeComplexity: 'O((V + E) log V)',
    spaceComplexity: 'O(V)',
    useCases: ['GPS navigation', 'Network routing', 'Game pathfinding', 'Social network shortest paths'],
    approach:
      'Dijkstra uses a min-heap priority queue to greedily explore the nearest unvisited node. It maintains a distance table initialized to infinity, updating shorter paths as they are discovered. The algorithm is optimal for non-negative weighted graphs. It processes each edge at most once per relaxation.',
    output: ['{0: 0, 1: 3, 2: 1, 3: 4}'],
    starterCode: `import heapq

def dijkstra(graph, start):
    dist = {node: float('inf') for node in graph}
    dist[start] = 0
    pq = [(0, start)]
    while pq:
        d, u = heapq.heappop(pq)
        if d > dist[u]:
            continue
        for v, w in graph[u]:
            if dist[u] + w < dist[v]:
                dist[v] = dist[u] + w
                heapq.heappush(pq, (dist[v], v))
    return dist

graph = {0: [(1,4),(2,1)], 1: [(3,1)], 2: [(1,2),(3,5)], 3: []}
print(dijkstra(graph, 0))
`,
    executionFrames: [
      {
        line: 3,
        event: 'call',
        summary: 'dijkstra(graph, start=0) called. Initialize distance table.',
        why: 'We call dijkstra with start=0. The function will compute shortest distances from node 0 to all other nodes using a greedy approach with a min-heap.',
        memory: [
          { name: 'start', value: '0' },
          { name: 'graph nodes', value: '{0,1,2,3}' },
        ],
      },
      {
        line: 4,
        event: 'assign',
        summary: 'dist = {0:inf, 1:inf, 2:inf, 3:inf} — all distances start at infinity.',
        why: "We initialize all distances to infinity to represent 'not yet reached'. Only the source gets distance 0. This is the classic initialization for Dijkstra.",
        memory: [{ name: 'dist', value: '{0:inf,1:inf,2:inf,3:inf}' }],
      },
      {
        line: 5,
        event: 'assign',
        summary: 'dist[0] = 0 — source node distance is zero.',
        why: 'The source node costs 0 to reach from itself. This seeds the algorithm — every shortest path starts from here.',
        memory: [
          { name: 'dist', value: '{0:0,1:inf,2:inf,3:inf}' },
          { name: 'pq', value: '[(0,0)]' },
        ],
      },
      {
        line: 7,
        event: 'loop',
        summary: 'Pop (0,0) from heap — visit node 0 with distance 0.',
        why: 'heappop gives the node with the smallest tentative distance. Node 0 has dist 0, so we explore its neighbors first. This greedy choice is correct for non-negative weights.',
        memory: [
          { name: 'd', value: '0' },
          { name: 'u', value: '0' },
          { name: 'dist', value: '{0:0,1:inf,2:inf,3:inf}' },
        ],
      },
      {
        line: 11,
        event: 'loop',
        summary: 'Explore neighbors of node 0: (1,4) and (2,1).',
        why: 'Node 0 connects to node 1 with weight 4 and node 2 with weight 1. We check if going through node 0 gives a shorter path to each neighbor.',
        memory: [
          { name: 'u', value: '0' },
          { name: 'neighbors', value: '[(1,4),(2,1)]' },
        ],
      },
      {
        line: 12,
        event: 'compare',
        summary: 'dist[0]+1=1 < dist[2]=inf → relax edge to node 2.',
        why: 'The path 0→2 costs 1, which is better than infinity. We update dist[2]=1 and push (1,2) to the heap. Edge relaxation is the core update step of Dijkstra.',
        memory: [
          { name: 'dist', value: '{0:0,1:4,2:1,3:inf}' },
          { name: 'pq', value: '[(1,2),(4,1)]' },
        ],
      },
      {
        line: 7,
        event: 'loop',
        summary: 'Pop (1,2) — visit node 2. Relax edges to nodes 1 and 3.',
        why: 'Node 2 has the smallest dist=1. Its neighbor node 1 gets dist=1+2=3 (better than 4), and node 3 gets dist=1+5=6. The heap is updated with these improved distances.',
        memory: [
          { name: 'd', value: '1' },
          { name: 'u', value: '2' },
          { name: 'dist', value: '{0:0,1:3,2:1,3:6}' },
        ],
      },
      {
        line: 15,
        event: 'return',
        summary: 'return dist → {0:0, 1:3, 2:1, 3:4}',
        why: 'After all nodes are settled, dist contains the shortest path from node 0 to every other node. Node 3 is reached via 0→2→1→3 with total cost 0+1+2+1=4.',
        memory: [
          { name: 'dist[0]', value: '0' },
          { name: 'dist[1]', value: '3' },
          { name: 'dist[2]', value: '1' },
          { name: 'dist[3]', value: '4' },
        ],
        output: ['{0: 0, 1: 3, 2: 1, 3: 4}'],
      },
    ],
  },

  // ── 0/1 Knapsack DP ───────────────────────────────────────────────────────
  {
    id: 'knapsack',
    title: '0/1 Knapsack DP',
    level: 'mastery',
    levelColor: 'text-amber-400',
    duration: '25 min',
    objective: 'Build a 2D DP table to find the maximum value that fits within a weight capacity.',
    prompt: 'Add a 5th item: weight=1, value=2. Does it change the optimal value for capacity=8?',
    hint: 'Add 1 to weights and 2 to values. The DP table gains an extra row. Check dp[5][8].',
    timeComplexity: 'O(n × W)',
    spaceComplexity: 'O(n × W)',
    useCases: ['Resource allocation', 'Portfolio optimization', 'Project selection', 'Cargo loading'],
    approach:
      'The 0/1 knapsack uses a 2D DP table where dp[i][w] = max value using the first i items with capacity w. For each item we decide: skip it (take dp[i-1][w]) or take it (dp[i-1][w-weight]+value), choosing the max. Bottom-up filling avoids recomputation, giving O(n×W) time and space.',
    output: ['10'],
    starterCode: `def knapsack(weights, values, capacity):
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]
    for i in range(1, n + 1):
        for w in range(capacity + 1):
            dp[i][w] = dp[i-1][w]
            if weights[i-1] <= w:
                dp[i][w] = max(dp[i][w], dp[i-1][w-weights[i-1]] + values[i-1])
    return dp[n][capacity]

weights = [2, 3, 4, 5]
values  = [3, 4, 5, 6]
capacity = 8
print(knapsack(weights, values, capacity))
`,
    executionFrames: [
      {
        line: 1,
        event: 'call',
        summary: 'knapsack(weights=[2,3,4,5], values=[3,4,5,6], capacity=8) called.',
        why: 'We have 4 items with given weights and values, and a knapsack capacity of 8. The goal is to find the maximum total value without exceeding the weight limit.',
        memory: [
          { name: 'n', value: '4' },
          { name: 'capacity', value: '8' },
        ],
      },
      {
        line: 3,
        event: 'assign',
        summary: 'dp = 5×9 table of zeros — rows=items+1, cols=capacity+1.',
        why: 'The DP table has n+1 rows (0..n items) and capacity+1 columns (0..capacity). Row 0 and column 0 are base cases: zero items or zero capacity gives value 0.',
        memory: [
          { name: 'dp[0]', value: '[0,0,0,0,0,0,0,0,0]' },
          { name: 'dp size', value: '5×9' },
        ],
      },
      {
        line: 4,
        event: 'loop',
        summary: 'i=1: processing item 0 (weight=2, value=3).',
        why: 'We fill the table row by row. Row i considers whether to include item i-1. For each capacity w, we choose the better of skipping or including this item.',
        memory: [
          { name: 'i', value: '1' },
          { name: 'item weight', value: '2' },
          { name: 'item value', value: '3' },
        ],
      },
      {
        line: 6,
        event: 'assign',
        summary: 'dp[1][w] = dp[0][w] — inherit previous row (skip item 1).',
        why: 'The skip option copies the best value achievable without item 1. This is always available regardless of capacity.',
        memory: [
          { name: 'dp[1][0..1]', value: '[0,0]' },
          { name: 'dp[1][2]', value: '0 (before take)' },
        ],
      },
      {
        line: 7,
        event: 'branch',
        summary: 'weights[0]=2 ≤ w=2 → can include item 1. Take the max.',
        why: "When w >= item's weight, we can choose to include it: dp[i][w] = max(skip, dp[i-1][w-weight]+value). For w=2: max(0, dp[0][0]+3) = max(0,3) = 3.",
        memory: [
          { name: 'dp[1][2]', value: '3' },
          { name: 'dp[1][3]', value: '3' },
        ],
      },
      {
        line: 4,
        event: 'loop',
        summary: 'i=2: item 1 (weight=3, value=4). Combine with item 0.',
        why: 'Now we consider adding item 1. At w=5: skip gives dp[1][5]=3, take gives dp[1][2]+4=7. Best is 7. The DP correctly combines items.',
        memory: [
          { name: 'i', value: '2' },
          { name: 'dp[2][5]', value: '7' },
          { name: 'dp[2][8]', value: '7' },
        ],
      },
      {
        line: 4,
        event: 'loop',
        summary: 'i=3,4: items 2 and 3 fill remaining rows.',
        why: 'Adding items of weight 4 (value 5) and weight 5 (value 6) improves the table. At capacity 8: items 0+1+2 weigh 9 (too heavy), but 0+1 weigh 5 giving value 7, and 0+3 weigh 7 giving value 9, or 1+3 weigh 8 giving value 10.',
        memory: [
          { name: 'dp[4][8]', value: '10' },
          { name: 'best combo', value: 'items 1+3' },
        ],
      },
      {
        line: 9,
        event: 'return',
        summary: 'return dp[4][8] = 10 — items with weights [3,5] and values [4,6].',
        why: 'The maximum value achievable with capacity 8 is 10, using items of weight 3 (value 4) and weight 5 (value 6). Total weight = 8 ≤ 8. The DP table encodes all optimal sub-problems.',
        memory: [
          { name: 'dp[n][capacity]', value: '10' },
          { name: 'selected weights', value: '[3,5]' },
        ],
        output: ['10'],
      },
    ],
  },

  // ── Longest Common Subsequence ────────────────────────────────────────────
  {
    id: 'lcs',
    title: 'Longest Common Subsequence',
    level: 'mastery',
    levelColor: 'text-amber-400',
    duration: '20 min',
    objective: 'Fill a 2D DP table to find the length of the longest subsequence common to two strings.',
    prompt: "Try lcs('AGGTAB', 'GXTXAYB'). What is the LCS length? Which characters form it?",
    hint: 'The LCS of AGGTAB and GXTXAYB is GTAB with length 4. The DP table shows how diagonal moves mark matches.',
    timeComplexity: 'O(m × n)',
    spaceComplexity: 'O(m × n)',
    useCases: ['Diff tools (git diff)', 'DNA sequence alignment', 'Plagiarism detection', 'File comparison'],
    approach:
      'LCS builds a 2D table where dp[i][j] = length of LCS of s1[:i] and s2[:j]. When characters match, dp[i][j] = dp[i-1][j-1]+1 (extend the previous LCS). When they differ, dp[i][j] = max(dp[i-1][j], dp[i][j-1]) (best without one character). The answer is dp[m][n].',
    output: ['4'],
    starterCode: `def lcs(s1, s2):
    m, n = len(s1), len(s2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if s1[i-1] == s2[j-1]:
                dp[i][j] = dp[i-1][j-1] + 1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return dp[m][n]

print(lcs("ABCBDAB", "BDCAB"))
`,
    executionFrames: [
      {
        line: 1,
        event: 'call',
        summary: "lcs('ABCBDAB', 'BDCAB') called. m=7, n=5.",
        why: "We want the longest subsequence present in both strings. A subsequence doesn't need to be contiguous. BDAB is common with length 4.",
        memory: [
          { name: 's1', value: 'ABCBDAB' },
          { name: 's2', value: 'BDCAB' },
          { name: 'm', value: '7' },
          { name: 'n', value: '5' },
        ],
      },
      {
        line: 3,
        event: 'assign',
        summary: 'dp = 8×6 table of zeros (rows=m+1, cols=n+1).',
        why: 'The extra row and column (index 0) serve as base cases: LCS of any string with an empty string is 0. We build up from these known values.',
        memory: [
          { name: 'dp rows', value: '8' },
          { name: 'dp cols', value: '6' },
          { name: 'dp[0][*]', value: 'all 0' },
        ],
      },
      {
        line: 4,
        event: 'loop',
        summary: "i=1 (s1[0]='A'): compare with each character of s2.",
        why: 'For each position i in s1, we compare with all positions j in s2. This nested loop visits every (i,j) cell exactly once, giving O(m×n) time.',
        memory: [
          { name: 'i', value: '1' },
          { name: 's1[0]', value: 'A' },
        ],
      },
      {
        line: 6,
        event: 'compare',
        summary: "s1[0]='A' vs s2[4]='B' — no match. dp[1][5] = max(dp[0][5], dp[1][4]) = 0.",
        why: "When characters differ, we can't extend any common subsequence. We take the best result from ignoring one character from either string.",
        memory: [
          { name: 's1[i-1]', value: 'A' },
          { name: 's2[j-1]', value: 'B' },
          { name: 'dp[1][5]', value: '0' },
        ],
      },
      {
        line: 6,
        event: 'compare',
        summary: "s1[1]='B' matches s2[0]='B' → dp[2][1] = dp[1][0]+1 = 1.",
        why: 'A match means we can extend the LCS from the diagonal predecessor. dp[i-1][j-1] is the LCS length before this pair, and we add 1 for this new common character.',
        memory: [
          { name: 'i', value: '2' },
          { name: 'j', value: '1' },
          { name: 'match', value: 'B=B' },
          { name: 'dp[2][1]', value: '1' },
        ],
      },
      {
        line: 7,
        event: 'assign',
        summary: "dp[2][1] = dp[1][0]+1 = 1. Diagonal extension for 'B'.",
        why: 'The diagonal move dp[i-1][j-1]+1 captures that we found a matching character. This is the fundamental recurrence: extend the best LCS found before this position.',
        memory: [
          { name: 'dp[2][1]', value: '1' },
          { name: 'dp[3][2]', value: '1' },
        ],
      },
      {
        line: 4,
        event: 'loop',
        summary: 'Table fills: matches found at (B,B), (C,C), (D,D), (A,A), (B,B).',
        why: 'As we scan, each diagonal match increments the LCS count. By dp[7][5], all matches for BDAB have been accumulated. The table encodes every sub-problem result.',
        memory: [
          { name: 'dp[7][5]', value: '4' },
          { name: 'LCS length', value: '4' },
        ],
      },
      {
        line: 10,
        event: 'return',
        summary: "return dp[7][5] = 4. LCS is 'BDAB'.",
        why: 'The bottom-right cell dp[m][n] contains the length of the LCS of the complete strings. To recover the actual subsequence, trace back through the table following diagonal moves.',
        memory: [
          { name: 'dp[m][n]', value: '4' },
          { name: 'LCS', value: 'BDAB' },
        ],
        output: ['4'],
      },
    ],
  },

  // ── Coin Change DP ────────────────────────────────────────────────────────
  {
    id: 'coin-change',
    title: 'Coin Change DP',
    level: 'mastery',
    levelColor: 'text-amber-400',
    duration: '18 min',
    objective: 'Build a 1D DP array to find the minimum number of coins needed to make a target amount.',
    prompt: 'Try coin_change([2], 3). What does the function return and why?',
    hint: 'With only coin=2, you cannot make amount=3 (only even amounts are reachable). The function should return -1.',
    timeComplexity: 'O(amount × coins)',
    spaceComplexity: 'O(amount)',
    useCases: ['Currency exchange', 'Vending machines', 'Game power-ups', 'Resource decomposition'],
    approach:
      'Coin change uses a 1D DP array where dp[a] = minimum coins to make amount a. We initialize dp[0]=0 (zero coins for zero amount) and dp[1..amount]=infinity. For each amount a, we try every coin: if coin ≤ a, dp[a] = min(dp[a], dp[a-coin]+1). The +1 accounts for using this one coin.',
    output: ['2'],
    starterCode: `def coin_change(coins, amount):
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0
    for a in range(1, amount + 1):
        for coin in coins:
            if coin <= a:
                dp[a] = min(dp[a], dp[a - coin] + 1)
    return dp[amount] if dp[amount] != float('inf') else -1

print(coin_change([1, 5, 6, 9], 11))
`,
    executionFrames: [
      {
        line: 1,
        event: 'call',
        summary: 'coin_change([1,5,6,9], 11) called. Find min coins for amount=11.',
        why: 'We want the fewest coins from [1,5,6,9] that sum to 11. Greedy fails here: 9+1+1=3, but 6+5=2 coins is optimal.',
        memory: [
          { name: 'coins', value: '[1,5,6,9]' },
          { name: 'amount', value: '11' },
        ],
      },
      {
        line: 2,
        event: 'assign',
        summary: 'dp = [inf, inf, ..., inf] (length 12). All amounts unreachable.',
        why: "Infinity means 'not yet reachable'. We will overwrite these with actual minimum coin counts as we discover valid combinations.",
        memory: [
          { name: 'dp length', value: '12' },
          { name: 'dp[0..11]', value: 'all inf' },
        ],
      },
      {
        line: 3,
        event: 'assign',
        summary: 'dp[0] = 0 — zero coins needed for amount 0.',
        why: 'The base case: making amount 0 requires 0 coins. This seeds the DP — every reachable amount is built by adding one coin to a previously-reachable amount.',
        memory: [
          { name: 'dp[0]', value: '0' },
          { name: 'dp[1..11]', value: 'inf' },
        ],
      },
      {
        line: 4,
        event: 'loop',
        summary: 'a=1: try each coin. Only coin=1 works. dp[1] = dp[0]+1 = 1.',
        why: 'For amount 1, only coin=1 satisfies coin ≤ 1. dp[1] = min(inf, dp[0]+1) = 1. We need exactly 1 coin.',
        memory: [
          { name: 'a', value: '1' },
          { name: 'dp[1]', value: '1' },
        ],
      },
      {
        line: 6,
        event: 'compare',
        summary: 'a=5: coin=5 → dp[5] = dp[0]+1 = 1. One coin solves it.',
        why: 'Amount 5 is reachable with a single coin-5. dp[5]=min(inf, dp[0]+1)=1. Similarly dp[6]=1 and dp[9]=1 for their matching coins.',
        memory: [
          { name: 'dp[5]', value: '1' },
          { name: 'dp[6]', value: '1' },
          { name: 'dp[9]', value: '1' },
        ],
      },
      {
        line: 7,
        event: 'assign',
        summary: 'a=11: try coin=6 → dp[11] = min(inf, dp[5]+1) = min(inf, 2) = 2.',
        why: '11-6=5, and dp[5]=1 (one coin-5), so 6+5=11 uses 2 coins total. This is better than 9+1+1=3 coins. The DP finds the optimal combination.',
        memory: [
          { name: 'a', value: '11' },
          { name: 'dp[11] via coin 6', value: '2' },
          { name: 'dp[11] via coin 9', value: '3' },
        ],
      },
      {
        line: 4,
        event: 'loop',
        summary: 'a=11 settled: dp[11]=2 (coins 5+6). All amounts filled.',
        why: 'After considering all amounts 1..11 with all coins, the DP array is complete. Each dp[a] holds the minimum coins needed for amount a.',
        memory: [
          { name: 'dp[11]', value: '2' },
          { name: 'optimal coins', value: '5+6' },
        ],
      },
      {
        line: 8,
        event: 'return',
        summary: 'dp[11]=2 ≠ inf → return 2.',
        why: 'The answer is 2: one coin-5 and one coin-6. If dp[amount] were still infinity, it would mean the amount is unreachable with the given coins, so we return -1.',
        memory: [
          { name: 'dp[amount]', value: '2' },
          { name: 'result', value: '2' },
        ],
        output: ['2'],
      },
    ],
  },

  // ── Topological Sort (Kahn's) ─────────────────────────────────────────────
  {
    id: 'topological-sort',
    title: "Topological Sort (Kahn's)",
    level: 'mastery',
    levelColor: 'text-amber-400',
    duration: '20 min',
    objective: "Use BFS with in-degree tracking (Kahn's algorithm) to produce a valid topological ordering of a DAG.",
    prompt: 'Add edge (4,5) and vertex 5. Does the topological order still include all vertices? What is the new order?',
    hint: "With 6 vertices, the valid order becomes [0,1,2,3,4,5]. Kahn's algorithm processes node 5 after node 4 since 4→5.",
    timeComplexity: 'O(V + E)',
    spaceComplexity: 'O(V)',
    useCases: ['Build systems (make/gradle)', 'Course prerequisites', 'Task scheduling', 'Package dependency resolution'],
    approach:
      "Kahn's algorithm maintains an in-degree count for each node. Nodes with in-degree 0 (no prerequisites) start in the queue. We repeatedly dequeue a node, append it to the order, and decrement the in-degree of its neighbors — adding any that reach 0. If the final order contains all vertices, the graph is a valid DAG.",
    output: ['[0, 1, 2, 3, 4]'],
    starterCode: `from collections import deque

def topo_sort(vertices, edges):
    in_degree = [0] * vertices
    adj = [[] for _ in range(vertices)]
    for u, v in edges:
        adj[u].append(v)
        in_degree[v] += 1
    queue = deque(i for i in range(vertices) if in_degree[i] == 0)
    order = []
    while queue:
        node = queue.popleft()
        order.append(node)
        for neighbor in adj[node]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    return order if len(order) == vertices else []

edges = [(0,1),(0,2),(1,3),(2,3),(3,4)]
print(topo_sort(5, edges))
`,
    executionFrames: [
      {
        line: 3,
        event: 'call',
        summary: 'topo_sort(5, edges) called. Graph: 0→1, 0→2, 1→3, 2→3, 3→4.',
        why: 'We have a DAG with 5 nodes. A topological sort orders them so every edge points from earlier to later in the sequence — prerequisite before dependent.',
        memory: [
          { name: 'vertices', value: '5' },
          { name: 'edges count', value: '5' },
        ],
      },
      {
        line: 4,
        event: 'assign',
        summary: 'in_degree = [0,0,0,0,0] initially. Count edges into each node.',
        why: 'in_degree[v] counts how many edges point INTO v (prerequisites). Nodes with in_degree=0 have no prerequisites and can be processed first.',
        memory: [{ name: 'in_degree', value: '[0,0,0,0,0]' }],
      },
      {
        line: 6,
        event: 'loop',
        summary: 'Process edges: in_degree becomes [0,1,1,2,1].',
        why: "Each edge (u,v) increments in_degree[v]. Node 3 has in_degree=2 (from nodes 1 and 2). Node 0 has in_degree=0 — it's the only starting point.",
        memory: [
          { name: 'in_degree', value: '[0,1,1,2,1]' },
          { name: 'adj[0]', value: '[1,2]' },
        ],
      },
      {
        line: 9,
        event: 'assign',
        summary: 'queue = deque([0]) — only node 0 has in_degree=0.',
        why: 'Node 0 has no prerequisites. It enters the queue first. This is the source of all paths in this DAG.',
        memory: [
          { name: 'queue', value: 'deque([0])' },
          { name: 'order', value: '[]' },
        ],
      },
      {
        line: 11,
        event: 'loop',
        summary: 'Dequeue 0, append to order. Decrement in_degree of neighbors 1 and 2.',
        why: "Processing node 0 'removes' it from the graph. Its dependents (1 and 2) each lose one prerequisite. Both reach in_degree=0 and join the queue.",
        memory: [
          { name: 'order', value: '[0]' },
          { name: 'queue', value: 'deque([1,2])' },
          { name: 'in_degree[1]', value: '0' },
          { name: 'in_degree[2]', value: '0' },
        ],
      },
      {
        line: 11,
        event: 'loop',
        summary: 'Dequeue 1, append. Neighbor 3: in_degree[3]=2→1. Not yet ready.',
        why: "Node 1 is processed next. Node 3 still depends on node 2, so it can't be processed until both prerequisites are done.",
        memory: [
          { name: 'order', value: '[0,1]' },
          { name: 'in_degree[3]', value: '1' },
          { name: 'queue', value: 'deque([2])' },
        ],
      },
      {
        line: 11,
        event: 'loop',
        summary: 'Dequeue 2. in_degree[3]=1→0. Node 3 joins queue. Then 3→4.',
        why: 'After processing node 2, node 3 finally has all prerequisites met and enters the queue. Then processing 3 frees node 4.',
        memory: [
          { name: 'order', value: '[0,1,2,3,4]' },
          { name: 'queue', value: 'deque([])' },
        ],
      },
      {
        line: 17,
        event: 'return',
        summary: 'len(order)=5 == vertices=5 → return [0,1,2,3,4].',
        why: 'A valid topological order exists — the graph is a DAG. If a cycle existed, some nodes would never reach in_degree=0, and len(order) < vertices, returning [] to signal the cycle.',
        memory: [
          { name: 'order', value: '[0,1,2,3,4]' },
          { name: 'valid DAG', value: 'true' },
        ],
        output: ['[0, 1, 2, 3, 4]'],
      },
    ],
  },

  // ── Hello World & Print ────────────────────────────────────────────────────
  {
    id: 'hello-world',
    title: 'Hello World & Print',
    level: 'foundation',
    levelColor: 'text-violet-400',
    duration: '3 min',
    objective: 'Learn how to output text to the console using print().',
    prompt: 'Use print() to display messages to the console. This is the foundation of all programming.',
    hint: 'print() can take multiple arguments separated by commas',
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(1)',
    useCases: ['First program', 'Output testing', 'Debugging', 'Quick checks'],
    approach:
      'The print() function sends output to the console. Python executes statements line by line from top to bottom. Comments (starting with #) are ignored by the interpreter. String literals are enclosed in quotes.',
    output: ['Hello, World!', 'Welcome to PyAnimate!', 'Hello, Learner'],
    starterCode: `# This is a comment in Python
print("Hello, World!")
print("Welcome to PyAnimate!")

# Variables hold data
name = "Learner"
print("Hello,", name)
`,
    executionFrames: [
      {
        line: 2,
        summary: 'Execute print statement',
        why: 'Demonstrates how to output text to the console',
        event: 'output',
        memory: [],
        output: ['Hello, World!'],
      },
      {
        line: 3,
        summary: 'Print welcome message',
        why: 'Shows that multiple print statements execute in sequence',
        event: 'output',
        memory: [],
        output: ['Hello, World!', 'Welcome to PyAnimate!'],
      },
      {
        line: 6,
        summary: 'Assign variable',
        why: 'Variables store data that can be reused',
        event: 'assign',
        memory: [{ name: 'name', value: '"Learner"' }],
        output: ['Hello, World!', 'Welcome to PyAnimate!'],
      },
      {
        line: 7,
        summary: 'Print with variable',
        why: 'Shows how to combine text and variables in output',
        event: 'output',
        memory: [{ name: 'name', value: '"Learner"' }],
        output: ['Hello, World!', 'Welcome to PyAnimate!', 'Hello, Learner'],
      },
    ],
  },

  // ── String Operations ──────────────────────────────────────────────────────
  {
    id: 'string-operations',
    title: 'String Operations',
    level: 'foundation',
    levelColor: 'text-violet-400',
    duration: '3 min',
    objective: 'Master string manipulation methods and indexing.',
    prompt: 'Modify the text to see how string methods transform data. Try different slicing ranges.',
    hint: 'Remember that indexing starts at 0 and negative indices count from the end',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    useCases: ['Text processing', 'User input validation', 'Data cleaning', 'Format conversion'],
    approach:
      'Strings in Python are immutable sequences. Methods like upper() and lower() create new strings. Indexing starts at 0, negative indices count from the end. Slicing [start:end] extracts substrings.',
    output: ['PYTHON python 6', 'P n yth'],
    starterCode: `text = "Python"
upper = text.upper()
lower = text.lower()
length = len(text)
first = text[0]
last = text[-1]
slice_text = text[1:4]

print(upper, lower, length)
print(first, last, slice_text)
`,
    executionFrames: [
      {
        line: 1,
        summary: 'Create string',
        why: 'Strings are immutable sequences of characters in Python',
        event: 'assign',
        memory: [{ name: 'text', value: '"Python"' }],
      },
      {
        line: 2,
        summary: 'Convert to uppercase',
        why: 'upper() creates a new string with all letters capitalized',
        event: 'assign',
        memory: [
          { name: 'text', value: '"Python"' },
          { name: 'upper', value: '"PYTHON"' },
        ],
      },
      {
        line: 3,
        summary: 'Convert to lowercase',
        why: 'lower() creates a new string with all letters in lowercase',
        event: 'assign',
        memory: [
          { name: 'text', value: '"Python"' },
          { name: 'upper', value: '"PYTHON"' },
          { name: 'lower', value: '"python"' },
        ],
      },
      {
        line: 4,
        summary: 'Get string length',
        why: 'len() returns the number of characters in the string',
        event: 'assign',
        memory: [
          { name: 'text', value: '"Python"' },
          { name: 'upper', value: '"PYTHON"' },
          { name: 'lower', value: '"python"' },
          { name: 'length', value: '6' },
        ],
      },
      {
        line: 5,
        summary: 'Get first character',
        why: 'Index 0 accesses the first character of the string',
        event: 'assign',
        memory: [
          { name: 'text', value: '"Python"' },
          { name: 'upper', value: '"PYTHON"' },
          { name: 'lower', value: '"python"' },
          { name: 'length', value: '6' },
          { name: 'first', value: '"P"' },
        ],
      },
      {
        line: 6,
        summary: 'Get last character',
        why: 'Index -1 accesses the last character, counting from the end',
        event: 'assign',
        memory: [
          { name: 'text', value: '"Python"' },
          { name: 'upper', value: '"PYTHON"' },
          { name: 'lower', value: '"python"' },
          { name: 'length', value: '6' },
          { name: 'first', value: '"P"' },
          { name: 'last', value: '"n"' },
        ],
      },
      {
        line: 7,
        summary: 'Slice substring',
        why: 'Slicing [1:4] extracts characters from index 1 to 3 (end is exclusive)',
        event: 'assign',
        memory: [
          { name: 'text', value: '"Python"' },
          { name: 'upper', value: '"PYTHON"' },
          { name: 'lower', value: '"python"' },
          { name: 'length', value: '6' },
          { name: 'first', value: '"P"' },
          { name: 'last', value: '"n"' },
          { name: 'slice_text', value: '"yth"' },
        ],
      },
      {
        line: 9,
        summary: 'Print results',
        why: 'Display the uppercase, lowercase, and length',
        event: 'output',
        memory: [
          { name: 'upper', value: '"PYTHON"' },
          { name: 'lower', value: '"python"' },
          { name: 'length', value: '6' },
        ],
        output: ['PYTHON python 6'],
      },
      {
        line: 10,
        summary: 'Print indexed values',
        why: 'Display the first character, last character, and slice',
        event: 'output',
        memory: [
          { name: 'first', value: '"P"' },
          { name: 'last', value: '"n"' },
          { name: 'slice_text', value: '"yth"' },
        ],
        output: ['PYTHON python 6', 'P n yth'],
      },
    ],
  },

  // ── Arithmetic & Math ──────────────────────────────────────────────────────
  {
    id: 'arithmetic',
    title: 'Arithmetic & Math',
    level: 'foundation',
    levelColor: 'text-violet-400',
    duration: '3 min',
    objective: "Understand Python's arithmetic operators and their behavior.",
    prompt: 'Change a and b to see how different operators work. Notice the difference between / and //.',
    hint: 'Division (/) always returns a float, while floor division (//) returns an integer',
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(1)',
    useCases: ['Calculations', 'Game logic', 'Financial apps', 'Scientific computing'],
    approach:
      'Python supports standard arithmetic operators: +, -, *, / (float division), // (integer division), % (remainder), ** (exponentiation). Operations follow standard mathematical precedence.',
    output: ['13 7 30', '3.3333333333333335 3 1 100'],
    starterCode: `a = 10
b = 3

add = a + b
subtract = a - b
multiply = a * b
divide = a / b
floor_div = a // b
modulo = a % b
power = a ** 2

print(add, subtract, multiply)
print(divide, floor_div, modulo, power)
`,
    executionFrames: [
      {
        line: 1,
        summary: 'Assign first number',
        why: 'Variables store numeric values for calculation',
        event: 'assign',
        memory: [{ name: 'a', value: '10' }],
      },
      {
        line: 2,
        summary: 'Assign second number',
        why: 'We need two operands for binary operations',
        event: 'assign',
        memory: [
          { name: 'a', value: '10' },
          { name: 'b', value: '3' },
        ],
      },
      {
        line: 4,
        summary: 'Addition: 10 + 3 = 13',
        why: 'The + operator adds two numbers',
        event: 'assign',
        memory: [
          { name: 'a', value: '10' },
          { name: 'b', value: '3' },
          { name: 'add', value: '13' },
        ],
      },
      {
        line: 5,
        summary: 'Subtraction: 10 - 3 = 7',
        why: 'The - operator subtracts the second number from the first',
        event: 'assign',
        memory: [
          { name: 'a', value: '10' },
          { name: 'b', value: '3' },
          { name: 'add', value: '13' },
          { name: 'subtract', value: '7' },
        ],
      },
      {
        line: 6,
        summary: 'Multiplication: 10 * 3 = 30',
        why: 'The * operator multiplies two numbers',
        event: 'assign',
        memory: [
          { name: 'a', value: '10' },
          { name: 'b', value: '3' },
          { name: 'add', value: '13' },
          { name: 'subtract', value: '7' },
          { name: 'multiply', value: '30' },
        ],
      },
      {
        line: 7,
        summary: 'Division: 10 / 3 = 3.333...',
        why: 'The / operator performs true division, always returning a float',
        event: 'assign',
        memory: [{ name: 'divide', value: '3.3333333333333335' }],
      },
      {
        line: 8,
        summary: 'Floor division: 10 // 3 = 3',
        why: 'The // operator performs integer division, discarding the remainder',
        event: 'assign',
        memory: [{ name: 'floor_div', value: '3' }],
      },
      {
        line: 9,
        summary: 'Modulo: 10 % 3 = 1',
        why: 'The % operator returns the remainder after division',
        event: 'assign',
        memory: [{ name: 'modulo', value: '1' }],
      },
      {
        line: 10,
        summary: 'Exponentiation: 10 ** 2 = 100',
        why: 'The ** operator raises a number to a power',
        event: 'assign',
        memory: [{ name: 'power', value: '100' }],
      },
      {
        line: 12,
        summary: 'Print basic operations',
        why: 'Display addition, subtraction, and multiplication results',
        event: 'output',
        memory: [
          { name: 'add', value: '13' },
          { name: 'subtract', value: '7' },
          { name: 'multiply', value: '30' },
        ],
        output: ['13 7 30'],
      },
      {
        line: 13,
        summary: 'Print division operations',
        why: 'Display division, floor division, modulo, and power results',
        event: 'output',
        memory: [
          { name: 'divide', value: '3.3333333333333335' },
          { name: 'floor_div', value: '3' },
          { name: 'modulo', value: '1' },
          { name: 'power', value: '100' },
        ],
        output: ['13 7 30', '3.3333333333333335 3 1 100'],
      },
    ],
  },

  // ── Lists Basics ───────────────────────────────────────────────────────────
  {
    id: 'lists-basics',
    title: 'Lists Basics',
    level: 'foundation',
    levelColor: 'text-violet-400',
    duration: '3 min',
    objective: 'Learn how to create and manipulate Python lists.',
    prompt: 'Add more fruits and try different list operations. Watch how the list grows and shrinks.',
    hint: 'append() adds to the end (O(1)), insert() can add anywhere (O(n))',
    timeComplexity: 'O(n) for insert/remove',
    spaceComplexity: 'O(n)',
    useCases: ['Collections', 'Queues', 'Stacks', 'Dynamic arrays'],
    approach:
      'Lists are mutable, ordered collections. append() adds to end (O(1)), insert() adds at position (O(n)), remove() finds and deletes (O(n)), pop() removes last (O(1)). Indexing is O(1).',
    output: ["['apple', 'apricot', 'cherry', 'date']", 'apple date 5 cherry'],
    starterCode: `fruits = ["apple", "banana", "cherry"]
fruits.append("date")
fruits.insert(1, "apricot")
first = fruits[0]
last = fruits[-1]
length = len(fruits)

fruits.remove("banana")
popped = fruits.pop()

print(fruits)
print(first, last, length, popped)
`,
    executionFrames: [
      {
        line: 1,
        summary: 'Create list',
        why: 'Lists are mutable, ordered collections that can hold any type of data',
        event: 'assign',
        memory: [{ name: 'fruits', value: '["apple", "banana", "cherry"]' }],
      },
      {
        line: 2,
        summary: 'Append to end',
        why: 'append() adds an element to the end of the list in O(1) time',
        event: 'assign',
        memory: [{ name: 'fruits', value: '["apple", "banana", "cherry", "date"]' }],
      },
      {
        line: 3,
        summary: 'Insert at position 1',
        why: 'insert() adds an element at the specified index, shifting elements right',
        event: 'assign',
        memory: [{ name: 'fruits', value: '["apple", "apricot", "banana", "cherry", "date"]' }],
      },
      {
        line: 4,
        summary: 'Get first element',
        why: 'Indexing with 0 retrieves the first element in O(1) time',
        event: 'assign',
        memory: [
          { name: 'fruits', value: '["apple", "apricot", "banana", "cherry", "date"]' },
          { name: 'first', value: '"apple"' },
        ],
      },
      {
        line: 5,
        summary: 'Get last element',
        why: 'Negative indexing with -1 retrieves the last element',
        event: 'assign',
        memory: [
          { name: 'fruits', value: '["apple", "apricot", "banana", "cherry", "date"]' },
          { name: 'first', value: '"apple"' },
          { name: 'last', value: '"date"' },
        ],
      },
      {
        line: 6,
        summary: 'Get list length',
        why: 'len() returns the number of elements in the list',
        event: 'assign',
        memory: [
          { name: 'fruits', value: '["apple", "apricot", "banana", "cherry", "date"]' },
          { name: 'first', value: '"apple"' },
          { name: 'last', value: '"date"' },
          { name: 'length', value: '5' },
        ],
      },
      {
        line: 8,
        summary: 'Remove banana',
        why: 'remove() finds and deletes the first occurrence of the value in O(n) time',
        event: 'assign',
        memory: [{ name: 'fruits', value: '["apple", "apricot", "cherry", "date"]' }],
      },
      {
        line: 9,
        summary: 'Pop last element',
        why: 'pop() removes and returns the last element in O(1) time',
        event: 'assign',
        memory: [
          { name: 'fruits', value: '["apple", "apricot", "cherry"]' },
          { name: 'popped', value: '"date"' },
        ],
      },
      {
        line: 11,
        summary: 'Print current list',
        why: 'Display the list after modifications',
        event: 'output',
        memory: [{ name: 'fruits', value: '["apple", "apricot", "cherry"]' }],
        output: ["['apple', 'apricot', 'cherry', 'date']"],
      },
      {
        line: 12,
        summary: 'Print stored values',
        why: 'Display the first, last, length, and popped values we saved earlier',
        event: 'output',
        memory: [
          { name: 'first', value: '"apple"' },
          { name: 'last', value: '"date"' },
          { name: 'length', value: '5' },
          { name: 'popped', value: '"cherry"' },
        ],
        output: ["['apple', 'apricot', 'cherry', 'date']", 'apple date 5 cherry'],
      },
    ],
  },

  // ── Functions Intro ────────────────────────────────────────────────────────
  {
    id: 'functions-intro',
    title: 'Functions Intro',
    level: 'foundation',
    levelColor: 'text-violet-400',
    duration: '3 min',
    objective: 'Understand how to define and call functions with parameters and return values.',
    prompt: 'Create your own function that takes parameters and returns a result.',
    hint: "Functions create a local scope - variables inside don't affect variables outside",
    timeComplexity: 'O(1)',
    spaceComplexity: 'O(1)',
    useCases: ['Code reuse', 'Modularity', 'Abstraction', 'Testing'],
    approach:
      'Functions are defined with def keyword, take parameters, and return values. They create a local scope for variables. Functions can be called multiple times with different arguments.',
    output: ['Hello, Alice!', '12'],
    starterCode: `def greet(name):
    message = "Hello, " + name + "!"
    return message

def add(x, y):
    return x + y

result1 = greet("Alice")
result2 = add(5, 7)

print(result1)
print(result2)
`,
    executionFrames: [
      {
        line: 1,
        summary: 'Define greet function',
        why: 'The def keyword creates a function object that can be called later',
        event: 'assign',
        memory: [{ name: 'greet', value: '<function>' }],
      },
      {
        line: 5,
        summary: 'Define add function',
        why: 'Functions are first-class objects in Python and can be stored as values',
        event: 'assign',
        memory: [
          { name: 'greet', value: '<function>' },
          { name: 'add', value: '<function>' },
        ],
      },
      {
        line: 8,
        summary: 'Call greet("Alice")',
        why: 'Calling a function creates a new local scope with the parameter bound to the argument',
        event: 'call',
        memory: [{ name: 'name', value: '"Alice"' }],
      },
      {
        line: 2,
        summary: 'Create message in function scope',
        why: 'Variables created inside a function are local to that function',
        event: 'assign',
        memory: [
          { name: 'name', value: '"Alice"' },
          { name: 'message', value: '"Hello, Alice!"' },
        ],
      },
      {
        line: 3,
        summary: 'Return from greet',
        why: 'The return statement sends a value back to the caller and exits the function',
        event: 'return',
        memory: [{ name: 'result1', value: '"Hello, Alice!"' }],
      },
      {
        line: 9,
        summary: 'Call add(5, 7)',
        why: 'Functions can take multiple parameters separated by commas',
        event: 'call',
        memory: [
          { name: 'x', value: '5' },
          { name: 'y', value: '7' },
        ],
      },
      {
        line: 6,
        summary: 'Return x + y',
        why: 'Functions can return the result of an expression directly',
        event: 'return',
        memory: [{ name: 'result2', value: '12' }],
      },
      {
        line: 11,
        summary: 'Print greeting result',
        why: 'Display the message returned from greet()',
        event: 'output',
        memory: [{ name: 'result1', value: '"Hello, Alice!"' }],
        output: ['Hello, Alice!'],
      },
      {
        line: 12,
        summary: 'Print addition result',
        why: 'Display the sum returned from add()',
        event: 'output',
        memory: [{ name: 'result2', value: '12' }],
        output: ['Hello, Alice!', '12'],
      },
    ],
  },

  // ── Input & Output ─────────────────────────────────────────────────────────
  {
    id: 'input-output',
    title: 'Input & Output',
    level: 'foundation',
    levelColor: 'text-violet-400',
    duration: '3 min',
    objective: 'Learn how programs accept input and produce output, including type conversion.',
    prompt: "Modify the simulated input values and see how they're processed. Try different ages.",
    hint: 'input() always returns a string - use int() to convert to a number',
    timeComplexity: 'O(n) for string conversion',
    spaceComplexity: 'O(n)',
    useCases: ['User interaction', 'Data entry', 'Configuration', 'Interactive programs'],
    approach:
      'Input typically comes from input() function (here simulated). Output uses print(). Type conversion (int(), str(), float()) changes data types. String concatenation joins text.',
    output: ['Name: Alice', 'Age: 25', 'Next year: 26'],
    starterCode: `# Simulated input (in browser we can't use real input())
user_name = "Alice"
user_age = "25"

print("Name:", user_name)
print("Age:", user_age)

# Type conversion
age_num = int(user_age)
next_year = age_num + 1

print("Next year:", next_year)
`,
    executionFrames: [
      {
        line: 2,
        summary: 'Simulated input for name',
        why: 'In a real program, this would come from input(), which pauses and waits for user input',
        event: 'assign',
        memory: [{ name: 'user_name', value: '"Alice"' }],
      },
      {
        line: 3,
        summary: 'Simulated input for age',
        why: 'input() always returns a string, even if the user types a number',
        event: 'assign',
        memory: [
          { name: 'user_name', value: '"Alice"' },
          { name: 'user_age', value: '"25"' },
        ],
      },
      {
        line: 5,
        summary: 'Print name',
        why: 'print() can take multiple arguments separated by commas',
        event: 'output',
        memory: [{ name: 'user_name', value: '"Alice"' }],
        output: ['Name: Alice'],
      },
      {
        line: 6,
        summary: 'Print age string',
        why: 'The age is still a string at this point, not a number',
        event: 'output',
        memory: [{ name: 'user_age', value: '"25"' }],
        output: ['Name: Alice', 'Age: 25'],
      },
      {
        line: 9,
        summary: 'Convert string to integer',
        why: 'int() converts a string representation of a number to an actual integer',
        event: 'assign',
        memory: [
          { name: 'user_age', value: '"25"' },
          { name: 'age_num', value: '25' },
        ],
      },
      {
        line: 10,
        summary: 'Calculate next year',
        why: 'Now that age_num is an integer, we can perform arithmetic on it',
        event: 'assign',
        memory: [
          { name: 'age_num', value: '25' },
          { name: 'next_year', value: '26' },
        ],
      },
      {
        line: 12,
        summary: 'Print calculation result',
        why: 'Display the result of the arithmetic operation',
        event: 'output',
        memory: [{ name: 'next_year', value: '26' }],
        output: ['Name: Alice', 'Age: 25', 'Next year: 26'],
      },
    ],
  },

  // ── Find Min & Max ─────────────────────────────────────────────────────────
  {
    id: 'find-min-max',
    title: 'Find Min & Max',
    level: 'beginner',
    levelColor: 'text-sky-400',
    duration: '5 min',
    objective: 'Find the minimum and maximum values in a list with a single pass.',
    prompt: 'Find the minimum and maximum values in a list with a single pass.',
    hint: 'You only need one loop comparing each element with the current min and max',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    useCases: ['Data analysis', 'Statistics', 'Range validation', 'Outlier detection'],
    approach:
      'Initialize min and max to the first element. Iterate through the list once, comparing each element with current min/max and updating if necessary. This is more efficient than sorting (O(n log n)).',
    output: ['Min: 11', 'Max: 90'],
    starterCode: `numbers = [64, 34, 25, 12, 22, 11, 90]

min_val = numbers[0]
max_val = numbers[0]

for num in numbers:
    if num < min_val:
        min_val = num
    if num > max_val:
        max_val = num

print("Min:", min_val)
print("Max:", max_val)
`,
    executionFrames: [
      {
        line: 1,
        summary: 'Load the list of numbers',
        why: 'We start with our input data - a list of unsorted numbers to analyze',
        event: 'assign',
        memory: [{ name: 'numbers', value: '[64, 34, 25, 12, 22, 11, 90]' }],
      },
      {
        line: 3,
        summary: 'Initialize min_val to first element',
        why: 'Setting min_val to the first element guarantees we start with an actual value from the list, avoiding edge cases',
        event: 'assign',
        memory: [
          { name: 'numbers', value: '[64, 34, 25, 12, 22, 11, 90]' },
          { name: 'min_val', value: '64' },
        ],
      },
      {
        line: 4,
        summary: 'Initialize max_val to first element',
        why: 'Same reasoning as min_val - we use the first element as our initial maximum',
        event: 'assign',
        memory: [
          { name: 'numbers', value: '[64, 34, 25, 12, 22, 11, 90]' },
          { name: 'min_val', value: '64' },
          { name: 'max_val', value: '64' },
        ],
      },
      {
        line: 6,
        summary: 'Start loop with first number (64)',
        why: 'We iterate through every number, including the first one we already used for initialization',
        event: 'loop',
        memory: [
          { name: 'numbers', value: '[64, 34, 25, 12, 22, 11, 90]' },
          { name: 'min_val', value: '64' },
          { name: 'max_val', value: '64' },
          { name: 'num', value: '64' },
        ],
      },
      {
        line: 7,
        summary: 'Check if 64 < 64 (false)',
        why: 'First comparison: 64 is not less than our current min (64), so we skip updating min_val',
        event: 'compare',
        memory: [
          { name: 'numbers', value: '[64, 34, 25, 12, 22, 11, 90]' },
          { name: 'min_val', value: '64' },
          { name: 'max_val', value: '64' },
          { name: 'num', value: '64' },
        ],
      },
      {
        line: 9,
        summary: 'Check if 64 > 64 (false)',
        why: '64 is not greater than our current max (64), so max_val stays the same',
        event: 'compare',
        memory: [
          { name: 'numbers', value: '[64, 34, 25, 12, 22, 11, 90]' },
          { name: 'min_val', value: '64' },
          { name: 'max_val', value: '64' },
          { name: 'num', value: '64' },
        ],
      },
      {
        line: 6,
        summary: 'Loop iteration: num = 34',
        why: 'Move to the second element in the list',
        event: 'loop',
        memory: [
          { name: 'numbers', value: '[64, 34, 25, 12, 22, 11, 90]' },
          { name: 'min_val', value: '64' },
          { name: 'max_val', value: '64' },
          { name: 'num', value: '34' },
        ],
      },
      {
        line: 8,
        summary: 'Update min_val to 34',
        why: '34 < 64, so we found a new minimum. Update min_val to 34',
        event: 'assign',
        memory: [
          { name: 'numbers', value: '[64, 34, 25, 12, 22, 11, 90]' },
          { name: 'min_val', value: '34' },
          { name: 'max_val', value: '64' },
          { name: 'num', value: '34' },
        ],
      },
      {
        line: 6,
        summary: 'Loop iteration: num = 11',
        why: 'Skipping ahead to the smallest number to show the final min update',
        event: 'loop',
        memory: [
          { name: 'numbers', value: '[64, 34, 25, 12, 22, 11, 90]' },
          { name: 'min_val', value: '12' },
          { name: 'max_val', value: '64' },
          { name: 'num', value: '11' },
        ],
      },
      {
        line: 8,
        summary: 'Update min_val to 11',
        why: '11 is the smallest number in the list, this is our final minimum',
        event: 'assign',
        memory: [
          { name: 'numbers', value: '[64, 34, 25, 12, 22, 11, 90]' },
          { name: 'min_val', value: '11' },
          { name: 'max_val', value: '64' },
          { name: 'num', value: '11' },
        ],
      },
      {
        line: 6,
        summary: 'Loop iteration: num = 90',
        why: 'Last element - the largest number in our list',
        event: 'loop',
        memory: [
          { name: 'numbers', value: '[64, 34, 25, 12, 22, 11, 90]' },
          { name: 'min_val', value: '11' },
          { name: 'max_val', value: '64' },
          { name: 'num', value: '90' },
        ],
      },
      {
        line: 10,
        summary: 'Update max_val to 90',
        why: '90 > 64, so we found a new maximum. This is our final maximum value',
        event: 'assign',
        memory: [
          { name: 'numbers', value: '[64, 34, 25, 12, 22, 11, 90]' },
          { name: 'min_val', value: '11' },
          { name: 'max_val', value: '90' },
          { name: 'num', value: '90' },
        ],
      },
      {
        line: 12,
        summary: 'Print minimum value',
        why: 'Output the result: the smallest value we found',
        event: 'output',
        memory: [
          { name: 'numbers', value: '[64, 34, 25, 12, 22, 11, 90]' },
          { name: 'min_val', value: '11' },
          { name: 'max_val', value: '90' },
        ],
        output: ['Min: 11'],
      },
      {
        line: 13,
        summary: 'Print maximum value',
        why: 'Output the result: the largest value we found',
        event: 'output',
        memory: [
          { name: 'numbers', value: '[64, 34, 25, 12, 22, 11, 90]' },
          { name: 'min_val', value: '11' },
          { name: 'max_val', value: '90' },
        ],
        output: ['Min: 11', 'Max: 90'],
      },
    ],
  },

  // ── Sum & Average ──────────────────────────────────────────────────────────
  {
    id: 'sum-average',
    title: 'Sum & Average',
    level: 'beginner',
    levelColor: 'text-sky-400',
    duration: '5 min',
    objective: 'Calculate sum and average by accumulating values in a single pass.',
    prompt: 'Calculate the sum and average of a list of numbers.',
    hint: 'Use an accumulator variable to build up the total, then divide by the count',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    useCases: ['Grade calculation', 'Financial analysis', 'Performance metrics', 'Data aggregation'],
    approach:
      "Sum is calculated by accumulating values in a loop. Average is sum divided by count. Python's += operator is shorthand for total = total + num. Division (/) produces a float.",
    output: ['Sum: 150', 'Average: 30.0'],
    starterCode: `numbers = [10, 20, 30, 40, 50]

total = 0
count = len(numbers)

for num in numbers:
    total += num

average = total / count

print("Sum:", total)
print("Average:", average)
`,
    executionFrames: [
      {
        line: 1,
        summary: 'Load the list of numbers',
        why: 'Define our input data - a list of numbers to sum and average',
        event: 'assign',
        memory: [{ name: 'numbers', value: '[10, 20, 30, 40, 50]' }],
      },
      {
        line: 3,
        summary: 'Initialize total accumulator to 0',
        why: "Start with 0 because we're adding to it. 0 is the additive identity - adding 0 doesn't change the result",
        event: 'assign',
        memory: [
          { name: 'numbers', value: '[10, 20, 30, 40, 50]' },
          { name: 'total', value: '0' },
        ],
      },
      {
        line: 4,
        summary: 'Store the count of elements',
        why: 'len(numbers) gives us 5. We calculate this once before the loop for efficiency and use it later to compute average',
        event: 'assign',
        memory: [
          { name: 'numbers', value: '[10, 20, 30, 40, 50]' },
          { name: 'total', value: '0' },
          { name: 'count', value: '5' },
        ],
      },
      {
        line: 6,
        summary: 'Start loop with num = 10',
        why: 'Begin iterating through the list, starting with the first element',
        event: 'loop',
        memory: [
          { name: 'numbers', value: '[10, 20, 30, 40, 50]' },
          { name: 'total', value: '0' },
          { name: 'count', value: '5' },
          { name: 'num', value: '10' },
        ],
      },
      {
        line: 7,
        summary: 'Add 10 to total: total = 0 + 10',
        why: 'The += operator is shorthand for total = total + num. This is the accumulator pattern',
        event: 'assign',
        memory: [
          { name: 'numbers', value: '[10, 20, 30, 40, 50]' },
          { name: 'total', value: '10' },
          { name: 'count', value: '5' },
          { name: 'num', value: '10' },
        ],
      },
      {
        line: 6,
        summary: 'Loop iteration: num = 20',
        why: 'Move to the second element',
        event: 'loop',
        memory: [
          { name: 'numbers', value: '[10, 20, 30, 40, 50]' },
          { name: 'total', value: '10' },
          { name: 'count', value: '5' },
          { name: 'num', value: '20' },
        ],
      },
      {
        line: 7,
        summary: 'Add 20 to total: total = 10 + 20',
        why: 'Accumulate the second value. Total is now 30',
        event: 'assign',
        memory: [
          { name: 'numbers', value: '[10, 20, 30, 40, 50]' },
          { name: 'total', value: '30' },
          { name: 'count', value: '5' },
          { name: 'num', value: '20' },
        ],
      },
      {
        line: 6,
        summary: 'Loop iteration: num = 30',
        why: 'Continue with the third element',
        event: 'loop',
        memory: [
          { name: 'numbers', value: '[10, 20, 30, 40, 50]' },
          { name: 'total', value: '30' },
          { name: 'count', value: '5' },
          { name: 'num', value: '30' },
        ],
      },
      {
        line: 7,
        summary: 'Add 30 to total: total = 30 + 30',
        why: 'Total is now 60, halfway through the list',
        event: 'assign',
        memory: [
          { name: 'numbers', value: '[10, 20, 30, 40, 50]' },
          { name: 'total', value: '60' },
          { name: 'count', value: '5' },
          { name: 'num', value: '30' },
        ],
      },
      {
        line: 6,
        summary: 'Loop iteration: num = 40',
        why: 'Fourth element',
        event: 'loop',
        memory: [
          { name: 'numbers', value: '[10, 20, 30, 40, 50]' },
          { name: 'total', value: '60' },
          { name: 'count', value: '5' },
          { name: 'num', value: '40' },
        ],
      },
      {
        line: 7,
        summary: 'Add 40 to total: total = 60 + 40',
        why: 'Total is now 100',
        event: 'assign',
        memory: [
          { name: 'numbers', value: '[10, 20, 30, 40, 50]' },
          { name: 'total', value: '100' },
          { name: 'count', value: '5' },
          { name: 'num', value: '40' },
        ],
      },
      {
        line: 6,
        summary: 'Loop iteration: num = 50',
        why: 'Last element in the list',
        event: 'loop',
        memory: [
          { name: 'numbers', value: '[10, 20, 30, 40, 50]' },
          { name: 'total', value: '100' },
          { name: 'count', value: '5' },
          { name: 'num', value: '50' },
        ],
      },
      {
        line: 7,
        summary: 'Add 50 to total: total = 100 + 50',
        why: 'Final accumulation. Total is now 150 - the complete sum',
        event: 'assign',
        memory: [
          { name: 'numbers', value: '[10, 20, 30, 40, 50]' },
          { name: 'total', value: '150' },
          { name: 'count', value: '5' },
          { name: 'num', value: '50' },
        ],
      },
      {
        line: 9,
        summary: 'Calculate average: 150 / 5',
        why: 'Divide the sum by count to get the mean. The / operator produces a float (30.0) even when dividing evenly',
        event: 'assign',
        memory: [
          { name: 'numbers', value: '[10, 20, 30, 40, 50]' },
          { name: 'total', value: '150' },
          { name: 'count', value: '5' },
          { name: 'average', value: '30.0' },
        ],
      },
      {
        line: 11,
        summary: 'Print sum',
        why: 'Output the total we accumulated',
        event: 'output',
        memory: [
          { name: 'numbers', value: '[10, 20, 30, 40, 50]' },
          { name: 'total', value: '150' },
          { name: 'count', value: '5' },
          { name: 'average', value: '30.0' },
        ],
        output: ['Sum: 150'],
      },
      {
        line: 12,
        summary: 'Print average',
        why: 'Output the computed average value',
        event: 'output',
        memory: [
          { name: 'numbers', value: '[10, 20, 30, 40, 50]' },
          { name: 'total', value: '150' },
          { name: 'count', value: '5' },
          { name: 'average', value: '30.0' },
        ],
        output: ['Sum: 150', 'Average: 30.0'],
      },
    ],
  },

  // ── FizzBuzz ───────────────────────────────────────────────────────────────
  {
    id: 'fizzbuzz',
    title: 'FizzBuzz',
    level: 'beginner',
    levelColor: 'text-sky-400',
    duration: '5 min',
    objective: 'Use modulo and conditionals to print Fizz, Buzz, or FizzBuzz based on divisibility.',
    prompt: "Print numbers 1-15, but replace multiples of 3 with 'Fizz', multiples of 5 with 'Buzz', and multiples of both with 'FizzBuzz'.",
    hint: 'Check divisibility by 15 first, then 3, then 5. Order matters!',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    useCases: ['Interview classic', 'Divisibility logic', 'Control flow practice', 'Modulo operator'],
    approach:
      "FizzBuzz tests conditionals and modulo. Check divisibility by 15 first (multiples of both 3 and 5), then 3, then 5. The order matters: if you check 3 before 15, numbers like 15 would print 'Fizz' instead of 'FizzBuzz'.",
    output: ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz'],
    starterCode: `for i in range(1, 16):
    if i % 15 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)
`,
    executionFrames: [
      {
        line: 1,
        summary: 'Start loop from 1 to 15',
        why: 'range(1, 16) generates numbers 1 through 15. The second argument is exclusive',
        event: 'loop',
        memory: [{ name: 'i', value: '1' }],
      },
      {
        line: 2,
        summary: 'Check if 1 divisible by 15',
        why: '1 % 15 = 1 (not 0), so this condition is false. Move to next check',
        event: 'branch',
        memory: [{ name: 'i', value: '1' }],
      },
      {
        line: 4,
        summary: 'Check if 1 divisible by 3',
        why: '1 % 3 = 1 (not 0), so this is also false. Continue to next condition',
        event: 'branch',
        memory: [{ name: 'i', value: '1' }],
      },
      {
        line: 6,
        summary: 'Check if 1 divisible by 5',
        why: '1 % 5 = 1 (not 0), so we skip to else',
        event: 'branch',
        memory: [{ name: 'i', value: '1' }],
      },
      {
        line: 9,
        summary: 'Print the number 1',
        why: "1 doesn't match any divisibility rule, so print it directly",
        event: 'output',
        memory: [{ name: 'i', value: '1' }],
        output: ['1'],
      },
      {
        line: 1,
        summary: 'Loop iteration: i = 2',
        why: 'Continue to next number',
        event: 'loop',
        memory: [{ name: 'i', value: '2' }],
      },
      {
        line: 9,
        summary: 'Print the number 2',
        why: '2 is not divisible by 3 or 5, print it',
        event: 'output',
        memory: [{ name: 'i', value: '2' }],
        output: ['1', '2'],
      },
      {
        line: 1,
        summary: 'Loop iteration: i = 3',
        why: 'First multiple of 3',
        event: 'loop',
        memory: [{ name: 'i', value: '3' }],
      },
      {
        line: 4,
        summary: '3 is divisible by 3',
        why: '3 % 3 = 0, so this condition is true. Execute the elif block',
        event: 'branch',
        memory: [{ name: 'i', value: '3' }],
      },
      {
        line: 5,
        summary: "Print 'Fizz'",
        why: '3 is a multiple of 3, so output Fizz instead of the number',
        event: 'output',
        memory: [{ name: 'i', value: '3' }],
        output: ['1', '2', 'Fizz'],
      },
      {
        line: 1,
        summary: 'Loop iteration: i = 5',
        why: 'First multiple of 5',
        event: 'loop',
        memory: [{ name: 'i', value: '5' }],
      },
      {
        line: 6,
        summary: '5 is divisible by 5',
        why: '5 % 5 = 0, this condition is true',
        event: 'branch',
        memory: [{ name: 'i', value: '5' }],
      },
      {
        line: 7,
        summary: "Print 'Buzz'",
        why: '5 is a multiple of 5, so output Buzz',
        event: 'output',
        memory: [{ name: 'i', value: '5' }],
        output: ['1', '2', 'Fizz', '4', 'Buzz'],
      },
      {
        line: 1,
        summary: 'Loop iteration: i = 15',
        why: '15 is divisible by both 3 and 5 - the critical test case',
        event: 'loop',
        memory: [{ name: 'i', value: '15' }],
      },
      {
        line: 2,
        summary: '15 is divisible by 15',
        why: '15 % 15 = 0. This is why we check 15 FIRST - it catches numbers divisible by both 3 and 5',
        event: 'branch',
        memory: [{ name: 'i', value: '15' }],
      },
      {
        line: 3,
        summary: "Print 'FizzBuzz'",
        why: "15 is a multiple of both 3 and 5, so we print FizzBuzz. If we checked % 3 first, we'd incorrectly print just 'Fizz'",
        event: 'output',
        memory: [{ name: 'i', value: '15' }],
        output: ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz'],
      },
    ],
  },

  // ── Queue Operations ───────────────────────────────────────────────────────
  {
    id: 'queue-ops',
    title: 'Queue Operations',
    level: 'intermediate',
    levelColor: 'text-emerald-400',
    duration: '8 min',
    objective: 'Understand FIFO (First-In-First-Out) and why deque is O(1) for both enqueue and dequeue.',
    prompt: "Add 'Diana' to the queue. Predict the order of removal.",
    hint: 'The first person added (Alice) will be the first removed. Dequeue uses popleft() for O(1) removal.',
    timeComplexity: 'O(1) per operation',
    spaceComplexity: 'O(n)',
    useCases: ['Task scheduling', 'Message queues', 'Breadth-first search', 'Print spooling'],
    approach:
      "Queues follow FIFO (First-In-First-Out). Python's deque (double-ended queue) provides O(1) append (enqueue) and popleft (dequeue). Lists would be O(n) for pop(0). Queues are essential for BFS and job scheduling.",
    output: ["Queue: ['Alice', 'Bob', 'Charlie']", 'Removed: Alice Bob', "Remaining: ['Charlie']"],
    starterCode: `from collections import deque

queue = deque()

# Enqueue elements
queue.append("Alice")
queue.append("Bob")
queue.append("Charlie")

print("Queue:", list(queue))

# Dequeue elements
first = queue.popleft()
second = queue.popleft()

print("Removed:", first, second)
print("Remaining:", list(queue))
`,
    executionFrames: [
      {
        line: 1,
        summary: 'Import deque',
        why: "We import deque from collections because it's optimized for queue operations. Unlike list.pop(0) which is O(n), deque.popleft() is O(1) — it maintains pointers to both ends.",
        event: 'import',
        memory: [],
      },
      {
        line: 3,
        summary: 'Create empty queue',
        why: 'Initialize an empty deque. This will hold our queue elements. deque() creates a double-ended queue that allows fast append and pop from both ends.',
        event: 'assign',
        memory: [{ name: 'queue', value: 'deque([])' }],
      },
      {
        line: 6,
        summary: "Enqueue 'Alice'",
        why: "append() adds to the right end in O(1) time. Alice is first in, so she'll be first out (FIFO principle).",
        event: 'append',
        memory: [{ name: 'queue', value: "deque(['Alice'])" }],
      },
      {
        line: 7,
        summary: "Enqueue 'Bob'",
        why: 'Bob joins the back of the queue. The queue now has 2 elements, with Alice at the front and Bob at the back.',
        event: 'append',
        memory: [{ name: 'queue', value: "deque(['Alice', 'Bob'])" }],
      },
      {
        line: 8,
        summary: "Enqueue 'Charlie'",
        why: 'Charlie is added to the back. The queue order is now Alice → Bob → Charlie. Alice will be served first.',
        event: 'append',
        memory: [{ name: 'queue', value: "deque(['Alice', 'Bob', 'Charlie'])" }],
      },
      {
        line: 10,
        summary: 'Print current queue',
        why: 'We convert deque to list for readable output. This shows the current state before any dequeuing.',
        event: 'output',
        memory: [{ name: 'queue', value: "deque(['Alice', 'Bob', 'Charlie'])" }],
        output: ["Queue: ['Alice', 'Bob', 'Charlie']"],
      },
      {
        line: 13,
        summary: 'Dequeue first element',
        why: "popleft() removes from the front in O(1) time. Alice was first in, so she's first out. This is the defining feature of FIFO.",
        event: 'popleft',
        memory: [
          { name: 'queue', value: "deque(['Bob', 'Charlie'])" },
          { name: 'first', value: "'Alice'" },
        ],
      },
      {
        line: 14,
        summary: 'Dequeue second element',
        why: 'Bob is now at the front, so popleft() removes him next. The deque maintains O(1) removal because it updates the front pointer, not shifting all elements.',
        event: 'popleft',
        memory: [
          { name: 'queue', value: "deque(['Charlie'])" },
          { name: 'first', value: "'Alice'" },
          { name: 'second', value: "'Bob'" },
        ],
      },
      {
        line: 16,
        summary: 'Print removed elements',
        why: 'Shows that Alice and Bob were removed in the order they were added (FIFO). This is the queue discipline in action.',
        event: 'output',
        memory: [
          { name: 'queue', value: "deque(['Charlie'])" },
          { name: 'first', value: "'Alice'" },
          { name: 'second', value: "'Bob'" },
        ],
        output: ["Queue: ['Alice', 'Bob', 'Charlie']", 'Removed: Alice Bob'],
      },
      {
        line: 17,
        summary: 'Print remaining queue',
        why: "Only Charlie remains. If we needed to process him, we'd call popleft() again. The queue is now ready for more enqueue/dequeue operations.",
        event: 'output',
        memory: [
          { name: 'queue', value: "deque(['Charlie'])" },
          { name: 'first', value: "'Alice'" },
          { name: 'second', value: "'Bob'" },
        ],
        output: ["Queue: ['Alice', 'Bob', 'Charlie']", 'Removed: Alice Bob', "Remaining: ['Charlie']"],
      },
    ],
  },

  // ── Anagram Check ──────────────────────────────────────────────────────────
  {
    id: 'anagram-check',
    title: 'Anagram Check',
    level: 'intermediate',
    levelColor: 'text-emerald-400',
    duration: '8 min',
    objective: 'Use hash map counting to determine if two strings are anagrams in O(n) time.',
    prompt: "Change s2 to 'lisent'. Is it still an anagram?",
    hint: 'Count characters in s1, then decrement for each character in s2. Any mismatch means not an anagram.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(k) — k = unique chars',
    useCases: ['Word games', 'Text analysis', 'Cryptography', 'Spell checkers'],
    approach:
      'Use a hash map to count character frequencies in first string, then decrement for second string. If any character is missing or count goes negative, not an anagram. More efficient than sorting (O(n log n)).',
    output: ['Anagram: True'],
    starterCode: `def is_anagram(s1, s2):
    if len(s1) != len(s2):
        return False
    
    count = {}
    for char in s1:
        count[char] = count.get(char, 0) + 1
    
    for char in s2:
        if char not in count:
            return False
        count[char] -= 1
        if count[char] < 0:
            return False
    
    return True

result = is_anagram("listen", "silent")
print("Anagram:", result)
`,
    executionFrames: [
      {
        line: 2,
        summary: 'Check lengths',
        why: 'Anagrams must have the same length. This O(1) check catches obvious mismatches early — no need to count characters if lengths differ.',
        event: 'compare',
        memory: [
          { name: 's1', value: "'listen'" },
          { name: 's2', value: "'silent'" },
        ],
      },
      {
        line: 5,
        summary: 'Initialize empty hash map',
        why: "We'll use this dictionary to count character frequencies. Hash maps give O(1) lookup and update, making the total algorithm O(n) instead of O(n²).",
        event: 'assign',
        memory: [
          { name: 's1', value: "'listen'" },
          { name: 's2', value: "'silent'" },
          { name: 'count', value: '{}' },
        ],
      },
      {
        line: 7,
        summary: "Count 'l' in s1",
        why: 'get(char, 0) returns current count or 0 if not present. We increment by 1. This pattern safely handles first occurrence without KeyError.',
        event: 'assign',
        memory: [
          { name: 's1', value: "'listen'" },
          { name: 's2', value: "'silent'" },
          { name: 'char', value: "'l'" },
          { name: 'count', value: "{'l': 1}" },
        ],
      },
      {
        line: 7,
        summary: "Count 'i' in s1",
        why: "'i' is a new character, so count.get('i', 0) returns 0, then we increment to 1.",
        event: 'assign',
        memory: [
          { name: 'char', value: "'i'" },
          { name: 'count', value: "{'l': 1, 'i': 1}" },
        ],
      },
      {
        line: 7,
        summary: 'Count remaining s1 chars',
        why: "After processing all characters: 's', 't', 'e', 'n'. Each unique char has count 1 in 'listen'.",
        event: 'assign',
        memory: [{ name: 'count', value: "{'l': 1, 'i': 1, 's': 1, 't': 1, 'e': 1, 'n': 1}" }],
      },
      {
        line: 10,
        summary: "Check 's' in s2",
        why: "'s' exists in count (from s1), so we proceed to decrement. If s2 had a character not in s1, we'd return False immediately.",
        event: 'compare',
        memory: [
          { name: 'char', value: "'s'" },
          { name: 'count', value: "{'l': 1, 'i': 1, 's': 1, 't': 1, 'e': 1, 'n': 1}" },
        ],
      },
      {
        line: 12,
        summary: "Decrement 's' count",
        why: "We found 's' in s2, so we decrement its count. count['s'] goes from 1 to 0. This balances the character usage.",
        event: 'assign',
        memory: [
          { name: 'char', value: "'s'" },
          { name: 'count', value: "{'l': 1, 'i': 1, 's': 0, 't': 1, 'e': 1, 'n': 1}" },
        ],
      },
      {
        line: 13,
        summary: 'Check if count negative',
        why: "If count['s'] < 0, it means s2 has more 's' characters than s1 — not an anagram. Here it's 0, so we continue.",
        event: 'compare',
        memory: [{ name: 'count', value: "{'l': 1, 'i': 1, 's': 0, 't': 1, 'e': 1, 'n': 1}" }],
      },
      {
        line: 12,
        summary: 'Process remaining s2 chars',
        why: "After processing 'i', 'l', 'e', 'n', 't' from 'silent', all counts become 0. This means every character in s1 was matched exactly once in s2.",
        event: 'assign',
        memory: [{ name: 'count', value: "{'l': 0, 'i': 0, 's': 0, 't': 0, 'e': 0, 'n': 0}" }],
      },
      {
        line: 16,
        summary: 'Return True',
        why: "All characters matched with zero remaining count. 'listen' and 'silent' are anagrams — same characters, different order.",
        event: 'return',
        memory: [
          { name: 'count', value: "{'l': 0, 'i': 0, 's': 0, 't': 0, 'e': 0, 'n': 0}" },
          { name: 'result', value: 'True' },
        ],
      },
      {
        line: 19,
        summary: 'Print result',
        why: 'Output confirms the anagram check. This O(n) approach is faster than sorting both strings (O(n log n)) and comparing.',
        event: 'output',
        memory: [{ name: 'result', value: 'True' }],
        output: ['Anagram: True'],
      },
    ],
  },

  // ── Sliding Window ─────────────────────────────────────────────────────────
  {
    id: 'sliding-window',
    title: 'Sliding Window Max Sum',
    level: 'intermediate',
    levelColor: 'text-emerald-400',
    duration: '8 min',
    objective: 'Use the sliding window technique to find maximum sum subarray in O(n) instead of O(n×k).',
    prompt: "Change k to 4. What's the new maximum sum?",
    hint: 'For each slide, subtract the element leaving the window and add the element entering. Compare to max.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    useCases: ['Time series analysis', 'Moving averages', 'Network packet analysis', 'Stream processing'],
    approach:
      'Sliding window maintains a fixed-size window over data. Instead of recalculating sum for each window (O(nk)), we slide by removing the leftmost element and adding the new rightmost (O(n)). Essential pattern for array/string problems.',
    output: ['Max sum: 9'],
    starterCode: `def max_sum_subarray(arr, k):
    n = len(arr)
    if n < k:
        return None
    
    window_sum = sum(arr[:k])
    max_sum = window_sum
    
    for i in range(k, n):
        window_sum = window_sum - arr[i - k] + arr[i]
        max_sum = max(max_sum, window_sum)
    
    return max_sum

arr = [2, 1, 5, 1, 3, 2]
k = 3
result = max_sum_subarray(arr, k)
print("Max sum:", result)
`,
    executionFrames: [
      {
        line: 2,
        summary: 'Get array length',
        why: 'We need n to validate input and to set loop bounds. Storing it avoids recalculating len(arr) multiple times.',
        event: 'assign',
        memory: [
          { name: 'arr', value: '[2, 1, 5, 1, 3, 2]' },
          { name: 'k', value: '3' },
          { name: 'n', value: '6' },
        ],
      },
      {
        line: 3,
        summary: 'Validate input',
        why: "If array has fewer than k elements, we can't form a window of size k. Early return prevents index errors.",
        event: 'compare',
        memory: [
          { name: 'n', value: '6' },
          { name: 'k', value: '3' },
        ],
      },
      {
        line: 6,
        summary: 'Initialize first window',
        why: 'sum(arr[:k]) calculates sum of first 3 elements: [2,1,5] = 8. This is our starting window. We only calculate this once — future windows are computed by sliding.',
        event: 'assign',
        memory: [
          { name: 'arr', value: '[2, 1, 5, 1, 3, 2]' },
          { name: 'k', value: '3' },
          { name: 'window_sum', value: '8' },
        ],
      },
      {
        line: 7,
        summary: 'Set initial max',
        why: "First window sum becomes the initial maximum. As we slide, we'll compare each new window_sum to max_sum and update if larger.",
        event: 'assign',
        memory: [
          { name: 'window_sum', value: '8' },
          { name: 'max_sum', value: '8' },
        ],
      },
      {
        line: 10,
        summary: 'Slide to window [1,5,1]',
        why: 'i=3: Remove arr[0]=2, add arr[3]=1. New sum = 8-2+1 = 7. This is the key insight: sliding by -left +right is O(1), not O(k).',
        event: 'assign',
        memory: [
          { name: 'i', value: '3' },
          { name: 'window_sum', value: '7' },
          { name: 'max_sum', value: '8' },
        ],
      },
      {
        line: 11,
        summary: 'Compare to max',
        why: 'max(8, 7) = 8. The new window sum is lower, so max_sum stays 8. We continue sliding to find if any window beats 8.',
        event: 'compare',
        memory: [
          { name: 'window_sum', value: '7' },
          { name: 'max_sum', value: '8' },
        ],
      },
      {
        line: 10,
        summary: 'Slide to window [5,1,3]',
        why: 'i=4: Remove arr[1]=1, add arr[4]=3. New sum = 7-1+3 = 9. This is the largest window so far!',
        event: 'assign',
        memory: [
          { name: 'i', value: '4' },
          { name: 'window_sum', value: '9' },
          { name: 'max_sum', value: '8' },
        ],
      },
      {
        line: 11,
        summary: 'Update max to 9',
        why: 'max(8, 9) = 9. We found a better window! Update max_sum. Window [5,1,3] has sum 9, which beats the previous best of 8.',
        event: 'assign',
        memory: [
          { name: 'window_sum', value: '9' },
          { name: 'max_sum', value: '9' },
        ],
      },
      {
        line: 10,
        summary: 'Slide to window [1,3,2]',
        why: 'i=5: Remove arr[2]=5, add arr[5]=2. New sum = 9-5+2 = 6. Last window to check.',
        event: 'assign',
        memory: [
          { name: 'i', value: '5' },
          { name: 'window_sum', value: '6' },
          { name: 'max_sum', value: '9' },
        ],
      },
      {
        line: 11,
        summary: 'Final comparison',
        why: 'max(9, 6) = 9. The last window is smaller. max_sum remains 9 — window [5,1,3] is the winner.',
        event: 'compare',
        memory: [
          { name: 'window_sum', value: '6' },
          { name: 'max_sum', value: '9' },
        ],
      },
      {
        line: 13,
        summary: 'Return maximum sum',
        why: 'Return 9 — the maximum sum among all windows of size 3. This ran in O(n) time: one pass after initial setup.',
        event: 'return',
        memory: [
          { name: 'max_sum', value: '9' },
          { name: 'result', value: '9' },
        ],
      },
      {
        line: 18,
        summary: 'Print result',
        why: 'Output the maximum sum found. The sliding window pattern reduced complexity from O(n×k) to O(n) — critical for large datasets.',
        event: 'output',
        memory: [{ name: 'result', value: '9' }],
        output: ['Max sum: 9'],
      },
    ],
  },

  // ── Merge Sorted Arrays ────────────────────────────────────────────────────
  {
    id: 'merge-sorted',
    title: 'Merge Sorted Arrays',
    level: 'intermediate',
    levelColor: 'text-emerald-400',
    duration: '8 min',
    objective: 'Use two-pointer technique to merge two sorted arrays in O(m+n) time.',
    prompt: 'Add 9 to arr1. Trace which pointer advances at each step.',
    hint: 'Compare arr1[i] and arr2[j]. Take the smaller one, advance that pointer. Repeat until one array exhausted.',
    timeComplexity: 'O(m + n)',
    spaceComplexity: 'O(m + n)',
    useCases: ['Merge sort subroutine', 'Database joins', 'Sorted stream merging', 'K-way merge'],
    approach:
      'Two-pointer technique: compare elements from both arrays, always taking the smaller one. After one array is exhausted, append the remainder. This is the merge step in merge sort and merges two sorted sequences in linear time.',
    output: ['[1, 2, 3, 4, 5, 6, 7, 8]'],
    starterCode: `def merge_sorted_arrays(arr1, arr2):
    merged = []
    i, j = 0, 0
    
    while i < len(arr1) and j < len(arr2):
        if arr1[i] <= arr2[j]:
            merged.append(arr1[i])
            i += 1
        else:
            merged.append(arr2[j])
            j += 1
    
    merged.extend(arr1[i:])
    merged.extend(arr2[j:])
    
    return merged

arr1 = [1, 3, 5, 7]
arr2 = [2, 4, 6, 8]
result = merge_sorted_arrays(arr1, arr2)
print(result)
`,
    executionFrames: [
      {
        line: 2,
        summary: 'Create empty result',
        why: 'We build a new merged array rather than modifying inputs. This keeps the function pure — no side effects on the original arrays.',
        event: 'assign',
        memory: [
          { name: 'arr1', value: '[1, 3, 5, 7]' },
          { name: 'arr2', value: '[2, 4, 6, 8]' },
          { name: 'merged', value: '[]' },
        ],
      },
      {
        line: 3,
        summary: 'Initialize two pointers',
        why: 'i tracks position in arr1, j tracks position in arr2. Both start at 0. This is the two-pointer pattern — each pointer moves independently based on comparisons.',
        event: 'assign',
        memory: [
          { name: 'merged', value: '[]' },
          { name: 'i', value: '0' },
          { name: 'j', value: '0' },
        ],
      },
      {
        line: 6,
        summary: 'Compare 1 vs 2',
        why: 'arr1[0]=1 <= arr2[0]=2, so we take 1. The smaller element always goes next to maintain sorted order. Advance i to 1.',
        event: 'compare',
        memory: [
          { name: 'i', value: '0' },
          { name: 'j', value: '0' },
          { name: 'arr1[i]', value: '1' },
          { name: 'arr2[j]', value: '2' },
        ],
      },
      {
        line: 7,
        summary: 'Append 1, advance i',
        why: "merged = [1]. i moves to 1. j stays at 0 because we haven't used arr2[0] yet.",
        event: 'append',
        memory: [
          { name: 'merged', value: '[1]' },
          { name: 'i', value: '1' },
          { name: 'j', value: '0' },
        ],
      },
      {
        line: 6,
        summary: 'Compare 3 vs 2',
        why: "arr1[1]=3 > arr2[0]=2, so we take 2 from arr2. This shows the dynamic nature — we don't take from arrays in alternating order, we take the smaller one.",
        event: 'compare',
        memory: [
          { name: 'arr1[i]', value: '3' },
          { name: 'arr2[j]', value: '2' },
        ],
      },
      {
        line: 10,
        summary: 'Append 2, advance j',
        why: 'merged = [1, 2]. j moves to 1. i stays at 1. We took from arr2 this time.',
        event: 'append',
        memory: [
          { name: 'merged', value: '[1, 2]' },
          { name: 'i', value: '1' },
          { name: 'j', value: '1' },
        ],
      },
      {
        line: 6,
        summary: 'Compare 3 vs 4',
        why: 'arr1[1]=3 <= arr2[1]=4, take 3.',
        event: 'compare',
        memory: [
          { name: 'arr1[i]', value: '3' },
          { name: 'arr2[j]', value: '4' },
        ],
      },
      {
        line: 7,
        summary: 'Append 3, advance i',
        why: 'merged = [1, 2, 3]. i moves to 2.',
        event: 'append',
        memory: [
          { name: 'merged', value: '[1, 2, 3]' },
          { name: 'i', value: '2' },
          { name: 'j', value: '1' },
        ],
      },
      {
        line: 6,
        summary: 'Continue merging',
        why: 'Pattern continues: compare arr1[i] vs arr2[j], take smaller, advance that pointer. After 4 more comparisons: merged = [1,2,3,4,5,6,7].',
        event: 'append',
        memory: [
          { name: 'merged', value: '[1, 2, 3, 4, 5, 6, 7]' },
          { name: 'i', value: '4' },
          { name: 'j', value: '3' },
        ],
      },
      {
        line: 5,
        summary: 'arr1 exhausted',
        why: 'i=4 equals len(arr1), so the while condition fails. arr1 is fully consumed. arr2 still has arr2[3]=8 remaining.',
        event: 'compare',
        memory: [
          { name: 'i', value: '4' },
          { name: 'j', value: '3' },
        ],
      },
      {
        line: 14,
        summary: 'Extend with arr2 remainder',
        why: 'arr2[3:] = [8]. Since arr2 is already sorted, we can safely append all remaining elements. merged.extend([8]) gives final result.',
        event: 'extend',
        memory: [
          { name: 'merged', value: '[1, 2, 3, 4, 5, 6, 7, 8]' },
          { name: 'result', value: '[1, 2, 3, 4, 5, 6, 7, 8]' },
        ],
      },
      {
        line: 21,
        summary: 'Print merged array',
        why: "Output the sorted merge. This algorithm visited each element exactly once: O(m+n) time. This is optimal — you can't merge without looking at all elements.",
        event: 'output',
        memory: [{ name: 'result', value: '[1, 2, 3, 4, 5, 6, 7, 8]' }],
        output: ['[1, 2, 3, 4, 5, 6, 7, 8]'],
      },
    ],
  },

  // ── Kruskal's MST ──────────────────────────────────────────────────────────
  {
    id: 'kruskals',
    title: "Kruskal's MST",
    level: 'mastery',
    levelColor: 'text-amber-400',
    duration: '15 min',
    objective: 'Build a minimum spanning tree using greedy edge selection and Union-Find to detect cycles.',
    prompt: 'Change the edges to create a graph where the MST has total weight 10. How does Union-Find prevent cycles?',
    hint: "Watch the Union-Find operations. find() checks if two nodes share a root; union() merges components only if they're separate.",
    timeComplexity: 'O(E log E)',
    spaceComplexity: 'O(V)',
    useCases: ['Network design', 'Circuit design', 'Clustering', 'Road planning'],
    approach:
      "Kruskal's MST algorithm sorts edges by weight and greedily adds edges that don't form cycles (using Union-Find/Disjoint Set). Union-Find tracks connected components with path compression for near-constant time operations.",
    output: ['[(1, 2, 1)]', '[(1, 2, 1), (1, 3, 2)]', '[(1, 2, 1), (1, 3, 2), (0, 2, 3)]'],
    starterCode: `class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
    
    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
    
    def union(self, x, y):
        px, py = self.find(x), self.find(y)
        if px != py:
            self.parent[px] = py

def kruskal(vertices, edges):
    uf = UnionFind(vertices)
    edges.sort(key=lambda e: e[2])
    mst = []
    for u, v, w in edges:
        if uf.find(u) != uf.find(v):
            uf.union(u, v)
            mst.append((u, v, w))
    return mst

edges = [(0,1,4), (0,2,3), (1,2,1), (1,3,2), (2,3,4)]
result = kruskal(4, edges)
print(result)
`,
    executionFrames: [
      {
        line: 2,
        summary: 'Initialize Union-Find',
        why: "Each vertex starts as its own parent — every node is its own component initially. parent[i] = i means 'i is a root.'",
        event: 'assign',
        memory: [
          { name: 'n', value: '4' },
          { name: 'parent', value: '[0, 1, 2, 3]' },
        ],
      },
      {
        line: 5,
        summary: 'Define find()',
        why: "find(x) returns the root of x's component. Path compression (line 7) flattens the tree during traversal, making future finds near O(1).",
        event: 'call',
        memory: [{ name: 'parent', value: '[0, 1, 2, 3]' }],
      },
      {
        line: 10,
        summary: 'Define union()',
        why: "union(x, y) merges two components by making one root point to the other. We only unite if find(x) != find(y) — that's the cycle check.",
        event: 'call',
        memory: [{ name: 'parent', value: '[0, 1, 2, 3]' }],
      },
      {
        line: 17,
        summary: 'Sort edges by weight',
        why: 'Greedy choice: always try the cheapest edge next. edges.sort(key=lambda e: e[2]) gives [(1,2,1), (1,3,2), (0,2,3), (0,1,4), (2,3,4)].',
        event: 'sort',
        memory: [{ name: 'edges', value: '[(1,2,1), (1,3,2), (0,2,3), (0,1,4), (2,3,4)]' }],
      },
      {
        line: 20,
        summary: 'Try edge (1,2,1)',
        why: 'find(1)=1, find(2)=2 — different components. Safe to add without forming a cycle. This is the lightest edge.',
        event: 'compare',
        memory: [
          { name: 'u', value: '1' },
          { name: 'v', value: '2' },
          { name: 'w', value: '1' },
        ],
      },
      {
        line: 21,
        summary: 'Union 1 and 2',
        why: "parent[1] = 2. Now vertices 1 and 2 share root 2. They're in the same component. MST now has 1 edge.",
        event: 'union',
        memory: [
          { name: 'parent', value: '[0, 2, 2, 3]' },
          { name: 'mst', value: '[(1, 2, 1)]' },
        ],
        output: ['[(1, 2, 1)]'],
      },
      {
        line: 20,
        summary: 'Try edge (1,3,2)',
        why: 'find(1)=2 (via path compression), find(3)=3. Different roots — safe to add. Weight 2 is next cheapest.',
        event: 'compare',
        memory: [
          { name: 'u', value: '1' },
          { name: 'v', value: '3' },
          { name: 'w', value: '2' },
        ],
      },
      {
        line: 21,
        summary: 'Union 1 and 3',
        why: 'parent[2] = 3. Now 1, 2, and 3 all share root 3. Three vertices connected with 2 edges.',
        event: 'union',
        memory: [
          { name: 'parent', value: '[0, 2, 3, 3]' },
          { name: 'mst', value: '[(1, 2, 1), (1, 3, 2)]' },
        ],
        output: ['[(1, 2, 1), (1, 3, 2)]'],
      },
      {
        line: 20,
        summary: 'Try edge (0,2,3)',
        why: 'find(0)=0, find(2)=3. Different components — 0 is isolated, {1,2,3} is a component. Safe to add.',
        event: 'compare',
        memory: [
          { name: 'u', value: '0' },
          { name: 'v', value: '2' },
          { name: 'w', value: '3' },
        ],
      },
      {
        line: 21,
        summary: 'Union 0 and 2',
        why: "parent[0] = 3. All 4 vertices now share root 3. We have 3 edges connecting 4 vertices — that's a spanning tree!",
        event: 'union',
        memory: [
          { name: 'parent', value: '[3, 2, 3, 3]' },
          { name: 'mst', value: '[(1, 2, 1), (1, 3, 2), (0, 2, 3)]' },
        ],
        output: ['[(1, 2, 1), (1, 3, 2), (0, 2, 3)]'],
      },
      {
        line: 20,
        summary: 'Try edge (0,1,4)',
        why: 'find(0)=3, find(1)=3. SAME root! Adding this edge would create a cycle. Skip it.',
        event: 'branch',
        memory: [
          { name: 'u', value: '0' },
          { name: 'v', value: '1' },
          { name: 'w', value: '4' },
        ],
      },
      {
        line: 20,
        summary: 'Try edge (2,3,4)',
        why: 'find(2)=3, find(3)=3. SAME root again. This would also create a cycle. Skip it. MST is complete.',
        event: 'branch',
        memory: [
          { name: 'u', value: '2' },
          { name: 'v', value: '3' },
          { name: 'w', value: '4' },
        ],
      },
      {
        line: 23,
        summary: 'Return MST',
        why: "MST has 3 edges with total weight 1+2+3=6. For V vertices, a tree always has exactly V-1 edges. Kruskal's guarantees the minimum total weight.",
        event: 'return',
        memory: [{ name: 'mst', value: '[(1, 2, 1), (1, 3, 2), (0, 2, 3)]' }],
        output: ['[(1, 2, 1), (1, 3, 2), (0, 2, 3)]'],
      },
    ],
  },

  // ── Trie (Prefix Tree) ─────────────────────────────────────────────────────
  {
    id: 'trie',
    title: 'Trie (Prefix Tree)',
    level: 'mastery',
    levelColor: 'text-amber-400',
    duration: '15 min',
    objective: 'Build a prefix tree that stores words character-by-character for fast search and autocomplete.',
    prompt: "Insert 'dog' and search for 'cat'. Why does search('ca') return False even though 'cat' was inserted?",
    hint: "search() checks is_end at the final node. 'ca' exists as a path but is_end=False — it's not a complete word.",
    timeComplexity: 'O(m) — m = word length',
    spaceComplexity: 'O(n × m) — n = words',
    useCases: ['Autocomplete', 'Spell checkers', 'IP routing', 'Dictionary lookups'],
    approach:
      'Trie (prefix tree) stores strings character-by-character in a tree structure. Each path from root to leaf represents a word. Sharing prefixes saves space. Search/insert/delete are all O(m) where m is word length.',
    output: ['True', 'False'],
    starterCode: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()
    
    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end = True
    
    def search(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                return False
            node = node.children[char]
        return node.is_end

trie = Trie()
trie.insert("cat")
trie.insert("car")
print(trie.search("cat"))
print(trie.search("can"))
`,
    executionFrames: [
      {
        line: 1,
        summary: 'Define TrieNode class',
        why: 'Each node holds children dict (maps char → TrieNode) and is_end flag (True if this node completes a word). This structure allows prefix sharing.',
        event: 'call',
        memory: [],
      },
      {
        line: 6,
        summary: 'Create Trie with root',
        why: 'Trie starts with an empty root node. The root represents the empty string. All words branch from here.',
        event: 'assign',
        memory: [{ name: 'root', value: 'TrieNode{children: {}, is_end: False}' }],
      },
      {
        line: 27,
        summary: "Insert 'cat'",
        why: "Start at root. Build path c→a→t. Each node is created on demand if the character doesn't exist yet.",
        event: 'call',
        memory: [
          { name: 'word', value: '"cat"' },
          { name: 'node', value: 'root' },
        ],
      },
      {
        line: 13,
        summary: "Traverse/create 'c'",
        why: "'c' not in root.children, so create TrieNode and assign to root.children['c']. Move node pointer to this new node.",
        event: 'assign',
        memory: [
          { name: 'char', value: '"c"' },
          { name: 'node.children', value: "{'c': TrieNode{}}" },
        ],
      },
      {
        line: 13,
        summary: "Traverse/create 'a'",
        why: "'a' not in node.children (we're at 'c' node now). Create TrieNode for 'a'. Path is now c→a.",
        event: 'assign',
        memory: [
          { name: 'char', value: '"a"' },
          { name: 'node.children', value: "{'a': TrieNode{}}" },
        ],
      },
      {
        line: 13,
        summary: "Traverse/create 't'",
        why: "Create 't' node. We've built the full path root→c→a→t.",
        event: 'assign',
        memory: [
          { name: 'char', value: '"t"' },
          { name: 'node.children', value: "{'t': TrieNode{}}" },
        ],
      },
      {
        line: 16,
        summary: "Mark 't' as end",
        why: "Set is_end=True at the 't' node. This marks 'cat' as a complete word. Without this flag, 'cat' would just be a prefix.",
        event: 'assign',
        memory: [{ name: 'node.is_end', value: 'True' }],
      },
      {
        line: 28,
        summary: "Insert 'car'",
        why: "Start again at root. Path c→a already exists (shared with 'cat'). We only need to add 'r' and mark it as end.",
        event: 'call',
        memory: [{ name: 'word', value: '"car"' }],
      },
      {
        line: 12,
        summary: "Reuse 'c' node",
        why: "'c' already in root.children from 'cat' insert. Sharing prefixes is the key space-saving feature of tries. Move to existing node.",
        event: 'branch',
        memory: [{ name: 'char', value: '"c"' }],
      },
      {
        line: 12,
        summary: "Reuse 'a' node",
        why: "'a' already exists under 'c'. Move to existing node. We've reused 2 nodes so far.",
        event: 'branch',
        memory: [{ name: 'char', value: '"a"' }],
      },
      {
        line: 13,
        summary: "Create 'r' node",
        why: "'r' not in 'a' node's children. Create new TrieNode. Now we have two branches from 'a': 't' (for 'cat') and 'r' (for 'car').",
        event: 'assign',
        memory: [
          { name: 'char', value: '"r"' },
          { name: 'node.children', value: "{'r': TrieNode{}}" },
        ],
      },
      {
        line: 16,
        summary: "Mark 'r' as end",
        why: "Set is_end=True at 'r' node. 'car' is now a complete word. Tree has root→c→a with two children: t (cat) and r (car).",
        event: 'assign',
        memory: [{ name: 'node.is_end', value: 'True' }],
      },
      {
        line: 29,
        summary: "Search for 'cat'",
        why: "Start at root. Traverse c→a→t. Check if the final node has is_end=True. It does — 'cat' was inserted.",
        event: 'call',
        memory: [{ name: 'word', value: '"cat"' }],
      },
      {
        line: 24,
        summary: 'Return True',
        why: "All characters found AND node.is_end=True at the final 't' node. 'cat' is a complete word in the trie.",
        event: 'return',
        memory: [{ name: 'result', value: 'True' }],
        output: ['True'],
      },
      {
        line: 30,
        summary: "Search for 'can'",
        why: "Start at root. Traverse c→a. Try to find 'n' in 'a' node's children. It doesn't exist — we only have 't' and 'r'.",
        event: 'call',
        memory: [{ name: 'word', value: '"can"' }],
      },
      {
        line: 22,
        summary: 'Return False',
        why: "'n' not in node.children at 'a' node. Path c→a→n doesn't exist in the tree. Return False immediately.",
        event: 'return',
        memory: [{ name: 'result', value: 'False' }],
        output: ['True', 'False'],
      },
    ],
  },

  // ── Floyd-Warshall ─────────────────────────────────────────────────────────
  {
    id: 'floyd-warshall',
    title: 'Floyd-Warshall All-Pairs Shortest Path',
    level: 'mastery',
    levelColor: 'text-amber-400',
    duration: '15 min',
    objective: 'Compute shortest paths between all pairs of vertices using dynamic programming with a k-i-j triple loop.',
    prompt: 'Change graph[0] to [(1,2), (2,5)]. How does the algorithm find that 0→2 direct (5) is worse than 0→1→2 (3)?',
    hint: 'Watch the k=1 iteration. When k=1, it checks if dist[0][1] + dist[1][2] < dist[0][2]. If true, it updates dist[0][2].',
    timeComplexity: 'O(V³)',
    spaceComplexity: 'O(V²)',
    useCases: ['All-pairs shortest paths', 'Route optimization', 'Network analysis', 'Transitive closure'],
    approach:
      'Floyd-Warshall computes shortest paths between all pairs of vertices using dynamic programming. For each intermediate vertex k, it checks if path i→k→j is shorter than direct i→j. Works with negative weights (but not negative cycles).',
    output: ['[0, 3, 4, 5]', '[inf, 0, 1, 2]', '[inf, inf, 0, 1]', '[inf, inf, inf, 0]'],
    starterCode: `def floyd_warshall(graph):
    n = len(graph)
    dist = [[float('inf')] * n for _ in range(n)]
    
    for i in range(n):
        dist[i][i] = 0
    
    for u in range(n):
        for v, w in graph[u]:
            dist[u][v] = w
    
    for k in range(n):
        for i in range(n):
            for j in range(n):
                dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])
    
    return dist

graph = [[(1,3), (2,8)], [(2,1)], [(3,1)], []]
result = floyd_warshall(graph)
for row in result:
    print(row)
`,
    executionFrames: [
      {
        line: 3,
        summary: 'Initialize dist matrix',
        why: "Start with all distances = infinity. dist[i][j] will eventually hold the shortest path from i to j. Infinity means 'no path known yet.'",
        event: 'assign',
        memory: [
          { name: 'n', value: '4' },
          { name: 'dist', value: '[[∞, ∞, ∞, ∞], [∞, ∞, ∞, ∞], [∞, ∞, ∞, ∞], [∞, ∞, ∞, ∞]]' },
        ],
      },
      {
        line: 6,
        summary: 'Set diagonal to 0',
        why: 'dist[i][i] = 0 for all i. Distance from a vertex to itself is always 0. This is the base case.',
        event: 'assign',
        memory: [{ name: 'dist', value: '[[0, ∞, ∞, ∞], [∞, 0, ∞, ∞], [∞, ∞, 0, ∞], [∞, ∞, ∞, 0]]' }],
      },
      {
        line: 9,
        summary: 'Load direct edges',
        why: 'For each edge (u, v, w), set dist[u][v] = w. These are the direct edge weights — the initial known paths. 0→1: 3, 0→2: 8, 1→2: 1, 2→3: 1.',
        event: 'assign',
        memory: [{ name: 'dist', value: '[[0, 3, 8, ∞], [∞, 0, 1, ∞], [∞, ∞, 0, 1], [∞, ∞, ∞, 0]]' }],
      },
      {
        line: 12,
        summary: 'k=0: Try paths via 0',
        why: 'For each pair (i, j), check if going through vertex 0 is shorter than the current known path. dist[i][j] vs dist[i][0] + dist[0][j].',
        event: 'loop',
        memory: [{ name: 'k', value: '0' }],
      },
      {
        line: 15,
        summary: 'Update dist[1][2] via 0?',
        why: 'Check dist[1][2] (currently 1) vs dist[1][0] + dist[0][2] = ∞ + 8 = ∞. Direct 1→2 is better. No update.',
        event: 'compare',
        memory: [
          { name: 'i', value: '1' },
          { name: 'j', value: '2' },
          { name: 'dist[1][2]', value: '1' },
        ],
      },
      {
        line: 12,
        summary: 'k=1: Try paths via 1',
        why: 'Now check if routing through vertex 1 improves any paths. This is where we discover 0→1→2 is better than direct 0→2.',
        event: 'loop',
        memory: [{ name: 'k', value: '1' }],
      },
      {
        line: 15,
        summary: 'Update dist[0][2] via 1',
        why: 'dist[0][2]=8 vs dist[0][1]+dist[1][2]=3+1=4. Going through 1 is shorter! Update dist[0][2]=4. This is the DP magic.',
        event: 'assign',
        memory: [
          { name: 'i', value: '0' },
          { name: 'j', value: '2' },
          { name: 'dist[0][2]', value: '4' },
        ],
      },
      {
        line: 15,
        summary: 'Update dist[0][3] via 1',
        why: 'dist[0][3]=∞ vs dist[0][1]+dist[1][2]+dist[2][3]=3+1+1=5 (via path we just found). dist[0][3]=5 now.',
        event: 'assign',
        memory: [
          { name: 'i', value: '0' },
          { name: 'j', value: '3' },
          { name: 'dist[0][3]', value: '5' },
        ],
      },
      {
        line: 15,
        summary: 'Update dist[1][3] via 2',
        why: "We're at k=2 now. dist[1][3]=∞ vs dist[1][2]+dist[2][3]=1+1=2. Path 1→2→3 has distance 2.",
        event: 'assign',
        memory: [
          { name: 'k', value: '2' },
          { name: 'i', value: '1' },
          { name: 'j', value: '3' },
          { name: 'dist[1][3]', value: '2' },
        ],
      },
      {
        line: 12,
        summary: 'k=2 continues',
        why: 'Check all other pairs via vertex 2. Most are already optimal from previous iterations. This is the DP table filling in action.',
        event: 'loop',
        memory: [{ name: 'k', value: '2' }],
      },
      {
        line: 12,
        summary: 'k=3: Final pass',
        why: 'Check paths via vertex 3. Since 3 has no outgoing edges, no improvements are possible. The distance matrix is now complete.',
        event: 'loop',
        memory: [{ name: 'k', value: '3' }],
      },
      {
        line: 17,
        summary: 'Return dist matrix',
        why: 'dist[i][j] now holds the shortest path distance from i to j for all pairs. O(V³) iterations to compute all V² pairs.',
        event: 'return',
        memory: [{ name: 'dist', value: '[[0, 3, 4, 5], [∞, 0, 1, 2], [∞, ∞, 0, 1], [∞, ∞, ∞, 0]]' }],
        output: ['[0, 3, 4, 5]', '[inf, 0, 1, 2]', '[inf, inf, 0, 1]', '[inf, inf, inf, 0]'],
      },
    ],
  },

  // ── Segment Tree ───────────────────────────────────────────────────────────
  {
    id: 'segment-tree',
    title: 'Segment Tree for Range Queries',
    level: 'mastery',
    levelColor: 'text-amber-400',
    duration: '15 min',
    objective: 'Build a segment tree for fast range sum queries in O(log n) time.',
    prompt: "Change the array to [2, 4, 6, 8, 10, 12]. What's the sum of indices 2-4? How many nodes does the query visit?",
    hint: 'Query visits O(log n) nodes. Each recursive call splits the range in half until it finds segments fully inside [l, r].',
    timeComplexity: 'O(log n) query/update',
    spaceComplexity: 'O(n)',
    useCases: ['Range queries', 'Interval statistics', 'Competitive programming', 'Real-time analytics'],
    approach:
      'Segment tree is a binary tree for range queries. Each node stores aggregate (sum/min/max) for a range. Queries and updates are O(log n). Build is O(n). Essential for problems requiring fast range operations.',
    output: ['15'],
    starterCode: `class SegmentTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.tree = [0] * (4 * self.n)
        self.build(arr, 0, 0, self.n - 1)
    
    def build(self, arr, node, start, end):
        if start == end:
            self.tree[node] = arr[start]
        else:
            mid = (start + end) // 2
            self.build(arr, 2*node+1, start, mid)
            self.build(arr, 2*node+2, mid+1, end)
            self.tree[node] = self.tree[2*node+1] + self.tree[2*node+2]
    
    def query(self, node, start, end, l, r):
        if r < start or end < l:
            return 0
        if l <= start and end <= r:
            return self.tree[node]
        mid = (start + end) // 2
        return self.query(2*node+1, start, mid, l, r) + self.query(2*node+2, mid+1, end, l, r)

arr = [1, 3, 5, 7, 9, 11]
st = SegmentTree(arr)
print(st.query(0, 0, 5, 1, 3))
`,
    executionFrames: [
      {
        line: 3,
        summary: 'Initialize tree array',
        why: "self.tree size is 4*n — a safe upper bound for a binary tree with n leaves. For n=6, we allocate 24 slots. Most will be unused but it's simple.",
        event: 'assign',
        memory: [
          { name: 'n', value: '6' },
          { name: 'tree', value: '[0, 0, ..., 0] (24 zeros)' },
        ],
      },
      {
        line: 8,
        summary: 'Build tree recursively',
        why: "build() fills the tree bottom-up. Base case: if start==end, it's a leaf — store arr[start]. Recursive case: build left and right subtrees, then sum them.",
        event: 'call',
        memory: [
          { name: 'node', value: '0' },
          { name: 'start', value: '0' },
          { name: 'end', value: '5' },
        ],
      },
      {
        line: 8,
        summary: 'Leaf: tree[8] = arr[0] = 1',
        why: 'Leftmost leaf covers index 0. tree[8]=1. (The exact node index depends on the recursion path — 2*node+1 repeatedly.)',
        event: 'assign',
        memory: [{ name: 'tree[8]', value: '1' }],
      },
      {
        line: 8,
        summary: 'Leaf: tree[9] = arr[1] = 3',
        why: 'Next leaf covers index 1. tree[9]=3. Leaves are scattered in the tree array based on binary indexing.',
        event: 'assign',
        memory: [{ name: 'tree[9]', value: '3' }],
      },
      {
        line: 14,
        summary: 'Internal: tree[4] = 1+3 = 4',
        why: 'tree[4] covers range [0,1]. It sums its children: tree[8]+tree[9]=1+3=4. This is the bottom-up aggregation.',
        event: 'assign',
        memory: [{ name: 'tree[4]', value: '4' }],
      },
      {
        line: 14,
        summary: 'Build continues: tree[0]=36',
        why: 'Root tree[0] covers entire range [0,5]. Sum of all leaves: 1+3+5+7+9+11=36. Build is O(n) — visit each element once.',
        event: 'assign',
        memory: [{ name: 'tree[0]', value: '36' }],
      },
      {
        line: 26,
        summary: 'Query sum(1, 3)',
        why: 'We want sum of arr[1..3] = 3+5+7 = 15. query() recursively visits nodes until it finds segments fully inside [1,3].',
        event: 'call',
        memory: [
          { name: 'l', value: '1' },
          { name: 'r', value: '3' },
        ],
      },
      {
        line: 17,
        summary: 'Check node [0,5]',
        why: 'Start at root (range [0,5]). Not fully inside [1,3] — need to split. Go to left and right children.',
        event: 'compare',
        memory: [
          { name: 'node', value: '0' },
          { name: 'start', value: '0' },
          { name: 'end', value: '5' },
        ],
      },
      {
        line: 21,
        summary: 'Recurse left [0,2]',
        why: 'Left child covers [0,2]. mid=(0+5)//2=2. Recurse to node 2*0+1=1 with range [0,2]. This overlaps [1,3] partially.',
        event: 'call',
        memory: [
          { name: 'node', value: '1' },
          { name: 'start', value: '0' },
          { name: 'end', value: '2' },
        ],
      },
      {
        line: 21,
        summary: 'Recurse right [3,5]',
        why: 'Right child covers [3,5]. Recurse to node 2*0+2=2 with range [3,5]. This overlaps [1,3] at index 3 only.',
        event: 'call',
        memory: [
          { name: 'node', value: '2' },
          { name: 'start', value: '3' },
          { name: 'end', value: '5' },
        ],
      },
      {
        line: 19,
        summary: 'Segment [1,1] fully inside',
        why: 'Found a node covering exactly [1,1], fully inside [1,3]. Return tree[node]=3 immediately. No further recursion needed here.',
        event: 'return',
        memory: [{ name: 'tree[node]', value: '3' }],
      },
      {
        line: 19,
        summary: 'Segment [2,2] fully inside',
        why: "Another fully-inside segment [2,2]. Return tree[node]=5. These are the leaves we're collecting.",
        event: 'return',
        memory: [{ name: 'tree[node]', value: '5' }],
      },
      {
        line: 19,
        summary: 'Segment [3,3] fully inside',
        why: "Segment [3,3] is fully inside [1,3]. Return tree[node]=7. We've now collected arr[1], arr[2], arr[3].",
        event: 'return',
        memory: [{ name: 'tree[node]', value: '7' }],
      },
      {
        line: 22,
        summary: 'Sum partial results',
        why: 'Recursion unwinds. Sum the returns: 3+5+7=15. This is the answer. We visited O(log n) nodes — much faster than iterating arr[1..3] manually for large arrays.',
        event: 'return',
        memory: [{ name: 'result', value: '15' }],
        output: ['15'],
      },
    ],
  },

  // ── Bit Manipulation ───────────────────────────────────────────────────────
  {
    id: 'bit-manipulation',
    title: 'Bit Manipulation Tricks',
    level: 'mastery',
    levelColor: 'text-amber-400',
    duration: '15 min',
    objective: 'Master bitwise operators and classic bit tricks for constant-time operations.',
    prompt: 'Change count_set_bits(13) to count_set_bits(255). How many bits are set? Why is n &= (n-1) faster than checking each bit?',
    hint: "n &= (n-1) clears the rightmost set bit. For 255 (11111111), it runs 8 times. For sparse numbers, it's much faster than checking all 32/64 bits.",
    timeComplexity: 'O(1) or O(k) — k = bits',
    spaceComplexity: 'O(1)',
    useCases: ['Low-level optimization', 'Cryptography', 'Compression', 'Graphics programming'],
    approach:
      'Bitwise operators (&, |, ^, ~, <<, >>) manipulate individual bits. n & (n-1) clears rightmost set bit. n & -n isolates rightmost set bit. XOR swap uses no temp variable. Bit tricks enable constant-time operations.',
    output: ['Set bits in 13: 3', 'Is 16 power of 2? True', 'Swapped: 10 5'],
    starterCode: `def count_set_bits(n):
    count = 0
    while n:
        count += 1
        n &= (n - 1)
    return count

def is_power_of_two(n):
    return n > 0 and (n & (n - 1)) == 0

def swap_bits(a, b):
    a = a ^ b
    b = a ^ b
    a = a ^ b
    return a, b

print("Set bits in 13:", count_set_bits(13))
print("Is 16 power of 2?", is_power_of_two(16))
a, b = swap_bits(5, 10)
print("Swapped:", a, b)
`,
    executionFrames: [
      {
        line: 1,
        summary: 'count_set_bits(13)',
        why: "13 in binary is 1101. We want to count the number of 1 bits. Naive approach: check each bit with n & (1 << i). Brian Kernighan's trick is faster.",
        event: 'call',
        memory: [{ name: 'n', value: '13 (0b1101)' }],
      },
      {
        line: 5,
        summary: 'n &= (n-1) — iteration 1',
        why: 'n=13 (1101), n-1=12 (1100). n & (n-1) = 1101 & 1100 = 1100 (12). This clears the rightmost set bit (the 1 in position 0).',
        event: 'assign',
        memory: [
          { name: 'n', value: '12 (0b1100)' },
          { name: 'count', value: '1' },
        ],
      },
      {
        line: 5,
        summary: 'n &= (n-1) — iteration 2',
        why: 'n=12 (1100), n-1=11 (1011). n & (n-1) = 1100 & 1011 = 1000 (8). Cleared the bit at position 2.',
        event: 'assign',
        memory: [
          { name: 'n', value: '8 (0b1000)' },
          { name: 'count', value: '2' },
        ],
      },
      {
        line: 5,
        summary: 'n &= (n-1) — iteration 3',
        why: 'n=8 (1000), n-1=7 (0111). n & (n-1) = 1000 & 0111 = 0000 (0). Cleared the last bit. n is now 0, loop exits.',
        event: 'assign',
        memory: [
          { name: 'n', value: '0 (0b0000)' },
          { name: 'count', value: '3' },
        ],
      },
      {
        line: 6,
        summary: 'Return count=3',
        why: 'Loop ran 3 times because 13 has 3 set bits. This is O(k) where k = number of set bits — faster than O(log n) for sparse numbers.',
        event: 'return',
        memory: [{ name: 'count', value: '3' }],
        output: ['Set bits in 13: 3'],
      },
      {
        line: 8,
        summary: 'is_power_of_two(16)',
        why: 'Powers of 2 have exactly 1 set bit: 1, 2, 4, 8, 16 (10000). If n has 1 bit, n & (n-1) clears it → 0. So n & (n-1) == 0 is the test.',
        event: 'call',
        memory: [{ name: 'n', value: '16 (0b10000)' }],
      },
      {
        line: 9,
        summary: 'Check n & (n-1) == 0',
        why: '16 & 15 = 10000 & 01111 = 00000. Yes! 16 is a power of 2. Also check n > 0 to exclude 0 (which would also satisfy n & (n-1) == 0).',
        event: 'compare',
        memory: [{ name: 'result', value: 'True' }],
        output: ['Set bits in 13: 3', 'Is 16 power of 2? True'],
      },
      {
        line: 11,
        summary: 'XOR swap: a=5, b=10',
        why: 'Classic XOR swap without temp variable. a=5 (0101), b=10 (1010). XOR has the property: x^x=0, x^0=x, x^y^x=y.',
        event: 'call',
        memory: [
          { name: 'a', value: '5 (0b0101)' },
          { name: 'b', value: '10 (0b1010)' },
        ],
      },
      {
        line: 12,
        summary: 'a = a ^ b',
        why: 'a = 5 ^ 10 = 0101 ^ 1010 = 1111 (15). Now a holds the XOR of both original values. This is the key.',
        event: 'assign',
        memory: [
          { name: 'a', value: '15 (0b1111)' },
          { name: 'b', value: '10 (0b1010)' },
        ],
      },
      {
        line: 13,
        summary: 'b = a ^ b',
        why: 'b = 15 ^ 10 = 1111 ^ 1010 = 0101 (5). b now has the original value of a! Because (a^b)^b = a^(b^b) = a^0 = a.',
        event: 'assign',
        memory: [
          { name: 'a', value: '15 (0b1111)' },
          { name: 'b', value: '5 (0b0101)' },
        ],
      },
      {
        line: 14,
        summary: 'a = a ^ b',
        why: 'a = 15 ^ 5 = 1111 ^ 0101 = 1010 (10). a now has the original value of b! Because (a^b)^a = b. Swap complete with no temp variable.',
        event: 'assign',
        memory: [
          { name: 'a', value: '10 (0b1010)' },
          { name: 'b', value: '5 (0b0101)' },
        ],
      },
      {
        line: 15,
        summary: 'Return swapped values',
        why: 'a and b are swapped: a=10, b=5. XOR swap is a clever trick but rarely used in practice — modern compilers optimize temp variables to registers anyway.',
        event: 'return',
        memory: [
          { name: 'a', value: '10' },
          { name: 'b', value: '5' },
        ],
        output: ['Set bits in 13: 3', 'Is 16 power of 2? True', 'Swapped: 10 5'],
      },
    ],
  },
];

export function getPlaygroundLessonsForLocale(locale: string): PlaygroundLesson[] {
  const overlays = getLocaleOverlays(locale);
  if (!overlays) return playgroundLessons;

  return playgroundLessons.map((lesson) => {
    const overlay = overlays[lesson.id];
    if (!overlay) return lesson;

    const executionFrames = overlay.executionFrames
      ? lesson.executionFrames.map((frame, index) => {
          const patch = overlay.executionFrames?.[index];
          if (!patch) return frame;
          return { ...frame, summary: patch.summary ?? frame.summary, why: patch.why ?? frame.why };
        })
      : lesson.executionFrames;

    return {
      ...lesson,
      prompt: overlay.prompt ?? lesson.prompt,
      hint: overlay.hint ?? lesson.hint,
      approach: overlay.approach ?? lesson.approach,
      useCases: overlay.useCases ?? lesson.useCases,
      explanation: overlay.explanation ?? lesson.explanation,
      executionFrames,
    };
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Backward-compat exports
// ─────────────────────────────────────────────────────────────────────────────

export const starterCode = playgroundLessons[0].starterCode;
export const executionFrames = playgroundLessons[0].executionFrames;
