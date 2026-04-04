import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'greet(name, greeting=\'Hello\') function likho jo formatted greeting string return kare.',
  hint: 'Default parameters required ones ke baad aate hain. f-string se formatted string return karo.',
  explanation: {
    simple: {
      overview: 'Functions reusable code blocks hain bhai — ek baar likho, baar baar use karo.',
      analogy: 'Function ek machine ki tarah hai — input do (parameters), processing hogi, output milega (return).',
      steps: [
        'def function_name(parameters): se define karo',
        'Body mein kaam karo',
        'return se value wapas bhejo',
        'function_name(args) se call karo',
      ],
      visual: `def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))  # Hello, Alice!`,
      commonMistakes: [
        'Return statement bhool jaana — None return hoga',
        'Parameters aur arguments ka confusion',
        'Function define hone se pehle call karna',
      ],
      practice: [
        'Area calculate karne wala function banao',
        'Temperature converter function banao (C to F)',
      ],
    },
    deepDive: {
      overview: 'Python mein functions first-class objects hain — assign, pass, return sab ho sakta hai.',
      steps: [
        'Default parameters: def f(x, n=2)',
        '*args se variable positional args',
        '**kwargs se variable keyword args',
        'Closures inner function outer scope access karte hain',
      ],
      commonMistakes: [
        'Mutable default argument: def f(lst=[]) — dangerous!',
        'Global variable modify karne ke liye global keyword chahiye',
        'Recursion depth limit Python mein ~1000 hai',
      ],
      practice: [
        '*args se sum function banao',
        'Closure se counter function banao',
      ],
    },
  },
};

export default overlay;
