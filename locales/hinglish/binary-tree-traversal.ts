import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Binary tree ka in-order, pre-order, aur post-order traversal implement karo.',
  hint: 'Yahaan recursion natural hai. In-order: left→node→right. Pre-order: node→left→right.',
  explanation: {
    simple: {
      overview: 'Binary tree ke nodes visit karna — inorder (left-root-right), preorder (root-left-right), postorder (left-right-root).',
      analogy: 'Jaise family tree visit karna — inorder: junior se senior, preorder: boss pehle, postorder: children pehle.',
      steps: [
        'Inorder: left -> root -> right (BST mein sorted order!)',
        'Preorder: root -> left -> right (tree copy/serialize)',
        'Postorder: left -> right -> root (tree delete, expression eval)',
        'Level order: BFS se',
      ],
      visual: `      1
    /   \\
   2     3
  / \\
 4   5
Inorder: 4,2,5,1,3
Preorder: 1,2,4,5,3
Postorder: 4,5,2,3,1`,
      commonMistakes: [
        'Inorder/preorder/postorder ka order yaad karna',
        'Null/None nodes handle karna',
        'Iterative vs recursive approach',
      ],
      practice: [
        'Teenon traversals recursive se implement karo',
        'Inorder traversal iterative stack se karo',
      ],
    },
    deepDive: {
      overview: 'Morris traversal O(1) space mein inorder deta hai — threading tree pointers use karta hai.',
      steps: [
        'Recursive O(h) call stack, iterative O(h) explicit stack',
        'Morris traversal O(n) time O(1) space',
        'Level order BFS approach O(n) time O(w) space (w=max width)',
        'Serialize/deserialize: preorder + null markers',
      ],
      commonMistakes: [
        'Morris traversal tree temporarily modify karta hai — side effects',
        'Level order BFS level boundaries track karna',
      ],
      practice: [
        'Morris inorder traversal implement karo',
        'Binary tree serialize aur deserialize karo',
      ],
    },
  },
};

export default overlay;
