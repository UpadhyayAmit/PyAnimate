import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'एक program लिखें जो check करे कि number positive, negative, या zero है।',
  hint: 'if/elif/else use करें। Input value बदलकर हर branch test करें।',
  explanation: {
    simple: {
      overview: 'if-else statements program ko condition ke hisaab se decision lene dete hain.',
      analogy: 'Jaise traffic signal—green par chalte hain, red par rukते hain.',
      steps: [
        'if condition: likho',
        'Condition True hone par execute hone wala code add karo',
        'elif se aur conditions add karo',
        'else se default case handle karo',
      ],
      visual: `if x > 0:
    print("Positive")
elif x == 0:
    print("Zero")
else:
    print("Negative")`,
      commonMistakes: [
        'Condition ke baad colon bhool jana',
        'Indentation galti',
        'Comparison mein = use karna (== hona chahiye)',
      ],
      practice: [
        'Temperature ko thanda/comfortable/garam classify karo',
        'Grade checker if-elif-else se banao',
      ],
    },
    deepDive: {
      overview: 'Python mein if conditions truthy/falsy evaluation use karti hain, ternary expression bhi hai.',
      steps: [
        'Falsy values: None, 0, "", [], {}, set()',
        'Ternary: value1 if condition else value2',
        'any()/all() se sequence truthiness check karo',
        'and/or/not se compound conditions banao',
      ],
      commonMistakes: [
        'Khali containers ke falsy hone ki jaankari na hona',
        'Conditions ko True/False se gerza compare karna',
      ],
      practice: [
        'Ternary expression se absolute value nikalo',
        'Alag-alag types ki truthy values test karo',
      ],
    },
  },
};

export default overlay;
