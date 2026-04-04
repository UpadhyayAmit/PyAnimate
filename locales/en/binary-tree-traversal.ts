import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Implement in-order, pre-order, and post-order traversal of a binary tree. Predict the output before running.',
  hint: 'Recursion is natural here. In-order: left → node → right. Pre-order: node → left → right. Post-order: left → right → node.',
  explanation: {
    simple: {
      overview: 'Traverse every node in a binary tree: in-order (left-root-right), pre-order (root-left-right), post-order (left-right-root).',
      analogy: 'Reading a book: in-order = left chapter, this chapter, right chapter (alphabetical for BST); pre-order = table of contents first.',
      steps: [
          'In-order: traverse(left); visit(root); traverse(right).',
          'Pre-order: visit(root); traverse(left); traverse(right).',
          'Post-order: traverse(left); traverse(right); visit(root).',
          'Level-order (BFS): use a queue.',
      ],
      visual: '    1\n   / \\\n  2   3\nIn: 2,1,3  Pre: 1,2,3  Post: 2,3,1',
      commonMistakes: [
          'Confusing in-order vs pre-order result order.',
          'Forgetting base case: if node is None: return.',
      ],
      practice: [
          'Print BST values in sorted order (use in-order).',
          'Serialize and deserialize a tree using pre-order.',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(h) stack, h = tree height',
    },
    deepDive: {
      overview: 'Iterative traversal using an explicit stack avoids recursion limits and enables Morris traversal (O(1) space).',
      analogy: 'Morris traversal threads null pointers back to the in-order successor, using the tree itself as temporary storage.',
      steps: [
          'Iterative in-order: push nodes left-first, process on pop, then push right subtree.',
          'Morris: find in-order predecessor; if its right is null, thread to current; else restore and visit.',
          'Level-order uses a queue for BFS — process row by row.',
          'Zigzag traversal alternates direction each level using two stacks or a deque flag.',
      ],
      visual: 'Morris: no extra space O(1) — right null pointers used as threads then restored.',
      commonMistakes: [
          'Morris traversal modifies the tree temporarily — not thread-safe.',
          'Forgetting to reverse the deque direction in zigzag at even vs odd levels.',
      ],
      practice: [
          'Implement iterative in-order traversal.',
          'Implement Morris in-order traversal without recursion or stack.',
      ],
    },
  },
};

export default overlay;
