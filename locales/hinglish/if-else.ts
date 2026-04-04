import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'Ek program likho jo check kare ki number positive, negative ya zero hai.',
  hint: 'if/elif/else use karo. Input value badal ke har branch test karo.',
  explanation: {
    simple: {
      overview: 'if-else se program ko conditions ke hisaab se decisions lene dete hain — yani branching.',
      analogy: 'Jaise traffic signal — green pe chalte hain, red pe rukte hain, yellow pe dhyan dete hain.',
      steps: [
        'if condition: likho',
        'Condition True hone par wala code add karo',
        'elif se aur conditions chain karo',
        'else se default case handle karo',
      ],
      visual: `if x > 0:
    print("Positive")
elif x == 0:
    print("Zero")
else:
    print("Negative")`,
      commonMistakes: [
        'Condition ke baad colon (:) bhool jaana',
        'Indentation galat karna',
        'Comparison mein = likhna (== chahiye tha)',
      ],
      practice: [
        'Temperature ko thanda/comfortable/garam classify karo',
        'Grade checker if-elif-else se banao',
      ],
    },
    deepDive: {
      overview: 'Python mein if-else truthy/falsy evaluation use karta hai, ternary expression bhi available hai.',
      steps: [
        'Falsy values: None, 0, "", [], {}, set()',
        'Ternary: value1 if condition else value2',
        'any()/all() se sequence truthiness check karo',
        'and/or/not se compound conditions banao',
      ],
      commonMistakes: [
        'Empty containers ke falsy hone ko ignore karna',
        'True/False se seedha compare karna',
      ],
      practice: [
        'Ternary expression se absolute value nikalo',
        'Alag-alag types ki truthy values test karo',
      ],
    },
  },
};

export default overlay;
