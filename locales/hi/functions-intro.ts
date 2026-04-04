import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'greet(name, greeting=\'Hello\') function लिखें जो formatted greeting string return करे।',
  hint: 'Default parameters required ones के बाद आते हैं। f-string से formatted string return करें।',
  explanation: {
    simple: {
      overview: 'Function ek reusable code block hai jo specific task karta hai, def se define hota hai, naam se call hota hai.',
      analogy: 'Function recipe ki tarah hai—ek baar define karo, baar baar use karo.',
      steps: [
        'def function_name(params): likho',
        'Indented function body likho',
        'return se value return karo',
        'function_name(args) se call karo',
      ],
      visual: `def greet(name):
    return f"Namaste, {name}!"

print(greet("Rahul"))  # Namaste, Rahul!`,
      commonMistakes: [
        'return bhool jana → function None return karta hai',
        'Parameters (define) aur arguments (call) ka confusion',
        'Define se pehle call karna',
      ],
      practice: [
        'Rectangle area calculate karne wala function likho',
        'Prime number check karne wala function likho',
      ],
    },
    deepDive: {
      overview: 'Python functions first-class objects hain, default parameters, *args, **kwargs aur closures support karte hain.',
      steps: [
        'Default parameters definition time par ek baar evaluate hote hain',
        '*args variable positional arguments collect karta hai',
        '**kwargs keyword arguments collect karta hai',
        'Closure outer scope variables capture karta hai',
      ],
      commonMistakes: [
        'Mutable object (jaise list) ko default value banana',
        'global keyword ke bina outer variable modify karna',
      ],
      practice: [
        '*args se arbitrary numbers sum karne wala function likho',
        'Counter return karne wala closure likho',
      ],
    },
  },
};

export default overlay;
