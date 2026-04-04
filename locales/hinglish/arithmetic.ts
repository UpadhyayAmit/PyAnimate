import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: 'width=7 aur height=4 wale rectangle ka area aur perimeter calculate karo.',
  hint: 'Area = width * height. Perimeter = 2 * (width + height). Power ke liye ** use karo.',
  explanation: {
    simple: {
      overview: 'Python basic maths support karta hai bhai: jodna, ghatana, gunna, bhaagna, remainder, power — sab kuch.',
      analogy: 'Python ek smart calculator hai jo BODMAS rules follow karta hai automatically.',
      steps: [
        '+jodna, -ghatana',
        '*gunna, /bhaagna (hamesha float return karta hai)',
        '//floor division, %remainder, **power',
      ],
      visual: `10 + 3 = 13
10 / 3 = 3.333
10 // 3 = 3
10 % 3 = 1
2 ** 8 = 256`,
      commonMistakes: [
        'Bhool jaana ki / hamesha float return karta hai',
        'Negative numbers mein // floor ki taraf jaata hai',
        '% remainder hai bhai, percentage nahi',
      ],
      practice: [
        'math.pi se circle ka area calculate karo',
        '% se even/odd check karo',
      ],
    },
    deepDive: {
      overview: 'Python mein PEMDAS/BODMAS operator precedence hai aur integers arbitrary precision ke hain.',
      steps: [
        'Precedence: ** -> unary -> * / // % -> + -',
        'Floats IEEE 754 use karte hain, precision errors aa sakte hain',
        'divmod(a,b) ek saath (quotient, remainder) return karta hai',
        'High precision ke liye decimal.Decimal use karo',
      ],
      commonMistakes: [
        '0.1+0.2 != 0.3 — floating point ka chakkar hai yaar',
        '-2**2=-4 aur (-2)**2=4 mein fark hai',
      ],
      practice: [
        'divmod() aur math.fmod() test karo',
        'Financial calculations mein float vs Decimal compare karo',
      ],
    },
  },
};

export default overlay;
