import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'width=7 और height=4 वाले rectangle का area और perimeter निकालें।',
  hint: 'Area = width * height। Perimeter = 2 * (width + height)। Power के लिए ** use करें।',
  explanation: {
    simple: {
      overview: 'Python basic arithmetic operations support karta hai: jod, ghataav, gunakaara, bhaag, shesh, ghaata.',
      analogy: 'Python ek calculator ki tarah hai jo PEMDAS/BODMAS rules follow karta hai.',
      steps: [
        '+jod, -ghataav',
        '*gunakaar, /bhaag (hamesha float return karta hai)',
        '//floor division, %shesh, **ghaata',
      ],
      visual: `10 + 3 = 13
10 / 3 = 3.333
10 // 3 = 3
10 % 3 = 1
2 ** 8 = 256`,
      commonMistakes: [
        'Bhool jana ki / hamesha float return karta hai',
        'Negative numbers mein // floor ki taraf jaata hai',
        '% remainder hai, percentage nahi',
      ],
      practice: [
        'math.pi se circle ka area calculate karo',
        '% se even/odd check karo',
      ],
    },
    deepDive: {
      overview: 'Python mein PEMDAS operator precedence aur arbitrary precision integers.',
      steps: [
        'Precedence: ** → unary → * / // % → + -',
        'Floats IEEE 754 use karte hain, precision errors possible',
        'divmod(a,b) ek saath (quotient,remainder) return karta hai',
        'High precision ke liye decimal.Decimal use karo',
      ],
      commonMistakes: [
        '0.1+0.2!=0.3 ka floating point issue',
        '-2**2=-4 aur (-2)**2=4 ka fark',
      ],
      practice: [
        'divmod() aur math.fmod() test karo',
        'Financial calculations mein float aur Decimal compare karo',
      ],
    },
  },
};

export default overlay;
