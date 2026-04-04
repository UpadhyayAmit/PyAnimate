import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Binary tree का in-order, pre-order, और post-order traversal implement करें।',
  hint: 'यहाँ recursion natural है। In-order: left→node→right। Pre-order: node→left→right। Post-order: left→right→node।',
  explanation: {
    simple: {
      overview: 'Binary tree traversal: pre-order (root-left-right), in-order (left-root-right), post-order (left-right-root) teen recursive methods.',
      analogy: 'Jaise family tree padhna—in-order ascending descendants deta hai, pre-order ancestors pehle, post-order children pehle.',
      steps: [
        'Pre-order: node process karo→left→right',
        'In-order: left→node process karo→right',
        'Post-order: left→right→node process karo',
        'Saare methods mein None check base case',
      ],
      visual: `     4
    / \\
   2   5
  / \\
 1   3
In-order: 1,2,3,4,5
Pre-order: 4,2,1,3,5
Post-order: 1,3,2,5,4`,
      commonMistakes: [
        'Teen traversal orders ka confusion',
        'None check base case bhool jana',
      ],
      practice: [
        'Stack se iterative in-order traversal implement karo',
        'Recursive aur iterative traversal compare karo',
      ],
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(h) h tree height'
    },
    deepDive: {
      overview: 'Morris traversal O(1) space, BFS level-order deque se, traversals se tree reconstruct ho sakta hai.',
      steps: [
        'Morris traversal: threaded pointers O(1) space',
        'Iterative in-order: stack + pointer',
        'Pre-order + in-order se tree reconstruct ho sakta hai',
        'Zigzag level-order: deque alternating directions',
      ],
      commonMistakes: [
        'Sirf pre-order + in-order se unique reconstruction nahi (in-order + post-order chahiye)',
        'Morris traversal mein tree galti se modify karna',
      ],
      practice: [
        'Morris traversal implement karo',
        'Binary tree maximum path sum nikalo',
      ],
    },
  },
};

export default overlay;
