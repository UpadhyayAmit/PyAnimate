import type { LessonLocaleOverlay } from '../types';

const overlay: LessonLocaleOverlay = {
  prompt: '1-30 ke liye FizzBuzz implement karo. Extend karo: 7 ke multiples ke liye \'Bazz\' add karo.',
  hint: 'Pehle 3 aur 5 dono check karo (FizzBuzz), phir individually. 7 case similarly add karo.',
  explanation: {
    simple: {
      overview: 'Classic problem — 1 se 100 print karo, 3 ke multiple pe Fizz, 5 ke multiple pe Buzz, dono ke multiple pe FizzBuzz.',
      analogy: 'Jaise school mein ek game — agar 3 ka multiple ho toh "Fizz" bolo, 5 ka ho toh "Buzz".',
      steps: [
        '1 se n tak loop karo',
        '15 (3x5) ke multiple pe FizzBuzz — pehle check karo!',
        '3 ke multiple pe Fizz',
        '5 ke multiple pe Buzz',
        'Else number print karo',
      ],
      visual: `for i in range(1, 16):
    if i % 15 == 0: print("FizzBuzz")
    elif i % 3 == 0: print("Fizz")
    elif i % 5 == 0: print("Buzz")
    else: print(i)`,
      commonMistakes: [
        '15 ka check pehle nahi karna — warna sirf Fizz ya Buzz print hoga',
        'Off-by-one — range(1, n+1) use karo',
        '% operator ka use: x % 3 == 0',
      ],
      practice: [
        'FizzBuzz ko generalize karo arbitrary divisors ke liye',
        'FizzBuzz without if-else (dict approach) try karo',
      ],
    },
    deepDive: {
      overview: 'FizzBuzz interview mein common hai — string concatenation se elegant bhi ban sakta hai.',
      steps: [
        'String concat: result = "" + "Fizz" if 3 divides + "Buzz" if 5 divides',
        'Dictionary approach: {3:"Fizz", 5:"Buzz"} se scale easily',
        'Functional: "".join(["Fizz"*(i%3==0), "Buzz"*(i%5==0)]) or str(i)',
        'Generator se lazy FizzBuzz create karo',
      ],
      commonMistakes: [
        'Condition checking order matters — 15 pehle',
        'Concatenation approach mein Empty string case handle karo',
      ],
      practice: [
        'Any set of divisors ke liye FizzBuzz generalize karo',
        'FizzBuzz generator function banao',
      ],
    },
  },
};

export default overlay;
