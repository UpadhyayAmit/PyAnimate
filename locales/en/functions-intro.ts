import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Write a function greet(name, greeting=\'Hello\') that returns a formatted greeting string.',
  hint: 'Default parameters go after required ones. Return a formatted string with f-string.',
  explanation: {
    simple: {
      overview: 'Functions encapsulate a block of reusable code; call them by name with arguments.',
      analogy: 'A recipe: define it once, use it many times with different ingredients.',
      steps: [
          'def greet(name): defines the function.',
          'return sends a value back to the caller.',
          'Call it: result = greet(\'Alice\').',
          'Default parameters: def greet(name=\'World\'):',
      ],
      visual: 'def → [body stored] → call → args bound → body executes → return value',
      commonMistakes: [
          'Forgetting return; the function returns None implicitly.',
          'Shadowing a built-in (def list(): ...)',
      ],
      practice: [
          'Write a function to compute the area of a circle.',
          'Write a function with default and keyword arguments.',
      ],
      timeComplexity: 'O(body)',
      spaceComplexity: 'O(params + locals)',
    },
    deepDive: {
      overview: 'Functions are first-class objects in Python; they can be passed, returned, and stored.',
      analogy: 'Functions as values: a list of callbacks is just a list of function objects.',
      steps: [
          'def creates a function object and binds it to a name.',
          'Closures capture free variables from enclosing scope.',
          'Decorators are higher-order functions wrapping other functions.',
          '*args collects extra positional args; **kwargs collects keyword args.',
      ],
      visual: 'outer() → closes over x → inner() → returns x+1',
      commonMistakes: [
          'Mutable default argument gotcha: def f(lst=[]): lst.append(1) shares across calls.',
          'Confusing local and global scope without using global keyword.',
      ],
      practice: [
          'Write a decorator that times a function.',
          'Build a simple memoize decorator using a dict.',
      ],
    },
  },
};

export default overlay;
