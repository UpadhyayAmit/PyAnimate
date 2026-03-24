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
  why: string;         // reasoning behind the design choice at this line
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
};

export type AlgorithmEntry = {
  id: string;
  title: string;
  description: string;
  timeComplexity: string;
  spaceComplexity: string;
  category: string;
  difficulty: "easy" | "medium" | "hard";
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
    id: "foundation",
    title: "Foundation",
    audience: "Absolute beginners, zero experience",
    accent: "from-sky-900/60 to-blue-950/40",
    iconBg: "bg-sky-50",
    goals: ["Print & variables", "Types and comparisons", "If / else logic"],
    lessonCount: 10,
    description:
      "Start from zero. Learn how Python thinks about data, decisions, and flow — step by step, with every concept animated.",
  },
  {
    id: "beginner",
    title: "Beginner",
    audience: "First-time Python learners",
    accent: "from-indigo-900/60 to-violet-950/40",
    iconBg: "bg-blue-50",
    goals: ["Loops & iteration", "Functions & scope", "List operations"],
    lessonCount: 10,
    description:
      "Build real programming habits. Master loops, functions, and lists by watching them execute one step at a time.",
  },
  {
    id: "intermediate",
    title: "Intermediate",
    audience: "Builders shipping scripts and apps",
    accent: "from-emerald-900/60 to-teal-950/40",
    iconBg: "bg-green-50",
    goals: ["Data structures", "Searching algorithms", "OOP foundations"],
    lessonCount: 10,
    description:
      "Upgrade your toolkit. Explore dictionaries, stacks, queues, and your first search algorithms with visual state tracking.",
  },
  {
    id: "advanced",
    title: "Advanced",
    audience: "Engineers refining problem solving",
    accent: "from-amber-900/60 to-orange-950/40",
    iconBg: "bg-amber-50",
    goals: ["Sorting algorithms", "Recursion & trees", "Time complexity"],
    lessonCount: 10,
    description:
      "Think algorithmically. See sorting and tree algorithms animate in real time, understand Big O through observation.",
  },
  {
    id: "mastery",
    title: "Mastery",
    audience: "Experts exploring internals",
    accent: "from-rose-900/60 to-red-950/40",
    iconBg: "bg-orange-50",
    goals: ["Graph traversal", "Dynamic programming", "System-level thinking"],
    lessonCount: 10,
    description:
      "Push to the frontier. Graph search, dynamic programming, and interview-level algorithms — all visualized live.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Algorithm catalog — 10 per level
// ─────────────────────────────────────────────────────────────────────────────

export const algorithmsByLevel: Record<string, AlgorithmEntry[]> = {
  foundation: [
    {
      id: "hello-world",
      title: "Hello World & Print",
      description: "Your first Python output. See how print() sends data to the console and why it's the foundation of all debugging.",
      timeComplexity: "O(1)",
      spaceComplexity: "O(1)",
      category: "Basics",
      difficulty: "easy",
      hasPlayground: false,
      duration: "5 min",
      tags: ["print", "output", "basics"],
    },
    {
      id: "variables-types",
      title: "Variables & Types",
      description: "Watch a variable come to life in memory. See int, float, str, and bool as living boxes that hold values.",
      timeComplexity: "O(1)",
      spaceComplexity: "O(1)",
      category: "Basics",
      difficulty: "easy",
      hasPlayground: true,
      duration: "8 min",
      tags: ["variables", "types", "memory"],
    },
    {
      id: "string-operations",
      title: "String Operations",
      description: "Strings are sequences. See slicing, concatenation, and methods animate over character arrays.",
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
      category: "Strings",
      difficulty: "easy",
      hasPlayground: false,
      duration: "8 min",
      tags: ["strings", "slicing", "methods"],
    },
    {
      id: "arithmetic",
      title: "Arithmetic & Math",
      description: "Numbers, operators, and integer division. See exactly how Python evaluates expressions step by step.",
      timeComplexity: "O(1)",
      spaceComplexity: "O(1)",
      category: "Math",
      difficulty: "easy",
      hasPlayground: false,
      duration: "6 min",
      tags: ["math", "operators", "division"],
    },
    {
      id: "if-else",
      title: "If / Else Conditions",
      description: "Code that makes decisions. Watch execution jump between branches based on truthiness.",
      timeComplexity: "O(1)",
      spaceComplexity: "O(1)",
      category: "Control Flow",
      difficulty: "easy",
      hasPlayground: true,
      duration: "8 min",
      tags: ["conditions", "branching", "boolean"],
    },
    {
      id: "while-loop",
      title: "While Loops",
      description: "Repetition driven by a condition. See the loop guard check before every iteration and why infinite loops happen.",
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      category: "Loops",
      difficulty: "easy",
      hasPlayground: true,
      duration: "10 min",
      tags: ["loops", "while", "iteration"],
    },
    {
      id: "for-loop",
      title: "For Loops & Range",
      description: "Iterate over sequences. See how Python's for loop is really an iterator under the hood.",
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      category: "Loops",
      difficulty: "easy",
      hasPlayground: true,
      duration: "12 min",
      tags: ["loops", "for", "range"],
    },
    {
      id: "lists-basics",
      title: "Lists Basics",
      description: "Python's most useful container. See append, pop, and index as operations on an animated memory block.",
      timeComplexity: "O(1) amortized",
      spaceComplexity: "O(n)",
      category: "Data Structures",
      difficulty: "easy",
      hasPlayground: false,
      duration: "10 min",
      tags: ["lists", "append", "index"],
    },
    {
      id: "functions-intro",
      title: "Functions Intro",
      description: "Reusable blocks of logic. Watch a function call push a stack frame and return value flow back to the caller.",
      timeComplexity: "O(1)",
      spaceComplexity: "O(1)",
      category: "Functions",
      difficulty: "easy",
      hasPlayground: false,
      duration: "12 min",
      tags: ["functions", "return", "scope"],
    },
    {
      id: "input-output",
      title: "Input & Output",
      description: "Programs that talk to users. See how input() pauses execution and returns a string value.",
      timeComplexity: "O(1)",
      spaceComplexity: "O(1)",
      category: "I/O",
      difficulty: "easy",
      hasPlayground: false,
      duration: "6 min",
      tags: ["input", "output", "interactive"],
    },
  ],

  beginner: [
    {
      id: "linear-search",
      title: "Linear Search",
      description: "Check every element until you find the target. O(n) — the simplest search algorithm there is.",
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      category: "Searching",
      difficulty: "easy",
      hasPlayground: true,
      duration: "8 min",
      tags: ["search", "linear", "brute force"],
    },
    {
      id: "count-occurrences",
      title: "Count Occurrences",
      description: "Count how many times a value appears. See a hash map accumulate counts with each pass.",
      timeComplexity: "O(n)",
      spaceComplexity: "O(k)",
      category: "Counting",
      difficulty: "easy",
      hasPlayground: true,
      duration: "8 min",
      tags: ["counting", "dictionary", "frequency"],
    },
    {
      id: "find-min-max",
      title: "Find Min & Max",
      description: "Track the running minimum and maximum through a single pass. See why one loop is enough.",
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      category: "Array",
      difficulty: "easy",
      hasPlayground: false,
      duration: "8 min",
      tags: ["min", "max", "single pass"],
    },
    {
      id: "sum-average",
      title: "Sum & Average",
      description: "Accumulate values and compute the mean. See the accumulator pattern that powers many algorithms.",
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      category: "Math",
      difficulty: "easy",
      hasPlayground: false,
      duration: "6 min",
      tags: ["sum", "average", "accumulator"],
    },
    {
      id: "loop-explorer",
      title: "Loop Explorer",
      description: "Watch how loop iterations update shared state. See score accumulate with each pass.",
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      category: "Loops",
      difficulty: "easy",
      hasPlayground: true,
      duration: "12 min",
      tags: ["loops", "state", "accumulator"],
    },
    {
      id: "reverse-list",
      title: "Reverse a List",
      description: "Two-pointer swap from both ends. Watch pointers move inward until they meet in the middle.",
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      category: "Array",
      difficulty: "easy",
      hasPlayground: true,
      duration: "8 min",
      tags: ["reverse", "two pointers", "in-place"],
    },
    {
      id: "palindrome",
      title: "Check Palindrome",
      description: "Compare characters from both ends. See how the two-pointer technique confirms symmetry.",
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      category: "Strings",
      difficulty: "easy",
      hasPlayground: false,
      duration: "8 min",
      tags: ["palindrome", "two pointers", "strings"],
    },
    {
      id: "fizzbuzz",
      title: "FizzBuzz",
      description: "Classic divisibility check. See modulo drive conditional output across 100 iterations.",
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      category: "Math",
      difficulty: "easy",
      hasPlayground: false,
      duration: "6 min",
      tags: ["modulo", "conditions", "classic"],
    },
    {
      id: "factorial",
      title: "Factorial (Iterative)",
      description: "Multiply from 1 to n. See the product grow step by step and understand why 0! = 1.",
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      category: "Math",
      difficulty: "easy",
      hasPlayground: true,
      duration: "6 min",
      tags: ["factorial", "iterative", "math"],
    },
    {
      id: "fibonacci-iterative",
      title: "Fibonacci (Iterative)",
      description: "Generate the sequence with two rolling variables. See why this beats the recursive version in space.",
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      category: "Math",
      difficulty: "medium",
      hasPlayground: true,
      duration: "8 min",
      tags: ["fibonacci", "iterative", "rolling vars"],
    },
  ],

  intermediate: [
    {
      id: "binary-search",
      title: "Binary Search",
      description: "Halve the search space every step. Requires sorted input. Watch O(log n) happen live.",
      timeComplexity: "O(log n)",
      spaceComplexity: "O(1)",
      category: "Searching",
      difficulty: "medium",
      hasPlayground: true,
      duration: "12 min",
      tags: ["binary search", "divide & conquer", "sorted"],
    },
    {
      id: "selection-sort",
      title: "Selection Sort",
      description: "Find the minimum each pass and move it to the front. See n passes produce a sorted array.",
      timeComplexity: "O(n²)",
      spaceComplexity: "O(1)",
      category: "Sorting",
      difficulty: "medium",
      hasPlayground: true,
      duration: "12 min",
      tags: ["sorting", "selection", "in-place"],
    },
    {
      id: "insertion-sort",
      title: "Insertion Sort",
      description: "Insert each element into its correct position in the already-sorted prefix. Efficient for nearly sorted data.",
      timeComplexity: "O(n²) worst, O(n) best",
      spaceComplexity: "O(1)",
      category: "Sorting",
      difficulty: "medium",
      hasPlayground: true,
      duration: "12 min",
      tags: ["sorting", "insertion", "adaptive"],
    },
    {
      id: "two-pointers",
      title: "Two Pointers",
      description: "Use two indices moving toward each other to solve array problems in O(n) instead of O(n²).",
      timeComplexity: "O(n)",
      spaceComplexity: "O(1)",
      category: "Array",
      difficulty: "medium",
      hasPlayground: false,
      duration: "10 min",
      tags: ["two pointers", "optimization", "array"],
    },
    {
      id: "hash-map-counting",
      title: "Hash Map Counting",
      description: "Use a dictionary to count in O(1) per lookup. The foundation of many frequency problems.",
      timeComplexity: "O(n)",
      spaceComplexity: "O(k)",
      category: "Hash Maps",
      difficulty: "medium",
      hasPlayground: true,
      duration: "10 min",
      tags: ["hash map", "frequency", "dictionary"],
    },
    {
      id: "stack-ops",
      title: "Stack Operations",
      description: "LIFO in action. See push, pop, and peek animate on a list used as a stack.",
      timeComplexity: "O(1) per op",
      spaceComplexity: "O(n)",
      category: "Data Structures",
      difficulty: "medium",
      hasPlayground: true,
      duration: "10 min",
      tags: ["stack", "LIFO", "data structures"],
    },
    {
      id: "queue-ops",
      title: "Queue Operations",
      description: "FIFO in action. See enqueue and dequeue animate and understand why deque beats a list.",
      timeComplexity: "O(1) per op",
      spaceComplexity: "O(n)",
      category: "Data Structures",
      difficulty: "medium",
      hasPlayground: false,
      duration: "10 min",
      tags: ["queue", "FIFO", "deque"],
    },
    {
      id: "anagram-check",
      title: "Anagram Check",
      description: "Are two strings rearrangements of each other? See character counting solve it in O(n).",
      timeComplexity: "O(n)",
      spaceComplexity: "O(1) — fixed 26 chars",
      category: "Strings",
      difficulty: "medium",
      hasPlayground: false,
      duration: "8 min",
      tags: ["strings", "anagram", "counting"],
    },
    {
      id: "sliding-window",
      title: "Sliding Window Max",
      description: "Find the maximum in every window of size k. Watch the window glide across the array.",
      timeComplexity: "O(n)",
      spaceComplexity: "O(k)",
      category: "Array",
      difficulty: "medium",
      hasPlayground: false,
      duration: "12 min",
      tags: ["sliding window", "deque", "optimization"],
    },
    {
      id: "merge-sorted",
      title: "Merge Sorted Arrays",
      description: "Combine two sorted arrays into one. The core operation behind merge sort.",
      timeComplexity: "O(n + m)",
      spaceComplexity: "O(n + m)",
      category: "Sorting",
      difficulty: "medium",
      hasPlayground: false,
      duration: "10 min",
      tags: ["merge", "sorted", "two pointers"],
    },
  ],

  advanced: [
    {
      id: "bubble-sort",
      title: "Bubble Sort",
      description: "Compare adjacent pairs. Larger elements bubble to the top each pass.",
      timeComplexity: "O(n²)",
      spaceComplexity: "O(1)",
      category: "Sorting",
      difficulty: "medium",
      hasPlayground: true,
      duration: "15 min",
      tags: ["sorting", "comparison", "in-place"],
    },
    {
      id: "merge-sort",
      title: "Merge Sort",
      description: "Divide, sort halves, merge. See the recursion tree split and recombine.",
      timeComplexity: "O(n log n)",
      spaceComplexity: "O(n)",
      category: "Sorting",
      difficulty: "hard",
      hasPlayground: false,
      duration: "18 min",
      tags: ["sorting", "divide & conquer", "recursive"],
    },
    {
      id: "quick-sort",
      title: "Quick Sort",
      description: "Choose a pivot, partition around it, recurse. Average O(n log n) with great cache performance.",
      timeComplexity: "O(n log n) avg, O(n²) worst",
      spaceComplexity: "O(log n)",
      category: "Sorting",
      difficulty: "hard",
      hasPlayground: true,
      duration: "18 min",
      tags: ["sorting", "pivot", "in-place"],
    },
    {
      id: "heap-sort",
      title: "Heap Sort",
      description: "Build a max-heap, extract elements in order. Guaranteed O(n log n) unlike quicksort.",
      timeComplexity: "O(n log n)",
      spaceComplexity: "O(1)",
      category: "Sorting",
      difficulty: "hard",
      hasPlayground: true,
      duration: "20 min",
      tags: ["sorting", "heap", "priority queue"],
    },
    {
      id: "bfs",
      title: "Breadth-First Search",
      description: "Explore a graph level by level using a queue. Find shortest paths in unweighted graphs.",
      timeComplexity: "O(V + E)",
      spaceComplexity: "O(V)",
      category: "Graph",
      difficulty: "hard",
      hasPlayground: true,
      duration: "18 min",
      tags: ["graph", "BFS", "queue", "shortest path"],
    },
    {
      id: "dfs",
      title: "Depth-First Search",
      description: "Explore as deep as possible before backtracking. See the call stack grow with each recursive step.",
      timeComplexity: "O(V + E)",
      spaceComplexity: "O(V)",
      category: "Graph",
      difficulty: "hard",
      hasPlayground: true,
      duration: "18 min",
      tags: ["graph", "DFS", "recursion", "backtracking"],
    },
    {
      id: "binary-tree-traversal",
      title: "Binary Tree Traversal",
      description: "In-order, pre-order, post-order. Watch nodes visit in different sequences on the same tree.",
      timeComplexity: "O(n)",
      spaceComplexity: "O(h)",
      category: "Trees",
      difficulty: "hard",
      hasPlayground: true,
      duration: "15 min",
      tags: ["trees", "traversal", "recursion"],
    },
    {
      id: "two-sum",
      title: "Two Sum",
      description: "Find two numbers that add to a target. See how a hash map turns O(n²) into O(n).",
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
      category: "Hash Maps",
      difficulty: "medium",
      hasPlayground: true,
      duration: "12 min",
      tags: ["array", "hash map", "complement"],
    },
    {
      id: "valid-parentheses",
      title: "Valid Parentheses",
      description: "Use a stack to match open and close brackets. Classic stack application interview question.",
      timeComplexity: "O(n)",
      spaceComplexity: "O(n)",
      category: "Stacks",
      difficulty: "medium",
      hasPlayground: true,
      duration: "12 min",
      tags: ["stack", "brackets", "matching"],
    },
    {
      id: "fibonacci-recursive",
      title: "Fibonacci (Recursive)",
      description: "See the call tree fan out exponentially. Understand why memoization is essential.",
      timeComplexity: "O(2ⁿ) naive, O(n) memoized",
      spaceComplexity: "O(n)",
      category: "Recursion",
      difficulty: "medium",
      hasPlayground: true,
      duration: "15 min",
      tags: ["recursion", "fibonacci", "memoization"],
    },
  ],

  mastery: [
    {
      id: "dijkstra",
      title: "Dijkstra's Shortest Path",
      description: "Find shortest paths from a source to all nodes using a priority queue. The backbone of GPS navigation.",
      timeComplexity: "O((V + E) log V)",
      spaceComplexity: "O(V)",
      category: "Graph",
      difficulty: "hard",
      hasPlayground: false,
      duration: "25 min",
      tags: ["graph", "shortest path", "greedy", "priority queue"],
    },
    {
      id: "knapsack",
      title: "0/1 Knapsack (DP)",
      description: "Maximise value within a weight limit. See the DP table fill row by row.",
      timeComplexity: "O(n × W)",
      spaceComplexity: "O(n × W)",
      category: "Dynamic Programming",
      difficulty: "hard",
      hasPlayground: false,
      duration: "25 min",
      tags: ["DP", "knapsack", "optimization"],
    },
    {
      id: "lcs",
      title: "Longest Common Subsequence",
      description: "Find the longest subsequence shared by two strings. Core of diff tools and DNA alignment.",
      timeComplexity: "O(m × n)",
      spaceComplexity: "O(m × n)",
      category: "Dynamic Programming",
      difficulty: "hard",
      hasPlayground: false,
      duration: "20 min",
      tags: ["DP", "LCS", "subsequence"],
    },
    {
      id: "topological-sort",
      title: "Topological Sort",
      description: "Order tasks respecting dependencies. See Kahn's algorithm remove nodes with zero in-degree.",
      timeComplexity: "O(V + E)",
      spaceComplexity: "O(V)",
      category: "Graph",
      difficulty: "hard",
      hasPlayground: false,
      duration: "20 min",
      tags: ["graph", "topological", "DAG"],
    },
    {
      id: "kruskals",
      title: "Kruskal's MST",
      description: "Build a minimum spanning tree by greedily adding lowest-weight edges without forming cycles.",
      timeComplexity: "O(E log E)",
      spaceComplexity: "O(V)",
      category: "Graph",
      difficulty: "hard",
      hasPlayground: false,
      duration: "25 min",
      tags: ["graph", "MST", "union-find", "greedy"],
    },
    {
      id: "trie",
      title: "Trie (Prefix Tree)",
      description: "Insert and search strings letter by letter. See how autocomplete works under the hood.",
      timeComplexity: "O(m) per op",
      spaceComplexity: "O(m × n)",
      category: "Trees",
      difficulty: "hard",
      hasPlayground: false,
      duration: "20 min",
      tags: ["trie", "prefix", "autocomplete"],
    },
    {
      id: "floyd-warshall",
      title: "Floyd-Warshall",
      description: "All-pairs shortest paths with a 3-loop DP. See the distance matrix update in O(V³).",
      timeComplexity: "O(V³)",
      spaceComplexity: "O(V²)",
      category: "Graph",
      difficulty: "hard",
      hasPlayground: false,
      duration: "22 min",
      tags: ["graph", "all-pairs", "DP"],
    },
    {
      id: "segment-tree",
      title: "Segment Tree",
      description: "Range queries and point updates in O(log n). See the tree build and propagate sums upward.",
      timeComplexity: "O(log n) query/update",
      spaceComplexity: "O(n)",
      category: "Trees",
      difficulty: "hard",
      hasPlayground: false,
      duration: "25 min",
      tags: ["segment tree", "range query", "update"],
    },
    {
      id: "coin-change",
      title: "Coin Change (DP)",
      description: "Minimum coins to make an amount. See the DP array fill from 0 up to the target.",
      timeComplexity: "O(amount × n)",
      spaceComplexity: "O(amount)",
      category: "Dynamic Programming",
      difficulty: "hard",
      hasPlayground: false,
      duration: "18 min",
      tags: ["DP", "coins", "greedy vs DP"],
    },
    {
      id: "bit-manipulation",
      title: "Bit Manipulation Tricks",
      description: "AND, OR, XOR, shifts — the operations behind cryptography, graphics, and competitive programming.",
      timeComplexity: "O(1)",
      spaceComplexity: "O(1)",
      category: "Bit Ops",
      difficulty: "hard",
      hasPlayground: false,
      duration: "18 min",
      tags: ["bits", "XOR", "masks", "shifts"],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// Feature outcomes
// ─────────────────────────────────────────────────────────────────────────────

export const featuredOutcomes = [
  {
    title: "Trace code visually",
    description: "See variables, loops, and stack transitions instead of reading raw output alone.",
    accentClass: "text-wave",
    bgClass: "bg-blue-50",
  },
  {
    title: "Practice by level",
    description: "Move through clear tracks with pacing from first syntax to advanced algorithms.",
    accentClass: "text-leaf",
    bgClass: "bg-green-50",
  },
  {
    title: "Experiment safely",
    description: "Edit live, replay execution, and understand mistakes before they harden into habits.",
    accentClass: "text-signal",
    bgClass: "bg-orange-50",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Hero stats
// ─────────────────────────────────────────────────────────────────────────────

export const heroStats: HeroStat[] = [
  { label: "Guided tracks", value: "5" },
  { label: "Algorithm lessons", value: "50+" },
  { label: "Browser-first", value: "0 install" },
];

// ─────────────────────────────────────────────────────────────────────────────
// Algorithm lesson cards (landing)
// ─────────────────────────────────────────────────────────────────────────────

export const lessonCards: LessonCard[] = [
  {
    title: "Bubble Sort Visualized",
    description: "Watch every comparison and swap happen frame by frame. See why adjacent elements bubble to the top.",
    duration: "15 min",
    concept: "Sorting Algorithm",
    accentColor: "text-wave",
    accentBg: "bg-blue-50",
    lessonId: "bubble-sort",
  },
  {
    title: "Binary Search in Action",
    description: "See the search space cut in half with each step. Understand O(log n) by watching it happen live.",
    duration: "12 min",
    concept: "Search Algorithm",
    accentColor: "text-leaf",
    accentBg: "bg-green-50",
    lessonId: "binary-search",
  },
  {
    title: "Loop Explorer",
    description: "Understand how loop iterations update shared state. See score accumulate frame by frame.",
    duration: "12 min",
    concept: "Loops & State",
    accentColor: "text-signal",
    accentBg: "bg-orange-50",
    lessonId: "loop-explorer",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Playground lessons — full with complexity, approach, why on each frame
// ─────────────────────────────────────────────────────────────────────────────

export const playgroundLessons: PlaygroundLesson[] = [
  // ── Loop Explorer ──────────────────────────────────────────────────────────
  {
    id: "loop-explorer",
    title: "Loop Explorer",
    level: "Beginner",
    levelColor: "text-wave",
    duration: "12 min",
    objective: "Understand how loop iterations update shared state.",
    prompt: "Modify the list to produce a final score of 20. Which iteration changed the total most?",
    hint: "Watch the score cell after each loop pass and compare how much each step adds.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    useCases: [
      "Summing totals in a shopping cart",
      "Accumulating sensor readings",
      "Running totals in financial reports",
    ],
    approach:
      "We use a single accumulator variable (score) and iterate through a list once. This is the accumulator pattern — one of the most fundamental patterns in programming. O(n) time because we visit each element exactly once, O(1) space because we only need one extra variable regardless of list size.",
    output: ["score: 2", "score: 6", "score: 12", "final: 12"],
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
        event: "Create score",
        summary: "Initialize score with 0.",
        why: "We must initialize score to 0 before the loop. Python has no default numeric value — uninitialized variables cause NameError. Choosing 0 is the additive identity: adding 0 changes nothing, so it's the correct neutral starting point.",
        memory: [{ name: "score", value: "0" }],
        output: [],
      },
      {
        line: 2,
        event: "Load steps",
        summary: "Store a list of incoming steps.",
        why: "We store the data in a list so we can iterate over it with a for loop. A list is ordered and allows duplicates — perfect for a sequence of steps. Defining it before the loop means we can change the input data without touching the loop logic.",
        memory: [{ name: "score", value: "0" }, { name: "steps", value: "[2, 4, 6]" }],
        output: [],
      },
      {
        line: 5,
        event: "Iteration 1",
        summary: "First pass: score = 0 + 2 = 2.",
        why: "The for loop automatically assigns each element to 'step' in order. We add step to score instead of reassigning because we want to accumulate — keep a running total. score = score + step is the classic accumulator update.",
        memory: [{ name: "score", value: "2" }, { name: "step", value: "2" }, { name: "steps", value: "[2, 4, 6]" }],
        output: ["score: 2"],
      },
      {
        line: 5,
        event: "Iteration 2",
        summary: "Second pass: score = 2 + 4 = 6.",
        why: "score retains its value between iterations because it was defined outside the loop. Variables inside a loop body reset each iteration; variables outside persist. This scope rule is why we defined score = 0 before the for statement.",
        memory: [{ name: "score", value: "6" }, { name: "step", value: "4" }, { name: "steps", value: "[2, 4, 6]" }],
        output: ["score: 2", "score: 6"],
      },
      {
        line: 5,
        event: "Iteration 3",
        summary: "Third pass: score = 6 + 6 = 12.",
        why: "The loop runs exactly len(steps) = 3 times. Python's for loop knows when to stop because lists have a known length. No off-by-one errors — unlike a while loop, there's no index to mismanage.",
        memory: [{ name: "score", value: "12" }, { name: "step", value: "6" }, { name: "steps", value: "[2, 4, 6]" }],
        output: ["score: 2", "score: 6", "score: 12"],
      },
      {
        line: 8,
        event: "Return output",
        summary: "Print the final accumulated value.",
        why: "We print outside the loop because we only want the final result once, not after every step. This separation — compute inside loop, report outside — is a clean pattern that keeps accumulation and reporting independent.",
        memory: [{ name: "score", value: "12" }, { name: "steps", value: "[2, 4, 6]" }],
        output: ["score: 2", "score: 6", "score: 12", "final: 12"],
      },
    ],
  },

  // ── Bubble Sort ────────────────────────────────────────────────────────────
  {
    id: "bubble-sort",
    title: "Bubble Sort",
    level: "Advanced",
    levelColor: "text-gold",
    duration: "15 min",
    objective: "See how adjacent comparisons and swaps move larger elements toward the end each pass.",
    prompt: "Change the array to [9, 1, 5, 3, 7]. Predict how many swaps it takes before sorted.",
    hint: "Count the orange swap events in the timeline. Each swap moves the larger element one position right.",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    useCases: [
      "Teaching sorting concepts — most visual algorithm",
      "Detecting nearly-sorted arrays (early exit optimization)",
      "Embedded systems with tiny memory where O(1) space matters",
    ],
    approach:
      "Bubble sort compares every adjacent pair and swaps if out of order. After each full outer pass, the largest unsorted element is guaranteed to be in its correct final position. We use nested loops: outer controls passes (n-1 needed), inner controls comparisons (shrinks each pass because the end is already sorted). This is NOT efficient for large data — O(n²) — but it's the most visual algorithm for learning comparison-based sorting.",
    output: ["swap: [3, 5, 8, 1, 2]", "swap: [3, 5, 1, 8, 2]", "swap: [3, 5, 1, 2, 8]", "swap: [3, 1, 5, 2, 8]", "swap: [3, 1, 2, 5, 8]", "swap: [1, 3, 2, 5, 8]", "swap: [1, 2, 3, 5, 8]", "sorted: [1, 2, 3, 5, 8]"],
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
        event: "Load array",
        summary: "arr = [5, 3, 8, 1, 2] — 5 unsorted elements.",
        why: "We store values in a list so we can access elements by index (arr[j], arr[j+1]). Bubble sort is an in-place algorithm — we modify this same list rather than creating a new one, which keeps space complexity O(1).",
        memory: [{ name: "arr", value: "[5, 3, 8, 1, 2]" }],
        output: [],
      },
      {
        line: 2,
        event: "Get length",
        summary: "n = 5 — we need up to 4 outer passes.",
        why: "We store n = len(arr) once instead of calling len() every iteration. This is a micro-optimization, but more importantly it makes the loop bounds readable. We need n-1 outer passes because after n-1 passes, the smallest element is guaranteed to be in position 0.",
        memory: [{ name: "arr", value: "[5, 3, 8, 1, 2]" }, { name: "n", value: "5" }],
        output: [],
      },
      {
        line: 6,
        event: "Compare [0]↔[1]",
        summary: "arr[0]=5 > arr[1]=3 — swap needed.",
        why: "We compare arr[j] > arr[j+1] (strict greater-than) to maintain stability — equal elements don't swap, preserving their original relative order. This comparison is the core of every comparison-based sort.",
        memory: [{ name: "arr", value: "[5, 3, 8, 1, 2]" }, { name: "i", value: "0" }, { name: "j", value: "0" }],
        output: [],
      },
      {
        line: 7,
        event: "Swap 5 ↔ 3",
        summary: "Python tuple swap — no temp variable needed.",
        why: "arr[j], arr[j+1] = arr[j+1], arr[j] is Python's elegant simultaneous assignment. In C you'd need a temp variable. Python evaluates the right side first as a tuple, then unpacks — so both values are captured before either is overwritten.",
        memory: [{ name: "arr", value: "[3, 5, 8, 1, 2]" }, { name: "i", value: "0" }, { name: "j", value: "0" }],
        output: ["swap: [3, 5, 8, 1, 2]"],
      },
      {
        line: 7,
        event: "Swap 8 ↔ 1",
        summary: "8 is bubbling right — it's the largest so far.",
        why: "Notice 8 has moved two positions right in two steps. The largest element always bubbles to the end of each pass — that's where the name 'bubble sort' comes from. After this outer pass (i=0), 8 will be in its final position.",
        memory: [{ name: "arr", value: "[3, 5, 1, 8, 2]" }, { name: "i", value: "0" }, { name: "j", value: "2" }],
        output: ["swap: [3, 5, 8, 1, 2]", "swap: [3, 5, 1, 8, 2]"],
      },
      {
        line: 7,
        event: "Pass 1 done",
        summary: "8 is now in its final position at index 4.",
        why: "The inner loop runs n - i - 1 times. The '- i' is the optimization: after pass i, the last i elements are already sorted and in their final positions. No need to compare them again — this halves the total work compared to always going to the end.",
        memory: [{ name: "arr", value: "[3, 5, 1, 2, 8]" }, { name: "i", value: "0" }, { name: "j", value: "3" }],
        output: ["swap: [3, 5, 8, 1, 2]", "swap: [3, 5, 1, 8, 2]", "swap: [3, 5, 1, 2, 8]"],
      },
      {
        line: 7,
        event: "Pass 2 swaps",
        summary: "5 bubbles right. [3, 5, 1, 2, 8] → [3, 1, 2, 5, 8]",
        why: "Each outer pass settles one more element. After pass 2, both 5 and 8 are final. The algorithm guarantees progress even in the worst case — n-1 passes always produces a sorted array.",
        memory: [{ name: "arr", value: "[3, 1, 2, 5, 8]" }, { name: "i", value: "1" }, { name: "j", value: "2" }],
        output: ["swap: [3, 5, 8, 1, 2]", "swap: [3, 5, 1, 8, 2]", "swap: [3, 5, 1, 2, 8]", "swap: [3, 1, 5, 2, 8]", "swap: [3, 1, 2, 5, 8]"],
      },
      {
        line: 10,
        event: "Sorted!",
        summary: "Final sorted array: [1, 2, 3, 5, 8].",
        why: "Total comparisons: n×(n-1)/2 = 10 for n=5. This is why bubble sort is O(n²) — the number of comparisons grows quadratically. For n=1000, that's ~500,000 comparisons. Merge sort does it in ~10,000. Use bubble sort only for learning, not production.",
        memory: [{ name: "arr", value: "[1, 2, 3, 5, 8]" }, { name: "n", value: "5" }],
        output: ["swap: [3, 5, 8, 1, 2]", "swap: [3, 5, 1, 8, 2]", "swap: [3, 5, 1, 2, 8]", "swap: [3, 1, 5, 2, 8]", "swap: [3, 1, 2, 5, 8]", "swap: [1, 3, 2, 5, 8]", "swap: [1, 2, 3, 5, 8]", "sorted: [1, 2, 3, 5, 8]"],
      },
    ],
  },

  // ── Binary Search ──────────────────────────────────────────────────────────
  {
    id: "binary-search",
    title: "Binary Search",
    level: "Intermediate",
    levelColor: "text-leaf",
    duration: "12 min",
    objective: "See how halving the search space each step achieves O(log n) time complexity.",
    prompt: "Change target to 11. Predict how many steps it takes to find it.",
    hint: "The search space halves every iteration: 7 → 4 → 2 → 1 elements. Count mid calculations.",
    timeComplexity: "O(log n)",
    spaceComplexity: "O(1)",
    useCases: [
      "Dictionary lookups (words are sorted)",
      "Database index traversal",
      "Finding a version that introduced a bug (git bisect)",
      "Searching a sorted leaderboard",
    ],
    approach:
      "Binary search requires a sorted array. We maintain two pointers (low, high) that define the current search space. Each iteration we check the middle element: if it matches, done; if target is larger, discard the left half; if smaller, discard the right half. This halving means we need at most ⌈log₂(n)⌉ steps. For n=1,000,000 that's only 20 comparisons — vs 500,000 average for linear search.",
    output: ["mid=3, arr[3]=7", "target found! result: 3"],
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
        event: "Load array",
        summary: "Sorted array of 7 elements.",
        why: "Binary search REQUIRES a sorted array. Without sorting, the invariant breaks — we can't safely discard half the search space if we don't know which half the target is in. If the input might be unsorted, sort first (O(n log n)) then search (O(log n)).",
        memory: [{ name: "arr", value: "[1, 3, 5, 7, 9, 11, 13]" }],
        output: [],
      },
      {
        line: 2,
        event: "Set target",
        summary: "We're searching for 7.",
        why: "We separate the target from the array so the same function works for any search value. This is the single responsibility principle — the algorithm doesn't need to know about the specific value, only how to compare.",
        memory: [{ name: "arr", value: "[1, 3, 5, 7, 9, 11, 13]" }, { name: "target", value: "7" }],
        output: [],
      },
      {
        line: 3,
        event: "Set bounds",
        summary: "low=0, high=6. Full array is the search space.",
        why: "Two pointers define the active search space. low starts at 0, high at len-1 (not len) because arrays are 0-indexed. The condition low <= high (not <) ensures we check single-element windows — critical for not missing the target.",
        memory: [{ name: "target", value: "7" }, { name: "low", value: "0" }, { name: "high", value: "6" }],
        output: [],
      },
      {
        line: 6,
        event: "Compute mid",
        summary: "mid = (0 + 6) // 2 = 3.",
        why: "We use integer division (//) to get the center index. Note: in languages with fixed-size integers (C, Java), (low + high) can overflow for large arrays — safer formula is low + (high - low) // 2. Python has arbitrary-precision integers so overflow isn't an issue here.",
        memory: [{ name: "target", value: "7" }, { name: "low", value: "0" }, { name: "high", value: "6" }, { name: "mid", value: "3" }],
        output: [],
      },
      {
        line: 7,
        event: "Inspect arr[3]",
        summary: "arr[3] = 7. Printing the search state.",
        why: "This print is for learning only — production binary search wouldn't print each step. But seeing mid and arr[mid] every iteration makes the halving pattern visible. In a debugger or visualizer this is exactly the state you'd inspect.",
        memory: [{ name: "target", value: "7" }, { name: "low", value: "0" }, { name: "high", value: "6" }, { name: "mid", value: "3" }],
        output: ["mid=3, arr[3]=7"],
      },
      {
        line: 8,
        event: "Match found!",
        summary: "arr[mid] == target. Found in 1 step!",
        why: "We found the target on the first try because 7 is exactly the median of this array. In the best case, binary search is O(1). Average case is O(log n). We use break to exit the while loop immediately — no point continuing once found. If not using break, you could return mid inside a function.",
        memory: [{ name: "target", value: "7" }, { name: "low", value: "0" }, { name: "high", value: "6" }, { name: "mid", value: "3" }],
        output: ["mid=3, arr[3]=7", "target found! result: 3"],
      },
    ],
  },

  // ── Linear Search ─────────────────────────────────────────────────────────
  {
    id: "linear-search",
    title: "Linear Search",
    level: "Beginner",
    levelColor: "text-wave",
    duration: "8 min",
    objective: "See how checking every element one by one finds a target — and why O(n) matters.",
    prompt: "Change the target to a value NOT in the list. What does the algorithm return?",
    hint: "Watch the index climb from 0 to the end. When it reaches len(arr) without a match, we return -1.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    useCases: [
      "Searching an unsorted list (e.g., names in a contact list)",
      "Finding first occurrence of a value in a stream",
      "Baseline for benchmarking faster algorithms",
    ],
    approach: "Linear search is the simplest possible search: start at index 0, check each element, return when found. No sorting needed. Its strength is simplicity and universality — it works on any collection. Its weakness is O(n) time: for a list of 1 million items, you might check 1 million elements. Use it when the list is small, unsorted, or searched only once.",
    output: ["checking index 0: 3", "checking index 1: 9", "checking index 2: 7", "found 7 at index 2"],
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
        event: "Load array",
        summary: "arr = [3, 9, 7, 1, 5] — unsorted, 5 elements.",
        why: "The array is intentionally unsorted. Linear search doesn't require any ordering — that's its main advantage over binary search. You can call it immediately on any data without preprocessing.",
        memory: [{ name: "arr", value: "[3, 9, 7, 1, 5]" }],
        output: [],
      },
      {
        line: 2,
        event: "Set target",
        summary: "We are searching for 7.",
        why: "We separate target from the array for reusability. This pattern — data separate from the value we seek — lets us use the same code to search for any value.",
        memory: [{ name: "arr", value: "[3, 9, 7, 1, 5]" }, { name: "target", value: "7" }],
        output: [],
      },
      {
        line: 3,
        event: "Init result",
        summary: "result = -1 as 'not found' sentinel.",
        why: "We use -1 as the sentinel value for 'not found' because -1 is never a valid list index in Python (well, it's the last element, but by convention -1 means not found in search problems). This lets us check result != -1 at the end.",
        memory: [{ name: "arr", value: "[3, 9, 7, 1, 5]" }, { name: "target", value: "7" }, { name: "result", value: "-1" }],
        output: [],
      },
      {
        line: 6,
        event: "Check index 0",
        summary: "arr[0] = 3 ≠ 7. Continue.",
        why: "We start at index 0 because Python lists are 0-indexed. range(len(arr)) generates [0, 1, 2, 3, 4]. We use range(len(arr)) instead of 'for item in arr' because we need the index i to record WHERE we found the target.",
        memory: [{ name: "arr", value: "[3, 9, 7, 1, 5]" }, { name: "target", value: "7" }, { name: "i", value: "0" }],
        output: ["checking index 0: 3"],
      },
      {
        line: 6,
        event: "Check index 1",
        summary: "arr[1] = 9 ≠ 7. Continue.",
        why: "No match. We move to the next element. This is the O(n) nature: in the worst case (target at the end or absent), we check every single element.",
        memory: [{ name: "arr", value: "[3, 9, 7, 1, 5]" }, { name: "target", value: "7" }, { name: "i", value: "1" }],
        output: ["checking index 0: 3", "checking index 1: 9"],
      },
      {
        line: 7,
        event: "Found at index 2",
        summary: "arr[2] = 7 == target. Match!",
        why: "We found the target at index 2. We set result = i to record the position, then break immediately — no need to check the rest of the list. This 'early exit' optimization makes the average case much better than worst case.",
        memory: [{ name: "arr", value: "[3, 9, 7, 1, 5]" }, { name: "target", value: "7" }, { name: "i", value: "2" }, { name: "result", value: "2" }],
        output: ["checking index 0: 3", "checking index 1: 9", "checking index 2: 7", "found 7 at index 2"],
      },
    ],
  },

  // ── Selection Sort ────────────────────────────────────────────────────────
  {
    id: "selection-sort",
    title: "Selection Sort",
    level: "Intermediate",
    levelColor: "text-leaf",
    duration: "12 min",
    objective: "See how finding the minimum each pass guarantees a sorted prefix grows by one each time.",
    prompt: "Try arr = [64, 25, 12, 22, 11]. Count how many swaps are made total.",
    hint: "Selection sort makes exactly n-1 swaps — one per pass. Count the 'Swap minimum' events in the timeline.",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
    useCases: [
      "Writing to flash memory (minimizes writes — only n-1 swaps)",
      "Teaching sorting algorithms — very visual and intuitive",
      "Small datasets where code simplicity matters more than speed",
    ],
    approach: "Selection sort divides the array into a sorted prefix and unsorted suffix. Each pass scans the entire unsorted portion to find the minimum, then swaps it into the next sorted position. This guarantees exactly n-1 swaps — compared to bubble sort which can make O(n²) swaps. This makes it better when write operations are expensive (flash storage). Time complexity is still O(n²) for comparisons.",
    output: ["pass 1: [11, 64, 25, 12, 22]", "pass 2: [11, 12, 64, 25, 22]", "pass 3: [11, 12, 22, 64, 25]", "pass 4: [11, 12, 22, 25, 64]", "sorted: [11, 12, 22, 25, 64]"],
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
        event: "Load array",
        summary: "arr = [64, 25, 12, 22, 11] — unsorted, 5 elements.",
        why: "The classic selection sort example starts with a larger first element. This makes it easy to see the minimum 'travel' across the array on the first pass.",
        memory: [{ name: "arr", value: "[64, 25, 12, 22, 11]" }, { name: "n", value: "5" }],
        output: [],
      },
      {
        line: 5,
        event: "Start pass 1",
        summary: "Assume position 0 (64) is the minimum — we'll check if anything smaller exists.",
        why: "We set min_idx = i (not 0) because the sorted portion grows from the left. On pass 1, i=0 and we search the entire array. On pass 2, i=1 and we skip the already-sorted index 0.",
        memory: [{ name: "arr", value: "[64, 25, 12, 22, 11]" }, { name: "i", value: "0" }, { name: "min_idx", value: "0" }],
        output: [],
      },
      {
        line: 7,
        event: "Found new min: 11",
        summary: "Scanning finds 11 at index 4 as the true minimum.",
        why: "The inner loop scans from i+1 to n-1. Each time it finds a value smaller than the current minimum, it updates min_idx. We track the INDEX (not the value) so we know where to swap. Using index instead of value handles duplicate elements correctly.",
        memory: [{ name: "arr", value: "[64, 25, 12, 22, 11]" }, { name: "i", value: "0" }, { name: "min_idx", value: "4" }],
        output: [],
      },
      {
        line: 9,
        event: "Swap min to front",
        summary: "Swap arr[0]=64 with arr[4]=11. Pass 1 complete.",
        why: "After the inner loop, min_idx points to the smallest element in the unsorted portion. One swap places it at position i. This is selection sort's key advantage: exactly ONE swap per pass, regardless of how disordered the data is.",
        memory: [{ name: "arr", value: "[11, 25, 12, 22, 64]" }, { name: "i", value: "0" }, { name: "min_idx", value: "4" }],
        output: ["pass 1: [11, 25, 12, 22, 64]"],
      },
      {
        line: 9,
        event: "Pass 2: swap 12",
        summary: "Min of [25,12,22,64] is 12 at index 2. Swap to position 1.",
        why: "Pass 2 starts at i=1, assuming index 0 is already sorted. The sorted prefix [11] is untouched forever. This is the invariant: after pass k, the first k elements are sorted and final.",
        memory: [{ name: "arr", value: "[11, 12, 25, 22, 64]" }, { name: "i", value: "1" }, { name: "min_idx", value: "2" }],
        output: ["pass 1: [11, 25, 12, 22, 64]", "pass 2: [11, 12, 25, 22, 64]"],
      },
      {
        line: 12,
        event: "Sorted!",
        summary: "4 passes, exactly 4 swaps. Array fully sorted.",
        why: "Selection sort always makes exactly n-1 passes and at most n-1 swaps. The outer loop runs range(n-1) — not range(n) — because after placing n-1 elements, the last one is automatically in the correct position. Total comparisons: n(n-1)/2 = 10 for n=5. Same as bubble sort's comparisons but far fewer swaps.",
        memory: [{ name: "arr", value: "[11, 12, 22, 25, 64]" }, { name: "n", value: "5" }],
        output: ["pass 1: [11, 25, 12, 22, 64]", "pass 2: [11, 12, 25, 22, 64]", "pass 3: [11, 12, 22, 25, 64]", "pass 4: [11, 12, 22, 25, 64]", "sorted: [11, 12, 22, 25, 64]"],
      },
    ],
  },

  // ── Factorial ─────────────────────────────────────────────────────────────
  {
    id: "factorial",
    title: "Factorial (Iterative)",
    level: "Beginner",
    levelColor: "text-wave",
    duration: "6 min",
    objective: "Understand the accumulator multiplication pattern and why 0! equals 1.",
    prompt: "Compute 10!. What happens if you pass 0? Why does 0! = 1 make mathematical sense?",
    hint: "The identity for multiplication is 1 — multiplying by 1 changes nothing. That's why result starts at 1, not 0.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    useCases: [
      "Counting permutations (how many ways to arrange n items)",
      "Combinatorics in probability calculations",
      "Denominator in nCr and nPr formulas",
    ],
    approach: "We use the multiplicative accumulator pattern: result starts at 1 (the identity for multiplication), then we multiply each integer from 1 to n in sequence. Iterative is preferred over recursive for this because it uses O(1) space — no call stack growth — and avoids Python's recursion limit.",
    output: ["step 1: 1 × 1 = 1", "step 2: 1 × 2 = 2", "step 3: 2 × 3 = 6", "step 4: 6 × 4 = 24", "5! = 120"],
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
        event: "Set n",
        summary: "Computing 5! = 5 × 4 × 3 × 2 × 1 = 120.",
        why: "We choose 5 as a demonstration because it's small enough to trace fully but large enough to show how the result grows. The mathematical definition: n! = n × (n-1) × ... × 2 × 1.",
        memory: [{ name: "n", value: "5" }],
        output: [],
      },
      {
        line: 2,
        event: "Init result",
        summary: "result = 1, the multiplicative identity.",
        why: "We start with 1, NOT 0. If we started with 0, every product would be 0 (anything × 0 = 0). The multiplicative identity is 1: anything × 1 = itself. This mirrors how addition accumulators start at 0 (the additive identity).",
        memory: [{ name: "n", value: "5" }, { name: "result", value: "1" }],
        output: [],
      },
      {
        line: 5,
        event: "Multiply by 1",
        summary: "result = 1 × 1 = 1. Step 1 done.",
        why: "range(1, n+1) generates [1, 2, 3, 4, 5] — we include n (hence n+1 as the stop) and start at 1, not 0. Multiplying by 0 would zero out the result. Starting at 1 is redundant but makes the loop symmetric.",
        memory: [{ name: "n", value: "5" }, { name: "result", value: "1" }, { name: "i", value: "1" }],
        output: ["step 1: 1 × 1 = 1"],
      },
      {
        line: 5,
        event: "Multiply by 2",
        summary: "result = 1 × 2 = 2.",
        why: "The accumulator pattern: result = result * i. We update result in-place each iteration. The current result becomes the left operand for the next multiplication — exactly like the mathematical definition n! = n × (n-1)!.",
        memory: [{ name: "n", value: "5" }, { name: "result", value: "2" }, { name: "i", value: "2" }],
        output: ["step 1: 1 × 1 = 1", "step 2: 1 × 2 = 2"],
      },
      {
        line: 5,
        event: "Multiply by 3→5",
        summary: "2×3=6, 6×4=24, 24×5=120.",
        why: "The result grows fast — this is the nature of factorial. n=5 gives 120; n=20 gives 2,432,902,008,176,640,000. Python handles arbitrarily large integers natively, so factorial never overflows in Python unlike in C/Java.",
        memory: [{ name: "n", value: "5" }, { name: "result", value: "120" }, { name: "i", value: "5" }],
        output: ["step 1: 1 × 1 = 1", "step 2: 1 × 2 = 2", "step 3: 2 × 3 = 6", "step 4: 6 × 4 = 24", "step 5: 24 × 5 = 120"],
      },
      {
        line: 8,
        event: "Print result",
        summary: "5! = 120.",
        why: "We print outside the loop because we only want the final answer once. This clean separation — compute inside, report outside — is the accumulator pattern's best practice.",
        memory: [{ name: "n", value: "5" }, { name: "result", value: "120" }],
        output: ["step 1: 1 × 1 = 1", "step 2: 1 × 2 = 2", "step 3: 2 × 3 = 6", "step 4: 6 × 4 = 24", "step 5: 24 × 5 = 120", "5! = 120"],
      },
    ],
  },

  // ── Fibonacci Iterative ───────────────────────────────────────────────────
  {
    id: "fibonacci-iterative",
    title: "Fibonacci (Iterative)",
    level: "Beginner",
    levelColor: "text-wave",
    duration: "8 min",
    objective: "See the rolling-variable pattern and why O(1) space beats recursion for Fibonacci.",
    prompt: "Change n to 10 and trace the sequence. Why do we only need two variables — not the whole sequence?",
    hint: "Each new Fibonacci number only depends on the previous two. We never look back further — so we only keep two.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    useCases: [
      "Nature's growth patterns (spirals, branching)",
      "Financial models and golden ratio approximations",
      "Memoization tutorial baseline (compare recursive version)",
    ],
    approach: "We use two rolling variables (a, b) that always hold the last two Fibonacci numbers. Each step: new value = a + b, then shift — b becomes the old a, a becomes the new value. This is O(1) space because we only ever need two variables, regardless of n. The recursive approach uses O(n) stack space and O(2ⁿ) time without memoization.",
    output: ["F(1) = 0", "F(2) = 1", "F(3) = 1", "F(4) = 2", "F(5) = 3", "F(6) = 5", "F(7) = 8"],
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
        event: "Set n",
        summary: "Compute first 7 Fibonacci numbers.",
        why: "The Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21... Each number is the sum of the previous two. We choose n=7 to show enough of the sequence to see the pattern clearly.",
        memory: [{ name: "n", value: "7" }],
        output: [],
      },
      {
        line: 2,
        event: "Init a, b",
        summary: "a=0 (F₁), b=1 (F₂) — the two seeds.",
        why: "The Fibonacci sequence is defined by two starting values: F(1)=0, F(2)=1. Every subsequent number is derived from these. Python's tuple assignment a, b = 0, 1 initialises both in one line — clean and explicit.",
        memory: [{ name: "a", value: "0" }, { name: "b", value: "1" }, { name: "n", value: "7" }],
        output: [],
      },
      {
        line: 5,
        event: "Print F(1)=0",
        summary: "Current a=0 is F(1).",
        why: "We print a BEFORE updating it because a holds the current Fibonacci number for this iteration. If we updated first, we'd print the wrong value.",
        memory: [{ name: "a", value: "0" }, { name: "b", value: "1" }, { name: "i", value: "1" }],
        output: ["F(1) = 0"],
      },
      {
        line: 6,
        event: "Roll: a=1, b=1",
        summary: "a, b = b, a+b → a=1, b=0+1=1.",
        why: "The simultaneous assignment a, b = b, a+b is the heart of this algorithm. Python evaluates the right side as a tuple (b, a+b) BEFORE any assignment happens — so both old values are captured simultaneously. This avoids needing a temp variable.",
        memory: [{ name: "a", value: "1" }, { name: "b", value: "1" }, { name: "i", value: "1" }],
        output: ["F(1) = 0", "F(2) = 1"],
      },
      {
        line: 6,
        event: "Roll: a=1, b=2",
        summary: "a=1 (F₃), b=1+1=2 (next).",
        why: "After two steps, a holds F(3)=1, b holds F(4)=2. The rolling window always contains [current, next]. We never store the whole sequence — just two numbers. This is why space complexity is O(1).",
        memory: [{ name: "a", value: "1" }, { name: "b", value: "2" }, { name: "i", value: "3" }],
        output: ["F(1) = 0", "F(2) = 1", "F(3) = 1", "F(4) = 2"],
      },
      {
        line: 8,
        event: "Final: F(7)=8",
        summary: "After 7 iterations, a = 8.",
        why: "a holds the 7th Fibonacci number. We print after the loop because the loop runs n times, printing F(1) through F(n). The rolling pattern means after the loop, a is always the nth Fibonacci number.",
        memory: [{ name: "a", value: "8" }, { name: "n", value: "7" }],
        output: ["F(1) = 0", "F(2) = 1", "F(3) = 1", "F(4) = 2", "F(5) = 3", "F(6) = 5", "F(7) = 8"],
      },
    ],
  },

  // ── Stack Operations ──────────────────────────────────────────────────────
  {
    id: "stack-ops",
    title: "Stack Operations",
    level: "Intermediate",
    levelColor: "text-leaf",
    duration: "10 min",
    objective: "See LIFO in action — push, pop, and peek on a stack backed by a Python list.",
    prompt: "Add two more pushes after the pops and observe how the stack evolves. What is the top after all operations?",
    hint: "After each operation watch the 'stack' memory card. The rightmost element is always the top.",
    timeComplexity: "O(1) per operation",
    spaceComplexity: "O(n)",
    useCases: [
      "Function call stack (Python's own execution uses a stack)",
      "Undo/redo in editors",
      "Browser back/forward history",
      "Balanced parentheses checking",
    ],
    approach: "A stack is a LIFO (Last In, First Out) data structure. In Python, a list is the natural stack implementation: append() for push (add to top) and pop() for pop (remove from top) are both O(1) amortized. We avoid pop(0) or insert(0) which are O(n). The 'top' is always the last element — index -1.",
    output: ["push 10 → [10]", "push 20 → [10, 20]", "push 30 → [10, 20, 30]", "peek: 30 (top)", "pop: 30 → [10, 20]", "pop: 20 → [10]", "top is now: 10"],
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
        event: "Init stack",
        summary: "Empty list as the backing store.",
        why: "Python's list is a perfect stack because append() adds to the end (top) in O(1) and pop() removes from the end in O(1). No special class needed. The convention: index -1 is always the top.",
        memory: [{ name: "stack", value: "[]" }],
        output: [],
      },
      {
        line: 18,
        event: "push(10)",
        summary: "stack.append(10) → [10].",
        why: "append() adds to the END of the list, which is the top of the stack. This is O(1) amortized — Python over-allocates memory for lists so most appends are instant.",
        memory: [{ name: "stack", value: "[10]" }],
        output: ["push 10 → [10]"],
      },
      {
        line: 19,
        event: "push(20)",
        summary: "stack.append(20) → [10, 20].",
        why: "20 is on top of 10. In a real stack visualization, you'd see 10 at the bottom and 20 above it. The list index mirrors this — lower indices = bottom, higher indices = top.",
        memory: [{ name: "stack", value: "[10, 20]" }],
        output: ["push 10 → [10]", "push 20 → [10, 20]"],
      },
      {
        line: 20,
        event: "push(30)",
        summary: "stack.append(30) → [10, 20, 30].",
        why: "Three elements. Top is 30. The stack represents history: 10 was pushed first, then 20, then 30. LIFO means 30 will be retrieved first on pop.",
        memory: [{ name: "stack", value: "[10, 20, 30]" }],
        output: ["push 10 → [10]", "push 20 → [10, 20]", "push 30 → [10, 20, 30]"],
      },
      {
        line: 21,
        event: "peek()",
        summary: "stack[-1] = 30. Non-destructive read.",
        why: "peek() reads the top without removing it. stack[-1] is Python's way to access the last element. This is the key difference from pop: peek lets you see the top while leaving the stack unchanged.",
        memory: [{ name: "stack", value: "[10, 20, 30]" }],
        output: ["push 10 → [10]", "push 20 → [10, 20]", "push 30 → [10, 20, 30]", "peek: 30 (top)"],
      },
      {
        line: 22,
        event: "pop() → 30",
        summary: "Remove and return 30. Stack is now [10, 20].",
        why: "list.pop() removes the LAST element — O(1). This is LIFO: last pushed (30) is first popped. Note: list.pop(0) would be O(n) because it shifts all elements. Always pop from the end for stack behavior.",
        memory: [{ name: "stack", value: "[10, 20]" }],
        output: ["push 10 → [10]", "push 20 → [10, 20]", "push 30 → [10, 20, 30]", "peek: 30 (top)", "pop: 30 → [10, 20]"],
      },
      {
        line: 24,
        event: "Top is 10",
        summary: "After two pops, only 10 remains.",
        why: "We print stack[-1] directly instead of calling peek() to show that the underlying list is always accessible. In production code you'd use the peek() function for encapsulation, but Python doesn't enforce this — the raw list is always available.",
        memory: [{ name: "stack", value: "[10]" }],
        output: ["push 10 → [10]", "push 20 → [10, 20]", "push 30 → [10, 20, 30]", "peek: 30 (top)", "pop: 30 → [10, 20]", "pop: 20 → [10]", "top is now: 10"],
      },
    ],
  },

  // ── Two Sum ───────────────────────────────────────────────────────────────
  {
    id: "two-sum",
    title: "Two Sum",
    level: "Advanced",
    levelColor: "text-gold",
    duration: "12 min",
    objective: "See how a hash map turns an O(n²) brute-force problem into an O(n) single-pass solution.",
    prompt: "Change target to 11. Which pair adds up to 11? Can there be multiple valid pairs?",
    hint: "For each number, we ask: 'does target - this_number already exist in seen?' The hash map answers that in O(1).",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    useCases: [
      "Most common LeetCode interview question (#1 most submitted)",
      "Financial: find two transactions that sum to a target amount",
      "Two-factor authentication: finding matching token pairs",
    ],
    approach: "Brute force: check every pair → O(n²). Hash map: for each number, compute its complement (target - num), check if the complement was seen before. If yes, done. If no, store current number in the hash map. One pass, O(1) lookup per element → O(n) total. We trade O(n) space for O(n²) → O(n) time improvement.",
    output: ["i=0, num=2, need=7, seen={}", "i=1, num=7, need=2, seen={2:0}", "found! indices [0, 1] → values [2, 7]"],
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
        event: "Load nums",
        summary: "nums = [2, 7, 11, 15], target = 9.",
        why: "The classic example: 2 + 7 = 9. We need to find which two indices produce this sum. The naive approach would be a nested loop checking every pair — O(n²).",
        memory: [{ name: "nums", value: "[2, 7, 11, 15]" }, { name: "target", value: "9" }, { name: "seen", value: "{}" }],
        output: [],
      },
      {
        line: 5,
        event: "Check num=2",
        summary: "complement = 9 - 2 = 7. Is 7 in seen? No.",
        why: "We compute complement = target - num. This is the key insight: we don't need to search for 'which number pairs with 2?' — we calculate it. The complement of 2 given target 9 is 7. Then we ask: have I seen 7 before? We haven't yet, so store 2.",
        memory: [{ name: "num", value: "2" }, { name: "complement", value: "7" }, { name: "seen", value: "{}" }],
        output: ["i=0, num=2, need=7, seen={}"],
      },
      {
        line: 10,
        event: "Store 2 → index 0",
        summary: "seen = {2: 0}. We've visited 2 at index 0.",
        why: "We store seen[num] = i (value → index). When we later find 7, we can instantly report that 7's complement (2) is at index 0. This is the hash map trade: O(n) space buys us O(1) complement lookups.",
        memory: [{ name: "num", value: "2" }, { name: "seen", value: "{2: 0}" }],
        output: ["i=0, num=2, need=7, seen={}"],
      },
      {
        line: 5,
        event: "Check num=7",
        summary: "complement = 9 - 7 = 2. Is 2 in seen? YES!",
        why: "For num=7, complement = 2. We check: is 2 in the seen dictionary? O(1) hash lookup — yes! We immediately know the answer: index seen[2]=0 and current index i=1. Without the hash map, we'd have had to search back through all previous numbers.",
        memory: [{ name: "num", value: "7" }, { name: "complement", value: "2" }, { name: "seen", value: "{2: 0}" }],
        output: ["i=0, num=2, need=7, seen={}", "i=1, num=7, need=2, seen={2: 0}"],
      },
      {
        line: 9,
        event: "Answer found!",
        summary: "Pair [2, 7] at indices [0, 1]. Done in 2 iterations.",
        why: "We found the answer after checking only 2 elements (not all 4). For n elements, hash map two sum runs in at most n iterations — O(n). The break exits immediately. No need to continue scanning once the pair is found.",
        memory: [{ name: "nums", value: "[2, 7, 11, 15]" }, { name: "target", value: "9" }, { name: "seen", value: "{2: 0}" }],
        output: ["i=0, num=2, need=7, seen={}", "i=1, num=7, need=2, seen={2: 0}", "found! indices [0, 1] → values [2, 7]"],
      },
    ],
  },

  // ── Valid Parentheses ─────────────────────────────────────────────────────
  {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    level: "Advanced",
    levelColor: "text-gold",
    duration: "10 min",
    objective: "See how a stack naturally models nested bracket matching without any complex logic.",
    prompt: "Try s = '({)}'. Why does this fail even though the counts are equal?",
    hint: "The stack checks ORDER, not just count. '({)}' fails because ) tries to close ( but the top of the stack is {.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    useCases: [
      "Code editor syntax checking (unmatched brackets)",
      "XML/HTML tag validation",
      "Math expression evaluation",
      "Compiler tokenizer verification",
    ],
    approach: "A stack is the natural data structure for matching nested brackets. Rule: push every opening bracket. When we see a closing bracket, check if the top of the stack is its matching opener — if not, invalid. At the end, the stack must be empty (every opener was closed). We use a hash map for the bracket pairs to keep the logic clean.",
    output: ["( → push, stack=['(']", "( → push, stack=['(', '(']", ") → pop '(' ✓, stack=['(']", ") → pop '(' ✓, stack=[]", "valid: True"],
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
        event: "Set input",
        summary: 's = "(())" — nested valid parentheses.',
        why: "We test with a nested case to show the stack's ability to handle nesting. Simple counting (open count == close count) would also say this is valid, but the stack approach handles cases like '({)}' correctly.",
        memory: [{ name: "s", value: '"(())"' }, { name: "stack", value: "[]" }],
        output: [],
      },
      {
        line: 3,
        event: "Build pairs map",
        summary: "Map each closer to its expected opener.",
        why: "The pairs dictionary {')': '(', ...} maps closing brackets to their matching openers. When we see ')', we look up pairs[')'] = '(' and compare with the stack top. This avoids a chain of if/elif and handles all bracket types cleanly.",
        memory: [{ name: "stack", value: "[]" }, { name: "pairs", value: "{')':'(', ']':'[', '}':'{'}" }],
        output: [],
      },
      {
        line: 7,
        event: "Push first '('",
        summary: "Opening bracket — push onto stack.",
        why: "Any opening bracket gets pushed immediately. We don't know yet if it will be matched — we'll find out when we encounter the corresponding closing bracket. The stack remembers the sequence of unclosed openers.",
        memory: [{ name: "stack", value: "['(']" }, { name: "ch", value: "'('" }],
        output: ["( → push, stack=['(']"],
      },
      {
        line: 7,
        event: "Push second '('",
        summary: "Another opener — stack grows.",
        why: "Nesting! We now have two unclosed openers. The stack tracks this perfectly — the inner '(' is on top, which means the inner bracket must be closed before the outer one. This is exactly LIFO behavior matching the nesting requirement.",
        memory: [{ name: "stack", value: "['(', '(']" }, { name: "ch", value: "'('" }],
        output: ["( → push, stack=['(']", "( → push, stack=['(', '(']"],
      },
      {
        line: 13,
        event: "Pop for first ')'",
        summary: "stack[-1] = '(' matches pairs[')'] = '('. Valid.",
        why: "We see ')'. Its expected opener is pairs[')'] = '('. We check the stack top: it IS '('. Match confirmed — pop it. The stack now has only the outer '(' remaining. Order is preserved.",
        memory: [{ name: "stack", value: "['(']" }, { name: "ch", value: "')'" }],
        output: ["( → push, stack=['(']", "( → push, stack=['(', '(']", ") → pop '(' ✓, stack=['(']"],
      },
      {
        line: 15,
        event: "Stack empty — valid!",
        summary: "All brackets matched. len(stack) == 0 → True.",
        why: "After processing all characters, an empty stack means every opener was properly closed in the right order. A non-empty stack would mean unclosed openers remain. len(stack) == 0 is the final validity check.",
        memory: [{ name: "stack", value: "[]" }],
        output: ["( → push, stack=['(']", "( → push, stack=['(', '(']", ") → pop '(' ✓, stack=['(']", ") → pop '(' ✓, stack=[]", "valid: True"],
      },
    ],
  },

  // ── Variables & Types ──────────────────────────────────────────────────────
  {
    id: "variables-types",
    title: "Variables & Types",
    level: "Foundation",
    levelColor: "text-sky-400",
    duration: "8 min",
    objective: "See how Python binds names to objects in memory.",
    prompt: "Change x to a float and y to a boolean. What does type() return?",
    hint: "Python shows the type right after assignment — watch the Memory View update.",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    useCases: ["Understanding mutability in data pipelines", "Debugging type errors", "API input validation"],
    approach: "Each assignment binds a name to a new object in memory. Python is dynamically typed — the variable holds a reference, not the value itself.",
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
        event: "Assign int",
        summary: "x = 42 creates an integer object and binds name 'x' to it.",
        why: "Python stores every value as an object on the heap. The variable x is just a label pointing to the object 42. This makes reassignment cheap — you just point the label elsewhere.",
        memory: [{ name: "x", value: "42" }],
        output: [],
      },
      {
        line: 2,
        event: "Assign str",
        summary: "y = 'hello' creates a string object. Strings are immutable sequences.",
        why: "Strings in Python are immutable — you can't change individual characters. Any 'modification' creates a new string object. That's why concatenation inside loops is expensive.",
        memory: [{ name: "x", value: "42" }, { name: "y", value: "'hello'" }],
        output: [],
      },
      {
        line: 3,
        event: "Assign bool",
        summary: "z = True. Booleans are a subtype of int in Python — True == 1.",
        why: "Python's bool inherits from int. This means True + True == 2. It's a historical decision that enables compact conditional math but can cause subtle bugs if types aren't validated.",
        memory: [{ name: "x", value: "42" }, { name: "y", value: "'hello'" }, { name: "z", value: "True" }],
        output: [],
      },
      {
        line: 5,
        event: "Print type(x)",
        summary: "type(x) returns <class 'int'>. Python dynamically resolves the type at runtime.",
        why: "type() introspects the object's class at runtime. No declaration needed — Python figures it out from the assigned value. This is called dynamic typing.",
        memory: [{ name: "x", value: "42" }, { name: "y", value: "'hello'" }, { name: "z", value: "True" }],
        output: ["<class 'int'>"],
      },
      {
        line: 6,
        event: "Print type(y)",
        summary: "type(y) returns <class 'str'>.",
        why: "The same type() function works on any Python object. You can use isinstance(y, str) for safer type checks in production code — it handles inheritance correctly.",
        memory: [{ name: "x", value: "42" }, { name: "y", value: "'hello'" }, { name: "z", value: "True" }],
        output: ["<class 'int'>", "<class 'str'>"],
      },
      {
        line: 8,
        event: "Print all vars",
        summary: "print(x, y, z) outputs all three values separated by spaces.",
        why: "print() with multiple arguments inserts a space separator by default (sep=' '). You can change sep='' or sep='\\n' to control formatting.",
        memory: [{ name: "x", value: "42" }, { name: "y", value: "'hello'" }, { name: "z", value: "True" }],
        output: ["<class 'int'>", "<class 'str'>", "<class 'bool'>", "42 hello True"],
      },
    ],
  },

  // ── If / Else ──────────────────────────────────────────────────────────────
  {
    id: "if-else",
    title: "If / Else Conditions",
    level: "Foundation",
    levelColor: "text-sky-400",
    duration: "8 min",
    objective: "Watch execution jump between branches based on truthiness.",
    prompt: "Change score to 45. Which branch runs? What if score equals exactly 50?",
    hint: "Watch the highlighted line jump — it skips the branch that doesn't match.",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    useCases: ["Input validation in web forms", "Business rule engines", "Access control logic"],
    approach: "Python evaluates the condition expression and jumps to the matching branch. Only one branch executes per if/elif/else chain.",
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
        event: "Set score",
        summary: "score = 75. This value will drive which branch executes.",
        why: "The condition check will compare score against each threshold in order. Python evaluates conditions top-to-bottom and takes the first true branch.",
        memory: [{ name: "score", value: "75" }],
        output: [],
      },
      {
        line: 3,
        event: "Check >= 90",
        summary: "75 >= 90 → False. This branch is skipped.",
        why: "Python short-circuits here — since 75 < 90, execution immediately moves to the next elif. The code inside this if block is never touched.",
        memory: [{ name: "score", value: "75" }],
        output: [],
      },
      {
        line: 5,
        event: "Check >= 70",
        summary: "75 >= 70 → True! Execution enters this branch.",
        why: "The first True condition wins. Python doesn't check the remaining elif/else branches even if they would also be True. This top-down priority is fundamental to if/elif/else design.",
        memory: [{ name: "score", value: "75" }],
        output: [],
      },
      {
        line: 6,
        event: "Assign grade B",
        summary: "grade = 'B'. This branch body runs because the condition was True.",
        why: "Only the body of the matched branch executes. The elif score >= 50 and else branches are completely skipped — Python jumps straight to the end of the if/elif/else block.",
        memory: [{ name: "score", value: "75" }, { name: "grade", value: "'B'" }],
        output: [],
      },
      {
        line: 12,
        event: "Print result",
        summary: "print outputs 'Grade: B'.",
        why: "Execution resumes after the entire if/elif/else block. The variable grade holds the value set by the matched branch.",
        memory: [{ name: "score", value: "75" }, { name: "grade", value: "'B'" }],
        output: ["Grade: B"],
      },
    ],
  },

  // ── While Loop ─────────────────────────────────────────────────────────────
  {
    id: "while-loop",
    title: "While Loops",
    level: "Foundation",
    levelColor: "text-sky-400",
    duration: "10 min",
    objective: "See how condition-driven repetition works step by step.",
    prompt: "Change the while condition to n < 8. How many iterations run?",
    hint: "Watch the condition check before each iteration — when it becomes False, the loop exits.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    useCases: ["Polling until a server responds", "Game loops", "Reading input until valid"],
    approach: "A while loop re-evaluates its condition before every iteration. When the condition is False, execution falls through to after the loop.",
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
        event: "Init vars",
        summary: "n = 1, total = 0. Both loop counter and accumulator are set.",
        why: "We need two variables: n drives the loop condition, total accumulates the sum. Initialising before the loop is essential — without it Python raises NameError.",
        memory: [{ name: "n", value: "1" }, { name: "total", value: "0" }],
        output: [],
      },
      {
        line: 4,
        event: "Check n <= 5",
        summary: "1 <= 5 → True. Entering first iteration.",
        why: "The condition is checked before the loop body runs — this is called a pre-test loop. If the initial value made this False, the body would never execute.",
        memory: [{ name: "n", value: "1" }, { name: "total", value: "0" }],
        output: [],
      },
      {
        line: 5,
        event: "Accumulate",
        summary: "total = 0 + 1 = 1. The sum grows with each pass.",
        why: "The accumulator pattern: total starts at 0 (identity for addition) and we add each term. This is O(1) space regardless of n — we never store all values at once.",
        memory: [{ name: "n", value: "1" }, { name: "total", value: "1" }],
        output: ["n=1, total=1"],
      },
      {
        line: 7,
        event: "Increment n",
        summary: "n = 1 + 1 = 2. Advancing the counter prevents an infinite loop.",
        why: "Without n = n + 1 the condition n <= 5 would stay True forever. Every while loop must have a way to eventually make its condition False — this is the exit guarantee.",
        memory: [{ name: "n", value: "2" }, { name: "total", value: "1" }],
        output: ["n=1, total=1"],
      },
      {
        line: 4,
        event: "Re-check condition",
        summary: "2 <= 5 → True. Continuing. (Iterations 2–5 run similarly.)",
        why: "The condition is checked every time control returns to the top of the loop. This is what makes while fundamentally different from a for loop — the exit is checked dynamically.",
        memory: [{ name: "n", value: "2" }, { name: "total", value: "1" }],
        output: ["n=1, total=1", "n=2, total=3"],
      },
      {
        line: 9,
        event: "Loop exits",
        summary: "After n reaches 6, condition 6 <= 5 is False. Loop ends. Final total = 15.",
        why: "1+2+3+4+5 = 15. The Gaussian sum formula n(n+1)/2 gives the same result in O(1) — but iterating explicitly like this is clearer for learning and generalises to non-arithmetic sums.",
        memory: [{ name: "n", value: "6" }, { name: "total", value: "15" }],
        output: ["n=1, total=1", "n=2, total=3", "n=3, total=6", "n=4, total=10", "n=5, total=15", "Final total: 15"],
      },
    ],
  },

  // ── Count Occurrences ──────────────────────────────────────────────────────
  {
    id: "count-occurrences",
    title: "Count Occurrences",
    level: "Beginner",
    levelColor: "text-indigo-400",
    duration: "8 min",
    objective: "Build a frequency map with a dictionary.",
    prompt: "Add 'banana' to the fruits list. Does the count update correctly?",
    hint: "Watch the dict grow key by key — each new fruit adds an entry, each repeat increments it.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(k)",
    useCases: ["Word frequency in NLP pipelines", "Analytics dashboards", "Inventory tracking"],
    approach: "Use a dict where keys are values and values are counts. The .get(key, 0) idiom reads the current count (defaulting to 0) and adds 1.",
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
        event: "Init list",
        summary: "fruits list has 6 items. 'apple' appears 3 times.",
        why: "We're deliberately including duplicates to demonstrate counting. Real-world use cases include log analysis, word frequency, and user activity tracking.",
        memory: [{ name: "fruits", value: "['apple','banana',...]" }],
        output: [],
      },
      {
        line: 2,
        event: "Empty dict",
        summary: "counts = {}. The frequency map starts empty.",
        why: "We start with an empty dict rather than pre-populating it. This way the code handles any set of fruits — we don't need to know the keys in advance.",
        memory: [{ name: "counts", value: "{}" }],
        output: [],
      },
      {
        line: 4,
        event: "First apple",
        summary: "fruit = 'apple'. counts.get('apple', 0) returns 0 (not seen yet). counts['apple'] = 1.",
        why: ".get(key, default) avoids a KeyError when the key doesn't exist yet. The alternative counts[key] += 1 would crash on the first occurrence. This is a classic Python idiom.",
        memory: [{ name: "counts", value: "{'apple': 1}" }],
        output: [],
      },
      {
        line: 4,
        event: "First banana",
        summary: "fruit = 'banana'. Not in dict yet → counts['banana'] = 0 + 1 = 1.",
        why: "Each new unique fruit creates a new key with value 1. The dict grows dynamically — no need to declare keys upfront. This is O(1) average per insertion.",
        memory: [{ name: "counts", value: "{'apple': 1, 'banana': 1}" }],
        output: [],
      },
      {
        line: 4,
        event: "Repeat apple",
        summary: "'apple' seen again. counts.get('apple', 0) = 1. counts['apple'] = 2.",
        why: "On repeat encounters, .get() returns the existing count (1) instead of the default (0). The increment adds to the running total. This single line handles both first-time and repeat cases.",
        memory: [{ name: "counts", value: "{'apple': 2, 'banana': 1, 'cherry': 1}" }],
        output: [],
      },
      {
        line: 7,
        event: "Print results",
        summary: "Final counts: apple=3, banana=2, cherry=1. One pass through the list.",
        why: "The entire algorithm is O(n) time and O(k) space where k is unique fruits. Compare to a naive O(n²) approach that counts each fruit with a separate .count() call in a loop.",
        memory: [{ name: "counts", value: "{'apple': 3, 'banana': 2, 'cherry': 1}" }],
        output: ["{'apple': 3, 'banana': 2, 'cherry': 1}", "apple: 3", "banana: 2", "cherry: 1"],
      },
    ],
  },

  // ── Reverse a List ─────────────────────────────────────────────────────────
  {
    id: "reverse-list",
    title: "Reverse a List",
    level: "Beginner",
    levelColor: "text-indigo-400",
    duration: "8 min",
    objective: "Use two pointers to reverse in-place without extra memory.",
    prompt: "What happens if the list has an odd number of elements? Try [1,2,3,4,5].",
    hint: "Watch left and right converge — when they meet in the middle, all swaps are done.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    useCases: ["In-place buffer reversal", "Palindrome checking", "String manipulation"],
    approach: "Two pointers start at opposite ends. Swap elements and move pointers inward until they meet. No extra array needed — just one temp variable.",
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
        event: "Init list",
        summary: "nums = [1, 2, 3, 4, 6]. Two pointers will swap from both ends.",
        why: "We chose a 5-element list to show the middle element stays untouched. With an even-length list every element gets swapped exactly once.",
        memory: [{ name: "nums", value: "[1,2,3,4,6]" }, { name: "left", value: "0" }, { name: "right", value: "4" }],
        output: [],
      },
      {
        line: 5,
        event: "Check left < right",
        summary: "0 < 4 → True. Pointers haven't crossed — swap needed.",
        why: "The condition left < right stops exactly when pointers meet or cross. For odd-length lists they meet at the middle; for even-length they cross. Either way, no over-swapping occurs.",
        memory: [{ name: "left", value: "0" }, { name: "right", value: "4" }],
        output: [],
      },
      {
        line: 6,
        event: "Swap ends",
        summary: "Swap nums[0]=1 with nums[4]=6 → [6, 2, 3, 4, 1].",
        why: "Python's simultaneous assignment a, b = b, a is atomic — no temp variable needed. Under the hood Python evaluates the right side first, then assigns. Elegant and O(1) space.",
        memory: [{ name: "nums", value: "[6,2,3,4,1]" }, { name: "left", value: "1" }, { name: "right", value: "3" }],
        output: ["Swapped: [6, 2, 3, 4, 1]"],
      },
      {
        line: 6,
        event: "Swap inner pair",
        summary: "Swap nums[1]=2 with nums[3]=4 → [6, 4, 3, 2, 1].",
        why: "Each iteration handles one symmetric pair. After 2 swaps on a 5-element list, only the middle element (index 2) remains — it's already in its correct reversed position.",
        memory: [{ name: "nums", value: "[6,4,3,2,1]" }, { name: "left", value: "2" }, { name: "right", value: "2" }],
        output: ["Swapped: [6, 2, 3, 4, 1]", "Swapped: [6, 4, 3, 2, 1]"],
      },
      {
        line: 5,
        event: "Condition false",
        summary: "left = 2, right = 2. 2 < 2 is False. Loop exits — reversal complete.",
        why: "The two-pointer technique is O(n/2) swaps = O(n) time and O(1) space. Compare to creating a reversed copy: same time but O(n) extra space.",
        memory: [{ name: "nums", value: "[6,4,3,2,1]" }, { name: "left", value: "2" }, { name: "right", value: "2" }],
        output: ["Swapped: [6, 2, 3, 4, 1]", "Swapped: [6, 4, 3, 2, 1]", "Reversed: [6, 4, 3, 2, 1]"],
      },
    ],
  },

  // ── Insertion Sort ─────────────────────────────────────────────────────────
  {
    id: "insertion-sort",
    title: "Insertion Sort",
    level: "Intermediate",
    levelColor: "text-emerald-400",
    duration: "12 min",
    objective: "Sort by growing a sorted prefix one element at a time.",
    prompt: "What is the minimum swaps needed for [1,2,3,5,4]? Why is it faster than bubble sort here?",
    hint: "Watch the key element shift left only as far as needed — this is why nearly-sorted input is fast.",
    timeComplexity: "O(n²) worst, O(n) best",
    spaceComplexity: "O(1)",
    useCases: ["Sorting small arrays (faster than quicksort below ~16 elements)", "Online sorting as data streams in", "Used as subroutine in timsort"],
    approach: "For each element, shift it left past every larger element until it finds its sorted position. The left portion is always sorted; we extend it by one each pass.",
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
        event: "Init array",
        summary: "arr = [5, 2, 4, 1, 3]. We'll grow a sorted prefix from the left.",
        why: "Insertion sort treats the first element as a sorted list of size 1. Each subsequent element is inserted into its correct position in the already-sorted left portion.",
        memory: [{ name: "arr", value: "[5,2,4,1,3]" }],
        output: [],
      },
      {
        line: 3,
        event: "Pass 1: key=2",
        summary: "i=1, key=2. Compare with arr[0]=5. 5 > 2 → shift 5 right. Place 2 at index 0.",
        why: "key saves the value being inserted before we overwrite positions. The while loop shifts larger elements right to make space — no swaps, just shifts, which is why insertion sort is cache-friendly.",
        memory: [{ name: "arr", value: "[2,5,4,1,3]" }, { name: "key", value: "2" }],
        output: ["Pass 1: [2, 5, 4, 1, 3]"],
      },
      {
        line: 3,
        event: "Pass 2: key=4",
        summary: "i=2, key=4. Compare 5 > 4 → shift. Compare 2 > 4 → False. Place 4 at index 1.",
        why: "The inner while stops as soon as we find an element ≤ key. This early exit is why insertion sort is O(n) on nearly-sorted data — few shifts needed.",
        memory: [{ name: "arr", value: "[2,4,5,1,3]" }, { name: "key", value: "4" }],
        output: ["Pass 1: [2, 5, 4, 1, 3]", "Pass 2: [2, 4, 5, 1, 3]"],
      },
      {
        line: 3,
        event: "Pass 3: key=1",
        summary: "i=3, key=1. Shifts 5, 4, 2 right. 1 inserted at index 0. Worst case for this element.",
        why: "When key is smaller than everything in the sorted prefix, every element shifts right. This O(n) inner work per pass drives the O(n²) worst case when the array is reverse-sorted.",
        memory: [{ name: "arr", value: "[1,2,4,5,3]" }, { name: "key", value: "1" }],
        output: ["Pass 1: [2, 5, 4, 1, 3]", "Pass 2: [2, 4, 5, 1, 3]", "Pass 3: [1, 2, 4, 5, 3]"],
      },
      {
        line: 3,
        event: "Pass 4: key=3",
        summary: "i=4, key=3. Shifts 5, 4. 3 placed at index 2.",
        why: "Only 2 shifts needed because 1 and 2 are already ≤ 3. This adaptivity — doing minimal work when input is partially sorted — is why Python's timsort uses insertion sort for small subarrays.",
        memory: [{ name: "arr", value: "[1,2,3,4,5]" }, { name: "key", value: "3" }],
        output: ["Pass 1: [2, 5, 4, 1, 3]", "Pass 2: [2, 4, 5, 1, 3]", "Pass 3: [1, 2, 4, 5, 3]", "Pass 4: [1, 2, 3, 4, 5]"],
      },
      {
        line: 12,
        event: "Sorted!",
        summary: "Final: [1, 2, 3, 4, 5]. 4 passes, O(n-1) outer iterations.",
        why: "Insertion sort is stable (preserves relative order of equal elements), in-place (O(1) space), and adaptive (O(n) on nearly sorted). Python's sorted() uses timsort which uses insertion sort for runs ≤ 64 elements.",
        memory: [{ name: "arr", value: "[1,2,3,4,5]" }],
        output: ["Pass 1: [2, 5, 4, 1, 3]", "Pass 2: [2, 4, 5, 1, 3]", "Pass 3: [1, 2, 4, 5, 3]", "Pass 4: [1, 2, 3, 4, 5]", "Sorted: [1, 2, 3, 4, 5]"],
      },
    ],
  },

  // ── Hash Map Counting ──────────────────────────────────────────────────────
  {
    id: "hash-map-counting",
    title: "Hash Map Counting",
    level: "Intermediate",
    levelColor: "text-emerald-400",
    duration: "10 min",
    objective: "Use a dict to find the most common word in O(n) time.",
    prompt: "Add 'the' three more times to the text. Does it become the most frequent?",
    hint: "Watch how the dict handles collisions — each key maps to exactly one count bucket.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(k)",
    useCases: ["Search autocomplete ranking", "Log anomaly detection", "Trending hashtags on social media"],
    approach: "Build a frequency dict in one pass, then find the max. Total O(n) — far better than the O(n²) approach of counting each word separately with .count().",
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
        event: "Set up words",
        summary: "'the' × 3, 'quick' × 2, 'fox' × 1, 'jumps' × 1. 7 words total.",
        why: "Real-world text often has a Zipfian distribution — a few words appear very frequently, most appear rarely. Hash map counting exploits this by only storing unique keys.",
        memory: [{ name: "freq", value: "{}" }],
        output: [],
      },
      {
        line: 4,
        event: "Count 'the' (×3)",
        summary: "Three iterations: freq['the'] goes 0→1→2→3.",
        why: "Each lookup in a Python dict is O(1) average — the hash function maps the key to a bucket, no iteration needed. This is what makes hash maps superior to lists for frequency counting.",
        memory: [{ name: "freq", value: "{'the': 3}" }],
        output: [],
      },
      {
        line: 4,
        event: "Count remaining",
        summary: "Remaining words processed. quick=2, fox=1, jumps=1.",
        why: "Total work: one pass through 7 words = O(n). Compare to [words.count(w) for w in set(words)] which calls .count() (itself O(n)) once per unique word — making it O(n × k) = O(n²) in the worst case.",
        memory: [{ name: "freq", value: "{'the': 3, 'quick': 2, 'fox': 1, 'jumps': 1}" }],
        output: [],
      },
      {
        line: 7,
        event: "Find max",
        summary: "max(freq, key=freq.get) iterates keys and returns the one with the highest value.",
        why: "key=freq.get passes the dict's .get method as the comparison function. Python's max() calls it on each key to determine ordering. This is more Pythonic than manual max-tracking in a loop.",
        memory: [{ name: "most_common", value: "'the'" }],
        output: [],
      },
      {
        line: 8,
        event: "Print freq",
        summary: "Frequencies dict printed.",
        why: "For production use, consider collections.Counter — it's a dict subclass with .most_common(n) built in. But understanding the manual version shows exactly what's happening under the hood.",
        memory: [{ name: "most_common", value: "'the'" }],
        output: ["Frequencies: {'the': 3, 'quick': 2, 'fox': 1, 'jumps': 1}"],
      },
      {
        line: 9,
        event: "Print winner",
        summary: "Most common: 'the' → 3 times.",
        why: "One pass to count + one pass to find max = O(2n) = O(n). The hash map turned an O(n²) problem into O(n). This pattern — count then query — underlies many algorithm optimisations.",
        memory: [{ name: "most_common", value: "'the'" }],
        output: ["Frequencies: {'the': 3, 'quick': 2, 'fox': 1, 'jumps': 1}", "Most common: the → 3 times"],
      },
    ],
  },

  // ── For Loop ──────────────────────────────────────────────────────────────
  {
    id: "for-loop",
    title: "For Loops & Range",
    level: "Foundation",
    levelColor: "text-sky-400",
    duration: "12 min",
    objective: "See how Python's for loop iterates over sequences using an iterator protocol.",
    prompt: "Change range(1, 6) to range(0, 10, 2). How many iterations run? What does the third argument do?",
    hint: "range(start, stop, step) — the third argument is the step size. range(0, 10, 2) gives [0, 2, 4, 6, 8].",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    useCases: [
      "Iterating over lists, strings, or any sequence",
      "Generating number sequences with range()",
      "Accumulating totals across fixed-size data",
    ],
    approach: "Python's for loop uses the iterator protocol under the hood — calling __iter__ and __next__ on the sequence. range() generates integers lazily (no list in memory). The loop variable is automatically assigned each value in order.",
    output: ["i=1, squared=1", "i=2, squared=4", "i=3, squared=9", "i=4, squared=16", "i=5, squared=25", "Sum of squares: 55"],
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
        event: "Init total",
        summary: "total = 0. Accumulator starts at the additive identity.",
        why: "We initialize total before the loop. Variables used inside a loop and defined outside persist across iterations — that's what makes them accumulators.",
        memory: [{ name: "total", value: "0" }],
        output: [],
      },
      {
        line: 3,
        event: "Start loop i=1",
        summary: "range(1, 6) produces [1, 2, 3, 4, 5]. First iteration: i=1.",
        why: "range(1, 6) starts at 1 and stops BEFORE 6. Python's range is exclusive on the stop — a common source of confusion. The loop variable i is automatically set to each value.",
        memory: [{ name: "total", value: "0" }, { name: "i", value: "1" }],
        output: [],
      },
      {
        line: 4,
        event: "Compute 1²=1",
        summary: "squared = 1 × 1 = 1.",
        why: "We store the result in a named variable (squared) instead of computing it twice. This is the DRY principle — compute once, use multiple times.",
        memory: [{ name: "total", value: "0" }, { name: "i", value: "1" }, { name: "squared", value: "1" }],
        output: [],
      },
      {
        line: 5,
        event: "Accumulate",
        summary: "total = 0 + 1 = 1.",
        why: "The accumulator pattern in action. total retains its value between iterations because it's defined outside the loop scope.",
        memory: [{ name: "total", value: "1" }, { name: "i", value: "1" }, { name: "squared", value: "1" }],
        output: ["i=1, squared=1"],
      },
      {
        line: 4,
        event: "i=3, squared=9",
        summary: "Third iteration. squared = 3×3 = 9, total = 1+4+9 = 14.",
        why: "Each iteration runs the entire body independently. The loop body re-assigns both squared and updates total. No state leaks between the 'squared' calculations.",
        memory: [{ name: "total", value: "14" }, { name: "i", value: "3" }, { name: "squared", value: "9" }],
        output: ["i=1, squared=1", "i=2, squared=4", "i=3, squared=9"],
      },
      {
        line: 8,
        event: "Loop complete",
        summary: "5 iterations done. total = 1+4+9+16+25 = 55.",
        why: "After all iterations, the loop exits naturally. The variable i still holds the last value (5) and squared holds 25 — they're accessible after the loop in Python.",
        memory: [{ name: "total", value: "55" }, { name: "i", value: "5" }, { name: "squared", value: "25" }],
        output: ["i=1, squared=1", "i=2, squared=4", "i=3, squared=9", "i=4, squared=16", "i=5, squared=25", "Sum of squares: 55"],
      },
    ],
  },

  // ── Palindrome Check ──────────────────────────────────────────────────────
  {
    id: "palindrome",
    title: "Palindrome Check",
    level: "Beginner",
    levelColor: "text-wave",
    duration: "8 min",
    objective: "Use Python string slicing to check if a word reads the same forwards and backwards.",
    prompt: "Try 'racecar' and 'hello'. What does s[::-1] actually do step by step?",
    hint: "s[::-1] means: start at the end, go to the beginning, step -1 (backwards). It's the most Pythonic reversal.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(n)",
    useCases: [
      "DNA sequence analysis (palindromic sequences in genetics)",
      "Word puzzles and games",
      "Input validation (e.g., palindromic part numbers)",
    ],
    approach: "We use Python's slice notation s[::-1] to reverse the string, then compare with the original. This is O(n) time and O(n) space (creates a new reversed string). An alternative is two-pointer (O(n) time, O(1) space) but slicing is the most readable Python approach.",
    output: ["original: madam", "reversed: madam", "is palindrome: True"],
    starterCode: `s = "madam"

reversed_s = s[::-1]
print("original:", s)
print("reversed:", reversed_s)
print("is palindrome:", s == reversed_s)
`,
    executionFrames: [
      {
        line: 1,
        event: "Set string",
        summary: 's = "madam" — a 5-character string.',
        why: "madam is a classic palindrome example. Strings in Python are immutable sequences of characters — every operation on a string creates a new one.",
        memory: [{ name: "s", value: '"madam"' }],
        output: [],
      },
      {
        line: 3,
        event: "Reverse with slice",
        summary: 's[::-1] = "madam". Step -1 iterates the string backwards.',
        why: "Slice notation s[start:stop:step]. With s[::-1], start and stop are omitted (defaults: full string), step=-1 means traverse backwards. This creates a new string — the original s is unchanged because strings are immutable.",
        memory: [{ name: "s", value: '"madam"' }, { name: "reversed_s", value: '"madam"' }],
        output: [],
      },
      {
        line: 4,
        event: "Print original",
        summary: 'Prints "original: madam".',
        why: "We print both sides before the comparison so we can visually verify the reversal. In real code you might skip these prints.",
        memory: [{ name: "s", value: '"madam"' }, { name: "reversed_s", value: '"madam"' }],
        output: ["original: madam"],
      },
      {
        line: 5,
        event: "Print reversed",
        summary: 'Prints "reversed: madam". Same as original.',
        why: "For a palindrome, the reversed string is identical. For 'hello', reversed would be 'olleh' — visibly different.",
        memory: [{ name: "s", value: '"madam"' }, { name: "reversed_s", value: '"madam"' }],
        output: ["original: madam", "reversed: madam"],
      },
      {
        line: 6,
        event: "Compare",
        summary: '"madam" == "madam" → True. It\'s a palindrome!',
        why: "String equality in Python compares character by character. == returns True only if both length and all characters match. This is a natural O(n) check.",
        memory: [{ name: "s", value: '"madam"' }, { name: "reversed_s", value: '"madam"' }],
        output: ["original: madam", "reversed: madam", "is palindrome: True"],
      },
    ],
  },

  // ── Two Pointers ─────────────────────────────────────────────────────────
  {
    id: "two-pointers",
    title: "Two Pointers",
    level: "Intermediate",
    levelColor: "text-leaf",
    duration: "10 min",
    objective: "See how two pointers moving inward can check a sorted array in O(n) with O(1) space.",
    prompt: "Change target to 17. Which pair sums to 17? What if no pair exists?",
    hint: "If nums[left] + nums[right] < target, move left forward. If > target, move right backward. If = target, found!",
    timeComplexity: "O(n)",
    spaceComplexity: "O(1)",
    useCases: [
      "Two Sum on a sorted array (O(1) space vs O(n) for hash map)",
      "Checking if a string is a palindrome (char comparison from both ends)",
      "Container with most water — maximize area between two lines",
    ],
    approach: "Two pointers work on sorted arrays. Start left=0 and right=n-1. Each step: if sum < target, move left right (increase sum); if sum > target, move right left (decrease sum); if equal, found. Each element is visited at most once — O(n). No extra space needed — O(1).",
    output: ["left=0(1) right=5(14) sum=15 < 17", "left=1(3) right=5(14) sum=17 == target!", "found pair: (3, 14) at indices [1, 5]"],
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
        event: "Load sorted array",
        summary: "nums = [1, 3, 5, 7, 9, 14] — must be sorted for two pointers.",
        why: "Two pointers REQUIRES a sorted array. Sorting guarantees that moving left increases the sum and moving right decreases it. Without this property we can't make confident directional moves.",
        memory: [{ name: "nums", value: "[1, 3, 5, 7, 9, 14]" }, { name: "target", value: "17" }],
        output: [],
      },
      {
        line: 3,
        event: "Set pointers",
        summary: "left=0 (pointing at 1), right=5 (pointing at 14).",
        why: "Start with the widest window: smallest at left, largest at right. This covers all possibilities — we shrink inward based on the comparison result.",
        memory: [{ name: "nums", value: "[1, 3, 5, 7, 9, 14]" }, { name: "target", value: "17" }, { name: "left", value: "0" }, { name: "right", value: "5" }],
        output: [],
      },
      {
        line: 6,
        event: "Sum=15 < 17",
        summary: "1 + 14 = 15. Less than target — move left pointer right.",
        why: "Sum is too small. To increase it, we need a bigger left element. We can't increase the right (14 is already the max). So move left forward to 3.",
        memory: [{ name: "left", value: "0" }, { name: "right", value: "5" }, { name: "s", value: "15" }],
        output: ["left=0(1) right=5(14) sum=15 < target"],
      },
      {
        line: 13,
        event: "Advance left",
        summary: "left moves from 0 to 1. Now pointing at 3.",
        why: "left += 1 discards the smallest remaining element from consideration. We know no valid pair includes nums[0]=1 (the sum 1+anything would be ≤ 15 which we already know is too small).",
        memory: [{ name: "left", value: "1" }, { name: "right", value: "5" }],
        output: ["left=0(1) right=5(14) sum=15 < target"],
      },
      {
        line: 6,
        event: "Sum=17 == target!",
        summary: "3 + 14 = 17. Exact match found in 2 steps!",
        why: "We found the pair in just 2 iterations. The two-pointer approach is O(n) but typically finds the answer quickly. Compare to hash map which also runs in O(n) but uses O(n) extra space. Here we used O(1) space.",
        memory: [{ name: "left", value: "1" }, { name: "right", value: "5" }, { name: "s", value: "17" }],
        output: ["left=0(1) right=5(14) sum=15 < target", "left=1(3) right=5(14) sum=17 == target!", "found pair: (3, 14) at indices [1, 5]"],
      },
    ],
  },

  // ── Merge Sort ────────────────────────────────────────────────────────────
  {
    id: "merge-sort",
    title: "Merge Sort",
    level: "Advanced",
    levelColor: "text-gold",
    duration: "18 min",
    objective: "See divide-and-conquer in action: split the array in half recursively, then merge sorted halves.",
    prompt: "Change arr to [9, 3, 7, 1, 5, 2, 8]. How many recursive calls does merge sort make?",
    hint: "Each call splits into two — the total calls form a binary tree with log₂(n) levels. For n=7 that's about 3 levels.",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(n)",
    useCases: [
      "Sorting linked lists (merge sort is natural for them)",
      "External sort: merging sorted files too large for RAM",
      "Count inversions in an array",
      "Stable sort used in Python's built-in sorted() (Timsort is based on it)",
    ],
    approach: "Merge sort is a divide-and-conquer algorithm. Divide: split array in half. Conquer: recursively sort each half. Combine: merge two sorted halves into one sorted array. The merge step is the key — it's O(n) and produces a sorted array from two sorted inputs. Total: O(n log n) time, O(n) space for the temporary arrays.",
    output: ["merge([3],[5]) → [3,5]", "merge([1],[2]) → [1,2]", "merge([3,5],[1,2]) → [1,2,3,5]", "merge([7],[4]) → [4,7]", "merge([1,2,3,5],[4,7]) → [1,2,3,4,5,7]", "sorted: [1, 2, 3, 4, 5, 7]"],
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
        event: "Define merge_sort",
        summary: "merge_sort splits array recursively until single elements remain.",
        why: "The base case is len(arr) <= 1: a single element is always sorted. This stops the recursion. Without the base case, the function would recurse infinitely.",
        memory: [{ name: "arr", value: "[5, 3, 1, 2, 7, 4]" }],
        output: [],
      },
      {
        line: 4,
        event: "Compute midpoint",
        summary: "mid = len(arr) // 2 splits array into two halves.",
        why: "Integer division gives the exact midpoint. For n=6: mid=3, left=[5,3,1], right=[2,7,4]. We use // not / to get an integer index. Splitting in half is what gives us O(log n) levels of recursion.",
        memory: [{ name: "arr", value: "[5, 3, 1, 2, 7, 4]" }, { name: "mid", value: "3" }],
        output: [],
      },
      {
        line: 5,
        event: "Recurse left",
        summary: "merge_sort([5, 3, 1]) — left half recurses until single elements.",
        why: "arr[:mid] creates a new slice [5,3,1]. The recursive call eventually reaches base cases: [5], [3], [1]. Each is 'sorted' trivially. The magic happens in the merge step on the way back up.",
        memory: [{ name: "arr", value: "[5, 3, 1, 2, 7, 4]" }, { name: "left", value: "[1, 3, 5]" }],
        output: ["merge([3],[5]) → [3,5]", "merge([1],[3,5]) → [1,3,5]"],
      },
      {
        line: 9,
        event: "Merge two halves",
        summary: "merge([1,3,5], [2,4,7]) — compare and pick smallest each step.",
        why: "The merge function uses two pointers (i, j) to walk through both sorted arrays simultaneously, always picking the smaller element. This is O(n) and produces a perfectly sorted result. It's the core insight of merge sort.",
        memory: [{ name: "left", value: "[1, 3, 5]" }, { name: "right", value: "[2, 4, 7]" }, { name: "result", value: "[1, 2, 3, 4, 5, 7]" }],
        output: ["merge([3],[5]) → [3,5]", "merge([1],[3,5]) → [1,3,5]", "merge([7],[4]) → [4,7]", "merge([2],[4,7]) → [2,4,7]", "merge([1,3,5],[2,4,7]) → [1,2,3,4,5,7]"],
      },
      {
        line: 22,
        event: "Sorted!",
        summary: "Result: [1, 2, 3, 4, 5, 7]. O(n log n) achieved.",
        why: "Total work: O(n) merge work per level × O(log n) levels = O(n log n). Space: O(n) for the temporary arrays during merging. This is why Python's built-in sort (Timsort) is based on merge sort — it's reliably fast.",
        memory: [{ name: "arr", value: "[5, 3, 1, 2, 7, 4]" }, { name: "sorted_arr", value: "[1, 2, 3, 4, 5, 7]" }],
        output: ["merge([3],[5]) → [3,5]", "merge([1],[3,5]) → [1,3,5]", "merge([7],[4]) → [4,7]", "merge([2],[4,7]) → [2,4,7]", "merge([1,3,5],[2,4,7]) → [1,2,3,4,5,7]", "sorted: [1, 2, 3, 4, 5, 7]"],
      },
    ],
  },
  // ── Quick Sort ────────────────────────────────────────────────────────────
  {
    id: "quick-sort",
    title: "Quick Sort",
    level: "Advanced",
    levelColor: "text-rose-400",
    duration: "18 min",
    objective: "Watch partition divide the array around a pivot, then recurse on each half.",
    prompt: "Change arr to [3, 6, 8, 10, 1, 2, 1]. What pivot gets chosen each time and why?",
    hint: "The pivot is always arr[high]. Try tracing which element becomes the pivot in each recursive call.",
    timeComplexity: "O(n log n) avg / O(n²) worst",
    spaceComplexity: "O(log n)",
    useCases: [
      "Default sort in many standard libraries (V8, C++ std::sort uses introsort based on quicksort)",
      "Cache-friendly in-place sorting — no extra array needed",
      "Quickselect variant finds kth smallest in O(n) average",
      "Database query optimisers use variants for in-memory sorting",
    ],
    approach: "Quick sort picks a pivot (last element here) and partitions the array so all elements ≤ pivot go left and all > pivot go right. The pivot ends up in its final sorted position after each partition call. Recursing on both halves gives O(n log n) average time. The worst case O(n²) occurs when the pivot is always the smallest or largest — randomising pivot selection avoids this.",
    output: ["[11, 12, 22, 25, 34, 64, 90]"],
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
        event: "assign",
        summary: "arr = [64, 34, 25, 12, 22, 11, 90] — 7 elements to sort.",
        why: "Quick sort works in-place — no extra array. The original array gets rearranged through swaps during partitioning.",
        memory: [{ name: "arr", value: "[64, 34, 25, 12, 22, 11, 90]" }],
        output: [],
      },
      {
        line: 17,
        event: "call",
        summary: "quick_sort(arr, 0, 6) — sort the full array.",
        why: "We pass low=0 and high=6 (last index). The function will call partition to place arr[6]=90 in its correct position, then recurse on the sub-arrays.",
        memory: [{ name: "arr", value: "[64, 34, 25, 12, 22, 11, 90]" }, { name: "low", value: "0" }, { name: "high", value: "6" }],
        output: [],
      },
      {
        line: 2,
        event: "assign",
        summary: "pivot = arr[6] = 90. i = -1. Scanning j from 0 to 5.",
        why: "Choosing arr[high] as pivot is simple. Here pivot=90 is the maximum, so every element is ≤ pivot and will go to the left side. This is the best case for this partition.",
        memory: [{ name: "pivot", value: "90" }, { name: "i", value: "-1" }, { name: "arr", value: "[64, 34, 25, 12, 22, 11, 90]" }],
        output: [],
      },
      {
        line: 4,
        event: "loop",
        summary: "j=0..5: all elements ≤ 90 so each triggers a swap with itself (i advances to 0,1,2,3,4,5).",
        why: "Since all elements are smaller than 90, i increments each iteration and arr[i] swaps with arr[j] — but i==j so nothing actually moves. The partition finds that 90 already belongs at the end.",
        memory: [{ name: "pivot", value: "90" }, { name: "i", value: "5" }, { name: "j", value: "5" }, { name: "arr", value: "[64, 34, 25, 12, 22, 11, 90]" }],
        output: [],
      },
      {
        line: 8,
        event: "swap",
        summary: "arr[i+1] ↔ arr[high]: arr[6] ↔ arr[6]. Pivot 90 stays at index 6. pi=6.",
        why: "The partition index is 6 — pivot 90 is already in its final sorted position. Quick sort now recurses on [64,34,25,12,22,11] (left) and an empty right side.",
        memory: [{ name: "arr", value: "[64, 34, 25, 12, 22, 11, 90]" }, { name: "pi", value: "6" }],
        output: [],
      },
      {
        line: 12,
        event: "call",
        summary: "Recurse left: quick_sort(arr, 0, 5). Now pivot = arr[5] = 11.",
        why: "With pivot=11 (smallest element), all others are larger. 11 will end up at index 0 after partition. This shows worst-case-like behaviour for this particular sub-call.",
        memory: [{ name: "arr", value: "[64, 34, 25, 12, 22, 11, 90]" }, { name: "low", value: "0" }, { name: "high", value: "5" }, { name: "pivot", value: "11" }],
        output: [],
      },
      {
        line: 4,
        event: "compare",
        summary: "Scan j=0..4: no element ≤ 11 (64,34,25,12,22 are all >11). i stays at -1.",
        why: "When pivot is the minimum, nothing swaps in the loop. Then arr[i+1]=arr[0] swaps with arr[high]=arr[5], placing 11 at index 0. This is the worst case scenario.",
        memory: [{ name: "pivot", value: "11" }, { name: "i", value: "-1" }, { name: "arr", value: "[64, 34, 25, 12, 22, 11, 90]" }],
        output: [],
      },
      {
        line: 8,
        event: "swap",
        summary: "arr[0] ↔ arr[5]: 64 and 11 swap. pi=0. Array: [11, 34, 25, 12, 22, 64, 90].",
        why: "11 is now at its final position (index 0). No left sub-array to recurse on. Right sub-array [34,25,12,22,64] continues recursing until sorted.",
        memory: [{ name: "arr", value: "[11, 34, 25, 12, 22, 64, 90]" }, { name: "pi", value: "0" }],
        output: [],
      },
      {
        line: 13,
        event: "call",
        summary: "Recurse: quick_sort continues until all pivots are placed. Array sorts progressively.",
        why: "Each partition call places exactly one element in its final position. With n=7 elements, exactly 7 partition calls are needed. The recursion depth is O(log n) on average.",
        memory: [{ name: "arr", value: "[11, 12, 22, 25, 34, 64, 90]" }],
        output: [],
      },
      {
        line: 18,
        event: "output",
        summary: "print(arr) → [11, 12, 22, 25, 34, 64, 90]. Sorted in-place!",
        why: "Quick sort sorted in-place with O(log n) stack space. Compare to merge sort which needs O(n) extra space. The trade-off: quick sort is cache-friendly and typically 2-3× faster in practice despite the same O(n log n) average complexity.",
        memory: [{ name: "arr", value: "[11, 12, 22, 25, 34, 64, 90]" }],
        output: ["[11, 12, 22, 25, 34, 64, 90]"],
      },
    ],
  },
  // ── Heap Sort ─────────────────────────────────────────────────────────────
  {
    id: "heap-sort",
    title: "Heap Sort",
    level: "Advanced",
    levelColor: "text-rose-400",
    duration: "20 min",
    objective: "Build a max-heap from the array, then extract the maximum element one by one into sorted order.",
    prompt: "Change arr to [4, 10, 3, 5, 1]. Draw the heap tree after building it. Which element is always at index 0?",
    hint: "In a max-heap, arr[0] is always the largest element. After each extraction, heapify restores this property.",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(1)",
    useCases: [
      "Priority queues — always extract the maximum/minimum efficiently",
      "Operating system schedulers use heap-based priority queues",
      "Guaranteed O(n log n) worst case — unlike quicksort",
      "Finding the k largest elements in a stream",
    ],
    approach: "Heap sort has two phases. First, build a max-heap from the array in O(n) by calling heapify from the bottom up (starting at n//2-1). Second, repeatedly swap the root (maximum) with the last element, shrink the heap size by 1, and heapify the root to restore the heap property. Each extraction is O(log n) and we do n extractions, giving O(n log n). Space is O(1) because everything happens in-place.",
    output: ["[5, 6, 7, 11, 12, 13]"],
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
        event: "assign",
        summary: "arr = [12, 11, 13, 5, 6, 7] — 6 elements. n=6.",
        why: "The array represents a binary tree: index i has children at 2i+1 and 2i+2. arr[0]=12 is the root. We need to rearrange this into a valid max-heap where every parent ≥ its children.",
        memory: [{ name: "arr", value: "[12, 11, 13, 5, 6, 7]" }, { name: "n", value: "6" }],
        output: [],
      },
      {
        line: 13,
        event: "loop",
        summary: "Build heap phase: heapify from i=2 down to i=0 (n//2-1 = 2).",
        why: "We start from the last internal node (n//2-1=2) and go up to root (0). Leaf nodes don't need heapifying. This bottom-up approach builds the heap in O(n) — more efficient than n insertions which would be O(n log n).",
        memory: [{ name: "arr", value: "[12, 11, 13, 5, 6, 7]" }, { name: "i", value: "2" }],
        output: [],
      },
      {
        line: 1,
        event: "call",
        summary: "heapify(arr, 6, 2): i=2, arr[2]=13. Children: l=5(arr[5]=7), r=6(out of bounds).",
        why: "heapify checks if a node is larger than its children. Here arr[2]=13 > arr[5]=7, so no swap needed. Node 13 is already in the right place.",
        memory: [{ name: "i", value: "2" }, { name: "largest", value: "2" }, { name: "arr[2]", value: "13" }],
        output: [],
      },
      {
        line: 1,
        event: "call",
        summary: "heapify(arr, 6, 1): i=1, arr[1]=11. Children: l=3(5), r=4(6). largest stays 1.",
        why: "arr[1]=11 > arr[3]=5 and arr[1]=11 > arr[4]=6. No swap needed. Node 11 is the largest in its subtree.",
        memory: [{ name: "i", value: "1" }, { name: "largest", value: "1" }, { name: "arr", value: "[12, 11, 13, 5, 6, 7]" }],
        output: [],
      },
      {
        line: 1,
        event: "call",
        summary: "heapify(arr, 6, 0): i=0, arr[0]=12. Children: l=1(11), r=2(13). largest=2!",
        why: "arr[2]=13 > arr[0]=12, so largest=2. We swap arr[0] and arr[2]. Now 13 is the root — the max-heap property is satisfied at the root. Array becomes [13, 11, 12, 5, 6, 7].",
        memory: [{ name: "i", value: "0" }, { name: "largest", value: "2" }, { name: "arr", value: "[13, 11, 12, 5, 6, 7]" }],
        output: [],
      },
      {
        line: 15,
        event: "loop",
        summary: "Extract phase: i=5. Swap arr[0]=13 with arr[5]=7. Heap size shrinks to 5.",
        why: "The root of a max-heap is always the maximum. Swapping it to the end puts it in its final sorted position. We then heapify the remaining n-1 elements to find the next maximum.",
        memory: [{ name: "arr", value: "[7, 11, 12, 5, 6, 13]" }, { name: "i", value: "5" }],
        output: [],
      },
      {
        line: 17,
        event: "call",
        summary: "heapify(arr, 5, 0): restore heap for indices 0-4. 12 bubbles to root.",
        why: "After removing 13 from the root, 7 is at the top. heapify sifts it down while 12 (the new max among remaining elements) rises to the root. Array: [12, 11, 7, 5, 6, 13].",
        memory: [{ name: "arr", value: "[12, 11, 7, 5, 6, 13]" }, { name: "heap size", value: "5" }],
        output: [],
      },
      {
        line: 16,
        event: "swap",
        summary: "i=4: Swap arr[0]=12 with arr[4]=6. Extract 12 to its sorted position.",
        why: "12 is now at index 4 — its final position. We continue extracting. Each extraction is O(log n) because heapify must sift down at most log n levels. After all extractions: sorted ascending.",
        memory: [{ name: "arr", value: "[6, 11, 7, 5, 12, 13]" }, { name: "i", value: "4" }],
        output: [],
      },
      {
        line: 20,
        event: "output",
        summary: "print(arr) → [5, 6, 7, 11, 12, 13]. Heap sort complete!",
        why: "Heap sort achieved O(n log n) with O(1) extra space — better space complexity than merge sort's O(n). The trade-off: heap sort is not cache-friendly (jumps around memory) so quicksort is usually faster in practice despite worse worst-case.",
        memory: [{ name: "arr", value: "[5, 6, 7, 11, 12, 13]" }],
        output: ["[5, 6, 7, 11, 12, 13]"],
      },
    ],
  },
  // ── BFS ───────────────────────────────────────────────────────────────────
  {
    id: "bfs",
    title: "Breadth-First Search",
    level: "Advanced",
    levelColor: "text-rose-400",
    duration: "18 min",
    objective: "Explore a graph level by level using a queue. BFS finds shortest paths in unweighted graphs.",
    prompt: "Change the start node to 0. What order are nodes visited? How does BFS guarantee the shortest path?",
    hint: "BFS visits all neighbors at distance 1 before distance 2. The first time you reach a node is always via the shortest path.",
    timeComplexity: "O(V + E)",
    spaceComplexity: "O(V)",
    useCases: [
      "Shortest path in unweighted graphs (GPS routing on simple maps)",
      "Web crawlers explore links level by level",
      "Social network degree of separation (6 degrees of Kevin Bacon)",
      "Peer-to-peer network discovery (BitTorrent node lookup)",
    ],
    approach: "BFS uses a queue (FIFO) to explore the graph level by level. Start by enqueuing the start node and marking it visited. At each step, dequeue a node, process it, then enqueue all unvisited neighbors and mark them visited. Marking as visited when enqueuing (not dequeuing) is critical — it prevents adding the same node to the queue multiple times, keeping time complexity O(V+E). The result visits nodes in order of increasing distance from the start.",
    output: ["[2, 0, 3, 1]"],
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
        event: "assign",
        summary: "graph defined: 4 nodes (0-3), directed edges. Starting BFS from node 2.",
        why: "The graph is represented as an adjacency list — a dict mapping each node to its list of neighbors. This representation is O(V+E) space and makes neighbor lookup O(degree), which is efficient for sparse graphs.",
        memory: [{ name: "graph", value: "{0:[1,2], 1:[2], 2:[0,3], 3:[3]}" }, { name: "start", value: "2" }],
        output: [],
      },
      {
        line: 4,
        event: "assign",
        summary: "visited = {2}, queue = deque([2]), order = [].",
        why: "We initialise with start=2 already in visited. This prevents revisiting it when we see it as a neighbor of node 0. Using a set for visited gives O(1) lookup — much faster than a list's O(n) search.",
        memory: [{ name: "visited", value: "{2}" }, { name: "queue", value: "deque([2])" }, { name: "order", value: "[]" }],
        output: [],
      },
      {
        line: 8,
        event: "loop",
        summary: "Iteration 1: dequeue node 2. order=[2]. Neighbors of 2: [0, 3].",
        why: "queue.popleft() is O(1) with deque (unlike list.pop(0) which is O(n)). This is why we use collections.deque not a plain list for BFS queues.",
        memory: [{ name: "node", value: "2" }, { name: "visited", value: "{2}" }, { name: "order", value: "[2]" }, { name: "queue", value: "deque([])" }],
        output: [],
      },
      {
        line: 11,
        event: "branch",
        summary: "Neighbor 0 not visited → add to visited and queue. Neighbor 3 same.",
        why: "We mark neighbors as visited WHEN ENQUEUING, not when dequeuing. This prevents duplicate entries in the queue. If we marked on dequeue, both 2 and 1 could enqueue node 2's neighbor before it's processed.",
        memory: [{ name: "visited", value: "{2, 0, 3}" }, { name: "queue", value: "deque([0, 3])" }, { name: "order", value: "[2]" }],
        output: [],
      },
      {
        line: 8,
        event: "loop",
        summary: "Iteration 2: dequeue node 0. order=[2,0]. Neighbors of 0: [1, 2].",
        why: "Node 0 was enqueued when we processed node 2's neighbors. BFS processes nodes in the exact order they were enqueued — FIFO guarantees level-by-level traversal.",
        memory: [{ name: "node", value: "0" }, { name: "order", value: "[2, 0]" }, { name: "queue", value: "deque([3])" }],
        output: [],
      },
      {
        line: 11,
        event: "branch",
        summary: "Neighbor 1: not visited → enqueue. Neighbor 2: already visited → skip.",
        why: "Node 2 is already in visited, so we skip it. This is the cycle detection mechanism of BFS. Without the visited set, we would loop forever on the 2→0→2 cycle.",
        memory: [{ name: "visited", value: "{0, 1, 2, 3}" }, { name: "queue", value: "deque([3, 1])" }, { name: "order", value: "[2, 0]" }],
        output: [],
      },
      {
        line: 8,
        event: "loop",
        summary: "Iteration 3: dequeue node 3. order=[2,0,3]. Node 3's neighbor is itself — already visited.",
        why: "Node 3 has a self-loop (3:[3]). Since 3 is already in visited, the self-loop doesn't cause infinite recursion. BFS handles self-loops and cycles gracefully.",
        memory: [{ name: "node", value: "3" }, { name: "order", value: "[2, 0, 3]" }, { name: "queue", value: "deque([1])" }],
        output: [],
      },
      {
        line: 8,
        event: "loop",
        summary: "Iteration 4: dequeue node 1. order=[2,0,3,1]. Neighbor 2 already visited. Queue empty.",
        why: "All 4 nodes have been visited. BFS found node 1 at distance 2 from start (2→0→1). This is the shortest path — BFS guarantees this because it explores all distance-1 nodes before distance-2 nodes.",
        memory: [{ name: "node", value: "1" }, { name: "order", value: "[2, 0, 3, 1]" }, { name: "queue", value: "deque([])" }],
        output: [],
      },
      {
        line: 17,
        event: "output",
        summary: "result = [2, 0, 3, 1]. BFS traversal order from node 2.",
        why: "Total work: each node dequeued once (V operations) and each edge examined once (E operations) = O(V+E). Space: O(V) for the queue and visited set. This is optimal — you must examine every edge at least once to guarantee shortest paths.",
        memory: [{ name: "result", value: "[2, 0, 3, 1]" }],
        output: ["[2, 0, 3, 1]"],
      },
    ],
  },
  // ── DFS ───────────────────────────────────────────────────────────────────
  {
    id: "dfs",
    title: "Depth-First Search",
    level: "Advanced",
    levelColor: "text-rose-400",
    duration: "18 min",
    objective: "Explore as deep as possible before backtracking. Watch the call stack grow with each recursive step.",
    prompt: "Change the start node to 2. How does the traversal order change? What happens if you remove node 3 from the graph?",
    hint: "DFS follows one path to its end before backtracking. The call stack depth equals the depth of the current path.",
    timeComplexity: "O(V + E)",
    spaceComplexity: "O(V)",
    useCases: [
      "Detecting cycles in a graph (used in deadlock detection)",
      "Topological sorting of dependencies (build systems, package managers)",
      "Solving mazes and puzzles (backtracking)",
      "Finding connected components and strongly connected components (Tarjan's algorithm)",
    ],
    approach: "DFS uses the call stack (recursion) to explore as far as possible along each branch before backtracking. We add the current node to visited before recursing on its neighbors — this prevents infinite loops on cycles. The recursive structure mirrors the tree structure of the DFS traversal. Each node is visited exactly once and each edge examined once, giving O(V+E) time. Stack space is O(V) in the worst case (a path graph where DFS goes to depth V).",
    output: ["[0, 1, 3, 2]"],
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
        event: "assign",
        summary: "graph = {0:[1,2], 1:[0,3], 2:[0], 3:[1]}. Start DFS from node 0.",
        why: "Undirected graph with 4 nodes and 3 edges (0-1, 0-2, 1-3). Represented as adjacency list with each edge appearing twice (both directions). DFS will visit all 4 nodes starting from 0.",
        memory: [{ name: "graph", value: "{0:[1,2], 1:[0,3], 2:[0], 3:[1]}" }],
        output: [],
      },
      {
        line: 1,
        event: "call",
        summary: "dfs(graph, 0, None). visited=None triggers initialization to empty set.",
        why: "Using visited=None as default (not visited=set()) is important! Mutable default arguments in Python are shared across calls. With set(), all calls would share the same set — a classic Python gotcha.",
        memory: [{ name: "node", value: "0" }, { name: "visited", value: "set()" }, { name: "order", value: "[0]" }],
        output: [],
      },
      {
        line: 4,
        event: "assign",
        summary: "visited.add(0). order=[0]. Now loop over neighbors [1, 2].",
        why: "We mark node 0 as visited BEFORE recursing. This prevents an infinite loop when neighbor 1 tries to visit node 0 back. The visited set is shared across all recursive calls via the visited parameter.",
        memory: [{ name: "node", value: "0" }, { name: "visited", value: "{0}" }, { name: "order", value: "[0]" }],
        output: [],
      },
      {
        line: 6,
        event: "branch",
        summary: "Neighbor 1 not visited. Recurse: dfs(graph, 1, {0}).",
        why: "DFS goes as deep as possible — it immediately recurses on the first neighbor (1) rather than enqueuing all neighbors like BFS. The call stack now has dfs(0) waiting for dfs(1) to return.",
        memory: [{ name: "node", value: "1" }, { name: "visited", value: "{0, 1}" }, { name: "order", value: "[1]" }],
        output: [],
      },
      {
        line: 6,
        event: "branch",
        summary: "dfs(1): neighbor 0 is already visited. Recurse on neighbor 3: dfs(graph, 3, {0,1}).",
        why: "Node 0 is in visited, so we skip it (avoiding backtrack to parent). Node 3 is unvisited — DFS dives deeper. Stack depth is now 3: dfs(0) → dfs(1) → dfs(3).",
        memory: [{ name: "node", value: "3" }, { name: "visited", value: "{0, 1, 3}" }, { name: "call stack depth", value: "3" }],
        output: [],
      },
      {
        line: 5,
        event: "return",
        summary: "dfs(3): only neighbor is 1, already visited. Returns [3]. Backtrack to dfs(1).",
        why: "Node 3 is a leaf in the DFS tree — no unvisited neighbors. The function returns [3] and the call stack unwinds. This is the 'backtracking' step — DFS backtracks when it hits a dead end.",
        memory: [{ name: "node", value: "3" }, { name: "order (returned)", value: "[3]" }, { name: "visited", value: "{0, 1, 3}" }],
        output: [],
      },
      {
        line: 7,
        event: "return",
        summary: "dfs(1) combines: order=[1]+[3]=[1,3]. No more unvisited neighbors. Backtrack to dfs(0).",
        why: "dfs(1) finishes after exploring the entire subtree rooted at 1 (which included node 3). It returns [1, 3] to dfs(0), which adds it to its own order list.",
        memory: [{ name: "node", value: "1" }, { name: "order (returned)", value: "[1, 3]" }, { name: "visited", value: "{0, 1, 3}" }],
        output: [],
      },
      {
        line: 6,
        event: "branch",
        summary: "Back in dfs(0): now process neighbor 2. Recurse: dfs(graph, 2, {0,1,3}).",
        why: "After the dfs(1) subtree is fully explored, dfs(0) moves to its next neighbor: 2. DFS explores one full branch before moving to the next.",
        memory: [{ name: "node", value: "2" }, { name: "visited", value: "{0, 1, 2, 3}" }, { name: "order (returned)", value: "[2]" }],
        output: [],
      },
      {
        line: 11,
        event: "output",
        summary: "result = [0, 1, 3, 2]. DFS visited in order: 0 → 1 → 3 (deep) → backtrack → 2.",
        why: "DFS order: 0,1,3,2. BFS from 0 would give: 0,1,2,3. Same nodes, different order. DFS goes deep (1→3) before exploring node 2. This traversal order is the foundation of topological sort and cycle detection.",
        memory: [{ name: "result", value: "[0, 1, 3, 2]" }],
        output: ["[0, 1, 3, 2]"],
      },
    ],
  },
  // ── Binary Tree Traversal ─────────────────────────────────────────────────
  {
    id: "binary-tree-traversal",
    title: "Binary Tree Traversal",
    level: "Advanced",
    levelColor: "text-rose-400",
    duration: "15 min",
    objective: "See how in-order traversal visits a binary search tree in sorted order. Understand left-root-right recursion.",
    prompt: "Add root.right.left = Node(5) and root.right.right = Node(7). What does the in-order result become?",
    hint: "In-order visits left subtree, then root, then right subtree. For a BST this always gives sorted ascending order.",
    timeComplexity: "O(n)",
    spaceComplexity: "O(h) — h = tree height",
    useCases: [
      "In-order traversal of a BST produces sorted output — used in tree-sort",
      "Expression tree evaluation (post-order gives Reverse Polish Notation)",
      "Directory tree traversal (pre-order to print file paths)",
      "Serialisation and deserialisation of trees for storage/transmission",
    ],
    approach: "Binary tree traversal visits every node exactly once. In-order (Left→Root→Right) visits the left subtree recursively, then the current node, then the right subtree. For a Binary Search Tree (BST), this produces sorted ascending output because all left subtree values are smaller and all right subtree values are larger. The recursion depth equals the tree height h: O(log n) for balanced trees, O(n) for degenerate (linked-list shaped) trees.",
    output: ["[1, 2, 3, 4, 6]"],
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
        event: "assign",
        summary: "Build BST: root=4, left=2, right=6, 2.left=1, 2.right=3.",
        why: "This is a valid BST: all left subtree values (1,2,3) < root (4) < right subtree values (6). In-order traversal of any BST always produces sorted ascending output — that's the key property we're demonstrating.",
        memory: [{ name: "root.val", value: "4" }, { name: "root.left.val", value: "2" }, { name: "root.right.val", value: "6" }],
        output: [],
      },
      {
        line: 7,
        event: "call",
        summary: "inorder(root=4): go left first. Call inorder(node.left = 2).",
        why: "In-order means: Left → Root → Right. We must fully explore the left subtree before processing the current node. The recursion naturally handles this — we don't return to node 4 until node 2's entire subtree is processed.",
        memory: [{ name: "current node", value: "4" }, { name: "result", value: "[]" }],
        output: [],
      },
      {
        line: 7,
        event: "call",
        summary: "inorder(node=2): go left. Call inorder(node.left = 1).",
        why: "Still following Left → Root → Right. From node 2, we first go to its left child (1) before appending 2 to result. Call stack: inorder(4) → inorder(2) → inorder(1).",
        memory: [{ name: "current node", value: "2" }, { name: "result", value: "[]" }],
        output: [],
      },
      {
        line: 9,
        event: "assign",
        summary: "inorder(node=1): left is None → base case. Append 1 to result. result=[1].",
        why: "Node 1 is a leaf. Its left child is None, so the base case `if node` is False and we return immediately. Then we append node.val=1. 1 is correctly the first element — it's the leftmost (smallest) node in the BST.",
        memory: [{ name: "current node", value: "1" }, { name: "result", value: "[1]" }],
        output: [],
      },
      {
        line: 9,
        event: "assign",
        summary: "Back in inorder(2): append 2. result=[1,2]. Then recurse right → inorder(3).",
        why: "After fully processing node 1 (left subtree of 2), we append node 2's value. Now result=[1,2]. Then we go to node 2's right child (3). In-order for the subtree rooted at 2: [1, 2, 3].",
        memory: [{ name: "current node", value: "2" }, { name: "result", value: "[1, 2]" }],
        output: [],
      },
      {
        line: 9,
        event: "assign",
        summary: "inorder(node=3): leaf node. Append 3. result=[1,2,3]. Backtrack to inorder(4).",
        why: "Node 3 is a leaf (both children None). We append 3 and return. The entire left subtree of root (4) has been processed: [1, 2, 3]. Now we unwind back to inorder(4).",
        memory: [{ name: "current node", value: "3" }, { name: "result", value: "[1, 2, 3]" }],
        output: [],
      },
      {
        line: 9,
        event: "assign",
        summary: "Back in inorder(4): append 4. result=[1,2,3,4]. Then recurse right → inorder(6).",
        why: "Root value 4 is appended after its entire left subtree. This is the 'Root' step of Left→Root→Right. result=[1,2,3,4] so far — already sorted! Now we process the right subtree.",
        memory: [{ name: "current node", value: "4" }, { name: "result", value: "[1, 2, 3, 4]" }],
        output: [],
      },
      {
        line: 9,
        event: "assign",
        summary: "inorder(node=6): leaf node. Append 6. result=[1,2,3,4,6]. Done!",
        why: "Node 6's children are both None (base case). Append 6. The complete in-order traversal is [1,2,3,4,6] — perfectly sorted! This works because BST property guarantees left<root<right at every node.",
        memory: [{ name: "current node", value: "6" }, { name: "result", value: "[1, 2, 3, 4, 6]" }],
        output: [],
      },
      {
        line: 18,
        event: "output",
        summary: "print(result) → [1, 2, 3, 4, 6]. In-order BST traversal = sorted output!",
        why: "O(n) time — every node visited exactly once. O(h) call stack space where h is tree height. For a balanced BST h=O(log n). Warning: the result=[] default argument is a Python gotcha — mutable defaults are shared between calls. In production code, use result=None and initialise inside the function.",
        memory: [{ name: "result", value: "[1, 2, 3, 4, 6]" }],
        output: ["[1, 2, 3, 4, 6]"],
      },
    ],
  },
  // ── Fibonacci (Recursive) ─────────────────────────────────────────────────
  {
    id: "fibonacci-recursive",
    title: "Fibonacci (Recursive)",
    level: "Advanced",
    levelColor: "text-rose-400",
    duration: "15 min",
    objective: "See the call tree fan out exponentially without memoization, then watch memoization collapse it to linear.",
    prompt: "Increase fib(8) to fib(12). Count the total function calls. Now try fib_memo(30) — instant! Why?",
    hint: "Naive fib(n) makes 2^n calls. Memoized fib_memo(n) makes exactly 2n-1 calls — once for each unique subproblem.",
    timeComplexity: "O(2ⁿ) naive / O(n) memoized",
    spaceComplexity: "O(n)",
    useCases: [
      "Dynamic programming pattern — memoize overlapping subproblems",
      "Fibonacci numbers appear in nature (spiral patterns, golden ratio)",
      "Understanding exponential vs polynomial time complexity",
      "Template for top-down DP: LCS, edit distance, knapsack",
    ],
    approach: "Naive recursive Fibonacci recalculates the same subproblems exponentially many times. fib(5) calls fib(4) and fib(3). fib(4) also calls fib(3) — that's a duplicate. The call tree has 2^n leaves, making it O(2^n). Memoization stores each result in a dict the first time it's computed. On subsequent calls, we return the cached result in O(1). This reduces the call tree from an exponential bush to a linear chain, making it O(n) time and O(n) space.",
    output: ["Naive: 21", "Memo: 55"],
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
        event: "call",
        summary: "fib(8): naive recursion. Will make ~2^8 = 256 function calls.",
        why: "Naive fib has no memory of previous results. fib(8) calls fib(7) and fib(6). fib(7) calls fib(6) again. fib(6) is computed many times — this exponential blowup makes it impractical for n > 40.",
        memory: [{ name: "n", value: "8" }, { name: "call count (approx)", value: "~256" }],
        output: [],
      },
      {
        line: 2,
        event: "branch",
        summary: "Base case: if n <= 1, return n. fib(0)=0, fib(1)=1.",
        why: "The base cases stop the recursion. Fibonacci is defined as F(0)=0, F(1)=1. Without base cases the recursion would never terminate. These are reached at the leaves of the call tree.",
        memory: [{ name: "n", value: "1" }, { name: "return value", value: "1" }],
        output: [],
      },
      {
        line: 4,
        event: "return",
        summary: "fib(8) = fib(7) + fib(6). Each sub-call fans out into two more calls recursively.",
        why: "Each call spawns TWO more calls (except base cases). Call tree has height 8 and up to 2^8=256 nodes. The tree is not balanced — fib(n-1) subtree is deeper than fib(n-2). Total calls = 2*fib(n+1)-1 ≈ 2^n.",
        memory: [{ name: "fib(8)", value: "21" }, { name: "fib(7)", value: "13" }, { name: "fib(6)", value: "8" }],
        output: [],
      },
      {
        line: 14,
        event: "output",
        summary: 'print("Naive:", fib(8)) → Naive: 21. Correct, but extremely slow for large n.',
        why: "fib(8)=21 is correct. But for fib(40) the naive version makes ~2.7 billion calls! The problem is overlapping subproblems — fib(6) is computed in both the fib(7) branch and the fib(6) branch. Memoization solves this.",
        memory: [{ name: "fib(8)", value: "21" }],
        output: ["Naive: 21"],
      },
      {
        line: 6,
        event: "call",
        summary: "fib_memo(10, {}): memoized version. memo={} starts empty.",
        why: "memo={} as a default argument is intentionally shared across calls (a Python feature/gotcha). Here it acts as a persistent cache. Each unique n value will be computed exactly once and stored in memo.",
        memory: [{ name: "n", value: "10" }, { name: "memo", value: "{}" }],
        output: [],
      },
      {
        line: 7,
        event: "branch",
        summary: "n=10 not in memo → proceed to compute. Recurse: fib_memo(9) + fib_memo(8).",
        why: "First call for each n: cache miss. We compute and store the result. The recursion still goes deep (n, n-1, n-2, ... 1, 0) but each level only goes DOWN the fib(n-1) branch — fib(n-2) is already cached!",
        memory: [{ name: "n", value: "10" }, { name: "memo", value: "{}" }, { name: "cache miss", value: "true" }],
        output: [],
      },
      {
        line: 11,
        event: "assign",
        summary: "Computing down: fib_memo(2)=1, fib_memo(3)=2, fib_memo(4)=3... memo fills up.",
        why: "With memoization, we compute fib(0) through fib(10) in sequence, caching each result. When fib_memo(10) later needs fib_memo(8), it's already in memo — O(1) lookup instead of O(2^8) recursive calls.",
        memory: [{ name: "memo", value: "{0:0, 1:1, 2:1, 3:2, 4:3, 5:5}" }],
        output: [],
      },
      {
        line: 7,
        event: "branch",
        summary: "Cache hit! fib_memo(8) needed by fib_memo(10) found in memo instantly.",
        why: "memo[8]=21 was computed when calculating fib_memo(9). Now fib_memo(10) gets it in O(1). Without memoization this would recompute 2^8=256 calls. With memo: O(1). This is the essence of dynamic programming.",
        memory: [{ name: "memo", value: "{0:0,1:1,2:1,3:2,4:3,5:5,6:8,7:13,8:21,9:34}" }, { name: "cache hit for n=8", value: "21" }],
        output: [],
      },
      {
        line: 15,
        event: "output",
        summary: 'print("Memo:", fib_memo(10)) → Memo: 55. Only 19 calls made (2n-1)!',
        why: "fib_memo(10)=55 computed with only 2×10-1=19 function calls vs 177 for naive fib(10). The memoized version is O(n) time and O(n) space. For fib(100) it's 199 calls vs 10^21 — the difference between instant and longer than the age of the universe.",
        memory: [{ name: "fib_memo(10)", value: "55" }, { name: "total calls", value: "19" }],
        output: ["Naive: 21", "Memo: 55"],
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Backward-compat exports
// ─────────────────────────────────────────────────────────────────────────────

export const starterCode = playgroundLessons[0].starterCode;
export const executionFrames = playgroundLessons[0].executionFrames;
