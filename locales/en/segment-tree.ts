import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Build a segment tree for [1, 3, 5, 7, 9, 11]. Query sum of index 1–3, then update index 2 to 10.',
  hint: 'Build bottom-up. Query sums by recursively splitting the range. Update propagates upward.',
  explanation: {
    simple: {
      overview: 'A segment tree answers range queries (sum, min, max) and handles point or range updates in O(log n).',
      analogy: 'A corporate org chart: each manager stores the summary (sum/max/min) of their entire team.',
      steps: [
          'Build: O(n) — each node stores aggregate of its range.',
          'Query range [l,r]: recurse down, combine segments that fit inside [l,r].',
          'Point update: O(log n) — update leaf, recompute ancestors.',
          'Range update with lazy propagation: defer updates, apply when needed.',
      ],
      visual: 'Node for [0,7] covers all 8 elements; node for [0,3] covers left half; leaf [2,2] covers arr[2].',
      commonMistakes: [
          'Off-by-one in range boundaries (inclusive vs exclusive).',
          'Forgetting to propagate lazy tags before querying children.',
      ],
      practice: [
          'Build a sum segment tree; query sum of [l,r].',
          'Add lazy range-add update support.',
      ],
      timeComplexity: 'O(n) build, O(log n) query/update',
      spaceComplexity: 'O(4n) array-based',
    },
    deepDive: {
      overview: 'Persistent and 2D segment trees support versioned history and 2D range queries.',
      analogy: 'Persistent tree: each update creates a new root pointing to shared unchanged subtrees.',
      steps: [
          'Persistent: create at most O(log n) new nodes per update; old roots remain intact.',
          'Merge sort tree: each node stores sorted list → O(log²n) kth-element range query.',
          '2D segment tree: segment tree of segment trees → O(log²n) 2D range query.',
          'Fenwick (BIT) is simpler for prefix sums: O(n) build, O(log n) update/query with 1/16 the constant.',
      ],
      visual: 'Persistent: versions 0..k share subtrees; query version i while updating to version i+1.',
      commonMistakes: [
          'Not realizing a Fenwick tree suffices for prefix-sum queries (segment tree is overkill).',
          'Persistent segment tree memory: O(n + q·log n) nodes — pre-allocate to avoid TLE.',
      ],
      practice: [
          'Implement persistent segment tree for range kth minimum.',
          'Compare segment tree vs Fenwick for range sum performance.',
      ],
    },
  },
};

export default overlay;
