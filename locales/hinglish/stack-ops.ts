import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'List se stack implement karo. push, pop, peek, is_empty add karo. Balanced brackets check ke liye use karo.',
  hint: 'Opens push karo, closing brackets ko pop+match karo. Empty ya mismatch par turant False return karo.',
  explanation: {
    simple: {
      overview: 'Stack LIFO structure hai — last in, first out. Python list se easily implement hota hai.',
      analogy: 'Jaise plate stack — upar se plate lagate ho, upar se hi uthate ho.',
      steps: [
        'stack = [] se empty stack banao',
        'stack.append(x) se push karo',
        'stack.pop() se pop karo (last element)',
        'stack[-1] se peek karo bina pop kiye',
      ],
      visual: `stack = []
stack.append(1)  # [1]
stack.append(2)  # [1, 2]
stack.pop()      # 2, stack=[1]`,
      commonMistakes: [
        'Empty stack se pop() — IndexError',
        'List ka front (index 0) use karna — O(n) shift',
        'stack[-1] peek hai, stack.pop() remove karta hai',
      ],
      practice: [
        'Valid parentheses check karo stack se',
        'Undo functionality stack se simulate karo',
      ],
    },
    deepDive: {
      overview: 'collections.deque stack ke liye more efficient hai — O(1) guaranteed amortized appendleft/popleft.',
      steps: [
        'list.append/pop O(1) amortized — practical stack',
        'deque more memory efficient for large stacks',
        'Monotonic stack: decreasing/increasing order maintain karo',
        'Call stack simulation se iterative DFS/tree traversal',
      ],
      commonMistakes: [
        'deque ko random access ke liye use nahi karna chahiye O(n)',
        'Recursion stack aur explicit stack mein confusion',
      ],
      practice: [
        'Monotonic stack se next greater element nikalo',
        'Iterative inorder traversal stack se karo',
      ],
    },
  },
};

export default overlay;
