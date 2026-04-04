import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Implement a stack using a list. Add push, pop, peek, is_empty. Use it to check balanced brackets.',
  hint: 'Push opens, pop+match closing brackets. Return False immediately if pop from empty or mismatch.',
  explanation: {
    simple: {
      overview: 'A stack is a Last-In First-Out structure; push adds to the top, pop removes from the top.',
      analogy: 'A stack of plates: always add and remove from the top.',
      steps: [
          'Python list as stack: push = lst.append(x), pop = lst.pop(), peek = lst[-1].',
          'Check empty: not lst or len(lst)==0.',
          'Stack overflow isn\'t an issue in Python (dynamic list).',
      ],
      visual: 'push(1)→[1]; push(2)→[1,2]; pop()→2,[1]; peek→1',
      commonMistakes: [
          'Popping from an empty stack raises IndexError; check before popping.',
          'Using insert(0,x) for push — that\'s a queue (deque) operation.',
      ],
      practice: [
          'Implement a stack-based RPN calculator.',
          'Check balanced parentheses using a stack.',
      ],
      timeComplexity: 'O(1) push/pop/peek',
      spaceComplexity: 'O(n)',
    },
    deepDive: {
      overview: 'Stack is the basis for DFS, expression evaluation, backtracking, and undo/redo systems.',
      analogy: 'Call stack in your CPU: function calls push frames, returns pop them.',
      steps: [
          'DFS iterative: replace call stack with explicit stack — avoids recursion limit.',
          'Expression evaluation: operator-operand stacks handle precedence (Shunting-yard).',
          'Monotonic stack: maintain strictly increasing/decreasing sequence for next-greater-element problems.',
          'Stack with min: maintain a parallel min-stack to get O(1) minimum.',
      ],
      visual: 'Next greater element: for each element, pop stack while top < current — current is next-greater for all popped.',
      commonMistakes: [
          'Monotonic stack popping condition (> vs >=) changes whether equal elements are handled.',
          'Min-stack must push min even when not a new minimum (to pair correctly with pops).',
      ],
      practice: [
          'Solve \'Next Greater Element\' using a monotonic stack.',
          'Implement stack with O(1) min() operation.',
      ],
    },
  },
};

export default overlay;
